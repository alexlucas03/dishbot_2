import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {username, password} = body;

        const user = await prisma.people2.findUnique({
            where: { name: username }
        });

        return NextResponse.json({ 
            success: true,
            user: {
                username: user?.name
            }
        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        // Debug information
        console.log("GET request received");
        console.log("Prisma object:", prisma ? "defined" : "undefined");
        
        if (!prisma) {
            throw new Error("Prisma client is not initialized");
        }
        
        // Check if person model exists on prisma
        console.log("Available models:", Object.keys(prisma));
        
        const users = await prisma.people2.findMany({
            select: {
                name: true,
            }
        });

        return NextResponse.json(users);
    } catch (error) {
        console.error("API error:", error);
        // Return more detailed error information
        return NextResponse.json({ 
            error: error instanceof Error ? error.message : "Database error",
            stack: error instanceof Error ? error.stack : undefined,
        }, { status: 500 });
    }
}