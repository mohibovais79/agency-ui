"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "14",   label: "Day Sprint\nCycles",       note: "Rapid, focused delivery" },
  { value: "100%", label: "In-House\nEngineering",     note: "No outsourcing, ever"    },
  { value: "Zero", label: "Technical\nDebt Tolerance", note: "Clean code, always"      },
  { value: "Full", label: "IP Ownership\nTransfer",    note: "You own everything"      },
];

const containerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden:  { y: 20, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function StatsSection() {
  return (
    <section className="w-full" id="stats">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, amount: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="text-center"
      >
        <p className="section-eyebrow mx-auto">Signal-Backed Impact</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Our operating principles, in numbers.
        </h2>
      </motion.div>

      <motion.div
        className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] md:grid-cols-4"
        style={{ background: "rgba(255,255,255,0.05)" }}
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={containerVariants}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="group relative flex flex-col items-center justify-center gap-2 bg-[#06090F] px-6 py-10 text-center transition-colors hover:bg-white/[0.025]"
          >
            {/* Top accent rule */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-12 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "linear-gradient(90deg, #A78BFA, #22D3EE)" }}
            />
            <p
              className="text-4xl font-bold tracking-tight text-white md:text-5xl"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {stat.value}
            </p>
            <p className="whitespace-pre-line text-xs font-semibold uppercase tracking-[0.1em] text-white/38">
              {stat.label}
            </p>
            <p className="mt-1 text-[11px] text-white/28">{stat.note}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
