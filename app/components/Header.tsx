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
    items: [
      "Countertops",
      "Cladding and coverings",
      "Sinks",
      "Floors",
      "Furniture",
    ],
  },
  {
    name: "Bathrooms",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    items: [
      "Countertops",
      "Bathroom sinks",
      "Shower trays",
      "Cladding",
      "Floors",
    ],
  },
  {
    name: "Other interiors",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    items: [
      "Furniture",
      "Flooring",
      "Cladding",
      "Tables",
      "Interior applications",
    ],
  },
  {
    name: "Outdoors",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    items: [
      "Facades",
      "Outdoor kitchens",
      "Outdoor flooring",
      "Furniture",
      "Pools",
    ],
  },
];

const inspiration = [
  {
    name: "Inspiration Gallery",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    items: [
      "Bathrooms",
      "Kitchens",
      "Interior spaces",
      "Outdoors",
      "Facades",
      "Commercial",
    ],
  },
  {
    name: "Projects",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    items: [
      "Residential",
      "Commercial",
      "Hospitality",
      "Architecture",
    ],
  },
  {
    name: "Design Tools",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    items: [
      "Kitchen visualizer",
      "Bathroom visualizer",
      "Moodboards",
      "Color tools",
    ],
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

function MenuButton({
  label,
  menu,
  openMenu,
  setOpenMenu,
}: {
  label: string;
  menu: Exclude<MenuName, "country" | null>;
  openMenu: MenuName;
  setOpenMenu: (menu: MenuName) => void;
}) {
  const active = openMenu === menu;

  return (
    <button
      type="button"
      onMouseEnter={() => setOpenMenu(menu)}
      className={`flex items-center gap-1 text-[12px] transition-opacity duration-300 ${
        openMenu && !active ? "opacity-35" : "opacity-100"
      } hover:opacity-60`}
    >
      {label}
      <Chevron open={active} />
    </button>
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
      {/* =========================
          DESKTOP HEADER
      ========================== */}
      <div
        className="hidden bg-gradient-to-b from-black/35 via-black/10 to-transparent px-8 pb-8 pt-7 md:block"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="mx-auto flex max-w-[1650px] items-center">

          {/* LOGO */}
          <a
            href="https://www.cosentino.com/usa/"
            className="shrink-0 text-[20px] font-normal leading-none tracking-[-0.075em]"
          >
            COSENTINO
          </a>

          {/* DIVIDER */}
          <span className="mx-5 h-[18px] w-px bg-white/80" />

          {/* COUNTRY */}
          <div className="relative shrink-0">
            <button
              type="button"
              onMouseEnter={() => setOpenMenu("country")}
              className="flex items-center gap-2 text-[12px] transition-opacity duration-300 hover:opacity-60"
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

          {/* MAIN NAV */}
          <nav className="ml-12 flex flex-1 items-center justify-center gap-7 whitespace-nowrap">
            <a
              href="https://www.cosentino.com/usa/colors/"
              className="text-[12px] transition-opacity hover:opacity-60"
            >
              Colors
            </a>

            <MenuButton
              label="Our Brands"
              menu="brands"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />

            <MenuButton
              label="Spaces"
              menu="spaces"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />

            <MenuButton
              label="Inspiration"
              menu="inspiration"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />

            <a
              href="https://www.cosentino.com/usa/professional/cosentino-city/"
              className="text-[12px] transition-opacity hover:opacity-60"
            >
              Showrooms
            </a>

            <MenuButton
              label="Professionals"
              menu="professionals"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />

            <MenuButton
              label="Corporate"
              menu="corporate"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          </nav>

          {/* RIGHT NAV */}
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
      </div>

      {/* =========================
          DESKTOP MEGA MENUS
      ========================== */}

      {/* BRANDS */}
      {openMenu === "brands" && (
        <div
          className="hidden border-t border-black/10 bg-white text-black shadow-2xl md:block"
          onMouseEnter={() => setOpenMenu("brands")}
        >
          <div className="mx-auto max-w-[1650px] px-8 py-10">
            <div className="grid grid-cols-5 gap-5">
              {brands.map((brand) => (
                <a
                  href="#"
                  key={brand.name}
                  className="group"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/5" />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-[20px] font-light">
                      {brand.name}
                    </h3>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-[12px] leading-5 text-neutral-500">
                    {brand.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SPACES */}
      {openMenu === "spaces" && (
        <div
          className="hidden border-t border-black/10 bg-white text-black shadow-2xl md:block"
          onMouseEnter={() => setOpenMenu("spaces")}
        >
          <div className="mx-auto max-w-[1650px] px-8 py-10">
            <div className="grid grid-cols-4 gap-6">
              {spaces.map((space) => (
                <div key={space.name} className="group">
                  <div className="h-[210px] overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-[20px] font-light">
                      {space.name}
                    </h3>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                    {space.items.map((item) => (
                      <a
                        href="#"
                        key={item}
                        className="text-[12px] text-neutral-500 transition hover:text-black"
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

      {/* INSPIRATION */}
      {openMenu === "inspiration" && (
        <div
          className="hidden border-t border-black/10 bg-white text-black shadow-2xl md:block"
          onMouseEnter={() => setOpenMenu("inspiration")}
        >
          <div className="mx-auto max-w-[1650px] px-8 py-10">
            <div className="grid grid-cols-3 gap-6">
              {inspiration.map((item) => (
                <div key={item.name} className="group">
                  <div className="h-[230px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-[21px] font-light">
                      {item.name}
                    </h3>

                    <span>→</span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                    {item.items.map((subItem) => (
                      <a
                        href="#"
                        key={subItem}
                        className="text-[12px] text-neutral-500 transition hover:text-black"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PROFESSIONALS */}
      {openMenu === "professionals" && (
        <div
          className="hidden border-t border-black/10 bg-white text-black shadow-2xl md:block"
          onMouseEnter={() => setOpenMenu("professionals")}
        >
          <div className="mx-auto max-w-[1650px] px-8 py-10">
            <div className="grid grid-cols-5 gap-5">
              {professionals.map((item) => (
                <a
                  href="#"
                  key={item.name}
                  className="group"
                >
                  <div className="h-[195px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-[18px] font-light">
                      {item.name}
                    </h3>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
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

      {/* CORPORATE */}
      {openMenu === "corporate" && (
        <div
          className="hidden border-t border-black/10 bg-white text-black shadow-2xl md:block"
          onMouseEnter={() => setOpenMenu("corporate")}
        >
          <div className="mx-auto max-w-[1650px] px-8 py-10">
            <div className="grid grid-cols-4 gap-6">
              {corporate.map((item) => (
                <a
                  href="#"
                  key={item.name}
                  className="group"
                >
                  <div className="h-[220px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-[20px] font-light">
                      {item.name}
                    </h3>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
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

      {/* =========================
          MOBILE HEADER
      ========================== */}
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
            onClick={() => {
              setMobileOpen((current) => !current);
              setMobileSubmenu(null);
            }}
            className="relative h-10 w-10"
          >
            <span
              className={`absolute left-2 top-3 h-px w-6 bg-white transition duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-2 top-5 h-px w-6 bg-white transition duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-2 top-7 h-px w-6 bg-white transition duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-5 max-h-[calc(100vh-90px)] overflow-y-auto border-t border-white/20 pt-3">
            {/* COLORS */}
            <a
              href="https://www.cosentino.com/usa/colors/"
              onClick={closeMobile}
              className="block border-b border-white/15 py-4 text-[14px]"
            >
              Colors
            </a>

            {/* BRANDS */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("brands")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                <span>Our Brands</span>
                <Chevron open={mobileSubmenu === "brands"} />
              </button>

              {mobileSubmenu === "brands" && (
                <div className="grid grid-cols-2 gap-3 pb-5">
                  {brands.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      onClick={closeMobile}
                      className="group"
                    >
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <p className="mt-2 text-[12px]">
                        {item.name}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* SPACES */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("spaces")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                <span>Spaces</span>
                <Chevron open={mobileSubmenu === "spaces"} />
              </button>

              {mobileSubmenu === "spaces" && (
                <div className="grid grid-cols-2 gap-3 pb-5">
                  {spaces.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      onClick={closeMobile}
                      className="group"
                    >
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <p className="mt-2 text-[12px]">
                        {item.name}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* INSPIRATION */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("inspiration")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                <span>Inspiration</span>
                <Chevron open={mobileSubmenu === "inspiration"} />
              </button>

              {mobileSubmenu === "inspiration" && (
                <div className="grid grid-cols-1 gap-4 pb-5">
                  {inspiration.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      onClick={closeMobile}
                      className="group"
                    >
                      <div className="h-36 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <p className="mt-2 text-[13px]">
                        {item.name}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* SHOWROOMS */}
            <a
              href="https://www.cosentino.com/usa/professional/cosentino-city/"
              onClick={closeMobile}
              className="block border-b border-white/15 py-4 text-[14px]"
            >
              Showrooms
            </a>

            {/* PROFESSIONALS */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("professionals")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                <span>Professionals</span>
                <Chevron open={mobileSubmenu === "professionals"} />
              </button>

              {mobileSubmenu === "professionals" && (
                <div className="grid grid-cols-2 gap-3 pb-5">
                  {professionals.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      onClick={closeMobile}
                      className="group"
                    >
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <p className="mt-2 text-[12px]">
                        {item.name}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* CORPORATE */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu("corporate")}
                className="flex w-full items-center justify-between py-4 text-[14px]"
              >
                <span>Corporate</span>
                <Chevron open={mobileSubmenu === "corporate"} />
              </button>

              {mobileSubmenu === "corporate" && (
                <div className="grid grid-cols-2 gap-3 pb-5">
                  {corporate.map((item) => (
                    <a
                      href="#"
                      key={item.name}
                      onClick={closeMobile}
                      className="group"
                    >
                      <div className="h-28 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <p className="mt-2 text-[12px]">
                        {item.name}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* WHERE TO BUY */}
            <a
              href="https://www.cosentino.com/usa/where-to-buy/"
              onClick={closeMobile}
              className="block border-b border-white/15 py-4 text-[14px]"
            >
              Where To Buy
            </a>

            {/* PROFESSIONAL AREA */}
            <a
              href="https://we.cosentino.com/home"
              onClick={closeMobile}
              className="block border-b border-white/15 py-4 text-[14px]"
            >
              Professional Area
            </a>

            {/* COUNTRY */}
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
                      className="block py-2 text-left text-[13px] text-white/75"
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