"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((m) => m.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
      </div>
    ),
  },
);

const metrics = [
  { value: "48+", label: "AI Products Launched" },
  { value: "36%",  label: "Avg Retention Uplift"  },
  { value: "12",   label: "Markets Served"        },
];

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="mx-auto mt-8 grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* ── Left: Copy ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOut }}
          className="flex flex-col items-start px-2 lg:px-0"
        >
          <span className="section-eyebrow">Strategic Product & AI Partners</span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-[-0.025em] text-balance md:text-6xl lg:text-[68px]">
            Architect Systems That{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #A78BFA 0%, #C4B5FD 40%, #67E8F9 100%)",
              }}
            >
              Redefine Categories.
            </span>
          </h1>

          <p className="mt-6 max-w-[520px] text-lg leading-[1.75] text-white/55 lg:text-xl">
            We fuse enterprise-grade data infrastructure, autonomous AI orchestration,
            and precision UX to build scalable software that users love — and investors back.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              as={Link}
              href="#contact"
              size="lg"
              className="h-12 rounded-full bg-violet-600 px-8 text-base font-semibold text-white shadow-glow hover:bg-violet-500 transition-colors border-0"
              onClick={scrollTo("contact")}
            >
              Start a Project
            </Button>
            <Button
              as={Link}
              href="#case-studies"
              size="lg"
              variant="bordered"
              className="h-12 rounded-full border border-white/12 bg-transparent px-7 text-base font-medium text-white/60 hover:text-white hover:border-white/25 transition-colors"
              onClick={scrollTo("case-studies")}
            >
              View Our Work →
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-14 grid w-full grid-cols-3 gap-4 border-t border-white/[0.07] pt-10">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1.5">
                <p
                  className="text-3xl font-bold tracking-tight"
                  style={{ color: "#E8EDFF" }}
                >
                  {m.value}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/38">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: 3D scene ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOut, delay: 0.15 }}
          className="relative flex items-center justify-center px-2 lg:px-0"
        >
          {/* Corner accent glows — outside overflow-hidden card so they're visible */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-4 h-48 w-48 rounded-full opacity-30 blur-[60px]"
            style={{ background: "#7C3AED" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-4 h-48 w-48 rounded-full opacity-25 blur-[60px]"
            style={{ background: "#06B6D4" }}
          />

          <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-3xl border border-white/[0.07] p-3">
            {/* Gradient overlay frame */}
            <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20 pointer-events-none z-10" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black/60">
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center bg-black/30">
                    <div className="h-10 w-10 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
                  </div>
                }
              >
                <HeroScene />
              </Suspense>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
