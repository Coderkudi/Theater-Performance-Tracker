import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AiInsightsDashboard } from "@/components/ai-insights-dashboard"

export default function InsightsPage() {
  return (
    <div className="flex-1 space-y-4 p-6 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">AI Insights</h2>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-4">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>AI-Powered Theater Insights</CardTitle>
            <CardDescription>Actionable recommendations based on your theater data</CardDescription>
          </CardHeader>
          <CardContent>
            <AiInsightsDashboard />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
