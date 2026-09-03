import { GithubIcon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type NavLink = {
  label: string
  href: string
  external?: boolean
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Component",
    href: "https://dock.cool",
    external: true,
  },
  {
    label: "Block",
    href: "https://dock.cool",
    external: true,
  },

  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#pricing" },
]

export default function Navbar() {
  return (
    <div className="fixed left-1/2 z-50 w-[calc(100%-32px)] max-w-3xl -translate-x-1/2">
      {/* Top-left decorative corner */}
      <div className="absolute -left-7 h-12 w-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="20"
          height="20"
          overflow="visible"
          aria-hidden="true"
          className="h-[21] w-[35] shrink-0 rotate-90 dark:fill-neutral-900 "
        >
          <path d="M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z"  />
        </svg>
      </div>

      {/* Top-right decorative corner */}
      <div className="absolute -right-9.5 h-12 w-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          overflow="visible"
          aria-hidden="true"
          className="h-[20] w-[35] shrink-0 dark:fill-neutral-900"
          style={{
            imageRendering: "pixelated",
            opacity: 1,
          }}
        >
          <path d="M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z"  />
        </svg>
      </div>
      <nav className="relative rounded-b-[18px] bg-black dark:bg-neutral-900 dark:border-b dark:border-neutral-800  text-white">
        <div className="flex min-h-12 items-center justify-between px-3.5 py-1">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-[9px] no-underline"
          >
            <Image
              src="/logo.gif"
              alt="meui"
              width={35}
              height={30}
              className="rounded-lg object-cover"
            />

            <span className="font-sans text-base font-semibold tracking-[-0.02em] text-white">
              Meui
            </span>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-[14px] font-medium tracking-[-0.02em] text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Button variant="secondary">
              <HugeiconsIcon icon={GithubIcon} className="h-4 w-4" />
              <span>Github</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}
