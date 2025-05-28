"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

const reports = [
  {
    id: "1",
    name: "张三",
    avatar: "/avatars/01.png",
    matchScore: 95,
    date: "2024-03-15",
  },
  {
    id: "2",
    name: "李四",
    avatar: "/avatars/02.png",
    matchScore: 88,
    date: "2024-03-14",
  },
  {
    id: "3",
    name: "王五",
    avatar: "/avatars/03.png",
    matchScore: 92,
    date: "2024-03-13",
  },
]

export function RecentReports() {
  return (
    <div className="space-y-8">
      {reports.map((report) => (
        <div key={report.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={report.avatar} alt={report.name} />
            <AvatarFallback>{report.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{report.name}</p>
            <p className="text-sm text-muted-foreground">
              匹配度: {report.matchScore}%
            </p>
          </div>
          <div className="ml-auto font-medium">{report.date}</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">打开菜单</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>操作</DropdownMenuLabel>
              <DropdownMenuItem>查看详情</DropdownMenuItem>
              <DropdownMenuItem>分享报告</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>导出报告</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
} 