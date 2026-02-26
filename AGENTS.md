# AGENTS.md

## Purpose

This file defines monorepo-wide guidance for coding agents. Keep it stable and generic so new workspaces can be added
without frequent edits.

## Scope

- Applies to the entire repository.
- Workspace-specific details belong in local `AGENTS.md` files inside each app/package.

## Monorepo Principles

- Prefer minimal, targeted changes.
- Keep public APIs stable unless a breaking change is explicitly requested.
- Follow existing naming conventions and folder structures.
- Avoid coupling changes across workspaces unless necessary.

## Workspace Growth Policy

When adding a new workspace:

1. Follow existing monorepo conventions for scripts, linting, and TypeScript settings.
2. Add a local workspace `AGENTS.md` for package/app-specific architecture and rules.
3. Keep this root file unchanged unless a policy applies to all workspaces.

## Code Quality Baseline

- Respect repository linting/formatting rules.
- Keep type safety intact.
- Add or update tests when behavior changes.
- Update docs/stories/examples when public behavior or API changes.

## Testing Baseline

- Run the most focused tests first (closest to the changed code).
- Expand to broader workspace or repo checks only as needed.
- Do not fix unrelated failing tests unless requested.

## Documentation Baseline

- Keep README/docs aligned with actual behavior.
- Document assumptions and non-obvious decisions in concise terms.

## Pull Request Baseline

- Explain what changed, why, and impact/risk.
- Keep commits and diffs focused.
- Call out breaking changes explicitly.

## Local Workspace Guidance

Use the workspace template at `templates/AGENTS.workspace.template.md` when creating a new package/app-specific guide.
