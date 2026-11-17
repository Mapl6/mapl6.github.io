import { site } from "@/lib/site";

// Placeholder content; projects move to the CMS later.
const projects = [
  { slug: "project-one", client: "Client A", role: "Frontend lead", year: 2026 },
  { slug: "project-two", client: "Client B", role: "Motion & WebGL", year: 2025 },
  { slug: "project-three", client: "Client C", role: "Performance", year: 2025 },
];

const capabilities = [
  { title: "Build", body: "React, Next.js and design systems." },
  { title: "Motion", body: "GSAP, WebGL and shaders." },
  { title: "Performance & a11y", body: "Core Web Vitals and WCAG 2.2." },
];

export default function Home() {
  return (
    <>
      <section className="grid-swiss min-h-[80dvh] content-end pb-16 pt-32">
        <h1 className="col-span-full text-display-xl font-semibold uppercase lg:col-span-9">
          Frontend <span className="font-serif font-normal normal-case italic">engineer</span>
        </h1>
        <p className="col-span-full mt-8 font-mono text-label uppercase text-muted">
          Based in {site.city}
        </p>
      </section>

      <section id="work" aria-labelledby="work-title" className="grid-swiss border-t border-line py-(--section)">
        <h2 id="work-title" className="col-span-full mb-12 font-mono text-label uppercase">
          Selected work ({String(projects.length).padStart(2, "0")})
        </h2>
        <ol className="col-span-full">
          {projects.map((p, i) => (
            <li key={p.slug} className="border-b border-line">
              <span className="grid grid-cols-[3ch_1fr_auto] items-baseline gap-4 py-6 text-2xl md:text-4xl">
                <span className="font-mono text-label text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span>{p.client}</span>
                <span className="font-mono text-label uppercase text-muted">
                  {p.role} · {p.year}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="cap-title" className="grid-swiss border-t border-line py-(--section)">
        <h2 id="cap-title" className="col-span-full mb-12 font-mono text-label uppercase">
          Capabilities
        </h2>
        {capabilities.map((c) => (
          <div key={c.title} className="col-span-full mb-8 md:col-span-4 lg:col-span-4">
            <h3 className="text-2xl font-medium">{c.title}</h3>
            <p className="mt-2 text-muted">{c.body}</p>
          </div>
        ))}
      </section>

      <section id="about" aria-labelledby="about-title" className="grid-swiss border-t border-line py-(--section)">
        <h2 id="about-title" className="col-span-full mb-12 font-mono text-label uppercase">
          About
        </h2>
        <p className="col-span-full text-xl leading-snug md:text-3xl lg:col-span-8">
          Two-sentence teaser goes here: who you are and what you want to build next.
        </p>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="grid-swiss border-t border-line py-(--section)">
        <h2 id="contact-title" className="col-span-full text-display font-semibold">
          Let&apos;s <span className="font-serif font-normal italic">talk</span>
        </h2>
        <p className="col-span-full mt-12 flex flex-wrap gap-6 font-mono text-label uppercase">
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
          {site.socials.map((s) => (
            <a key={s.href} href={s.href} className="hover:text-accent" rel="me">
              {s.label} ↗
            </a>
          ))}
        </p>
      </section>
    </>
  );
}
