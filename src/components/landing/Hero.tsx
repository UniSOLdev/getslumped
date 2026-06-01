"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO_KIT_IMAGE } from "@/lib/product-images";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/[0.04] lg:min-h-screen">
      <div className="absolute inset-0 bg-[#050608]" />
      <div className="absolute inset-0 page-bg opacity-80" />

      <div className="relative mx-auto grid min-h-[100dvh] max-w-[1600px] lg:min-h-screen lg:grid-cols-2">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:pl-14"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber">
            Premium Sleep System
          </p>
          <h1 className="text-[2.35rem] font-bold leading-[1.05] tracking-tight text-gradient-hero sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem]">
            Sleep Deeper.
            <br />
            Wake Better.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-muted sm:max-w-lg sm:text-lg">
            The complete sleep system designed to help you unwind faster,
            recover better, and wake up feeling your best.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Slumped
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document.getElementById("system")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber text-amber" />
              ))}
            </div>
            <p className="text-sm text-cream-muted">
              <span className="font-semibold text-cream">12,842+</span> 5-star reviews
            </p>
          </div>
        </motion.div>

        {/* Right — hero kit image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex w-full items-center justify-center px-4 pb-12 pt-6 sm:px-8 lg:min-h-screen lg:px-6 lg:py-16"
        >
          <div className="relative w-full max-w-[760px]">
            <div className="pointer-events-none absolute inset-[-15%] bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,159,74,0.22)_0%,rgba(232,165,75,0.08)_40%,transparent_72%)]" />
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[20%] w-[70%] -translate-x-1/2 rounded-[100%] bg-black/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#12151a]/80 to-[#080a0c]/90 p-3 shadow-[0_32px_80px_rgba(0,0,0,0.65)] sm:p-5">
              <Image
                src={HERO_KIT_IMAGE}
                alt="GET SLUMPED Sleep System — Glow, Blackout mask, Wick candle, Mist spray, and NightShades"
                width={760}
                height={820}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="relative z-10 h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
