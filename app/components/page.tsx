import Link from "next/link"
import Navbar from "@/sections/navbar"
import { ComponentCard } from "@/sections/card-component"
import AiImageCard from "@/components/showcase/ai-image-card"
import CustomKeyboard from "@/components/showcase/custom-keyboard"
import LoaderAnimation from "@/components/showcase/loader-animation"
import MacDock from "@/components/showcase/mac-dock"
import SearchBar from "@/components/showcase/search-bar"
import Spotify from "@/components/showcase/Spotify"

type ComponentStatus = "Stable" | "New" | "Beta"

type ComponentItem = {
  title: string
  description: string
  status: ComponentStatus
  href: string
  preview: React.ReactNode
}

const showcaseItems: ComponentItem[] = [
  {
    title: "Mac Keyboard",
    href: "/components/mac-keyboard",
    description:
      "Interactive Mac keyboard replica with real-time keystroke tracking and Space Black / Silver themes.",
    status: "Stable",
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <div className="origin-center scale-[0.4] transform xs:scale-[0.5] sm:scale-[0.6]">
          <CustomKeyboard theme="dark" enableSound={false} showPreview />
        </div>
      </div>
    ),
  },
  {
    title: "Image Generation Card",
    href: "/components/ai-image-card",
    description:
      "AI image-generation state with blinking grid, blur-to-focus reveal, shine sweep, and live timer.",
    status: "Stable",
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <div
          className="aspect-square"
          style={{ width: "clamp(110px, 18vw, 170px)" }}
        >
          <AiImageCard generateDuration={3} />
        </div>
      </div>
    ),
  },
  {
    title: "Page Loader",
    href: "/components/loader-animation",
    description:
      "Smooth multilingual greeting text loader built with motion transitions.",
    status: "Stable",
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <LoaderAnimation />
      </div>
    ),
  },
  {
    title: "Search Bar",
    href: "/components/search-bar",
    description:
      "Command-palette style searchable dropdown with keyboard nav, live highlight, and click-outside dismiss.",
    status: "Stable",
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <div className="w-full max-w-[260px]">
          <SearchBar />
        </div>
      </div>
    ),
  },
  {
    title: "Mac Dock",
    href: "/components/mac-dock",
    description:
      "macOS-style Dock with spring icon scaling and live window preview popups on hover.",
    status: "Beta",
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <div className="origin-center">
          <MacDock />
        </div>
      </div>
    ),
  },
  {
    title: "Music Player",
    href: "/components/spotify",
    description:
      "Live music player widget with audio spectrum animation, vinyl CD spin, and song metadata.",
    status: "New",
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <Spotify />
      </div>
    ),
  },
]

export default function ComponentsPage() {
  return (
    <div>
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-20 sm:px-6">
        {/* Page header */}
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {showcaseItems.length} components ready
          </div>
          <h1 className="max-w-3xl text-4xl tracking-tight text-balance text-black sm:text-5xl dark:text-white">
            Components
          </h1>
          <p className="max-w-lg text-balance font-medium text-black/60 sm:text-base dark:text-white/60">
            Refined animated components ported over from the portfolio. Preview
            each one live and copy the snippet into your project.
          </p>
        </header>

        {/* Showcase grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl"
            >
              <ComponentCard
                title={item.title}
                status={item.status}
              >
                {item.preview}
              </ComponentCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}