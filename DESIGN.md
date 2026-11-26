---
name: Dhanush Science
description: A white futuristic lab where the person is the product.
colors:
  lab-white: "#ffffff"
  ceramic: "#f4f5f6"
  carbon-ink: "#0b0c0e"
  instrument-grey: "#5a6068"
  hairline: "rgba(11,12,14,.12)"
  hairline-strong: "rgba(11,12,14,.28)"
  field-black: "#0b0c0e"
  field-ink: "#f2f3f5"
  field-grey: "#a3a9b1"
  field-hairline: "rgba(242,243,245,.16)"
  signal-blue: "#2357d6"
  film-violet: "#b9a6ff"
  ghost-equation: "#dfe2e7"
  night-page: "#08090b"
  night-raised: "#121418"
  night-ink: "#eef0f3"
  night-signal-blue: "#8fb2ff"
typography:
  display:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(54px, 7.6vw, 116px)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(48px, 6.4vw, 96px)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 34px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.8vw, 58px)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  subhead:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(20px, 1.9vw, 26px)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.02em"
    fontFeature: "tnum"
rounded:
  square: "2px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  bar: "76px"
  section: "clamp(80px, 10vw, 144px)"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "{colors.lab-white}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0 26px"
    height: "52px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.square}"
    padding: "0 26px"
    height: "52px"
  chip-channel:
    backgroundColor: "transparent"
    textColor: "{colors.field-ink}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "42px"
  chip-channel-selected:
    backgroundColor: "{colors.field-ink}"
    textColor: "{colors.field-black}"
  nav-bar:
    backgroundColor: "{colors.lab-white}"
    textColor: "{colors.instrument-grey}"
    height: "{spacing.bar}"
  feature-panel:
    backgroundColor: "{colors.ceramic}"
    textColor: "{colors.carbon-ink}"
    padding: "clamp(24px, 4vw, 56px)"
  black-field:
    backgroundColor: "{colors.field-black}"
    textColor: "{colors.field-ink}"
---

# Design System: Dhanush Science

## Overview

**Creative North Star: "The White Lab"**

A clean white laboratory where the person is the product. The ground is white, the ink is near-black, and the only colour in the whole system is a material: chrome and thin-film iridescence, the finish of the delta mark. That material lives on real objects (the live three.js chrome delta in the bar, the white ceramic OASIS pad with chrome keys) and, flattened, as a single iridescent hairline. Everything else is typography, hairlines and white space.

The hero is the person and his sign: the visor portrait cutout anchored to the bottom right edge, and a giant, faint "δS = 0" (the principle of stationary action) set behind him, vertical on desktop and horizontal on mobile. Content is read as a lab index: ruled rows, mono data labels, status dots, numbered steps. Twice the page drops into a full-bleed black field (the quote and the conversation), the owner's own colour, inverting the tokens rather than introducing new ones.

White is the default theme. `[data-theme=dark]` is a faithful alternate, not the primary expression.

**Key Characteristics:**
- White ground, carbon ink, no hue except the iridescent film.
- Chrome and iridescence appear on 3D objects and hairlines only.
- Square, near-zero corners (2px) and 1px rules carry the structure.
- Sora display set tight and large; Geist for reading; Geist Mono for data.
- Full-bleed black fields for the quote and the conversation.
- The portrait and "δS = 0" are the identity, not decoration.

## Colors

A monochrome lab with one material colour: a thin-film iridescent gradient that only ever appears as a 2px line or on chrome surfaces.

### Primary
- **Carbon Ink** (carbon-ink): all text, the primary button fill, strong 1px rules under group headings and starters, status dots.

### Secondary
- **Thin-Film Iridescence** (`--film`: `linear-gradient(90deg,#8fd3ff,#b9a6ff 25%,#ffb0d0 50%,#ffe39a 75%,#9ff0cf)`): the logo's material, flattened. Used only as a 2px line: active nav underline, scroll progress under the bar, the top edge of the OASIS feature panel, the underline under the emphasised word in the quote, the `.film` rule.
- **Film Violet** (film-violet): the one solid pulled from the film. Hover halo on the primary button and on a lifted card; the selection colour (`#c9b8ff`) is its lighter neighbour.

### Tertiary
- **Signal Blue** (signal-blue; night-signal-blue in dark): the focus ring, and nothing else.

