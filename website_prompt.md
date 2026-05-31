You are a senior frontend engineer and UI designer.

Build a premium, fully responsive static website for Ragwel Claims Consultants Ltd.
using Next.js 15 (App Router), TypeScript, TailwindCSS v3, Framer Motion, and shadcn/ui.

────────────────────────────────────────────
DESIGN DIRECTION — OPTION C: PREMIUM MINIMAL
────────────────────────────────────────────

Visual language: Near-black (#0A0A0A) + muted gold (#BFA060) + white text.
Ultra-refined, confident, editorial. Positions Ragwel as the premium choice —
think Magic Circle law firm meets tier-1 engineering consultancy.

Key design traits:
- Full near-black (#0A0A0A) backgrounds for hero and nav
- Subtle engineering grid-line texture overlay in hero (CSS repeating-linear-gradient,
  2px opacity, no performance cost)
- Gold (#BFA060) used ONLY as accent: borders, icons, numbers, overlines, CTAs
- All-caps micro-labels (font-size: 10-11px, letter-spacing: 0.14-0.20em)
- Numbered service rows (01, 02, 03...) in muted white
- Gold overline rule before section headlines (24px wide, 1px tall, inline)
- Headings: Playfair Display, weight 400-500, slight negative letter-spacing
- Body: Inter, weight 400, color rgba(255,255,255,0.55) on dark backgrounds
- Cards: dark surface (#141414) with 0.5px gold-tinted border
- CTA buttons: gold fill (#BFA060) + near-black text — primary action only
- Ghost buttons: transparent + rgba(255,255,255,0.15) border + white text
- No gradients. No drop shadows. No decorative effects. Flat surfaces only.
- Section dividers: 1px solid rgba(255,255,255,0.06)
- Border radius: 8px (md) for components, 12px (lg) for cards
- Hover states: border brightens to rgba(191,160,96,0.4), text to rgba(255,255,255,0.9)

Light mode (Tailwind dark: class strategy, system default = dark):
- Background: #FAFAFA
- Text: #0A0A0A
- Gold accent: #A07830 (darkened for contrast on light)
- Cards: #FFFFFF with 0.5px border #E0E0E0

────────────────────────────────────────────
BRAND IDENTITY
────────────────────────────────────────────

Company:        Ragwel Claims Consultants Ltd.
Tagline:        "Your Commercial Position, Expertly Defended."
Sector:         Construction Claims Consultancy

Colors (add to tailwind.config.ts):
  black:        { DEFAULT: '#0A0A0A', surface: '#141414', deep: '#0B1A2E' }
  gold:         { DEFAULT: '#BFA060', bright: '#C9922A', muted: 'rgba(191,160,96,0.6)' }
  white:        { DEFAULT: '#FFFFFF', dim: 'rgba(255,255,255,0.55)',
                  ghost: 'rgba(255,255,255,0.15)', faint: 'rgba(255,255,255,0.06)' }
  offwhite:     '#FAFAFA'

Fonts (next/font/google):
  Headings:     Playfair Display — weights 400, 500
  Body/UI:      Inter — weights 400, 500
  Micro-labels: Inter 500, letter-spacing 0.14-0.20em, text-transform uppercase

Logo fallback (if no SVG provided):
  - Wordmark: "RAGWEL" in Inter 500, letter-spacing 0.15em, white
  - Subtitle: "Claims Consultants Ltd." in Inter 400, letter-spacing 0.20em,
    font-size 9px, gold (#BFA060), uppercase
  - Icon: combine Lucide <Scale> + <Building2> at 18px, gold colored,
    inside a 34px circle with rgba(191,160,96,0.15) background

Contact:
  Email primary:   joseph@ragwelcc.com
  Email alt:       raguelcc@gmail.com
  Phone:           +44 7857 710600
  Office 1:        London, United Kingdom
  Office 2:        Midrand, South Africa

────────────────────────────────────────────
SITE STRUCTURE & CONTENT
────────────────────────────────────────────

Pages: / (Home) | /about | /services | /contact

── HOME PAGE ──────────────────────────────

1. STICKY NAVIGATION
   Background: #0A0A0A, transitions to rgba(10,10,10,0.85) + backdrop-blur-md
   after scrolling 60px (Framer Motion scroll listener).
   Left: Logo (icon + RAGWEL wordmark + subtitle)
   Right: Home · About Us · Our Services · [Contact Us — gold filled button]
   Mobile: hamburger → shadcn Sheet drawer, full-height, same dark bg.
   Active link: white; inactive: rgba(255,255,255,0.55)

2. HERO SECTION
   Background: #0A0A0A with CSS grid-line texture:
     background-image: repeating-linear-gradient(0deg, transparent, transparent 39px,
       rgba(255,255,255,0.025) 39px, rgba(255,255,255,0.025) 40px),
       repeating-linear-gradient(90deg, transparent, transparent 39px,
       rgba(255,255,255,0.025) 39px, rgba(255,255,255,0.025) 40px);
   Padding: 80px top, 60px bottom (desktop)

   Overline: gold rule + "Construction Claims Consultancy" (all-caps micro-label, gold)
   Headline (Playfair Display, 48px desktop / 32px mobile, white):
     "Your Commercial Position,
      Expertly Defended."
     — the word "Expertly Defended." in gold (#BFA060)

   Subheading (Inter 400, 14px, rgba(255,255,255,0.45), max-width 480px):
     "Specialised in commercial management, contracts management, cost management,
      claims management, dispute avoidance and resolution services, delay analysis
      and forensic claims."

   CTA row:
     Primary: "Explore Services" → /services (gold fill, black text)
     Ghost: "+44 7857 710600" with phone icon (transparent, white border)

   Metric strip below CTAs (border-top: 1px solid rgba(255,255,255,0.06)):
     Four columns separated by vertical dividers:
     RICS | CIArb | 2 Global Offices | ADR Specialists
     (value in gold 22px/500, label in all-caps white 10px/400 opacity 0.35)

3. SERVICES OVERVIEW
   Background: #141414
   Overline: gold rule + "Core Services"
   Header row: "What We Do" (Playfair, 32px) — right: "View all →" gold link

   Numbered service rows (border-bottom: 1px solid rgba(255,255,255,0.05)):
     01  [Lucide FileText icon, gold]   Commercial & Contracts Management
         "All phases"  (right-aligned tag, gold muted)
     02  [Scale icon]                   Claims Management & Formulation
         "Tribunals · Adjudication"
     03  [Clock icon]                   Delay Analysis & Programme Review
         "Forensic"
     04  [Shield icon]                  Dispute Avoidance & Resolution
         "Conciliation · Arbitration"
     05  [Calculator icon]              Cost Management
         "Valuations · Final Account"
     06  [Search icon]                  Forensic Quantity Surveying
         "Cost Recovery"

4. ABOUT TEASER
   Background: #0A0A0A
   Two-column layout (desktop): left = text, right = credentials card

   Left:
     Overline: gold rule + "About Us"
     Headline (Playfair, 32px): "Extensive Experience. Global Reach."
     Body (Inter 400, 14px, white dim):
       "Ragwel Claims Consultants Ltd. provides strategic advice and support
        from the start of a scheme through to project completion, including
        post-completion close-out reporting, audit control, and collaboration
        throughout the project's life cycle."
       "Our team has worked with clients, financiers, investors, and contractors
        on brownfield site development, mining, power generation, civil
        infrastructure, railway, highway, runway refurbishment, ports feasibility,
        property developments, industrial buildings, and oil and gas projects."
     CTA: "Learn About Us →" (ghost button)

   Right — credentials card (#141414, border: 0.5px solid rgba(191,160,96,0.2),
   border-radius 12px, padding 24px):
     Title: "Professional Registrations" (all-caps micro-label)
     Badge grid (2-col): RICS · CICES · CIArb · ICCP · SCL · Adjudicators Society
       Each badge: rgba(191,160,96,0.1) bg, gold border 0.5px, gold text 11px
     Divider
     Title: "Our Offices"
     Two rows: 📍 London, United Kingdom / 📍 Midrand, South Africa
       (MapPin icon gold, text white 11px)

5. SECTORS SECTION
   Background: #141414
   Overline: gold rule + "Sectors We Serve"
   Headline: "Built for Complex Projects"
   4-col icon grid (2-col tablet, 2-col mobile):
     Civil Infrastructure · Mining · Power Generation · Railway Works
     Highway Works · Runway Refurbishment · Ports & Feasibility
     Property Development · Industrial Buildings · Oil & Gas
   Each cell: dark card (#0A0A0A), Lucide icon (gold, 20px), label (white, 11px)
   Hover: border brightens to rgba(191,160,96,0.4)

6. WHY RAGWEL STRIP
   Background: #0A0A0A, border-top and border-bottom rgba(255,255,255,0.06)
   Three columns:
     01  Dispute Prevention First
         "Early intervention and contract risk management to prevent
          costly disputes before they escalate."
     02  Forensic Precision
         "Substantive claims formulation for tribunals, adjudication,
          conciliation, and Construction Court actions."
     03  Global Experience
         "Experience gained at top global engineering firms across
          multiple cultures and construction contract frameworks."
   Column number in gold 32px/500 Playfair; title white 14px/500 Inter;
   body white-dim 13px/400 Inter.

7. FOOTER
   Background: #0A0A0A, border-top: 1px solid rgba(255,255,255,0.06)
   Layout: Logo + tagline left | Nav links center | Contact right
   Bottom bar: copyright left, office cities right (gold MapPin icons)
   Copyright: "© 2025 RagWel Claims Consultants Limited. All rights reserved."

── ABOUT US PAGE ──────────────────────────

Hero: Same dark bg + grid texture. Overline + "About Us". No CTA.

Section 1 — Who We Are
  Full firm description. Two-column body text on desktop.

Section 2 — Credentials (card grid, 3-col)
  For each body (RICS, CICES, CIArb, ICCP, SCL, Adjudicators Society):
    Card: badge acronym (gold, Playfair 24px) + full name + 1-line description

Section 3 — Offices (2-col cards)
  London, United Kingdom — with map pin and contact details
  Midrand, South Africa — with map pin and contact details

── OUR SERVICES PAGE ──────────────────────

Hero: dark bg, overline, headline "Expert Services. Proven Results."

Intro: reworded overview paragraph (see Home About teaser)

8 Service cards in 2-col grid (1-col mobile):
  Each card (#141414, gold top-accent border 2px, padding 24px):
    Number (01–08, gold, Playfair 32px)
    Title (white, Inter 500, 16px)
    Description (white-dim, Inter 400, 13px, 3–4 sentences)
    Tag chips at bottom (rgba(191,160,96,0.1) bg, gold border, gold text 10px)

Services:
  01 Commercial Management — Comprehensive commercial oversight from
     project initiation through to final account settlement and close-out.
     Tags: All Project Phases · Close-Out
  02 Contracts Management — Contract administration, risk allocation,
     change management and NEC/FIDIC/JCT expertise.
     Tags: NEC · FIDIC · JCT
  03 Cost Management — Budget control, valuations, cost reporting,
     and final account settlement.
     Tags: Valuations · Budget Control
  04 Claims Management — Substantive claims formulation and negotiation
     for adjudication, conciliation, tribunals, and court actions.
     Tags: Adjudication · Tribunals · Court
  05 Dispute Avoidance — Support on non-contentious matters during
     project execution to prevent escalation into formal disputes.
     Tags: Early Intervention · Risk Management
  06 Dispute Resolution — Representation and advice through adjudication,
     conciliation, arbitration, and Construction Court proceedings.
     Tags: ADR · Arbitration · Conciliation
  07 Delay Analysis — Forensic programme review, delay attribution,
     and extension of time analysis for complex projects.
     Tags: Forensic · EOT · Programme
  08 Forensic Quantity Surveying — Detailed cost recovery analysis
     defending clients through forensic measurement and valuation.
     Tags: Cost Recovery · Measurement

Sectors strip (same as Home).

Credentials bar: full-width dark band:
  "Registered with RICS · CICES · CIArb · ICCP · SCL · Adjudicators Society"

── CONTACT US PAGE ────────────────────────

Hero: dark bg, overline + "Contact Us". Minimal.

Two-column layout (desktop, stacks on mobile):

Left — details:
  Email: joseph@ragwelcc.com
  Email: raguelcc@gmail.com
  Phone: +44 7857 710600
  Offices:
    📍 London, United Kingdom
    📍 Midrand, South Africa

Right — form (React Hook Form + Zod):
  Fields: First Name · Last Name (row) | Phone | Email* | Message* |
          Preferred Contact: ○ Phone  ○ Email  ○ Other
  Submit: gold fill CTA "Send Message"
  Success: shadcn Toast "Message sent — we'll be in touch shortly."
  Note: static site — wire up to Formspree (add NEXT_PUBLIC_FORMSPREE_ID env var)
        or mailto fallback. Include comment in code.

────────────────────────────────────────────
ANIMATIONS (Framer Motion)
────────────────────────────────────────────

All variants defined in lib/animations.ts and imported into components.

fadeUp:         { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 },
                  transition: { duration: 0.4, ease: 'easeOut' } }

staggerChildren: container variant with staggerChildren: 0.08

wordReveal:     split headline into words, each animates fadeUp with stagger 0.05s

springScale:    credential badges: { scale: 0.8 → 1, type: 'spring', stiffness: 200 }

scrollReveal:   use Framer Motion whileInView with once: true, viewport margin "-60px"
                on: service rows, sector cards, about section, why-ragwel columns

navBlur:        useScroll → when scrollY > 60: bg transitions to rgba(10,10,10,0.85)
                + backdrop-blur-md via Framer Motion useTransform

hoverCard:      service cards and sector cards: whileHover border-color to
                rgba(191,160,96,0.4), transition duration 0.2s

buttonPress:    all buttons: whileTap scale(0.97)

pageTransition: layout wrapper AnimatePresence with opacity 0→1, duration 0.3s

────────────────────────────────────────────
TECHNICAL REQUIREMENTS
────────────────────────────────────────────

Framework:          Next.js 15 App Router
Language:           TypeScript (strict: true)
Styling:            TailwindCSS v3 with custom config
Animation:          Framer Motion
Components:         shadcn/ui (Button, Card, Badge, Sheet, Toast, Separator)
Forms:              React Hook Form + Zod
Icons:              Lucide React
Fonts:              next/font/google — Playfair Display (400,500) + Inter (400,500)
Images:             next/image, priority on hero, WebP format
SEO:                generateMetadata per page; JSON-LD LocalBusiness + ProfessionalService
Accessibility:      WCAG 2.1 AA, skip-to-content, focus-visible rings, aria-labels
Dark/light mode:    Tailwind class strategy, system default = dark
Target score:       Lighthouse >95 across all four categories

────────────────────────────────────────────
FOLDER STRUCTURE
────────────────────────────────────────────

ragwel-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                     ← Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── AboutTeaser.tsx
│   │   ├── SectorsGrid.tsx
│   │   ├── WhyRagwel.tsx
│   │   └── CredentialsBar.tsx
│   ├── ui/                          ← shadcn components
│   └── ContactForm.tsx
├── lib/
│   ├── metadata.ts
│   ├── animations.ts
│   └── constants.ts                 ← all content strings, nav links, services data
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.ts
└── package.json

────────────────────────────────────────────
GIT WORKFLOW
────────────────────────────────────────────

BRANCH STRUCTURE
  main        — production only. Mirrors what is live on Vercel.
                Never commit directly. Only receives merges from dev.
  dev         — integration. All tested features land here before main.
                Vercel Preview deploys from this branch.
  feature/*   — one branch per section/feature, always cut from dev.

  Suggested branch sequence for this project:
    feature/project-scaffold
    feature/tailwind-config
    feature/navbar-footer
    feature/home-hero
    feature/home-services-overview
    feature/home-about-teaser
    feature/home-sectors-why
    feature/about-page
    feature/services-page
    feature/contact-page
    feature/animations
    feature/seo-metadata
    feature/dark-mode
    feature/accessibility-audit
    feature/performance-pass

COMMIT CONVENTIONS (on feature branches — commit frequently and atomically)
  Prefixes:
    init:     initial scaffold / boilerplate
    feat:     new component or functionality
    style:    visual/CSS changes, no logic change
    fix:      bug fix
    refactor: restructure with no behaviour change
    content:  copy, text, or data changes only
    seo:      metadata, schema, head tags
    config:   tailwind, next.config, tsconfig
    a11y:     accessibility improvements
    perf:     performance optimisations
    chore:    deps, file moves, cleanup

  Example sequence on feature/home-hero:
    init: scaffold HeroSection component
    feat: add headline, subheading, and overline markup
    style: apply Option C gold/black colour tokens to hero
    style: add CSS grid-line texture overlay
    content: add credential badges and office pills
    feat: implement metric strip with 4 columns
    feat: add primary and ghost CTA buttons
    style: responsive layout — tablet and mobile breakpoints
    a11y: add aria-labels and skip-to-content link
    fix: correct hero min-height on iOS Safari
    perf: convert hero bg to next/image with priority flag
    refactor: extract animation variants to lib/animations.ts

RULES
  - No co-authored-by in any commit message
  - Never force-push main or dev
  - Never delete feature branches — keep for rollback targeting
  - Never merge a feature branch directly into main

MERGING FEATURE → DEV
  git checkout dev
  git pull origin dev
  git merge --no-ff --no-commit feature/<name>
  # review staged diff
  git commit -m "merge: feature/<name> into dev"
  git push origin dev

MERGING DEV → MAIN (release)
  git checkout main
  git pull origin main
  git merge --no-ff dev -m "release: v<x.y.z> — <brief description>"
  git tag -a v<x.y.z> -m "Release v<x.y.z>"
  git push origin main --tags

ROLLBACK
  Revert a bad merge into dev (non-destructive, safe):
    git checkout dev
    git revert -m 1 <merge-commit-hash>
    git push origin dev
  Feature branch remains intact and can be re-merged after fixes.

  Reset dev before a merge (not yet deployed to Vercel):
    git reset --hard <commit-hash-before-merge>
    git push origin dev --force-with-lease

  Roll back production (main):
    git checkout main
    git revert -m 1 <release-merge-commit-hash>
    git push origin main

INITIAL REPO SETUP
  git init
  git remote add origin https://github.com/Sash3n/ragwel-website.git
  git checkout -b main
  git add .
  git commit -m "init: Next.js 15 project scaffold"
  git push -u origin main
  git checkout -b dev
  git push -u origin dev
  git checkout -b feature/project-scaffold

VERCEL INTEGRATION
  Production branch:  main  (auto-deploys on push)
  Preview branch:     dev   (generates preview URL — use for review before release)
  Build command:      npm run build
  Output:             .next (standard SSG) or out/ (static export)
  Env vars:           NEXT_PUBLIC_FORMSPREE_ID=<your_formspree_id>

────────────────────────────────────────────
GENERATE ALL OF THE FOLLOWING
────────────────────────────────────────────

1.  Complete folder structure with all files listed
2.  app/layout.tsx — root layout, font loading, root metadata
3.  app/globals.css — CSS variables, base styles, grid texture utility class
4.  tailwind.config.ts — brand color tokens, font families, custom utilities
5.  next.config.ts — static export compatible, image domains
6.  lib/metadata.ts — generateMetadata config for all 4 pages
7.  lib/animations.ts — all Framer Motion variants (fadeUp, stagger,
    wordReveal, springScale, scrollReveal, navBlur, hoverCard,
    buttonPress, pageTransition)
8.  lib/constants.ts — all content strings, nav links, services array,
    sectors array, credentials array
9.  components/layout/Navbar.tsx — sticky, blur-on-scroll, mobile drawer
10. components/layout/Footer.tsx — three-column, bottom bar
11. components/sections/HeroSection.tsx
12. components/sections/ServicesOverview.tsx
13. components/sections/AboutTeaser.tsx
14. components/sections/SectorsGrid.tsx
15. components/sections/WhyRagwel.tsx
16. components/sections/CredentialsBar.tsx
17. components/ContactForm.tsx — React Hook Form + Zod + Formspree
18. app/page.tsx — Home (composes all sections)
19. app/about/page.tsx
20. app/services/page.tsx
21. app/contact/page.tsx
22. JSON-LD schema snippet (LocalBusiness + ProfessionalService) in layout.tsx
23. README.md — setup, dev, build, deploy, and git workflow instructions

────────────────────────────────────────────
LOGO / BRAND IMAGE
────────────────────────────────────────────

A high-resolution logo PNG has been provided. File location:
  public/images/ragwel-logo.png

Logo description (for accurate implementation):
  The logo is a sticker-style badge with a soft rounded-rectangle white
  background and a subtle gold outer glow/border.

  Icon (top half of badge):
    - Lady Justice figure (grey/silver stone statue aesthetic) holding
      gold weighing scales (balance) in her raised left hand
    - Behind her: a yellow/gold construction tower crane
    - To her right: a grey multi-storey building silhouette
    - Combined visual metaphor: legal precision meets construction industry

  Wordmark (bottom half of badge):
    - "RAGWEL" — bold, navy blue (#1C3D6E), large, wide letter-spacing
    - "CLAIMS CONSULTANTS Ltd." — medium weight, navy blue, smaller,
      wider letter-spacing, all caps

IMPLEMENTATION INSTRUCTIONS
  1. Save the provided PNG to: public/images/ragwel-logo.png
  2. In Navbar.tsx, render it using next/image:

     import Image from 'next/image'

     <Image
       src="/images/ragwel-logo.png"
       alt="Ragwel Claims Consultants Ltd. logo"
       width={120}
       height={120}
       className="object-contain"
       priority
     />

  3. Navbar logo sizing:
       Desktop: height 52px, width auto (contain)
       Mobile:  height 40px, width auto (contain)
     Use className="h-[52px] w-auto md:h-[52px]" on the Image wrapper div.

  4. In the Footer, render a smaller version:
       height 40px, width auto, same src and alt.

  5. Do NOT recreate the logo using Lucide icons or text — always use
     the PNG. The text-based fallback described earlier is superseded
     by this file.

  6. The logo has a white background in the badge. On the dark (#0A0A0A)
     site background, apply:
       className="drop-shadow-[0_0_12px_rgba(191,160,96,0.25)]"
     to the Image element to echo the gold glow from the original logo
     against the dark background. No other filter needed.

  7. For the browser tab favicon, generate a 32×32 and 180×180 PNG crop
     of just the Lady Justice + crane icon (no wordmark) and save as:
       public/favicon.ico
       public/apple-touch-icon.png
     Reference in app/layout.tsx metadata:
       icons: {
         icon: '/favicon.ico',
         apple: '/apple-touch-icon.png',
       }