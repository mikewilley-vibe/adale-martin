import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Prose, Quote } from "@/components/ui";
import { aboutClosing, aboutParagraphs, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Adale",
};

export default function AboutPage() {
  const featured = testimonials[0];

  return (
    <>
      <PageHero
        eyebrow="Meet the Candidate"
        title="About Adale"
        lead="A product of public education from Pre-K to Ph.D. — and a tenacious advocate for Norfolk Public School students."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8 md:py-24">
        <aside className="space-y-10">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden bg-navy">
              <Image
                src="/images/adale-family-clean.webp"
                alt="Dr. Adale Martin"
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-l-4 border-gold pl-5">
              <Quote name={featured.name} role={featured.role} large>
                {featured.quote}
              </Quote>
            </div>
          </Reveal>
        </aside>

        <Reveal delay={80}>
          <article className="bg-white/70 px-6 py-8 shadow-[0_20px_60px_rgba(0,54,108,0.08)] md:px-10 md:py-12">
            <Prose>
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <p className="font-[family-name:var(--font-baskerville)] text-2xl leading-snug text-navy not-italic md:text-3xl">
                {aboutClosing}
              </p>
            </Prose>
          </article>
        </Reveal>
      </section>
    </>
  );
}
