"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductImage } from "@/components/product/ProductImage";
import { AddButton } from "@/components/ui/AddButton";

export function ProductGrid() {
  return (
    <section id="products" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber">
              Shop All
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-cream sm:text-3xl lg:text-4xl">
              Everything you need to get slumped.
            </h2>
          </div>
          <a
            href="#bundles"
            className="text-sm font-medium text-cream-muted transition-colors hover:text-amber"
          >
            View bundles →
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-16px" }}
              transition={{ delay: (i % 4) * 0.05 }}
              whileHover={{ y: -3 }}
              className="glass-card glass-card-hover group flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
            >
              <div className="relative flex h-[160px] items-center justify-center overflow-hidden rounded-t-2xl border-b border-white/[0.04] bg-gradient-to-b from-[#141820] to-[#080a0c] p-4 sm:h-[200px] lg:h-[220px]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,rgba(232,165,75,0.1)_0%,transparent_65%)]" />
                </div>
                <ProductImage
                  variant={product.variant}
                  alt={product.name}
                  className="relative z-10 h-full w-full max-h-[140px] sm:max-h-[180px] lg:max-h-[200px]"
                  imageClassName="group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                <h3 className="text-sm font-semibold text-cream">{product.name}</h3>
                <p className="mt-0.5 text-xs text-cream-muted">{product.descriptor}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-cream">
                    ${product.price.toFixed(2)}
                  </span>
                  <AddButton />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
