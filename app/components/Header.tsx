"use client";

import { useState } from "react";

type Menu =
  | "brands"
  | "spaces"
  | "inspiration"
  | "professionals"
  | "corporate"
  | null;

const brands = [
  {
    name: "Silestone",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dekton",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sensa",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Scalea",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
  },
];

const spaces = [
  {
    name: "Kitchens",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Bathrooms",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Other interiors",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
];

const inspiration = [
  {
    name: "Inspiration Gallery",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Projects",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Design Tools",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
  },
];

const professionals = [
  {
    name: "Services",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Collaborations",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Applications",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Programs",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
];

const corporate = [
  {
    name: "About Us",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Environmental Policy",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Work With Us",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "News",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=85",
  },
];

function Arrow({ open }: { open: boolean }) {
  return (
    <span
      className={`inline-block text-[10px] transition-transform ${
        open ? "rotate-180" : ""
      }`}
    >
      ↓
    </span>
  );
}

export default function Header() {
  const [menu, setMenu] = useState<Menu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState<Menu>(null);

  const toggleMenu = (name: Menu) => {
    setMenu(menu === name ? null : name);
  };

  const toggleMobileMenu = (name: Menu) => {
    setMobileMenu(mobileMenu === name ? null : name);
  };

  return (
    <header className="fixed left-0 top-0 z-[100] w-full text-white">
      {/* DESKTOP */}
      <div
        className="hidden bg-gradient-to-b from-black/40 to-transparent px-8 py-6 md:block"
        onMouseLeave={() => setMenu(null)}
      >
        <div className="mx-auto flex max-w-[1600px] items-center gap-8">
          <a
            href="https://www.cosentino.com/usa/"
            className="shrink-0 text-[20px] font-normal tracking-[-0.07em]"
          >
            COSENTINO
          </a>

          <span className="h-5 w-px bg-white/70" />

          <button
            type="button"
            className="shrink-0 text-[12px]"
            onMouseEnter={() => setMenu(null)}
          >
            USA
          </button>

          <nav className="flex flex-1 items-center justify-center gap-7">
            <a href="#" className="text-[12px] hover:opacity-60">
              Colors
            </a>

            <button
              type="button"
              onMouseEnter={() => toggleMenu("brands")}
              className="flex items-center gap-1 text-[12px] hover:opacity-60"
            >
              Our Brands
              <Arrow open={menu === "brands"} />
            </button>

            <button
              type="button"
              onMouseEnter={() => toggleMenu("spaces")}
              className="flex items-center gap-1 text-[12px] hover:opacity-60"
            >
              Spaces
              <Arrow open={menu === "spaces"} />
            </button>

            <button
              type="button"
              onMouseEnter={() => toggleMenu("inspiration")}
              className="flex items-center gap-1 text-[12px] hover:opacity-60"
            >
              Inspiration
              <Arrow open={menu === "inspiration"} />
            </button>

            <a href="#" className="text-[12px] hover:opacity-60">
              Showrooms
            </a>

            <button
              type="button"
              onMouseEnter={() => toggleMenu("professionals")}
              className="flex items-center gap-1 text-[12px] hover:opacity-60"
            >
              Professionals
              <Arrow open={menu === "professionals"} />
            </button>

            <button
              type="button"
              onMouseEnter={() => toggleMenu("corporate")}
              className="flex items-center gap-1 text-[12px] hover:opacity-60"
            >
              Corporate
              <Arrow open={menu === "corporate"} />
            </button>
          </nav>

          <div className="flex shrink-0 gap-6 text-[12px]">
            <a href="#" className="hover:opacity-60">
              Where To Buy
            </a>
            <a href="#" className="hover:opacity-60">
              Professional Area
            </a>
          </div>
        </div>

        {/* BRANDS */}
        {menu === "brands" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-6 px-8 py-10">
              {brands.map((item) => (
                <a key={item.name} href="#" className="group">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">{item.name}</span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* SPACES */}
        {menu === "spaces" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-6 px-8 py-10">
              {spaces.map((item) => (
                <a key={item.name} href="#" className="group">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">{item.name}</span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* INSPIRATION */}
        {menu === "inspiration" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-3 gap-6 px-8 py-10">
              {inspiration.map((item) => (
                <a key={item.name} href="#" className="group">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">{item.name}</span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* PROFESSIONALS */}
        {menu === "professionals" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-6 px-8 py-10">
              {professionals.map((item) => (
                <a key={item.name} href="#" className="group">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">{item.name}</span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CORPORATE */}
        {menu === "corporate" && (
          <div className="absolute left-0 top-full w-full bg-white text-black">
            <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-6 px-8 py-10">
              {corporate.map((item) => (
                <a key={item.name} href="#" className="group">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-light">{item.name}</span>
                    <span>→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE */}
      <div className="bg-gradient-to-b from-black/40 to-transparent px-5 py-5 md:hidden">
        <div className="flex items-center justify-between">
          <a
            href="https://www.cosentino.com/usa/"
            className="text-[19px] tracking-[-0.07em]"
          >
            COSENTINO
          </a>

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
          <div className="mt-4 max-h-[calc(100vh-90px)] overflow-y-auto border-t border-white/20 pt-2">
            <a
              href="#"
              className="block border-b border-white/15 py-4 text-sm"
            >
              Colors
            </a>

            <MobileSection
              title="Our Brands"
              open={mobileMenu === "brands"}
              onClick={() => toggleMobileMenu("brands")}
            >
              <div className="grid grid-cols-2 gap-3">
                {brands.map((item) => (
                  <a href="#" key={item.name}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full object-cover"
                    />
                    <p className="mt-2 text-xs">{item.name}</p>
                  </a>
                ))}
              </div>
            </MobileSection>

            <MobileSection
              title="Spaces"
              open={mobileMenu === "spaces"}
              onClick={() => toggleMobileMenu("spaces")}
            >
              <div className="grid grid-cols-2 gap-3">
                {spaces.map((item) => (
                  <a href="#" key={item.name}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full object-cover"
                    />
                    <p className="mt-2 text-xs">{item.name}</p>
                  </a>
                ))}
              </div>
            </MobileSection>

            <MobileSection
              title="Inspiration"
              open={mobileMenu === "inspiration"}
              onClick={() => toggleMobileMenu("inspiration")}
            >
              <div className="grid grid-cols-1 gap-3">
                {inspiration.map((item) => (
                  <a href="#" key={item.name}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-32 w-full object-cover"
                    />
                    <p className="mt-2 text-xs">{item.name}</p>
                  </a>
                ))}
              </div>
            </MobileSection>

            <a
              href="#"
              className="block border-b border-white/15 py-4 text-sm"
            >
              Showrooms
            </a>

            <MobileSection
              title="Professionals"
              open={mobileMenu === "professionals"}
              onClick={() => toggleMobileMenu("professionals")}
            >
              <div className="grid grid-cols-2 gap-3">
                {professionals.map((item) => (
                  <a href="#" key={item.name}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full object-cover"
                    />
                    <p className="mt-2 text-xs">{item.name}</p>
                  </a>
                ))}
              </div>
            </MobileSection>

            <MobileSection
              title="Corporate"
              open={mobileMenu === "corporate"}
              onClick={() => toggleMobileMenu("corporate")}
            >
              <div className="grid grid-cols-2 gap-3">
                {corporate.map((item) => (
                  <a href="#" key={item.name}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full object-cover"
                    />
                    <p className="mt-2 text-xs">{item.name}</p>
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

            <a href="#" className="block py-4 text-sm">
              USA
            </a>
          </div>
        )}
      </div>
    </header>
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