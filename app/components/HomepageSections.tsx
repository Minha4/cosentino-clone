"use client";

import { useState } from "react";

const products = [
  "Dekton ARTIK NODES",
  "ĒCLOS",
  "Dekton Nomak",
  "Dekton Amazonik",
  "Dekton Nara",
  "Silestone Zoe TOP",
  "Silestone Suma",
  "Dekton PIETRA EDITION",
  "Silestone URBAN CRUSH",
  "Dekton PIETRA KODE",
  "Silestone LE CHIC",
  "Dekton UKIYO",
];

const brands = ["Ēclos", "Dekton", "Silestone", "Sensa"];

const colors = [
  "Legnd",
  "Tajnar",
  "Ivora",
  "Wondr",
  "Landr",
  "Phantome",
  "Nara",
  "Kedar",
  "Keena",
  "Evok",
  "Nebbia",
  "Ceppo",
  "Jardin Emerald",
  "Blanc Elysee",
  "Raw A",
  "Parisien Bleu",
  "Raw D",
  "Brass Relis",
  "Taj Mahal",
  "Orinoco",
  "White Macaubas",
  "Itara",
  "Cristalo",
  "Marau",
];

const inspirationFilters = [
  "All spaces",
  "Kitchens",
  "Bathrooms",
  "Other interiors",
  "Outdoor",
  "Facades",
  "Commercial",
];

const inspirationProjects = [
  "SQala Design",
  "FF Home by Dunarra Interior",
  "Proyecto Barquillo",
  "Hayley Peterson Residential",
  "Hotel Hyll Cotswolds",
  "LLAVANERES",
  "Battersea Residential",
  "Imperfection of Matter",
  "Rocco Place NSW",
  "Facade NSW",
  "Doncaster House",
  "Montenegro",
  "Kollutchen",
  "Piece of Rest",
  "Laura Wontorra Home",
  "Titirangi Originals",
  "House SI Matosinhos",
  "Penthouse by MOM Designer",
];

