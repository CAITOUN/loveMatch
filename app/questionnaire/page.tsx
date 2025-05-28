import { Metadata } from "next"
import { QuestionnaireForm } from "@/components/questionnaire/questionnaire-form"

export const metadata: Metadata = {
  title: "爱情匹配问卷 | LoveMatch",
  description: "通过回答一系列问题，帮助我们更好地了解您，为您找到最合适的伴侣。",
}

export default function QuestionnairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">爱情匹配问卷</h1>
        <p className="text-center text-muted-foreground mb-8">
          请认真回答以下问题，这将帮助我们为您找到最合适的伴侣。
        </p>
        <QuestionnaireForm />
      </div>
    </main>
  )
} 