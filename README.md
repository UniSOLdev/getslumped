# GET SLUMPED™

Premium DTC sleep ecommerce homepage. Built for Meta/TikTok conversion.

**Tagline:** Put your room in sleep mode.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Framer Motion
- lucide-react

## Page sections

1. Announcement bar
2. Header (nav + cart icons)
3. Hero (copy + product composition)
4. Trust strip
5. Product grid (7 SKUs)
6. Problem section
7. Sleep system lineup
8. Bundle pricing
9. Testimonials
10. Guarantee banner
11. Footer + email capture

## Components

```
src/components/landing/
  AnnouncementBar.tsx
  Header.tsx
  Hero.tsx
  TrustStrip.tsx
  ProductGrid.tsx
  ProblemSection.tsx
  SystemSection.tsx
  BundleSection.tsx
  Testimonials.tsx
  Guarantee.tsx
  Footer.tsx

src/components/product/
  ProductMockup.tsx   # CSS-only product visuals
```

## Brand colors

| Token | Hex |
|-------|-----|
| Matte Black | `#080808` |
| Midnight / Navy | `#0C1118` / `#101827` |
| Accent (CTAs) | `#3B7DFF` |
| Amber (candle glow) | `#E8A54B` |
