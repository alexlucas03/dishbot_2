import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { format, getMonth, getDate, getYear } from "date-fns"
import { useState, useEffect } from "react";

export default function AppointmentTable({ 
    date, 
    username, 
    updateTrigger,
    onAppointmentClaimed,
    startDate,
    endDate
}: { 
    date: Date | undefined;
    username: string;
    updateTrigger: number;
    onAppointmentClaimed: () => void;
    startDate: Date | undefined;
    endDate: Date | undefined;
}) {

    const [appointments, setAppointments] = useState<{ type: string; owner: string }[]>([]);
    const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

    async function handleAppointments() {
        if (!date) {
            console.error("No date selected!");
            return;
        }
    
        const day = getDate(date);
        const month = getMonth(date);
        const year = getYear(date);
    
        try {
            const response = await fetch('/api/get-appointments', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({day: String(day), month: String(month + 1), year: String(year)}),
            });

            if (response.ok) {
                const data = await response.json();
                setAppointments(data.dishInstances || []);
            } else {
                console.error('Failed to fetch appointments');
            }
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    }

    function isClaimable(date: Date | undefined): boolean {
        if (!date || !startDate || !endDate) return false;
        return date >= startDate && date <= endDate;
    }

    async function handleClaim(type: string) {
        if (!date || !username) {
            console.error("Missing date or username for claim!");
            return;
        }

        try {
            const response = await fetch('/api/claim-appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username, 
                    date: format(date, "yyyy-MM-dd"), 
                    type 
                }),
            });
    
            if (response.ok) {
                setRefreshTrigger(prev => prev + 1);                
                onAppointmentClaimed();
            } else {
                console.error('Failed to claim appointment');
            }
        } catch (error) {
            console.error('Error claiming appointment:', error);
        }
    }

    useEffect(() => {
        if (date) {
            handleAppointments();
        }
    }, [date, refreshTrigger, updateTrigger]);

    return(
        <Table>
            <TableCaption>{date ? format(date, "PPP") : <span>Pick a date</span>}</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Owner</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {appointments.length > 0 ? (
                    appointments.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.type}</TableCell>
                            <TableCell>
                                {
                                    item.owner !== 'null' 
                                    ? item.owner
                                    : isClaimable(date) ? (
                                        <Button 
                                            className="w-full bg-green-500 hover:bg-green-600 text-black" 
                                            onClick={() => handleClaim(item.type)}
                                        >
                                            Claim
                                        </Button>
                                    ) : (
                                        <span className="text-muted-foreground italic">Not claimable</span>
                                    )
                                }
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={2}>No data loaded</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}