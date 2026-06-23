// Main renderer and interaction logic for runic_galdr
import { runes } from './rune-data.js';
import { composeBindrune } from './bindrune.js';
import { drawGaldr } from './galdr.js';
import { drawRuneWheel, drawRuneAt } from './calendar.js';

const canvas = document.getElementById('gl');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let currentIndex = 0;
let selection = [];
let showGaldr = false;
let showWheel = false;

// Draw a list of stroke segments at a position and size
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

// Main render loop
function render(timestamp) {
  const t = timestamp * 0.001;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw calendar wheel if enabled
  if (showWheel) {
    drawRuneWheel(ctx, canvas, t, currentIndex);
  }

  const centreX = canvas.width / 2;
  const centreY = canvas.height / 2;
  const runeSize = Math.min(canvas.width, canvas.height) * 0.4;

  // Draw galdr resonance if toggled
  if (showGaldr) {
    const freq = runes[currentIndex].freq;
    // Scale frequency to slower cycle (0.01) for visuals
    drawGaldr(ctx, canvas, t, freq * 0.01);
  }

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;

  if (selection.length > 0) {
    const strokes = composeBindrune(selection);
    drawStrokes(strokes, centreX, centreY, runeSize);
  } else {
    drawRuneAt(ctx, centreX, centreY, runeSize, runes[currentIndex].id);
  }

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

function nextRune() {
  currentIndex = (currentIndex + 1) % runes.length;
}
function prevRune() {
  currentIndex = (currentIndex - 1 + runes.length) % runes.length;
}
function randomRune() {
  currentIndex = Math.floor(Math.random() * runes.length);
}

// Keyboard controls
window.addEventListener('keydown', e => {
  switch (e.key.toLowerCase()) {
    case 'n':
    case 'arrowright':
      nextRune();
      break;
    case 'p':
    case 'arrowleft':
      prevRune();
      break;
    case 'b':
      {
        const id = runes[currentIndex].id;
        selection.push(id);
      }
      break;
    case 'c':
      selection = [];
      break;
    case 'g':
      showGaldr = !showGaldr;
      break;
    case 'w':
      showWheel = !showWheel;
      break;
    case 'r':
      randomRune();
      break;
    default:
      break;
  }
});
