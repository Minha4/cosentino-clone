"use client";

import { useState } from "react";

type OpenMenu =
  | "country"
  | "brands"
  | "spaces"
  | "inspiration"
  | "professionals"
  | "corporate"
  | null;

const countryOptions = [
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
    description: "Mineral, low silica surface",
    items: ["About Silestone", "Silestone applications", "Silestone news"],
  },
  {
    name: "Dekton",
    description: "Ultra compact surface",
    items: ["About Dekton", "Dekton applications", "Dekton news"],
  },
  {
    name: "Ēclos",
    description: "Layered mineral surface",
    items: ["About Ēclos", "Ēclos applications", "Ēclos news"],
  },
  {
    name: "Sensa",
    description: "Protected natural stone",
    items: ["About Sensa", "Sensa applications", "Sensa news"],
  },
  {
    name: "Scalea",
    description: "Ultimate natural stone",
    items: ["About Scalea", "Scalea applications", "Scalea news"],
  },
];

const spaces = [
  {
    name: "Kitchens",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    items: [
      "Kitchens",
      "Countertops",
      "Flooring",
      "Cladding",
      "Sinks",
      "Furniture",
    ],
  },
  {
    name: "Bathrooms",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    items: [
      "Bathrooms",
      "Bathroom sinks",
      "Shower trays",
      "Countertops",
      "Cladding",
      "Flooring",
      "Furniture",
    ],
  },
  {
    name: "Other interiors",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    items: [
      "Other interiors",
      "Furniture",
      "Flooring",
      "Cladding",
      "Free power charger",
    ],
  },
  {
    name: "Outdoors",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    items: [
      "Facades",
      "Outdoor kitchens",
      "Outdoor flooring",
      "Outdoor furniture",
    ],
  },
];

const inspiration = [
  {
    name: "Inspiration Gallery",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    items: [
      "Bathrooms",
      "Kitchens",
      "Outdoor",
      "Other interiors",
      "Facades",
      "Commercial",
    ],
  },
  {
    name: "See Inspiration",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    items: [],
  },
  {
    name: "Design Tools",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    items: [
      "Kitchen visualization",
      "Bathroom visualization",
      "Other spaces",
      "Mood boards",
      "Generator",
    ],
  },
];

const professionals = [
  "Services",
  "Collaborations",
  "Applications",
  "Programs",
  "Technical Documentation",
];

const corporate = [
  "About Us",
  "Environmental Policy",
  "Work With Us",
  "News",
];

function GlobeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M12 3C14.3 5.4 15.5 8.4 15.5 12C15.5 15.6 14.3 18.6 12 21"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M12 3C9.7 5.4 8.5 8.4 8.5 12C8.5 15.6 9.7 18.6 12 21"
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
      xmlns="http://www.w3.org/2000/svg"
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
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [country, setCountry] = useState("USA");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<OpenMenu>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (menu: OpenMenu) => {
    setMobileSubmenu((current) => (current === menu ? null : menu));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] text-white">
      {/* DESKTOP / TABLET */}
      <div className="hidden bg-gradient-to-b from-black/30 via-black/10 to-transparent px-6 pb-7 pt-6 md:block lg:px-8 lg:pb-8 lg:pt-7">
        <div className="mx-auto flex w-full max-w-[1650px] items-center">

          <a
            href="https://www.cosentino.com/usa/"
            className="shrink-0 text-[19px] font-normal leading-none tracking-[-0.075em] transition-opacity duration-200 hover:opacity-70 lg:text-[20px]"
          >
            COSENTINO
          </a>

          <span className="mx-4 h-[18px] w-px shrink-0 bg-white/80 lg:mx-5" />

          <div className="relative shrink-0">
            <button
              type="button"
              onMouseEnter={() => setOpenMenu("country")}
              className="flex items-center gap-2 text-[11px] font-normal transition-opacity duration-200 hover:opacity-60 lg:text-[12px]"
            >
              <GlobeIcon />
              <span>{country}</span>
              <Chevron open={openMenu === "country"} />
            </button>

            {openMenu === "country" && (
              <div
                className="absolute left-0 top-full mt-6 w-[220px] bg-white p-5 text-black shadow-2xl"
                onMouseEnter={() => setOpenMenu("country")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Choose your country or region
                </p>

                <div className="space-y-1">
                  {countryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setCountry(option);
                        setOpenMenu(null);
                      }}
                      className={`block w-full px-2 py-2 text-left text-[13px] transition-colors ${
                        option === country
                          ? "bg-neutral-100"
                          : "hover:bg-neutral-100"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <nav className="ml-8 flex min-w-0 flex-1 items-center justify-center gap-5 whitespace-nowrap text-[11px] font-normal lg:ml-12 lg:gap-7 lg:text-[12px]">
            <a
              href="https://www.cosentino.com/usa/colors/"
              className="transition-opacity duration-200 hover:opacity-55"
            >
              Colors
            </a>

            {[
              ["brands", "Our Brands"],
              ["spaces", "Spaces"],
              ["inspiration", "Inspiration"],
            ].map(([menu, label]) => (
              <button
                key={menu}
                type="button"
                onMouseEnter={() => setOpenMenu(menu as OpenMenu)}
                className={`flex items-center gap-1 transition-opacity duration-200 ${
                  openMenu && openMenu !== menu ? "opacity-35" : ""
                }`}
              >
                {label}
                <Chevron open={openMenu === menu} />
              </button>
            ))}

            <a
              href="https://www.cosentino.com/usa/professional/cosentino-city/"
              className="transition-opacity duration-200 hover:opacity-55"
            >
              Showrooms
            </a>

            {[
              ["professionals", "Professionals"],
              ["corporate", "Corporate"],
            ].map(([menu, label]) => (
              <button
                key={menu}
                type="button"
                onMouseEnter={() => setOpenMenu(menu as OpenMenu)}
                className={`flex items-center gap-1 transition-opacity duration-200 ${
                  openMenu && openMenu !== menu ? "opacity-35" : ""
                }`}
              >
                {label}
                <Chevron open={openMenu === menu} />
              </button>
            ))}
          </nav>

          <div className="ml-8 flex shrink-0 items-center gap-5 whitespace-nowrap text-[11px] lg:ml-12 lg:gap-7 lg:text-[12px]">
            <a
              href="https://www.cosentino.com/usa/where-to-buy/"
              className="transition-opacity duration-200 hover:opacity-55"
            >
              Where To Buy
            </a>

            <a
              href="https://we.cosentino.com/home"
              className="transition-opacity duration-200 hover:opacity-55"
            >
              Professional Area
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="block bg-gradient-to-b from-black/40 via-black/10 to-transparent px-5 py-5 md:hidden">
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
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((current) => !current);
              setMobileSubmenu(null);
            }}
            className="flex h-10 w-10 items-center justify-center"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-1 block h-px w-6 bg-white transition-transform duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-px w-6 bg-white transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-5 block h-px w-6 bg-white transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-5 max-h-[calc(100vh-90px)] overflow-y-auto border-t border-white/20 pt-4">
            <div className="space-y-1 pb-5 text-[14px]">

              <a
                href="https://www.cosentino.com/usa/colors/"
                onClick={closeMobileMenu}
                className="block py-3"
              >
                Colors
              </a>

              <div className="border-t border-white/15">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("brands")}
                  className="flex w-full items-center justify-between py-3"
                >
                  <span>Our Brands</span>
                  <Chevron open={mobileSubmenu === "brands"} />
                </button>

                {mobileSubmenu === "brands" && (
                  <div className="pb-3 pl-4">
                    {brands.map((brand) => (
                      <a
                        key={brand.name}
                        href="#"
                        onClick={closeMobileMenu}
                        className="block py-2 text-white/75"
                      >
                        {brand.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/15">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("spaces")}
                  className="flex w-full items-center justify-between py-3"
                >
                  <span>Spaces</span>
                  <Chevron open={mobileSubmenu === "spaces"} />
                </button>

                {mobileSubmenu === "spaces" && (
                  <div className="pb-3 pl-4">
                    {spaces.map((space) => (
                      <a
                        key={space.name}
                        href="#"
                        onClick={closeMobileMenu}
                        className="block py-2 text-white/75"
                      >
                        {space.name}
                      </a>
                    ))}
                </div>
                )}
              </div>

              <div className="border-t border-white/15">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("inspiration")}
                  className="flex w-full items-center justify-between py-3"
                >
                  <span>Inspiration</span>
                  <Chevron open={mobileSubmenu === "inspiration"} />
                </button>

                {mobileSubmenu === "inspiration" && (
                  <div className="pb-3 pl-4">
                    {inspiration.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        onClick={closeMobileMenu}
                        className="block py-2 text-white/75"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="https://www.cosentino.com/usa/professional/cosentino-city/"
                onClick={closeMobileMenu}
                className="block border-t border-white/15 py-3"
              >
                Showrooms
              </a>

              <div className="border-t border-white/15">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("professionals")}
                  className="flex w-full items-center justify-between py-3"
                >
                  <span>Professionals</span>
                  <Chevron open={mobileSubmenu === "professionals"} />
                </button>

                {mobileSubmenu === "professionals" && (
                  <div className="pb-3 pl-4">
                    {professionals.map((item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={closeMobileMenu}
                        className="block py-2 text-white/75"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/15">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("corporate")}
                  className="flex w-full items-center justify-between py-3"
                >
                  <span>Corporate</span>
                  <Chevron open={mobileSubmenu === "corporate"} />
                </button>

                {mobileSubmenu === "corporate" && (
                  <div className="pb-3 pl-4">
                    {corporate.map((item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={closeMobileMenu}
                        className="block py-2 text-white/75"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="https://www.cosentino.com/usa/where-to-buy/"
                onClick={closeMobileMenu}
                className="block border-t border-white/15 py-3"
              >
                Where To Buy
              </a>

              <a
                href="https://we.cosentino.com/home"
                onClick={closeMobileMenu}
                className="block border-t border-white/15 py-3"
              >
                Professional Area
              </a>

              <div className="border-t border-white/15 pt-2">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("country")}
                  className="flex w-full items-center justify-between py-3"
                >
                  <span className="flex items-center gap-2">
                    <GlobeIcon />
                    {country}
                  </span>

                  <Chevron open={mobileSubmenu === "country"} />
                </button>

                {mobileSubmenu === "country" && (
                  <div className="pb-3 pl-4">
                    {countryOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setCountry(option);
                          setMobileSubmenu(null);
                        }}
                        className="block w-full py-2 text-left text-white/75"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DESKTOP MEGA MENUS */}
      <div
        className="hidden md:block"
        onMouseLeave={() => setOpenMenu(null)}
      >
        {openMenu === "brands" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("brands")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-5 gap-6">
                {brands.map((brand) => (
                  <div key={brand.name} className="group">
                    <div className="border border-neutral-200 p-6 transition duration-500 group-hover:bg-neutral-50">
                      <h3 className="text-[24px] font-light tracking-[-0.02em]">
                        {brand.name}
                      </h3>
                      <p className="mt-2 text-[12px] text-neutral-500">
                        {brand.description}
                      </p>
                    </div>

                    <div className="mt-4 space-y-2">
                      {brand.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="flex items-center justify-between border-b border-neutral-200 pb-2 text-[12px] text-neutral-700 transition-colors hover:text-black"
                        >
                          <span>{item}</span>
                          <span className="text-neutral-400">⌟</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {openMenu === "spaces" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("spaces")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-4 gap-6">
                {spaces.map((space) => (
                  <div key={space.name} className="group">
                    <div className="h-[190px] overflow-hidden">
                      <img
                        src={space.image}
                        alt={space.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="text-[20px] font-light">
                        {space.name}
                      </h3>
                      <Chevron />
                    </div>

                    <div className="mt-4 space-y-2">
                      {space.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-[12px] text-neutral-600 transition-colors hover:text-black"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {openMenu === "inspiration" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("inspiration")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-3 gap-6">
                {inspiration.map((item) => (
                  <div key={item.name} className="group">
                    <div className="h-[220px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="text-[20px] font-light">
                        {item.name}
                      </h3>
                      {item.items.length > 0 && <Chevron />}
                    </div>

                    {item.items.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="text-[12px] text-neutral-600 hover:text-black"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {openMenu === "professionals" && (
          <div
            className="border-t border-black/10 bg-white text-black shadow-2xl"
            onMouseEnter={() => setOpenMenu("professionals")}
          >
            <div className="mx-auto max-w-[1650px] px-8 py-10">
              <div className="grid grid-cols-5 gap-5">
                {professionals.map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="group border border-neutral-200 p-7 transition-colors duration-300 hover:bg-neutral-50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[16px] font-light">
                        {item}
                      </span>
                      <span className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {openMenu === "corporate" && (
  <div
    className="border-t border-black/10 bg-white text-black shadow-2xl"
    onMouseEnter={() => setOpenMenu("corporate")}
  >
    <div className="mx-auto max-w-[1650px] px-8 py-10">
      <div className="grid grid-cols-4 gap-6">

        {/* ABOUT US */}
        <a href="#" className="group">
          <div className="h-[200px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
              alt="About Us"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-[20px] font-light">
              About Us
            </h3>

            <span className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </a>

        {/* ENVIRONMENTAL POLICY */}
        <a href="#" className="group">
          <div className="h-[200px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85"
              alt="Environmental Policy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-[20px] font-light">
              Environmental Policy
            </h3>

            <span className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </a>

        {/* WORK WITH US */}
        <a href="#" className="group">
          <div className="h-[200px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85"
              alt="Work With Us"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-[20px] font-light">
              Work With Us
            </h3>

            <span className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </a>

        {/* NEWS */}
        <a href="#" className="group">
          <div className="h-[200px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=85"
              alt="News"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-[20px] font-light">
              News
            </h3>

            <span className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </a>

      </div>
    </div>
  </div>
)}