import React, { useState, useRef, useEffect } from 'react';
import { employeeData, newsUpdatesData } from './Section24Data';
import {
  FaTowerBroadcast,
  FaShieldHalved,
  FaBolt,
  FaRegClock,
  FaArrowRight,
  FaArrowLeft,
  FaCircleCheck,
  FaLandmark,
  FaMicrochip,
  FaTriangleExclamation,
} from 'react-icons/fa6';

// 1. BREAKING NEWS GRAPHIC SVG
/**
 * Visually attractive Breaking News Graphic for the ID Card profile area.
 * Features broadcast radar waves, satellite/tower iconography, and bold LIVE BREAKING badge.
 */
export const BreakingNewsGraphicSvg = () => {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-b from-slate-950 via-red-950 to-slate-900 flex flex-col items-center justify-between p-2 select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(220,38,38,0.45),transparent_70%)] pointer-events-none" />

      {/* Broadcasting Radar Waves SVG */}
      <div className="relative w-full h-20 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 100 80"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Signal Arcs */}
          <circle cx="50" cy="55" r="38" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" />
          <circle cx="50" cy="55" r="28" stroke="#f87171" strokeWidth="1" strokeDasharray="4 2" opacity="0.6" />
          <circle cx="50" cy="55" r="18" stroke="#ef4444" strokeWidth="1.2" opacity="0.85" />
          <circle cx="50" cy="55" r="9" stroke="#fee2e2" strokeWidth="1.4" opacity="0.95" />

          {/* Broadcast Tower Structure */}
          <path d="M50 20 L 40 68 L 60 68 Z" stroke="#cbd5e1" strokeWidth="1.2" fill="none" />
          <line x1="43" y1="40" x2="57" y2="40" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="41" y1="55" x2="59" y2="55" stroke="#cbd5e1" strokeWidth="1" />
          
          {/* Diagonal Cross Struts */}
          <line x1="43" y1="40" x2="59" y2="55" stroke="#94a3b8" strokeWidth="0.75" />
          <line x1="57" y1="40" x2="41" y2="55" stroke="#94a3b8" strokeWidth="0.75" />

          {/* Top Transmission Beacon */}
          <circle cx="50" cy="18" r="3.5" fill="#ef4444" className="animate-pulse" />
          <circle cx="50" cy="18" r="1.5" fill="#ffffff" />

          {/* Radio Waves Emitters */}
          <path d="M38 12 Q 50 6, 62 12" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
          <path d="M32 6 Q 50 -2, 68 6" stroke="#f87171" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>

      {/* Middle: BREAKING NEWS Pill */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full py-1 px-2 rounded bg-gradient-to-r from-red-600 via-rose-600 to-red-700 shadow-sm border border-red-400/50 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span className="text-[9px] font-black tracking-widest text-white uppercase font-mono">
            BREAKING
          </span>
        </div>
      </div>

      {/* Bottom: LIVE Audio Visualizer Frequency Bars */}
      <div className="relative z-10 w-full flex items-center justify-between px-1 pt-1 border-t border-red-500/30">
        <span className="text-[7px] font-mono font-bold text-red-300 tracking-wider">
          LIVE FEED
        </span>
        <div className="flex items-end gap-0.5 h-3">
          <span className="w-0.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
          <span className="w-0.5 h-3 bg-red-500 rounded-full animate-bounce" />
          <span className="w-0.5 h-2 bg-red-300 rounded-full animate-pulse" />
          <span className="w-0.5 h-3.5 bg-rose-400 rounded-full animate-bounce" />
          <span className="w-0.5 h-2 bg-red-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Subtle Inner Glass Glare */}
      <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)] pointer-events-none rounded-lg" />
    </div>
  );
};

// 2. ID CARD
// ============================================================================
// 1. SECURITY & HARDWARE SVG GRAPHICS
// ============================================================================

/**
 * High-Security Anti-Counterfeit Guilloché Micro-Pattern
 */
const GuillochePattern = ({ opacity = 0.08, color = "#0d9488" }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none select-none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
    aria-hidden="true"
  >
    <defs>
      <pattern id="guilloche-grid" width="120" height="120" patternUnits="userSpaceOnUse">
        <path
          d="M0 60 C 30 10, 90 10, 120 60 C 90 110, 30 110, 0 60 Z"
          fill="none"
          stroke={color}
          strokeWidth="0.6"
        />
        <path
          d="M0 60 C 30 25, 90 25, 120 60 C 90 95, 30 95, 0 60 Z"
          fill="none"
          stroke={color}
          strokeWidth="0.5"
        />
        <path
          d="M0 60 C 30 40, 90 40, 120 60 C 90 80, 30 80, 0 60 Z"
          fill="none"
          stroke={color}
          strokeWidth="0.4"
        />
        <path
          d="M60 0 C 10 30, 10 90, 60 120 C 110 90, 110 30, 60 0 Z"
          fill="none"
          stroke={color}
          strokeWidth="0.6"
        />
        <circle cx="60" cy="60" r="35" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="60" cy="60" r="18" fill="none" stroke={color} strokeWidth="0.4" />
      </pattern>
      
      <pattern id="micro-waves" width="60" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M0 10 Q 15 0, 30 10 T 60 10"
          fill="none"
          stroke={color}
          strokeWidth="0.4"
        />
        <path
          d="M0 16 Q 15 6, 30 16 T 60 16"
          fill="none"
          stroke={color}
          strokeWidth="0.3"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#guilloche-grid)" />
    <rect width="100%" height="100%" fill="url(#micro-waves)" />
  </svg>
);

