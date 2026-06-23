# Design Notes

The runic_galdr generator emphasises modularity and clarity.

## Modules

- `rune-data.js` centralises the rune definitions so that visuals, sound, and interpretation all derive from the same data.
- `bindrune.js` abstracts the logic of composing multiple runes. This makes it easy to implement different overlay strategies in demos.
- `galdr.js` isolates the resonance animation logic. Other patterns (e.g. radial noise, wave interference) could be added here.
- `calendar.js` encapsulates the runic wheel and exports `drawRuneAt` for reuse in both the main app and examples.
- `main.js` glues everything together, handling user input and orchestrating drawing.

## Interaction philosophy

Runes should respond fluidly to simple inputs. Keys cycle through the Futhark, while toggles (B, C, G, W) enable additional layers. The design avoids nested menus; instead everything is one keystroke away. The runic wheel gives users a high‑level overview, while bindrunes and galdr provide depth.

## Potential extensions

- Add audio synthesis: play the rune’s note when it is selected or when galdr is activated.
- Support mouse/touch gestures: drag runes to compose bindrunes; pinch to resize.
- Incorporate more accurate rune geometries and correspondences from historical sources.
