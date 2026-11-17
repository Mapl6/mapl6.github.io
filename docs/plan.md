# The Living Gallery: A Complete, Phased Build Plan for a Premium Frontend Portfolio (research date 2026-11-15)

Build a fast, accessible, Swiss-grid DOM site first (weeks 1–5), then add one WebGL "living gallery" layer on top (weeks 6–9), and polish, test and launch it (weeks 10–12). Every flashy effect should be an optional extra over a page that already works with no JavaScript. This is the same layering the best 2025–2026 portfolios use. Mathias Adolfsson runs "a single full-screen WebGPU scene" while "the text and controls stay in the DOM on top", and Stefan Vitasović's mobile version "retains the same UI interactions and motion principles with the exception of the WebGL layer."

## TL;DR

- **What to build:** Concept B "Living Gallery" on a Concept A "Swiss Motion Engineer" base. That means a 12-column Swiss grid, one grotesk plus one serif italic, and a single recurring motion motif (character-slice word assembly). On top sits a WebGL project carousel unified by a grain/LED/dither "lens". It degrades cleanly: WebGPU → WebGL2 → DOM list → no-JS HTML.
- **How:** Next.js App Router + React 19 + Tailwind 4 + GSAP (all plugins free since v3.13) + Lenis + Three.js/R3F + Sanity + Mux/R2 + Vercel, built over 9 phases (0–8) in about 12 weeks at 4–5 h/day. Stretch Phase 9 is optional 3D or a terminal Easter egg, always behind a 2D escape hatch.
- **What "done" means:** Core Web Vitals "Good" at p75 (LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1), WCAG 2.2 AA (including 24×24 px targets and focus never hidden), a real reduced-motion version, and 3–4 case studies written as problem → role → hard decision → metric → stack. Then submit to Awwwards (US$65 standard submission), CSSDA and the GSAP showcase, and publish a Codrops-style write-up.

---

## 1. Vision and chosen concept

### Positioning statement (template — fill in your specifics)
"I'm [Name], a frontend engineer who turns product and brand ideas into fast, accessible, motion-rich interfaces. I sit between design and engineering: I take a Figma file to a shipped, measurable product, and I build the motion systems, WebGL moments and component architecture that make interfaces feel considered. My work has [one hard metric, e.g. 'cut LCP from 4.1 s to 1.8 s for a 2M-visit store']. This site is itself the proof: every effect degrades gracefully, respects reduced motion, and scores green on Core Web Vitals."

Why this framing: Léo Parpeix's goal (from the previous report) of letting visitors "understand my skill set in under 10 seconds" is the right bar for a mid-level developer. Recruiters skim. Award juries reward craft. Awwwards' own Evaluation System page scores sites on Design 40%, Usability 30%, Creativity 20% and Content 10%. Usability and content together weigh as much as design, so restraint pays.

### Concept decision
| Concept | Role in this plan | Risk |
|---|---|---|
| A – Swiss Motion Engineer (DOM, grid, type, GSAP) | The **base**; it ships first and stands alone | Low |
| B – Living Gallery (WebGL carousel + unifying shader lens) | The **signature layer** on top of A | Medium |
| C – 3D explorable desk / OS / terminal | **Optional Phase 9** behind a "2D site" link | High |

### Five design principles
1. **Content first, effect second.** Every section must read as plain semantic HTML before any animation is added. Stas Bondar kept the full About text in the DOM even while letters became physics bodies.
2. **One motif, repeated.** Stefan Vitasović describes motion motifs as "similar to a catchy part of a song". Yours is the character-slice word assembly, reused in the hero, section titles and page transitions.
3. **One lens for all media.** A shared grain/LED/dither shader makes mismatched client footage feel like one body of work. Vitasović notes that the LED overlay plus grain allowed "a higher video compression rate without noticeable artifacts" and presented "all the projects through the same lens".
4. **One rhythm.** One lerp/easing family drives everything. Adolfsson: "One lerp factor drives the carousel, the camera tilt, the light and the gallery scroll." Use expo-out for entrances and power3.inOut for state changes.
5. **Progressive by construction.** WebGPU → WebGL2 → DOM → no-JS, with reduced motion as a designed alternative rather than an off switch. Mobile drops WebGL and keeps the motion principles.

---

## 2. Reference board (what to study, feature by feature)

Legend: ✅ = confirmed in this research session (2026-11-15); ◐ = carried from the previous report, not re-opened today; ⚠ = could not be verified.

