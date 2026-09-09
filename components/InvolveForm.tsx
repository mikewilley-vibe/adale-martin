"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

const volunteerOptions = [
  "Yard sign",
  "Canvass / door knocking",
  "Phone banking",
  "Host a meet & greet",
  "Social media sharing",
  "Election Day poll support",
] as const;

type Mode = "volunteer" | "sign" | "updates";

export function InvolveForm({ mode }: { mode: Mode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<string[]>(
    mode === "sign" ? ["Yard sign"] : [],
  );
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  function toggle(option: string) {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option],
    );
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const subject =
      mode === "sign"
        ? "Yard sign request"
        : mode === "updates"
          ? "Campaign updates signup"
          : "Volunteer signup";

    try {
      const res = await fetch("/api/involve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          name,
          email,
          phone,
          address,
          interests: selected,
          message,
          subject,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Could not send.");
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setMessage("");
      setSelected(mode === "sign" ? ["Yard sign"] : []);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Could not send. Please email the campaign.",
      );
    }
  }

  const field =
    "mt-1 w-full border border-navy/15 bg-white px-3 py-2.5 text-ink outline-none transition focus:border-forest";

  if (status === "sent") {
    return (
      <p className="border border-forest/20 bg-white/80 px-4 py-4 text-sm leading-relaxed text-forest">
        Thank you. The campaign received your note and will follow up.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-xs font-semibold tracking-wide text-muted uppercase">
          Name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          autoComplete="name"
        />
      </div>
      <div>
        <label className="text-xs font-semibold tracking-wide text-muted uppercase">
          Email
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          autoComplete="email"
        />
      </div>
      {mode !== "updates" && (
        <div>
          <label className="text-xs font-semibold tracking-wide text-muted uppercase">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={field}
            autoComplete="tel"
          />
        </div>
      )}
      {(mode === "sign" || mode === "volunteer") && (
        <div>
          <label className="text-xs font-semibold tracking-wide text-muted uppercase">
            Address / Neighborhood
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={field}
            placeholder="Ward 1 neighborhood or street"
            autoComplete="street-address"
          />
        </div>
      )}
      {mode === "volunteer" && (
        <fieldset>
          <legend className="text-xs font-semibold tracking-wide text-muted uppercase">
            How can you help?
          </legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {volunteerOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2 border border-navy/10 bg-white/70 px-3 py-2 text-sm text-ink"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => toggle(option)}
                  className="accent-forest"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div>
        <label className="text-xs font-semibold tracking-wide text-muted uppercase">
          {mode === "updates" ? "Anything we should know?" : "Notes"}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className={field}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-navy px-6 py-3 text-sm font-bold tracking-[0.14em] text-white uppercase transition hover:bg-forest disabled:opacity-60"
      >
        {status === "sending"
          ? "Sending…"
          : mode === "sign"
            ? "Request a sign"
            : mode === "updates"
              ? "Get updates"
              : "Volunteer"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-800">
          {error} You can also write{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
