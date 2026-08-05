"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getTimeLeft(targetMs: number): TimeLeft {
  const diff = targetMs - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, done: false };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

type CountdownProps = {
  variant?: "banner" | "panel";
};

export function Countdown({ variant = "banner" }: CountdownProps) {
  const targetMs = new Date(site.electionDayIso).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(targetMs));
    const id = window.setInterval(() => {
      setTime(getTimeLeft(targetMs));
    }, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const units = time
    ? [
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Mins", value: time.minutes },
        { label: "Secs", value: time.seconds },
      ]
    : [
        { label: "Days", value: "—" },
        { label: "Hours", value: "—" },
        { label: "Mins", value: "—" },
        { label: "Secs", value: "—" },
      ];

  if (time?.done) {
    return (
      <div
        className={
          variant === "panel"
            ? "bg-navy px-6 py-8 text-center text-white"
            : "text-center"
        }
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          Election Day
        </p>
        <p className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl md:text-3xl">
          Today is the day — vote Adale Martin
        </p>
      </div>
    );
  }

  const isPanel = variant === "panel";

  return (
    <div className={isPanel ? "bg-navy px-5 py-8 text-white md:px-8" : ""}>
      <p
        className={`text-xs font-semibold tracking-[0.2em] uppercase ${
          isPanel ? "text-gold" : "text-forest"
        }`}
      >
        Countdown to Election Day · {site.electionDay}
      </p>
      <div
        className={`mt-4 grid grid-cols-4 gap-2 sm:gap-3 ${
          isPanel ? "max-w-xl" : ""
        }`}
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className={
              isPanel
                ? "border border-white/15 bg-white/5 px-2 py-3 text-center sm:px-3"
                : "border border-navy/10 bg-white/80 px-2 py-3 text-center sm:px-3"
            }
          >
            <p
              className={`font-[family-name:var(--font-fraunces)] text-2xl font-semibold tabular-nums sm:text-3xl md:text-4xl ${
                isPanel ? "text-gold-bright" : "text-navy"
              }`}
            >
              {typeof unit.value === "number" ? pad(unit.value) : unit.value}
            </p>
            <p
              className={`mt-1 text-[10px] font-semibold tracking-[0.16em] uppercase sm:text-xs ${
                isPanel ? "text-white/60" : "text-muted"
              }`}
            >
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
