import Header from "./components/Header";
import Hero from "./components/Hero";

const spaces = [
  {
    title: "Kitchens",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bathrooms",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
];

const products = [
  {
    name: "Dekton",
    description:
      "High-performance surfaces for architecture and design.",
  },
  {
    name: "Silestone",
    description:
      "Innovative surfaces designed for contemporary spaces.",
  },
  {
    name: "Sensa",
    description:
      "Natural stone with exceptional beauty and performance.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* SPACES */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Explore
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Spaces
            </h2>
          </div>

          <a
            href="#"
            className="hidden border-b border-black pb-1 text-sm md:block"
          >
            View all spaces
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {spaces.map((space) => (
            <a
              href="#"
              key={space.title}
              className="group relative h-[450px] overflow-hidden"
            >
              <img
                src={space.image}
                alt={space.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

              <h3 className="absolute bottom-8 left-8 text-3xl font-light text-white">
                {space.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-neutral-100 px-6 py-20 lg:px-12">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Discover
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Our surfaces
          </h2>
        </div>

        <div className="grid gap-px bg-neutral-300 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="bg-neutral-100 p-8 md:p-12"
            >
              <h3 className="text-3xl font-light">
                {product.name}
              </h3>

              <p className="mt-6 leading-7 text-neutral-600">
                {product.description}
              </p>

              <a
                href="#"
                className="mt-10 inline-block border-b border-black pb-1 text-sm"
              >
                Discover more
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* COLORS */}
      <section className="px-6 py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Inspiration
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Colors and textures
              <br />
              for every space.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-neutral-600">
              Explore a wide range of colors, finishes and textures
              designed for contemporary architecture and interiors.
            </p>

            <button className="mt-8 border border-black px-7 py-3 text-sm transition hover:bg-black hover:text-white">
              View colors
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="h-48 bg-stone-300" />
            <div className="h-48 bg-stone-500" />
            <div className="h-48 bg-neutral-800" />
            <div className="h-48 bg-neutral-200" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-6 py-16 text-white lg:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-semibold">
              COSENTINO
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              Surfaces designed for architecture and interior design.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold">
              Explore
            </h4>

            <div className="space-y-3 text-sm text-white/60">
              <p>Kitchens</p>
              <p>Bathrooms</p>
              <p>Facades</p>
              <p>Outdoor</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold">
              Brands
            </h4>

            <div className="space-y-3 text-sm text-white/60">
              <p>Dekton</p>
              <p>Silestone</p>
              <p>Sensa</p>
              <p>Cosentino</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-white/60">
              <p>Showrooms</p>
              <p>Where to buy</p>
              <p>Professional area</p>
              <p>Contact us</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-6 text-xs text-white/50">
          © 2026 Cosentino Clone. Educational project.
        </div>
      </footer>
    </main>
  );
}