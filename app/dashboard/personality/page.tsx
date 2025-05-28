import { Metadata } from "next"
import { PersonalityProfile } from "@/components/dashboard/personality-profile"

export const metadata: Metadata = {
  title: "个性化画像",
  description: "查看您的个性化画像分析",
}

export default function PersonalityPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">个性化画像</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-7">
          <PersonalityProfile />
        </div>
      </div>
    </div>
  )
} 