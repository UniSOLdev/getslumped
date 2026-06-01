"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroProductComposition } from "@/components/landing/HeroProductComposition";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/[0.04] lg:min-h-screen">
      <div className="absolute inset-0 bg-matte-black" />
      <div className="absolute inset-0 page-bg opacity-80" />

      <div className="relative mx-auto grid min-h-[100dvh] max-w-[1600px] lg:min-h-screen lg:grid-cols-2">
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
          <p className="mt-6 max-w-md text-base leading-relaxed text-copy-muted sm:max-w-lg sm:text-lg">
            The complete sleep system designed to help you unwind faster, cool
            down, recover better, and wake up feeling human again.
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
                document.getElementById("bundles")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Build Your Sleep System
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber text-amber" />
              ))}
            </div>
            <p className="text-sm text-copy-muted">
              <span className="font-semibold text-cream">12,842+</span> 5-star reviews
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex w-full items-center justify-center overflow-hidden px-2 pb-14 pt-2 sm:px-6 lg:min-h-screen lg:items-center lg:overflow-visible lg:px-4 lg:py-12 xl:pr-10"
        >
          <HeroProductComposition />
        </motion.div>
      </div>
    </section>
  );
}
