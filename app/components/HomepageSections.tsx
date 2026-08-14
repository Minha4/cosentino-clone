"use client";

import { useState } from "react";

const spaces = [
  "Kitchens",
  "Bathrooms",
  "Other Interiors",
  "Outdoor",
  "Commercial",
];

const applications = [
  {
    name: "Countertops",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/espacios/cocinas/Aplicaciones-13.png?q=70",
  },
  {
    name: "Cladding and coverings",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/espacios/cocinas/Aplicaciones-14.png?q=70",
  },
  {
    name: "Sinks",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/espacios/cocinas/Aplicaciones-15.png?q=70",
  },
  {
    name: "Floors",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/espacios/cocinas/Aplicaciones-16.png?q=70",
  },
  {
    name: "Furniture",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/home/espacios/cocinas/Aplicaciones-17.png",
  },
];

const newProducts = [
  {
    title: "ARTIK NODES. DEPTH FROM WITHIN. DEKTON GOES BEYOND",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/artik.jpg",
    href: "#",
  },
  {
    title: "ĒCLOS: THE NEW GENERATION OF MINERAL SURFACES",
    brand: "Ēclos",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/eclos.jpg",
    href: "#",
  },
  {
    title: "NOMAK: VISUAL CONTINUITY. DESIGN THAT LASTS",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/nomak.jpg",
    href: "#",
  },
  {
    title: "AMAZONIK: THIS IS NOT WOOD. IT'S DEKTON",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/amazonik.jpg",
    href: "#",
  },
  {
    title: "NARA: A SERENE BEIGE WITH A SILKY FINISH",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/nara.jpg",
    href: "#",
  },
  {
    title: "ZOE TOP: THE NEW CUSTOMIZABLE ROUND SINK",
    brand: "Silestone",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/zoetop.jpg",
    href: "#",
  },
  {
    title: "SUMA: THE CHARM OF THE ESSENTIALS",
    brand: "Silestone",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/suma.jpg",
    href: "#",
  },
  {
    title: "PIETRA EDITION: TIMELESS ELEGANCE WITH A MEDITERRANEAN SOUL",
    brand: "Dekton",
    image:
      "https://static.cosentino.com/home-2024/portadas-series/pietra-colecciones.jpg",
    href: "#",
  },
];

const brands = [
  {
    name: "Ēclos",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/cocinas-2.jpg",
  },
  {
    name: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/TRANSFORMWA_TOWNSHEND_002.jpg",
  },
  {
    name: "Silestone",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/app-public-pending_approval-Black-Beauty-Kitchen.jpg",
  },
  {
    name: "Sensa",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/app-public-pending_approval-787A0515.jpg",
  },
];

const inspirationFilters = [
  "All spaces",
  "Kitchens",
  "Bathrooms",
  "Other Interiors",
  "Outdoor",
  "Façades",
  "Commercial",
];

const inspirationProjects = [
  {
    name: "FF Home by Dunarra Interior",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C4819A08-079D-4633-BBA441509D712FD0/ff-home-by-dunarra-interior.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Proyecto Barquillo",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/E4FE8197-7E60-485A-9287CDF61B5135AE/proyecto-barquillo.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Hayley Peterson Residential",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/A5A7F5C5-71C7-4137-819C351BEA0BE953/hayley-peterson-residential.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Battersea Residential",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/0728C074-BA73-455D-B294A1A670F099C0/battersea-residential.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Imperfection of Matter",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/B5659C2F-62A4-4E0E-87F1C55505B5A8A8/imperfection-of-matter.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Rocco Place NSW",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/21B1DEB1-9C61-4676-98400261483D37BE/rocco-place-nsw.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Doncaster House",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C8376A2D-0CBB-4007-89DDE8214F305010/doncaster-house.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Montenegro",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/9D9700B7-5E2F-4165-8B1D1547F734DBB1/montenegro.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Kollutchen",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C5AF398A-C697-4004-A71C03902B6CD73A/kollutchen.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Laura Wontorra Home",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/6FC868DB-E15D-415B-8ABAE04DA7930278/laura-wontorra-home.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "Titirangi Originals",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/6171ED0A-B077-4FF3-80669C26862BAB39/titirangi-originals.jpg?auto=format&q=80&fit=crop",
  },
  {
    name: "House SI Matosinhos",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C87D9E51-F2C4-48C5-937B0C400F9C62E4/house-si-matosinhos.jpg?auto=format&q=80&fit=crop",
  },
];

