# Project: PAUL'S POV

## Overview

Personal blog and thought leadership platform with two content pillars:
- **AI Journey**: Personal explorations of AI tools, workflows, and lessons learned (first-person, exploratory)
- **Global Perspectives**: Analysis of geopolitics, economics, and macro trends (third-person, analytical)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + custom design system
- **Content**: MDX for blog posts
- **Database**: Supabase (auth, newsletter subscribers)
- **Deployment**: Vercel
- **Language**: TypeScript (strict mode)

## Design System

### Colour Palette (90s Tech / Cyber Aesthetic)

| Token | Hex | Usage |
|-------|-----|-------|
| `void` | `#222120` | Primary background (warm charcoal) |
| `void-light` | `#2A2826` | Card backgrounds |
| `safety` | `#E08064` | Accent colour (terra-cotta orange) |
| `hologram` | `#8FB3AA` | Secondary accent (muted sage) |
| `dust` | `#999590` | Muted text (warm grey) |
| `bleach` | `#E8E6E3` | Primary text (warm off-white) |
| `border-dim` | `#363432` | Subtle borders |

### Typography

- **Headers**: Chakra Petch (300, 400, 500, 600)
- **Body/Code**: Space Mono (400, 700)

### Visual Effects

- 40px grid background pattern
- Grayscale-to-colour image hover transitions
- `shadow-glow`: Subtle terra-cotta glow effect
- Custom scrollbar styling

## Code Standards

### TypeScript

- Strict mode enabled (`"strict": true`)
- No `any` types — all props and data fully typed
- Interfaces defined above components
- Types centralised in `src/types/index.ts`

### Components

- **Named exports** preferred over default exports
- **Server Components** by default, `'use client'` only when necessary
- **Semantic HTML**: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`
- **Props destructured** in function signature
- **Composition over prop drilling**

```tsx
// Good
interface ArticleCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

export function ArticleCard({ post, variant = 'default' }: ArticleCardProps) {
  return <article>...</article>;
}
```

### File Naming

- **Components**: PascalCase (`ArticleCard.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Content**: kebab-case (`my-first-post.mdx`)

### Styling

- Tailwind utility classes only (no inline styles)
- Design tokens defined in `globals.css` via `@theme`
- Mobile-first responsive approach
- Dark mode is the default (no light mode toggle needed)

## File Organisation

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                 # Base UI primitives
│   ├── layout/             # Header, Footer, Navigation
│   ├── blog/               # Article-related components
│   ├── home/               # Homepage sections
│   └── forms/              # Newsletter, contact forms
├── content/
│   └── blog/               # MDX blog posts
│       ├── ai-journey/
│       └── global-perspectives/
├── lib/                    # Utilities and helpers
│   ├── mdx.ts              # MDX processing
│   ├── utils.ts            # General utilities
│   └── supabase/           # Supabase clients
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
└── config/                 # Site configuration
```

## Data Fetching

- **Static content**: Server Components with `fs` operations
- **Dynamic data**: Server Actions for mutations
- **Validation**: Zod schemas for all inputs
- **Error handling**: Try/catch with proper error boundaries

## Security

- Environment variables in `.env.local` (never commit)
- Server-only keys never exposed to client
- Supabase RLS policies for data protection
- Input validation on all user-submitted data

## Commands

```bash
npm run dev          # Development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
npx tsc --noEmit     # TypeScript validation
```

## Git Commits

Use conventional commit format:
- `feat:` — New feature
- `fix:` — Bug fix
- `refactor:` — Code restructuring
- `docs:` — Documentation
- `style:` — Formatting, styling
- `chore:` — Maintenance tasks

## Content Guidelines

### AI Journey Posts
- First-person perspective
- Personal, exploratory tone
- Focus on lessons learned and practical insights
- Topics: AI tools, workflows, experiments, discoveries

### Global Perspectives Posts
- Third-person perspective
- Analytical, observational tone
- Connect dots between macro trends
- Topics: Geopolitics, economics, tech regulation, strategy

### Publishing Checklist

Before publishing any new blog post:
1. **Verify the date** - Always confirm the current date with the user before setting the frontmatter date. Do not assume system-provided dates are correct.
2. **Check frontmatter completeness** - Ensure all required fields are present: title, description, date, category, published, featuredImage
3. **Run build** - Execute `npm run build` to verify MDX processing succeeds

