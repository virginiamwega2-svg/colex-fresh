
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Our Coffee | Colex Fresh",
  description:
    "Explore Colex Fresh Kenyan green coffee sourcing and roasted coffee, available in whole-bean and ground formats.",
};

const collections = [
  {
    number: "01",
    title: "Kenyan Green Coffee",
    description:
      "Explore Kenyan green coffee sourcing opportunities with Colex Fresh. We welcome enquiries from international importers, specialty roasters and distributors interested in discussing their purchasing requirements.",
    detail: "FOR INTERNATIONAL COFFEE BUYERS",
    href: "/coffee/green",
    linkText: "EXPLORE GREEN COFFEE",
    background: "bg-forest",
    text: "text-ivory",
    muted: "text-ivory/70",
  },
  {
    number: "02",
    title: "Kenyan Roasted Coffee",
    description:
      "Discover Colex Fresh Kenyan roasted coffee, available in whole-bean and ground formats for customers who appreciate the character and heritage of Kenyan coffee.",
    detail: "FOR COFFEE LOVERS",
    href: "/coffee/roasted",
    linkText: "EXPLORE ROASTED COFFEE",
    background: "bg-espresso",
    text: "text-ivory",
    muted: "text-ivory/70",
  },
];

export default function CoffeePage() {
  return (
    <main className="flex-1 bg-ivory">
      <SiteHeader />

      <section className="relative isolate overflow-hidden px-6 py-28 text-ivory lg:px-10 lg:py-36">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1791570923121-43674e6d8ee9?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-espresso/65" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#d5b889]">
            KENYAN COFFEE SOURCING & COLLECTIONS
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Discover Kenyan coffee. Explore new possibilities.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-ivory/75">
            Explore Kenyan green coffee sourcing opportunities with
            Colex Fresh, alongside our current offering of roasted
            Kenyan coffee in whole-bean and ground formats.
            We welcome enquiries from international buyers and
            customers interested in Kenyan coffee.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              EXPLORE OUR COFFEE
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Coffee for different needs. Rooted in Kenya.
            </h2>

            <p className="mt-6 text-sm leading-8 text-espresso/70">
              Whether you are an international buyer exploring
              Kenyan green coffee sourcing or a coffee enthusiast
              interested in roasted Kenyan coffee, discover the collection
              that aligns with your interests.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {collections.map((collection) => (
              <article
                key={collection.number}
                className={`${collection.background} flex min-h-[420px] flex-col justify-between p-8 sm:p-12`}
              >
                <div>
                  <p className={`text-xs font-semibold tracking-[0.25em] ${collection.muted}`}>
                    {collection.detail}
                  </p>

                  <span className="mt-10 block font-serif text-3xl italic text-[#d5b889]">
                    {collection.number}
                  </span>

                  <h3 className={`mt-5 font-serif text-4xl sm:text-5xl ${collection.text}`}>
                    {collection.title}
                  </h3>

                  <p className={`mt-6 max-w-md text-sm leading-8 ${collection.muted}`}>
                    {collection.description}
                  </p>
                </div>

                <Link
                  href={collection.href}
                  className="mt-12 inline-flex min-h-14 items-center justify-center self-start border border-ivory bg-ivory px-7 text-xs font-semibold tracking-[0.15em] text-espresso transition-colors hover:border-[#d5b889] hover:bg-[#d5b889]"
                >
                  {collection.linkText} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfcf] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-forest">
              INTERNATIONAL SOURCING ENQUIRIES
            </p>

            <h2 className="mt-5 font-serif text-3xl text-espresso sm:text-4xl">
              Looking to source Kenyan coffee?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-espresso/70">
              Whether you are an importer, specialty roaster or distributor,
              we&apos;d welcome a conversation about your green coffee requirements
              and potential sourcing opportunities.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex min-h-14 items-center justify-center self-start bg-forest px-8 text-xs font-semibold tracking-[0.15em] text-ivory transition-colors hover:bg-espresso"
          >
            START A SOURCING ENQUIRY
          </Link>
        </div>
      </section>
    </main>
  );
}
