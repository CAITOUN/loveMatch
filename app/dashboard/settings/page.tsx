import { Metadata } from "next"
import { SettingsForm } from "@/components/dashboard/settings-form"

export const metadata: Metadata = {
  title: "设置",
  description: "管理您的账号设置和偏好",
}

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">设置</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <SettingsForm />
        </div>
      </div>
    </div>
  )
} 