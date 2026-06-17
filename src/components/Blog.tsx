"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { Modal } from "./ui/modal";
import { posts, type Post, type Block } from "@/data/posts";

function ArticleBody({ content }: { content: Block[] }) {
  return (
    <div className="space-y-5">
      {content.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h3
              key={i}
              className="pt-2 font-display text-xl font-semibold text-text"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-2">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="relative pl-6 text-[15px] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-amber"
                  />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[15px] leading-relaxed text-text/85">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default function Blog() {
  const [active, setActive] = useState<Post | null>(null);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="font-mono text-sm text-amber">{"// Writing"}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-text sm:max-w-md sm:text-right sm:text-5xl">
              Developer insights &amp; ideas
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 h-px w-full bg-line" />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 90} className="group">
              <button
                type="button"
                onClick={() => setActive(post)}
                aria-label={`Read “${post.title}”`}
                className="block w-full cursor-pointer text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <div className="glow-amber absolute inset-0" />
                      <span className="absolute left-4 top-4 font-mono text-xs text-muted">
                        {"<article />"}
                      </span>
                      <span className="absolute bottom-4 right-4 font-mono text-xs text-amber/80">
                        {post.readTime}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-amber">
                    {post.tag}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {post.date}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-text transition-colors group-hover:text-amber">
                  {post.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Article modal */}
      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        labelledBy="article-modal-title"
      >
        {active && (
          <article>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-line bg-surface2 px-3 py-1 font-mono text-xs text-amber">
                {active.tag}
              </span>
              <span className="font-mono text-xs text-muted">
                {active.date} · {active.readTime}
              </span>
            </div>

            <h2
              id="article-modal-title"
              className="mt-4 pr-10 font-display text-3xl font-bold leading-tight tracking-tight text-text"
            >
              {active.title}
            </h2>

            <div className="mt-6 border-t border-line pt-6">
              <ArticleBody content={active.content} />
            </div>
          </article>
        )}
      </Modal>
    </section>
  );
}
