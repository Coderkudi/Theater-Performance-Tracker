import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { ShowList } from "@/components/show-list"

export default function ShowsPage() {
  return (
    <div className="flex-1 space-y-4 p-6 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Shows</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Show
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current & Upcoming Shows</CardTitle>
          <CardDescription>Manage your productions and performances</CardDescription>
        </CardHeader>
        <CardContent>
          <ShowList />
        </CardContent>
      </Card>
    </div>
  )
}
