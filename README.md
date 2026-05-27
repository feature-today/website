# `feature-today/website`

Marketing landing for [feature-today](https://github.com/feature-today), built with Qwik 2 and deployed on Vercel Edge.

## Develop

```bash
pnpm install
pnpm dev          # local dev with SSR
pnpm build        # full production build (client + ssr)
pnpm preview      # preview the production build
pnpm typecheck
pnpm lint
pnpm test
```

## Deploy

Pushes to `main` are deployed to Vercel Edge via the `vercel-edge` adapter (see [adapters/vercel-edge/vite.config.ts](adapters/vercel-edge/vite.config.ts)).

## Stack

Qwik 2 (`@qwik.dev/core`, `@qwik.dev/router`) · Vite 7 · Vitest 3 · oxlint 1 · TypeScript 5.7+ strict · `@feature-today/common` (shared types).

## License

[AGPL-3.0-or-later](./LICENSE). See the org-wide [licensing policy](https://github.com/feature-today/.dev/blob/main/LICENSING.md).
