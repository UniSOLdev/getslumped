"use client";

import { Truck, Shield, RotateCcw } from "lucide-react";

const items = [
  { icon: Truck, text: "Free shipping over $75" },
  { icon: Shield, text: "30-night better sleep guarantee" },
  { icon: RotateCcw, text: "Easy returns" },
];

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/[0.04] bg-[#080a0c] py-2 text-center text-[11px] font-medium text-cream-muted sm:text-xs">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 sm:gap-x-8">
        {items.map((item, i) => (
          <span key={item.text} className="inline-flex items-center gap-1.5">
            {i > 0 && (
              <span className="mr-4 hidden text-white/10 sm:inline" aria-hidden>
                |
              </span>
            )}
            <item.icon className="h-3 w-3 text-amber/90" strokeWidth={2} />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
