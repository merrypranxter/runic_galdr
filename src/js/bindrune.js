// Helper to compose multiple runes into a bindrune by offsetting strokes
import { runes } from './rune-data.js';

/**
 * Return a merged list of stroke segments for the given rune IDs. Each
 * rune is offset horizontally so that their strokes do not overlap completely.
 * @param {number[]} ids - List of rune IDs to combine.
 */
export function composeBindrune(ids) {
  const strokes = [];
  ids.forEach((id, i) => {
    const rune = runes.find(r => r.id === id);
    if (!rune) return;
    // Compute offset: center the collection and separate each rune by 0.05
    const offset = (i - (ids.length - 1) / 2) * 0.05;
    rune.strokes.forEach(s => {
      strokes.push({
        x1: s.x1 + offset,
        y1: s.y1,
        x2: s.x2 + offset,
        y2: s.y2
      });
    });
  });
  return strokes;
}
