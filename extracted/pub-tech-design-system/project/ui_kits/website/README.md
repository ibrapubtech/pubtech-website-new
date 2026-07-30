# pub.tech — Website UI kit

A faithful recreation of the live homepage at https://pub.tech, built on top of
the tokens in `../../colors_and_type.css`. This is your **redesign baseline** —
fork it, restyle it, drop sections in/out.

## Files

- `index.html` — recreation of the live pub.tech homepage (the **baseline**)
- `index-v2.html` — clean Anchor-inspired direction: centered hero, light cream stage, tinted portrait feature cards
- `index-v3.html` — **bento upgrade** (MetaMask-inspired): full-bleed colored bands, bento grids with central device mockups, huge stencil headlines, UI-mockup chip cards, rail-dot indicators
- `about.html` — Über uns: company story, timeline, values, Charta der Vielfalt
- `jobs.html` — Careers: perks, role listings, application CTA
- `styles.css` — baseline styles (for `index.html`)
- `styles-v2.css` — redesign styles (for v2 + about + jobs)
- `../../patterns.css` — pattern library used by v3 (bento, stage bands, stencil headlines, rail dots, UI mockups)

## Components present

| Selector | What it is |
| --- | --- |
| `.topbar` + `.nav` | Top navigation; aqua wordmark + aqua links |
| `.hero` / `.hero-h1` | Lime H1 + body lede + partner-logos block + rocket art |
| `.partner-logo` | BR / SWR / hr text-stamps (placeholder — see below) |
| `.section-eyebrow-h2` | The big lime section title pattern (`Portfolio`, `Über uns`, `Referenzen`) |
| `.section-h3` + `.section-body` | The sub-headline and intro paragraph under a section title |
| `.portfolio-grid` + `.pcard` | 3-column grid of dark portfolio cards with 3D illustration in upper-right |
| `.cta-pill` | Aqua pill button (`… weiterlesen`) |
| `.copy-section` | Two-column copy block used for Über uns + Referenzen |
| `.footer-top` | Aqua footer column block with address + links |
| `.footer-bands` | Three colored bands (purple / aqua / lime) at the very bottom |

## Notes / placeholders

- **Partner logos (BR, SWR, hr):** the live site uses the real broadcaster
  logomarks. I don't have those files. They're stubbed in as text inside a
  bordered box that approximates the shape. **Drop the real SVGs in
  `../../assets/logos/partners/` and swap the `.partner-logo` rule for an
  `<img>` source.**
- **Social icons in the purple band:** stubbed as `in / gh / ig / yt` text
  rectangles. Swap for Lucide icons or the real logomarks.
- **The hero rocket** is `assets/illustrations/rocket.png` (3D-Rakete 3 from
  the Figma illustration library) — visually matches the live homepage.
- **Heading font** uses **Overpass Black** from the tokens file. The live
  site's headings look slightly rounder than stock Overpass — if you have the
  brand's exact font file (it may be a custom or licensed family), drop it in
  `../../assets/fonts/` and override `--pub-font-display`.

## How to use this as a redesign baseline

1. Open `index.html` in your browser to see the current homepage.
2. The structure mirrors what's on https://pub.tech today.
3. To explore a redesign direction, copy `index.html` to e.g.
   `index-v2.html`, change one thing at a time (typography, color usage,
   card layout, hero composition) and compare.
4. Token values (`--pub-*`) come from `../../colors_and_type.css` — change
   them globally there to retheme.
