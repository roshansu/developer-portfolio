# alex.dev — Developer Portfolio

An animated, bold-and-colorful developer portfolio built with **React + Vite + Tailwind CSS v4** and **Framer Motion**.

## ✨ What's inside

- **Hero** with a self-typing code editor (the signature visual) and a tilted, marker-highlighted headline
- **Scrolling skills marquee** — a tilted coral strip of tech tags
- **Projects grid** — alternating-offset cards that lift and tilt on hover
- **About** — an organic "blob" avatar shape with a spinning "say hi" badge
- **Experience timeline** — a vertical, mono-dated career timeline
- **Contact** — a bold full-width coral CTA block
- Scroll progress bar, scroll-aware navbar, mobile menu, reduced-motion support, and keyboard focus states out of the box

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

The output goes to `dist/` — deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc).

## 🎨 Making it yours

Almost everything you need to edit lives in **one file**: `src/data/content.js`. Open it and update:

- `profile` — your name, role, tagline, location, email, and social links
- `codeSnippetLines` — the lines that type themselves out in the hero's code editor
- `skills` — the tags scrolling in the marquee
- `projects` — your project cards (title, description, tags, links, and a `color` of `coral`, `mint`, or `yolk`)
- `experience` — your work history for the timeline
- `about` — your bio and the three stat numbers

You don't need to touch any component files to update the content — just edit the data and save.

### Colors

The palette is defined in `src/index.css` under `@theme`:

| Token | Hex | Used for |
|---|---|---|
| `--color-ink` | `#0E0B1A` | page background |
| `--color-ink-soft` | `#16122a` | cards, nav |
| `--color-paper` | `#FFF9EC` | text |
| `--color-coral` | `#FF4D6D` | primary accent / CTAs |
| `--color-yolk` | `#FFD23F` | secondary accent / highlights |
| `--color-mint` | `#5EE6C5` | tertiary accent / code, success states |

Change a hex value there and it updates everywhere (`bg-coral`, `text-mint`, etc. are generated automatically from these tokens).

### Fonts

Display font is **Space Grotesk**, body is **Inter**, and code/labels use **JetBrains Mono** — all loaded via Google Fonts in `src/index.css`. Swap the `@import` URL and the `--font-*` variables in the same `@theme` block to change them.

### Replacing the avatar initials with a real photo

In `src/components/About.jsx`, the blob currently shows initials. To use a photo instead, replace the `<span>` with initials with an `<img src="/your-photo.jpg" className="w-full h-full object-cover" />` and drop your image in the `public/` folder.

## 🗂 Project structure

```
src/
  components/   → one file per section (Hero, Projects, About, etc.)
  data/
    content.js  → all your editable text content
  index.css     → design tokens, fonts, global styles, animations
  App.jsx       → assembles all sections in order
```

## 🧩 Stack

- [Vite](https://vite.dev) — build tool
- [React](https://react.dev) — UI
- [Tailwind CSS v4](https://tailwindcss.com) — styling (CSS-first `@theme` config, see `src/index.css`)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev) — icons

## ♿ Accessibility notes

- Respects `prefers-reduced-motion` (animations shorten automatically)
- Visible keyboard focus ring (mint outline) on all interactive elements
- Semantic headings and `aria-label`s on icon-only buttons/links

---

Built with too much coffee. Happy shipping! ☕
