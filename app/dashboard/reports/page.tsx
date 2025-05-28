import { Metadata } from "next"
import { ReportsTable } from "@/components/dashboard/reports-table"

export const metadata: Metadata = {
  title: "历史报告",
  description: "查看您的历史匹配报告",
}

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">历史报告</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-7">
          <ReportsTable />
        </div>
      </div>
    </div>
  )
} 