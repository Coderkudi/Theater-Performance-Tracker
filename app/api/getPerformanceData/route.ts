import { genAiModel } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {

    const result = await genAiModel.generateContent([
        "Generate a JSON array of objects with the following keys: month, tickets(output Number. number of ticket sold), occupancy(output <=TicketSold). The values should be realistic for a theater performance.",
      
    ]);
    
    const jsonMatch = result.response.text().match(/\[[\s\S]*\]/);
    const jsonString = jsonMatch ? jsonMatch[0] : null;
    const jsonObject = JSON.parse(jsonString as string);
    
    return NextResponse.json(jsonObject)  
    
  
    
}