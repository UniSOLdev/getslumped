import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { ProductGrid } from "@/components/landing/ProductGrid";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SystemSection } from "@/components/landing/SystemSection";
import { BundleSection } from "@/components/landing/BundleSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Guarantee } from "@/components/landing/Guarantee";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="page-bg min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      <Hero />
      <TrustStrip />
      <ProductGrid />
      <ProblemSection />
      <SystemSection />
      <BundleSection />
      <Testimonials />
      <Guarantee />
      <Footer />
    </main>
  );
}
