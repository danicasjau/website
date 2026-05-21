

// ============================================
// Global Variables - Full Customization
// ============================================

// Main Control Parameters
let JITTER_INTENSITY = 1.5;
let JITTER_SPEED = 1;

// Frequency/Wave Parameters
let FREQ_MIN = 0.6;
let FREQ_MAX = 1.4;
let FREQ_SCALE_Y = 0.7;

// Opacity Glitch Effect Parameters
let GLITCH_INTERVAL_MIN = 2000;
let GLITCH_INTERVAL_MAX = 5000;
let GLITCH_DURATION_MIN = 100;
let GLITCH_DURATION_MAX = 150;
let GLITCH_OPACITY_MIN = 0.3;
let GLITCH_OPACITY_MAX = 1;

const COLORS = [
  'rgba(80,140,255,',
  'rgba(120,90,255,',
  'rgba(60,200,255,',
];

let letters = [];
let rafId;

function rand(min, max) { return min + Math.random() * (max - min); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function buildLetters(element) {
  const text = element.textContent;
  element.innerHTML = '';
  element.setAttribute('aria-label', text);
  letters = [];

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const span = document.createElement('span');
    span.className = ch === ' ' ? 'jl space' : 'jl';
    span.textContent = ch === ' ' ? '\u00a0' : ch;
    element.appendChild(span);

    if (ch !== ' ') {
      letters.push({
        el: span,
        phase: rand(0, Math.PI * 2),
        freq: rand(FREQ_MIN, FREQ_MAX),
        lastGlitch: 0,
        glitchInterval: rand(GLITCH_INTERVAL_MIN, GLITCH_INTERVAL_MAX),
        glitching: false,
        glitchEnd: 0,
      });
    }
  }
}

function animate(ts) {
  rafId = requestAnimationFrame(animate);
  const t = ts * 0.001 * JITTER_SPEED;

  for (const L of letters) {
    const dx = Math.sin(t * L.freq + L.phase) * JITTER_INTENSITY;
    const dy = Math.cos(t * L.freq * FREQ_SCALE_Y + L.phase + 1) * JITTER_INTENSITY * 0.6;

    let opacity = 1;

    // Opacity glitch effect
    if (!L.glitching && ts - L.lastGlitch > L.glitchInterval) {
      L.glitching = true;
      L.glitchEnd = ts + rand(GLITCH_DURATION_MIN, GLITCH_DURATION_MAX);
      L.glitchInterval = rand(GLITCH_INTERVAL_MIN, GLITCH_INTERVAL_MAX);
    }

    if (L.glitching) {
      if (ts < L.glitchEnd) {
        opacity = rand(GLITCH_OPACITY_MIN, GLITCH_OPACITY_MAX);
      } else {
        L.glitching = false;
        L.lastGlitch = ts;
      }
    }

    L.el.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
    L.el.style.opacity = opacity;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const titleEl = document.querySelector('h1.pixel-noise-jitter');
  if (titleEl) {
    buildLetters(titleEl);
    rafId = requestAnimationFrame(animate);
  }
});

