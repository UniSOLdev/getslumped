export type ProductVariant =
  | "glow"
  | "fan"
  | "blackout"
  | "nightshades"
  | "wick"
  | "mist"
  | "coolcase"
  | "socks";

export interface Product {
  id: string;
  name: string;
  descriptor: string;
  price: number;
  variant: ProductVariant;
}

export const products: Product[] = [
  {
    id: "glow",
    name: "Slumped Glow",
    descriptor: "Sound + Light Machine",
    price: 59.99,
    variant: "glow",
  },
  {
    id: "fan",
    name: "Slumped Fan",
    descriptor: "Cooling Bedside Fan",
    price: 39.99,
    variant: "fan",
  },
  {
    id: "blackout",
    name: "Slumped Blackout",
    descriptor: "3D Sleep Mask",
    price: 19.99,
    variant: "blackout",
  },
  {
    id: "nightshades",
    name: "Slumped NightShades",
    descriptor: "Blue Light Glasses",
    price: 24.99,
    variant: "nightshades",
  },
  {
    id: "wick",
    name: "Slumped Wick",
    descriptor: "Sleep Candle",
    price: 24.99,
    variant: "wick",
  },
  {
    id: "mist",
    name: "Slumped Mist",
    descriptor: "Pillow Spray",
    price: 19.99,
    variant: "mist",
  },
  {
    id: "coolcase",
    name: "Slumped CoolCase",
    descriptor: "Satin Pillowcase",
    price: 29.99,
    variant: "coolcase",
  },
  {
    id: "socks",
    name: "Slumped Socks",
    descriptor: "Cozy Sleep Socks",
    price: 14.99,
    variant: "socks",
  },
];

export const heroProductVariants: ProductVariant[] = [
  "glow",
  "blackout",
  "mist",
  "wick",
  "nightshades",
  "coolcase",
  "socks",
  "fan",
];

export const systemProducts = products.filter((p) =>
  ["glow", "blackout", "nightshades", "wick", "mist", "coolcase", "fan"].includes(
    p.id
  )
);
