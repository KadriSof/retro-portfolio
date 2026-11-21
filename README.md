# Retro Portfolio

A personal portfolio website built with **Astro**, featuring a retro-futuristic interface inspired by 1980s computing, terminal environments, and early graphical desktop systems.

The website presents my professional background, engineering experience, independent projects, and technical competencies through a single-page interface.

## Overview

The portfolio combines a retro visual language with a structured, responsive layout.

### Features

- **Profile:** Professional introduction and engineering interests.
- **Career timeline:** Chronological visualization of professional experience, research, and education.
- **Project archive:** Selected independent and open-source projects.
- **Technical inventory:** Engineering domains, technical competencies, and evidence-based achievements.
- **Contact terminal:** Direct communication channels and professional links.

## Technology Stack

| Technology       | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| Astro            | Static site generation and component architecture |
| TypeScript       | Typed portfolio data and component logic          |
| CSS              | Responsive layout and retro visual design         |
| npm              | Dependency management and build tooling           |
| Cloudflare Pages | Static website hosting                            |

## Getting Started

### Requirements

- Node.js 22.23.4 or later
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/KadriSof/retro-portfolio.git
cd retro-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The local website will be available at:

`http://localhost:4321`

## Available Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Generate the production build        |
| `npm run preview` | Preview the production build locally |
| `npm run astro`   | Run Astro CLI commands               |

## Project Structure

```text
retro-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── layouts/        # Navigation, footer, and page layout
│   │   ├── sections/       # Portfolio sections
│   │   └── ui/             # Reusable interface components
│   ├── data/               # Profile, projects, skills, timeline
│   ├── pages/              # Astro pages and routes
│   ├── styles/             # Global styles and design system
│   └── types/              # TypeScript definitions
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Production Build

Generate the static production website:

```bash
npm run build
```

Astro writes the generated website to the `dist/` directory.

To inspect the production build locally:

```bash
npm run preview
```

## Deployment

The website is designed for deployment on **Cloudflare Pages**.

Deployment configuration:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Deployment method: Git integration with GitHub

## License

No license has been assigned yet.
