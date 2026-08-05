import { Display } from "@/components/ui";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Display as="h2" className="text-2xl font-semibold text-gold-bright">
            {site.name}
          </Display>
          <p className="mt-2 text-sm text-white/70">{site.office}</p>
          <p className="mt-1 text-sm text-gold/90">{site.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
            Contact
          </p>
          <a
            href={`tel:${site.phone.replace(/-/g, "")}`}
            className="mt-3 block text-lg text-white transition hover:text-gold-bright"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 block text-sm text-white/75 transition hover:text-gold-bright"
          >
            {site.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
            {site.committee}
          </p>
          <p className="mt-3 text-sm text-white/75">{site.address}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={site.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold px-5 py-2.5 text-xs font-bold tracking-[0.14em] text-navy-deep uppercase transition hover:bg-gold-bright"
            >
              Donate
            </a>
            <a
              href="/get-involved"
              className="inline-block border border-white/25 px-5 py-2.5 text-xs font-bold tracking-[0.14em] uppercase transition hover:bg-white/10"
            >
              Get Involved
            </a>
            <a
              href="/media"
              className="inline-block border border-transparent px-5 py-2.5 text-xs font-semibold tracking-[0.08em] text-white/70 uppercase transition hover:text-gold-bright"
            >
              Media
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/45 md:px-8">
        {site.disclaimer}
      </div>
    </footer>
  );
}
