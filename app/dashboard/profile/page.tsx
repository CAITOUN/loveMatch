import { Metadata } from "next"
import { ProfileForm } from "@/components/dashboard/profile-form"

export const metadata: Metadata = {
  title: "个人信息",
  description: "管理您的个人信息和偏好设置",
}

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">个人信息</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <ProfileForm />
        </div>
      </div>
    </div>
  )
} 