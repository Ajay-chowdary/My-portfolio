import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-amber">{"// lost?"}</p>

      <h1 className="mt-4 font-display text-7xl font-extrabold tracking-tight text-amber sm:text-9xl">
        404
      </h1>

      <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted sm:text-lg">
        This page doesn&apos;t exist — it may have moved, or never shipped.
        Let&apos;s get you back to something real.
      </p>

      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-amber px-8 py-3.5 font-mono text-sm font-medium text-bg transition-colors hover:bg-amber-hi"
      >
        Back to home
        <span
          aria-hidden
          className="text-base leading-none transition-transform group-hover:translate-x-0.5"
        >
          {"->"}
        </span>
      </Link>
    </main>
  );
}