/**
 * Realistic Gold EMV Smart Microchip with Contact Pin Tracks
 */
const EmvChip = () => (
  <div
    className="relative w-10 h-7 rounded-md overflow-hidden p-[1.5px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_1px_3px_rgba(0,0,0,0.25)] bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 flex-shrink-0"
    title="Smart Card Microchip"
  >
    <div className="w-full h-full rounded-[4px] bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-400 relative flex items-center justify-center p-0.5 border border-amber-500/60">
      <svg className="w-full h-full" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="42" height="32" rx="3" stroke="#b45309" strokeWidth="0.75" />
        <line x1="1" y1="11" x2="43" y2="11" stroke="#92400e" strokeWidth="0.65" />
        <line x1="1" y1="23" x2="43" y2="23" stroke="#92400e" strokeWidth="0.65" />
        <rect x="14" y="6" width="16" height="22" rx="2" fill="none" stroke="#78350f" strokeWidth="0.7" />
        <circle cx="22" cy="17" r="3.5" fill="none" stroke="#92400e" strokeWidth="0.6" />
        <line x1="8" y1="1" x2="8" y2="11" stroke="#92400e" strokeWidth="0.5" />
        <line x1="36" y1="1" x2="36" y2="11" stroke="#92400e" strokeWidth="0.5" />
        <line x1="8" y1="23" x2="8" y2="33" stroke="#92400e" strokeWidth="0.5" />
        <line x1="36" y1="23" x2="36" y2="33" stroke="#92400e" strokeWidth="0.5" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/15 pointer-events-none" />
    </div>
  </div>
);

/**
 * RFID / NFC Contactless Waves Icon
 */
const NfcIcon = () => (
  <svg className="w-4 h-4 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M6 8a9 9 0 0 1 0 8" />
    <path d="M9.5 5.5a13.5 13.5 0 0 1 0 13" />
    <path d="M13 3a18 18 0 0 1 0 18" />
  </svg>
);

/**
 * Vector High-Density Barcode (Code 128 emulation for Card Back)
 */
const Barcode128 = ({ code = "CR-PRESS-WIRE" }) => {
  const bars = [
    2, 1, 3, 1, 1, 2, 4, 1, 2, 2, 1, 3, 1, 4, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 2, 1, 1,
    3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 2, 3, 2, 1, 1, 4, 1, 2, 2, 1, 3, 1, 2, 1, 1, 2, 4, 1,
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-stretch h-6 w-full justify-between overflow-hidden">
        {bars.map((width, idx) => (
          <div
            key={idx}
            className={`${idx % 2 === 0 ? 'bg-slate-900' : 'bg-transparent'}`}
            style={{ width: `${width * 1.5}px` }}
          />
        ))}
      </div>
      <span className="text-[7px] font-mono tracking-[0.25em] text-slate-600 mt-0.5 uppercase">
        *{code}*
      </span>
    </div>
  );
};

/**
 * High-Precision Vector QR Code
 */
const QrCodeSvg = ({ size = 38 }) => (
  <div 
    className="bg-white p-1 rounded border border-slate-300 shadow-sm flex-shrink-0"
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 33 33" fill="none" className="w-full h-full">
      <rect x="0" y="0" width="33" height="33" fill="white" />
      <rect x="2" y="2" width="9" height="9" fill="#0f172a" />
      <rect x="3.5" y="3.5" width="6" height="6" fill="white" />
      <rect x="5" y="5" width="3" height="3" fill="#0f172a" />
      <rect x="22" y="2" width="9" height="9" fill="#0f172a" />
      <rect x="23.5" y="3.5" width="6" height="6" fill="white" />
      <rect x="25" y="5" width="3" height="3" fill="#0f172a" />
      <rect x="2" y="22" width="9" height="9" fill="#0f172a" />
      <rect x="3.5" y="23.5" width="6" height="6" fill="white" />
      <rect x="5" y="25" width="3" height="3" fill="#0f172a" />
      <g fill="#0f172a">
        <rect x="13" y="3" width="2" height="2" />
        <rect x="17" y="3" width="2" height="2" />
        <rect x="15" y="7" width="2" height="2" />
        <rect x="13" y="11" width="2" height="2" />
        <rect x="7" y="13" width="2" height="2" />
        <rect x="11" y="15" width="2" height="2" />
        <rect x="15" y="15" width="3" height="3" />
        <rect x="19" y="13" width="2" height="2" />
        <rect x="23" y="13" width="2" height="2" />
        <rect x="27" y="15" width="2" height="2" />
        <rect x="3" y="17" width="2" height="2" />
        <rect x="7" y="19" width="2" height="2" />
        <rect x="13" y="19" width="3" height="2" />
        <rect x="17" y="21" width="2" height="2" />
        <rect x="21" y="17" width="3" height="3" />
        <rect x="25" y="21" width="2" height="2" />
        <rect x="27" y="25" width="3" height="2" />
        <rect x="13" y="25" width="2" height="3" />
        <rect x="17" y="27" width="3" height="2" />
        <rect x="21" y="25" width="2" height="3" />
      </g>
    </svg>
  </div>
);

