import Link from "next/link"
import { ArrowRight, Heart, Users, BarChart } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndexPage() {
  return (
    <main className="flex-1">
      {/* 网站简介部分 */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            AI 驱动的爱情匹配
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            通过先进的 AI 技术，为您找到最契合的伴侣。基于科学的问卷和个性化分析，让爱情更简单。
          </p>
          <div className="flex gap-4">
            <Link href="/questionnaire" className={buttonVariants({ size: "lg" })}>
              开始测试
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              登录/注册
            </Link>
          </div>
        </div>
      </section>

      {/* 功能展示部分 */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            核心功能
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            我们提供全方位的爱情匹配服务，帮助您找到真正的灵魂伴侣
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Heart className="h-10 w-10" />
              <CardTitle>AI 契合度预测</CardTitle>
              <CardDescription>
                基于先进的 AI 算法，分析您的性格特征和偏好，预测最佳匹配度
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10" />
              <CardTitle>个性化问卷</CardTitle>
              <CardDescription>
                精心设计的问卷系统，深入了解您的价值观和生活方式
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-10 w-10" />
              <CardTitle>用户画像分析</CardTitle>
              <CardDescription>
                生成详细的个人画像，帮助您更好地了解自己和潜在伴侣
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* 用户见证部分 */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            用户见证
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            听听他们的故事，了解我们的服务如何改变他们的生活
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>张先生 & 李女士</CardTitle>
              <CardDescription>
                "通过这个平台，我们找到了彼此。AI 的匹配度预测非常准确，现在我们过得很幸福。"
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>王先生 & 赵女士</CardTitle>
              <CardDescription>
                "问卷设计很专业，帮助我们更好地了解彼此。感谢这个平台让我们相遇。"
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>刘先生 & 陈女士</CardTitle>
              <CardDescription>
                "用户画像分析非常准确，帮助我们找到了真正契合的伴侣。"
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  )
}
