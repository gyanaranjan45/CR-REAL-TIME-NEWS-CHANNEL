import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Radio, X, Newspaper, Clock, Bookmark } from 'lucide-react';
import { NEWS_CATEGORIES, GRADIENT_PALETTES } from './NewsPageData';

/**
 * ====================================================================
 * 1. POTTED PLANT COMPONENT
 * ====================================================================
 * Recreates the lush green houseplant in the white ceramic pot
 * resting on the left side of the wooden table (visible on desktop, hidden on mobile).
 */
export function PottedPlant({ className = "" }) {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* SVG Vector Plant + Pot */}
      <svg 
        viewBox="0 0 160 250" 
        className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto overflow-visible"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ceramic Pot Smooth Shading */}
          <linearGradient id="potBody3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="20%" stopColor="#f3f4f6" />
            <stop offset="60%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>

          {/* Pot Rim Gradient */}
          <linearGradient id="potRim3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Soil Layer */}
          <linearGradient id="soil3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#292524" />
            <stop offset="100%" stopColor="#1c1917" />
          </linearGradient>

          {/* Leaf Gradients */}
          <linearGradient id="leafDark3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          <linearGradient id="leafMid3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="70%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="leafLight3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="40%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>

          <linearGradient id="leafFresh3" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="stemGrad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>

        {/* Ambient shadow behind the plant onto the wall */}
        <ellipse cx="80" cy="180" rx="35" ry="12" fill="rgba(0,0,0,0.12)" filter="blur(6px)" />

        {/* Lush Green Foliage */}
        <path d="M80 185 Q80 130 82 80" stroke="url(#stemGrad3)" strokeWidth="3" strokeLinecap="round" />
        <path d="M80 160 Q65 140 45 125" stroke="url(#stemGrad3)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M80 140 Q55 110 32 85" stroke="url(#stemGrad3)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M81 120 Q60 85 45 55" stroke="url(#stemGrad3)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M80 165 Q100 145 122 135" stroke="url(#stemGrad3)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M81 135 Q110 110 130 92" stroke="url(#stemGrad3)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M82 110 Q105 75 118 50" stroke="url(#stemGrad3)" strokeWidth="2.2" strokeLinecap="round" />

        {/* Deep background leaves */}
        <path d="M45 125 C30 115 25 95 40 85 C55 95 50 115 45 125 Z" fill="url(#leafDark3)" />
        <path d="M122 135 C138 125 142 105 128 95 C115 105 118 125 122 135 Z" fill="url(#leafDark3)" />
        <path d="M60 85 C45 70 50 50 68 45 C78 60 75 75 60 85 Z" fill="url(#leafDark3)" />

        {/* Mid-layer leaves */}
        <path d="M32 85 C18 75 12 52 28 42 C44 50 42 72 32 85 Z" fill="url(#leafMid3)" />
        <path d="M130 92 C146 80 148 58 134 48 C120 58 122 80 130 92 Z" fill="url(#leafMid3)" />
        <path d="M50 140 C32 135 22 118 35 105 C48 112 52 128 50 140 Z" fill="url(#leafMid3)" />
        <path d="M112 145 C128 140 136 122 124 110 C112 118 108 135 112 145 Z" fill="url(#leafMid3)" />

        {/* Upper leaves */}
        <path d="M45 55 C35 40 38 25 52 20 C62 30 60 45 45 55 Z" fill="url(#leafLight3)" />
        <path d="M118 50 C128 35 125 20 110 16 C100 26 102 42 118 50 Z" fill="url(#leafLight3)" />
        
        {/* Top central sprout */}
        <path d="M82 80 C74 60 72 40 82 28 C92 40 90 60 82 28 Z" fill="url(#leafFresh3)" />
        <path d="M82 80 C68 68 65 50 75 38 C82 50 82 65 82 80 Z" fill="url(#leafLight3)" />
        <path d="M82 80 C96 68 98 50 88 38 C82 50 82 65 82 80 Z" fill="url(#leafMid3)" />

        {/* Lower spilling leaves */}
        <path d="M55 175 C38 170 30 152 44 142 C56 150 60 165 55 175 Z" fill="url(#leafMid3)" />
        <path d="M105 175 C122 170 130 152 116 142 C104 150 100 165 105 175 Z" fill="url(#leafLight3)" />
        <path d="M78 178 C65 172 62 155 74 146 C84 154 86 168 78 178 Z" fill="url(#leafFresh3)" />

        {/* Ceramic Pot */}
        <ellipse cx="80" cy="180" rx="34" ry="7" fill="url(#soil3)" />
        <path 
          d="M45 180 C45 179 47 232 49 237 C51 242 70 245 80 245 C90 245 109 242 111 237 C113 232 115 179 115 180 Z" 
          fill="url(#potBody3)" 
        />
        <ellipse cx="80" cy="239" rx="31" ry="5" fill="#9ca3af" opacity="0.35" />
        <ellipse cx="80" cy="180" rx="35" ry="7.5" fill="url(#potRim3)" stroke="#cbd5e1" strokeWidth="1" />
        <ellipse cx="80" cy="180" rx="32" ry="6" fill="none" stroke="#e2e8f0" strokeWidth="1" />

        {/* Specular highlight */}
        <path 
          d="M52 186 Q54 212 55 235" 
          stroke="rgba(255,255,255,0.7)" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
      </svg>

      {/* Ground Contact Shadow on the table */}
      <div className="w-14 sm:w-18 md:w-22 h-2.5 bg-black/55 blur-[3px] rounded-full -mt-1.5 transform scale-x-125" />
    </div>
  );
}

