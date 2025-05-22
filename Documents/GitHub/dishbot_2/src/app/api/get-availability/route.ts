import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

// Takes month, optional startDate and endDate, returns availability map
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const month = body.month as string;
        const startDate = body.startDate as number | undefined;
        const endDate = body.endDate as number | undefined;

        const availabilities: Record<string, number> = {};

        const modelMap: Record<string, any> = {
            "1": prisma.january,
            "2": prisma.february,
            "3": prisma.march,
            "4": prisma.april,
            "5": prisma.may,
            "6": prisma.june,
            "7": prisma.july,
            "8": prisma.august,
            "9": prisma.september,
            "10": prisma.october,
            "11": prisma.november,
            "12": prisma.december,
        };

        const model = modelMap[month];
        if (!model) {
            return NextResponse.json({ 
                success: false,
                error: "Invalid month provided"
            }, { status: 400 });
        }

        const dishInstances = await model.findMany();
        const dayCounts: Record<string, number[]> = {};

        dishInstances.forEach((dish: any) => {
            const day = dish.day;
            const owner = dish.owner;

            if (!dayCounts[day]) {
                dayCounts[day] = [0, 0];
            }

            dayCounts[day][0] += 1;

            if (owner !== 'null' && owner !== '') {
                dayCounts[day][1] += 1;
            }
        });

        // Evaluate availability
        Object.keys(dayCounts).forEach((dayStr: string) => {
            const day = parseInt(dayStr, 10);

            if ((startDate && day <= startDate) || (endDate && day > endDate + 1)) {
                availabilities[dayStr] = -1;
            } else if (dayCounts[dayStr][0] === dayCounts[dayStr][1]) {
                availabilities[dayStr] = 2; // full
            } else if (dayCounts[dayStr][1] !== 0) {
                availabilities[dayStr] = 1; // partial
            } else {
                availabilities[dayStr] = 0; // empty
            }
        });

        // Handle days with no data but outside the range
        for (let d = 1; d <= 31; d++) {
            const dStr = d.toString();
            if (!availabilities.hasOwnProperty(dStr)) {
                if ((startDate && d < startDate) || (endDate && d > endDate)) {
                    availabilities[dStr] = -1;
                }
            }
        }

        console.log(availabilities)

        return NextResponse.json({ 
            success: true,
            availabilities
        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ 
            success: false, 
            error: "Failed to process request" 
        }, { status: 500 });
    }
}
