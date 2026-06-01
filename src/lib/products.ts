export type ProductVariant =
  | "blackout"
  | "nightshades"
  | "wick"
  | "mist"
  | "coolcase"
  | "socks"
  | "glow";

export interface Product {
  id: string;
  name: string;
  descriptor: string;
  price: number;
  variant: ProductVariant;
}

export const products: Product[] = [
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
    descriptor: "Cooling Pillowcase",
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
  {
    id: "glow",
    name: "Slumped Glow",
    descriptor: "Sound + Light Machine",
    price: 59.99,
    variant: "glow",
  },
];

export const heroProducts = products.filter((p) =>
  ["glow", "blackout", "wick", "mist", "nightshades", "coolcase"].includes(p.id)
);

export const systemProducts = products.filter((p) =>
  ["glow", "blackout", "nightshades", "wick", "mist", "coolcase"].includes(p.id)
);
