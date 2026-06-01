"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const bundles = [
  {
    name: "Starter Kit",
    price: 59.99,
    includes: ["Blackout Mask", "NightShades", "Wick"],
    cta: "Shop Starter",
    popular: false,
  },
  {
    name: "Sleep System",
    price: 129.99,
    includes: ["Glow", "Blackout", "NightShades", "Wick", "Mist", "CoolCase"],
    cta: "Shop Sleep System",
    popular: true,
  },
  {
    name: "Deep Sleep Kit",
    price: 179.99,
    includes: ["Sleep System plus Socks", "Extra candle", "Reset cards"],
    cta: "Shop Deep Sleep",
    popular: false,
  },
];

export function BundleSection() {
  return (
    <section id="bundles" className="border-t border-white/[0.04] bg-[#080a0c] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-2xl font-bold text-cream sm:text-3xl lg:text-4xl"
        >
          Choose your sleep setup.
        </motion.h2>

        <div className="grid gap-5 lg:grid-cols-3">
          {bundles.map((bundle, i) => (
            <motion.article
              key={bundle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl p-7 sm:p-8 ${
                bundle.popular
                  ? "border-2 border-amber/35 bg-gradient-to-b from-amber/[0.08] to-[#0a0a0a] shadow-[0_0_50px_rgba(232,165,75,0.08)]"
                  : "glass-card"
              }`}
            >
              {bundle.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0a0a0a]">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-cream">{bundle.name}</h3>
              <p className="mt-1 text-3xl font-bold text-cream">
                ${bundle.price.toFixed(2)}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {bundle.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-cream-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant={bundle.popular ? "primary" : "secondary"}
                className="mt-7 w-full"
              >
                {bundle.cta}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