// ============================================================================
// 2. LANYARD & METALLIC SNAP CLIP
// ============================================================================

const Lanyard = () => (
  <div className="relative flex flex-col items-center select-none pointer-events-none z-20">
    <div className="relative w-72 h-60 overflow-visible flex justify-center">
      <svg
        className="absolute top-0 w-72 h-60 overflow-visible filter blur-[8px] opacity-15 translate-y-3"
        viewBox="0 0 280 250"
        fill="none"
      >
        <path d="M140 230 L 20 0 L 52 0 L 140 230 Z" fill="#000000" />
        <path d="M140 230 L 260 0 L 228 0 L 140 230 Z" fill="#000000" />
      </svg>

      <svg
        className="relative w-72 h-60 overflow-visible"
        viewBox="0 0 280 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="left-strap" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="25%" stopColor="#14b8a6" />
            <stop offset="70%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#042f2e" />
          </linearGradient>

          <linearGradient id="right-strap" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="25%" stopColor="#14b8a6" />
            <stop offset="70%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#042f2e" />
          </linearGradient>

          <pattern id="lanyard-rib" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          </pattern>
        </defs>

        <g>
          <path d="M140 236 L 24 -10 L 58 -10 L 140 236 Z" fill="url(#left-strap)" />
          <path d="M140 236 L 24 -10 L 58 -10 L 140 236 Z" fill="url(#lanyard-rib)" />
          <path d="M138 232 L 27 -10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M140 232 L 55 -10" stroke="rgba(0,0,0,0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
        </g>

        <g>
          <path d="M140 236 L 256 -10 L 222 -10 L 140 236 Z" fill="url(#right-strap)" />
          <path d="M140 236 L 256 -10 L 222 -10 L 140 236 Z" fill="url(#lanyard-rib)" />
          <path d="M142 232 L 253 -10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M140 232 L 225 -10" stroke="rgba(0,0,0,0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
        </g>

        <rect x="131" y="218" width="18" height="14" rx="2.5" fill="#334155" stroke="#1e293b" strokeWidth="0.8" />
        <line x1="133" y1="223" x2="147" y2="223" stroke="#64748b" strokeWidth="1" />
        <line x1="133" y1="227" x2="147" y2="227" stroke="#64748b" strokeWidth="1" />
      </svg>
    </div>

    {/* Turquoise Clip & Metallic Rivet */}
    <div className="relative -mt-6 z-30 flex flex-col items-center">
      <div className="absolute top-1 w-11 h-16 bg-slate-900/15 rounded-lg blur-[4px]" />

      <div
        className="relative w-9 h-14 rounded-md flex flex-col items-center justify-between p-1 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.15)]"
        style={{
          background: 'linear-gradient(135deg, #5eead4 0%, #2dd4bf 50%, #0d9488 100%)',
          border: '1.5px solid rgba(255, 255, 255, 0.65)',
        }}
      >
        <div className="w-6 h-2 rounded-full bg-slate-900/60 shadow-inner flex items-center justify-center">
          <div className="w-4 h-0.5 bg-black/80 rounded-full" />
        </div>

        <div className="relative w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-tr from-slate-300 via-slate-100 to-white shadow-[0_1px_3px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-slate-500/80" />
          </div>
          <div className="absolute top-0.5 right-1 w-1.5 h-1 rounded-full bg-white/90" />
        </div>

        <div className="w-4 h-2.5 rounded-b-sm bg-black/20 flex justify-center">
          <div className="w-2 h-1 bg-white/40 rounded-full" />
        </div>

        <div className="absolute inset-y-0 left-1 w-1.5 bg-gradient-to-r from-white/40 to-transparent rounded-l pointer-events-none" />
      </div>
    </div>
  </div>
);

// ============================================================================
// 3. CARD FRONT FACE (with Breaking News Graphic & Active News Headline)
// ============================================================================