const colors = [
  {
    name: "Nara",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/encimeras-dekton/colores/NARA.jpg",
  },
  {
    name: "Ava",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/encimeras-dekton/colores/AVA.jpg",
  },
  {
    name: "Laurent",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/rediseno/Laurent-Detalle.jpg",
  },
  {
    name: "Cascade Gold",
    brand: "Silestone",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/landing-xeron/colores/Cascade-Gold.jpg",
  },
  {
    name: "Arum White",
    brand: "Silestone",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/landing-xeron/colores/Aurum-White.jpg",
  },
  {
    name: "Taj Mahal",
    brand: "Sensa",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/rediseno/Taj-Mahal-Detalle.jpg",
  },
  {
    name: "Keena",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/colores/dekton/KEENA.jpg",
  },
  {
    name: "Evok",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/colores/dekton/EVOK.jpg",
  },
  {
    name: "Nebbia",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/colores/dekton/NEBBIA.jpg",
  },
  {
    name: "Ceppo",
    brand: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/colores/dekton/CEPPO.jpg",
  },
  {
    name: "Jardin Emerald",
    brand: "Silestone",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/encimeras-silestone/colores/Jardin-Emerald.jpg",
  },
  {
    name: "White Macaubas",
    brand: "Scalea",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/rediseno/Taj-Mahal-Detalle.jpg",
  },
];

const solutions = [
  {
    title: "Dekton",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/artik.jpg",
    text: "Dekton is Cosentino’s innovative ultracompact surface. Its great versatility makes it perfect for use in any application, from furniture to flooring.",
  },
  {
    title: "Silestone",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/suma.jpg",
    text: "Thanks to its patented Hybriq+ technology, Silestone is a durable mineral surface with low silica content and great aesthetic value for your kitchen.",
  },
  {
    title: "Ēclos",
    image:
      "https://assetsstatic.cosentino.com/home-2024/portadas-series/eclos.jpg",
    text: "Ēclos is Cosentino's innovative mineral surface that combines the beauty of natural stone with advanced technology.",
  },
  {
    title: "Sensa",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/app-public-pending_approval-787A0515.jpg",
    text: "Sensa provides the opportunity to enjoy natural stone with excellent stain resistance and minimal maintenance.",
  },
];

