export type ComponentStatus = "Stable" | "New" | "Beta"

export type DocItem = {
  slug: string
  title: string
  description: string
  status: ComponentStatus
}

export const COMPONENTS: DocItem[] = [
  {
    slug: "mac-keyboard",
    title: "Mac Keyboard",
    description:
      "Interactive Mac keyboard replica with real-time keystroke tracking and Space Black / Silver themes.",
    status: "Stable",
  },
  {
    slug: "ai-image-card",
    title: "Image Generation Card",
    description:
      "AI image-generation state with blinking grid, blur-to-focus reveal, shine sweep, and live timer.",
    status: "Stable",
  },
  {
    slug: "loader-animation",
    title: "Page Loader",
    description:
      "Smooth multilingual greeting text loader built with motion transitions.",
    status: "Stable",
  },
  {
    slug: "search-bar",
    title: "Search Bar",
    description:
      "Command-palette style searchable dropdown with keyboard nav, live highlight, and click-outside dismiss.",
    status: "Stable",
  },
  {
    slug: "mac-dock",
    title: "Mac Dock",
    description:
      "macOS-style Dock with spring icon scaling and live window preview popups on hover.",
    status: "Beta",
  },
  {
    slug: "spotify",
    title: "Music Player",
    description:
      "Live music player widget with audio spectrum animation, vinyl CD spin, and song metadata.",
    status: "New",
  },
]
