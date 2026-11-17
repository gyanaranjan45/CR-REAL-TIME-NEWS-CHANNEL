import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tv,
  Calendar,
  Eye,
  Share2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Play,
} from 'lucide-react';
import { cyberCrimeNewsData, headerConfig, safetyAdvisory } from './Section18Data';

/* =========================================================================
   1. BRANDING HEADER SUB-COMPONENT
========================================================================= */
function NewsHeader() {
  return (
    <header className="relative w-full pt-1 sm:pt-2 pb-2 px-2 sm:px-4 flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Subtle Dotted World Map Graphic */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 select-none -z-0">
        <svg
          viewBox="0 0 1000 240"
          className="w-full max-w-5xl h-24 sm:h-32 object-contain text-blue-300"
          fill="currentColor"
        >
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#93c5fd" opacity="0.45" />
            </pattern>
          </defs>
          <rect width="1000" height="240" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Main Branding Title */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 z-10 flex-nowrap"
      >
        {/* CR Red Rounded Rectangular Badge */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-[#ff1a26] via-[#e50914] to-[#b90610] text-white px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg shadow-red-500/25 border-t border-red-400/40 shrink-0">
          <span className="font-black italic tracking-tight text-xl xs:text-2xl sm:text-3xl md:text-4xl leading-none">
            {headerConfig.badge}
          </span>
          <div className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-white/30 pointer-events-none" />
        </div>

        {/* Real Time News Typography */}
        <div className="flex items-center tracking-tight font-black italic whitespace-nowrap">
          <span className="text-[#0a1945] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[44px] mr-1.5 xs:mr-2 drop-shadow-sm font-['Montserrat',sans-serif]">
            {headerConfig.titlePrimary}
          </span>
          <span className="text-[#e50914] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[44px] drop-shadow-sm font-['Montserrat',sans-serif]">
            {headerConfig.titleAccent}
          </span>
        </div>

        {/* Three Speed Stripes */}
        <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 ml-0.5 xs:ml-1 sm:ml-2 shrink-0">
          <div className="w-1 xs:w-1.5 sm:w-2 h-5 xs:h-7 sm:h-9 bg-[#e50914] -skew-x-[25deg] rounded-xs sm:rounded-sm shadow-sm" />
          <div className="w-1 xs:w-1.5 sm:w-2 h-5 xs:h-7 sm:h-9 bg-[#0a1945] -skew-x-[25deg] rounded-xs sm:rounded-sm shadow-sm" />
          <div className="w-1 xs:w-1.5 sm:w-2 h-5 xs:h-7 sm:h-9 bg-[#0a1945] -skew-x-[25deg] rounded-xs sm:rounded-sm shadow-sm" />
        </div>
      </motion.div>

      {/* Subtitle Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="flex items-center justify-center flex-wrap gap-1.5 xs:gap-2 mt-1.5 sm:mt-2 z-10 text-center max-w-4xl px-2"
      >
        <div className="flex items-center justify-center w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-md shadow-red-500/30 shrink-0">
          <Play className="w-2 h-2 xs:w-2.5 xs:h-2.5 fill-white ml-0.5" />
        </div>

        <p className="text-[10px] xs:text-xs sm:text-sm font-semibold text-[#0a1945] tracking-tight sm:tracking-normal text-center leading-tight">
          <span className="font-bold text-red-600">{headerConfig.liveBadgeText}</span>
          {headerConfig.tags.map((tag, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-1 sm:mx-1.5 text-slate-400">•</span>
              <span>{tag}</span>
            </React.Fragment>
          ))}
        </p>
      </motion.div>
    </header>
  );
}

/* =========================================================================
   2. 3D BROADCAST BOOM MICROPHONE SUB-COMPONENT (PURE CSS & SVG)
========================================================================= */
function BoomMicrophoneStand({ side = 'left', topRef, poleRef, exitRef }) {
  const isLeft = side === 'left';
  const pivotX = isLeft ? 75 : 125;
  const pivotY = 245;
  const tiltAngle = isLeft ? 22 : -22;
  const svgViewBox = isLeft ? '15 0 130 680' : '55 0 130 680';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative select-none pointer-events-none flex flex-col justify-end items-center h-full w-[65px] xs:w-[78px] sm:w-[105px] md:w-[150px] lg:w-[190px] xl:w-[220px] shrink-0 z-20 ${
        isLeft ? 'items-start' : 'items-end'
      }`}
    >
      <div className="relative w-full h-[430px] xs:h-[470px] sm:h-[520px] md:h-[580px] lg:h-[620px] xl:h-[650px] flex items-end justify-center">
        <svg
          viewBox={svgViewBox}
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id={`groundShadow-${side}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
              <stop offset="65%" stopColor="#000000" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            <linearGradient id={`baseMetal-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#080c14" />
              <stop offset="18%" stopColor="#1e293b" />
              <stop offset="38%" stopColor="#475569" />
              <stop offset="55%" stopColor="#94a3b8" />
              <stop offset="65%" stopColor="#cbd5e1" />
              <stop offset="78%" stopColor="#334155" />
              <stop offset="92%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <radialGradient id={`baseTopSurface-${side}`} cx="45%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="35%" stopColor="#1e293b" />
              <stop offset="80%" stopColor="#090d16" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>

            <linearGradient id={`poleGloss-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#060913" />
              <stop offset="25%" stopColor="#1e293b" />
              <stop offset="42%" stopColor="#64748b" />
              <stop offset="52%" stopColor="#f8fafc" />
              <stop offset="65%" stopColor="#94a3b8" />
              <stop offset="82%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id={`micHandle-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="25%" stopColor="#1e293b" />
              <stop offset="48%" stopColor="#64748b" />
              <stop offset="58%" stopColor="#e2e8f0" />
              <stop offset="72%" stopColor="#334155" />
              <stop offset="100%" stopColor="#050811" />
            </linearGradient>

            <linearGradient id={`collarGrad-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#090d16" />
              <stop offset="30%" stopColor="#334155" />
              <stop offset="55%" stopColor="#cbd5e1" />
              <stop offset="75%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id={`flagRedFace-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2233" />
              <stop offset="45%" stopColor="#e50914" />
              <stop offset="100%" stopColor="#99040c" />
            </linearGradient>

            <linearGradient id={`flagNavyFace-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b1e4c" />
              <stop offset="55%" stopColor="#071333" />
              <stop offset="100%" stopColor="#020716" />
            </linearGradient>

            <linearGradient id={`flagTopBevel-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="50%" stopColor="#e50914" />
              <stop offset="100%" stopColor="#880005" />
            </linearGradient>

            <linearGradient id={`flagRedSide-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b90610" />
              <stop offset="100%" stopColor="#440105" />
            </linearGradient>
            <linearGradient id={`flagNavySide-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#081433" />
              <stop offset="100%" stopColor="#020716" />
            </linearGradient>

            <radialGradient id={`windscreenCapsule-${side}`} cx="42%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="40%" stopColor="#1e293b" />
              <stop offset="78%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>

            <pattern id={`meshPattern-${side}`} x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="0.8" fill="#000000" opacity="0.45" />
            </pattern>
          </defs>

          {/* 1. Ground Contact Shadow */}
          <ellipse cx={pivotX} cy="660" rx="55" ry="12" fill={`url(#groundShadow-${side})`} />
          <ellipse cx={pivotX} cy="656" rx="42" ry="7" fill="#000000" opacity="0.35" />

          {/* 2. Weighted Cast Metal Base */}
          <path
            d={`M ${pivotX - 48} 642 C ${pivotX - 48} 632, ${pivotX + 48} 632, ${pivotX + 48} 642 L ${pivotX + 48} 652 C ${pivotX + 48} 662, ${pivotX - 48} 662, ${pivotX - 48} 652 Z`}
            fill={`url(#baseMetal-${side})`}
          />
          <ellipse cx={pivotX} cy="652" rx="48" ry="7" fill="#090d16" stroke="#334155" strokeWidth="0.8" />
          <ellipse cx={pivotX} cy="642" rx="48" ry="7" fill={`url(#baseTopSurface-${side})`} stroke="#475569" strokeWidth="1" />
          <ellipse cx={pivotX} cy="640" rx="34" ry="5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <rect x={pivotX - 9} y="565" width="18" height="75" fill={`url(#baseMetal-${side})`} rx="2" />
          <ellipse cx={pivotX} cy="565" rx="9" ry="2.6" fill="#475569" />

          {/* 3. Straight Vertical Black Chrome Pole */}
          <rect x={pivotX - 5.5} y="250" width="11" height="315" fill={`url(#poleGloss-${side})`} />
          <line x1={pivotX - 1} y1="250" x2={pivotX - 1} y2="565" stroke="#ffffff" strokeWidth="1.2" opacity="0.55" />

          {/* Telescopic Collar */}
          <rect x={pivotX - 8} y="410" width="16" height="14" rx="2" fill={`url(#collarGrad-${side})`} stroke="#020617" strokeWidth="0.6" />
          <ellipse cx={pivotX} cy="410" rx="8" ry="2.2" fill="#475569" />
          <ellipse cx={pivotX} cy="424" rx="8" ry="2.2" fill="#0a0f1d" />

          {/* Top Knuckle Mount */}
          <rect x={pivotX - 7} y="240" width="14" height="16" rx="2" fill={`url(#collarGrad-${side})`} stroke="#020617" strokeWidth="0.6" />
          <circle cx={pivotX} cy="245" r="7" fill={`url(#collarGrad-${side})`} stroke="#020617" strokeWidth="1" />
          <circle cx={pivotX} cy="245" r="3.2" fill="#f8fafc" stroke="#334155" strokeWidth="0.5" />
          <circle cx={pivotX} cy="245" r="1.4" fill="#020617" />

          {/* 4. Stand Cable Clips & SVG Anchors */}
          <circle ref={poleRef} cx={pivotX} cy="385" r="2" fill="none" opacity="0" pointerEvents="none" />
          <circle ref={exitRef} cx={pivotX} cy="560" r="2" fill="none" opacity="0" pointerEvents="none" />

          {isLeft ? (
            <g id="leftPoleClips">
              <rect x="68" y="380" width="14" height="10" rx="2.5" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
              <circle cx="79" cy="385" r="2.2" fill="#cbd5e1" stroke="#334155" strokeWidth="0.5" />
              <rect x="68" y="555" width="14" height="10" rx="2.5" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
              <circle cx="79" cy="560" r="2.2" fill="#cbd5e1" stroke="#334155" strokeWidth="0.5" />
            </g>
          ) : (
            <g id="rightPoleClips">
              <rect x="118" y="380" width="14" height="10" rx="2.5" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
              <circle cx="121" cy="385" r="2.2" fill="#cbd5e1" stroke="#334155" strokeWidth="0.5" />
              <rect x="118" y="555" width="14" height="10" rx="2.5" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
              <circle cx="121" cy="560" r="2.2" fill="#cbd5e1" stroke="#334155" strokeWidth="0.5" />
            </g>
          )}

          {/* 5. Tilted Microphone Assembly */}
          <g transform={`translate(${pivotX}, ${pivotY}) rotate(${tiltAngle})`}>
            <circle ref={topRef} cx="0" cy="55" r="2" fill="none" opacity="0" pointerEvents="none" />
            <path d="M -11 -12 L -6 6 L 6 6 L 11 -12 Z" fill={`url(#collarGrad-${side})`} stroke="#020617" strokeWidth="0.8" />
            <rect x="-3.5" y="6" width="7" height="12" fill={`url(#collarGrad-${side})`} stroke="#020617" strokeWidth="0.6" />
            <rect x="-8" y="10" width="16" height="35" rx="3" fill={`url(#micHandle-${side})`} stroke="#020617" strokeWidth="0.8" />
            <line x1="-2" y1="10" x2="-2" y2="45" stroke="#ffffff" strokeWidth="1.2" opacity="0.45" />
            <rect x="-6" y="45" width="12" height="10" rx="2" fill="#090d16" stroke="#475569" strokeWidth="0.6" />
            <ellipse cx="0" cy="55" rx="5" ry="2" fill="#020617" />
            <rect x="-8.5" y="-35" width="17" height="45" fill={`url(#micHandle-${side})`} stroke="#020617" strokeWidth="0.8" />
            <line x1="-2.5" y1="-35" x2="-2.5" y2="10" stroke="#ffffff" strokeWidth="1.2" opacity="0.45" />
            <rect x="-9.5" y="-37" width="19" height="3" fill="#cbd5e1" stroke="#334155" strokeWidth="0.4" />

            {/* 3D Branding Flag */}
            {isLeft ? (
              <g id="flagCubeLeft">
                <polygon points="-22,-92 -4,-100 22,-94 4,-86" fill={`url(#flagTopBevel-${side})`} stroke="#99040c" strokeWidth="0.5" />
                <polygon points="4,-86 22,-94 22,-64 4,-56" fill={`url(#flagRedFace-${side})`} stroke="#7f020a" strokeWidth="0.5" />
                <polygon points="4,-56 22,-64 22,-34 4,-26" fill={`url(#flagNavyFace-${side})`} stroke="#03081a" strokeWidth="0.5" />
                <polygon points="-22,-92 4,-86 4,-56 -22,-62" fill={`url(#flagRedSide-${side})`} stroke="#4a0105" strokeWidth="0.5" />
                <polygon points="-22,-62 4,-56 4,-26 -22,-32" fill={`url(#flagNavySide-${side})`} stroke="#01040d" strokeWidth="0.5" />
                <text x="-9" y="-70" fill="#ffffff" fontFamily="'Montserrat', 'Inter', sans-serif" fontWeight="900" fontStyle="italic" fontSize="12.5" textAnchor="middle" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.7))">CR</text>
                <text x="-9" y="-42" fill="#ffffff" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="8" letterSpacing="0.4" textAnchor="middle" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.7))">NEWS</text>
                <text x="13" y="-46" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="6.5" textAnchor="middle" transform="skewY(-10)" opacity="0.85">NEWS</text>
              </g>
            ) : (
              <g id="flagCubeRight">
                <polygon points="-22,-94 -4,-100 22,-92 4,-86" fill={`url(#flagTopBevel-${side})`} stroke="#99040c" strokeWidth="0.5" />
                <polygon points="-22,-94 -4,-86 -4,-56 -22,-64" fill={`url(#flagRedFace-${side})`} stroke="#7f020a" strokeWidth="0.5" />
                <polygon points="-22,-64 -4,-56 -4,-26 -22,-34" fill={`url(#flagNavyFace-${side})`} stroke="#03081a" strokeWidth="0.5" />
                <polygon points="-4,-86 22,-92 22,-62 -4,-56" fill={`url(#flagRedSide-${side})`} stroke="#4a0105" strokeWidth="0.5" />
                <polygon points="-4,-56 22,-62 22,-32 -4,-26" fill={`url(#flagNavySide-${side})`} stroke="#01040d" strokeWidth="0.5" />
                <text x="9" y="-70" fill="#ffffff" fontFamily="'Montserrat', 'Inter', sans-serif" fontWeight="900" fontStyle="italic" fontSize="12.5" textAnchor="middle" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.7))">CR</text>
                <text x="9" y="-42" fill="#ffffff" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="8" letterSpacing="0.4" textAnchor="middle" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.7))">NEWS</text>
                <text x="-13" y="-46" fill="#94a3b8" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="6.5" textAnchor="middle" transform="skewY(10)" opacity="0.85">NEWS</text>
              </g>
            )}

            <rect x="-9.5" y="-103" width="19" height="6" rx="1.5" fill={`url(#collarGrad-${side})`} stroke="#090d16" strokeWidth="0.6" />
            <rect x="-8.5" y="-115" width="17" height="12" fill={`url(#micHandle-${side})`} stroke="#020617" strokeWidth="0.8" />
            <line x1="-2.5" y1="-115" x2="-2.5" y2="-103" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            <path d="M -13 -115 C -15 -118, -16 -130, -16 -148 C -16 -175, -10 -185, 0 -185 C 10 -185, 16 -175, 16 -148 C 16 -130, 15 -118, 13 -115 Z" fill={`url(#windscreenCapsule-${side})`} stroke="#020617" strokeWidth="1.2" />
            <path d="M -13 -115 C -15 -118, -16 -130, -16 -148 C -16 -175, -10 -185, 0 -185 C 10 -185, 16 -175, 16 -148 C 16 -130, 15 -118, 13 -115 Z" fill={`url(#meshPattern-${side})`} />
            <path d="M -5 -118 C -7 -126, -8 -140, -8 -155 C -8 -168, -5 -178, 0 -182 C -3 -178, -4 -165, -4 -152 C -4 -138, -3 -126, -2 -118 Z" fill="#ffffff" opacity="0.35" />
            <ellipse cx="0" cy="-148" rx="15.8" ry="3.5" fill="none" stroke="#475569" strokeWidth="1.2" opacity="0.8" />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

/* =========================================================================
   3. CONTINUOUS STUDIO AUDIO XLR CABLES SUB-COMPONENT
========================================================================= */
function StudioAudioCables({
  stageRef,
  leftTopRef,
  leftPoleRef,
  leftExitRef,
  leftPortRef,
  rightTopRef,
  rightPoleRef,
  rightExitRef,
  rightPortRef,
}) {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    let animationFrameId;

    const updateCoords = () => {
      if (
        !stageRef?.current ||
        !leftTopRef?.current ||
        !leftPoleRef?.current ||
        !leftExitRef?.current ||
        !leftPortRef?.current ||
        !rightTopRef?.current ||
        !rightPoleRef?.current ||
        !rightExitRef?.current ||
        !rightPortRef?.current
      ) {
        return;
      }

      const stageRect = stageRef.current.getBoundingClientRect();
      const lTop = leftTopRef.current.getBoundingClientRect();
      const lPole = leftPoleRef.current.getBoundingClientRect();
      const lExit = leftExitRef.current.getBoundingClientRect();
      const lPort = leftPortRef.current.getBoundingClientRect();

      const rTop = rightTopRef.current.getBoundingClientRect();
      const rPole = rightPoleRef.current.getBoundingClientRect();
      const rExit = rightExitRef.current.getBoundingClientRect();
      const rPort = rightPortRef.current.getBoundingClientRect();

      if (stageRect.width === 0) {
        return;
      }

      setCoords({
        stageWidth: stageRect.width,
        left: {
          top: {
            x: lTop.left + lTop.width / 2 - stageRect.left,
            y: lTop.top + lTop.height / 2 - stageRect.top,
          },
          pole: {
            x: lPole.left + lPole.width / 2 - stageRect.left,
            y: lPole.top + lPole.height / 2 - stageRect.top,
          },
          exit: {
            x: lExit.left + lExit.width / 2 - stageRect.left,
            y: lExit.top + lExit.height / 2 - stageRect.top,
          },
          port: {
            x: lPort.left + lPort.width / 2 - stageRect.left,
            y: lPort.top + lPort.height / 2 - stageRect.top,
          },
        },
        right: {
          top: {
            x: rTop.left + rTop.width / 2 - stageRect.left,
            y: rTop.top + rTop.height / 2 - stageRect.top,
          },
          pole: {
            x: rPole.left + rPole.width / 2 - stageRect.left,
            y: rPole.top + rPole.height / 2 - stageRect.top,
          },
          exit: {
            x: rExit.left + rExit.width / 2 - stageRect.left,
            y: rExit.top + rExit.height / 2 - stageRect.top,
          },
          port: {
            x: rPort.left + rPort.width / 2 - stageRect.left,
            y: rPort.top + rPort.height / 2 - stageRect.top,
          },
        },
      });
    };

    updateCoords();

    const intervalId = setInterval(updateCoords, 40);
    const timerId = setTimeout(() => clearInterval(intervalId), 3000);

    const handleWindowChange = () => {
      updateCoords();
      animationFrameId = requestAnimationFrame(updateCoords);
    };

    window.addEventListener('resize', handleWindowChange);
    window.addEventListener('orientationchange', handleWindowChange);
    window.addEventListener('load', handleWindowChange);

    let mo;
    if (typeof MutationObserver !== 'undefined' && stageRef.current) {
      mo = new MutationObserver(() => updateCoords());
      mo.observe(stageRef.current, { childList: true, subtree: true, attributes: true });
    }

    let ro;
    if (typeof ResizeObserver !== 'undefined' && stageRef.current) {
      ro = new ResizeObserver(() => updateCoords());
      ro.observe(stageRef.current);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timerId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleWindowChange);
      window.removeEventListener('orientationchange', handleWindowChange);
      window.removeEventListener('load', handleWindowChange);
      if (mo) mo.disconnect();
      if (ro) ro.disconnect();
    };
  }, [
    stageRef,
    leftTopRef,
    leftPoleRef,
    leftExitRef,
    leftPortRef,
    rightTopRef,
    rightPoleRef,
    rightExitRef,
    rightPortRef,
  ]);

  if (!coords) return null;

  const { stageWidth, left, right } = coords;
  const isMobile = stageWidth < 640;
  const cableStroke = isMobile ? '3.4' : '4.8';
  const highlightStroke = isMobile ? '0.9' : '1.2';

  const ldx = Math.max(left.port.x - left.exit.x, 8);
  const lSag = Math.min(Math.max(ldx * 0.26, 8), 38);
  const leftSinglePath = `
    M ${left.top.x} ${left.top.y}
    C ${left.top.x - 12} ${left.top.y + 22}, ${left.pole.x - 15} ${left.pole.y - 25}, ${left.pole.x} ${left.pole.y}
    L ${left.pole.x} ${left.exit.y}
    C ${left.pole.x} ${left.exit.y + lSag}, ${left.port.x - ldx * 0.42} ${left.port.y + lSag * 0.25}, ${left.port.x} ${left.port.y}
  `;

  const rdx = Math.max(right.exit.x - right.port.x, 8);
  const rSag = Math.min(Math.max(rdx * 0.26, 8), 38);
  const rightSinglePath = `
    M ${right.top.x} ${right.top.y}
    C ${right.top.x + 12} ${right.top.y + 22}, ${right.pole.x + 15} ${right.pole.y - 25}, ${right.pole.x} ${right.pole.y}
    L ${right.pole.x} ${right.exit.y}
    C ${right.pole.x} ${right.exit.y + rSag}, ${right.port.x + rdx * 0.42} ${right.port.y + rSag * 0.25}, ${right.port.x} ${right.port.y}
  `;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-25 overflow-visible select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="singleCableGradL" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="30%" stopColor="#e50914" />
          <stop offset="70%" stopColor="#b90610" />
          <stop offset="100%" stopColor="#660005" />
        </linearGradient>

        <linearGradient id="singleCableGradR" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="30%" stopColor="#e50914" />
          <stop offset="70%" stopColor="#b90610" />
          <stop offset="100%" stopColor="#660005" />
        </linearGradient>
      </defs>

      <path
        d={leftSinglePath}
        stroke="url(#singleCableGradL)"
        strokeWidth={cableStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.22))' }}
      />
      <path
        d={leftSinglePath}
        stroke="#ffa5a8"
        strokeWidth={highlightStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />

      <path
        d={rightSinglePath}
        stroke="url(#singleCableGradR)"
        strokeWidth={cableStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.22))' }}
      />
      <path
        d={rightSinglePath}
        stroke="#ffa5a8"
        strokeWidth={highlightStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />
    </svg>
  );
}