export default function HomepageSections() {
  const [activeSpace, setActiveSpace] = useState("Kitchens");
  const [activeFilter, setActiveFilter] = useState("All spaces");
  const [applicationStart, setApplicationStart] = useState(0);

  const visibleApplications = [
    applications[applicationStart],
    applications[(applicationStart + 1) % applications.length],
    applications[(applicationStart + 2) % applications.length],
  ];

  const nextApplications = () => {
    setApplicationStart(
      (current) => (current + 1) % applications.length
    );
  };

  const previousApplications = () => {
    setApplicationStart(
      (current) =>
        (current - 1 + applications.length) % applications.length
    );
  };

  return (
    <main className="bg-white text-[#3C3C3B]">

      {/* =====================================================
          ARCHITECTURAL SURFACES
      ====================================================== */}

      <section className="bg-[#f4f4f2] px-5 pb-10 pt-16 md:px-8 lg:px-10 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-[1320px]">

          <div className="text-center">
            <p
              className="mb-3 text-[11px] text-neutral-500"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
              }}
            >
              Cosentino Architectural Surfaces
            </p>

            <h2
              className="mx-auto max-w-[850px] text-[35px] uppercase leading-[0.94] tracking-[-0.055em] md:text-[47px] lg:text-[55px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
                fontWeight: 300,
              }}
            >
              MEANINGFUL DESIGN TO
              <br />
              INSPIRE PEOPLE&apos;S LIVES
            </h2>
          </div>

          <div className="relative mt-10 border-b border-neutral-300">

            <div className="flex items-center justify-center gap-7 overflow-x-auto pb-3 pr-20 md:gap-9">

              {spaces.map((space) => {
                const active = activeSpace === space;

                return (
                  <button
                    key={space}
                    type="button"
                    onClick={() => setActiveSpace(space)}
                    className={`relative shrink-0 pb-2 text-[11px] transition ${
                      active
                        ? "text-black"
                        : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {space}

                    <span
                      className={`absolute bottom-[-12px] left-0 h-px bg-black transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                );
              })}

            </div>

            <div className="absolute bottom-0 right-0 flex gap-4 bg-[#f4f4f2] pl-4">

              <button
                type="button"
                aria-label="Previous applications"
                onClick={previousApplications}
                className="text-[22px] font-light text-neutral-400 hover:text-black"
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next applications"
                onClick={nextApplications}
                className="text-[22px] font-light text-black"
              >
                →
              </button>

            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 md:gap-4">

            {visibleApplications.map((application) => (
              <a
                href="#"
                key={application.name}
                className="group relative block overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={application.image}
                    alt={application.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-white">
                      {application.name}
                    </span>
                    <span className="text-white">→</span>
                  </div>
                </div>
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FURNITURE
      ====================================================== */}

      <section className="px-6 py-14 md:px-10 lg:px-14 lg:py-18">
        <div className="mx-auto max-w-[1320px]">

          <div className="flex items-center justify-between">

            <h2
              className="text-[36px] font-light tracking-[-0.04em] md:text-[48px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
              }}
            >
              Furniture
            </h2>

            <div className="flex gap-4 text-[23px]">
              <button
                type="button"
                className="text-neutral-300"
              >
                ←
              </button>

              <button
                type="button"
                className="text-neutral-700"
              >
                →
              </button>
            </div>

          </div>

          <div className="mt-7 overflow-hidden">
            <div className="group relative aspect-[16/7] overflow-hidden">
              <img
                src="https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/aplicaciones/mobiliario.jpg?q=90"
                alt="Furniture"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between text-white">
                  <span className="text-[16px]">
                    Furniture
                  </span>
                  <span className="text-[20px]">→</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          NEW
      ====================================================== */}

      <section className="bg-[#f5f5f3] px-6 py-14 md:px-10 lg:px-14 lg:py-18">
        <div className="mx-auto max-w-[1320px]">

          <div className="flex items-center justify-between">
            <h2
              className="text-[36px] font-light tracking-[-0.04em] md:text-[48px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
              }}
            >
              New
            </h2>

            <div className="flex gap-4 text-[21px]">
              <button className="text-neutral-400">
                ←
              </button>
              <button>
                →
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {newProducts.map((product) => (
              <a
                href={product.href}
                key={product.title}
                className="group block"
              >

                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
                    <span className="text-[10px] text-white">
                      {product.brand}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="text-[11px] uppercase leading-5 text-[#3C3C3B]">
                    {product.title}
                  </h3>

                  <span className="shrink-0 text-[16px]">
                    →
                  </span>
                </div>

              </a>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          BRANDS
      ====================================================== */}

      <section className="px-6 py-14 md:px-10 lg:px-14 lg:py-18">
        <div className="mx-auto max-w-[1320px]">

          <div className="flex items-center justify-between">

            <h2
              className="text-[36px] font-light tracking-[-0.04em] md:text-[48px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
              }}
            >
              Brands
            </h2>

            <a
              href="#"
              className="border-b border-black pb-1 text-[10px]"
            >
              All brands
            </a>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

            {brands.map((brand) => (
              <article
                key={brand.name}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-[20px] font-light">
                        {brand.name}
                      </span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          COLORS
      ====================================================== */}

      <section className="bg-[#f5f5f3] px-6 py-14 md:px-10 lg:px-14 lg:py-18">
        <div className="mx-auto max-w-[1320px]">

          <div className="flex items-end justify-between">

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                Discover
              </p>

              <h2
                className="text-[36px] font-light tracking-[-0.04em] md:text-[48px]"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                }}
              >
                Colors
              </h2>
            </div>

            <a
              href="#"
              className="border-b border-black pb-1 text-[10px]"
            >
              View all
            </a>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

            {colors.map((color) => (
              <a
                href="#"
                key={color.name}
                className="group block"
              >

                <div className="aspect-square overflow-hidden bg-neutral-100">
                  <img
                    src={color.image}
                    alt={color.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-[11px] text-[#3C3C3B]">
                    {color.name}
                  </p>

                  <p className="mt-1 text-[9px] text-neutral-500">
                    {color.brand}
                  </p>
                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          INSPIRATION
      ====================================================== */}

      <section className="px-6 py-14 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-[1320px]">

          <h2
            className="text-[34px] font-light uppercase tracking-[-0.04em] md:text-[47px]"
            style={{
              fontFamily: '"Diagramm", Arial, sans-serif',
            }}
          >
            INSPIRATION GALLERIES
          </h2>

          <div className="mt-8 flex gap-7 overflow-x-auto border-b border-neutral-200 pb-3">

            {inspirationFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 text-[10px] ${
                  activeFilter === filter
                    ? "text-black"
                    : "text-neutral-400 hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}

          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {inspirationProjects.map((project) => (
              <article key={project.name} className="group">

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <h3 className="pt-3 text-[11px]">
                  {project.name}
                </h3>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          SILESTONE / HYBRIQ+
      ====================================================== */}

      <section className="relative min-h-[550px] overflow-hidden text-white">

        <img
          src="https://assetsstatic.cosentino.com/home-2024/portadas-series/suma.jpg"
          alt="Silestone"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex min-h-[550px] max-w-[1320px] items-end px-6 py-16 md:px-10 lg:px-14">

          <div className="max-w-[760px]">

            <p className="mb-3 text-[11px] uppercase tracking-[0.15em] text-white/70">
              Silestone
            </p>

            <h2
              className="text-[36px] font-light leading-[1.02] tracking-[-0.04em] md:text-[50px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
              }}
            >
              The first mineral surface with low silica content.
              With exclusive Hybriq+ technology.
            </h2>

            <a
              href="#"
              className="mt-7 inline-block border-b border-white pb-1 text-[10px]"
            >
              Learn more about Hybriq+
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          RENOVATION
      ====================================================== */}

      <section className="px-6 py-16 md:px-10 lg:px-14 lg:py-20">

        <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-2 md:items-center">

          <div>

            <h2
              className="text-[36px] font-light uppercase leading-[1.03] tracking-[-0.04em] md:text-[51px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
              }}
            >
              DO YOU HAVE A RENOVATION?
              <br />
              WE CAN HELP YOU
            </h2>

            <p className="mt-6 max-w-[570px] text-[12px] leading-6 text-neutral-600">
              Our extensive network of collaborators allows us to offer you
              advice for any renovation across five continents.
            </p>

            <a
              href="#"
              className="mt-6 inline-block border-b border-black pb-1 text-[10px]"
            >
              Where to buy
            </a>

          </div>

          <div className="group relative aspect-[4/3] overflow-hidden">

            <img
              src="https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/cta-where-to-buy/cta-where-to-buy.jpg"
              alt="Kitchen renovation"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          VERSATILE SOLUTIONS
      ====================================================== */}

      <section className="bg-[#f5f5f3] px-6 py-16 md:px-10 lg:px-14 lg:py-20">

        <div className="mx-auto max-w-[1320px]">

          <h2
            className="max-w-[900px] text-[36px] font-light uppercase leading-[1.03] tracking-[-0.04em] md:text-[51px]"
            style={{
              fontFamily: '"Diagramm", Arial, sans-serif',
            }}
          >
            VERSATILE SOLUTIONS FOR ANY SPACE
          </h2>

          <p className="mt-6 max-w-[850px] text-[12px] leading-6 text-neutral-600">
            The low porosity and high resistance of our surfaces, along with
            the wide variety of finishes, thicknesses, and formats available,
            make us the perfect ally for all types of spaces.
          </p>

          <p className="mt-4 max-w-[850px] text-[12px] leading-6 text-neutral-600">
            We offer the best solutions for flooring, cladding, countertops,
            facades and more, both for residential and commercial use.
          </p>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {solutions.map((solution) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                image={solution.image}
                text={solution.text}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          COSENTINO CITY
      ====================================================== */}

      <section className="px-6 py-16 md:px-10 lg:px-14 lg:py-20">

        <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-2 md:items-center">

          <div className="group relative aspect-[4/3] overflow-hidden">

            <img
              src="https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/espacios/12dcd5c78e91ac5179a776574d5a60ed.jpg?w=900&h=900&q=90"
              alt="Cosentino City"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          <div>

            <p className="max-w-[650px] text-[12px] leading-6 text-neutral-700">
              A space for inspiration, connection, and creation to bring any
              design or architecture project to life.
            </p>

            <a
              href="#"
              className="mt-7 inline-block border-b border-black pb-1 text-[10px]"
            >
              More information
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="bg-[#f4f4f2] px-6 py-16 md:px-10 lg:px-14 lg:py-20">

        <div className="mx-auto max-w-[800px] text-center">

          <h2
            className="text-[36px] font-light tracking-[-0.04em] md:text-[51px]"
            style={{
              fontFamily: '"Diagramm", Arial, sans-serif',
            }}
          >
            Get inspired with our newsletter
          </h2>

          <p className="mt-5 text-[12px] text-neutral-600">
            Discover innovative projects, unique colors and the latest news
            and trends.
          </p>

          <div className="mx-auto mt-8 flex max-w-[500px] border-b border-neutral-500">

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent py-3 text-[12px] outline-none placeholder:text-neutral-500"
            />

            <button
              type="button"
              className="px-3 text-[16px]"
            >
              →
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

function SolutionCard({
  title,
  image,
  text,
}: {
  title: string;
  image: string;
  text: string;
}) {
  return (
    <article className="group">

      <div className="relative aspect-[4/5] overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
          <h3
            className="text-[21px] font-light text-white"
            style={{
              fontFamily: '"Diagramm", Arial, sans-serif',
            }}
          >
            {title}
          </h3>
        </div>

      </div>

      <p className="mt-4 text-[12px] leading-5 text-neutral-600">
        {text}
      </p>

      <a
        href="#"
        className="mt-4 inline-block border-b border-black pb-1 text-[10px]"
      >
        Learn More
      </a>

    </article>
  );
}