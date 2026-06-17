import HeroGallery from "./HeroGallery";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden pt-24 sm:pt-28"
    >
      {/* Ambient amber glow behind the figure */}
      <div
        aria-hidden
        className="glow-amber pointer-events-none absolute inset-x-0 top-[18%] h-[70%]"
      />

      {/* Eyebrow */}
      <div className="animate-rise relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-sm text-muted sm:text-base">
          <span className="text-amber">{"// "}</span>
          Hey, I&apos;m a — AI Engineer &amp; Full Stack Developer
        </p>
      </div>

      {/* Oversized name */}
      <div className="relative z-20 mx-auto mt-3 w-full max-w-7xl px-5 sm:mt-4 sm:px-8">
        <h1
          className="animate-rise font-display font-extrabold uppercase leading-[0.86] tracking-[-0.03em] text-amber"
          style={{ animationDelay: "80ms", fontSize: "clamp(2.75rem, 13vw, 12rem)" }}
        >
          Ajay
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          Chowdary
        </h1>
      </div>

      {/* Figure + blurb */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-end px-5 sm:px-8">
        {/* Photo gallery, centered, blending into the background at the bottom.
            No z-index here so the gallery can raise itself above the name on zoom. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          <HeroGallery />
        </div>

        {/* Intro blurb, bottom-right like the reference */}
        <div className="relative z-10 ml-auto mb-10 max-w-sm sm:mb-16">
          <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
            I build production AI systems and full-stack applications — from
            LangGraph agentic pipelines and RAG platforms to{" "}
            <span className="text-text">React and Next.js products</span> that
            ship and scale.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-5 z-10 hidden items-center gap-3 sm:flex sm:left-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <span className="animate-scroll-bob inline-block h-10 w-px bg-gradient-to-b from-amber to-transparent" />
        </div>
      </div>
    </section>
  );
}
