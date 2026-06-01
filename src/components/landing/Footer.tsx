"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const shopLinks = ["All Products", "Sleep Systems", "Bundles", "Accessories"];
const aboutLinks = ["Our Story", "Materials", "Sustainability", "Reviews"];
const supportLinks = ["FAQ", "Shipping", "Returns", "Contact Us"];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer id="faq" className="border-t border-white/[0.04] bg-[#050608] pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-lg font-bold tracking-tight text-cream">
              GET SLUMPED<span className="text-cream-muted/50">™</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-muted">
              Premium sleep solutions designed to help you sleep deeper,
              recover better, and wake up your best.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <FooterColumn title="Shop" links={shopLinks} />
            <FooterColumn title="About" links={aboutLinks} />
            <FooterColumn title="Support" links={supportLinks} />
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-cream">Join The Slump Club</p>
            <form
              className="mt-3 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubmitted(true);
              }}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitted}
                className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-cream placeholder:text-cream-muted/50 focus:border-amber/30 focus:outline-none disabled:opacity-60"
              />
              <Button type="submit" className="shrink-0" disabled={submitted}>
                {submitted ? "Joined" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.04] pt-6 text-center text-xs text-cream-muted/60">
          © {new Date().getFullYear()} GET SLUMPED™. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-cream">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-cream-muted transition-colors hover:text-amber">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
