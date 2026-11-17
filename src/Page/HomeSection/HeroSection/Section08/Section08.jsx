import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, ShieldAlert, Tag, Hash, Radio } from 'lucide-react';
import { photos, cpuTVNewsData, cpuTVBranding } from './Section08Data';

// ==========================================
// 1. CRCCF VECTOR SHIELD LOGO
// ==========================================
const CrccfLogo = ({ size = 48, showSubtitle = false, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size * 1.15}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm select-none"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a4b8c" />
            <stop offset="50%" stopColor="#0e3366" />
            <stop offset="100%" stopColor="#081e3d" />
          </linearGradient>
          <linearGradient id="borderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="shieldShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Shield Path with Bevel */}
        <path
          d="M50 4 
             C72 4 92 14 92 14 
             V52 
             C92 82 50 110 50 110 
             C50 110 8 82 8 52 
             V14 
             C8 14 28 4 50 4 Z"
          fill="url(#shieldGrad)"
          stroke="url(#borderGrad)"
          strokeWidth="3.5"
          filter="url(#shieldShadow)"
        />

        {/* Inner Border Accent */}
        <path
          d="M50 10 
             C68 10 84 18 84 18 
             V50 
             C84 75 50 99 50 99 
             C50 99 16 75 16 50 
             V18 
             C16 18 32 10 50 10 Z"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.2"
        />

        {/* Castle / Battlement Crown Motif at Top */}
        <path
          d="M32 23 H68 V28 H63 V25 H57 V28 H53 V25 H47 V28 H43 V25 H37 V28 H32 Z"
          fill="#60a5fa"
          opacity="0.9"
        />

        {/* Text "CRCCF" */}
        <text
          x="50"
          y="48"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="15"
          letterSpacing="0.8"
        >
          CRCCF
        </text>

        {/* Padlock Icon in Lower Shield */}
        <g transform="translate(37, 56) scale(1.05)">
          <path
            d="M5 12 V7 C5 3.1 8.1 0 12 0 C15.9 0 19 3.1 19 7 V12"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <rect
            x="2"
            y="11"
            width="20"
            height="17"
            rx="3"
            fill="#ffffff"
          />
          <circle cx="12" cy="18" r="2.2" fill="#0e3366" />
          <path
            d="M11 18 L10.5 24 H13.5 L13 18 Z"
            fill="#0e3366"
          />
        </g>
      </svg>

      {showSubtitle && (
        <div className="flex flex-col text-left leading-tight">
          <span className="text-xl font-black tracking-tight text-[#0a2540]">
            CRCCF
          </span>
          <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider">
            CR Cyber Crime Foundation
          </span>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 2. NEWS THUMBNAIL VISUAL GRAPHICS
// ==========================================
const NewsThumbnail = ({ type }) => {
  if (type === 'banking-scam') {
    return (
      <div className="relative w-full h-full min-h-[135px] max-h-[175px] bg-slate-950 rounded-lg overflow-hidden border border-slate-700 shadow-inner flex items-center justify-center select-none">
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to bottom, transparent 95%, rgba(56, 189, 248, 0.2) 95%)`,
            backgroundSize: '16px 16px, 100% 8px'
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-2 font-mono text-[8px] text-cyan-500/30 overflow-hidden leading-tight select-none">
          <div>01100010 01100001 01101110 01101011 01110011 01100011 01100001 01101101</div>
          <div>11010010 10101100 00110101 11001011 01010101 10101010 01101001 11010010</div>
          <div>00101101 11010011 01010110 10100101 00110011 11001010 01101010 00101101</div>
          <div>10110101 01010110 11010010 00101010 11100101 01101100 10101101 10110101</div>
        </div>

        <div className="relative z-10 w-full h-full flex items-end justify-between px-3 pb-1">
          <div className="relative w-36 h-36 flex items-end">
            <svg viewBox="0 0 120 120" className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <defs>
                <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="50%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>
                <radialGradient id="laptopGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </radialGradient>
              </defs>

              <path
                d="M30 115 
                   C30 90 35 75 42 62 
                   C38 52 38 35 48 20 
                   C54 10 66 10 72 20 
                   C82 35 82 52 78 62 
                   C85 75 90 90 90 115 Z"
                fill="url(#hoodieGrad)"
                stroke="#334155"
                strokeWidth="1.5"
              />

              <ellipse cx="60" cy="42" rx="14" ry="19" fill="#000000" />
              <ellipse cx="60" cy="78" rx="22" ry="8" fill="url(#laptopGlow)" />
              
              <path
                d="M40 98 L80 98 L88 112 L32 112 Z"
                fill="#334155"
                stroke="#64748b"
                strokeWidth="1"
              />
              <path
                d="M44 80 L76 80 L76 96 L44 96 Z"
                fill="#0f172a"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              <line x1="48" y1="84" x2="68" y2="84" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="48" y1="88" x2="72" y2="88" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="48" y1="92" x2="62" y2="92" stroke="#22c55e" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center mr-2 mb-4">
            <div className="relative flex items-center justify-center animate-pulse">
              <div className="absolute inset-0 bg-red-600/40 rounded-full blur-xl scale-125" />
              <svg width="68" height="60" viewBox="0 0 74 65" fill="none" className="filter drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]">
                <defs>
                  <linearGradient id="warnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                </defs>
                <path
                  d="M37 4 
                     L71 58 
                     C72.5 60.5 70.8 63 68 63 
                     H6 
                     C3.2 63 1.5 60.5 3 58 
                     L37 4 Z"
                  fill="url(#warnGrad)"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                />
                <rect x="34.5" y="20" width="5" height="20" rx="2.5" fill="#ffffff" />
                <circle cx="37" cy="49" r="3.2" fill="#ffffff" />
              </svg>
            </div>
            <span className="mt-1 text-[9px] font-black tracking-widest text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/50 uppercase">
              PHISHING ALERT
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-red-900/90 via-slate-900/90 to-red-900/90 py-0.5 px-2.5 flex items-center justify-between border-t border-red-500/30 text-[9px] text-red-200 font-mono">
          <span>● UNAUTHORIZED TRANSACTION RISK</span>
          <span className="font-bold">CR-SEC #094</span>
        </div>
      </div>
    );
  }

  if (type === 'cyber-awareness') {
    return (
      <div className="relative w-full h-full min-h-[135px] max-h-[175px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-lg overflow-hidden border border-blue-600/40 shadow-inner flex items-center justify-center select-none">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-48 h-48 rounded-full border border-blue-400/40 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-blue-400/50 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-blue-300/60" />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center p-3 text-center">
          <div className="relative mb-2">
            <div className="absolute inset-0 bg-blue-500/30 blur-lg rounded-full" />
            <svg width="68" height="68" viewBox="0 0 80 80" fill="none" className="relative filter drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
              <path
                d="M40 8 
                   L68 18 
                   V40 
                   C68 58 40 74 40 74 
                   C40 74 12 58 12 40 
                   V18 
                   L40 8 Z"
                fill="#1e3a8a"
                stroke="#60a5fa"
                strokeWidth="3"
              />
              <circle cx="40" cy="40" r="16" fill="#2563eb" />
              <path
                d="M32 40 L38 46 L49 34"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="text-xs font-black tracking-wider text-blue-200 uppercase bg-blue-900/60 px-3 py-0.5 rounded-full border border-blue-400/40">
            DIGITAL CITIZEN SAFETY
          </span>
          <span className="text-[10px] text-blue-300/80 mt-1 font-mono">
            Public Cyber Hygiene Initiative
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 bg-blue-900/80 py-0.5 px-2.5 flex items-center justify-between border-t border-blue-500/30 text-[9px] text-blue-200 font-mono">
          <span>● MEITY & LAW ENFORCEMENT</span>
          <span className="font-bold">AWARENESS CAMPAIGN</span>
        </div>
      </div>
    );
  }

  if (type === 'digital-identity') {
    return (
      <div className="relative w-full h-full min-h-[135px] max-h-[175px] bg-gradient-to-br from-slate-950 via-emerald-950/70 to-slate-900 rounded-lg overflow-hidden border border-emerald-600/40 shadow-inner flex items-center justify-center select-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`,
            backgroundSize: '14px 14px'
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center p-3 text-center">
          <div className="relative mb-2">
            <div className="absolute inset-0 bg-emerald-500/30 blur-lg rounded-full" />
            <svg width="68" height="68" viewBox="0 0 80 80" fill="none" className="relative filter drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]">
              <rect x="15" y="10" width="50" height="60" rx="8" fill="#064e3b" stroke="#34d399" strokeWidth="2.5" />
              <path d="M40 24 C34 24 30 28 30 34 C30 42 34 46 34 52" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M40 28 C36 28 34 31 34 35 C34 40 37 43 37 48" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M40 18 C30 18 24 24 24 33 C24 45 28 50 28 56" stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M44 24 C48 27 50 31 50 36 C50 43 45 47 45 53" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M48 20 C54 25 56 31 56 38 C56 46 51 51 51 57" stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none" />
              <line x1="18" y1="38" x2="62" y2="38" stroke="#f43f5e" strokeWidth="2" />
            </svg>
          </div>

          <span className="text-xs font-black tracking-wider text-emerald-200 uppercase bg-emerald-950/80 px-3 py-0.5 rounded-full border border-emerald-400/40">
            IDENTITY VAULT 2.0
          </span>
          <span className="text-[10px] text-emerald-300/80 mt-1 font-mono">
            MFA & Biometric Defense Guide
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 bg-emerald-950/90 py-0.5 px-2.5 flex items-center justify-between border-t border-emerald-500/30 text-[9px] text-emerald-200 font-mono">
          <span>● ZERO TRUST ARCHITECTURE</span>
          <span className="font-bold">CRCCF-GUIDE</span>
        </div>
      </div>
    );
  }

  // legal-investigation
  return (
    <div className="relative w-full h-full min-h-[135px] max-h-[175px] bg-gradient-to-br from-slate-950 via-purple-950/70 to-slate-900 rounded-lg overflow-hidden border border-purple-600/40 shadow-inner flex items-center justify-center select-none">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(45deg, #a855f7 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center p-3 text-center">
        <div className="relative mb-2">
          <div className="absolute inset-0 bg-purple-500/30 blur-lg rounded-full" />
          <svg width="68" height="68" viewBox="0 0 80 80" fill="none" className="relative filter drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]">
            <circle cx="40" cy="40" r="32" fill="#3b0764" stroke="#c084fc" strokeWidth="2.5" />
            <rect x="24" y="24" width="22" height="10" rx="2" transform="rotate(-30 24 24)" fill="#e9d5ff" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="36" y="28" width="5" height="30" rx="2" transform="rotate(35 36 28)" fill="#d8b4fe" />
            <rect x="22" y="54" width="36" height="6" rx="2" fill="#7e22ce" stroke="#c084fc" strokeWidth="1" />
            <circle cx="56" cy="24" r="6" fill="#eab308" />
          </svg>
        </div>

        <span className="text-xs font-black tracking-wider text-purple-200 uppercase bg-purple-950/80 px-3 py-0.5 rounded-full border border-purple-400/40">
          CYBER FORENSICS ACTION
        </span>
        <span className="text-[10px] text-purple-300/80 mt-1 font-mono">
          Digital Evidence & Enforcement
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 bg-purple-950/90 py-0.5 px-2.5 flex items-center justify-between border-t border-purple-500/30 text-[9px] text-purple-200 font-mono">
        <span>● SECTION 66D IT ACT</span>
        <span className="font-bold">CRIME TASK FORCE</span>
      </div>
    </div>
  );
};

// ==========================================
// 3. CRT NEWS APPLICATION SCREEN (Inside Monitor)
// ==========================================
const NewsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCrtClosing, setIsCrtClosing] = useState(false);

  const currentNews = cpuTVNewsData[currentIndex];
  const totalNews = cpuTVNewsData.length;

  // CRT Screen Close & Open Transition when switching articles
  const changeArticle = (newIndex) => {
    if (isCrtClosing || newIndex === currentIndex) return;
    setIsCrtClosing(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsCrtClosing(false);
      }, 70);
    }, 240);
  };

  const handleNext = () => {
    if (currentIndex < totalNews - 1) {
      changeArticle(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      changeArticle(currentIndex - 1);
    }
  };

  const crtVariants = {
    open: {
      scaleY: 1,
      scaleX: 1,
      opacity: 1,
      filter: 'brightness(1) contrast(1)',
      transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] }
    },
    closed: {
      scaleY: 0.005,
      scaleX: 0.96,
      opacity: [1, 1, 0.3, 0],
      filter: [
        'brightness(1) contrast(1)',
        'brightness(2.6) contrast(1.6)',
        'brightness(0.2) contrast(2)'
      ],
      transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <div className="relative w-full h-full bg-[#f1f5f9] text-slate-800 flex flex-col justify-between overflow-hidden select-none font-sans">
      
      {/* 4.A SCREEN HEADER */}
      <header className="w-full bg-white border-b-2 border-slate-200 px-3.5 py-2 flex items-center justify-between shadow-sm z-10 shrink-0">
        <div className="flex items-center gap-2.5">
          <CrccfLogo size={32} showSubtitle={false} />
          <div className="flex flex-col">
            <h1 className="text-lg font-black tracking-tight text-[#0b2545] leading-none uppercase">
              {cpuTVBranding.channelName}
            </h1>
            <span className="text-[9.5px] font-bold text-red-600 tracking-wider uppercase mt-0.5">
              {cpuTVBranding.directorate}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-0.5 rounded-full shadow-sm text-[10px] font-black tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <Radio className="w-3.5 h-3.5" />
          <span>LIVE</span>
        </div>
      </header>

      {/* 4.B MAIN NEWS SECTION HEADING */}
      <div className="w-full bg-gradient-to-r from-[#0b2545] via-[#b91c1c] to-[#0b2545] px-3.5 py-1.5 shadow-inner border-y border-red-700/60 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 rotate-45" />
          <h2 className="text-white text-xs font-black tracking-wider uppercase drop-shadow-md">
            {cpuTVBranding.sectionHeading}
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-red-100 font-mono tracking-tight">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{cpuTVBranding.subHeading}</span>
        </div>
      </div>

      {/* 5. SINGLE NEWS DISPLAY SYSTEM (WITH CRT SCREEN CLOSE & OPEN ANIMATION) */}
      <main className="relative flex-1 w-full px-3.5 py-2 flex items-center justify-center overflow-hidden min-h-0 bg-slate-900/10">
        {isCrtClosing && (
          <motion.div
            initial={{ scaleX: 1, opacity: 1 }}
            animate={{ scaleX: [1, 0.7, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 0.22 }}
            className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-[3px] bg-white rounded-full pointer-events-none z-50 shadow-[0_0_18px_#38bdf8,0_0_6px_#ffffff]"
          />
        )}

        <motion.div
          animate={isCrtClosing ? 'closed' : 'open'}
          variants={crtVariants}
          className="w-full h-full flex items-center justify-center origin-center"
        >
          <article className="w-full h-full bg-white rounded-xl border border-slate-200/90 shadow-md p-3.5 flex flex-row gap-3.5 items-stretch justify-between overflow-hidden">
            {/* LEFT AREA: Thumbnail Visual */}
            <div className="w-[42%] flex flex-col gap-2 shrink-0 h-full">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm">
                <NewsThumbnail type={currentNews.imageType} category={currentNews.category} />
                <div className="absolute top-2 left-2 z-20">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-black tracking-wide uppercase shadow-md border ${currentNews.categoryBadgeColor}`}>
                    <ShieldAlert className="w-2.5 h-2.5" />
                    {currentNews.category}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT AREA: Headline, Description, Metadata */}
            <div className="w-[58%] flex flex-col justify-between py-0.5 text-left min-h-0">
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500 font-medium mb-1.5 border-b border-slate-100 pb-1 shrink-0">
                  <span className="flex items-center gap-1 text-slate-700 font-semibold">
                    <Calendar className="w-3 h-3 text-blue-600" />
                    {currentNews.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 text-slate-600 font-mono">
                    <Hash className="w-3 h-3 text-slate-400" />
                    Ref: <span className="font-bold text-slate-800">{currentNews.refNumber}</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="px-1.5 py-0.2 rounded text-[8px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    {currentNews.threatLevel}
                  </span>
                </div>

                <h3 className="text-[15px] font-black text-[#07162c] leading-snug mb-1.5 tracking-tight line-clamp-2">
                  {currentNews.headline}
                </h3>

                <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {currentNews.description}
                </p>
              </div>

              <div className="mt-auto pt-1 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400 shrink-0">
                <span className="font-medium flex items-center gap-1">
                  <Tag className="w-2.5 h-2.5 text-slate-400" />
                  Category: <strong className="text-slate-700">{currentNews.category}</strong>
                </span>
                <span className="font-mono text-[8.5px] text-slate-400">
                  CRCCF REAL-TIME BULLETIN
                </span>
              </div>
            </div>
          </article>
        </motion.div>
      </main>

      {/* 6. PREVIOUS AND NEXT NAVIGATION CONTROLS */}
      <footer className="w-full bg-slate-100/95 border-t border-slate-200 px-3.5 py-1.5 flex items-center justify-between shrink-0 shadow-inner z-10">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0 || isCrtClosing}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide uppercase transition-all duration-200 shadow-sm ${
            currentIndex === 0 || isCrtClosing
              ? 'bg-slate-300 text-slate-400 cursor-not-allowed opacity-60'
              : 'bg-[#0b2545] hover:bg-[#133763] text-white active:scale-95 shadow-md hover:shadow-lg'
          }`}
          aria-label="Previous News Article"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>PREVIOUS</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1 rounded bg-white border border-slate-300 text-[#0b2545] font-mono text-xs font-black tracking-widest shadow-inner">
            NEWS {currentNews.id} / 0{totalNews}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === totalNews - 1 || isCrtClosing}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide uppercase transition-all duration-200 shadow-sm ${
            currentIndex === totalNews - 1 || isCrtClosing
              ? 'bg-slate-300 text-slate-400 cursor-not-allowed opacity-60'
              : 'bg-[#b91c1c] hover:bg-[#dc2626] text-white active:scale-95 shadow-md hover:shadow-lg'
          }`}
          aria-label="Next News Article"
        >
          <span>NEXT</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>

      {/* Breaking News Ticker Strip */}
      <div className="w-full bg-[#07162c] text-white px-3 py-0.5 text-[9.5px] flex items-center gap-2 border-t border-slate-800 shrink-0 font-mono">
        <span className="bg-red-600 text-white px-1 py-0.2 rounded font-black text-[8.5px] uppercase tracking-wide">
          ALERT
        </span>
        <div className="truncate text-slate-200 font-sans">
          {cpuTVBranding.advisoryText}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. RETRO BEIGE CRT MONITOR COMPONENT
// ==========================================
const CrtMonitor = () => {
  return (
    <div className="relative flex flex-col items-center select-none">
      {/* CRT MONITOR BODY & CASING */}
      <div 
        className="relative z-20 rounded-[28px] p-6"
        style={{
          width: '100%',
          background: 'linear-gradient(145deg, #f3ede2 0%, #ded7c6 25%, #cbbfab 85%, #b5a892 100%)',
          boxShadow: `
            0 25px 45px -10px rgba(0, 0, 0, 0.65),
            0 10px 20px -5px rgba(0, 0, 0, 0.4),
            inset 3px 3px 6px rgba(255, 255, 255, 0.85),
            inset -4px -5px 8px rgba(0, 0, 0, 0.4),
            inset 0 0 0 2px rgba(200, 190, 170, 0.5)
          `
        }}
      >
        <div className="absolute inset-1.5 rounded-[24px] border border-white/40 pointer-events-none" />

        {/* Top Center: "CRCCF" Typography */}
        <div className="w-full flex items-center justify-center pt-0.5 pb-2.5">
          <span 
            className="text-black font-black tracking-[0.22em] text-base select-none"
            style={{
              textShadow: '0 1px 1px rgba(255, 255, 255, 0.7), 0 -1px 1px rgba(0, 0, 0, 0.25)'
            }}
          >
            {cpuTVBranding.monitorBrand}
          </span>
        </div>

        {/* INNER BLACK BEZEL */}
        <div 
          className="relative rounded-[20px] p-3.5"
          style={{
            background: 'linear-gradient(145deg, #0f1115 0%, #171a21 50%, #20242e 100%)',
            boxShadow: `
              inset 0 4px 8px rgba(0, 0, 0, 0.95),
              inset 0 -2px 4px rgba(255, 255, 255, 0.15),
              0 2px 4px rgba(255, 255, 255, 0.4)
            `
          }}
        >
          {/* CRT SCREEN INNER HOUSING */}
          <div 
            className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden crt-curvature"
            style={{
              backgroundColor: '#f8fafc',
              boxShadow: `
                inset 0 0 35px rgba(0, 0, 0, 0.4),
                inset 0 0 10px rgba(0, 0, 0, 0.5)
              `
            }}
          >
            {/* Application Screen */}
            <div className="relative w-full h-full z-10">
              <NewsScreen />
            </div>

            {/* CRT Scanline & Reflection Overlays */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none opacity-40"
              style={{
                background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.12) 51%)',
                backgroundSize: '100% 4px'
              }}
            />

            <div 
              className="absolute inset-0 z-30 pointer-events-none rounded-[16px]"
              style={{
                boxShadow: `
                  inset 0 0 50px rgba(0, 0, 0, 0.45),
                  inset 0 0 20px rgba(0, 0, 0, 0.35),
                  inset 0 2px 8px rgba(255, 255, 255, 0.35)
                `
              }}
            />

            <div 
              className="absolute inset-0 z-30 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 22%, transparent 42%)',
                clipPath: 'polygon(0 0, 100% 0, 85% 45%, 0 75%)'
              }}
            />

            <div 
              className="absolute -inset-1 z-0 pointer-events-none opacity-30 blur-md"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 80%)'
              }}
            />
          </div>
        </div>

        {/* BOTTOM BEZEL CONTROLS */}
        <div className="w-full flex items-center justify-between px-3 pt-3.5 pb-1">
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="text-[8px] font-mono text-slate-700 tracking-wider">AUTO</span>
            <span className="text-[8px] font-mono text-slate-700 tracking-wider">MENU</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-1">
              {[0, 1, 2, 3].map((btnIndex) => (
                <div 
                  key={btnIndex}
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #ded6c2 0%, #b8af9c 100%)',
                    boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.8), 0 1px 2px rgba(0,0,0,0.4)',
                    border: '0.5px solid #a39b89'
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-1">
              <div 
                className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"
                style={{
                  boxShadow: '0 0 6px #22c55e, 0 0 12px #4ade80, inset 0 0 2px #ffffff'
                }}
              />
              <span className="text-[7px] font-mono text-slate-600 font-bold ml-0.5">PWR</span>
            </div>

            <div 
              className="w-5.5 h-3.5 rounded-sm ml-1 flex items-center justify-center cursor-default"
              style={{
                background: 'linear-gradient(180deg, #c4baa4 0%, #8c826e 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.7), 0 1.5px 2px rgba(0,0,0,0.5)',
                border: '0.5px solid #6b6352'
              }}
            >
              <div className="w-1.5 h-2 bg-[#423d34] rounded-[1px] opacity-75" />
            </div>
          </div>
        </div>
      </div>

      {/* MONITOR STAND */}
      <div className="relative z-10 flex flex-col items-center -mt-2">
        <div 
          className="w-44 h-8"
          style={{
            background: 'linear-gradient(90deg, #998f7e 0%, #cec4b2 20%, #ded7c6 50%, #b8ae9c 80%, #7e7464 100%)',
            boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.4), 0 4px 10px rgba(0,0,0,0.3)',
            borderLeft: '1px solid #706859',
            borderRight: '1px solid #706859'
          }}
        >
          <div className="w-full h-full flex flex-col justify-evenly px-2 opacity-50">
            <div className="h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.3)]" />
            <div className="h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.3)]" />
            <div className="h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.3)]" />
          </div>
        </div>

        <div 
          className="w-72 h-4.5 rounded-[12px] -mt-1"
          style={{
            background: 'linear-gradient(180deg, #ece5d6 0%, #d5cbba 40%, #b3a794 100%)',
            boxShadow: `
              0 6px 14px rgba(0, 0, 0, 0.6),
              inset 0 1px 1px rgba(255, 255, 255, 0.9),
              inset 0 -2px 3px rgba(0, 0, 0, 0.4)
            `
          }}
        />

        <div 
          className="w-80 h-5 -mt-1 rounded-full blur-md bg-black/30 pointer-events-none"
        />
      </div>
    </div>
  );
};

// ==========================================
// 5. RETRO BEIGE CPU TOWER COMPONENT
// ==========================================
const CpuTower = () => {
  return (
    <div className="relative flex select-none items-end">
      {/* Contact shadow on surface */}
      <div 
        className="absolute -bottom-3 -left-3 right-0 h-8 rounded-full blur-md bg-black/30 pointer-events-none"
      />

      <div className="relative flex items-stretch">
        {/* Left 3D Depth Flank */}
        <div 
          className="w-4 sm:w-6 md:w-8 rounded-l-md"
          style={{
            background: 'linear-gradient(90deg, #786f5f 0%, #9e9482 60%, #b8ad9a 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -4px 6px rgba(0,0,0,0.5)',
            transform: 'skewY(-4deg)',
            transformOrigin: 'top right'
          }}
        />

        {/* Front Face */}
        <div 
          className="relative z-10 w-full rounded-r-lg p-3.5 flex flex-col justify-between"
          style={{
            height: '515px',
            background: 'linear-gradient(175deg, #f0e9dc 0%, #ded7c6 30%, #cbbfab 85%, #b4a792 100%)',
            boxShadow: `
              0 20px 35px -5px rgba(0, 0, 0, 0.65),
              inset 2px 2px 4px rgba(255, 255, 255, 0.8),
              inset -3px -3px 5px rgba(0, 0, 0, 0.35),
              inset 0 0 0 1px rgba(200, 190, 170, 0.6)
            `
          }}
        >
          <div className="absolute inset-1.5 rounded-md border border-white/50 pointer-events-none" />

          {/* Section 1: 5.25" CD-ROM Optical Drive */}
          <div 
            className="w-full bg-[#d6ccb9] rounded p-2 sm:p-2.5 border border-[#aba18d]"
            style={{
              boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.4), 0 1px 1px rgba(255,255,255,0.8)'
            }}
          >
            <div 
              className="w-full h-11 sm:h-13 bg-[#dfd6c4] rounded flex flex-col justify-between p-1.5 border border-[#9b917d]"
              style={{
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.7), 0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              <div className="w-full flex items-center justify-between px-1">
                <span className="text-[7px] font-mono font-bold tracking-widest text-slate-500">
                  {cpuTVBranding.opticalDriveLabel}
                </span>
                <span className="text-[6px] font-mono text-slate-400">
                  CRCCF HIGH SPEED
                </span>
              </div>

              <div className="w-full flex items-center justify-between pt-1 border-t border-[#b3a894]">
                <div className="w-1 h-1 rounded-full bg-black/60 shadow-inner ml-1" />
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_3px_#10b981]" />
                  <div 
                    className="w-5 sm:w-6 h-2 sm:h-2.5 rounded-[2px] bg-[#c2b7a3] border border-[#8e8471] flex items-center justify-center cursor-default"
                    style={{
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 1px 1px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="w-2 h-[1px] bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: 3.5" Floppy Disk Bay */}
          <div 
            className="w-full bg-[#d6ccb9] rounded p-2 sm:p-2.5 border border-[#aba18d]"
            style={{
              boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.4), 0 1px 1px rgba(255,255,255,0.8)'
            }}
          >
            <div 
              className="w-full h-12 sm:h-14 bg-[#dfd6c4] rounded flex flex-col justify-between p-1.5 border border-[#9b917d]"
              style={{
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.7), 0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center justify-between px-1">
                <span className="text-[7px] font-mono font-bold tracking-wider text-slate-500">
                  {cpuTVBranding.floppyDriveLabel}
                </span>
              </div>

              <div className="w-full px-1">
                <div 
                  className="w-full h-2.5 bg-[#1a1b1f] rounded-[2px] flex items-center justify-center"
                  style={{
                    boxShadow: 'inset 0 2px 3px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.5)'
                  }}
                >
                  <div className="w-11/12 h-[1px] bg-slate-800" />
                </div>
              </div>

              <div className="w-full flex items-center justify-between px-1 pt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_3px_#10b981]" />
                <div 
                  className="w-5 sm:w-6 h-2 sm:h-2.5 rounded-[2px] bg-[#c2b7a3] border border-[#8e8471] flex items-center justify-center cursor-default"
                  style={{
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 1px 1px rgba(0,0,0,0.3)'
                  }}
                >
                  <div className="w-2.5 h-[1px] bg-slate-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: CRCCF Shield Badge */}
          <div className="w-full flex flex-col items-center justify-center py-2 sm:py-3 my-1">
            <div 
              className="p-1.5 rounded-xl bg-gradient-to-b from-[#e8e1d2] to-[#c7bca9] border border-[#a89d89]"
              style={{
                boxShadow: '0 2px 6px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.9)'
              }}
            >
              <CrccfLogo size={52} showSubtitle={false} />
            </div>
            <span className="text-[9px] font-black tracking-widest text-[#0e3366] uppercase mt-1">
              {cpuTVBranding.systemUnitLabel}
            </span>
          </div>

          {/* Section 4: Controls & Louvers */}
          <div className="w-full flex flex-col gap-3">
            <div 
              className="w-full bg-[#d6ccb9] rounded p-2 border border-[#aba18d] flex items-center justify-between"
              style={{
                boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.3), 0 1px 1px rgba(255,255,255,0.7)'
              }}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center cursor-default"
                  style={{
                    background: 'linear-gradient(135deg, #ded7c6 0%, #a89d89 100%)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 2px 3px rgba(0,0,0,0.4)',
                    border: '1px solid #7a705e'
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full border border-slate-700 flex items-center justify-center">
                    <div className="w-[1px] h-1.5 bg-slate-700 -mt-1" />
                  </div>
                </div>
                <div className="flex flex-col text-[7px] font-mono leading-none font-bold text-slate-600">
                  <span>POWER</span>
                  <span className="text-[6px] text-emerald-600 font-black">ON</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_5px_#22c55e]" />
                  <span className="text-[6px] font-mono text-slate-500 mt-0.5">PWR</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_4px_#f59e0b] animate-pulse" />
                  <span className="text-[6px] font-mono text-slate-500 mt-0.5">HDD</span>
                </div>
                <div 
                  className="w-3.5 h-3.5 rounded-full bg-[#b8ad99] border border-[#786e5c] flex items-center justify-center cursor-default"
                  style={{
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  <div className="w-1 h-1 rounded-full bg-slate-600" />
                </div>
              </div>
            </div>

            {/* Front USB Ports */}
            <div 
              className="w-full bg-[#d2c7b5] rounded p-1.5 px-2.5 border border-[#aba08c] flex items-center justify-between"
              style={{
                boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.3), 0 1px 1px rgba(255,255,255,0.7)'
              }}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-2.5 bg-[#121418] rounded-[1px] border border-[#4b5563] flex items-center justify-center relative shadow-inner"
                  title="USB 1 (Mouse Cable Port)"
                >
                  <div className="w-2.5 h-1 bg-[#262c37] rounded-[0.5px] border-b border-slate-500" />
                </div>
                <div 
                  className="w-4 h-2.5 bg-[#121418] rounded-[1px] border border-[#4b5563] flex items-center justify-center opacity-70 shadow-inner"
                  title="USB 2 (Aux)"
                >
                  <div className="w-2.5 h-1 bg-[#262c37] rounded-[0.5px] border-b border-slate-500" />
                </div>
              </div>

              <div className="flex items-center gap-1 opacity-75">
                <span className="text-[6.5px] font-mono font-bold tracking-widest text-slate-600 uppercase">
                  {cpuTVBranding.usbLabel}
                </span>
              </div>
            </div>

            {/* Horizontal Ventilation Louvers */}
            <div 
              className="w-full bg-[#181a20] rounded-md p-2 flex flex-col gap-1.5 border border-[#30343f]"
              style={{
                boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.4)'
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="w-full h-1 bg-[#090b0e] rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,0.9)] flex items-center px-1"
                >
                  <div className="w-full h-[0.5px] bg-[#2d323e]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. RETRO MODEL-M MECHANICAL KEYBOARD
// ==========================================
const Key = ({ label, subLabel, width = 'w-7 sm:w-8', isDark = false, className = '' }) => {
  return (
    <div 
      className={`relative h-6 sm:h-7 ${width} rounded-[3px] flex flex-col items-center justify-center cursor-default select-none transition-all ${className}`}
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #888c96 0%, #6f727c 40%, #585a63 100%)'
          : 'linear-gradient(180deg, #f5efe2 0%, #ded7c6 40%, #c5bba8 100%)',
        boxShadow: isDark
          ? `
              0 2px 0 #3d3f45,
              0 3px 2px rgba(0, 0, 0, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.4),
              inset 0 -1px 1px rgba(0, 0, 0, 0.5)
            `
          : `
              0 2px 0 #948b7b,
              0 3px 2px rgba(0, 0, 0, 0.35),
              inset 0 1px 1px rgba(255, 255, 255, 0.9),
              inset 0 -1px 1px rgba(0, 0, 0, 0.25)
            `,
        border: isDark ? '0.5px solid #4a4c54' : '0.5px solid #a89f8d'
      }}
    >
      <div 
        className="w-[88%] h-[82%] rounded-[2px] flex flex-col items-center justify-center p-0.5"
        style={{
          background: isDark
            ? 'linear-gradient(180deg, #747780 0%, #62656d 100%)'
            : 'linear-gradient(180deg, #eae3d2 0%, #dbd3c0 100%)',
          boxShadow: 'inset 0 0.5px 0.5px rgba(255,255,255,0.4)'
        }}
      >
        {subLabel && (
          <span className={`text-[6px] sm:text-[7px] leading-none ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {subLabel}
          </span>
        )}
        <span 
          className={`text-[8px] sm:text-[9px] font-bold font-mono leading-none tracking-tight ${
            isDark ? 'text-slate-100' : 'text-slate-800'
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

const Keyboard = () => {
  return (
    <div className="relative flex flex-col items-center select-none">
      <div 
        className="absolute -bottom-2 inset-x-4 h-6 rounded-full blur-md bg-black/30 pointer-events-none"
      />

      <div 
        className="relative z-10 rounded-xl p-2.5 sm:p-3.5 flex flex-col gap-1.5"
        style={{
          width: '100%',
          background: 'linear-gradient(175deg, #f0e9dc 0%, #ded7c6 25%, #cbbfab 85%, #b4a792 100%)',
          boxShadow: `
            0 14px 28px -5px rgba(0, 0, 0, 0.65),
            0 6px 12px rgba(0, 0, 0, 0.4),
            inset 0 1.5px 1px rgba(255, 255, 255, 0.85),
            inset 0 -3px 4px rgba(0, 0, 0, 0.4),
            inset 0 0 0 1px rgba(200, 190, 170, 0.5)
          `,
          transform: 'perspective(600px) rotateX(10deg)',
          transformOrigin: 'bottom center'
        }}
      >
        {/* Top lip ridge */}
        <div className="w-full flex items-center justify-between px-2 pb-1 border-b border-[#bcb19d]/60">
          <span className="text-[7px] sm:text-[8px] font-mono font-bold text-slate-600 tracking-wider">
            {cpuTVBranding.keyboardModel}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="text-[6px] sm:text-[7px] font-mono text-slate-500 uppercase">
              {cpuTVBranding.keyboardSubtitle}
            </span>
          </div>
        </div>

        {/* 104 Keys Cluster */}
        <div className="w-full flex gap-2 sm:gap-3 items-start justify-between">
          {/* Main Alphanumeric & Function Keys */}
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center justify-between mb-1">
              <Key label="ESC" width="w-7 sm:w-8" isDark={true} />
              <div className="flex gap-1 ml-2">
                <Key label="F1" width="w-6 sm:w-7" isDark={true} />
                <Key label="F2" width="w-6 sm:w-7" isDark={true} />
                <Key label="F3" width="w-6 sm:w-7" isDark={true} />
                <Key label="F4" width="w-6 sm:w-7" isDark={true} />
              </div>
              <div className="flex gap-1">
                <Key label="F5" width="w-6 sm:w-7" isDark={true} />
                <Key label="F6" width="w-6 sm:w-7" isDark={true} />
                <Key label="F7" width="w-6 sm:w-7" isDark={true} />
                <Key label="F8" width="w-6 sm:w-7" isDark={true} />
              </div>
              <div className="flex gap-1">
                <Key label="F9" width="w-6 sm:w-7" isDark={true} />
                <Key label="F10" width="w-6 sm:w-7" isDark={true} />
                <Key label="F11" width="w-6 sm:w-7" isDark={true} />
                <Key label="F12" width="w-6 sm:w-7" isDark={true} />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Key label="~" subLabel="`" width="w-6 sm:w-7" isDark={true} />
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].map((k) => (
                <Key key={k} label={k} width="w-6 sm:w-7" />
              ))}
              <Key label="BACKSPACE" width="w-12 sm:w-16" isDark={true} />
            </div>

            <div className="flex items-center gap-1">
              <Key label="TAB" width="w-10 sm:w-12" isDark={true} />
              {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'].map((k) => (
                <Key key={k} label={k} width="w-6 sm:w-7" />
              ))}
              <Key label="\" width="w-8 sm:w-11" isDark={true} />
            </div>

            <div className="flex items-center gap-1">
              <Key label="CAPS" width="w-11 sm:w-13" isDark={true} />
              {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"].map((k) => (
                <Key key={k} label={k} width="w-6 sm:w-7" />
              ))}
              <Key label="ENTER" width="w-11 sm:w-14" isDark={true} />
            </div>

            <div className="flex items-center gap-1">
              <Key label="SHIFT" width="w-13 sm:w-16" isDark={true} />
              {['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'].map((k) => (
                <Key key={k} label={k} width="w-6 sm:w-7" />
              ))}
              <Key label="SHIFT" width="w-13 sm:w-16" isDark={true} />
            </div>

            <div className="flex items-center gap-1">
              <Key label="CTRL" width="w-9 sm:w-11" isDark={true} />
              <Key label="ALT" width="w-9 sm:w-11" isDark={true} />
              <div 
                className="relative h-6 sm:h-7 flex-1 rounded-[3px] flex items-center justify-center cursor-default select-none"
                style={{
                  background: 'linear-gradient(180deg, #f5efe2 0%, #ded7c6 40%, #c5bba8 100%)',
                  boxShadow: `
                    0 2px 0 #948b7b,
                    0 3px 2px rgba(0, 0, 0, 0.35),
                    inset 0 1px 1px rgba(255, 255, 255, 0.9),
                    inset 0 -1px 1px rgba(0, 0, 0, 0.25)
                  `,
                  border: '0.5px solid #a89f8d'
                }}
              >
                <div 
                  className="w-[96%] h-[82%] rounded-[2px]"
                  style={{
                    background: 'linear-gradient(180deg, #eae3d2 0%, #dbd3c0 100%)',
                    boxShadow: 'inset 0 0.5px 0.5px rgba(255,255,255,0.4)'
                  }}
                />
              </div>
              <Key label="ALT" width="w-9 sm:w-11" isDark={true} />
              <Key label="CTRL" width="w-9 sm:w-11" isDark={true} />
            </div>
          </div>

          {/* Nav & Arrow Cluster */}
          <div className="flex flex-col gap-1 shrink-0">
            <div className="flex gap-1 mb-1">
              <Key label="PSC" width="w-5 sm:w-6" isDark={true} />
              <Key label="SLC" width="w-5 sm:w-6" isDark={true} />
              <Key label="BRK" width="w-5 sm:w-6" isDark={true} />
            </div>
            <div className="flex gap-1">
              <Key label="INS" width="w-5 sm:w-6" isDark={true} />
              <Key label="HOM" width="w-5 sm:w-6" isDark={true} />
              <Key label="PUP" width="w-5 sm:w-6" isDark={true} />
            </div>
            <div className="flex gap-1">
              <Key label="DEL" width="w-5 sm:w-6" isDark={true} />
              <Key label="END" width="w-5 sm:w-6" isDark={true} />
              <Key label="PDN" width="w-5 sm:w-6" isDark={true} />
            </div>
            <div className="h-4" />
            <div className="flex flex-col items-center gap-1">
              <Key label="▲" width="w-5 sm:w-6" isDark={true} />
              <div className="flex gap-1">
                <Key label="◀" width="w-5 sm:w-6" isDark={true} />
                <Key label="▼" width="w-5 sm:w-6" isDark={true} />
                <Key label="▶" width="w-5 sm:w-6" isDark={true} />
              </div>
            </div>
          </div>

          {/* 10-Key Numpad Cluster */}
          <div className="flex flex-col gap-1 shrink-0">
            <div 
              className="flex items-center justify-between px-1.5 py-1 mb-1 bg-[#1a1b1f] rounded border border-[#3b3e47]"
              style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }}
            >
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_3px_#22c55e]" />
                <span className="text-[5px] font-mono text-slate-300">NUM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-950" />
                <span className="text-[5px] font-mono text-slate-500">CAPS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-950" />
                <span className="text-[5px] font-mono text-slate-500">SCR</span>
              </div>
            </div>

            <div className="flex gap-1">
              <Key label="NUM" width="w-5 sm:w-6" isDark={true} />
              <Key label="/" width="w-5 sm:w-6" isDark={true} />
              <Key label="*" width="w-5 sm:w-6" isDark={true} />
              <Key label="-" width="w-5 sm:w-6" isDark={true} />
            </div>

            <div className="flex gap-1">
              <Key label="7" width="w-5 sm:w-6" />
              <Key label="8" width="w-5 sm:w-6" />
              <Key label="9" width="w-5 sm:w-6" />
              <Key label="+" width="w-5 sm:w-6" isDark={true} />
            </div>

            <div className="flex gap-1">
              <Key label="4" width="w-5 sm:w-6" />
              <Key label="5" width="w-5 sm:w-6" />
              <Key label="6" width="w-5 sm:w-6" />
              <div className="w-5 sm:w-6" />
            </div>

            <div className="flex gap-1">
              <Key label="1" width="w-5 sm:w-6" />
              <Key label="2" width="w-5 sm:w-6" />
              <Key label="3" width="w-5 sm:w-6" />
              <Key label="ENT" width="w-5 sm:w-6" isDark={true} />
            </div>

            <div className="flex gap-1">
              <Key label="0" width="w-11 sm:w-13" />
              <Key label="." width="w-5 sm:w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 7. RETRO MOUSE AND MOUSE PAD