/**
 * ====================================================================
 * 2. WOODEN TABLE COMPONENT
 * ====================================================================
 * Generously widened oak tabletop with warm honey amber finish,
 * apron, solid vertical legs with increased height, and horizontal stretcher rail.
 */
export function WoodenTable({ children, plant }) {
  return (
    <div className="relative w-full max-w-[1300px] lg:max-w-[1380px] xl:max-w-[1440px] mx-auto flex flex-col items-center select-none px-1 sm:px-2 md:px-0">
      
      {/* Items resting on the tabletop */}
      <div className="relative w-full">
        {/* Centered TV Container */}
        <div className="w-full flex justify-center z-10 relative">
          {children}
        </div>

        {/* Potted Plant: HIDDEN on mobile (hidden md:block) as requested */}
        {plant && (
          <div className="hidden md:block absolute left-2 sm:left-4 md:left-6 lg:left-8 xl:left-10 bottom-0 z-20 pointer-events-auto">
            {plant}
          </div>
        )}
      </div>

      {/* Wooden Tabletop Slab */}
      <div className="relative w-full z-10 -mt-1 sm:-mt-2">
        {/* Ambient contact shadow on table surface from TV feet */}
        <div className="absolute inset-x-0 -top-3 h-5 bg-gradient-to-b from-black/35 via-black/15 to-transparent blur-[3px] pointer-events-none" />

        {/* Table Top Surface (Honey / Amber Oak Finish) */}
        <div 
          className="relative w-full h-7 sm:h-9 md:h-11 lg:h-13 bg-gradient-to-b from-[#c98444] via-[#b67031] to-[#985721] shadow-[0_6px_16px_rgba(0,0,0,0.35)] border-t border-[#fed7aa]/70 overflow-hidden"
        >
          {/* Natural wood grain overlay */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.2) 4px, transparent 6px), linear-gradient(90deg, rgba(255,255,255,0.15) 0%, transparent 25%, rgba(0,0,0,0.12) 50%, transparent 75%, rgba(255,255,255,0.12) 100%)'
            }}
          />

          {/* Front Bevel Highlight */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#fed7aa]/30 via-[#fef08a] to-[#fed7aa]/30" />
          
          {/* Lower edge lip shadow */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black/45" />
        </div>
      </div>

      {/* Table Base: Apron, Legs & Horizontal Cross Stretcher */}
      <div className="relative w-[94%] sm:w-[94%] md:w-[95%] mx-auto z-0">
        {/* Soft shadow cast by the tabletop onto the apron & wall */}
        <div className="absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-black/50 via-black/20 to-transparent blur-[2px] z-10 pointer-events-none" />

        {/* 1. Front Apron */}
        <div className="relative w-full h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-b from-[#8a4b16] via-[#753d0e] to-[#592c07] shadow-[0_8px_18px_rgba(0,0,0,0.5)] border-t border-[#452004] overflow-hidden">
          <div 
            className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.25) 5px, transparent 8px)'
            }}
          />
        </div>

        {/* 2. Legs and Horizontal Stretcher Rail (Taller & Proportional) */}
        <div className="relative w-full h-28 sm:h-36 md:h-44 lg:h-52 flex justify-between px-4 sm:px-7 md:px-12">
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent blur-md -z-10" />

          {/* Left Vertical Table Leg */}
          <div className="relative w-5 sm:w-7 md:w-9 lg:w-11 h-full bg-gradient-to-r from-[#94521c] via-[#7c4012] to-[#5a2c09] shadow-[6px_0_15px_rgba(0,0,0,0.45)] border-l border-[#fde68a]/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/35" />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-black/40 blur-[2px]" />
          </div>

          {/* Horizontal Cross-Stretcher Rail */}
          <div className="absolute inset-x-8 sm:inset-x-14 md:inset-x-20 top-6 sm:top-8 md:top-10 h-3.5 sm:h-4.5 md:h-5 lg:h-6 bg-gradient-to-b from-[#804413] via-[#6d370b] to-[#4d2404] shadow-[0_6px_12px_rgba(0,0,0,0.5)] border-t border-[#fde68a]/15 z-0">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_3px)]" />
          </div>

          {/* Right Vertical Table Leg */}
          <div className="relative w-5 sm:w-7 md:w-9 lg:w-11 h-full bg-gradient-to-r from-[#94521c] via-[#7c4012] to-[#5a2c09] shadow-[-6px_0_15px_rgba(0,0,0,0.45)] border-r border-[#fde68a]/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/35" />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-black/40 blur-[2px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ====================================================================
 * 3. AMBIENT BACKGROUND COMPONENT
 * ====================================================================
 * Deep navy base, flowing royal blue curved ribbon waves, 
 * and subtle bottom-right violet glow visible on the reference display.
 */
export function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Deep Navy/Midnight Blue Base */}
      <div className="absolute inset-0 bg-[#040817]" />

      {/* SVG Fluid Ribbons & Ambient Glows */}
      <svg 
        className="absolute inset-0 w-full h-full object-cover"
        preserveAspectRatio="none" 
        viewBox="0 0 1920 1080" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Royal Blue Sweeping Ribbon Gradient */}
          <linearGradient id="primaryWave" x1="1920" y1="0" x2="300" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.9" />
            <stop offset="28%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#1d4ed8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#081438" stopOpacity="0" />
          </linearGradient>

          {/* Secondary Soft Ribbon */}
          <linearGradient id="secondaryWave" x1="1200" y1="100" x2="0" y2="1080" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0.85" />
          </linearGradient>

          {/* Bottom-Right Magenta/Violet Glow matching Card 6 */}
          <radialGradient id="bottomRightViolet" cx="95%" cy="92%" r="42%" fx="95%" fy="92%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#6b21a8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#040817" stopOpacity="0" />
          </radialGradient>

          {/* Bottom-Left Blue Glow matching Card 4/5 */}
          <radialGradient id="bottomLeftBlue" cx="6%" cy="88%" r="45%" fx="6%" fy="88%">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0f172a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#040817" stopOpacity="0" />
          </radialGradient>

          {/* Top-Center Header Ambient Glow */}
          <radialGradient id="topGlow" cx="45%" cy="8%" r="48%" fx="45%" fy="8%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#040817" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Radials */}
        <rect width="1920" height="1080" fill="url(#topGlow)" />
        <rect width="1920" height="1080" fill="url(#bottomRightViolet)" />
        <rect width="1920" height="1080" fill="url(#bottomLeftBlue)" />

        {/* Layer 1: Top broad curve */}
        <path 
          d="M0 0C400 90 850 50 1150 160C1480 280 1700 200 1920 250V0H0Z" 
          fill="#1e3a8a" 
          fillOpacity="0.2" 
        />

        {/* Layer 2: Main dynamic diagonal wave swooping down across the center */}
        <path 
          d="M880 0C1100 140 1440 160 1660 300C1840 420 1920 520 1920 620V0H880Z" 
          fill="url(#primaryWave)" 
        />

        {/* Layer 3: Central undulating ribbon */}
        <path 
          d="M1920 380C1700 310 1440 370 1220 490C980 620 720 670 420 620C240 590 90 640 0 720V1080H1920V380Z" 
          fill="url(#secondaryWave)" 
          fillOpacity="0.45" 
        />

        {/* Layer 4: Lower subtle wave curve */}
        <path 
          d="M0 760C240 690 500 730 740 860C960 980 1250 1020 1520 990C1700 970 1840 1000 1920 1050V1080H0V760Z" 
          fill="#172554" 
          fillOpacity="0.35" 
        />
      </svg>

      {/* Subtle organic light sheen overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#1e3a8a]/5 to-[#2563eb]/10 mix-blend-screen" />
    </div>
  );
}

/**
 * ====================================================================
 * 4. CATEGORY CARD COMPONENT
 * ====================================================================
 * Vibrant gradient card displaying strictly the Category Name.
 */
export function DashboardCard({
  title,
  gradient,
  shadow,
  borderSheen,
  style = {},
  className = "",
  onClick
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={style}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`
        group relative overflow-hidden cursor-pointer select-none
        bg-gradient-to-br ${gradient}
        ${shadow}
        border ${borderSheen}
        rounded-xl sm:rounded-2xl
        px-2 py-1.5 sm:px-3 sm:py-2 md:px-3.5 md:py-3.5
        min-h-[38px] sm:min-h-[44px] md:min-h-[62px] lg:min-h-[72px]
        flex items-center justify-center text-center
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:scale-[1.03]
        hover:shadow-lg hover:brightness-110
        focus:outline-none focus:ring-2 focus:ring-white/40
        ${className}
      `}
    >
      {/* Subtle top-inner highlight sheen */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-xl" />

      {/* CARD NAME - 100% VISIBLE & READABLE */}
      <span className="relative z-10 text-[10.5px] sm:text-[11.5px] md:text-[13px] lg:text-[14px] font-bold text-white tracking-normal md:tracking-wide leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] px-1">
        {title}
      </span>
    </div>
  );
}

/**
 * ====================================================================
 * 5. DASHBOARD SCREEN COMPONENT
 * ====================================================================
 * Responsive TV screen: 10 cards on mobile (2 cols x 5 rows, 6 pages)
 * and 20 cards on desktop (5 cols x 4 rows, 3 pages).
 * Power Off/On effect and horizontal assembly line animations.
 */
export function DashboardScreen({ onOpenModal }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [screenState, setScreenState] = useState('on');
  const [animKey, setAnimKey] = useState(0);

  // Responsive screen detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 10 cards on mobile (2 cols x 5 rows), 20 cards on desktop (5 cols x 4 rows)
  const CARDS_PER_PAGE = isMobile ? 10 : 20;
  const totalPages = Math.ceil(NEWS_CATEGORIES.length / CARDS_PER_PAGE);

  // Ensure currentPage is valid if screen size / cardsPerPage changes
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  // Slice categories for active page
  const pageCategories = NEWS_CATEGORIES.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  // Handle Page Transition with TV Screen Off/On effect
  const handlePageChange = (targetPage) => {
    if (targetPage === currentPage || screenState !== 'on') return;

    setScreenState('turning-off');

    setTimeout(() => {
      setCurrentPage(targetPage);
      setAnimKey((prev) => prev + 1);
      setScreenState('turning-on');

      setTimeout(() => {
        setScreenState('on');
      }, 280);
    }, 260);
  };

  return (
    <div className="relative w-full h-full flex-1 min-h-0 bg-[#040817] text-white flex flex-col justify-between px-2.5 pt-2 pb-1.5 sm:px-3.5 sm:pt-2.5 sm:pb-2 md:p-5 lg:p-6 select-none overflow-hidden">
      
      {/* Background SVG Fluid Gradient Curves */}
      <AmbientBackground />

      {/* Screen Glass Specular Highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.06] pointer-events-none z-20" />

      {/* Top Status Header */}
      <div className="relative z-10 w-full flex items-center justify-between pb-1 sm:pb-1.5 md:pb-2 border-b border-white/10 text-xs shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] md:text-[11.5px] font-bold tracking-wider uppercase text-white/90">
            MASTER NEWS <span className="text-blue-400 font-mono">({NEWS_CATEGORIES.length})</span>
          </span>
        </div>

        {/* Live Broadcast Indicator */}
        <div className="flex items-center gap-1 text-[9.5px] sm:text-[10.5px] md:text-[11px] text-emerald-400 font-mono tracking-wider">
          <Radio className="w-3 h-3 animate-spin" />
          <span>LIVE BROADCAST</span>
        </div>
      </div>

      {/* MAIN CARDS GRID: 10 CARDS ON MOBILE (2x5), 20 ON DESKTOP */}
      <main 
        key={`page-${animKey}`}
        className={`
          relative z-10 w-full my-1 sm:my-1.5 md:my-auto py-1 sm:py-1.5 md:py-3 flex items-center justify-center md:flex-1
          ${screenState === 'turning-off' ? 'tv-power-off' : ''}
          ${screenState === 'turning-on' ? 'tv-power-on' : ''}
        `}
      >
        <div className={`w-full grid gap-1.5 sm:gap-2 md:gap-3 lg:gap-3.5 content-center ${
          isMobile ? 'grid-cols-2' : 'grid-cols-5'
        }`}>
          {pageCategories.map((name, indexInPage) => {
            const globalIndex = currentPage * CARDS_PER_PAGE + indexInPage;
            const palette = GRADIENT_PALETTES[globalIndex % GRADIENT_PALETTES.length];

            let animClass = '';
            let totalAnimationDelayMs = 0;

            if (isMobile) {
              // Mobile (2 Columns x 5 Rows = 10 Cards): Line-by-line left and right entry
              const mobileRow = Math.floor(indexInPage / 2);
              const mobileCol = indexInPage % 2;
              animClass = mobileCol === 0 ? 'anim-card-from-left' : 'anim-card-from-right';
              totalAnimationDelayMs = (mobileRow * 80) + (mobileCol * 50);
            } else {
              // Desktop (5 Columns x 4 Rows = 20 Cards): Middle card first -> Left & Right slide
              const desktopRow = Math.floor(indexInPage / 5);
              const desktopCol = indexInPage % 5;
              const lineBaseDelay = desktopRow * 240;

              if (desktopCol === 2) {
                animClass = 'anim-card-middle';
                totalAnimationDelayMs = lineBaseDelay;
              } else if (desktopCol === 1 || desktopCol === 3) {
                animClass = desktopCol === 1 ? 'anim-card-from-left' : 'anim-card-from-right';
                totalAnimationDelayMs = lineBaseDelay + 80;
              } else {
                animClass = desktopCol === 0 ? 'anim-card-from-left' : 'anim-card-from-right';
                totalAnimationDelayMs = lineBaseDelay + 160;
              }
            }

            return (
              <DashboardCard
                key={`${name}-${animKey}`}
                title={name}
                gradient={palette.gradient}
                shadow={palette.shadow}
                borderSheen={palette.border}
                className={animClass}
                style={{
                  animationDelay: `${totalAnimationDelayMs}ms`
                }}
                onClick={() => onOpenModal?.(name)}
              />
            );
          })}
        </div>
      </main>

      {/* BOTTOM NAVIGATION: CLEAN, PROPORTIONAL, ZERO CUT-OFF, NO DEAD SPACE */}
      <div className="relative z-30 w-full pt-1.5 pb-0.5 sm:pt-2 sm:pb-1 md:pt-2 md:pb-1 flex items-center justify-between border-t border-white/10 shrink-0">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0 || screenState !== 'on'}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-[13px] font-bold
            transition-all duration-200 shadow-md
            ${
              currentPage === 0
                ? 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white border border-blue-400/30 active:scale-95 shadow-blue-600/30'
            }
          `}
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Previous</span>
        </button>

        {/* Center Page Status (CLEAN TEXT ONLY, NO DOTS) */}
        <span className="text-xs sm:text-[13px] font-bold text-white/90 font-mono tracking-wider px-2">
          PAGE {currentPage + 1} OF {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
          disabled={currentPage === totalPages - 1 || screenState !== 'on'}
          className={`
            flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-[13px] font-bold
            transition-all duration-200 shadow-md
            ${
              currentPage === totalPages - 1
                ? 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border border-blue-400/30 active:scale-95 shadow-blue-600/30'
            }
          `}
        >
          <span>Next</span>
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
}

/**
 * ====================================================================
 * 6. LED TV COMPONENT
 * ====================================================================
 * TV Bezel with "CR REAL TIME NEWS CHANNEL", power LED indicator,
 * dual stand legs, and embedded DashboardScreen.
 */
export function LedTv({ onOpenModal }) {
  return (
    <div className="relative w-full max-w-[980px] lg:max-w-[1050px] xl:max-w-[1100px] mx-auto flex flex-col items-center">
      
      {/* TV Ambient Wall Shadow */}
      <div className="absolute inset-0 -bottom-4 bg-black/40 blur-xl -z-10 rounded-2xl transform translate-y-2" />

      {/* Main TV Frame / Bezel */}
      <div className="relative w-full h-auto md:min-h-0 md:aspect-[16/9.2] bg-[#0c0d10] p-[5px] sm:p-[7px] md:p-[8px] rounded-[8px] sm:rounded-[12px] shadow-[0_16px_40px_rgba(0,0,0,0.65),0_1px_3px_rgba(255,255,255,0.12)_inset] border border-[#23272e] flex flex-col justify-between overflow-hidden">
        
        {/* Inner Display Area */}
        <div className="relative w-full flex-1 rounded-[3px] sm:rounded-[5px] overflow-hidden bg-[#040817] shadow-inner flex flex-col">
          <DashboardScreen onOpenModal={onOpenModal} />
        </div>

        {/* Bottom TV Bezel with "CR REAL TIME NEWS CHANNEL" */}
        <div className="relative w-full h-4 sm:h-5 md:h-6 bg-gradient-to-b from-[#14161b] via-[#0d0e12] to-[#08090b] flex items-center justify-center border-t border-[#1e2229] shrink-0">
          {/* Power LED Indicator */}
          <div className="absolute right-2.5 sm:right-5 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500/80 shadow-[0_0_6px_rgba(59,130,246,0.9)] animate-pulse" />
          </div>

          {/* Center Brand Text */}
          <span className="text-[7.5px] sm:text-[9.5px] md:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[#d1d5db] font-sans drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] select-none uppercase truncate px-4">
            CR REAL TIME NEWS CHANNEL
          </span>
        </div>
      </div>

      {/* Dual TV Stand Feet */}
      <div className="relative w-full flex justify-between px-8 sm:px-16 md:px-28 lg:px-36 -mt-0.5 pointer-events-none z-10">
        {/* Left Stand Leg */}
        <div className="relative flex flex-col items-center">
          <svg 
            viewBox="0 0 100 56" 
            className="w-10 sm:w-14 md:w-18 h-auto drop-shadow-[0_6px_8px_rgba(0,0,0,0.8)]"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42 0H58L55 12H45L42 0Z" fill="#181a1f" />
            <path 
              d="M45 10L14 52C13 53.5 10 54 8 54H4C2 54 1 52.5 2 51L38 8H45V10Z" 
              fill="url(#leftLegGrad)" 
            />
            <path 
              d="M55 10L86 52C87 53.5 90 54 92 54H96C98 54 99 52.5 98 51L62 8H55V10Z" 
              fill="url(#rightLegGrad)" 
            />
            <path d="M38 10H62L59 15H41L38 10Z" fill="#0f1013" />

            <defs>
              <linearGradient id="leftLegGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2c3038" />
                <stop offset="40%" stopColor="#1a1c22" />
                <stop offset="100%" stopColor="#0b0c0e" />
              </linearGradient>
              <linearGradient id="rightLegGrad" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#24272e" />
                <stop offset="50%" stopColor="#15171c" />
                <stop offset="100%" stopColor="#0a0b0d" />
              </linearGradient>
            </defs>
          </svg>
          <div className="w-12 sm:w-16 h-1 bg-black/75 blur-[2px] rounded-full -mt-0.5 transform scale-x-110" />
        </div>

        {/* Right Stand Leg */}
        <div className="relative flex flex-col items-center">
          <svg 
            viewBox="0 0 100 56" 
            className="w-10 sm:w-14 md:w-18 h-auto drop-shadow-[0_6px_8px_rgba(0,0,0,0.8)]"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42 0H58L55 12H45L42 0Z" fill="#181a1f" />
            <path 
              d="M45 10L14 52C13 53.5 10 54 8 54H4C2 54 1 52.5 2 51L38 8H45V10Z" 
              fill="url(#leftLegGrad2)" 
            />
            <path 
              d="M55 10L86 52C87 53.5 90 54 92 54H96C98 54 99 52.5 98 51L62 8H55V10Z" 
              fill="url(#rightLegGrad2)" 
            />
            <path d="M38 10H62L59 15H41L38 10Z" fill="#0f1013" />

            <defs>
              <linearGradient id="leftLegGrad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2c3038" />
                <stop offset="40%" stopColor="#1a1c22" />
                <stop offset="100%" stopColor="#0b0c0e" />
              </linearGradient>
              <linearGradient id="rightLegGrad2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#24272e" />
                <stop offset="50%" stopColor="#15171c" />
                <stop offset="100%" stopColor="#0a0b0d" />
              </linearGradient>
            </defs>
          </svg>
          <div className="w-12 sm:w-16 h-1 bg-black/75 blur-[2px] rounded-full -mt-0.5 transform scale-x-110" />
        </div>
      </div>
    </div>
  );
}

/**
 * ====================================================================
 * 7. MODALS COMPONENT
 * ====================================================================
 * Dynamic Category News Modal that pops up when clicking any category card.
 */
export function Modals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#09153a] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-white">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center shadow-lg">
            <Newspaper className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                LIVE FEED
              </span>
              <span className="text-xs text-white/50 font-mono">CR REAL TIME NEWS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {activeModal}
            </h3>
          </div>
        </div>

        {/* Simulated Live News Bulletins for the Category */}
        <div className="space-y-3 mb-6">
          <div className="p-4 bg-[#050c26] border border-blue-500/25 rounded-2xl hover:border-blue-400/50 transition-colors">
            <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
              <span className="text-blue-400 font-semibold flex items-center gap-1">
                <Radio className="w-3.5 h-3.5" /> BREAKING BULLETIN
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3 h-3" /> Just now
              </span>
            </div>
            <h4 className="text-sm sm:base font-bold text-white leading-snug">
              Latest developments and real-time strategic updates in {activeModal}.
            </h4>
            <p className="text-xs text-white/70 mt-1 leading-relaxed">
              Special correspondent report from the ground detailing recent policies, public impact, and investigative coverage.
            </p>
          </div>

          <div className="p-4 bg-[#050c26] border border-blue-500/25 rounded-2xl hover:border-blue-400/50 transition-colors">
            <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
              <span className="text-emerald-400 font-semibold">ANALYSIS & INSIGHT</span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3 h-3" /> 24 mins ago
              </span>
            </div>
            <h4 className="text-sm font-semibold text-white leading-snug">
              Industry experts and regulatory authorities address current challenges in {activeModal}.
            </h4>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
          <span className="text-white/50 font-mono">Category ID: #{activeModal.replace(/[^A-Za-z0-9]/g, '').slice(0, 8).toUpperCase()}</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert(`Subscribed to alerts for ${activeModal}`)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors flex items-center gap-1.5"
            >
              <Bookmark className="w-3.5 h-3.5" />
              Subscribe
            </button>
            <button 
              onClick={onClose}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-blue-600/40"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ====================================================================
 * 8. MAIN NEWS ROOT COMPONENT (DEFAULT EXPORT)
 * ====================================================================
 * Complete unified UI integrating Heading, Description, Wooden Table,
 * Potted Plant, LED TV, 60 Categories Dashboard, and Modals.
 */
export default function News() {
  // Modal state for card clicks
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#f6f3eb] via-[#ede7dc] to-[#ded5c6] flex flex-col items-center justify-center pt-12 pb-2 px-2 sm:p-3 md:p-5 select-none overflow-x-hidden font-sans">
      
      {/* Soft Ambient Interior Wall Lighting & Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0.85) 0%, rgba(245,240,230,0.5) 45%, rgba(215,205,190,0.3) 100%)'
        }}
      />

      {/* Main Composition: Symmetrically Centered */}
      <div className="relative z-10 w-full max-w-[1440px] flex flex-col items-center justify-center my-auto">
        
        {/* TOP HEADING & DESCRIPTION */}
        <div className="text-center mb-2 sm:mb-3 md:mb-4 px-2 select-none">
          
          {/* Live Broadcast Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/10 border border-red-500/25 text-red-600 font-bold text-[9px] sm:text-[10px] md:text-[11px] tracking-widest uppercase mb-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            CR REAL TIME INTELLIGENCE NETWORK
          </div>

          {/* Page Heading: NEWS */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-stone-900 uppercase font-sans drop-shadow-sm leading-tight">
            NEWS
          </h1>

          {/* Description */}
          <p className="text-[10.5px] sm:text-xs md:text-sm text-stone-600 font-medium max-w-xl mx-auto mt-0.5 leading-snug">
            Comprehensive 24/7 Live Broadcast & Information Grid across 60 Master Categories covering National, Global, Defense, Technology & Public Affairs.
          </p>
        </div>

        {/* Wooden Table hosting the LED TV in the center and Potted Plant on the left (hidden on mobile) */}
        <WoodenTable plant={<PottedPlant />}>
          <LedTv onOpenModal={setActiveModal} />
        </WoodenTable>
      </div>

      {/* Interactive Modals when cards are clicked */}
      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />

      {/* 
        =======================================================================
        CUSTOM TV POWER OFF/ON & LINE-BY-LINE HORIZONTAL CARD ANIMATIONS
        =======================================================================
      */}
      <style>{`
        @keyframes tvPowerOff {
          0% {
            filter: brightness(1) contrast(1);
            transform: scale(1);
            opacity: 1;
          }
          40% {
            filter: brightness(2.2) contrast(1.8);
            transform: scale(1, 0.008);
            opacity: 0.95;
          }
          80% {
            filter: brightness(3);
            transform: scale(0.15, 0.008);
            opacity: 0.8;
          }
          100% {
            filter: brightness(0);
            transform: scale(0, 0);
            opacity: 0;
          }
        }

        @keyframes tvPowerOn {
          0% {
            filter: brightness(3);
            transform: scale(0.2, 0.008);
            opacity: 0;
          }
          40% {
            filter: brightness(2.5) contrast(1.5);
            transform: scale(1, 0.008);
            opacity: 0.9;
          }
          75% {
            filter: brightness(1.3) contrast(1.1);
            transform: scale(1, 1.02);
            opacity: 1;
          }
          100% {
            filter: brightness(1) contrast(1);
            transform: scale(1);
            opacity: 1;
          }
        }

        /* 1. Middle Card of Each Line: Pops in at center (zero vertical movement) */
        @keyframes middleCardPop {
          0% {
            opacity: 0;
            transform: scale(0.6);
            filter: blur(4px);
          }
          70% {
            opacity: 1;
            transform: scale(1.05);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }

        /* 2. Left Cards: Enter HORIZONTALLY FROM THE LEFT */
        @keyframes fromLeftSlide {
          0% {
            opacity: 0;
            transform: translateX(-55px) scale(0.9);
            filter: blur(4px);
          }
          75% {
            opacity: 1;
            transform: translateX(4px) scale(1.02);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0px);
          }
        }

        /* 3. Right Cards: Enter HORIZONTALLY FROM THE RIGHT */
        @keyframes fromRightSlide {
          0% {
            opacity: 0;
            transform: translateX(55px) scale(0.9);
            filter: blur(4px);
          }
          75% {
            opacity: 1;
            transform: translateX(-4px) scale(1.02);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0px);
          }
        }

        .tv-power-off {
          animation: tvPowerOff 0.26s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .tv-power-on {
          animation: tvPowerOn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-card-middle {
          opacity: 0;
          animation: middleCardPop 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .anim-card-from-left {
          opacity: 0;
          animation: fromLeftSlide 0.34s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .anim-card-from-right {
          opacity: 0;
          animation: fromRightSlide 0.34s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export { News, News as NewsPage };
