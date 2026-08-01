'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { findPhoto, img } from '@/lib/photos';

/* Best-resolution, highest-impact field photos, curated for a full-bleed hero loop. */
const SLIDE_SLUGS = [
  'tigress-with-cubs',
  'asiatic-lion',
  'one-horned-rhinoceros',
  'malabar-trogon',
  'indian-leopard',
  'lion-tailed-macaque',
  'great-indian-bustard',
  'nilgiri-tahr-male',
];

const SLIDES = SLIDE_SLUGS.map((slug) => findPhoto(slug))
  .filter((p): p is NonNullable<typeof p> => !!p)
  .map((p) => ({ src: img(p.wide ?? p.src), alt: p.name }));

const INTERVAL_MS = 8000;

const STATS: [string, string][] = [
  ['25+', 'Years in the field'],
  ['500+', 'Species recorded'],
  ['10-12', 'Max group size'],
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    if (SLIDES.length <= 1 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[640px] max-h-[980px] w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={`hero-slide${i === index ? ' hero-slide--active' : ''}`}
          />
        ))}
      </div>

      {/* Scrims for text legibility over any photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050e09]/75 via-[#050e09]/15 to-transparent" />

      {/* Vertical slide nav, clear of the fixed WhatsApp/Enquire buttons in the bottom-right corner */}
      <div
        className="hidden sm:flex absolute right-5 md:right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3"
        role="tablist"
        aria-label="Featured wildlife photos"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show photo: ${slide.alt}`}
            onClick={() => goTo(i)}
            className={`w-1.5 rounded-full transition-all ${i === index ? 'h-6 bg-[#ea580c]' : 'h-1.5 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl fade-up">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                25+ years of India wildlife expeditions
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Experience India&apos;s Wild Places with Expert Naturalists
              </h1>
              <p className="text-base md:text-xl text-white/85 max-w-xl mb-9 leading-relaxed">
                Small-group, guided journeys into tiger forests, Himalayan birding trails, wetlands and rainforests — led by naturalists who know this land.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/trips"
                  className="bg-[#ea580c] hover:bg-[#c2410c] transition-colors text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold shadow-lg shadow-black/30"
                >
                  View Upcoming Trips
                </Link>
                <Link
                  href="#checklist"
                  className="bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 transition-colors text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold"
                >
                  Download Sample Itinerary
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slim info bar: quick stats */}
        <div className="relative border-t border-white/15 bg-black/25 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center divide-x divide-white/15">
            {STATS.map(([n, l]) => (
              <div key={l} className="flex items-baseline gap-2 px-4 first:pl-0 md:px-6 md:first:pl-0">
                <span className="text-lg md:text-xl font-bold">{n}</span>
                <span className="text-xs md:text-sm text-white/70 whitespace-nowrap">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
