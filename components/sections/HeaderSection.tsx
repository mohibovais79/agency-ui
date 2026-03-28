// components/sections/HeaderSection.tsx
"use client";

import { motion } from "framer-motion";

import { EmailIcon, LinkedInIcon, FacebookIcon } from "@/components/icons";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:contact@yourcompany.com",
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

export function HeaderSection() {
  return (
    <section className="w-full py-6 relative">
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[200px] w-[200px] rounded-full bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent blur-[80px] opacity-30" />
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="glass-panel border border-white/10 rounded-full px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left side - Company info */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Traysyz</p>
                <p className="text-white/60 text-xs">
                  Strategic Product & AI Partners
                </p>
              </div>
            </div>

            {/* Right side - Social links */}
            <div className="flex items-center gap-4">
              <p className="text-white/60 text-xs hidden sm:block">
                Connect with us
              </p>
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
    </section>
  );
}