### Neutral
- **Lab White** (lab-white): page ground and bar.
- **Ceramic** (ceramic): the raised panel behind the OASIS feature; the pad's own body is the same off-white (`#f3f3f1`) in 3D.
- **Instrument Grey** (instrument-grey): secondary text, ledes, mono metadata, inactive nav.
- **Hairline / Hairline Strong** (hairline, hairline-strong): row dividers and outline button/control borders.
- **Ghost Equation** (ghost-equation): the giant "δS = 0"; `#15181c` in dark.
- **Field Black / Field Ink / Field Grey / Field Hairline**: the black-field set. Inside a field the section re-binds `--ink`, `--muted`, `--rule`, `--page` to these, so every component works unchanged.
- **Night Page / Night Raised / Night Ink**: the dark-theme remaps of page, raised and ink.

### Named Rules
**The Material-Only Colour Rule.** There is no brand hue. Colour enters only as chrome and thin-film iridescence on objects, or as the 2px film line. Never fill a surface, a button or a block of text with the film or any hue.

**The Hairline Film Rule.** The film gradient is a line, 2px tall, never thicker and never an area. It marks state (active, progress) or a single emphasis.

**The Rebind, Don't Recolour Rule.** A black field is made by re-binding the ink/muted/rule/page tokens on the section, not by writing new component colours.

## Typography

**Display Font:** Sora (with system-ui)
**Body Font:** Geist (with system-ui)
**Label/Mono Font:** Geist Mono (with ui-monospace)

**Character:** Sora set heavy and very tight (-0.035em to -0.07em) reads engineered and futuristic at size; Geist keeps reading quiet; Geist Mono with tabular numbers is the lab's instrument voice.

### Hierarchy
- **Display** (600, clamp(54px, 7.6vw, 116px), 0.9): the name in the hero only.
- **Headline** (600, clamp(48px, 6.4vw, 96px), 0.95): section titles (Work, About, Start a conversation). The feature title runs at clamp(42px, 5vw, 76px).
- **Title** (600, clamp(26px, 2.6vw, 34px), 1): build names, shelf headings; group headings step down to clamp(24px, 2.4vw, 32px).
- **Statement** (300, clamp(28px, 3.8vw, 58px), 1.1): the quote in the black field; light weight with one 600-weight emphasised phrase. The sign-off "δS = 0" uses Sora 300 at up to 160px, -0.07em.
- **Subhead** (Geist 500, clamp(20px, 1.9vw, 26px), 1.3): the pitch line and feature tagline, max ~19em.
- **Body** (Geist 400, 16px, 1.6): running text; ledes 16–18px in instrument grey, max 36–40em.
- **Label** (Geist Mono 400, 12px, 0.02em, tabular): statuses, origins, spec values, step numbers, card headers. Sentence case, never uppercase.

### Named Rules
**The Tight Sora Rule.** Every Sora size at 24px and above carries negative tracking (-0.02em at 20px, down to -0.05em at display). Loose display type breaks the world.

**The Mono Is Data Rule.** Geist Mono carries facts (status, date, stack, spec). It is not used for headings or as a decorative label above headings.

## Layout

A single 1280px column inside a fluid gutter (clamp(16px, 4vw, 56px)) under a fixed 76px bar. Sections are separated by a 1px hairline and padded clamp(80px, 10vw, 144px). Section heads are a two-column grid at 900px and up: headline left, a 26em lede right, aligned to the baseline.

The hero fills the viewport below the bar: copy left, portrait right bleeding to the page edge (height min(86svh, 880px)), "δS = 0" set vertically along the right edge behind the portrait. Below 900px the order becomes copy, equation (horizontal, 26vw), portrait. A six-cell build index (two cells on mobile) runs under the hero as a ruled strip.

Lists are ruled rows, not cards: builds use a three-column row (name, description, right-aligned meta at 260px) at 900px and up, stacked below. Black fields break out of the column with `margin-inline: calc(50% - 50vw)` and re-centre their content at 1280px.

Breakpoints observed: 560px (wordmark hides), 700px (discipline grid to four columns, card fan), 900px (two-column hero, heads, rows), 1000px (shelf).

## Elevation & Depth

