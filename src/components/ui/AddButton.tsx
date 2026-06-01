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
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-cream transition-colors hover:border-amber/40 hover:bg-amber/10",
        className
      )}
    >
      <Plus className="h-4 w-4" strokeWidth={2.5} />
    </motion.button>
  );
}
