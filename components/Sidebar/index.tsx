"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { COMPONENTS } from "@/lib/docs-registry"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-full w-full flex-col bg-transparent">
      {/* Brand — icon only */}
      <div className="flex items-center gap-2 px-4 pt-4 pb-4">
        <div className="flex size-6 items-center justify-center rounded-md bg-foreground font-mono text-xs font-bold text-background">
          m
        </div>
      </div>

      {/* Components list — names only (no header, no badges) */}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-2">
        {COMPONENTS.map((item) => {
          const href = `/components/${item.slug}`
          const isActive = pathname === href
          return (
            <Link
              key={item.slug}
              href={href}
              className={cn(
                "rounded-lg px-2.5 py-1.5 text-sm transition-colors",
                isActive
                  ? "bg-foreground/8 text-foreground"
                  : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
              )}
            >
              <span className="truncate">{item.title}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