export default function HomepageSections() {
  const [activeFilter, setActiveFilter] = useState("All spaces");

  return (
    <main className="bg-white text-[#171717]">

      {/* =====================================================
          FURNITURE
      ====================================================== */}

      <section className="px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1500px]">

          <div className="flex items-end justify-between">
            <h2 className="text-[38px] font-light tracking-[-0.04em] md:text-[50px]">
              Furniture
            </h2>

            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center border border-neutral-300"
              >
                ←
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center border border-neutral-300"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ImagePlaceholder title="Furniture" />
            <ImagePlaceholder title="Furniture" />
            <ImagePlaceholder title="Furniture" />
          </div>
        </div>
      </section>

      {/* =====================================================
          NEW
      ====================================================== */}

      <section className="bg-[#f4f4f2] px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1500px]">

          <div className="flex items-end justify-between">
            <div>
              <p className="mb-3 text-[10px] text-neutral-500">
                New
              </p>

              <h2 className="text-[38px] font-light tracking-[-0.04em] md:text-[50px]">
                New
              </h2>
            </div>

            <a
              href="#"
              className="hidden border-b border-black pb-1 text-[11px] md:block"
            >
              View all
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product} className="group">
                <div className="aspect-[0.82] overflow-hidden bg-neutral-200">
                  <div className="h-full w-full bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-100 transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="pt-4">
                  <h3 className="text-[13px] leading-5">
                    {product}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BRANDS
      ====================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1500px]">

          <div className="flex items-center justify-between">
            <h2 className="text-[38px] font-light tracking-[-0.04em] md:text-[50px]">
              Brands
            </h2>

            <button
              type="button"
              className="border-b border-black pb-1 text-[11px]"
            >
              All brands
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {brands.map((brand) => (
              <article
                key={brand}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[0.9] bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-100 transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <h3 className="text-[24px] font-light text-white">
                    {brand}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COLORS
      ====================================================== */}

      <section className="border-t border-neutral-200 px-6 py-20 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1500px]">

          <div className="flex items-end justify-between">
            <div>
              <p className="mb-3 text-[10px] text-neutral-500">
                Colors
              </p>

              <h2 className="text-[38px] font-light tracking-[-0.04em] md:text-[50px]">
                Colors
              </h2>
            </div>

            <button
              type="button"
              className="hidden border-b border-black pb-1 text-[11px] md:block"
            >
              View all
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {colors.map((color, index) => (
              <article key={color} className="group">
                <div
                  className="aspect-square transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background:
                      index % 4 === 0
                        ? "linear-gradient(135deg,#ddd8ce,#a79b8b)"
                        : index % 4 === 1
                        ? "linear-gradient(135deg,#eeeae2,#c6c1b6)"
                        : index % 4 === 2
                        ? "linear-gradient(135deg,#c9c3b9,#7f766b)"
                        : "linear-gradient(135deg,#44413d,#1d1c1a)",
                  }}
                />

                <p className="mt-2 text-[10px]">
                  {color}
                </p>

                <p className="mt-1 text-[9px] text-neutral-500">
                  View color
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INSPIRATION GALLERIES
      ====================================================== */}

      <section className="border-t border-neutral-200 px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1500px]">

          <h2 className="text-[34px] font-light uppercase tracking-[-0.035em] md:text-[48px]">
            Inspiration Galleries
          </h2>

          <div className="mt-8 flex gap-7 overflow-x-auto border-b border-neutral-200 pb-4">
            {inspirationFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 text-[12px] ${
                  activeFilter === filter
                    ? "text-black"
                    : "text-neutral-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inspirationProjects.map((project) => (
              <article key={project} className="group">
                <div className="aspect-[1.35] overflow-hidden bg-neutral-200">
                  <div className="h-full w-full bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100 transition-transform duration-700 group-hover:scale-105" />
                </div>

                <h3 className="pt-3 text-[12px]">
                  {project}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SILESTONE
      ====================================================== */}

      <section className="bg-[#292929] px-6 py-24 text-white md:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1500px]">

          <div className="max-w-[750px]">
            <h2 className="text-[38px] font-light leading-[1.02] tracking-[-0.04em] md:text-[54px]">
              Silestone. The first mineral surface with low silica content.
              With exclusive Hybriq+ technology.
            </h2>

            <a
              href="#"
              className="mt-8 inline-block border-b border-white pb-1 text-[11px]"
            >
              Learn more about Hybriq+
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          RENOVATION
      ====================================================== */}

      <section className="px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-2 md:items-center">

          <div>
            <h2 className="text-[38px] font-light uppercase leading-[1.03] tracking-[-0.04em] md:text-[52px]">
              Do you have a renovation?
              <br />
              We can help you
            </h2>

            <p className="mt-6 max-w-[560px] text-[13px] leading-6 text-neutral-600">
              Our extensive network of collaborators allows us to offer you
              advice for any renovation across five continents.
            </p>

            <a
              href="#"
              className="mt-7 inline-block border-b border-black pb-1 text-[11px]"
            >
              Where to buy
            </a>
          </div>

          <ImagePlaceholder title="" />
        </div>
      </section>

      {/* =====================================================
          VERSATILE SOLUTIONS
      ====================================================== */}

      <section className="bg-[#f4f4f2] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1500px]">

          <h2 className="max-w-[900px] text-[38px] font-light uppercase leading-[1] tracking-[-0.04em] md:text-[52px]">
            Versatile solutions for any space
          </h2>

          <p className="mt-6 max-w-[820px] text-[13px] leading-6 text-neutral-600">
            The low porosity and high resistance of our surfaces, along with
            the wide variety of finishes, thicknesses, and formats available,
            make us the perfect ally for all types of spaces.
          </p>

          <p className="mt-4 max-w-[820px] text-[13px] leading-6 text-neutral-600">
            We offer solutions for flooring, cladding, countertops, facades
            and more, for both residential and commercial use.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <article key={brand}>
                <ImagePlaceholder title="" />

                <h3 className="mt-4 text-[20px] font-light">
                  {brand}
                </h3>

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

      <section className="px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-2 md:items-center">

          <ImagePlaceholder title="" />

          <div>
            <p className="mb-5 text-[10px] text-neutral-500">
              Cosentino City
            </p>

            <h2 className="text-[38px] font-light uppercase leading-[1.03] tracking-[-0.04em] md:text-[52px]">
              A space for inspiration, connection, and creation
            </h2>

            <p className="mt-6 text-[13px] leading-6 text-neutral-600">
              A space for inspiration, connection, and creation to bring any
              design or architectural project to life.
            </p>

            <a
              href="#"
              className="mt-7 inline-block border-b border-black pb-1 text-[11px]"
            >
              More information
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="bg-[#f4f4f2] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[850px] text-center">

          <h2 className="text-[38px] font-light tracking-[-0.04em] md:text-[52px]">
            Get inspired with our newsletter
          </h2>

          <p className="mt-5 text-[13px] text-neutral-600">
            Discover innovative projects, unique colors and the latest
            news and trends.
          </p>

          <div className="mx-auto mt-8 flex max-w-[520px] border-b border-neutral-500">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent py-4 text-[13px] outline-none placeholder:text-neutral-500"
            />

            <button
              type="button"
              className="px-2 text-[16px]"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#191919] px-6 py-16 text-white md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

            <FooterColumn
              title="Corporate"
              items={[
                "About us",
                "R&D and Innovation",
                "Safety at Cosentino",
                "Sustainability Report",
                "CT Quarry",
                "Silestone Institute",
              ]}
            />

            <FooterColumn
              title="Customer Support"
              items={[
                "Contact",
                "Warranty | Silestone",
                "Warranty | Dekton",
                "Warranty | Ēclos",
                "Warranty | Sensa",
                "Ethics & Compliance",
              ]}
            />

            <FooterColumn
              title="Service Provider"
              items={[
                "Supplier Portal",
                "General Purchase Conditions",
              ]}
            />

            <FooterColumn
              title="Professional Area"
              items={[
                "Designers",
                "Architects",
                "Fabricators",
                "Kitchen & bath studios",
                "Installers reformers",
                "Cosentino Center",
                "Cosentino City",
              ]}
            />

            <FooterColumn
              title="Resources"
              items={[
                "C Magazine",
                "C-Top Magazine",
                "Technical documentation",
                "Join Cosentino",
                "News",
              ]}
            />

          </div>

          <div className="mt-16 border-t border-white/20 pt-8">
            <p className="text-[10px] text-white/50">
              Cosentino Global, S.L.U. All rights reserved
            </p>

            <div className="mt-3 flex flex-wrap gap-5 text-[10px] text-white/50">
              <span>Legal Notice</span>
              <span>Privacy Policy</span>
              <span>Sitemap</span>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}

function ImagePlaceholder({ title }: { title: string }) {
  return (
    <div className="group">
      <div className="aspect-[1.2] overflow-hidden bg-neutral-200">
        <div className="h-full w-full bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100 transition-transform duration-700 group-hover:scale-105" />
      </div>

      {title && (
        <h3 className="mt-3 text-[13px]">
          {title}
        </h3>
      )}
    </div>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-[12px] font-normal">
        + {title}
      </h3>

      <div className="space-y-3">
        {items.map((item) => (
          <a
            href="#"
            key={item}
            className="block text-[11px] text-white/55 transition-colors hover:text-white"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}