"use client";

import { cn } from "@/lib/utils";
import type { ProductVariant } from "@/lib/products";

interface ProductMockupProps {
  variant: ProductVariant;
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
}

const sizeMap = {
  sm: "h-[72px] w-[72px]",
  md: "h-[100px] w-[100px] sm:h-[110px] sm:w-[110px]",
  lg: "h-[130px] w-[130px]",
  hero: "h-full w-full",
};

export function ProductMockup({
  variant,
  size = "md",
  className,
}: ProductMockupProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        sizeMap[size],
        className
      )}
      aria-hidden
    >
      {variant === "blackout" && <BlackoutMockup />}
      {variant === "nightshades" && <NightShadesMockup />}
      {variant === "wick" && <WickMockup />}
      {variant === "mist" && <MistMockup />}
      {variant === "coolcase" && <CoolCaseMockup />}
      {variant === "socks" && <SocksMockup />}
      {variant === "glow" && <GlowMockup />}
    </div>
  );
}

/** Satin sleep mask — two eye cups + strap */
function BlackoutMockup() {
  return (
    <div className="relative h-[85%] w-[90%]">
      <div className="absolute left-[5%] top-[22%] h-[42%] w-[38%] rounded-[50%] bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#050505] shadow-[inset_0_-2px_8px_rgba(255,255,255,0.08),inset_0_2px_4px_rgba(0,0,0,0.8)]">
        <div className="absolute left-[15%] top-[20%] h-[25%] w-[35%] rounded-full bg-gradient-to-br from-white/12 to-transparent" />
      </div>
      <div className="absolute right-[5%] top-[22%] h-[42%] w-[38%] rounded-[50%] bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#050505] shadow-[inset_0_-2px_8px_rgba(255,255,255,0.08)]">
        <div className="absolute right-[15%] top-[20%] h-[25%] w-[35%] rounded-full bg-gradient-to-bl from-white/10 to-transparent" />
      </div>
      <div className="absolute left-[22%] top-[38%] h-[18%] w-[56%] rounded-full bg-[#0a0a0a]" />
      <div className="absolute left-1/2 top-[8%] h-[8%] w-[55%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent opacity-80" />
      <div className="absolute bottom-[12%] left-1/2 h-[6%] w-[70%] -translate-x-1/2 rounded-full border border-white/5 bg-[#111]" />
    </div>
  );
}

/** Blue-light blocking glasses */
function NightShadesMockup() {
  return (
    <div className="relative h-[70%] w-[95%]">
      <div className="absolute left-[6%] top-[28%] h-[52%] w-[36%] rounded-[45%] border-[2.5px] border-[#2a2a2a] bg-gradient-to-br from-[#1a4a7a]/90 to-[#0d2848]/95 shadow-inner">
        <div className="absolute inset-[3px] rounded-[42%] bg-gradient-to-br from-[#2563a8]/40 to-[#0f2744]/60" />
        <div className="absolute left-[20%] top-[15%] h-[20%] w-[30%] rounded-full bg-white/10" />
      </div>
      <div className="absolute right-[6%] top-[28%] h-[52%] w-[36%] rounded-[45%] border-[2.5px] border-[#2a2a2a] bg-gradient-to-br from-[#1a4a7a]/90 to-[#0d2848]/95 shadow-inner">
        <div className="absolute inset-[3px] rounded-[42%] bg-gradient-to-br from-[#2563a8]/40 to-[#0f2744]/60" />
      </div>
      <div className="absolute left-[38%] top-[42%] h-[8%] w-[24%] rounded-sm bg-[#1a1a1a]" />
      <div className="absolute left-[22%] top-[38%] h-[3px] w-[18%] rotate-[-8deg] rounded-full bg-[#333]" />
      <div className="absolute right-[22%] top-[38%] h-[3px] w-[18%] rotate-[8deg] rounded-full bg-[#333]" />
    </div>
  );
}

/** Black candle jar with flame */
function WickMockup() {
  return (
    <div className="relative flex h-[90%] w-[55%] flex-col items-center justify-end">
      <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
        <div className="h-5 w-5 rounded-full bg-amber-glow/80 blur-md candle-glow" />
        <div className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2">
          <div className="mx-auto h-2 w-1 rounded-full bg-gradient-to-t from-amber-warm to-[#fff4d6]" />
          <div className="mx-auto -mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-warm" />
        </div>
      </div>
      <div className="relative mt-4 w-full flex-1 rounded-sm bg-gradient-to-b from-[#1c1c1c] via-[#121212] to-[#0a0a0a] border border-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="absolute inset-x-[12%] top-[18%] h-[3px] rounded-full bg-white/5" />
        <div className="absolute inset-x-[20%] top-[28%] text-center text-[5px] font-bold uppercase tracking-[0.2em] text-white/25">
          SLUMPED
        </div>
        <div className="absolute inset-x-[8%] bottom-[22%] h-[35%] rounded-sm bg-gradient-to-b from-[#2a2218] to-[#1a1510]" />
      </div>
      <div className="h-[6%] w-[108%] rounded-b-md bg-[#0a0a0a] border-t border-white/5" />
    </div>
  );
}

