export type Experience = {
  org: string;
  role: string;
  /** e.g. "May 2022 — May 2024" */
  period: string;
  /** e.g. "Remote" or "Clemson, SC · GPA 3.76" */
  location?: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    org: "Clemson University",
    role: "M.S. Computer Science · Teaching Assistant",
    period: "Aug 2024 — May 2026",
    location: "Clemson, SC · GPA 3.76",
    bullets: [
      "Completing graduate coursework in machine learning, algorithms, and AI systems while building production portfolio projects in LLMs, agentic workflows, and graph neural networks.",
      "Built a Heterogeneous GNN recommendation system achieving 57% Recall@10 vs 2% baseline — a 27× improvement — on 100,000 candidates using PyTorch Geometric and GraphSAGE.",
    ],
  },
  {
    org: "Worthit Consultancy Services Pvt Ltd",
    role: "Full Stack Software Engineer",
    period: "May 2022 — May 2024",
    location: "Remote",
    bullets: [
      "Built and shipped production features across React and TypeScript frontends, Python and Node.js backends, and PostgreSQL data layers for 3 SaaS platforms — owning full product areas end-to-end with zero critical post-release incidents over two years.",
      "Designed developer-facing REST APIs with authentication boundaries, Pydantic-validated schemas, versioned contracts, and structured error handling — reducing API error rates by 25% and response times by 30%.",
      "Built LLM-powered automation workflows integrating OpenAI and Anthropic APIs into production operational processes, with evaluation frameworks tracking output quality before every deployment.",
      "Built GitHub Actions CI/CD pipelines with Docker and AWS deployments — reducing integration failures by 40% and manual release effort by 35%.",
    ],
  },
];
