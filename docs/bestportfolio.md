# The World's Best Frontend Developer Portfolios (Research date: 15 November 2026) — and How to Combine Their Best Ideas Into Your Own

The single most useful finding is that the best portfolios of 2025–2026 do not win by doing everything. Each owns one memorable "motion motif" (a signature interaction) and runs it on a fast, mostly DOM-first base. That means you can build a premium portfolio by combining one hero idea, one navigation idea and one project-showcase idea from different award winners, as long as one shared motion system holds them together.

## TL;DR
- **What to copy, and from whom:** The highest-value ideas to extract are these:
  - Stefan Vitasović's character-to-word type assembly and WebGL video grid with shared geometry.
  - Stas Bondar's physics "falling text" About section and `gsap.quickTo` cursor and cube system.
  - Mathias Adolfsson's curved WebGPU project carousel, which falls back to WebGL2.
  - Juan Mora Romero's velocity-gated chromatic split.
  - Cyd Stumpel's native View Transitions and scroll-driven CSS.
  - Arnaud Rocca's reusable GSAP effect registry with reduced-motion fallbacks.
  - Brittany Chiang's recruiter-friendly experience tabs.
- **Recommended direction for a mid-level frontend developer:** Build "Concept B – The Living Gallery" (described in Sections F and G) on top of "Concept A – Swiss Motion Engineer" as the DOM base.
  - Concept B combines a Max Milkin–style loader, a Stefan Vitasović–style type hero, a Mathias Adolfsson–style curved carousel, Juan Mora Romero's velocity effect and Stas Bondar's physics About section.
  - It reads as premium, stays shippable, and degrades well on mobile.
- **Where 3D fits:** Full 3D worlds (Bruno Simon, Samsy, Henry Heffernan, Weisdevice) are the most original and technically impressive. They are also the riskiest choice for hiring and performance. Treat them as a "Concept C" option only if 3D is the career you want, and always provide a 2D escape hatch.

---

## A. Executive Summary

**Scope and method.** I surveyed these sources:
- Awwwards portfolio winners and Sites of the Day through November 2026.
- FWA and CSS Design Awards mentions.
- Codrops case studies written by the developers themselves (the strongest primary technical source).
- GitHub repositories, the three.js forum, OkayDev, and curated directories (CreativeDevJobs, Muzli, Hostinger, designeer.xyz).

Technology claims below are marked by verification tier:
- **[V-primary]**: confirmed by the developer's own case study, repo, site text or posts.
- **[V-secondary]**: confirmed by an award page, gallery tag or reputable curator.
- **[Hypothesis]**: inferred, not confirmed.

Every portfolio listed was confirmed to exist via an award page, a case study, a repo or a live-site search result as of the research date. Not every site was opened in a live browser session, and Awwwards and Codrops pages sometimes blocked automated fetching. Treat the "inspected" status accordingly (see Caveats).

**Five trends that define the 2025–2026 premium portfolio:**

1. **Motion motifs over motion everywhere.** Stefan Vitasović (Stockholm) describes deliberately adding "motion motifs and patterns… similar to a catchy part of a song." Award winners repeat one signature interaction rather than animating every element.
2. **WebGPU arrives, with graceful fallback.** Several sites now use Three.js TSL, which targets WebGPU and falls back to WebGL from one codebase:
   - Bruno Simon's 2025 portfolio.
   - Samsy's Gen-02.
   - Mathias Adolfsson's 2026 portfolio. Mathias notes "browsers without WebGPU simply fall back to WebGL2, with no extra code."
3. **Native CSS is replacing JS for transitions.** Cyd Stumpel's 2025 portfolio (Awwwards SOTD, Dev Award score 7.74/10) is described on its Awwwards page as "built with the newest CSS techniques: View Transitions and Scroll Driven Animations," with GSAP as a backup in unsupported browsers.
4. **The hybrid DOM + WebGL layer.** Most top sites are DOM-first, with WebGL used as an overlay for media, distortion and transitions. Full 3D scenes are the exception. WebGL is often dropped entirely on mobile; Stefan Vitasović's mobile site "retains the same UI interactions and motion principles with the exception of the WebGL layer."
5. **Performance is now part of the craft story.** Developers publish their budgets:
   - Weisdevice raycasts at 30 FPS and pauses its render loop on project pages.
   - Mathias Adolfsson streams GPU-compressed media one item at a time.
   - Arnaud Rocca replaces WebGL with cross-fades under `prefers-reduced-motion`.

**Stack reality check (verified examples only):**
- GSAP is close to universal among award winners.
- On the framework side:
  - Next.js: Stefan Vitasović, Juan Mora Romero, Roman Jean-Elie.
  - Nuxt/Vue: Arnaud Rocca, Mathias Adolfsson, davidhckh.
  - Astro: Stas Bondar.
  - Webflow: Niccolò Miranda, Dylan Brouwer.
