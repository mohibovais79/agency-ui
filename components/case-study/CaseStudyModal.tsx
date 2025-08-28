// components/case-study/CaseStudyModal.tsx
"use client";

import { CaseStudy } from "@/config/case-studies-data";
import { AnimatePresence, motion } from "framer-motion";
import { ExpandableCaseStudyItem } from "./ExpandableCaseStudyItem";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    category: string;
    studies: CaseStudy[];
}

export function CaseStudyModal({ isOpen, onClose, category, studies }: Props) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 m-auto w-11/12 max-w-3xl h-3/4 max-h-[700px] z-50 flex flex-col"
                    >
                        <div className="bg-content1/70 backdrop-blur-lg border border-white/20 rounded-lg shadow-2xl flex flex-col h-full text-white">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/20">
                                <h2 className="text-2xl font-bold">{category} Case Studies</h2>
                                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            {/* List */}
                            <div className="flex-grow overflow-y-auto">
                                {studies.map((study) => (
                                    <ExpandableCaseStudyItem key={study.id} study={study} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}