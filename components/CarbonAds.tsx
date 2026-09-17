"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SRC =
  "//cdn.carbonads.com/carbon.js?serve=CWBI423E&placement=wwwrareuicom&format=responsive";

// carbon's box: 100px image, 0.6em padding, border, and the "ads via carbon" line
const RESERVED = "min-h-34";

export default function CarbonAds({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const hostRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [blocked, setBlocked] = useState(false);

  // re-serving on pathname is what makes a client-side route change count as a pageview
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // deferring a tick collapses the strict-mode mount/unmount/mount into one injection
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.async = true;
      script.id = "_carbonads_js";
      script.src = SRC;
      script.onerror = () => setBlocked(true);
      host.appendChild(script);
    }, 0);

    return () => {
      clearTimeout(timer);
      host.replaceChildren();
    };
  }, [pathname]);

  if (blocked) return null;

  return (
    <div
      ref={hostRef}
      data-slot="carbon-ads"
      className={cn(RESERVED, className)}
      {...props}
    />
  );
}
