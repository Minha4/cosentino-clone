type FooterItem = {
  label: string;
  href: string;
  internal: boolean;
};

type FooterColumn = {
  title: string;
  items: FooterItem[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Corporate",
    items: [
      { label: "About us", href: "/about-us/", internal: true },
      { label: "R&D and Innovation", href: "https://www.cosentino.com/usa/innovation/", internal: false },
      { label: "Safety at Cosentino", href: "https://www.cosentino.com/usa/safety-at-cosentino/", internal: false },
      { label: "Cosentino Safety Space", href: "https://osh.cosentino.com/", internal: false },
      {
        label: "Sustainability Report 2023",
        href: "https://static.cosentino.com/ESG/2023/Sustainability-2023.pdf",
        internal: false,
      },
      {
        label: "EINF 2025",
        href: "https://assetstools.cosentino.com/api/v1/bynder/doc/0D67A72D-5C67-48F7-9B9A86AFAFD7A0DF/EINF-2025-EN.pdf",
        internal: false,
      },
      { label: "CT Quarry", href: "https://www.cosentino.com/landings/ctquarry/", internal: false },
      { label: "Silestone Institute", href: "https://silestoneinstitute.com/en/", internal: false },
      { label: "Eduarda Justo Foundation", href: "https://fundacioneduardajusto.es/", internal: false },
    ],
  },

  {
    title: "Customer Support",
    items: [
      { label: "Contact", href: "/contact/", internal: true },
      { label: "Warranty | Silestone", href: "https://www.cosentino.com/usa/silestone/warranty/", internal: false },
      {
        label: "Warranty | Dekton",
        href: "https://www.cosentino.com/usa/dekton/dekton-25-year-warranty-cosentino/",
        internal: false,
      },
      { label: "Warranty | Eclos", href: "https://www.cosentino.com/usa/eclos/warranty-eclos/", internal: false },
      { label: "Warranty | Sensa", href: "https://www.cosentino.com/usa/sensa/warranty/", internal: false },
      { label: "General Conditions of Sale", href: "https://www.cosentino.com/cgv/", internal: false },
      { label: "Ethics & Compliance", href: "https://www.cosentino.com/usa/ethics-compliance/", internal: false },
      { label: "Ethics Channel", href: "https://www.cosentino.com/usa/ethical-channel/", internal: false },
    ],
  },

  {
    title: "Service Provider",
    items: [
      { label: "Supplier Portal", href: "https://apps.cosentino.com/supplier/tabs/home", internal: false },
      {
        label: "General Purchase Conditions",
        href: "https://assetstools.cosentino.com/api/v1/bynder/doc/111A9314-D0CF-4AC6-A2EE07D45C4FD4D0/gpc.pdf",
        internal: false,
      },
    ],
  },

  {
    title: "Professional Area",
    items: [
      { label: "Designers – CTOP", href: "https://www.cosentino.com/usa/professional/designers/", internal: false },
      { label: "Architects", href: "https://www.cosentino.com/usa/professional/architects/", internal: false },
      { label: "Fabricators", href: "https://www.cosentino.com/usa/professional/fabricators/", internal: false },
      { label: "Kitchen & bath studios", href: "https://www.cosentino.com/usa/professional/kitchen-studios/", internal: false },
      { label: "Installers reformers", href: "https://www.cosentino.com/usa/professional/installers-reformers/", internal: false },
      { label: "Cosentino Center", href: "https://www.cosentino.com/usa/cosentino-center/", internal: false },
      { label: "Cosentino City", href: "https://www.cosentino.com/usa/professional/cosentino-city/", internal: false },
      { label: "Service Provider", href: "https://app.cosentino.com/supplier/tabs/home", internal: false },
    ],
  },

  {
    title: "Resources",
    items: [
      { label: "C Magazine", href: "https://www.cosentino.com/usa/c-magazine/", internal: false },
      { label: "C-Top Magazine", href: "https://www.cosentino.com/usa/c-top-magazine/", internal: false },
      {
        label: "Technical documentation",
        href: "https://www.cosentino.com/usa/professional/technical-documentation/",
        internal: false,
      },
    ],
  },

  {
    title: "Employment",
    items: [
      { label: "Join Cosentino", href: "https://jobs.cosentino.com/?locale=en_US", internal: false },
      {
        label: "Transparency in Coverage",
        href: "https://www.cigna.com/legal/compliance/machine-readable-files",
        internal: false,
      },
    ],
  },

  {
    title: "Press Room",
    items: [
      { label: "News", href: "https://www.cosentino.com/usa/news/", internal: false },
      { label: "Media Contact", href: "mailto:presscosentino@cosentino.com", internal: false },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#171717] px-6 py-14 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1320px]">

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {footerColumns.map((column) => (
            <div key={column.title}>

              <h3 className="mb-5 text-[16px] font-medium">
                {column.title}
              </h3>

              <div className="space-y-3">
                {column.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={!item.internal && item.href.startsWith("http") ? "_blank" : undefined}
                    rel={!item.internal && item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block text-[16px] leading-6 text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

            </div>
          ))}
        </div>

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