"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const upcomingShows = [
  {
    id: 1,
    name: "Hamilton",
    theater: "Grand Theater",
    date: "May 15, 2025",
    ticketsSold: 450,
    capacity: 500,
    status: "Almost Sold Out",
  },
  {
    id: 2,
    name: "The Phantom of the Opera",
    theater: "Royal Playhouse",
    date: "May 18, 2025",
    ticketsSold: 380,
    capacity: 600,
    status: "On Sale",
  },
  {
    id: 3,
    name: "Les Misérables",
    theater: "City Arts Center",
    date: "May 22, 2025",
    ticketsSold: 290,
    capacity: 400,
    status: "On Sale",
  },
  {
    id: 4,
    name: "Wicked",
    theater: "Grand Theater",
    date: "May 25, 2025",
    ticketsSold: 500,
    capacity: 500,
    status: "Sold Out",
  },
  {
    id: 5,
    name: "The Lion King",
    theater: "Royal Playhouse",
    date: "May 30, 2025",
    ticketsSold: 420,
    capacity: 600,
    status: "On Sale",
  },
]

export function UpcomingShows() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Show</TableHead>
          <TableHead>Theater</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingShows.map((show) => (
          <TableRow key={show.id}>
            <TableCell className="font-medium">{show.name}</TableCell>
            <TableCell>{show.theater}</TableCell>
            <TableCell>{show.date}</TableCell>
            <TableCell>{`${show.ticketsSold}/${show.capacity}`}</TableCell>
            <TableCell>
              <Badge
                variant={
                  show.status === "Sold Out" ? "destructive" : show.status === "Almost Sold Out" ? "warning" : "default"
                }
              >
                {show.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
