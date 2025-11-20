# Crownstone Lawyers (law2)

A light, modern Next.js + Tailwind site for a law practice. Built to mirror `law1` structure with a distinct design.

## Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Framer Motion
- Lucide Icons

## Getting Started
1. Install dependencies:
   npm install
2. Run the dev server:
   npm run dev
3. Open http://localhost:3000

## Config
- Env: copy `.env.example` to `.env.local` and adjust `NEXT_PUBLIC_SITE_URL` if needed.
- Image domains are configured for Unsplash in `next.config.mjs`.

## Customization
- Branding: update name in `components/Navbar.tsx:17` and footer text in `components/Footer.tsx:5`.
- Colors/Fonts: tweak `tailwind.config.ts` (brand palette, accent, fonts).

## Structure
- `app/` – routing and layout
- `components/` – shared UI
- `sections/` – page sections wired in `app/page.tsx`
