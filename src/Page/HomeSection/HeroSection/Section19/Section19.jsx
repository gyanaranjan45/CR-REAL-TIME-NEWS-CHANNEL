import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { announcementData } from './Section19Data';

/**
 * Pre-computed 22 interlocking metallic chain links along natural catenary U-curve
 * Securely anchored at Rear Body (46.0, 167.0) and Handle D-Ring (154.0, 259.0)
 */
const CHAIN_LINKS = [
  { index:  0, x:  46.0, y: 167.0, angle:    5.9, isFlat: true },
  { index:  1, x:  45.3, y: 176.1, angle:    2.6, isFlat: false },
  { index:  2, x:  45.2, y: 185.2, angle:   -0.7, isFlat: true },
  { index:  3, x:  45.6, y: 194.3, angle:   -4.2, isFlat: false },
  { index:  4, x:  46.5, y: 203.3, angle:   -7.8, isFlat: true },
  { index:  5, x:  48.0, y: 212.2, angle:  -11.7, isFlat: false },
  { index:  6, x:  50.2, y: 221.0, angle:  -15.8, isFlat: true },
  { index:  7, x:  53.0, y: 229.6, angle:  -20.4, isFlat: false },
  { index:  8, x:  56.5, y: 238.1, angle:  -25.5, isFlat: true },
  { index:  9, x:  60.8, y: 246.0, angle:  -31.1, isFlat: false },
  { index: 10, x:  65.9, y: 253.4, angle:  -37.6, isFlat: true },
  { index: 11, x:  71.9, y: 260.3, angle:  -45.1, isFlat: false },
  { index: 12, x:  78.7, y: 266.1, angle:  -53.6, isFlat: true },
  { index: 13, x:  86.4, y: 270.9, angle:  -63.2, isFlat: false },
  { index: 14, x:  94.8, y: 274.2, angle:  -73.5, isFlat: true },
  { index: 15, x: 103.7, y: 276.0, angle:  -84.1, isFlat: false },
  { index: 16, x: 112.9, y: 276.1, angle:  -94.1, isFlat: true },
  { index: 17, x: 121.8, y: 274.8, angle: -102.9, isFlat: false },
  { index: 18, x: 130.5, y: 272.2, angle: -110.5, isFlat: true },
  { index: 19, x: 138.7, y: 268.6, angle: -116.8, isFlat: false },
  { index: 20, x: 146.5, y: 264.1, angle: -122.1, isFlat: true },
  { index: 21, x: 154.0, y: 259.0, angle: -126.6, isFlat: false },
];

/**
 * 3D Megaphone Illustration Component (Pure CSS + SVG)
 */
