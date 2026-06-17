import Reveal from "./Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="font-mono text-sm text-amber">{"// What I Do"}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-text sm:max-w-md sm:text-right sm:text-5xl">
              From model to product, end to end
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 h-px w-full bg-line" />
        </Reveal>

        <ul className="mt-4">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 80} className="group">
              <a
                href="#contact"
                className="grid grid-cols-1 items-start gap-4 border-b border-line py-9 transition-colors hover:bg-surface/40 md:grid-cols-[7rem_1fr_auto] md:gap-8"
              >
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-text transition-colors group-hover:text-amber sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {service.blurb}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="hidden items-center gap-2 self-center font-mono text-sm text-amber transition-transform group-hover:translate-x-1 md:inline-flex"
                >
                  Hire me <span className="text-base leading-none">{"->"}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
