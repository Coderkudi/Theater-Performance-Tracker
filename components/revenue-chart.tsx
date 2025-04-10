"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

interface Data {
    name: string
    value: number
}

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6", "#10b981"]

export function RevenueChart() {
    const [data, setdata] = useState<Data[]>([])
    const fetchData = async () => {
        const responseFromAi = await fetch('/api/getRevenueChartData');
        const jsonData = await responseFromAi.json();
        setdata(jsonData);
    }
    useEffect(() => {
        if (data.length === 0) {
            fetchData();
        }
    }
        , [data]);
    return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
