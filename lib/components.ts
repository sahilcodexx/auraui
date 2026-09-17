export type Dependency = {
  name: string;
  icon?: React.ReactNode;
};

export type ComponentProp = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  options?: string[];
  control?: "swatch";
  optionColors?: Record<string, string>;
  description: string;
};

export type ComponentCategory = "showcase";

export const CATEGORY_LABELS: Record<ComponentCategory, string> = {
  showcase: "Showcase",
};

export const CATEGORY_ORDER: ComponentCategory[] = ["showcase"];

export type ComponentItem = {
  name: string;
  href: string;
  category: ComponentCategory;
  description?: string;
  preview?: React.ReactNode;
  props?: ComponentProp[];
  usage?: string;
  dependencies?: Dependency[];
};

export const PANEL_INFO = {
  sourceHint:
    "Click the code icon in the top-right corner to view the source code.",
  keepInMind:
    "Components here are ported from the portfolio so the same look and feel can be dropped into any project.",
  contactEmail: "",
  contactNote: "",
  license: ["Free to use and modify."],
} as const;

export const components: ComponentItem[] = [
  {
    name: "Mac Keyboard",
    href: "/components/mac-keyboard",
    category: "showcase",
    description:
      "Interactive Mac keyboard replica with real-time keystroke tracking and Space Black / Silver themes.",
  },
  {
    name: "Image Generation Card",
    href: "/components/ai-image-card",
    category: "showcase",
    description:
      "AI image-generation state with blinking grid, blur-to-focus reveal, shine sweep, and live timer.",
  },
  {
    name: "Page Loader",
    href: "/components/loader-animation",
    category: "showcase",
    description:
      "Smooth multilingual greeting text loader built with motion transitions.",
  },
  {
    name: "Search Bar",
    href: "/components/search-bar",
    category: "showcase",
    description:
      "Command-palette style searchable dropdown with keyboard nav, live highlight, and click-outside dismiss.",
  },
  {
    name: "Mac Dock",
    href: "/components/mac-dock",
    category: "showcase",
    description:
      "macOS-style Dock with spring icon scaling and live window preview popups on hover.",
  },
  {
    name: "Music Player",
    href: "/components/spotify",
    category: "showcase",
    description:
      "Live music player widget with audio spectrum animation, vinyl CD spin, and song metadata.",
  },
];

export function activeComponent(pathname: string): ComponentItem | undefined {
  return components.find((c) => c.href === pathname);
}

export function swatchProp(item?: ComponentItem): ComponentProp | undefined {
  return item?.props?.find((p) => p.control === "swatch" && p.optionColors);
}

export function cleanDefault(prop?: ComponentProp): string | undefined {
  return prop?.default?.replace(/^["']|["']$/g, "");
}