"use client";

import { ProductStudioPhoto } from "@/components/product/ProductStudioPhoto";

function HeroPhotoTile({
  variant,
  alt,
  className,
  priority = false,
}: {
  variant: "glow" | "blackout" | "nightshades" | "mist" | "fan";
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050608] shadow-[0_20px_50px_rgba(0,0,0,0.55)] ${className ?? ""}`}
    >
      <ProductStudioPhoto
        variant={variant}
        alt={alt}
        rounded="none"
        priority={priority}
        className="h-full min-h-[140px] w-full"
        sizes="(max-width: 1024px) 45vw, 24vw"
      />
    </div>
  );
}

export function HeroProductComposition() {
  return (
    <div className="relative w-full max-w-[720px] lg:max-w-[780px]">
      <div
        className="pointer-events-none absolute -inset-[12%] bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(245,193,108,0.22)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#12151c] via-[#0a0c10] to-[#050608] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.65)] sm:p-4 lg:p-5">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_30%,rgba(245,193,108,0.08)_0%,transparent_60%)]"
          aria-hidden
        />

        {/* Gift box label — back layer */}
        <div
          className="pointer-events-none absolute left-4 top-4 z-0 rounded-xl border border-gold/20 bg-[#101318]/90 px-4 py-3 text-center shadow-lg sm:left-5 sm:top-5"
          aria-hidden
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold sm:text-[10px]">
            GET SLUMPED™
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-cream">
            Sleep System
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:grid-cols-12 sm:gap-3">
          <HeroPhotoTile
            variant="glow"
            alt="Slumped Glow"
            priority
            className="col-span-1 min-h-[160px] sm:col-span-6 sm:row-span-2 sm:min-h-[200px] lg:min-h-[228px]"
          />
          <HeroPhotoTile
            variant="blackout"
            alt="Slumped Blackout"
            priority
            className="col-span-1 min-h-[130px] sm:col-span-6 sm:min-h-[150px]"
          />
          <HeroPhotoTile
            variant="nightshades"
            alt="Slumped NightShades"
            className="col-span-1 min-h-[130px] sm:col-span-6 sm:min-h-[150px]"
          />
          <HeroPhotoTile
            variant="mist"
            alt="Slumped Mist"
            className="col-span-1 min-h-[160px] sm:col-span-6 sm:row-span-2 sm:min-h-[200px] lg:min-h-[228px]"
          />
          <HeroPhotoTile
            variant="fan"
            alt="Slumped Fan — cooling add-on"
            className="col-span-2 min-h-[110px] sm:col-span-6 sm:min-h-[128px]"
          />
        </div>
      </div>
    </div>
  );
}
