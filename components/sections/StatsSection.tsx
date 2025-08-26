// components/sections/StatsSection.tsx
"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "150+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "3", label: "Core Disciplines" },
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
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export function StatsSection() {
    return (
        <section id="stats" className="w-full bg-default-100/50 py-20">
            <motion.div
                className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
                variants={containerVariants}
            >
                {stats.map((stat) => (
                    <motion.div key={stat.label} variants={itemVariants}>
                        <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                        <p className="mt-2 text-default-600">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}