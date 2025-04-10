import { NextResponse } from "next/server"

// Mock show data
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

export async function GET() {
  return NextResponse.json(shows)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.theater || !body.startDate || !body.endDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would save to a database
    // For this mock API, we'll just return the data with an ID
    const newShow = {
      id: shows.length + 1,
      name: body.name,
      theater: body.theater,
      director: body.director || "TBD",
      startDate: body.startDate,
      endDate: body.endDate,
      status: body.status || "Upcoming",
      image: body.image || "/placeholder.svg?height=60&width=100",
    }

    return NextResponse.json(newShow, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
