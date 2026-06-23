// Example: Show the runic wheel with random highlight selection.
import { runes } from '../src/js/rune-data.js';
import { drawRuneWheel } from '../src/js/calendar.js';

const canvas = document.getElementById('gl');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let highlight = 0;
let autoRotate = true;
let lastChange = 0;

function render(timestamp) {
  const t = timestamp * 0.001;
  // pick a new random rune every 4 seconds if auto rotation is on
  if (autoRotate && t - lastChange > 4) {
    highlight = Math.floor(Math.random() * runes.length);
    lastChange = t;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRuneWheel(ctx, canvas, t, highlight);
  // draw name label
  const name = runes[highlight].name;
  ctx.fillStyle = '#cccccc';
  ctx.font = '24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(name, canvas.width / 2, canvas.height * 0.9);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

window.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    autoRotate = !autoRotate;
  }
});
