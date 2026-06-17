"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/ajay-grad.jpg",
    alt: "Ajay Chowdary Dodda in cap and gown at graduation, raising a fist in celebration",
  },
  {
    src: "/ajay-suit.jpg",
    alt: "Ajay Chowdary Dodda in a dark suit, leaning against a brick wall, painterly style",
  },
  {
    src: "/ajay-sunset.jpg",
    alt: "Ajay Chowdary Dodda in a suit by a lake at sunset",
  },
];

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d={dir === "left" ? "M15 18 9 12l6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export default function HeroGallery() {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const go = (next: number) =>
    setIndex((next + photos.length) % photos.length);

  return (
    <div
      onClick={() => setZoomed(true)}
      onMouseLeave={() => setZoomed(false)}
      className={`group pointer-events-auto relative h-[min(64vh,720px)] w-[min(92vw,640px)] ${
        zoomed
          ? "z-40 cursor-zoom-out"
          : "z-0 cursor-zoom-in"
      }`}
    >
      {/* Crossfading photos. Click zooms up and over the text; hover nudges. */}
      <div
        className={`absolute inset-0 origin-bottom transition-transform duration-200 ease-out ${
          zoomed ? "scale-[1.35]" : "group-hover:scale-[1.05]"
        }`}
      >
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 640px) 92vw, 640px"
            className={`object-contain object-bottom transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Fade the photo into the page (hidden while zoomed so the full photo reads) */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-bg to-transparent transition-opacity duration-300 ${
          zoomed ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Toggle control — stop click from triggering zoom so you can switch photos */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-surface/80 px-2 py-1.5 backdrop-blur"
      >
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous photo"
          className="grid h-7 w-7 place-items-center rounded-full text-muted transition-colors hover:text-amber"
        >
          <Chevron dir="left" />
        </button>

        <div className="flex items-center gap-1.5">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-5 bg-amber"
                  : "w-1.5 bg-muted/50 hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next photo"
          className="grid h-7 w-7 place-items-center rounded-full text-muted transition-colors hover:text-amber"
        >
          <Chevron dir="right" />
        </button>
      </div>
    </div>
  );
}
