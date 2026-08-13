"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    name: "KITCHENS",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/hero/cocinasEclos.jpg",
    principal: "Ēclos",
    secondary: "legend",
  },
  {
    name: "BATHROOMS",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/hero/BATHROOMS.jpg",
    principal: "Silestone",
    secondary: "Bathrooms",
  },
  {
    name: "FAÇADES",
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

  return (
    <>
      {/* HERO */}
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
              backgroundImage: `linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.05) 0%,
                rgba(0, 0, 0, 0.08) 45%,
                rgba(0, 0, 0, 0.48) 100%
              ), url("${slide.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
        ))}

        {/* CONTENT */}
        <div className="relative z-20 flex min-h-screen flex-col justify-end px-8 pb-20 lg:px-14 lg:pb-24">
          {/* SMALL TITLE */}
          <p
            className="mb-8 text-[12px] font-normal tracking-[0.02em]"
            style={{
              fontFamily: '"Diagramm", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            Sustainable surfaces for
<br />
architecture and design
          </p>

          {/* VERTICAL CATEGORY MENU */}
          <div className="flex flex-col items-start gap-1">
            {slides.map((slide, index) => {
              const active = index === activeSlide;

              return (
                <button
                  key={slide.name}
                  type="button"
                  onMouseEnter={() => setActiveSlide(index)}
                  onClick={() => setActiveSlide(index)}
                  className={`relative text-left transition-opacity duration-500 ${
                    active
                      ? "opacity-100"
                      : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <span
                    className="block text-[clamp(3rem,5.5vw,6.5rem)] leading-[0.88] tracking-[-0.055em] transition-transform duration-500"
                    style={{
                      fontFamily: '"Diagramm", Arial, sans-serif',
                      fontWeight: 200,
                    }}
                  >
                    {slide.name}
                  </span>

                  {/* ACTIVE LINE */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-500 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ACTIVE SLIDE LABEL */}
          <div
            className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.13em]"
            style={{
              fontFamily: '"Diagramm", Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            <span>{slides[activeSlide].principal}</span>

            <span className="h-px w-5 bg-white/70" />

            <span className="opacity-70">
              {slides[activeSlide].secondary}
            </span>
          </div>
        </div>
      </section>

     {/* COSENTINO ARCHITECTURAL SURFACES */}
<section className="bg-white px-8 py-20 text-neutral-900 lg:py-28">
  <div className="mx-auto max-w-5xl text-center">

    <p
      className="mb-6 text-[11px] font-normal tracking-[0.08em] text-neutral-500"
      style={{
        fontFamily: '"Diagramm", Arial, sans-serif',
        fontWeight: 400,
      }}
    >
      Cosentino Architectural Surfaces
    </p>

    <h2
      className="text-[42px] leading-[1.05] tracking-[-0.025em] md:text-[50px] lg:text-[56px]"
      style={{
        fontFamily: '"Diagramm", Arial, sans-serif',
        fontWeight: 400,
      }}
    >
      MEANINGFUL DESIGN TO
      <br />
      INSPIRE PEOPLE&apos;S LIVES
    </h2>

  </div>
</section>
    </>
  );
}