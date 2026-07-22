# Anjali Makeup Studio — Website

A premium, fully responsive, frontend-only React website for **Anjali Makeup Studio**,
built from the studio's real price list and portfolio photos.

**100% frontend.** No backend, no database, no authentication, no payment
gateway. The "contact form" opens a pre-filled WhatsApp chat on submit —
nothing is stored or transmitted to a server.

---

## Tech Stack

- **React 19** (JavaScript, function components + hooks)
- **Vite** — build tool & dev server
- **Tailwind CSS 3** — utility-first styling, custom brand theme
- **React Router 7** — client-side routing (14 pages)
- **Framer Motion** — scroll reveals, page/menu transitions
- **lucide-react** — icon set
- **react-helmet-async** — per-page SEO meta tags

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Folder Structure

```
src/
├── components/
│   ├── layout/        Navbar, Footer, Layout, ScrollToTop
│   ├── ui/             Button, SectionHeading, Reveal, SEO, Container,
│   │                    PageHero, Logo, RatingStars, WhatsAppFloat,
│   │                    SocialIcons, StatCounter
│   ├── home/            Hero, AboutPreview, ServicesPreview,
│   │                    BridalPackageTeaser, GalleryPreview, OffersTeaser,
│   │                    TestimonialsPreview, CTASection
│   ├── services/        ServiceCard
│   ├── membership/       PackageCard
│   ├── testimonials/    TestimonialCard
│   ├── faq/              AccordionItem
│   ├── contact/         ContactForm
│   └── legal/            LegalSection
├── data/                 siteConfig, services, packages, offers, gallery,
│                          team, testimonials, faq  ← edit these to update
│                          site content, no JSX required
├── pages/                One file per route (14 pages total)
├── hooks/
├── App.jsx               Route definitions
└── main.jsx               App entry point
```

## Editing Content

Almost everything on the site is data-driven. To update prices, services,
packages, offers, team members, testimonials or FAQs, edit the matching file
in `src/data/` — no component code needs to change.

Brand info (phone, address, social links, hours, stats) lives in
`src/data/siteConfig.js`.

## Design System

| Token       | Value      |
|-------------|------------|
| Primary     | `#C89B3C` (gold) |
| Secondary   | `#1F1F1F` (charcoal) |
| Accent      | `#F8F4EC` (cream) |
| Background  | `#FFFFFF` |
| Text        | `#222222` |
| Display font | Cormorant Garamond |
| Script font  | Italianno |
| Body font    | Jost |

All tokens are defined in `tailwind.config.js`. The signature gold "✦"
shimmer-divider (`.gold-divider` in `src/index.css`) is the recurring motif
used under every section heading — pulled from the studio's own flyers.

## Pages (14)

Home · About · Services · Pricing · Gallery · Team · Testimonials ·
Membership/Packages · Offers · Contact · FAQ · Privacy Policy ·
Terms & Conditions · 404

## Deployment

This is a static site — the `dist/` folder from `npm run build` can be
deployed to any static host (Netlify, Vercel, GitHub Pages, Cloudflare
Pages, etc.). No environment variables or server config required.

## Notes

- Gallery photos are the studio's own real portfolio images (cleaned up
  from the source PDF). Facial/waxing/hair services without a supplied
  photo intentionally use a styled placeholder instead of a stock photo.
- Update `src/data/siteConfig.js` → `email`, `social` links, and the domain
  in `src/components/ui/SEO.jsx` (`SITE_URL`) once the real domain and
  social accounts are live.
- Team bios, testimonials, and FAQ content are realistic placeholders
  (not present in the source PDF) — swap in real copy whenever ready.
