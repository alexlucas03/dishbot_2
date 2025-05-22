import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const username = body.username;
        console.log(username)
        
        const thisUser = await prisma.people2.findFirst({
            where: { name: username}
        });

        const userTotalPoints = thisUser?.totalpoints;

        console.log(userTotalPoints)

        return NextResponse.json({ 
            success: true,
            userTotalPoints: userTotalPoints
        });   

    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}