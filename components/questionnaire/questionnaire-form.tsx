'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  personality: z.enum(["introvert", "extrovert", "balanced"], {
    required_error: "请选择您的性格类型",
  }),
  lifestyle: z.enum(["active", "relaxed", "balanced"], {
    required_error: "请选择您的生活方式",
  }),
  future: z.enum(["career", "family", "balanced"], {
    required_error: "请选择您的未来规划重点",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function QuestionnaireForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalSteps = 3

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personality: undefined,
      lifestyle: undefined,
      future: undefined,
    },
    mode: "onChange",
  })

  async function onSubmit(values: FormValues) {
    try {
      setIsSubmitting(true)
      
      // 验证所有字段是否都已填写
      const isValid = await form.trigger()
      if (!isValid) {
        return
      }
      
      // TODO: 这里添加实际的提交逻辑
      console.log('提交的数据:', values)
      
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 提交成功后跳转
      router.push('/dashboard')
    } catch (error) {
      console.error('提交失败:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNextStep = async () => {
    const currentField = questions[currentStep - 1].id
    const currentValue = form.getValues(currentField)
    
    // 只验证当前字段
    const isValid = await form.trigger(currentField)
    if (!isValid) {
      return
    }
    
    // 进入下一步
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const questions = [
    {
      id: "personality" as const,
      question: "您认为自己的性格更倾向于？",
      options: [
        { value: "introvert" as const, label: "内向" },
        { value: "extrovert" as const, label: "外向" },
        { value: "balanced" as const, label: "平衡" },
      ],
    },
    {
      id: "lifestyle" as const,
      question: "您更喜欢的生活方式是？",
      options: [
        { value: "active" as const, label: "活跃" },
        { value: "relaxed" as const, label: "轻松" },
        { value: "balanced" as const, label: "平衡" },
      ],
    },
    {
      id: "future" as const,
      question: "您未来的规划重点是什么？",
      options: [
        { value: "career" as const, label: "事业" },
        { value: "family" as const, label: "家庭" },
        { value: "balanced" as const, label: "平衡" },
      ],
    },
  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Progress value={(currentStep / totalSteps) * 100} className="mb-8" />
        
        <FormField
          control={form.control}
          name={questions[currentStep - 1].id}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-lg">
                {questions[currentStep - 1].question}
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  {questions[currentStep - 1].options.map((option) => (
                    <FormItem
                      key={option.value}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={option.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevStep}
            disabled={currentStep === 1 || isSubmitting}
          >
            上一步
          </Button>
          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={handleNextStep}
              disabled={isSubmitting}
            >
              下一步
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "提交中..." : "提交"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
} 