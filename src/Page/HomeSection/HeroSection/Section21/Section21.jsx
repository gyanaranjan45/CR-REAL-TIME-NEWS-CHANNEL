import React, { useEffect, useRef, useState } from 'react';
import { newspaperEditions } from './Section21Data';

function useSaved(key, fallback) {
  const [value, set] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  });
  const [error, setError] = useState('');
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setError('');
    } catch {
      setError('Storage unavailable. Changes remain only in this session.');
    }
  }, [key, value]);
  return [value, set, error];
}

function AppleLogo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-label="Apple logo" role="img">
      <path
        fill="currentColor"
        d="M17.05 12.04c.02 3.27 2.87 4.36 2.9 4.37-.02.08-.46 1.56-1.5 3.09-.9 1.32-1.84 2.64-3.31 2.67-1.45.03-1.92-.86-3.58-.86-1.66 0-2.18.83-3.56.89-1.43.05-2.51-1.43-3.42-2.74-1.85-2.68-3.26-7.58-1.36-10.89.94-1.64 2.62-2.68 4.44-2.71 1.39-.03 2.7.94 3.55.94.85 0 2.44-1.16 4.12-.99.71.03 2.68.29 3.95 2.15-.1.06-2.36 1.37-2.33 4.08ZM14.32 4.04c.76-.92 1.28-2.19 1.14-3.46-1.1.04-2.43.73-3.22 1.65-.71.82-1.34 2.13-1.17 3.38 1.23.1 2.49-.63 3.25-1.57Z"
      />
    </svg>
  );
}

const colors = ['#173d8c', '#732d7c', '#174c48', '#a25823'];

/**
 * Authentic Broadsheet Newspaper Sheet Component
 * Automatically adapts between broadsheet multi-column and mobile single-column
 */
