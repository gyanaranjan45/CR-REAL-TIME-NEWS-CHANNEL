import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Eye,
  Share2,
  Calendar,
  Shield,
  Play,
  Volume2,
} from 'lucide-react';
import {
  clinicalStories,
  advisoryCards,
  realTimeNewsData,
  headerContent,
} from './Section04Data';

/* =========================================================================
   1. SUBTLE DOTTED WORLD MAP BACKGROUND
========================================================================= */
const WorldMapDotted = ({ position = 'left' }) => {
  return (
    <div
      className={`absolute top-0 ${
        position === 'left' ? 'left-0' : 'right-0'
      } w-64 sm:w-80 md:w-[420px] h-32 sm:h-44 md:h-52 pointer-events-none select-none overflow-hidden z-0 opacity-20`}
    >
      <svg
        viewBox="0 0 420 220"
        className={`w-full h-full object-contain ${
          position === 'right' ? '-scale-x-100' : ''
        }`}
        fill="none"
      >
        <defs>
          <pattern
            id={`dot-grid-${position}`}
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1.1" fill="#60A5FA" opacity="0.55" />
          </pattern>
        </defs>
        <rect width="420" height="220" fill={`url(#dot-grid-${position})`} />
      </svg>
    </div>
  );
};

/* =========================================================================
   2. 100% PURE CSS / SVG 3D BROADCAST MICROPHONE
   - Positioned safely in upper-left, zero overlap with the filmstrip.
   - Head and Face point directly UP & RIGHT towards the main heading!
   - Thicker, bold 3D broadcast proportions ("thick ahi").
========================================================================= */
const BroadcastMicrophoneCSS = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{
        opacity: 1,
        y: [0, -3.5, 0],
      }}
      transition={{
        opacity: { duration: 0.5, ease: 'easeOut' },
        y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="absolute top-1 sm:top-2 md:top-2.5 left-2 sm:left-4 md:left-8 lg:left-12 xl:left-14 z-20 pointer-events-none select-none w-28 xs:w-32 sm:w-40 md:w-44 lg:w-48 xl:w-52 overflow-visible"
    >
      <svg
        viewBox="0 0 260 215"
        className="w-full h-auto overflow-visible filter drop-shadow-[0_10px_20px_rgba(0,18,60,0.18)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="micSphere3DFace" cx="42%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="25%" stopColor="#64748B" />
            <stop offset="55%" stopColor="#334155" />
            <stop offset="85%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          <linearGradient id="chromeMetalThick" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="25%" stopColor="#64748B" />
            <stop offset="48%" stopColor="#CBD5E1" />
            <stop offset="55%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#94A3B8" />
            <stop offset="88%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="handleGradThick" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#080C16" />
            <stop offset="22%" stopColor="#1E293B" />
            <stop offset="45%" stopColor="#475569" />
            <stop offset="58%" stopColor="#94A3B8" />
            <stop offset="75%" stopColor="#334155" />
            <stop offset="100%" stopColor="#03060F" />
          </linearGradient>

          <pattern
            id="micMeshThick"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 2 L 4 2 M 2 0 L 2 4"
              stroke="#000000"
              strokeWidth="0.75"
              opacity="0.65"
            />
            <path
              d="M 0 0 L 4 4 M 4 0 L 0 4"
              stroke="#CBD5E1"
              strokeWidth="0.4"
              opacity="0.35"
            />
          </pattern>

          <filter id="micVectorShadowThick" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="8"
              dy="12"
              stdDeviation="9"
              floodColor="#001033"
              floodOpacity="0.2"
            />
          </filter>
        </defs>

        {/* 1. Dynamic Vector Ribbon Swooshes */}
        <g opacity="0.95">
          <path
            d="M 102 145 C 80 178, 48 200, 12 210 C 32 194, 68 165, 90 138 Z"
            fill="url(#swooshRedThick)"
          />
          <linearGradient id="swooshRedThick" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1E2D" />
            <stop offset="60%" stopColor="#E50914" />
            <stop offset="100%" stopColor="#B90610" />
          </linearGradient>

          <path
            d="M 112 150 C 90 185, 58 208, 22 218 C 42 202, 78 172, 100 144 Z"
            fill="#0B1E5B"
          />
        </g>

        {/* 2. 3D Broadcast Microphone Assembly */}
        <g
          transform="translate(132, 108) rotate(38)"
          filter="url(#micVectorShadowThick)"
        >
          {/* Thick Tapered Handle */}
          <path
            d="M -12 25 L -7 105 L 7 105 L 12 25 Z"
            fill="url(#handleGradThick)"
          />
          <ellipse cx="0" cy="105" rx="7" ry="2.5" fill="#020617" />
          <line
            x1="-2.5"
            y1="25"
            x2="-1.5"
            y2="105"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <rect
            x="-9"
            y="90"
            width="18"
            height="5"
            rx="1.5"
            fill="url(#chromeMetalThick)"
          />

          {/* 3D CUBE BROADCAST FLAG */}
          <polygon
            points="-30,-24 5,-35 5,5 -30,16"
            fill="#E50914"
            stroke="#99040C"
            strokeWidth="0.7"
          />
          <polygon
            points="-30,16 5,5 5,29 -30,40"
            fill="#0B1E5B"
            stroke="#030B22"
            strokeWidth="0.7"
          />
          <polygon
            points="5,-35 29,-26 29,14 5,5"
            fill="#B90610"
            stroke="#700208"
            strokeWidth="0.7"
          />
          <polygon
            points="5,5 29,14 29,38 5,29"
            fill="#06102B"
            stroke="#010512"
            strokeWidth="0.7"
          />
          <polygon
            points="-30,-24 -6,-33 29,-26 5,-35"
            fill="#FF4D4D"
            stroke="#CC000B"
            strokeWidth="0.7"
          />

          <text
            x="-12"
            y="-1"
            fill="#FFFFFF"
            fontFamily="'Montserrat', 'Inter', sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="17"
            textAnchor="middle"
            transform="skewY(-17)"
            filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.65))"
          >
            CR
          </text>
          <text
            x="-12"
            y="27"
            fill="#FFFFFF"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="9.5"
            letterSpacing="0.8"
            textAnchor="middle"
            transform="skewY(-17)"
            filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.65))"
          >
            NEWS
          </text>

          <rect
            x="-11"
            y="-44"
            width="22"
            height="10"
            rx="2"
            fill="url(#chromeMetalThick)"
            stroke="#0F172A"
            strokeWidth="0.8"
          />

          <circle cx="0" cy="-72" r="29" fill="url(#micSphere3DFace)" />
          <circle cx="0" cy="-72" r="29" fill="url(#micMeshThick)" />
          <ellipse
            cx="0"
            cy="-58"
            rx="25"
            ry="4.2"
            fill="url(#chromeMetalThick)"
            stroke="#0F172A"
            strokeWidth="0.9"
          />
          <ellipse
            cx="-8"
            cy="-82"
            rx="10"
            ry="6.5"
            fill="#FFFFFF"
            opacity="0.38"
          />
        </g>
      </svg>
    </motion.div>
  );
};

