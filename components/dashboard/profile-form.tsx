"use client"

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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "用户名至少需要2个字符",
    })
    .max(30, {
      message: "用户名不能超过30个字符",
    }),
  email: z
    .string()
    .min(1, { message: "请输入邮箱地址" })
    .email("请输入有效的邮箱地址"),
  bio: z
    .string()
    .max(160, {
      message: "个人简介不能超过160个字符",
    })
    .optional(),
  location: z
    .string()
    .max(100, {
      message: "地址不能超过100个字符",
    })
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
  username: "张三",
  email: "zhangsan@example.com",
  bio: "我是一名软件工程师，喜欢阅读和旅行。",
  location: "北京",
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "保存成功",
      description: "您的个人信息已更新",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>用户名</FormLabel>
              <FormControl>
                <Input placeholder="请输入用户名" {...field} />
              </FormControl>
              <FormDescription>
                这是您的公开显示名称
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>邮箱</FormLabel>
              <FormControl>
                <Input placeholder="请输入邮箱地址" {...field} />
              </FormControl>
              <FormDescription>
                我们不会向其他用户公开您的邮箱地址
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>个人简介</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="介绍一下自己吧"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                简短介绍一下自己，让其他用户更好地了解您
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>所在地</FormLabel>
              <FormControl>
                <Input placeholder="请输入您的所在地" {...field} />
              </FormControl>
              <FormDescription>
                您所在的城市或地区
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">保存更改</Button>
      </form>
    </Form>
  )
} 