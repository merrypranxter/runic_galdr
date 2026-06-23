#version 300 es
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
out vec4 outColor;
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float v = sin(uv.x * 10.0 + u_time) * cos(uv.y * 10.0 + u_time);
  outColor = vec4(vec3(v * 0.5 + 0.5), 1.0);
}