Flat. Depth comes from real 3D objects (the chrome delta and the ceramic pad rendered in three.js with an environment map), the portrait cutout overlapping the ghost equation, and the OASIS pad rising out of its ceramic panel by a negative top margin. Surfaces themselves are distinguished by tone (white, ceramic, black field) and 1px hairlines.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 20px 40px -26px rgba(11,12,14,.45)`): the playing-card decks only.
- **Card lifted** (`box-shadow: 0 0 0 2px #b9a6ff, 0 36px 60px -24px rgba(11,12,14,.5)`): a deck card on hover or focus.
- **Button halo** (`box-shadow: 0 0 0 2px var(--page), 0 0 0 4px #b9a6ff`): primary button hover.

### Named Rules
**The Real Object Rule.** Depth belongs to objects that exist (the mark, the pad, the portrait, the cards). Panels and rows stay flat.

## Shapes

Square. Buttons, controls and the theme toggle use a 2px radius, which reads as machined rather than rounded; panels, rows, fields and dialogs have no radius at all. Status dots (7px circles, hollow for in progress, filled for done) are the only round shape. The delta mark's triangle silhouette is the system's one signature form; it appears as the live 3D mark, the favicon and the static fallback.

## Components

### Buttons
Machined and plain.
- **Shape:** near-square (2px), 52px tall, 26px horizontal padding, Geist 500 15px, trailing arrow icon that slides 3px on hover.
- **Primary:** carbon ink fill, white text. Hover adds a white gap ring and a film-violet halo.
- **Line:** transparent with an inset 1px strong hairline; hover darkens the hairline to ink.
- **Focus:** 2px signal-blue outline, 3px offset (global).

### Chips (channel selector)
- **Style:** 42px tall, 1px border, 2px radius, Geist 500 14px, transparent on the black field.
- **State:** selected inverts to field-ink fill with black text (`aria-selected=true`).

### Cards / Containers
- **Feature panel:** ceramic background, no radius, clamp(24px, 4vw, 56px) padding, a 2px film line along its top edge. Holds the 3D pad stage, which overlaps the panel's top.
- **Ruled rows:** builds, steps, spec, disciplines and contact links are rows divided by 1px hairlines; a group starts with a 1px ink rule under its heading.
- **Deck cards:** 2:3 playing cards with a black mono header strip, a line icon or initials, and name plus one line. At 700px and up they stack as a fanned deck that spreads on hover; non-hovered cards desaturate.

### Navigation
Fixed 76px bar, white at 94% opacity with a bottom hairline. Live chrome delta mark plus two-line Sora wordmark on the left (wordmark hides under 560px); Geist 500 14px links on the right in instrument grey, ink on hover and active; the active link gets a 2px film underline that scales in from the left. A square 40px theme toggle rotates 90° on hover. A 2px film line along the bar's bottom shows scroll progress.

### Conversation starters
Full-width rows in Sora 400 clamp(20px, 2.2vw, 30px) on the black field, ruled by field hairlines; on hover the row indents 12px and the arrow advances 6px.

### Chrome Delta Mark and OASIS Pad (signature)
Three.js objects. Both share a metal, fully iridescent physical material (`iridescenceIOR 2.1`) lit by a studio environment of bright and film-tinted softboxes: the mark at `roughness .12`, thickness 250–650nm, `envMapIntensity 1.1`; the pad's domed keys at `roughness .18`, `envMapIntensity .55` on a cool `#d9dee5` base. The pad body is a clearcoated off-white ceramic. Both turn toward the cursor so the film shifts with the angle. Each has a static image fallback (`delta.svg`, `OASIS.png`) when WebGL is unavailable, and reduced motion is honoured.

## Do's and Don'ts

### Do:
- **Do** keep the ground white and the ink carbon; let chrome and iridescence be the only colour.
- **Do** use the film gradient only as a 2px line for state or a single emphasis.
- **Do** build lists as ruled rows with mono status and metadata, and label unfinished work plainly with a hollow status dot.
- **Do** make black fields by re-binding the ink/muted/rule/page tokens on the section.
- **Do** keep corners at 2px on controls and 0 elsewhere.
- **Do** give every 3D object a static fallback and respect reduced motion.

### Don't:
- **Don't** introduce a brand hue, coloured fills, or gradient areas; the film is a line.
- **Don't** use dark neon sci-fi treatments (glows, scanlines, neon on black) for the futuristic feel.
- **Don't** fall back to a hero over a grid of cards for the work; builds are an index of ruled rows.
- **Don't** set Sora display loose or in light tracking.
- **Don't** put mono uppercase labels above headings.
