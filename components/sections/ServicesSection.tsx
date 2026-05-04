"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    num: "01",
    category: "AI & Agentic Orchestration",
    description: "Autonomous systems that amplify your team's output — not replace it.",
    items: [
      "Agentic workflow automation",
      "Custom LLM fine-tuning & RAG",
      "Human-in-the-loop (HITL) pipelines",
      "Model evaluation & safety guardrails",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    accent: "from-violet-500/20 to-violet-900/5",
    accentBorder: "rgba(139,92,246,0.55)",
  },
  {
    num: "02",
    category: "Data Infrastructure & Intelligence",
    description: "Turn raw data into compounding business advantage.",
    items: [
      "Scalable data pipelines & lakes",
      "Predictive analytics & forecasting",
      "Real-time telemetry & AIOps",
      "Revenue intelligence modeling",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    accent: "from-cyan-500/20 to-cyan-900/5",
    accentBorder: "rgba(34,211,238,0.55)",
  },
  {
    num: "03",
    category: "Cognitive UX & Product Design",
    description: "Interfaces so intuitive they become indispensable.",
    items: [
      "Generative UI/UX systems",
      "Complex dashboard visualization",
      "Interaction & motion design",
      "Design systems built for scale",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 13.5V16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5" />
        <path d="M12 3v13" />
        <path d="m8 9 4-6 4 6" />
      </svg>
    ),
    accent: "from-fuchsia-500/20 to-fuchsia-900/5",
    accentBorder: "rgba(217,70,239,0.55)",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const itemVariants: Variants = {
  hidden:  { y: 28, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ServicesSection() {
  return (
    <section className="w-full" id="services">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, amount: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="text-center"
      >
        <p className="section-eyebrow mx-auto">What We Deliver</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          Three disciplines. One outcome: momentum.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
          We bridge the gap between complex models and human adoption — layering AI
          orchestration, deep data integration, and cognitive design.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
        variants={containerVariants}
      >
        {services.map((svc) => (
          <motion.div
            key={svc.num}
            variants={itemVariants}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
          >
            {/* Gradient top rule */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${svc.accentBorder} 40%, transparent)`,
              }}
            />
            {/* Ambient glow behind card on hover */}
            <div
              className={`pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b ${svc.accent}`}
            />

            {/* Number + Icon */}
            <div className="flex items-start justify-between">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/80"
              >
                {svc.icon}
              </div>
              <span className="font-mono text-xs font-semibold tracking-widest text-white/20">
                {svc.num}
              </span>
            </div>

            {/* Text */}
            <h3 className="mt-5 text-lg font-bold leading-snug text-white">
              {svc.category}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/48">
              {svc.description}
            </p>

            {/* Capabilities */}
            <ul className="mt-6 space-y-2.5 text-sm text-white/60">
              {svc.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: svc.accentBorder }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
