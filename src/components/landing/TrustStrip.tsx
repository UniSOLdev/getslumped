"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Lock,
  Star,
  Users,
  Moon,
} from "lucide-react";

const items = [
  { icon: Truck, label: "Fast + Free Shipping Over $75" },
  { icon: ShieldCheck, label: "30-Night Guarantee" },
  { icon: Lock, label: "Secure Checkout" },
  { icon: Star, label: "12,842+ 5-Star Reviews" },
  { icon: Users, label: "Loved By Students, Shift Workers & Airbnb Hosts" },
  { icon: Moon, label: "Designed To Perform Every Night" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-white/[0.04] bg-[#0a0a0a]/80 py-4">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-0.5 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6 lg:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex min-w-[180px] shrink-0 flex-col items-center gap-2 text-center md:min-w-0"
            >
              <item.icon className="h-4 w-4 text-amber/80" strokeWidth={1.75} />
              <span className="text-[11px] font-medium leading-snug text-cream-muted">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
