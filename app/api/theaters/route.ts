import { NextResponse } from "next/server"

// Mock theater data
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

export async function GET() {
  return NextResponse.json(theaters)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.location || !body.capacity) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would save to a database
    // For this mock API, we'll just return the data with an ID
    const newTheater = {
      id: theaters.length + 1,
      name: body.name,
      location: body.location,
      capacity: body.capacity,
      activeShows: 0,
      status: body.status || "Active",
      image: body.image || "/placeholder.svg?height=60&width=100",
    }

    return NextResponse.json(newTheater, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
