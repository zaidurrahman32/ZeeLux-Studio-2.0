# ZeeLux Studio

Premium developer portfolio & digital studio website for **Zaid Ur Rahman** —
web developer and founder of ZeeLux Studio.

Dark, modern, developer-first aesthetic · built with **React + Vite** ·
fully responsive · zero UI dependencies.

## Tech stack

- **React 18** — reusable component architecture
- **Vite 5** — fast dev server & optimized production builds
- **Plain CSS** (design tokens + component styles) — no CSS framework dependency
- **Inline SVG icons** — no icon library
- Centralized content in one file — no CMS/backend required to edit

## Getting started

```bash
npm install
npm run dev      # local development (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
├── index.html               # SEO meta tags, fonts, entry
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── images/
│       ├── profile.jpg      ← ADD your portrait here
│       └── projects/        ← ADD project screenshots here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── content.js       ← ALL editable content lives here
    ├── components/          # Navbar, Hero, About, Services, Skills,
    │                        # Projects, Process, WhyZeeLux, Contact, Footer…
    ├── hooks/
    │   └── useScrollSpy.js  # active nav highlighting
    └── styles/
        ├── tokens.css       # colors, fonts, radii (design system)
        ├── base.css         # reset, background, typography, reveal motion
        └── components.css   # all component styles + responsive rules
```

## How to customize (no code experience needed)

Everything you'd want to change is in **`src/data/content.js`**:

| What to change | Where |
| --- | --- |
| Bio / name / age / role | `about` |
| Services | `services` |
| Skills | `skillGroups` |
| Projects (title, description, tags, links, category) | `projects` |
| Process steps | `processSteps` |
| "Why ZeeLux" points | `whyPoints` |
| Contact form options | `contact` |
| WhatsApp / Email / Instagram / GitHub / LinkedIn | `socials` |
| Nav links | `nav` |

### 1. Your profile photo

Drop your portrait at:

```
public/images/profile.jpg
```

The hero automatically picks it up (a styled monogram shows until you add it).

### 2. Project images

Add screenshots to `public/images/projects/`, then in `content.js` set:

```js
image: '/images/projects/your-project.jpg',
liveUrl: 'https://...',   // your live site
repoUrl: 'https://...',   // your GitHub repo (optional)
placeholder: false,       // removes the "Placeholder" badge
```

### 3. Contact links

Replace every placeholder (`''` or `your.email@example.com`) in the
`socials` array with your real URLs. Empty values are hidden from the footer
and shown as clearly-marked placeholders in the contact panel.

### 4. Contact form delivery

The form works out of the box via the visitor's email client (mailto).
To have submissions sent directly to your inbox, create a free form endpoint
at [formspree.io](https://formspree.io) (or any service accepting form POSTs)
and set in `content.js`:

```js
export const site = {
  formEndpoint: 'https://formspree.io/f/your-id',
}
```

### 5. Design tweaks

Colors, fonts, glows and radii are CSS variables in `src/styles/tokens.css`.
Change `--accent` / `--accent-2` to re-tint the entire site.

## Future expansion notes

- The content/data layer (`src/data/content.js`) is structured so a headless
  CMS or REST/GraphQL API can replace it later without touching components.
- The contact form posts JSON/form-data to `site.formEndpoint` — wire it to
  any backend (Node/Express, Supabase, Formspree, etc.).
- Components are small and single-purpose; add sections by creating a
  component in `src/components/`, adding it to `App.jsx`, and (optionally)
  registering its id in `useScrollSpy` for active nav highlighting.

## Accessibility & performance

- Semantic HTML landmarks (`header`, `main`, `section`, `article`, `footer`)
- Keyboard-focusable controls with visible focus rings
- `aria-current` active nav state, labeled buttons and form fields
- `prefers-reduced-motion` disables animations
- Lazy-loaded images, system font fallbacks, ~55 kB gzipped JS
