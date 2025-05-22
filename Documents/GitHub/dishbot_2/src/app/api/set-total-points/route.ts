import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { eachDayOfInterval, isWeekend, isSunday, parseISO } from "date-fns";

export async function POST(req: NextRequest) {
    const { startDate, endDate } = await req.json();

    try {
        const start = parseISO(startDate);
        const end = parseISO(endDate);

        const days = eachDayOfInterval({ start, end });

        // Calculate total points based on day type
        let totalPoints = 0;
        for (const day of days) {
            const dayNum = day.getDay(); // 0 = Sun, 6 = Sat
            if (dayNum === 0) {
                totalPoints += 4;
            } else if (dayNum >= 1 && dayNum <= 5) {
                totalPoints += 5;
            }
            // Saturday (6) gives 0 points
        }

        // Get all members
        const people = await prisma.people2.findMany();
        
        // Separate admins and non-admins
        const admins = people.filter(p => p.admin);
        const nonAdmins = people.filter(p => !p.admin).sort(
            (a, b) => parseInt(a.pickorder) - parseInt(b.pickorder)
        );

        console.log(`Found ${admins.length} admins and ${nonAdmins.length} non-admins`);

        if (nonAdmins.length === 0) {
            return NextResponse.json({ error: "No non-admin members to distribute points to." }, { status: 400 });
        }

        // Calculate points for non-admins
        const basePoints = Math.floor(totalPoints / nonAdmins.length);
        let remainder = totalPoints % nonAdmins.length;

        // Create update operations for all users
        const updates = [];
        
        // First, set all admin users to 0 points
        for (const admin of admins) {
            updates.push(
                prisma.people2.update({
                    where: { groupmeid: admin.groupmeid },
                    data: { totalpoints: "0" }
                })
            );
        }

        // Distribute points to non-admins starting from the bottom of the pick order
        const reversed = [...nonAdmins].reverse();
        for (const person of reversed) {
            const extra = remainder > 0 ? 1 : 0;
            if (remainder > 0) remainder--;

            updates.push(
                prisma.people2.update({
                    where: { groupmeid: person.groupmeid },
                    data: { totalpoints: (basePoints + extra).toString() }
                })
            );
        }

        // Execute all updates in a transaction
        await prisma.$transaction(updates);

        return NextResponse.json({ 
            success: true,
            message: `Set ${admins.length} admins to 0 points and distributed ${totalPoints} points among ${nonAdmins.length} non-admins`
        });
    } catch (error) {
        console.error("Error setting total points:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}