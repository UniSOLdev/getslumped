"use client";

import { cn } from "@/lib/utils";

interface WickProductPlaceholderProps {
  className?: string;
  compact?: boolean;
}

/** Small candle silhouette — never scale up the low-res board crop */
export function WickProductPlaceholder({
  className,
  compact = false,
}: WickProductPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-end",
        compact ? "max-h-[72px] w-full" : "max-h-[100px] w-full",
        className
      )}
      aria-hidden
    >
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-[8%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,193,108,0.35)_0%,transparent_70%)] blur-md",
          compact ? "h-10 w-10" : "h-14 w-14"
        )}
      />
      <div
        className={cn(
          "relative rounded-full bg-gradient-to-b from-[#3a3530] via-[#1e1c1a] to-[#121110] shadow-[0_8px_20px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]",
          compact ? "h-10 w-10" : "h-14 w-14"
        )}
      >
        <div className="absolute left-1/2 top-[18%] h-[22%] w-[8%] -translate-x-1/2 rounded-full bg-[#f5c16c]/80 blur-[1px]" />
      </div>
      <div
        className={cn(
          "mt-1 rounded-sm bg-gradient-to-b from-[#2a2724] to-[#101010] ring-1 ring-white/[0.05]",
          compact ? "h-5 w-12" : "h-7 w-16"
        )}
      />
    </div>
  );
}
