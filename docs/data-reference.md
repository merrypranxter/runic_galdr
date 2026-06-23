# Data Reference: runic_galdr

This document lists the core data used by the runic_galdr renderer.

## Rune table

| ID | Rune | Phonetic | Meaning | Frequency (Hz) |
|----|------|----------|---------|---------------|
| 1  | Fehu   | F  | Wealth, cattle | 220 |
| 2  | Uruz   | U  | Strength, aurochs | 230 |
| 3  | Thurisaz | Th | Conflict, giant | 240 |
| 4  | Ansuz  | A  | Wisdom, communication | 250 |
| 5  | Raido  | R  | Journey, movement | 260 |
| 6  | Kenaz  | K  | Knowledge, torch | 270 |
| 7  | Gebo   | G  | Gift, exchange | 280 |
| 8  | Wunjo  | W  | Joy, harmony | 290 |
| 9  | Hagalaz | H | Hail, disruption | 300 |
| 10 | Nauthiz| N | Need, resistance | 310 |
| 11 | Isa    | I | Stillness, ice | 320 |
| 12 | Jera   | J | Harvest, cycle | 330 |
| 13 | Eihwaz | Ei | Yew tree, resilience | 340 |
| 14 | Perthro| P | Mystery, fate | 350 |
| 15 | Algiz  | Z | Protection, elk | 360 |
| 16 | Sowilo | S | Sun, success | 370 |
| 17 | Tiwaz  | T | Victory, justice | 380 |
| 18 | Berkano| B | Growth, birch | 390 |
| 19 | Ehwaz  | E | Movement, horse | 400 |
| 20 | Mannaz | M | Humankind, mind | 410 |
| 21 | Laguz  | L | Water, flow | 420 |
| 22 | Ingwaz | Ing | Fertility, earth | 430 |
| 23 | Dagaz  | D | Breakthrough, day | 440 |
| 24 | Othala | O | Heritage, home | 450 |

Each rune is defined in `src/js/rune-data.js` as a list of stroke segments. The coordinates are normalized to a unit square with (0,0) at the bottom-left and (1,1) at the top-right. Frequencies are arbitrary values used to modulate the galdr resonance pattern.

## Bindrune composition

Bindrunes are created by overlaying the strokes of multiple runes. Offsetting each rune slightly prevents their lines from collapsing into a single shape. The helper in `src/js/bindrune.js` returns a merged list of stroke segments ready for drawing.

## Calendar wheel

To draw the runic calendar, the `drawRuneWheel` function places the center of each rune on a circle at angle `2π * i / 24` for rune `i`. The wheel radius is chosen relative to the smaller canvas dimension.

## Galdr resonance

The galdr pattern is drawn as a radial oscillation: at angle θ the radius is `R + R * 0.05 * sin(f * t + k θ)` where `f` is the rune’s frequency, `t` is time, and `k` is a constant controlling the number of lobes. This creates a shimmering ring behind the rune that pulsates at its own rate.
