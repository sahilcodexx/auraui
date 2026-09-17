import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
      <h2 className="text-2xl font-semibold tracking-tight">
        Component not found
      </h2>
      <p className="text-foreground/60 max-w-sm text-sm">
        That component doesn't exist in this library. Pick one from the sidebar
        instead.
      </p>
      <Link
        href="/components"
        className="mt-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        Back to components
      </Link>
    </div>
  )
}