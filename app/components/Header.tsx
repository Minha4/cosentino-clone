"use client";

import { useState } from "react";

type MenuName =
  | "country"
  | "brands"
  | "spaces"
  | "inspiration"
  | "professionals"
  | "corporate"
  | null;

const countries = [
  "USA",
  "United Kingdom",
  "Spain",
  "France",
  "Germany",
  "Australia",
];

const brands = [
  {
    name: "Silestone",
    description: "Mineral surface for architecture and design",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dekton",
    description: "Ultra-compact architectural surface",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ēclos",
    description: "New generation mineral surface",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sensa",
    description: "Protected natural stone",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Scalea",
    description: "Natural stone with unique character",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
  },
];

const spaces = [
  {
    name: "Kitchens",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Bathrooms",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Other interiors",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Outdoors",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
];

const inspiration = [
  {
    name: "Inspiration Gallery",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Projects",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Design Tools",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
];

const professionals = [
  {
    name: "Services",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    description: "Solutions and services for professionals",
  },
  {
    name: "Collaborations",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    description: "Collaborate with Cosentino",
  },
  {
    name: "Applications",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    description: "Discover technical applications",
  },
  {
    name: "Programs",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    description: "Professional programs and support",
  },
  {
    name: "Technical Documentation",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    description: "Technical resources and documents",
  },
];

const corporate = [
  {
    name: "About Us",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    description: "Discover Cosentino",
  },
  {
    name: "Environmental Policy",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
    description: "Our sustainability commitment",
  },
  {
    name: "Work With Us",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    description: "Join the Cosentino team",
  },
  {
    name: "News",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=85",
    description: "Latest news and updates",
  },
];

function GlobeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M12 3C14.4 5.4 15.5 8.4 15.5 12C15.5 15.6 14.4 18.6 12 21"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M12 3C9.6 5.4 8.5 8.4 8.5 12C8.5 15.6 9.6 18.6 12 21"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuName>(null);
  const [country, setCountry] = useState("USA");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<MenuName>(null);

  const toggleMobileSubmenu = (menu: MenuName) => {
    setMobileSubmenu((current) => (current === menu ? null : menu));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] text-white">
      {/* DESKTOP HEADER */}
      <div
        className="hidden bg-gradient-to-b from-black/35 via-black/10 to-transparent px-8 pb-8 pt-7 md:block"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="mx-auto flex max-w-[1650px] items-center">
          <a
            href="https://www.cosentino.com/usa/"
            className="shrink-0 text-[20px] font-normal leading-none tracking-[-0.075em]"
          >
            COSENTINO
          </a>

          <span className="mx-5 h-[18px] w-px bg-white/80" />

          <div className="relative shrink-0">
            <button
              type="button"
              onMouseEnter={() => setOpenMenu("country")}
              className="flex items-center gap-2 text-[12px] transition-opacity hover:opacity-60"
            >
              <GlobeIcon />
              <span>{country}</span>
              <Chevron open={openMenu === "country"} />
            </button>

            {openMenu === "country" && (
              <div
                className="absolute left-0 top-full mt-6 w-[225px] bg-white p-5 text-black shadow-2xl"
                onMouseEnter={() => setOpenMenu("country")}
              >
                <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                  Choose your country or region
                </p>

                <div className="space-y-1">
                  {countries.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setCountry(item);
                        setOpenMenu(null);
                      }}
                      className={`w-full px-2 py-2 text-left text-[13px] transition ${
                        item === country
                          ? "bg-neutral-100"
                          : "hover:bg-neutral-100"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <nav className="ml-12 flex flex-1 items-center justify-center gap-7 whitespace-nowrap">
            <a
              href="https://www.cosentino.com/usa/colors/"
              className="text-[12px] transition-opacity hover:opacity-60"
            >
              Colors
            </a>

            <button
              type="button"
              onMouseEnter={() => setOpenMenu("brands")}
              className="flex items-center gap-1 text-[12px]"
            >
              Our Brands
              <Chevron open={openMenu === "brands"} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setOpenMenu("spaces")}
              className="flex items-center gap-1 text-[12px]"
            >
              Spaces
              <Chevron open={openMenu === "spaces"} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setOpenMenu("inspiration")}
              className="flex items-center gap-1 text-[12px]"
            >
              Inspiration
              <Chevron open={openMenu === "inspiration"} />
            </button>

            <a
              href="https://www.cosentino.com/usa/professional/cosentino-city/"
              className="text-[12px] transition-opacity hover:opacity-60"
            >
              Showrooms
            </a>

            <button
              type="button"
              onMouseEnter={() => setOpenMenu("professionals")}
              className="flex items-center gap-1 text-[12px]"
            >
              Professionals
              <Chevron open={openMenu === "professionals"} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setOpenMenu("corporate")}
              className="flex items-center gap-1 text-[12px]"
            >
              Corporate
              <Chevron open={openMenu === "corporate"} />
            </button>
          </nav>

          <div className="ml-12 flex shrink-0 items-center gap-7 whitespace-nowrap">
            <a
              href="https://www.cosentino.com/usa/where-to-buy/"
              className="text-[12px] transition-opacity hover:opacity-60"
            >
              Where To Buy
            </a>

            <a
              href="https://we.cosentino.com/home"
              className="text-[12px] transition-opacity hover:opacity-60"
            >
              Professional Area
            </a>
          </div>
        </div>

        {/* COUNTRY MENU */}
        {openMenu === "country" && <div className="h-1" />}

        {/* BRANDS MENU */}
        {openMenu === "brands" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("brands")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-5 gap-5">
                {brands.map((item) => (
                  <a key={item.name} href="#" className="group">
                    <div className="h-[200px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="text-[20px] font-light">{item.name}</h3>
                      <span>→</span>
                    </div>

                    <p className="mt-2 text-[12px] leading-5 text-neutral-500">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SPACES MENU */}
        {openMenu === "spaces" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("spaces")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-4 gap-6">
                {spaces.map((item) => (
                  <a key={item.name} href="#" className="group">
                    <div className="h-[210px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="text-[20px] font-light">{item.name}</h3>
                      <span>→</span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                      <span className="text-[12px] text-neutral-500">
                        Countertops
                      </span>
                      <span className="text-[12px] text-neutral-500">
                        Cladding
                      </span>
                      <span className="text-[12px] text-neutral-500">
                        Flooring
                      </span>
                      <span className="text-[12px] text-neutral-500">
                        Furniture
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* INSPIRATION MENU */}
        {openMenu === "inspiration" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("inspiration")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-3 gap-6">
                {inspiration.map((item) => (
                  <a key={item.name} href="#" className="group">
                    <div className="h-[230px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="text-[21px] font-light">{item.name}</h3>
                      <span>→</span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                      <span className="text-[12px] text-neutral-500">
                        Kitchens
                      </span>
                      <span className="text-[12px] text-neutral-500">
                        Bathrooms
                      </span>
                      <span className="text-[12px] text-neutral-500">
                        Outdoors
                      </span>
                      <span className="text-[12px] text-neutral-500">
                        Projects
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROFESSIONALS MENU */}
        {openMenu === "professionals" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("professionals")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-5 gap-5">
                {professionals.map((item) => (
                  <a key={item.name} href="#" className="group">
                    <div className="h-[195px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="text-[18px] font-light">{item.name}</h3>
                      <span>→</span>
                    </div>

                    <p className="mt-2 text-[12px] text-neutral-500">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CORPORATE MENU */}
        {openMenu === "corporate" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("corporate")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-4 gap-6">
                {corporate.map((item) => (
                  <a key={item.name} href="#" className="group">
                    <div className="h-[220px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="text-[20px] font-light">{item.name}</h3>
                      <span>→</span>
                    </div>

                    <p className="mt-2 text-[12px] text-neutral-500">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE HEADER */}
      <div className="bg-gradient-to-b from-black/40 via-black/10 to-transparent px-5 py-5 md:hidden">
        <div className="flex items-center justify-between">
          <a
            href="https://www.cosentino.com/usa/"
            className="text-[19px] font-normal leading-none tracking-[-0.075em]"
          >
            COSENTINO
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMobileOpen((current) => !current);
              setMobileSubmenu(null);
            }}
            className="relative h-10 w-10"
          >
            <span
              className={`absolute left-2 top-3 h-px w-6 bg-white transition ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-2 top-5 h-px w-6 bg-white transition ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-2 top-7 h-px w-6 bg-white transition ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-5 max-h-[calc(100vh-90px)] overflow-y-auto border-t border-white/20 pt-2">
            <a
              href="https://www.cosentino.com/usa/colors/"
              className="block border-b border-white/15 py-4 text-[14px]"
              onClick={closeMobile}
            >
              Colors
            </a>

            {/* MOBILE BRANDS */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("brands")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                Our Brands
                <Chevron open={mobileSubmenu === "brands"} />
              </button>

              {mobileSubmenu === "brands" && (
                <div className="grid grid-cols-2 gap-3 pb-4">
                  {brands.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      className="group"
                      onClick={closeMobile}
                    >
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-2 text-[12px]">{item.name}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE SPACES */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("spaces")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                Spaces
                <Chevron open={mobileSubmenu === "spaces"} />
              </button>

              {mobileSubmenu === "spaces" && (
                <div className="grid grid-cols-2 gap-3 pb-4">
                  {spaces.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      className="group"
                      onClick={closeMobile}
                    >
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-2 text-[12px]">{item.name}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE INSPIRATION */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("inspiration")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                Inspiration
                <Chevron open={mobileSubmenu === "inspiration"} />
              </button>

              {mobileSubmenu === "inspiration" && (
                <div className="grid grid-cols-1 gap-3 pb-4">
                  {inspiration.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      className="group"
                      onClick={closeMobile}
                    >
                      <div className="h-32 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-2 text-[12px]">{item.name}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* SHOWROOMS */}
            <a
              href="https://www.cosentino.com/usa/professional/cosentino-city/"
              className="block border-b border-white/15 py-4 text-[14px]"
              onClick={closeMobile}
            >
              Showrooms
            </a>

            {/* MOBILE PROFESSIONALS */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("professionals")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                Professionals
                <Chevron open={mobileSubmenu === "professionals"} />
              </button>

              {mobileSubmenu === "professionals" && (
                <div className="grid grid-cols-2 gap-3 pb-4">
                  {professionals.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      className="group"
                      onClick={closeMobile}
                    >
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-2 text-[12px]">{item.name}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE CORPORATE */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("corporate")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                Corporate
                <Chevron open={mobileSubmenu === "corporate"} />
              </button>

              {mobileSubmenu === "corporate" && (
                <div className="grid grid-cols-2 gap-3 pb-4">
                  {corporate.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      className="group"
                      onClick={closeMobile}
                    >
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-2 text-[12px]">{item.name}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* WHERE TO BUY */}
            <a
              href="https://www.cosentino.com/usa/where-to-buy/"
              className="block border-b border-white/15 py-4 text-[14px]"
              onClick={closeMobile}
            >
              Where To Buy
            </a>

            {/* PROFESSIONAL AREA */}
            <a
              href="https://we.cosentino.com/home"
              className="block border-b border-white/15 py-4 text-[14px]"
              onClick={closeMobile}
            >
              Professional Area
            </a>

            {/* MOBILE COUNTRY */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("country")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                <span className="flex items-center gap-2">
                  <GlobeIcon />
                  {country}
                </span>
                <Chevron open={mobileSubmenu === "country"} />
              </button>

              {mobileSubmenu === "country" && (
                <div className="pb-4 pl-5">
                  {countries.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setCountry(item);
                        setMobileSubmenu(null);
                      }}
                      className="block py-2 text-[13px] text-white/75"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}