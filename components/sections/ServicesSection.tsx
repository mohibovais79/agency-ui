// components/sections/ServicesSection.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

// A simple icon component (replace with actual icons if you have them)
const ServiceIcon = ({ children }: { children: ReactNode }) => (
    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
        {children}
    </div>
);

const services = [
    {
        category: "Intelligent Product Systems",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18" /><path d="M12 3v18" /><circle cx="12" cy="12" r="9" /></svg>,
        items: ["Agentic workflows", "Co-pilot UX", "Model evaluation labs", "AIOps instrumentation"],
    },
    {
        category: "Revenue & Data Platforms",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V9" /><path d="M12 21V3" /><path d="M20 21v-6" /></svg>,
        items: ["Unified data fabric", "Forecasting & pricing", "Experimentation OS", "Interactive insight rooms"],
    },
    {
        category: "Brand & Product Narratives",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 7 9 6 9-6" /><path d="M21 7v10" /><path d="M3 7v10" /><path d="m3 17 9 6 9-6" /></svg>,
        items: ["Signature product language", "Motion systems", "Launch websites", "Executive storytelling"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
} satisfies Variants;

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
} satisfies Variants;

export function ServicesSection() {
    return (
        <section id="services" className="w-full">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0b0f1f] via-[#060914] to-[#0d1224] px-6 py-20 shadow-[0_40px_120px_rgba(2,6,23,0.8)]">
                <div aria-hidden className="noise-overlay" />
                <div className="absolute inset-x-0 top-0 h-64 opacity-70 blur-[120px]" style={{ background: "radial-gradient(circle, rgba(25,196,212,0.25), transparent 60%)" }} />
                <div className="relative z-10 flex flex-col gap-6 text-center">
                    <p className="section-eyebrow mx-auto">Products people feel in their workflow</p>
                    <h2 className="text-3xl font-semibold text-white md:text-4xl">
                        Layered delivery across AI, data, and design to ship momentum.
                    </h2>
                    <p className="mx-auto max-w-3xl text-base text-white/65">
                        Multi-disciplinary pods architect systems, orchestrate change management, and craft emotive product surfaces—all while keeping GTM metrics in view.
                    </p>
                </div>
                <motion.div
                    className="relative z-10 mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.category}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_20px_60px_rgba(3,5,12,0.65)] backdrop-blur-xl"
                            variants={itemVariants}
                        >
                            <ServiceIcon>{service.icon}</ServiceIcon>
                            <h3 className="text-xl font-semibold text-white">{service.category}</h3>
                            <ul className="mt-5 space-y-3 text-sm text-white/70">
                                {service.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}