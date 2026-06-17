export type ProcessStep = {
  /** Order in the sequence — rendered as 01 / 02 / 03 */
  step: string;
  title: string;
  blurb: string;
};

/* A real, ordered sequence — the numbering encodes the actual flow. */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover & Architect",
    blurb:
      "Before a line of code, I dig into goals, data, and constraints — then design the system, the model, and the contracts between them.",
  },
  {
    step: "02",
    title: "Build & Iterate",
    blurb:
      "Ship the interface and the intelligence in parallel. Every component — UI or model — is measured against real metrics, not vibes.",
  },
  {
    step: "03",
    title: "Launch & Improve",
    blurb:
      "Deploy, instrument, and monitor. I keep iterating post-launch so the product gets sharper as it meets real users and real data.",
  },
];