| Feature | Source + live URL | What exactly to look at | Visual/image reference |
|---|---|---|---|
| **Loader** | Max Milkin — maxmilkin.com ◐ | Rings of words (MAX, MILKIN, DESIGN, CREATIVE, FRONTEND, DEVELOPER) "breathing" along arcs while rings rotate. GSAP runs the in/out sequence and the PixiJS ticker runs the idle motion. He first tried SVG and then "switched to PixiJS and moved the whole thing to WebGL" | Codrops "Two Portfolios, One Process" (2 Dec 2025) ✅; details.so preloader capture ✅ |
| **Hero motif** | Stefan Vitasović — linked from his Codrops case study ⚠ (domain not re-checked) | Words split into N masked slices that slide into alignment ("glass-like parallax"); Swiss offset layouts; lo-fi noise | Codrops "Case Study: Stefan Vitasović Portfolio — 2025" (5 Mar 2025, moodboard + GIFs) ✅; Siteinspire #13009 ✅ |
| **Dithered reel** | Stas Bondar — stabondar.com ◐ | Bayer-matrix ordered dithering on nearly all media; thumbnails resolve on hover | Codrops "Stas Bondar '25" (25 Mar 2025) ✅ |
| **Navigation, magnetic buttons, cursor, contact** | Dennis Snellenberg — dennissnellenberg.com ✅ | Curved full-screen menu, magnetic buttons, hover-follow project image, name marquee, giant contact CTA | Olivier Larose "Rebuild an Awwwards Landing page…" (24 Jul 2023) and "Project Gallery Mouse Hover" (11 Jun 2023) ✅ |
| **Project showcase (WebGL)** | Mathias Adolfsson — mathiasadolfsson.dev ✅ | Projects on a 180° oval arc; the hovered slide bulges, the camera tilts and a light moves opposite to the cursor; the slide unbends into the case-study hero; the barrel gallery is "the same concept as the main carousel, just turned 90 degrees" | Codrops "Mathias Adolfsson '26" (5 Nov 2026) ✅; One Page Love, Orpetron screenshots ✅ |
| **Showcase fallback / Experience** | Brittany Chiang — brittanychiang.com ◐ | Sticky sidebar, tabbed experience, scannable cards | github.com/bchiang7/v4 ✅ |
| **Case-study page** | Adolfsson ✅ + Arnaud Rocca — arnaudrocca.fr ◐ | Slide-to-hero continuity. Rocca: "project pages are the most important part of a portfolio" | Codrops Rocca article (31 Mar 2026) ✅; Awwwards HM (15 Mar 2026) ✅ |
| **About** | Stas Bondar ◐ / Andrea Aurelio Napoli — au-rel.io ◐ | Bondar: SplitText characters become Matter.js bodies. Au-rel.io: an interactive self-portrait, a 12-column grid, and media that "slide up inside containers that are already fixed in position" | Codrops Bondar ✅; Codrops "Inside Au-rel.io" (9 Nov 2026) ✅ |
| **Lab** | Juan Mora Romero — juanmoraromero.com ◐ | Infinite draggable Lab; velocity-gated RGB channel split; cloth posters | Codrops "Juan Mora Romero '26" (22 Oct 2026) ✅; landing.love ✅ |
| **Micro-interactions** | Rauno Freiberg (rauno.me), Emil Kowalski (emilkowal.ski), Paco Coursey (paco.me) ◐ | Index-page density, crafted hover/press states | Gleam Studio "21 Best Portfolio Websites 2026" ✅ |
| **Page transitions** | Cyd Stumpel — cydstumpel.nl ✅ | Native View Transitions + scroll-driven CSS, with a GSAP fallback "if you see the 🦖" | Awwwards SOTD "Cyd Stumpel Portfolio 2025" (videos) ✅; her "Practical Guide to the CSS View Transition API" ✅ |
| **Motion architecture** | Arnaud Rocca ◐ | GSAP effects auto-registered from a folder via Vite glob import; OGL fluid slider | Codrops Rocca ✅ |
| **Sound** | Maria Vasilyeva ⚠ | Music as layout framework; must be opt-in | Codrops "When a Website Becomes a Melody" (listed, not opened) |
| **Mobile** | Vitasović ✅, Au-rel.io ✅ | No WebGL; native `<video>`; on phones the grid becomes "a looping vertical sequence" | Both Codrops articles ✅ |
| **Performance benchmark** | Troa ◐ | "500KB, 12 requests, zero bloat" | Codrops post ✅ |
| **3D stretch** | Bruno Simon — bruno-simon.com; brunosimon/folio-2025 ✅ | Drivable world, physics, day/night | GitHub (MIT) ✅ |

---

## 3. Design system specification

### 3.1 Grid and breakpoints
| Token | Mobile | Tablet | Desktop | Wide |
|---|---|---|---|---|
| Min-width | 0 | 768 px | 1024 px | 1440 px |
| Columns | 4 | 8 | 12 | 12 |
| Gutter | 16 px | 20 px | 24 px | clamp(24px,1.6vw,32px) |
| Outer margin | 16 px | 32 px | 40 px | clamp(40px,3vw,64px) |
| Max content | — | — | 1440 px | 1680 px (media may bleed) |

Au-rel.io sizes containers to proportions "commonly used across different platforms". Adopt fixed media ratios of 16:9, 4:5, 1:1 and 9:16 so the same assets work in OG images, social posts and the grid. Reserving these ratios also prevents CLS.

### 3.2 Typography (all free)
- **Grotesk:** Inter / Inter Tight (Google Fonts, OFL). Inter Tight is "more assertive at large sizes" for display. Free alternative: Switzer (Fontshare).
- **Serif italic accent:** Instrument Serif (Google Fonts, OFL). Caveat: Muzli's "Font pairings 2026" (Petras Baukys, 21 Oct 2026) crawled 2,190 sites from 24 galleries between 1 January and 20 October 2026. It found Instrument Serif the leading serif and cited Creative Bloq reporting designers complaining it's "starting to look lazy". Use one italic word per headline at most, or swap in Fraunces or Newsreader.
- **Mono:** JetBrains Mono or Geist Mono for labels, the Lab and the terminal.

| Step | Use | Size | Line-height | Tracking |
|---|---|---|---|---|
| Display XL | Hero name | clamp(64px,12vw,220px) | 0.9 | -0.04em |
| Display | Section titles | clamp(44px,6vw,112px) | 0.95 | -0.03em |
| H2 | Case-study headings | clamp(28px,3vw,48px) | 1.05 | -0.02em |
| H3 | Card titles | 22–28 px | 1.15 | -0.01em |
| Body L / Body | Intros / running text | 20 / 16–17 px | 1.45 / 1.55 | 0 |
| Label | Mono meta | 12–13 px uppercase | 1.3 | +0.06em |

Self-host fonts via `next/font` (Latin subset) and preload only the display weight used above the fold.

