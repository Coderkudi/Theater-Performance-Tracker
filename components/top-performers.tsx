"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

interface TopShows {
    id: number
    name: string
    revenue: number
    percentOfTotal: number
    image: string
}


export function TopPerformers() {
    const [topShows, setTopShows] = useState<TopShows[]>([])
    const fetchData = async () => {
        const responseFromAi = await fetch('/api/getTopShows');
        const jsonData = await responseFromAi.json();
        setTopShows(jsonData);
    }
    useEffect(() => {
        if (topShows.length === 0) {
            fetchData();
        }
    }
        , [topShows]);
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
