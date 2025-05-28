"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

const personalityTraits = [
  {
    name: "外向性",
    value: 75,
    description: "您倾向于外向、热情和社交",
  },
  {
    name: "开放性",
    value: 85,
    description: "您对新事物持开放态度，富有创造力",
  },
  {
    name: "尽责性",
    value: 90,
    description: "您做事认真负责，注重细节",
  },
  {
    name: "宜人性",
    value: 80,
    description: "您善于合作，富有同理心",
  },
  {
    name: "情绪稳定性",
    value: 70,
    description: "您情绪较为稳定，抗压能力强",
  },
]

const emotionalNeeds = [
  {
    name: "安全感",
    value: 85,
    description: "您重视关系的稳定性和安全感",
  },
  {
    name: "亲密感",
    value: 90,
    description: "您渴望深入的情感连接",
  },
  {
    name: "认可感",
    value: 75,
    description: "您希望得到他人的认可和赞赏",
  },
  {
    name: "自主性",
    value: 80,
    description: "您重视个人空间和独立性",
  },
]

const lifestyle = [
  {
    name: "工作与生活平衡",
    value: 85,
    description: "您注重工作与生活的平衡",
  },
  {
    name: "社交活动",
    value: 75,
    description: "您积极参与社交活动",
  },
  {
    name: "兴趣爱好",
    value: 90,
    description: "您有丰富的兴趣爱好",
  },
  {
    name: "健康习惯",
    value: 80,
    description: "您注重健康的生活方式",
  },
]

export function PersonalityProfile() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">性格特征分析</h3>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          分享画像
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {personalityTraits.map((trait) => (
          <Card key={trait.name}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {trait.name}
              </CardTitle>
              <CardDescription>{trait.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={trait.value} className="h-2" />
              <p className="mt-2 text-sm text-muted-foreground">
                {trait.value}%
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">情感需求分析</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {emotionalNeeds.map((need) => (
          <Card key={need.name}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {need.name}
              </CardTitle>
              <CardDescription>{need.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={need.value} className="h-2" />
              <p className="mt-2 text-sm text-muted-foreground">
                {need.value}%
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">生活方式分析</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {lifestyle.map((item) => (
          <Card key={item.name}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {item.name}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={item.value} className="h-2" />
              <p className="mt-2 text-sm text-muted-foreground">
                {item.value}%
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 