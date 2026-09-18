"use client"

import { COMPONENTS } from "@/lib/docs-registry"
import type { NavConcept, NavSection, Section } from "@/lib/sections"
import { SidebarNav } from "./sidebar-nav"

// Order in which sections appear in the sidebar. Matches the sidebar
// sections list in `docs-registry.ts`.
const SECTION_ORDER: Section[] = [
  "Display",
  "AI Kit",
  "Inputs",
  "Navigation",
]

// Build the `NavSection[]` shape that SidebarNav expects from our docs
// registry. One section per category that has at least one item, in the
// order defined above. Items keep their registry order (no extra sort).
function buildSections(): NavSection[] {
  const byCategory = new Map<Section, NavConcept[]>()
  for (const s of SECTION_ORDER) byCategory.set(s, [])
  for (const item of COMPONENTS) {
    byCategory.get(item.category as Section)?.push({
      title: item.title,
      slug: item.slug,
      section: item.category as Section,
      order: 0,
    })
  }
  return SECTION_ORDER.flatMap((section) => {
    const concepts = byCategory.get(section) ?? []
    if (concepts.length === 0) return []
    return [{ section, concepts }]
  })
}

export default function Sidebar() {
  const sections = buildSections()

  return (
    <aside className="flex h-full w-full flex-col bg-transparent">
      {/* Wordmark — matches craft's "Craft" heading at the top of the nav. */}
      <div className="px-6 pt-6 pb-4">
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Components
        </span>
      </div>

      {/* Nav */}
      <SidebarNav sections={sections} className="flex-1" />
    </aside>
  )
}