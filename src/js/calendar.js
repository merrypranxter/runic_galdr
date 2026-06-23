// Runic calendar wheel and rune placement helpers
import { runes } from './rune-data.js';

/**
 * Draw a single rune at a given position and size.
 * The strokes are scaled so that (0,0) is the bottom-left and (1,1) the top-right
 * within the rune bounds. The coordinate system of the canvas has (0,0) at top-left,
 * so y values are inverted relative to rune data.
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context
 * @param {number} x - centre X of the rune
 * @param {number} y - centre Y of the rune
 * @param {number} size - overall size of the rune
 * @param {number} runeId - ID of the rune to draw
 */
export function drawRuneAt(ctx, x, y, size, runeId) {
  const rune = runes.find(r => r.id === runeId);
  if (!rune) return;
  rune.strokes.forEach(s => {
    const x1 = x + (s.x1 - 0.5) * size;
    const y1 = y + (0.5 - s.y1) * size;
    const x2 = x + (s.x2 - 0.5) * size;
    const y2 = y + (0.5 - s.y2) * size;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  });
}

/**
 * Draw all runes evenly spaced around a circle. Optionally highlight one index.
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context
 * @param {HTMLCanvasElement} canvas - canvas being drawn to (for size)
 * @param {number} time - animation time in seconds (currently unused)
 * @param {number|null} highlightIndex - index of rune to highlight (0-based), or null for none
 */
export function drawRuneWheel(ctx, canvas, time, highlightIndex = null) {
  const radius = Math.min(canvas.width, canvas.height) * 0.35;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const runeSize = Math.min(canvas.width, canvas.height) * 0.08;
  const total = runes.length;
  for (let i = 0; i < total; i++) {
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    ctx.save();
    ctx.strokeStyle = (highlightIndex === i) ? '#ffcc66' : '#888888';
    drawRuneAt(ctx, x, y, runeSize, runes[i].id);
    ctx.restore();
  }
}
