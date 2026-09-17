"use client";

import { type ReactNode, useState } from "react";
import { motion } from "motion/react";
import { Sun, Moon, Maximize2 } from "lucide-react";

type Control = {
  name: string;
  value: string;
  options: string[];
};

type ComponentPreviewProps = {
  children: ReactNode;
  controls?: Control[];
  renderControl?: (value: string) => ReactNode;
  /** Class applied to the preview surface itself. */
  surfaceClassName?: string;
};

export default function ComponentPreview({
  children,
  controls,
  renderControl,
  surfaceClassName,
}: ComponentPreviewProps) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      {/* Top-right toolbar */}
      <div className="flex items-center justify-end gap-1.5">
        <button
          type="button"
          onClick={() => setIsDark((v) => !v)}
          aria-label={isDark ? "Switch to light" : "Switch to dark"}
          className="rounded-md p-2 text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
        >
          {isDark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
        <button
          type="button"
          aria-label="Fullscreen"
          onClick={() => {
            if (typeof document !== "undefined") {
              document.documentElement.requestFullscreen?.();
            }
          }}
          className="rounded-md p-2 text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* Preview surface */}
      <div
        className={
          "relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl border p-6 transition-colors " +
          (isDark
            ? "border-white/10 bg-[#0a0a0a] "
            : "border-black/5 bg-white ") +
          (surfaceClassName ?? "")
        }
      >
        {children}
      </div>

      {/* State controls */}
      {controls && controls.length > 0 && (
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1 rounded-2xl border border-black/5 bg-muted/40 p-1 dark:border-white/10">
            {controls.map((control) => (
              <ControlGroup
                key={control.name}
                control={control}
                renderControl={renderControl}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ControlGroup({
  control,
  renderControl,
}: {
  control: Control;
  renderControl?: (value: string) => ReactNode;
}) {
  const [selected, setSelected] = useState(control.value);

  return (
    <div
      role="radiogroup"
      aria-label={control.name}
      className="flex items-center gap-0.5"
    >
      {control.options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => setSelected(option)}
            className="relative h-8 cursor-pointer rounded-xl px-3.5 text-xs font-medium capitalize outline-none transition-colors focus-visible:ring-2 focus-visible:ring-foreground/30"
          >
            {isSelected && (
              <motion.span
                layoutId={`preview-control-${control.name}`}
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                className="absolute inset-0 rounded-xl bg-background shadow-sm"
              />
            )}
            <span
              className={
                "relative transition-colors duration-200 " +
                (isSelected
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground/80")
              }
            >
              {renderControl ? renderControl(option) : option}
            </span>
          </button>
        );
      })}
    </div>
  );
}