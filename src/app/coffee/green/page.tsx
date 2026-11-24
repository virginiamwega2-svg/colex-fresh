
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Green Coffee | Colex Fresh",
  description:
    "Explore green coffee from Colex Fresh, connecting professional buyers with Kenyan specialty coffee.",
};

const buyerPriorities = [
  {
    number: "01",
    title: "Origin and provenance",
    description:
      "Explore available information about growing regions, origin and the coffee's production background.",
  },
  {
    number: "02",
    title: "Coffee specifications",
    description:
      "Review verified details such as variety, processing method, crop year and relevant physical characteristics.",
  },
  {
    number: "03",
    title: "Quality information",
    description:
      "Understand available grading, screen size, moisture and defect information to support informed evaluation.",
  },
  {
    number: "04",
    title: "Commercial requirements",
    description:
      "Discuss volume needs, packaging preferences, delivery expectations and purchasing terms as opportunities develop.",
  },
];

export default function GreenCoffeePage() {
  return (
    <main className="flex-1 bg-ivory">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-forest px-6 py-24 text-ivory lg:px-10 lg:py-32">
        <Image
          src="/images/green-coffee-beans.jpg"
          alt="Raw green unroasted coffee beans"
          fill
          sizes="100vw"
          preload
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/60" /><div className="relative z-10 mx-auto max-w-7xl animate-hero-enter">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-highlight">
            KENYAN GREEN COFFEE SOURCING
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Explore Kenyan green coffee with Colex Fresh.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-ivory/95">
            We welcome enquiries from international importers,
            specialty roasters and distributors interested in
            sourcing Kenyan green coffee. Tell us about your
            origin preferences, product specifications and
            purchasing requirements, and let&apos;s explore
            potential opportunities.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex min-h-14 items-center justify-center bg-ivory px-8 text-xs font-semibold tracking-[0.15em] text-forest transition-colors hover:bg-gold-light"
          >
            SEND A SOURCING ENQUIRY
          </Link>

          <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-ivory/60">
            GREEN COFFEE · KENYA
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              A THOUGHTFUL STARTING POINT
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Start with the purpose behind the purchase.
            </h2>
          </div>

          <div>
              <p className="text-sm leading-8 text-espresso/70 sm:text-base">
                The coffee a business chooses needs to make sense for its market,
                customers and intended use. Understanding that context gives a
                sourcing discussion a more useful starting point.
              </p>
            </div>
        </div>
      </section>

      {/* Buyer information */}
      <section className="bg-sand px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-forest">
              INFORMATION THAT MATTERS
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Know what you are sourcing.
            </h2>

            <p className="mt-5 text-sm leading-7 text-espresso/70">
              Every coffee buyer has different sourcing priorities.
              Clear information about origin, physical
              characteristics and quality helps buyers assess
              whether a coffee aligns with their requirements.
              We aim to share relevant, verified details as
              individual coffees become available.
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
            {buyerPriorities.map((item) => (
              <article key={item.number} className="border-t border-gold/60 pt-6">
                <span className="font-serif text-4xl italic leading-none text-gold">
                  {item.number}
                </span>

                <h3 className="mt-5 font-serif text-2xl leading-tight text-espresso">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-espresso/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

            {/* Specifications */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              PRODUCT TRANSPARENCY
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              The details behind every lot.
            </h2>

            <p className="mt-5 text-sm leading-7 text-espresso/70 sm:text-base">
              When individual coffees are introduced, their
              available specifications will be presented
              clearly, based on verified product information.
            </p>
          </div>

          <div className="border border-espresso/10 bg-[#f7f1e7] p-7 sm:p-10">
            <div className="flex items-center justify-between gap-4 border-b border-espresso/15 pb-5">
              <p className="text-xs font-semibold tracking-[0.25em] text-forest">
                LOT-LEVEL INFORMATION
              </p>
              <span className="font-serif text-sm italic text-gold">
                01 — 06
              </span>
            </div>

            <ul className="mt-2">
              {[
                "Growing region and production area",
                "Variety and processing method",
                "Crop year and harvest period",
                "Screen size, moisture and grading details",
                "Defect information and cup profile, where assessed",
                "Lot availability, packaging and commercial terms",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-5 border-b border-espresso/10 py-5 last:border-b-0"
                >
                  <span className="pt-0.5 font-serif text-sm italic text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-espresso/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 border-t border-gold/40 pt-5 text-xs leading-6 text-espresso/60">
              Specifications will be published when verified
              information for individual coffees is available.
            </p>
          </div>
        </div>
      </section>

            {/* Enquiry */}
      <section className="bg-espresso px-6 py-20 text-ivory lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
            <Image
              src="/images/green-coffee-detail.jpg"
              alt="Fresh unroasted green coffee beans"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold-highlight">
              GREEN COFFEE SOURCING
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
              What are you looking for in your next coffee lot?
            </h2>

            <p className="mt-6 text-sm leading-8 text-ivory/70">Tell us about the coffee your business is looking to source. Share the origin preferences, specifications and purchasing criteria that will guide your decision. We welcome the opportunity to understand your requirements and discuss possible next steps.</p>

            <Link
              href="/#contact"
              className="mt-9 inline-flex min-h-14 items-center justify-center bg-ivory px-9 text-xs font-semibold tracking-[0.15em] text-espresso transition-colors hover:bg-gold-light"
            >
              SEND A SOURCING ENQUIRY
            </Link>

            <div className="mt-9">
              <Link
                href="/coffee"
                className="text-xs font-semibold tracking-[0.15em] text-ivory/70 transition-colors hover:text-gold-highlight"
              >
                ← BACK TO OUR COFFEE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
