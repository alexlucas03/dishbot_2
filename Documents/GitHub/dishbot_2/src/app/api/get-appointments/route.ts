import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { month, day, year } = body as { month: string, day: string, year: string };

        if (!month || !day || !year) {
            return NextResponse.json({ 
                success: false,
                error: "Missing required parameters"
            }, { status: 400 });
        }

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
            console.error(`Invalid month provided: ${month}`);
            return NextResponse.json({ 
                success: false,
                error: "Invalid month provided" 
            }, { status: 400 });
        }

        console.log(`Searching for appointments on ${year}-${month}-${day}`);

        const [dishInstances, people] = await Promise.all([
            model.findMany({
                where: { day, year }
            }),
            prisma.people2.findMany()
        ]);

        const usernameToName = new Map(
            people.map(p => [p.username, p.name])
        );

        console.log(`Found ${dishInstances.length} appointments`);

        return NextResponse.json({ 
            success: true,
            dishInstances: dishInstances.map((dish: any) => ({
                type: dish.type,
                owner: usernameToName.get(dish.owner) || "(unknown)",
                id: dish.id
            }))
        });        
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ 
            success: false,
            error: "Database error" 
        }, { status: 500 });
    }
}