/** Black glass spray bottle */
function MistMockup() {
  return (
    <div className="relative flex h-[92%] w-[42%] flex-col items-center">
      <div className="relative z-10 mb-[-2px] flex w-full flex-col items-center">
        <div className="h-2.5 w-3 rounded-t-sm bg-[#1a1a1a]" />
        <div className="h-3 w-5 rounded-t-md bg-gradient-to-b from-[#2a2a2a] to-[#151515]" />
        <div className="h-1.5 w-4 rounded-b-full bg-[#111]" />
      </div>
      <div className="relative w-full flex-1 rounded-b-lg rounded-t-sm border border-white/[0.07] bg-gradient-to-b from-[#1e1e22] via-[#141418] to-[#0a0a0c] shadow-[inset_-4px_0_12px_rgba(255,255,255,0.03),inset_4px_0_8px_rgba(0,0,0,0.5)]">
        <div className="absolute left-[12%] top-[8%] h-[55%] w-[8%] rounded-full bg-white/[0.04]" />
        <div className="absolute bottom-[18%] left-1/2 w-[70%] -translate-x-1/2 text-center text-[5px] font-semibold uppercase tracking-widest text-white/20">
          MIST
        </div>
      </div>
    </div>
  );
}

/** Folded cooling pillowcase */
function CoolCaseMockup() {
  return (
    <div className="relative h-[75%] w-[88%]">
      <div className="absolute inset-0 rotate-[-6deg] rounded-lg border border-white/[0.06] bg-gradient-to-br from-[#2a3038] via-[#1e242c] to-[#141a22] shadow-lg">
        <div className="absolute inset-0 rounded-lg bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.04)_50%,transparent_60%)]" />
        <div className="absolute left-[8%] top-[15%] h-[70%] w-[42%] rounded-sm border border-white/5 bg-gradient-to-br from-[#353d48]/80 to-[#252c35]/60" />
        <div className="absolute right-[10%] top-[25%] h-[55%] w-[38%] rounded-sm border border-white/5 bg-gradient-to-br from-[#303840]/90 to-[#1a2028]" />
        <div className="absolute left-[20%] top-[20%] h-px w-[50%] bg-white/10" />
        <div className="absolute left-[15%] top-[45%] h-px w-[60%] bg-white/5" />
      </div>
    </div>
  );
}

/** Rolled cozy socks */
function SocksMockup() {
  return (
    <div className="relative flex h-[80%] w-full items-end justify-center gap-2">
      <div className="relative h-[85%] w-[38%]">
        <div className="absolute inset-0 rounded-t-2xl rounded-b-3xl bg-gradient-to-b from-[#2a3038] to-[#1a1e24] border border-white/[0.06]">
          <div className="absolute inset-x-[15%] top-[20%] space-y-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-px w-full bg-white/[0.06]" />
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-[78%] w-[38%] -rotate-12">
        <div className="absolute inset-0 rounded-t-2xl rounded-b-3xl bg-gradient-to-b from-[#252a32] to-[#161a20] border border-white/[0.06]">
          <div className="absolute inset-x-[15%] top-[22%] space-y-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-px w-full bg-white/[0.05]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Sound + light machine — dome lamp on fabric base */
function GlowMockup() {
  return (
    <div className="relative flex h-[95%] w-[75%] flex-col items-center justify-end">
      <div className="absolute top-[2%] left-1/2 z-0 h-[45%] w-[80%] -translate-x-1/2 rounded-full bg-amber-glow/30 blur-2xl amber-glow" />
      <div className="relative z-10 w-full flex-[0_0_48%]">
        <div className="absolute inset-x-[5%] bottom-0 h-[85%] rounded-t-[100%] bg-gradient-to-b from-[#3d3528]/90 via-[#2a2418] to-[#1a1610] border border-amber/20 shadow-[inset_0_-8px_24px_rgba(255,159,74,0.35),inset_0_4px_12px_rgba(255,200,120,0.15)]">
          <div className="absolute inset-x-[20%] top-[25%] h-[30%] rounded-full bg-gradient-to-b from-[#ffcc80]/50 to-[#e8a54b]/20 blur-sm" />
        </div>
      </div>
      <div className="relative z-20 -mt-1 w-[88%] rounded-lg border border-white/[0.08] bg-gradient-to-b from-[#1a1a1e] to-[#0e0e10] px-2 py-2 shadow-lg">
        <div className="mb-1 flex justify-center gap-0.5">
          {[3, 5, 7, 5, 3].map((h, i) => (
            <div
              key={i}
              className="w-0.5 rounded-full bg-amber/60"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
        <div className="mx-auto h-1 w-[60%] rounded-full bg-white/10" />
        <div className="mt-1 flex justify-center gap-1">
          <div className="h-1 w-1 rounded-full bg-amber/80" />
          <div className="h-1 w-1 rounded-full bg-white/20" />
          <div className="h-1 w-1 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="mt-1 h-[8%] w-[95%] rounded-b-md bg-[#141418] border border-white/5" />
    </div>
  );
}
