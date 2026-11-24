
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Roasted Coffee | Colex Fresh",
  description:
    "Explore Colex Fresh Kenyan roasted coffee, available in whole-bean and ground formats.",
};



export default function RoastedCoffeePage() {
  return (
    <main className="flex-1 bg-ivory">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-espresso px-6 py-24 text-ivory lg:px-10 lg:py-32">
        <Image
          src="/images/roasted-coffee-hero.jpg"
          alt="Dark roasted coffee beans"
          fill
          sizes="100vw"
          preload
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/80" />
        <div className="relative z-10 mx-auto max-w-7xl animate-hero-enter">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-highlight">
            KENYAN ROASTED COFFEE
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">
            Explore the character of Kenyan coffee.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/90">
            Discover Colex Fresh roasted Kenyan coffee, available as whole beans and ground coffee. Explore an offering that celebrates the character and heritage of Kenyan coffee.
          </p>

          <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-gold-highlight">
            WHOLE BEAN & GROUND COFFEE · KENYA
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              COFFEE, THOUGHTFULLY PRESENTED
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Coffee with a sense of Kenyan origin.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-espresso/70 sm:text-base">
              Our roasted coffee brings the character of Kenyan coffee to customers in two formats: whole beans and ground coffee. Whether you prefer to grind your coffee before brewing or choose the convenience of ground coffee, you can explore the format that suits your routine.
            </p>

            <p className="mt-6 text-sm leading-8 text-espresso/70 sm:text-base">
              We believe choosing coffee should be an informed and enjoyable experience. That&apos;s why clear product information matters, helping customers understand what each offering provides before making their choice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-forest">
              OUR ROASTED COFFEE
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-espresso sm:text-5xl">
              Two ways to enjoy Kenyan coffee.
            </h2>

            <p className="mt-6 text-sm leading-8 text-espresso/70 sm:text-base">
              Whether you prefer whole beans or ground coffee, choose the
              format that fits your coffee ritual. Both offer a way to enjoy
              the character and heritage of Kenyan coffee.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden border border-espresso/15 bg-ivory">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/whole-coffee-beans.jpg"
                  alt="Roasted whole coffee beans"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-gold">
                01 / WHOLE BEANS
              </p>

              <h3 className="mt-8 font-serif text-3xl text-espresso sm:text-4xl">
                Whole Bean Coffee
              </h3>

              <p className="mt-5 max-w-md text-sm leading-8 text-espresso/70">
                For coffee drinkers who prefer to grind their beans before
                brewing and enjoy greater control over their preparation.
              </p>

              <p className="mt-8 border-t border-espresso/15 pt-5 text-xs font-semibold tracking-[0.15em] text-forest">
                KENYAN ROASTED COFFEE
              </p>
            </div>
            </article>

            <article className="overflow-hidden border border-espresso/15 bg-forest text-ivory">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/ground-coffee.jpg"
                  alt="Freshly ground coffee"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-gold-light">
                02 / GROUND COFFEE
              </p>

              <h3 className="mt-8 font-serif text-3xl text-ivory sm:text-4xl">
                Ground Coffee
              </h3>

              <p className="mt-5 max-w-md text-sm leading-8 text-ivory/75">
                A convenient option for those who prefer their coffee ready
                for their chosen brewing routine.
              </p>

              <p className="mt-8 border-t border-ivory/20 pt-5 text-xs font-semibold tracking-[0.15em] text-gold-light">
                KENYAN ROASTED COFFEE
              </p>
            </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center lg:px-10 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.3em] text-gold">
          DISCOVER COLEX FRESH
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl text-espresso sm:text-5xl">
          Find your way to enjoy Kenyan coffee.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-espresso/70">
          Explore our whole-bean and ground coffee offerings. For product
          enquiries or business discussions, get in touch with the Colex
          Fresh team.
        </p>

        <Link
          href="/#contact"
          className="mt-7 inline-flex min-h-14 items-center justify-center bg-forest px-9 text-xs font-semibold tracking-[0.15em] text-ivory transition-colors hover:bg-espresso"
        >
          MAKE AN ENQUIRY
        </Link>

        <div className="mt-6">
          <Link
            href="/coffee"
            className="text-xs font-semibold tracking-[0.15em] text-forest transition-colors hover:text-gold"
          >
            ← BACK TO OUR COFFEE
          </Link>
        </div>
      </section>
    </main>
  );
}
