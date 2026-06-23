// Example: Bindrune builder. Add runes with number keys (1-9), space to clear selection.
import { runes } from '../src/js/rune-data.js';
import { composeBindrune } from '../src/js/bindrune.js';

const canvas = document.getElementById('gl');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let selection = [];

function drawStrokes(strokes, x, y, size) {
  strokes.forEach(s => {
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

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const size = Math.min(canvas.width, canvas.height) * 0.5;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  if (selection.length > 0) {
    const strokes = composeBindrune(selection);
    drawStrokes(strokes, cx, cy, size);
  } else {
    ctx.fillStyle = '#888888';
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Press number keys (1-9) to add runes, space to clear', cx, cy);
  }
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

window.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    selection = [];
    return;
  }
  const digit = parseInt(e.key, 10);
  if (!isNaN(digit) && digit >= 1 && digit <= 9) {
    const rune = runes[digit - 1];
    if (rune) selection.push(rune.id);
  }
});
