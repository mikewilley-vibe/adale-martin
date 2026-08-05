import type { Metadata } from "next";
import Link from "next/link";
import { DonateChooser } from "@/components/DonateChooser";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow } from "@/components/ui";
import { donateImpacts, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Dr. Adale Martin for Norfolk School Board, Ward 1. Contribute to Friends of Adale Martin.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Friends of Adale Martin"
        title="Donate"
        lead="Help put kids first across Ward 1 — signs, literature, and outreach that reach parents where they are."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-8 md:py-20">
        <Reveal>
          <Eyebrow>Why give</Eyebrow>
          <Display as="h2" className="mt-3 text-3xl text-navy md:text-4xl">
            Every dollar stays local — and goes to work for NPS students
          </Display>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            School board races aren’t won by TV buys. They’re won by yard signs
            on your street, literature at the door, and conversations with
            parents who need a board member that shows up.
          </p>

          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {donateImpacts.map((item) => (
              <li
                key={item.amount}
                className="flex items-baseline justify-between gap-6 py-4"
              >
                <span className="font-[family-name:var(--font-baskerville)] text-xl text-navy">
                  {item.amount}
                </span>
                <span className="text-right text-muted">{item.label}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-muted">
            Paid for by {site.committee}. Questions?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-forest underline-offset-2 hover:underline"
            >
              {site.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <DonateChooser />
          {/* Donorbox embed drops here later:
              <script src="https://donorbox.org/widget.js" …></script>
              <iframe src="https://donorbox.org/embed/…" …></iframe>
          */}
          <p className="mt-6 text-center text-sm text-muted">
            Prefer to volunteer instead?{" "}
            <Link
              href="/get-involved"
              className="font-semibold text-forest underline-offset-2 hover:underline"
            >
              Get involved
            </Link>
          </p>
        </Reveal>
      </section>

      <section className="border-t border-navy/8 bg-forest px-5 py-14 text-white md:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Display as="h2" className="text-2xl md:text-3xl">
                {site.disclaimer}
              </Display>
              <p className="mt-2 text-white/70">{site.address}</p>
            </div>
            <a
              href={`tel:${site.phone.replace(/-/g, "")}`}
              className="text-gold-bright underline-offset-4 transition hover:underline"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
