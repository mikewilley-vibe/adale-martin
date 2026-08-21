import { Display, Eyebrow } from "@/components/ui";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-52 pb-16 md:pt-64 md:pb-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 85% 20%, rgba(132,189,0,0.28), transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(0,54,108,0.55), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(180deg, black, transparent 90%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        {eyebrow && (
          <div className="fade-up">
            <Eyebrow tone="white">{eyebrow}</Eyebrow>
          </div>
        )}
        <Display
          as="h1"
          className="fade-up-delay-1 mt-3 text-4xl leading-[1.1] font-semibold text-white md:text-6xl"
        >
          {title}
        </Display>
        {lead && (
          <p className="fade-up-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

export function CtaRow() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="/donate"
        className="bg-gold px-6 py-3 text-sm font-bold tracking-[0.14em] text-navy-deep uppercase transition hover:bg-gold-bright"
      >
        Donate
      </a>
      <a
        href="mailto:adale.martin4NPS@gmail.com?subject=Volunteer"
        className="border border-white/35 bg-white/5 px-6 py-3 text-sm font-bold tracking-[0.14em] text-white uppercase backdrop-blur transition hover:bg-white/10"
      >
        Volunteer
      </a>
      <a
        href="/about"
        className="border border-transparent px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white/80 underline-offset-4 transition hover:text-gold-bright hover:underline"
      >
        Meet Adale
      </a>
    </div>
  );
}
