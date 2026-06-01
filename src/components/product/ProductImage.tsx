"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProductVariant } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";

interface ProductImageProps {
  variant: ProductVariant;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProductImage({
  variant,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 50vw, 25vw",
}: ProductImageProps) {
  const src = getProductImage(variant);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={priority}
        sizes={sizes}
        className={cn(
          "h-full w-full object-contain transition-transform duration-300",
          imageClassName
        )}
      />
    </div>
  );
}
