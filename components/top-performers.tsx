"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const topShows = [
  {
    id: 1,
    name: "Hamilton",
    revenue: 125000,
    percentOfTotal: 28,
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 2,
    name: "The Lion King",
    revenue: 98000,
    percentOfTotal: 22,
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 3,
    name: "Wicked",
    revenue: 87500,
    percentOfTotal: 19,
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 4,
    name: "The Phantom of the Opera",
    revenue: 76000,
    percentOfTotal: 17,
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: 5,
    name: "Les Misérables",
    revenue: 62000,
    percentOfTotal: 14,
    image: "/placeholder.svg?height=80&width=120",
  },
]

export function TopPerformers() {
  return (
    <div className="space-y-4">
      {topShows.map((show) => (
        <Card key={show.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center p-4">
              <div className="relative h-16 w-24 rounded overflow-hidden">
                <Image src={show.image || "/placeholder.svg"} alt={show.name} fill className="object-cover" />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{show.name}</h4>
                  <span className="text-sm text-muted-foreground">${show.revenue.toLocaleString()}</span>
                </div>
                <div className="mt-2">
                  <Progress value={show.percentOfTotal} className="h-2" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{show.percentOfTotal}% of total revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
