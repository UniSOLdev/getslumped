"use client";

import { motion } from "framer-motion";
import { ProductStudioPhoto } from "@/components/product/ProductStudioPhoto";
import { systemProducts } from "@/lib/products";

export function SystemSection() {
  return (
    <section id="system" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber">
            The System
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-cream sm:text-3xl lg:text-4xl">
            The Get Slumped™ Sleep System
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-copy-muted sm:text-lg">
            Sound. Light. Scent. Comfort. Routine.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-r from-navy/40 via-midnight to-navy/40"
        >
          <div className="scrollbar-hide flex items-stretch gap-2 overflow-x-auto px-4 py-8 sm:gap-3 sm:px-8 sm:py-10 md:justify-center">
            {systemProducts.map((product, i) => (
              <div key={product.id} className="flex shrink-0 items-center gap-1 sm:gap-2">
                {i > 0 && (
                  <span className="self-center pb-8 text-base font-light text-white/15 sm:text-lg">
                    +
                  </span>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex w-[88px] flex-col sm:w-[100px]"
                >
                  <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#050608]">
                    <ProductStudioPhoto
                      variant={product.variant}
                      alt={product.name}
                      rounded="none"
                      className="h-20 sm:h-24"
                      sizes="100px"
                    />
                  </div>
                  <p className="mt-2 text-center text-[10px] font-semibold leading-tight text-copy-muted sm:text-xs">
                    {product.name.replace("Slumped ", "")}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mx-auto mt-8 flex max-w-3xl flex-col items-center gap-5 rounded-2xl p-6 sm:flex-row sm:p-8"
        >
          <div className="w-full max-w-[140px] overflow-hidden rounded-xl border border-white/[0.06] bg-[#050608] sm:max-w-[160px]">
            <ProductStudioPhoto
              variant="fan"
              alt="Slumped Fan"
              rounded="none"
              className="h-28 sm:h-32"
              sizes="160px"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Cooling Add-On
            </p>
            <h3 className="mt-1 text-lg font-bold text-cream">Slumped Fan</h3>
            <p className="mt-2 text-sm leading-relaxed text-copy-muted sm:text-base">
              Cooling airflow for hot sleepers, white-noise style comfort, and
              better sleep temperature — built to support your full sleep system,
              not replace it.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
