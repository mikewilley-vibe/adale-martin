import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "forest",
  size = "default",
}: {
  children: ReactNode;
  tone?: "forest" | "gold" | "white";
  size?: "default" | "large";
}) {
  const color =
    tone === "gold"
      ? "text-gold"
      : tone === "white"
        ? "text-gold-bright"
        : "text-forest";
  const scale =
    size === "large"
      ? "text-sm font-bold tracking-[0.16em] md:text-base"
      : "text-xs font-semibold tracking-[0.22em]";

  return (
    <p className={`uppercase ${scale} ${color}`}>{children}</p>
  );
}

export function Display({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={`font-[family-name:var(--font-baskerville)] text-balance ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6 font-[family-name:var(--font-baskerville)] text-lg leading-relaxed text-ink/90">
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <section
      className={`mx-auto px-5 py-16 md:px-8 md:py-24 ${
        narrow ? "max-w-3xl" : "max-w-7xl"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "navy",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "navy" | "gold" | "ghost" | "ghost-dark";
  external?: boolean;
}) {
  const styles = {
    navy: "bg-navy text-white hover:bg-forest",
    gold: "bg-gold text-navy-deep hover:bg-gold-bright",
    ghost:
      "border border-white/35 bg-white/5 text-white backdrop-blur hover:bg-white/10",
    "ghost-dark":
      "border border-navy/20 bg-transparent text-navy hover:bg-sand",
  }[variant];

  const className = `inline-block px-6 py-3 text-sm font-bold tracking-[0.14em] uppercase transition ${styles}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Quote({
  children,
  name,
  role,
  large = false,
}: {
  children: ReactNode;
  name: string;
  role?: string;
  large?: boolean;
}) {
  return (
    <figure>
      <blockquote
        className={`font-[family-name:var(--font-baskerville)] leading-relaxed text-ink italic ${
          large
            ? "text-xl md:text-2xl md:leading-snug"
            : "text-lg md:text-xl"
        }`}
      >
        “{children}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold tracking-wide text-forest">
        — {name}
        {role ? (
          <span className="font-normal text-muted">, {role}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
