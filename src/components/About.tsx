import Reveal from "./Reveal";
import { skillGroups } from "@/data/skills";
import { experiences } from "@/data/experience";

function CodeGlyph() {
  return (
    <span aria-hidden className="font-mono text-base text-muted">
      {"</>"}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Skills */}
        <Reveal>
          <p className="font-mono text-sm text-amber">{"// Skills"}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-16 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 70}>
              <div className="border-b border-line py-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-text">
                    {group.title}
                  </h3>
                  <CodeGlyph />
                </div>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="font-mono text-[15px] text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-24 sm:mt-32">
          <Reveal>
            <p className="font-mono text-sm text-amber">{"// Experience"}</p>
          </Reveal>

          <div className="mt-10 space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.org} delay={i * 90}>
                <div className="grid grid-cols-1 gap-x-12 gap-y-5 border-t border-line pt-8 md:grid-cols-[1fr_1.7fr]">
                  {/* Left: org + role + meta */}
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
                      {exp.org}
                    </h3>
                    <p className="mt-1 text-[15px] text-amber">{exp.role}</p>
                    <p className="mt-3 font-mono text-xs text-muted">
                      {exp.period}
                    </p>
                    {exp.location && (
                      <p className="font-mono text-xs text-muted">
                        {exp.location}
                      </p>
                    )}
                  </div>

                  {/* Right: bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-[15px] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-amber"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
