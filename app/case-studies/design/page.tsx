"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { designCaseStudies } from "@/data/case-studies";

const toolColors: Record<string, string> = {
  "Adobe Illustrator": "#FF7C00",
  "Adobe Photoshop":   "#31A8FF",
  "Adobe InDesign":    "#FF3366",
  "Adobe Lightroom":   "#31A8FF",
};

export default function DesignCaseStudiesPage() {
  return (
    <div className="relative w-full">
      {/* Header */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          href="/#case-studies"
        >
          <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Design Case Studies
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/55">
          Brand identities, social media campaigns, and visual systems crafted for
          sports franchises, tech products, and creative agencies.
        </p>

        {/* Behance attribution */}
        <a
          href="https://www.behance.net/muhibsiddiqi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55 transition hover:border-white/20 hover:text-white/80"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.884 2.102 1.884.7 0 1.22-.331 1.53-.888l2.124.033zm-5.432-3.499c-.066-.988-.57-1.859-1.856-1.859-1.237 0-1.875.875-1.964 1.859h3.82zM0 5h6.542c1.802 0 3.876 1.27 3.876 3.678 0 1.407-.633 2.309-1.54 2.879C10.28 12.074 11 13.14 11 14.811 11 17.648 8.94 19 6.344 19H0V5zm2.21 5.409h3.668c1.118 0 1.63-.596 1.63-1.418 0-.855-.578-1.347-1.63-1.347H2.21v2.765zm0 4.997h3.936c1.2 0 1.853-.597 1.853-1.617 0-.959-.653-1.522-1.853-1.522H2.21v3.139z" />
          </svg>
          View full profile on Behance
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {designCaseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Link
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.04]"
              href={`/case-studies/design/${study.id}`}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <Image
                  alt={study.title}
                  className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  src={study.thumbnailUrl}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Behance stats badge */}
                {(study.behanceViews ?? 0) > 0 && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white/70 backdrop-blur-sm">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    {study.behanceViews?.toLocaleString()}
                    {(study.behanceLikes ?? 0) > 0 && (
                      <>
                        <span className="opacity-40">·</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#F0A429">
                          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                        </svg>
                        {study.behanceLikes}
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {study.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-300/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-violet-300">
                  {study.title}
                </h3>
                <p className="mt-1.5 text-xs text-white/38">
                  {study.client} · {study.year}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                  {study.summary}
                </p>

                {/* Tools */}
                {study.toolsUsed && study.toolsUsed.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {study.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="rounded px-2 py-0.5 text-[10px] font-semibold"
                        style={{
                          background: `${toolColors[tool] ?? "#888"}18`,
                          color: toolColors[tool] ?? "#aaa",
                          border: `1px solid ${toolColors[tool] ?? "#888"}30`,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-400 transition-colors group-hover:text-violet-300">
                  View Case Study
                  <svg
                    fill="none" height="14" stroke="currentColor" strokeWidth="2.2"
                    viewBox="0 0 24 24" width="14"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
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