### 3.3 Color tokens (my proposals — verify contrast)
| Token | Dark (default) | Light |
|---|---|---|
| `--bg` | #0B0B0C | #F2F0EB |
| `--surface` | #141416 | #E8E5DE |
| `--fg` | #EDEBE6 | #111111 |
| `--fg-muted` | #8E8B85 | #5C5A55 |
| `--line` | rgba(237,235,230,.12) | rgba(17,17,17,.12) |
| `--accent` | one only: #FF4D1F (signal orange) or #C6FF3D (acid lime) | same hue, darkened |
| `--focus` | accent, 2 px outline + 2 px offset | same |

### 3.4 Spacing
4-px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192. Section rhythm is `clamp(96px,14vw,224px)`.

### 3.5 Motion tokens
| Token | Value | Use |
|---|---|---|
| `--dur-xs` / `-s` / `-m` | 150 / 300 / 600 ms | press, small state, reveals |
| `--dur-l` | 1000–1250 ms | hero assembly (Vitasović: `1.25 + index*0.025` s) |
| `--stagger` | 25 ms | slices/chars |
| `ease-enter` | expo.out ≈ `cubic-bezier(0.16,1,0.3,1)` | entrances |
| `ease-state` | power3.inOut ≈ `cubic-bezier(0.65,0,0.35,1)` | menu, toggles, transitions |
| `lerp` | 0.08–0.1/frame, frame-rate normalised `1-Math.pow(1-k, dt*60)` | carousel, cursor, light, tilt |

### 3.6 Grain / LED / dither "lens" recipe
- **DOM layer (all devices):** one fixed `aria-hidden` div with a 256×256 tiled noise PNG (~10 KB) at 4–7% opacity, `mix-blend-mode: overlay`. Shift `background-position` at 8 fps, and turn the shift off under reduced motion.
- **WebGL layer (desktop):** in the media fragment shader, add hashed grain, an LED/scanline mask `step(fract(uv.y*rows), 0.85)`, and optional Bayer 8×8 dithering mixed by `uProgress` (0 = dithered, 1 = colour on hover), following Bondar.

### 3.7 ASCII wireframes

**Home — desktop (1440)**
```
┌──────────────────────────────────────────────────────────────┐
│ NAME®        Work  About  Lab  Contact        [● Available]  │
├──────────────────────────────────────────────────────────────┤
│  F R O N T E N D        ← slice-assembled display (cols 1-9) │
│  *engineer* of motion   ← serif italic accent word           │
│  Based in [City]         ┌───────────────┐                   │
│  Local time 14:02        │ dithered reel │ ← cols 8-12       │
│  ↓ Scroll                └───────────────┘                   │
├──────────────────────────────────────────────────────────────┤
│ SELECTED WORK (04)                                           │
│      ╭────╮ ╭──────╮ ╭──────────╮ ╭──────╮ ╭────╮ ← oval arc │
│    ╰────╯ ╰──────╯  ╰──────────╯  ╰──────╯ ╰────╯            │
│   01 Client — Role — Year            [drag] ← DOM caption    │
├──────────────────────────────────────────────────────────────┤
│ CAPABILITIES  Build / Motion / Performance (3 cols)          │
│ ABOUT — paragraph whose letters fall (Matter.js) on scroll   │
│ EXPERIENCE  [Co.A][Co.B][Co.C]  │ role, dates, 3 bullets     │
│ WRITING / LAB  → 3 cards + "Enter the Lab"                   │
│ LET'S TALK  (giant magnetic CTA)   email · socials · CV PDF  │
└──────────────────────────────────────────────────────────────┘
```

**Home — mobile (390)**
```
┌────────────────────┐
│ NAME®        ☰ Menu│
│ FRONTEND *engineer*│ ← same slice motif
│ [ native video ]   │ ← muted, playsinline, poster
│ WORK               │
│ ┌────────────────┐ │
│ │ 16:9 video     │ │ ← vertical list, no WebGL
│ │ 01 Client·Role │ │
│ └────────────────┘ │
│ About (static)     │
│ Experience (accord)│
│ Contact (≥44px)    │
└────────────────────┘
```

**Case study — desktop**
```
┌──────────────────────────────────────────────────────────────┐
│ ← Back (Esc)                              03 / 04  Next →    │
│ [ full-bleed hero media — same mesh as carousel slide ]      │
│ CLIENT NAME                 Role · Year · Stack · Live ↗     │
├──────────── cols 1-4 ─────────┬──────── cols 6-12 ───────────┤
│ The problem / My role         │ brief, team, ownership       │
│ The hard decision             │ trade-off + code/diagram     │
│ Outcome                       │ BIG METRIC (e.g. −58% LCP)   │
├───────────────────────────────┴──────────────────────────────┤
│ Barrel gallery (desktop) / stacked media (mobile)            │
│ NEXT PROJECT → (hover preview)                               │
└──────────────────────────────────────────────────────────────┘
```
**Case study — mobile:** a single column with the hero video, a meta table, the four blocks, stacked media and a next-project card. **Lab:** an infinite pannable tile canvas on desktop with a permanent "List view" toggle. Mobile shows the list by default.

---

## 4. Technical architecture

