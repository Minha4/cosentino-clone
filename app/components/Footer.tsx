export default function Footer() {
  return (
    <footer className="bg-[#3C3C3B] px-8 py-16 text-white">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="text-2xl font-light tracking-tight">
          COSENTINO
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm text-white">
              Corporate
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="/about-us/"
                className="text-xs text-white/60 hover:text-white"
              >
                About us
              </a>

              <a
                href="/contact/"
                className="text-xs text-white/60 hover:text-white"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                R&D and Innovation
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm text-white">
              Customer Support
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                Warranty | Silestone
              </a>

              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                Warranty | Dekton
              </a>

              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                Ethics & Compliance
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm text-white">
              Professional Area
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                Architects
              </a>

              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                Fabricators
              </a>

              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                Cosentino City
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm text-white">
              Resources
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                C Magazine
              </a>

              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                Technical documentation
              </a>

              <a
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                News
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6">
          <p className="text-xs text-white/40">
            Cosentino Global, S.L.U. All rights reserved
          </p>

          <div className="mt-4 flex gap-6">
            <a
              href="/privacy-policy/"
              className="text-xs text-white/40 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/cookie-policy/"
              className="text-xs text-white/40 hover:text-white"
            >
              Cookie Policy
            </a>

            <a
              href="/sitemap/"
              className="text-xs text-white/40 hover:text-white"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}