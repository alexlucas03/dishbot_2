import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { format, parseISO } from "date-fns";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const username = body.username;
        const type = body.type;
        
        // Parse the date string into a Date object
        const date = parseISO(body.date);
        
        // Format the day and get the month number
        const day = format(date, "d");
        const month = parseInt(format(date, "M")); // Use "M" for month number without leading zero

        const modelMap: Record<string, any> = {
            1: prisma.january,
            2: prisma.february,
            3: prisma.march,
            4: prisma.april,
            5: prisma.may,
            6: prisma.june,
            7: prisma.july,
            8: prisma.august,
            9: prisma.september,
            10: prisma.october,
            11: prisma.november,
            12: prisma.december,
        };

        // Check if model exists for this month
        if (!modelMap[month]) {
            return NextResponse.json({ 
                success: false, 
                error: `Invalid month: ${month}` 
            }, { status: 400 });
        }

        const model = modelMap[month];

        // Find the record
        const record = await model.findFirst({
            where: {
                day: day,
                type: type
            }
        });

        // Check if record exists
        if (!record) {
            return NextResponse.json({ 
                success: false, 
                error: `No appointment found for day ${day} and type ${type}` 
            }, { status: 404 });
        }

        // Update the record
        await model.update({
            where: {
                id: record.id
            },
            data: {
                owner: username
            },
        });

        return NextResponse.json({
            success: true
        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ 
            success: false,
            error: error instanceof Error ? error.message : "Database error" 
        }, { status: 500 });
    }
}