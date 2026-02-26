# Templates

This folder contains reusable templates for repository contributors and coding agents.

## Available templates

- [`AGENTS.workspace.template.md`](AGENTS.workspace.template.md)
  - Purpose: starter template for creating workspace-specific `AGENTS.md` files.
  - Typical destinations: `packages/<name>/AGENTS.md` or `apps/<name>/AGENTS.md`.

## Usage

1. Copy the template into the target workspace.
2. Replace placeholder values (`<...>`) with workspace-specific details.
3. Add real lint/test/build/type-check commands from that workspace `package.json`.
4. Keep monorepo-wide policies in root [`/AGENTS.md`](../AGENTS.md), not in workspace files.