/* =========================================================================
   3. TOP HEADER BRANDING SECTION (Original Big Bold Proportions)
========================================================================= */
const NewsHeader = () => {
  return (
    <header className="relative w-full pt-2 sm:pt-4 md:pt-5 pb-3 sm:pb-4 px-4 flex flex-col items-center justify-center text-center z-10">
      {/* 3.1 Master Branding Bar: [CR] [Real Time] [News] // */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3 select-none flex-nowrap"
      >
        <div className="relative inline-flex items-center justify-center bg-gradient-to-br from-[#FF1E2D] via-[#E50914] to-[#B90610] text-white px-3.5 sm:px-5 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-xl sm:rounded-2xl shadow-lg shadow-red-600/35 border-t border-red-300/40 -skew-x-[8deg] shrink-0">
          <span className="font-montserrat font-black italic tracking-wider text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-none">
            {headerContent.badge}
          </span>
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-white/35 pointer-events-none" />
        </div>

        <div className="font-montserrat font-black italic text-[#0B1E5B] tracking-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-none px-0.5 shrink-0 drop-shadow-sm">
          {headerContent.titlePrimary}
        </div>

        <div className="relative inline-flex items-center justify-center bg-gradient-to-br from-[#FF1E2D] via-[#E50914] to-[#B90610] text-white px-3.5 sm:px-5 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-xl sm:rounded-2xl shadow-lg shadow-red-600/35 border-t border-red-300/40 -skew-x-[8deg] shrink-0">
          <span className="font-montserrat font-black italic tracking-wide text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-none">
            {headerContent.titleAccent}
          </span>
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-white/35 pointer-events-none" />
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5 ml-1 sm:ml-1.5 shrink-0">
          <div className="w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-7 sm:h-9 md:h-11 lg:h-12 bg-[#0B1E5B] -skew-x-[24deg] rounded-[1px] shadow-sm" />
          <div className="w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-7 sm:h-9 md:h-11 lg:h-12 bg-[#0B1E5B] -skew-x-[24deg] rounded-[1px] shadow-sm" />
        </div>
      </motion.div>

      {/* 3.2 Subtitle flanked by thin red lines */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="w-full max-w-4xl mt-3 sm:mt-4 flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-2 select-none"
      >
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#FF1E2D] to-[#FF1E2D] rounded-full opacity-85" />
        <h2 className="font-montserrat font-black italic text-[#0B1E5B] text-xs sm:text-sm md:text-base lg:text-[17px] tracking-wider uppercase whitespace-nowrap px-1">
          {headerContent.subheading}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[#FF1E2D] to-[#FF1E2D] rounded-full opacity-85" />
      </motion.div>

      {/* 3.3 Description text */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="w-full max-w-3xl mt-2 sm:mt-2.5 text-[#0B1E5B] text-[11px] sm:text-xs md:text-[13px] lg:text-[13.5px] leading-relaxed font-medium px-4 opacity-90 select-none text-center"
      >
        {headerContent.description}
      </motion.p>
    </header>
  );
};

/* =========================================================================
   4. SINGLE NEWS CARD COMPONENT (Film Frame Cell Inside Filmstrip)
========================================================================= */
const NewsCard = ({ news, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(news)}
      className="group relative bg-white rounded-xl md:rounded-2xl border-2 border-[#00B4FF]/60 shadow-[0_6px_20px_rgba(0,18,60,0.35)] hover:shadow-[0_10px_28px_rgba(0,180,255,0.45)] hover:border-[#00E5FF] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between select-none w-full h-full"
    >
      {/* 4.1 Card Top News Image (~58% Height) */}
      <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-slate-950 shrink-0">
        <img
          src={news.image}
          alt={news.headline}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
          onError={(e) => {
            if (news.fallbackImage) e.target.src = news.fallbackImage;
          }}
        />

        {/* Category Badge Pill */}
        <div className="absolute top-2 left-2 z-10">
          <span className="inline-block bg-[#FF1E2D] text-white text-[9px] sm:text-[10px] md:text-[10.5px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider">
            {news.category}
          </span>
        </div>

        {/* Play Button */}
        <div className="absolute bottom-2 right-2 z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF1E2D] text-white flex items-center justify-center shadow-lg border border-white/70 group-hover:bg-[#FF353B] group-hover:shadow-red-500/50 transition-colors">
          <Play className="w-3 h-3 text-white fill-current ml-0.5" />
        </div>
      </div>

      {/* 4.2 Card Body (Headline + Footer Metadata) */}
      <div className="p-2 sm:p-2.5 md:p-3 flex flex-col justify-between flex-grow bg-white">
        <h3 className="font-bold text-[#0A1945] text-[11px] sm:text-[11.5px] md:text-[12.5px] leading-snug line-clamp-2 tracking-tight group-hover:text-[#FF1E2D] transition-colors">
          {news.headline}
        </h3>

        <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[#0A1945] text-[9.5px] sm:text-[10px] md:text-[10.5px] font-semibold">
          <div className="flex items-center gap-1 opacity-90">
            <Calendar className="w-3 h-3 text-[#0A1945]" />
            <span>{news.date}</span>
          </div>

          <div className="flex items-center gap-1 opacity-90">
            <Eye className="w-3 h-3 text-[#0A1945]" />
            <span>{news.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   5. UNIFORM STRAIGHT SPROCKET PERFORATIONS ROW
========================================================================= */
const StraightSprocketRail = ({ count = 60 }) => {
  return (
    <div className="w-full flex items-center justify-between px-2 sm:px-4 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-3 sm:w-3.5 md:w-[15px] h-2 sm:h-2.5 md:h-3 bg-white rounded-[2.5px] shadow-sm shrink-0 opacity-95 mx-[3px] sm:mx-[4px]"
        />
      ))}
    </div>
  );
};

/* =========================================================================
   6. CONTINUOUS MARQUEE SCROLLING FILMSTRIP (RIGHT TO LEFT)
   - Scrolls smoothly from right to left continuously.
   - Pauses completely when hovered!
   - 100% straight horizontal film reel spanning end-to-end.
   - Cards are built directly inside the filmstrip.
========================================================================= */
const MarqueeStraightFilmstrip = ({ onSelectCard }) => {
  // Duplicate list 3 times for a flawless, smooth, unbroken infinite marquee loop
  const marqueeItems = [
    ...realTimeNewsData,
    ...realTimeNewsData,
    ...realTimeNewsData,
  ];

  return (
    <div className="filmstrip-container relative w-full max-w-none px-0 mx-0 mt-3 sm:mt-4 mb-6 select-none overflow-hidden bg-gradient-to-r from-[#01045F] via-[#082568] to-[#00205A] shadow-[0_16px_36px_rgba(0,18,60,0.25)]">
      {/* 6.1 Top Electric Neon Blue Glowing Border (Razor Straight) */}
      <div className="w-full h-[3.5px] bg-[#00E5FF] shadow-[0_0_14px_#00E5FF]" />

      {/* 6.2 Top Sprocket Rail (Full width straight row of perforations) */}
      <div className="py-2 sm:py-2.5 border-b border-blue-400/20 overflow-hidden">
        <StraightSprocketRail count={65} />
      </div>

      {/* 6.3 Marquee Scrolling Track of News Cards (Right-to-Left, Pauses on Hover) */}
      <div className="w-full overflow-hidden py-3 sm:py-3.5">
        <div className="filmstrip-track flex items-stretch gap-4 sm:gap-5 md:gap-6 px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[270px] sm:w-[290px] md:w-[310px] lg:w-[330px] h-[255px] sm:h-[265px] md:h-[275px] shrink-0"
            >
              <NewsCard news={item} onSelect={onSelectCard} />
            </div>
          ))}
        </div>
      </div>

      {/* 6.4 Bottom Sprocket Rail (Full width straight row of perforations) */}
      <div className="py-2 sm:py-2.5 border-t border-blue-400/20 overflow-hidden">
        <StraightSprocketRail count={65} />
      </div>

      {/* 6.5 Bottom Electric Neon Blue Glowing Border (Razor Straight) */}
      <div className="w-full h-[3.5px] bg-[#00E5FF] shadow-[0_0_14px_#00E5FF]" />

      {/* 6.6 Atmospheric Underglow Flares (Cyan on left, Red on right) */}
      <div className="absolute inset-x-0 -bottom-3 h-16 pointer-events-none z-0">
        <div className="absolute left-[18%] bottom-0 w-80 sm:w-96 h-12 bg-[#00E5FF]/45 rounded-full filter blur-2xl" />
        <div className="absolute right-[22%] bottom-0 w-80 sm:w-96 h-12 bg-[#FF1E2D]/45 rounded-full filter blur-2xl" />
      </div>
    </div>
  );
};

/* =========================================================================
   7. INTERACTIVE NEWS MODAL
========================================================================= */
const NewsDetailModal = ({ news, onClose }) => {
  if (!news) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#000E2E]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-cyan-400/40 flex flex-col max-h-[92vh]"
        >
          <div className="bg-[#0B1E5B] px-4 py-3 flex items-center justify-between text-white border-b border-blue-500/20">
            <div className="flex items-center gap-2">
              <span className="bg-[#FF1E2D] text-white text-xs font-black italic px-2 py-0.5 rounded-md">
                CR NEWS
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-cyan-300">
                Official Report #{news.cardNumber}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="p-4 sm:p-6 overflow-y-auto">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 shadow-md">
              <img
                src={news.image}
                alt={news.headline}
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (news.fallbackImage) e.target.src = news.fallbackImage;
                }}
              />
              <div className="absolute top-3 left-3 bg-[#FF1E2D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {news.category}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>HD Broadcast</span>
              </div>
            </div>

            <h2 className="mt-4 text-[#0B1E5B] font-black text-lg sm:text-xl md:text-2xl leading-tight">
              {news.headline}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-1 text-[#0B1E5B] font-semibold">
                <Calendar className="w-4 h-4 text-[#FF1E2D]" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-1 text-[#0B1E5B] font-semibold">
                <Eye className="w-4 h-4 text-[#FF1E2D]" />
                <span>{news.views} Verified Views</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 font-medium">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{news.readTime}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 font-medium">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>{news.author}</span>
              </div>
            </div>

            <p className="mt-3 text-[#0B1E5B] text-sm sm:text-base leading-relaxed font-normal">
              {news.summary}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: news.headline,
                      text: news.summary,
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B1E5B] text-xs font-bold transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Broadcast</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#FF1E2D] hover:bg-[#FF353B] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* =========================================================================
   8. MASTER CRCCF REAL TIME NEWS SECTION EXPORT
========================================================================= */
function RealTimeNews() {
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedNews(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative w-full max-w-full bg-white text-[#0B1E5B] overflow-x-hidden min-w-0 flex flex-col justify-between pt-2 sm:pt-3 pb-2">
      {/* 1. Subtle Light-Blue Dotted World Map */}
      <WorldMapDotted position="left" />
      <WorldMapDotted position="right" />

      {/* 2. 100% Pure CSS/SVG 3D Broadcast Microphone */}
      <BroadcastMicrophoneCSS />

      {/* 3. Header Branding, Subtitle & Description */}
      <NewsHeader />

      {/* 4. Master Straight Cinematic Marquee Filmstrip (Right-to-Left, Pauses on Hover) */}
      <div className="w-full z-10 px-0">
        <MarqueeStraightFilmstrip
          onSelectCard={(item) => setSelectedNews(item)}
        />
      </div>

      {/* 5. Interactive News Modal */}
      {selectedNews && (
        <NewsDetailModal
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </section>
  );
}

export const Section04 = () => {
  return (
    <section
      id="section-04"
      className="w-full relative select-none overflow-hidden bg-white border-b border-slate-200"
    >
      <RealTimeNews />
    </section>
  );
};

export { clinicalStories, advisoryCards };
export default Section04;
