import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Colex Fresh | Kenyan Specialty Coffee",
  description:
    "Discover Colex Fresh, connecting international buyers with Kenyan green coffee sourcing and offering roasted coffee in whole-bean and ground formats.",
  openGraph: {
    title: "Colex Fresh | Kenyan Specialty Coffee",
    description: "From Kenya's highlands to the world. Explore Kenyan green coffee sourcing and roasted coffee from Colex Fresh.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex-1 bg-ivory">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden px-6 py-32 text-ivory lg:min-h-[760px] lg:px-10">
        <Image
          src="/images/kenyan-coffee-highlands.jpg"
          alt=""
          fill
          sizes="100vw"
          preload
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(35, 24, 18, 0.55), rgba(35, 24, 18, 0.65))",
          }}
        />
        <div className="mx-auto w-full max-w-7xl animate-hero-enter">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-light">
            KENYAN SPECIALTY COFFEE
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-8xl">
            From Kenya&apos;s highlands to the world.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-ivory/85 sm:text-lg">
            Discover Kenyan coffee with Colex Fresh. We welcome
            enquiries from international importers, roasters and
            distributors exploring Kenyan green coffee sourcing,
            alongside customers interested in roasted coffee.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/coffee"
              className="inline-flex min-h-14 items-center justify-center bg-ivory px-8 text-xs font-semibold tracking-[0.15em] text-espresso transition-colors hover:bg-gold-light"
            >
              EXPLORE OUR COFFEE
            </a>

            <a
              href="#wholesale"
              className="inline-flex min-h-14 items-center justify-center border border-ivory px-8 text-xs font-semibold tracking-[0.15em] text-ivory transition-colors hover:bg-ivory hover:text-espresso"
            >
              PARTNER WITH US
            </a>
          </div>
        </div>
      </section>

      {/* Brand philosophy */}
      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-[0.85fr_1.15fr] items-center gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-16">
          <div className="relative order-1 aspect-[3/4] overflow-hidden lg:order-2 lg:aspect-[4/5]">
            <Image
              src="/images/coffee-cherries.jpg"
              alt="Coffee cherries growing on a branch"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-2 max-w-xl lg:order-1">
            <p className="text-xs font-semibold tracking-[0.12em] text-gold">
              THE COLEX FRESH PHILOSOPHY
            </p>

            <h2 className="mt-3 font-serif text-2xl leading-tight text-espresso sm:mt-5 sm:text-3xl lg:text-6xl">
              A story of origin. A world of possibility.
            </h2>

            <p className="mt-4 text-sm leading-6 text-espresso/75 sm:mt-5 sm:leading-7 lg:text-base">
              Every coffee has a story shaped by its origin,
              growing environment and journey. At Colex Fresh,
              we&apos;re building a connection between Kenya&apos;s rich
              coffee heritage and the people and businesses who
              appreciate its character around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee collections */}
      <section id="coffee" className="bg-sand px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-forest">
            DISCOVER COLEX FRESH
          </p>

          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-espresso sm:text-5xl">
            Two ways to experience Kenyan coffee.
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article
              className="relative flex min-h-[440px] flex-col justify-between overflow-hidden p-8 text-ivory sm:min-h-[500px] sm:p-12"
            >
              <Image
                src="/images/roasted-coffee.jpg"
                alt="Roasted Kenyan coffee"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1b100b]/95 via-[#1b100b]/45 to-[#1b100b]/20" />

              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-[0.25em] text-[#e0bd85]">
                  FOR COFFEE LOVERS
                </p>

                <h3 className="mt-8 font-serif text-4xl sm:text-5xl">
                  Roasted Kenyan Coffee
                </h3>

                <p className="mt-6 max-w-md text-sm leading-8 text-white/90">
                  Discover Kenyan roasted coffee through a
                  considered collection created for those who
                  appreciate the character, heritage and
                  experience of Kenyan coffee.
                </p>
              </div>

              <a
                href="/coffee/roasted"
                className="relative z-10 mt-10 inline-flex min-h-14 items-center justify-center self-start border border-ivory bg-ivory px-7 text-xs font-semibold tracking-[0.15em] text-espresso transition-colors hover:bg-gold-light"
              >
                DISCOVER ROASTED COFFEE →
              </a>
            </article>

            <article
              className="relative flex min-h-[440px] flex-col justify-between overflow-hidden p-8 text-ivory sm:min-h-[500px] sm:p-12"
            >
              <Image
                src="/images/green-coffee-harvest.jpg"
                alt="Green coffee harvest"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172018]/95 via-[#172018]/45 to-[#172018]/20" />

              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-[0.25em] text-[#e0bd85]">
                  INTERNATIONAL COFFEE TRADE
                </p>

                <h3 className="mt-8 font-serif text-4xl sm:text-5xl">
                  Kenyan Green Coffee
                </h3>

                <p className="mt-6 max-w-md text-sm leading-8 text-white/90">
                  Explore Kenyan green coffee sourcing and
                  export opportunities with Colex Fresh. We
                  welcome enquiries from international importers,
                  specialty roasters and distributors seeking
                  to discuss their coffee requirements.
                </p>
              </div>

              <a
                href="/coffee/green"
                className="relative z-10 mt-10 inline-flex min-h-14 items-center justify-center self-start border border-ivory bg-ivory px-7 text-xs font-semibold tracking-[0.15em] text-espresso transition-colors hover:bg-gold-light"
              >
                EXPLORE GREEN COFFEE & EXPORT →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section id="origins" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              ROOTED IN KENYA
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Rooted in Kenya. Connected to the world.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-espresso/70 sm:text-base">
              Kenya has a long-established coffee heritage,
              with diverse growing regions and production
              environments that shape the character of its
              Arabica coffees. These origins contribute to
              Kenya&apos;s distinctive place in the international
              coffee industry.
            </p>

            <p className="mt-6 text-sm leading-8 text-espresso/70 sm:text-base">
              At Colex Fresh, we are building our offering
              around an appreciation of Kenyan coffee, its
              origins and its place in global markets. Our aim
              is to help international buyers explore Kenyan
              coffee through clear product information and
              professional commercial engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="bg-forest px-6 py-20 text-ivory lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-gold-light">
              OUR APPROACH TO QUALITY
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
              Clear information. Informed coffee decisions.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-ivory/75 sm:text-base">
              Understanding a coffee goes beyond its name
              or origin. Buyers need clear information about
              the coffee&apos;s characteristics, specifications
              and presentation to assess whether it meets
              their requirements.
            </p>

            <p className="mt-6 text-sm leading-8 text-ivory/75 sm:text-base">
              As our offering develops, we aim to share
              verified product details wherever available,
              which may include origin, variety, processing
              method, harvest information and relevant quality
              characteristics. We believe transparency helps
              build confidence and supports better conversations
              between buyers and suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Wholesale */}
      <section id="wholesale" className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/wholesale-coffee.jpg"
                alt="Kenyan coffee beans presented for wholesale buyers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.3em] text-gold">
                FOR COFFEE BUSINESS PARTNERS
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-espresso sm:text-5xl lg:text-6xl">
                Build your coffee offering with Colex Fresh.
              </h2>

              <p className="mt-6 text-sm leading-8 text-espresso/70 sm:text-base">
                For businesses exploring Kenyan green coffee or roasted coffee for their customers, we welcome conversations about product requirements and how our current coffee offerings may fit their needs.
              </p>

              <Link
                href="/#contact"
                className="mt-10 inline-flex min-h-14 items-center justify-center bg-forest px-9 text-xs font-semibold tracking-[0.15em] text-ivory transition-colors hover:bg-espresso"
              >
                EXPLORE BUSINESS ENQUIRIES
              </Link>
            </div>
          </div>
        </section>
      {/* Contact */}
      <section id="contact" className="bg-espresso px-6 py-20 text-center text-ivory lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-light">
            START A CONVERSATION
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            We&apos;d love to hear from you.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-ivory/70">
            Interested in our coffee or exploring a
            business opportunity? Get in touch with
            Colex Fresh.
          </p>

          <a
            href="mailto:info@colexfresh.com"
            className="mt-9 inline-flex min-h-14 items-center justify-center bg-ivory px-9 text-xs font-semibold tracking-[0.15em] text-espresso transition-colors hover:bg-gold-light"
          >
            EMAIL COLEX FRESH
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso-deep px-6 py-12 text-ivory lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-xl tracking-[0.12em]">
              COLEX FRESH
            </p>
            <p className="mt-2 text-[9px] tracking-[0.24em] text-ivory/60">
              KENYAN SPECIALTY COFFEE
            </p>
          </div>

          <p className="text-xs text-ivory/50">
            From Kenya&apos;s highlands to the world.
          </p>
        </div>
      </footer>
    </main>
  );
}
