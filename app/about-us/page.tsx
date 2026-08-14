import Header from "../components/Header";
import Footer from "../components/Footer";

const corporateNavigation = [
  { label: "01.About us", href: "/about-us/", active: true },
  { label: "02.Culture", href: "#" },
  { label: "03.History", href: "#" },
  { label: "04.Impact", href: "#" },
  { label: "05.C·People", href: "#" },
  { label: "06.Press", href: "#" },
];

const brandLogos = [
  {
    name: "Silestone",
    src: "https://assetsstatic.cosentino.com/corporativo/img/logo-silestone.svg",
  },
  {
    name: "Dekton",
    src: "https://assetsstatic.cosentino.com/corporativo/img/logo-dekton.svg",
  },
  {
    name: "Ēclos",
    src: "https://assetsstatic.cosentino.com/corporativo/img/Eclos-Blanco.svg",
  },
  {
    name: "Sensa",
    src: "https://assetsstatic.cosentino.com/corporativo/img/logo-sensa.svg",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-[#171717]">

        {/* =====================================================
            CORPORATE NAVIGATION
        ====================================================== */}
        <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
          <div className="mx-auto flex max-w-[1320px] overflow-x-auto">
            {corporateNavigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative shrink-0 px-5 py-4 text-[12px] transition-colors ${
                  item.active
                    ? "text-black"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {item.label}

                {item.active && (
                  <span className="absolute bottom-0 left-5 right-5 h-px bg-black" />
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* =====================================================
            PRESENTATION
            We are Cosentino
        ====================================================== */}
        <section className="relative min-h-screen overflow-hidden bg-black">

          <iframe
            src="https://player.vimeo.com/video/813483150?h=1e0baeee03&background=1&autoplay=1&muted=1&loop=1&byline=0&title=0"
            title="We are Cosentino"
            className="absolute inset-0 h-full w-full scale-[1.2]"
            allow="autoplay; fullscreen"
            frameBorder="0"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
            <h1
              className="text-[52px] font-light leading-none tracking-[-0.05em] text-white md:text-[76px] lg:text-[92px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
                fontWeight: 300,
              }}
            >
              We are Cosentino
            </h1>
          </div>

        </section>

        {/* =====================================================
            MEANINGFUL DESIGN
        ====================================================== */}
        <section className="bg-[#5c4a40] px-6 py-24 md:px-10 md:py-32 lg:px-16">

          <div className="mx-auto max-w-[1050px] text-center">

            <h2
              className="text-[40px] font-light leading-[1.03] tracking-[-0.04em] text-white md:text-[58px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
                fontWeight: 300,
              }}
            >
              Meaningful Design to Inspire People&apos;s Lives
            </h2>

            <div className="mx-auto my-8 h-px w-16 bg-black" />

            <p className="text-[16px] leading-7 text-white">
              The Cosentino Group is a global, family-owned Spanish company
              that produces and distributes innovative, sustainable and
              high-value surfaces for the world of architecture and design.
              We work with our customers and partners to deliver inspiring
              solutions while acting responsibly and transparently on ESG
              issues.
            </p>

          </div>

        </section>

        {/* =====================================================
            BRANDS
        ====================================================== */}
        <section className="bg-black px-6 py-24 text-white md:px-10 md:py-32 lg:px-16">

          <div className="mx-auto max-w-[1200px] text-center">

            <h2
              className="text-[40px] font-light leading-[1.03] tracking-[-0.04em] md:text-[58px]"
              style={{
                fontFamily: '"Diagramm", Arial, sans-serif',
                fontWeight: 300,
              }}
            >
              We inspire through our brands:
            </h2>

            <div className="mx-auto mt-10 max-w-[1100px]">

              <p className="text-[18px] leading-8 text-white">
                Silestone®, Dekton®, Sensa by Cosentino®, Scalea® and
                Prexury®, with their eco-friendly production process and
                advanced technology, are pioneering surfaces leading leaders
                in their respective categories and enabling the creation of
                unique environments and designs for residential and commercial
                spaces.
              </p>

            </div>

            <div className="mt-16 grid grid-cols-2 items-center justify-items-center gap-12 md:grid-cols-4">

              {brandLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="flex min-h-[60px] items-center justify-center"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-h-[45px] max-w-[190px] object-contain"
                  />
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            OUR PEOPLE
        ====================================================== */}
        <section className="bg-white pt-24 md:pt-32">

          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">

            <div className="text-center">

              <h2
                className="text-[40px] font-light leading-[1.03] tracking-[-0.04em] md:text-[58px]"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                  fontWeight: 300,
                }}
              >
                Our people
              </h2>

              <div className="mx-auto my-8 h-px w-16 bg-black" />

            </div>

            <div className="grid gap-10 pb-10 md:grid-cols-2 xl:grid-cols-4">

              <Statistic
                label="Employees"
                value="6000"
                prefix="+"
              />

              <Statistic
                label="Nationalities"
                value="129"
              />

              <Statistic
                label="Permanent contracts"
                value="98"
                suffix="%"
              />

              <Statistic
                label="Internal promotions"
                value="32"
                suffix="%"
              />

            </div>

          </div>

          <VimeoSection
            src="https://player.vimeo.com/video/813483195?h=b932369145&background=1&autoplay=1&muted=1&loop=1&byline=0&title=0"
            title="Our people"
          />

        </section>

        {/* =====================================================
            EARTH
        ====================================================== */}
        <section className="bg-white pt-24 md:pt-32">

          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">

            <div className="text-center">

              <h2
                className="text-[40px] font-light leading-[1.03] tracking-[-0.04em] md:text-[58px]"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                  fontWeight: 300,
                }}
              >
                We take care of our great common home: the Earth
              </h2>

              <div className="mx-auto my-8 h-px w-16 bg-black" />

            </div>

            <div className="grid gap-10 pb-10 md:grid-cols-3">

              <Statistic
                label="Certified renewable electric energy"
                value="99"
                suffix="%"
              />

              <Statistic
                label="Water Waste"
                value="0"
                suffix="%"
              />

              <Statistic
                label="Investment in environmental and health and safety assets"
                value="29"
                suffix="M€"
              />

            </div>

          </div>

          <VimeoSection
            src="https://player.vimeo.com/video/813483247?h=1d5ed1cbbc&background=1&autoplay=1&muted=1&loop=1&byline=0&title=0"
            title="Environmental responsibility"
          />

        </section>

        {/* =====================================================
            BUSINESS MODEL
        ====================================================== */}
        <section className="bg-white pt-24 md:pt-32">

          <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">

            <div className="text-center">

              <h2
                className="text-[40px] font-light leading-[1.03] tracking-[-0.04em] md:text-[58px]"
                style={{
                  fontFamily: '"Diagramm", Arial, sans-serif',
                  fontWeight: 300,
                }}
              >
                A user-centric global business model
              </h2>

              <div className="mx-auto my-8 h-px w-16 bg-black" />

            </div>

            <div className="grid gap-10 pb-10 md:grid-cols-2 xl:grid-cols-4">

              <Statistic
                label="Business units"
                value="157"
              />

              <Statistic
                label="Cosentino Centres"
                value="126"
              />

              <Statistic
                label="Cosentino City Centers"
                value="31"
              />

              <Statistic
                label="Turnover"
                value="1570"
                suffix="M€"
              />

            </div>

          </div>

          <VimeoSection
            src="https://player.vimeo.com/video/813483271?h=a9416b5d17&background=1&autoplay=1&muted=1&loop=1&byline=0&title=0"
            title="Global business model"
          />

        </section>

        {/* =====================================================
            BACK TO TOP
        ====================================================== */}
        <section className="flex justify-center py-10">
          <a
            href="#"
            className="text-[12px] text-neutral-500 hover:text-black"
          >
            ↑
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}

function Statistic({
  label,
  value,
  prefix,
  suffix,
}: {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="text-center">

      <p className="text-[16px] leading-6 text-neutral-700">
        {label}
      </p>

      <p
        className="mt-3 text-[58px] font-light leading-none tracking-[-0.05em] md:text-[72px]"
        style={{
          fontFamily: '"Diagramm", Arial, sans-serif',
          fontWeight: 300,
        }}
      >
        {prefix && (
          <span className="text-[28px] align-top">
            {prefix}
          </span>
        )}

        {value}

        {suffix && (
          <span className="ml-1 text-[28px] align-top">
            {suffix}
          </span>
        )}
      </p>

    </div>
  );
}

function VimeoSection({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="relative h-[55vh] min-h-[400px] w-full overflow-hidden bg-black md:h-[65vh]">

      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full scale-[1.12]"
        allow="autoplay; fullscreen"
        frameBorder="0"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/10" />

    </div>
  );
}