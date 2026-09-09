import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Display, Prose, Quote } from "@/components/ui";
import {
  aboutClosing,
  aboutParagraphs,
  testimonials,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About Adale",
};

export default function AboutPage() {
  const featured = testimonials[0];

  return (
    <>
      <PageHero
        eyebrow="Meet the Candidate"
        eyebrowSize="large"
        title="About Adale"
        lead="A product of public education from Pre-K to Ph.D. — and an experienced advocate for Norfolk Public School students."
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-navy">
            <Image
              src="/images/AdaleMartinCampaignPhoto.jpg"
              alt="Dr. Adale Martin"
              fill
              className="object-cover object-[70%_30%]"
              sizes="(max-width: 768px) 100vw, 448px"
              priority
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 border-l-4 border-gold pl-5">
            <Quote name={featured.name} role={featured.role} large>
              {featured.quote}
            </Quote>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <article className="mt-10 bg-white/70 px-6 py-8 shadow-[0_20px_60px_rgba(0,54,108,0.08)] md:px-10 md:py-12">
            <Display as="h2" className="text-2xl text-navy md:text-3xl">
              Adale’s Commitment to Community
            </Display>
            <div className="mt-6">
              <Prose>
                {aboutParagraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                <p className="font-[family-name:var(--font-baskerville)] text-2xl leading-snug text-navy not-italic md:text-3xl">
                  {aboutClosing}
                </p>
              </Prose>
            </div>
            <div className="mt-8">
              <ButtonLink href="/service" variant="ghost-dark">
                Record of Service
              </ButtonLink>
            </div>
          </article>
        </Reveal>
      </section>
    </>
  );
}
