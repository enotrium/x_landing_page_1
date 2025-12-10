"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

// Lazy load below-the-fold sections for faster initial load
const ManifestoSection = dynamic(
  () => import("@/components/sections/ManifestoSection").then(mod => ({ default: mod.ManifestoSection })),
  { ssr: true }
);

const SupplyChainSection = dynamic(
  () => import("@/components/sections/SupplyChainSection").then(mod => ({ default: mod.SupplyChainSection })),
  { ssr: false } // Globe needs client-side only
);

const DemoSection = dynamic(
  () => import("@/components/sections/DemoSection").then(mod => ({ default: mod.DemoSection })),
  { ssr: true }
);

const PricingSection = dynamic(
  () => import("@/components/sections/PricingSection").then(mod => ({ default: mod.PricingSection })),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then(mod => ({ default: mod.ContactSection })),
  { ssr: true }
);

// Lazy load heavy visualizations
const DarkVeil = dynamic(() => import("@/components/visualizations/DarkVeil"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* DarkVeil - Only visible in dark mode, lazy loaded */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DarkVeil />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <ManifestoSection />
        <SupplyChainSection />
        <DemoSection />
        <PricingSection />
        <ContactSection />
      </div>
    </main>
  );
}
