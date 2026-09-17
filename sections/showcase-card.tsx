import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type ShowcaseCardProps = React.ComponentProps<"div"> & {
  title: string
  description?: string
  /** Descriptive tag shown in the footer — e.g. "Interactive · Sound". */
  badge?: string
  /** Link for the "View Component" CTA. Defaults to "#". */
  href?: string
  children?: React.ReactNode
}

export function ShowcaseCard({
  title,
  description,
  badge = "React · Motion",
  href = "#",
  className,
  children,
  ...rest
}: ShowcaseCardProps) {
  return (
    <div className={cn("h-full", className)} {...rest}>
      <div className="relative flex h-full flex-col gap-2 p-2 py-5 md:py-2 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/40">
        {/* Preview container */}
        <div className="relative select-none [--image-radius:var(--radius-xl)]">
          <div className="flex aspect-[1200/630] items-center justify-center overflow-hidden rounded-[var(--image-radius)] bg-neutral-100/80 p-3 sm:p-4 dark:bg-neutral-900/50">
            <div className="flex w-full items-center justify-center">
              {children}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[var(--image-radius)] inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
        </div>

        {/* Content */}
        <div className="flex h-full flex-col justify-between gap-2 p-2">
          <div className="space-y-2">
            <h3 className="text-lg leading-snug font-medium text-balance">
              {title}
            </h3>
            {description ? (
              <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                {description}
              </p>
            ) : null}
          </div>

          {/* Footer: badge + view component link */}
          <div className="relative z-10 mt-2 space-y-3">
            <div className="flex items-center justify-between border-t border-border pt-2.5">
              <span className="font-mono text-xs font-medium text-muted-foreground/80">
                {badge}
              </span>
              <Link href={href}>
                <div className="flex cursor-pointer items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <span>View Component</span>
                  <ArrowRight className="size-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}