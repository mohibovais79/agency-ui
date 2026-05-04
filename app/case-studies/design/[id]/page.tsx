"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";

import { designCaseStudies } from "@/data/case-studies";

const toolColors: Record<string, { bg: string; text: string; border: string }> = {
  "Adobe Illustrator": { bg: "#FF7C0018", text: "#FF9A40", border: "#FF7C0030" },
  "Adobe Photoshop":   { bg: "#31A8FF18", text: "#5BBFFF", border: "#31A8FF30" },
  "Adobe InDesign":    { bg: "#FF336618", text: "#FF6688", border: "#FF336630" },
  "Adobe Lightroom":   { bg: "#31A8FF18", text: "#5BBFFF", border: "#31A8FF30" },
};

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.884 2.102 1.884.7 0 1.22-.331 1.53-.888l2.124.033zm-5.432-3.499c-.066-.988-.57-1.859-1.856-1.859-1.237 0-1.875.875-1.964 1.859h3.82zM0 5h6.542c1.802 0 3.876 1.27 3.876 3.678 0 1.407-.633 2.309-1.54 2.879C10.28 12.074 11 13.14 11 14.811 11 17.648 8.94 19 6.344 19H0V5zm2.21 5.409h3.668c1.118 0 1.63-.596 1.63-1.418 0-.855-.578-1.347-1.63-1.347H2.21v2.765zm0 4.997h3.936c1.2 0 1.853-.597 1.853-1.617 0-.959-.653-1.522-1.853-1.522H2.21v3.139z" />
    </svg>
  );
}

