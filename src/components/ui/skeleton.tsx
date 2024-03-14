import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted h-[100%] w-[100%]", className)}
      {...props}
    />
  )
}

export { Skeleton }
