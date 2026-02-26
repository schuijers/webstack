# AGENTS.md (Workspace Template)

> Copy this file into a workspace (for example `packages/<name>/AGENTS.md` or `apps/<name>/AGENTS.md`) and replace
> placeholders.

## New Workspace Quickstart

- [ ] Copy this template to `packages/<name>/AGENTS.md` or `apps/<name>/AGENTS.md`.
- [ ] Replace all placeholders (`<...>`) with workspace-specific values.
- [ ] Fill in real validation commands from that workspace `package.json`.
- [ ] Confirm scope is local to the workspace and does not duplicate root monorepo policy.
- [ ] Link or update workspace `README.md` if setup or API guidance changes.

## Purpose

Workspace-specific guidance for coding agents working in `<workspace-name>`.

## Scope

- Applies only to this workspace.
- Root monorepo policies are defined in `/AGENTS.md`.

## Workspace Overview

- Type: `<package|app|service|library>`
- Primary runtime/framework: `<value>`
- Main entry points: `<paths>`

## Architecture Notes

- Core modules/folders:
  - `<folder>`: `<purpose>`
  - `<folder>`: `<purpose>`
- Data flow / component boundaries:
  - `<notes>`

## Coding Conventions

- Preferred patterns:
  - `<pattern 1>`
  - `<pattern 2>`
- Avoid:
  - `<anti-pattern 1>`
  - `<anti-pattern 2>`

## Public API Rules (if applicable)

- Export surface lives in: `<path>`
- Backward compatibility expectations: `<notes>`
- Versioning constraints: `<notes>`

## Testing Expectations

- Test framework: `<value>`
- Test location pattern: `<value>`
- Required coverage for changes:
  - `<rendering|logic|events|integration etc.>`

## Documentation Expectations

- Keep in sync:
  - `<README path>`
  - `<stories/docs path>`
  - `<examples path>`

## Validation Commands

Run relevant commands for this workspace:

- Install: `<command>`
- Lint: `<command>`
- Type-check: `<command>`
- Test: `<command>`
- Build: `<command>`

## Change Checklist

Before finishing:

- [ ] Code follows workspace conventions.
- [ ] Tests added/updated for changed behavior.
- [ ] Docs/stories updated if API or UX changed.
- [ ] No unrelated refactors included.

## Optional: Workspace-Specific Constraints

- Performance limits: `<notes>`
- Accessibility requirements: `<notes>`
- Security/compliance notes: `<notes>`
