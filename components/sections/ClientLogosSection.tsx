// components/sections/TargetAudienceSection.tsx
"use client";

import { motion } from "framer-motion";

const targetPartners = [
  { name: "AI-Native Startups" },
  { name: "Enterprise Skunkworks" },
  { name: "Series A+ SaaS" },
  { name: "RevOps Teams" },
  { name: "Innovation Pods" },
  { name: "Technical Founders" },
];

// A sleek, minimal dot icon for the badges
const GlowDot = () => (
  <svg
    fill="none"
    height="12"
    viewBox="0 0 12 12"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" fill="currentColor" r="4" />
    <circle
      className="opacity-20 animate-pulse"
      cx="6"
      cy="6"
      fill="currentColor"
      r="6"
    />
  </svg>
);

export function ClientLogosSection() {
  return (
    <section className="relative w-full py-20">
      <motion.div
        className="glass-panel gradient-border relative mx-auto max-w-5xl px-8 py-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div aria-hidden className="noise-overlay" />

        <p className="section-eyebrow mx-auto">Who we embed with</p>
        <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl text-balance">
          Engineered for the teams driving the next wave of intelligence.
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/65 text-balance">
          We don&apos;t work in silos or take orders. Our multi-disciplinary
          pods act as an extension of your product and revenue teams to execute
          complex, measurable shifts in your core metrics.
        </p>

        {/* Replaced Logos with Premium Audience Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {targetPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10 hover:text-white"
            >
              <span className="text-primary">
                <GlowDot />
              </span>
              {partner.name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
