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
    id: "diabot-diabetes-care",
    title: "Diabot-AI Companion for Diabetes Care",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&h=600&fit=crop",
    summary:
      "AI-powered chatbot that answers diabetes-related queries using verified doctors' data with confidence scoring.",
    client: "HealthTech Innovations",
    year: "2025",
    category: "AI",
    tags: [
      "Langchain",
      "FastAPI",
      "Langgraph",
      "ReactJS",
      "TypeScript",
      "Healthcare AI",
    ],
    overview:
      "Diabot is an intelligent healthcare assistant that provides reliable diabetes-related information using real medical data, complete with confidence scores to help users assess answer reliability.",
    challenge:
      "Patients with diabetes often need reliable medical information but struggle to find trustworthy sources online. Existing chatbots couldn't provide medical confidence scores or verify information accuracy.",
    solution:
      "We built Diabot using Langchain for document processing, Langgraph for conversation flow, and FastAPI for the backend. The system integrates verified medical data and provides confidence scores for each response, ensuring users know the reliability of information provided.",
    results: [
      "95% accuracy in medical information delivery",
      "40% reduction in patient misinformation concerns",
      "Integration with verified medical databases",
      "Real-time confidence scoring for all responses",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&h=800&fit=crop",
        caption:
          "Diabot interface showing diabetes query with confidence score",
      },
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&h=800&fit=crop",
        caption: "Medical data verification and confidence scoring system",
      },
    ],
  },
  {
    id: "datamind-analytical-assistant",
    title: "DataMind – Your Analytical AI Assistant",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&fit=crop",
    summary:
      "Transforms natural language questions into SQL/Python code for database queries with clear summaries and visualizations.",
    client: "DataAnalytics Corp",
    year: "2025",
    category: "AI",
    tags: [
      "Langchain",
      "OpenAI",
      "FAISS",
      "HuggingFace",
      "SQLite",
      "Data Analytics",
    ],
    overview:
      "DataMind enables users to query relational databases using natural language, automatically generating SQL or Python code and delivering clear, visualized results tailored to their specific requests.",
    challenge:
      "Business users struggled to extract insights from databases without technical SQL knowledge. Data analysts spent significant time writing repetitive queries for common business questions.",
    solution:
      "We developed DataMind using OpenAI for natural language processing, FAISS for efficient document retrieval, and HuggingFace models for code generation. The system translates natural language into optimized SQL/Python queries and presents results through intuitive visualizations.",
    results: [
      "80% reduction in query development time",
      "Non-technical users can now access database insights",
      "Automated visualization generation",
      "Support for complex multi-table queries",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&fit=crop",
        caption:
          "DataMind interface showing natural language to SQL conversion",
      },
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&h=800&fit=crop",
        caption: "Generated visualizations from database query results",
      },
    ],
  },
  {
    id: "internal-knowledge-chatbot",
    title: "Internal Knowledge Base Chatbot",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800&h=600&fit=crop",
    summary:
      "Secure AI-powered documentation chatbot with role-based access control and Google Sign-In authentication.",
    client: "Enterprise Solutions Ltd",
    year: "2025",
    category: "AI",
    tags: [
      "Pydantic-AI",
      "FastAPI",
      "PGvector",
      "Postgresql",
      "Ory Cloud",
      "Mantine UI",
      "Enterprise AI",
    ],
    overview:
      "A secure internal documentation chatbot that allows admins to upload files, set role-based permissions, and control access while providing Google Sign-In for seamless authentication.",
    challenge:
      "Organizations struggled with scattered internal documentation and inefficient knowledge sharing. Existing solutions lacked proper security controls and integration with enterprise authentication systems.",
    solution:
      "We built the chatbot using Pydantic-AI for data validation, FastAPI for the backend, PGvector with PostgreSQL for vector storage, and Ory Cloud for authentication. The system supports file uploads, role-based access control, and integrates with Google Sign-In for enterprise-grade security.",
    results: [
      "60% reduction in internal document search time",
      "Enterprise-grade security with role-based access",
      "Seamless Google Sign-In integration",
      "Support for multiple document formats",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&h=800&fit=crop",
        caption:
          "Internal knowledge base chatbot interface with role-based access",
      },
      {
        url: "https://images.unsplash.com/photo-1559028006-748fa4731923?q=80&w=1200&h=800&fit=crop",
        caption: "Admin dashboard for document management and access control",
      },
    ],
  },
  {
    id: "real-estate-whatsapp-agent",
    title: "Real Estate WhatsApp AI Agent",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&h=600&fit=crop",
    summary:
      "Eliminated manual property lookups for Dubai brokerage by syncing listings with AI knowledge base, enabling instant WhatsApp queries.",
    client: "Dubai Properties Elite",
    year: "2025",
    category: "AI",
    tags: [
      "WhatsApp API",
      "Google Gemini",
      "Real Estate AI",
      "Knowledge Base",
      "Automation",
    ],
    overview:
      "AI-powered WhatsApp agent that provides instant property specifications and generates polished client responses by querying an AI-ready knowledge base of real estate listings.",
    challenge:
      "Real estate agents spent excessive time manually searching property databases and crafting client responses. The Dubai brokerage needed a faster way to provide property information to potential buyers.",
    solution:
      "We integrated the client's property listings into an AI-ready knowledge base and built a WhatsApp agent using Google Gemini for natural language processing. The system instantly retrieves property specs and generates professional client responses, cutting search time dramatically.",
    results: [
      "90% reduction in property search time",
      "Instant responses via WhatsApp for client inquiries",
      "Professional response generation",
      "Real-time property data synchronization",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&h=800&fit=crop",
        caption: "WhatsApp AI agent providing instant property information",
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&h=800&fit=crop",
        caption: "Real estate dashboard with AI-powered property search",
      },
    ],
  },
];
