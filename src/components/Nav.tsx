"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-text transition-colors hover:text-amber-hi sm:text-xl"
        >
          AJAY CHOWDARY
        </a>

        <div className="relative">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((v) => !v)}
            className="group inline-flex items-center gap-3 rounded-full bg-text px-5 py-2.5 font-mono text-sm font-medium text-bg transition-colors hover:bg-amber"
          >
            {open ? "Close" : "Menu"}
            <span
              aria-hidden
              className={`inline-block h-2 w-2 rounded-full bg-amber-lo transition-transform duration-300 ${
                open ? "rotate-45 scale-110" : "group-hover:scale-110"
              }`}
            />
          </button>

          {open && (
            <>
              {/* click-away */}
              <button
                aria-hidden
                tabIndex={-1}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 cursor-default"
              />
              <nav
                id="primary-menu"
                className="absolute right-0 top-full z-50 mt-3 w-56 origin-top-right overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-2xl shadow-black/40"
              >
                <ul>
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-2.5 font-display text-lg font-medium text-text transition-colors hover:bg-surface2 hover:text-amber"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
