"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
interface Shows {
    id: number;
    name: string;
    theater: string;
    date: string;
    ticketsSold: number;
    capacity: number;
    status: string;
}

export function UpcomingShows() {
    const [upcomingShows, setUpcomingShows] = useState<Shows[]>([]);
    const fetchData = async () => {
        const res = await fetch("/api/getUpcomingShows");
        const data = await res.json();
        setUpcomingShows(data);
    }
    useEffect(() => {
        if (upcomingShows.length === 0) {
            fetchData();
        }

    }, [upcomingShows])

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
                            show.status === "Sold Out" ? "destructive" : show.status === "Almost Sold Out" ? "secondary" : "default"
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
