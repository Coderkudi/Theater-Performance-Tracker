"use client"

import { useState } from "react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, MapPin } from "lucide-react"

const theaters = [
  {
    id: 1,
    name: "Grand Theater",
    location: "123 Main St, Downtown",
    capacity: 500,
    activeShows: 3,
    status: "Active",
    image: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 2,
    name: "Royal Playhouse",
    location: "456 Park Ave, Midtown",
    capacity: 600,
    activeShows: 2,
    status: "Active",
    image: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 3,
    name: "City Arts Center",
    location: "789 Broadway, Arts District",
    capacity: 400,
    activeShows: 2,
    status: "Active",
    image: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 4,
    name: "Riverside Theater",
    location: "321 River Rd, Westside",
    capacity: 350,
    activeShows: 1,
    status: "Active",
    image: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 5,
    name: "Historic Opera House",
    location: "555 Heritage Ln, Old Town",
    capacity: 450,
    activeShows: 0,
    status: "Under Renovation",
    image: "/placeholder.svg?height=60&width=100",
  },
]

export function TheaterList() {
  const [theaterData, setTheaterData] = useState(theaters)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Theater</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Active Shows</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {theaterData.map((theater) => (
          <TableRow key={theater.id}>
            <TableCell>
              <div className="flex items-center space-x-3">
                <div className="relative h-12 w-20 rounded overflow-hidden">
                  <Image src={theater.image || "/placeholder.svg"} alt={theater.name} fill className="object-cover" />
                </div>
                <span className="font-medium">{theater.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                {theater.location}
              </div>
            </TableCell>
            <TableCell>{theater.capacity} seats</TableCell>
            <TableCell>{theater.activeShows}</TableCell>
            <TableCell>
              <Badge variant={theater.status === "Active" ? "default" : "secondary"}>{theater.status}</Badge>
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
