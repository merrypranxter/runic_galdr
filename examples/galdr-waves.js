// Example: Cycle through runes with their galdr resonance animation.
import { runes } from '../src/js/rune-data.js';
import { drawGaldr } from '../src/js/galdr.js';
import { drawRuneAt } from '../src/js/calendar.js';

const canvas = document.getElementById('gl');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let current = 0;
let running = true;
let lastSwitch = 0;

function render(timestamp) {
  const t = timestamp * 0.001;
  // switch rune every 3 seconds if running
  if (running && t - lastSwitch > 3) {
    current = (current + 1) % runes.length;
    lastSwitch = t;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const size = Math.min(canvas.width, canvas.height) * 0.4;
  // Draw galdr
  const freq = runes[current].freq;
  drawGaldr(ctx, canvas, t, freq * 0.01);
  // Draw rune on top
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  drawRuneAt(ctx, cx, cy, size, runes[current].id);
  // Draw rune name label
  ctx.fillStyle = '#cccccc';
  ctx.font = '20px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(runes[current].name, cx, cy + size * 0.6);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

window.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    running = !running;
  }
});
