# Ragwel Claims Consultants Ltd. — Website

Premium, fully responsive marketing site for Ragwel Claims Consultants Ltd.

**Stack:** Next.js 15 (App Router) · TypeScript (strict) · TailwindCSS v3 · Framer Motion · shadcn/ui · React Hook Form + Zod · Lucide.

**Design:** Premium Minimal — near-black (`#0A0A0A`) + muted gold (`#BFA060`), editorial typography (Playfair Display + Inter), flat surfaces, no gradients or shadows.

## Getting started

```bash
npm install
cp .env.example .env.local   # add NEXT_PUBLIC_FORMSPREE_ID (optional)
npm run dev                  # http://localhost:3000
```

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Lint with eslint-config-next         |

## Project structure

```
app/                 Routes (Home, /about, /services, /contact) + layout + globals
components/
  layout/            Navbar, Footer
  sections/          Hero, ServicesOverview, AboutTeaser, SectorsGrid, WhyRagwel, CredentialsBar
  ui/                shadcn primitives
  ContactForm.tsx
lib/
  constants.ts       All content strings, nav, services, sectors, credentials
  animations.ts      Framer Motion variants
  metadata.ts        Per-page metadata + JSON-LD
  utils.ts           cn() helper
public/images/       Brand assets (ragwel-logo.webp)
```

## Contact form

The form posts to Formspree when `NEXT_PUBLIC_FORMSPREE_ID` is set, otherwise it
falls back to a `mailto:` link. See `components/ContactForm.tsx`.

## Deployment (Vercel)

- **Production branch:** `main` (auto-deploys)
- **Preview branch:** `dev`
- **Build command:** `npm run build`
- **Env vars:** `NEXT_PUBLIC_FORMSPREE_ID`

## Git workflow

`main` (production) ← `dev` (integration) ← `feature/*` (one per section).
Commit atomically with prefixes: `init` `feat` `style` `fix` `refactor`
`content` `seo` `config` `a11y` `perf` `chore`. Never commit directly to
`main`; never force-push `main`/`dev`; merge features into `dev` with
`--no-ff`.
