# Ali Ahmed — Portfolio · معرض أعمال علي أحمد

A bilingual (English / Arabic) portfolio for a graphic designer & video editor.
Built with **Vite + React + TypeScript + Tailwind**.

**Live:** https://alyahmeed.github.io/ali-ahmed-portfolio/
**Repo:** https://github.com/alyahmeed/ali-ahmed-portfolio

## Features

- **Two languages** — English (default, LTR) and Arabic (RTL) via a single toggle in
  the header. The choice is stored in `localStorage` (`portfolio:locale`).
- **Two themes** — dark (default) and light, toggled from the header, stored in
  `localStorage` (`portfolio:theme`) and applied through `data-theme` on `<html>`.
- **Two type systems** — Space Grotesk + Manrope for English, self-hosted
  **Thmanya / ثمانية** for Arabic (Sans for body, Serif Display for headings).
- **Expandable galleries** — every grid shows 4 tiles with a `+N` overlay; clicking it
  expands the full set in place.
- **Video & reels sections** — 16:9 promo slots and 9:16 reel slots, ready for real
  video files.
- **Gradients & motion** — brand gradients, aurora blobs, gradient headings, glow
  borders, shine sweeps, scroll-reveal animations.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck (tsc) + production build to dist/
npm run preview  # serve the production build
```

## Section order

| # | Section | anchor | component |
| --- | --- | --- | --- |
| 01 | Social Media | `#social` | `ProjectGallery` |
| 02 | Print Design | `#print` | `ProjectGallery` |
| 03 | Video & Editing | `#video` | `VideoSection` |
| 04 | Reels | `#reels` | `ReelsSection` |
| 05 | About Me | `#about` | `AboutSection` |
| 06 | Contact | `#contact` | `ContactSection` |

## Project structure

```
index.html                     shell + Google Fonts (Manrope / Space Grotesk / JetBrains Mono)
public/assets/                 portfolio images (incl. me.png portrait)
public/assets/fonts/           self-hosted Thmanya woff2 files
src/
  main.tsx                     React entry
  App.tsx                      ThemeProvider + LocaleProvider + Home
  index.css                    Tailwind layers, theme variables, @font-face, custom utilities
  pages/Home.tsx               page composition (header → hero → sections → footer)
  data/portfolio.ts            ⭐ all editable content (projects, nav, socials, skills, video/reel slots)
  i18n/
    translations.ts            ⭐ all copy in English + Arabic
    LocaleContext.tsx          locale provider, dir switching, persistence
  theme/ThemeContext.tsx       dark / light provider, persistence
  lib/utils.ts                 cn() helper
  components/portfolio/
    SiteHeader.tsx             fixed header, language + theme toggles, mobile drawer
    ScrollProgress.tsx         gold scroll-progress bar
    Hero.tsx                   headline + 3-row scrolling marquee + aurora blobs
    SectionHeading.tsx         numbered section header with outline numeral
    ProjectGallery.tsx         filters + expandable gallery (used by social & print)
    GalleryGrid.tsx            4-tile preview with "+N" overlay and expand
    ProjectCard.tsx            project tile with gradient veil on hover
    VideoSection.tsx           promo panel + 16:9 video slots
    ReelsSection.tsx           9:16 reels grid
    AboutSection.tsx           portrait (assets/me.png), bio, stats, skills
    ContactSection.tsx         big CTA + WhatsApp / Email / Behance
    SiteFooter.tsx             copyright + social links
    Reveal.tsx                 IntersectionObserver scroll-reveal wrapper
```

## Editing content

**`src/data/portfolio.ts`** — projects, nav, socials, contact cards, skills, hero
marquee rows, video slots, reel slots.

**`src/i18n/translations.ts`** — every visible string, in both languages.
Project titles and clients are keyed by project id (`projects: { 1: {...} }`).

Adding a project = add an object to `projects`, drop the image in `public/assets/`,
and add the matching entry to `projects` in both `en` and `ar`.

## Colours & fonts

The palette is defined once as HSL variables at the top of `src/index.css`,
in two blocks: `:root` (dark) and `[data-theme='light']` (light).

| token | dark | light | use |
| --- | --- | --- | --- |
| `--background` | `40 20% 6%` | `40 33% 97%` | page background |
| `--foreground` | `40 30% 94%` | `35 18% 12%` | body text |
| `--primary` | `41 78% 58%` | `30 75% 33%` | gold accent |
| `--muted-foreground` | `40 10% 60%` | `35 10% 40%` | secondary text |
| `--card` / `--border` | `40 18% 10%` / `40 14% 22%` | `40 30% 99%` / `36 18% 84%` | cards & rules |

Tailwind maps them to `bg-background`, `text-foreground`, `bg-primary`,
`text-muted-foreground`, `bg-card`, `border-border`, etc. (see `tailwind.config.js`).

Custom utilities: `shell` (page gutter), `grain`, `gold-line`, `card-veil`,
`hero-veil`, `text-outline`, `text-gradient`, `text-gradient-gold`, `glass`,
`ring-glow`, `aurora`, `shine`, `btn-gradient`, `grad-brand`, `hoverZoomLink`.

### Fonts

- **English** — Space Grotesk (display) + Manrope (body) + JetBrains Mono (labels),
  loaded from Google Fonts.
- **Arabic** — Thmanya (ثمانية) from
  [engdawood/thmanyah-font-web](https://github.com/engdawood/thmanyah-font-web),
  self-hosted in `public/assets/fonts/` and declared with `@font-face` in
  `src/index.css`. Weights: Sans 300/400/500/700, Serif Display 400/700/900,
  Serif Text 400/700.

The active font stack is switched by the `lang` attribute on `<html>`:
`--font-display` and `--font-sans` resolve to the Latin or Arabic families.

## Notes

- The project images were recovered from the saved preview page; the four printed
  book covers carry their original Arabic titles, while the 13 social-media items
  were named from their source file names — adjust them in `src/data/portfolio.ts`.
- `Reveal` uses `IntersectionObserver`; elements below the fold start hidden and
  fade in. `prefers-reduced-motion` is respected.
- The video and reel slots are placeholders with poster images; drop real media in
  and swap the `<img>` for a `<video>` when the files are ready.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main`. Vite's `base` is relative (`./`) and all asset paths are relative, so the
same build works from a domain root and from the `/ali-ahmed-portfolio/` sub-path.

To deploy elsewhere (Vercel, Netlify, Cloudflare Pages) just point the provider at
the repository — the build command is `npm run build` and the output directory is
`dist`.
