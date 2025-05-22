import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { format } from "date-fns"


export default function UserTable({ 
    username, 
    selectedRow, 
    setSelectedRow,
    updateTrigger,
    onAppointmentRemoved
}: { 
    username: string | undefined;
    selectedRow: number | null;
    setSelectedRow: (index: number | null) => void;
    updateTrigger: number;
    onAppointmentRemoved: () => void;
}) {

    const [dishes, setDishes] = useState<{ date: string; type: string }[]>([]);
    const [userPoints, setUserPoints] = useState<number>(0);
    const [userTotalPoints, setUserTotalPoints] = useState<number>(0);
    const [overUnder, setOverUnder] = useState<boolean>(true);
    const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

    async function getUserDishes() {
        try {
            const response = await fetch('/api/get-user-dishes', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username: username }),
            });
    
            if (response.ok) {
                const data = await response.json();
                setDishes(data.dishes || []);
            } else {
                console.error('Failed to fetch dishes');
            }
        } catch (error) {
            console.error('Error fetching dishes:', error);
        }
    }

    async function getUserTotalPoints() {
        try {
            const response = await fetch('/api/get-user-total-points', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username: username }),
            });

            if (response.ok) {
                const data = await response.json();
                setUserTotalPoints(Number(data.userTotalPoints) || 0);
            } else {
                console.error('Failed to fetch total points');
            }
        } catch (error) {
            console.error('Error fetching total points:', error);
        }
    }

    useEffect(() => {
        if (username) {
            getUserDishes();
            getUserTotalPoints();
        }
    }, [username, refreshTrigger, updateTrigger]);

    useEffect(() => {
        if (dishes.length > 0) {
            calculatePoints();
        }
    }, [dishes]);

    useEffect(() => {
        if (userPoints === userTotalPoints) {
            setOverUnder(false);
        } else {
            setOverUnder(true);
        }
    }, [userPoints, userTotalPoints]);
    
    async function calculatePoints() {
        let points = 0;
    
        for (const dish of dishes) {
            const dishDay = format(new Date(dish.date), 'EEEE');
            if (dishDay !== 'Sunday') {
                if (dish.type === 'dinner' || dish.type === 'lunch') {
                    points += 2;
                } else {
                    points += 1;
                }
            } else {
                if (dish.type === 'dinner') {
                    points += 3;
                } else {
                    points += 1;
                }
            }
        }
    
        setUserPoints(points);
    }

    async function removeAppointment() {
        if (selectedRow === null) return;
    
        const { date, type } = dishes[selectedRow];
    
        try {
            const response = await fetch('/api/remove-appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ date, type }),
            });
    
            if (response.ok) {
                setRefreshTrigger(prev => prev + 1);
                setSelectedRow(null);
                onAppointmentRemoved();
            } else {
                console.error('Failed to remove appointment');
            }
        } catch (error) {
            console.error('Error removing appointment:', error);
        }
    }
    
    const handleRowClick = (index: number) => {
        if (selectedRow === index) {
            removeAppointment();
        } else {
            setSelectedRow(index);
        }
    };

    return(
        <div>
            <Card className={overUnder ? "bg-red-500" : "bg-green-500"}>
                <CardTitle className="text-center">
                    {userPoints} / {userTotalPoints}
                </CardTitle>
            </Card>
            <Table>
                <TableCaption>{username}</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dishes.length > 0 ? (
                        dishes.map((item, index) => (
                            <TableRow 
                                key={index} 
                                className={selectedRow === index ? "bg-red-500 hover:bg-red-600" : ""}
                                onClick={() => handleRowClick(index)}
                                style={{ cursor: "pointer" }}
                            >
                                <TableCell className="font-medium">{format(new Date(item.date), "PPP")}</TableCell>
                                <TableCell>{item.type}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={2}>No data loaded</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}