- The 3D layer is either Three.js/React Three Fiber or the lighter OGL (Arnaud Rocca).
- PixiJS appears for 2D WebGL effects (Max Milkin's loader).
- Matter.js appears for physics typography (Stas Bondar).

---

## B. Portfolio Collection (55 verified personal portfolios, categorized)

Each portfolio appears once, under its primary category. "Extract" is the single idea most worth taking.

### 1. Minimalist & Typography-Driven
| # | Developer | Location | URL | Evidence | Extract |
|---|---|---|---|---|---|
| 1 | Rauno Freiberg | — | rauno.me | Design engineer; author of Vercel's interaction guidelines; curated by designeer.xyz and visuals.design | Precise micro-interaction timing and easing; "craft log" of dated prototypes |
| 2 | Paco Coursey | — | paco.me | Creator of cmdk and next-themes; Webmaster at Linear | Monochrome, single-column restraint; theme toggle without transition flash |
| 3 | Emil Kowalski | — | emilkowal.ski | Creator of Sonner and Vaul; design engineer at Linear | Component-level polish as the portfolio itself |
| 4 | Stefan Vitasović | Stockholm, Sweden | (linked from Codrops case study, Mar 2025) | Lead Creative Developer at 14islands; Awwwards jury | Character-to-word type assembly; WebGL video grid |
| 5 | Lee Robinson | — | leerob.io | Curated engineer list (Gitstar-OC) | Content/MDX-first developer site |
| 6 | Guillermo Rauch | — | rauchg.com | Curated engineer list | Essay-led minimal personal site |
| 7 | Max Stoiber | — | mxstbr.com | Curated engineer list | Clean writing-first layout |
| 8 | Corentin Bernadou | France | (linked from Codrops, Mar 2026) | Codrops case study: "Swiss-inspired layouts, WebGL geometry" | Swiss grid with small WebGL accents |
| 9 | Andrea Aurelio Napoli | — | au-rel.io | Codrops, Nov 2026: twelve-column grid, masked reveals, cursor-led page transitions | Strict 12-column grid with masked reveals |

### 2. Modern & Premium
| # | Developer | Location | URL | Evidence | Extract |
|---|---|---|---|---|---|
| 10 | Dennis Snellenberg | Netherlands | dennissnellenberg.com | Awwwards SOTD + HM; widely cloned (Olivier Larose tutorial) | Magnetic buttons, curved full-screen menu, project hover-follow image |
| 11 | Max Milkin | Germany (per designer's case page) | maxmilkin.com | Awwwards SOTD 13 Dec 2025; Codrops case study; designed by Olha Lazarieva | PixiJS WebGL text-ring loader; baked-lighting 3D gallery |
| 12 | Olha Lazarieva | Kyiv, Ukraine | olhalazarieva.com | Designer; site built with Max Milkin | Spaced-letter display typography, pinned-scroll text showcase |
| 13 | Mathias Adolfsson | Sweden | mathiasadolfsson.dev | Codrops case study Nov 2026; Muzli | Curved oval WebGPU carousel opening into a "barrel" gallery |
| 14 | Guillaume Colombel | Paris, France | guillaumecolombel.fr | Awwwards SOTD + Developer Award 28 Oct 2026; FWA of the Day | Vue + Three.js + GSAP SplitText; ex-Locomotive craft |
| 15 | Jesper Landberg | Sweden | (URL not verified) | Awwwards SOTD 29 Sep 2026 + Portfolio Honors | Page treated as a deformable material; curved ribbon of project cards |
| 16 | Gianluca Gradogna | — | (Awwwards SOTD 23 Jan 2025) | Codrops case study | Infinite-scroll homepage mixing design and photography |
| 17 | Brandon Yasin | — | (linked from Codrops, Nov 2026) | Codrops: editorial portfolio built with GSAP | Print restraint plus a day/night palette ("golden at sunset, olive at night") |
| 18 | Ravi Klaassens | — | (linked from Codrops, Apr 2026) | Codrops "R—K '26" | Presence-led minimal composition |

### 3. Creative & Experimental
| # | Developer | Location | URL | Evidence | Extract |
|---|---|---|---|---|---|
| 19 | Niccolò Miranda | Amsterdam, NL | niccolomiranda.com | Awwwards SOTM Nov 2021 ("Paper Portfolio"); 19 SOTDs on profile | Torn-paper menu (WebGL + GSAP), newspaper art direction |
| 20 | Lynn Fisher | Phoenix, US | lynnandtonic.com | Annual "portfolio refresh" since 2007; web.dev highlight | Re-concept every year; illustration that responds to viewport width |
| 21 | Yichen Xie | — | (linked from Codrops, Oct 2026) | Codrops: infinite bubble canvas, WebGL pop interactions | Playful infinite-canvas opener |
| 22 | Juan Mora Romero | Madrid (LinkedIn) / UK (Behance), conflicting | juanmoraromero.com | Codrops case study 22 Oct 2026 | Endless draggable Lab; velocity chromatic split; cloth posters |
| 23 | Maria Vasilyeva | — | (Awwwards SOTD 9 Oct 2026) | Codrops: music as layout and motion framework | Sound-driven layout rhythm |
| 24 | Thomas Carré | France | (NOTHIN' — Awwwards SOTD 10 Aug 2026, Portfolio Honors Jul 2026) | Awwwards | Experimental personal brand site |
| 25 | Dylan Brouwer | Netherlands | dylanbrouwer.design | Codrops: Webflow + GSAP ScrollTrigger + Spline | No-code-plus-GSAP premium motion |

### 4. Animation-Heavy
| # | Developer | Location | URL | Evidence | Extract |
|---|---|---|---|---|---|
| 26 | Stas Bondar | — | stabondar.com | GSAP Site of the Week + Month; Codrops case study | Matter.js falling text; CSS-3D awards cube; dithered video shader |
| 27 | Arnaud Rocca | Paris area (TOOSOON) | arnaudrocca.fr | FWA, GSAP SOTD, CSSDA WOTD (Mar 2026); Awwwards HM | GSAP effect registry; OGL fluid slider; reduced-motion system |
| 28 | Roman Jean-Elie | — | (linked from Codrops, Nov 2025) | Codrops: Next.js + R3F + GSAP MorphSVG | WebGL "portal" synced to DOM bounds; plane morphing into letters |
| 29 | Mat Voyce | UK | (Awwwards SOTD; GSAP SOTY 2025 nominee) | Award-juror blog (hontran.dev) | Kinetic typography as portfolio |
| 30 | Thibault Guignand | — | (linked from Codrops, May 2026) | Codrops: GSAP orchestrating shader uniforms and clip-path wipes | Clip-path wipe transitions |
| 31 | Pacôme Pertant (built by Louis Bocquet) | — | (Awwwards SOTD 9 Jun 2026) | Awwwards Portfolio Honors May 2026 | Designer–developer pair build |

### 5. 3D & WebGL Experiences
| # | Developer | Location | URL | Evidence | Extract |
|---|---|---|---|---|---|
| 32 | Bruno Simon | Paris, France | bruno-simon.com | Awwwards Portfolio Honors Dec 2025, SOTM Jan 2026; MIT repo brunosimon/folio-2025 | Drive-to-explore world; TSL WebGPU/WebGL; Rapier physics |
| 33 | Samuel "Samsy" Honigstein | Paris / London | samsy.ninja | Awwwards SOTD Oct 2025; FWA; commarts Webpick | Multiplayer cyberpunk city on WebGPU TSL |
| 34 | Jordan Breton | — | jordan-breton.com | FWA SOTD 2 Oct 2025 | Floating island; fixed-point camera navigation |
| 35 | Sébastien Lempens | — | sebastien-lempens.com | CreativeDevJobs | Scroll-driven tour of 3D Paris (scooter, skydive) |
| 36 | Bilal El Moussaoui | — | bilal.show | CreativeDevJobs | Scroll-driven music-box story |
| 37 | Ameen Abdullah | — | ameen-abdullah.dev | Awwwards winner (per CreativeDevJobs); Vue | WebGPU sakura petal loader |
| 38 | Léo Parpeix | France | leoparpeix.com | Awwwards SOTD 14 Sep 2026 (7.69); FWA | "Understand my skill set in under 10 seconds" 3D + 2D balance |
| 39 | Keita Yamada | Japan | (dev.to listing) | Interactive designer/developer | "100 Days of Poetry" WebGL gallery |
| 40 | Merouane Bali | — | (linked from Codrops, Jan 2025) | Codrops | React Context API bridge between the WebGL scene and the layout |
| 41 | David Heckhoff (GitHub: davidhckh) | Germany (bilingual EN/DE site) [Hypothesis on name/location] | GitHub davidhckh/portfolio-2025 | 852★ repo: Vue 3, GSAP, Lenis, three.js, Howler | Open-source Vue + GLSL reference |

### 6. Interactive & Gamified
| # | Developer | Location | URL | Evidence | Extract |
|---|---|---|---|---|---|
| 42 | Xianyao Wei (Weisdevice) | Germany (from China) | weisdevice.xyz / xianyaowei.com | Awwwards SOTD + HM; Codrops case study; repo wehwayne2/weisdevice-project | Glitch island with DJ deck; 30 FPS raycasting |
| 43 | Jay Ransijn | — | jayransijn.com | CreativeDevJobs | Playable world: fetch with dog, bike, lever-triggered band |
| 44 | Thibault Introvigne | — | thibault-introvigne.com | CreativeDevJobs; R3F | Ten collectibles that unlock CV entries |
| 45 | Worapat "WoraWork" Supameteeworakul | Thailand/Japan background | worawork.vercel.app | CreativeDevJobs | Zelda/Animal Crossing-style cozy room |
| 46 | JReyes MC | — | jreyes-mc-portfolio.com | Awwwards HM | Minecraft-style scroll circuit |
| 47 | Aimee Weis (built by Andrew Woan) | — | aimees-papercraft-world.com | Open source R3F + Blender + Krita | Hand-drawn 2D textures baked onto 3D |
| 48 | Jesse Zhou | US | (linked from his Medium case study) | Case study: Three.js + Blender baking + Reflector | Cyberpunk ramen shop; holographic point-cloud bowl |

### 7. Dark / Hacker / Futuristic
| # | Developer | Location | URL | Evidence | Extract |
|---|---|---|---|---|---|
| 49 | Henry Heffernan | New York, US | henryheffernan.com | MIT repo henryjeff/portfolio-website; widely forked | CRT desk with a real 2D "OS" site inside the monitor |
| 50 | Dustin Brett | — | dustinbrett.com | daedalOS repo (13.1k★, 1.2k forks, MIT, "Desktop environment in the browser") | Full desktop OS in the browser, including a terminal |
| 51 | Sat Naing | Bangkok, Thailand | terminal.satnaing.dev | Repo satnaing/terminal-portfolio (822★, 164 forks, MIT; React + TypeScript + Styled-Components) | CLI portfolio: tab autocomplete, history, themes, PWA |
| 52 | Giulio Collesei | — | (linked from Codrops, Apr 2026) | Codrops: cinematic cyberpunk, four film-inspired scenes | Cinematic scene cuts |

### 8. Editorial & Brutalist
Niccolò Miranda (#19) and Brandon Yasin (#17) are the strongest editorial references. Cyd Stumpel (#53) blends brutalist type with modern CSS.

### 9. Professional & Career-Oriented
| # | Developer | Location | URL | Evidence | Extract |
|---|---|---|---|---|---|
| 53 | Cyd Stumpel | Netherlands | cydstumpel.nl | Awwwards SOTD 2025 (Dev Award 7.74/10); speaker at beyond tellerrand Düsseldorf 2025, Wey Wey Web Málaga 2025 and JS Heroes Cluj-Napoca 2026 ("You might not need JavaScript") | View Transitions + scroll-driven CSS with fallbacks; blog with webmentions |
| 54 | Brittany Chiang | — | brittanychiang.com | bchiang7/v4 repo: 8,281★ / 4,216 forks (Gatsby, MIT) | Sticky-sidebar résumé layout; tabbed experience |
| 55 | Josh W. Comeau | — | joshwcomeau.com | Widely cited | Optional sound effects and live code playgrounds |
| 56 | Jhey Tompkins | — | jhey.dev | Widely cited | Interactive bio where phrases link to work |

### 10. Technically Impressive Implementations
These are covered under their primary categories above: Bruno Simon (#32), Samsy (#33), Mathias Adolfsson (#13), Stefan Vitasović (#4), Stas Bondar (#26), Arnaud Rocca (#27), Cyd Stumpel (#53) and Juan Mora Romero (#22).

---

## C. Top 20 Ranking

Weights: Visual 25%, UI/UX 20%, Animation 20%, Technical 20%, Originality 15%. Sub-scores are out of 10 and are my analytical judgments based on documented features, not official scores. Full 3D games lose UI/UX points because finding information takes longer, so visual complexity does not automatically win.

| Rank | Portfolio | Vis | UX | Anim | Tech | Orig | **Weighted** |
|---|---|---|---|---|---|---|---|
| 1 | Stas Bondar | 9 | 8 | 9.5 | 9 | 9 | **8.90** |
| 2 | Stefan Vitasović | 9 | 8.5 | 9 | 9 | 8.5 | **8.83** |
| 3 | Bruno Simon | 8.5 | 7 | 9 | 10 | 10 | **8.83** |
| 4 | Mathias Adolfsson | 8.5 | 8.5 | 9 | 9.5 | 8.5 | **8.80** |
| 5 | Samsy | 9 | 7 | 8.5 | 10 | 9 | **8.70** |
| 6 | Arnaud Rocca | 8.5 | 8.5 | 9 | 9 | 8 | **8.63** |
| 7 | Juan Mora Romero | 8.5 | 8 | 9 | 9 | 8.5 | **8.60** |
| 8 | Niccolò Miranda | 9.5 | 8 | 8.5 | 7.5 | 9.5 | **8.60** |
| 9 | Cyd Stumpel | 8 | 9 | 8.5 | 9 | 8.5 | **8.58** |
| 10 | Max Milkin | 8.5 | 8.5 | 8.5 | 8.5 | 8 | **8.43** |
| 11 | Weisdevice (Xianyao Wei) | 8.5 | 8 | 8 | 8.5 | 9 | **8.38** |
| 12 | Rauno Freiberg | 8.5 | 9 | 8.5 | 7.5 | 8 | **8.33** |
| 13 | Guillaume Colombel | 8.5 | 8 | 8.5 | 8.5 | 8 | **8.33** |
| 14 | Jordan Breton | 9 | 7.5 | 8 | 8.5 | 8 | **8.25** |
| 15 | Roman Jean-Elie | 8 | 7.5 | 8.5 | 8.5 | 8.5 | **8.18** |
| 16 | Henry Heffernan | 8 | 8 | 7.5 | 8.5 | 9 | **8.15** |
| 17 | Dennis Snellenberg | 8.5 | 9 | 8.5 | 7 | 7 | **8.08** |
| 18 | Lynn Fisher | 8 | 8 | 7 | 7.5 | 9.5 | **7.93** |
| 19 | Jesse Zhou | 8.5 | 7 | 7.5 | 8 | 8.5 | **7.90** |
| 20 | Brittany Chiang | 7.5 | 9.5 | 6.5 | 7 | 6.5 | **7.45** |

**Why the order is what it is:**
- **Stas Bondar is #1** because every "wow" moment also carries content:
  - the About text becomes physics;
  - the awards list becomes a CSS-3D cube;
  - videos get a dithered hover reveal.
  All of it runs on a lean Astro + Barba architecture.
- **Bruno Simon ties Stefan Vitasović on score but ranks below him** on the UX tie-break. Bruno is the most original and technical site in the set, but it is a game first and a CV second.
- **Brittany Chiang ranks #20 on motion but #1 on hireability.** Her v4 repo shows 8,281 stars and 4,216 forks on GitHub. Her own site says "6k+ stars" and her résumé says "7k+," so treat the GitHub count as current.

**Per-portfolio analysis (Top 20, condensed to the brief's required fields):**

1. **Stas Bondar — stabondar.com**
   - **Verified stack [V-primary]:** Astro (partial hydration, minimal JS), GSAP + SplitText + ScrollTrigger, Three.js, Barba.js page transitions, Matter.js.
   - **Design:** Vibrant, motion-first art direction. A dithered reel hero uses a Bayer 8×8 ordered-dither fragment shader that resolves to full colour on hover.
   - **Key interactions:**
     - The About section splits into characters, and each character becomes a Matter.js rigid body that falls when a ScrollTrigger fires.
     - The awards cube is pure CSS 3D transforms driven by CSS variables through `gsap.quickTo`, combining scroll and mouse.
   - **Study:** the `quickTo` pattern (it reuses tweens instead of creating hundreds per second) and the folder architecture (`pages/home/world`, `transitions/`, `EventEmitter`).
2. **Stefan Vitasović — Stockholm**
   - **Verified stack [V-primary]:** Next.js pages router (chosen for page transitions), Motion (Framer Motion), SCSS modules, Three.js + R3F, Cloudflare R2 CDN for video, Vercel.
   - **Design:** Swiss print layouts with offset grids, generous whitespace, glitch shaders and a noisy lo-fi background.
   - **Key interactions:**
     - Words are split into N masked slices. Each slice slides along x with a staggered expo-out ease, so the word "assembles" in a glass-like parallax.
     - `AnimatePresence mode="wait"` crossfades pages.
     - Lethargy plus a Virtual-scroll controller unify WebGL and DOM scrolling.
     - Videos are WebGL textures with an LED-overlay and grain shader. Hiding compression artefacts this way lets the videos be compressed harder.
     - All planes share one `PlaneGeometry(…, 1, 128)`.
   - **Mobile:** drops WebGL and uses native video.
3. **Bruno Simon — bruno-simon.com (Paris)**
   - **Verified stack [V-primary]:** Three.js `WebGPURenderer` with TSL (falls back to WebGL), Rapier physics (the 2019 version used Cannon.js), Howler.js, Blender, Vite. Code and Blender files are MIT on GitHub.
   - **Features:** keyboard, mouse, touch and gamepad input mapped to one vehicle controller; a circuit leaderboard; visitor "whispers"; achievements; weather and day cycles.
   - **Study:** the input abstraction, and the devlog series as a content strategy.
4. **Mathias Adolfsson — mathiasadolfsson.dev (Sweden)**
   - **Verified stack [V-primary]:** Nuxt, Three.js WebGPU renderer + TSL, GSAP, Sanity CMS, Mux video, Netlify, with WebGL assistance from Jesper Landberg.
   - **Key interactions:**
     - Project slides sit on an oval arc and bend while dragging. A cursor-following light plays across them.
     - Each project lifts out of the carousel into a "barrel" gallery, which is the same concept turned 90°: flat at rest, barrel-shaped when scrolled fast.
     - One lerp factor drives carousel, camera tilt, light and gallery scroll.
   - **Performance:** one shared node graph per slide type, so each shader compiles once; GPU-compressed media loaded one at a time; idle-state branches skip texture samples.
5. **Samsy — samsy.ninja**
   - **Verified [V-primary, own statements]:** Three.js TSL compiling to WebGPU with WebGL fallback. Bloom and reflections had to be tuned for both renderers.
   - **Features:** a multiplayer cyberpunk city with a billboard that cycles projects, and a hacked Gameboy controller.
   - **[V-secondary]:** CreativeDevJobs reports 120+ FPS. webgpu.com claims Vue + GSAP; that claim is unverified.
6. **Arnaud Rocca — arnaudrocca.fr**
   - **Verified stack [V-primary]:** Nuxt/Vue, GSAP (registered Effects, ScrollTrigger and SplitText wrapped as Vue composables), OGL.
   - **WebGL:** a fluid simulation refactored from OGL's Post Fluid Distortion example into a `FluidSimulation` helper. A `FluidSliderEffect` uses the density render target as a distortion mask over slider textures.
   - **Accessibility:** under reduced motion, the home WebGL is replaced by cross-fades and all scroll animations sit inside `gsap.matchMedia()`.
   - **Awards:** FWA, GSAP SOTD and CSSDA WOTD, all in March 2026.
7. **Juan Mora Romero — juanmoraromero.com**
   - **Verified stack [V-primary]:** Next.js 16 App Router, React 19, Tailwind 4, R3F, GSAP, Vitest for pure math tests. Per his Codrops case study (22 Oct 2026), he "started this project as the subject of a 10-week course by Obys agency," and afterwards "it took me around a month to develop it as it is now."
   - **The Lab:** an infinite draggable canvas where "two numbers say where you are standing and the rest gets worked out every frame."
   - **Channel split:** an RGB split that stays at zero below a scroll-velocity threshold, then grows with speed up to a cap.
   - **Cloth posters:** surface normals come from screen-space derivatives; wind rises to more than 5× during an "era change."
   - **Preloader:** shapes read `clock.elapsed` each frame instead of chaining timeouts.
8. **Niccolò Miranda — niccolomiranda.com (Amsterdam)**
   - **Verified [V-primary, Awwwards interview]:** Webflow, GSAP, and a WebGL torn-paper menu (WebGL by Clément Roche and Michael De Laborde).
   - **Design:** a newspaper concept inspired by Harry Potter's moving papers, with horizontal project scroll and vertical tabs.
   - **Study:** how one metaphor governs menu, type, texture and transitions.
9. **Cyd Stumpel — cydstumpel.nl**
   - **Verified [V-primary, author's posts]:** In her own words on X (4 Jan 2025), the site is "depending on your browser… 95% powered by the newest css techniques like scroll driven animations and view transitions," and "if you see the 🦖, it's (at least partly) powered by GSAP backup animations."
   - **Features:** stacked service cards rotated by scroll timelines, video tooltips inside text links, and webmention avatar clusters.
   - **Study:** progressive enhancement of motion, documented in her blog posts.
10. **Max Milkin — maxmilkin.com**
    - **Verified [V-primary, Codrops]:**
      - A loader of text rings ("MAX / MILKIN / DESIGN / CREATIVE / FRONTEND / DEVELOPER") that breathe and rotate. It was moved from SVG/DOM to PixiJS WebGL for performance.
      - A Blender room with baked lighting, AO and reflections.
      - GSAP sequencing throughout.
    - **Awards:** Awwwards SOTD on 13 Dec 2025 (designed by Olha Lazarieva).
11. **Weisdevice — Xianyao Wei**
    - **Verified [V-primary]:** Three.js, GLSL, Howler.js, GSAP; public repo.
    - **Performance:** raycasting at 30 FPS, `cancelAnimationFrame` on project pages, tiny lazy-loaded assets. Glitch-cartoon textures are painted in Photoshop and baked in Blender, and the monitor is "intentionally unstable."
12. **Rauno Freiberg — rauno.me.** A minimal canvas for interaction studies. Curators note his "unusually precise attention to micro-interaction timing and easing." [V-secondary: Next.js/React per the awesome-portfolios list]
13. **Guillaume Colombel — guillaumecolombel.fr.**
    - **Awards:** Awwwards SOTD + Developer Award (7.5 average), FWA of the Day.
    - **Stack [V-secondary]:** SplitText, Reduced Motion, Three.js, SVG animation, VueJS and WebGL, per the GSAP Site of the Week tags he reposted.
14. **Jordan Breton — jordan-breton.com.** A floating sky island with grass, waterfall, fire, wind and butterflies. The camera moves between fixed points, a navigation model that limits disorientation. FWA SOTD on 2 Oct 2025.
15. **Roman Jean-Elie.**
    - **Verified [V-primary]:** Next.js + R3F + GSAP MorphSVG.
    - **Features:**
      - A "portal" plane tracks DOM element bounds and converts them to WebGL coordinates.
      - Navigation uses hash-based routing across sections.
      - Project titles are WebGL textures that stretch with scroll velocity.
      - A plane morphs into letter masks with `back.out(1.2)`.
16. **Henry Heffernan — henryheffernan.com.**
    - **Verified [V-primary, MIT repo]:** TypeScript, Three.js, GLSL, React + Framer Motion overlay, Tween.js camera, webpack, Express.
    - **Design:** a CRT monitor that renders a separate 2D "OS" site.
17. **Dennis Snellenberg — dennissnellenberg.com.**
    - **[V-secondary]:** GSAP, Barba.js, Locomotive Scroll; Awwwards SOTD + HM.
    - **Features:** magnetic buttons, a curved SVG menu drawer, and hover-revealed project images.
    - The most-cloned premium portfolio, with many Next.js recreations.
18. **Lynn Fisher — lynnandtonic.com.** Redesigned yearly from a blank CSS file. One version's illustration changes across 20 breakpoints, one per 100 px.
19. **Jesse Zhou.**
    - **Verified [V-primary, Medium case study]:** lighting baked in Blender, Three.js `Reflector`, and a rotating point-cloud ramen bowl built from model vertices.
20. **Brittany Chiang — brittanychiang.com.**
    - **Verified:** v4 was built with Gatsby and is MIT (attribution requested).
    - **Design:** the current site is a career layout with a sticky name/nav column, a scrolling experience timeline, and project cards with stats.

### Category Winners
| Award | Winner | Why |
|---|---|---|
| **Best Overall** | Stas Bondar | Highest blend of personality, motion and content clarity; fully documented code |
| **Best Minimalist** | Rauno Freiberg (runner-up: Stefan Vitasović) | Restraint plus interaction precision; motion only where it teaches |
| **Best Animated** | Arnaud Rocca | Motion is a *system* (registered effects, composables, reduced-motion paths), not a pile of tweens |
| **Best 3D** | Bruno Simon | WebGPU/TSL, physics, multiplayer touches, and open source |
| **Best Creative Experience** | Niccolò Miranda – Paper Portfolio | One metaphor executed across every surface |
| **Best Professional Developer Portfolio** | Brittany Chiang | Fastest path from landing to "should we interview?" |
| **Best Frontend Engineering Showcase** | Cyd Stumpel (runner-up: Mathias Adolfsson) | Native-platform motion with documented fallbacks; teaches the platform |
| **Best to Take Inspiration From and Rebuild** | Dennis Snellenberg | Achievable with GSAP + Lenis; heavily documented by rebuild tutorials |

---

## D. Technical Showcase — How the Best Ones Actually Work

| Technique | Who | Rendering layer | How it's done (verified) |
|---|---|---|---|
| Masked character-slice word assembly | Stefan Vitasović | DOM | Spans at `left: index/total%`, width `100/total%`; inner `motion.span` animates x with index-staggered duration/delay |
| Physics typography | Stas Bondar | DOM + Matter.js | SplitText → `getBoundingClientRect` → `Matter.Bodies.rectangle` per char; ScrollTrigger toggles simulation |
| Scroll+mouse 3D object | Stas Bondar | CSS 3D | Six faces; CSS custom props `--rotateX/Y` fed by `gsap.quickTo` |
| Dithered media hover | Stas Bondar | WebGL shader | Bayer 8×8 ordered dither + pixelation mixed by `uProgress` uniform tweened on hover |
| Velocity-gated RGB split | Juan Mora Romero | WebGL (R3F) | No effect below a velocity threshold; grows to a cap |
| Shared-geometry video grid | Stefan Vitasović | WebGL (R3F) | One `PlaneGeometry` for all meshes; unused meshes skipped; noise vertex displacement hides video load |
| Curved carousel → barrel gallery | Mathias Adolfsson | WebGPU (TSL) → WebGL2 fallback | One lerp drives everything; shaders built once per node graph |
| Fluid distortion slider | Arnaud Rocca | WebGL (OGL) | Fluid density render target composited as distortion + mask |
| DOM↔WebGL portal sync | Roman Jean-Elie | WebGL + DOM | Track DOM bounds → convert to WebGL coordinates each frame |
| WebGL text-ring loader | Max Milkin | WebGL (PixiJS) | Rings of words animated in Pixi; GSAP sequences in and out |
| Native page transitions | Cyd Stumpel | CSS | View Transitions API + scroll-driven `animation-timeline`; GSAP fallback |
| Physics world + multi-input | Bruno Simon | WebGPU/WebGL | Rapier + TSL; four input schemes mapped to one controller |
| Inner OS on a 3D screen | Henry Heffernan | WebGL + CSS3D/iframe | Tween.js camera moves to the monitor; inner React site |
| Interaction throttling | Weisdevice | WebGL | Raycast at 30 FPS; render loop cancelled on detail pages |

**Source availability:**
- Open source: Bruno Simon (folio-2025, MIT), Henry Heffernan (MIT), Weisdevice, davidhckh/portfolio-2025, Sat Naing, daedalOS, Aimee's Papercraft World, Brittany Chiang v4.
- Code published only as snippets in case studies: Stas Bondar, Stefan Vitasović, Arnaud Rocca, Juan Mora Romero, Mathias Adolfsson, Roman Jean-Elie, Max Milkin.
- Closed: the rest.

---

## E. Design Pattern Analysis

- **Hero patterns:**
  1. A typographic name/title assembly (Stefan, Stas).
  2. A real-time graphic with almost no copy (Mathias: "a name, a title and a dark canvas").
  3. A 3D world as the hero (Bruno, Samsy, Jordan Breton).
  Pattern 1 and pattern 2 dominate recent Awwwards portfolio winners.
- **Navigation patterns:**
  - Full-screen curved menus (Dennis Snellenberg).
  - Scroll-away splash into the project index (Stefan).
  - Hash-routed sections in one canvas (Roman Jean-Elie).
  - Fixed camera points (Jordan Breton).
  - Toggleable About panels that keep copy out of the way (Mathias).
  - CLI commands (Sat Naing).
- **Project showcase patterns:**
  - WebGL video grids.
  - Curved or oval carousels.
  - Infinite draggable canvases (Juan Mora Romero, Yichen Xie).
  - Horizontal newspaper scroll (Niccolò Miranda).
  - Hover-follow thumbnails (Dennis).
- **Transitions:** About 2023–2024, the standard was Barba.js on static sites plus `AnimatePresence` in React. In 2026, View Transitions is the progressive-enhancement default (Cyd Stumpel), and Next.js projects use the App Router with transition routers.
- **Visual trends:**
  - Swiss and editorial grids.
  - Monochrome or dark canvases with one accent.
  - Grain, dither and lo-fi noise used to unify mixed media (Stefan's LED overlay, Stas's dithering).
  - Baked-lighting low-poly 3D (Max Milkin, Jesse Zhou, Weisdevice).
- **Sound:** optional audio is becoming standard among 3D sites (Howler in Bruno Simon, Weisdevice and davidhckh; sound toggles at Josh Comeau).

---

## F. Implementation Inspiration — Three "Combined Concept" Directions

### Concept A — "Swiss Motion Engineer" (DOM-first, safest, fastest to ship)
- **Hero:** Stefan Vitasović's masked character-slice word assembly on your name and role.
- **Navigation:** Dennis Snellenberg's full-screen curved menu, plus magnetic buttons.
- **Page transitions:** Cyd Stumpel's View Transitions, with a GSAP fallback.
- **Project index:** Dennis Snellenberg's hover-follow preview image list, laid on Andrea Aurelio Napoli's 12-column grid with masked reveals.
- **Experience:** Brittany Chiang's tabbed experience panel and sticky sidebar.
- **Motion architecture:** Arnaud Rocca's registered GSAP effects with a `gsap.matchMedia()` reduced-motion branch.
- **Best for:** product-company frontend roles. WebGL budget: zero.

### Concept B — "The Living Gallery" (recommended: premium, still shippable)
- **Loader:** Max Milkin's breathing text rings in PixiJS, with your skills as the words.
- **Hero:** Stefan Vitasović's type assembly, with Stas Bondar's dithered reel behind it (Bayer shader that resolves to colour on hover).
- **Projects:** Mathias Adolfsson's curved WebGL carousel. Clicking lifts the project into a case study whose gallery barrel-bends with scroll speed.
- **Signature motif:** Juan Mora Romero's velocity-gated RGB split, applied site-wide. This is your "catchy chorus," in Stefan's terms.
- **About:** Stas Bondar's Matter.js falling-text bio. The awards and skills cube is optional.
- **Performance:** Stefan Vitasović's shared geometry and mobile-without-WebGL rule; Weisdevice's paused render loop.
- **Best for:** creative-developer and agency roles, while staying recruiter-legible.

### Concept C — "The Explorable Desk" (3D, highest risk and reward)
- **Scene:** Henry Heffernan's desk-and-CRT scene, with Jesse Zhou's baked lighting and Weisdevice's glitch-cartoon textures.
- **Inside the monitor:** a Sat Naing–style terminal (`help`, `projects`, `cv`) or a mini daedalOS-style desktop.
- **Controls and quality:** Bruno Simon's multi-input controller and optional sound; Jordan Breton's fixed camera points instead of free-roam.
- **2D escape hatch:** a mandatory "Skip to 2D" button. Léo Parpeix's goal applies: "understand my skill set in under 10 seconds."
- **Best for:** WebGL/creative-technologist roles only.

---

## G. Personal Portfolio Blueprint (built around Concept B on Concept A's base)

**Stack (all choices mirror verified award-winning builds):** Next.js App Router + React 19 + Tailwind 4 (as Juan Mora Romero uses) or Nuxt (as Arnaud Rocca and Mathias Adolfsson use). Then:
- GSAP with ScrollTrigger and SplitText.
- Lenis smooth scroll.
- React Three Fiber, or OGL if you want a smaller WebGL footprint.
- PixiJS only for the loader.
- Matter.js only for the About section.
- A headless CMS (Sanity, as Mathias Adolfsson uses) and a video CDN (Mux or R2).

**Homepage structure:**
1. Loader (≤1.5 s, skippable)
2. Hero
3. Selected work (carousel)
4. Short capability statement
5. About teaser (physics text)
6. Experience strip
7. Writing or Lab
8. Contact

**Hero section:** Your name assembles from slices (DOM, accessible text kept in an `aria-label`). Behind it sits one muted, dithered reel. Use one sentence of value proposition, not three.

**Navigation:**
- A fixed minimal header with name, Work, About and Contact.
- On scroll it collapses into a single magnetic menu button that opens a curved full-screen drawer (Dennis Snellenberg).
- Keyboard-reachable, focus-trapped, Esc to close.

**Project showcase:**
- Desktop: a curved WebGL carousel (Mathias Adolfsson).
- Each case study follows: problem → your role → hard technical decision → outcome metric → stack.
- Inside a case study: a barrel or velocity-reactive gallery, and the RGB split as the shared motif.
- Fallback: a plain image grid when WebGL or reduced motion is detected.

**About section:**
- The physics falling text (Stas Bondar), triggered once.
- A "Reset" button.
- The full paragraph remains in the DOM for screen readers.

**Experience and skills:**
- A tabbed company panel (Brittany Chiang) with 3 quantified bullets per role.
- Skills grouped by "ships in production" versus "experimenting."
- A downloadable PDF CV.

**Animation strategy:**
- One motion motif (the velocity RGB split) plus one easing family (expo-out for entrances, power3.inOut for state changes, both used by Stefan and Stas).
- Register effects centrally (Arnaud Rocca).
- Use `gsap.quickTo` for anything mouse- or scroll-driven (Stas Bondar).
- View Transitions for route changes (Cyd Stumpel).

**Interaction patterns:**
- Magnetic CTAs.
- A cursor-following light on WebGL cards.
- Hover-to-colour on media.
- A drag-to-explore Lab page for experiments (Juan Mora Romero).
- An optional sound toggle that defaults to off.

**Visual direction:**
- A Swiss 12-column grid.
- A near-black or off-white canvas with one accent.
- One grotesk sans plus one serif italic for emphasis.
- A grain/LED overlay to unify all project media (Stefan Vitasović).

**Mobile experience:**
- Keep the same motion principles but drop WebGL (Stefan Vitasović).
- Native `<video>`.
- A vertical project list with swipe.
- No physics on low-end devices; check `navigator.hardwareConcurrency` or use a reduced-motion query.

**Performance and accessibility:**
- Lazy-load WebGL after first paint.
- Share geometry.
- Use compressed textures (KTX2/Basis) and load media one at a time (Mathias Adolfsson).
- Pause the render loop off-screen (Weisdevice).
- Respect `prefers-reduced-motion` with real alternatives (Arnaud Rocca).
- Keep all content in semantic HTML.
- Aim for a lean first load; the Messenger browser game by Abeto loads a full 3D world at 5.7 MB, which shows that budgets matter.

**Build order (8–10 weeks part-time):**
1. Concept A DOM site with real content.
2. Transitions and reduced-motion system.
3. Loader and hero.
4. WebGL carousel with fallback.
5. Physics About section.
6. Lab page.
7. Performance and accessibility audit.
8. Write a case study of your own portfolio. Every top-ranked developer here did, and it doubles as marketing.

---

## H. Reference Directory

**Minimal / Professional:** rauno.me · paco.me · emilkowal.ski · leerob.io · rauchg.com · mxstbr.com · brittanychiang.com · cydstumpel.nl · joshwcomeau.com · jhey.dev · lynnandtonic.com · au-rel.io

**Modern & Premium / Animation:** dennissnellenberg.com · maxmilkin.com · olhalazarieva.com · mathiasadolfsson.dev · guillaumecolombel.fr · stabondar.com · arnaudrocca.fr · juanmoraromero.com · dylanbrouwer.design · niccolomiranda.com

**3D / Gamified:** bruno-simon.com · samsy.ninja · jordan-breton.com · sebastien-lempens.com · bilal.show · ameen-abdullah.dev · leoparpeix.com · weisdevice.xyz · xianyaowei.com · jayransijn.com · thibault-introvigne.com · worawork.vercel.app · jreyes-mc-portfolio.com · aimees-papercraft-world.com · henryheffernan.com

**Hacker / OS:** terminal.satnaing.dev · dustinbrett.com

**Open-source repos:** github.com/brunosimon/folio-2025 · github.com/bchiang7/v4 · github.com/henryjeff/portfolio-website · github.com/wehwayne2/weisdevice-project · github.com/davidhckh/portfolio-2025 · github.com/satnaing/terminal-portfolio · github.com/DustinBrett/daedalOS

**Known through case study or award only (URL not independently confirmed):** Stefan Vitasović, Jesper Landberg, Gianluca Gradogna, Roman Jean-Elie, Jesse Zhou, Corentin Bernadou, Giulio Collesei, Brandon Yasin, Ravi Klaassens, Yichen Xie, Maria Vasilyeva, Thomas Carré (NOTHIN'), Mat Voyce, Keita Yamada, Merouane Bali, Thibault Guignand, Pacôme Pertant.

---

## Caveats
- **Verification depth:** Existence and features were confirmed through award pages, developer-written case studies, repos and search-indexed live pages. Not every site was opened in an interactive browser during this research; Awwwards and Codrops pages sometimes blocked automated fetching. Before you copy an interaction, open the live site, because portfolios are redesigned often (Lynn Fisher does it yearly).
- **Geographic skew:** The award ecosystem is Europe-heavy, mainly France, Sweden and the Netherlands. Non-European coverage here (Thailand, Japan, Ukraine, US, China-born developers) is real but thinner than the brief asked for.
- **Scores are analytical judgments,** weighted per the brief. They are not Awwwards or FWA scores. Where official scores exist they are cited: Colombel 7.5, Léo Parpeix 7.69.
- **Conflicts noted:**
  - Brittany Chiang's star count: 6k+ on her site, 7k+ on her résumé, 8,281 on GitHub.
  - Juan Mora Romero's location: Madrid versus UK.
  - Jesper Landberg's Portfolio Honors date: Aug versus Sep 2026.
  - Samsy's framework: Vue claimed by a third party, unverified.
- **Agency boundary:** Only individual or duo personal portfolios are included. Studio sites (Locomotive, Obys, Active Theory, Leeroy) were used only for discovery.
- **Ethics of copying:** Brittany Chiang's v4 README explicitly asks forkers to "give me proper credit by linking back to brittanychiang.com." Bruno Simon's and Henry Heffernan's code is MIT. Combining *ideas* is standard practice; copying assets or layouts wholesale is not.