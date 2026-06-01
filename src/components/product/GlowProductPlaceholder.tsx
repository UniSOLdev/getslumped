"use client";

import { cn } from "@/lib/utils";

interface GlowProductPlaceholderProps {
  className?: string;
  compact?: boolean;
}

/** Premium lamp silhouette until a solo Slumped Glow render is available */
export function GlowProductPlaceholder({
  className,
  compact = false,
}: GlowProductPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-end",
        compact ? "h-full w-full pb-1" : "h-full w-full pb-2",
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,193,108,0.45)_0%,transparent_70%)] blur-lg",
          compact ? "top-[8%] h-[50%] w-[70%]" : "top-[4%] h-[58%] w-[75%]"
        )}
      />
      <div className={cn("relative w-full", compact ? "max-w-[88px]" : "max-w-[140px]")}>
        <div
          className={cn(
            "relative mx-auto rounded-[50%] bg-gradient-to-b from-[#3a3f4a] via-[#1e2229] to-[#12151c] shadow-[inset_0_-6px_18px_rgba(0,0,0,0.55),0_14px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.08]",
            compact ? "aspect-[4/5] w-[62%]" : "aspect-[4/5] w-[68%]"
          )}
        />
        <div
          className={cn(
            "mx-auto rounded-lg bg-gradient-to-b from-[#2c313c] to-[#101318] shadow-[0_10px_22px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]",
            compact ? "mt-1.5 h-8 w-[42%]" : "mt-2 h-10 w-[46%]"
          )}
        />
      </div>
    </div>
  );
}
