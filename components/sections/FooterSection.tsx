// components/sections/FooterSection.tsx
"use client";

import { motion } from "framer-motion";

import { EmailIcon, LinkedInIcon, FacebookIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:contact@traysyz.com",
    icon: EmailIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/traysyz",
    icon: LinkedInIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/traysyz",
    icon: FacebookIcon,
  },
];

export function FooterSection() {
  return (
    <footer className="w-full py-12 relative">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-r from-primary/8 via-secondary/5 to-transparent blur-[100px] opacity-40" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="glass-panel border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Company info */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{siteConfig.name}</p>
                  <p className="text-white/60 text-sm">
                    Strategic Product & AI Partners
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-xs text-center md:text-left">
                © {new Date().getFullYear()} {siteConfig.name}. Crafted with
                intent.
              </p>
            </div>

            {/* Right side - Social links */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-white/60 text-sm">Connect with us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      aria-label={social.name}
                      className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                      href={social.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon
                        className="text-white/70 group-hover:text-primary transition-colors duration-300"
                        size={18}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
