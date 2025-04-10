"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Home, Ticket, Calendar, Settings, Users, Sparkles } from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    label: "Theaters",
    icon: BarChart3,
    href: "/theaters",
  },
  {
    label: "Shows",
    icon: Ticket,
    href: "/shows",
  },
  {
    label: "Schedule",
    icon: Calendar,
    href: "/schedule",
  },
  {
    label: "Audience",
    icon: Users,
    href: "/audience",
  },
  {
    label: "AI Insights",
    icon: Sparkles,
    href: "/insights",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="h-full w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Ticket className="h-6 w-6 text-primary" />
          <span className="text-xl">TheaterPulse</span>
        </Link>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                  pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
