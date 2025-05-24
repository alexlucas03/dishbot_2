import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const username = body.username;
        console.log('Looking for username:', username);
        
        const thisUser = await prisma.people2.findFirst({
            where: { username: username }
        });

        console.log('Found user:', thisUser);
        
        if (!thisUser) {
            console.log('No user found with username:', username);
            return NextResponse.json({ 
                success: false,
                error: "User not found",
                userTotalPoints: 0
            });
        }

        const userTotalPoints = parseInt(thisUser.totalpoints) || 0;
        console.log('User total points (converted):', userTotalPoints);

        return NextResponse.json({ 
            success: true,
            userTotalPoints: userTotalPoints
        });   

    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}