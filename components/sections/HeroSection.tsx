// components/sections/HeroSection.tsx
"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    ),
  },
);

const heroMetrics = [
  { label: "AI Launches", value: "48" },
  { label: "Retention Uplift", value: "+36%" },
  { label: "Markets Served", value: "12" },
];

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[520px] w-[520px] rounded-full bg-gradient-to-r from-primary/40 via-primary/10 to-transparent blur-[180px] opacity-70" />
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: Content */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Added items-start to ensure children don't stretch
          className="flex flex-col items-start justify-center px-6 lg:px-0"
        >
          {/* Added w-fit to keep the pill shape snug around the text */}
          <span className="section-eyebrow w-fit">
            Strategic Product & AI Partners
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            Architecting Intelligent Systems That Redefine{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-white bg-clip-text text-transparent">
              Categories.
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70 lg:text-xl">
            We don&apos;t just ship features. We fuse enterprise-grade data
            infrastructure, autonomous AI orchestration, and premium UX to build
            scalable software that users love and investors back.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              as={Link}
              className="h-12 rounded-full px-8 text-base font-semibold shadow-glow"
              color="primary"
              href="YOUR_CALENDLY_LINK_HERE"
              size="lg"
              target="_blank"
            >
              Book a Strategy Sprint
            </Button>
            <Button
              as={Link}
              className="h-12 rounded-full border-white/30 px-7 text-base font-semibold text-white/80"
              href="#case-studies"
              size="lg"
              variant="bordered"
            >
              Explore Work
            </Button>
          </div>

          <div className="mt-12 grid w-full grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1">
                <p className="text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="text-xs tracking-wide text-white/60 uppercase">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: 3D Animation */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="relative flex items-center justify-center px-6 lg:px-0"
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="glass-panel gradient-border relative aspect-square w-full max-w-[500px] overflow-hidden rounded-3xl p-4">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center bg-black/20">
                    <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
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
