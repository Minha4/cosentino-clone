"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const featureTabs = [
  {
    number: "01",
    label: "Global leaders in kitchen design",
    title: "30 years leading kitchen design innovation",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/df9c52645443d97883814589c5b0ec43.jpg?w=1500&h=1500&q=90",
    paragraphs: [
      "For more than three decades, we have transformed the kitchen into a space of trust and design that is not only functional but also sparks creativity and fosters connection. Millions of families and businesses in over 140 countries rely on Cosentino to create versatile, vibrant spaces.",
      "With over 14 million kitchens equipped with one of our brands, we lead the transformation of this home space with products such as the low-silica hybrid mineral surface Silestone, the ultracompact ceramic Dekton, or the stain-resistant natural stone Sensa.",
    ],
    brands: [
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/Silestone.svg",
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/Dekton.svg",
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/Eclos.svg",
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/Sensa.svg",
    ],
  },
  {
    number: "02",
    label: "Continuous innovation in surfaces",
    title: "We change the world from the kitchen",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/cocinas-2.jpg",
    paragraphs: [
      "At Cosentino, we strive to deliver high-quality products for the most demanding clients while contributing to a more sustainable future. To achieve this, we combine cutting-edge technology with exceptional design in an environmentally-friendly production process.",
      "We incorporate recycled materials, 100% renewable electricity, and 99% reclaimed water, minimizing our impact. Additionally, we reduce and offset our carbon emissions. We aim for our footprint on the planet to always be positive.",
    ],
  },
  {
    number: "03",
    label: "Functional and durable design",
    title: "We develop trendsetting designs",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/TRANSFORMWA_TOWNSHEND_002.jpg",
    paragraphs: [
      "Through intriguing veined patterns, elegant tones, or sophisticated industrial finishes, our innovative designs and textures unite the latest trends in architecture and interior design with unique resistance and durability, tailored to withstand the daily wear of any kitchen.",
      "The large formats of Silestone and ĒCLOS (up to 128x63 inches), Dekton (up to 130x64 inches), and Sensa (starting at 98x59 inches) allow designing any kitchen without limitations, creating greater visual continuity, enhancing the beauty of the countertop, cladding, flooring, or paneling, and minimizing daily maintenance.",
    ],
  },
  {
    number: "04",
    label: "Multi-application surfaces",
    title: "The beauty of continuity. Much more than countertops",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/app-public-pending_approval-Black-Beauty-Kitchen.jpg",
    paragraphs: [
      "The high resistance to stains and scratches of our surfaces, combined with our deep expertise in producing large formats and diverse thicknesses, enables us to offer a wide range of applications, creating multiple possibilities for any kitchen project.",
      "The versatility of our designs enables the creation of large-format flooring and cladding, furniture finishes and paneling, sinks, tabletops, and islands of any size, seamlessly integrated or perfectly matched with the countertop finish.",
    ],
  },
  {
    number: "05",
    label: "Warranty",
    title: "Your kitchen in perfect condition for more years",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/fortalezas/app-public-pending_approval-787A0515.jpg",
    paragraphs: [
      "We believe in satisfied customers and enduring products. That’s why we create aesthetically valuable surfaces designed to remain unchanged for decades. We are so confident in their quality that we offer a 25-year commercial guarantee on brands like Silestone, ĒCLOS, and Dekton.",
      "Additionally, for any maintenance questions or issues with your Cosentino products, you can always rely on a great team of experts ready to assist you anywhere in the world. Check all the details in the Maintenance and Warranty section of each of our brands.",
    ],
  },
];

const applications = [
  {
    title: "Countertops",
    href: "/usa/kitchens/kitchen-countertop/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/aplicaciones/encimeras.jpg?q=90",
  },
  {
    title: "Floors",
    href: "/usa/kitchens/kitchen-flooring/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/aplicaciones/suelos.jpg?q=90",
  },
  {
    title: "Cladding and Wall Coverings",
    href: "/usa/kitchens/kitchen-claddings/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/aplicaciones/revestimientos.jpg?q=90",
  },
  {
    title: "Sinks",
    href: "/usa/kitchens/kitchen-sinks/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/aplicaciones/fregaderos.jpg?q=90",
  },
  {
    title: "Furniture",
    href: "/usa/kitchens/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/aplicaciones/mobiliario.jpg?q=90",
  },
];

