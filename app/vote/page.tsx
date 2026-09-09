import type { Metadata } from "next";
import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Display, Eyebrow } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vote",
  description:
    "Early voting and Election Day information for re-electing Dr. Adale Martin to Norfolk School Board, Ward 1.",
};

const officialLinks = [
  {
    label: "Check registration & polling place",
    href: "https://www.elections.virginia.gov/citizen-portal/",
  },
  {
    label: "Norfolk voter registration & elections",
    href: "https://www.norfolk.gov/210/Voter-Registration-Elections",
  },
  {
    label: "Virginia photo ID requirements",
    href: "https://www.elections.virginia.gov/casting-a-ballot/in-person-voting/",
  },
] as const;

const steps = [
  {
    title: "Confirm you’re in Ward 1",
    body: "Norfolk School Board is elected by ward. Confirm your address is in Ward 1 — a citywide or at-large vote does not elect this seat.",
  },
  {
    title: "Vote early if you can",
    body: `${site.earlyVotingStart} through ${site.earlyVotingEnd}. Avoid lines and lock in your ballot early.`,
  },
  {
    title: "Election Day",
    body: `${site.electionDay}. Bring ID as required by Virginia law and vote Adale Martin for School Board.`,
  },
] as const;

export default function VotePage() {
  return (
    <>
      <PageHero
        eyebrow="Ward 1 · Norfolk"
        title="How to vote for Adale"
        lead="Mark the calendar. Tell a neighbor. Show up — early voting or Election Day."
      />

      <section className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-12">
        <Reveal>
          <Countdown variant="panel" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full bg-navy px-6 py-8 text-white md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                Early voting
              </p>
              <Display as="h2" className="mt-3 text-3xl md:text-4xl">
                {site.earlyVotingStart} – {site.earlyVotingEnd}
              </Display>
              <p className="mt-4 text-white/75">
                Re-elect Dr. Adale Martin, Norfolk School Board, Ward 1.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full border border-gold/50 bg-sand px-6 py-8 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                Election Day
              </p>
              <Display as="h2" className="mt-3 text-3xl text-navy md:text-4xl">
                {site.electionDay}
              </Display>
              <p className="mt-4 text-muted">
                One vote for proven leadership. Kids first for a better Norfolk.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 70}>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                Step 0{i + 1}
              </p>
              <Display as="h3" className="mt-3 text-xl text-navy md:text-2xl">
                {step.title}
              </Display>
              <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 border border-navy/10 bg-white/70 px-6 py-8 md:px-8">
            <Eyebrow>Official resources</Eyebrow>
            <Display as="h2" className="mt-3 text-2xl text-navy md:text-3xl">
              Register, find your precinct, and check ID rules
            </Display>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              Use Virginia and City of Norfolk sites for voter registration,
              your polling place, and in-person ID requirements. Then vote
              Adale Martin for Norfolk School Board, Ward 1.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {officialLinks.map((link) => (
                <ButtonLink key={link.href} href={link.href} external>
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-navy/8 bg-white/55">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <Eyebrow>Take a friend</Eyebrow>
            <Display as="h2" className="mt-3 text-3xl text-navy">
              Help someone else vote
            </Display>
            <p className="mt-4 text-lg text-muted">
              Share Adale’s record, offer a ride, or bring a neighbor to early
              voting. Local races turn on turnout.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/get-involved">Get involved</ButtonLink>
              <ButtonLink href="/compare" variant="ghost-dark">
                Why Adale?
              </ButtonLink>
              <Link
                href="/parents"
                className="inline-block border border-transparent px-6 py-3 text-sm font-semibold tracking-wide text-navy underline-offset-4 transition hover:underline"
              >
                Parent voices
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest px-5 py-14 text-white md:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-[family-name:var(--font-baskerville)] text-2xl md:text-3xl">
              Questions about voting in Ward 1?
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
