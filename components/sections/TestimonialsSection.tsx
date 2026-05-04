"use client";

import { motion, type Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with Traysyz was a game-changer. Their AI model increased our efficiency by 40% — the team's depth of expertise is genuinely second to none.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators Inc.",
    initials: "JD",
    color: "#A78BFA",
  },
  {
    quote:
      "The data dashboard they built is now the single source of truth for our entire leadership team. Invaluable insights, delivered beautifully and on time.",
    name: "John Smith",
    title: "VP of Operations, MarketLeap",
    initials: "JS",
    color: "#22D3EE",
  },
  {
    quote:
      "The new UX has received overwhelmingly positive feedback from our users. Retention is up, team morale is up. Truly the most collaborative agency we've worked with.",
    name: "Emily White",
    title: "Head of Product, ConnectApp",
    initials: "EW",
    color: "#F0A429",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F0A429">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const containerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden:  { y: 28, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function TestimonialsSection() {
  return (
    <section className="relative w-full" id="testimonials">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, amount: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="text-center"
      >
        <p className="section-eyebrow mx-auto">Client Stories</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          What our clients say.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50">
          Real outcomes from the businesses we&apos;ve helped transform.
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
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.038]"
          >
            {/* Top rule */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${t.color}88 50%, transparent)`,
              }}
            />

            {/* Stars */}
            <Stars />

            {/* Quote mark */}
            <div
              className="mt-4 select-none font-serif text-6xl leading-none"
              style={{ color: t.color, opacity: 0.25 }}
            >
              &ldquo;
            </div>

            {/* Quote */}
            <p className="-mt-2 flex-1 text-sm leading-relaxed text-white/65">
              {t.quote}
            </p>

            {/* Divider */}
            <div className="mt-6 h-px bg-white/[0.06]" />

            {/* Author */}
            <div className="mt-5 flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: `${t.color}22`, border: `1px solid ${t.color}44` }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/42">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