function NewspaperSheet({
  edition,
  cardIndex,
  totalCards,
  onSetPage,
  onPrev,
  onNext,
  isFlashing,
  scrollRef,
}) {
  return (
    <div
      className={'newspaper-container ' + (isFlashing ? 'crt-active' : '')}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 28px)',
        background: '#f6f1e8',
        borderTop: '1px solid rgba(0,0,0,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        ref={scrollRef}
        className="newspaper-sheet"
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '8px 12px 6px 12px',
          background: '#f6f1e8',
          color: '#111111',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* 1. TOP MASTHEAD */}
        <header className="np-masthead-wrapper">
          {/* Mobile Single-line Metadata (shown in narrow / mobile views) */}
          <div className="np-masthead-mobile-meta">
            <span>THE WORLD’S DAILY NEWSPAPER</span>
            <span>•</span>
            <span>{edition.date}</span>
            <span>•</span>
            <span>{edition.volume}</span>
          </div>

          <div className="np-masthead-grid">
            {/* Left box: Authentic double-border title tag */}
            <div className="np-masthead-left">
              <div className="np-masthead-box">
                <div className="np-masthead-box-top">THE WORLD’S</div>
                <div className="np-masthead-box-bottom">DAILY NEWSPAPER</div>
              </div>
            </div>

            {/* Center: Globe + Global Bulletin + Nav */}
            <div className="np-masthead-center">
              <div className="np-title-row">
                <svg
                  className="np-globe-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>

                <h1 className="np-masthead-title">Global Bulletin</h1>
              </div>

              <nav className="np-masthead-nav">
                <span onClick={() => onSetPage(1)} className="np-nav-link">INTERNATIONAL NEWS</span>
                <span className="np-nav-sep">•</span>
                <span onClick={() => onSetPage(3)} className="np-nav-link">POLITICS</span>
                <span className="np-nav-sep">•</span>
                <span onClick={() => onSetPage(5)} className="np-nav-link">BUSINESS</span>
                <span className="np-nav-sep">•</span>
                <span onClick={() => onSetPage(7)} className="np-nav-link">TECHNOLOGY</span>
                <span className="np-nav-sep">•</span>
                <span onClick={() => onSetPage(6)} className="np-nav-link">CULTURE</span>
                <span className="np-nav-sep">•</span>
                <span onClick={() => onSetPage(8)} className="np-nav-link">SPORTS</span>
              </nav>
            </div>

            {/* Right box: Date / Vol / Edition */}
            <div className="np-masthead-right">
              <div className="np-date-text">{edition.date}</div>
              <div className="np-vol-text">{edition.volume}</div>
              <div className="np-edition-tag">{edition.editionTag}</div>
            </div>
          </div>
        </header>

        {/* 2. BREAKING NEWS BANNER */}
        <div className="np-breaking-bar">
          <div className="np-breaking-badge">BREAKING NEWS</div>
          <span className="np-breaking-slashes">//</span>
          <div className="np-breaking-ticker">{edition.breakingNews}</div>
        </div>

        {/* 3. MAIN NEWSPAPER CONTENT GRID (Left Lead + Bottom Sub-stories + Right Sidebar) */}
        <div className="np-main-grid">
          {/* Left Column: Lead Story + Bottom 2 Sub-stories */}
          <div className="np-left-flow">
            {/* Lead Headline */}
            <h2 className="np-lead-headline">{edition.leadStory.headline}</h2>

            {/* Subheadline */}
            <p className="np-lead-subhead">{edition.leadStory.subhead}</p>

            {/* Lead Story: 3 sub-columns in Desktop / iPad; Stacked in Mobile */}
            <div className="np-lead-story-grid">
              {/* Byline & Col 1 */}
              <div className="np-lead-col1">
                <div className="np-byline-box">
                  <strong className="np-byline-author">{edition.leadStory.byline}</strong>
                  <br />
                  <span className="np-byline-role">{edition.leadStory.bylineTitle}</span>
                </div>

                <p className="np-lead-text">
                  <strong className="np-dateline">{edition.leadStory.dateline}</strong>{' '}
                  {edition.leadStory.col1}
                </p>
              </div>

              {/* Col 2 */}
              <div className="np-lead-col2">
                <p className="np-lead-text">{edition.leadStory.col2}</p>

                <div
                  onClick={() => onSetPage(edition.leadStory.jumpPage)}
                  className="np-jump-link"
                >
                  Continued on Page {edition.leadStory.jumpPage} ▶
                </div>
              </div>

              {/* Col 3: Image with Caption */}
              <div className="np-lead-img-col">
                <img
                  src={edition.leadStory.image}
                  alt={edition.leadStory.headline}
                  className="np-hero-img"
                  loading="lazy"
                />
                <p className="np-caption">
                  {edition.leadStory.caption}{' '}
                  <span className="np-credit">{edition.leadStory.credit}</span>
                </p>
              </div>
            </div>

            {/* Horizontal Newspaper Rule */}
            <div className="np-divider" />

            {/* Bottom 2 Sub-Stories */}
            <div className="np-bottom-grid">
              {/* Sub Story 1 */}
              <div className="np-bottom-sub1">
                <div className="np-sub-section-tag">{edition.subStories[0]?.section}</div>
                <div className="np-sub-card-row">
                  <img
                    src={edition.subStories[0]?.image}
                    alt={edition.subStories[0]?.section}
                    className="np-sub-thumb"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="np-sub-headline">{edition.subStories[0]?.headline}</h4>
                    <p className="np-sub-text">
                      {edition.subStories[0]?.text}{' '}
                      <span
                        onClick={() => onSetPage(edition.subStories[0]?.page)}
                        className="np-page-jump"
                      >
                        Page {edition.subStories[0]?.page}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub Story 2 (with vertical left border on wide view) */}
              <div className="np-bottom-sub2">
                <div className="np-sub-section-tag">{edition.subStories[1]?.section}</div>
                <div className="np-sub-card-row">
                  <img
                    src={edition.subStories[1]?.image}
                    alt={edition.subStories[1]?.section}
                    className="np-sub-thumb"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="np-sub-headline">{edition.subStories[1]?.headline}</h4>
                    <p className="np-sub-text">
                      {edition.subStories[1]?.text}{' '}
                      <span
                        onClick={() => onSetPage(edition.subStories[1]?.page)}
                        className="np-page-jump"
                      >
                        Page {edition.subStories[1]?.page}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: NEWS BRIEFS Sidebar */}
          <aside className="np-sidebar">
            <div className="np-sidebar-header">NEWS BRIEFS</div>

            {edition.newsBriefs.map((brief, bIdx) => (
              <div
                key={bIdx}
                className={`np-brief-card ${bIdx === edition.newsBriefs.length - 1 ? 'is-last' : ''}`}
              >
                <h5 className="np-brief-title">{brief.headline}</h5>
                <p className="np-brief-text">
                  {brief.text}{' '}
                  <span onClick={() => onSetPage(brief.page)} className="np-page-jump">
                    Page {brief.page}
                  </span>
                </p>
              </div>
            ))}
          </aside>
        </div>

        {/* 4. BOTTOM NEWSPAPER FOOTER */}
        <footer className="np-footer">
          <div className="np-footer-tag">INTERNATIONAL EDITION</div>

          <div className="np-footer-sections">
            <span className="np-footer-total">TODAY’S EDITION: {totalCards} PAGES</span>
            <span className="np-footer-pipe">|</span>
            <span
              onClick={() => onSetPage(1)}
              className={`np-section-tab ${cardIndex < 4 ? 'is-active' : ''}`}
            >
              News 1–4
            </span>
            <span
              onClick={() => onSetPage(5)}
              className={`np-section-tab ${cardIndex === 4 || cardIndex === 5 ? 'is-active' : ''}`}
            >
              Business 5–6
            </span>
            <span
              onClick={() => onSetPage(7)}
              className={`np-section-tab ${cardIndex === 6 ? 'is-active' : ''}`}
            >
              Technology 7
            </span>
            <span
              onClick={() => onSetPage(8)}
              className={`np-section-tab ${cardIndex === 7 ? 'is-active' : ''}`}
            >
              Health 8
            </span>
          </div>

          <div className="np-footer-pagination">
            <button
              onClick={onPrev}
              disabled={cardIndex === 0 || isFlashing}
              className="np-arrow-btn"
              title="Previous Page"
              aria-label="Previous Page"
            >
              ◀
            </button>
            <span className="np-page-indicator">
              PAGE {cardIndex + 1} OF {totalCards}
            </span>
            <button
              onClick={onNext}
              disabled={cardIndex >= totalCards - 1 || isFlashing}
              className="np-arrow-btn"
              title="Next Page"
              aria-label="Next Page"
            >
              ▶
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
function DataAnalyticsBusinessIntelligenceServices() {
  const [angle, setAngle] = useState({ x: 0, y: 0 });
  const [locked, setLocked] = useState(false);
  const [power, setPower] = useState(false);
  const [now, setNow] = useState(new Date());
  const [boot, setBoot] = useState('flip');
  const [batteryLevel, setBatteryLevel] = useState(100);
  const deviceRef = useRef(null);
  const stageRef = useRef(null);

  // Automatic Device Mode: Desktop/Laptop/Tablet => iPad | Mobile Phone => iPhone
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const deviceMode = isMobile ? 'iphone' : 'ipad';

  // Settings for screen
  const [settings, _setSettings, settingsError] = useSaved('ipad-settings', {
    brightness: 100,
    wallpaper: 0,
    dark: false,
  });

  // Newspaper Page navigation & animation states
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const scrollRef = useRef(null);

  // 3D Pointer / Touch drag handling
  const isDraggingRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const startAngleRef = useRef({ x: 0, y: 0 });

  const totalCards = (newspaperEditions && newspaperEditions.length) || 8;
  const currentEdition = (newspaperEditions && newspaperEditions[cardIndex]) || newspaperEditions[0];

  const setPage = (p) => {
    if (p < 1 || p > totalCards || isFlashing) return;
    setIsFlashing(true);
    setTimeout(() => {
      setCardIndex(p - 1);
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, 220);
    setTimeout(() => setIsFlashing(false), 460);
  };

  const handlePrev = () => {
    if (cardIndex <= 0 || isFlashing) return;
    setPage(cardIndex);
  };

  const handleNext = () => {
    if (cardIndex >= totalCards - 1 || isFlashing) return;
    setPage(cardIndex + 2);
  };

  // Clock
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Battery status
  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then((b) => {
        const u = () => setBatteryLevel(Math.round(b.level * 100));
        u();
        b.addEventListener('levelchange', u);
      });
    }
  }, []);

  // 3D Device entry animation
  useEffect(() => {
    const node = deviceRef.current;
    if (!node) return;
    const animation = node.animate(
      [
        { transform: 'translateY(120vh) rotateX(60deg) rotateY(0deg) scale(0.2)' },
        { transform: 'translateY(-10vh) rotateX(-20deg) rotateY(220deg) scale(0.85)', offset: 0.65 },
        { transform: 'translateY(0px) rotateX(0deg) rotateY(360deg) scale(1)' },
      ],
      { duration: 4000, easing: 'cubic-bezier(.22,.68,.18,1)', fill: 'both' }
    );
    let timer;
    animation.onfinish = () => {
      animation.cancel();
      setBoot('logo');
      setPower(true);
      timer = setTimeout(() => setBoot('ready'), 900);
    };
    return () => {
      animation.onfinish = null;
      animation.cancel();
      clearTimeout(timer);
    };
  }, []);

  // 3D Tilt interactive drag listeners
  const onPointerDown = (e) => {
    if (e.target.closest('button, a, input, .np-nav-link, .np-page-jump, .np-jump-link')) return;
    isDraggingRef.current = true;
    startPosRef.current = { x: e.clientX, y: e.clientY };
    startAngleRef.current = { ...angle };
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startPosRef.current.x;
    const dy = e.clientY - startPosRef.current.y;
    const nextX = Math.max(-26, Math.min(26, startAngleRef.current.x - dy * 0.14));
    const nextY = Math.max(-36, Math.min(36, startAngleRef.current.y + dx * 0.16));
    setAngle({ x: Math.round(nextX), y: Math.round(nextY) });
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
  };

  const resetTilt = () => setAngle({ x: 0, y: 0 });

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700;1,900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&display=swap');

