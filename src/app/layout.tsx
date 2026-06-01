import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GET SLUMPED™ | Put Your Room In Sleep Mode",
  description:
    "Premium sleep system combining sound, light, scent, blackout comfort, blue light blocking, and bedtime essentials. Sleep deeper. Wake better.",
  openGraph: {
    title: "GET SLUMPED™ | Sleep Deeper. Wake Better.",
    description: "Put your room in sleep mode. Shop the complete Get Slumped™ system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-matte-black text-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