const galleryFilters = [
  "Kitchen environments",
  "Countertops",
  "Cladding and Wall Coverings",
  "Flooring",
  "Sinks",
  "Furniture",
];

const galleryImages = [
  {
    title: "FF Home by Dunarra Interior",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C4819A08-079D-4633-BBA441509D712FD0/ff-home-by-dunarra-interior.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Proyecto Barquillo",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/E4FE8197-7E60-485A-9287CDF61B5135AE/proyecto-barquillo.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Hayley Peterson Residential",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/A5A7F5C5-71C7-4137-819C351BEA0BE953/hayley-peterson-residential.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Battersea Residential",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/0728C074-BA73-455D-B294A1A670F099C0/battersea-residential.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Imperfection of Matter",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/B5659C2F-62A4-4E0E-87F1C55505B5A8A8/imperfection-of-matter.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Rocco Place NSW",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/21B1DEB1-9C61-4676-98400261483D37BE/rocco-place-nsw.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Doncaster House",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C8376A2D-0CBB-4007-89DDE8214F305010/doncaster-house.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Montenegro",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/9D9700B7-5E2F-4165-8B1D1547F734DBB1/montenegro.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Kollutchen",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C5AF398A-C697-4004-A71C03902B6CD73A/kollutchen.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Laura Wontorra Home",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/6FC868DB-E15D-415B-8ABAE04DA7930278/laura-wontorra-home.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Titirangi Originals",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/6171ED0A-B077-4FF3-80669C26862BAB39/titirangi-originals.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "House SI Matosinhos",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C87D9E51-F2C4-48C5-937B0C400F9C62E4/house-si-matosinhos.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Kitchen with Silestone Le Chic",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/270F9C0A-B13F-497E-8805E1CD24321548/kitchen-with-silestone-le-chic.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Restaurante Masi",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/ADD8D5A5-2FB3-49C2-989554D3DF88C9A6/restaurante-masi.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Ballingslöv Järfälla N Stengruppen",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/F784BEBA-8794-4891-9B228D351DA0555A/ballingsloev-jaerfaella-n-stengruppen.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Boreal Tower",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/94F5E4A3-7A13-4E2C-99C59AABB7EC8E2C/boreal-tower.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Villa Nöhmer",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/C617AD7E-E783-4875-AAA2A79E8843E284/villa-noehmer.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "Dorota Czaja",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/08D72013-6260-4484-A9FFF89F4698042B/dorota-czaja.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "North London Kitchen",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/93C8D785-8007-4955-A49A38B24C007E2A/north-london-kitchen.jpg?auto=format&q=80&fit=crop",
  },
  {
    title: "ESPAÇO FG Praia Brava",
    image:
      "https://assetstools.cosentino.com/api/v1/bynder/image/72A202ED-B0C6-42EB-8FC4659DA2169A68/espaco-fg-praia-brava.jpg?auto=format&q=80&fit=crop",
  },
];

const colors = [
  {
    name: "Nara",
    brand: "Dekton",
    href: "/usa/colors/dekton/nara/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/encimeras-dekton/colores/NARA.jpg",
  },
  {
    name: "Ava",
    brand: "Dekton",
    href: "/usa/colors/dekton/ava/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/encimeras-dekton/colores/AVA.jpg",
  },
  {
    name: "Laurent",
    brand: "Dekton",
    href: "/usa/colors/dekton/laurent/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/rediseno/Laurent-Detalle.jpg",
  },
  {
    name: "Cascade Gold",
    brand: "Silestone",
    href: "/usa/colors/silestone/cascade-gold/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/landing-xeron/colores/Cascade-Gold.jpg",
  },
  {
    name: "Arum White",
    brand: "Silestone",
    href: "/usa/colors/silestone/aurum-white/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/landing-xeron/colores/Aurum-White.jpg",
  },
  {
    name: "Taj Mahal",
    brand: "Sensa",
    href: "/usa/colors/sensa/taj-mahal/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/rediseno/Taj-Mahal-Detalle.jpg",
  },
];