.product-scene button, .product-scene input, .product-scene textarea {
  font: inherit;
}

.product-scene button {
  cursor: pointer;
}

.product-scene button:focus-visible {
  outline: 2px solid #0071e3;
  outline-offset: 2px;
}

/* Base Scene */
.product-scene {
  min-height: 720px;
  width: 100%;
  max-width: 100vw;
  padding: 24px 16px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f3f5;
  overflow-x: hidden;
  overflow-y: auto;
}

.workspace {
  display: block;
  width: 100%;
  max-width: 100vw;
  margin: 0;
  overflow: hidden;
}

/* 3D Stage */
.stage {
  min-height: 600px;
  perspective: 1800px;
  touch-action: pan-y;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: visible;
  user-select: none;
}

.stage:after {
  content: '';
  position: absolute;
  left: 50%;
  top: calc(50% + 240px);
  width: 580px;
  height: 36px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(15, 23, 42, 0.18), transparent 70%);
  pointer-events: none;
  z-index: 0;
  transition: all 0.3s ease;
}

/* Responsive Device Scaler - Auto smooth scale for Desktop & Mobile */
.device-scaler {
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-out;
}

.device-scaler.mode-ipad {
  transform: scale(1.08);
}

.device-scaler.mode-iphone {
  transform: scale(0.92);
}

/* Responsive Breakpoints for Device Scaler */
@media (max-width: 1100px) {
  .device-scaler.mode-ipad { transform: scale(0.92); }
  .stage { min-height: 520px; }
  .stage:after { width: 480px; top: calc(50% + 200px); }
}

@media (max-width: 840px) {
  .device-scaler.mode-ipad { transform: scale(0.74); }
  .stage { min-height: 440px; }
  .stage:after { width: 380px; top: calc(50% + 160px); }
}

