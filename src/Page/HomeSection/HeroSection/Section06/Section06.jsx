import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { examAlerts, stories, penDocument, wrapParagraph } from './Section06Data';

const REST_POSITION = { x: 680, y: 580, angle: -150.13 };
function Pen() {
  // Generate writing steps dynamically from penDocument data
  const steps = useMemo(() => {
    const list = [];

    // 1. Document Main Title
    if (penDocument.title) {
      list.push({
        id: 'title',
        type: 'text',
        text: penDocument.title,
        x: 165,
        y: 152,
        charWidth: 13.5,
        className: 'doc-title',
      });
    }

    // 2. Subtitle
    if (penDocument.subtitle) {
      list.push({
        id: 'subtitle',
        type: 'text',
        text: penDocument.subtitle,
        x: 165,
        y: 174,
        charWidth: 7.6,
        className: 'doc-subtitle',
      });
    }

    // 3. Ornamental separator rule
    list.push({
      id: 'divider',
      type: 'rule',
      x1: 165,
      y1: 188,
      x2: 855,
      y2: 188,
    });

    // 4. Articles (Headings + Paragraphs)
    const articles = penDocument.articles || [];
    const spacing = articles.length > 3 ? 84 : 96;

    articles.forEach((art, idx) => {
      const artY = 214 + idx * spacing;

      // Heading
      list.push({
        id: `art_${idx}_h`,
        type: 'text',
        text: art.heading,
        x: 165,
        y: artY,
        charWidth: 9.2,
        className: 'doc-heading',
      });

      // Paragraph Lines
      const lines = wrapParagraph(art.paragraph, 72);
      lines.forEach((lineText, lineIdx) => {
        list.push({
          id: `art_${idx}_l${lineIdx}`,
          type: 'text',
          text: lineText,
          x: 165,
          y: artY + 22 + lineIdx * 19,
          charWidth: 7.2,
          className: 'doc-paragraph',
        });
      });

      // Dainty separator between articles (except the last one)
      if (idx < articles.length - 1) {
        list.push({
          id: `art_sep_${idx}`,
          type: 'hairline',
          x1: 195,
          y1: artY + 22 + lines.length * 19 + 7,
          x2: 825,
          y2: artY + 22 + lines.length * 19 + 7,
        });
      }
    });

    // 5. Sign-off and Registrar
    const signOffY = 512;
    if (penDocument.signOff) {
      list.push({
        id: 'signOff',
        type: 'text',
        text: penDocument.signOff,
        x: 165,
        y: signOffY,
        charWidth: 6.8,
        className: 'doc-signoff',
      });
    }

    if (penDocument.signatureName) {
      list.push({
        id: 'signatureName',
        type: 'text',
        text: penDocument.signatureName,
        x: 165,
        y: signOffY + 20,
        charWidth: 7.6,
        className: 'doc-signature-name',
      });
    }

    // 6. Dynamic Flourish Signature Curve
    list.push({
      id: 'flourish',
      type: 'flourish',
    });

    return list;
  }, []);

  // Animation states
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [ruleProgress, setRuleProgress] = useState(0);
  const [flourishProgress, setFlourishProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [penPos, setPenPos] = useState({ x: 165, y: 152, angle: -150.13 });

  // Mouse tilt for interactive 3D effect when writing is done
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const animFrameRef = useRef(null);
  const isWritingRef = useRef(true);

  // Mouse tilt handlers
  const handleMouseMove = (e) => {
    if (!isFinished) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 4, y: y * 4 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Writing loop
  const startWritingAnimation = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    isWritingRef.current = true;
    setIsFinished(false);
    setCurrentStepIdx(0);
    setCurrentCharIdx(0);
    setRuleProgress(0);
    setFlourishProgress(0);

    let stepIdx = 0;
    let charIdx = 0;
    let lastTime = performance.now();
    let tickAccumulator = 0;
    let transitionProgress = 0;
    let isTransitioning = false;
    let transitionStart = { x: 165, y: 152 };
    let transitionEnd = { x: 165, y: 152 };

    const msPerChar = 12; // Fast, authentic handwriting pace

    const runLoop = (now) => {
      if (!isWritingRef.current) return;

      const delta = now - lastTime;
      lastTime = now;
      tickAccumulator += delta;

      if (stepIdx < steps.length) {
        const step = steps[stepIdx];

        if (isTransitioning) {
          // Pen gliding from end of previous step to start of current step
          transitionProgress += delta / 65;
          const t = Math.min(1, transitionProgress);
          const currentX = transitionStart.x + (transitionEnd.x - transitionStart.x) * t;
          const currentY = transitionStart.y + (transitionEnd.y - transitionStart.y) * t - Math.sin(t * Math.PI) * 5;

          setPenPos({
            x: currentX,
            y: currentY,
            angle: -150.13 + Math.sin(t * Math.PI) * 3,
          });

          if (t >= 1) {
            isTransitioning = false;
            tickAccumulator = 0;
          }
        } else if (step.type === 'text') {
          const totalChars = step.text.length;

          while (tickAccumulator >= msPerChar && charIdx <= totalChars) {
            tickAccumulator -= msPerChar;
            charIdx++;
            setCurrentCharIdx(charIdx);

            const nibX = Math.min(step.x + charIdx * step.charWidth, 860);
            const nibY = step.y + Math.sin(charIdx * 1.8) * 1.2;

            setPenPos({
              x: nibX,
              y: nibY,
              angle: -150.13 + Math.cos(charIdx * 2.2) * 2.0,
            });
          }

          if (charIdx >= totalChars) {
            const nextStep = steps[stepIdx + 1];
            if (nextStep) {
              transitionStart = { x: step.x + totalChars * step.charWidth, y: step.y };
              transitionEnd = { x: nextStep.x1 || nextStep.x || 165, y: nextStep.y1 || nextStep.y || 200 };
              isTransitioning = true;
              transitionProgress = 0;
            }
            stepIdx++;
            charIdx = 0;
            setCurrentStepIdx(stepIdx);
            setCurrentCharIdx(0);
            tickAccumulator = 0;
          }
        } else if (step.type === 'rule' || step.type === 'hairline') {
          const duration = step.type === 'rule' ? 320 : 180;
          const progress = Math.min(1, tickAccumulator / duration);
          setRuleProgress(progress);

          const currentX = step.x1 + (step.x2 - step.x1) * progress;
          setPenPos({
            x: currentX,
            y: step.y1,
            angle: -150.13 + Math.sin(progress * 15) * 1.5,
          });

          if (progress >= 1) {
            const nextStep = steps[stepIdx + 1];
            if (nextStep) {
              transitionStart = { x: step.x2, y: step.y1 };
              transitionEnd = { x: nextStep.x || 165, y: nextStep.y || 200 };
              isTransitioning = true;
              transitionProgress = 0;
            }
            stepIdx++;
            setCurrentStepIdx(stepIdx);
            tickAccumulator = 0;
          }
        } else if (step.type === 'flourish') {
          const duration = 650;
          const progress = Math.min(1, tickAccumulator / duration);
          setFlourishProgress(progress);

          const t = progress;
          const curveX = 380 + (REST_POSITION.x - 380) * t;
          const curveY = REST_POSITION.y + Math.sin(t * Math.PI * 2.4) * 12 * (1 - t);

          setPenPos({
            x: curveX,
            y: curveY,
            angle: -150.13 + Math.cos(t * Math.PI * 3) * 2.5,
          });

          if (progress >= 1) {
            stepIdx++;
            setCurrentStepIdx(stepIdx);
            tickAccumulator = 0;
          }
        }

        animFrameRef.current = requestAnimationFrame(runLoop);
      } else {
        // All steps finished
        isWritingRef.current = false;
        setIsFinished(true);
        setPenPos(REST_POSITION);
        setFlourishProgress(1);
      }
    };

    animFrameRef.current = requestAnimationFrame(runLoop);
  }, [steps]);

  // Click handler: if currently writing, finish immediately; if finished, replay
  const handleClick = () => {
    if (isFinished) {
      startWritingAnimation();
    } else {
      // Instant reveal
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      isWritingRef.current = false;
      setIsFinished(true);
      setCurrentStepIdx(steps.length);
      setCurrentCharIdx(9999);
      setRuleProgress(1);
      setFlourishProgress(1);
      setPenPos(REST_POSITION);
    }
  };

  // Auto-start on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      startWritingAnimation();
    }, 350);

    return () => {
      clearTimeout(timer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [startWritingAnimation]);

  return (
    <div className="w-full py-8 sm:py-12 bg-[#fafaf9] flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 select-none font-sans overflow-x-hidden">
      {/* 100% Fully Responsive Parchment Container (3:2 Aspect Ratio) */}
      <div
        className="w-full max-w-[1024px] aspect-[1024/682] relative flex items-center justify-center cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 682"
          width="100%"
          height="100%"
          className="w-full h-full block"
          style={{ overflow: 'visible' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Embedded Google Fonts for authentic classical serif typography */}
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&display=swap');
                .doc-title {
                  font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
                  font-weight: 800;
                  font-size: 25px;
                  fill: #0c1a2e;
                  letter-spacing: 1.6px;
                }
                .doc-subtitle {
                  font-family: 'Cinzel', Georgia, serif;
                  font-weight: 600;
                  font-size: 11px;
                  fill: #5b677a;
                  letter-spacing: 2px;
                }
                .doc-heading {
                  font-family: 'Playfair Display', Georgia, serif;
                  font-weight: 700;
                  font-size: 17px;
                  fill: #09223d;
                  letter-spacing: 0.2px;
                }
                .doc-paragraph {
                  font-family: 'Playfair Display', Georgia, serif;
                  font-style: italic;
                  font-weight: 500;
                  font-size: 13.5px;
                  fill: #1e2e42;
                  letter-spacing: 0.25px;
                }
                .doc-signoff {
                  font-family: 'Playfair Display', Georgia, serif;
                  font-style: italic;
                  font-size: 12px;
                  fill: #64748b;
                  letter-spacing: 0.4px;
                }
                .doc-signature-name {
                  font-family: 'Playfair Display', Georgia, serif;
                  font-weight: 700;
                  font-style: italic;
                  font-size: 13.5px;
                  fill: #09223d;
                }
                .pen-interactive {
                  transition: transform 0.08s linear;
                }
              `}
            </style>

            {/* Realistic Shadow Filters */}
            <filter id="parchmentFloorBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="15" />
            </filter>
            <filter id="bottomLipShadowBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <filter id="cylinderDiffuseShadowBlur" x="-20%" y="-20%" width="140%" height="160%">
              <feGaussianBlur stdDeviation="4.5" />
            </filter>
            <filter id="penDropShadowBlur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id="penContactShadowBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
            <filter id="clipShadowBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" />
            </filter>

            {/* --- TOP SCROLL ROLL GRADIENTS MATCHING EXACT USER CROPS --- */}
            {/* Main Horizontal Cylinder Shading Gradient (Y: 8 to 95) */}
            <linearGradient id="authenticScrollCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fffaf4" />
              <stop offset="9%" stopColor="#fde2be" />
              <stop offset="19%" stopColor="#fdecd4" />
              <stop offset="28%" stopColor="#fef1df" />
              <stop offset="37%" stopColor="#fdf1df" />
              <stop offset="47%" stopColor="#fde7c9" />
              <stop offset="56%" stopColor="#fbdbb4" />
              <stop offset="65%" stopColor="#f5d0a2" />
              <stop offset="74%" stopColor="#ebbe8b" />
              <stop offset="84%" stopColor="#dea971" />
              <stop offset="93%" stopColor="#dca66c" />
              <stop offset="100%" stopColor="#c88f50" />
            </linearGradient>

            {/* Left Roll Hollow Tube Interior Gradient */}
            <linearGradient id="leftRollInteriorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4cb8e" />
              <stop offset="15%" stopColor="#ebb776" />
              <stop offset="38%" stopColor="#d59a56" />
              <stop offset="62%" stopColor="#9e6429" />
              <stop offset="85%" stopColor="#5c3411" />
              <stop offset="100%" stopColor="#2c1503" />
            </linearGradient>

            {/* Right Roll Hollow Tube Interior Gradient */}
            <linearGradient id="rightRollInteriorGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f4cb8e" />
              <stop offset="15%" stopColor="#ebb776" />
              <stop offset="38%" stopColor="#d59a56" />
              <stop offset="62%" stopColor="#9e6429" />
              <stop offset="85%" stopColor="#5c3411" />
              <stop offset="100%" stopColor="#2c1503" />
            </linearGradient>

            {/* Deep Contact Shadow Cast Under Roll Lip onto Paper */}
            <linearGradient id="cylinderCastShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#784318" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#925925" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#9f612d" stopOpacity="0.55" />
              <stop offset="85%" stopColor="#976d4a" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#593a22" stopOpacity="0" />
            </linearGradient>

            {/* Main Flat Parchment Paper Surface Gradient */}
            <radialGradient id="parchmentSheetGrad" cx="50%" cy="45%" r="62%">
              <stop offset="0%" stopColor="#fffefb" />
              <stop offset="35%" stopColor="#fdf7e9" />
              <stop offset="75%" stopColor="#f7e8c9" />
              <stop offset="92%" stopColor="#eed5a7" />
              <stop offset="100%" stopColor="#dfbd83" />
            </radialGradient>

            {/* Bottom Curled Lip Shadow Gradient */}
            <linearGradient id="bottomCurlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ecd29e" />
              <stop offset="45%" stopColor="#fdf3da" />
              <stop offset="80%" stopColor="#debc7f" />
              <stop offset="100%" stopColor="#916728" />
            </linearGradient>

            {/* --- LUXURY FOUNTAIN PEN GRADIENTS --- */}
            <linearGradient id="goldNibSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="18%" stopColor="#f59e0b" />
              <stop offset="36%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="64%" stopColor="#fef08a" />
              <stop offset="85%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            <linearGradient id="nibSilverInlay" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="blackLacquerBarrel" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#08090b" />
              <stop offset="14%" stopColor="#181a20" />
              <stop offset="30%" stopColor="#3d4352" />
              <stop offset="38%" stopColor="#8892a7" />
              <stop offset="44%" stopColor="#ffffff" />
              <stop offset="52%" stopColor="#4d5467" />
              <stop offset="78%" stopColor="#181a20" />
              <stop offset="100%" stopColor="#060709" />
            </linearGradient>

            <linearGradient id="goldTrimBand" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="16%" stopColor="#b45309" />
              <stop offset="35%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="68%" stopColor="#f59e0b" />
              <stop offset="88%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>

            <radialGradient id="goldCapCrown" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fef08a" />
              <stop offset="65%" stopColor="#f59e0b" />
              <stop offset="85%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>

            {/* Classical Antique Corner Filigree Motif */}
            <g id="antiqueCornerFiligree">
              <path
                d="M 0 0 C 10 -14, 26 -18, 38 -6 C 43 4, 38 18, 26 22 C 14 22, 7 12, 0 0 Z"
                fill="#946b33"
                opacity="0.9"
              />
              <path
                d="M 0 0 C -6 18, -3 36, 12 44 C 22 47, 32 39, 30 28 C 25 20, 15 20, 10 28"
                fill="none"
                stroke="#946b33"
                strokeWidth="2.8"
                strokeLinecap="round"
                opacity="0.95"
              />
              <path
                d="M 0 0 C 18 -6, 36 -3, 44 12 C 47 22, 39 32, 28 30 C 20 25, 20 15, 28 10"
                fill="none"
                stroke="#946b33"
                strokeWidth="2.8"
                strokeLinecap="round"
                opacity="0.95"
              />
              <circle cx="36" cy="36" r="3.6" fill="#946b33" opacity="0.9" />
              <circle cx="16" cy="16" r="2.4" fill="#684518" opacity="0.8" />
            </g>
          </defs>

          {/* ======================================================== */}
          {/* 1. STUDIO GROUND AMBIENT SHADOWS                         */}
          {/* ======================================================== */}
          <g id="ground_shadows">
            <ellipse
              cx="512"
              cy="656"
              rx="440"
              ry="24"
              fill="#1e1003"
              opacity="0.25"
              filter="url(#parchmentFloorBlur)"
            />
            <ellipse
              cx="512"
              cy="654"
              rx="390"
              ry="10"
              fill="#180c02"
              opacity="0.4"
              filter="url(#bottomLipShadowBlur)"
            />
          </g>

          {/* ======================================================== */}
          {/* 2. FLAT PARCHMENT PAPER SHEET                            */}
          {/* ======================================================== */}
          <g id="parchment_paper_sheet">
            {/* Main Parchment Paper Surface */}
            <path
              d="M 80 92
                 L 944 92
                 C 948 280, 952 460, 958 644
                 C 955 650, 944 654, 925 652
                 L 95 652
                 C 82 654, 75 650, 72 644
                 C 74 460, 77 280, 80 92 Z"
              fill="url(#parchmentSheetGrad)"
              stroke="#cfb27e"
              strokeWidth="1.2"
            />

            {/* Soft Aged Parchment Edge Vignette Overlay */}
            <path
              d="M 80 92 L 944 92 L 958 644 L 72 644 Z"
              fill="none"
              stroke="#b5894b"
              strokeWidth="6"
              opacity="0.18"
            />

            {/* Antique Muted Dark Inner Framing Border Line */}
            <rect
              x="119"
              y="112"
              width="786"
              height="512"
              rx="10"
              fill="none"
              stroke="#160906"
              strokeWidth="2.2"
              opacity="0.95"
            />

            {/* 4 Corner Filigree Ornaments */}
            <g transform="translate(130, 124) scale(0.95)">
              <use href="#antiqueCornerFiligree" />
            </g>
            <g transform="translate(894, 124) scale(-0.95, 0.95)">
              <use href="#antiqueCornerFiligree" />
            </g>
            <g transform="translate(130, 612) scale(0.95, -0.95)">
              <use href="#antiqueCornerFiligree" />
            </g>
            <g transform="translate(894, 612) scale(-0.95, -0.95)">
              <use href="#antiqueCornerFiligree" />
            </g>

            {/* Bottom Curled Lip of Parchment Sheet */}
            <g id="bottom_curled_edge">
              <path
                d="M 72 640
                   L 958 640
                   C 958 650, 944 656, 925 654
                   L 95 654
                   C 82 656, 72 650, 72 640 Z"
                fill="#3d2105"
                opacity="0.5"
              />
              <path
                d="M 72 639
                   C 96 642, 512 644, 958 639
                   C 958 649, 944 653, 925 652
                   C 512 655, 95 653, 72 639 Z"
                fill="url(#bottomCurlGrad)"
                stroke="#a67c3b"
                strokeWidth="0.8"
              />
              <path
                d="M 80 641 C 280 645, 750 645, 950 641"
                stroke="#fff8e7"
                strokeWidth="1.2"
                fill="none"
                opacity="0.8"
              />
            </g>
          </g>

          {/* ======================================================== */}
          {/* 3. DYNAMIC PARCHMENT CONTENT WRITTEN BY THE FOUNTAIN PEN */}
          {/* Loaded from Pen.js: zero static clutter, 100% dynamic     */}
          {/* ======================================================== */}
          <g id="written_parchment_content">
            {steps.map((step, idx) => {
              const isPast = isFinished || idx < currentStepIdx;
              const isCurrent = !isFinished && idx === currentStepIdx;
              if (!isPast && !isCurrent) return null;

              if (step.type === 'text') {
                const textToShow = isPast
                  ? step.text
                  : step.text.slice(0, currentCharIdx);

                return (
                  <text
                    key={step.id}
                    x={step.x}
                    y={step.y}
                    className={step.className}
                  >
                    {textToShow}
                  </text>
                );
              }

              if (step.type === 'rule') {
                const line2X = isPast ? step.x2 : step.x1 + (step.x2 - step.x1) * ruleProgress;

                return (
                  <g key={step.id} id="ornamental_rule">
                    <line
                      x1={step.x1}
                      y1={step.y1}
                      x2={line2X}
                      y2={step.y1}
                      stroke="#0a2540"
                      strokeWidth="1.8"
                    />
                    {isPast && (
                      <>
                        <circle cx="504" cy={step.y1} r="2" fill="#0a2540" />
                        <polygon
                          points={`512,${step.y1 - 7} 519,${step.y1} 512,${step.y1 + 7} 505,${step.y1}`}
                          fill="#0a2540"
                        />
                        <circle cx="520" cy={step.y1} r="2" fill="#0a2540" />
                      </>
                    )}
                  </g>
                );
              }

              if (step.type === 'hairline') {
                return (
                  <line
                    key={step.id}
                    x1={step.x1}
                    y1={step.y1}
                    x2={step.x2}
                    y2={step.y1}
                    stroke="#c8b493"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.65"
                  />
                );
              }

              if (step.type === 'flourish') {
                const currentFlourish = isPast ? 1 : flourishProgress;

                return (
                  <g key={step.id} id="signature_flourish">
                    <path
                      d="M 380 575 
                         C 435 558, 485 545, 510 545 
                         C 525 545, 532 554, 528 561 
                         C 522 570, 545 562, 570 554 
                         C 595 548, 610 568, 635 568 
                         C 655 568, 668 572, 680 580"
                      fill="none"
                      stroke="#09223d"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="320"
                      strokeDashoffset={320 * (1 - currentFlourish)}
                    />
                  </g>
                );
              }

              return null;
            })}
          </g>

          {/* ======================================================== */}
          {/* 4. TOP ROLLED PARCHMENT SCROLL CYLINDER                  */}
          {/* 100% Exact to media_1793859645281_aca69af3.png           */}
          {/* ======================================================== */}
          <g id="top_rolled_scroll_cylinder">
            {/* 4.1 UNDERSIDE CAST DROP SHADOW (Y: 95 to 112) */}
            <rect
              x="75"
              y="94"
              width="875"
              height="22"
              fill="#522a08"
              opacity="0.48"
              filter="url(#cylinderDiffuseShadowBlur)"
            />
            <rect
              x="82"
              y="95"
              width="862"
              height="17"
              fill="url(#cylinderCastShadow)"
            />

            {/* 4.2 MAIN HORIZONTAL CYLINDER BODY */}
            <path
              d="M 84.8 8.1 
                 L 939.2 8.1 
                 L 944.8 95 
                 L 79.2 95 Z"
              fill="url(#authenticScrollCylinder)"
            />
            {/* Top Crisp Lip */}
            <line
              x1="84.8"
              y1="8.1"
              x2="939.2"
              y2="8.1"
              stroke="#fffaf4"
              strokeWidth="0.8"
              opacity="0.8"
            />
            {/* Bottom Crisp Horizon Lip */}
            <line
              x1="79.2"
              y1="95"
              x2="944.8"
              y2="95"
              stroke="#b57835"
              strokeWidth="0.8"
            />

            {/* 4.3 LEFT ROLL CURL - EXACT TO media_1793859645281_aca69af3.png */}
            <g id="left_roll_curl" transform="translate(82, 54) rotate(-3.5)">
              <ellipse
                cx="0"
                cy="0"
                rx="18"
                ry="46"
                fill="url(#leftRollInteriorGrad)"
              />
              <ellipse
                cx="0"
                cy="0"
                rx="18"
                ry="46"
                fill="none"
                stroke="#fff7ea"
                strokeWidth="1.2"
                opacity="0.9"
              />
              <path
                d="M 0 -44 C 8 -25, 10 10, 6 36 C 4 42, 2 44, 0 45"
                fill="none"
                stroke="#5c3411"
                strokeWidth="1.2"
                opacity="0.65"
              />
            </g>

            {/* 4.4 RIGHT ROLL CURL - SYMMETRICAL RIGHT ELLIPSE */}
            <g id="right_roll_curl" transform="translate(942, 54) rotate(3.5)">
              <ellipse
                cx="0"
                cy="0"
                rx="18"
                ry="46"
                fill="url(#rightRollInteriorGrad)"
              />
              <ellipse
                cx="0"
                cy="0"
                rx="18"
                ry="46"
                fill="none"
                stroke="#fff7ea"
                strokeWidth="1.2"
                opacity="0.9"
              />
              <path
                d="M 0 -44 C -8 -25, -10 10, -6 36 C -4 42, -2 44, 0 45"
                fill="none"
                stroke="#5c3411"
                strokeWidth="1.2"
                opacity="0.65"
              />
            </g>
          </g>

          {/* ======================================================== */}
          {/* 5. 3D LUXURY FOUNTAIN PEN ASSEMBLY (ACTIVE WRITING PEN)  */}
          {/* Dynamically tracks pen tip as it writes text             */}
          {/* ======================================================== */}
          <g
            id="fountain_pen_assembly"
            className="pen-interactive"
            style={{
              transformOrigin: `${penPos.x}px ${penPos.y}px`,
              transform: !isFinished
                ? 'rotate(0deg)'
                : `rotate(${tilt.x * 0.3}deg) translate(${tilt.x * 1.5}px, ${tilt.y * 1.5}px)`,
            }}
          >
            {/* 5.1 REALISTIC FOUNTAIN PEN CAST SHADOW ONTO PARCHMENT */}
            <g transform={`translate(${penPos.x}, ${penPos.y}) rotate(${penPos.angle})`}>
              <ellipse
                cx="-2"
                cy="4"
                rx="7"
                ry="3"
                fill="#180e02"
                opacity="0.9"
                filter="url(#penContactShadowBlur)"
              />
              <path
                d="M -4 10
                   L -32 40
                   L -38 385
                   L -10 385
                   L -4 80 Z"
                fill="#2b1704"
                opacity="0.48"
                filter="url(#penDropShadowBlur)"
              />
            </g>

            {/* 5.2 THE LUXURY FOUNTAIN PEN BODY */}
            <g transform={`translate(${penPos.x}, ${penPos.y}) rotate(${penPos.angle})`}>
              {/* --- A. 18K TWO-TONE SOLID GOLD NIB (y: 0 to 68) --- */}
              <g id="gold_fountain_nib">
                <path
                  d="M 0 0 
                     C 3 10, 9 26, 15 48 
                     C 16 56, 14 63, 13 68 
                     L -13 68 
                     C -14 63, -16 56, -15 48 
                     C -9 26, -3 10, 0 0 Z"
                  fill="url(#goldNibSpecular)"
                  stroke="#5c2605"
                  strokeWidth="0.8"
                />

                <path
                  d="M 0 6 
                     C 2 14, 6 28, 9 46 
                     L -9 46 
                     C -6 28, -2 14, 0 6 Z"
                  fill="url(#nibSilverInlay)"
                  opacity="0.85"
                />

                <circle cx="0" cy="40" r="2.5" fill="#3a1e05" stroke="#78350f" strokeWidth="0.6" />
                <line x1="0" y1="0" x2="0" y2="40" stroke="#3a1e05" strokeWidth="0.9" />

                <path
                  d="M -7 48 C -7 36, -3 28, 0 26 C 3 28, 7 36, 7 48"
                  fill="none"
                  stroke="#854d0e"
                  strokeWidth="0.8"
                />
                <circle cx="-5" cy="46" r="1.1" fill="#78350f" />
                <circle cx="5" cy="46" r="1.1" fill="#78350f" />
                <circle cx="0" cy="1.2" r="1.4" fill="#ffffff" opacity="0.9" />

                {/* Fresh Wet Ink Drop on Nib Tip while writing */}
                {!isFinished && (
                  <circle cx="0" cy="2" r="2.2" fill="#09223d" opacity="0.9" />
                )}
              </g>

              {/* --- B. GOLD NIB COLLAR / FERRULE (y: 68 to 78) --- */}
              <g id="nib_ferrule_collar">
                <rect
                  x="-13.5"
                  y="68"
                  width="27"
                  height="10"
                  rx="1.5"
                  fill="url(#goldTrimBand)"
                  stroke="#5c2605"
                  strokeWidth="0.8"
                />
                <line x1="-12" y1="73" x2="12" y2="73" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
              </g>

              {/* --- C. ERGONOMIC FRONT GRIP SECTION (y: 78 to 156) --- */}
              <g id="grip_section">
                <path
                  d="M -13.5 78 
                     C -12.5 100, -16 130, -19 156 
                     L 19 156 
                     C 16 130, 12.5 100, 13.5 78 Z"
                  fill="url(#blackLacquerBarrel)"
                  stroke="#080a0f"
                  strokeWidth="0.8"
                />
                <path
                  d="M 10 80 C 12 100, 14 130, 16 154"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </g>

              {/* --- D. CENTER 24K GOLD BAND & ACCENT RINGS (y: 156 to 186) --- */}
              <g id="center_gold_bands">
                <rect
                  x="-20"
                  y="156"
                  width="40"
                  height="6"
                  rx="1"
                  fill="url(#goldTrimBand)"
                  stroke="#5c2605"
                  strokeWidth="0.8"
                />
                <rect
                  x="-21.5"
                  y="162"
                  width="43"
                  height="16"
                  rx="2"
                  fill="url(#goldTrimBand)"
                  stroke="#5c2605"
                  strokeWidth="1"
                />
                <line x1="-20.5" y1="167" x2="20.5" y2="167" stroke="#451a03" strokeWidth="0.8" />
                <line x1="-20.5" y1="172" x2="20.5" y2="172" stroke="#451a03" strokeWidth="0.8" />
                <line x1="-19.5" y1="165" x2="19.5" y2="165" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />

                <rect
                  x="-20.5"
                  y="178"
                  width="41"
                  height="8"
                  rx="1"
                  fill="url(#goldTrimBand)"
                  stroke="#5c2605"
                  strokeWidth="0.8"
                />
              </g>

              {/* --- E. MAIN PEN CAP & UPPER BARREL (y: 186 to 365) --- */}
              <g id="pen_cap_barrel">
                <path
                  d="M -21 186 
                     L -16.5 365 
                     L 16.5 365 
                     L 21 186 Z"
                  fill="url(#blackLacquerBarrel)"
                  stroke="#080a0f"
                  strokeWidth="1"
                />

                <path
                  d="M 12 188 L 9.5 363"
                  stroke="#ffffff"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <path
                  d="M 6 188 L 4 363"
                  stroke="#8892a7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </g>

              {/* --- F. POLISHED GOLD CLIP WITH ROUNDED BALL (y: 236 to 355) --- */}
              <g id="gold_clip">
                <path
                  d="M -12 238 L -6 238 L -6 352 L -12 352 Z"
                  fill="#000000"
                  opacity="0.65"
                  filter="url(#clipShadowBlur)"
                />

                <path
                  d="M -10 355 
                     L -8.5 248 
                     L -4.5 248 
                     L -6 355 Z"
                  fill="url(#goldTrimBand)"
                  stroke="#5c2605"
                  strokeWidth="0.75"
                />

                <circle
                  cx="-6.5"
                  cy="242"
                  r="5.5"
                  fill="url(#goldCapCrown)"
                  stroke="#5c2605"
                  strokeWidth="0.8"
                />
                <circle cx="-7.5" cy="240.5" r="1.8" fill="#ffffff" opacity="0.9" />

                <line x1="-7.2" y1="248" x2="-8" y2="353" stroke="#ffffff" strokeWidth="1.1" opacity="0.85" />
              </g>

              {/* --- G. GOLD TOP CROWN & CAP FINIAL (y: 365 to 395) --- */}
              <g id="pen_cap_crown">
                <rect
                  x="-16.5"
                  y="365"
                  width="33"
                  height="9"
                  rx="1.5"
                  fill="url(#goldTrimBand)"
                  stroke="#5c2605"
                  strokeWidth="0.8"
                />
                <path
                  d="M -15 374 
                     C -15 395, 15 395, 15 374 Z"
                  fill="url(#goldCapCrown)"
                  stroke="#5c2605"
                  strokeWidth="0.8"
                />
                <ellipse cx="-4" cy="382" rx="4" ry="2.2" fill="#ffffff" opacity="0.85" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export const Section06 = () => {
  return (
    <section
      id="section-06"
      className="w-full relative select-none overflow-hidden bg-[#fafaf9] border-b border-stone-200"
    >
      <Pen />
    </section>
  );
};

export { examAlerts, stories };
export default Section06;
