"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AddButton({ className }: { className?: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Add to cart"
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-cream transition-all duration-300 hover:border-accent/45 hover:bg-accent/15 hover:text-white hover:shadow-[0_0_20px_rgba(56,98,255,0.25)]",
        className
      )}
    >
      <Plus className="h-4 w-4" strokeWidth={2.5} />
    </motion.button>
  );
}
