import Header from "../components/Header";
import Footer from "../components/Footer";

const contactOptions = [
  {
    title: "Claim registration and management",
    text: "Register or track your requests by completing a short form.",
    button: "Start",
    href: "https://www.cosentino.com/usa/claim-registration/",
  },
  {
    title: "Questions",
    text: "Our team of professionals will help you with your questions.",
    button: "Make an inquiry",
    href: "https://www.cosentino.com/usa/questions-and-doubts/",
  },
  {
    title: "Professional assistance",
    text: "Are you a professional seeking assistance with your project? Please complete the form, and our expert team will reach out and provide you with the guidance you need.",
    button: "Start",
    href: "https://www.cosentino.com/usa/contact-for-professionals/",
  },
  {
    title: "Collaborate with us",
    text: "Our team of professionals will help you with your questions.",
    button: "Collaborate",
    href: "https://www.cosentino.com/usa/request-for-collaboration/",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-black">
        <section className="border-y border-neutral-300">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid md:grid-cols-[1fr_2fr]">

              {/* LEFT COLUMN */}
              <div className="border-b border-neutral-300 px-6 py-12 md:border-b-0 md:border-r md:px-10 md:py-16 lg:px-14">

                <h1
                  className="mt-4 max-w-[430px] text-[38px] font-light leading-[1.05] tracking-[-0.04em] md:text-[48px]"
                  style={{
                    fontFamily: '"Diagramm", Arial, sans-serif',
                    fontWeight: 300,
                  }}
                >
                  Customer Service and Technical Support
                </h1>

                <p className="mt-6 max-w-[420px] text-[16px] leading-7 text-neutral-600">
                  Contact us using one of the following forms.
                </p>

              </div>

              {/* RIGHT COLUMN */}
              <div className="px-6 py-10 md:px-8 md:py-12 lg:px-10">

                <div className="grid gap-4 sm:grid-cols-2">
                  {contactOptions.map((option) => (
                    <ContactCard
                      key={option.title}
                      title={option.title}
                      text={option.text}
                      button={option.button}
                      href={option.href}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ContactCard({
  title,
  text,
  button,
  href,
}: {
  title: string;
  text: string;
  button: string;
  href: string;
}) {
  return (
    <article className="flex min-h-[250px] flex-col bg-[#f3f3f3] p-7 md:min-h-[280px] md:p-8">

      <h2
        className="text-[24px] font-light leading-[1.1] tracking-[-0.025em]"
        style={{
          fontFamily: '"Diagramm", Arial, sans-serif',
          fontWeight: 300,
        }}
      >
        {title}
      </h2>

      <p className="mt-5 text-[16px] leading-6 text-neutral-700">
        {text}
      </p>

      <a
        href={href}
        className="mt-auto inline-block w-fit border-b border-black pb-1 pt-8 text-[16px] transition-opacity hover:opacity-60"
      >
        {button}
      </a>

    </article>
  );
}