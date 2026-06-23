// Draw a radial resonance (galdr) pattern behind a rune

/**
 * Draw a circular interference pattern whose radius oscillates with a sine wave.
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context
 * @param {HTMLCanvasElement} canvas - Canvas being drawn to
 * @param {number} time - Animation time in seconds
 * @param {number} freq - Frequency controlling the number of oscillations
 */
export function drawGaldr(ctx, canvas, time, freq) {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const baseRadius = Math.min(canvas.width, canvas.height) * 0.4;
  const segments = 80;
  ctx.beginPath();
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const r = baseRadius + baseRadius * 0.05 * Math.sin(freq * time + angle * 6.0);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 1;
  ctx.stroke();
}
