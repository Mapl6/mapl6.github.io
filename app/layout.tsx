import Link from "next/link";
import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  preload: false,
});
const mono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { title: site.title, description: site.description, url: site.url, type: "website" },
};

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <header className="grid-swiss sticky top-0 z-40 items-center border-b border-line bg-bg/80 py-4 backdrop-blur">
          <Link href="/" className="col-span-2 font-medium md:col-span-3">
            {site.name}®
          </Link>
          <nav aria-label="Primary" className="col-span-2 justify-self-end md:col-span-5 lg:col-span-9">
            <ul className="flex gap-6 font-mono text-label uppercase">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block min-h-6 py-1 hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main id="main">{children}</main>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
