"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, TrendingUp, AlertTriangle, Calendar } from "lucide-react"

// Mock AI insights that would normally come from Gemini
const insights = [
  {
    id: 1,
    type: "opportunity",
    icon: TrendingUp,
    title: "Revenue Opportunity",
    description:
      "Based on historical data, increasing ticket prices for 'Hamilton' by 5% could generate an additional $6,250 in revenue without impacting attendance.",
  },
  {
    id: 2,
    type: "alert",
    icon: AlertTriangle,
    title: "Attendance Alert",
    description:
      "The 'Les Misérables' show is trending 15% below expected ticket sales. Consider a targeted marketing campaign to boost attendance.",
  },
  {
    id: 3,
    type: "recommendation",
    icon: Calendar,
    title: "Scheduling Recommendation",
    description:
      "Adding a Sunday matinee performance of 'The Lion King' could increase weekly revenue by approximately $12,000 based on current demand patterns.",
  },
  {
    id: 4,
    type: "insight",
    icon: Sparkles,
    title: "Audience Insight",
    description:
      "Your family-friendly shows are performing 22% better than adult-oriented productions. Consider adding more family content to your upcoming season.",
  },
]

export function AiInsights() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {insights.map((insight) => (
        <Card key={insight.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div
                className={`rounded-full p-2 mr-4 ${
                  insight.type === "opportunity"
                    ? "bg-green-100 text-green-600"
                    : insight.type === "alert"
                      ? "bg-red-100 text-red-600"
                      : insight.type === "recommendation"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-purple-100 text-purple-600"
                }`}
              >
                <insight.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
