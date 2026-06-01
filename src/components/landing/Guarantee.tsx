"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Guarantee() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-r from-[#101827]/80 via-[#0a0a0a] to-[#101827]/80 px-6 py-10 sm:px-10 sm:py-12"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_100%_50%,rgba(232,165,75,0.1)_0%,transparent_70%)]" />
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber/15 text-amber">
              <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-cream sm:text-2xl lg:text-3xl">
                30-Night Better Sleep Guarantee
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-cream-muted sm:text-base">
                Try the Get Slumped™ system for 30 nights. If you don&apos;t sleep
                better, get a full refund.
              </p>
            </div>
            <Button
              className="shrink-0"
              onClick={() =>
                document.getElementById("bundles")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Slumped
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
