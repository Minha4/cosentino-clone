"use client";

import Link from "next/link";
import { useState } from "react";

type Menu =
  | "country"
  | "brands"
  | "spaces"
  | "inspiration"
  | "professionals"
  | "corporate"
  | null;

type MenuItem = {
  name: string;
  href: string;
  image: string;
};

const countries = [
  "USA",
  "United Kingdom",
  "Spain",
  "France",
  "Germany",
  "Australia",
];

const brands: MenuItem[] = [
  {
    name: "Silestone",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dekton",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sensa",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Scalea",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
  },
];

const spaces: MenuItem[] = [
  {
    name: "Kitchens",
    href: "/kitchens",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Bathrooms",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Other interiors",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Outdoor",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
];

const inspiration: MenuItem[] = [
  {
    name: "Inspiration Gallery",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Projects",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Design Tools",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
  },
];

const professionals: MenuItem[] = [
  {
    name: "Services",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Collaborations",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Applications",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Programs",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
];

const corporate: MenuItem[] = [
  {
    name: "About Us",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Environmental Policy",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Work With Us",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "News",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=85",
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
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="1.3"
      />

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

function Arrow({ open }: { open: boolean }) {
  return (
    <span
      className={`inline-block text-[10px] transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      ↓
    </span>
  );
}

function MobileSection({
  title,
  open,
  onClick,
  children,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/15">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left text-sm"
      >
        <span>{title}</span>
        <Arrow open={open} />
      </button>

      {open && <div className="pb-5">{children}</div>}
    </div>
  );
}

export default function Header() {
  const [menu, setMenu] = useState<Menu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<Menu>(null);
  const [country, setCountry] = useState("USA");

  return (
    <header className="fixed left-0 top-0 z-[100] w-full text-white">
      {/* =========================
          DESKTOP HEADER
      ========================== */}
      <div
        className="hidden bg-gradient-to-b from-black/50 to-transparent px-8 py-6 md:block"
        onMouseLeave={() => setMenu(null)}
      >
        <div className="mx-auto flex max-w-[1600px] items-center gap-8">
          {/* LOGO */}
          <Link
            href="/"
            className="shrink-0 text-[20px] font-normal tracking-[-0.07em]"
          >
            COSENTINO
          </Link>

          <span className="h-5 w-px bg-white/70" />

          {/* COUNTRY */}
          <div className="relative shrink-0">
            <button
              type="button"
              onMouseEnter={() => setMenu("country")}
              className="flex items-center gap-2 text-[12px] transition-opacity hover:opacity-60"
            >
              <GlobeIcon />
              <span>{country}</span>
              <Arrow open={menu === "country"} />
            </button>

            {menu === "country" && (
              <div
                className="absolute left-0 top-full mt-5 w-[220px] bg-white p-5 text-black shadow-2xl"
                onMouseEnter={() => setMenu("country")}
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
                        setMenu(null);
                      }}
                      className={`block w-full px-2 py-2 text-left text-[13px] transition ${
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

          {/* NAVIGATION */}
          <nav className="flex flex-1 items-center justify-center gap-7">
            <Link
              href="#"
              className="text-[12px] transition-opacity hover:opacity-60"
            >
              Colors
            </Link>

            <button
              type="button"
              onMouseEnter={() => setMenu("brands")}
              className="flex items-center gap-1 text-[12px] transition-opacity hover:opacity-60"
            >
              Our Brands
              <Arrow open={menu === "brands"} />
            </button>

            {/* SPACES */}
            <button
              type="button"
              onMouseEnter={() => setMenu("spaces")}
              onClick={() =>
                setMenu((current) =>
                  current === "spaces" ? null : "spaces"
                )
              }
              className="flex items-center gap-1 text-[12px] transition-opacity hover:opacity-60"
            >
              Spaces
              <Arrow open={menu === "spaces"} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setMenu("inspiration")}
              className="flex items-center gap-1 text-[12px] transition-opacity hover:opacity-60"
            >
              Inspiration
              <Arrow open={menu === "inspiration"} />
            </button>

            <Link
              href="/contact"
              className="text-[12px] transition-opacity hover:opacity-60"
            >
              Showrooms
            </Link>

            <button
              type="button"
              onMouseEnter={() => setMenu("professionals")}
              className="flex items-center gap-1 text-[12px] transition-opacity hover:opacity-60"
            >
              Professionals
              <Arrow open={menu === "professionals"} />
            </button>

            <button
              type="button"
              onMouseEnter={() => setMenu("corporate")}
              className="flex items-center gap-1 text-[12px] transition-opacity hover:opacity-60"
            >
              Corporate
              <Arrow open={menu === "corporate"} />
            </button>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex shrink-0 gap-6 text-[12px]">
            <Link
              href="#"
              className="transition-opacity hover:opacity-60"
            >
              Where To Buy
            </Link>

            <Link
              href="#"
              className="transition-opacity hover:opacity-60"
            >
              Professional Area
            </Link>
          </div>
        </div>

        {/* =========================
            BRANDS DROPDOWN
        ========================== */}
        {menu === "brands" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-6 px-8 py-10">
              {brands.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">
                      {item.name}
                    </span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* =========================
            SPACES DROPDOWN
        ========================== */}
        {menu === "spaces" && (
          <div
            className="absolute left-0 top-full w-full bg-white text-black"
            onMouseEnter={() => setMenu("spaces")}
          >
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-6 px-8 py-10">
              {spaces.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenu(null)}
                    className="group"
                  >
                    <div className="h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-light">
                        {item.name}
                      </span>
                      <span>→</span>
                    </div>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group"
                  >
                    <div className="h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-light">
                        {item.name}
                      </span>
                      <span>→</span>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        )}

        {/* =========================
            INSPIRATION DROPDOWN
        ========================== */}
        {menu === "inspiration" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-3 gap-6 px-8 py-10">
              {inspiration.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">
                      {item.name}
                    </span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* =========================
            PROFESSIONALS DROPDOWN
        ========================== */}
        {menu === "professionals" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-6 px-8 py-10">
              {professionals.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">
                      {item.name}
                    </span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* =========================
            CORPORATE DROPDOWN
        ========================== */}
        {menu === "corporate" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-6 px-8 py-10">
              {corporate.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">
                      {item.name}
                    </span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =========================
          MOBILE HEADER
      ========================== */}
      <div className="bg-gradient-to-b from-black/50 to-transparent px-5 py-5 md:hidden">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-[19px] tracking-[-0.07em]"
          >
            COSENTINO
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileMenu(null);
            }}
            className="relative h-10 w-10"
          >
            <span
              className={`absolute left-2 top-3 h-px w-6 bg-white transition ${
                mobileOpen
                  ? "translate-y-2 rotate-45"
                  : ""
              }`}
            />

            <span
              className={`absolute left-2 top-5 h-px w-6 bg-white transition ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-2 top-7 h-px w-6 bg-white transition ${
                mobileOpen
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-4 max-h-[calc(100vh-90px)] overflow-y-auto border-t border-white/20 pt-2">
            <Link
              href="#"
              className="block border-b border-white/15 py-4 text-sm"
            >
              Colors
            </Link>

            <MobileSection
              title="Our Brands"
              open={mobileMenu === "brands"}
              onClick={() =>
                setMobileMenu(
                  mobileMenu === "brands"
                    ? null
                    : "brands"
                )
              }
            >
              <div className="grid grid-cols-2 gap-3">
                {brands.map((item) => (
                  <a key={item.name} href={item.href}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full object-cover"
                    />
                    <p className="mt-2 text-xs">
                      {item.name}
                    </p>
                  </a>
                ))}
              </div>
            </MobileSection>

            <MobileSection
              title="Spaces"
              open={mobileMenu === "spaces"}
              onClick={() =>
                setMobileMenu(
                  mobileMenu === "spaces"
                    ? null
                    : "spaces"
                )
              }
            >
              <div className="grid grid-cols-2 gap-3">
                {spaces.map((item) =>
                  item.href === "/kitchens" ? (
                    <Link
                      key={item.name}
                      href="/kitchens"
                      onClick={() => {
                        setMobileMenu(null);
                        setMobileOpen(false);
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-28 w-full object-cover"
                      />

                      <p className="mt-2 text-xs">
                        {item.name}
                      </p>
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-28 w-full object-cover"
                      />

                      <p className="mt-2 text-xs">
                        {item.name}
                      </p>
                    </a>
                  )
                )}
              </div>
            </MobileSection>

            <MobileSection
              title="Inspiration"
              open={mobileMenu === "inspiration"}
              onClick={() =>
                setMobileMenu(
                  mobileMenu === "inspiration"
                    ? null
                    : "inspiration"
                )
              }
            >
              <div className="grid grid-cols-1 gap-3">
                {inspiration.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-32 w-full object-cover"
                    />

                    <p className="mt-2 text-xs">
                      {item.name}
                    </p>
                  </a>
                ))}
              </div>
            </MobileSection>

            <Link
              href="/contact"
              className="block border-b border-white/15 py-4 text-sm"
            >
              Showrooms
            </Link>

            <MobileSection
              title="Professionals"
              open={mobileMenu === "professionals"}
              onClick={() =>
                setMobileMenu(
                  mobileMenu === "professionals"
                    ? null
                    : "professionals"
                )
              }
            >
              <div className="grid grid-cols-2 gap-3">
                {professionals.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full object-cover"
                    />

                    <p className="mt-2 text-xs">
                      {item.name}
                    </p>
                  </a>
                ))}
              </div>
            </MobileSection>

            <MobileSection
              title="Corporate"
              open={mobileMenu === "corporate"}
              onClick={() =>
                setMobileMenu(
                  mobileMenu === "corporate"
                    ? null
                    : "corporate"
                )
              }
            >
              <div className="grid grid-cols-2 gap-3">
                {corporate.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full object-cover"
                    />

                    <p className="mt-2 text-xs">
                      {item.name}
                    </p>
                  </a>
                ))}
              </div>
            </MobileSection>

            <a
              href="#"
              className="block border-b border-white/15 py-4 text-sm"
            >
              Where To Buy
            </a>

            <a
              href="#"
              className="block border-b border-white/15 py-4 text-sm"
            >
              Professional Area
            </a>

            {/* MOBILE COUNTRY */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() =>
                  setMobileMenu(
                    mobileMenu === "country"
                      ? null
                      : "country"
                  )
                }
                className="flex w-full items-center justify-between py-4 text-sm"
              >
                <span className="flex items-center gap-2">
                  <GlobeIcon />
                  {country}
                </span>

                <Arrow
                  open={mobileMenu === "country"}
                />
              </button>

              {mobileMenu === "country" && (
                <div className="pb-4 pl-6">
                  {countries.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setCountry(item);
                        setMobileMenu(null);
                      }}
                      className={`block py-2 text-left text-[13px] ${
                        item === country
                          ? "text-white"
                          : "text-white/70"
                      }`}
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