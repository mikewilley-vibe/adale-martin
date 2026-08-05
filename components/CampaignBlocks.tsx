import { Countdown } from "@/components/Countdown";
import { Reveal } from "@/components/Reveal";
import { Display } from "@/components/ui";
import { recordStats } from "@/lib/content";

export function RecordStrip() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 md:grid-cols-4 md:px-8 md:py-16">
        {recordStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 70}>
            <p className="font-[family-name:var(--font-baskerville)] text-4xl font-semibold text-gold-bright md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm tracking-wide text-white/70">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function VoteBanner() {
  return (
    <section className="border-y border-navy/10 bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-14 md:px-8 md:py-14">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-forest uppercase">
            Mark your calendar
          </p>
          <Display as="h2" className="mt-2 text-2xl text-navy md:text-3xl">
            Early voting & Election Day
          </Display>
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="border border-navy/10 bg-sand/60 px-5 py-3">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                Early voting
              </p>
              <p className="mt-1 font-[family-name:var(--font-baskerville)] text-lg text-navy">
                Sept 18 – Oct 31
              </p>
            </div>
            <div className="border border-gold/40 bg-navy px-5 py-3 text-white">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                Election Day
              </p>
              <p className="mt-1 font-[family-name:var(--font-baskerville)] text-lg">
                November 8
              </p>
            </div>
            <a
              href="/vote"
              className="inline-flex items-center bg-forest px-5 py-3 text-sm font-bold tracking-[0.12em] text-white uppercase transition hover:bg-forest-soft"
            >
              Voting info
            </a>
          </div>
        </div>
        <Countdown variant="banner" />
      </div>
    </section>
  );
}