@media (max-width: 767px) {
  .product-scene { padding: 12px 6px 24px; }
  .stage { min-height: 620px; }
  .stage:after { width: 280px; top: calc(50% + 300px); }
}

@media (max-width: 540px) {
  .device-scaler.mode-iphone { transform: scale(0.84); }
  .stage { min-height: 580px; }
  .stage:after { width: 250px; top: calc(50% + 270px); }
}

@media (max-width: 440px) {
  .device-scaler.mode-iphone { transform: scale(0.76); }
  .stage { min-height: 540px; }
  .stage:after { width: 220px; top: calc(50% + 250px); }
}

@media (max-width: 375px) {
  .device-scaler.mode-iphone { transform: scale(0.68); }
  .stage { min-height: 500px; }
  .stage:after { width: 190px; top: calc(50% + 230px); }
}

@media (max-width: 330px) {
  .device-scaler.mode-iphone { transform: scale(0.60); }
  .stage { min-height: 450px; }
}

/* Device Base Styles */
.device {
  position: relative;
  transform-style: preserve-3d;
  flex-shrink: 0;
  will-change: transform;
  z-index: 1;
  cursor: grab;
  transition: transform 0.1s ease-out;
}

.device:active {
  cursor: grabbing;
}

/* iPad Mode (Desktop & Tablet) */
.device.mode-ipad {
  width: 760px;
  height: 530px;
}
.device.mode-ipad .ipad-only { display: block !important; }
.device.mode-ipad .iphone-only { display: none !important; }