### 4.1 Final stack and justification
| Layer | Choice | Why / evidence |
|---|---|---|
| Framework | **Next.js App Router + React 19 + TS** | Matches Juan Mora Romero's Next.js 16 + React 19 + Tailwind 4 + R3F + GSAP. Server Components keep content as HTML. Vitasović chose the *pages* router in 2025 as "necessary for seamless page transitions", so spike transitions in Phase 3. Nuxt is equally valid (Adolfsson, Rocca). |
| Styling | Tailwind 4 + CSS variables | Tokens are shared by CSS, GSAP and shaders |
| Animation | **GSAP 3.13+** (ScrollTrigger, SplitText, Flip, Observer) + `useGSAP` | Since 3.13 "GSAP is now 100% FREE including ALL of the bonus plugins like SplitText", "even for commercial use"; SplitText was rewritten "50% smaller, 14 new features" |
| Smooth scroll | **Lenis** | Official recipe: `lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(0)`, with `autoRaf:false` so only one RAF loop runs |
| WebGL | **Three.js WebGPURenderer + TSL (via R3F)** | Adolfsson: "Browsers without WebGPU simply fall back to WebGL2, with no extra code." OGL is the minimal alternative (Rocca) |
| Loader | PixiJS (lazy, desktop only) or an SVG version | Milkin picked Pixi to keep several rotating text rings smooth |
| Physics | Matter.js (About only, dynamic import) | Bondar |
| CMS | **Sanity** (or MDX in the repo) | Adolfsson: content via Sanity, videos via Mux uploaded through Sanity |
| Video | **Mux** or **Cloudflare R2** + CDN | Vitasović: video "hosted on Cloudflare's R2 bucket and delivered via its CDN" |
| Textures | KTX2 via a Node + sharp pipeline | Adolfsson: crop to 16:9 at 1280 px and 1024 px (`-sm`), flipped because the KTX2 path skips flipY |
| Hosting | Vercel (or Netlify) | Vitasović: Vercel; Adolfsson: Netlify |
| Analytics | Vercel Speed Insights (field CWV) + Plausible/Umami | Field p75 data is what counts |
| Forms | Server Action + Resend, honeypot + rate limit | No third-party script on load |

### 4.2 Folder structure
```
/app        layout.tsx (fonts, GrainOverlay, persistent Canvas, Lenis)
            page.tsx · work/[slug]/page.tsx · about · lab · not-found · opengraph-image.tsx
/components dom/ (Header, Menu, MagneticButton, SliceText, ProjectList, Tabs, Footer)
            gl/ (Scene, Carousel, MediaPlane, Barrel, Reel) · loader/ · physics/
/motion     effects/*.ts (auto-registered) · registry.ts · tokens.ts · useLenis.ts
/gl         shaders/ (lens, rgbSplit, dither, bend) · store.ts (zustand) · capabilities.ts
/sanity     schemas, client, queries
/scripts    ktx2-pipeline.mjs
/public     noise.png, cv.pdf
```

### 4.3 Synchronising DOM and WebGL
1. **One persistent canvas.** It lives fixed in the root layout with `pointer-events:none` and is never unmounted. Media planes track DOM proxy elements (`data-gl="slug"`) through cached rects, using an orthographic camera at 1 unit = 1 px.
2. **One clock.** The GSAP ticker drives Lenis, and R3F uses `frameloop="demand"` and is invalidated from that same ticker.
3. **One store.** A zustand store holds `scrollY`, `velocity`, `hoveredIndex`, `activeSlug` and `tier`, and both the DOM and GL layers subscribe to it.
4. **Route transitions.** On a work-link click, freeze the slide, navigate, tween `uWrapAmount → 0` to flatten it into the hero (Adolfsson), then reveal the text with the slice motif. Wrap DOM changes in `document.startViewTransition()` where supported. Same-document view transitions work in Chrome/Edge, Safari 18+ and Firefox 144+. MDN's Firefox 144 release notes (14 Oct 2025) say "The View Transition API is now supported for SPAs", which per web.dev made them "Baseline Newly available". Elsewhere, use a GSAP clip-path wipe. *Hypothesis to validate in Week 5:* that App Router + `startViewTransition` + a persistent canvas cooperate.
5. **Pause when idle.** Stop rendering off-screen, on `visibilitychange` and when nothing changed. Adolfsson's TSL `If` "skips the extra texture samples when the carousel is idle, which is most of the time."

### 4.4 Fallback matrix
| Condition | Detection | Renders |
|---|---|---|
| WebGPU | `navigator.gpu?.requestAdapter()` | Full TSL carousel, lens, barrel |
| WebGL2 only | WebGPURenderer auto-fallback | Same scene on the WebGL2 backend |
| No WebGL / context lost | try/catch + `onDeviceLost` → one rebuild | Snellenberg-style DOM hover list + CSS grain |
| Low-end (≤4 cores, ≤4 GB, Save-Data, or FPS < 45 for 1 s) | `capabilities.ts` | DPR 1, no barrel, no dither, one video at a time |
| Touch / < 1024 px | media query | No WebGL; native video; vertical list |
| Reduced motion | `gsap.matchMedia()` | No loader; slice → 200 ms fade; Lenis off; no RGB split/physics; static grid; posters instead of autoplay |
| No JS | SSR | All text, links, images with dimensions, `mailto:` |
| Cross-document VT unsupported (Firefox) | `@supports` | Normal navigation or GSAP fallback |

### 4.5 CMS model (Sanity)
- **project:** title, slug, client, year, role[], team, stack[], summary (≤160), problem, decision (+code), outcome {metric, label}, heroMedia (+alt), gallery[] (alt, aspect), liveUrl, repoUrl, featured, order, accent, seo.
- **experience:** company, role, dates, location, bullets[3], tech[].
- **labItem:** title, date, media, sourceUrl, tags[], note.
- **post:** title, slug, date, body.
- **siteSettings:** availability, email, socials, CV, positioning line, capabilities[3].
- Make `alt` required in every schema.

### 4.6 Hosting and analytics
Use ISR revalidation on a Sanity webhook. Serve video from Mux or R2, and KTX2 plus AVIF/WebP from the CDN with immutable cache headers. Use a custom domain with HSTS. Track three events: `project_open`, `cv_download` and `contact_submit`.

---

## 5. The phased plan (Phase 0 → Phase 8)

Assumption: 4–5 h/day, 5 days/week ≈ 22 h/week ≈ 260 h total.

