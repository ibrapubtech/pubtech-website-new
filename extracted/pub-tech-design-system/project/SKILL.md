---
name: pub-tech-design
description: Use this skill to generate well-branded interfaces and assets for pub.tech (Public Value Technologies GmbH), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and visual foundations for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — full brand documentation (voice, colors, type, iconography, caveats)
- `colors_and_type.css` — all design tokens as CSS custom properties (`--pub-*`)
- `assets/logos/` — wordmark + logo-mark SVGs
- `assets/illustrations/` — 30 named 3D brand illustrations (PNG, transparent)
- `preview/` — reference cards showing tokens in use

When generating new artifacts, **link `colors_and_type.css` first** and only
use the `--pub-*` variables — do not invent new color values. Headlines are
Overpass Black, body is Overpass Medium, buttons are Overpass Bold.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, you can copy assets and read the rules here to become an
expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer
who outputs HTML artifacts _or_ production code, depending on the need.

**Brand voice cheat-sheet.** German first, lightly civic, *du* form, no
emoji, inclusive gender star (`Expert*innen`). "pub." is a valid short form
of the company name (keep the dot). Use the Illu-Library 3D illustrations
instead of emoji or stock icons.
