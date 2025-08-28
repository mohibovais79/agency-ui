// components/sections/ClientLogosSection.tsx
"use client";

import { motion } from "framer-motion";

// Replace these with your actual client logo URLs or SVG components
const clientLogos = [
  { name: "Client A", src: "https://via.placeholder.com/150x60.png?text=Client+A" },
  { name: "Client B", src: "https://via.placeholder.com/150x60.png?text=Client+B" },
  { name: "Client C", src: "https://via.placeholder.com/150x60.png?text=Client+C" },
  { name: "Client D", src: "https://via.placeholder.com/150x60.png?text=Client+D" },
  { name: "Client E", src: "https://via.placeholder.com/150x60.png?text=Client+E" },
];


export function ClientLogosSection() {
    return (
        <section className="w-full py-16">
            <motion.div
                className="max-w-5xl mx-auto px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-center text-lg font-semibold text-default-500 mb-8">
                    TRUSTED BY INDUSTRY-LEADING COMPANIES
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {clientLogos.map((logo) => (
                        <img
                            key={logo.name}
                            src={logo.src}
                            alt={logo.name}
                            className="h-8 filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}