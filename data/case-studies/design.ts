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
  toolsUsed: string[];
  behanceUrl: string;
  behanceViews?: number;
  behanceLikes?: number;
  images: {
    url: string;
    caption: string;
  }[];
}

export const designCaseStudies: CaseStudy[] = [
  {
    id: "freelance-logos-brand-kits",
    title: "Freelance Logos, Brand Kits & Stationery",
    thumbnailUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e22c54227952175.6849eaf2bf8d4.png",
    summary:
      "End-to-end brand identity design spanning custom logos, stationery systems, and full brand guidelines for diverse freelance clients.",
    client: "Multiple Clients",
    year: "2025",
    category: "Design",
    tags: ["Logo Design", "Branding", "Brand Identity", "Stationery", "Brand Guidelines"],
    overview:
      "A comprehensive collection of freelance brand identity work — from custom logo design and color systems to letterheads, business cards, envelope designs, and full brand guidelines. Each project required a distinct visual voice tailored to the client's industry and audience.",
    challenge:
      "Each client presented a unique challenge: creating a memorable, differentiated visual identity that stands out in their market while remaining cohesive across every brand touchpoint — from digital to print.",
    solution:
      "Developed bespoke logo concepts through iterative sketching and digital refinement. For each brand, built a complete design system: primary and secondary color palettes, type pairings, iconography rules, and usage guidelines. Final deliverables included business cards, letterheads, and envelope designs built in Adobe Illustrator, Photoshop, and InDesign.",
    results: [
      "59 Behance appreciations — most liked project on the profile",
      "5,900+ project views on Behance",
      "Full brand identity delivered from concept to production-ready files",
      "Clients across tech, sports, hospitality, and professional services",
    ],
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    behanceUrl:
      "https://www.behance.net/gallery/227952175/Freelance-Logos-Brand-Kits-Stationery-Designs",
    behanceViews: 5959,
    behanceLikes: 59,
    images: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e22c54227952175.6849eaf2bf8d4.png",
        caption: "Logo collection — custom marks for diverse industries",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/9f6f3e227952175.6849eaf2c1c13.jpg",
        caption: "Stationery design — letterheads and branded print materials",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/5e9ccc227952175.6849eaf2bdba2.png",
        caption: "Business card designs across multiple brand identities",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e99672227952175.6849eaf2bffc0.png",
        caption: "Brand kit documentation and usage guidelines",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/fe9dd5227952175.6849eaf2c6680.jpg",
        caption: "Envelope and stationery system applications",
      },
    ],
  },
  {
    id: "karachi-kings-social-media",
    title: "Karachi Kings — PSL Social Media Campaign",
    thumbnailUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/d410f9226622295.68b4a86985be1.png",
    summary:
      "High-impact match-day and campaign social media graphics for one of Pakistan Super League's flagship cricket franchises.",
    client: "Karachi Kings",
    year: "2025",
    category: "Design",
    tags: ["Sports Design", "Social Media", "PSL", "Cricket", "Poster Design"],
    overview:
      "Social media content design for Karachi Kings — one of the Pakistan Super League's most followed cricket teams. The scope covered match-day graphics, player spotlights, tournament promotional content, and post-match result cards across Instagram, Facebook, and Twitter.",
    challenge:
      "Creating fast-turnaround, premium-quality visual content that captures the energy of live cricket while maintaining strict brand consistency. Content needed to perform across multiple platforms with varying format requirements.",
    solution:
      "Built a modular design system anchored in the Karachi Kings brand identity. Developed reusable template structures for match-day countdowns, player feature cards, live match updates, and victory celebrations — enabling rapid delivery of fresh content throughout the entire tournament.",
    results: [
      "158+ Behance views on project portfolio",
      "Consistent brand representation across all social platforms",
      "Rapid content pipeline supporting every match day",
      "Visual identity that elevated the franchise's digital presence",
    ],
    toolsUsed: ["Adobe Photoshop", "Adobe Illustrator"],
    behanceUrl:
      "https://www.behance.net/gallery/226622295/Karachi-Kings-Social-Media-Work",
    behanceViews: 158,
    images: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/d410f9226622295.68b4a86985be1.png",
        caption: "Karachi Kings match-day social media graphics",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/40a4a6226622295.68b4a8698627b.png",
        caption: "Player spotlight and promotional campaign designs",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/f34c14226622295.68b4a86985673.png",
        caption: "Tournament series — result and celebration cards",
      },
    ],
  },
  {
    id: "green-team-cricket-social-media",
    title: "Green Team Cricket — Full-Season Social Media",
    thumbnailUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/dd97d198838317.65869a8bf055b.jpg",
    summary:
      "Complete brand identity and full-season social media design campaign for a cricket team, from logo creation to match-day content.",
    client: "Green Team Cricket",
    year: "2024",
    category: "Design",
    tags: ["Sports Design", "Social Media", "Cricket", "Logo Design", "Brand Identity"],
    overview:
      "Built Green Team Cricket's visual identity from scratch and sustained it across a full competitive season. Scope included the team logo, brand colors, match announcements, player features, scorecard graphics, and win celebration posts — 36+ individual design assets in total.",
    challenge:
      "Establishing a cohesive, professional visual brand for a cricket team that had no prior design identity. Every element — from the logo to post-match graphics — needed to feel part of a unified system.",
    solution:
      "Started with brand foundations: designed a distinctive logo and color system. Expanded into a full social media template library covering match-day countdowns, player spotlights, live score updates, and post-match celebrations. Adobe Photoshop and Lightroom were used to achieve a sharp, polished finish on every asset.",
    results: [
      "137+ Behance views on portfolio entry",
      "Complete brand identity built from zero to launch",
      "36+ unique social media assets produced over the season",
      "Consistent, recognisable team visual presence established",
    ],
    toolsUsed: ["Adobe Photoshop", "Adobe Lightroom"],
    behanceUrl:
      "https://www.behance.net/gallery/98838317/Green-Team-Cricket-Social-Media-Work",
    behanceViews: 137,
    images: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/dd97d198838317.65869a8bf055b.jpg",
        caption: "Green Team Cricket — brand identity and hero social graphics",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/005a7998838317.6048d69c4c6d4.png",
        caption: "Match-day content and player feature designs",
      },
    ],
  },
  {
    id: "taptouch-pos-social-media",
    title: "TapTouch POS — Brand & Social Media Identity",
    thumbnailUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/73828f218581549.6837fd5d5aa55.png",
    summary:
      "Social media branding and content design for a modern point-of-sale platform — building product awareness through compelling visual storytelling.",
    client: "TapTouch POS",
    year: "2025",
    category: "Design",
    tags: ["Social Media", "Branding", "Brand Identity", "SaaS", "Marketing", "Tech"],
    overview:
      "Social media content design for TapTouch POS, a modern point-of-sale platform for retail and hospitality. The work encompassed product feature highlights, promotional campaigns, and building a recognisable visual brand across digital channels.",
    challenge:
      "Translating complex technology features into social media content that resonates with non-technical small business owners. The visuals needed to feel approachable and modern while clearly communicating product value.",
    solution:
      "Created a clean, high-contrast visual language using bold typography and brand-consistent color palettes. Designed product-focused posts that show real-world usage scenarios — turning feature specs into compelling visual narratives. Delivered in Adobe Photoshop and Illustrator.",
    results: [
      "Cohesive social media brand identity established",
      "Clear product feature communication across posts",
      "55+ Behance portfolio views",
      "Consistent visual language ready to scale with the product",
    ],
    toolsUsed: ["Adobe Photoshop", "Adobe Illustrator"],
    behanceUrl:
      "https://www.behance.net/gallery/218581549/TapTouch-POS-Social-Media-Work",
    behanceViews: 55,
    images: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/73828f218581549.6837fd5d5aa55.png",
        caption: "TapTouch POS — social media content suite",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/781617218581549.6837fd5d5a336.png",
        caption: "Product feature highlight and promotional posts",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/8b807d218581549.6837fd5d5b156.png",
        caption: "Brand identity applications across digital formats",
      },
    ],
  },
  {
    id: "apex-sports-consulting-social-media",
    title: "Apex Sports Consulting — Digital Identity",
    thumbnailUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e3fd93227928701.68499988272d9.png",
    summary:
      "Premium social media content for a professional sports consulting firm operating across IPL and PSL cricket markets.",
    client: "Apex Sports Consulting",
    year: "2025",
    category: "Design",
    tags: ["Sports Design", "Social Media", "Consulting", "Brand Identity", "Cricket", "Poster Design"],
    overview:
      "Social media design for Apex Sports Consulting — a professional sports advisory firm with clients across IPL and PSL cricket ecosystems. The project required a premium, authoritative visual language that positions the brand as an expert voice in the sports business space.",
    challenge:
      "A B2B sports consulting firm needs to communicate credibility and authority while still being visually dynamic on social media. The brand needed to feel premium without feeling inaccessible.",
    solution:
      "Developed a bold editorial content series: dark backgrounds with high-contrast typography, strategic brand color accents, and clean grid layouts. Created content pillars covering thought-leadership posts, client work spotlights, market insights, and event announcements — all in a consistent visual language.",
    results: [
      "Premium brand positioning established in sports consulting",
      "41+ Behance portfolio views",
      "Multiple content categories developed for sustained publishing",
      "Visual presence aligned with high-profile cricket markets",
    ],
    toolsUsed: ["Adobe Photoshop", "Adobe Illustrator"],
    behanceUrl:
      "https://www.behance.net/gallery/227928701/Apex-Sports-Consulting-Social-Media-Work",
    behanceViews: 41,
    images: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e3fd93227928701.68499988272d9.png",
        caption: "Apex Sports Consulting — premium social media graphics",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/a02021227928701.6849998826826.png",
        caption: "Editorial content series for sports industry insights",
      },
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/fdf188227928701.6849998825f57.png",
        caption: "Brand identity applications and campaign graphics",
      },
    ],
  },
  {
    id: "psl-xi-auction-designs",
    title: "PSL XI Player Auction — Official Designs",
    thumbnailUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e01a1f245796679.69b54d45044b3.png",
    summary:
      "Official graphic design assets for the Pakistan Super League XI Player Auction — one of cricket's highest-profile pre-season events.",
    client: "Pakistan Super League",
    year: "2025",
    category: "Design",
    tags: ["PSL", "Sports Design", "Auction", "Poster Design", "Social Media", "Cricket"],
    overview:
      "Design work created for the Pakistan Super League XI Player Auction. The PSL auction is one of the most anticipated events in cricket's annual calendar, attracting global media attention. Deliverables included promotional graphics, player reveal cards, countdown content, and official social media posts.",
    challenge:
      "Producing high-visibility, deadline-critical design assets for a globally watched sporting event — while adhering to PSL's official brand guidelines and maintaining the premium production standard expected of the league.",
    solution:
      "Worked within PSL's established visual identity framework to produce a cohesive suite of auction-specific graphics. Created dramatic player reveal templates, auction countdown posts, and live-event social media content — all designed for maximum visual impact on mobile and desktop feeds.",
    results: [
      "Official PSL XI Auction design assets produced",
      "High-visibility deliverables distributed across official PSL channels",
      "On-brand with PSL's international identity standards",
      "24+ Behance portfolio views",
    ],
    toolsUsed: ["Adobe Photoshop", "Adobe Illustrator"],
    behanceUrl:
      "https://www.behance.net/gallery/245796679/PSL-XI-Auction-Designs",
    behanceViews: 24,
    images: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e01a1f245796679.69b54d45044b3.png",
        caption: "PSL XI Auction — official design collection",
      },
    ],
  },
  {
    id: "eleven-creatives-social-media",
    title: "Eleven Creatives — Agency Social Media",
    thumbnailUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/4a0f40245776603.69b4ab80a3e1c.png",
    summary:
      "Social media content design for a creative agency — crafting an aspirational, portfolio-worthy digital presence.",
    client: "Eleven Creatives",
    year: "2026",
    category: "Design",
    tags: ["Social Media", "Branding", "Brand Identity", "Creative Agency", "Poster Design"],
    overview:
      "Social media design for Eleven Creatives, a creative agency that required visually exceptional content to showcase their positioning and attract new clients. A creative agency's own feed IS their portfolio — the bar for quality was set exceptionally high.",
    challenge:
      "Designing social media content for a creative agency is the ultimate brief: it must be visually ambitious, internally consistent, and compelling enough to win new business on sight alone.",
    solution:
      "Developed a bold, premium content system using strong typographic hierarchy, curated color palettes, and modular templates built for rapid, consistent output. Each post feels crafted, not templated — maintaining originality at scale.",
    results: [
      "Premium agency brand presence established",
      "Consistent visual identity applied across all social channels",
      "Reusable content system built for long-term publishing",
      "Portfolio-standard output that showcases creative capability",
    ],
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop"],
    behanceUrl:
      "https://www.behance.net/gallery/245776603/Eleven-Creatives-Social-Media-Work",
    behanceViews: 8,
    images: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/4a0f40245776603.69b4ab80a3e1c.png",
        caption: "Eleven Creatives — agency social media content series",
      },
    ],
  },
];
