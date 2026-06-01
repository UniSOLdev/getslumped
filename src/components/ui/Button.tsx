"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white cta-glow border border-accent/50 hover:bg-[#4a86ff]",
  secondary:
    "bg-white/[0.04] text-cream border border-white/12 hover:border-amber/30 hover:bg-white/[0.07]",
  ghost: "text-cream-muted hover:text-cream hover:bg-white/5",
  outline:
    "border border-white/15 text-cream hover:border-amber/35 hover:bg-white/[0.03]",
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
