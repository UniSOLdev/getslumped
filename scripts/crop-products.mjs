/**
 * Crop product assets from slumped-product-board.png (1024×682)
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public/assets/slumped-product-board.png");
const outDir = path.join(root, "public/assets/products");

/** @type {Record<string, { left: number; top: number; width: number; height: number }>} */
const crops = {
  // Hero kit — product cluster beside headline
  "slumped-hero-kit.png": { left: 278, top: 52, width: 248, height: 268 },

  // PRODUCT MOCKUPS (DETAILED) — top-right row 1
  "slumped-glow.png": { left: 645, top: 48, width: 118, height: 128 },
  "slumped-blackout.png": { left: 762, top: 48, width: 118, height: 128 },
  "slumped-nightshades.png": { left: 878, top: 48, width: 130, height: 128 },

  // Row 2 + wick (wick sits left of row 2 in board)
  "slumped-wick.png": { left: 678, top: 198, width: 148, height: 132 },
  "slumped-mist.png": { left: 552, top: 208, width: 118, height: 118 },
  "slumped-coolcase.png": { left: 918, top: 208, width: 92, height: 118 },
  // Product grid row — Slumped Socks (7th card)
  "slumped-socks.png": { left: 502, top: 402, width: 58, height: 88 },
};

async function main() {
  const meta = await sharp(src).metadata();
  console.log(`Source: ${meta.width}×${meta.height}`);

  for (const [filename, region] of Object.entries(crops)) {
    const dest = path.join(outDir, filename);
    await sharp(src)
      .extract(region)
      .png({ compressionLevel: 9 })
      .toFile(dest);
    console.log(`✓ ${filename}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
