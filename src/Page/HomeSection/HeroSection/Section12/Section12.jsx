import React, { useState, useRef } from 'react';
import {
  investigativeNews,
  newsCategories,
  dossiers,
} from './Section12Data';
import {
  FaFolderOpen,
  FaFileShield,
  FaMagnifyingGlassChart,
  FaFingerprint,
  FaClockRotateLeft,
  FaTowerBroadcast,
  FaShieldHalved,
  FaArrowRight,
  FaCircleCheck,
  FaXmark,
  FaUpload,
  FaKey,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaBullhorn,
} from 'react-icons/fa6';

// 1. INVESTIGATIVE NEWS CARD
export const InvestigativeNewsCard = ({
  activeStoryIndex: propStoryIndex,
  onStoryChange,
  onPulseAntenna,
}) => {
  const [internalStoryIndex, setInternalStoryIndex] = useState(0);
  const activeIndex = propStoryIndex !== undefined ? propStoryIndex : internalStoryIndex;
  const totalStories = investigativeNews.length;

  const currentStory = investigativeNews[activeIndex] || investigativeNews[0];

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + totalStories) % totalStories;
    setInternalStoryIndex(nextIdx);
    if (onStoryChange) onStoryChange(nextIdx);
    if (onPulseAntenna) onPulseAntenna();
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % totalStories;
    setInternalStoryIndex(nextIdx);
    if (onStoryChange) onStoryChange(nextIdx);
    if (onPulseAntenna) onPulseAntenna();
  };

  const handleSelectStory = (idx) => {
    setInternalStoryIndex(idx);
    if (onStoryChange) onStoryChange(idx);
    if (onPulseAntenna) onPulseAntenna();
  };

  return (
    <article className="w-full max-w-[520px] rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden select-none flex flex-col justify-between transition-all">
      
      {/* 1. COMPACT BROADCAST NEWS HEADER */}
      <div className="bg-[#0b1120] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 border-b border-slate-800 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center bg-[#e50914] text-white font-black italic text-[11px] sm:text-xs px-2 py-0.5 rounded shadow-xs shrink-0 tracking-wider">
            <span>CR NEWS</span>
          </div>

          <div className="min-w-0 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="text-[10px] font-black uppercase tracking-wider text-red-400 font-mono truncate">
              SPECIAL INVESTIGATION WIRE
            </span>
          </div>
        </div>

        {/* Edition Counter & Prev/Next Navigation */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
            {activeIndex + 1} / {totalStories}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              title="Previous News Story"
              className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer border border-slate-700"
            >
              <FaChevronLeft className="text-[9px]" />
            </button>
            <button
              onClick={handleNext}
              title="Next News Story"
              className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors cursor-pointer border border-slate-700"
            >
              <FaChevronRight className="text-[9px]" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. COMPACT FEATURED NEWS BANNER WITH OVERLAYS */}
      <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-900 group shrink-0">
        <img
          src={currentStory.image}
          alt={currentStory.headline}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges Over Image */}
        <div className="absolute top-2 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-600/90 text-white text-[9px] font-black uppercase tracking-wider shadow-sm backdrop-blur-xs">
            <FaFileShield className="text-[9px]" />
            <span>{currentStory.badge}</span>
          </span>

          <span className="inline-flex items-center gap-1 bg-black/60 text-white text-[9px] font-mono px-1.5 py-0.5 rounded backdrop-blur-md border border-white/10">
            <FaClock className="text-amber-400 text-[8px]" />
            <span>{currentStory.timestamp}</span>
          </span>
        </div>

        {/* Bottom Location & Date Bar */}
        <div className="absolute bottom-1.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[9px] font-mono z-10 pointer-events-none">
          <span className="text-slate-300 bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-xs">
            GROUND REPORT • EXCLUSIVE
          </span>
          <span className="text-amber-300 font-bold bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-xs">
            {currentStory.date}
          </span>
        </div>
      </div>

      {/* 3. COMPACT EDITORIAL BODY */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-2.5 bg-white">
        
        {/* Byline Strip */}
        <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1 border-b border-slate-100 font-sans">
          <div className="flex items-center gap-1.5 font-medium min-w-0">
            <span className="text-red-600 font-bold uppercase tracking-wider text-[9px] shrink-0">
              {currentStory.category}
            </span>
            <span>•</span>
            <span className="text-slate-700 font-semibold truncate">{currentStory.author}</span>
          </div>

          <span className="text-slate-400 font-mono text-[9px] shrink-0">
            {currentStory.readTime}
          </span>
        </div>

        {/* Editorial Headline */}
        <div>
          <h3 className="text-xs sm:text-sm md:text-[15px] font-black text-slate-900 leading-snug font-['Montserrat',sans-serif] hover:text-red-600 transition-colors cursor-pointer line-clamp-2">
            {currentStory.headline}
          </h3>
        </div>

        {/* News Story Lead Paragraph */}
        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
          {currentStory.summary}
        </p>

        {/* Compact Key Findings Box */}
        <div className="border-l-2 border-red-600 pl-2.5 py-0.5 bg-slate-50/80 rounded-r-lg space-y-0.5">
          <div className="text-[9px] font-black text-red-700 uppercase tracking-widest flex items-center gap-1">
            <FaBullhorn className="text-[8px]" />
            <span>KEY DEVELOPMENTS:</span>
          </div>
          {currentStory.highlights.slice(0, 1).map((highlight, idx) => (
            <div key={idx} className="text-[11px] text-slate-700 leading-snug truncate">
              <span className="text-red-600 font-bold mr-1">•</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Compact Legal Action Banner */}
        <div className="px-2.5 py-1.5 rounded-lg bg-red-50/80 border border-red-100 flex items-center gap-1.5 text-[10px] text-slate-800">
          <strong className="text-red-700 font-black uppercase text-[9px] shrink-0 tracking-wider">
            ACTION:
          </strong>
          <span className="truncate leading-tight text-slate-700 font-medium">
            {currentStory.outcome}
          </span>
        </div>

      </div>

      {/* 4. COMPACT FOOTER NAVIGATION BAR */}
      <div className="px-3.5 py-2 sm:px-4 sm:py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
        {/* Story Selector Dot Indicators */}
        <div className="flex items-center gap-1.5">
          {investigativeNews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectStory(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'w-5 bg-red-600 shadow-xs'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Story ${idx + 1}`}
            />
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleNext}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 hover:bg-red-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
        >
          <span>Next</span>
          <FaArrowRight className="text-[9px]" />
        </button>
      </div>

    </article>
  );
};

// 2. ANTINA 3D SATELLITE DISH
/**
 * Antina Component
 * Pure Parametric Mathematical SVG Satellite Dish Antenna
 * 100% Vector Geometry, Zero Raster Pixels, Infinitely Scalable.
 */
function Antina({
  pulseKey: externalPulseKey,
  onPulse,
  activeStoryIndex,
  onStoryChange,
  showInfoCard = true,
}) {
  const [internalPulseKey, setInternalPulseKey] = useState(0);
  const pulseKey = externalPulseKey !== undefined ? externalPulseKey : internalPulseKey;

  const handlePulse = () => {
    setInternalPulseKey((prev) => prev + 1);
    if (onPulse) onPulse();
  };

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="w-full flex items-center justify-center select-none font-sans overflow-x-hidden">
      {/* 2-Column Showcase Container */}
      <div className={`w-full max-w-7xl mx-auto flex flex-col ${showInfoCard ? 'lg:flex-row' : ''} items-center justify-center gap-8 lg:gap-10 xl:gap-14 py-4 sm:py-6`}>
        {/* Left Column: Interactive 3D Satellite Antenna */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handlePulse}
          style={{
            perspective: '1200px',
          }}
          className="w-full max-w-[480px] lg:max-w-[520px] xl:max-w-[580px] aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing shrink-0 relative"
        >
          {/* Subtle Concentric Rings Backdrop */}
          <div className="absolute inset-4 rounded-full border border-stone-200/50 pointer-events-none -z-0 opacity-40 flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full border border-dashed border-stone-300/40 flex items-center justify-center">
              <div className="w-1/2 h-1/2 rounded-full border border-stone-200/30" />
            </div>
          </div>

          {/* Clean Broadcast Badge */}
          <div className="absolute top-2 left-4 z-20 flex items-center gap-2 bg-stone-900/85 text-white backdrop-blur-md px-3 py-1 rounded-full border border-stone-700/60 text-[10px] font-mono shadow-xs pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-stone-200">CR BROADCAST SATELLITE DISH</span>
          </div>

          <div
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
              transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
              transformStyle: 'preserve-3d',
            }}
            className="w-full h-full flex items-center justify-center relative"
          >
            {/* Reload Wi-Fi Emergence Animation Styles */}
            <style>{`
              /* Feed Horn Beacon Ignite on Reload */
              @keyframes beaconIgnite {
                0% {
                  opacity: 0.15;
                  transform: scale(0.65);
                  filter: drop-shadow(0 0 0px rgba(255, 220, 100, 0));
                }
                45% {
                  opacity: 1;
                  transform: scale(1.35);
                  filter: drop-shadow(0 0 18px rgba(0, 229, 255, 1)) drop-shadow(0 0 32px rgba(255, 235, 120, 1));
                }
                100% {
                  opacity: 1;
                  transform: scale(1);
                  filter: drop-shadow(0 0 6px rgba(0, 229, 255, 0.6));
                }
              }

              /* Wave 1 Emergence on Reload */
              @keyframes emergeWave1 {
                0% {
                  opacity: 0;
                  transform: scale(0.1) translate(-25px, 20px);
                  filter: drop-shadow(0 0 0px rgba(0, 229, 255, 0));
                }
                60% {
                  opacity: 1;
                  transform: scale(1.08) translate(5px, -4px);
                  filter: drop-shadow(0 0 22px rgba(0, 229, 255, 1)) drop-shadow(0 0 40px rgba(0, 160, 255, 0.85));
                }
                82% {
                  transform: scale(0.98) translate(-1px, 1px);
                  filter: drop-shadow(0 0 14px rgba(0, 229, 255, 0.75));
                }
                100% {
                  opacity: 1;
                  transform: scale(1) translate(0px, 0px);
                  filter: drop-shadow(0 0 10px rgba(0, 229, 255, 0.65));
                }
              }

              /* Wave 2 Emergence on Reload */
              @keyframes emergeWave2 {
                0% {
                  opacity: 0;
                  transform: scale(0.15) translate(-30px, 25px);
                  filter: drop-shadow(0 0 0px rgba(0, 229, 255, 0));
                }
                60% {
                  opacity: 1;
                  transform: scale(1.07) translate(6px, -5px);
                  filter: drop-shadow(0 0 22px rgba(0, 229, 255, 1)) drop-shadow(0 0 40px rgba(0, 160, 255, 0.85));
                }
                82% {
                  transform: scale(0.985) translate(-1px, 1px);
                  filter: drop-shadow(0 0 14px rgba(0, 229, 255, 0.75));
                }
                100% {
                  opacity: 1;
                  transform: scale(1) translate(0px, 0px);
                  filter: drop-shadow(0 0 10px rgba(0, 229, 255, 0.65));
                }
              }

              /* Wave 3 Emergence on Reload */
              @keyframes emergeWave3 {
                0% {
                  opacity: 0;
                  transform: scale(0.2) translate(-35px, 30px);
                  filter: drop-shadow(0 0 0px rgba(0, 229, 255, 0));
                }
                60% {
                  opacity: 1;
                  transform: scale(1.06) translate(7px, -6px);
                  filter: drop-shadow(0 0 22px rgba(0, 229, 255, 1)) drop-shadow(0 0 40px rgba(0, 160, 255, 0.85));
                }
                82% {
                  transform: scale(0.99) translate(-1px, 1px);
                  filter: drop-shadow(0 0 14px rgba(0, 229, 255, 0.75));
                }
                100% {
                  opacity: 1;
                  transform: scale(1) translate(0px, 0px);
                  filter: drop-shadow(0 0 10px rgba(0, 229, 255, 0.65));
                }
              }

              .beacon-reload {
                transform-origin: 612px 268px;
                animation: beaconIgnite 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s both;
              }

              .wave-reload-1 {
                transform-origin: 604px 275px;
                animation: emergeWave1 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
              }

              .wave-reload-2 {
                transform-origin: 604px 275px;
                animation: emergeWave2 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both;
              }

              .wave-reload-3 {
                transform-origin: 604px 275px;
                animation: emergeWave3 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.01s both;
              }
            `}</style>

            <svg
              key={pulseKey}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              width="100%"
              height="100%"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur1" />
                  <feGaussianBlur stdDeviation="18" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="groundShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="18" />
                </filter>
                <filter id="contactShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>

                <linearGradient id="cyanWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00e5ff" />
                  <stop offset="30%" stopColor="#00b0ff" />
                  <stop offset="70%" stopColor="#0080ff" />
                  <stop offset="100%" stopColor="#0055ff" />
                </linearGradient>

                <linearGradient id="backShellGrad" x1="0%" y1="30%" x2="100%" y2="70%">
                  <stop offset="0%" stopColor="#ff6200" />
                  <stop offset="25%" stopColor="#e64600" />
                  <stop offset="60%" stopColor="#b83000" />
                  <stop offset="100%" stopColor="#851c00" />
                </linearGradient>

                <radialGradient id="innerBowlGrad" cx="40%" cy="42%" r="65%" fx="46%" fy="36%">
                  <stop offset="0%" stopColor="#ff8c1a" />
                  <stop offset="20%" stopColor="#ff6600" />
                  <stop offset="50%" stopColor="#eb4700" />
                  <stop offset="75%" stopColor="#c73100" />
                  <stop offset="100%" stopColor="#8a1a00" />
                </radialGradient>

                <radialGradient id="bowlRecessShadow" cx="30%" cy="30%" r="50%">
                  <stop offset="0%" stopColor="#4a0d00" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#701500" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#991f00" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="glossSweep" x1="15%" y1="85%" x2="85%" y2="15%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="45%" stopColor="#ffffff" stopOpacity="0.48" />
                  <stop offset="55%" stopColor="#ffffff" stopOpacity="0.55" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="rimFlangeGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="15%" stopColor="#ffd8a8" />
                  <stop offset="40%" stopColor="#ff882e" />
                  <stop offset="70%" stopColor="#cc4400" />
                  <stop offset="90%" stopColor="#ffb570" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>

                <linearGradient id="chromeStrut" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#d0dde6" />
                  <stop offset="50%" stopColor="#8e9da8" />
                  <stop offset="75%" stopColor="#c5d3de" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>

                <linearGradient id="goldTube" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff5b3" />
                  <stop offset="20%" stopColor="#f5c242" />
                  <stop offset="55%" stopColor="#d99214" />
                  <stop offset="80%" stopColor="#9e6405" />
                  <stop offset="100%" stopColor="#6e4300" />
                </linearGradient>

                <linearGradient id="hornDrumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffe680" />
                  <stop offset="25%" stopColor="#f5b82e" />
                  <stop offset="60%" stopColor="#d48800" />
                  <stop offset="85%" stopColor="#9e5b00" />
                  <stop offset="100%" stopColor="#663800" />
                </linearGradient>

                <radialGradient id="hornDomeGlow" cx="35%" cy="32%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#fff3b8" />
                  <stop offset="60%" stopColor="#f5b82e" />
                  <stop offset="85%" stopColor="#b87400" />
                  <stop offset="100%" stopColor="#6e4200" />
                </radialGradient>

                <linearGradient id="steelSunlit" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#e1ecf5" />
                  <stop offset="70%" stopColor="#b8cbdb" />
                  <stop offset="100%" stopColor="#95a8b8" />
                </linearGradient>

                <linearGradient id="steelShaded" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8397a8" />
                  <stop offset="50%" stopColor="#627382" />
                  <stop offset="100%" stopColor="#4d5b66" />
                </linearGradient>

                <linearGradient id="drumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6b7c8c" />
                  <stop offset="20%" stopColor="#b8c8d8" />
                  <stop offset="50%" stopColor="#f0f5fa" />
                  <stop offset="80%" stopColor="#95a7b8" />
                  <stop offset="100%" stopColor="#556370" />
                </linearGradient>

                <linearGradient id="plinthFront" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#303640" />
                  <stop offset="30%" stopColor="#22262d" />
                  <stop offset="100%" stopColor="#15181c" />
                </linearGradient>
                <linearGradient id="plinthTop" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4f5969" />
                  <stop offset="100%" stopColor="#2e343d" />
                </linearGradient>

                <radialGradient id="boltSilver" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#d2dce6" />
                  <stop offset="80%" stopColor="#708191" />
                  <stop offset="100%" stopColor="#424d57" />
                </radialGradient>

                <clipPath id="bowlClip">
                  <path d="M 319 146
                           C 285 180, 252 250, 256 325
                           C 260 410, 305 490, 385 545
                           C 455 595, 545 628, 642 628
                           C 685 628, 718 605, 717 565
                           C 715 480, 665 350, 585 255
                           C 515 170, 400 132, 319 146 Z" />
                </clipPath>
              </defs>

              <g id="ground_shadows">
                <ellipse cx="395" cy="935" rx="260" ry="35" fill="#1e252e" fillOpacity="0.22" filter="url(#groundShadow)" />
                <ellipse cx="395" cy="932" rx="200" ry="22" fill="#10151c" fillOpacity="0.35" filter="url(#contactShadow)" />
                <ellipse cx="395" cy="928" rx="170" ry="12" fill="#080b0f" fillOpacity="0.45" />
              </g>

              <g id="base_plinth">
                <polygon points="215,878 245,868 545,868 575,878" fill="url(#plinthTop)" />
                <rect x="215" y="878" width="360" height="48" rx="3" fill="url(#plinthFront)" />
                <line x1="215" y1="926" x2="575" y2="926" stroke="#15181c" strokeWidth="1.5" />
                <polygon points="215,878 223,878 223,926 215,926" fill="#22262d" />
                <polygon points="567,878 575,878 575,926 567,926" fill="#15181c" />

                <rect x="224" y="890" width="28" height="36" rx="2" fill="#2a303a" stroke="#15181c" strokeWidth="1" />
                <circle cx="238" cy="908" r="5.5" fill="url(#boltSilver)" stroke="#15181c" strokeWidth="0.8" />
                <rect x="405" y="896" width="24" height="30" rx="2" fill="#252b33" stroke="#15181c" strokeWidth="1" />
                <circle cx="417" cy="911" r="4.5" fill="url(#boltSilver)" stroke="#15181c" strokeWidth="0.8" />
                <rect x="435" y="896" width="24" height="30" rx="2" fill="#20252c" stroke="#15181c" strokeWidth="1" />
                <circle cx="447" cy="911" r="4.5" fill="url(#boltSilver)" stroke="#15181c" strokeWidth="0.8" />
                <rect x="538" y="890" width="28" height="36" rx="2" fill="#1c2026" stroke="#15181c" strokeWidth="1" />
                <circle cx="552" cy="908" r="5.5" fill="url(#boltSilver)" stroke="#15181c" strokeWidth="0.8" />
              </g>

              <g id="steel_tower">
                <line x1="345" y1="628" x2="535" y2="874" stroke="#5a6b7a" strokeWidth="4.5" />
                <line x1="445" y1="628" x2="255" y2="874" stroke="#5a6b7a" strokeWidth="4.5" />

                <line x1="285" y1="738" x2="525" y2="872" stroke="url(#steelShaded)" strokeWidth="9" strokeLinecap="square" />
                <line x1="285" y1="738" x2="525" y2="872" stroke="url(#steelSunlit)" strokeWidth="6" strokeLinecap="square" />
                <line x1="505" y1="738" x2="265" y2="872" stroke="url(#steelShaded)" strokeWidth="9" strokeLinecap="square" />
                <line x1="505" y1="738" x2="265" y2="872" stroke="url(#steelSunlit)" strokeWidth="6" strokeLinecap="square" />

                <polygon points="395,793 407,805 395,817 383,805" fill="url(#steelSunlit)" stroke="#50606e" strokeWidth="1" />
                <circle cx="395" cy="805" r="4" fill="url(#boltSilver)" stroke="#404d57" strokeWidth="0.6" />

                <polygon points="255,866 535,866 535,876 255,876" fill="url(#steelShaded)" />
                <polygon points="255,866 535,866 535,871 255,871" fill="url(#steelSunlit)" />
                <circle cx="270" cy="871" r="4" fill="url(#boltSilver)" />
                <circle cx="520" cy="871" r="4" fill="url(#boltSilver)" />

                <polygon points="290,728 500,728 500,742 290,742" fill="url(#steelShaded)" />
                <polygon points="290,728 500,728 500,734 290,734" fill="url(#steelSunlit)" />
                <rect x="285" y="726" width="18" height="18" rx="2" fill="url(#steelSunlit)" stroke="#50606e" strokeWidth="0.8" />
                <circle cx="294" cy="735" r="3.5" fill="url(#boltSilver)" />
                <rect x="387" y="726" width="16" height="18" rx="2" fill="url(#steelSunlit)" stroke="#50606e" strokeWidth="0.8" />
                <circle cx="395" cy="735" r="3.5" fill="url(#boltSilver)" />
                <rect x="487" y="726" width="18" height="18" rx="2" fill="url(#steelSunlit)" stroke="#50606e" strokeWidth="0.8" />
                <circle cx="496" cy="735" r="3.5" fill="url(#boltSilver)" />

                <line x1="330" y1="630" x2="488" y2="728" stroke="url(#steelShaded)" strokeWidth="8" strokeLinecap="square" />
                <line x1="330" y1="630" x2="488" y2="728" stroke="url(#steelSunlit)" strokeWidth="5.5" strokeLinecap="square" />
                <line x1="460" y1="630" x2="302" y2="728" stroke="url(#steelShaded)" strokeWidth="8" strokeLinecap="square" />
                <line x1="460" y1="630" x2="302" y2="728" stroke="url(#steelSunlit)" strokeWidth="5.5" strokeLinecap="square" />

                <polygon points="395,671 405,679 395,687 385,679" fill="url(#steelSunlit)" stroke="#50606e" strokeWidth="1" />
                <circle cx="395" cy="679" r="3.5" fill="url(#boltSilver)" stroke="#404d57" strokeWidth="0.6" />

                <polygon points="327,624 337,624 263,876 253,876" fill="url(#steelSunlit)" />
                <polygon points="337,624 345,624 271,876 263,876" fill="url(#steelShaded)" />
                <polygon points="348,624 354,624 380,870 374,870" fill="#627382" />

                <polygon points="445,624 455,624 527,876 517,876" fill="url(#steelSunlit)" />
                <polygon points="455,624 463,624 535,876 527,876" fill="url(#steelShaded)" />
                <polygon points="436,624 442,624 416,870 410,870" fill="#50606e" />

                <polygon points="248,864 275,864 279,878 244,878" fill="url(#steelSunlit)" stroke="#3a4854" strokeWidth="1" />
                <circle cx="254" cy="872" r="3.5" fill="url(#boltSilver)" />
                <circle cx="269" cy="872" r="3.5" fill="url(#boltSilver)" />

                <polygon points="515,864 542,864 546,878 511,878" fill="url(#steelShaded)" stroke="#2e3842" strokeWidth="1" />
                <circle cx="521" cy="872" r="3.5" fill="url(#boltSilver)" />
                <circle cx="536" cy="872" r="3.5" fill="url(#boltSilver)" />

                <polygon points="318,620 472,620 464,628 326,628" fill="url(#steelSunlit)" />
                <rect x="326" y="624" width="138" height="6" fill="url(#steelShaded)" />
                <circle cx="335" cy="624" r="3" fill="url(#boltSilver)" />
                <circle cx="455" cy="624" r="3" fill="url(#boltSilver)" />
              </g>

              <g id="turntable_mount">
                <rect x="348" y="592" width="94" height="30" rx="4" fill="url(#drumGrad)" stroke="#404d57" strokeWidth="1" />
                <ellipse cx="395" cy="593" rx="47" ry="7" fill="url(#steelSunlit)" stroke="#404d57" strokeWidth="1" />
                <circle cx="356" cy="594" r="3.2" fill="url(#boltSilver)" />
                <circle cx="372" cy="597" r="3.2" fill="url(#boltSilver)" />
                <circle cx="395" cy="598" r="3.5" fill="url(#boltSilver)" />
                <circle cx="418" cy="597" r="3.2" fill="url(#boltSilver)" />
                <circle cx="434" cy="594" r="3.2" fill="url(#boltSilver)" />

                <polygon points="380,592 410,592 368,545 338,545" fill="url(#steelShaded)" stroke="#35424d" strokeWidth="1" />
                <polygon points="378,590 405,590 365,543 338,543" fill="url(#steelSunlit)" />

                <rect x="336" y="538" width="32" height="44" rx="4" fill="url(#steelSunlit)" stroke="#35424d" strokeWidth="1.2" />
                <circle cx="352" cy="560" r="9.5" fill="url(#boltSilver)" stroke="#29343d" strokeWidth="1.5" />
                <circle cx="352" cy="560" r="5.5" fill="#9eb1c2" stroke="#29343d" strokeWidth="0.8" />
                <circle cx="350" cy="558" r="2" fill="#ffffff" />
              </g>

              <g id="dish_reflector">
                <path d="M 319 146 
                         C 270 156, 230 225, 229 318 
                         C 228 410, 260 495, 345 565 
                         L 385 545 
                         C 305 490, 260 410, 256 325 
                         C 252 250, 285 180, 319 146 Z"
                  fill="url(#backShellGrad)" stroke="#701600" strokeWidth="1.5" />

                <path d="M 242 225 C 252 195, 275 170, 305 152" fill="none" stroke="#ff5500" strokeWidth="6" strokeLinecap="round" />
                <path d="M 242 225 C 252 195, 275 170, 305 152" fill="none" stroke="#ffa04d" strokeWidth="2" strokeLinecap="round" />
                <circle cx="246" cy="220" r="3" fill="url(#boltSilver)" />
                <circle cx="285" cy="168" r="3" fill="url(#boltSilver)" />

                <path d="M 238 335 C 265 430, 305 505, 362 562" fill="none" stroke="#a82600" strokeWidth="8" strokeLinecap="round" />
                <path d="M 238 335 C 265 430, 305 505, 362 562" fill="none" stroke="#ff6600" strokeWidth="5" strokeLinecap="round" />
                <path d="M 238 335 C 265 430, 305 505, 362 562" fill="none" stroke="#ffb380" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="240" cy="345" r="3.5" fill="url(#boltSilver)" stroke="#5e1400" strokeWidth="0.6" />
                <circle cx="260" cy="415" r="3.5" fill="url(#boltSilver)" stroke="#5e1400" strokeWidth="0.6" />
                <circle cx="298" cy="490" r="3.5" fill="url(#boltSilver)" stroke="#5e1400" strokeWidth="0.6" />
                <circle cx="350" cy="550" r="3.5" fill="url(#boltSilver)" stroke="#5e1400" strokeWidth="0.6" />

                <path id="frontAperture" d="M 319 146
                         C 285 180, 252 250, 256 325
                         C 260 410, 305 490, 385 545
                         C 455 595, 545 628, 642 628
                         C 685 628, 718 605, 717 565
                         C 715 480, 665 350, 585 255
                         C 515 170, 400 132, 319 146 Z"
                  fill="url(#innerBowlGrad)" />

                <g clipPath="url(#bowlClip)">
                  <path d="M 319 146
                           C 285 180, 252 250, 256 325
                           C 260 410, 305 490, 385 545
                           C 450 490, 480 380, 480 300
                           C 480 200, 400 150, 319 146 Z"
                    fill="url(#bowlRecessShadow)" />

                  <g id="radial_seams" opacity="0.45">
                    <path d="M 426 436 C 385 350, 345 260, 319 146" fill="none" stroke="#781800" strokeWidth="1.8" />
                    <path d="M 427 436 C 386 350, 346 260, 320 146" fill="none" stroke="#ff994d" strokeWidth="0.8" />

                    <path d="M 426 436 C 365 390, 305 355, 256 325" fill="none" stroke="#781800" strokeWidth="1.8" />
                    <path d="M 426 437 C 365 391, 305 356, 256 326" fill="none" stroke="#ff994d" strokeWidth="0.8" />

                    <path d="M 426 436 C 405 485, 395 515, 385 545" fill="none" stroke="#781800" strokeWidth="1.8" />
                    <path d="M 427 436 C 406 485, 396 515, 386 545" fill="none" stroke="#ff994d" strokeWidth="0.8" />

                    <path d="M 426 436 C 475 510, 540 575, 642 628" fill="none" stroke="#781800" strokeWidth="1.8" />
                    <path d="M 426 435 C 475 509, 540 574, 642 627" fill="none" stroke="#ff994d" strokeWidth="0.8" />

                    <path d="M 426 436 C 520 480, 625 525, 717 565" fill="none" stroke="#781800" strokeWidth="1.8" />
                    <path d="M 426 435 C 520 479, 625 524, 717 564" fill="none" stroke="#ff994d" strokeWidth="0.8" />

                    <path d="M 426 436 C 525 390, 615 340, 665 355" fill="none" stroke="#781800" strokeWidth="1.8" />
                    <path d="M 426 435 C 525 389, 615 339, 665 354" fill="none" stroke="#ff994d" strokeWidth="0.8" />

                    <path d="M 426 436 C 485 330, 545 240, 585 255" fill="none" stroke="#781800" strokeWidth="1.8" />
                    <path d="M 426 435 C 485 329, 545 239, 585 254" fill="none" stroke="#ff994d" strokeWidth="0.8" />
                  </g>

                  <path d="M 268 375 
                           C 320 450, 420 540, 530 575
                           C 475 520, 390 440, 335 340
                           C 295 320, 275 340, 268 375 Z"
                    fill="url(#glossSweep)" />
                </g>

                <path d="M 319 146
                         C 285 180, 252 250, 256 325
                         C 260 410, 305 490, 385 545
                         C 455 595, 545 628, 642 628
                         C 685 628, 718 605, 717 565
                         C 715 480, 665 350, 585 255
                         C 515 170, 400 132, 319 146 Z"
                  fill="none" stroke="url(#rimFlangeGrad)" strokeWidth="4.5" />
                <path d="M 335 145 C 420 135, 520 170, 585 255" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <path d="M 385 545 C 455 595, 545 628, 642 628" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
              </g>

              <g id="feed_assembly">
                <ellipse cx="329" cy="324" rx="8" ry="5.5" transform="rotate(35 329 324)" fill="url(#steelSunlit)" stroke="#404d57" strokeWidth="0.8" />
                <circle cx="326" cy="321" r="1.8" fill="url(#boltSilver)" />
                <circle cx="332" cy="327" r="1.8" fill="url(#boltSilver)" />
                <line x1="329" y1="324" x2="576" y2="292" stroke="#2e3b47" strokeWidth="7.5" strokeLinecap="round" />
                <line x1="329" y1="324" x2="576" y2="292" stroke="url(#chromeStrut)" strokeWidth="5" strokeLinecap="round" />
                <line x1="329" y1="323" x2="576" y2="291" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />

                <ellipse cx="559" cy="564" rx="8" ry="5.5" transform="rotate(-45 559 564)" fill="url(#steelSunlit)" stroke="#404d57" strokeWidth="0.8" />
                <circle cx="556" cy="560" r="1.8" fill="url(#boltSilver)" />
                <circle cx="562" cy="568" r="1.8" fill="url(#boltSilver)" />
                <line x1="559" y1="564" x2="576" y2="292" stroke="#2e3b47" strokeWidth="7.5" strokeLinecap="round" />
                <line x1="559" y1="564" x2="576" y2="292" stroke="url(#chromeStrut)" strokeWidth="5" strokeLinecap="round" />
                <line x1="558" y1="564" x2="575" y2="292" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />

                <ellipse cx="426" cy="436" rx="14" ry="10" transform="rotate(-30 426 436)" fill="url(#steelShaded)" stroke="#2e3b47" strokeWidth="1" />
                <ellipse cx="426" cy="436" rx="11" ry="7.5" transform="rotate(-30 426 436)" fill="url(#steelSunlit)" />
                <circle cx="419" cy="432" r="2" fill="url(#boltSilver)" />
                <circle cx="433" cy="440" r="2" fill="url(#boltSilver)" />
                <circle cx="421" cy="442" r="2" fill="url(#boltSilver)" />
                <circle cx="431" cy="430" r="2" fill="url(#boltSilver)" />

                <line x1="426" y1="436" x2="501" y2="364" stroke="#2e3b47" strokeWidth="10.5" strokeLinecap="square" />
                <line x1="426" y1="436" x2="501" y2="364" stroke="url(#chromeStrut)" strokeWidth="8" strokeLinecap="square" />
                <line x1="425" y1="435" x2="500" y2="363" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="square" />

                <ellipse cx="501" cy="364" rx="7.5" ry="5.5" transform="rotate(45 501 364)" fill="url(#goldTube)" stroke="#6e4300" strokeWidth="0.8" />

                <line x1="501" y1="364" x2="565" y2="302" stroke="#5c3700" strokeWidth="10.5" strokeLinecap="square" />
                <line x1="501" y1="364" x2="565" y2="302" stroke="url(#goldTube)" strokeWidth="8" strokeLinecap="square" />
                <line x1="500" y1="363" x2="564" y2="301" stroke="#fff8d1" strokeWidth="2" strokeLinecap="square" />

                <circle cx="576" cy="292" r="9.5" fill="url(#steelSunlit)" stroke="#35424d" strokeWidth="1" />
                <circle cx="575" cy="291" r="4.5" fill="#ffffff" />

                <polygon points="565,273 587,311 615,294 593,256" fill="url(#hornDrumGrad)" stroke="#6e4300" strokeWidth="1" />
                <line x1="579" y1="264" x2="604" y2="275" stroke="#fff8d1" strokeWidth="3" />

                <ellipse cx="604" cy="275" rx="22" ry="14" transform="rotate(-31 604 275)" fill="url(#hornDomeGlow)" stroke="#6e4300" strokeWidth="1.2" />

                <circle cx="612" cy="268" r="8" fill="#ffffff" fillOpacity="0.9" className="beacon-reload" />
                <circle cx="610" cy="266" r="4" fill="#ffffff" />
              </g>

              <g id="wifi_waves">
                {/* Inner Wave (Closest to Feed Horn - Emerges First) */}
                <g className="wave-reload-1">
                  <path d="M 576 191 C 650 191, 700 235, 708 301"
                    fill="none" stroke="url(#cyanWaveGrad)" strokeWidth="32" strokeLinecap="round" />
                  <path d="M 576 191 C 650 191, 700 235, 708 301"
                    fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.75" />
                </g>

                {/* Middle Wave (Emerges Second) */}
                <g className="wave-reload-2">
                  <path d="M 583 126 C 685 126, 765 190, 777 299"
                    fill="none" stroke="url(#cyanWaveGrad)" strokeWidth="36" strokeLinecap="round" />
                  <path d="M 583 126 C 685 126, 765 190, 777 299"
                    fill="none" stroke="#ffffff" strokeWidth="7.5" strokeLinecap="round" strokeOpacity="0.75" />
                </g>

                {/* Outer Wave (Emerges Third) */}
                <g className="wave-reload-3">
                  <path d="M 590 59 C 720 59, 830 140, 842 285"
                    fill="none" stroke="url(#cyanWaveGrad)" strokeWidth="38" strokeLinecap="round" />
                  <path d="M 590 59 C 720 59, 830 140, 842 285"
                    fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.75" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Right Column: Real-Time Investigative News Card */}
        {showInfoCard && (
          <div className="w-full max-w-[520px] lg:max-w-[560px] xl:max-w-[580px] flex items-center justify-center shrink-0">
            <InvestigativeNewsCard
              activeStoryIndex={activeStoryIndex}
              onStoryChange={onStoryChange}
              onPulseAntenna={handlePulse}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// 3. MAIN SECTION 12 COMPONENT
export const Section12 = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL NEWS');
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeDossierId, setActiveDossierId] = useState(1);
  const [antennaPulseKey, setAntennaPulseKey] = useState(0);

  // Whistleblower Tip Modal State
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);
  const [tipCategory, setTipCategory] = useState('Financial Forensics');
  const [tipDetails, setTipDetails] = useState('');
  const [isSubmittingTip, setIsSubmittingTip] = useState(false);
  const [tipReceiptToken, setTipReceiptToken] = useState(null);

  const currentDossier =
    dossiers.find((d) => d.id === activeDossierId) || dossiers[0];

  const handlePulseAntenna = () => {
    setAntennaPulseKey((prev) => prev + 1);
  };

  const handleStoryChange = (newIndex) => {
    setActiveStoryIndex(newIndex);
    handlePulseAntenna();
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === 'ALL NEWS') {
      setActiveStoryIndex(0);
    } else {
      const matchIdx = investigativeNews.findIndex((n) => n.category === category);
      if (matchIdx !== -1) {
        setActiveStoryIndex(matchIdx);
      }
    }
    handlePulseAntenna();
  };

  const handleTipSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingTip(true);
    setTimeout(() => {
      setIsSubmittingTip(false);
      const randomHex = Math.random().toString(36).substring(2, 10).toUpperCase();
      setTipReceiptToken(`CR-TIP-2026-${randomHex}-SEC`);
    }, 1200);
  };

  const resetTipForm = () => {
    setTipDetails('');
    setTipReceiptToken(null);
    setIsTipModalOpen(false);
  };

  return (
    <section
      id="section-12"
      className="w-full relative py-12 lg:py-20 select-none overflow-hidden bg-[#fbf9f6] border-b border-stone-200"
    >
      {/* Editorial Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-1/6 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] bg-stone-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. EDITORIAL HEADER & CATEGORY FILTER BAR                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-stone-200">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span>CR SPECIAL INVESTIGATIVE BUREAU • BROADCAST NEWS WIRE</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900 text-stone-200 text-[10px] font-mono font-bold">
                <FaTowerBroadcast className="text-red-400 text-xs" />
                <span>LIVE WIRE DESK</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight font-['Montserrat',sans-serif] flex flex-wrap items-center gap-3">
              <span>Special Investigative Reports & Ground Truth Dossiers</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-50 border border-amber-300 text-amber-800">
                <FaFileShield className="text-xs text-amber-600" /> VERIFIED NEWS
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
              Holding power accountable through forensic financial tracing, on-the-ground investigative reporting, and verified whistleblower disclosures across India.
            </p>
          </div>

          {/* News Category Filters */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-stone-200 shadow-sm shrink-0 self-start md:self-auto max-w-full overflow-x-auto">
            {newsCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN NEWS SHOWCASE: 3D SATELLITE DISH (LEFT) + REAL NEWS CARD (RIGHT)  */}
        {/* ========================================================================= */}
        <div className="mb-10">
          <div className="bg-white/95 rounded-3xl border border-stone-200 shadow-lg p-4 sm:p-6 lg:p-8 backdrop-blur-sm relative overflow-hidden">
            <Antina
              pulseKey={antennaPulseKey}
              onPulse={handlePulseAntenna}
              activeStoryIndex={activeStoryIndex}
              onStoryChange={handleStoryChange}
              showInfoCard={true}
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CLASSIFIED INVESTIGATION DOSSIERS & EVIDENCE TRAJECTORY DECK           */}
        {/* ========================================================================= */}
        <div>
          {/* Dossier Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FaFolderOpen className="text-red-600 text-base" />
              <h3 className="text-lg sm:text-xl font-black text-stone-900 tracking-tight font-['Montserrat',sans-serif]">
                Classified Case Files & Whistleblower Chain
              </h3>
            </div>

            {/* Dossier Switcher Tabs */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-stone-200 shadow-sm">
              {dossiers.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDossierId(d.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
                    activeDossierId === d.id
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  <FaFolderOpen className="text-xs" />
                  <span>CASE #{d.caseNumber.split('-').pop()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Investigative Dossier Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Case File Presentation (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 relative overflow-hidden">
              {/* Top Classified Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200 font-bold uppercase tracking-wider text-[11px]">
                    {currentDossier.classification}
                  </span>
                  <span className="text-stone-600 font-semibold">{currentDossier.caseNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500">
                  <FaFingerprint className="text-red-600 text-base" />
                  <span className="hidden sm:inline font-bold">AUTHENTICATED EVIDENCE LEDGER</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                {/* Exhibit Image with Realistic Photo Presentation */}
                <div className="md:col-span-5 h-60 md:h-full min-h-[220px] rounded-2xl overflow-hidden relative shadow-inner group">
                  <img
                    src={currentDossier.image}
                    alt={currentDossier.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono text-stone-100 bg-black/75 px-2.5 py-1.5 rounded-lg backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <span>Exhibit A: Photographic & Ground Evidence</span>
                    <span className="text-amber-400 font-bold">VERIFIED</span>
                  </div>
                </div>

                {/* Investigation Description Body */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-black text-red-600 tracking-wider uppercase mb-1.5 block">
                      {currentDossier.badge}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-stone-900 leading-snug font-['Montserrat',sans-serif] mb-3">
                      {currentDossier.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {currentDossier.summary}
                    </p>
                  </div>

                  {/* Evidence & Whistleblower Metrics */}
                  <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-stone-100">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[10px] font-mono text-stone-400 uppercase block font-semibold">
                        Verified Documents
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-stone-900">
                        {currentDossier.evidenceCount}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[10px] font-mono text-stone-400 uppercase block font-semibold">
                        Protected Sources
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-red-600">
                        {currentDossier.whistleblowers}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Judicial Impact Box */}
              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200/80 text-xs sm:text-sm text-stone-800">
                <strong className="text-red-700 font-bold uppercase tracking-wide mr-2">
                  Investigation Outcome & Legal Action:
                </strong>
                {currentDossier.impact}
              </div>
            </div>

            {/* Timeline & Whistleblower Evidence Chain (4 Cols) */}
            <div className="lg:col-span-4 bg-white border border-stone-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <FaClockRotateLeft className="text-red-600 text-sm" />
                    <h4 className="text-xs font-mono font-bold text-stone-800 tracking-wider uppercase">
                      Investigation Timeline Log
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">CHRONO-LOG</span>
                </div>

                {/* Timeline Trajectory Items */}
                <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-red-200">
                  {currentDossier.timeline.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-red-600 border-2 border-white shadow-xs group-hover:scale-125 transition-transform" />
                      <span className="text-[10px] font-mono font-bold text-red-600 block mb-0.5">
                        {item.date}
                      </span>
                      <p className="text-xs text-stone-600 leading-normal">
                        {item.step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tip Submission Action */}
              <div className="mt-8 pt-4 border-t border-stone-100 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <FaMagnifyingGlassChart className="text-red-600" />
                    <span>Unit #4 Special Forensics</span>
                  </span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <FaShieldHalved className="text-xs" /> ENCRYPTED
                  </span>
                </div>

                <button
                  onClick={() => setIsTipModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-red-600 text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Submit Whistleblower Tip</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE SECURE WHISTLEBLOWER TIP SUBMISSION MODAL                  */}
      {/* ========================================================================= */}
      {isTipModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
          <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-lg w-full overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400">
                  <FaKey className="text-xs" />
                </div>
                <div>
                  <h4 className="text-sm font-black font-['Montserrat',sans-serif]">
                    Secure Whistleblower Portal
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Encrypted Whistleblower Channel
                  </span>
                </div>
              </div>

              <button
                onClick={resetTipForm}
                className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center cursor-pointer transition-colors"
              >
                <FaXmark className="text-sm" />
              </button>
            </div>

            {/* Modal Body */}
            {tipReceiptToken ? (
              <div className="p-6 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl">
                  <FaCircleCheck />
                </div>
                <h4 className="text-lg font-black text-stone-900 font-['Montserrat',sans-serif]">
                  Tip Successfully Dispatched to Bureau
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                  Your intelligence has been routed to the CR Special Investigation Bureau editorial desk. Keep this confirmation token for secure follow-ups:
                </p>
                <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 font-mono text-xs font-bold text-stone-800 select-all">
                  {tipReceiptToken}
                </div>
                <button
                  onClick={resetTipForm}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono font-bold tracking-wider cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <form onSubmit={handleTipSubmit} className="p-6 space-y-4">
                <div>
                  <label className="text-[11px] font-mono font-bold text-stone-700 block mb-1.5 uppercase">
                    Investigation Category
                  </label>
                  <select
                    value={tipCategory}
                    onChange={(e) => setTipCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="Financial Forensics">Financial Fraud & Corporate Misconduct</option>
                    <option value="Illegal Mining">Illegal Natural Resource & Sand Cartels</option>
                    <option value="Pharma Integrity">Pharma & Healthcare Violations</option>
                    <option value="Government Procurement">Government Procurement & Tender Collusion</option>
                    <option value="Cyber Syndicate">Cybercrime & Digital Fraud</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono font-bold text-stone-700 block mb-1.5 uppercase">
                    News Lead & Evidence Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={tipDetails}
                    onChange={(e) => setTipDetails(e.target.value)}
                    placeholder="Provide specific company names, shell entities, dates, locations, or document descriptions..."
                    className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-red-500 leading-relaxed"
                  />
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800 leading-normal flex items-start gap-2">
                  <FaLock className="text-amber-600 mt-0.5 shrink-0" />
                  <span>
                    Source confidentiality is legally protected under journalistic source shield standards.
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={resetTipForm}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-stone-600 hover:bg-stone-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingTip}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-sm cursor-pointer disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmittingTip ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>SUBMITTING...</span>
                      </>
                    ) : (
                      <>
                        <FaUpload className="text-xs" />
                        <span>SUBMIT TIP</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export { Section12 as InvestigationBureauSection };

export default Section12;
