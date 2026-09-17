import * as React from "react"

import { ComponentCard } from "@/sections/card-component"
import AiImageCard from "@/components/showcase/ai-image-card"
import CustomKeyboard from "@/components/showcase/custom-keyboard"
import LoaderAnimation from "@/components/showcase/loader-animation"
import MacDock from "@/components/showcase/mac-dock"
import SearchBar from "@/components/showcase/search-bar"
import Spotify from "@/components/showcase/Spotify"

const COMPONENTS = [
  {
    id: "mac-keyboard",
    title: "Mac Keyboard",
    status: "Stable" as const,
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <div className="origin-center scale-[0.4] transform xs:scale-[0.5] sm:scale-[0.6]">
          <CustomKeyboard theme="dark" enableSound={false} showPreview />
        </div>
      </div>
    ),
  },
  {
    id: "ai-image-card",
    title: "Image Generation Card",
    status: "Stable" as const,
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
    id: "loader-animation",
    title: "Page Loader",
    status: "Stable" as const,
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <LoaderAnimation />
      </div>
    ),
  },
  {
    id: "search-bar",
    title: "Search Bar",
    status: "Stable" as const,
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <div className="w-full max-w-[260px]">
          <SearchBar />
        </div>
      </div>
    ),
  },
  {
    id: "mac-dock",
    title: "Mac Dock",
    status: "Beta" as const,
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <div className="origin-center">
          <MacDock />
        </div>
      </div>
    ),
  },
  {
    id: "spotify",
    title: "Music Player",
    status: "New" as const,
    preview: (
      <div className="flex h-full w-full items-center justify-center p-2 sm:p-4">
        <Spotify />
      </div>
    ),
  },
]

export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="mx-auto w-full max-w-6xl px-4 pt-6 pb-20 sm:px-6"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map((component) => (
          <ComponentCard
            key={component.id}
            title={component.title}
            status={component.status}
          >
            {component.preview}
          </ComponentCard>
        ))}
      </div>
    </section>
  )
}