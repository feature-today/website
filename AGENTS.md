# AGENTS.md — feature-today/website

This repository inherits the [canonical organization rules](https://github.com/feature-today/.dev/blob/main/AGENTS.md). Only project-specific details below.

## Scope

Public marketing landing for feature-today. Minimal, fast, SEO-friendly, deployed to Vercel Edge.

## Layout

```
adapters/vercel-edge/vite.config.ts
public/manifest.json, robots.txt
src/
├── entry.ssr.tsx          # SSR renderer
├── entry.vercel-edge.tsx  # Vercel Edge middleware entry
├── root.tsx               # shell
├── global.css
├── components/
│   └── router-head/
└── routes/
    ├── layout.tsx
    ├── index.tsx          # home
    └── service-worker.ts
```

## Scopes (Conventional Commits)

`page`, `layout`, `ui`, `seo`, `build`, `test`, `deps`, `ci`, `docs`.

## Rules

- Use `@feature-today/common` for any type or component shared with `my`.
- All routes must export a `head: DocumentHead` for SEO.
- No client-side analytics without privacy review.
- AGPL header on every source file.
- `Project` type lives in `@feature-today/common`, not duplicated here.
