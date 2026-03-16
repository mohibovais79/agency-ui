// app/case-studies/data/[id]/page.tsx
"use client";

import { dataCaseStudies } from "@/data/case-studies";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function DataCaseStudyDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const study = dataCaseStudies.find((s) => s.id === id);

    if (!study) {
        notFound();
    }

    return (
        <div className="relative w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Link
                    href="/case-studies/data"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Data Case Studies
                </Link>

                <div className="mt-8 mb-12">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
                        {study.title}
                    </h1>
                    <p className="mt-4 text-xl text-white/70">
                        {study.summary}
                    </p>
                    <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
                        <div>
                            <span className="font-medium text-white">Client:</span> {study.client}
                        </div>
                        <div>
                            <span className="font-medium text-white">Year:</span> {study.year}
                        </div>
                        <div>
                            <span className="font-medium text-white">Category:</span> {study.category}
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative mb-16 aspect-video overflow-hidden rounded-3xl border border-white/10"
                >
                    <Image
                        src={study.thumbnailUrl}
                        alt={study.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Content Sections */}
                <div className="mx-auto max-w-4xl space-y-16">
                    {/* Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="mb-4 text-3xl font-semibold text-white">Overview</h2>
                        <p className="text-lg leading-relaxed text-white/70">
                            {study.overview}
                        </p>
                    </motion.section>

                    {/* Challenge */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                    >
                        <h2 className="mb-4 text-3xl font-semibold text-white">The Challenge</h2>
                        <p className="text-lg leading-relaxed text-white/70">
                            {study.challenge}
                        </p>
                    </motion.section>

                    {/* Solution */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h2 className="mb-4 text-3xl font-semibold text-white">Our Solution</h2>
                        <p className="text-lg leading-relaxed text-white/70">
                            {study.solution}
                        </p>
                    </motion.section>

                    {/* Images */}
                    {study.images && study.images.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="space-y-8"
                        >
                            {study.images.map((image, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                                        <Image
                                            src={image.url}
                                            alt={image.caption}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-center text-sm text-white/60">
                                        {image.caption}
                                    </p>
                                </div>
                            ))}
                        </motion.section>
                    )}

                    {/* Results */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8"
                    >
                        <h2 className="mb-6 text-3xl font-semibold text-white">Results & Impact</h2>
                        <ul className="grid gap-4 md:grid-cols-2">
                            {study.results.map((result, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-lg text-white/80">{result}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    {/* CTA */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="border-t border-white/10 pt-12 text-center"
                    >
                        <h3 className="mb-4 text-2xl font-semibold text-white">
                            Ready to transform your business?
                        </h3>
                        <p className="mb-8 text-white/70">
                            Let's discuss how we can help you achieve similar results.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-glow transition hover:bg-primary/90"
                        >
                            Get in Touch
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.section>
                </div>
            </motion.div>
        </div>
    );
}
