// components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// A simple icon component (replace with actual icons if you have them)
const ServiceIcon = ({ children }: { children: ReactNode }) => (
    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
        {children}
    </div>
);

const services = [
    {
        category: "Artificial Intelligence",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M12 14 8 10" /><path d="M12 20v-8" /><path d="M9 11H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4" /><path d="M15 11h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4" /><circle cx="12" cy="6" r="4" /></svg>,
        items: ["Machine Learning Models", "Natural Language Processing", "AI Strategy Consulting", "Automation Solutions"],
    },
    {
        category: "Data",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
        items: ["Data Analytics & Insights", "Business Intelligence Dashboards", "Data Warehousing", "Predictive Analytics"],
    },
    {
        category: "Design",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>,
        items: ["UX/UI Design", "Product Design Sprints", "User Research & Testing", "Brand Identity"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesSection() {
    return (
        <section id="services" className="w-full max-w-6xl py-20 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
                <p className="mt-4 text-lg text-default-600 max-w-2xl mx-auto">
                    We offer a comprehensive suite of services to transform your business from the ground up.
                </p>
            </div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {services.map((service) => (
                    <motion.div
                        key={service.category}
                        className="p-8 border border-default-200 rounded-lg bg-content1"
                        variants={itemVariants}
                    >
                        <ServiceIcon>{service.icon}</ServiceIcon>
                        <h3 className="text-xl font-semibold mb-4">{service.category}</h3>
                        <ul className="space-y-2 text-default-600">
                            {service.items.map((item) => (
                                <li key={item} className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
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