const CardFrontFace = ({ news }) => {
  return (
    <div 
      className="relative w-full h-full bg-white text-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between p-5 border border-slate-200 select-none backface-hidden"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      <GuillochePattern opacity={0.07} color="#0d9488" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/60 pointer-events-none" />

      <div className="absolute top-1 left-6 right-6 flex justify-between text-[6px] tracking-[0.25em] text-slate-400 font-mono uppercase overflow-hidden whitespace-nowrap opacity-60">
        <span>{employeeData.securityProtocol}</span>
      </div>

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-slate-200/80">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-md bg-gradient-to-br from-teal-600 to-teal-800">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17V11L12 16L2 11V17Z" opacity="0.85" />
            </svg>
          </div>
          <div>
            <div className="font-extrabold text-sm tracking-wider text-slate-900 leading-none">
              {employeeData.company}
            </div>
            <div className="text-[9px] tracking-widest text-slate-500 font-semibold uppercase mt-0.5">
              {employeeData.division}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <NfcIcon />
          <EmvChip />
        </div>
      </div>

      {/* Main Body */}
      <div className="relative z-10 flex items-stretch space-x-4 my-2 flex-1">
        {/* Left Column: Breaking News Visual Graphic */}
        <div className="relative w-36 flex-shrink-0 flex items-center justify-center">
          <div className="relative w-full aspect-[4/4.8] rounded-xl overflow-hidden border-2 border-red-500/40 shadow-md flex items-center justify-center">
            <BreakingNewsGraphicSvg />
          </div>
        </div>

        {/* Right Column: Clearance Bar & DYNAMIC NEWS HEADING */}
        <div className="flex-1 flex flex-col justify-between overflow-hidden py-1">
          <div 
            className="relative w-full py-1.5 px-3 rounded-md overflow-hidden shadow-sm flex items-center justify-between text-white font-bold text-[9px] tracking-wider uppercase"
            style={{
              background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #b91c1c 100%)',
              boxShadow: '0 2px 6px rgba(220, 38, 38, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.45)'
            }}
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/50" />
            <span className="font-mono tracking-widest text-[9px] truncate">
              {news.category} • WIRE
            </span>
            <span className="text-[8px] bg-white/20 px-1.5 py-0.2 rounded font-sans flex-shrink-0">
              {news.indicator || 'LIVE'}
            </span>
          </div>

          {/* MAIN NEWS HEADING ON ID CARD */}
          <div className="my-auto py-2">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[9px] font-mono font-bold tracking-widest text-teal-700 uppercase">
                ACTIVE NEWS BULLETIN
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-snug font-['Montserrat',sans-serif] line-clamp-4">
              {news.headline}
            </h1>
          </div>

          {/* Real-Time Dispatch Metadata Strip */}
          <div className="p-2.5 rounded-lg bg-slate-50/90 border border-slate-200/80 text-[10px] font-mono flex flex-col gap-1">
            <div className="flex items-center justify-between text-slate-700">
              <span className="font-bold truncate">{news.source}</span>
              <span className="text-emerald-700 font-bold">{news.timestamp}</span>
            </div>
            <div className="text-slate-500 truncate text-[9px] flex items-center justify-between">
              <span>PRIORITY: {news.priority}</span>
              <span className="text-teal-700 font-bold">{news.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. CARD BACK FACE (Magnetic Stripe & Editorial Board Authorization)
// ============================================================================

const CardBackFace = ({ news }) => {
  return (
    <div 
      className="relative w-full h-full bg-slate-50 text-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-300 select-none backface-hidden"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        transform: 'rotateY(180deg)',
      }}
    >
      <GuillochePattern opacity={0.05} color="#0d9488" />

      {/* Magnetic Stripe */}
      <div className="relative w-full h-12 bg-gradient-to-b from-stone-900 via-black to-stone-900 shadow-inner flex items-center justify-end px-4">
        <div className="absolute inset-x-0 top-1 h-[1px] bg-white/20" />
        <span className="font-mono text-[7px] text-zinc-500 tracking-[0.3em]">
          HI-CO MAGNETIC ENCODED TRACK 1-2-3 • BROADCAST PASS
        </span>
      </div>

      {/* Signature & Authorization Panel */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex-1">
            <div className="flex justify-between items-center text-[8px] text-slate-500 uppercase font-semibold mb-0.5">
              <span>Authorized Wire Signature</span>
              <span className="text-[7px] text-slate-400 font-mono">EDITORIAL BOARD VERIFIED</span>
            </div>
            <div className="relative h-10 w-full bg-white rounded border border-slate-300 overflow-hidden flex items-center px-3 shadow-inner">
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 8px)'
                }}
              />
              <span className="relative font-serif italic text-base text-blue-900 font-bold select-none tracking-wider rotate-[-2deg]">
                CR News Operations
              </span>
            </div>
          </div>

          <div className="w-16">
            <div className="text-[8px] text-slate-500 uppercase font-semibold mb-0.5 text-center">
              WIRE CODE
            </div>
            <div className="h-10 bg-slate-200/90 rounded border border-slate-300 flex items-center justify-center font-mono font-bold text-xs text-slate-700">
              #2026
            </div>
          </div>
        </div>

        <div className="my-2 p-2 rounded bg-white/90 border border-slate-200 text-[8px] text-slate-600 leading-relaxed">
          <p className="font-bold text-slate-800 uppercase tracking-wider mb-0.5">
            Official Property of {employeeData.company}
          </p>
          <p>{employeeData.propertyNotice}</p>
          <p className="mt-1 font-semibold text-slate-700">
            For press verification or inquiries:
            <span className="block font-mono text-slate-500">
              Helpline: {employeeData.helpline}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-slate-200">
          <div className="flex items-center space-x-2">
            <QrCodeSvg size={38} />
            <div className="text-[8px] font-mono text-slate-500">
              <div>GATE SCAN VERIFIED</div>
              <div className="text-slate-700 font-bold">SHA-256 ENCRYPTED</div>
              <div>ID: {news?.hash || 'AUTH-CR-2026'}</div>
            </div>
          </div>
          <div className="w-44">
            <Barcode128 code="VER-WIRE-2026" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none" />
    </div>
  );
};

