# pub.tech Design System

> **pub.tech** — Public Value Technologies GmbH
> "Wir gestalten digitale Plattformen, die wirken."
> Munich, ~100 people, remote + office. Owned by BR, SWR and HR.

This design system documents the visual language of pub.tech: brand colors,
typography, illustration library, logo usage and supporting tokens. It is
sourced directly from the company's "corporate design" Figma file.

## Who pub.tech is

pub.tech is a Munich-based product and platform studio that was spun out of
Germany's public-broadcasting world. They were the internal digital garage
inside BR (Bayerischer Rundfunk), then absorbed SWR and HR, and at the end of
2022 became an independent GmbH. Since the start of 2025 they trade under the
**pub.tech** name with a sharper focus on technology, product and public value.

Their mission, in their own words:
> "Öffentlichen Mehrwert digital übersetzen."
> *Translate public value into digital products.*

The work spans data strategy, agile product development, UX research and
backend engineering for public-service digital platforms used by millions.

## Verified against the live site

The **pub.tech homepage** (Nov 2025 capture, in `reference/pubtech-homepage.png`)
confirms several things that override what could only be inferred from the
brand-foundations Figma file:

- **Lime** (`#B5FD42`) is the **primary heading color**, not a sparingly-used pop. Every section title — *Portfolio, Über uns, Referenzen, Jobs* — and the H1 *"Wir gestalten digitale Plattformen."* are all Lime on the dark purple stage.
- **Aqua** (`#59D5DC`) is the **UI color**: wordmark, nav links, button fills, secondary sub-headlines.
- The hero pairs the lime headline with a 3D illustration (a rocket) anchored to the right.
- The page background isn't a flat purple — it's a **subtle radial gradient** from `purple-700` at the center to near-black (`purple-900` / coal) at the corners. Cards sit slightly **darker** than the page background — an inset feel.
- Buttons are **aqua pills with dark-purple text**, content prefixed with a leading-ellipsis glyph (e.g. `… weiterlesen`).
- The footer is a stack of **three full-width colored bands**: aqua "contact" band, purple "social media" band, lime "work with us" band. Each band has its own foreground color logic.
- The wordmark in the top-left and the nav links also render in Aqua.

## What's in this system

| File / folder | What it is |
| --- | --- |
| `colors_and_type.css` | All design tokens as CSS custom properties. Drop this in and use the `--pub-*` vars. |
| `assets/logos/` | Wordmark and logo-mark SVGs (recolorable via `currentColor`). |
| `assets/illustrations/` | 30 hi-fi 3D illustrations from the pub. illu-library — the brand's signature visual element. |
| `preview/` | Cards rendered into the project's Design System tab. |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code etc. |

## Sources

- **Figma file:** *"corporate design.fig"* — attached to this project as a mounted virtual filesystem. Pages: `brand-colors`, `logo`, `illustration-library`. No public Figma URL was provided.
- **Brand voice / about copy:** the about text supplied with the kickoff brief (pub.tech "About us" / "Mission" sections, in German).
- **Type:** Overpass (display + body), Inter (UI metadata), TheSans C4s (small numeric labels in original Figma — substituted with Inter here, see Type note below).

---

## Content fundamentals

**Language.** pub.tech writes primarily in **German**. Internal product copy
and headings use **English** freely (`Brand Colors`, `Headings`, `Action Large`,
`Typography LinkedIn`). Mixed-language pages are normal — do not "translate
into English" without instruction.

**Tone.** Confident, plural-first, lightly civic. They talk about themselves as
*"wir"* and address audiences as *"du"* (informal, friendly), not *"Sie"*. The
voice is technologist-meets-public-servant: engineering competence in service
of something larger.

- "**Wir** gestalten digitale Plattformen, die wirken."
- "**Unsere** Mission: öffentlichen Mehrwert digital übersetzen."
- "pub. ist da, wo **du** bist." (the brand claim — slot H1 on the home page)

**Casing.** Sentence case in headlines and body. The wordmark **pub.tech** is
always lowercase. The word *"pub."* with a trailing period is used as a
nickname for the company in body copy — preserve the dot. Section eyebrows on
internal frames use ALL CAPS (e.g. `SONDERFÄLLE` = "edge cases").

**Gender.** Inclusive forms with **gender star**: `Expert*innen`,
`Partner*innen`, `Nutzer*innen`, `Ansprechpartner*in`. Use the star, not the
colon variant. They signed the *Charta der Vielfalt* in 2024 and document this
in the about section — diversity is in-scope brand value, not décor.

**Vibe.** Pragmatic and slightly understated. Numbers and facts are presented
on a "Zahlen & Fakten" panel (`5 UX-Researcher`, `7 Agile Coaches`, `11 Data
Guys`, `10 Backend Entwickler`) — give a count, give a label, no superlatives.
Avoid: vague tech-marketing words like "synergy", "innovation", "disruption".
Prefer: concrete capability words like *gestalten, entwickeln, betreiben,
optimieren, übersetzen.*

