import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Display, Eyebrow } from "@/components/ui";
import { comparison } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Adale?",
  description:
    "Compare Dr. Adale Martin’s school board record, education, and community leadership with the challenger.",
};

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="The Choice for Ward 1"
        title="Why Adale?"
        lead={comparison.intro}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[0.85fr_1.15fr] md:gap-14 md:px-8 md:py-20">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden bg-navy">
            <Image
              src="/images/adale-family-clean.webp"
              alt="Dr. Adale Martin with her sons"
              fill
              priority
              className="object-contain object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <Eyebrow>A parent who leads</Eyebrow>
          <Display as="h2" className="mt-3 text-3xl text-navy md:text-5xl">
            Experience, advocacy, and results — already on the job
          </Display>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Adale isn’t asking for a chance to learn the role. She was the Board
            Chair during COVID for three terms, a special-education parent, and a
            proven advocate for Norfolk Public School students.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-navy/10 bg-white/60">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <Reveal>
            <div className="border-b border-navy/10 bg-navy px-5 py-10 text-white md:border-r md:border-b-0 md:px-10 md:py-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                Re-Elect
              </p>
              <Display as="h2" className="mt-2 text-3xl md:text-4xl">
                Dr. Adale Martin
              </Display>
              <p className="mt-3 text-white/75">
                Incumbent · Board Chair during COVID (3 terms) · Proven record
                for NPS students
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-sand-deep/40 px-5 py-10 md:px-10 md:py-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                Also on the ballot
              </p>
              <Display as="h2" className="mt-2 text-3xl text-navy/70 md:text-4xl">
                Challenger
              </Display>
              <p className="mt-3 text-muted">
                First-time school board candidate
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <Eyebrow>Side by side</Eyebrow>
          <Display as="h2" className="mt-3 text-3xl text-navy md:text-4xl">
            Qualifications that matter for this seat
          </Display>
          <p className="mt-4 max-w-2xl text-muted">
            Facts below are drawn from each campaign’s own public materials —
            Adale’s bio and record alongside the challenger’s published platform.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {comparison.rows.map((row, i) => (
            <Reveal key={row.category} delay={(i % 3) * 50}>
              <article className="overflow-hidden border border-navy/10 bg-white/70">
                <div className="border-b border-navy/10 bg-sand/80 px-5 py-3 md:px-6">
                  <h3 className="text-xs font-bold tracking-[0.18em] text-forest uppercase">
                    {row.category}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2">
                  <div className="relative border-b border-navy/10 px-5 py-6 md:border-r md:border-b-0 md:px-6 md:py-8">
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-gold"
                      aria-hidden
                    />
                    <p className="text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
                      Adale Martin
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-baskerville)] text-base leading-relaxed text-ink md:text-lg">
                      {row.adale}
                    </p>
                  </div>
                  <div className="px-5 py-6 md:px-6 md:py-8">
                    <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
                      {comparison.opponentName}
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-baskerville)] text-base leading-relaxed text-muted md:text-lg">
                      {row.opponent}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-navy/8 bg-white/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow>The bottom line</Eyebrow>
            <Display
              as="h2"
              className="mt-3 max-w-2xl text-3xl text-navy md:text-5xl"
            >
              Experience isn’t optional when kids are counting on you
            </Display>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {comparison.closingPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  0{i + 1}
                </p>
                <Display as="h3" className="mt-3 text-xl text-navy md:text-2xl">
                  {point.title}
                </Display>
                <p className="mt-3 leading-relaxed text-muted">{point.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-5 py-16 text-white md:px-8 md:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Display as="h2" className="text-3xl md:text-4xl">
                Re-elect the leader who already delivers
              </Display>
              <p className="mt-3 max-w-xl text-white/75">
                Keep proven leadership on the Norfolk School Board. Volunteer or
                share Adale’s record with a neighbor.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/get-involved" variant="gold">
                Get Involved
              </ButtonLink>
              <Link
                href="/about"
                className="inline-block border border-white/35 px-6 py-3 text-sm font-bold tracking-[0.14em] uppercase transition hover:bg-white/10"
              >
                Full bio
              </Link>
              <Link
                href="/parents"
                className="inline-block border border-transparent px-6 py-3 text-sm font-semibold tracking-wide text-white/80 underline-offset-4 transition hover:text-gold-bright hover:underline"
              >
                Parent voices
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
