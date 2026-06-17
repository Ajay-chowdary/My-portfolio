export type Project = {
  name: string;
  blurb: string;
  /** Longer README-style overview shown in the detail modal */
  overview: string;
  /** Key work / features, rendered as a checklist in the modal */
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  /** Optional screenshot in /public, e.g. "/projects/tixoro.png" */
  image?: string;
  /** Short kind label shown as an eyebrow on the card */
  kind: string;
};

/*
  Add new projects by appending to this array.
  Drop screenshots in /public/projects/ and set `image`.
*/
export const projects: Project[] = [
  {
    name: "AI Compliance Analyst",
    kind: "Agentic RAG Platform",
    blurb:
      "An agentic RAG platform for compliance document analysis with citation verification, confidence scoring, and human-in-the-loop review.",
    overview:
      "AI Compliance Analyst turns dense regulatory and policy documents into auditable answers. Instead of a single LLM call, it runs a multi-step LangGraph pipeline that retrieves, reasons, verifies its own citations, and scores its confidence before anything reaches a human reviewer — built for domains where a wrong answer has real consequences.",
    features: [
      "Multi-agent LangGraph pipeline with explicit retrieval, reasoning, and verification stages.",
      "Citation verification — every claim is grounded in a source span, and unsupported claims are flagged.",
      "Confidence scoring with abstention, so the system says “I'm not sure” instead of hallucinating.",
      "Human-in-the-loop review queue for low-confidence or high-risk answers.",
      "pgvector semantic retrieval over chunked documents with metadata filtering.",
      "FastAPI backend + Next.js dashboard, containerized with Docker and shipped via GitHub Actions CI/CD.",
    ],
    tech: [
      "Next.js",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "Docker",
      "GitHub Actions",
    ],
    image: "/projects/ai-compliance.svg",
    github: "https://github.com/Ajay-chowdary/AI-Compliance-Analyst",
  },
  {
    name: "Tixoro",
    kind: "B2B SaaS Marketplace",
    blurb:
      "A full-stack B2B SaaS marketplace with Stripe payments, QR ticketing, dual user roles, and real-time inventory.",
    overview:
      "Tixoro is a full-stack B2B marketplace for events and ticketing, built solo end-to-end. Organizers list inventory, buyers purchase through Stripe, and tickets are issued as scannable QR codes — with real-time inventory and role-based access keeping both sides of the marketplace in sync.",
    features: [
      "Dual user roles (organizers and buyers) with role-based access control via Auth.js.",
      "Stripe payments with webhooks handling the full purchase lifecycle as a state machine.",
      "QR-code ticket issuance and validation at the door.",
      "Real-time inventory so listings are never oversold.",
      "Type-safe data layer with Prisma over Supabase Postgres.",
      "Next.js App Router + TypeScript, deployed on Vercel.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "Stripe",
      "Auth.js",
      "Prisma",
      "Vercel",
    ],
    image: "/projects/tixoro.svg",
    github: "https://github.com/Ajay-chowdary",
  },
  {
    name: "Job Recommendation via Heterogeneous GNN",
    kind: "Graph Neural Network",
    blurb:
      "A graph neural network recommendation system achieving 57% Recall@10 vs a 2% content-based baseline — a 27× improvement — across 100,000 candidates.",
    overview:
      "A heterogeneous graph neural network that recommends jobs to candidates by learning over a graph of people, jobs, skills, and companies — rather than matching keywords. By modeling relationships directly, it delivers a 27× improvement in Recall@10 over a content-based baseline across 100,000 candidates.",
    features: [
      "Heterogeneous graph with multiple node and edge types: candidates, jobs, skills, and companies.",
      "GraphSAGE with HeteroConv for inductive learning that generalizes to unseen nodes.",
      "57% Recall@10 vs a 2% content-based baseline — a 27× lift.",
      "Scales to 100,000 candidates.",
      "Served behind a FastAPI inference endpoint.",
      "Built with PyTorch Geometric.",
    ],
    tech: ["Python", "PyTorch Geometric", "GraphSAGE", "HeteroConv", "FastAPI"],
    image: "/projects/gnn.svg",
  },
];
