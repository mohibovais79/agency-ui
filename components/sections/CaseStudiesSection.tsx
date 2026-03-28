// components/sections/CaseStudiesSection.tsx
"use client";

import { Link } from "@heroui/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "AI",
    slug: "ai",
    description: "Autonomous Systems & Workflow Orchestration",
    icon: (
      <svg
        fill="none"
        height="32"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    name: "Data",
    slug: "data",
    description: "High-Volume Data Pipelines & Predictive ROI",
    icon: (
      <svg
        fill="none"
        height="32"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    name: "Design",
    slug: "design",
    description: "Frictionless UX for Complex Workflows",
    icon: (
      <svg
        fill="none"
        height="32"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

export function CaseStudiesSection() {
  return (
    <section className="w-full" id="case-studies">
      <div className="mb-12 text-center">
        <p className="section-eyebrow mx-auto">Proof in production</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Measurable Impact, Shipped.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Explore how we’ve engineered technological moats for visionary
          companies—transforming raw data and models into revenue-generating
          assets.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link
              className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-primary/50 hover:bg-white/10"
              href={`/case-studies/${category.slug}`}
            >
              <div className="mb-4 text-primary transition group-hover:scale-110">
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {category.name}
              </h3>
              <p className="mt-2 text-white/60">{category.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                View Case Studies
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
