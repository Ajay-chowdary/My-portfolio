# Ajay Chowdary Dodda — Portfolio

Personal portfolio of **Ajay Chowdary Dodda**, an AI Engineer & Full Stack Developer.
Built with Next.js, TypeScript, and Tailwind CSS, with a custom amber-on-charcoal
design system and a handful of interactive, GPU-accelerated touches.

> **Live:** [my-portfolio-nine-delta-13.vercel.app](https://my-portfolio-nine-delta-13.vercel.app)

## Features

- **Animated hero gallery** — cycle through photos, click to zoom a photo over the title
- **Interactive 3D** — a live Spline scene
- **Ambient WebGL backgrounds** — an animated dotted-surface wave and a gooey cursor trail
- **Project detail modals** — README-style overview, feature list, tech, and links
- **Writing section** — full articles in a focused reading modal
- **Skills, experience timeline, and contact** — all data-driven and easy to edit
- Responsive, keyboard-accessible, and `prefers-reduced-motion` aware

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D / Motion | Three.js, Spline, Framer Motion |
| Fonts | Bricolage Grotesque, Inter, JetBrains Mono |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Project Structure

```
src/
  app/            # App Router entry, layout, global styles, 404
  components/     # Hero, Projects, Blog, About, Nav, Contact, …
    ui/           # reusable UI (modal, cards, spline, effects)
  data/           # content: projects, posts, skills, experience
public/
  projects/       # project cover art (SVG)
  blog/           # article cover art (SVG)
```

To update content, edit the files in `src/data/` — no component changes needed.

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an
automatic production deploy.

## Contact

- Email: ajaycdodda@gmail.com
- LinkedIn: [ajaychowdarydodda](https://www.linkedin.com/in/ajaychowdarydodda/)
- GitHub: [Ajay-chowdary](https://github.com/Ajay-chowdary)
