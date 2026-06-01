"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jake T.",
    quote:
      "I fall asleep faster, stay asleep longer, and wake up without feeling wrecked.",
  },
  {
    name: "Sara M.",
    quote:
      "Finally waking up without that groggy, exhausted feeling. Worth every penny.",
  },
  {
    name: "Mike R.",
    quote:
      "The best sleep I've had in years. Everything works together perfectly.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-2xl font-bold text-cream sm:text-3xl lg:text-4xl"
        >
          Real sleep. Real results.
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card flex flex-col rounded-xl p-6 sm:p-7"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream-muted sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 border-t border-white/[0.04] pt-4 text-sm font-semibold text-cream">
                {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
