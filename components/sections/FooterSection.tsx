"use client";

import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { EmailIcon, LinkedInIcon, FacebookIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="url(#footerLogoGrad)"
    />
  </svg>
);

const columns = [
  {
    heading: "Services",
    links: [
      { label: "AI & Agentic Systems",  href: "#services"    },
      { label: "Data Infrastructure",   href: "#services"    },
      { label: "Cognitive UX & Design", href: "#services"    },
      { label: "Strategy Sprints",       href: "#contact"    },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",     href: "/about"            },
      { label: "Case Studies", href: "#case-studies"     },
      { label: "Pricing",      href: "/pricing"          },
      { label: "Blog",         href: "/blog"             },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "contact@traysyz.com",    href: "mailto:contact@traysyz.com"          },
      { label: "LinkedIn",               href: "https://linkedin.com/company/traysyz" },
      { label: "Facebook",               href: "https://facebook.com/traysyz"         },
      { label: "Book a Strategy Sprint", href: "#contact"                             },
    ],
  },
];

const socialLinks = [
  { name: "Email",    href: "mailto:contact@traysyz.com",            icon: EmailIcon    },
  { name: "LinkedIn", href: "https://linkedin.com/company/traysyz",  icon: LinkedInIcon },
  { name: "Facebook", href: "https://facebook.com/traysyz",          icon: FacebookIcon },
];

export function FooterSection() {
  return (
    <footer className="relative w-full">
      {/* Top section divider */}
      <div className="section-divider mx-auto max-w-6xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 py-16 md:px-8"
      >
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-5 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Logo />
              <span className="font-bold tracking-tight text-white">{siteConfig.name}</span>
            </Link>
            <p className="max-w-[200px] text-sm leading-relaxed text-white/42">
              Strategic Product &amp; AI Partners. Building what&apos;s next.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white/50 transition-all hover:border-violet-500/40 hover:bg-white/[0.08] hover:text-white/80"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/30">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white/80 no-underline"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/28">
            © {new Date().getFullYear()} {siteConfig.name}. Crafted with intent.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs text-white/28 transition-colors hover:text-white/55 no-underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