### Phase 0 — Strategy & content (Week 1, ~20 h)
**Goal:** know what you are proving before designing.
- Day 1: positioning statement and audience priority (agencies, product companies, or freelance clients).
- Day 2: score 8–10 candidate projects on hard decision, measurable outcome and visual media (0–3 each), plus permission to show. Keep the top 3–4.
- Day 3: self-interview per project (problem → role → hard decision → metric → stack). Recover numbers from analytics, Lighthouse history and PRs.
- Day 4: capture 60 fps screen recordings (1920×1080 and 1080×1350) and cut 6–12 s loops. Get written client permission.
- Day 5: draft all page copy and CV v1.
**Done when:** a stranger can read your drafts and say what you are best at. **Pitfalls:** choosing projects for looks rather than decisions, having no metrics, NDA surprises.

### Phase 1 — Design (Weeks 2–3, ~40 h)
- Moodboard (½ day) from the reference board and Swiss posters. Vitasović's Codrops moodboard is a model.
- Figma variables for tokens (1 day). Grey-box wireframes at 1440/1024/390 (2 days).
- Hi-fi for home, case study, about, lab, 404, open menu and reduced-motion states (3 days).
- Motion storyboard (2 days): frame strips with durations and eases for loader → hero, hover, page transition and the About fall.
**Done when:** every section has desktop, mobile and reduced-motion frames, and all pairs pass 4.5:1 (3:1 for large text). **Pitfalls:** designing only at 1440; drawing effects you have not prototyped; adding a second accent.

### Phase 2 — Foundation DOM site (Weeks 3–4, ~35 h)
1. Next.js (TS, App Router, Tailwind 4), ESLint/Prettier, Husky.
2. Tokens as CSS variables; `G` key toggles a grid overlay in dev.
3. `next/font` with fallback metrics to avoid CLS.
4. Embedded Sanity Studio, schemas, GROQ, preview.
5. Server Component pages with landmarks, one `h1` and a skip link.
6. `next/image` with sizes; `‹video muted playsinline loop preload="none" poster>`.
7. Metadata, canonical, `sitemap.ts`, `robots.ts`, JSON-LD `Person` + `CreativeWork`.
8. Vercel previews per PR.
**Done when:** mobile Lighthouse ≥ 95 in all categories, the site works with JS off, and keyboard-only use reaches everything. **Pitfall:** adding GSAP "just to see".

### Phase 3 — Motion system & transitions (Weeks 4–5, ~40 h)
- **Effect registry (Rocca):** each `/motion/effects` file exports `{name, effect, defaults}`, and a loop calls `gsap.registerEffect`. Components call `gsap.effects.sliceIn(el)`.
- **Reduced-motion registry:** register inside `gsap.matchMedia().add({full:"(prefers-reduced-motion: no-preference)", reduce:"(prefers-reduced-motion: reduce)"}, ctx => …)`. Under `reduce`, each effect becomes a short fade or `gsap.set`. GSAP documents `duration: reduceMotion ? 0 : 2` and `gsap.matchMediaRefresh` for an on-site toggle. Ship that toggle in the footer.
- **Lenis:** `new Lenis({autoRaf:false, anchors:true})` on the GSAP ticker. Call `ScrollTrigger.refresh()` after fonts and images load. Turn Lenis off for touch and reduced motion, and add `data-lenis-prevent` on the Lab and modals.
- **SliceText (Vitasović):** a visually hidden real word sits beside an `aria-hidden` wrapper of N slices. Each slice uses `left:(i/N)*100%`, `width:(100/N+0.01)%` and `overflow:hidden`, and contains the full word. Tween the inner `x` from `from` to `0` with duration `1.25+i*0.025`, delay `base+i*0.025` and expo.out.
- **Magnetic buttons:** `gsap.quickTo(el,"x",{duration:0.6, ease:"elastic.out(1,0.3)"})` fed `(e.clientX-cx)*0.35`, reset on leave, and off on touch.
- **Cursor:** dot + label via `quickTo` at 0.15 s and 0.45 s, as in Larose's Snellenberg rebuild. Never hide the native cursor or focus rings.
- **Curved menu:** an SVG path with its control point animating from curved to flat, plus a focus trap, Esc to close and focus returned to the trigger.
- **Transitions:** a `TransitionLink` uses `document.startViewTransition(() => router.push(href))` with named elements (`site-header`, `project-hero-{slug}`), otherwise a GSAP clip-path wipe (power3.inOut, 600 ms). For MPAs the opt-in is `@view-transition { navigation: auto; }`.
**Done when:** every animation comes from the registry, toggling OS reduced motion works live, and INP < 200 ms on a mid-range Android. **Pitfalls:** multiple RAF loops; stale ScrollTrigger positions after the font swap; animating layout properties instead of transforms.

### Phase 4 — Loader & Hero (Week 6, ~22 h)
- **Loader rules:** ≤ 1.5 s, skippable by click, Esc or any key, shown once per session, never shown under reduced motion. The hero `h1` is server HTML underneath, so LCP is the text.
- **Pixi rings (Milkin):** lazy-import on desktop only, with one `Text` per letter at `θ=i/len·2π`. The ticker adds `sin(time+ring)` to each radius ("breathing") and slowly rotates the containers. A GSAP timeline ties the counter to `document.fonts.ready` and the texture promises, then calls `onLoaderComplete`. The DOM fallback uses an SVG `textPath`.
- **Hero:** SliceText name, serif-italic accent at +200 ms, city/time/availability.
- **Dithered reel (Bondar):** take luminance, add `(bayer[x%8][y%8]/64−0.5)·spread`, quantise to 2–4 levels, then `mix(dithered, original, uProgress)` driven by GSAP. Keep the loop ≤ 2 MB (H.264 + AV1).
**Done when:** lab LCP ≤ 2.0 s on throttled 4G, the loader is keyboard-skippable, and the hero is announced as one word. **Pitfalls:** blocking the hero; loading Pixi on mobile; fake progress.

