export interface NewsArticle {
  id: string;
  headline: string;
  summary: string;
  source: string;
  publishDate: string;
  category: string;
  imageUrl: string;
}

export const mockNewsArticles: NewsArticle[] = [
  {
    id: "1",
    headline: "Major Cloud Provider Announces Advanced AI Infrastructure for Enterprise",
    summary: "Leading technology company unveils next-generation infrastructure designed specifically for enterprise AI workloads, promising enhanced scalability and security compliance.",
    source: "Enterprise Technology Review",
    publishDate: "2026-02-10",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwdGVjaG5vbG9neSUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MDY0NzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "2",
    headline: "Global Consulting Firm Reports 40% Increase in AI Adoption Among Fortune 500",
    summary: "New research indicates accelerating enterprise adoption of artificial intelligence solutions, with focus on operational efficiency and strategic decision-making support.",
    source: "Business Intelligence Quarterly",
    publishDate: "2026-02-09",
    category: "Industry Trends",
    imageUrl: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA2OTA0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "3",
    headline: "Financial Services Sector Leads in AI Investment for Risk Management",
    summary: "Banking and insurance industries prioritize AI-driven risk assessment and compliance monitoring, allocating significant resources to technology integration.",
    source: "Financial Technology News",
    publishDate: "2026-02-09",
    category: "Finance",
    imageUrl: "https://images.unsplash.com/photo-1766218326892-4b261b02a03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwdHJhZGluZ3xlbnwxfHx8fDE3NzA2NTYyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "4",
    headline: "New Framework Released for Ethical AI Implementation in Corporate Settings",
    summary: "Industry consortium publishes comprehensive guidelines for responsible AI deployment, addressing governance, transparency, and accountability requirements.",
    source: "Corporate Governance Today",
    publishDate: "2026-02-08",
    category: "Governance",
    imageUrl: "https://images.unsplash.com/photo-1758691736493-aa6d22c0f8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBib2FyZHJvb20lMjBtZWV0aW5nfGVufDF8fHx8MTc3MDcxOTQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "5",
    headline: "Manufacturing Sector Reports Productivity Gains from AI-Powered Analytics",
    summary: "Industrial companies document measurable improvements in operational efficiency through implementation of predictive maintenance and quality control systems.",
    source: "Industrial Technology Insights",
    publishDate: "2026-02-08",
    category: "Manufacturing",
    imageUrl: "https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzA2Nzk0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "6",
    headline: "Healthcare Organizations Advance AI Integration for Clinical Decision Support",
    summary: "Medical institutions expand use of artificial intelligence tools to enhance diagnostic accuracy and streamline administrative workflows while maintaining patient privacy.",
    source: "Healthcare Innovation Report",
    publishDate: "2026-02-07",
    category: "Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcwNzA5NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "7",
    headline: "Enterprise Software Vendors Introduce Enhanced AI Security Features",
    summary: "Technology providers respond to growing enterprise demand for robust security measures in artificial intelligence applications, emphasizing data protection and access control.",
    source: "Enterprise Software Journal",
    publishDate: "2026-02-07",
    category: "Security",
    imageUrl: "https://images.unsplash.com/photo-1693314184947-af516631ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc3MDY2ODU1MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "8",
    headline: "Supply Chain Leaders Implement AI for Demand Forecasting and Logistics Optimization",
    summary: "Global corporations leverage advanced analytics to improve supply chain visibility, reduce costs, and enhance resilience against market disruptions.",
    source: "Supply Chain Management Review",
    publishDate: "2026-02-06",
    category: "Supply Chain",
    imageUrl: "https://images.unsplash.com/photo-1573552991725-c7b115591d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBzdXBwbHl8ZW58MXx8fHwxNzcwNzE5NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "9",
    headline: "Legal Sector Explores AI Applications for Document Analysis and Research",
    summary: "Law firms and corporate legal departments evaluate artificial intelligence tools for contract review, case research, and regulatory compliance monitoring.",
    source: "Legal Technology Advisor",
    publishDate: "2026-02-06",
    category: "Legal",
    imageUrl: "https://images.unsplash.com/photo-1750727125196-c11918763096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGNvdXJ0aG91c2V8ZW58MXx8fHwxNzcwNzE5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "10",
    headline: "Energy Companies Deploy AI for Grid Management and Resource Optimization",
    summary: "Utility providers and energy firms utilize machine learning for predictive maintenance, load balancing, and integration of renewable energy sources.",
    source: "Energy Sector Analysis",
    publishDate: "2026-02-05",
    category: "Energy",
    imageUrl: "https://images.unsplash.com/photo-1720351320133-a9bb8fd0b500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBlbmVyZ3l8ZW58MXx8fHwxNzcwNzE5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "11",
    headline: "Retail Industry Advances Personalization Through AI-Driven Customer Intelligence",
    summary: "Major retailers implement sophisticated analytics platforms to enhance customer experience while respecting privacy regulations and ethical considerations.",
    source: "Retail Technology Insights",
    publishDate: "2026-02-05",
    category: "Retail",
    imageUrl: "https://images.unsplash.com/photo-1770321119425-91c87db7787e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3NzA2Mjc0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "12",
    headline: "Telecommunications Firms Leverage AI for Network Optimization and Service Quality",
    summary: "Service providers deploy artificial intelligence to manage network traffic, predict equipment failures, and improve customer support operations.",
    source: "Telecom Industry Monitor",
    publishDate: "2026-02-04",
    category: "Telecommunications",
    imageUrl: "https://images.unsplash.com/photo-1700463108455-956c595bc97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjBuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcwNzE5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const categories = [
  "All",
  "Infrastructure",
  "Industry Trends",
  "Finance",
  "Governance",
  "Manufacturing",
  "Healthcare",
  "Security",
  "Supply Chain",
  "Legal",
  "Energy",
  "Retail",
  "Telecommunications"
];
