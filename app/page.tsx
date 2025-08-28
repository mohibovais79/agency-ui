// app/page.tsx
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechMarqueeSection } from "@/components/sections/TechMarqueeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <ClientLogosSection />
      <TechMarqueeSection />

      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}