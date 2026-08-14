"use client";

import { useState } from "react";

const spaces = [
  "Kitchens",
  "Bathrooms",
  "Other interiors",
  "Outdoor",
  "Commercial",
];

const applications = [
  "Countertops",
  "Cladding and coverings",
  "Sinks",
  "Floors",
];

const newProducts = [
  "Dekton ARTIK NODES",
  "ĒCLOS",
  "Dekton Nomak",
  "Dekton Amazonik",
  "Dekton Nara",
  "Silestone Zoe TOP",
  "Silestone Suma",
  "Dekton PIETRA EDITION",
];

const brands = ["Ēclos", "Dekton", "Silestone", "Sensa"];

const inspirationFilters = [
  "All spaces",
  "Kitchens",
  "Bathrooms",
  "Other interiors",
  "Outdoor",
  "Façades",
  "Commercial",
];

const placeholderImages = [
  "Project 01",
  "Project 02",
  "Project 03",
  "Project 04",
  "Project 05",
  "Project 06",
];

export default function HomepageSections() {
  const [activeSpace, setActiveSpace] = useState("Kitchens");
  const [activeFilter, setActiveFilter] = useState("All spaces");

  return (
    <main className="bg-white text-[#161616]">

      {/* =====================================================
          COSENTINO ARCHITECTURAL SURFACES
      ====================================================== */}

      <section className="px-6 pb-20 pt-20 md:px-10 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-[1320px]">

          <div className="text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.06em] text-neutral-500">
              Cosentino Architectural Surfaces
            </p>

            <h2 className="mx-auto max-w-[850px] text-[34px] font-light leading-[1.02] tracking-[-0.04em] md:text-[48px] lg:text-[58px]">
              MEANINGFUL DESIGN TO
              <br />
              INSPIRE PEOPLE&apos;S LIVES
            </h2>
          </div>

          {/* SPACE TABS */}
          <div className="mt-14 flex items-center gap-7 overflow-x-auto border-b border-neutral-200 pb-4 md:justify-start md:gap-9">
            {spaces.map((space) => (
              <button
                key={space}
                type="button"
                onClick={() => setActiveSpace(space)}
                className={`relative shrink-0 pb-1 text-[13px] transition-colors ${
                  activeSpace === space
                    ? "text-black"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {space}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300 ${
                    activeSpace === space ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* APPLICATION LINKS */}
          <div className="mt-5 flex gap-7 overflow-x-auto">
            {applications.map((item) => (
              <a
                href="#"
                key={item}
                className="shrink-0 text-[11px] text-neutral-500 transition-colors hover:text-black"
              >
                {item}
              </a>
            ))}
          </div>

          {/* APPLICATION CARDS */}
          <div className="mt-7 grid gap-4 md:grid-cols-3">

            <PlaceholderCard title="Countertops" large />

            <PlaceholderCard title="Cladding and coverings" large />

            <PlaceholderCard title="Sinks" large />

          </div>
        </div>
      </section>

      {/* =====================================================
          FURNITURE
      ====================================================== */}

      <section className="px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1320px]">

          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                Cosentino
              </p>

              <h2 className="text-[32px] font-light tracking-[-0.035em] md:text-[44px]">
                Furniture
              </h2>
            </div>

            <div className="hidden gap-3 md:flex">
              <button className="flex h-10 w-10 items-center justify-center border border-neutral-300">
                ←
              </button>

              <button className="flex h-10 w-10 items-center justify-center border border-neutral-300">
                →
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <PlaceholderCard title="Furniture" />
            <PlaceholderCard title="Furniture" />
            <PlaceholderCard title="Furniture" />
          </div>
        </div>
      </section>

      {/* =====================================================
          NEW PRODUCTS
      ====================================================== */}

      <section className="bg-[#f5f5f3] px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1320px]">

          <div className="flex items-end justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                New
              </p>

              <h2 className="text-[34px] font-light tracking-[-0.035em] md:text-[48px]">
                New products
              </h2>
            </div>

            <a
              href="#"
              className="hidden border-b border-black pb-1 text-[12px] md:block"
            >
              View all
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {newProducts.map((product) => (
              <article
                key={product}
                className="group cursor-pointer"
              >
                <div className="h-[300px] overflow-hidden bg-neutral-200 md:h-[350px]">
                  <div className="h-full w-full bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-100 transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="pt-4">
                  <p className="text-[14px] leading-5">
                    {product}
                  </p>

                  <p className="mt-1 text-[11px] text-neutral-500">
                    Discover the collection
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BRANDS
      ====================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">

          <div className="text-center">
            <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              Brands
            </p>

            <h2 className="text-[34px] font-light tracking-[-0.035em] md:text-[48px]">
              All brands
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {brands.map((brand) => (
              <a
                href="#"
                key={brand}
                className="group relative overflow-hidden bg-neutral-200"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-100 transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-5">
                  <p className="text-[20px] font-light text-white">
                    {brand}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INSPIRATION GALLERIES
      ====================================================== */}

      <section className="border-t border-neutral-200 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1320px]">

          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                Inspiration
              </p>

              <h2 className="text-[34px] font-light tracking-[-0.035em] md:text-[48px]">
                INSPIRATION GALLERIES
              </h2>
            </div>

            <button className="self-start border-b border-black pb-1 text-[12px]">
              All spaces
            </button>
          </div>

          <div className="mt-10 flex gap-7 overflow-x-auto border-b border-neutral-200 pb-4">
            {inspirationFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative shrink-0 pb-1 text-[12px] ${
                  activeFilter === filter
                    ? "text-black"
                    : "text-neutral-500"
                }`}
              >
                {filter}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300 ${
                    activeFilter === filter ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {placeholderImages.map((name) => (
              <article
                key={name}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                  <div className="h-full w-full bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100 transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="pt-3">
                  <p className="text-[12px]">
                    {name}
                  </p>

                  <p className="mt-1 text-[10px] text-neutral-500">
                    Cosentino inspiration project
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SILESTONE
      ====================================================== */}

      <section className="relative overflow-hidden bg-neutral-900 px-6 py-24 text-white md:px-10 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-[700px]">

            <p className="mb-5 text-[10px] uppercase tracking-[0.15em] text-white/60">
              Silestone
            </p>

            <h2 className="text-[38px] font-light leading-[1] tracking-[-0.04em] md:text-[58px]">
              Silestone. The first mineral surface with low silica content.
            </h2>

            <p className="mt-7 max-w-[580px] text-[14px] leading-6 text-white/70">
              With exclusive Hybriq+ technology.
            </p>

            <a
              href="#"
              className="mt-8 inline-block border-b border-white pb-1 text-[12px]"
            >
              Learn more about Hybriq+
            </a>

          </div>
        </div>
      </section>

      {/* =====================================================
          RENOVATION
      ====================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 md:grid-cols-2">

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              Renovation
            </p>

            <h2 className="max-w-[650px] text-[38px] font-light leading-[1] tracking-[-0.04em] md:text-[55px]">
              DO YOU HAVE A RENOVATION?
              <br />
              WE CAN HELP YOU
            </h2>

            <p className="mt-7 max-w-[550px] text-[14px] leading-6 text-neutral-600">
              Our extensive network of collaborators allows us to offer
              advice for renovations across five continents.
            </p>

            <a
              href="#"
              className="mt-7 inline-block border-b border-black pb-1 text-[12px]"
            >
              Where to buy
            </a>
          </div>

          <PlaceholderImage height="h-[480px]" />
        </div>
      </section>

      {/* =====================================================
          VERSATILE SOLUTIONS
      ====================================================== */}

      <section className="bg-[#f5f5f3] px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">

          <div className="max-w-[850px]">
            <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              Solutions
            </p>

            <h2 className="text-[38px] font-light leading-[1] tracking-[-0.04em] md:text-[55px]">
              VERSATILE SOLUTIONS FOR ANY SPACE
            </h2>

            <p className="mt-7 text-[14px] leading-6 text-neutral-600">
              The low porosity and high resistance of our surfaces,
              combined with the wide variety of finishes, thicknesses,
              and formats available, make us the perfect ally for all
              types of spaces.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Dekton", "Silestone", "Ēclos", "Sensa"].map((brand) => (
              <article key={brand}>
                <PlaceholderImage height="h-[280px]" />

                <h3 className="mt-4 text-[20px] font-light">
                  {brand}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-neutral-500">
                  Discover properties and applications.
                </p>

                <a
                  href="#"
                  className="mt-4 inline-block border-b border-black pb-1 text-[11px]"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COSENTINO CITY
      ====================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 md:grid-cols-2">

          <PlaceholderImage height="h-[480px]" />

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-neutral-500">
              Cosentino City
            </p>

            <h2 className="text-[38px] font-light leading-[1] tracking-[-0.04em] md:text-[55px]">
              A SPACE FOR INSPIRATION, CONNECTION, AND CREATION
            </h2>

            <p className="mt-7 text-[14px] leading-6 text-neutral-600">
              A space for inspiration, meeting, and creation to bring
              any design or architecture project to life.
            </p>

            <a
              href="#"
              className="mt-7 inline-block border-b border-black pb-1 text-[12px]"
            >
              More information
            </a>
          </div>

        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="bg-[#f5f5f3] px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[850px] text-center">

          <p className="mb-4 text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            Newsletter
          </p>

          <h2 className="text-[38px] font-light tracking-[-0.04em] md:text-[52px]">
            Get inspired with our newsletter
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-6 text-neutral-600">
            Discover innovative projects, unique colors and the latest
            news and trends.
          </p>

          <div className="mx-auto mt-9 flex max-w-[500px] border-b border-neutral-500">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent px-0 py-4 text-[13px] outline-none placeholder:text-neutral-500"
            />

            <button className="px-2 text-[13px]">
              →
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}

function PlaceholderCard({
  title,
  large = false,
}: {
  title: string;
  large?: boolean;
}) {
  return (
    <article className="group relative overflow-hidden">
      <div
        className={`${
          large ? "h-[480px] md:h-[520px]" : "h-[360px]"
        } bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100 transition-transform duration-700 group-hover:scale-[1.02]`}
      />

      <div className="absolute left-0 top-0 p-6 md:p-8">
        <h3 className="text-[16px] text-white drop-shadow md:text-[18px]">
          {title}
        </h3>
      </div>
    </article>
  );
}

function PlaceholderImage({
  height,
}: {
  height: string;
}) {
  return (
    <div
      className={`${height} w-full bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100`}
    />
  );
}