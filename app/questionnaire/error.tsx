'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function QuestionnaireError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">出错了</h2>
        <p className="text-muted-foreground mb-8">
          加载问卷时发生错误，请稍后重试。
        </p>
        <Button onClick={reset}>重试</Button>
      </div>
    </div>
  )
} 