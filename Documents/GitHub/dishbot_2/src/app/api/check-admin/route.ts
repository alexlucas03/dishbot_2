import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const { username } = await request.json();
        
        if (!username) {
            return NextResponse.json({ error: "Username is required" }, { status: 400 });
        }
        
        // Find the user in the database
        const user = await prisma.people2.findFirst({
            where: { username: username }
        });
        
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 410 });
        }
        
        // Return whether the user is an admin
        return NextResponse.json({ isAdmin: user.admin === true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}