"use client";

import { useMemo, useState } from "react";
import { donateAmounts, site } from "@/lib/content";

function activeDonateUrl() {
  return site.donorboxUrl.trim() || site.donateUrl;
}

export function DonateChooser() {
  const [amount, setAmount] = useState<number | "custom">(50);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);

  const selectedAmount = useMemo(() => {
    if (amount === "custom") {
      const n = Number(custom);
      return Number.isFinite(n) && n > 0 ? n : null;
    }
    return amount;
  }, [amount, custom]);

  const href = activeDonateUrl();
  const usingDonorbox = Boolean(site.donorboxUrl.trim());

  return (
    <div className="bg-white/80 px-5 py-8 shadow-[0_20px_60px_rgba(0,54,108,0.08)] md:px-8 md:py-10">
      <p className="text-xs font-semibold tracking-[0.2em] text-forest uppercase">
        Choose an amount
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {donateAmounts.map((value) => {
          const active = amount === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(value)}
              className={`px-3 py-4 text-center transition ${
                active
                  ? "bg-navy text-white"
                  : "border border-navy/15 bg-sand/40 text-navy hover:bg-sand"
              }`}
            >
              <span className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">
                ${value}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-3">
        <button
          type="button"
          onClick={() => setAmount("custom")}
          className={`w-full border px-3 py-3 text-left transition ${
            amount === "custom"
              ? "border-navy bg-navy/5"
              : "border-navy/15 hover:bg-sand/40"
          }`}
        >
          <span className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            Custom amount
          </span>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-navy">$</span>
            <input
              type="number"
              min={1}
              inputMode="decimal"
              placeholder="Other"
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                setAmount("custom");
              }}
              className="w-full bg-transparent text-lg text-navy outline-none"
            />
          </div>
        </button>
      </div>

      <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-ink">
        <input
          type="checkbox"
          checked={recurring}
          onChange={(e) => setRecurring(e.target.checked)}
          className="accent-forest"
        />
        Make this a monthly gift
        <span className="text-muted">(when Donorbox is live)</span>
      </label>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 flex w-full items-center justify-center bg-gold px-6 py-4 text-sm font-bold tracking-[0.14em] text-navy-deep uppercase transition hover:bg-gold-bright"
      >
        {selectedAmount
          ? `Donate $${selectedAmount}${recurring ? " / month" : ""}`
          : "Donate now"}
      </a>

      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        {usingDonorbox
          ? "Secure checkout powered by Donorbox."
          : "Secure checkout via Rally while Donorbox enrollment finishes. Your gift goes to Friends of Adale Martin."}
      </p>
    </div>
  );
}
