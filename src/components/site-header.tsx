
"use client";

import { useState } from "react";
import Link from "next/link";


const navigation = [
  { label: "Our Coffee", href: "/coffee" },
  { label: "Our Story", href: "/#story" },
  { label: "Wholesale", href: "/#wholesale" },
  { label: "Contact", href: "/#contact" },
];



export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-espresso/10 bg-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">

        {/* Brand */}
        <Link
          href="/"
          aria-label="Colex Fresh home"
          className="flex shrink-0 flex-col"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-serif text-xl font-semibold tracking-[0.12em] text-espresso sm:text-2xl">
            COLEX FRESH
          </span>
          <span className="mt-1 text-[8px] tracking-[0.24em] text-forest">
            KENYAN SPECIALTY COFFEE
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-espresso/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop enquiry button */}
        <Link
          href="/#contact"
          className="hidden border border-forest px-5 py-3 text-xs font-semibold tracking-wider text-forest transition-colors hover:bg-forest hover:text-ivory lg:inline-flex"
        >
          START A SOURCING ENQUIRY
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex items-center gap-2 border border-espresso/20 px-4 py-3 text-xs font-medium tracking-wider text-espresso transition-colors hover:border-forest lg:hidden"
        >
          {menuOpen ? "CLOSE" : "MENU"}
          <span aria-hidden="true" className="text-base">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-espresso/10 bg-ivory px-6 py-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-espresso/10 py-4 font-serif text-lg text-espresso transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex min-h-14 items-center justify-center bg-forest px-6 text-xs font-semibold tracking-[0.15em] text-ivory transition-colors hover:bg-espresso"
            >
              START A SOURCING ENQUIRY
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