function MegaphoneGraphic({ mouthAnchorRef, flashActive }) {
  return (
    <div className="relative w-full max-w-[480px] h-[220px] sm:h-[280px] lg:h-[380px] flex items-center justify-center select-none overflow-visible mx-auto">
      <div className="megaphone-scaler relative w-[440px] h-[320px] flex items-center justify-center overflow-visible">
        {/* Background Concentric Ripples */}
        <div className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none z-[1]" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] rounded-full border-[1.5px] border-blue-600/[0.08]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-blue-600/[0.05]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[410px] h-[410px] rounded-full border border-blue-600/[0.03]" />
        </div>

        {/* Multi-Layer Floor Shadows */}
        <div className="absolute inset-0 pointer-events-none z-[2]" aria-hidden="true">
          <div className="absolute left-[16%] bottom-1 w-[290px] h-[26px] bg-[radial-gradient(ellipse_at_center,rgba(16,42,94,0.32)_0%,transparent_72%)] rounded-full blur-[10px]" />
          <div className="absolute left-[24%] bottom-[6px] w-[90px] h-[18px] bg-[radial-gradient(ellipse_at_center,rgba(16,42,94,0.42)_0%,transparent_70%)] rounded-full blur-[6px]" />
          <div className="absolute right-[6%] bottom-2 w-[140px] h-[22px] bg-[radial-gradient(ellipse_at_center,rgba(16,42,94,0.36)_0%,transparent_70%)] rounded-full blur-[8px]" />
        </div>

        {/* Floating Megaphone Mechanical Assembly */}
        <motion.div
          className="relative w-[440px] h-[320px] z-10 overflow-visible"
          initial={{ opacity: 0, x: -25, y: 8, rotate: -6 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            y: [-2, 3, -2],
            rotate: [-4, -3, -4]
          }}
          transition={{
            opacity: { duration: 0.8, ease: 'easeOut' },
            x: { duration: 0.8, ease: 'easeOut' },
            y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
            rotate: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' }
          }}
        >
          {/* Measured Emitter Anchor at Megaphone Mouth Opening */}
          <div 
            ref={mouthAnchorRef}
            className="absolute w-1 h-1 pointer-events-none -translate-x-1/2 -translate-y-1/2 invisible"
            style={{ left: '332px', top: '135px' }}
            aria-hidden="true"
          />

          {/* Flash & Shockwave Pulse */}
          {flashActive && (
            <div 
              className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 z-40"
              style={{ left: '332px', top: '135px' }}
              aria-hidden="true"
            >
              <motion.div
                initial={{ scale: 0.1, opacity: 1 }}
                animate={{ scale: [0.1, 2.5, 3.2], opacity: [1, 0.9, 0] }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
                className="absolute -left-8 -top-8 w-16 h-16 rounded-full blur-[1.5px]"
                style={{ background: 'radial-gradient(circle, #ffffff 0%, #ff4d4d 40%, rgba(237, 8, 8, 0.8) 70%, transparent 100%)' }}
              />
              <motion.div
                initial={{ scale: 0.15, opacity: 1 }}
                animate={{ scale: [0.15, 3.5], opacity: [1, 0] }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute -left-[42px] -top-[42px] w-[84px] h-[84px] rounded-full border-[3px] border-[#ff2222] shadow-[0_0_20px_rgba(237,8,8,0.9),inset_0_0_10px_rgba(255,255,255,0.9)]"
              />
            </div>
          )}

          {/* Radiating Red Sound Waves */}
          <div className="sound-waves-cluster absolute top-[65px] left-[336px] w-[75px] h-[140px] z-25 pointer-events-none" aria-hidden="true">
            <div className="sound-ray sound-ray-top absolute top-[14px] left-[20px] w-8 h-[11px] -rotate-[38deg] rounded-md bg-gradient-to-br from-[#ff3b30] via-[#ed0808] to-[#c90000] shadow-[0_2px_8px_rgba(237,8,8,0.45)]" />
            <div className="sound-ray sound-ray-mid absolute top-[64px] left-[14px] w-10 h-3 -rotate-[10deg] rounded-md bg-gradient-to-br from-[#ff3b30] via-[#ed0808] to-[#c90000] shadow-[0_2px_8px_rgba(237,8,8,0.45)]" />
            <div className="sound-ray sound-ray-bottom absolute top-[114px] left-[20px] w-8 h-[11px] rotate-[22deg] rounded-md bg-gradient-to-br from-[#ff3b30] via-[#ed0808] to-[#c90000] shadow-[0_2px_8px_rgba(237,8,8,0.45)]" />
          </div>

          {/* Megaphone Barrel Assembly */}
          <div className="absolute top-[25px] left-[10px] w-[410px] h-[245px] overflow-visible">
            {/* Rear Black Housing */}
            <div className="absolute left-0 top-[65px] w-12 h-[90px] z-11">
              <div className="absolute left-0 top-0 w-10 h-[90px] rounded-l-[20px] rounded-r-[4px] bg-gradient-to-b from-[#4a505a] via-[#2c3038] to-[#22252a] shadow-[-4px_4px_10px_rgba(0,0,0,0.4),inset_1.5px_2px_2px_rgba(255,255,255,0.4),inset_-1px_-2px_3px_rgba(0,0,0,0.8)] border-l border-white/20">
                <div className="absolute right-0 top-0 w-2 h-[90px] bg-gradient-to-b from-[#5c626c] via-[#1f2227] to-[#0d0e11] border-r border-black/60" />
                <div className="absolute -top-[9px] left-3 w-[15px] h-2.5 bg-gradient-to-r from-[#1b1d22] via-[#4a505b] to-[#151619] rounded-t-[3px] rounded-b-[1px] shadow-[0_-1px_3px_rgba(0,0,0,0.45)]">
                  <div className="absolute top-[2px] left-[6px] w-[3px] h-[5px] bg-[#94a3b8] rounded-sm" />
                </div>
                <div className="absolute top-2.5 left-2 w-2 h-2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#cbd5e1_0%,#475569_80%)] shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
                <div className="absolute bottom-2.5 left-2 w-2 h-2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#cbd5e1_0%,#475569_80%)] shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
              </div>
              <div className="absolute -top-3 left-[18px] w-[18px] h-3.5 bg-gradient-to-b from-[#5a606d] to-[#1a1c21] rounded-t-[4px] border-t border-white/30 shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <div className="absolute top-[2.5px] left-1 w-2 h-2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_0%,#64748b_80%)] shadow-[0_0.5px_1px_rgba(0,0,0,0.7)]" />
              </div>
            </div>

            {/* Red Cylindrical Body */}
            <div className="absolute left-9 top-[62px] w-[92px] h-[96px] bg-gradient-to-b from-[#ff4c4c] via-[#ed0808] to-[#b80000] rounded-l-[4px] z-12 flex items-center justify-center shadow-[inset_0_3px_4px_rgba(255,255,255,0.48),inset_0_-3px_5px_rgba(0,0,0,0.55),0_4px_10px_rgba(0,0,0,0.28)] overflow-hidden">
              <div className="absolute top-1 left-0 right-0 h-[18px] bg-gradient-to-b from-white/50 via-white/5 to-transparent pointer-events-none" />
              <div className="relative flex flex-col items-center justify-center z-[2] -skew-x-2 text-center select-none px-1">
                <span className="text-white font-black text-[10.5px] tracking-[0.6px] leading-[1.15] drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)] whitespace-nowrap">
                  CR REAL TIME
                </span>
                <span className="text-white font-extrabold text-[8px] tracking-[1.6px] uppercase mt-[2px] opacity-95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)] whitespace-nowrap">
                  NEWS CHANNEL
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-3.5 bg-gradient-to-t from-red-400/25 to-transparent pointer-events-none" />
            </div>

            {/* Silver Connector Rings */}
            <div className="absolute left-[128px] top-[60px] w-3.5 h-[100px] flex items-center justify-between z-13 shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
              <div className="w-[5.5px] h-full bg-gradient-to-b from-white via-[#cbd5e1] to-[#475569] rounded-[1px] shadow-[inset_1px_0_1.5px_rgba(255,255,255,0.9),inset_-1px_0_1.5px_rgba(0,0,0,0.5)]" />
              <div className="w-[3px] h-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
              <div className="w-[5.5px] h-full bg-gradient-to-b from-white via-[#cbd5e1] to-[#475569] rounded-[1px] shadow-[inset_1px_0_1.5px_rgba(255,255,255,0.9),inset_-1px_0_1.5px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Expanding White Horn Flare */}
            <div className="conical-horn-flare absolute left-[142px] top-0 w-[140px] h-[220px] z-12 drop-shadow-[0_8px_16px_rgba(16,42,94,0.22)]">
              <div className="absolute top-[8%] left-0 w-full h-[26%] bg-gradient-to-r from-white/40 via-white/95 to-white/50 blur-[1.5px]" />
              <div className="absolute bottom-0 left-0 w-full h-[38%] bg-gradient-to-b from-transparent via-slate-500/25 to-slate-700/55" />
            </div>

            {/* Front Mouth Assembly */}
            <div className="absolute left-[232px] top-0 w-[90px] h-[220px] z-14 overflow-visible">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff3b30] via-[#ed0808] to-[#b80000] border-[1.5px] border-white/30 shadow-[0_4px_14px_rgba(237,8,8,0.55),inset_0_2px_3px_rgba(255,255,255,0.45)] flex items-center justify-center">
                <div className="mouth-black-rim absolute inset-[4.5px] rounded-full border border-white/20 shadow-[inset_3px_2px_5px_rgba(255,255,255,0.5),inset_-4px_-3px_8px_rgba(0,0,0,0.95),0_8px_20px_rgba(0,0,0,0.45)] p-[16px_13px] flex items-center justify-center">
                  <div className="mouth-inner-cavity relative w-full h-full rounded-full shadow-[inset_6px_6px_16px_rgba(0,0,0,0.45),inset_-2px_-2px_8px_rgba(255,255,255,0.9)] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_36%_50%,rgba(15,23,42,0.75)_0%,rgba(51,65,85,0.3)_45%,transparent_75%)] pointer-events-none" />
                    <div className="absolute top-1/2 left-[44%] -translate-x-1/2 -translate-y-1/2 w-8 h-[52px] flex items-center justify-center z-[5]">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white via-[#cbd5e1] to-[#334155] shadow-[0_4px_12px_rgba(0,0,0,0.55),inset_0_1.5px_2px_rgba(255,255,255,0.9),inset_0_-1.5px_2px_rgba(0,0,0,0.4)]">
                        <div className="absolute top-[2px] left-1 right-1 h-2 bg-gradient-to-b from-white/85 to-transparent rounded-full" />
                        <div className="absolute bottom-[2px] left-[3px] right-[3px] h-2.5 bg-gradient-to-t from-slate-800/50 to-transparent rounded-full" />
                      </div>
                      <div className="relative w-6 h-[34px] rounded-full bg-gradient-to-b from-white via-[#cbd5e1] to-[#1e293b] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.4)] flex items-center justify-center z-[6]">
                        <div className="relative w-[18px] h-6 rounded-full bg-[radial-gradient(circle_at_35%_32%,#ff6b6b_0%,#fa2121_28%,#ed0808_55%,#b30000_82%,#500000_100%)] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.95),inset_-1px_-1px_2px_rgba(0,0,0,0.8),0_2px_5px_rgba(0,0,0,0.5)]">
                          <div className="absolute top-[3px] left-1 w-1.5 h-1.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.98)_0%,transparent_75%)]" />
                          <div className="absolute bottom-[2px] right-[2px] w-2 h-2 rounded-full bg-[radial-gradient(circle,rgba(50,0,0,0.5)_0%,transparent_80%)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Handle with Trigger */}
          <div className="absolute top-[140px] left-[95px] w-[72px] h-[135px] z-10 -rotate-[14deg] origin-top">
            <div className="absolute top-0 left-3 w-[34px] h-[15px] bg-gradient-to-b from-[#373c44] via-[#17191d] to-[#0a0b0d] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
              <div className="absolute top-[3.5px] left-3 w-2 h-2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_0%,#64748b_80%)] shadow-[0_0.5px_1px_rgba(0,0,0,0.7)]" />
            </div>
            <div className="absolute top-3 left-[15px] w-7 h-[115px] rounded-[4px] bg-gradient-to-r from-[#3c414a] via-[#1a1c20] to-[#0e0f12] shadow-[inset_1.5px_0_2px_rgba(255,255,255,0.22),-3px_4px_10px_rgba(0,0,0,0.55)]">
              <div className="absolute top-0 left-2.5 w-1.5 h-full bg-gradient-to-b from-white/30 to-white/5" />
              <div className="absolute top-[22px] left-1 right-1 h-[3.5px] bg-[#0d0e11] rounded-[2px] border-t border-white/25 shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
              <div className="absolute top-[38px] left-1 right-1 h-[3.5px] bg-[#0d0e11] rounded-[2px] border-t border-white/25 shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
              <div className="absolute top-[54px] left-1 right-1 h-[3.5px] bg-[#0d0e11] rounded-[2px] border-t border-white/25 shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
              <div className="absolute top-[70px] left-1 right-1 h-[3.5px] bg-[#0d0e11] rounded-[2px] border-t border-white/25 shadow-[0_1px_2px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="absolute top-6 right-3 w-3.5 h-[22px] bg-gradient-to-b from-[#ff4c4c] via-[#ed0808] to-[#990000] rounded-l-[3px] rounded-r-[5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),1px_2px_4px_rgba(0,0,0,0.45)] border border-red-900/80 z-12" />
            <div className="absolute bottom-1 left-2 w-[46px] h-5 rounded-[10px] bg-gradient-to-b from-[#4a505b] via-[#202329] to-[#0d0e11] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.42),0_4px_9px_rgba(0,0,0,0.52)] flex items-center justify-center">
              <div className="w-[6.5px] h-[6.5px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#cbd5e1_0%,#475569_80%)] shadow-[0_0.5px_1px_rgba(0,0,0,0.6)]" />
            </div>
          </div>

          {/* Heavy Metallic Chains */}
          <div className="absolute inset-0 pointer-events-none z-16">
            <div className="absolute left-9 top-[156px] w-5 h-[18px] z-18">
              <div className="absolute top-0 left-[2px] w-4 h-[7px] bg-gradient-to-b from-[#4b525d] to-[#1c1e23] rounded-[2px] shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
              <div className="absolute top-[1.5px] left-2 w-1 h-1 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_0%,#94a3b8_80%)]" />
              <div className="absolute top-1 left-[3px] w-3.5 h-3.5 rounded-full border-[3px] border-[#94a3b8] border-t-[#cbd5e1] border-b-[#334155] shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
            </div>

            <div className="absolute left-[146px] top-[250px] w-5 h-[18px] z-18">
              <div className="absolute top-[2px] right-0 w-2.5 h-3.5 bg-gradient-to-b from-[#4b525d] to-[#1c1e23] rounded-[2px] shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
              <div className="absolute top-1 right-[3px] w-1 h-1 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_0%,#94a3b8_80%)]" />
              <div className="absolute top-[2px] left-[1px] w-3.5 h-3.5 rounded-full border-[3px] border-[#94a3b8] border-t-[#cbd5e1] border-b-[#334155] shadow-[0_1px_3px_rgba(0,0,0,0.5)]" />
            </div>

            <svg className="absolute inset-0 w-full h-full overflow-visible z-17" viewBox="0 0 440 320" fill="none">
              <defs>
                <linearGradient id="cfMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="20%" stopColor="#e2e8f0" />
                  <stop offset="45%" stopColor="#94a3b8" />
                  <stop offset="75%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <linearGradient id="ceMetal" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#cbd5e1" />
                  <stop offset="65%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="ccGuide" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#64748b" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <filter id="csShadow" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="1.5" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.55" />
                </filter>
              </defs>

              <path d="M 46 167 C 38 245, 88 308, 154 259" stroke="#05080c" strokeWidth="6.5" strokeLinecap="round" opacity="0.45" filter="blur(3px)" />
              <path d="M 46 167 C 38 245, 88 308, 154 259" stroke="url(#ccGuide)" strokeWidth="4" strokeLinecap="round" />

              {CHAIN_LINKS.map((link) => (
                <g key={link.index} transform={`translate(${link.x}, ${link.y}) rotate(${link.angle})`} filter="url(#csShadow)">
                  {link.isFlat ? (
                    <g>
                      <rect x="-9" y="-5" width="18" height="10" rx="5" fill="none" stroke="url(#cfMetal)" strokeWidth="3.2" />
                      <rect x="-5" y="-1.8" width="10" height="3.6" rx="1.8" fill="#090d14" opacity="0.95" />
                      <line x1="-5.5" y1="-3.4" x2="4.5" y2="-3.4" stroke="#ffffff" strokeWidth="1.1" opacity="0.95" strokeLinecap="round" />
                      <line x1="-4" y1="3.3" x2="4" y2="3.3" stroke="#1e293b" strokeWidth="0.8" opacity="0.8" strokeLinecap="round" />
                    </g>
                  ) : (
                    <g>
                      <rect x="-2.75" y="-8" width="5.5" height="16" rx="2.75" fill="url(#ceMetal)" stroke="#1a2332" strokeWidth="1" />
                      <line x1="-0.8" y1="-5.5" x2="-0.8" y2="5.5" stroke="#ffffff" strokeWidth="1.1" opacity="0.9" strokeLinecap="round" />
                      <line x1="1.2" y1="-5.5" x2="1.2" y2="5.5" stroke="#0f172a" strokeWidth="0.9" opacity="0.8" strokeLinecap="round" />
                    </g>
                  )}
                </g>
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Main Announcement Master Component
 */
function Announcement() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flashActive, setFlashActive] = useState(false);

  const mouthRef = useRef(null);
  const contentRef = useRef(null);
  const controls = useAnimationControls();

  const isReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const calculateDelta = useCallback(() => {
    if (isReducedMotion) return { x: 0, y: 0 };
    if (!mouthRef?.current || !contentRef?.current) return { x: -460, y: 0 };

    const mouthRect = mouthRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    return {
      x: (mouthRect.left + mouthRect.width / 2) - (contentRect.left + contentRect.width / 2),
      y: (mouthRect.top + mouthRect.height / 2) - (contentRect.top + contentRect.height / 2),
    };
  }, [isReducedMotion]);

  const triggerNext = useCallback(async (targetIdx = null) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextIndex = targetIdx !== null ? targetIdx : (currentIndex + 1) % announcementData.length;
    const delta = calculateDelta();

    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 380);

    setCurrentIndex(nextIndex);

    if (isReducedMotion) {
      await controls.start({ opacity: [0, 1], transition: { duration: 0.3 } });
    } else {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
      controls.set({
        x: delta.x,
        y: delta.y,
        scale: 0.12,
        opacity: 0,
        rotateY: isMobile ? 0 : -20,
        rotateZ: isMobile ? 0 : -2,
        filter: 'blur(5px) brightness(1.5)',
      });

      await controls.start({
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
        rotateZ: 0,
        filter: 'blur(0px) brightness(1)',
        transition: {
          duration: isMobile ? 0.9 : 1.05,
          ease: [0.16, 1, 0.3, 1],
        },
      });
    }

    setIsAnimating(false);
  }, [isAnimating, currentIndex, calculateDelta, isReducedMotion, controls]);

  const triggerPrev = useCallback(async (targetIdx = null) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const prevIndex = targetIdx !== null ? targetIdx : (currentIndex - 1 + announcementData.length) % announcementData.length;
    const delta = calculateDelta();

    if (isReducedMotion) {
      setCurrentIndex(prevIndex);
      await controls.start({ opacity: [0, 1], transition: { duration: 0.3 } });
      setIsAnimating(false);
      return;
    }

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    await controls.start({
      x: delta.x,
      y: delta.y,
      scale: 0.12,
      opacity: 0,
      rotateY: isMobile ? 0 : -20,
      rotateZ: isMobile ? 0 : -2,
      filter: 'blur(4px) brightness(1.3)',
      transition: { duration: 0.48, ease: [0.4, 0, 0.2, 1] },
    });

    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 380);

    setCurrentIndex(prevIndex);

    controls.set({
      x: delta.x,
      y: delta.y,
      scale: 0.12,
      opacity: 0,
      rotateY: isMobile ? 0 : -20,
      rotateZ: isMobile ? 0 : -2,
      filter: 'blur(5px) brightness(1.5)',
    });

    await controls.start({
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      rotateY: 0,
      rotateZ: 0,
      filter: 'blur(0px) brightness(1)',
      transition: { duration: isMobile ? 0.9 : 1.05, ease: [0.16, 1, 0.3, 1] },
    });

    setIsAnimating(false);
  }, [isAnimating, currentIndex, calculateDelta, isReducedMotion, controls]);

  const handleDotClick = (targetIndex) => {
    if (isAnimating || targetIndex === currentIndex) return;
    if (targetIndex > currentIndex) {
      triggerNext(targetIndex);
    } else {
      triggerPrev(targetIndex);
    }
  };

  useEffect(() => {
    controls.set({ x: 0, y: 0, scale: 1, opacity: 1, rotateY: 0, rotateZ: 0, filter: 'blur(0px) brightness(1)' });
  }, [controls]);

  const currentSlide = announcementData[currentIndex];

  const renderHighlightedText = (text, highlight) => {
    if (!highlight || !text.includes(highlight)) return text;
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-[#E52320] font-bold">{highlight}</span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <div className="w-full">
      <style>{`
        .announcement-container {
          background-color: #ffffff;
          border: 1.5px solid #dce7f7;
          border-radius: 32px;
          box-shadow: 0 25px 60px -15px rgba(7, 80, 200, 0.12), 0 10px 25px -8px rgba(16, 42, 94, 0.06);
          overflow: hidden;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .conical-horn-flare {
          clip-path: polygon(
            0.0% 27.3%, 15.6% 25.4%, 30.1% 22.8%, 43.7% 19.4%, 56.2% 15.7%,
            67.8% 11.7%, 78.3% 7.6%, 87.9% 3.6%, 96.4% 0.0%, 100.0% 0.0%,
            100.0% 100.0%, 96.4% 100.0%, 87.9% 96.4%, 78.3% 92.4%, 67.8% 88.3%,
            56.2% 84.3%, 43.7% 80.6%, 30.1% 77.2%, 15.6% 74.6%, 0.0% 72.7%
          );
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 16%, #ffffff 32%, #f1f5f9 52%, #cbd5e1 75%, #94a3b8 90%, #64748b 100%);
        }
        .mouth-black-rim {
          background: radial-gradient(ellipse at 35% 30%, #525a68 0%, #2e343e 25%, #181b20 60%, #0a0b0d 100%);
        }
        .mouth-inner-cavity {
          background: radial-gradient(ellipse at 38% 50%, #1e293b 0%, #475569 20%, #94a3b8 45%, #e2e8f0 72%, #ffffff 100%);
        }
        @media (max-width: 640px) {
          .announcement-container { border-radius: 20px; }
          .corner-top-left { width: 130px; height: 100px; }
          .corner-bottom-right { width: 140px; height: 105px; }
          .megaphone-scaler { transform: scale(0.65); transform-origin: center center; }
        }
        @media (max-width: 380px) {
          .megaphone-scaler { transform: scale(0.55); transform-origin: center center; }
        }
        @media (min-width: 641px) and (max-width: 1023px) {
          .corner-top-left { width: 190px; height: 145px; }
          .corner-bottom-right { width: 200px; height: 150px; }
          .megaphone-scaler { transform: scale(0.8); transform-origin: center center; }
        }
      `}</style>

      <div className="announcement-container relative">
        {/* Top-Left Waves */}
        <div className="corner-top-left absolute top-0 left-0 w-[280px] h-[220px] pointer-events-none z-[1]" aria-hidden="true">
          <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="tlR" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0750C8" /><stop offset="100%" stopColor="#0861F2" /></linearGradient>
              <linearGradient id="tlL" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#93C5FD" stopOpacity="0.8" /></linearGradient>
            </defs>
            <path d="M0 0 L280 0 C200 40 80 120 0 220 Z" fill="url(#tlL)" opacity="0.38" />
            <path d="M0 0 L210 0 C150 30 60 90 0 170 Z" fill="url(#tlR)" opacity="0.95" />
            <path d="M0 0 L150 0 C110 20 40 60 0 120 Z" fill="#063B9F" />
          </svg>
        </div>

        {/* Bottom-Right Waves */}
        <div className="corner-bottom-right absolute bottom-0 right-0 w-[300px] h-[230px] pointer-events-none z-[1]" aria-hidden="true">
          <svg viewBox="0 0 300 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="brR" x1="1" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#063B9F" /><stop offset="100%" stopColor="#0750C8" /></linearGradient>
              <linearGradient id="brL" x1="1" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#93C5FD" stopOpacity="0.8" /></linearGradient>
            </defs>
            <path d="M300 230 L20 230 C100 190 220 110 300 10 Z" fill="url(#brL)" opacity="0.4" />
            <path d="M300 230 L90 230 C150 195 240 135 300 60 Z" fill="url(#brR)" opacity="0.95" />
            <path d="M300 230 L150 230 C195 205 260 160 300 110 Z" fill="#063B9F" />
          </svg>
        </div>

        {/* Responsive Grid Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 lg:px-12 py-5 sm:py-8 lg:py-10">
          
          {/* ANNOUNCEMENT CONTENT */}
          <motion.div 
            className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-center items-center py-1 sm:py-4 overflow-visible w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="w-full flex flex-col items-center justify-center text-center px-1 sm:px-6 py-1 sm:py-2 overflow-visible">
              
              {/* 3D Perspective Stage for Emergence Animation */}
              <div 
                ref={contentRef}
                className="w-full max-w-2xl min-h-[170px] sm:min-h-[200px] lg:min-h-[230px] flex items-center justify-center relative overflow-visible"
                style={{ perspective: '1200px' }}
              >
                <motion.div
                  animate={controls}
                  style={{ transformOrigin: 'left center' }}
                  className="w-full flex flex-col items-center justify-center overflow-visible py-1 sm:py-2 relative z-30"
                >
                  {/* Megaphone Red Outline Line-Art Icon */}
                  <div className="mb-1.5 sm:mb-2.5 flex items-center justify-center" aria-hidden="true">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-[#E52320]">
                      <path d="M21 24 L39 15 C40.5 14.2 42.5 15.2 42.8 16.9 L44.8 33.1 C45.1 34.8 43.5 36.2 41.8 35.8 L21 31" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 22 H21 V33 H17 C15.3 33 14 31.7 14 30 V25 C14 23.3 15.3 22 17 22 Z" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23 32 L26 43 C26.3 44.1 25.5 45 24.3 45 H21 C20 45 19.2 44.2 19 43.2 L17 33" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      <ellipse cx="43" cy="25" rx="3.5" ry="10.5" transform="rotate(6 43 25)" stroke="currentColor" strokeWidth="2.6" />
                      <path d="M48 14 L55 9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                      <path d="M52 24 L60 23" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                      <path d="M49 34 L56 38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                    </svg>
                  </div>

                  <h2 className="text-xl sm:text-2.5xl lg:text-[40px] font-black text-[#0B1E4A] tracking-tight leading-snug px-1">
                    {currentSlide.heading}
                  </h2>

                  <div className="flex items-center justify-center w-full max-w-[200px] sm:max-w-[280px] my-2 sm:my-3">
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#0B1E4A]/30 to-[#0B1E4A]" />
                    <div className="h-[3.5px] sm:h-[4px] w-12 sm:w-16 bg-[#E52320] rounded-full mx-1 shadow-sm" />
                    <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#0B1E4A]/30 to-[#0B1E4A]" />
                  </div>

                  <div className="w-full max-w-2xl px-1 sm:px-4">
                    <p className="text-[#1E293B] text-[13.5px] sm:text-[15px] lg:text-[17px] font-medium leading-[1.65] sm:leading-[1.8] text-center">
                      {renderHighlightedText(currentSlide.description, currentSlide.highlightText)}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-3 sm:gap-5 mt-4 sm:mt-6 lg:mt-8 select-none">
                <button
                  type="button"
                  onClick={() => triggerPrev()}
                  disabled={isAnimating}
                  aria-label="Previous announcement"
                  className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border-[1.8px] border-[#0A183D] flex items-center justify-center text-[#0A183D] bg-white hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </button>

                <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-slate-100 border border-slate-200/80 rounded-full text-[11px] sm:text-xs lg:text-sm font-bold text-[#0B1E4A] tracking-wider">
                  <span>{currentSlide.number}</span>
                  <span className="text-slate-400 mx-1">/</span>
                  <span className="text-slate-500">03</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5" role="tablist" aria-label="Announcement slides">
                  {announcementData.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      aria-selected={currentIndex === index}
                      aria-label={`Slide ${slide.number}`}
                      disabled={isAnimating}
                      onClick={() => handleDotClick(index)}
                      className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                        currentIndex === index
                          ? 'w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-[#E52320] shadow-sm shadow-red-500/50 scale-110'
                          : 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#CBD5E1] hover:bg-[#94A3B8] disabled:cursor-not-allowed'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => triggerNext()}
                  disabled={isAnimating}
                  aria-label="Next announcement"
                  className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border-[1.8px] border-[#0A183D] flex items-center justify-center text-[#0A183D] bg-white hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </button>
              </div>

            </div>
          </motion.div>

          {/* MEGAPHONE ILLUSTRATION */}
          <motion.div 
            className="order-2 lg:order-1 lg:col-span-5 flex items-center justify-center relative min-h-[220px] sm:min-h-[260px] lg:min-h-[440px] overflow-visible w-full mt-1 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <MegaphoneGraphic mouthAnchorRef={mouthRef} flashActive={flashActive} />
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export const Section19 = () => {
  return (
    <section
      id="section-19"
      className="w-full relative py-10 lg:py-16 select-none overflow-hidden border-b border-blue-200"
      style={{
        background: 'linear-gradient(180deg, #edf4fc 0%, #e2eefb 50%, #d8e8f8 100%)',
      }}
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <Announcement />
      </div>
    </section>
  );
};

export default Section19;
