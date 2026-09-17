"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  Maximize2,
  PictureInPicture,
  Download,
  Sun,
  Moon,
  Maximize,
  Code2,
  Contrast,
} from "lucide-react"
import { useTheme } from "next-themes"

import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"

const spring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 34,
  mass: 0.6,
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(true)

  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  // Standard next-themes SSR pattern — needs setState to avoid hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white 
      dark:bg-black p-2">
      <div
        className="flex h-full w-full gap-2"
        style={{
          interpolateSize: "allow-keywords",
          transitionBehavior: "allow-discrete",
        }}
      >
        {/* Sidebar */}
        <motion.div
          initial={false}
          animate={{
            width: leftOpen ? "300px" : 0,
          }}
          transition={spring}
          className="overflow-hidden  rounded-3xl "
        >
          <Sidebar />
        </motion.div>

        {/* Main content (Panel 2) — pill pinned at top, content scrollable below */}
        <motion.div layout className="flex-1" transition={spring}>
          <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border dark:bg-neutral-900/80 bg-neutral-200/60 ">
            {/* Pill toolbar — top-left of panel 2, doesn't scroll */}
            <div className="shrink-0 p-2 pb-1">
              <div className="flex w-fit items-center gap-1 rounded-xl border bg-background/80 p-1">
                {/* Install */}
                <Button className="rounded-lg bg-muted dark:bg-muted/60" variant="ghost">
                  <Download className="size-3.5" />
                  Install
                </Button>

                {/* Collapse right (aside) */}
                <Button className=" bg-muted dark:bg-muted/60" variant="ghost" size="icon" onClick={() => setRightOpen((v) => !v)}>
                  <Code2 className="size-5" />
                </Button>

                {/* Collapse left (sidebar) */}
                <Button
                  className=" bg-muted dark:bg-muted/60" variant="ghost" size="icon"
                  onClick={() => setLeftOpen((v) => !v)}
                >
                  <Maximize className="size-4.5" />
                </Button>

                {/* Theme */}
                <Button
                  type="button"
                  onClick={() =>
                    mounted &&
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  aria-label="Toggle theme"
                  title="Toggle theme"
                 className=" bg-muted dark:bg-muted/60" variant="ghost" size="icon"
                >
                  {mounted && resolvedTheme === "dark" ? (
                    <Contrast className="size-4" />
                  ) : (
                    <Contrast className="size-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Scrollable page content */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-8 pt-2 pb-16">
                {children}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Aside (right) — empty shell */}
        <motion.div
          initial={false}
          animate={{
            width: rightOpen ? "340px" : 0,
          }}
          transition={spring}
          className="overflow-hidden"
        >
          <div className="h-full w-full rounded-3xl  bg-white dark:bg-black" />
        </motion.div>
      </div>
    </div>
  )
}
