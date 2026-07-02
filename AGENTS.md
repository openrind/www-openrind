# Repository Guidelines

## Project Structure & Module Organization
This is the **OpenRind** marketing + docs site, built with **Docusaurus 3** (React 19, TypeScript, Tailwind CSS 3).
- `src/pages/` — file-based routes (`index.tsx` re-exports the Spend page; plus `spend`, `accounting`, `mpp`, `outcome-credits`, `sandbox`, `x402`).
- `src/components/<page>/*Body.tsx` — per-page bodies. Shared UI lives in `src/components/app/` (`header.tsx`, `footer.tsx`), `src/components/home/`, and `src/components/ui/`.
- `src/theme/` — **swizzled** Docusaurus theme overrides (custom `Navbar/`, `Footer/`). These render instead of the default theme, so edit them (not `docusaurus.config.ts`) for visible nav/footer changes.
- `src/css/` — `custom.css`, `custom-markdown.css`. `src/data/index.ts` — navbar link data.
- `docs/` — MDX documentation (`api-reference/`, `examples/`, `important/privacy.md`).
- `static/` — assets served from `/` (e.g. `static/img/openrind-logo.png` → `/img/openrind-logo.png`), plus `fonts/` and the `CNAME`.
- Root configs: `docusaurus.config.ts` (site config), `sidebars.ts`, `tailwind.config.ts`, `postcss.config.ts`, `tsconfig.json`. Edit deliberately and summarize impact in your PR.

## Build, Test, and Development Commands
Use **yarn** (a `yarn.lock` is committed and CI runs `--frozen-lockfile`).
- `yarn` — install dependencies.
- `yarn start` — local dev server with live reload at `http://localhost:3000`.
- `yarn build` — generate the static site into `build/`. Note: `onBrokenLinks: "throw"`, so a broken internal link **fails the build** — this is the primary correctness gate.
- `yarn serve` — serve the built `build/` output.
- `yarn typecheck` — run `tsc` (no emit).
- `yarn swizzle` — eject/override a theme component into `src/theme/`.

There is **no lint or test script** configured. Exercise changes manually via `yarn start`, and treat a clean `yarn build` as required before committing.

## Coding Style & Naming Conventions
Use TypeScript throughout (`.ts`/`.tsx`). Name React components/files in PascalCase (`SpendBody.tsx`), utilities in camelCase. Style with Tailwind utilities using the custom `brand-*` palette and fonts defined in `tailwind.config.ts`; compose conditional classes with `clsx` and `tailwind-merge`. Prefer the existing tokens over ad-hoc hex values.

## Deployment
Deployment is automated via GitHub Actions: `.github/workflows/deploy.yml` builds and deploys to **GitHub Pages** on every push to the `openrind` branch; `.github/workflows/test-deploy.yml` test-builds on PRs to `openrind`. The site is served at the custom domain in `CNAME` (`www.openrind.com`). Use Node 18+.

## Commit & Pull Request Guidelines
Write concise, imperative commit subjects under 72 characters (e.g. `Update spend homepage`). Before opening a PR, confirm `yarn build` and `yarn typecheck` pass, describe the change, link issues, and add screenshots for UI tweaks. Flag config or dependency changes so reviewers can gauge deployment risk.