// ==========================================
const MouseAndPad = () => {
  return (
    <div className="relative flex items-center justify-center select-none">
      <div 
        className="relative z-10 w-[210px] h-[245px] rounded-2xl flex items-center justify-center p-3"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #252a36 0%, #171a22 75%, #0f1117 100%)',
          boxShadow: `
            0 12px 24px -4px rgba(0, 0, 0, 0.4),
            0 6px 12px rgba(0, 0, 0, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            inset 0 0 0 1.5px rgba(255, 255, 255, 0.05)
          `,
          border: '1px solid #2d3342'
        }}
      >
        <div className="absolute inset-1.5 rounded-xl border border-dashed border-slate-600/30 pointer-events-none" />

        <div className="absolute bottom-2.5 right-3 text-[7px] font-mono font-bold tracking-widest text-slate-500/40 select-none uppercase">
          {cpuTVBranding.mousePadLabel}
        </div>

        {/* Vintage Ergonomic Mouse */}
        <div className="relative flex flex-col items-center">
          <div className="w-2 h-1 rounded-t-sm -mb-0.5 z-20 opacity-40 bg-[#8c8270]" />
          <div className="absolute -bottom-2.5 inset-x-1 h-5 rounded-full blur-md bg-black/75 pointer-events-none" />

          <div 
            className="relative z-10 w-18 sm:w-20 md:w-22 h-28 sm:h-32 md:h-36 rounded-t-[34px] rounded-b-[26px] overflow-hidden flex flex-col items-center"
            style={{
              background: 'linear-gradient(175deg, #f5efe2 0%, #ded7c6 30%, #c4b9a4 85%, #ad9f88 100%)',
              boxShadow: `
                0 6px 14px rgba(0, 0, 0, 0.5),
                inset 1.5px 2px 3px rgba(255, 255, 255, 0.9),
                inset -2px -2px 4px rgba(0, 0, 0, 0.35),
                inset 0 0 0 1px rgba(200, 190, 170, 0.5)
              `
            }}
          >
            <div 
              className="absolute top-2 left-3 w-5 h-16 rounded-full blur-[1px] pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
                transform: 'rotate(-8deg)'
              }}
            />

            {/* Mouse Buttons & Scroll Wheel */}
            <div className="w-full h-12 sm:h-14 relative flex items-center justify-between border-b border-[#a89d89]">
              <div 
                className="w-1/2 h-full rounded-tl-[32px] cursor-default"
                style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.8)' }}
              />

              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 flex flex-col items-center justify-center">
                <div className="absolute inset-y-0 w-[1px] bg-[#938976]" />
                <div 
                  className="relative z-20 w-3 h-5 sm:h-6 rounded-full flex flex-col justify-evenly items-center p-0.5 cursor-default"
                  style={{
                    background: 'linear-gradient(90deg, #595e69 0%, #878c99 50%, #464a52 100%)',
                    boxShadow: '0 2px 3px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.4)',
                    border: '0.5px solid #32353b'
                  }}
                >
                  <div className="w-full h-[1px] bg-slate-300 opacity-60" />
                  <div className="w-full h-[1px] bg-slate-300 opacity-60" />
                  <div className="w-full h-[1px] bg-slate-300 opacity-60" />
                </div>
              </div>

              <div 
                className="w-1/2 h-full rounded-tr-[32px] cursor-default"
                style={{ boxShadow: 'inset -1px 1px 2px rgba(255,255,255,0.8)' }}
              />
            </div>

            <div className="w-full flex-1 flex flex-col items-center justify-end pb-3 sm:pb-4">
              <span className="text-[7px] sm:text-[8px] font-mono font-bold tracking-widest text-[#736a58] opacity-75">
                CRCCF
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 8. MASTER RETROCPUTV CONSOLIDATED COMPONENT
// ==========================================
export const RetroCPUTV = () => {
  const DESKTOP_WIDTH = 1020;
  const DESKTOP_HEIGHT = 920;

  const MOBILE_WIDTH = 670;
  const MOBILE_HEIGHT = 880;

  const getMetrics = () => {
    if (typeof window === 'undefined') {
      return { 
        isMobile: false, 
        scale: 1, 
        unscaledWidth: DESKTOP_WIDTH, 
        unscaledHeight: DESKTOP_HEIGHT, 
        scaledWidth: DESKTOP_WIDTH, 
        scaledHeight: DESKTOP_HEIGHT 
      };
    }
    const screenWidth = Math.min(
      window.innerWidth || 1020,
      document.documentElement?.clientWidth || window.innerWidth || 1020
    );
    const mobileMode = screenWidth < 960;
    const baseW = mobileMode ? MOBILE_WIDTH : DESKTOP_WIDTH;
    const baseH = mobileMode ? MOBILE_HEIGHT : DESKTOP_HEIGHT;
    const padding = mobileMode ? 24 : 32;
    const availableWidth = Math.max(280, screenWidth - padding);

    let targetScale = 1;
    if (mobileMode) {
      targetScale = Math.min(1, Math.max(0.35, availableWidth / baseW));
    } else {
      if (availableWidth >= baseW) {
        targetScale = 1;
      } else {
        targetScale = Math.max(0.65, availableWidth / baseW);
      }
    }

    return {
      isMobile: mobileMode,
      scale: targetScale,
      unscaledWidth: baseW,
      unscaledHeight: baseH,
      scaledWidth: Math.ceil(baseW * targetScale),
      scaledHeight: Math.ceil(baseH * targetScale),
    };
  };

  const [layout, setLayout] = useState(getMetrics);

  useEffect(() => {
    const handleResize = () => {
      setLayout(getMetrics());
    };

    handleResize();

    // Extra safety triggers for device orientation / mobile emulation refresh
    const timer1 = setTimeout(handleResize, 50);
    const timer2 = setTimeout(handleResize, 150);

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 flex flex-col items-center justify-start pt-3 sm:pt-6 pb-16 sm:pb-24 px-3 sm:px-4 selection:bg-red-600 selection:text-white">
      
      {/* 0. TOP PAGE HEADER & DESCRIPTION (Compact & perfectly proportioned for mobile & desktop) */}
      <header className="w-full max-w-4xl flex flex-col items-center text-center mb-2 sm:mb-5 select-none">
        {/* Top category pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0b2545] text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-1 sm:mb-2 shadow-sm">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-600 animate-pulse" />
          <span>{cpuTVBranding.systemCategoryBadge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#0b2545] tracking-tight uppercase leading-snug px-2">
          {cpuTVBranding.pageTitle}
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-1 text-[11px] sm:text-xs md:text-sm text-slate-600 max-w-xl font-normal leading-tight sm:leading-relaxed px-3 line-clamp-2 sm:line-clamp-none">
          {cpuTVBranding.pageDescription}
        </p>

        {/* Subtle decorative divider line */}
        <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#b91c1c] to-transparent rounded-full mt-1.5 sm:mt-2.5 opacity-80" />
      </header>

      {/* 1. WORKSTATION LAYOUT WRAPPER */}
      <div 
        id="workstation-wrapper"
        className="relative shrink-0 my-1 sm:my-2"
        style={{
          width: `${layout.scaledWidth}px`,
          height: `${layout.scaledHeight}px`,
          maxWidth: '100%'
        }}
      >
        <div 
          id="workstation-inner"
          className="relative flex flex-col items-center justify-start shrink-0 transition-transform duration-100"
          style={{
            width: `${layout.unscaledWidth}px`,
            height: `${layout.unscaledHeight}px`,
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: `translateX(-50%) scale(${layout.scale})`,
            transformOrigin: 'top center'
          }}
        >
          {/* HARDWARE ROW 1: CRT MONITOR (+ CPU TOWER ON DESKTOP ONLY) */}
          <div className="w-full flex flex-row items-end justify-center gap-6 lg:gap-10 z-20">
            <div className="w-[660px] shrink-0">
              <CrtMonitor />
            </div>

            {!layout.isMobile && (
              <div className="w-[240px] shrink-0 mb-4 transition-opacity duration-200">
                <CpuTower />
              </div>
            )}
          </div>

          {/* HARDWARE ROW 2: KEYBOARD (+ MOUSE PAD ON DESKTOP ONLY) */}
          <div className="w-full flex flex-row items-start justify-center gap-6 lg:gap-8 -mt-7 z-30">
            <div className={`${layout.isMobile ? 'w-[660px]' : 'w-[730px]'} shrink-0 transition-all duration-200`}>
              <Keyboard />
            </div>

            {!layout.isMobile && (
              <div className="w-[210px] shrink-0 mt-8 transition-opacity duration-200">
                <MouseAndPad />
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};

export const Section08 = () => {
  return (
    <section
      id="section-08"
      className="w-full relative select-none overflow-hidden bg-[#e8e4db] border-b border-[#cfc8ba]"
    >
      <RetroCPUTV />
    </section>
  );
};

export { photos };
export default Section08;
