import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow, Prose, Quote, Section } from "@/components/ui";
import { parentsIntro, site, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "What Parents Are Saying",
};

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Voices"
        title="What Parents Are Saying"
        lead="Endorsements from the families Adale serves — not political machines."
      />

      <Section narrow>
        <Reveal>
          <Display as="h2" className="text-3xl text-navy md:text-4xl">
            {parentsIntro.title}
          </Display>
          <div className="mt-6">
            <Prose>
              {parentsIntro.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </Prose>
          </div>
        </Reveal>
      </Section>

      <section className="border-t border-navy/8 bg-white/45">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow>What parents are saying about Adale</Eyebrow>
          </Reveal>
          <ul className="mt-10 space-y-0">
            {testimonials.map((t, i) => (
              <li
                key={t.name}
                className={`border-navy/10 py-10 ${
                  i > 0 ? "border-t" : ""
                }`}
              >
                <Reveal delay={(i % 3) * 60}>
                  <Quote name={t.name} role={t.role} large>
                    {t.quote}
                  </Quote>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy px-5 py-14 text-white md:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-[family-name:var(--font-fraunces)] text-2xl md:text-3xl">
              Please bother me.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-gold-bright underline-offset-4 transition hover:underline"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
