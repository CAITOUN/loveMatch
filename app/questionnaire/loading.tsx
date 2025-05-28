import { Skeleton } from "@/components/ui/skeleton"

export default function QuestionnaireLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <Skeleton className="h-4 w-96 mx-auto mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  )
} 