# Progress

## 2026-11-18 — Project setup + merge into `mapl6.github.io`

### Done
- Scaffolded Next.js 16 (App Router, React 19, Tailwind 4, Turbopack, pnpm).
- Design tokens in `app/globals.css` (color, motion, spacing, type).
- Root layout (fonts, sticky header, skip link, grain layer), `lib/site.ts` as single source of site metadata.
- Homepage: hero, work, capabilities, about, contact (placeholder content).
- Custom 404 page.
- Merged the project into the `Mapl6/mapl6.github.io` repo:
  - Old terminal CV page moved `index.html` → `terminal/index.html` (CV links fixed to `../mahdicv.pdf`).
  - Old `README.md` removed.
  - `cv/`, both PDFs, and `build-cv.yml` kept in place.
  - This folder now holds the repo's `.git` and is the working copy.
- GitHub Pages deployment:
  - `next.config.ts` → `output: "export"` (static site).
  - Removed `cacheComponents` / `partialPrefetching` (not supported with static export).
  - Replaced `app/robots.ts` / `app/sitemap.ts` with `public/robots.txt` / `public/sitemap.xml`.
  - New `.github/workflows/deploy.yml`: builds, copies `terminal/` + PDFs into `out/`, deploys to Pages. Runs on push to `main` and after "Build CV PDF".
- Static build and lint pass locally.

### Status against `plan.md`

**Phase 0 — Strategy & content: not started.**
Positioning, audience, project shortlist, self-interviews, metrics, screen recordings, client permissions, page copy and CV v1 are all still open. The homepage has placeholder copy only.

**Phase 1 — Design: not started.**
No moodboard, Figma variables, wireframes (1440/1024/390), hi-fi screens or motion storyboard yet.

**Phase 2 — Foundation DOM site: partly done (built ahead of Phases 0–1).**

| Item | Status |
|---|---|
| Next.js + TS + App Router + Tailwind 4 + ESLint | Done |
| Prettier, Husky | Not done |
| Tokens as CSS variables | Done (may change after Phase 1 design) |
| `G` key grid overlay in dev | Not done |
| `next/font` | Done |
| Landmarks, one `h1`, skip link | Done |
| 404 page | Done |
| Metadata | Done |
| Sitemap / robots | Done, as static files in `public/` |
| Canonical, JSON-LD | Not done |
| Sanity CMS | Not done |
| `next/image`, video | Not done |
| Vercel previews per PR | Replaced by GitHub Pages, no per-PR previews |

**Open decision:** the plan's Sanity preview and embedded Studio need a server, which static GitHub Pages can't provide. Options: fetch Sanity content at build time only, or host on Vercel.

### Live URLs (after deploy)
- `/` — new portfolio
- `/terminal/` — terminal CV page
- `/mahdicv.pdf` — CV

### To do
- [ ] Remove the starter `README.md`; decide on `AGENTS.md`.
- [ ] Commit + push.
- [ ] Settings → Pages → Source: **GitHub Actions**.
- [ ] Confirm "Deploy site" workflow passes and check the live URLs.
- [ ] Do Phase 0 (strategy & content).
- [ ] Do Phase 1 (design in Figma).
- [ ] Decide: GitHub Pages + build-time Sanity, or Vercel.
- [ ] Replace placeholder content (projects, capabilities, contact).
- [ ] Remove unused starter SVGs in `public/`.
- [ ] Continue with `docs/plan.md` (Phase 2: Sanity CMS).

### Notes
- The old folder `cv:readme github/mapl6.github.io` has a `:` in its path, which breaks `pnpm build` there. Work from this folder instead.
- If the CI `pnpm install` fails, pin `packageManager` to a pnpm version available on GitHub runners and regenerate the lockfile.
