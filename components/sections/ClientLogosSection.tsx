"use client";

import { motion } from "framer-motion";

const partners = [
  "AI-Native Startups",
  "Enterprise Skunkworks",
  "Series A+ SaaS",
  "RevOps Teams",
  "Innovation Pods",
  "Technical Founders",
];

export function ClientLogosSection() {
  return (
    <section className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, amount: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="gradient-border glass-panel relative mx-auto max-w-5xl px-8 py-14 text-center"
      >
        <div aria-hidden className="noise-overlay rounded-[1.5rem]" />

        <p className="section-eyebrow mx-auto">Who We Embed With</p>
        <h3 className="mx-auto mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-balance md:text-3xl">
          Engineered for the teams driving the next wave of intelligence.
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/52">
          Our multi-disciplinary pods act as an extension of your product and revenue
          teams — executing complex, measurable shifts in your core metrics.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.92 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all hover:border-violet-500/35 hover:bg-white/[0.07] hover:text-white"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "linear-gradient(135deg, #A78BFA, #22D3EE)" }}
              />
              {name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
