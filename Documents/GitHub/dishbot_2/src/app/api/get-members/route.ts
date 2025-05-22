import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

const GROUPME_ACCESS_TOKEN = process.env.GROUPME_ACCESS_TOKEN;

interface GroupMember {
    user_id: string;
    nickname: string;
    muted: boolean;
    id: string;
    name: string;
}

interface Group {
    id: string;
    name: string;
    members: GroupMember[];
}

export async function GET() {
    try {
        const response = await fetch(`https://api.groupme.com/v3/groups?token=${GROUPME_ACCESS_TOKEN}`);

        if (!response.ok) {
            throw new Error("Failed to fetch groups");
        }

        const data = await response.json();
        const groups: Group[] = data.response;

        const targetGroup = groups.find((group: Group) =>
            group.name.toLowerCase().includes("dish")
        );

        if (!targetGroup) {
            return NextResponse.json({ error: "Bot's group not found" }, { status: 404 });
        }

        const simplifiedMembers = targetGroup.members.map(member => ({
            nickname: member.nickname,
            user_id: member.user_id
        }));

        return NextResponse.json({
            success: true,
            members: simplifiedMembers
        });

    } catch (error) {
        console.error("GroupMe fetch error:", error);
        return NextResponse.json({ error: "Failed to fetch group members" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    const { people } = await request.json();

    try {
        await prisma.$transaction(
            people.map((person: any) =>
                prisma.people2.upsert({
                    where: { groupmeid: person.groupmeid },
                    update: {
                        name: person.name,
                        pickorder: person.pickorder,
                        totalpoints: person.totalpoints
                    },
                    create: person
                })
            )
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error saving to DB:", error);
        return NextResponse.json({ error: "Insert failed" }, { status: 500 });
    }
}