**Emoji.** No emoji in product surfaces. The richness is carried by the 3D
illustration library instead — that *is* their emoji.

**Examples of in-voice copy.**
- ✅ "Was als freie 'Digitale Garage' begann, wurde zur eigenständigen GmbH."
- ✅ "Unser Team aus rund 100 Expert*innen arbeitet remote und im Office am Standort München."
- ✅ "Stabil laufen. Skalieren. Menschen begeistern."
- ❌ "We leverage cutting-edge AI to disrupt public media."
- ❌ "Welcome aboard! 🚀"

---

## Visual foundations

### Colors

Four-family palette, 50→900 each, **500 is the brand step.**

| Family | 500 | What it does |
| --- | --- | --- |
| **Lime** `#B5FD42` | **headline** | The brand's hero color. Every major heading on the live site — H1, section titles ("Portfolio", "Über uns") and card titles — uses Lime on the dark stage. High voltage; sets the brand's energy. |
| **Aqua** `#59D5DC` | UI | Wordmark, nav links, button fills, secondary sub-headlines, contact-band background. The "system" color. |
| **Purple** `#4A0A77` | primary | Brand background. `purple-900` (`#24053A`) is the preferred dark stage; the live page also uses a **subtle radial gradient** from `purple-700` at the center to near-black at the corners. |
| **Coal** `#2B2F2C` | neutral | Body text on light surfaces, borders. Also doubles as the deepest background tone at the page edges. |

Plus `--pub-paper` (`#F8F7F4`) as the off-white "hero panel" background and
`--pub-white` for the standard light surface.

**Default dark surface (the default for pub.tech web):** radial-gradient on
`--pub-purple-900` → coal, white body text, **Lime** headings, Aqua UI.
**Default light surface:** `--pub-white` body, `--pub-coal-900` text, Purple
or Coal headings. The Figma's contrast-check sheets ratify Lime+Purple,
Aqua+Purple and White+Purple as approved pairings.

### Type

- **Display + body:** Overpass — Black (900) for all headings, Medium (500)
  for body, Bold (700) for buttons and links.
- **UI metadata** (small labels in token tables, captions, dev info): Inter.
- **TheSans C4s** appears in the original Figma for swatch number labels
  (50/100/200…). It is licensed and is not bundled here; we substitute Inter.
  → If you need pixel-perfect output, please supply the TheSans C4s files.

Type scale (Desktop + Tablet, in px):

| Token | Size / Line | Used for |
| --- | --- | --- |
| H1  | 96 / 122 | The brand claim `pub. ist da, wo du bist.` + Zahlen & Fakten |
| H2  | 60 / 76  | Section headlines, statements, quotes |
| H3  | 48 / 61  | Article headlines (desktop) / section headlines (mobile) |
| H4  | 34 / 48  | Quotes source, bullet points, copy on number panels |
| H5  | 24 / 40  | Page headlines, sub-headlines, Ansprechpartner blocks |
| H6  | 20 / 36  | Job description highlighted |
| Body Large | 18 / 30 | Desktop / tablet body |
| Body Small | 16 / 28 | Mobile body, footer |
| Action Large | 16 / 28 (Bold) | Buttons and text links |

All headings use a tight negative tracking (-0.75px to -1.5px on large sizes).
Headings never break to ALL CAPS — keep them sentence case.

### Backgrounds

There are essentially three background modes:

1. **White** (`--pub-white`) — default product surface.
2. **Paper** (`--pub-paper`, `#F8F7F4`) — slightly warm off-white used on
   "hero" intro panels with a 12px border-radius and a coal-20% border.
3. **Dark stage** (`--pub-purple-900`, `#24053A`) — the brand's signature mode.
   This is where the 3D illustrations and aqua/lime accents shine.

The Figma logo frames also split the canvas 50/50 between white and purple-900
to demonstrate both modes side-by-side — keep this trick in mind for hero
sections.

**No gradients.** The palette is flat. The only "gradient" in the system is
the implicit one between the four color families used as adjacent solid blocks.

**No patterns / textures.** Backgrounds are solid colors. Visual interest comes
from the illustrations, not from noise/grain/repeating motifs.

### Cards, borders, shadows

- **Radii:** 12px is the standard card/panel radius. 4–8px for inline
  controls. The brand also uses an exaggerated 300px radius on its largest
  stage frame (the illustration library wallpaper) — a signature "soft
  cathedral" corner you can use for hero cards. Pills (999px) for chips.
- **Borders:** thin, low-contrast. Default `rgba(43,47,44,0.2)` (coal @ 20%)
  on light surfaces; `--pub-coal-100` (`#EAE8E1`) on paper panels.
- **Shadows:** very restrained. Most cards rely on borders, not shadows.
  Reserve shadow for hover/focus and floating menus. Use the warm
  purple-tinted shadow set defined in `colors_and_type.css`.

### Hover / press / focus

