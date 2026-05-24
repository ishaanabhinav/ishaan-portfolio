# Ishaan Abhinav — Personal Portfolio

[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-blue.svg)](https://vitejs.dev/) [![React 18](https://img.shields.io/badge/React-18-149eca.svg)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6.svg)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8.svg)](https://tailwindcss.com/) [![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000.svg)](https://vercel.com/)

Premium, production-grade developer portfolio for **Ishaan Abhinav** — Lead Software Engineer at Gojek.

🌐 **Live:** [ishaanabhinav.com](https://ishaanabhinav.com)

---

## ✨ Highlights

- **React 18 + Vite 6 + TypeScript (strict mode)** with absolute imports (`@/*`)
- **Tailwind CSS v3** design system with custom tokens, dark mode, and glassmorphism primitives
- **Framer Motion** for tasteful, reduced-motion-aware animations
- **Component-driven architecture**: UI primitives → layout shells → page sections
- **Accessible**: skip link, keyboard focus rings, semantic landmarks, ARIA labels
- **SEO**: pre-rendered meta, OpenGraph + Twitter cards, canonical URLs via `react-helmet-async`, robots + sitemap
- **Performance**: code-splitting (`React.lazy`), manual rollup chunks, immutable asset caching headers
- **Testing**: Vitest + React Testing Library with sample suites
- **DX**: ESLint (flat config) + Prettier + Husky + lint-staged

## 🗂 Project Structure

```
src/
├── assets/                   # Images, fonts (Inter is loaded via CDN)
├── components/
│   ├── ui/                   # Primitives: Button, Badge, GlassCard, etc.
│   ├── layout/               # Navbar, Footer, PageLayout, ScrollProgress
│   ├── effects/              # AnimatedBackground
│   ├── sections/             # Hero, About, Skills, Projects, Experience, ...
│   ├── ErrorBoundary.tsx     # Top-level error boundary
│   └── Seo.tsx               # Per-page Helmet wrapper
├── constants/                # Site & nav constants
├── context/                  # ThemeContext (light/dark)
├── data/                     # Projects, experience, skills, blog, socials
├── hooks/                    # Reusable hooks (theme, scroll spy, ...)
├── pages/                    # Home, NotFound
├── routes/                   # (Reserved) router definitions
├── services/                 # Contact form HTTP layer
├── styles/                   # global.css + tokens.css
├── tests/                    # Vitest test suites + setup
├── types/                    # Shared TS types
└── utils/                    # cn(), formatters
```

## 🚀 Getting Started

### Prerequisites

- **Node.js ≥ 20** (Vite 6 requires it)
- **npm** (or pnpm / yarn — both work, just keep a single lockfile)

### Local development

```bash
git clone https://github.com/ishaanabhinav/ishaan-portfolio.git
cd ishaan-portfolio

cp .env.example .env       # configure (optional) endpoints
npm install
npm run dev                # http://localhost:5173
```

### Available scripts

| Script              | What it does                                                |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Vite dev server with HMR                                    |
| `npm run build`     | Type-check + production build to `dist/`                    |
| `npm run preview`   | Serve the built bundle locally                              |
| `npm run lint`      | Run ESLint on `.ts` / `.tsx`                                |
| `npm run lint:fix`  | Auto-fix lint issues                                        |
| `npm run format`    | Format `src/` with Prettier                                 |
| `npm run typecheck` | `tsc -b --noEmit`                                           |
| `npm test`          | Run Vitest once                                             |
| `npm run test:watch`| Vitest in watch mode                                        |

### Environment variables

Defined in `.env.example`. All client-exposed vars must be prefixed with `VITE_`.

| Variable               | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `VITE_SITE_URL`        | Canonical site URL (used for SEO meta)                     |
| `VITE_CONTACT_ENDPOINT`| POST endpoint for the contact form (Formspree, Resend, …)  |

## 🏗 Architectural Decisions

- **Vite over Next.js** — this is a single-page CV/portfolio; the extra weight of an SSR framework isn’t justified. Vite gives us instant HMR, a tiny bundle, and dead-simple static deploys.
- **Tailwind v3 + custom design tokens** — the visual system lives in `tailwind.config.ts` and `src/styles/tokens.css`. Two CSS variables (`--bg-base`, `--header-height`) keep the background and layout adjustable without re-publishing the bundle.
- **Composition over duplication** — `GlassCard`, `Badge`, `SectionHeading`, `Button` cover ~80% of the visual surface. Sections compose primitives instead of restyling them.
- **Data-driven content** — every piece of resume content lives in `src/data/`. Updating a job, skill, or project doesn’t touch any component.
- **Theme as a side-effect** — `ThemeProvider` writes to `<html>` and `localStorage`; an inline `<script>` in `index.html` applies the persisted theme before React mounts (no FOUC).
- **Reduced motion is first-class** — `usePrefersReducedMotion` short-circuits all the decorative animations.

## 🧪 Testing

`npm test` runs three illustrative suites:

- `Button.test.tsx` — primitive behavior
- `Hero.test.tsx` — section integration
- `utils.test.ts` — pure utilities

Add new tests anywhere under `src/tests/` (or co-locate `*.test.tsx` next to components — both work).

## 🌐 Deployment

This project is set up for **GitHub → Vercel** continuous deployment.

### One-time setup

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit: portfolio scaffold"
   git branch -M main
   git remote add origin https://github.com/ishaanabhinav/ishaan-portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to <https://vercel.com/new>, pick the GitHub repo
   - Framework preset: **Vite** (auto-detected)
   - Build command: `npm run build` · Output: `dist`
   - Click **Deploy**

3. **Custom domain — `ishaanabhinav.com`**

   In the Vercel project: **Settings → Domains → Add** → `ishaanabhinav.com` (and `www.ishaanabhinav.com`).
   Vercel will show one of two options depending on what records exist already:

   **Option A — using the registrar (BigRock / GoDaddy / similar)**

   Log in to your registrar’s DNS panel and add:

   | Type   | Host / Name | Value                  | TTL  |
   | ------ | ----------- | ---------------------- | ---- |
   | `A`    | `@`         | `76.76.21.21`          | 1 hr |
   | `CNAME`| `www`       | `cname.vercel-dns.com` | 1 hr |

   Remove any conflicting `A` / `CNAME` records on `@` or `www` first.

   **Option B — using Vercel nameservers (recommended if you want CDN-edge DNS)**

   At the registrar, switch nameservers to:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

   Then Vercel automatically manages all DNS for the domain.

   DNS propagation usually completes within minutes but can take up to 48 hours.

4. **Every push to `main` deploys to production**; every PR gets a preview URL.

### Manual deploy (alternative)

```bash
npm i -g vercel
vercel login
vercel link
vercel --prod
```

## 🤝 Contributing / Editing

To swap in your own content, update the files in `src/data/` and `src/constants/site.ts` — no JSX changes required for 95% of edits.

## 📝 License

MIT © Ishaan Abhinav
