// components/sections/ClientLogosSection.tsx
"use client";

import { motion } from "framer-motion";

// Replace these with your actual client logo URLs or SVG components
const clientLogos = [
  { name: "Fluxgrid", src: "https://via.placeholder.com/150x60.png?text=Fluxgrid" },
  { name: "Northwind", src: "https://via.placeholder.com/150x60.png?text=Northwind" },
  { name: "SignalOps", src: "https://via.placeholder.com/150x60.png?text=SignalOps" },
  { name: "Oculus Labs", src: "https://via.placeholder.com/150x60.png?text=Oculus" },
  { name: "Italic", src: "https://via.placeholder.com/150x60.png?text=Italic" },
  { name: "Nova", src: "https://via.placeholder.com/150x60.png?text=Nova" },
];


export function ClientLogosSection() {
    return (
        <section className="relative w-full py-20">
            <motion.div
                className="glass-panel gradient-border relative mx-auto max-w-5xl px-8 py-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
            >
                <div aria-hidden className="noise-overlay" />
                <p className="section-eyebrow mx-auto">Operators we build alongside</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                    Trusted by AI-native founders, Fortune 100 skunkworks, and ambitious GTM teams.
                </h3>
                <p className="mt-3 text-base text-white/65">
                    We embed with product, revops, and research pods to ship measurable impact inside complex orgs.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                    {clientLogos.map((logo) => (
                        <img
                            key={logo.name}
                            src={logo.src}
                            alt={logo.name}
                            className="h-9 opacity-70 transition hover:opacity-100"
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}