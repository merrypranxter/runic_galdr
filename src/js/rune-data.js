// Definitions for the 24 Elder Futhark runes.
// Each rune includes its ID, name, phonetic value, meaning, stroke data and a frequency for galdr animation.

export const runes = [
  {
    id: 1,
    name: 'Fehu',
    phonetic: 'F',
    meaning: 'Wealth, cattle',
    strokes: [
      { x1: 0.2, y1: 0.1, x2: 0.2, y2: 0.9 },
      { x1: 0.2, y1: 0.9, x2: 0.5, y2: 0.75 },
      { x1: 0.2, y1: 0.8, x2: 0.5, y2: 0.65 }
    ],
    freq: 220
  },
  {
    id: 2,
    name: 'Uruz',
    phonetic: 'U',
    meaning: 'Strength, aurochs',
    strokes: [
      { x1: 0.2, y1: 0.1, x2: 0.2, y2: 0.9 },
      { x1: 0.2, y1: 0.9, x2: 0.5, y2: 0.2 }
    ],
    freq: 230
  },
  {
    id: 3,
    name: 'Thurisaz',
    phonetic: 'Th',
    meaning: 'Conflict, giant',
    strokes: [
      { x1: 0.2, y1: 0.1, x2: 0.2, y2: 0.9 },
      { x1: 0.2, y1: 0.8, x2: 0.5, y2: 0.6 }
    ],
    freq: 240
  },
  {
    id: 4,
    name: 'Ansuz',
    phonetic: 'A',
    meaning: 'Wisdom, communication',
    strokes: [
      { x1: 0.2, y1: 0.1, x2: 0.2, y2: 0.9 },
      { x1: 0.2, y1: 0.7, x2: 0.5, y2: 0.8 },
      { x1: 0.2, y1: 0.5, x2: 0.5, y2: 0.6 }
    ],
    freq: 250
  },
  {
    id: 5,
    name: 'Raido',
    phonetic: 'R',
    meaning: 'Journey, movement',
    strokes: [
      { x1: 0.2, y1: 0.1, x2: 0.2, y2: 0.9 },
      { x1: 0.2, y1: 0.5, x2: 0.5, y2: 0.7 },
      { x1: 0.5, y1: 0.7, x2: 0.2, y2: 0.3 }
    ],
    freq: 260
  },
  {
    id: 6,
    name: 'Kenaz',
    phonetic: 'K',
    meaning: 'Knowledge, torch',
    strokes: [
      { x1: 0.2, y1: 0.5, x2: 0.5, y2: 0.8 },
      { x1: 0.2, y1: 0.5, x2: 0.5, y2: 0.2 },
      { x1: 0.2, y1: 0.1, x2: 0.2, y2: 0.9 }
    ],
    freq: 270
  },
  {
    id: 7,
    name: 'Gebo',
    phonetic: 'G',
    meaning: 'Gift, exchange',
    strokes: [
      { x1: 0.1, y1: 0.1, x2: 0.9, y2: 0.9 },
      { x1: 0.1, y1: 0.9, x2: 0.9, y2: 0.1 }
    ],
    freq: 280
  },
  {
    id: 8,
    name: 'Wunjo',
    phonetic: 'W',
    meaning: 'Joy, harmony',
    strokes: [
      { x1: 0.3, y1: 0.1, x2: 0.3, y2: 0.9 },
      { x1: 0.3, y1: 0.9, x2: 0.6, y2: 0.6 }
    ],
    freq: 290
  },
  {
    id: 9,
    name: 'Hagalaz',
    phonetic: 'H',
    meaning: 'Hail, disruption',
    strokes: [
      { x1: 0.3, y1: 0.1, x2: 0.3, y2: 0.9 },
      { x1: 0.1, y1: 0.5, x2: 0.9, y2: 0.5 },
      { x1: 0.1, y1: 0.1, x2: 0.9, y2: 0.9 }
    ],
    freq: 300
  },
  {
    id: 10,
    name: 'Nauthiz',
    phonetic: 'N',
    meaning: 'Need, resistance',
    strokes: [
      { x1: 0.3, y1: 0.1, x2: 0.3, y2: 0.9 },
      { x1: 0.1, y1: 0.2, x2: 0.9, y2: 0.8 }
    ],
    freq: 310
  },
  {
    id: 11,
    name: 'Isa',
    phonetic: 'I',
    meaning: 'Stillness, ice',
    strokes: [
      { x1: 0.3, y1: 0.1, x2: 0.3, y2: 0.9 }
    ],
    freq: 320
  },
  {
    id: 12,
    name: 'Jera',
    phonetic: 'J',
    meaning: 'Harvest, cycle',
    strokes: [
      { x1: 0.1, y1: 0.3, x2: 0.9, y2: 0.8 },
      { x1: 0.1, y1: 0.8, x2: 0.9, y2: 0.3 }
    ],
    freq: 330
  },
  {
    id: 13,
    name: 'Eihwaz',
    phonetic: 'Ei',
    meaning: 'Yew tree, resilience',
    strokes: [
      { x1: 0.3, y1: 0.1, x2: 0.3, y2: 0.9 },
      { x1: 0.1, y1: 0.2, x2: 0.5, y2: 0.4 },
      { x1: 0.1, y1: 0.8, x2: 0.5, y2: 0.6 }
    ],
    freq: 340
  },
  {
    id: 14,
    name: 'Perthro',
    phonetic: 'P',
    meaning: 'Mystery, fate',
    strokes: [
      { x1: 0.3, y1: 0.1, x2: 0.3, y2: 0.9 },
      { x1: 0.3, y1: 0.6, x2: 0.6, y2: 0.8 },
      { x1: 0.3, y1: 0.4, x2: 0.6, y2: 0.2 }
    ],
    freq: 350
  },
  {
    id: 15,
    name: 'Algiz',
    phonetic: 'Z',
    meaning: 'Protection, elk',
    strokes: [
      { x1: 0.5, y1: 0.1, x2: 0.5, y2: 0.9 },
      { x1: 0.5, y1: 0.9, x2: 0.2, y2: 0.6 },
      { x1: 0.5, y1: 0.9, x2: 0.8, y2: 0.6 }
    ],
    freq: 360
  },
  {
    id: 16,
    name: 'Sowilo',
    phonetic: 'S',
    meaning: 'Sun, success',
    strokes: [
      { x1: 0.1, y1: 0.2, x2: 0.9, y2: 0.4 },
      { x1: 0.1, y1: 0.6, x2: 0.9, y2: 0.8 },
      { x1: 0.3, y1: 0.4, x2: 0.7, y2: 0.6 }
    ],
    freq: 370
  },
  {
    id: 17,
    name: 'Tiwaz',
    phonetic: 'T',
    meaning: 'Victory, justice',
    strokes: [
      { x1: 0.5, y1: 0.1, x2: 0.5, y2: 0.9 },
      { x1: 0.5, y1: 0.9, x2: 0.2, y2: 0.6 },
      { x1: 0.5, y1: 0.9, x2: 0.8, y2: 0.6 }
    ],
    freq: 380
  },
  {
    id: 18,
    name: 'Berkano',
    phonetic: 'B',
    meaning: 'Growth, birch',
    strokes: [
      { x1: 0.3, y1: 0.1, x2: 0.3, y2: 0.9 },
      { x1: 0.3, y1: 0.8, x2: 0.6, y2: 0.9 },
      { x1: 0.3, y1: 0.5, x2: 0.6, y2: 0.6 },
      { x1: 0.3, y1: 0.2, x2: 0.6, y2: 0.3 }
    ],
    freq: 390
  },
  {
    id: 19,
    name: 'Ehwaz',
    phonetic: 'E',
    meaning: 'Movement, horse',
    strokes: [
      { x1: 0.2, y1: 0.1, x2: 0.5, y2: 0.9 },
      { x1: 0.5, y1: 0.9, x2: 0.8, y2: 0.1 }
    ],
    freq: 400
  },
  {
    id: 20,
    name: 'Mannaz',
    phonetic: 'M',
    meaning: 'Humankind, mind',
    strokes: [
      { x1: 0.2, y1: 0.1, x2: 0.2, y2: 0.9 },
      { x1: 0.8, y1: 0.1, x2: 0.8, y2: 0.9 },
      { x1: 0.2, y1: 0.9, x2: 0.8, y2: 0.1 }
    ],
    freq: 410
  },
  {
    id: 21,
    name: 'Laguz',
    phonetic: 'L',
    meaning: 'Water, flow',
    strokes: [
      { x1: 0.2, y1: 0.1, x2: 0.2, y2: 0.9 },
      { x1: 0.2, y1: 0.5, x2: 0.8, y2: 0.1 }
    ],
    freq: 420
  },
  {
    id: 22,
    name: 'Ingwaz',
    phonetic: 'Ing',
    meaning: 'Fertility, earth',
    strokes: [
      { x1: 0.2, y1: 0.3, x2: 0.5, y2: 0.6 },
      { x1: 0.5, y1: 0.6, x2: 0.8, y2: 0.3 },
      { x1: 0.2, y1: 0.7, x2: 0.5, y2: 0.4 },
      { x1: 0.5, y1: 0.4, x2: 0.8, y2: 0.7 }
    ],
    freq: 430
  },
  {
    id: 23,
    name: 'Dagaz',
    phonetic: 'D',
    meaning: 'Breakthrough, day',
    strokes: [
      { x1: 0.2, y1: 0.3, x2: 0.8, y2: 0.7 },
      { x1: 0.2, y1: 0.7, x2: 0.8, y2: 0.3 }
    ],
    freq: 440
  },
  {
    id: 24,
    name: 'Othala',
    phonetic: 'O',
    meaning: 'Heritage, home',
    strokes: [
      { x1: 0.2, y1: 0.3, x2: 0.5, y2: 0.6 },
      { x1: 0.5, y1: 0.6, x2: 0.8, y2: 0.3 },
      { x1: 0.2, y1: 0.3, x2: 0.5, y2: 0.0 },
      { x1: 0.8, y1: 0.3, x2: 0.5, y2: 0.0 }
    ],
    freq: 450
  }
];

export function getRuneById(id) {
  return runes.find(r => r.id === id);
}
