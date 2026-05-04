export interface CaseStudy {
  id: number;
  title: string;
  thumbnailUrl: string;
  summary: string;
  details: string;
}

export const caseStudiesData: Record<string, CaseStudy[]> = {
  AI: [
    {
      id: 1,
      title: "Internal Knowledge Base Chatbot",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=400",
      summary: "Automated internal knowledge retrieval — saving 8 hours/week per team.",
      details:
        "Built a RAG-powered chatbot on top of the company's internal documentation, Confluence, and Notion. Reduced support escalations by 60% in the first month.",
    },
    {
      id: 2,
      title: "NLP Chatbot for Customer Support",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=400",
      summary: "Automated 80% of customer service inquiries for a SaaS company.",
      details:
        "Implemented an NLP-powered chatbot that handles complex customer queries in real-time. Human agents now focus only on high-priority issues, lifting CSAT scores by 22%.",
    },
  ],
  Data: [
    {
      id: 6,
      title: "Real-time Analytics Dashboard for Logistics",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400",
      summary: "C-level decision time reduced by 50% with a unified BI dashboard.",
      details:
        "Consolidated data from six warehouse management systems into a single real-time dashboard. Enabled proactive bottleneck detection and cut average decision time in half.",
    },
    {
      id: 7,
      title: "Customer Segmentation for Marketing",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?q=80&w=400&h=300&fit=crop",
      summary: "Marketing campaign ROI boosted 45% through ML-driven audience segmentation.",
      details:
        "Used k-means clustering on behavioural and demographic data to identify six distinct customer segments. Tailored campaigns per segment lifted engagement and conversion across the board.",
    },
  ],
  Design: [
    {
      id: 11,
      title: "Freelance Logos & Brand Kits",
      thumbnailUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e22c54227952175.6849eaf2bf8d4.png",
      summary: "End-to-end brand identities spanning logos, stationery, and brand guidelines.",
      details:
        "Custom logo design, color systems, typography pairings, and full brand kits delivered for clients across tech, sports, and professional services. Over 5,900 views and 59 appreciations on Behance.",
    },
    {
      id: 12,
      title: "Karachi Kings — PSL Social Media",
      thumbnailUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/d410f9226622295.68b4a86985be1.png",
      summary: "High-impact match-day graphics for Pakistan's premier cricket franchise.",
      details:
        "Designed a full social media content suite for the Karachi Kings PSL team — match-day graphics, player spotlights, and result cards using a modular template system.",
    },
    {
      id: 13,
      title: "Green Team Cricket — Season Campaign",
      thumbnailUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/dd97d198838317.65869a8bf055b.jpg",
      summary: "Brand identity and full-season social media design for a cricket team.",
      details:
        "Built the team's visual identity from scratch — logo, colors, and 36+ social media assets covering match announcements, player features, and celebrations.",
    },
    {
      id: 14,
      title: "TapTouch POS — Brand & Social",
      thumbnailUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/73828f218581549.6837fd5d5aa55.png",
      summary: "Social media branding for a modern point-of-sale platform.",
      details:
        "Translated complex POS technology features into clean, compelling social content — establishing a consistent visual identity that speaks to small business owners.",
    },
    {
      id: 15,
      title: "PSL XI Auction — Official Designs",
      thumbnailUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/e01a1f245796679.69b54d45044b3.png",
      summary: "Official graphic assets for the Pakistan Super League XI Player Auction.",
      details:
        "Produced a suite of auction-specific graphics within PSL's brand guidelines — player reveal cards, countdown posts, and live-event social content.",
    },
  ],
};
