// app/case-studies/ai/page.tsx
"use client";

import { aiCaseStudies } from "@/data/case-studies";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AICaseStudiesPage() {
    return (
        <div className="relative w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <Link
                    href="/#case-studies"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>
                <h1 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
                    AI Case Studies
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-white/70">
                    Explore how we've helped organizations leverage artificial intelligence to drive innovation and measurable business outcomes.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {aiCaseStudies.map((study, index) => (
                    <motion.div
                        key={study.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link
                            href={`/case-studies/ai/${study.id}`}
                            className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-primary/50 hover:bg-white/10"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={study.thumbnailUrl}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {study.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition">
                                    {study.title}
                                </h3>
                                <p className="mt-2 text-sm text-white/60">
                                    {study.client} · {study.year}
                                </p>
                                <p className="mt-3 text-white/70">
                                    {study.summary}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                                    Read Case Study
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
