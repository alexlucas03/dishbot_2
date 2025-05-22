'use client'

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

interface UserPoints {
    name: string;
    totalPoints: number;
    earnedPoints: number;
    differential: number;
    pickOrder: number;
}

export default function AdminTable() {
    const [users, setUsers] = useState<UserPoints[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchAllUsersPoints();
    }, []);

    const fetchAllUsersPoints = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/get-all-users-points');
            
            if (response.ok) {
                const data = await response.json();
                if (data.success && data.users) {
                    setUsers(data.users);
                } else {
                    console.error('Failed to fetch users data:', data.error);
                }
            } else {
                console.error('Failed to fetch users data');
            }
        } catch (error) {
            console.error('Error fetching users data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Card className="mb-4 p-4">
                <CardTitle className="text-center">
                    User Points Overview
                </CardTitle>
            </Card>
            <Table>
                <TableCaption>Points Summary (Ordered by Pick Order)</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Points Left</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={2} className="text-center">Loading...</TableCell>
                        </TableRow>
                    ) : users.length > 0 ? (
                        users.map((user, index) => (
                            <TableRow key={index} className={user.differential > 0 ? "bg-red-100" : user.differential < 0 ? "bg-yellow-100" : "bg-green-100"}>
                                <TableCell className="font-medium">{user.name}</TableCell>
                                <TableCell className={`font-bold ${user.differential > 0 ? "text-red-600" : user.differential < 0 ? "text-yellow-600" : "text-green-600"}`}>
                                    {user.differential > 0 ? `+${user.differential}` : user.differential}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={2} className="text-center">No users found</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}