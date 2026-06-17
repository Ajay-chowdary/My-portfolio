export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  tag: string;
  /** Display date, e.g. "Jun 2026" */
  date: string;
  readTime: string;
  excerpt: string;
  content: Block[];
  /** Optional cover image in /public, e.g. "/blog/rag.png" */
  image?: string;
};

export const posts: Post[] = [
  {
    slug: "agentic-rag-you-can-trust",
    title: "Building Agentic RAG That You Can Actually Trust",
    tag: "AI Engineering",
    date: "Jun 2026",
    readTime: "7 min read",
    image: "/blog/agentic-rag.svg",
    excerpt:
      "Naive RAG retrieves a few chunks, stuffs them in a prompt, and hopes. That's fine for a demo and dangerous in production. Here's how I build retrieval systems that earn trust.",
    content: [
      {
        type: "p",
        text: "Retrieval-augmented generation is the default architecture for grounding LLMs in private data, and the naive version is deceptively easy: embed your documents, retrieve the top-k chunks for a query, paste them into a prompt, and let the model answer. It demos beautifully. Then you put it in front of real users with real questions and watch it confidently cite things that were never in the source.",
      },
      {
        type: "p",
        text: "When I built AI Compliance Analyst — a system that answers questions over regulatory documents where a wrong answer has consequences — “usually right” was not good enough. Trust had to be engineered in, not hoped for. Four ideas did most of the work.",
      },
      { type: "h2", text: "1. Retrieval is the bottleneck, not generation" },
      {
        type: "p",
        text: "Most RAG failures are retrieval failures wearing a generation costume. If the right passage never makes it into context, no amount of prompt engineering will save the answer. I spend the majority of my effort here: chunking that respects document structure, metadata filtering so a query about one policy never pulls from another, and hybrid retrieval that combines dense vector similarity with keyword matching for the cases embeddings miss.",
      },
      {
        type: "ul",
        items: [
          "Chunk on semantic boundaries (sections, clauses) rather than fixed token windows.",
          "Attach metadata — document, section, effective date — and filter on it before ranking.",
          "Measure retrieval in isolation with recall@k before you ever look at answer quality.",
        ],
      },
      { type: "h2", text: "2. Treat citations as a contract" },
      {
        type: "p",
        text: "Every claim the system makes is tied to a specific source span, and a verification step checks that the cited span actually supports the claim. If it doesn't, the claim is flagged rather than shown. This turns the model from a confident narrator into an accountable one: a reviewer can click any sentence and land on the exact passage it came from. Citations stop being decoration and start being a guarantee.",
      },
      { type: "h2", text: "3. Confidence and the right to abstain" },
      {
        type: "p",
        text: "A trustworthy system knows when it doesn't know. I score each answer on retrieval quality and citation coverage, and below a threshold the system abstains — it says “I'm not confident” and routes the question to a human instead of guessing. Counterintuitively, the ability to say nothing is what makes the answers it does give worth believing.",
      },
      { type: "h2", text: "4. Agents are a means, not the point" },
      {
        type: "p",
        text: "I structured the pipeline as a LangGraph state machine with explicit retrieval, reasoning, and verification stages — not because “agentic” is fashionable, but because separating the steps makes each one observable and testable. You can inspect what was retrieved, what was claimed, and what was verified, independently. The graph is the means; auditability is the point.",
      },
      { type: "h2", text: "Ship evals, not vibes" },
      {
        type: "p",
        text: "None of this is trustworthy if you can't measure it. Before every deployment, an evaluation suite runs the pipeline against a labeled set and tracks retrieval recall, citation accuracy, and abstention calibration. Regressions block the release. The lesson that took me longest to internalize: in production AI, your eval harness is more important than your model. The model changes; the bar for shipping shouldn't.",
      },
    ],
  },
  {
    slug: "gnn-vs-content-based-recsys",
    title: "Why Graph Neural Nets Beat Content-Based Recsys",
    tag: "Machine Learning",
    date: "May 2026",
    readTime: "6 min read",
    image: "/blog/gnn-recsys.svg",
    excerpt:
      "A content-based job recommender gave me 2% Recall@10. Reframing the same data as a graph and learning over it gave me 57% — a 27× lift. Here's why the structure mattered more than the model.",
    content: [
      {
        type: "p",
        text: "I started a job-recommendation project the way most people do: content-based filtering. Embed each candidate's profile, embed each job posting, recommend the nearest jobs by cosine similarity. It's simple, explainable, and it gave me a Recall@10 of about 2%. The same data, reframed as a graph and learned over with a GNN, reached 57% — a 27× improvement. The model architecture mattered, but the reframing mattered more.",
      },
      { type: "h2", text: "What content-based filtering can't see" },
      {
        type: "p",
        text: "Cosine similarity between a candidate and a job only knows what's written in each. It can't see that a candidate is a strong fit because people with their exact skill set thrive in roles at companies like this one. It has no notion of the relationships between candidates, skills, jobs, and employers — and in recruiting, those relationships are the signal. Two profiles with different words can be far closer in opportunity-space than their text suggests.",
      },
      { type: "h2", text: "Reframing the problem as a graph" },
      {
        type: "p",
        text: "Instead of isolated text vectors, I modeled the domain as a heterogeneous graph: candidates, jobs, skills, and companies as different node types, connected by edges like “has skill,” “applied to,” and “posted by.” Recommendation becomes link prediction — scoring how likely a candidate–job edge is — and the model gets to use the entire neighborhood, not just two documents in isolation.",
      },
      {
        type: "ul",
        items: [
          "Node types: candidates, jobs, skills, companies.",
          "Edge types encode real relationships, not just text similarity.",
          "Recommendation = predicting which candidate–job links should exist.",
        ],
      },
      { type: "h2", text: "Why GraphSAGE, and why heterogeneous" },
      {
        type: "p",
        text: "I used GraphSAGE with HeteroConv layers. GraphSAGE learns to aggregate information from a node's neighbors, which means it generalizes inductively — it can embed a brand-new candidate or job that wasn't in the training graph, which is essential when new postings appear every day. The heterogeneous convolutions let each edge type carry its own learned transformation, so “has skill” and “applied to” influence the embedding in different ways instead of being flattened into one blob.",
      },
      { type: "h2", text: "The result, and the honest caveats" },
      {
        type: "p",
        text: "Across 100,000 candidates, Recall@10 went from 2% to 57%. The win came from giving the model structure it could reason over. But GNNs aren't free: they need relational data worth modeling, they're heavier to serve than a dot product, and a cold graph with few edges won't outperform good content features. The takeaway isn't “always use a GNN.” It's that the shape you give your data often constrains your ceiling more than the model you put on top of it.",
      },
    ],
  },
  {
    slug: "shipping-saas-solo-tixoro",
    title: "Shipping a Full-Stack SaaS Solo: Lessons from Tixoro",
    tag: "Full Stack",
    date: "Apr 2026",
    readTime: "6 min read",
    image: "/blog/solo-saas.svg",
    excerpt:
      "Building a B2B marketplace alone forces ruthless prioritization. Payments, auth, and inventory each tried to become a swamp. Here's what kept Tixoro shippable.",
    content: [
      {
        type: "p",
        text: "Tixoro is a B2B marketplace for events and ticketing that I built end-to-end on my own — frontend, backend, payments, and infrastructure. Working solo strips away the luxury of specialization: every decision is a tradeoff between doing it right and shipping it this week. A few principles kept the project from collapsing under its own ambition.",
      },
      { type: "h2", text: "Pick boring, type-safe technology" },
      {
        type: "p",
        text: "Solo, your scarcest resource is attention, so I spent it on the product, not the stack. Next.js, TypeScript, Prisma, and Supabase Postgres are well-trodden and let the type system catch mistakes I'd otherwise debug at 1 a.m. End-to-end type safety from the database schema to the React component is worth more than any clever abstraction when you're the only person who can fix a runtime surprise.",
      },
      { type: "h2", text: "Model payments as a state machine" },
      {
        type: "p",
        text: "Stripe is the part everyone underestimates. A payment isn't a function call; it's a lifecycle — created, processing, succeeded, failed, refunded — and the truth arrives asynchronously through webhooks, not the user's browser. I modeled the order as an explicit state machine driven by webhook events, so a closed tab or a flaky network never leaves an order in limbo. Treat the webhook handler as the source of truth and the frontend as a hopeful observer.",
      },
      {
        type: "ul",
        items: [
          "Drive order state from Stripe webhooks, not client redirects.",
          "Make every transition idempotent — webhooks get delivered more than once.",
          "Reconcile against Stripe rather than trusting local state alone.",
        ],
      },
      { type: "h2", text: "Get multi-tenancy and roles right early" },
      {
        type: "p",
        text: "A marketplace has two sides — organizers and buyers — and bolting access control on late is how you ship a data leak. I built role-based access with Auth.js from the first feature, so every query was scoped to the right tenant and role by default. Authorization is much cheaper to design in than to retrofit, and in a marketplace it is the product, not a feature of it.",
      },
      { type: "h2", text: "Real-time inventory, then everything else" },
      {
        type: "p",
        text: "The one thing a ticketing marketplace can never do is oversell. Inventory had to be correct under concurrent purchases before any nice-to-haves got attention. Once the core transaction was trustworthy — pay, decrement inventory, issue a QR ticket, all atomic — the rest of the app could be iterated on safely.",
      },
      { type: "h2", text: "Ship first, optimize on evidence" },
      {
        type: "p",
        text: "Alone, you can't afford to gold-plate. I shipped the smallest correct version of each feature and only optimized what real usage proved slow. The discipline of solo development isn't doing everything — it's being honest about the one thing that has to be right today, and deferring the rest without guilt.",
      },
    ],
  },
];
