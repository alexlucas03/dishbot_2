import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { format } from "date-fns";

const GROUPME_ACCESS_TOKEN = process.env.GROUPME_ACCESS_TOKEN!;
const GROUPME_GROUP_ID = process.env.GROUPME_GROUP_ID!;

const monthMap: Record<number, any> = {
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
    12: prisma.december
};

export async function GET() {
    try {
        const today = new Date();
        const year = today.getFullYear().toString();
        const month = today.getMonth() + 1;

        const now = new Date();
        now.setHours(now.getHours() - 8);
        const day = now.getDate().toString().padStart(2, "0");

        const model = monthMap[month];
        if (!model) throw new Error("Invalid month model");

        const dishes = await model.findMany({
            where: { year, day }
        });

        const people = await prisma.people2.findMany();

        const ownerMap = new Map(
            people.map((p: { username: any; groupmeid: any; }) => [p.username, p.groupmeid])
        );

        const formatted = dishes.map((dish: { owner: string; type: any; }) => {
            const groupmeId = ownerMap.get(dish.owner);
            const mention = groupmeId ? `${dish.owner}` : "(unassigned)";
            return `${dish.type}: ${mention}`;
        });

        const groupmeIds = dishes
            .map((dish: { owner: string }) => ownerMap.get(dish.owner))
            .filter((id: any): id is string => Boolean(id));

        const indices = groupmeIds.map((_: any, i: number) => [i, i + 1] as [number, number]);

        const messageText = `Today's Dishes (${format(today, "MMMM do, yyyy")}):\n` + formatted.join("\n");

        const messagePayload: any = {
            text: messageText
        };

        if (indices.length > 0) {
            messagePayload.attachments = [
                {
                    type: "mentions",
                    user_ids: groupmeIds,
                    indices: indices
                }
            ];
        }

        const response = await fetch(`https://api.groupme.com/v3/groups/${GROUPME_GROUP_ID}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Access-Token": GROUPME_ACCESS_TOKEN
            },
            body: JSON.stringify({ message: messagePayload })
        });

        if (!response.ok) throw new Error("Failed to send message");

        return NextResponse.json({ success: true, message: messageText });

    } catch (error) {
        console.error("Error sending today's dishes:", error);
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}