// ============================================================================
// 5. MAIN ID CARD COMPONENT WITH 360° ROTATION ANIMATION
// ============================================================================
function IdCard({
  activeNews = newsUpdatesData[0],
}) {
  const [currentFrontNews, setCurrentFrontNews] = useState(activeNews);
  const [spinAngle, setSpinAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(1);
  
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const isSpinningRef = useRef(false);
  const prevNewsIdRef = useRef(activeNews?.id);

  // --------------------------------------------------------------------------
  // 360° ROTATION ANIMATION TRIGGER ON NEWS CHANGE
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!activeNews || activeNews.id === prevNewsIdRef.current) return;
    prevNewsIdRef.current = activeNews.id;

    if (isSpinningRef.current) return;
    isSpinningRef.current = true;
    setIsSpinning(true);

    // Trigger full 360° spin
    setSpinAngle(360);

    // At halfway (450ms, at 180° when card is facing away): update news content
    const midTimer = setTimeout(() => {
      setCurrentFrontNews(activeNews);
    }, 450);

    // At completion (950ms, full 360° rotation complete): reset cleanly
    const endTimer = setTimeout(() => {
      setIsSpinning(false);
      setSpinAngle(0);
      isSpinningRef.current = false;
    }, 950);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(endTimer);
    };
  }, [activeNews]);

  // Responsive Scaling
  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const targetCardWidth = 564;
      if (containerWidth < targetCardWidth && containerWidth > 0) {
        const computedScale = Math.max(0.48, Math.min(1, (containerWidth - 8) / targetCardWidth));
        setScale(computedScale);
      } else {
        setScale(1);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener('resize', updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  // Mouse Parallax (ignored during 360° spin for silky smooth axis rotation)
  const handleMouseMove = (e) => {
    if (isSpinning || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    setRotate({ x: -deltaY * 11, y: deltaX * 13 });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.5,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  const toggleFlip = () => {
    if (isSpinning) return;
    setIsFlipped(prev => !prev);
  };

  const baseWidth = 564;
  const baseHeight = 670;

  return (
    <div 
      ref={containerRef}
      className="w-full flex flex-col items-center justify-start relative select-none"
    >
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .perspective-1500 {
          perspective: 1500px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        @keyframes holoShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .holo-foil {
          background: linear-gradient(
            135deg,
            rgba(255, 0, 128, 0.45) 0%,
            rgba(255, 230, 0, 0.45) 25%,
            rgba(0, 255, 170, 0.45) 50%,
            rgba(0, 180, 255, 0.45) 75%,
            rgba(255, 0, 212, 0.45) 100%
          );
          background-size: 200% 200%;
          animation: holoShimmer 6s ease infinite;
        }

        @keyframes naturalSway {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.85deg);
          }
          75% {
            transform: rotate(-0.85deg);
          }
        }

        .animate-sway {
          animation: naturalSway 6s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>

      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-teal-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Responsive Scaled Container */}
      <div 
        className="relative flex flex-col items-center justify-start"
        style={{
          width: `${baseWidth * scale}px`,
          height: `${baseHeight * scale}px`,
        }}
      >
        <div
          className="absolute top-0 origin-top flex flex-col items-center"
          style={{
            transform: `scale(${scale})`,
            width: `${baseWidth}px`,
          }}
        >
          {/* Natural Idle Sway */}
          <div className="animate-sway flex flex-col items-center">
            <Lanyard />

            {/* 3D Perspective Stage */}
            <div 
              className="perspective-1500 relative flex justify-center -mt-3"
              style={{ perspective: '1500px' }}
            >
              <div
                className="relative preserve-3d"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* 360° SPINNING HOLDER */}
                <div
                  ref={cardRef}
                  className="relative preserve-3d cursor-pointer"
                  style={{
                    transform: `rotateX(${isSpinning ? 0 : rotate.x}deg) rotateY(${(isSpinning ? 0 : rotate.y) + (isFlipped ? 180 : 0) + spinAngle}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                    transformStyle: 'preserve-3d',
                    transition: isSpinning
                      ? 'transform 950ms cubic-bezier(0.45, 0.05, 0.55, 0.95)'
                      : 'transform 100ms ease-out',
                  }}
                  onClick={toggleFlip}
                  title="Click or tap to flip badge (auto-rotates 360° on news change)"
                >
                  {/* Drop Shadow */}
                  <div 
                    className="absolute -inset-4 rounded-3xl bg-slate-900/15 blur-2xl -z-10 transition-all duration-300"
                    style={{
                      transform: `translateY(22px) translateX(${rotate.y * 1.5}px) scale(0.96)`,
                      opacity: isHovered ? 0.22 : 0.14,
                    }}
                  />

                  {/* Clear Acrylic Badge Holder */}
                  <div 
                    className="relative rounded-[26px] p-3 transition-colors duration-300"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.55)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '4.5px solid #0d9488',
                      boxShadow: `
                        0 20px 40px -10px rgba(13, 148, 136, 0.18),
                        0 0 0 1px rgba(255, 255, 255, 0.8) inset,
                        0 2px 4px rgba(0, 0, 0, 0.08) inset,
                        0 10px 25px rgba(0, 0, 0, 0.06)
                      `,
                    }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full bg-slate-800/80 border-2 border-white/90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] z-40 flex items-center justify-center">
                      <div className="w-8 h-1.5 rounded-full bg-black/90 shadow-inner" />
                    </div>

                    <div 
                      className="absolute inset-0 rounded-[22px] pointer-events-none z-30 transition-opacity duration-300 overflow-hidden"
                      style={{
                        background: `linear-gradient(
                          ${115 + rotate.y * 2}deg, 
                          transparent 25%, 
                          rgba(255, 255, 255, 0.45) 42%, 
                          rgba(255, 255, 255, 0.75) 48%, 
                          rgba(255, 255, 255, 0.15) 52%, 
                          transparent 70%
                        )`,
                        opacity: isHovered ? 0.95 : 0.6,
                      }}
                    />

                    <div
                      className="absolute inset-0 rounded-[22px] pointer-events-none z-30 transition-opacity duration-200"
                      style={{
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 65%)`,
                        opacity: glare.opacity,
                      }}
                    />

                    <div 
                      className="relative w-[540px] h-[340px] preserve-3d"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div 
                        className="absolute inset-0 preserve-3d"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <CardFrontFace news={currentFrontNews} />
                      </div>
                      <div 
                        className="absolute inset-0 preserve-3d"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <CardBackFace news={currentFrontNews} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. NEWS CARD
/**
 * High-Security Anti-Counterfeit Guilloché Micro-Pattern for NewsCard
 */

/**
 * Matching Symmetrical Lanyard for the News Card
 */
const NewsLanyard = () => (
  <div className="relative flex flex-col items-center select-none pointer-events-none z-20">
    <div className="relative w-72 h-60 overflow-visible flex justify-center">
      <svg
        className="absolute top-0 w-72 h-60 overflow-visible filter blur-[8px] opacity-15 translate-y-3"
        viewBox="0 0 280 250"
        fill="none"
      >
        <path d="M140 230 L 20 0 L 52 0 L 140 230 Z" fill="#000000" />
        <path d="M140 230 L 260 0 L 228 0 L 140 230 Z" fill="#000000" />
      </svg>

      <svg
        className="relative w-72 h-60 overflow-visible"
        viewBox="0 0 280 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="news-left-strap" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="25%" stopColor="#14b8a6" />
            <stop offset="70%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#042f2e" />
          </linearGradient>

          <linearGradient id="news-right-strap" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="25%" stopColor="#14b8a6" />
            <stop offset="70%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#042f2e" />
          </linearGradient>

          <pattern id="news-lanyard-rib" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          </pattern>
        </defs>

        <g>
          <path d="M140 236 L 24 -10 L 58 -10 L 140 236 Z" fill="url(#news-left-strap)" />
          <path d="M140 236 L 24 -10 L 58 -10 L 140 236 Z" fill="url(#news-lanyard-rib)" />
          <path d="M138 232 L 27 -10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M140 232 L 55 -10" stroke="rgba(0,0,0,0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
        </g>

        <g>
          <path d="M140 236 L 256 -10 L 222 -10 L 140 236 Z" fill="url(#news-right-strap)" />
          <path d="M140 236 L 256 -10 L 222 -10 L 140 236 Z" fill="url(#news-lanyard-rib)" />
          <path d="M142 232 L 253 -10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M140 232 L 225 -10" stroke="rgba(0,0,0,0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
        </g>

        <rect x="131" y="218" width="18" height="14" rx="2.5" fill="#334155" stroke="#1e293b" strokeWidth="0.8" />
        <line x1="133" y1="223" x2="147" y2="223" stroke="#64748b" strokeWidth="1" />
        <line x1="133" y1="227" x2="147" y2="227" stroke="#64748b" strokeWidth="1" />
      </svg>
    </div>

    {/* Turquoise Clip & Metallic Rivet */}
    <div className="relative -mt-6 z-30 flex flex-col items-center">
      <div className="absolute top-1 w-11 h-16 bg-slate-900/15 rounded-lg blur-[4px]" />

      <div
        className="relative w-9 h-14 rounded-md flex flex-col items-center justify-between p-1 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.15)]"
        style={{
          background: 'linear-gradient(135deg, #5eead4 0%, #2dd4bf 50%, #0d9488 100%)',
          border: '1.5px solid rgba(255, 255, 255, 0.65)',
        }}
      >
        <div className="w-6 h-2 rounded-full bg-slate-900/60 shadow-inner flex items-center justify-center">
          <div className="w-4 h-0.5 bg-black/80 rounded-full" />
        </div>

        <div className="relative w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-tr from-slate-300 via-slate-100 to-white shadow-[0_1px_3px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-slate-400">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-slate-500/80" />
          </div>
          <div className="absolute top-0.5 right-1 w-1.5 h-1 rounded-full bg-white/90" />
        </div>

        <div className="w-4 h-2.5 rounded-b-sm bg-black/20 flex justify-center">
          <div className="w-2 h-1 bg-white/40 rounded-full" />
        </div>

        <div className="absolute inset-y-0 left-1 w-1.5 bg-gradient-to-r from-white/40 to-transparent rounded-l pointer-events-none" />
      </div>
    </div>
  </div>
);

/**
 * Right-Side News Card with EXACT SAME outer dimensions as the Left ID Card.
 * Contains ONLY:
 * 1. News category / Breaking News indicator
 * 2. News headline
 * 3. Short description of the news
 * 4. News date and time
 * 5. Small LIVE / NEW status indicator
 */
export const NewsCard = ({
  activeNews,
  activeIndex = 0,
  totalStories = 7,
  onNext,
  onPrev,
  onSelectStory,
}) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const targetCardWidth = 564;
      if (containerWidth < targetCardWidth && containerWidth > 0) {
        const computedScale = Math.max(0.48, Math.min(1, (containerWidth - 8) / targetCardWidth));
        setScale(computedScale);
      } else {
        setScale(1);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener('resize', updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  if (!activeNews) return null;

  // Category Icon Resolver
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'CYBER INTEL':
        return <FaShieldHalved className="text-teal-600 text-xs" />;
      case 'CRIME RADAR':
        return <FaTriangleExclamation className="text-amber-600 text-xs" />;
      case 'POLICY & LAW':
        return <FaLandmark className="text-blue-600 text-xs" />;
      case 'FINTECH & TECH':
        return <FaMicrochip className="text-indigo-600 text-xs" />;
      case 'DEFENSE':
        return <FaBolt className="text-red-600 text-xs" />;
      default:
        return <FaTowerBroadcast className="text-red-600 text-xs" />;
    }
  };

  const baseWidth = 564;
  const baseHeight = 670;

  return (
    <div 
      ref={containerRef}
      className="w-full flex flex-col items-center justify-start relative select-none"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Responsive Scaled Container Matching Left ID Card */}
      <div 
        className="relative flex flex-col items-center justify-start"
        style={{
          width: `${baseWidth * scale}px`,
          height: `${baseHeight * scale}px`,
        }}
      >
        <div
          className="absolute top-0 origin-top flex flex-col items-center"
          style={{
            transform: `scale(${scale})`,
            width: `${baseWidth}px`,
          }}
        >
          {/* Natural Idle Sway & Lanyard Rig */}
          <div className="animate-sway flex flex-col items-center">
            <NewsLanyard />

            {/* Acrylic Holder - EXACT SAME as Left Card */}
            <div className="relative flex justify-center -mt-3">
              <div 
                className="relative rounded-[26px] p-3 transition-colors duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '4.5px solid #0d9488',
                  boxShadow: `
                    0 20px 40px -10px rgba(13, 148, 136, 0.18),
                    0 0 0 1px rgba(255, 255, 255, 0.8) inset,
                    0 2px 4px rgba(0, 0, 0, 0.08) inset,
                    0 10px 25px rgba(0, 0, 0, 0.06)
                  `,
                }}
              >
                {/* Top Mounting Ring Slot */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full bg-slate-800/80 border-2 border-white/90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] z-40 flex items-center justify-center">
                  <div className="w-8 h-1.5 rounded-full bg-black/90 shadow-inner" />
                </div>

                {/* Inner Card Face - EXACT SAME Proportions: w-[540px] h-[340px] */}
                <div className="relative w-[540px] h-[340px] bg-white text-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between p-5 border border-slate-200 select-none">
                  <GuillochePattern opacity={0.06} color="#0d9488" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/60 pointer-events-none" />

                  {/* 1. TOP HEADER STRIP: Bureau Name, Category & LIVE/NEW Status */}
                  <div className="relative z-10 flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-md bg-gradient-to-br from-red-600 to-rose-700">
                        <FaTowerBroadcast className="text-white text-sm" />
                      </div>
                      <div>
                        <div className="font-extrabold text-sm tracking-wider text-slate-900 leading-none">
                          PRESS
                        </div>
                        <div className="text-[9px] tracking-widest text-slate-500 font-semibold uppercase mt-0.5">
                          DIGITAL NEWS BULLETIN • LIVE DESK
                        </div>
                      </div>
                    </div>

                    {/* Small LIVE / NEW Status Indicator */}
                    <div className="flex items-center space-x-2">
                      {activeNews.isLive || activeNews.indicator === 'LIVE' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black uppercase tracking-wider shadow-xs animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          LIVE
                        </span>
                      ) : activeNews.isNew || activeNews.indicator === 'NEW' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-black uppercase tracking-wider shadow-xs">
                          <FaBolt className="text-[8px]" />
                          NEW
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 text-[9px] font-black uppercase tracking-wider border border-blue-200">
                          <FaCircleCheck className="text-[8px] text-blue-600" />
                          VERIFIED
                        </span>
                      )}

                      <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        0{activeIndex + 1} / 0{totalStories}
                      </span>
                    </div>
                  </div>

                  {/* 2. MAIN NEWS BODY: Breaking Indicator, Headline & Short Description */}
                  <div className="relative z-10 flex flex-col justify-between my-auto py-1 flex-1">
                    {/* Category or Breaking News Indicator */}
                    <div 
                      className="relative w-full py-1.5 px-3 rounded-md overflow-hidden shadow-sm flex items-center justify-between text-white font-bold text-[9px] tracking-wider uppercase mb-2"
                      style={{
                        background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #b91c1c 100%)',
                        boxShadow: '0 2px 6px rgba(220, 38, 38, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.45)'
                      }}
                    >
                      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/50" />
                      <div className="flex items-center gap-1.5 font-mono tracking-widest text-[9px] truncate">
                        {getCategoryIcon(activeNews.category)}
                        <span>BREAKING BULLETIN • {activeNews.category}</span>
                      </div>
                      <span className="text-[8px] bg-white/20 px-1.5 py-0.2 rounded font-sans flex-shrink-0">
                        {activeNews.priority || 'URGENT'}
                      </span>
                    </div>

                    {/* News Headline */}
                    <h3 className="text-base sm:text-[17px] font-black tracking-tight text-slate-900 leading-snug line-clamp-3 font-['Montserrat',sans-serif] my-1">
                      {activeNews.headline}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-1">
                      {activeNews.description}
                    </p>
                  </div>

                  {/* 3. BOTTOM STRIP: Date, Time, Source & Minimalist Controls */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-200/70 text-[10px] font-mono text-slate-500">
                    {/* News Date & Time */}
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <FaRegClock className="text-slate-400 text-xs" />
                      <span className="font-semibold">{activeNews.date}</span>
                      <span className="text-slate-300">•</span>
                      <span>{activeNews.time}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-emerald-700 font-bold">{activeNews.timestamp}</span>
                    </div>

                    {/* Minimalist Story Switcher Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={onPrev}
                        title="Previous Bulletin"
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-[10px] transition-colors cursor-pointer active:scale-95"
                      >
                        <FaArrowLeft />
                      </button>

                      {/* Pagination Indicator Dots */}
                      <div className="flex items-center gap-1 px-1">
                        {Array.from({ length: totalStories }).map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => onSelectStory && onSelectStory(idx)}
                            title={`Switch to story ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              idx === activeIndex
                                ? 'w-4 bg-red-600'
                                : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={onNext}
                        title="Next Bulletin"
                        className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-[10px] transition-colors cursor-pointer active:scale-95"
                      >
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. MAIN SECTION 24 COMPONENT
export const Section24 = () => {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalStories = newsUpdatesData.length;
  const isChangingRef = useRef(false);

  // Automatic News Rotation Timer (Cycles every 6 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveNewsIndex((curr) => (curr + 1) % totalStories);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, totalStories]);

  // Synchronized Manual Navigation Handlers (Guarded against rapid clicking)
  const handleNextStory = () => {
    if (isChangingRef.current) return;
    isChangingRef.current = true;
    setActiveNewsIndex((curr) => (curr + 1) % totalStories);
    setTimeout(() => {
      isChangingRef.current = false;
    }, 950);
  };

  const handlePrevStory = () => {
    if (isChangingRef.current) return;
    isChangingRef.current = true;
    setActiveNewsIndex((curr) => (curr - 1 + totalStories) % totalStories);
    setTimeout(() => {
      isChangingRef.current = false;
    }, 950);
  };

  const handleSelectStory = (index) => {
    if (isChangingRef.current || index === activeNewsIndex) return;
    isChangingRef.current = true;
    setActiveNewsIndex(index);
    setTimeout(() => {
      isChangingRef.current = false;
    }, 950);
  };

  const currentNews = newsUpdatesData[activeNewsIndex] || newsUpdatesData[0];

  return (
    <section
      id="section-24"
      className="w-full relative pt-12 pb-20 lg:pt-16 lg:pb-28 select-none overflow-hidden bg-[#fafafa] border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-50/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. SINGLE MAIN SECTION HEADING (Centered at Top) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-mono font-bold tracking-widest uppercase mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>CRCCF BIOMETRIC GATEWAY & BROADCAST TELEMETRY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
            Digital News Wire & Access Gateway
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 font-medium leading-relaxed max-w-2xl mx-auto">
            Accredited media telecommunications desk synchronized with biometric security credentials. Monitor real-time investigative wire bulletins with synchronized 3D card rotation telemetry.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. TWO EQUAL-SIZED CARDS (Left: 360° Spinning ID Card | Right: News Card) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center justify-items-center">
          
          {/* Left Column: ID Card with 360° Rotation Animation */}
          <div className="w-full flex justify-center items-center">
            <IdCard
              activeNews={currentNews}
            />
          </div>

          {/* Right Column: News Card with EXACT Same Outer Dimensions */}
          <div className="w-full flex justify-center items-center">
            <NewsCard
              activeNews={currentNews}
              activeIndex={activeNewsIndex}
              totalStories={totalStories}
              onNext={handleNextStory}
              onPrev={handlePrevStory}
              onSelectStory={handleSelectStory}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Section24;