const faqs = [
  {
    question: "Where to buy a kitchen with Cosentino materials?",
    answer: (
      <>
        Get advice from Cosentino-certified kitchen design studios here.
        Additionally, you can visit any{" "}
        <a
          href="/usa/cosentino-center/"
          className="underline hover:no-underline"
        >
          Cosentino Center
        </a>{" "}
        or{" "}
        <a
          href="/usa/professional/cosentino-city/"
          className="underline hover:no-underline"
        >
          City
        </a>{" "}
        by finding the nearest{" "}
        <a
          href="/usa/where-to-buy/"
          className="underline hover:no-underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "What Cosentino brands are available for kitchens?",
    answer:
      "The Cosentino brands available for kitchens are Silestone, Dekton, Sensa, and Scalea.",
  },
  {
    question: "Does Cosentino design kitchens?",
    answer: (
      <>
        No, however, you can receive assistance with your design by visiting a{" "}
        <a
          href="/usa/professional/cosentino-city/"
          className="underline hover:no-underline"
        >
          Cosentino City
        </a>{" "}
        or contacting a Cosentino-recommended store that you can find{" "}
        <a
          href="/usa/where-to-buy/"
          className="underline hover:no-underline"
        >
          here
        </a>
        .
      </>
    ),
  },
];

const otherSpaces = [
  {
    title: "Bathrooms",
    href: "/usa/bathrooms/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/espacios/12dcd5c78e91ac5179a776574d5a60ed.jpg?w=900&h=900&q=90",
  },
  {
    title: "Facades",
    href: "/usa/facades/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/espacios/cc47bbe5214a6d81db378452d4baaa5e.jpg?w=1000&h=1000&q=90",
  },
  {
    title: "Commercial Projects",
    href: "/usa/inspiration/contract/",
    image:
      "https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/espacios/6b6c4a047eb257b8de5af56eaf2c1e8b.png?w=1200&h=1200&q=90",
  },
];

export default function KitchensPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState(0);
  const [galleryView, setGalleryView] = useState<"4" | "2" | "1">("4");

  const currentFeature = featureTabs[activeFeature];

  return (
    <>
      <Header />

      <main className="bg-white text-[#3c3c3b]">
        {/* HERO */}
        <section className="relative">
          <div className="relative min-h-[620px] overflow-hidden md:min-h-[720px]">
            <img
              src="https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/hero/hero-1.jpg?w=2000&h=2000&q=90"
              alt="Cosentino Kitchens"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 flex min-h-[620px] items-end px-6 pb-12 md:min-h-[720px] md:px-12 md:pb-16 lg:px-20">
              <div className="text-white">
                <h1
                  className="text-5xl font-extralight uppercase tracking-[-0.04em] sm:text-6xl md:text-7xl"
                  style={{
                    fontFamily: '"Diagramm", Arial, sans-serif',
                  }}
                >
                  Kitchens
                </h1>

                <p className="mt-3 text-base md:text-lg">
                  Innovative & Sustainable Design Surfaces
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1400px] px-6 py-5 text-sm md:px-10">
            <span className="text-neutral-400">Home</span>
            <span className="mx-2">/</span>
            <span>Kitchens</span>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-[#f2f2f2]">
          <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[280px_1fr]">
            <div className="border-b border-neutral-300 p-6 lg:border-b-0 lg:border-r lg:p-10">
              <div className="space-y-2 lg:sticky lg:top-24">
                {featureTabs.map((tab, index) => (
                  <button
                    key={tab.number}
                    onClick={() => setActiveFeature(index)}
                    className={`group flex w-full items-start gap-3 border-t py-5 text-left transition ${
                      activeFeature === index
                        ? "border-black"
                        : "border-neutral-300"
                    }`}
                  >
                    <span
                      className={`mt-0.5 text-sm ${
                        activeFeature === index
                          ? "text-black"
                          : "text-neutral-400"
                      }`}
                    >
                      {tab.number}
                    </span>

                    <span
                      className={`text-sm uppercase leading-5 ${
                        activeFeature === index
                          ? "font-medium text-black"
                          : "text-neutral-600"
                      }`}
                    >
                      {tab.label}
                    </span>

                    <span
                      className={`ml-auto mt-1 text-xl transition ${
                        activeFeature === index
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-1 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="grid lg:grid-cols-2">
                <div className="order-2 p-6 md:p-10 lg:order-1 lg:p-16">
                  <h2
                    className="max-w-[650px] text-3xl font-light uppercase tracking-[-0.03em] md:text-5xl"
                    style={{
                      fontFamily: '"Diagramm", Arial, sans-serif',
                    }}
                  >
                    {currentFeature.title}
                  </h2>

                  <div className="mt-10 grid gap-8 md:grid-cols-2">
                    {currentFeature.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[15px] font-light leading-7 text-neutral-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {currentFeature.brands && (
                    <div className="mt-12 flex flex-wrap items-center gap-8">
                      {currentFeature.brands.map((brand) => (
                        <img
                          key={brand}
                          src={brand}
                          alt=""
                          className="h-8 w-auto max-w-[130px] object-contain"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="order-1 min-h-[400px] lg:order-2 lg:min-h-[680px]">
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN YOUR KITCHEN */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10">
            <div className="grid gap-10 md:grid-cols-3">
              <h2
                className="text-4xl font-light uppercase tracking-[-0.03em] md:text-5xl"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                }}
              >
                Design your kitchen with Cosentino
              </h2>

              <p className="text-base leading-7 text-neutral-700">
                Thanks to the distinctive properties of our brands and the
                variety of formats and thicknesses available, we offer
                solutions for any kitchen application.
              </p>

              <p className="text-base leading-7 text-neutral-700">
                Our kitchen surfaces enable the most refined design from
                flooring to the countertop, including furniture cladding and
                the sink.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {applications.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group relative min-h-[340px] overflow-hidden bg-black"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                    <h3 className="text-lg">{item.title}</h3>
                    <span className="text-2xl">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#eeeeee]">
          <div className="mx-auto grid max-w-[1500px] lg:grid-cols-2">
            <div className="bg-[#eeeeee] p-8 md:p-14 lg:p-20">
              <h2
                className="text-4xl font-light md:text-5xl"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                }}
              >
                Do you want to renovate a kitchen?
              </h2>

              <p className="mt-6 max-w-[650px] text-base leading-7 text-neutral-700">
                The versatility and wide portfolio of finishes in Cosentino
                surfaces make any project possible, regardless of your style.
                For this, we have a vast global network of certified kitchen
                studios.
              </p>

              <a
                href="/usa/where-to-buy/"
                className="mt-8 inline-flex items-center gap-3 border border-black bg-black px-6 py-3 text-sm text-white transition hover:bg-transparent hover:text-black"
              >
                Where to buy
                <span>→</span>
              </a>
            </div>

            <div className="min-h-[380px]">
              <img
                src="https://assetsstatic.cosentino.com/core-nueva-visual/cocinas/cta-where-to-buy/cta-where-to-buy.jpg"
                alt="Kitchen renovation"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* INSPIRATION GALLERY */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <h2
                className="max-w-[700px] text-4xl font-light uppercase md:text-5xl"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                }}
              >
                Kitchen Inspiration Gallery
              </h2>

              <div className="flex gap-2">
                {(["4", "2", "1"] as const).map((view) => (
                  <button
                    key={view}
                    onClick={() => setGalleryView(view)}
                    className={`border px-4 py-2 text-sm ${
                      galleryView === view
                        ? "border-black bg-black text-white"
                        : "border-neutral-300"
                    }`}
                  >
                    {view === "4" ? "2×2" : view === "2" ? "2×1" : "1×1"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 flex gap-2 overflow-x-auto border-b border-neutral-300 pb-4">
              {galleryFilters.map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveGalleryFilter(index)}
                  className={`whitespace-nowrap px-4 py-2 text-sm transition ${
                    activeGalleryFilter === index
                      ? "bg-black text-white"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div
              className={`mt-8 grid gap-4 ${
                galleryView === "4"
                  ? "grid-cols-2 md:grid-cols-4"
                  : galleryView === "2"
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {galleryImages.map((item) => (
                <button
                  key={item.title}
                  className={`group relative overflow-hidden bg-neutral-200 ${
                    galleryView === "4"
                      ? "aspect-square"
                      : galleryView === "2"
                      ? "aspect-[4/5]"
                      : "aspect-[16/9]"
                  }`}
                  type="button"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-left text-white opacity-0 transition group-hover:opacity-100">
                    <p className="text-sm">{item.title}</p>
                  </div>
                </button>
              ))}
            </div>

            <p className="mt-6 text-xs text-neutral-400">
              Showing gallery category: {galleryFilters[activeGalleryFilter]}
            </p>
          </div>
        </section>

        {/* POPULAR COLORS */}
        <section className="bg-[#f3f3f3] py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2
                className="text-4xl font-light uppercase md:text-5xl"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                }}
              >
                Discover the most popular colors and brands for kitchen design
              </h2>

              <a
                href="/usa/colors/"
                className="mt-8 inline-flex border border-black px-6 py-3 text-sm transition hover:bg-black hover:text-white"
              >
                View all colors
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {colors.map((color) => (
                <a
                  key={color.name}
                  href={color.href}
                  className="group bg-white"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={color.image}
                      alt={color.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-sm font-medium">{color.name}</p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {color.brand}
                      </p>
                    </div>

                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* INSPIRATIONAL BOOK */}
        <section className="bg-[#163d55] text-white">
          <div className="mx-auto grid max-w-[1500px] lg:grid-cols-2">
            <div className="p-8 md:p-14 lg:p-20">
              <h2
                className="text-4xl font-light uppercase md:text-5xl"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                }}
              >
                Download our Inspirational Book now
              </h2>

              <p className="mt-6 max-w-[620px] text-base leading-7 text-white/80">
                Get inspired and discover the latest market trends from
                Cosentino. Download the portfolio and get inspired.
              </p>

              <div className="mt-10 max-w-xl">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border-b border-white/60 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/60"
                />

                <div className="mt-7 space-y-4">
                  <p className="text-sm">I am a:</p>

                  <div className="flex flex-wrap gap-5 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="profile" />
                      Homeowner
                    </label>

                    <label className="flex items-center gap-2">
                      <input type="radio" name="profile" />
                      Professional
                    </label>
                  </div>

                  <select className="w-full border-b border-white/60 bg-transparent px-0 py-4 text-white outline-none">
                    <option className="text-black" value="">
                      Select your profile
                    </option>
                    <option className="text-black">Architect</option>
                    <option className="text-black">Builder</option>
                    <option className="text-black">Interior Designer</option>
                    <option className="text-black">Fabricator</option>
                    <option className="text-black">Installer</option>
                    <option className="text-black">
                      Kitchen and bathroom shops
                    </option>
                    <option className="text-black">Promoter</option>
                  </select>

                  <label className="flex gap-3 text-sm leading-6 text-white/80">
                    <input type="checkbox" className="mt-1 shrink-0" />
                    <span>
                      I agree to receive valuable content from Cosentino in
                      the form of commercial emails. Cosentino Global is the
                      owner of this data. Your data will be processed to keep
                      you informed of our products and services. The legal
                      basis for the processing is your consent.
                    </span>
                  </label>

                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-3 bg-white px-6 py-3 text-sm text-black transition hover:bg-neutral-200"
                  >
                    Download
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="min-h-[380px]">
              <img
                src="https://assetsstatic.cosentino.com/core-nueva-visual/cta/COSENTINO_AXON_011-1-1.jpg?q=70"
                alt="Cosentino inspirational kitchen"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <h2
              className="text-4xl font-light uppercase md:text-5xl"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
              }}
            >
              Frequently asked questions about kitchens
            </h2>

            <div className="mt-12 border-t border-neutral-300">
              {faqs.map((faq, index) => {
                const open = activeFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-neutral-300"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveFaq(open ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    >
                      <div className="flex items-start gap-5">
                        <span className="text-sm text-neutral-400">
                          0{index + 1}.
                        </span>

                        <span className="text-base font-medium">
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`text-xl transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {open && (
                      <div className="pb-7 pl-10 pr-8 text-sm leading-7 text-neutral-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OTHER SPACES */}
        <section className="bg-[#f2f2f2] py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10">
            <div className="grid gap-10 md:grid-cols-3">
              <h2
                className="text-4xl font-light md:text-5xl"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                }}
              >
                Imagine your space. Cosentino makes it possible
              </h2>

              <p className="text-base leading-7 text-neutral-700">
                We offer tailored solutions and guidance for every
                application and space, from bathroom and furniture design to
                wall cladding or façades.
              </p>

              <p className="text-base leading-7 text-neutral-700">
                Discover all the possibilities for any interior design,
                exterior design, or architectural project, whether residential
                or commercial.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {otherSpaces.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group relative min-h-[380px] overflow-hidden bg-black"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                    <h3 className="text-lg">{item.title}</h3>
                    <span className="text-2xl">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FLOATING QUOTE BUTTON */}
        <a
          href="/landings-usa/quotation-form/"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-4 bg-black px-5 py-4 text-sm text-white shadow-xl transition hover:bg-[#163d55]"
        >
          Request a quote
          <span className="text-lg">→</span>
        </a>
      </main>

      <Footer />
    </>
  );
}