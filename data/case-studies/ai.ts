// data/case-studies/ai.ts

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

export const aiCaseStudies: CaseStudy[] = [
    {
        id: "ai-predictive-analytics-retail",
        title: "AI-Powered Predictive Analytics for Retail",
        thumbnailUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800&h=600&fit=crop",
        summary: "Increased sales forecasting accuracy by 30% for a retail giant.",
        client: "GlobalRetail Inc.",
        year: "2025",
        category: "AI",
        tags: ["Machine Learning", "Predictive Analytics", "Retail"],
        overview: "We partnered with a Fortune 500 retail company to transform their demand forecasting capabilities using advanced machine learning models.",
        challenge: "The client struggled with inventory management, facing frequent stockouts and overstock situations that cost millions annually. Their legacy forecasting system couldn't adapt to rapid market changes or seasonal variations.",
        solution: "We developed a custom ensemble ML model combining LSTM neural networks, XGBoost, and Prophet for time-series forecasting. The system ingested historical sales data, weather patterns, local events, and competitor pricing to generate highly accurate demand predictions.",
        results: [
            "30% improvement in forecasting accuracy",
            "$12M annual savings from optimized inventory",
            "45% reduction in stockouts",
            "Real-time demand predictions updated every 4 hours"
        ],
        images: [
            {
                url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&h=800&fit=crop",
                caption: "Dashboard showing real-time demand forecasting across product categories"
            },
            {
                url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&fit=crop",
                caption: "ML model performance metrics and accuracy trends"
            }
        ]
    },
    {
        id: "nlp-chatbot-customer-support",
        title: "NLP Chatbot for Customer Support Automation",
        thumbnailUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&h=600&fit=crop",
        summary: "Automated 80% of customer service inquiries for a leading SaaS company.",
        client: "CloudTech Solutions",
        year: "2025",
        category: "AI",
        tags: ["NLP", "Chatbot", "Customer Support", "Automation"],
        overview: "Built an intelligent conversational AI system that handles complex customer queries with human-like understanding and context awareness.",
        challenge: "The client's support team was overwhelmed with 10,000+ daily inquiries, leading to long wait times and customer frustration. Most queries were repetitive but required nuanced understanding.",
        solution: "We implemented a transformer-based NLP chatbot using fine-tuned GPT models, integrated with their knowledge base and CRM. The system handles multi-turn conversations, escalates complex issues to humans, and learns from every interaction.",
        results: [
            "80% of inquiries fully automated",
            "Average response time reduced from 4 hours to 30 seconds",
            "Customer satisfaction score increased to 4.7/5",
            "Support team capacity freed up for strategic initiatives"
        ],
        images: [
            {
                url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&h=800&fit=crop",
                caption: "Chatbot interface showing natural conversation flow"
            },
            {
                url: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&h=800&fit=crop",
                caption: "Analytics dashboard tracking automation rates and customer satisfaction"
            }
        ]
    },
    {
        id: "computer-vision-quality-control",
        title: "Computer Vision for Manufacturing Quality Control",
        thumbnailUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&h=600&fit=crop",
        summary: "Reduced defect rates by 95% through automated visual inspection.",
        client: "PrecisionMfg Corp",
        year: "2024",
        category: "AI",
        tags: ["Computer Vision", "Manufacturing", "Quality Control"],
        overview: "Deployed real-time computer vision system to detect manufacturing defects with superhuman accuracy on production lines.",
        challenge: "Manual quality inspection was slow, inconsistent, and missed subtle defects. The client needed 24/7 inspection capability without increasing headcount.",
        solution: "We built a custom CNN-based vision system using YOLOv8 for real-time defect detection. The system processes 100 items per minute, identifying 47 different defect types with 99.2% accuracy.",
        results: [
            "95% reduction in defect escape rate",
            "3x faster inspection throughput",
            "ROI achieved in 8 months",
            "Zero false positives in critical defect categories"
        ],
        images: [
            {
                url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&h=800&fit=crop",
                caption: "Computer vision system analyzing products on assembly line"
            },
            {
                url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&h=800&fit=crop",
                caption: "Defect detection heatmap and classification results"
            }
        ]
    }
];
