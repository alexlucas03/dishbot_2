'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import AdminPanel from "./AdminPanel";
import AdminTable from "./AdminTable";
import AppointmentTable from "./AppointmentTable";
import UserTable from "./UserTable";
import ScheduleCalendar from "./ScheduleCalendar";
import '../globals.css';
import { Button } from "@/components/ui/button";
import { XIcon, PanelRightOpenIcon } from "lucide-react";
import { parseISO } from "date-fns";

export default function MenuPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [username, setUsername] = useState<string | undefined>(undefined);
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [updateTrigger, setUpdateTrigger] = useState<number>(0);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const userTableRef = useRef<HTMLDivElement>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);

    useEffect(() => {
        const usernameParam = searchParams.get("username");
        if (usernameParam) {
            setUsername(usernameParam);
            
            // Check if user is admin
            checkIfAdmin(usernameParam);
        }
    }, [searchParams]);
    
    const checkIfAdmin = async (username: string) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/check-admin', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username }),
            });
            
            if (response.ok) {
                const data = await response.json();
                setIsAdmin(data.isAdmin === true);
            } else {
                console.error('Failed to check admin status');
                setIsAdmin(false);
            }
        } catch (error) {
            console.error('Error checking admin status:', error);
            setIsAdmin(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userTableRef.current && !userTableRef.current.contains(event.target as Node)) {
                setSelectedRow(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
    async function fetchDates() {
        try {
            const res = await fetch('/api/get-date-range');
            const data = await res.json();
            if (data.success) {
                if (data.startDate) setStartDate(parseISO(data.startDate));
                if (data.endDate) setEndDate(parseISO(data.endDate));
            }
        } catch (err) {
            console.error("Failed to fetch date range:", err);
        }
    }

    fetchDates();
}, []);

    const triggerUpdate = () => setUpdateTrigger(prev => prev + 1);

    return (
        <div className="relative flex">
            {/* Main content */}
            <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'mr-[320px]' : ''}`}>
                <Card>
                    <CardContent className="appointmentCard space-x-6">
                        <ScheduleCalendar
                            date={date}
                            setDate={setDate}
                            onAvailabilitiesChange={() => {}}
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <div className="flex flex-col w-full items-end">
                            {!sidebarOpen && isAdmin && !isLoading && (
                                <Button
                                    variant="default"
                                    onClick={() => setSidebarOpen(true)}
                                    className="top-0 right-0 z-10 w-1/2 min-w-32"
                                >
                                    <PanelRightOpenIcon className="w-5 h-5 mr-1" />
                                    Admin Panel
                                </Button>
                            )}
                            <AppointmentTable 
                                date={date} 
                                username={username || ""} 
                                updateTrigger={updateTrigger}
                                onAppointmentClaimed={triggerUpdate}
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </div>
                    </CardContent>
                </Card>

                <div ref={userTableRef}>
                    {isAdmin ? (
                        <AdminTable />
                    ) : (
                        <UserTable 
                            username={username} 
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                            updateTrigger={updateTrigger}
                            onAppointmentRemoved={triggerUpdate}
                        />
                    )}
                </div>
            </div>

            {/* Sidebar - only render if user is admin */}
            {isAdmin && (
                <div className={`fixed top-0 right-0 h-full bg-white border-l shadow-md w-[320px] transform transition-transform duration-300 z-50 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center px-4 py-2 border-b">
                        <h2 className="text-lg font-semibold">Admin Panel</h2>
                        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                            <XIcon className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="overflow-y-auto h-[calc(100%-48px)] p-4">
                        <AdminPanel />
                    </div>
                </div>
            )}
        </div>
    );
}