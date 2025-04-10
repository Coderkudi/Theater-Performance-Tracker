"use client"

import { useState } from "react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Calendar } from "lucide-react"

const shows = [
  {
    id: 1,
    name: "Hamilton",
    theater: "Grand Theater",
    director: "Thomas Johnson",
    startDate: "Apr 15, 2025",
    endDate: "Jun 30, 2025",
    status: "Running",
    image: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 2,
    name: "The Lion King",
    theater: "Royal Playhouse",
    director: "Sarah Williams",
    startDate: "Apr 20, 2025",
    endDate: "Jul 15, 2025",
    status: "Running",
    image: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 3,
    name: "Wicked",
    theater: "Grand Theater",
    director: "Michael Brown",
    startDate: "May 5, 2025",
    endDate: "Aug 10, 2025",
    status: "Running",
    image: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 4,
    name: "The Phantom of the Opera",
    theater: "City Arts Center",
    director: "Elizabeth Chen",
    startDate: "May 12, 2025",
    endDate: "Jul 25, 2025",
    status: "Running",
    image: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 5,
    name: "Les Misérables",
    theater: "Royal Playhouse",
    director: "Robert Davis",
    startDate: "Jun 1, 2025",
    endDate: "Aug 15, 2025",
    status: "Upcoming",
    image: "/placeholder.svg?height=60&width=100",
  },
]

export function ShowList() {
  const [showData, setShowData] = useState(shows)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Show</TableHead>
          <TableHead>Theater</TableHead>
          <TableHead>Director</TableHead>
          <TableHead>Run Dates</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {showData.map((show) => (
          <TableRow key={show.id}>
            <TableCell>
              <div className="flex items-center space-x-3">
                <div className="relative h-12 w-20 rounded overflow-hidden">
                  <Image src={show.image || "/placeholder.svg"} alt={show.name} fill className="object-cover" />
                </div>
                <span className="font-medium">{show.name}</span>
              </div>
            </TableCell>
            <TableCell>{show.theater}</TableCell>
            <TableCell>{show.director}</TableCell>
            <TableCell>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>
                    {show.startDate} - {show.endDate}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={show.status === "Running" ? "default" : "secondary"}>{show.status}</Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
