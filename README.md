# Mohamed Yamama — Portfolio

Dual-purpose personal site: a Technical Product Management portfolio and an
audio/creator hub. Next.js 14 (App Router), Tailwind CSS, Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verified clean: 8 static routes
```

Deploys to Vercel with zero config. For Netlify, add `@netlify/plugin-nextjs`.

## Structure

```
app/
  layout.tsx                    fonts, metadata, nav, skip-link
  page.tsx                      Hero → About → Case studies → Audio → Timeline → Contact
  globals.css                   brand tokens, component classes, reduced-motion
  not-found.tsx
  case-studies/[slug]/page.tsx  Notion-style detail page (SSG, 4 routes)
components/
  Nav.tsx  Hero.tsx  About.tsx  CaseStudyGrid.tsx
  AudioHub.tsx  Timeline.tsx  Contact.tsx
  ui/ Reveal.tsx  Logo.tsx  SectionHeading.tsx  Waveform.tsx
lib/data/
  profile.ts        bio, stats, skills, audio rig
  experience.ts     timeline, education, certifications
  case-studies.ts   all four case studies (single source of truth)
tailwind.config.ts  brand colours, type scale, keyframes
```

## Brand tokens

Taken from `Yamama Branding.pdf`:

| Token | Value | Use |
|---|---|---|
| `gold` | `#FDB913` | Accents, CTAs, hover states, metrics |
| `ink` / `charcoal-900` | `#231F20` | Page background |
| `surface` / `charcoal-800` | `#2C2829` | Cards (tuned elevation above brand black) |
| `hairline` | `#3A3536` | Borders and dividers |

`charcoal-800`/`700` are a derived elevation ramp — the brand book only
specifies the two core colours, and pure `#231F20` cards on a `#231F20`
background would be invisible.

## Fonts

`Agate-Bold` and `ITC Avant Garde Gothic Std` are licensed and can't be
served from a public CDN. The site loads **Montserrat** (display) and
**Poppins** (body) via `next/font`, per the brief's fallback instruction.

To switch to the real faces: drop `Agate-Bold.woff2` and
`ITCAvantGardeGothicStd-Bk.woff2` into `public/fonts/`. The `@font-face`
rules at the top of `globals.css` are already wired and will take over —
no other change needed.

## Content provenance

Nothing on the site is invented filler. Sources:

- **Consolidated Financial Dashboard** — `PRD - Financial Dashboard.docx` v1.0.
  Goals, metrics, non-goals and the Ahmed narrative are the real spec.
- **Data Cleansing & Onboarding** — `Development › Completed projects.csv`
  (Linear project, priority Urgent, completed Feb 2026).
- **Analytics Tracking Consistency** — the Mixpanel/WebEngage project in
  `My issues › Created.csv` (6 tickets).
- **Odoo 15 → 18 Upgrade** — résumé, Senior QA / Associate PM tenure.
- **Hero stats** — computed from the Linear export: 112 tickets authored,
  93 released (83%).

## Placeholders to fill before launch

1. `lib/data/profile.ts` — `linkedin` and `github` URLs are guesses.
2. `components/AudioHub.tsx` — set `embedId` on each release to a real
   YouTube ID. Until then the tiles render as labelled embed slots.
3. `public/` — add `og-image.png` (1200×630) and a favicon.
4. `app/layout.tsx` — update `metadataBase` to the production domain.

## Accessibility & performance notes

- `prefers-reduced-motion` respected globally in CSS and per-component via
  `useReducedMotion()` — no transforms or looping animations when set.
- Gold-on-charcoal focus rings on every interactive element; skip-to-content
  link on the first tab stop.
- Waveform bar heights come from a fixed seed array, not `Math.random()`,
  so server and client HTML match (no hydration mismatch).
- All case study pages are statically generated at build time.
