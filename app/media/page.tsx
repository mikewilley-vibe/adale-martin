import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media",
};

const links = [
  {
    label: "Instagram",
    href: site.social.instagram,
    note: "Campaign photos and updates",
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    note: "Events and community posts",
  },
  {
    label: "X / Twitter",
    href: site.social.twitter,
    note: "News and announcements",
  },
] as const;

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Press & Updates"
        title="Media"
        lead="Follow Adale’s campaign channels for the latest from Ward 1."
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {links.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-7 transition"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div>
                    <Display
                      as="h2"
                      className="text-2xl text-navy transition group-hover:text-forest md:text-3xl"
                    >
                      {link.label}
                    </Display>
                    <p className="mt-1 text-sm text-muted">{link.note}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold tracking-wide text-gold uppercase transition group-hover:translate-x-1">
                    Open →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 bg-navy px-6 py-8 text-white md:px-8">
            <Eyebrow tone="white">Press contact</Eyebrow>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block font-[family-name:var(--font-fraunces)] text-2xl transition hover:text-gold-bright md:text-3xl"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/-/g, "")}`}
              className="mt-2 block text-white/70 transition hover:text-white"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
