/* ═══════════════════════════════════════════════
   PORTFOLIO — main.js
═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Elements
  const topbar = document.getElementById('topbar');
  const heroTitle = document.getElementById('hero-title');
  const heroSub = document.getElementById('hero-sub');
  const scrollCue = document.getElementById('scroll-cue');
  const reelWrap = document.getElementById('reel-wrap');
  const reelVideo = document.getElementById('reel-video');
  const reelOvl = document.getElementById('reel-overlay');
  const playBtn = document.getElementById('play-btn');

  // ── State
  let ticking = false;
  let heroH = window.innerHeight;

  // ── Scroll handler
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function update() {
    ticking = false;
    const sy = window.scrollY;
    heroH = window.innerHeight;

    // 1. Topbar: appears after 60px
    if (sy > 60) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }

    // 2. Hero title shrink + fade
    //    From heroH*0.15 → heroH*0.65  we shrink and fade
    const start = heroH * 0.15;
    const end = heroH * 0.65;
    const prog = Math.min(Math.max((sy - start) / (end - start), 0), 1);

    const minScale = 0.12;   // how small the title shrinks to (relative to original)
    const scale = 1 - prog * (1 - minScale);

    heroTitle.style.transform = `scale(${scale})`;
    heroTitle.style.transformOrigin = 'center top';
    heroTitle.style.opacity = `${1 - prog * 0.85}`;

    // Hide sub / scroll cue as user scrolls
    heroSub.style.opacity = `${1 - prog * 3}`;
    scrollCue.style.opacity = `${1 - prog * 4}`;

    // 3. VFX Intro Sticky fade
    const introSticky = document.querySelector('.vfx-intro-sticky');
    const introSec = document.getElementById('vfx-intro');
    if (introSticky && introSec) {
      const rect = introSec.getBoundingClientRect();
      let introProg = 0;
      if (rect.top < 0) {
        introProg = Math.min(1, -rect.top / (rect.height - window.innerHeight));
      }
      let opacity = 1;
      if (introProg > 0.5) {
        opacity = 1 - ((introProg - 0.5) * 2);
      }
      introSticky.style.opacity = opacity;
    }
  }

  // ── Video play / pause
  function initReel() {
    reelWrap.addEventListener('click', function () {
      const hasSource = reelVideo.src && reelVideo.src !== window.location.href;

      if (!hasSource) {
        // No video loaded — just toggle overlay to demo the UI
        reelOvl.classList.toggle('hidden');
        return;
      }

      if (reelVideo.paused) {
        reelVideo.play();
        reelOvl.classList.add('hidden');
      } else {
        reelVideo.pause();
        reelOvl.classList.remove('hidden');
      }
    });

    // Re-show overlay when video ends
    reelVideo.addEventListener('ended', function () {
      reelOvl.classList.remove('hidden');
    });
  }

  // ── Scroll reveal (IntersectionObserver)
  function initReveal() {
    const revealEls = document.querySelectorAll(
      '#reel, #whoami-inner, #gallery-grid, .gallery-item, #footer-name, #footer-body, #footer-bottom, .section-label'
    );

    revealEls.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(el => io.observe(el));
  }

  // ── Gallery hover cursor shift (subtle)
  function initGalleryCursor() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      item.addEventListener('mousemove', function (e) {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const img = item.querySelector('.gallery-img');
        if (img) {
          img.style.transform = `scale(1.04) translate(${x * 8}px, ${y * 8}px)`;
        }
      });
      item.addEventListener('mouseleave', function () {
        const img = item.querySelector('.gallery-img');
        if (img) img.style.transform = '';
      });
    });
  }

  // ── Footer name glitch twitch (subtle brutalist touch)
  function initFooterName() {
    const name = document.getElementById('footer-name');
    if (!name) return;

    name.addEventListener('mouseenter', function () {
      let count = 0;
      const glitch = setInterval(function () {
        name.style.letterSpacing = (Math.random() > 0.5 ? '-.06em' : '-.02em');
        count++;
        if (count > 6) {
          clearInterval(glitch);
          name.style.letterSpacing = '-.04em';
        }
      }, 60);
    });
  }

  // ── Resize
  function onResize() {
    heroH = window.innerHeight;
    update();
  }

  // ── Decrypt protected email links
  function initProtectedEmails() {
    const emailLinks = document.querySelectorAll('.email-protected');
    emailLinks.forEach(link => {
      const encoded = link.getAttribute('data-eprot');
      if (encoded) {
        try {
          const decoded = atob(encoded);
          link.setAttribute('href', 'mailto:' + decoded);
          if (link.classList.contains('replace-text')) {
            link.textContent = decoded;
          }
        } catch (err) {
          console.error("Failed to decode email address:", err);
        }
      }
    });
  }

  // ── Gallery Video Fullscreen
  function initGalleryVideoFullscreen() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('click', function(e) {
        const video = item.querySelector('.gallery-video');
        if (video && video.tagName.toLowerCase() === 'video') {
          e.preventDefault();
          
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          }
          
          video.controls = true;
          video.muted = false;

          const handleFullscreenChange = () => {
            if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.msFullscreenElement) {
              video.controls = false;
              video.muted = true;
              video.removeEventListener('fullscreenchange', handleFullscreenChange);
              video.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
              video.removeEventListener('msfullscreenchange', handleFullscreenChange);
            }
          };

          video.addEventListener('fullscreenchange', handleFullscreenChange);
          video.addEventListener('webkitfullscreenchange', handleFullscreenChange);
          video.addEventListener('msfullscreenchange', handleFullscreenChange);
        }
      });
    });
  }

  // ── Init
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  document.addEventListener('DOMContentLoaded', function () {
    initReel();
    initReveal();
    initGalleryCursor();
    initFooterName();
    initProtectedEmails();
    initGalleryVideoFullscreen();
    update(); // run once on load
  });

})();