(Defaults — pub. has no fully-spec'd interaction system, so these are
inferred from the visual vocabulary.)

- **Hover:** darken by one step on the same color family (e.g. `aqua-500` →
  `aqua-600`). On dark stage, *lighten* by one step instead.
- **Press:** further darken one step and apply `transform: scale(0.98)`.
- **Focus:** a 4px lime ring (`--pub-shadow-pop`) — Lime is the system's
  attention color.
- **Animation:** keep motion under 200ms, ease-out for entries, ease-in-out
  for transforms. The brand doesn't bounce; it settles.

### Layout rules

- Generous outer padding on hero/intro panels: `120px 80px 64px` (matches
  the Figma `_hero` containers).
- Body panels use `0px` horizontal and `120px` vertical padding internally,
  with content centered.
- Token tables use a 28×63 padding pattern (vertical × horizontal) inside
  cells with a `--pub-paper` header row.

### Transparency / blur

Used sparingly. The only consistent transparency is the **coal-at-20%**
border value. Backdrop blur is not part of the existing system — avoid it
unless explicitly asked.

### Imagery vibe

The illustration library is the brand's signature visual register: glossy,
photoreal 3D objects, lit with **magenta / cyan / violet rim lighting** on a
purple stage. They feel like product renders, not flat icons. The same object
often appears in three variants:

1. Full-color 3D render (`/assets/illustrations/*.png`)
2. Neon-stylized variant with the purple/cyan glow turned up
3. A clean monoline outline version (for small UI use)

When picking imagery: prefer the 3D renders on dark backgrounds; use the
outline variants inline with text. Never mix the two registers in one card.

---

## Iconography

pub.tech does **not** use a single icon font (Material, Lucide, Heroicons…).
Its visual vocabulary is the **Illu-Library** — a curated set of named
illustrations (`Auge`, `Berg`, `Blumen`, `Buch`, `Cloud`, `Code`, `Diamant`,
`Glühbirne`, `Herz`, `Kompass`, `Laptop`, `Mobile Phone`, `Puzzle`,
`Sanduhr`, `Schiff`, `Stift`, `Schloss`, `Tablet`, `Trichter`, `Unicorn`,
`Warnung`, `Welle`, `Zahnrad`, `Zielscheibe`, `Trophy` and more). Each entry
exists in several visual treatments (full 3D, neon, line). 30 of them are
copied into `assets/illustrations/` as PNGs.

For UI-level glyphs that the library does not cover (arrow-right, bell, x,
user, chevron…), the Figma uses generic outline glyphs. We **substitute
Lucide** from CDN at runtime for these small UI marks — same stroke weight,
same flat style:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

> Flag: Lucide is a substitution. The original Figma `bell`, `arrow-right`,
> `x`, `user` glyphs were not exported as named SVGs in this drop. Visual
> match is close but not identical.

**Emoji:** never. **Unicode dingbats:** never. When you need a small mark,
either:
- pick the closest item from the Illu-Library, or
- use a Lucide outline glyph.

---

## Substitutions and caveats

| What | Status | What we did |
| --- | --- | --- |
| **Overpass / Inter fonts** | ✅ available | Loaded from Google Fonts. |
| **TheSans C4s** | ⚠️ substituted | Used Inter as the closest available fallback for swatch numeric labels. Please supply the licensed TheSans files if you need this for production. |
| **Lucide UI icons** | ⚠️ substituted | Original Figma's small UI glyphs (bell, arrow-right, x, user) weren't exported as named SVGs. Lucide is a close visual stand-in. |
| **Illustration library** | ✅ partial | 30 of the named 3D illustrations copied to `assets/illustrations/`. The full Figma library has ~100 with multiple variants (3D / neon / outline) — ask if you need more. |
| **Buttons, forms, full component spec** | ❌ not in source | The Figma file is brand-foundations only (colors, type, illu, logo). No component spec exists yet for buttons, inputs, navigation, etc. Defaults in this system are inferred from the brand and noted as such. |

---

## Index

- `colors_and_type.css` — design tokens + semantic classes
- `patterns.css` — pattern library (bento grids, colored stage bands, stencil headlines, rail-dot indicators, UI-mockup chips)
- `assets/logos/pubtech-wordmark.svg` — primary wordmark
- `assets/logos/pubtech-logomark.svg` — abstract "p" mark
- `assets/logos/brand-logos.js` — small loader that inlines wordmark/logomark SVGs for any element with `data-pub-logo="wordmark|logomark"`
- `assets/illustrations/*.png` — 31 brand illustrations (incl. the homepage hero rocket)
- `preview/*.html` — design system tab cards
- `ui_kits/website/` — full pub.tech website: baseline + v2 + v3 (bento) + about + jobs
- `reference/pubtech-homepage.png` — annotated reference shot of the live site
- `reference/anchor-homepage.png` — design direction reference (Anchor banking site)
- `SKILL.md` — cross-compatible skill manifest
