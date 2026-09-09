import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Prose } from "@/components/ui";

const goalLinks = [
  {
    href: "/goals/academic-outcomes",
    label: "Improving Academic Outcomes",
  },
  {
    href: "/goals/safe-schools",
    label: "Safe and Secure Schools",
  },
  {
    href: "/goals/workforce",
    label: "Workforce Retention",
  },
] as const;

export function GoalNav({ current }: { current: string }) {
  return (
    <nav
      className="mb-10 flex flex-wrap gap-2 border-b border-navy/10 pb-6"
      aria-label="Goals"
    >
      {goalLinks.map((g) => (
        <Link
          key={g.href}
          href={g.href}
          className={`px-3 py-2 text-sm font-medium tracking-wide transition ${
            current === g.href
              ? "bg-navy text-white"
              : "bg-white/60 text-navy hover:bg-sand"
          }`}
        >
          {g.label}
        </Link>
      ))}
    </nav>
  );
}

export function GoalPage({
  title,
  eyebrow = "Goals",
  paragraphs,
  href,
  highlight,
}: {
  title: string;
  eyebrow?: string;
  paragraphs: readonly string[];
  href: string;
  highlight?: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <GoalNav current={href} />
        </Reveal>
        {highlight && (
          <Reveal delay={60}>
            <p className="mb-10 border-l-4 border-gold bg-white/55 py-4 pl-5 font-[family-name:var(--font-baskerville)] text-xl leading-snug text-navy md:text-2xl">
              {highlight}
            </p>
          </Reveal>
        )}
        <Reveal delay={100}>
          <Prose>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </Prose>
        </Reveal>
      </section>
    </>
  );
}
