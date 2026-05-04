"use client";

import { motion } from "framer-motion";
import {
  AdobeIcon, AWSIcon, AzureIcon, DockerIcon, ElasticSearch,
  FigmaIcon, GeminiIcon, LangchainIcon, NextJSIcon, OpenAIIcon,
  PerplexityIcon, PowerBIIcon, PythonIcon, PyTorchIcon, ReactIcon, TypeScriptIcon,
} from "@/components/icons/tech-stack";

const techStack = [
  { name: "Python",        Icon: PythonIcon      },
  { name: "React",         Icon: ReactIcon       },
  { name: "Next.js",       Icon: NextJSIcon      },
  { name: "AWS",           Icon: AWSIcon         },
  { name: "Azure",         Icon: AzureIcon       },
  { name: "Power BI",      Icon: PowerBIIcon     },
  { name: "Adobe",         Icon: AdobeIcon       },
  { name: "OpenAI",        Icon: OpenAIIcon      },
  { name: "Figma",         Icon: FigmaIcon       },
  { name: "TypeScript",    Icon: TypeScriptIcon  },
  { name: "Docker",        Icon: DockerIcon      },
  { name: "PyTorch",       Icon: PyTorchIcon     },
  { name: "LangChain",     Icon: LangchainIcon   },
  { name: "Gemini",        Icon: GeminiIcon      },
  { name: "Perplexity",    Icon: PerplexityIcon  },
  { name: "Elasticsearch", Icon: ElasticSearch   },
];

const doubled = [...techStack, ...techStack];

export function TechMarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden" id="tech-stack">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-4 text-center"
      >
        <p className="section-eyebrow mx-auto">Enterprise-Grade Execution</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          The Intelligence Stack
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50">
          State-of-the-art frameworks to build secure, scalable, and high-performance architectures.
        </p>
      </motion.div>

      <div className="mt-10 w-full">
        <div className="marquee-container">
          <div className="marquee-track">
            {doubled.map(({ name, Icon }, i) => (
              <div key={`${name}-${i}`} className="marquee-item" title={name}>
                <Icon />
                <span className="marquee-item-name text-sm font-medium text-white/65">
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
