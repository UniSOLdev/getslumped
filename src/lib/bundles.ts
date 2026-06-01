import type { ProductVariant } from "./products";

export interface Bundle {
  id: string;
  name: string;
  price: number;
  variants: ProductVariant[];
  cta: string;
  popular: boolean;
}

export const bundles: Bundle[] = [
  {
    id: "starter",
    name: "Starter Kit",
    price: 59.99,
    variants: ["blackout", "nightshades", "wick"],
    cta: "Get Starter Kit",
    popular: false,
  },
  {
    id: "sleep-system",
    name: "Sleep System",
    price: 129.99,
    variants: ["glow", "blackout", "nightshades", "wick", "mist", "coolcase"],
    cta: "Get Sleep System",
    popular: true,
  },
  {
    id: "deep-sleep",
    name: "Deep Sleep Kit",
    price: 179.99,
    variants: [
      "glow",
      "fan",
      "blackout",
      "nightshades",
      "wick",
      "mist",
      "coolcase",
      "socks",
    ],
    cta: "Get Deep Sleep Kit",
    popular: false,
  },
];
