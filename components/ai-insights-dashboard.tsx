"use client"

import { Badge } from "@/components/ui/badge"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, Users, DollarSign, Clock, Lightbulb } from "lucide-react"

// Mock AI insights that would normally come from Gemini
const insights = [
  {
    id: 1,
    type: "revenue",
    icon: DollarSign,
    title: "Pricing Optimization",
    description:
      "Our analysis shows that premium seats for 'Hamilton' could be priced 8% higher without affecting demand, potentially increasing revenue by $12,500 per month.",
    impact: "High",
  },
  {
    id: 2,
    type: "audience",
    icon: Users,
    title: "Audience Demographics",
    description:
      "Your audience for family shows skews 15% younger than industry average. Consider adding more matinee performances to capture this demographic.",
    impact: "Medium",
  },
  {
    id: 3,
    type: "operations",
    icon: Clock,
    title: "Staffing Efficiency",
    description:
      "Concession sales peak 30 minutes before showtime. Increasing staff during this window could reduce wait times by 40% and increase per-patron spending.",
    impact: "Medium",
  },
  {
    id: 4,
    type: "revenue",
    icon: TrendingUp,
    title: "Bundle Opportunity",
    description:
      "Creating a 'Dinner & Show' package with nearby restaurants could increase ticket sales by 12% for weekday performances based on similar theater data.",
    impact: "High",
  },
  {
    id: 5,
    type: "audience",
    icon: Lightbulb,
    title: "Content Recommendation",
    description:
      "Based on ticket sales and demographic data, adding more contemporary musicals to your lineup could attract 18% more patrons in the 25-34 age range.",
    impact: "High",
  },
  {
    id: 6,
    type: "operations",
    icon: AlertTriangle,
    title: "Maintenance Alert",
    description:
      "Historical data suggests the HVAC system at Grand Theater may require maintenance within 45 days. Scheduling service now could prevent disruptions.",
    impact: "Medium",
  },
]

export function AiInsightsDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {insights.map((insight) => (
        <Card key={insight.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div
                className={`rounded-full p-2 ${
                  insight.type === "revenue"
                    ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                    : insight.type === "audience"
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
                }`}
              >
                <insight.icon className="h-5 w-5" />
              </div>
              <Badge
                variant={
                  insight.impact === "High" ? "destructive" : insight.impact === "Medium" ? "default" : "outline"
                }
              >
                {insight.impact} Impact
              </Badge>
            </div>
            <CardTitle className="mt-2">{insight.title}</CardTitle>
            <CardDescription className="capitalize">{insight.type} Insight</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{insight.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
