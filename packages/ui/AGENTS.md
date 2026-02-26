# AGENTS.md

## Purpose

Workspace-specific guidance for coding agents working in `@schuijers/ui`.

## Scope

- Applies only to `packages/ui`.
- Monorepo-wide rules are defined in `/AGENTS.md`.

## Workspace Overview

- Type: reusable UI component library.
- Stack: Vue 3, TypeScript, Tailwind CSS, Reka UI.
- Public entrypoint: `src/index.ts`.
- Build output: `dist/` via `unbuild`.

## Architecture Notes

- Components live in `src/components/<ComponentName>/`.
- Each component should keep implementation and API close together:
  - `*.vue` for component implementation
  - `*.types.ts` for public prop/type contracts
  - `*.spec.ts` for tests
  - `*.stories.ts` for Storybook docs/examples
- Shared styles are exposed from `src/styles/index.css`.

## Coding Conventions

- Use `<script setup lang="ts">` in Vue SFCs.
- Keep props/events strongly typed and colocated in `*.types.ts` when appropriate.
- Prefer minimal, composable Tailwind utility classes over custom ad-hoc CSS.
- Preserve accessibility semantics (disabled behavior, focus-visible states, ARIA where needed).
- Avoid breaking changes to public exports unless explicitly requested.

## Public API Rules

- Export new public components/types from `src/index.ts`.
- Keep export names stable; prefer additive changes over renames/removals.
- If a breaking API change is required, call it out explicitly in docs/PR notes.

## Testing Expectations

- Use Vitest for unit tests (`*.spec.ts`) close to source files.
- Add/update tests when behavior changes, at minimum for:
  - render behavior
  - props/variants/sizes
  - events and interactive states
  - disabled/loading and accessibility-relevant behavior

## Documentation Expectations

- Keep Storybook stories aligned with implementation and public types.
- Update `README.md` in this workspace when setup, usage, or API contracts change.

## Validation Commands

Run from repo root with filter:

- `pnpm --filter @schuijers/ui lint`
- `pnpm --filter @schuijers/ui type-check`
- `pnpm --filter @schuijers/ui test`
- `pnpm --filter @schuijers/ui build`

## Change Checklist

Before finishing:

- [ ] Public exports are correct in `src/index.ts`.
- [ ] Tests updated for behavior changes.
- [ ] Stories/docs updated for API or visual changes.
- [ ] No unrelated refactors included.
