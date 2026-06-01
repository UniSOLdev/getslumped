"use client";

/** Grounded product shadow */
function ProductShadow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute -bottom-[6%] left-1/2 h-[14%] w-[75%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-md ${className}`}
      aria-hidden
    />
  );
}

/** Main focal — Slumped Glow sound/light machine */
export function HeroGlowLamp() {
  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute -top-[8%] left-1/2 h-[55%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_80%,rgba(255,180,80,0.55)_0%,rgba(232,165,75,0.2)_40%,transparent_70%)] blur-2xl" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end pb-[2%]">
        {/* Half-dome amber lamp */}
        <div className="relative w-[88%] flex-[0_0_58%]">
          <div className="absolute inset-x-0 bottom-0 top-[8%] overflow-hidden rounded-t-[100%] border border-amber/25 bg-gradient-to-b from-[#4a3d2a] via-[#2e2618] to-[#1a1510] shadow-[inset_0_-20px_50px_rgba(255,180,90,0.45),inset_0_8px_20px_rgba(255,220,150,0.2)]">
            <div className="absolute inset-x-[15%] top-[18%] h-[45%] rounded-full bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,210,120,0.7)_0%,rgba(255,159,74,0.25)_50%,transparent_75%)] blur-[2px]" />
            <div className="absolute inset-x-[25%] top-[28%] h-[25%] rounded-full bg-[radial-gradient(circle,rgba(255,240,200,0.5)_0%,transparent_70%)]" />
          </div>
        </div>
        {/* Fabric / textured base */}
        <div className="relative z-20 -mt-1 w-[92%] rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#222228] via-[#16161c] to-[#0e0e12] px-4 py-3 shadow-lg">
          <div className="absolute inset-0 rounded-xl opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)]" />
          <div className="relative mb-2 flex items-end justify-center gap-1">
            {[4, 7, 10, 12, 10, 7, 4].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-amber/80 to-amber/30"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <div className="relative mx-auto h-2 w-[72%] rounded-sm bg-[#0a0a0e] border border-white/10">
            <div className="absolute inset-y-0 left-[20%] w-[35%] rounded-sm bg-amber/20" />
          </div>
          <div className="relative mt-2 flex justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_rgba(255,159,74,0.8)]" />
            <div className="h-2 w-2 rounded-full bg-white/15" />
            <div className="h-2 w-2 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="mt-1 h-[5%] w-[96%] rounded-b-lg bg-[#0c0c10] border-x border-b border-white/5" />
      </div>
      <ProductShadow className="w-[85%] opacity-90" />
    </div>
  );
}

/** Satin blackout mask — front placement */
export function HeroBlackoutMask() {
  return (
    <div className="relative h-full w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]">
      <div className="relative mx-auto h-[88%] w-[95%]">
        <div className="absolute left-[2%] top-[18%] h-[48%] w-[40%] rounded-[48%] bg-gradient-to-br from-[#2a2a30] via-[#121216] to-[#050508] shadow-[inset_0_-4px_12px_rgba(255,255,255,0.1),inset_2px_2px_8px_rgba(0,0,0,0.9)] border border-white/[0.06]">
          <div className="absolute left-[18%] top-[22%] h-[28%] w-[40%] rounded-full bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        <div className="absolute right-[2%] top-[18%] h-[48%] w-[40%] rounded-[48%] bg-gradient-to-br from-[#2a2a30] via-[#121216] to-[#050508] shadow-[inset_0_-4px_12px_rgba(255,255,255,0.1)] border border-white/[0.06]">
          <div className="absolute right-[18%] top-[22%] h-[28%] w-[40%] rounded-full bg-gradient-to-bl from-white/15 to-transparent" />
        </div>
        <div className="absolute left-[18%] top-[40%] h-[22%] w-[64%] rounded-[50%] bg-[#08080c]" />
        <div className="absolute left-1/2 top-[6%] h-[10%] w-[62%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#3a3a42] to-transparent" />
        <div className="absolute bottom-[8%] left-1/2 h-[8%] w-[78%] -translate-x-1/2 rounded-full border border-white/[0.08] bg-gradient-to-b from-[#1a1a20] to-[#0a0a0e]" />
      </div>
      <ProductShadow />
    </div>
  );
}

/** Blue light glasses — full frame */
export function HeroNightShades() {
  return (
    <div className="relative h-full w-full drop-shadow-[0_16px_28px_rgba(0,0,0,0.8)]">
      <div className="relative mx-auto h-[75%] w-full pt-[8%]">
        <div className="absolute left-[4%] top-[32%] h-[58%] w-[38%] rounded-[42%] border-[3px] border-[#2c2c34] bg-gradient-to-br from-[#1e5a8a]/95 to-[#0c2848] shadow-inner">
          <div className="absolute inset-[4px] rounded-[40%] bg-gradient-to-br from-[#2a7ab8]/50 to-[#0a2040]/80" />
          <div className="absolute left-[22%] top-[18%] h-[22%] w-[32%] rounded-full bg-white/15" />
        </div>
        <div className="absolute right-[4%] top-[32%] h-[58%] w-[38%] rounded-[42%] border-[3px] border-[#2c2c34] bg-gradient-to-br from-[#1e5a8a]/95 to-[#0c2848] shadow-inner">
          <div className="absolute inset-[4px] rounded-[40%] bg-gradient-to-br from-[#2a7ab8]/50 to-[#0a2040]/80" />
        </div>
        <div className="absolute left-[36%] top-[48%] z-10 h-[10%] w-[28%] rounded-md bg-[#1a1a22] shadow-md" />
        <div className="absolute left-[20%] top-[44%] h-[4px] w-[22%] rotate-[-10deg] rounded-full bg-[#3d3d48]" />
        <div className="absolute right-[20%] top-[44%] h-[4px] w-[22%] rotate-[10deg] rounded-full bg-[#3d3d48]" />
        <div className="absolute left-[2%] top-[58%] h-[3px] w-[18%] rotate-[-25deg] rounded-full bg-[#333]" />
        <div className="absolute right-[2%] top-[58%] h-[3px] w-[18%] rotate-[25deg] rounded-full bg-[#333]" />
      </div>
      <ProductShadow className="w-[90%]" />
    </div>
  );
}

/** Slumped Wick candle with label */
export function HeroWickCandle() {
  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute -top-[5%] left-1/2 z-20 h-[35%] w-[50%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,160,60,0.7)_0%,rgba(232,165,75,0.3)_40%,transparent_70%)] blur-lg" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
        <div className="relative mb-1 flex flex-col items-center">
          <div className="h-4 w-4 rounded-full bg-[radial-gradient(circle,#fff8e0_0%,#ffb040_50%,transparent_70%)] blur-[2px]" />
          <div className="h-5 w-[3px] rounded-full bg-gradient-to-t from-[#ff9a3c] to-[#ffe8b0]" />
        </div>
        <div className="relative w-[70%] flex-1 min-h-0 rounded-sm border border-white/[0.07] bg-gradient-to-b from-[#222222] via-[#141414] to-[#0a0a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="absolute inset-x-[10%] top-[12%] h-[2px] bg-white/5" />
          <p className="absolute inset-x-0 top-[22%] text-center text-[7px] font-bold uppercase tracking-[0.18em] text-white/30 sm:text-[8px]">
            SLUMPED
          </p>
          <p className="absolute inset-x-0 top-[30%] text-center text-[6px] font-semibold uppercase tracking-[0.12em] text-white/20">
            WICK
          </p>
          <div className="absolute inset-x-[12%] bottom-[18%] top-[42%] rounded-sm bg-gradient-to-b from-[#2e2618] to-[#1a140e]" />
        </div>
        <div className="h-[5%] w-[78%] rounded-b-md bg-[#080808] border-t border-white/5" />
      </div>
      <ProductShadow className="w-[65%]" />
    </div>
  );
}

/** Tall mist spray bottle */
export function HeroMistBottle() {
  return (
    <div className="relative h-full w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.85)]">
      <div className="relative mx-auto flex h-[95%] w-[55%] flex-col items-center">
        <div className="relative z-10 mb-[-3px] flex flex-col items-center">
          <div className="h-3 w-4 rounded-t bg-[#1c1c22]" />
          <div className="h-4 w-6 rounded-t-md bg-gradient-to-b from-[#353540] to-[#1a1a22] border border-white/10" />
          <div className="h-2 w-5 rounded-b-full bg-[#121218]" />
        </div>
        <div className="relative w-full flex-1 rounded-t-md rounded-b-lg border border-white/[0.08] bg-gradient-to-b from-[#282830] via-[#1a1a22] to-[#0c0c10] shadow-[inset_-6px_0_16px_rgba(255,255,255,0.04)]">
          <div className="absolute left-[14%] top-[6%] h-[50%] w-[12%] rounded-full bg-white/[0.05]" />
          <p className="absolute bottom-[22%] left-1/2 w-full -translate-x-1/2 text-center text-[7px] font-bold uppercase tracking-[0.2em] text-white/25">
            MIST
          </p>
        </div>
      </div>
      <ProductShadow className="w-[50%]" />
    </div>
  );
}

/** Folded pillowcase fabric */
export function HeroCoolCase() {
  return (
    <div className="relative h-full w-full drop-shadow-[0_20px_32px_rgba(0,0,0,0.8)]">
      <div className="relative h-[90%] w-full rotate-[-8deg]">
        <div className="absolute inset-[5%] rounded-xl border border-white/[0.07] bg-gradient-to-br from-[#3a424c] via-[#2a323c] to-[#1e262e] shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_30%,rgba(255,255,255,0.06)_45%,transparent_55%)]" />
          <div className="absolute left-[6%] top-[12%] h-[72%] w-[48%] rounded-lg border border-white/[0.06] bg-gradient-to-br from-[#4a5562]/90 to-[#323c48]/80 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]" style={{ transform: "skewY(-2deg)" }} />
          <div className="absolute right-[8%] top-[22%] h-[58%] w-[42%] rounded-lg border border-white/[0.05] bg-gradient-to-br from-[#3d4854] to-[#2a343e]" style={{ transform: "skewY(3deg)" }} />
          <div className="absolute left-[12%] top-[18%] h-px w-[55%] bg-white/10" />
          <div className="absolute left-[10%] top-[38%] h-px w-[60%] bg-white/[0.06]" />
          <div className="absolute left-[14%] top-[55%] h-px w-[45%] bg-white/[0.05]" />
        </div>
      </div>
      <ProductShadow className="w-[80%]" />
    </div>
  );
}
