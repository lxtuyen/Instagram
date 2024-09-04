import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonTag() {
  return (
    <div className="flex items-center space-x-4 mt-5">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
  )
}
