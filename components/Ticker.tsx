import { site } from "@/lib/content";

export function Ticker() {
  const message = `${site.earlyVoting} — Re-elect Dr. Adale Martin, Ward 1 — `;
  const loop = Array.from({ length: 8 }, () => message).join("");

  return (
    <div className="overflow-hidden border-y border-navy/10 bg-white/70 py-2.5 text-navy backdrop-blur">
      <div className="ticker-track flex w-max whitespace-nowrap text-xs font-semibold tracking-[0.18em] uppercase">
        <span className="pr-8">{loop}</span>
        <span className="pr-8" aria-hidden>
          {loop}
        </span>
      </div>
    </div>
  );
}
