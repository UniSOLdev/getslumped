"use client";

import { ProductStudioPhoto } from "@/components/product/ProductStudioPhoto";
import type { ProductVariant } from "@/lib/products";
import type { ProductPhotoTone } from "@/lib/product-images";

interface ProductImageProps {
  variant: ProductVariant;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  tone?: ProductPhotoTone;
  rounded?: "t-2xl" | "xl" | "2xl" | "none";
}

export function ProductImage(props: ProductImageProps) {
  return <ProductStudioPhoto {...props} />;
}
