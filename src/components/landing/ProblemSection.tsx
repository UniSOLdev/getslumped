"use client";

import { motion } from "framer-motion";
import { Volume2, Smartphone, Wind, Brain, Home } from "lucide-react";

const problems = [
  {
    icon: Volume2,
    title: "Noise",
    description:
      "Loud, unpredictable sounds keep your brain on high alert.",
  },
  {
    icon: Smartphone,
    title: "Screens",
    description: "Blue light at night keeps your mind awake.",
  },
  {
    icon: Wind,
    title: "Mouth Breathing",
    description: "Restless breathing can disrupt your night.",
  },
  {
    icon: Brain,
    title: "Stress",
    description: "An overactive mind makes it hard to shut down.",
  },
  {
    icon: Home,
    title: "Bad Setup",
    description: "Your room environment can ruin good sleep habits.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-y border-white/[0.04] bg-[#080a0c] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-cream sm:text-3xl lg:text-4xl">
            It&apos;s not you. It&apos;s your sleep environment.
          </h2>
          <p className="mt-3 text-base text-cream-muted sm:text-lg">
            Noise. Screens. Stress. Bad habits. They add up. We fix that.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {problems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card rounded-xl p-5 sm:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber/10 text-amber">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-cream sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
