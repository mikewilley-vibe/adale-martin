import Image from "next/image";
import Link from "next/link";
import { RecordStrip, VoteBanner } from "@/components/CampaignBlocks";
import { CtaRow } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Ticker } from "@/components/Ticker";
import { ButtonLink, Display, Eyebrow } from "@/components/ui";
import { site } from "@/lib/content";

const pillars = [
  {
    title: "Great Schools",
    copy: "Raise academic outcomes and graduation pathways so every senior is ready for what’s next.",
    href: "/goals/academic-outcomes",
  },
  {
    title: "Safe Campuses",
    copy: "Expand security resources and build a culture of trust across every NPS school.",
    href: "/goals/safe-schools",
  },
  {
    title: "Strong Educators",
    copy: "Retain and support the workforce that makes Norfolk Public Schools thrive.",
    href: "/goals/workforce",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-navy">
        <Image
          src="/images/adale-family-hero.webp"
          alt="Dr. Adale Martin with her sons"
          fill
          priority
          className="object-cover object-[72%_28%] opacity-70 md:object-[78%_30%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,44,88,0.94) 0%, rgba(0,44,88,0.78) 40%, rgba(0,54,108,0.28) 68%, rgba(0,54,108,0.45) 100%), linear-gradient(0deg, rgba(0,44,88,0.7) 0%, transparent 45%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pt-5 pb-16 md:px-8 md:pt-6 md:pb-24">
          <div
            className="h-[9.75rem] shrink-0 sm:h-[11.25rem] md:h-[12.75rem]"
            aria-hidden
          />
          <div className="flex flex-1 flex-col justify-end md:justify-center">
            <div className="max-w-2xl">
              <div className="fade-up">
                <Eyebrow tone="white">Re-Elect · {site.office}</Eyebrow>
              </div>
              <Display
                as="h1"
                className="fade-up-delay-1 mt-4 text-[clamp(3.4rem,10vw,6.75rem)] leading-[0.92] font-semibold tracking-tight text-white"
              >
                Adale
                <span className="block text-gold-bright">Martin</span>
              </Display>
              <p className="fade-up-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                {site.tagline}. A tenacious advocate for Norfolk Public School
                students — and a parent who shows up.
              </p>
              <div className="fade-up-delay-3 mt-8">
                <CtaRow />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      <RecordStrip />

      <VoteBanner />

      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <Eyebrow>Adale’s Vision for NPS Students</Eyebrow>
          <blockquote className="mt-6 font-[family-name:var(--font-baskerville)] text-2xl leading-snug text-ink md:text-4xl md:leading-[1.25]">
            “I am committed to ensuring at least a{" "}
            <strong className="font-semibold text-navy">
              95% Graduation Rate
            </strong>{" "}
            for Norfolk Public School seniors so that they can have
            opportunities upon graduation, which means that they are prepared to
            be{" "}
            <strong className="font-semibold text-navy">
              Enrolled, Employed, or Enlisted.
            </strong>
            ”
          </blockquote>
          <p className="mt-6 text-sm font-medium tracking-wide text-muted">
            — Dr. Adale Martin
          </p>
        </Reveal>
      </section>

      <section className="border-y border-navy/8 bg-white/50">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.href} delay={i * 90}>
              <Link
                href={pillar.href}
                className={`group block h-full px-5 py-12 transition hover:bg-sand md:px-8 ${
                  i > 0
                    ? "border-t border-navy/8 md:border-t-0 md:border-l"
                    : ""
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  0{i + 1}
                </p>
                <Display
                  as="h2"
                  className="mt-4 text-2xl text-navy transition group-hover:text-forest"
                >
                  {pillar.title}
                </Display>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {pillar.copy}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold tracking-wide text-forest underline-offset-4 group-hover:underline">
                  Read the goal
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden bg-navy">
            <Image
              src="/images/adale-family-clean.webp"
              alt="Dr. Adale Martin"
              fill
              className="object-contain object-top transition duration-700 hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Eyebrow>About Adale</Eyebrow>
          <Display
            as="h2"
            className="mt-3 text-3xl text-navy md:text-5xl"
          >
            Leadership rooted in Norfolk’s classrooms and community
          </Display>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Elected in 2018 and Board Chair during COVID for three terms, Adale
            brings public policy expertise, special-education advocacy, and daily
            community service to the work of putting kids first.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/about">Full bio</ButtonLink>
            <ButtonLink href="/compare" variant="ghost-dark">
              Why Adale?
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <section className="bg-forest px-5 py-16 text-white md:px-8 md:py-20">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Display as="h2" className="text-3xl md:text-4xl">
                Host a sign. Make a difference.
              </Display>
              <p className="mt-3 max-w-xl text-white/75">
                Help put kids first across Ward 1 — donate, volunteer, or reach
                Adale directly at {site.phone}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/donate" variant="gold">
                Donate
              </ButtonLink>
              <ButtonLink href="/get-involved" variant="ghost">
                Get Involved
              </ButtonLink>
              <a
                href={`mailto:${site.email}?subject=Host%20a%20Sign`}
                className="inline-block border border-white/35 px-6 py-3 text-sm font-bold tracking-[0.14em] uppercase transition hover:bg-white/10"
              >
                Host a Sign
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
