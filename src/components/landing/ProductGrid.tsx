"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductStudioPhoto } from "@/components/product/ProductStudioPhoto";
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
            className="text-sm font-medium text-copy-muted transition-colors hover:text-amber"
          >
            View bundles →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-16px" }}
              transition={{ delay: (i % 4) * 0.05 }}
              whileHover={{ y: -4 }}
              className="product-card group overflow-hidden rounded-2xl"
            >
              <ProductStudioPhoto
                variant={product.variant}
                alt={product.name}
                className="h-52 sm:h-56 lg:h-64"
                imageClassName="transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
              />
              <div className="product-card__body">
                <h3 className="text-base font-semibold text-cream">{product.name}</h3>
                <p className="mt-1 text-sm text-copy-muted">{product.descriptor}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-base font-bold tracking-tight text-cream">
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
