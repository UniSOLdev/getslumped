import type { ProductVariant } from "./products";

const ORIGINAL = "/assets/products/originals";

export const PRODUCT_IMAGE_MAP: Record<
  Exclude<ProductVariant, "glow" | "wick">,
  string
> = {
  fan: `${ORIGINAL}/slumped-fan-original.png`,
  blackout: `${ORIGINAL}/slumped-blackout-original.png`,
  nightshades: `${ORIGINAL}/slumped-nightshades-original.png`,
  mist: `${ORIGINAL}/slumped-mist-original.png`,
  coolcase: `${ORIGINAL}/slumped-coolcase-original.png`,
  socks: `${ORIGINAL}/slumped-socks-original.png`,
};

/** Solo render not available — use polished CSS placeholder */
export const PLACEHOLDER_VARIANTS: ProductVariant[] = ["glow", "wick"];

export type ProductPhotoTone = "amber" | "blue" | "neutral";

export const PRODUCT_PHOTO_TONE: Record<ProductVariant, ProductPhotoTone> = {
  glow: "amber",
  fan: "neutral",
  blackout: "neutral",
  nightshades: "blue",
  wick: "amber",
  mist: "amber",
  coolcase: "neutral",
  socks: "neutral",
};

export function usesPlaceholder(variant: ProductVariant): boolean {
  return PLACEHOLDER_VARIANTS.includes(variant);
}

export function getProductImage(variant: ProductVariant): string | null {
  if (usesPlaceholder(variant)) return null;
  return PRODUCT_IMAGE_MAP[variant as Exclude<ProductVariant, "glow" | "wick">];
}
