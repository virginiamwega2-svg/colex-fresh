
import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="bg-forest px-6 py-28 text-ivory lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#d5b889]">
            KENYAN GREEN COFFEE SOURCING
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Explore Kenyan green coffee with Colex Fresh.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-ivory/80">
            We welcome enquiries from international importers,
            specialty roasters and distributors interested in
            sourcing Kenyan green coffee. Tell us about your
            origin preferences, product specifications and
            purchasing requirements, and let&apos;s explore
            potential opportunities.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex min-h-14 items-center justify-center bg-ivory px-8 text-xs font-semibold tracking-[0.15em] text-forest transition-colors hover:bg-[#d5b889]"
          >
            DISCUSS YOUR SOURCING REQUIREMENTS
          </Link>

          <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-ivory/60">
            GREEN COFFEE · KENYA
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              FOR PROFESSIONAL BUYERS
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              A sourcing conversation starts with understanding the coffee.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-espresso/70 sm:text-base">
              We welcome enquiries from international coffee
              importers, specialty roasters and distributors
              interested in exploring Kenyan green coffee
              sourcing opportunities.
            </p>

            <p className="mt-6 text-sm leading-8 text-espresso/70 sm:text-base">
              Share your origin preferences, product specifications,
              quality expectations and purchasing requirements
              with us. We aim to make each enquiry a clear,
              informed conversation about potential sourcing
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer information */}
      <section className="bg-[#e9dfcf] px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-forest">
              INFORMATION THAT MATTERS
            </p>

            <h2 className="mt-6 font-serif text-4xl text-espresso sm:text-5xl">
              Know what you are sourcing.
            </h2>

            <p className="mt-6 text-sm leading-8 text-espresso/70">
              Every coffee buyer has different sourcing priorities.
              Clear information about origin, physical
              characteristics and quality helps buyers assess
              whether a coffee aligns with their requirements.
              We aim to share relevant, verified details as
              individual coffees become available.
            </p>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-12 border-t border-espresso/15 pt-10 sm:grid-cols-2">
            {buyerPriorities.map((item) => (
              <article key={item.number}>
                <span className="font-serif text-2xl italic text-gold">
                  {item.number}
                </span>

                <h3 className="mt-4 font-serif text-2xl text-espresso">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-espresso/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              PRODUCT TRANSPARENCY
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              The details behind every lot.
            </h2>

            <p className="mt-6 text-sm leading-8 text-espresso/70">
              When individual coffees are introduced, their
              available specifications will be presented
              clearly, based on verified product information.
            </p>
          </div>

          <div className="border border-espresso/15 p-8 sm:p-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-forest">
              LOT-LEVEL INFORMATION
            </p>

            <ul className="mt-8 space-y-5 text-sm text-espresso/75">
              {[
                "Growing region and production area",
                "Variety and processing method",
                "Crop year and harvest period",
                "Screen size, moisture and grading details",
                "Defect information and cup profile, where assessed",
                "Lot availability, packaging and commercial terms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 text-gold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-espresso/15 pt-6 text-xs leading-6 text-espresso/55">
              Specifications will be published when verified
              information for individual coffees is available.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-espresso px-6 py-24 text-center text-ivory lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#d5b889]">
            INTERNATIONAL BUYER ENQUIRIES
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            Let&apos;s explore Kenyan coffee sourcing.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-ivory/70">
            Are you an importer, specialty roaster or distributor
            interested in Kenyan green coffee? Share your
            preferred origins, product specifications and
            purchasing requirements. We&apos;d welcome the
            opportunity to discuss potential sourcing
            opportunities with you.
          </p>

          <Link
            href="/#contact"
            className="mt-9 inline-flex min-h-14 items-center justify-center bg-ivory px-9 text-xs font-semibold tracking-[0.15em] text-espresso transition-colors hover:bg-[#d5b889]"
          >
            DISCUSS YOUR SOURCING REQUIREMENTS
          </Link>

          <div className="mt-9">
            <Link
              href="/coffee"
              className="text-xs font-semibold tracking-[0.15em] text-ivory/70 transition-colors hover:text-[#d5b889]"
            >
              ← BACK TO OUR COFFEE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
