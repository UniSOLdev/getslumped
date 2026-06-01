import type { ProductVariant } from "./products";

export const PRODUCT_IMAGE_MAP: Record<ProductVariant, string> = {
  glow: "/assets/products/slumped-glow.png",
  blackout: "/assets/products/slumped-blackout.png",
  nightshades: "/assets/products/slumped-nightshades.png",
  wick: "/assets/products/slumped-wick.png",
  mist: "/assets/products/slumped-mist.png",
  coolcase: "/assets/products/slumped-coolcase.png",
  socks: "/assets/products/slumped-socks.png",
};

export const HERO_KIT_IMAGE = "/assets/products/slumped-hero-kit.png";

export function getProductImage(variant: ProductVariant): string {
  return PRODUCT_IMAGE_MAP[variant];
}
