import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Display } from "@/components/ui";
import { serviceRecordGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Record of Service",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Public Service"
        title="Record of Service"
        lead="A record of leadership, civic work, and organizational affiliations in Norfolk and Hampton Roads."
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <Display as="h2" className="text-3xl text-navy md:text-4xl">
            Adale’s Record of Service to Norfolk, Virginia
          </Display>
        </Reveal>
        <div className="mt-12 space-y-12">
          {serviceRecordGroups.map((group) => (
            <Reveal key={group.title}>
              <h3 className="text-xs font-bold tracking-[0.18em] text-forest uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 font-[family-name:var(--font-baskerville)] text-base leading-snug text-ink md:text-lg">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
