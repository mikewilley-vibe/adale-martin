import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyDonate } from "@/components/StickyDonate";
import { site } from "@/lib/content";
import "./globals.css";

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} for ${site.office}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.name} for Norfolk School Board, Ward 1. ${site.tagline}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baskerville.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main
          id="main"
          className={`flex-1 ${site.donateEnabled ? "pb-16 md:pb-0" : ""}`}
        >
          {children}
        </main>
        <SiteFooter />
        {site.donateEnabled ? <StickyDonate /> : null}
      </body>
    </html>
  );
}
