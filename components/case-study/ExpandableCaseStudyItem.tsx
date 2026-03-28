// components/case-study/ExpandableCaseStudyItem.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { CaseStudy } from "@/config/case-studies-data";

interface Props {
  study: CaseStudy;
}

export function ExpandableCaseStudyItem({ study }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-default-200 last:border-b-0">
      <motion.button
        layout // Animates the layout change smoothly
        className="w-full flex items-center justify-between p-4 text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <Image
            alt={study.title}
            className="rounded-md object-cover"
            height={60}
            src={study.thumbnailUrl}
            width={80}
          />
          <div>
            <h4 className="font-semibold text-default-800">{study.title}</h4>
            <p className="text-sm text-default-600">{study.summary}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="overflow-hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-4 pb-4 text-default-700">{study.details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
