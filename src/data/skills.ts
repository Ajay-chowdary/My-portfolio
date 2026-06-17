export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / Machine Learning",
    items: [
      "Python",
      "PyTorch",
      "PyTorch Geometric",
      "GraphSAGE / GNNs",
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Claude API",
      "Gemini",
      "Hugging Face",
      "LoRA Fine-Tuning",
      "Prompt Engineering",
      "LangSmith",
      "Evals",
    ],
  },
  {
    title: "Agentic & Orchestration",
    items: [
      "LangGraph",
      "MCP",
      "Multi-Agent Systems",
      "Tool Use",
      "Function Calling",
      "State Machines",
      "Workflow Orchestration",
      "n8n",
      "CrewAI",
    ],
  },
  {
    title: "Vector DBs & RAG",
    items: [
      "FAISS",
      "pgvector",
      "Pinecone",
      "Weaviate",
      "Chroma",
      "RAG",
      "Embeddings",
      "Semantic Search",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Prisma",
      "Supabase",
      "Auth.js",
      "Redis",
      "MongoDB",
      "Kafka",
      "Snowflake",
    ],
  },
  {
    title: "Tools & Infra",
    items: [
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Git",
      "Stripe",
      "AWS",
      "GCP",
      "CI/CD",
      "Kubernetes",
    ],
  },
];

export type Stat = {
  /** Numeric target the counter animates to */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

/* Real, defensible metrics from your projects — edit freely. */
export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Flagship Projects Shipped" },
  { value: 27, suffix: "×", label: "Recall Gain (GNN vs Baseline)" },
  { value: 100, suffix: "K", label: "Candidates Ranked" },
];
