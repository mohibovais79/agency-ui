"use client";

import { Link } from "@heroui/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "AI",
    slug: "ai",
    num: "01",
    description: "Autonomous Systems & Workflow Orchestration",
    detail: "From agentic pipelines to fine-tuned LLMs deployed at production scale.",
    color: "#A78BFA",
    glow: "rgba(139,92,246,0.15)",
    border: "rgba(139,92,246,0.3)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    name: "Data",
    slug: "data",
    num: "02",
    description: "High-Volume Pipelines & Predictive ROI",
    detail: "Data infrastructure that scales to billions of events and converts into insight.",
    color: "#22D3EE",
    glow: "rgba(34,211,238,0.12)",
    border: "rgba(34,211,238,0.3)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    name: "Design",
    slug: "design",
    num: "03",
    description: "Frictionless UX for Complex Workflows",
    detail: "Interfaces that reduce cognitive load and drive measurable adoption.",
    color: "#F0A429",
    glow: "rgba(240,164,41,0.10)",
    border: "rgba(240,164,41,0.3)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 13.5V16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5" />
        <path d="M12 3v13" />
        <path d="m8 9 4-6 4 6" />
      </svg>
    ),
  },
];

export function CaseStudiesSection() {
  return (
    <section className="w-full" id="case-studies">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, amount: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="text-center"
      >
        <p className="section-eyebrow mx-auto">Proof in Production</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          Measurable Impact, Shipped.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
          Explore how we&apos;ve engineered technological moats for visionary companies —
          transforming raw data and models into revenue-generating assets.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
          >
            <Link
              href={`/case-studies/${cat.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 no-underline transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
              style={{
                ["--hover-glow" as string]: cat.glow,
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.border} 50%, transparent)`,
                }}
              />
              {/* Background glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"
                style={{ background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${cat.glow}, transparent)` }}
              />

              {/* Number */}
              <span className="font-mono text-xs font-semibold tracking-widest text-white/20">
                {cat.num}
              </span>

              {/* Icon */}
              <div
                className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-colors duration-300 group-hover:border-white/[0.14]"
                style={{ color: cat.color }}
              >
                {cat.icon}
              </div>

              {/* Copy */}
              <h3 className="mt-5 text-xl font-bold text-white">
                {cat.name}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-white/50">
                {cat.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/38">
                {cat.detail}
              </p>

              {/* CTA arrow */}
              <div
                className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold transition-colors duration-200"
                style={{ color: cat.color }}
              >
                View Case Studies
                <svg
                  width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
