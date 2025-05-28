"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  User,
  FileText,
  Heart,
  Settings,
} from "lucide-react"

const items = [
  {
    title: "个人信息",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "历史报告",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "个性化画像",
    href: "/dashboard/personality",
    icon: Heart,
  },
  {
    title: "设置",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const path = usePathname()

  return (
    <nav className="grid items-start gap-2">
      {items.map((item) => (
        <Button
          key={item.href}
          variant={path === item.href ? "secondary" : "ghost"}
          className={cn(
            "justify-start",
            path === item.href && "bg-muted font-medium"
          )}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
} 