### Phase 5 — Projects (Weeks 7–8, ~44 h)
- **Carousel math (reconstructed from Adolfsson's prose; his code was not retrievable).** He writes: "Each project sits on an oval arc spanning 180 degrees, and the more projects there are, the bigger the radius. Every frame, a slide's position along the loop is wrapped, turned into an angle and then into x, z and a y-rotation." A working version:
  - `p_i = wrap(i·gap − scroll, −L/2, L/2)`, with `L = N·gap`
  - `θ_i = (p_i/(L/2))·(π/2)`
  - `x_i = R·sin θ_i`, `z_i = −R·flatness·(1−cos θ_i)`, `rotY_i = −θ_i`
  - `R = baseR + N·k`
  - `scroll += (target − scroll)·lerpK`, with the same `lerpK` for tilt, light and gallery
  - A vertex bend controlled by `uWrapAmount`, which goes to 0 to flatten a slide into the case-study hero.
- **Interaction:** drag, wheel and arrow keys move `target`, which snaps on release. The hovered slide bulges (`z += uHover·sin(πu)·sin(πv)·amp`), the camera tilts and the light moves the opposite way. On touch, "only the light stays, centred".
- **Velocity-gated RGB split (Mora Romero):** `uAberr = sign(v)·min(max(|v|−threshold,0)·gain, cap)`, lerp-smoothed. Sample r at `uv+uAberr`, g at `uv` and b at `uv−uAberr`. "Under a small threshold nothing happens, so when you scroll slowly it stays clean."
- **Media:** run the KTX2 pipeline. Videos play in hidden `<video>` elements as `VideoTexture`s. A Mux thumbnail poster shows until `requestVideoFrameCallback` swaps in the video. Load one item at a time: the active slide, then its neighbours.
- **Robustness (Adolfsson):** `renderer.compileAsync()` during loading; await the async `renderer.init()`; rebuild on `onDeviceLost`. KTX2Loader "imports three, which pulled in a second copy of the library next to three/webgpu", which he fixed with `{ find: /^three$/, replacement: 'three/webgpu' }`. Mirror this alias in Next's bundler config.
- **A11y:** the DOM caption list (`<ul>` of links, `aria-current`, roving focus) is the real control, and the canvas is `aria-hidden`.
- **Fallback:** a Snellenberg hover list with a `quickTo` preview on desktop, cards on mobile.
- **Case-study template:** hero, meta, four blocks, then a barrel gallery ("Flat at rest, a barrel when you scroll fast") whose cylinder bend scales with scroll velocity, then a next-project link.
**Done when:** 60 fps on an integrated-GPU laptop, with an auto-drop below 45 fps, GPU textures < 150 MB, and a keyboard-operable carousel. **Pitfalls:** 4K textures; all videos playing at once; trackpad scroll captured by the canvas.

### Phase 6 — About, Experience, Lab, Contact (Weeks 8–9, ~40 h)
- **Falling text (Bondar):** SplitText chars → `Matter.Bodies.rectangle` per char plus static walls, mirrored to `transform` each tick. ScrollTrigger `onEnter` applies small `applyForce` impulses, and `onLeaveBack` calls `split.revert()`. Use ≤ 300 bodies, pause off-screen and dynamic-import Matter.js. The real text stays in the DOM.
- **Experience (Chiang):** ARIA tabs with arrow keys on desktop, an accordion on mobile. Each role gets 3 bullets of the form "verb + what + number".
- **Lab (Mora Romero):** tiles at `(col·w+offsetX) mod totalW` with Draggable + Inertia, reusing the RGB split. It needs list view, arrow-key panning and Esc to reset.
- **Contact:** a magnetic CTA, `mailto:`, and a short form (Server Action + Zod + honeypot + rate limit) whose success message receives focus. Show local time and availability.
- **Footer:** socials, a reduce-motion toggle, a colophon crediting inspirations, and the last-updated date.
**Done when:** every section works in reduced motion and without JS. **Pitfalls:** unreadable physics text; a Lab with no exit; spam.

### Phase 7 — Mobile, performance, accessibility, SEO (Weeks 10–11, ~44 h)
| Budget | Target |
|---|---|
| LCP / INP / CLS (p75 field) | ≤ 2.5 s / ≤ 200 ms / ≤ 0.1 (Google "Good"); aim for lab LCP ≤ 1.8 s, CLS ≤ 0.02 |
| Initial JS (home, mobile, gzip) | ≤ 150 KB |
| Lazy WebGL chunk (desktop) | ≤ 250 KB gzip, after first paint |
| Above-fold transfer (mobile) | ≤ 600 KB (Troa's whole site: 500 KB, 12 requests) |
| Fonts | ≤ 2 preloaded, ≤ 100 KB |
| Hero video / poster | ≤ 2 MB / ≤ 60 KB |

(The non-CWV numbers are my recommendations.)

**WCAG 2.2 AA checklist:** contrast 4.5:1 (3:1 large/UI). **2.5.8 Target Size (Minimum)** requires targets of at least 24×24 CSS px; aim for 44×44 on mobile (the AAA level). **2.4.11 Focus Not Obscured (Minimum)** says a focused component must not be "entirely hidden due to author-created content", so check the sticky header, cursor follower and canvas. Also cover visible `:focus-visible`, the skip link, landmarks and one `h1`, a reduced-motion path for every animation, no flashing > 3/s, pausable muted video, an `aria-hidden` canvas with a DOM equivalent, focus traps with Esc, and labelled form errors.

**Test matrix:** Chrome, Safari (macOS/iOS 18+), Firefox desktop/Android, Samsung Internet. Devices: a recent iPhone, a ~US$250 Android, an integrated-GPU laptop and a 4K screen. Run VoiceOver, NVDA, keyboard-only, 200% zoom, OS reduced motion and Save-Data. Tools: Lighthouse CI, WebPageTest, axe, Spector.js, stats-gl.

**SEO:** unique titles and descriptions, `Person` JSON-LD with `sameAs`, `CreativeWork` per project, sitemap, per-page OG images, descriptive slugs, and real-text headings.
**Done when:** budgets pass in CI, axe reports 0 violations, and a manual screen-reader pass covers 5 flows.

### Phase 8 — Launch & growth (Week 12, ~22 h)
- **Deploy:** short name domain, HTTPS/HSTS, redirects, 404, uptime monitor.
- **OG images:** a dynamic `opengraph-image.tsx` per case study. Vitasović's tip: "use .gif as your open-graph images. It'll animate where supported."
- **Write-up:** a Codrops-style build article with 3–4 feature breakdowns. Codrops' 2025 review thanks solo creatives, including Vitasović, Bondar and Milkin, for exactly this kind of case study. Pitch it after launch.
- **Submissions:** awwwards.com/submit currently lists "Standard Submission 65 $ / 1 website" and "165 $ / 1 year" with "Annual Free Submission (Annual subscriptions only)". venturelist.app's guide read the same page as "65 € / 1 website" on 30 Sep and 2 Oct 2026, so check the currency at checkout. Awwwards' Evaluation System page says sites "are sent to a minimum of 18 jury members, and the 3 jury scores furthest from the average are automatically eliminated". Honorable Mentions go to sites "scored 6.5 or more from the jury". Also submit to CSS Design Awards, The FWA, the GSAP showcase, Orpetron, One Page Love, Siteinspire, landing.love and details.so.
- **Social:** a 20–30 s capture (hero → carousel → case study → reduced-motion toggle) for X, LinkedIn, Bluesky and Okay Dev.
- **Measure:** two weeks of field CWV plus the visit → project_open → contact funnel, then iterate.

---

## 6. Optional Phase 9 — Stretch track (2–4 weeks post-launch)
- **A — 3D desk:** study brunosimon/folio-2025 (MIT, © 2025 Bruno Simon; music CC0) for architecture only. Also study Henry Heffernan (MIT, per the previous report), Weisdevice (30 FPS raycast, paused loop) and Jordan Breton (fixed camera points). Rules: fixed camera stations, an always-visible "View 2D site" button, a `/desk` route that is never the default, GLB < 3 MB (Draco/Meshopt + KTX2), and render-on-demand.
- **B — Terminal Easter egg:** `~` opens a modal terminal (`help`, `projects`, `open <slug>`, `cv`, `contact`, `exit`) with a focus trap and Esc. It is inspired by Sat Naing's terminal-portfolio and Dustin Brett's daedalOS, so check their licences before borrowing.
- **C — WebGPU extras:** a TSL cursor trail (Codrops has a custom-shaped cursor-trail tutorial with Three.js and TSL) behind a capability check.

---

## 7. Week-by-week schedule (~22 h/week)

| Week | Focus | Milestone |
|---|---|---|
| 1 | Phase 0 | Case-study drafts approved by a friend |
| 2 | Phase 1 tokens + wireframes | Grey boxes at 3 breakpoints |
| 3 | Phase 1 hi-fi + storyboard; Phase 2 scaffold | Figma signed off; preview deploy |
| 4 | Phase 2 CMS, pages, SEO | **M1: boring site shippable** (Lighthouse ≥ 95, no-JS OK) |
| 5 | Phase 3 registry, Lenis, SliceText, menu, cursor, transition spike | Transition architecture decided |
| 6 | Phase 4 loader, hero, reel | **M2: first impression**; lab LCP ≤ 2.0 s |
| 7 | Phase 5 carousel + media pipeline + fallback | 60 fps with placeholders |
| 8 | Phase 5 case study + barrel; Phase 6 About | **M3: signature layer done** |
| 9 | Phase 6 experience, Lab, contact | Feature freeze |
| 10 | Phase 7 mobile, budgets, tiers | Budgets green in CI |
| 11 | Phase 7 a11y, browsers, copy edit, 3 peer reviews | **M4: release candidate** |
| 12 | Phase 8 | **M5: live + submitted** |

Every Friday, record a 60 s progress capture (it becomes launch content) and log Lighthouse numbers. If you slip more than 2 days, cut from Phase 6 (Lab or physics) before touching Phases 7–8.

---

## 8. Content plan
- **Home:** a positioning line of ≤ 12 words; city, time and availability; 3–4 projects; three capability columns (*Build*: React/Next and design systems; *Motion*: GSAP, WebGL, shaders; *Performance & a11y*: CWV, WCAG); a 2-sentence About teaser; the CTA.
- **Case study (600–1,200 words):** one-line summary with the metric → problem (3–4 sentences) → role (team, what you owned and didn't) → the hard technical decision (options, trade-off, one diagram or ≤ 15-line code excerpt) → outcome (before/after plus a quote if permitted) → stack and links → "what I'd do differently".
- **About:** 120–180 human words (origin, obsessions, what you want next), a portrait interaction and the CV link.
- **CV/skills:** reverse-chronological, 3 "verb + what + number" bullets per role. Group skills as Daily / Comfortable / Exploring, and never use percentage bars.
- **Lab:** 6–12 experiments, each with one "what I learned" line and a source link.
- **Tone:** first person, plain, specific, no "passionate / pixel-perfect / ninja". One serif-italic word per headline is your voice signature.
- **SEO:** title pattern "Name — Frontend Engineer (Motion & Performance), City", descriptions ≤ 155 chars that include a metric, and 1–2 articles per quarter.

---

## 9. Risks, quality checklist, and what NOT to do

| Risk | Mitigation |
|---|---|
| WebGL scope creep (high) | M1 in week 4 is shippable; Phase 6 items are cuttable |
| App Router + transitions + persistent canvas conflict (medium) | Week-5 spike; fallback to a template-level GSAP transition or the pages router (Vitasović) |
| Cross-document View Transitions missing in Firefox (per dizainsweb.lv, 8 Nov 2026: "Firefox 159, the stable release from 27 October 2026, does not have cross-document transitions yet, but they are one of the Interop 2026 focus areas"; tracked in Bugzilla bug 1860854) | Enhancement only; same-document VT is broadly supported |
| GPU variance / context loss | Tier system, `onDeviceLost` rebuild, DOM fallback |
| NDA blocks a project | Confirm in Phase 0; keep a personal project in reserve |
| Instrument Serif looks generic | One italic word only, or Fraunces/Newsreader |
| Burnout | Fixed hours, Friday demos, a pre-agreed cut list |

**Pre-launch checklist:**
- [ ] Works with JS off.
- [ ] Reduced-motion version reviewed as a design.
- [ ] CWV budgets green on a mid-range Android.
- [ ] axe reports 0 violations, plus VoiceOver, NVDA and keyboard passes.
- [ ] Targets ≥ 24×24 px and focus never hidden.
- [ ] Videos muted and pausable.
- [ ] Every case study has a metric and a hard decision.
- [ ] OG images, favicons, 404, sitemap and JSON-LD are in place.
- [ ] Colophon credits inspirations.
- [ ] A second person has proofread.

**What NOT to do:**
- **Visual complexity is not quality.** Usability (30%) plus content (10%) weigh as much as design (40%) on Awwwards, and one great motif beats ten effects.
- Never hide content behind a loader, a canvas or a 3D world without a 2D path.
- Don't break anchors, back/forward or keyboard scrolling with scroll-jacking.
- Don't let a custom cursor replace the system cursor or hide focus.
- Never copy layouts, copy, assets or shaders wholesale. Study, re-implement and credit.
- No skill bars, no autoplaying sound, no four-accent palettes, no case studies without metrics.

**Licences:**
- **GSAP:** free for commercial use under the GreenSock "Standard No Charge" licence (not MIT).
- **bchiang7/v4:** MIT, and the README asks: "Yes, you can fork this repo. Please give me proper credit by linking back to brittanychiang.com."
- **brunosimon/folio-2025:** MIT code; music CC0.
- **Fonts:** Inter, Inter Tight and Instrument Serif are under the SIL OFL.
- **Codrops code:** re-implement it and credit the article.
- **Other people's media:** never reuse reels, photos or models.

---

## 10. Reference directory (researched 2026-11-15)

**Codrops (tympanus.net/codrops):**
- Case Study: Stefan Vitasović Portfolio — 2025 (5 Mar 2025) ✅
- Stas Bondar '25: The Code & Techniques Behind a Next-Level Portfolio (25 Mar 2025) ✅
- Two Portfolios, One Process (2 Dec 2025, Max Milkin) ✅
- Arnaud Rocca's Portfolio: From a GSAP-Powered Motion System to Fluid WebGL (31 Mar 2026) ✅
- From Shader Uniforms to Clip-Path Wipes (6 May 2026) ✅
- Always Building, Always Learning: Cyd Stumpel (17 Jun 2026) ✅
- Juan Mora Romero '26 (22 Oct 2026) ✅
- Mathias Adolfsson '26 (5 Nov 2026) ✅ (full page blocked to our fetcher; details come from search excerpts)
- Inside Au-rel.io (9 Nov 2026) ✅
- 2025: A Very Special Year in Review (29 Dec 2025) ✅

**Live sites:**
- Confirmed today ✅: mathiasadolfsson.dev, cydstumpel.nl, dennissnellenberg.com
- From the previous report ◐: maxmilkin.com, stabondar.com, juanmoraromero.com, arnaudrocca.fr, au-rel.io, brittanychiang.com, rauno.me, emilkowal.ski, paco.me, bruno-simon.com, samsy.ninja, henryheffernan.com, weisdevice.xyz, leoparpeix.com
- Not re-verified ⚠: Vitasović's domain (use the Codrops link)

**Galleries:** Awwwards (Cyd Stumpel 2025 SOTD; Arnaud Rocca HM), One Page Love, Orpetron, landing.love, details.so, Siteinspire, Gleam Studio's 2026 list ✅

**Tutorials:** Olivier Larose, blog.olivierlarose.com/tutorials (awwwards-landing-page, project-gallery-mouse-hover, infinite-text-move-on-scroll) ✅; Cyd Stumpel's blog on View Transitions ✅

**Docs and repos:** gsap.com/blog/3-13; gsap.com/community/standard-license; gsap.com/docs/v3/GSAP/gsap.matchMedia(); gsap.com/resources/a11y; github.com/darkroomengineering/lenis; github.com/bchiang7/v4; github.com/brunosimon/folio-2025; the PixiJS compressed-textures guide; Google Search Console's Core Web Vitals help; w3.org/TR/WCAG22; awwwards.com/submit ✅

**Verified vs. hypothesis:**
- **Verified:** quotes, stacks, dates, licences, CWV thresholds, WCAG wording and Awwwards prices, all from the listed pages on 2026-11-15.
- **My proposals:** colour values, the carousel formula (reconstructed), the JS/texture budgets, the schedule, and the App Router + `startViewTransition` + persistent-canvas pattern (to be validated in Week 5).
- **Firefox status:** dizainsweb.lv (8 Nov 2026) reports that "Firefox 159, the stable release from 27 October 2026, does not have cross-document transitions yet, but they are one of the Interop 2026 focus areas". The work is tracked in Bugzilla bug 1860854.