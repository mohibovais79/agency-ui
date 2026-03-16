// data/case-studies/data.ts

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

export const dataCaseStudies: CaseStudy[] = [
    {
        id: "realtime-analytics-logistics",
        title: "Real-time Analytics Dashboard for Logistics",
        thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&fit=crop",
        summary: "Provided C-level executives with actionable insights, reducing decision time by 50%.",
        client: "FastShip Logistics",
        year: "2025",
        category: "Data",
        tags: ["Analytics", "Dashboard", "Business Intelligence", "Logistics"],
        overview: "Designed and built a comprehensive real-time analytics platform that unified data from 15+ disparate systems into a single source of truth for executive decision-making.",
        challenge: "Leadership was making critical decisions based on week-old data from fragmented Excel reports. They needed real-time visibility into operations, costs, and performance metrics across 200+ distribution centers.",
        solution: "We architected a modern data stack using Snowflake, dbt, and custom React dashboards. Built ETL pipelines processing 2TB daily, with sub-second query performance. Implemented role-based views for different stakeholder groups.",
        results: [
            "50% reduction in decision-making time",
            "Real-time visibility across all operations",
            "$8M identified in cost optimization opportunities",
            "Executive adoption rate of 100% within 3 weeks"
        ],
        images: [
            {
                url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&fit=crop",
                caption: "Executive dashboard showing key logistics KPIs and trends"
            },
            {
                url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=800&fit=crop",
                caption: "Route optimization and cost analysis views"
            }
        ]
    },
    {
        id: "customer-segmentation-marketing",
        title: "Customer Segmentation for Marketing Campaigns",
        thumbnailUrl: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?q=80&w=800&h=600&fit=crop",
        summary: "Boosted marketing campaign ROI by 45% through targeted audience segments.",
        client: "GrowthCo Marketing",
        year: "2024",
        category: "Data",
        tags: ["Customer Analytics", "Segmentation", "Marketing", "ML"],
        overview: "Developed an advanced customer segmentation system using behavioral analytics and machine learning to enable hyper-targeted marketing campaigns.",
        challenge: "The client was running generic campaigns with low conversion rates. They had rich customer data but no systematic way to identify high-value segments or personalize messaging.",
        solution: "We implemented RFM analysis combined with K-means clustering and propensity modeling. Built automated segment refresh pipelines and integrated with their marketing automation platform for real-time personalization.",
        results: [
            "45% increase in campaign ROI",
            "12 distinct high-value segments identified",
            "3x improvement in email open rates",
            "Personalization at scale for 2M+ customers"
        ],
        images: [
            {
                url: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?q=80&w=1200&h=800&fit=crop",
                caption: "Customer segment visualization and behavioral patterns"
            },
            {
                url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&h=800&fit=crop",
                caption: "Campaign performance metrics by segment"
            }
        ]
    },
    {
        id: "predictive-churn-saas",
        title: "Predictive Churn Model for SaaS Platform",
        thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&fit=crop",
        summary: "Reduced customer churn by 28% through early intervention strategies.",
        client: "SaaSify Inc.",
        year: "2025",
        category: "Data",
        tags: ["Predictive Analytics", "Churn Prevention", "SaaS", "Customer Success"],
        overview: "Built a predictive churn model that identifies at-risk customers 60 days before cancellation, enabling proactive retention efforts.",
        challenge: "The company was losing 8% of customers monthly with no early warning system. By the time customers contacted support about canceling, it was too late to intervene effectively.",
        solution: "We developed a gradient boosting model analyzing 200+ behavioral signals including usage patterns, support tickets, and engagement metrics. Integrated predictions into their CRM with automated playbooks for customer success teams.",
        results: [
            "28% reduction in monthly churn rate",
            "85% accuracy in predicting churn 60 days ahead",
            "$4.2M in retained annual recurring revenue",
            "Customer success team efficiency increased 3x"
        ],
        images: [
            {
                url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&fit=crop",
                caption: "Churn risk dashboard with intervention recommendations"
            },
            {
                url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&h=800&fit=crop",
                caption: "Model performance and feature importance analysis"
            }
        ]
    }
];