/* =========================================================================
   4. BROADCAST ROAD CASE MACHINE SUB-COMPONENT
========================================================================= */
function BroadcastRoadCaseMachine({
  currentIndex,
  onIndexChange,
  leftPortRef,
  rightPortRef,
}) {
  const [direction, setDirection] = useState(1);
  const [copiedToast, setCopiedToast] = useState(false);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentNews = cyberCrimeNewsData[currentIndex] || cyberCrimeNewsData[0];

  const updateIndex = (newIdx, dir) => {
    setDirection(dir);
    if (onIndexChange) onIndexChange(newIdx);
  };

  const handlePrev = () => {
    const newIdx = (currentIndex - 1 + cyberCrimeNewsData.length) % cyberCrimeNewsData.length;
    updateIndex(newIdx, -1);
  };

  const handleNext = () => {
    const newIdx = (currentIndex + 1) % cyberCrimeNewsData.length;
    updateIndex(newIdx, 1);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2000);
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 350, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: { opacity: { duration: 0.18 } },
    }),
  };

  return (
    <div className="relative w-full max-w-[920px] mx-auto select-none">
      {/* Shared Gradient Defs */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <radialGradient id="caseGroundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="aluRailH" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="25%" stopColor="#f8fafc" />
            <stop offset="45%" stopColor="#cbd5e1" />
            <stop offset="75%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="aluRailV" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="25%" stopColor="#f8fafc" />
            <stop offset="45%" stopColor="#cbd5e1" />
            <stop offset="75%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <radialGradient id="chromeBallGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#e2e8f0" />
            <stop offset="65%" stopColor="#64748b" />
            <stop offset="90%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <radialGradient id="rivetGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="80%" stopColor="#475569" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <linearGradient id="footGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="30%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="handleDish" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="handleChrome" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="30%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
      </svg>

      {/* A. MOBILE VERTICAL ROAD CASE (< 768px) */}
      {isMobile ? (
        <div className="relative w-full aspect-[380/540] max-w-[340px] xs:max-w-[370px] mx-auto">
          <svg
            viewBox="0 0 380 540"
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="190" cy="528" rx="175" ry="9" fill="url(#caseGroundShadow)" />
            <rect x="55" y="510" width="42" height="15" rx="3" fill="url(#footGrad)" stroke="#020617" strokeWidth="1" />
            <rect x="283" y="510" width="42" height="15" rx="3" fill="url(#footGrad)" stroke="#020617" strokeWidth="1" />
            <rect x="18" y="14" width="344" height="500" rx="6" fill="#090e1a" stroke="#000000" strokeWidth="1.5" />
            <rect x="18" y="16" width="344" height="15" fill="url(#aluRailH)" stroke="#0f172a" strokeWidth="0.6" />
            <rect x="18" y="499" width="344" height="15" fill="url(#aluRailH)" stroke="#0f172a" strokeWidth="0.6" />
            <rect x="18" y="16" width="15" height="498" fill="url(#aluRailV)" stroke="#0f172a" strokeWidth="0.6" />
            <rect x="347" y="16" width="15" height="498" fill="url(#aluRailV)" stroke="#0f172a" strokeWidth="0.6" />

            {[45, 95, 145, 190, 235, 285, 335].map((rx, idx) => (
              <circle key={`v-top-${idx}`} cx={rx} cy="23" r="2.5" fill="url(#rivetGrad)" stroke="#0f172a" strokeWidth="0.5" />
            ))}
            {[45, 95, 145, 190, 235, 285, 335].map((rx, idx) => (
              <circle key={`v-bot-${idx}`} cx={rx} cy="506" r="2.5" fill="url(#rivetGrad)" stroke="#0f172a" strokeWidth="0.5" />
            ))}
            {[65, 120, 180, 240, 300, 360, 420, 475].map((ry, idx) => (
              <circle key={`v-left-${idx}`} cx="25" cy={ry} r="2.5" fill="url(#rivetGrad)" stroke="#0f172a" strokeWidth="0.5" />
            ))}
            {[65, 120, 180, 240, 300, 360, 420, 475].map((ry, idx) => (
              <circle key={`v-right-${idx}`} cx="354" cy={ry} r="2.5" fill="url(#rivetGrad)" stroke="#0f172a" strokeWidth="0.5" />
            ))}

            <circle cx="24" cy="22" r="8" fill="url(#chromeBallGrad)" stroke="#0f172a" strokeWidth="0.8" />
            <circle cx="356" cy="22" r="8" fill="url(#chromeBallGrad)" stroke="#0f172a" strokeWidth="0.8" />
            <circle cx="24" cy="508" r="8" fill="url(#chromeBallGrad)" stroke="#0f172a" strokeWidth="0.8" />
            <circle cx="356" cy="508" r="8" fill="url(#chromeBallGrad)" stroke="#0f172a" strokeWidth="0.8" />

            <rect x="3" y="230" width="16" height="60" rx="3" fill="url(#handleDish)" stroke="#1e293b" strokeWidth="0.8" />
            <path d="M 13 238 L 7 245 L 7 275 L 13 282" fill="none" stroke="url(#handleChrome)" strokeWidth="4.5" strokeLinecap="round" />
            <rect x="361" y="230" width="16" height="60" rx="3" fill="url(#handleDish)" stroke="#1e293b" strokeWidth="0.8" />
            <path d="M 367 238 L 373 245 L 373 275 L 367 282" fill="none" stroke="url(#handleChrome)" strokeWidth="4.5" strokeLinecap="round" />

            {/* Left XLR Audio Port */}
            <g id="vLeftPort">
              <rect x="3" y="435" width="20" height="38" rx="3" fill="#090e1a" stroke="#334155" strokeWidth="0.8" />
              <text x="13" y="443" fill="#38bdf8" fontFamily="monospace" fontSize="3.5" fontWeight="bold" textAnchor="middle">MIC 1</text>
              <circle cx="13" cy="448" r="1.2" fill="#22c55e" filter="drop-shadow(0 0 2px #22c55e)" />
              <circle cx="13" cy="459" r="6" fill="url(#aluRailH)" stroke="#090d16" strokeWidth="0.8" />
              <circle cx="13" cy="459" r="4.3" fill="#020617" />
              <rect x="2" y="455" width="9" height="8" rx="1.5" fill="url(#aluRailH)" stroke="#090d16" strokeWidth="0.7" />
              <path d="M 2 456 L -7 457.5 L -7 460.5 L 2 462 Z" fill="#99040c" stroke="#4a0105" strokeWidth="0.5" />
              <circle ref={leftPortRef} cx="-7" cy="459" r="2" fill="none" opacity="0" pointerEvents="none" />
            </g>

            {/* Right XLR Audio Port */}
            <g id="vRightPort">
              <rect x="357" y="435" width="20" height="38" rx="3" fill="#090e1a" stroke="#334155" strokeWidth="0.8" />
              <text x="367" y="443" fill="#38bdf8" fontFamily="monospace" fontSize="3.5" fontWeight="bold" textAnchor="middle">MIC 2</text>
              <circle cx="367" cy="448" r="1.2" fill="#22c55e" filter="drop-shadow(0 0 2px #22c55e)" />
              <circle cx="367" cy="459" r="6" fill="url(#aluRailH)" stroke="#090d16" strokeWidth="0.8" />
              <circle cx="367" cy="459" r="4.3" fill="#020617" />
              <rect x="369" y="455" width="9" height="8" rx="1.5" fill="url(#aluRailH)" stroke="#090d16" strokeWidth="0.7" />
              <path d="M 378 456 L 387 457.5 L 387 460.5 L 378 462 Z" fill="#99040c" stroke="#4a0105" strokeWidth="0.5" />
              <circle ref={rightPortRef} cx="387" cy="459" r="2" fill="none" opacity="0" pointerEvents="none" />
            </g>
          </svg>

          {/* Inner Display Screen */}
          <div className="absolute top-[6.2%] bottom-[8.2%] left-[9.2%] right-[9.2%] z-20 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-1 border-b border-cyan-500/30 text-white shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="bg-gradient-to-r from-[#e50914] to-[#b90610] text-white px-1.5 py-0.5 rounded text-[9.5px] font-black italic">
                  CR
                </div>
                <span className="font-bold text-[10.5px] text-slate-100">
                  Real Time News
                </span>
                <span className="text-[#e50914] font-black text-xs">//</span>
              </div>
              <div className="flex items-center gap-1 bg-[#e50914] text-white text-[8.5px] font-black uppercase px-2 py-0.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                <span>LIVE</span>
              </div>
            </div>

            {/* Middle Section: Top Visual + Bottom Small Content Box */}
            <div className="flex-1 flex flex-col justify-between gap-1.5 my-1.5 overflow-hidden min-h-0">
              <div
                className="h-[46%] relative rounded-lg overflow-hidden border border-cyan-400/60 bg-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.25)] shrink-0"
              >
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentNews.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={currentNews.image}
                      alt={currentNews.headlinePrefix}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute top-1.5 left-1.5 flex items-center gap-1 bg-red-600 text-white text-[7.5px] font-black px-1.5 py-0.5 rounded shadow-sm">
                      <span>BREAKING NEWS //</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="flex-1 relative rounded-lg border border-cyan-400/50 bg-[#020b24]/90 backdrop-blur-sm p-2 flex flex-col justify-between shadow-md overflow-hidden min-h-0"
              >
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentNews.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <div className="inline-flex items-center gap-1 bg-[#e50914] text-white text-[7.5px] font-bold px-1.5 py-0.5 rounded-full">
                          <Tv className="w-2 h-2" />
                          <span>{currentNews.category}</span>
                        </div>
                        <div className="flex items-center gap-1 border border-red-500/60 bg-red-950/40 text-red-400 text-[7.5px] font-bold px-1 py-0.5 rounded-full">
                          <span className="h-1 w-1 rounded-full bg-red-500" />
                          <span>LIVE</span>
                        </div>
                      </div>

                      <h4 className="text-white font-extrabold text-[10.5px] sm:text-[11px] leading-tight tracking-tight mb-0.5 line-clamp-2">
                        <span>{currentNews.headlinePrefix}</span>
                        <span className="text-[#facc15] font-black underline decoration-red-500 decoration-1 underline-offset-2">
                          {currentNews.headlineHighlight}
                        </span>
                      </h4>

                      <div className="w-8 h-0.5 bg-gradient-to-r from-red-600 to-transparent rounded-full mb-0.5" />

                      <p className="text-slate-300 text-[8.5px] leading-snug line-clamp-2">
                        {currentNews.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-cyan-500/20 text-slate-400 text-[8px] font-medium mt-auto">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        <span>{currentNews.date}</span>
                        <span className="text-slate-600">|</span>
                        <Eye className="w-2.5 h-2.5" />
                        <span>{currentNews.views}</span>
                      </div>

                      <button
                        onClick={handleShare}
                        className="flex items-center gap-0.5 text-slate-300 hover:text-white"
                      >
                        <Share2 className="w-2.5 h-2.5 text-cyan-400" />
                        <span>{copiedToast ? 'Copied!' : 'Share'}</span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Machine Controls */}
            <div className="flex items-center justify-between pt-1 border-t border-cyan-500/30 text-white shrink-0">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 bg-[#020b24] hover:bg-slate-800 text-slate-200 text-[9.5px] font-bold px-2.5 py-0.5 rounded-full border border-slate-400/60 shadow-xs transition-colors"
              >
                <ArrowLeft className="w-2.5 h-2.5" />
                <span>Prev</span>
              </button>

              <div className="flex items-center gap-1.5">
                {cyberCrimeNewsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => updateIndex(idx, idx > currentIndex ? 1 : -1)}
                    className="focus:outline-none p-0.5"
                  >
                    {idx === currentIndex ? (
                      <span className="block w-2 h-2 rounded-full bg-[#e50914] ring-1 ring-white" />
                    ) : (
                      <span className="block w-2 h-2 rounded-full border border-slate-400 bg-transparent" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-1 bg-[#020b24] hover:bg-slate-800 text-slate-200 text-[9.5px] font-bold px-2.5 py-0.5 rounded-full border border-slate-400/60 shadow-xs transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* B. DESKTOP WIDESCREEN ROAD CASE (>= 768px) */
        <div className="relative w-full aspect-[920/480]">
          <svg
            viewBox="0 0 920 480"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="460" cy="466" rx="420" ry="12" fill="url(#caseGroundShadow)" />
            <ellipse cx="460" cy="464" rx="350" ry="8" fill="#000000" opacity="0.45" />

            <rect x="110" y="446" width="55" height="18" rx="4" fill="url(#footGrad)" stroke="#020617" strokeWidth="1" />
            <line x1="110" y1="452" x2="165" y2="452" stroke="#334155" strokeWidth="0.8" />
            <rect x="755" y="446" width="55" height="18" rx="4" fill="url(#footGrad)" stroke="#020617" strokeWidth="1" />
            <line x1="755" y1="452" x2="810" y2="452" stroke="#334155" strokeWidth="0.8" />

            <rect x="25" y="20" width="870" height="428" rx="6" fill="#090e1a" stroke="#000000" strokeWidth="1.5" />
            <path d="M 40 20 L 880 20 L 860 30 L 60 30 Z" fill="#030712" opacity="0.8" />

            <rect x="25" y="24" width="870" height="16" fill="url(#aluRailH)" stroke="#0f172a" strokeWidth="0.6" />
            <line x1="25" y1="28" x2="895" y2="28" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
            <rect x="25" y="432" width="870" height="16" fill="url(#aluRailH)" stroke="#0f172a" strokeWidth="0.6" />
            <line x1="25" y1="444" x2="895" y2="444" stroke="#000000" strokeWidth="0.8" opacity="0.8" />
            <rect x="25" y="24" width="16" height="424" fill="url(#aluRailV)" stroke="#0f172a" strokeWidth="0.6" />
            <line x1="29" y1="24" x2="29" y2="448" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
            <rect x="879" y="24" width="16" height="424" fill="url(#aluRailV)" stroke="#0f172a" strokeWidth="0.6" />
            <line x1="891" y1="24" x2="891" y2="448" stroke="#000000" strokeWidth="0.8" opacity="0.8" />

            {[75, 140, 220, 310, 400, 460, 520, 610, 700, 780, 845].map((rx, idx) => (
              <circle key={`top-rivet-${idx}`} cx={rx} cy="32" r="3.2" fill="url(#rivetGrad)" stroke="#0f172a" strokeWidth="0.6" />
            ))}
            {[75, 140, 220, 310, 400, 460, 520, 610, 700, 780, 845].map((rx, idx) => (
              <circle key={`bot-rivet-${idx}`} cx={rx} cy="440" r="3.2" fill="url(#rivetGrad)" stroke="#0f172a" strokeWidth="0.6" />
            ))}
            {[75, 135, 195, 255, 315, 375].map((ry, idx) => (
              <circle key={`left-rivet-${idx}`} cx="33" cy={ry} r="3.2" fill="url(#rivetGrad)" stroke="#0f172a" strokeWidth="0.6" />
            ))}
            {[75, 135, 195, 255, 315, 375].map((ry, idx) => (
              <circle key={`right-rivet-${idx}`} cx="887" cy={ry} r="3.2" fill="url(#rivetGrad)" stroke="#0f172a" strokeWidth="0.6" />
            ))}

            <circle cx="33" cy="32" r="11" fill="url(#chromeBallGrad)" stroke="#0f172a" strokeWidth="1" />
            <circle cx="887" cy="32" r="11" fill="url(#chromeBallGrad)" stroke="#0f172a" strokeWidth="1" />
            <circle cx="33" cy="440" r="11" fill="url(#chromeBallGrad)" stroke="#0f172a" strokeWidth="1" />
            <circle cx="887" cy="440" r="11" fill="url(#chromeBallGrad)" stroke="#0f172a" strokeWidth="1" />

            <rect x="5" y="195" width="20" height="85" rx="5" fill="url(#handleDish)" stroke="#1e293b" strokeWidth="1" />
            <path d="M 18 205 L 10 215 L 10 260 L 18 270" fill="none" stroke="url(#handleChrome)" strokeWidth="6" strokeLinecap="round" />
            <rect x="895" y="195" width="20" height="85" rx="5" fill="url(#handleDish)" stroke="#1e293b" strokeWidth="1" />
            <path d="M 902 205 L 910 215 L 910 260 L 902 270" fill="none" stroke="url(#handleChrome)" strokeWidth="6" strokeLinecap="round" />

            {/* Left XLR Audio Port */}
            <g id="wLeftPort">
              <rect x="6" y="386" width="23" height="46" rx="4" fill="#090e1a" stroke="#334155" strokeWidth="0.8" />
              <text x="8" y="396" fill="#38bdf8" fontFamily="monospace" fontSize="4.2" fontWeight="bold">MIC 1</text>
              <circle cx="19" cy="402" r="1.4" fill="#22c55e" filter="drop-shadow(0 0 3px #22c55e)" />
              <circle cx="18" cy="414" r="7.2" fill="url(#aluRailH)" stroke="#090d16" strokeWidth="0.8" />
              <circle cx="18" cy="414" r="5.2" fill="#020617" />
              <rect x="2" y="409" width="12" height="10" rx="1.5" fill="url(#aluRailH)" stroke="#090d16" strokeWidth="0.7" />
              <path d="M -4 410.5 L -12 412 L -12 416 L -4 417.5 Z" fill="#99040c" stroke="#4a0105" strokeWidth="0.5" />
              <circle ref={leftPortRef} cx="-12" cy="414" r="2" fill="none" opacity="0" pointerEvents="none" />
            </g>

            {/* Right XLR Audio Port */}
            <g id="wRightPort">
              <rect x="891" y="386" width="23" height="46" rx="4" fill="#090e1a" stroke="#334155" strokeWidth="0.8" />
              <text x="894" y="396" fill="#38bdf8" fontFamily="monospace" fontSize="4.2" fontWeight="bold">MIC 2</text>
              <circle cx="901" cy="402" r="1.4" fill="#22c55e" filter="drop-shadow(0 0 3px #22c55e)" />
              <circle cx="902" cy="414" r="7.2" fill="url(#aluRailH)" stroke="#090d16" strokeWidth="0.8" />
              <circle cx="902" cy="414" r="5.2" fill="#020617" />
              <rect x="906" y="409" width="12" height="10" rx="1.5" fill="url(#aluRailH)" stroke="#090d16" strokeWidth="0.7" />
              <path d="M 924 410.5 L 932 412 L 932 416 L 924 417.5 Z" fill="#99040c" stroke="#4a0105" strokeWidth="0.5" />
              <circle ref={rightPortRef} cx="932" cy="414" r="2" fill="none" opacity="0" pointerEvents="none" />
            </g>
          </svg>

          {/* Inner Display Screen */}
          <div className="absolute inset-0 pt-[9.2%] pb-[11.2%] pl-[5.4%] pr-[5.4%] z-20 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1.5 border-b border-cyan-500/30 text-white shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="bg-gradient-to-r from-[#e50914] to-[#b90610] text-white px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-black italic">
                  CR
                </div>
                <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-100">
                  Real Time News
                </span>
                <span className="text-[#e50914] font-black text-xs">//</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-cyan-400">
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-mono font-bold text-slate-200">
                  NEWS BROADCAST & MEDIA CONTROL UNIT
                </span>
              </div>

              <div className="flex items-center gap-1 bg-[#e50914] text-white text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                <span>LIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 sm:gap-3 flex-1 items-stretch my-1.5 overflow-hidden">
              <div className="col-span-6 h-full relative rounded-xl sm:rounded-2xl overflow-hidden border border-cyan-400/50 bg-slate-950 shadow-md">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentNews.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={currentNews.image}
                      alt={currentNews.headlinePrefix}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="col-span-6 h-full relative rounded-xl sm:rounded-2xl border border-cyan-400/50 bg-[#020b24]/90 backdrop-blur-sm p-3 sm:p-3.5 flex flex-col justify-between shadow-md overflow-hidden"
              >
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentNews.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1.5 mb-1.5">
                        <div className="inline-flex items-center gap-1 bg-[#e50914] text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                          <Tv className="w-2.5 h-2.5" />
                          <span>{currentNews.category}</span>
                        </div>
                        <div className="flex items-center gap-1 border border-red-500/60 bg-red-950/40 text-red-400 text-[8.5px] sm:text-[9.5px] font-bold px-1.5 py-0.5 rounded-full">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                          <span>LIVE</span>
                        </div>
                      </div>

                      <h3 className="text-white font-extrabold text-xs sm:text-sm md:text-[15px] lg:text-base leading-snug tracking-tight mb-1">
                        <span>{currentNews.headlinePrefix}</span>
                        <span className="text-[#facc15] font-black underline decoration-red-500 decoration-2 underline-offset-3">
                          {currentNews.headlineHighlight}
                        </span>
                      </h3>

                      <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent rounded-full mb-1.5" />

                      <p className="text-slate-300 text-[10px] sm:text-[11px] leading-relaxed line-clamp-3">
                        {currentNews.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1.5 border-t border-cyan-500/20 text-slate-400 text-[9px] sm:text-[10px] font-medium mt-auto">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>{currentNews.date}</span>
                        </div>
                        <span className="text-slate-600">|</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>{currentNews.views}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleShare}
                        className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                      >
                        <Share2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                        <span>{copiedToast ? 'Copied!' : 'Share'}</span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Machine Controls */}
            <div className="flex items-center justify-between pt-1 border-t border-cyan-500/30 text-white shrink-0">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 bg-[#020b24] hover:bg-slate-800 text-slate-200 hover:text-white text-[10px] sm:text-xs font-bold px-3 py-0.5 sm:py-1 rounded-full border border-slate-300/60 shadow-xs transition-all"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {cyberCrimeNewsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => updateIndex(idx, idx > currentIndex ? 1 : -1)}
                    className="focus:outline-none p-1"
                  >
                    {idx === currentIndex ? (
                      <span className="block w-2.5 h-2.5 rounded-full bg-[#e50914] ring-2 ring-white" />
                    ) : (
                      <span className="block w-2.5 h-2.5 rounded-full border border-slate-400 bg-transparent" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-1 bg-[#020b24] hover:bg-slate-800 text-slate-200 hover:text-white text-[10px] sm:text-xs font-bold px-3 py-0.5 sm:py-1 rounded-full border border-slate-300/60 shadow-xs transition-all"
              >
                <span>Next</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   5. COMPACT ACTIVE STORY CARD SUB-COMPONENT (MOBILE ONLY)
========================================================================= */
function CompactActiveStoryCard({ activeNews }) {
  const [copied, setCopied] = useState(false);

  if (!activeNews) return null;

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-[340px] xs:max-w-[370px] mx-auto select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNews.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(10,25,69,0.08)] p-3 xs:p-3.5 transition-all overflow-hidden"
        >
          <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-red-600 via-cyan-500 to-red-600 rounded-full opacity-70" />

          {/* Badges Row */}
          <div className="flex items-center justify-between flex-wrap gap-1 mb-1.5 pt-0.5">
            <div className="flex items-center gap-1.5">
              <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#e50914] to-[#b90610] text-white text-[9.5px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                <Tv className="w-2.5 h-2.5" />
                <span>{activeNews.category}</span>
              </div>
              <div className="flex items-center gap-1 bg-red-50 text-red-600 border border-red-200 text-[9px] font-bold px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                <span>LIVE FEED</span>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-semibold px-2 py-0.5 rounded-full">
              <ShieldCheck className="w-2.5 h-2.5 text-emerald-600" />
              <span>CRCCF Verified</span>
            </div>
          </div>

          {/* Headline */}
          <h3 className="text-slate-900 font-extrabold text-xs xs:text-[13px] leading-snug tracking-tight mb-1 line-clamp-2">
            <span>{activeNews.headlinePrefix}</span>
            <span className="text-[#eab308] font-black underline decoration-[#e50914] decoration-2 underline-offset-2">
              {activeNews.headlineHighlight}
            </span>
          </h3>

          <div className="w-10 h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded-full mb-1.5" />

          <p className="text-slate-600 text-[10.5px] xs:text-[11px] leading-relaxed line-clamp-2 mb-2">
            {activeNews.description}
          </p>

          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 rounded-lg px-2 py-1 text-[9.5px] text-slate-600 mb-2">
            <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0" />
            <span className="truncate">{safetyAdvisory.points[0]}</span>
          </div>

          <div className="flex items-center justify-between gap-1.5 pt-2 border-t border-slate-100 shrink-0">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
              <div className="flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5 text-slate-400" />
                <span>{activeNews.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Eye className="w-2.5 h-2.5 text-slate-400" />
                <span>{activeNews.views}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] text-slate-600 hover:text-red-600 hover:bg-red-50 border border-slate-200 transition-colors"
                title="Share Story"
              >
                <Share2 className="w-3 h-3 text-cyan-600" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {copied && (
            <div className="text-center text-[9.5px] text-emerald-600 font-bold mt-1">
              ✓ Story link copied!
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* =========================================================================
   6. MAIN DEDICATED EXPORT: CYBERCRIMENEWS
========================================================================= */
function CyberCrimeNews() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const stageRef = useRef(null);
  const leftTopRef = useRef(null);
  const leftPoleRef = useRef(null);
  const leftExitRef = useRef(null);
  const leftPortRef = useRef(null);
  const rightTopRef = useRef(null);
  const rightPoleRef = useRef(null);
  const rightExitRef = useRef(null);
  const rightPortRef = useRef(null);

  const activeNews = cyberCrimeNewsData[activeStoryIndex] || cyberCrimeNewsData[0];

  return (
    <div className="w-full bg-[#ffffff] text-slate-900 flex flex-col justify-start relative overflow-x-hidden">
      {/* Background Radial Atmospheric Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[340px] bg-gradient-to-b from-blue-100/30 via-blue-50/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-20 left-6 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-20 right-6 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Main Studio Frame Container */}
      <div className="w-full max-w-[1580px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 pt-3 sm:pt-6 pb-10 flex flex-col items-center justify-start z-10">
        <NewsHeader />

        {/* Studio Stage */}
        <main
          ref={stageRef}
          className="relative w-full flex items-end justify-center md:justify-between gap-1 xs:gap-2 sm:gap-3 md:gap-5 lg:gap-8 mt-2 sm:mt-4 md:mt-6 select-none"
        >
          {/* Left Boom Microphone Stand */}
          <div className="flex shrink-0 items-end justify-start">
            <BoomMicrophoneStand
              side="left"
              topRef={leftTopRef}
              poleRef={leftPoleRef}
              exitRef={leftExitRef}
            />
          </div>

          {/* Centerpiece Broadcast Road Case Machine */}
          <div className="flex-1 flex flex-col w-full max-w-[340px] xs:max-w-[370px] md:max-w-[940px] mx-auto mb-1">
            <BroadcastRoadCaseMachine
              currentIndex={activeStoryIndex}
              onIndexChange={setActiveStoryIndex}
              leftPortRef={leftPortRef}
              rightPortRef={rightPortRef}
            />
          </div>

          {/* Right Boom Microphone Stand */}
          <div className="flex shrink-0 items-end justify-end">
            <BoomMicrophoneStand
              side="right"
              topRef={rightTopRef}
              poleRef={rightPoleRef}
              exitRef={rightExitRef}
            />
          </div>

          {/* Continuous Red Studio XLR Cables */}
          <div className="block">
            <StudioAudioCables
              stageRef={stageRef}
              leftTopRef={leftTopRef}
              leftPoleRef={leftPoleRef}
              leftExitRef={leftExitRef}
              leftPortRef={leftPortRef}
              rightTopRef={rightTopRef}
              rightPoleRef={rightPoleRef}
              rightExitRef={rightExitRef}
              rightPortRef={rightPortRef}
            />
          </div>
        </main>

        {/* Dedicated Active Story Content Card Box Below Machine (MOBILE ONLY) */}
        <div className="w-full block md:hidden mt-3 sm:mt-4">
          <CompactActiveStoryCard
            activeNews={activeNews}
          />
        </div>
      </div>
    </div>
  );
}

export const Section18 = () => {
  return (
    <section
      id="section-18"
      className="w-full relative py-6 lg:py-10 select-none overflow-hidden bg-white border-b border-slate-200"
    >
      <CyberCrimeNews />
    </section>
  );
};

export default Section18;
