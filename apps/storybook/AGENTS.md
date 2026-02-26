# AGENTS.md

## Purpose

Workspace-specific guidance for coding agents working in `@schuijers/storybook`.

## Scope

- Applies only to `apps/storybook`.
- Monorepo-wide rules are defined in `/AGENTS.md`.

## Workspace Overview

- Type: Storybook app for documenting and validating UI components.
- Stack: Storybook 10 (`@storybook/vue3-vite`), Vue 3, TypeScript, Tailwind CSS.
- Primary dependency: `@schuijers/ui` (workspace package).

## Architecture Notes

- Storybook configuration is in `.storybook/`.
- Stories should demonstrate real component APIs from `@schuijers/ui`.
- Keep theme, docs, and addon config centralized in `.storybook` rather than duplicating logic in stories.

## Coding Conventions

- Prefer CSF stories with clear controls and sensible defaults.
- Keep stories focused on component behavior and usage, not custom app logic.
- Avoid adding mock abstractions when direct component usage is sufficient.
- Preserve existing dark-mode and theming conventions used by this workspace.

## Documentation Expectations

- Keep stories accurate with the current `@schuijers/ui` API.
- Update Storybook docs content when component names, props, or behavior change.
- Keep this workspace `README.md` aligned with setup and run commands.

## Validation Commands

Run from repo root with filter:

- `pnpm --filter @schuijers/storybook lint`
- `pnpm --filter @schuijers/storybook dev`
- `pnpm --filter @schuijers/storybook build`

## Change Checklist

Before finishing:

- [ ] Stories still match real component APIs.
- [ ] Storybook config remains centralized and coherent.
- [ ] Lint passes for this workspace.
- [ ] No unrelated changes outside Storybook scope.
