import React, { useState, useEffect, useMemo } from 'react';
import { clockTimelineData } from './Section22Data';

function Clock() {
  // Real-time date object updated via requestAnimationFrame for smooth live clock motion
  const [time, setTime] = useState(new Date());

  // Slide-out animation key (increments to replay on demand)
  const [animationKey, setAnimationKey] = useState(0);

  const replayAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  useEffect(() => {
    let animId;
    const updateTime = () => {
      setTime(new Date());
      animId = requestAnimationFrame(updateTime);
    };
    animId = requestAnimationFrame(updateTime);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Real-time hand angles (0 deg = 12 o'clock, 90 deg = 3 o'clock, etc.)
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ms = time.getMilliseconds();

  // Continuous smooth movement based on local real time
  const hourAngle = (hours + minutes / 60 + seconds / 3600) * 30;
  const minuteAngle = (minutes + (seconds + ms / 1000) / 60) * 6;
  const secondAngle = (seconds + ms / 1000) * 6;

  // Natural physical pendulum oscillation (0.5 Hz standard seconds-pendulum frequency)
  // Perfectly in sync with the real-time seconds tick:
  const pendulumAngle = Math.sin((seconds + ms / 1000) * Math.PI) * 3.4;

  // Flatten timeline entries for sequential typewriter loading animation
  const timelineLines = useMemo(() => {
    const lines = [];
    clockTimelineData.events.forEach((event, eIdx) => {
      lines.push({
        key: `head-${eIdx}`,
        eventId: event.id,
        isHeader: true,
        y: event.headingY,
        bullet: '◆ ',
        fullText: event.era,
      });
      event.lines.forEach((l, lIdx) => {
        lines.push({
          key: `line-${eIdx}-${lIdx}`,
          eventId: event.id,
          isHeader: false,
          y: l.y,
          bullet: '',
          fullText: l.text,
        });
      });
    });
    return lines;
  }, []);

  // Typewriter loading state: begins after plaque slides out from the watch
  const [typingState, setTypingState] = useState({
    activeLineIndex: -1, // -1 means before typing starts
    activeCharCount: 0,
    isFinished: false,
  });

  useEffect(() => {
    // Reset typing progress on mount or whenever animationKey changes (reload/replay)
    setTypingState({
      activeLineIndex: -1,
      activeCharCount: 0,
      isFinished: false,
    });

    let lineIdx = 0;
    let charIdx = 0;
    let intervalId = null;

    // Wait until plaque box slides out and docks (1950ms)
    const startTimeout = setTimeout(() => {
      setTypingState({
        activeLineIndex: 0,
        activeCharCount: 0,
        isFinished: false,
      });

      intervalId = setInterval(() => {
        const currentLine = timelineLines[lineIdx];
        if (!currentLine) {
          clearInterval(intervalId);
          setTypingState({
            activeLineIndex: -1,
            activeCharCount: 0,
            isFinished: true,
          });
          return;
        }

        // Advance 1 char for headings, 2 chars for body text for crisp cadence
        const step = currentLine.isHeader ? 1 : 2;
        charIdx = Math.min(charIdx + step, currentLine.fullText.length);

        setTypingState({
          activeLineIndex: lineIdx,
          activeCharCount: charIdx,
          isFinished: false,
        });

        // When current line completes, advance to next line
        if (charIdx >= currentLine.fullText.length) {
          lineIdx++;
          charIdx = 0;
          if (lineIdx >= timelineLines.length) {
            clearInterval(intervalId);
            setTimeout(() => {
              setTypingState({
                activeLineIndex: -1,
                activeCharCount: 0,
                isFinished: true,
              });
            }, 250);
          }
        }
      }, 16); // ~60 updates/sec
    }, 1950);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [animationKey, timelineLines]);

  // 12 Classical Roman Numerals around chapter ring (radius = 49.5px from center 237, 144)
  const romanNumerals = [
    { num: 'XII', angle: -90 },
    { num: 'I', angle: -60 },
    { num: 'II', angle: -30 },
    { num: 'III', angle: 0 },
    { num: 'IIII', angle: 30 }, // Traditional clockmaker format as seen in reference image
    { num: 'V', angle: 60 },
    { num: 'VI', angle: 90 },
    { num: 'VII', angle: 120 },
    { num: 'VIII', angle: 150 },
    { num: 'IX', angle: 180 },
    { num: 'X', angle: 210 },
    { num: 'XI', angle: 240 },
  ];

  return (
    <div className="w-full min-h-[100dvh] bg-white flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 select-none font-sans overflow-x-hidden relative">
      {/* 100% Fully Responsive Design Container - Dual Constrained for Both Width and Height */}
      <div className="w-full max-w-[min(100%,calc((100dvh-5.5rem)*2))] 2xl:max-w-[1520px] aspect-[2/1] relative flex items-center justify-center transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 512"
          width="100%"
          height="100%"
          className="w-full h-full block"
          style={{ overflow: 'visible', touchAction: 'manipulation' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Embedded Google Fonts */}
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Cinzel:wght@600;700;800;900&display=swap');
                .timeline-heading {
                  font-family: 'Playfair Display', Georgia, serif;
                  font-weight: 800;
                  font-size: 35px;
                  fill: #321608;
                  letter-spacing: 0.5px;
                }
                .roman-numeral {
                  font-family: 'Cinzel', 'Times New Roman', serif;
                  font-weight: 800;
                  font-size: 12.8px;
                  fill: #140d07;
                }
                .pendulum-swing {
                  transform-origin: 237px 225px;
                }
                .event-title {
                  font-family: 'Cinzel', 'Times New Roman', serif;
                  font-weight: 800;
                  font-size: 13.2px;
                  fill: #541d08;
                  letter-spacing: 0.8px;
                }
                .event-body {
                  font-family: 'Playfair Display', Georgia, serif;
                  font-size: 12.5px;
                  font-weight: 600;
                  fill: #442615;
                  letter-spacing: 0.2px;
                }
                .bullet {
                  fill: #8b1d24;
                  font-size: 11px;
                }
                @keyframes plaqueSlideOut {
                  0% {
                    transform: translate(-650px, 0);
                    opacity: 0.1;
                  }
                  20% {
                    opacity: 1;
                  }
                  100% {
                    transform: translate(0, 0);
                    opacity: 1;
                  }
                }
                .plaque-slide-anim {
                  animation: plaqueSlideOut 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
                  will-change: transform;
                }
                @keyframes titleReveal {
                  0% {
                    opacity: 0;
                    transform: translateY(8px);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .anim-title {
                  animation: titleReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) 1.65s both;
                }
                @keyframes dividerExpand {
                  0% {
                    opacity: 0;
                    transform: scaleX(0);
                  }
                  100% {
                    opacity: 1;
                    transform: scaleX(1);
                  }
                }
                .anim-divider {
                  transform-origin: 626px 198px;
                  animation: dividerExpand 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.80s both;
                }
                @keyframes redLineDraw {
                  0% {
                    opacity: 0;
                    transform: scaleY(0);
                  }
                  100% {
                    opacity: 1;
                    transform: scaleY(1);
                  }
                }
                .anim-red-bar {
                  transform-origin: 372px 227px;
                  animation: redLineDraw 0.65s cubic-bezier(0.16, 1, 0.3, 1) 1.95s both;
                }
                @keyframes cursorBlink {
                  0%, 100% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0;
                  }
                }
                .typing-cursor {
                  fill: #8b1d24;
                  font-weight: 900;
                  font-size: 14px;
                  animation: cursorBlink 0.45s infinite alternate;
                }
              `}
            </style>

            {/* Plaque Reveal ClipPaths: only allow plaque and its shadow to be visible as they slide out of the watch (x >= 286) */}
            <clipPath id="plaqueRevealClip">
              <rect x="286" y="60" width="750" height="420" />
            </clipPath>
            <clipPath id="plaqueShadowClip">
              <rect x="286" y="60" width="750" height="420" />
            </clipPath>

            {/* Studio Shadow Filter (Pure soft feathered shadow with zero hard edge bleed) */}
            <filter id="pureDropShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6.5" />
              <feOffset dx="4" dy="7" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.22" />
              </feComponentTransfer>
            </filter>

            <filter id="bevelBezelBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" />
            </filter>

            {/* --- 1. POLISHED MAHOGANY WOOD GRADIENTS --- */}
            <linearGradient id="mahoganyWoodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e0701" />
              <stop offset="14%" stopColor="#3d1404" />
              <stop offset="30%" stopColor="#682a0b" />
              <stop offset="48%" stopColor="#964316" />
              <stop offset="65%" stopColor="#682a0b" />
              <stop offset="84%" stopColor="#3d1404" />
              <stop offset="100%" stopColor="#1a0601" />
            </linearGradient>

            <linearGradient id="concaveMouldingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#451805" />
              <stop offset="35%" stopColor="#873c13" />
              <stop offset="52%" stopColor="#af551f" />
              <stop offset="70%" stopColor="#6d2e0b" />
              <stop offset="100%" stopColor="#280b02" />
            </linearGradient>

            <linearGradient id="verticalColumnWood" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2c1105" />
              <stop offset="25%" stopColor="#682c0b" />
              <stop offset="50%" stopColor="#994717" />
              <stop offset="75%" stopColor="#552208" />
              <stop offset="100%" stopColor="#1a0701" />
            </linearGradient>

            <radialGradient id="recessedTrunkWood" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#3d1808" />
              <stop offset="70%" stopColor="#1e0902" />
              <stop offset="100%" stopColor="#0e0301" />
            </radialGradient>

            {/* --- 2. 24K BURNISHED ANTIQUE GOLD & BRONZE GRADIENTS --- */}
            <linearGradient id="burnishedGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#593106" />
              <stop offset="16%" stopColor="#9e6216" />
              <stop offset="34%" stopColor="#e5a939" />
              <stop offset="46%" stopColor="#fff3af" />
              <stop offset="56%" stopColor="#eab546" />
              <stop offset="78%" stopColor="#a36517" />
              <stop offset="92%" stopColor="#663806" />
              <stop offset="100%" stopColor="#3d1e02" />
            </linearGradient>

            <linearGradient id="goldBezelRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5c3409" />
              <stop offset="20%" stopColor="#b47820" />
              <stop offset="40%" stopColor="#f7cd67" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="62%" stopColor="#f3c254" />
              <stop offset="85%" stopColor="#a86d1b" />
              <stop offset="100%" stopColor="#452405" />
            </linearGradient>

            {/* --- 3. CONICAL LATHE-SPUN PENDULUM BRASS GRADIENT --- */}
            <linearGradient id="spunBrassHorizontalProfile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4a2503" />
              <stop offset="18%" stopColor="#bf8523" />
              <stop offset="42%" stopColor="#ffeb99" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="58%" stopColor="#d89b2b" />
              <stop offset="78%" stopColor="#ffea96" />
              <stop offset="92%" stopColor="#a36c1b" />
              <stop offset="100%" stopColor="#3d1d02" />
            </linearGradient>

            {/* --- 4. AGED CLOCK DIAL PARCHMENT GRADIENT --- */}
            <radialGradient id="agedDialGrad" cx="48%" cy="47%" r="56%">
              <stop offset="0%" stopColor="#fffef9" />
              <stop offset="40%" stopColor="#faf2dc" />
              <stop offset="78%" stopColor="#eee0bc" />
              <stop offset="93%" stopColor="#dec697" />
              <stop offset="100%" stopColor="#caa970" />
            </radialGradient>

            {/* --- 5. PLAQUE CARD WARM SURFACE GRADIENT --- */}
            <radialGradient id="plaqueSurfaceGrad" cx="52%" cy="48%" r="62%">
              <stop offset="0%" stopColor="#fffdf8" />
              <stop offset="35%" stopColor="#faf1de" />
              <stop offset="75%" stopColor="#f2e2c4" />
              <stop offset="92%" stopColor="#e8cfab" />
              <stop offset="100%" stopColor="#dbbd91" />
            </radialGradient>

            <linearGradient id="plaqueGoldFrame" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff2ba" />
              <stop offset="12%" stopColor="#e0a93f" />
              <stop offset="55%" stopColor="#af731f" />
              <stop offset="85%" stopColor="#6e420b" />
              <stop offset="100%" stopColor="#3d2004" />
            </linearGradient>

            {/* Left Plaque Shadow Gradient (Shadow cast by clock onto card) */}
            <linearGradient id="clockCastOntoPlaque" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2b1404" stopOpacity="0.45" />
              <stop offset="35%" stopColor="#4a2509" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#683912" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#854d1d" stopOpacity="0" />
            </linearGradient>

            {/* Classical Corner Filigree Motif for Plaque */}
            <g id="plaqueCornerFiligree">
              <path
                d="M 0 0 C 8 -12, 22 -16, 32 -6 C 37 3, 33 15, 23 18 C 12 18, 6 10, 0 0 Z"
                fill="#8f5e22"
                opacity="0.9"
              />
              <path
                d="M 0 0 C -5 16, -2 30, 10 38 C 18 40, 27 34, 25 24 C 21 18, 13 18, 8 24"
                fill="none"
                stroke="#8f5e22"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M 0 0 C 16 -5, 30 -2, 38 10 C 40 18, 34 27, 24 25 C 18 21, 18 13, 24 8"
                fill="none"
                stroke="#8f5e22"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle cx="30" cy="30" r="3.2" fill="#8f5e22" />
              <circle cx="14" cy="14" r="2.2" fill="#684112" />
            </g>
          </defs>

          {/* ======================================================== */}
          {/* 1. STUDIO DROP SHADOWS FOR ENTIRE ASSEMBLY               */}
          {/* ======================================================== */}
          <g id="ground_shadows">
            {/* Plaque Card Ambient Shadow (Smoothly slides out with plaque, clipped at clock) */}
            <g clipPath="url(#plaqueShadowClip)">
              <g className="plaque-slide-anim" key={`shadow-${animationKey}`}>
                <path
                  d="M 324 88 
                     L 916 88 
                     C 926 88, 934 96, 934 106 
                     L 934 382 
                     C 934 392, 926 400, 916 400 
                     L 290 400 
                     C 292 375, 293 340, 293 300 
                     C 293 260, 295 240, 302 225 
                     C 312 205, 326 185, 335 160 
                     C 342 140, 342 120, 336 105 
                     C 332 96, 328 90, 324 88 Z"
                  fill="#180a02"
                  filter="url(#pureDropShadow)"
                />
              </g>
            </g>

            {/* Clock Head Ambient Shadow (Safely inset r = 100 so left edge stays 100% clean) */}
            <circle
              cx="237"
              cy="144"
              r="100"
              fill="#160802"
              filter="url(#pureDropShadow)"
            />

            {/* Clock Pendulum Trunk & Apron Shadow (Safely inset inside x = 178 columns) */}
            <path
              d="M 180 222 
                 L 294 222 
                 L 288 414 
                 L 237 486 
                 L 186 414 Z"
              fill="#140601"
              filter="url(#pureDropShadow)"
            />
          </g>

          {/* ======================================================== */}
          {/* 2. THE HISTORICAL TIMELINE PLAQUE CARD (RIGHT SIDE)      */}
          {/* Smoothly slides out from inside the watch on reload      */}
          {/* ======================================================== */}
          <g clipPath="url(#plaqueRevealClip)">
            <g id="timeline_plaque_card" className="plaque-slide-anim" key={`plaque-${animationKey}`}>
              {/* 2.1 Outer Sculpted Golden Beveled Border Frame */}
              <path
                d="M 324 86
                   L 918 86
                   C 928 86, 936 94, 936 104
                   L 936 384
                   C 936 394, 928 402, 918 402
                   L 290 402
                   C 292 375, 293 340, 293 300
                   C 293 260, 295 240, 302 225
                   C 312 205, 326 185, 335 160
                   C 342 140, 342 120, 336 105
                   C 332 96, 328 90, 324 86 Z"
                fill="url(#plaqueGoldFrame)"
                stroke="#683d0c"
                strokeWidth="2.5"
              />

              {/* Inset Inner Bevel Highlight */}
              <path
                d="M 330 89
                   L 915 90
                   C 923 90, 930 97, 930 106
                   L 930 382
                   C 930 390, 923 398, 915 398
                   L 297 399
                   C 299 374, 300 340, 300 300
                   C 300 261, 302 241, 309 226
                   C 318 206, 332 186, 340 161
                   C 347 141, 347 121, 341 106
                   C 338 98, 334 92, 330 89 Z"
                fill="none"
                stroke="#fff1b0"
                strokeWidth="1.5"
                opacity="0.85"
              />

              {/* 2.2 Main Warm Parchment Surface */}
              <path
                d="M 338 92
                   L 914 92
                   C 922 92, 928 98, 928 106
                   L 928 380
                   C 928 388, 922 396, 914 396
                   L 304 396
                   C 306 372, 307 340, 307 300
                   C 307 262, 310 242, 316 228
                   C 325 208, 338 188, 346 162
                   C 352 142, 352 122, 347 108
                   C 344 100, 340 95, 338 92 Z"
                fill="url(#plaqueSurfaceGrad)"
              />

              {/* Soft Aged Parchment Vignette Around Card Perimeter */}
              <path
                d="M 338 92 L 914 92 L 928 380 L 304 396 Z"
                fill="none"
                stroke="#b5894b"
                strokeWidth="4"
                opacity="0.18"
              />

              {/* 2.3 Top-Right & Bottom-Right Corner Filigrees */}
              <g transform="translate(886, 126) scale(0.9)">
                <use href="#plaqueCornerFiligree" />
              </g>
              <g transform="translate(886, 362) scale(0.9, -0.9)">
                <use href="#plaqueCornerFiligree" />
              </g>

              {/* 2.4 "Historical Timeline" Main Headline with Smooth Reveal */}
              <text
                x="630"
                y="166"
                textAnchor="middle"
                className="timeline-heading anim-title"
              >
                {clockTimelineData.title}
              </text>

              {/* 2.7 Centered Ornamental Double-Diamond Divider with Expand Animation */}
              <g id="plaque_divider" className="anim-divider">
                {/* Left Wing Line */}
                <line
                  x1="450"
                  y1="198"
                  x2="610"
                  y2="198"
                  stroke="#693b13"
                  strokeWidth="1.6"
                />
                <circle cx="612" cy="198" r="1.5" fill="#693b13" />

                {/* Center Diamond Finial Motif */}
                <polygon
                  points="626,190 634,198 626,206 618,198"
                  fill="#693b13"
                />
                <polygon
                  points="626,193 631,198 626,203 621,198"
                  fill="#ffe49e"
                />

                {/* Right Wing Line */}
                <circle cx="640" cy="198" r="1.5" fill="#693b13" />
                <line
                  x1="642"
                  y1="198"
                  x2="802"
                  y2="198"
                  stroke="#693b13"
                  strokeWidth="1.6"
                />
              </g>

              {/* 2.8 Vertical Crimson Red Accent Bar with Drop-Draw Animation */}
              <g id="red_accent_group" className="anim-red-bar">
                <rect
                  x={clockTimelineData.redAccent.x}
                  y={clockTimelineData.redAccent.y}
                  width={clockTimelineData.redAccent.width}
                  height={clockTimelineData.redAccent.height}
                  rx={clockTimelineData.redAccent.rx}
                  fill="#7b0612"
                  stroke="#4a0209"
                  strokeWidth="0.8"
                />
                {/* Specular Glint on Red Bar */}
                <line
                  x1="373.5"
                  y1="230"
                  x2="373.5"
                  y2="348"
                  stroke="#ea4a57"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </g>

              {/* 2.9 Authentic Victorian Historical Content with Typewriter Loading Animation */}
              <g id="timeline_event_content">
                {timelineLines.map((line, idx) => {
                  let textToDisplay = '';
                  let isTypingThisLine = false;

                  if (typingState.isFinished) {
                    textToDisplay = line.fullText;
                  } else if (typingState.activeLineIndex === -1) {
                    textToDisplay = '';
                  } else if (idx < typingState.activeLineIndex) {
                    // Line previously finished: always show 100% full text
                    textToDisplay = line.fullText;
                  } else if (idx === typingState.activeLineIndex) {
                    // Current active line: show sliced characters with cursor
                    textToDisplay = line.fullText.slice(0, typingState.activeCharCount);
                    isTypingThisLine = true;
                  } else {
                    // Line not reached yet: hidden
                    textToDisplay = '';
                  }

                  if (!textToDisplay && !isTypingThisLine) return null;

                  if (line.isHeader) {
                    return (
                      <text key={line.key} className="event-title" x="396" y={line.y}>
                        <tspan className="bullet">◆ </tspan>
                        {textToDisplay}
                        {isTypingThisLine && <tspan className="typing-cursor"> |</tspan>}
                      </text>
                    );
                  }

                  return (
                    <text key={line.key} className="event-body" x="396" y={line.y}>
                      {textToDisplay}
                      {isTypingThisLine && <tspan className="typing-cursor"> |</tspan>}
                    </text>
                  );
                })}
              </g>
            </g>
          </g>

          {/* ======================================================== */}
          {/* 3. GOLDEN TRANSITION BRACKET (LOCKING CLOCK & PLAQUE)    */}
          {/* Continuous zero-gap bridge at top clock bezel junction   */}
          {/* ======================================================== */}
          <g id="clock_to_plaque_join">
            {/* Top-Right Sculpted Acanthus Bracket (at ~2 o'clock on clock rim) */}
            <g id="top_right_bracket">
              <path
                d="M 320 94 
                   C 334 86, 350 82, 368 88 
                   C 378 93, 382 104, 374 112 
                   C 364 120, 348 116, 338 108 
                   C 330 106, 324 100, 320 94 Z"
                fill="url(#burnishedGoldGrad)"
                stroke="#542e05"
                strokeWidth="1.2"
              />
              <path
                d="M 326 92 C 338 85, 354 83, 366 89 C 374 94, 376 102, 370 108"
                fill="none"
                stroke="#fff8cf"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* ======================================================== */}
          {/* 4. THE ANTIQUE VICTORIAN WALL CLOCK (LEFT SIDE)          */}
          {/* Perfectly Refined Proportions + REAL-TIME CLOCK DISPLAY  */}
          {/* ======================================================== */}
          <g
            id="antique_wall_clock"
            onClick={replayAnimation}
            style={{ cursor: 'pointer' }}
          >
            {/* ------------------------------------------------------ */}
            {/* 4.1 CLOCK WAIST & PENDULUM CASE BACKGROUND             */}
            {/* ------------------------------------------------------ */}
            <g id="clock_waist_case">
              {/* Outer Mahogany Waist Case Frame */}
              <path
                d="M 175 220 
                   L 299 220 
                   L 293 416 
                   L 181 416 Z"
                fill="url(#mahoganyWoodGrad)"
                stroke="#150501"
                strokeWidth="2"
              />

              {/* Recessed Dark Interior Chamber with Deep Wood Grain */}
              <rect
                x="195"
                y="225"
                width="84"
                height="182"
                rx="6"
                fill="url(#recessedTrunkWood)"
                stroke="#0e0301"
                strokeWidth="2"
              />

              {/* Top Golden Acanthus Drop in Trunk Interior */}
              <path
                d="M 237 225 
                   C 232 234, 227 242, 237 252 
                   C 247 242, 242 234, 237 225 Z"
                fill="url(#burnishedGoldGrad)"
                stroke="#4a2503"
                strokeWidth="0.8"
              />

              {/* Left Fluted Classical Column */}
              <g id="left_fluted_column">
                <rect x="180" y="244" width="14" height="160" rx="2" fill="url(#verticalColumnWood)" stroke="#1a0802" strokeWidth="0.8" />
                <line x1="183.5" y1="248" x2="183.5" y2="400" stroke="#ffd980" strokeWidth="1" opacity="0.65" />
                <line x1="187" y1="248" x2="187" y2="400" stroke="#ffebad" strokeWidth="1.4" opacity="0.85" />
                <line x1="190.5" y1="248" x2="190.5" y2="400" stroke="#ffd980" strokeWidth="1" opacity="0.65" />
                {/* Stepped Capital & Base in 24K Gold */}
                <rect x="178" y="238" width="18" height="6.5" rx="1.5" fill="url(#burnishedGoldGrad)" stroke="#593106" strokeWidth="0.8" />
                <rect x="176" y="242" width="22" height="3" rx="1" fill="url(#burnishedGoldGrad)" stroke="#452405" strokeWidth="0.6" />
                <rect x="178" y="404" width="18" height="6" rx="1.5" fill="url(#burnishedGoldGrad)" stroke="#593106" strokeWidth="0.8" />
                <rect x="176" y="408" width="22" height="4" rx="1" fill="url(#burnishedGoldGrad)" stroke="#452405" strokeWidth="0.6" />
              </g>

              {/* Right Fluted Classical Column */}
              <g id="right_fluted_column">
                <rect x="280" y="244" width="14" height="160" rx="2" fill="url(#verticalColumnWood)" stroke="#1a0802" strokeWidth="0.8" />
                <line x1="283.5" y1="248" x2="283.5" y2="400" stroke="#ffd980" strokeWidth="1" opacity="0.65" />
                <line x1="287" y1="248" x2="287" y2="400" stroke="#ffebad" strokeWidth="1.4" opacity="0.85" />
                <line x1="290.5" y1="248" x2="290.5" y2="400" stroke="#ffd980" strokeWidth="1" opacity="0.65" />
                {/* Stepped Capital & Base in 24K Gold */}
                <rect x="278" y="238" width="18" height="6.5" rx="1.5" fill="url(#burnishedGoldGrad)" stroke="#593106" strokeWidth="0.8" />
                <rect x="276" y="242" width="22" height="3" rx="1" fill="url(#burnishedGoldGrad)" stroke="#452405" strokeWidth="0.6" />
                <rect x="278" y="404" width="18" height="6" rx="1.5" fill="url(#burnishedGoldGrad)" stroke="#593106" strokeWidth="0.8" />
                <rect x="276" y="408" width="22" height="4" rx="1" fill="url(#burnishedGoldGrad)" stroke="#452405" strokeWidth="0.6" />
              </g>

              {/* Symmetrical Carved Gold Floral Appliques Flanking Pendulum */}
              {/* Left Foliage Sprig */}
              <g transform="translate(214, 280) scale(0.82)">
                <circle cx="0" cy="0" r="3" fill="#ffeaa3" stroke="#542e05" strokeWidth="0.6" />
                <path d="M 0 -3 C 6 -12, 10 -22, 0 -34 C -10 -22, -6 -12, 0 -3 Z" fill="url(#burnishedGoldGrad)" />
                <path d="M -2 -2 C -12 -6, -20 -14, -18 -26 C -8 -20, -4 -10, -2 -2 Z" fill="url(#burnishedGoldGrad)" />
                <path d="M 2 -2 C 12 -6, 20 -14, 18 -26 C 8 -20, 4 -10, 2 -2 Z" fill="url(#burnishedGoldGrad)" />
                <path d="M 0 3 C 6 12, 10 22, 0 34 C -10 22, -6 12, 0 3 Z" fill="url(#burnishedGoldGrad)" />
              </g>

              {/* Right Foliage Sprig */}
              <g transform="translate(260, 280) scale(0.82)">
                <circle cx="0" cy="0" r="3" fill="#ffeaa3" stroke="#542e05" strokeWidth="0.6" />
                <path d="M 0 -3 C 6 -12, 10 -22, 0 -34 C -10 -22, -6 -12, 0 -3 Z" fill="url(#burnishedGoldGrad)" />
                <path d="M -2 -2 C -12 -6, -20 -14, -18 -26 C -8 -20, -4 -10, -2 -2 Z" fill="url(#burnishedGoldGrad)" />
                <path d="M 2 -2 C 12 -6, 20 -14, 18 -26 C 8 -20, 4 -10, 2 -2 Z" fill="url(#burnishedGoldGrad)" />
                <path d="M 0 3 C 6 12, 10 22, 0 34 C -10 22, -6 12, 0 3 Z" fill="url(#burnishedGoldGrad)" />
              </g>

              {/* Upper Left & Right Golden Shoulder Volutes */}
              <path
                d="M 176 218 
                   C 162 226, 160 240, 174 248 
                   C 182 251, 192 245, 190 236 
                   C 188 226, 181 220, 176 218 Z"
                fill="url(#burnishedGoldGrad)"
                stroke="#542e05"
                strokeWidth="1.2"
              />
              <path
                d="M 298 218 
                   C 312 226, 314 240, 300 248 
                   C 292 251, 282 245, 284 236 
                   C 286 226, 293 220, 298 218 Z"
                fill="url(#burnishedGoldGrad)"
                stroke="#542e05"
                strokeWidth="1.2"
              />
            </g>

            {/* ------------------------------------------------------ */}
            {/* 4.2 DYNAMIC SWINGING BRASS PENDULUM                    */}
            {/* Swings in sync with real-time seconds ticking          */}
            {/* ------------------------------------------------------ */}
            <g
              id="brass_pendulum_assembly"
              className="pendulum-swing"
              style={{
                transform: `rotate(${pendulumAngle}deg)`,
                transformOrigin: '237px 225px',
                transition: 'transform 0.05s linear',
              }}
            >
              {/* Top Pivot Bracket */}
              <circle cx="237" cy="225" r="4.5" fill="#4a2804" stroke="#c28b25" strokeWidth="1.2" />

              {/* Flat Brass Ribbon Pendulum Rod */}
              <rect
                x="234.8"
                y="225"
                width="4.4"
                height="150"
                fill="url(#burnishedGoldGrad)"
                stroke="#542e05"
                strokeWidth="0.6"
              />
              <line
                x1="237"
                y1="228"
                x2="237"
                y2="370"
                stroke="#ffffff"
                strokeWidth="1.2"
                opacity="0.9"
              />

              {/* Heavy Spun Brass Pendulum Bob */}
              <g id="pendulum_bob">
                {/* Drop shadow inside chamber */}
                <circle cx="239" cy="378" r="22" fill="#080201" opacity="0.6" filter="url(#bevelBezelBlur)" />

                {/* Outer Raised Brass Bezel Rim */}
                <circle
                  cx="237"
                  cy="375"
                  r="22"
                  fill="url(#burnishedGoldGrad)"
                  stroke="#4a2503"
                  strokeWidth="1.5"
                />

                {/* Spun Conical Lathe-Turned Disc Surface */}
                <circle
                  cx="237"
                  cy="375"
                  r="19.5"
                  fill="url(#spunBrassHorizontalProfile)"
                />

                {/* Top/Bottom Radial Specular Highlight Triangles */}
                <polygon
                  points="237,375 221,357 253,357"
                  fill="#ffffff"
                  opacity="0.35"
                />
                <polygon
                  points="237,375 221,393 253,393"
                  fill="#ffffff"
                  opacity="0.35"
                />

                {/* Concentric Lathe Grooves */}
                <circle cx="237" cy="375" r="14.5" fill="none" stroke="#9e6616" strokeWidth="0.8" opacity="0.75" />
                <circle cx="237" cy="375" r="9" fill="none" stroke="#ffeaa1" strokeWidth="0.8" opacity="0.85" />

                {/* Center Raised Gold Boss & Specular */}
                <circle
                  cx="237"
                  cy="375"
                  r="4.5"
                  fill="url(#burnishedGoldGrad)"
                  stroke="#4a2804"
                  strokeWidth="1"
                />
                <circle cx="235.6" cy="373.6" r="1.6" fill="#ffffff" opacity="0.9" />

                {/* Bottom Brass Teardrop Pointed Finial */}
                <path
                  d="M 234 396 L 237 404 L 240 396 Z"
                  fill="url(#burnishedGoldGrad)"
                  stroke="#542e05"
                  strokeWidth="0.8"
                />
              </g>
            </g>

            {/* ------------------------------------------------------ */}
            {/* 4.3 CLOCK APRON / LOWER CARVED BASE                    */}
            {/* ------------------------------------------------------ */}
            <g id="clock_bottom_apron">
              {/* Arched Lower Shelf */}
              <rect x="172" y="414" width="130" height="7" rx="2" fill="url(#mahoganyWoodGrad)" stroke="#1a0601" strokeWidth="1" />
              <line x1="174" y1="415.5" x2="300" y2="415.5" stroke="#ffcc80" strokeWidth="1" opacity="0.75" />

              {/* Richly Sculpted Baroque Volute Acanthus Tail */}
              <path
                d="M 174 421 
                   C 166 446, 184 472, 210 475 
                   C 222 477, 231 488, 237 496 
                   C 243 488, 252 477, 264 475 
                   C 290 472, 308 446, 300 421 
                   C 290 430, 274 432, 258 428 
                   C 248 425, 242 432, 237 435 
                   C 232 432, 226 425, 216 428 
                   C 200 432, 184 430, 174 421 Z"
                fill="url(#burnishedGoldGrad)"
                stroke="#4a2503"
                strokeWidth="1.8"
              />

              {/* Center Bottom Drop Finial & Acanthus Ribs */}
              <circle cx="237" cy="462" r="4.5" fill="#ffe9a4" stroke="#542e05" strokeWidth="1" />
              <circle cx="237" cy="486" r="3.2" fill="#ffe9a4" stroke="#542e05" strokeWidth="0.8" />
              <path d="M 237 435 L 237 492" stroke="#542e05" strokeWidth="1.6" />
            </g>

            {/* ------------------------------------------------------ */}
            {/* 4.4 ROUND CLOCK CASING & STEPPED BEZEL                 */}
            {/* Scaled down to exact elegant proportion (radius = 106) */}
            {/* ------------------------------------------------------ */}
            <g id="clock_outer_casing">
              {/* Outermost Mahogany Moulded Ring (r = 106, diameter = 212) */}
              <circle
                cx="237"
                cy="144"
                r="106"
                fill="url(#mahoganyWoodGrad)"
                stroke="#150501"
                strokeWidth="2.2"
              />

              {/* Concave Mahogany Moulding Step Ring (r = 95) */}
              <circle
                cx="237"
                cy="144"
                r="95"
                fill="url(#concaveMouldingGrad)"
                stroke="#110401"
                strokeWidth="1.8"
              />
              {/* Polished Wood Specular Arch along Upper-Left Rim */}
              <path
                d="M 162 130 C 168 85, 204 50, 252 46"
                fill="none"
                stroke="#c96d2b"
                strokeWidth="2.4"
                opacity="0.85"
              />

              {/* Heavy 24K Gold Bezel Outer Ring (r = 85) */}
              <circle
                cx="237"
                cy="144"
                r="85"
                fill="url(#burnishedGoldGrad)"
                stroke="#4a2804"
                strokeWidth="1.8"
              />

              {/* Inner Gold Bezel Step (r = 76.5) */}
              <circle
                cx="237"
                cy="144"
                r="76.5"
                fill="url(#goldBezelRingGrad)"
                stroke="#593106"
                strokeWidth="1"
              />

              {/* Crisp Horizon Bezel Rim (r = 74) */}
              <circle
                cx="237"
                cy="144"
                r="74"
                fill="none"
                stroke="#fff7cc"
                strokeWidth="1"
              />
            </g>

            {/* ------------------------------------------------------ */}
            {/* 4.5 TOP CROWN / PEDIMENT CARVING (SCALED PROPORTION)   */}
            {/* ------------------------------------------------------ */}
            <g id="clock_top_crown">
              {/* Symmetrical Baroque Scrolled Acanthus Pediment Crown */}
              <path
                d="M 180 54 
                   C 170 38, 180 20, 202 18 
                   C 216 16, 226 8, 237 4 
                   C 248 8, 258 16, 272 18 
                   C 294 20, 304 38, 294 54 
                   C 284 42, 268 38, 256 44 
                   C 245 49, 241 47, 237 44 
                   C 233 47, 229 49, 218 44 
                   C 206 38, 190 42, 180 54 Z"
                fill="url(#burnishedGoldGrad)"
                stroke="#4a2603"
                strokeWidth="1.6"
              />

              {/* Center Crown Finial / Shell Crest */}
              <ellipse cx="237" cy="16" rx="6" ry="7.5" fill="url(#burnishedGoldGrad)" stroke="#452403" strokeWidth="0.9" />
              <ellipse cx="237" cy="14.5" rx="3" ry="4.5" fill="#fff1b0" />

              {/* Left & Right Crown Acanthus Flutes */}
              <path d="M 204 20 C 210 28, 220 34, 233 37" fill="none" stroke="#ffeaa1" strokeWidth="1.2" />
              <path d="M 270 20 C 264 28, 254 34, 241 37" fill="none" stroke="#ffeaa1" strokeWidth="1.2" />
            </g>

            {/* ------------------------------------------------------ */}
            {/* 4.6 CLOCK DIAL / FACE (ENAMEL PARCHMENT & NUMERALS)    */}
            {/* ------------------------------------------------------ */}
            <g id="clock_dial_face">
              {/* Dial Surface (Center 237, 144, radius = 74) */}
              <circle
                cx="237"
                cy="144"
                r="74"
                fill="url(#agedDialGrad)"
                stroke="#331c07"
                strokeWidth="1"
              />

              {/* Chapter Ring Outer Circle (r = 70) */}
              <circle cx="237" cy="144" r="70" fill="none" stroke="#1a0f05" strokeWidth="1.2" />

              {/* Chapter Ring Inner Circle (r = 59) */}
              <circle cx="237" cy="144" r="59" fill="none" stroke="#1a0f05" strokeWidth="1.2" />

              {/* 60 Minute Tick Marks on Chapter Ring */}
              {Array.from({ length: 60 }).map((_, i) => {
                const angleDeg = i * 6;
                const angleRad = (angleDeg * Math.PI) / 180;
                const isFiveMin = i % 5 === 0;

                const rInner = isFiveMin ? 59 : 62;
                const rOuter = 70;

                const x1 = 237 + Math.cos(angleRad) * rInner;
                const y1 = 144 + Math.sin(angleRad) * rInner;
                const x2 = 237 + Math.cos(angleRad) * rOuter;
                const y2 = 144 + Math.sin(angleRad) * rOuter;

                return isFiveMin ? (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a0f05" strokeWidth="2" />
                    <circle
                      cx={237 + Math.cos(angleRad) * 64.5}
                      cy={144 + Math.sin(angleRad) * 64.5}
                      r="1.4"
                      fill="#1a0f05"
                    />
                  </g>
                ) : (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#1a0f05"
                    strokeWidth="0.75"
                  />
                );
              })}

              {/* 12 Classical Roman Numerals (Radius = 49.5) */}
              {romanNumerals.map(({ num, angle }) => {
                const rad = (angle * Math.PI) / 180;
                const radius = 49.5;
                const numX = 237 + Math.cos(rad) * radius;
                const numY = 144 + Math.sin(rad) * radius;

                return (
                  <text
                    key={num}
                    x={numX}
                    y={numY + 4.2}
                    textAnchor="middle"
                    className="roman-numeral"
                  >
                    {num}
                  </text>
                );
              })}

              {/* Dial Center Accent Ring */}
              <circle cx="237" cy="144" r="14" fill="none" stroke="#2b1706" strokeWidth="0.7" opacity="0.4" />
            </g>

            {/* ------------------------------------------------------ */}
            {/* 4.7 REAL-TIME VICTORIAN SPADE HANDS + SECOND HAND      */}
            {/* Dynamically tracking actual real time every second     */}
            {/* ------------------------------------------------------ */}
            <g id="clock_hands">
              {/* REAL-TIME HOUR HAND */}
              <g transform={`rotate(${hourAngle}, 237, 144)`}>
                {/* Cast Shadow */}
                <path
                  d="M 235 144 L 235 116 L 231 109 L 237 101 L 243 109 L 239 116 L 239 144 Z"
                  fill="#000000"
                  opacity="0.32"
                  transform="translate(1.5, 2.5)"
                />

                {/* Hand Body: Pierced Heart Spade & Ring Collar */}
                <path
                  d="M 235.6 150 
                     L 235.6 119 
                     C 231.5 117, 231 113, 233.5 109 
                     C 229 104, 232.5 97, 237 95 
                     C 241.5 97, 245 104, 240.5 109 
                     C 243 113, 242.5 117, 238.4 119 
                     L 238.4 150 Z"
                  fill="#110b06"
                  stroke="#26170a"
                  strokeWidth="0.5"
                />
                {/* Pierced Cutout Heart in Spade */}
                <circle cx="237" cy="104" r="2.5" fill="url(#agedDialGrad)" />
                {/* Ring Collar Cutout */}
                <circle cx="237" cy="113" r="1.8" fill="url(#agedDialGrad)" />
              </g>

              {/* REAL-TIME MINUTE HAND */}
              <g transform={`rotate(${minuteAngle}, 237, 144)`}>
                {/* Cast Shadow */}
                <path
                  d="M 235.5 144 L 235.5 102 L 231 92 L 237 81 L 243 92 L 238.5 102 L 238.5 144 Z"
                  fill="#000000"
                  opacity="0.32"
                  transform="translate(1.5, 2.5)"
                />

                {/* Slender Hand Body with Pierced Clover Spade Tip */}
                <path
                  d="M 235.8 152 
                     L 235.8 104 
                     C 231 99, 228 90, 237 80 
                     C 246 90, 243 99, 238.2 104 
                     L 238.2 152 Z"
                  fill="#110b06"
                  stroke="#26170a"
                  strokeWidth="0.5"
                />
                {/* Pierced Cutout in Minute Spade */}
                <circle cx="237" cy="92" r="2.8" fill="url(#agedDialGrad)" />
              </g>

              {/* REAL-TIME NEEDLE SECOND HAND */}
              <g transform={`rotate(${secondAngle}, 237, 144)`}>
                {/* Shadow */}
                <line x1="238" y1="156" x2="238" y2="76" stroke="#000000" strokeWidth="1" opacity="0.25" />

                {/* Second Hand Needle (Crimson Antique Finish) */}
                <line x1="237" y1="156" x2="237" y2="75" stroke="#8b0000" strokeWidth="1.1" strokeLinecap="round" />
                {/* Tail Counterweight Disc */}
                <circle cx="237" cy="152" r="2.4" fill="#8b0000" stroke="#4a0000" strokeWidth="0.5" />
                <circle cx="237" cy="144" r="2.8" fill="#8b0000" />
              </g>

              {/* Center Brass Cap / Arbor Boss */}
              <circle cx="237" cy="144" r="5.2" fill="#1c0f05" stroke="#b87b1c" strokeWidth="1.3" />
              <circle cx="237" cy="144" r="2.6" fill="#d9992b" />
              <circle cx="235.8" cy="142.8" r="1.1" fill="#ffffff" opacity="0.9" />
            </g>

            {/* ------------------------------------------------------ */}
            {/* 4.8 GLASS CRYSTAL SPECULAR CONVEX REFLECTION           */}
            {/* ------------------------------------------------------ */}
            <g id="dial_glass_crystal_reflection">
              <path
                d="M 175 114 
                   C 184 88, 210 74, 237 74 
                   C 264 74, 290 88, 299 114 
                   C 278 98, 256 93, 237 93 
                   C 218 93, 196 98, 175 114 Z"
                fill="#ffffff"
                opacity="0.25"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export const Section22 = () => {
  return (
    <section
      id="section-22"
      className="w-full relative select-none overflow-hidden bg-white border-b border-slate-200"
    >
      <Clock />
    </section>
  );
};

export default Section22;
