import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { WhyRagwel } from "@/components/sections/WhyRagwel";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <ServicesOverview />
      <AboutTeaser />
      <SectorsGrid />
      <WhyRagwel />
    </PageShell>
  );
}
