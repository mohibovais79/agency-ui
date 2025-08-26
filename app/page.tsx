// app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <StatsSection />
      <CaseStudiesSection />
      <ContactSection />
    </main>
  );
}