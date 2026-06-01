"use client";

import { motion } from "framer-motion";
import { ProductImage } from "@/components/product/ProductImage";
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
          <p className="mx-auto mt-3 max-w-xl text-base text-cream-muted sm:text-lg">
            Sound. Light. Scent. Comfort. Routine.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-r from-[#0c0e12] via-[#080a0c] to-[#0c0e12]"
        >
          <div className="scrollbar-hide flex items-end gap-1 overflow-x-auto px-4 py-8 sm:gap-2 sm:px-8 sm:py-10 md:justify-center">
            {systemProducts.map((product, i) => (
              <div key={product.id} className="flex shrink-0 items-center gap-1 sm:gap-2">
                {i > 0 && (
                  <span className="pb-10 text-base font-light text-white/15 sm:text-lg">+</span>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex min-w-[88px] flex-col items-center sm:min-w-[110px]"
                >
                  <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-[#12151a] p-2 sm:h-28 sm:w-28">
                    <ProductImage
                      variant={product.variant}
                      alt={product.name}
                      className="h-full w-full"
                      sizes="112px"
                    />
                  </div>
                  <p className="mt-2 max-w-[88px] text-center text-[10px] font-semibold leading-tight text-cream-muted sm:text-xs">
                    {product.name.replace("Slumped ", "")}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
