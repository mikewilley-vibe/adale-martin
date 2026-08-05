import Link from "next/link";

export function StickyDonate() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-navy/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <p className="text-xs leading-snug text-white/80">
          Re-elect Adale · Kids first
        </p>
        <Link
          href="/donate"
          className="shrink-0 bg-gold px-4 py-2.5 text-xs font-bold tracking-[0.14em] text-navy-deep uppercase"
        >
          Donate
        </Link>
      </div>
    </div>
  );
}
