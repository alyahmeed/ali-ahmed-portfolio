# معرض أعمال علي أحمد — Portfolio

Reconstruction of the Lovable preview site **"علي أحمد — معرض الأعمال"** as a fully
editable **Vite + React + TypeScript + Tailwind** project.

Arabic, RTL, dark editorial layout — gold accent on near-black, film grain overlay,
scrolling image marquee, scroll-reveal animations.

**Live:** https://alyahmeed.github.io/ali-ahmed-portfolio/
**Repo:** https://github.com/alyahmeed/ali-ahmed-portfolio

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck (tsc) + production build to dist/
npm run preview  # serve the production build
```

## Project structure

```
index.html                     RTL shell, Alexandria webfont link
public/assets/                 all 18 portfolio images + fonts.css
src/
  main.tsx                     React entry
  App.tsx                      renders the Home page
  index.css                    Tailwind layers, theme variables, custom utilities
  pages/Home.tsx               page composition (header → hero → sections → footer)
  data/portfolio.ts            ⭐ all editable content (projects, nav, socials, skills)
  lib/utils.ts                 cn() helper
  components/portfolio/
    SiteHeader.tsx             fixed header, turns solid + blurred after scrolling
    ScrollProgress.tsx         gold scroll-progress bar
    Hero.tsx                   headline + 3-row scrolling marquee
    SectionHeading.tsx         numbered section header (01/02/03) with outline numeral
    DesignSection.tsx          category tabs + sub-filters + masonry gallery
    VideoSection.tsx           "coming soon" video slots with pulsing play button
    AboutSection.tsx           portrait, bio, stats, skills
    ContactSection.tsx         big CTA + WhatsApp / Email / Behance
    SiteFooter.tsx             copyright + social links
    Reveal.tsx                 IntersectionObserver scroll-reveal wrapper
```

## Editing content

Everything a non-developer would want to change lives in **`src/data/portfolio.ts`**:

- `projects` — every portfolio item (title, client, image, category, tags)
- `categories` / `printFilters` / `socialFilters` — the tabs in the design section
- `navLinks`, `socials`, `contactCards` — navigation and contact details
- `skills` — the tool list in the "عنّي" section
- `heroMarqueeRows` — the images used in the hero marquee
- `videoSlots` — the three placeholders in the "الفيديو" section

Adding a project = add an object to `projects` and drop the image in `public/assets/`.

## Colours & fonts

The palette is defined once as HSL variables at the top of `src/index.css`:

| token | value | use |
| --- | --- | --- |
| `--background` | `40 20% 6%` | page background |
| `--foreground` | `40 30% 94%` | body text |
| `--primary` | `41 78% 58%` | gold accent |
| `--muted-foreground` | `40 10% 60%` | secondary text |
| `--card` / `--border` | `40 18% 10%` / `40 14% 22%` | cards & rules |

Tailwind maps them to `bg-background`, `text-foreground`, `bg-primary`,
`text-muted-foreground`, `bg-card`, `border-border`, etc. (see `tailwind.config.js`).

Custom utilities: `shell` (page gutter), `grain`, `gold-line`, `card-veil`,
`hero-veil`, `text-outline`, `hoverZoomLink`.

## Notes

- The project images were recovered from the saved preview page; the four printed
  book covers carry their original Arabic titles, while the 13 social-media items
  were named from their source file names — adjust them in `src/data/portfolio.ts`.
- `Reveal` uses `IntersectionObserver`; elements below the fold start hidden and
  fade in. `prefers-reduced-motion` is respected.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main`. Vite's `base` is relative (`./`) and all asset paths are relative, so the
same build works from a domain root and from the `/ali-ahmed-portfolio/` sub-path.

To deploy elsewhere (Vercel, Netlify, Cloudflare Pages) just point the provider at
the repository — the build command is `npm run build` and the output directory is
`dist`.
