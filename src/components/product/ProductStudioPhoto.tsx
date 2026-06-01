"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProductVariant } from "@/lib/products";
import {
  getProductImage,
  PRODUCT_PHOTO_TONE,
  usesPlaceholder,
  type ProductPhotoTone,
} from "@/lib/product-images";
import { GlowProductPlaceholder } from "@/components/product/GlowProductPlaceholder";
import { WickProductPlaceholder } from "@/components/product/WickProductPlaceholder";

interface ProductStudioPhotoProps {
  variant: ProductVariant;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  tone?: ProductPhotoTone;
  rounded?: "t-2xl" | "xl" | "2xl" | "none";
}

const TONE_GLOW: Record<ProductPhotoTone, string> = {
  amber:
    "bg-[radial-gradient(ellipse_75%_60%_at_50%_65%,rgba(245,193,108,0.14)_0%,transparent_68%)]",
  blue: "bg-[radial-gradient(ellipse_75%_60%_at_50%_65%,rgba(79,140,255,0.12)_0%,transparent_68%)]",
  neutral:
    "bg-[radial-gradient(ellipse_75%_60%_at_50%_70%,rgba(255,255,255,0.04)_0%,transparent_68%)]",
};

export function ProductStudioPhoto({
  variant,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 85vw, 25vw",
  tone,
  rounded = "t-2xl",
}: ProductStudioPhotoProps) {
  const src = getProductImage(variant);
  const photoTone = tone ?? PRODUCT_PHOTO_TONE[variant];
  const isPlaceholder = usesPlaceholder(variant);

  const roundedClass =
    rounded === "none"
      ? ""
      : rounded === "xl"
        ? "rounded-xl"
        : rounded === "2xl"
          ? "rounded-2xl"
          : "rounded-t-2xl";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#050608]",
        roundedClass,
        className
      )}
    >
      <div
        className={cn("pointer-events-none absolute inset-0", TONE_GLOW[photoTone])}
        aria-hidden
      />
      <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-4">
        {variant === "glow" && (
          <GlowProductPlaceholder compact className="h-full max-h-full w-full" />
        )}
        {variant === "wick" && (
          <WickProductPlaceholder compact className="h-full w-full" />
        )}
        {!isPlaceholder && src && (
          <Image
            src={src}
            alt={alt}
            width={1024}
            height={682}
            priority={priority}
            sizes={sizes}
            className={cn(
              "relative z-10 max-h-full w-full object-contain opacity-100",
              imageClassName
            )}
          />
        )}
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[38%] bg-gradient-to-t from-[#050608] via-[#050608]/85 to-transparent"
        aria-hidden
      />
    </div>
  );
}
