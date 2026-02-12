export interface NewsArticle {
  id: string;
  headline: string;
  summary: string;
  source: string;
  publishDate: string;
  category: string;
  imageUrl: string;
  url: string;
}

export const mockNewsArticles: NewsArticle[] = [
  {
    id: "101",
    headline: "Cisco Sees AI Infrastructure Surge as Key to Record Fiscal Year",
    summary:
      "Cisco reports accelerating demand for AI-native networking systems as enterprises rearchitect data centers for high‑capacity compute workloads.",
    source: "CRN",
    publishDate: "2026-02-11",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    url: "https://www.crn.com/news/networking/2026/cisco-ceo-ai-infrastructure-campus-refresh-opportunities-will-propel-networking-giant-toward-strongest-fiscal-year-yet", // [1](https://www.crn.com/news/networking/2026/cisco-ceo-ai-infrastructure-campus-refresh-opportunities-will-propel-networking-giant-toward-strongest-fiscal-year-yet)
  },
  {
    id: "102",
    headline: "Global Enterprise IT Spending to Hit $6.15 Trillion in 2026",
    summary:
      "Gartner forecasts major increases in data‑center and server investments as organizations race to scale AI infrastructure capabilities.",
    source: "Computerworld",
    publishDate: "2026-02-05",
    category: "Industry Trends",
    imageUrl: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    url: "https://www.computerworld.com/article/4128002/global-it-spending-to-hit-6-15tn-in-2026-driven-by-ai-infrastructure-boom.html", // [2](https://www.computerworld.com/article/4128002/global-it-spending-to-hit-6-15tn-in-2026-driven-by-ai-infrastructure-boom.html)
  },
  {
    id: "103",
    headline:
      "AI Scale Expected to Push Enterprise Infrastructure Toward Failure",
    summary:
      "A global survey reveals that most technology leaders believe current systems cannot sustain next‑generation AI workloads without major upgrades.",
    source: "Yahoo Finance",
    publishDate: "2026-01-29",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1527430253228-e93688616381",
    url: "https://finance.yahoo.com/news/cockroach-labs-2026-ai-report-140000376.html", // [3](https://finance.yahoo.com/news/cockroach-labs-2026-ai-report-140000376.html)
  },
  {
    id: "104",
    headline: "Networking Trends for 2026 Highlight AI‑Driven Automation",
    summary:
      "Enterprises increase investments in network automation, SASE, and Wi‑Fi 7 as AI-driven operations reshape infrastructure demands.",
    source: "Network World",
    publishDate: "2026-02-04",
    category: "Security",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    url: "https://www.networkworld.com/article/4126582/8-hot-networking-trends-for-2026.html", // [4](https://www.networkworld.com/article/4126582/8-hot-networking-trends-for-2026.html)
  },
  {
    id: "105",
    headline: "AI Everything MEA 2026 Kicks Off With Global Enterprise Focus",
    summary:
      "Technology leaders and policymakers explore AI deployment across sectors including finance, health, cybersecurity, and public services.",
    source: "Morocco World News",
    publishDate: "2026-02-11",
    category: "Industry Trends",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    url: "https://www.moroccoworldnews.com/2026/02/278227/ai-everything-mea-egypt-2026-kicks-off-in-cairo", // [5](https://www.moroccoworldnews.com/2026/02/278227/ai-everything-mea-egypt-2026-kicks-off-in-cairo/)
  },
  {
    id: "106",
    headline:
      "S&P Global: Enterprises Race to Build AI‑Agent Ready Infrastructure",
    summary:
      "New analysis shows sharp increases in GPU demand as organizations prepare for autonomous AI systems requiring massive compute scale.",
    source: "S&P Global",
    publishDate: "2025-11-05",
    category: "Governance",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    url: "https://press.spglobal.com/2025-11-05-S-P-Global-Report-Charts-Enterprise-Race-to-Build-AI-Agent-Ready-Infrastructure", // [6](https://press.spglobal.com/2025-11-05-S-P-Global-Report-Charts-Enterprise-Race-to-Build-AI-Agent-Ready-Infrastructure)
  },
  {
    id: "107",
    headline: "AI Outlook 2026: Infrastructure Bottlenecks Rising Globally",
    summary:
      "A Moody’s analysis shows compute power shortages, regulatory fragmentation, and chip access constraints reshaping enterprise AI strategies.",
    source: "Moody’s",
    publishDate: "2026-01-12",
    category: "Governance",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    url: "https://www.moodys.com/web/en/us/insights/credit-risk/outlooks/artificial-intelligence-2026.html", // [7](https://www.moodys.com/web/en/us/insights/credit-risk/outlooks/artificial-intelligence-2026.html)
  },
  {
    id: "108",
    headline:
      "Whitepaper: The Next Phase of AI Infrastructure and Policy in 2026",
    summary:
      "New research outlines key policy, infrastructure, and compute challenges as AI adoption accelerates across global industries.",
    source: "American Action Forum",
    publishDate: "2026-01-10",
    category: "Governance",
    imageUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    url: "https://www.americanactionforum.org/insight/the-next-phase-of-ai-technology-infrastructure-and-policy-in-2025-2026/", // [8](https://www.americanactionforum.org/insight/the-next-phase-of-ai-technology-infrastructure-and-policy-in-2025-2026/)
  },
  {
    id: "109",
    headline:
      "Alphabet Resets the Bar With $185B AI Infrastructure Capex for 2026",
    summary:
      "Alphabet doubles its infrastructure spending as demand surges for AI workloads across cloud, Gemini, and DeepMind products.",
    source: "Open Data Science",
    publishDate: "2026-02-05",
    category: "Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    url: "https://opendatascience.com/alphabet-resets-the-bar-for-ai-infrastructure-spending-with-2026-capex-forecast/", // [9](https://opendatascience.com/alphabet-resets-the-bar-for-ai-infrastructure-spending-with-2026-capex-forecast/)
  },
  {
    id: "110",
    headline: "IBM Predicts Key AI and Tech Trends Shaping 2026",
    summary:
      "An IBM analysis highlights advances in quantum integration, AI safety, corporate security, and enterprise-scale AI adoption.",
    source: "IBM",
    publishDate: "2026-01-18",
    category: "Industry Trends",
    imageUrl: "https://images.unsplash.com/photo-1565372918674-965f27771ba4",
    url: "https://www.ibm.com/think/news/ai-tech-trends-predictions-2026", // [10](https://www.ibm.com/think/news/ai-tech-trends-predictions-2026)
  },
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
  "Telecommunications",
];
