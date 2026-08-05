"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setGoalsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-start justify-between gap-6 px-5 py-5 md:px-8 md:py-6">
        <Link href="/" className="group shrink-0" aria-label="Home">
          <div className="overflow-hidden border border-white/20 bg-navy shadow-[0_12px_40px_rgba(6,22,40,0.35)] transition duration-300 group-hover:-translate-y-0.5">
            <div className="bg-forest px-3 py-1 text-center text-[10px] font-semibold tracking-[0.22em] text-white uppercase">
              Re-Elect
            </div>
            <div className="bg-navy px-4 py-2.5 text-center">
              <div className="font-[family-name:var(--font-fraunces)] text-xl leading-none font-semibold tracking-wide text-gold-bright md:text-2xl">
                ADALE
              </div>
              <div className="font-[family-name:var(--font-fraunces)] text-2xl leading-none font-bold tracking-wide text-white md:text-3xl">
                MARTIN
              </div>
            </div>
            <div className="border-t border-white/10 bg-navy-deep px-3 py-2 text-center">
              <div className="text-[10px] tracking-wide text-white/70 italic">
                {site.office}
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-gold-bright">
                {site.tagline}
              </div>
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 pt-2 lg:flex">
          <nav className="flex items-center gap-1" aria-label="Primary">
            {nav.map((item) =>
              "children" in item ? (
                <div key={item.label} className="relative group/nav">
                  <button
                    type="button"
                    className={`px-3 py-2 text-sm font-medium tracking-wide transition ${
                      item.children.some((c) => isActive(c.href))
                        ? "text-gold-bright"
                        : "text-white/90 hover:text-white"
                    }`}
                    aria-expanded="false"
                  >
                    {item.label}
                  </button>
                  <div className="invisible absolute top-full left-0 z-20 min-w-[240px] translate-y-1 border border-white/10 bg-navy-deep/95 opacity-0 shadow-xl backdrop-blur-md transition group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-3 text-sm transition hover:bg-white/5 ${
                          isActive(child.href)
                            ? "text-gold-bright"
                            : "text-white/85"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition ${
                    isActive(item.href)
                      ? "text-gold-bright underline decoration-gold/70 underline-offset-8"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="ml-3 flex items-center gap-2 border-l border-white/20 pl-4">
            <SocialLinks />
            <a
              href={site.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-gold px-4 py-2 text-xs font-bold tracking-[0.14em] text-navy-deep uppercase transition hover:bg-gold-bright"
            >
              Donate
            </a>
          </div>
        </div>

        <button
          type="button"
          className="mt-1 border border-white/25 bg-white/5 px-3 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-navy-deep/98 px-5 py-6 backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) =>
              "children" in item ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-base text-white"
                    onClick={() => setGoalsOpen((v) => !v)}
                    aria-expanded={goalsOpen}
                  >
                    {item.label}
                    <span className="text-gold">{goalsOpen ? "−" : "+"}</span>
                  </button>
                  {goalsOpen && (
                    <div className="mb-2 ml-3 border-l border-white/15 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-white/80"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-base text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
            <a
              href={site.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-gold px-4 py-3 text-center text-sm font-bold tracking-[0.14em] text-navy-deep uppercase"
            >
              Donate
            </a>
            <div className="mt-4 flex gap-4">
              <SocialLinks />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function SocialLinks() {
  return (
    <>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/75 transition hover:text-gold-bright"
        aria-label="Instagram"
      >
        <IconInstagram />
      </a>
      <a
        href={site.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/75 transition hover:text-gold-bright"
        aria-label="Facebook"
      >
        <IconFacebook />
      </a>
      <a
        href={site.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/75 transition hover:text-gold-bright"
        aria-label="Twitter"
      >
        <IconX />
      </a>
    </>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.9 2H22l-7.2 8.2L23 22h-6.5l-5.1-6.6L5.7 22H2.6l7.7-8.8L1 2h6.7l4.6 6L18.9 2zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20z" />
    </svg>
  );
}