.device.mode-ipad .chassis {
  position: absolute;
  inset: 0;
  border-radius: 35px;
  border: 1px solid #a4a7ab;
  background: linear-gradient(120deg, #f0f1f3, #aab0b7 25%, #fafbfc 55%, #929aa4);
  pointer-events: none;
}

.device.mode-ipad .front {
  position: absolute;
  inset: 0;
  border-radius: 35px;
  backface-visibility: hidden;
  transform: translateZ(6px);
  background: #07080a;
  border: 2px solid #bac0c6;
  padding: 24px;
  box-shadow: inset 0 0 0 1px #282b30;
}

.device.mode-ipad .back {
  position: absolute;
  inset: 0;
  border-radius: 35px;
  backface-visibility: hidden;
  transform: translateZ(-6px) rotateY(180deg);
  background: linear-gradient(115deg, #c3c7cb, #e5e7e9 43%, #cdd1d5 80%, #bcc2c8);
  border: 1px solid #aab1b8;
  color: #757f8a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.device.mode-ipad .back-logo {
  width: 72px;
  height: 84px;
  color: #62666c;
  filter: drop-shadow(0 1px 1px #fff9);
}

.device.mode-ipad .back-label {
  position: absolute;
  bottom: 66px;
  font-size: 15px;
  letter-spacing: 0;
  color: #73777c;
}

.device.mode-ipad .connector {
  position: absolute;
  bottom: 28px;
  font-size: 8px;
  letter-spacing: 7px;
  color: #979b9f;
}

.device.mode-ipad .camera {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 80px;
  height: 88px;
  border-radius: 19px;
  background: linear-gradient(145deg, #b5bbc0, #ced3d7);
  border: 1px solid #a6adb4;
  box-shadow: 0 2px 3px rgba(96,102,112,0.4);
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
}

.device.mode-ipad .camera i {
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: radial-gradient(circle, #163954 10%, #030509 33%, #24303d 50%, #070809 68%);
  border: 2px solid #626c77;
  box-shadow: 0 0 0 1px #dce1e5, inset 0 0 2px #fff5;
}

.device.mode-ipad .camera small {
  width: 15px;
  height: 15px;
  background: #ddd5c1;
  border-radius: 50%;
}

.device.mode-ipad .lens {
  position: absolute;
  left: 50%;
  top: 11px;
  width: 5px;
  height: 5px;
  background: radial-gradient(circle, #173f6f, #04070c);
  border-radius: 50%;
}

.device.mode-ipad .hardware-power {
  position: absolute;
  right: 45px;
  top: -5px;
  width: 50px;
  height: 4px;
  background: #bac4ce;
  border-radius: 3px;
  border: none;
}

/* iPhone Mode (Mobile Phone View) */
.device.mode-iphone {
  width: 360px !important;
  height: 720px !important;
}
.device.mode-iphone .ipad-only { display: none !important; }
.device.mode-iphone .iphone-only { display: block !important; }

.device.mode-iphone .chassis {
  position: absolute;
  inset: 0;
  border-radius: 54px;
  border: 1.5px solid #333a42;
  background: linear-gradient(125deg, #2b3036, #1c1f24 25%, #3d444d 55%, #181a1d);
  pointer-events: none;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
}

.device.mode-iphone .front {
  position: absolute;
  inset: 0;
  border-radius: 54px;
  backface-visibility: hidden;
  transform: translateZ(8px);
  background: #000000;
  border: 2px solid #23272d;
  padding: 13px;
  box-shadow: inset 0 0 0 1px #0a0b0d;
}

.device.mode-iphone .back {
  position: absolute;
  inset: 0;
  border-radius: 54px;
  backface-visibility: hidden;
  transform: translateZ(-8px) rotateY(180deg);
  background: linear-gradient(125deg, #23272d, #191c20 40%, #2f343c 75%, #1c1f23);
  border: 1px solid #383f48;
  color: #8b949e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.device.mode-iphone .back-logo {
  width: 54px;
  height: 64px;
  color: #454d58;
  filter: drop-shadow(0 1px 1px rgba(255,255,255,0.08));
}

.device.mode-iphone .back-label {
  position: absolute;
  bottom: 50px;
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #636d7a;
  font-weight: 500;
}

/* iPhone Triple Camera Module */
.iphone-camera {
  position: absolute;
  top: 18px;
  left: 18px;
  width: 140px;
  height: 145px;
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(0,0,0,0.3));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 4px 14px rgba(0,0,0,0.45);
  backdrop-filter: blur(8px);
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}

.lens-ring {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: radial-gradient(circle, #09131d 20%, #030508 45%, #182535 70%);
  border: 3.5px solid #4a5462;
  box-shadow: 0 0 0 1px #222933, inset 0 0 4px rgba(255,255,255,0.3);
  position: relative;
}
.lens-ring::after {
  content: '';
  position: absolute;
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle, #38bdf8, #0369a1);
  opacity: 0.75;
}

.flash-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fef08a;
  border: 2px solid #ca8a04;
  align-self: center;
  justify-self: center;
}

.lidar-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #030712;
  border: 1.5px solid #374151;
  align-self: center;
  justify-self: center;
}

/* Dynamic Island */
.dynamic-island {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 108px;
  height: 26px;
  background: #000000;
  border-radius: 20px;
  z-index: 35;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  box-shadow: 0 0 1px 1px rgba(255,255,255,0.06);
}

.island-lens {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: radial-gradient(circle, #1e293b, #020617);
  border: 1px solid #334155;
}

/* iPhone Titanium Edge Buttons */
.iphone-buttons {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.btn-action {
  position: absolute;
  left: -4px;
  top: 110px;
  width: 4px;
  height: 26px;
  background: #3e4550;
  border-radius: 2px 0 0 2px;
  border: none;
}

.btn-vol-up {
  position: absolute;
  left: -4px;
  top: 154px;
  width: 4px;
  height: 48px;
  background: #3e4550;
  border-radius: 2px 0 0 2px;
  border: none;
}

.btn-vol-down {
  position: absolute;
  left: -4px;
  top: 216px;
  width: 4px;
  height: 48px;
  background: #3e4550;
  border-radius: 2px 0 0 2px;
  border: none;
}

.btn-power-side {
  position: absolute;
  right: -4px;
  top: 170px;
  width: 4px;
  height: 64px;
  background: #3e4550;
  border-radius: 0 2px 2px 0;
  border: none;
}

/* Screen Core */
.screen {
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: auto;
  background-image: radial-gradient(ellipse at 70% 120%, rgba(255, 192, 202, 0.65), transparent 65%),
    radial-gradient(ellipse at 10% 0%, rgba(105, 211, 255, 0.65), transparent 65%),
    conic-gradient(from 140deg at 65% 45%, transparent, rgba(12, 25, 86, 0.45), rgba(119, 130, 216, 0.35), transparent);
  color: white;
}

.device.mode-iphone .screen {
  border-radius: 42px;
}

.status {
  height: 28px;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  position: relative;
  z-index: 25;
}

.device.mode-iphone .status {
  padding: 8px 24px;
  font-size: 11px;
}

.status button {
  background: none;
  border: none;
  color: inherit;
  font-size: 9.5px;
}

.home-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 125px;
  height: 4px;
  border: 0;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.6);
  z-index: 30;
}

.device.mode-iphone .home-indicator {
  bottom: 6px;
  width: 135px;
  height: 4.5px;
}

.off, .lock {
  position: absolute;
  inset: 0;
  width: 100%;
  background: #03060a;
  border: 0;
  color: white;
}

.off {
  background: #000;
  font-size: 13px;
  color: #697685;
}

.lock {
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lock h2 {
  font-size: 56px;
  margin: 12px 0;
  font-weight: 300;
}

.lock p {
  font-size: 14px;
}

.lock small {
  margin-top: 80px;
  color: #94a3b8;
}

.boot-screen {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: #000;
  z-index: 40;
}

.boot-logo {
  width: 55px;
  height: 65px;
  color: #fff;
  animation: logo-appear 0.6s ease both;
}

.save-error {
  position: fixed;
  bottom: 12px;
  font-size: 12px;
  color: #922;
}

@keyframes logo-appear {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ==========================================================================
   AUTHENTIC NEWSPAPER STYLING & CONTAINER QUERIES
   ========================================================================== */

.newspaper-container {
  container-type: inline-size;
  container-name: newspaper;
}

.newspaper-sheet::-webkit-scrollbar {
  width: 5px;
}
.newspaper-sheet::-webkit-scrollbar-track {
  background: #ede6d8;
}
.newspaper-sheet::-webkit-scrollbar-thumb {
  background: #c5bcae;
  border-radius: 3px;
}

/* Masthead Styles */
.np-masthead-wrapper {
  border-top: 3px double #1a1a1a;
  border-bottom: 3px double #1a1a1a;
  padding: 5px 0 4px 0;
  margin-bottom: 4px;
}

.np-masthead-mobile-meta {
  display: none;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 7.5px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #333333;
  justify-content: center;
  gap: 6px;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(0,0,0,0.12);
  margin-bottom: 4px;
}

.np-masthead-grid {
  display: grid;
  grid-template-columns: 120px 1fr 135px;
  align-items: center;
  gap: 8px;
}

.np-masthead-left {
  text-align: center;
}

.np-masthead-box {
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
  padding: 2.5px 0;
}

.np-masthead-box-top {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 7.5px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.15;
  color: #222222;
}

.np-masthead-box-bottom {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.15;
  color: #111111;
}

.np-masthead-center {
  text-align: center;
}

.np-title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 2px;
}

.np-globe-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.np-masthead-title {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.5px;
  margin: 0;
  line-height: 1;
  color: #111111;
}

.np-masthead-nav {
  font-size: 7px;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #222222;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  line-height: 1.1;
}

.np-nav-link {
  cursor: pointer;
  transition: color 0.15s;
}
.np-nav-link:hover {
  color: #b81414;
}

.np-nav-sep {
  color: #666666;
}

.np-masthead-right {
  text-align: right;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 7.8px;
  line-height: 1.25;
  color: #111111;
}

.np-date-text {
  font-weight: 800;
  letter-spacing: 0.4px;
}

.np-vol-text {
  letter-spacing: 0.2px;
  font-size: 7.2px;
}

.np-edition-tag {
  font-weight: 700;
  letter-spacing: 0.4px;
  font-size: 6.8px;
}

/* Breaking News Banner */
.np-breaking-bar {
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
  padding: 2.5px 0;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.np-breaking-badge {
  background: #b81414;
  color: #ffffff;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 9px;
  font-weight: 800;
  font-style: italic;
  letter-spacing: 0.6px;
  padding: 1.5px 12px 1.5px 7px;
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 100%, 0 100%);
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.np-breaking-slashes {
  color: #b81414;
  font-weight: 900;
  font-style: italic;
  font-size: 11px;
  line-height: 1;
}

.np-breaking-ticker {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 10.5px;
  font-weight: 700;
  font-style: italic;
  color: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.1px;
}

/* Main Content Grid */
.np-main-grid {
  display: grid;
  grid-template-columns: 1fr 165px;
  gap: 10px;
  flex: 1;
}

.np-left-flow {
  display: flex;
  flex-direction: column;
}

.np-lead-headline {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 22px;
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.4px;
  margin: 0 0 3px 0;
  color: #111111;
}

.np-lead-subhead {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 10.5px;
  font-style: italic;
  line-height: 1.28;
  color: #262626;
  margin: 0 0 5px 0;
}

.np-lead-story-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr 1.3fr;
  gap: 8px;
  align-items: start;
}

.np-byline-box {
  font-size: 7.8px;
  font-family: 'Newsreader', Georgia, serif;
  color: #333333;
  margin-bottom: 3px;
  line-height: 1.15;
}

.np-byline-author {
  color: #111111;
  font-size: 8.2px;
}

.np-byline-role {
  font-style: italic;
  color: #555555;
}

.np-lead-text {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 8.5px;
  line-height: 1.38;
  text-align: justify;
  color: #1a1a1a;
  margin: 0;
  white-space: pre-line;
}

.np-dateline {
  color: #111111;
}

.np-jump-link {
  margin-top: 5px;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 7.8px;
  font-weight: 700;
  font-style: italic;
  color: #b81414;
  cursor: pointer;
}
.np-jump-link:hover {
  text-decoration: underline;
}

.np-hero-img {
  width: 100%;
  height: 102px;
  object-fit: cover;
  display: block;
  border: 1px solid #1a1a1a;
}

.np-caption {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 7.2px;
  font-style: italic;
  line-height: 1.22;
  color: #333333;
  margin: 2.5px 0 0 0;
}

.np-credit {
  font-style: normal;
  font-weight: 700;
  font-size: 6.2px;
  letter-spacing: 0.3px;
  color: #111111;
}

.np-divider {
  border-top: 1px solid #1a1a1a;
  margin: 6px 0 5px 0;
}

/* Bottom Sub-Stories */
.np-bottom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
}

.np-sub-section-tag {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 7.8px;
  font-weight: 800;
  color: #b81414;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.np-sub-card-row {
  display: flex;
  gap: 6px;
  align-items: flex-start;
}

.np-sub-thumb {
  width: 52px;
  height: 46px;
  object-fit: cover;
  border: 1px solid #1a1a1a;
  flex-shrink: 0;
}

.np-sub-headline {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 9.8px;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 2px 0;
  color: #111111;
}

.np-sub-text {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 7.6px;
  line-height: 1.3;
  color: #2b2b2b;
  margin: 0;
}

.np-page-jump {
  font-style: italic;
  font-weight: 700;
  color: #111111;
  cursor: pointer;
  text-decoration: underline;
}

.np-bottom-sub2 {
  padding-left: 8px;
  border-left: 1px solid #1a1a1a;
}

/* Sidebar */
.np-sidebar {
  padding-left: 9px;
  border-left: 1px solid #1a1a1a;
  display: flex;
  flex-direction: column;
}

.np-sidebar-header {
  background: #b81414;
  color: #ffffff;
  text-align: center;
  padding: 2.5px 0;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.np-brief-card {
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #d4cdc2;
}

.np-brief-card.is-last {
  border-bottom: none;
}

.np-brief-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 9.3px;
  font-weight: 800;
  line-height: 1.18;
  margin: 0 0 2px 0;
  color: #111111;
}

.np-brief-text {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 7.6px;
  line-height: 1.32;
  color: #2b2b2b;
  margin: 0;
}

/* Footer */
.np-footer {
  border-top: 3px double #1a1a1a;
  margin-top: auto;
  padding-top: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 7.5px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #1a1a1a;
  text-transform: uppercase;
}

.np-footer-sections {
  display: flex;
  gap: 8px;
  align-items: center;
}

.np-section-tab {
  cursor: pointer;
  transition: color 0.15s;
}
.np-section-tab.is-active {
  font-weight: 900;
  color: #b81414;
}

.np-footer-pagination {
  display: flex;
  align-items: center;
  gap: 5px;
}

.np-arrow-btn {
  background: none;
  border: none;
  padding: 0 3px;
  font-size: 8.5px;
  color: #111111;
}
.np-arrow-btn:disabled {
  opacity: 0.25;
  cursor: default;
}

.np-page-indicator {
  font-weight: 800;
}

/* ==========================================================================
   CONTAINER QUERIES FOR NARROW NEWSPAPER (iPhone / Mobile view <= 580px)
   ========================================================================== */
@container newspaper (max-width: 580px) {
  .newspaper-sheet {
    padding: 10px 10px 10px 10px !important;
  }
  .np-masthead-grid {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 4px !important;
  }
  .np-masthead-left, .np-masthead-right {
    display: none !important;
  }
  .np-masthead-mobile-meta {
    display: flex !important;
  }
  .np-masthead-title {
    font-size: 24px !important;
  }
  .np-globe-icon {
    width: 22px !important;
    height: 22px !important;
  }
  .np-masthead-nav {
    font-size: 6.8px !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 4px !important;
  }
  .np-breaking-ticker {
    font-size: 9.5px !important;
  }
  .np-main-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 12px !important;
  }
  .np-lead-headline {
    font-size: 18px !important;
    line-height: 1.15 !important;
  }
  .np-lead-story-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
  }
  .np-lead-img-col {
    order: -1 !important;
    width: 100% !important;
  }
  .np-hero-img {
    height: 135px !important;
    width: 100% !important;
  }
  .np-lead-text {
    font-size: 10.5px !important;
    line-height: 1.48 !important;
  }
  .np-jump-link {
    font-size: 9.5px !important;
  }
  .np-bottom-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 10px !important;
  }
  .np-bottom-sub2 {
    padding-left: 0 !important;
    border-left: none !important;
    border-top: 1px solid #1a1a1a !important;
    padding-top: 8px !important;
  }
  .np-sub-headline {
    font-size: 11px !important;
  }
  .np-sub-text {
    font-size: 9.5px !important;
    line-height: 1.38 !important;
  }
  .np-sidebar {
    padding-left: 0 !important;
    border-left: none !important;
    border-top: 2px solid #1a1a1a !important;
    padding-top: 8px !important;
  }
  .np-brief-title {
    font-size: 11px !important;
  }
  .np-brief-text {
    font-size: 9.5px !important;
    line-height: 1.38 !important;
  }
  .np-footer {
    flex-direction: column !important;
    gap: 6px !important;
    text-align: center !important;
    padding-top: 6px !important;
  }
  .np-footer-sections {
    flex-wrap: wrap !important;
    justify-content: center !important;
    font-size: 7.2px !important;
  }
}

/* Fallback Media Query for mobile screen widths <= 640px */
@media (max-width: 640px) {
  .np-masthead-mobile-meta { display: flex; }
  .np-masthead-left, .np-masthead-right { display: none; }
  .np-masthead-grid { display: flex; flex-direction: column; align-items: center; }
  .np-masthead-title { font-size: 24px; }
  .np-main-grid { display: flex; flex-direction: column; }
}

/* CRT Turn Page Animation */
.crt-active {
  animation: screenCloseOpen 0.44s ease-in-out forwards;
  transform-origin: center center;
}

@keyframes screenCloseOpen {
  0% { transform: scale(1); opacity: 1; filter: brightness(1); }
  25% { transform: scaleY(0.008) scaleX(1); opacity: 0.95; filter: brightness(2.5); }
  50% { transform: scaleY(0.008) scaleX(0); opacity: 0; filter: brightness(3); }
  75% { transform: scaleY(0.008) scaleX(1); opacity: 0.95; filter: brightness(2.5); }
  100% { transform: scale(1); opacity: 1; filter: brightness(1); }
}
`,
        }}
      />

      <main className="product-scene">
        {/* Clean Minimal Header */}
        <header
          style={{
            width: '100%',
            maxWidth: '920px',
            textAlign: 'center',
            margin: '0 auto 12px auto',
            padding: '0 16px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: '900',
              letterSpacing: '-1px',
              color: '#0f172a',
              margin: '0 0 4px 0',
              lineHeight: 1.2,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            The Global Bulletin
          </h1>
          <p
            style={{
              fontSize: 'clamp(12px, 1.6vw, 14.5px)',
              lineHeight: 1.5,
              color: '#475569',
              maxWidth: '820px',
              margin: '0 auto',
              fontFamily: "'Newsreader', Georgia, serif",
              fontStyle: 'italic',
            }}
          >
            The World’s Daily Newspaper — 3D Interactive Edition
          </p>
        </header>

        {/* 3D Workspace */}
        <div className="workspace">
          <section
            ref={stageRef}
            className="stage"
            aria-label="Interactive 3D Device Canvas"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onDoubleClick={resetTilt}
            title="Drag to tilt 3D device • Double click to reset angle"
          >
            {/* Responsive Device Scaler - Desktop/Tablet automatically renders iPad, Mobile Phone automatically renders iPhone */}
            <div className={`device-scaler mode-${deviceMode}`}>
              <div
                ref={deviceRef}
                className={`device mode-${deviceMode}`}
                style={{ transform: `rotateX(${angle.x}deg) rotateY(${angle.y}deg)` }}
              >
                {/* 3D Layered Chassis */}
                {Array.from({ length: 11 }, (_, i) => (
                  <div key={i} className="chassis" style={{ transform: `translateZ(${i - 5}px)` }} />
                ))}

                {/* Back Plate */}
                <div className="back">
                  {/* iPad Dual Camera (Desktop / Tablet) */}
                  <div className="camera ipad-only">
                    <i />
                    <i />
                    <small />
                  </div>

                  {/* iPhone Triple Camera (Mobile) */}
                  <div className="iphone-camera iphone-only">
                    <div className="lens-ring" />
                    <div className="lens-ring" />
                    <div className="lens-ring" />
                    <div className="flash-dot" />
                    <div className="lidar-dot" />
                  </div>

                  <AppleLogo className="back-logo" />
                  <span className="back-label ipad-only">iPad</span>
                  <span className="back-label iphone-only">iPhone</span>
                  <div className="connector ipad-only">● ● ●</div>
                </div>

                {/* Front Plate */}
                <div className="front">
                  {/* iPad Power Button */}
                  <button
                    aria-label="Power button"
                    className="hardware-power ipad-only"
                    onClick={() => {
                      if (boot === 'ready') setPower((p) => !p);
                    }}
                  />

                  {/* iPhone Hardware Buttons */}
                  <div className="iphone-buttons iphone-only">
                    <button className="btn-action" aria-label="Action button" />
                    <button className="btn-vol-up" aria-label="Volume up" />
                    <button className="btn-vol-down" aria-label="Volume down" />
                    <button
                      className="btn-power-side"
                      aria-label="Power button"
                      onClick={() => {
                        if (boot === 'ready') setPower((p) => !p);
                      }}
                    />
                  </div>

                  {/* iPad Lens */}
                  <div className="lens ipad-only" />

                  {/* iPhone Dynamic Island */}
                  <div className="dynamic-island iphone-only">
                    <div className="island-lens" />
                  </div>

                  {/* Interactive Screen */}
                  <div
                    className={`screen ${settings.dark ? 'dark' : ''}`}
                    style={{
                      pointerEvents: boot === 'ready' ? 'auto' : 'none',
                      filter: `brightness(${settings.brightness}%)`,
                      backgroundColor: boot === 'ready' ? colors[settings.wallpaper] : '#000',
                      backgroundImage: boot === 'ready' ? undefined : 'none',
                    }}
                  >
                    {boot === 'flip' ? (
                      <div className="boot-screen" />
                    ) : boot === 'logo' ? (
                      <div className="boot-screen">
                        <AppleLogo className="boot-logo" />
                      </div>
                    ) : !power ? (
                      <button className="off" onClick={() => setPower(true)}>
                        Tap to wake
                      </button>
                    ) : locked ? (
                      <button className="lock" onClick={() => setLocked(false)}>
                        <span>⌑</span>
                        <h2>
                          {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </h2>
                        <p>
                          {now.toLocaleDateString(undefined, {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <small>Tap to unlock</small>
                      </button>
                    ) : (
                      <>
                        {/* Status Bar */}
                        <div className="status">
                          <span>
                            {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            <span className="ipad-only">
                              {' '}
                              &nbsp; {now.toLocaleDateString([], { month: 'short', day: 'numeric' })}
                            </span>
                          </span>
                          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <span>
                              <span className="ipad-only">▰ Wi-Fi · </span>
                              {batteryLevel}% ▣
                            </span>
                            <button
                              aria-label="Lock screen"
                              onClick={() => setLocked(true)}
                              className="ipad-only"
                              style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '4px',
                                padding: '2px 6px',
                              }}
                            >
                              🔒 Lock
                            </button>
                          </div>
                        </div>

                        {/* Inside Newspaper Sheet */}
                        <NewspaperSheet
                          edition={currentEdition}
                          cardIndex={cardIndex}
                          totalCards={totalCards}
                          onSetPage={setPage}
                          onPrev={handlePrev}
                          onNext={handleNext}
                          isFlashing={isFlashing}
                          scrollRef={scrollRef}
                        />

                        {/* Home Bar */}
                        <button className="home-indicator" aria-label="Go home" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {settingsError && (
          <p className="save-error" role="alert">
            {settingsError}
          </p>
        )}
      </main>
    </>
  );
}

export const Section21 = () => {
  return (
    <section
      id="section-21"
      className="w-full relative select-none overflow-hidden bg-[#f3f3f5] border-b border-slate-300"
    >
      <DataAnalyticsBusinessIntelligenceServices />
    </section>
  );
};

export default Section21;
