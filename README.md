# runic_galdr

> 24 runes. Bindrune composition. Galdr resonance. Calendar wheel and spreads.

This project brings the Elder Futhark into the world of generative art. Each rune is defined by simple vector strokes along with its phonetic and symbolic meaning. You can cycle through runes, compose bindrunes by overlaying multiple glyphs, and animate a resonance pattern (galdr) tied to the rune’s frequency. A runic wheel arranges all twenty‑four runes around a circle to form a calendar, and random rune spreads can be used for divination.

## Running

Open `index.html` in a modern browser. No build step is required. Everything is built with vanilla JavaScript and the HTML5 canvas. Touch controls will work on mobile devices.

## Controls

| Key | Action |
|---|---|
| `N` or Right Arrow | Next rune |
| `P` or Left Arrow | Previous rune |
| `B` | Add current rune to bindrune selection |
| `C` | Clear bindrune selection |
| `G` | Toggle galdr resonance animation |
| `W` | Toggle runic calendar wheel |
| `R` | Select a random rune |

## Directory structure

- `index.html` — entry page with a `<canvas>` element.
- `src/js/rune-data.js` — defines the 24 runes and their stroke data.
- `src/js/bindrune.js` — helper for composing bindrunes.
- `src/js/galdr.js` — draws a radial resonance pattern.
- `src/js/calendar.js` — draws the runic wheel and provides `drawRuneAt`.
- `src/js/main.js` — sets up the canvas, handles controls, and renders runes.
- `src/shaders/` — minimal GLSL shaders for future WebGL experiments.
- `examples/` — alternative demos, e.g. bindrune builder, galdr waves, calendar wheel.
- `docs/` — design notes, rune data reference, visual targets.

## Background

The **Elder Futhark** is a set of twenty‑four runes used by Germanic peoples in the early centuries of the Common Era. Each rune has a phonetic value and an associated concept such as wealth, strength, or joy. **Bindrunes** overlay multiple runes to combine their meanings. **Galdr** (chanting) assigns tonal values to runes and visualizes their resonances. A runic calendar wheel places the runes around a circle, connecting them to the year cycle. See `docs/data-reference.md` for details.
