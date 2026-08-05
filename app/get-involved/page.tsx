import type { Metadata } from "next";
import { InvolveForm } from "@/components/InvolveForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Display, Eyebrow } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, request a yard sign, or join the email list for Dr. Adale Martin’s Ward 1 campaign.",
};

const paths = [
  {
    title: "Host a yard sign",
    body: "Put Kids First on your lawn. The most visible way neighbors learn who’s running — and why.",
  },
  {
    title: "Volunteer on the ground",
    body: "Canvass, phone bank, or help on Election Day. Local races are won by people who show up.",
  },
  {
    title: "Join the email list",
    body: "Stay in the loop on early voting, events, and how to help across Ward 1.",
  },
] as const;

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Join the Campaign"
        title="Get Involved"
        lead="Local elections are won by neighbors. Request a sign or volunteer an hour — every action counts."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {paths.map((path, i) => (
            <Reveal key={path.title} delay={i * 80}>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                0{i + 1}
              </p>
              <Display as="h2" className="mt-3 text-2xl text-navy">
                {path.title}
              </Display>
              <p className="mt-3 text-muted">{path.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-navy/8 bg-white/55">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow>Yard signs</Eyebrow>
            <Display as="h2" className="mt-3 text-3xl text-navy md:text-4xl">
              Request a lawn sign
            </Display>
            <p className="mt-4 text-muted">
              Tell us where to deliver. We’ll follow up to confirm availability
              in your neighborhood.
            </p>
            <div className="mt-8">
              <InvolveForm mode="sign" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Volunteers</Eyebrow>
            <Display as="h2" className="mt-3 text-3xl text-navy md:text-4xl">
              Join the team
            </Display>
            <p className="mt-4 text-muted">
              Pick what fits your schedule — from social shares to door knocking.
            </p>
            <div className="mt-8">
              <InvolveForm mode="volunteer" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <Eyebrow>Stay in the loop</Eyebrow>
          <Display as="h2" className="mt-3 text-3xl text-navy">
            Get campaign updates
          </Display>
          <p className="mt-4 text-muted">
            Early voting reminders, events, and ways to help — straight to your
            inbox.
          </p>
          <div className="mt-8">
            <InvolveForm mode="updates" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
