const footerColumns = [
  {
    title: "Corporate",
    items: [
      ["About us", "/about-us/", true],
      ["R&D and Innovation", "https://www.cosentino.com/usa/innovation/", false],
      ["Safety at Cosentino", "https://www.cosentino.com/usa/safety-at-cosentino/", false],
      ["Cosentino Safety Space", "https://osh.cosentino.com/", false],
      [
        "Sustainability Report 2023",
        "https://static.cosentino.com/ESG/2023/Sustainability-2023.pdf",
        false,
      ],
      [
        "EINF 2025",
        "https://assetstools.cosentino.com/api/v1/bynder/doc/0D67A72D-5C67-48F7-9B9A86AFAFD7A0DF/EINF-2025-EN.pdf",
        false,
      ],
      ["CT Quarry", "https://www.cosentino.com/landings/ctquarry/", false],
      ["Silestone Institute", "https://silestoneinstitute.com/en/", false],
      ["Eduarda Justo Foundation", "https://fundacioneduardajusto.es/", false],
    ],
  },

  {
    title: "Customer Support",
    items: [
      ["Contact", "/contact/", true],
      ["Warranty | Silestone", "https://www.cosentino.com/usa/silestone/warranty/", false],
      [
        "Warranty | Dekton",
        "https://www.cosentino.com/usa/dekton/dekton-25-year-warranty-cosentino/",
        false,
      ],
      ["Warranty | Eclos", "https://www.cosentino.com/usa/eclos/warranty-eclos/", false],
      ["Warranty | Sensa", "https://www.cosentino.com/usa/sensa/warranty/", false],
      ["General Conditions of Sale", "https://www.cosentino.com/cgv/", false],
      ["Ethics & Compliance", "https://www.cosentino.com/usa/ethics-compliance/", false],
      ["Ethics Channel", "https://www.cosentino.com/usa/ethical-channel/", false],
    ],
  },

  {
    title: "Service Provider",
    items: [
      ["Supplier Portal", "https://apps.cosentino.com/supplier/tabs/home", false],
      [
        "General Purchase Conditions",
        "https://assetstools.cosentino.com/api/v1/bynder/doc/111A9314-D0CF-4AC6-A2EE07D45C4FD4D0/gpc.pdf",
        false,
      ],
    ],
  },

  {
    title: "Professional Area",
    items: [
      ["Designers – CTOP", "https://www.cosentino.com/usa/professional/designers/", false],
      ["Architects", "https://www.cosentino.com/usa/professional/architects/", false],
      ["Fabricators", "https://www.cosentino.com/usa/professional/fabricators/", false],
      [
        "Kitchen & bath studios",
        "https://www.cosentino.com/usa/professional/kitchen-studios/",
        false,
      ],
      [
        "Installers reformers",
        "https://www.cosentino.com/usa/professional/installers-reformers/",
        false,
      ],
      ["Cosentino Center", "https://www.cosentino.com/usa/cosentino-center/", false],
      [
        "Cosentino City",
        "https://www.cosentino.com/usa/professional/cosentino-city/",
        false,
      ],
      ["Service Provider", "https://app.cosentino.com/supplier/tabs/home", false],
    ],
  },

  {
    title: "Resources",
    items: [
      ["C Magazine", "https://www.cosentino.com/usa/c-magazine/", false],
      ["C-Top Magazine", "https://www.cosentino.com/usa/c-top-magazine/", false],
      [
        "Technical documentation",
        "https://www.cosentino.com/usa/professional/technical-documentation/",
        false,
      ],
    ],
  },

  {
    title: "Employment",
    items: [
      ["Join Cosentino", "https://jobs.cosentino.com/?locale=en_US", false],
      [
        "Transparency in Coverage",
        "https://www.cigna.com/legal/compliance/machine-readable-files",
        false,
      ],
    ],
  },

  {
    title: "Press Room",
    items: [
      ["News", "https://www.cosentino.com/usa/news/", false],
      ["Media Contact", "mailto:presscosentino@cosentino.com", false],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#171717] px-6 py-14 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1320px]">

        {/* FOOTER COLUMNS */}
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-[16px] font-medium">
                {column.title}
              </h3>

              <div className="space-y-3">
                {column.items.map(([label, href, internal]) => (
                  <a
                    key={label}
                    href={href}
                    {...(!internal && href.startsWith("http")
                      ? {
                          target: "_blank",
                          rel: "noreferrer",
                        }
                      : {})}
                    className="block text-[16px] leading-6 text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FOLLOW US */}
        <div className="mt-14 border-t border-white/15 pt-8">
          <p className="mb-4 text-[16px] text-white/60">
            Follow us:
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.instagram.com/grupocosentino/"
              target="_blank"
              rel="noreferrer"
              className="text-[16px] text-white/60 transition-colors hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/CosentinoInternational"
              target="_blank"
              rel="noreferrer"
              className="text-[16px] text-white/60 transition-colors hover:text-white"
            >
              Facebook
            </a>

            <a
              href="https://www.linkedin.com/company/cosentino/"
              target="_blank"
              rel="noreferrer"
              className="text-[16px] text-white/60 transition-colors hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://www.youtube.com/user/CosentinoTV"
              target="_blank"
              rel="noreferrer"
              className="text-[16px] text-white/60 transition-colors hover:text-white"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* COPYRIGHT + LEGAL */}
        <div className="mt-10 border-t border-white/15 pt-7">
          <p className="text-[16px] text-white/45">
            Cosentino Global, S.L.U. All rights reserved
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-[16px] text-white/45">
            <a
              href="/privacy-policy/"
              className="transition-colors hover:text-white"
            >
              Legal Notice
            </a>

            <a
              href="/privacy-policy/"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/cookie-policy/"
              className="transition-colors hover:text-white"
            >
              Cookie Policy
            </a>

            <a
              href="https://www.cosentino.com/usa/sitemap/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}