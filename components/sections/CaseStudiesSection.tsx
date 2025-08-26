// components/sections/CaseStudiesSection.tsx
"use client";

import { Button } from "@heroui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const caseStudiesData = {
    AI: [
        { title: "AI-Powered Predictive Analytics", description: "Increased sales forecasting accuracy by 30% for a retail giant." },
        { title: "Natural Language Processing Bot", description: "Automated 80% of customer service inquiries for a SaaS company." },
    ],
    Data: [
        { title: "Customer Segmentation Model", description: "Boosted marketing campaign ROI by 45% through targeted segments." },
        { title: "Real-time Data Dashboard", description: "Provided C-level executives with actionable insights, reducing decision time." },
    ],
    Design: [
        { title: "Mobile App UX/UI Overhaul", description: "Improved user retention by 25% with an intuitive and modern interface." },
        { title: "Corporate Rebranding", description: "Elevated brand perception and market positioning for a B2B tech firm." },
    ],
};

type Category = "AI" | "Data" | "Design";

export function CaseStudiesSection() {
    const [activeCategory, setActiveCategory] = useState<Category>("AI");

    return (
        <section id="case-studies" className="w-full max-w-5xl py-20 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Our Track Record of Success</h2>
                <p className="mt-4 text-lg text-default-600">Explore our case studies in AI, Data, and Design.</p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
                {(Object.keys(caseStudiesData) as Category[]).map((category) => (
                    <Button
                        key={category}
                        variant={activeCategory === category ? "solid" : "ghost"}
                        color="primary"
                        onPress={() => setActiveCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="relative min-h-[200px]"> {/* Added a relative container for positioning */}
                <AnimatePresence mode="wait">
                    {/* 1. Wrap the entire map in a single motion.div */}
                    {/* 2. Move the key to this parent div. This is what AnimatePresence tracks. */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {caseStudiesData[activeCategory].map((study) => (
                            // 3. This inner div no longer needs animation props, it inherits from the parent
                            <div
                                key={study.title}
                                className="p-6 border border-default-200 rounded-lg bg-content1"
                            >
                                <h3 className="text-xl font-semibold text-default-800">{study.title}</h3>
                                <p className="mt-2 text-default-600">{study.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

        </section>
    );
}