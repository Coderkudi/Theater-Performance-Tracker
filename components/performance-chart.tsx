"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    tickets: 1200,
    occupancy: 65,
  },
  {
    name: "Feb",
    tickets: 1500,
    occupancy: 72,
  },
  {
    name: "Mar",
    tickets: 1800,
    occupancy: 78,
  },
  {
    name: "Apr",
    tickets: 1600,
    occupancy: 74,
  },
  {
    name: "May",
    tickets: 2100,
    occupancy: 82,
  },
  {
    name: "Jun",
    tickets: 2400,
    occupancy: 85,
  },
  {
    name: "Jul",
    tickets: 2350,
    occupancy: 78,
  },
]

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="tickets" fill="rgba(234, 179, 8, 0.8)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="occupancy" fill="rgba(220, 38, 38, 0.8)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
