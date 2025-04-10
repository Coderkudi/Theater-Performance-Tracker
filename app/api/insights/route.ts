import { NextResponse } from "next/server"

// Mock AI insights data that would normally come from Gemini
const insights = [
  {
    id: 1,
    type: "revenue",
    icon: "dollar-sign",
    title: "Pricing Optimization",
    description:
      "Our analysis shows that premium seats for 'Hamilton' could be priced 8% higher without affecting demand, potentially increasing revenue by $12,500 per month.",
    impact: "High",
  },
  {
    id: 2,
    type: "audience",
    icon: "users",
    title: "Audience Demographics",
    description:
      "Your audience for family shows skews 15% younger than industry average. Consider adding more matinee performances to capture this demographic.",
    impact: "Medium",
  },
  {
    id: 3,
    type: "operations",
    icon: "clock",
    title: "Staffing Efficiency",
    description:
      "Concession sales peak 30 minutes before showtime. Increasing staff during this window could reduce wait times by 40% and increase per-patron spending.",
    impact: "Medium",
  },
  {
    id: 4,
    type: "revenue",
    icon: "trending-up",
    title: "Bundle Opportunity",
    description:
      "Creating a 'Dinner & Show' package with nearby restaurants could increase ticket sales by 12% for weekday performances based on similar theater data.",
    impact: "High",
  },
  {
    id: 5,
    type: "audience",
    icon: "lightbulb",
    title: "Content Recommendation",
    description:
      "Based on ticket sales and demographic data, adding more contemporary musicals to your lineup could attract 18% more patrons in the 25-34 age range.",
    impact: "High",
  },
  {
    id: 6,
    type: "operations",
    icon: "alert-triangle",
    title: "Maintenance Alert",
    description:
      "Historical data suggests the HVAC system at Grand Theater may require maintenance within 45 days. Scheduling service now could prevent disruptions.",
    impact: "Medium",
  },
]

export async function GET(request: Request) {
  // Get the URL object
  const { searchParams } = new URL(request.url)

  // Get filter parameter if it exists
  const type = searchParams.get("type")

  // Filter insights if type parameter is provided
  const filteredInsights = type ? insights.filter((insight) => insight.type === type) : insights

  return NextResponse.json(filteredInsights)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real app, this would send the query to Gemini AI
    // and return AI-generated insights

    // Mock response for demonstration
    return NextResponse.json({
      query: body.query,
      insights: [
        {
          id: Math.floor(Math.random() * 1000),
          type: "custom",
          icon: "sparkles",
          title: "Custom Insight",
          description: `Based on your query: "${body.query}", we recommend focusing on weekend performances to maximize revenue.`,
          impact: "Medium",
        },
      ],
    })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
