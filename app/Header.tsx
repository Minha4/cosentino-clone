"use client";

import { useState } from "react";

type MenuName =
  | "brands"
  | "spaces"
  | "inspiration"
  | "professionals"
  | "corporate"
  | null;

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
    name: "Eclos",
    description: "Layered mineral surface",
    items: ["About Eclos", "Eclos applications", "Eclos news"],
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
    items: ["Facades", "Outdoor kitchens", "Outdoor flooring", "Outdoor furniture"],
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
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
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

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);

  const openMenu = (menu: MenuName) => {
    setActiveMenu(menu);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className="fixed left-0 top-0 z-[100] w-full text-white"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="bg-gradient-to-b from-black/30 via-black/10 to-transparent px-8 py-7">
          <div className="mx-auto flex w-full max-w-[1650px] items-center">

            {/* LOGO */}
            <a
              href="https://www.cosentino.com/usa/"
              className="shrink-0 text-[22px] font-normal leading-none tracking-[-0.07em] transition-opacity duration-300 hover:opacity-70"
            >
              COSENTINO
            </a>

            {/* DIVIDER */}
            <span className="mx-5 h-5 w-px bg-white/80" />

            {/* COUNTRY */}
            <button
              type="button"
              className="flex shrink-0 items-center gap-2 text-[13px] transition-opacity duration-300 hover:opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.5 2.5 2.5 15.5 0 18" />
                <path d="M12 3c-2.5 2.5-2.5 15.5 0 18" />
              </svg>

              <span>USA</span>
            </button>

            {/* MAIN NAVIGATION */}
            <nav className="ml-9 flex min-w-0 flex-1 items-center justify-center gap-5 whitespace-nowrap text-[13px]">

              {/* COLORS */}
              <a
                href="https://www.cosentino.com/usa/colors/"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                Colors
              </a>

              {/* OUR BRANDS */}
              <button
                type="button"
                onMouseEnter={() => openMenu("brands")}
                className={`flex items-center gap-1 transition-opacity duration-300 ${
                  activeMenu && activeMenu !== "brands"
                    ? "opacity-35"
                    : "opacity-100"
                }`}
              >
                Our Brands
                <span className="text-[10px]">⌄</span>
              </button>

              {/* SPACES */}
              <button
                type="button"
                onMouseEnter={() => openMenu("spaces")}
                className={`flex items-center gap-1 transition-opacity duration-300 ${
                  activeMenu && activeMenu !== "spaces"
                    ? "opacity-35"
                    : "opacity-100"
                }`}
              >
                Spaces
                <span className="text-[10px]">⌄</span>
              </button>

              {/* INSPIRATION */}
              <button
                type="button"
                onMouseEnter={() => openMenu("inspiration")}
                className={`flex items-center gap-1 transition-opacity duration-300 ${
                  activeMenu && activeMenu !== "inspiration"
                    ? "opacity-35"
                    : "opacity-100"
                }`}
              >
                Inspiration
                <span className="text-[10px]">⌄</span>
              </button>

              {/* SHOWROOMS */}
              <a
                href="https://www.cosentino.com/usa/professional/cosentino-city/"
                className={`transition-opacity duration-300 ${
                  activeMenu ? "opacity-35" : "hover:opacity-50"
                }`}
              >
                Showrooms
              </a>

              {/* PROFESSIONALS */}
              <button
                type="button"
                onMouseEnter={() => openMenu("professionals")}
                className={`flex items-center gap-1 transition-opacity duration-300 ${
                  activeMenu && activeMenu !== "professionals"
                    ? "opacity-35"
                    : "opacity-100"
                }`}
              >
                Professionals
                <span className="text-[10px]">⌄</span>
              </button>

              {/* CORPORATE */}
              <button
                type="button"
                onMouseEnter={() => openMenu("corporate")}
                className={`flex items-center gap-1 transition-opacity duration-300 ${
                  activeMenu && activeMenu !== "corporate"
                    ? "opacity-35"
                    : "opacity-100"
                }`}
              >
                Corporate
                <span className="text-[10px]">⌄</span>
              </button>
            </nav>

            {/* RIGHT SIDE */}
            <div className="ml-8 flex shrink-0 items-center gap-5 whitespace-nowrap text-[13px]">
              <a
                href="https://www.cosentino.com/usa/where-to-buy/"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                Where To Buy
              </a>

              <a
                href="https://we.cosentino.com/home"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                Professional Area
              </a>
            </div>
          </div>
        </div>

        {/* MEGA MENU */}
        {activeMenu && (
          <div
            className="absolute left-0 top-full w-full bg-white text-neutral-900 shadow-xl"
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            {/* OUR BRANDS */}
            {activeMenu === "brands" && (
              <div className="mx-auto max-w-[1650px] px-8 py-10">
                <div className="grid grid-cols-5 gap-5">
                  {brands.map((brand) => (
                    <div key={brand.name} className="group">
                      <div className="border border-neutral-300 p-7 transition-all duration-500 group-hover:bg-neutral-100">
                        <h3 className="text-2xl font-light">
                          {brand.name}
                        </h3>

                        <p className="mt-3 text-xs text-neutral-500">
                          {brand.description}
                        </p>
                      </div>

                      <div className="mt-5 space-y-3">
                        {brand.items.map((item) => (
                          <a
                            href="#"
                            key={item}
                            className="flex items-center justify-between border-b border-neutral-200 pb-2 text-sm hover:text-neutral-500"
                          >
                            {item}
                            <span>⌟</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SPACES */}
            {activeMenu === "spaces" && (
              <div className="mx-auto max-w-[1650px] px-8 py-10">
                <div className="grid grid-cols-4 gap-5">
                  {spaces.map((space) => (
                    <div key={space.name} className="group">
                      <div className="h-[210px] overflow-hidden">
                        <img
                          src={space.image}
                          alt={space.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <h3 className="text-xl font-light">
                          {space.name}
                        </h3>

                        <span className="text-lg">⌄</span>
                      </div>

                      <div className="mt-4 space-y-2">
                        {space.items.map((item) => (
                          <a
                            href="#"
                            key={item}
                            className="block text-sm text-neutral-600 transition-colors hover:text-black"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* INSPIRATION */}
            {activeMenu === "inspiration" && (
              <div className="mx-auto max-w-[1650px] px-8 py-10">
                <div className="grid grid-cols-3 gap-6">
                  {inspiration.map((item) => (
                    <div key={item.name} className="group">
                      <div className="h-[230px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <h3 className="text-xl font-light">
                          {item.name}
                        </h3>

                        {item.items.length > 0 && (
                          <span className="text-lg">⌄</span>
                        )}
                      </div>

                      {item.items.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          {item.items.map((subItem) => (
                            <a
                              href="#"
                              key={subItem}
                              className="text-sm text-neutral-600 hover:text-black"
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
            )}

            {/* PROFESSIONALS */}
            {activeMenu === "professionals" && (
              <div className="mx-auto max-w-[1650px] px-8 py-10">
                <div className="grid grid-cols-5 gap-8">
                  {professionals.map((item) => (
                    <a
                      href="#"
                      key={item}
                      className="border border-neutral-200 p-7 transition-all duration-300 hover:bg-neutral-100"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-light">
                          {item}
                        </span>

                        <span>⌟</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* CORPORATE */}
            {activeMenu === "corporate" && (
              <div className="mx-auto max-w-[1650px] px-8 py-10">
                <div className="grid grid-cols-4 gap-6">
                  {corporate.map((item) => (
                    <a
                      href="#"
                      key={item}
                      className="border border-neutral-200 p-8 transition-all duration-300 hover:bg-neutral-100"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-light">
                          {item}
                        </span>

                        <span>⌟</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}