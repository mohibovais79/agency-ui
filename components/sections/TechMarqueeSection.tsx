// components/sections/TechMarqueeSection.tsx
"use client";

import { motion } from "framer-motion";

import {
  AdobeIcon,
  AWSIcon,
  AzureIcon,
  DockerIcon,
  ElasticSearch,
  FigmaIcon,
  GeminiIcon,
  LangchainIcon,
  NextJSIcon,
  OpenAIIcon,
  PerplexityIcon,
  PowerBIIcon,
  PythonIcon,
  PyTorchIcon,
  ReactIcon,
  TypeScriptIcon,
} from "@/components/icons/tech-stack";

const techStack = [
  { name: "Python", Icon: PythonIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextJSIcon },
  { name: "AWS", Icon: AWSIcon },
  { name: "Azure", Icon: AzureIcon },
  { name: "Power BI", Icon: PowerBIIcon },
  { name: "Adobe", Icon: AdobeIcon },
  { name: "OpenAI", Icon: OpenAIIcon },
  { name: "Figma", Icon: FigmaIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "PyTorch", Icon: PyTorchIcon },
  { name: "LangChain", Icon: LangchainIcon },
  { name: "Gemini", Icon: GeminiIcon },
  { name: "Perplexity", Icon: PerplexityIcon },
  { name: "Elasticsearch", Icon: ElasticSearch },
];

const duplicatedTechStack = [...techStack, ...techStack];

export function TechMarqueeSection() {
  return (
    // Reduced vertical padding (py-16 instead of py-20) to make it narrower
    <section className="w-full py-16 relative overflow-hidden" id="tech-stack">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-primary/15 via-secondary/10 to-transparent blur-[120px] opacity-40" />
      </div>

      {/* Header: Centered and contained */}
      <motion.div
        className="max-w-6xl mx-auto px-4 text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="section-eyebrow mx-auto">Enterprise-Grade Execution</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          The Intelligence Stack
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Leveraging state-of-the-art frameworks to build secure, scalable, and
          high-performance architectures.
        </p>
      </motion.div>

      {/* Marquee: Edge-to-Edge and broken out of max-w constraints */}
      <div className="w-full relative">
        <div className="marquee-container">
          <div className="marquee-track">
            {duplicatedTechStack.map(({ name, Icon }, index) => (
              <div
                key={`${name}-${index}`}
                className="marquee-item"
                title={name}
              >
                <Icon />
                <span className="marquee-item-name font-medium text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
