// components/sections/StatsSection.tsx
"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
    { value: "72", label: "AI / data launches" },
    { value: "$48M", label: "Pipeline influenced" },
    { value: "4.9/5", label: "Founder satisfaction" },
    { value: "23", label: "Joint venture squads" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
} satisfies Variants;

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
} satisfies Variants;

export function StatsSection() {
    return (
        <section id="stats" className="w-full py-20">
            <div className="relative mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/0 px-6 py-16 text-center backdrop-blur-xl">
                <div aria-hidden className="noise-overlay" />
                <p className="section-eyebrow mx-auto">Signal-backed impact</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                    Quietly compounding momentum with every build cycle.
                </h2>
                <motion.div
                    className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={containerVariants}
                >
                    {stats.map((stat) => (
                        <motion.div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 py-6" variants={itemVariants}>
                            <p className="text-4xl font-semibold text-white md:text-5xl">{stat.value}</p>
                            <p className="mt-2 text-sm uppercase tracking-wide text-white/60">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}