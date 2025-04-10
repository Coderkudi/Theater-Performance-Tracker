import { genAiModel } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
    const result = await genAiModel.generateContent([
        `Generate a list of upcoming theater shows. Each show should include the following details:
        id: A unique identifier for the show(integer).
        name: The name of the show(string).
        theater: The name of the theater where the show will be performed(string).
        date: The date of the show in the format 'Month Day, Year'(e.g., 'May 15, 2025').
        ticketsSold: The number of tickets sold for the show(integer).
        capacity: The total seating capacity of the theater(integer).
        status: The status of ticket sales, which can be one of the following: 'Sold Out', 'Almost Sold Out', or 'On Sale'.
        Provide at least 5 examples of shows with varying details.`
    ]);
    
    const jsonMatch = result.response.text().match(/\[[\s\S]*\]/);
    const jsonString = jsonMatch ? jsonMatch[0] : null;
    const jsonObject = JSON.parse(jsonString as string);
    
    return NextResponse.json(jsonObject)
}