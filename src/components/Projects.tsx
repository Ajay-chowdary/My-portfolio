"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { Modal } from "./ui/modal";
import { projects, type Project } from "@/data/projects";

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="font-mono text-sm text-amber">{"// Selected Work"}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-text sm:max-w-md sm:text-right sm:text-5xl">
              A showcase of my latest projects
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 h-px w-full bg-line" />
        </Reveal>

        {/* Cards */}
        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.name} delay={i * 90} className="group">
              <button
                type="button"
                onClick={() => setActive(project)}
                aria-label={`View details for ${project.name}`}
                className="block w-full cursor-pointer text-left"
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <PlaceholderArt name={project.name} kind={project.kind} />
                  )}
                </div>

                {/* Meta */}
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
                      {project.kind}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-text transition-colors group-hover:text-amber">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-amber"
                  >
                    Details
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted">
                  {project.blurb}
                </p>

                {/* Tech tags */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Detail modal */}
      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        labelledBy="project-modal-title"
      >
        {active && (
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              {active.kind}
            </p>
            <h2
              id="project-modal-title"
              className="mt-2 pr-10 font-display text-3xl font-bold tracking-tight text-text"
            >
              {active.name}
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-text/90">
              {active.overview}
            </p>

            <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-amber">
              What it does
            </h3>
            <ul className="mt-4 space-y-3">
              {active.features.map((f, i) => (
                <li
                  key={i}
                  className="relative pl-6 text-[15px] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-amber"
                  />
                  {f}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-amber">
              Built with
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {active.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line bg-surface2 px-3 py-1 font-mono text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>

            {(active.github || active.live) && (
              <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                {active.github && (
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-amber hover:text-amber"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    View code
                  </a>
                )}
                {active.live && (
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 font-mono text-sm font-medium text-bg transition-colors hover:bg-amber-hi"
                  >
                    Live site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}

/** Styled fallback for projects without a screenshot yet. */
function PlaceholderArt({ name, kind }: { name: string; kind: string }) {
  const initials = name
    .split(" ")
    .filter((w) => /[A-Za-z0-9]/.test(w[0] ?? ""))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="relative h-full w-full">
      <div className="glow-amber absolute inset-0" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-6xl font-extrabold text-text/10 sm:text-7xl">
          {initials}
        </span>
      </div>
      <span className="absolute left-4 top-4 font-mono text-xs text-muted">
        {"<project />"}
      </span>
      <span className="absolute bottom-4 right-4 font-mono text-xs text-amber/80">
        {kind}
      </span>
    </div>
  );
}
