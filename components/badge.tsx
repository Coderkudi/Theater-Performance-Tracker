import { Badge } from "@/components/ui/badge"

export function BadgeComponent() {
  const insight = { impact: "High" } // Declared insight variable

  return (
    <Badge variant={insight.impact === "High" ? "destructive" : insight.impact === "Medium" ? "default" : "outline"}>
      {insight.impact} Impact
    </Badge>
  )
}
