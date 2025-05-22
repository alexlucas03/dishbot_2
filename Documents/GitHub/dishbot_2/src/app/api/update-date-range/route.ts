import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { startDate, endDate } = body;

        if (!startDate || !endDate) {
            return NextResponse.json({
                success: false,
                error: "Both start and end dates are required"
            }, { status: 400 });
        }

        // Update or create the start date record (id: 1)
        await prisma.startend2.upsert({
            where: { id: 1 },
            update: { date: new Date(startDate) },
            create: { id: 1, date: new Date(startDate) }
        });

        // Update or create the end date record (id: 2)
        await prisma.startend2.upsert({
            where: { id: 2 },
            update: { date: new Date(endDate) },
            create: { id: 2, date: new Date(endDate) }
        });

        return NextResponse.json({
            success: true,
            message: "Date range updated successfully"
        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ 
            success: false,
            error: "Database error" 
        }, { status: 500 });
    }
}