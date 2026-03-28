// data/case-studies/design.ts

export interface CaseStudy {
  id: string;
  title: string;
  thumbnailUrl: string;
  summary: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  images: {
    url: string;
    caption: string;
  }[];
}

export const designCaseStudies: CaseStudy[] = [
  {
    id: "mobile-banking-redesign",
    title: "Mobile Banking App Redesign",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=600&q=80",
    summary:
      "Improved user retention by 25% with an intuitive and modern interface.",
    client: "SecureBank",
    year: "2025",
    category: "Design",
    tags: ["Mobile App", "UX/UI", "Banking", "User Research"],
    overview:
      "Complete redesign of a legacy mobile banking application to meet modern user expectations and improve engagement metrics.",
    challenge:
      "The existing app had a 2.3-star rating, high abandonment rates during onboarding, and users complained about confusing navigation. Complex financial tasks required 8+ steps to complete.",
    solution:
      "We conducted extensive user research with 200+ customers, created journey maps, and redesigned the entire information architecture. Implemented a card-based UI, biometric authentication, and reduced task flows by 60%. Ran A/B tests throughout development.",
    results: [
      "25% increase in user retention",
      "App store rating improved to 4.6 stars",
      "60% reduction in average task completion time",
      "40% increase in feature adoption",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&h=800&q=80",
        caption: "Before and after comparison of the mobile banking interface",
      },
      {
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&h=800&fit=crop",
        caption: "User flow diagrams and wireframe iterations",
      },
    ],
  },
  {
    id: "b2b-tech-rebranding",
    title: "Corporate Rebranding for B2B Tech Firm",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&h=600&fit=crop",
    summary: "Elevated brand perception and market positioning.",
    client: "TechVentures Corp",
    year: "2024",
    category: "Design",
    tags: ["Branding", "Identity Design", "B2B", "Strategy"],
    overview:
      "Full rebranding initiative to transform a legacy tech company into a modern, innovation-focused brand that resonates with enterprise buyers.",
    challenge:
      "The company's visual identity was outdated and didn't reflect their cutting-edge technology offerings. They were losing deals to competitors with stronger brand presence.",
    solution:
      "We developed a comprehensive brand strategy including new logo, color system, typography, illustration style, and brand guidelines. Created a modular design system that scales across digital and print. Launched with a new website and marketing collateral.",
    results: [
      "Brand awareness increased by 65%",
      "Inbound leads grew 40% post-launch",
      "Sales cycle shortened by 15%",
      "100% positive feedback from stakeholder surveys",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1200&h=800&fit=crop",
        caption: "New brand identity system and visual language",
      },
      {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&h=800&fit=crop",
        caption: "Brand applications across digital and physical touchpoints",
      },
    ],
  },
  {
    id: "saas-dashboard-ux",
    title: "Enterprise SaaS Dashboard UX Overhaul",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&fit=crop",
    summary:
      "Transformed complex data platform into an intuitive, delightful user experience.",
    client: "DataFlow Analytics",
    year: "2025",
    category: "Design",
    tags: ["SaaS", "Dashboard", "Enterprise UX", "Data Visualization"],
    overview:
      "Redesigned a data analytics platform used by 10,000+ enterprise users to improve usability and reduce training time.",
    challenge:
      "Users required 2 weeks of training to use the platform effectively. The interface was cluttered with 200+ features, and critical insights were buried in complex menus.",
    solution:
      "We implemented a progressive disclosure approach, redesigned data visualizations for clarity, and created role-based dashboards. Built a comprehensive design system with 80+ reusable components. Conducted usability testing with 50+ users across 3 iterations.",
    results: [
      "Training time reduced from 2 weeks to 2 days",
      "User satisfaction score: 4.8/5",
      "30% increase in daily active users",
      "Support tickets reduced by 45%",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&fit=crop",
        caption: "Redesigned dashboard with improved data visualization",
      },
      {
        url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&h=800&fit=crop",
        caption: "Component library and design system documentation",
      },
    ],
  },
];
