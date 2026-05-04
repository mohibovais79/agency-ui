export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Traysyz",
  description:
    "Strategic Product & AI Partners — We build autonomous AI systems, scalable data infrastructure, and cognitive UX that redefines categories.",
  navItems: [
    { label: "Services",     href: "#services"     },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact",      href: "#contact"      },
    { label: "Pricing",      href: "/pricing"      },
    { label: "Blog",         href: "/blog"         },
  ],
  navMenuItems: [
    { label: "Services",     href: "#services"     },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Pricing",      href: "/pricing"      },
    { label: "About",        href: "/about"        },
    { label: "Blog",         href: "/blog"         },
    { label: "Contact",      href: "#contact"      },
  ],
  links: {
    linkedin: "https://linkedin.com/company/traysyz",
    facebook: "https://facebook.com/traysyz",
    email:    "mailto:contact@traysyz.com",
  },
};
