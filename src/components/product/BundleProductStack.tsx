"use client";

import { cn } from "@/lib/utils";
import { ProductStudioPhoto } from "@/components/product/ProductStudioPhoto";
import type { ProductVariant } from "@/lib/products";

interface BundleProductStackProps {
  variants: ProductVariant[];
  className?: string;
}

export function BundleProductStack({ variants, className }: BundleProductStackProps) {
  const visible = variants.slice(0, 5);

  return (
    <div
      className={cn(
        "relative mx-auto mb-6 grid w-full max-w-[320px] grid-cols-5 gap-1.5 sm:max-w-[360px] sm:gap-2",
        className
      )}
    >
      {visible.map((variant) => (
        <div
          key={variant}
          className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#050608] shadow-md"
        >
          <ProductStudioPhoto
            variant={variant}
            alt=""
            rounded="none"
            className="aspect-square h-[56px] sm:h-[64px]"
            sizes="64px"
          />
        </div>
      ))}
    </div>
  );
}
