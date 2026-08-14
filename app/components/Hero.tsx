"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    name: "KITCHENS",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/hero/cocinasEclos.jpg",
    principal: "Ēclos",
    secondary: "Legend",
  },
  {
    name: "BATHROOMS",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/hero/BATHROOMS.jpg",
    principal: "Silestone",
    secondary: "Bathrooms",
  },
  {
    name: "FAÇADES",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/hero/fachadas.jpg",
    principal: "Dekton",
    secondary: "Danae & Zenith",
  },
  {
    name: "COMMERCIAL",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/hero/contract-v3.jpg",
    principal: "Cosentino",
    secondary: "Contract",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const active = slides[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND IMAGES */}
      {slides.map((slide, index) => (
        <div
          key={slide.name}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === activeSlide
              ? "z-10 opacity-100"
              : "z-0 opacity-0"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.03) 0%,
                rgba(0, 0, 0, 0.05) 45%,
                rgba(0, 0, 0, 0.42) 100%
              ),
              url("${slide.image}")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
      ))}

      {/* HERO CONTENT */}
      <div className="relative z-20 flex min-h-screen flex-col justify-end px-7 pb-16 sm:px-8 sm:pb-20 lg:px-9 lg:pb-20">

        {/* INTRO */}
        <p
          className="mb-7 max-w-[260px] text-[12px] leading-[1.35] tracking-[0.01em] sm:text-[13px]"
          style={{
            fontFamily: '"Diagramm", Arial, sans-serif',
            fontWeight: 400,
          }}
        >
          Sustainable surfaces for
          <br />
          architecture and design
        </p>

        {/* CATEGORY MENU */}
        <div className="flex flex-col items-start gap-0">

          {slides.map((slide, index) => {
            const isActive = index === activeSlide;

            return (
              <button
                key={slide.name}
                type="button"
                onMouseEnter={() => setActiveSlide(index)}
                onClick={() => setActiveSlide(index)}
                className={`group relative text-left transition-opacity duration-500 ${
                  isActive
                    ? "opacity-100"
                    : "opacity-45 hover:opacity-80"
                }`}
              >
                <span
                  className="block text-[clamp(3.5rem,5.5vw,6.3rem)] leading-[0.84] tracking-[-0.06em]"
                  style={{
                    fontFamily: '"Diagramm", Arial, sans-serif',
                    fontWeight: 200,
                  }}
                >
                  {slide.name}
                </span>

                <span
                  className={`absolute bottom-[-3px] left-0 h-px bg-white transition-all duration-500 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}

        </div>

        {/* ACTIVE LABEL */}
        <div
          className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] sm:text-[11px]"
          style={{
            fontFamily: '"Diagramm", Arial, sans-serif',
            fontWeight: 400,
          }}
        >
          <span>{active.principal}</span>

          <span className="h-px w-5 bg-white/70" />

          <span className="opacity-70">
            {active.secondary}
          </span>
        </div>

      </div>
    </section>
  );
}