function ImageLightbox({
  images,
  initial,
  onClose,
}: {
  images: { url: string; caption: string }[];
  initial: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initial);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="relative flex w-full max-w-4xl flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-black/40" style={{ maxHeight: "72vh" }}>
          <Image
            src={images[idx].url}
            alt={images[idx].caption}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            style={{ maxHeight: "72vh" }}
          />
        </div>

        {/* Caption + nav */}
        <div className="flex w-full items-center justify-between gap-4">
          <button
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" /></svg>
          </button>
          <p className="flex-1 text-center text-sm text-white/55">{images[idx].caption}</p>
          <button
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" /></svg>
          </button>
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-violet-400" : "w-1.5 bg-white/25"}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function DesignCaseStudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const study = designCaseStudies.find((s) => s.id === id);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (!study) notFound();

  const otherStudies = designCaseStudies.filter((s) => s.id !== study.id).slice(0, 3);

  return (
    <div className="relative w-full">
      {/* Lightbox */}
      {lightboxIdx !== null && (
        <ImageLightbox
          images={study.images}
          initial={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
        />
      )}

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {/* ── Back link ──────────────────────────────────────────── */}
        <Link
          className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white/80"
          href="/case-studies/design"
        >
          <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All Design Case Studies
        </Link>

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="mt-8 mb-10">
          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-white/55">
            {study.summary}
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <div className="text-white/45">
              <span className="font-semibold text-white/70">Client</span>
              <span className="mx-2 text-white/20">·</span>
              {study.client}
            </div>
            <div className="text-white/45">
              <span className="font-semibold text-white/70">Year</span>
              <span className="mx-2 text-white/20">·</span>
              {study.year}
            </div>
            <div className="text-white/45">
              <span className="font-semibold text-white/70">Category</span>
              <span className="mx-2 text-white/20">·</span>
              {study.category}
            </div>
          </div>

          {/* Tools + Behance row */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {study.toolsUsed?.map((tool) => {
              const c = toolColors[tool] ?? { bg: "#88888818", text: "#aaa", border: "#88888830" };
              return (
                <span
                  key={tool}
                  className="rounded-md px-2.5 py-1 text-xs font-semibold"
                  style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                >
                  {tool}
                </span>
              );
            })}

            {study.behanceUrl && (
              <a
                href={study.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/55 transition hover:border-violet-500/30 hover:bg-white/[0.07] hover:text-white/80"
              >
                <BehanceIcon size={14} />
                View on Behance
                {(study.behanceViews ?? 0) > 0 && (
                  <span className="ml-1 rounded-full bg-white/8 px-2 py-0.5 text-[11px] text-white/40">
                    {study.behanceViews?.toLocaleString()} views
                  </span>
                )}
                {(study.behanceLikes ?? 0) > 0 && (
                  <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-400">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
                    </svg>
                    {study.behanceLikes}
                  </span>
                )}
              </a>
            )}
          </div>
        </div>

        {/* ── Hero image ─────────────────────────────────────────── */}
        <motion.button
          className="relative mb-16 block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-white/[0.07] bg-black/40"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onClick={() => setLightboxIdx(0)}
          aria-label="View full image"
        >
          <Image
            priority
            alt={study.title}
            className="block w-full h-auto"
            src={study.thumbnailUrl}
            width={0}
            height={0}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Zoom hint */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white/60 backdrop-blur-sm">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
            </svg>
            Click to expand
          </div>
        </motion.button>

        {/* ── Content ────────────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl space-y-14">

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="section-eyebrow">Overview</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
            <p className="text-lg leading-relaxed text-white/62">{study.overview}</p>
          </motion.section>

          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.5) 50%, transparent)" }} />
            <h2 className="mb-4 flex items-center gap-2.5 text-xl font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              The Challenge
            </h2>
            <p className="text-base leading-relaxed text-white/60">{study.challenge}</p>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6) 50%, transparent)" }} />
            <h2 className="mb-4 flex items-center gap-2.5 text-xl font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              Our Approach
            </h2>
            <p className="text-base leading-relaxed text-white/60">{study.solution}</p>
          </motion.section>

          {/* Gallery */}
          {study.images.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="section-eyebrow">Project Gallery</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <div className={`grid gap-4 ${study.images.length === 1 ? "grid-cols-1" : study.images.length === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
                {study.images.map((img, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setLightboxIdx(i)}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black/40 cursor-zoom-in"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    aria-label={img.caption}
                  >
                    <Image
                      src={img.url}
                      alt={img.caption}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-sm text-white/80">{img.caption}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.section>
          )}

          {/* Results */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/8 via-transparent to-cyan-500/5 p-8"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.7) 40%, rgba(34,211,238,0.4) 70%, transparent)" }} />
            <h2 className="mb-6 flex items-center gap-2.5 text-xl font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              Results & Impact
            </h2>
            <ul className="grid gap-3.5 sm:grid-cols-2">
              {study.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span className="text-base text-white/70">{result}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Behance CTA */}
          {study.behanceUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 text-center sm:flex-row sm:text-left"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1769FF]/10 text-[#1769FF]">
                <BehanceIcon size={22} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">See the full project on Behance</p>
                <p className="mt-0.5 text-sm text-white/45">
                  View all assets, process shots, and the complete design breakdown.
                </p>
              </div>
              <a
                href={study.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-violet-500/30 hover:bg-white/[0.08] hover:text-white"
              >
                Open on Behance →
              </a>
            </motion.div>
          )}

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/[0.07] pt-12 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/28">
              Ready to work together?
            </p>
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
              Let&apos;s build something exceptional.
            </h3>
            <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-white/50">
              Tell us about your brand, product, or campaign — we&apos;ll come back with a tailored approach.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-3 font-semibold text-white shadow-glow transition hover:bg-violet-500"
                href="/#contact"
              >
                Get in Touch
                <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white/80"
                href="/case-studies/design"
              >
                More Projects
              </Link>
            </div>
          </motion.section>

          {/* Related projects */}
          {otherStudies.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <h3 className="mb-6 text-xl font-bold text-white">More Design Work</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {otherStudies.map((s) => (
                  <Link
                    key={s.id}
                    href={`/case-studies/design/${s.id}`}
                    className="group overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:border-violet-500/25 hover:bg-white/[0.04]"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        alt={s.title}
                        src={s.thumbnailUrl}
                        className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors line-clamp-2">
                        {s.title}
                      </p>
                      <p className="mt-1 text-xs text-white/35">{s.client}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </motion.div>
    </div>
  );
}
