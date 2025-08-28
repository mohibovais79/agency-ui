// components/case-study/ExpandableCaseStudyItem.tsx
"use client";

import { CaseStudy } from "@/config/case-studies-data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Props {
    study: CaseStudy;
}

export function ExpandableCaseStudyItem({ study }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border-b border-default-200 last:border-b-0">
            <motion.button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setIsExpanded(!isExpanded)}
                layout // Animates the layout change smoothly
            >
                <div className="flex items-center gap-4">
                    <Image
                        src={study.thumbnailUrl}
                        alt={study.title}
                        width={80}
                        height={60}
                        className="rounded-md object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-default-800">{study.title}</h4>
                        <p className="text-sm text-default-600">{study.summary}</p>
                    </div>
                </div>
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="px-4 pb-4 text-default-700">{study.details}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}