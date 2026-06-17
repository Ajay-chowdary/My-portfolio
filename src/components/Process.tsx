import Reveal from "./Reveal";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="font-mono text-sm text-amber">{"// Process"}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-text sm:max-w-md sm:text-right sm:text-5xl">
              How I take an idea to production
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 h-px w-full bg-line" />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 100}>
              <div className="md:border-l md:border-line md:pl-8 md:first:border-l-0 md:first:pl-0">
                <span
                  aria-hidden
                  className="block font-display text-7xl font-extrabold leading-none text-amber sm:text-8xl"
                >
                  {s.step}
                </span>
                <h3 className="mt-8 font-display text-2xl font-semibold text-text">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {s.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
