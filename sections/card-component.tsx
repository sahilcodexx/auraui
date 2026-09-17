import * as React from "react"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

type ComponentStatus = "Stable" | "New" | "Beta"

const statusStyles: Record<ComponentStatus, string> = {
  Stable:
    "rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand",
  New: "rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand",
  Beta:
    "rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-brand",
}

export type ComponentCardProps = React.ComponentProps<"div"> & {
  title: string
  status: ComponentStatus
  children: React.ReactNode
}

export function ComponentCard({
  title,
  status,
  className,
  children,
  ...rest
}: ComponentCardProps) {
  return (
    <div
      data-slot="component-card"
      className={cn(
        "group flex flex-col rounded-3xl border border-black/[0.04] bg-[#F5F5F7] p-2 transition-colors uration-200 ease-out dark:border-border-apple dark:bg-[#121212] dark:hover:bg-neutral-800/60 hover:bg-neutral-200/60",
        className
      )}
      {...rest}
    >
      {/* Preview */}
      <div
        data-slot="component-card-preview"
        className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white dark:border-neutral-500/15 dark:bg-neutral-950"
      >
        {children}
      </div>

      {/* Footer row */}
      <div
        data-slot="component-card-footer"
        className="flex items-center justify-between gap-3 px-3 pb-1 pt-2"
      >
        <div className="flex min-w-0 items-center gap-2 text-base font-semibold tracking-tight">
          <span className="truncate">{title}</span>
          <span className={cn("inline-flex items-center", statusStyles[status])}>
            {status}
          </span>
        </div>

        <div
          data-slot="component-card-arrow"
          className="flex shrink-0 items-center justify-center text-brand transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}