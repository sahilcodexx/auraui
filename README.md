# auraui

A modern, animated UI for Supaste — a clipboard and screenshot history app for macOS.

Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui (base-rhea style) with the lucide-react icon library.

## Stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- **UI:** [React](https://react.dev) 19, [Tailwind CSS](https://tailwindcss.com) 4, [shadcn/ui](https://ui.shadcn.com)
- **Icons:** [lucide-react](https://lucide.dev) (`lucide-react`)
- **Theming:** `next-themes`
- **Package manager:** [bun](https://bun.sh)

## Getting started

```bash
bun install
bun run dev
```

The dev server starts on `http://localhost:3000`.

## Scripts

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `bun run dev`       | Start the dev server             |
| `bun run build`     | Production build                 |
| `bun run start`     | Run the production build         |
| `bun run lint`      | Run ESLint                       |
| `bun run typecheck` | Run `tsc --noEmit`               |
| `bun run format`    | Format with Prettier             |

## Project structure

```
app/                    # Next.js App Router pages, layout, global styles
components/             # Shared React components (theme provider, shadcn ui)
  ui/                   # shadcn-generated primitives
hooks/                  # Reusable React hooks
lib/                    # Utilities (cn helper, etc.)
public/                 # Static assets served at /
sections/               # Page-level section components (hero, navbar, …)
```

## Adding UI components

This project uses shadcn/ui with the `lucide` icon library:

```bash
npx shadcn@latest add <component>
```

Components land in `components/ui/` and are importable as:

```tsx
import { Button } from "@/components/ui/button";
```
