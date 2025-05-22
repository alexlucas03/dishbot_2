import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    try {
        const response = await fetch('https://api.groupme.com/v3/bots/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "bot_id": "c9ed078f3de7c89547308a050a",
                "text": "dish bot 2"
            })
        });
    
        if (!response.ok) {
            throw new Error(`External API returned ${response.status}`);
        }
    
        let data = {};
        try {
            data = await response.json();
        } catch (e) {
            console.log('No JSON response from GroupMe API');
        }
    
        return NextResponse.json({ 
            success: true,
            data: data
        });
    
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: "Failed to post message" }, 
            { status: 500 }
        );
    }
}