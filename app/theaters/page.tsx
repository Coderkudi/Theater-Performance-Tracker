import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { TheaterList } from "@/components/theater-list"

export default function TheatersPage() {
  return (
    <div className="flex-1 space-y-4 p-6 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Theaters</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Theater
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Theater Locations</CardTitle>
          <CardDescription>Manage your theater venues and performance spaces</CardDescription>
        </CardHeader>
        <CardContent>
          <TheaterList />
        </CardContent>
      </Card>
    </div>
  )
}
