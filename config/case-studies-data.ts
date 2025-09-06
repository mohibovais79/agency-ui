// config/case-studies-data.ts

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
            title: "AI-Powered Predictive Analytics for Retail",
            thumbnailUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=400",
            summary: "Increased sales forecasting accuracy by 30% for a retail giant.",
            details: "We developed a custom machine learning model that analyzed historical sales data, seasonality, and market trends to provide highly accurate demand forecasts. This led to optimized inventory management and a significant reduction in stockouts.",
        },
        {
            id: 2,
            title: "NLP Chatbot for Customer Support Automation",
            thumbnailUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=400",
            summary: "Automated 80% of customer service inquiries for a leading SaaS company.",
            details: "Our team implemented a Natural Language Processing (NLP) powered chatbot that could understand and respond to complex customer queries in real-time. This freed up human agents to focus on high-priority issues, improving overall customer satisfaction.",
        },
        // ... Add 3 more AI case studies
    ],
    Data: [
        {
            id: 6,
            title: "Real-time Analytics Dashboard for Logistics",
            thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400",
            summary: "Provided C-level executives with actionable insights, reducing decision time by 50%.",
            details: "We designed and built a comprehensive Business Intelligence dashboard that consolidated data from multiple sources. It provided a single source of truth for tracking KPIs, identifying bottlenecks, and making data-driven strategic decisions.",
        },
        {
            id: 7,
            title: "Customer Segmentation for Marketing Campaigns",
            thumbnailUrl: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?q=80&w=400&h=300&fit=crop",
            summary: "Boosted marketing campaign ROI by 45% through targeted audience segments.",
            details: "Using clustering algorithms, we analyzed customer behavior and demographic data to identify distinct segments. This allowed our client to tailor their marketing messages and promotions, resulting in higher engagement and conversion rates.",
        },
        // ... Add 3 more Data case studies
    ],
    Design: [
        {
            id: 11,
            title: "Karachi Kings",
            thumbnailUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&h=300&q=80",
            summary: "Improved user retention by 25% with an intuitive and modern interface.",
            details: "Through extensive user research and usability testing, we redesigned the entire mobile application from the ground up. The new design focused on simplifying complex financial tasks, resulting in a more engaging and user-friendly experience.",
        },
        {
            id: 12,
            title: "Corporate Rebranding for a B2B Tech Firm",
            thumbnailUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=400",
            summary: "Elevated brand perception and market positioning.",
            details: "We conducted a full rebranding initiative, including a new logo, color palette, typography, and brand guidelines. The new identity better reflected the company's innovative spirit and helped them stand out in a competitive market.",
        },
        // ... Add 3 more Design case studies
    ],
};