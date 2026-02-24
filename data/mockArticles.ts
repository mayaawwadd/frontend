export interface Article {
    id: string;
    title: string;
    summary: string;
    date: string;
    source: string;
    category: string;
    region: string;
    imageUrl: string;
    articleUrl: string;
    curated: boolean;
}

export const mockArticles: Article[] = [
    {
        id: "1",
        title: "The EU AI Act: What Big Four Firms Must Know Before 2025 Deadlines",
        summary: "The EU AI Act introduces tiered obligations for high-risk AI systems. Professional services firms face new compliance requirements around transparency, human oversight, and documentation that will reshape how AI tools are deployed client-side.",
        date: "Feb 17, 2026",
        source: "Regulators",
        category: "AI Regulation",
        region: "Europe",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
        curated: true,
    },
    {
        id: "2",
        title: "GPT-5 and the Future of Autonomous Audit: A Risk Deep Dive",
        summary: "As large language models approach human-level reasoning benchmarks, audit firms are piloting AI agents for substantive testing. We examine the reliability, hallucination risks, and governance gaps that must be addressed before full deployment.",
        date: "Feb 15, 2026",
        source: "Company-curated",
        category: "AI in Audit",
        region: "Global",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://openai.com/research",
        curated: true,
    },
    {
        id: "3",
        title: "Adversarial Attacks on LLMs: A New Frontier for Cybersecurity Teams",
        summary: "Prompt injection, model inversion, and membership inference attacks are emerging as critical threats to enterprise AI systems. Security teams must develop red-team capabilities specifically designed for generative AI architectures.",
        date: "Feb 14, 2026",
        source: "Tech press",
        category: "AI Security",
        region: "US",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://arxiv.org/abs/2307.15043",
        curated: false,
    },
    {
        id: "4",
        title: "AI Governance Frameworks: Comparing NIST, ISO 42001, and OECD Principles",
        summary: "Organizations are navigating a fragmented landscape of AI governance frameworks. This analysis compares three leading standards, highlighting where they converge on accountability, explainability, and risk management for enterprise deployments.",
        date: "Feb 12, 2026",
        source: "Research papers",
        category: "AI Governance",
        region: "Global",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://www.nist.gov/artificial-intelligence",
        curated: true,
    },
    {
        id: "5",
        title: "Deploying GenAI in Consulting: Lessons from 50+ Enterprise Engagements",
        summary: "Consulting teams that integrated GenAI tools into client deliverables report 40% time savings on research synthesis tasks. But the hidden costs—quality review cycles, prompt engineering expertise, model drift—demand a rethink of billing models.",
        date: "Feb 11, 2026",
        source: "Company-curated",
        category: "AI in Consulting",
        region: "Global",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://hbr.org/2024/01/how-ai-is-changing-consulting",
        curated: true,
    },
    {
        id: "6",
        title: "MLOps at Scale: Building Production-Grade AI Pipelines for Regulated Industries",
        summary: "Financial services and healthcare AI teams share a common bottleneck: the gap between model development and compliant production deployment. This guide covers versioning, monitoring, rollback strategies, and audit trail requirements.",
        date: "Feb 10, 2026",
        source: "Tech press",
        category: "MLOps",
        region: "US",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://ml-ops.org",
        curated: false,
    },
    {
        id: "7",
        title: "SAMA Releases Draft AI Regulations for Saudi Financial Sector",
        summary: "The Saudi Central Bank has released draft guidelines requiring financial institutions to implement explainability mechanisms and human-in-the-loop controls for AI-driven credit decisions—a landmark move for MENA AI regulation.",
        date: "Feb 8, 2026",
        source: "Regulators",
        category: "AI Regulation",
        region: "MENA",
        imageUrl: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://www.sama.gov.sa",
        curated: true,
    },
    {
        id: "8",
        title: "The Board-Level AI Strategy Imperative: Moving from Pilot to Platform",
        summary: "C-suite executives at Fortune 500 companies are being asked to present AI strategies to boards with minimal technical fluency. We outline a board-ready framework covering risk appetite, ROI metrics, talent, and ethical guardrails.",
        date: "Feb 7, 2026",
        source: "Company-curated",
        category: "AI Strategy",
        region: "US",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
        curated: true,
    },
    {
        id: "9",
        title: "Retrieval-Augmented Generation: Cutting Through the Hype for Enterprise Use",
        summary: "RAG architectures promise to ground LLM outputs in verified enterprise knowledge bases. But implementation quality varies wildly. This technical explainer covers chunking strategies, embedding models, and reranking for high-stakes professional contexts.",
        date: "Feb 6, 2026",
        source: "Research papers",
        category: "LLMs",
        region: "Global",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://arxiv.org/abs/2312.10997",
        curated: false,
    },
    {
        id: "10",
        title: "Data Quality as an AI Governance Priority: A Practitioner's Guide",
        summary: "Poor data quality is the leading cause of AI project failure in enterprise settings. This guide establishes a data governance framework aligned with AI lifecycle management, covering lineage, provenance, and bias detection for analytics teams.",
        date: "Feb 4, 2026",
        source: "Company-curated",
        category: "Data & Analytics",
        region: "Europe",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://www.gartner.com/en/data-analytics",
        curated: true,
    },
    {
        id: "11",
        title: "GenAI Hallucinations in Legal Documents: Risk Management for Law & Advisory Firms",
        summary: "A study of 1,200 AI-generated legal summaries found a 12% material error rate. Advisory firms relying on LLMs for contract review and due diligence must implement structured validation layers and human review checkpoints.",
        date: "Feb 2, 2026",
        source: "Research papers",
        category: "GenAI",
        region: "US",
        imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://ssrn.com/abstract=4372741",
        curated: false,
    },
    {
        id: "12",
        title: "AI Talent War: How Big Four Firms Are Rethinking Hiring for the AI Era",
        summary: "The race to attract AI engineers, prompt specialists, and AI ethicists has pushed Big Four firms to offer compensation packages rivaling Silicon Valley. Internal upskilling programs and AI academies are becoming a key competitive differentiator.",
        date: "Jan 30, 2026",
        source: "Tech press",
        category: "AI Strategy",
        region: "Global",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
        articleUrl: "https://www.ft.com/companies/big-four",
        curated: false,
    },
];

export const TOPICS = [
    "AI Governance", "GenAI", "AI Security", "AI Strategy", "LLMs",
    "AI in Audit", "AI in Consulting", "AI Regulation", "MLOps", "Data & Analytics"
];

export const SOURCES = ["Company-curated", "Tech press", "Research papers", "Regulators"];
export const FREQUENCIES = ["Daily", "Weekly"];
export const REGIONS = ["Global", "MENA", "Europe", "US"];
