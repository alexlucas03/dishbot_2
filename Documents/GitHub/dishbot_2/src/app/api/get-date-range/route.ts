import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function formatDateOnly(date: Date | null): string | null {
    if (!date) return null;
    return date.toISOString().split("T")[0]; // Extract only the date part
}

export async function GET() {
    try {
        const startDateRecord = await prisma.startend2.findUnique({ where: { id: 1 } });
        const endDateRecord = await prisma.startend2.findUnique({ where: { id: 2 } });

        const startDate = formatDateOnly(startDateRecord?.date || null);
        const endDate = formatDateOnly(endDateRecord?.date || null);

        return NextResponse.json({
            success: true,
            startDate,
            endDate
        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({
            success: false,
            error: "Database error"
        }, { status: 500 });
    }
}
