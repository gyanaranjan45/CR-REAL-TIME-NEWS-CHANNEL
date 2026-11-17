import React, { useState, useEffect, useRef } from 'react';
import { newsStories, categories } from './Section14Data';
import {
  FaPlay,
  FaPause,
  FaVolumeHigh,
  FaVolumeXmark,
  FaExpand,
  FaBolt,
  FaRegClock,
  FaEye,
  FaArrowRight,
  FaTowerBroadcast,
  FaCircle,
  FaTv,
  FaRotate,
} from 'react-icons/fa6';

export const Section14 = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedStoryId, setSelectedStoryId] = useState(1);
  const [currentTime, setCurrentTime] = useState('');
  
  // TV Power & Channel Switching Animation States
  const [tvPowerState, setTvPowerState] = useState('on'); // 'on' | 'turning-off' | 'off' | 'turning-on'
  const [isSwitching, setIsSwitching] = useState(false);
  const [autoTimerKey, setAutoTimerKey] = useState(0);

  const switchingRef = useRef(false);
  switchingRef.current = isSwitching;

  // Live real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredStories =
    activeCategory === 'ALL'
      ? newsStories
      : newsStories.filter((s) => s.category === activeCategory);

  const activeStory = newsStories.find((s) => s.id === selectedStoryId) || newsStories[0];

  // --------------------------------------------------------------------------
  // TV OFF & ON ANIMATION + CONTENT SWITCH HANDLER
  // --------------------------------------------------------------------------
  const triggerStorySwitch = (targetId) => {
    if (targetId === selectedStoryId || switchingRef.current) return;

    setIsSwitching(true);
    setTvPowerState('turning-off');

    // 1. TV Screen collapses to a center beam and powers off (260ms)
    setTimeout(() => {
      setTvPowerState('off');
      setSelectedStoryId(targetId);
      setAutoTimerKey((k) => k + 1);

      // 2. Stay completely dark for a realistic instant (140ms), then turn back ON
      setTimeout(() => {
        setTvPowerState('turning-on');

        // 3. Screen expands open & blooms back to 100% (360ms)
        setTimeout(() => {
          setTvPowerState('on');
          setIsSwitching(false);
        }, 360);
      }, 140);
    }, 260);
  };

  // --------------------------------------------------------------------------
  // AUTO-CHANGE INTERVAL (Cycles to next story automatically every 6 seconds)
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (switchingRef.current) return;

      const cycleList = filteredStories.length > 0 ? filteredStories : newsStories;
      const currentIndex = cycleList.findIndex((s) => s.id === selectedStoryId);
      const nextIndex = (currentIndex + 1) % cycleList.length;
      triggerStorySwitch(cycleList[nextIndex].id);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, selectedStoryId, activeCategory, filteredStories.length]);

  return (
    <section
      id="live-stream"
      className="w-full bg-[#f6f7f9] text-slate-800 py-6 sm:py-12 lg:py-18 border-b border-slate-200 relative overflow-hidden select-none"
    >
      {/* Background warm living-room studio ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-slate-100/70 to-slate-200/50 pointer-events-none" />

      {/* Subtle fine vertical paneling */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #000, #000 1px, transparent 1px, transparent 48px)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            RESPONSIVE SECTION HEADER
            Mobile-optimized: tight badges, clean typography, adaptive wrap
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-8 lg:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-red-100/90 border border-red-200 mb-1.5 sm:mb-2 shadow-xs">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-600 animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-black tracking-wider text-red-700 uppercase font-['Montserrat',sans-serif]">
                LIVE STUDIO BROADCAST
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 font-['Montserrat',sans-serif] leading-tight">
              Studio Live & Breaking Headlines
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium leading-relaxed hidden sm:block">
              TV broadcast auto-rotates every 6 seconds with realistic channel off-and-on switching. Tap any card below to tune in instantly.
            </p>
          </div>

          {/* Right Status Badges Strip */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            {/* Auto-Broadcast Pill */}
            <div className="inline-flex items-center gap-1.5 bg-slate-900 text-amber-300 border border-slate-700 px-2.5 py-1 rounded-full font-mono text-[11px] font-bold shadow-xs">
              <FaRotate className={`w-2.5 h-2.5 text-amber-400 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              <span>{isPlaying ? 'AUTO: 6s' : 'PAUSED'}</span>
            </div>

            {/* Viewers Pill */}
            <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full border border-slate-300 shadow-xs text-[11px] font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>184K Live</span>
            </div>

            {/* Clock Pill */}
            <div className="hidden xs:inline-flex items-center gap-1.5 bg-slate-900 text-amber-400 px-2.5 py-1 rounded-full font-mono font-bold text-[11px] shadow-xs">
              <FaRegClock className="w-3 h-3 text-amber-400" />
              <span>{currentTime || '12:30 PM'}</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            THE STUDIO STAGE (TV PLACED ON TOP OF CONSOLE TABLE)
           ======================================================== */}
        <div className="relative w-full max-w-[1320px] mx-auto">

          {/* Warm wall back-glow */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] h-[280px] sm:h-[360px] bg-gradient-to-b from-amber-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />

          {/* ----------------------------------------------------
              STAGE: DECOR + TV SITTING ON THE TABLETOP
             ---------------------------------------------------- */}
          <div className="relative w-full flex items-end justify-center px-1 sm:px-4 md:px-8">

            {/* LEFT DECOR: Lamp & Plant (hidden on mobile, visible on desktop) */}
            <div className="hidden lg:flex items-end gap-3 pb-0 flex-shrink-0 z-10 mr-4">
              {/* Studio Shaded Table Lamp */}
              <div className="flex flex-col items-center relative group cursor-default">
                <div className="absolute -top-12 w-28 h-32 bg-gradient-to-b from-amber-300/40 via-amber-200/15 to-transparent blur-lg rounded-full pointer-events-none" />
                <div
                  className="w-16 h-16 bg-gradient-to-b from-[#fffef5] via-[#f7e6c4] to-[#edd099] rounded-t-sm shadow-xl border-b-2 border-amber-600/40 relative z-10"
                  style={{ clipPath: 'polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)' }}
                />
                <div className="w-1.5 h-16 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-700 shadow-xs" />
                <div className="w-10 h-2 bg-gradient-to-r from-amber-800 via-amber-500 to-amber-900 rounded-t-sm shadow-md" />
              </div>

              {/* Lush Tropical Plant */}
              <div className="flex flex-col items-center pb-0">
                <div className="relative w-16 xl:w-20 h-24 xl:h-28 flex items-end justify-center">
                  <svg viewBox="0 0 100 120" className="w-full h-full filter drop-shadow-md">
                    <path d="M 50 100 Q 15 60 5 25 Q 28 35 50 85" fill="#2e7d32" opacity="0.95" />
                    <path d="M 50 95 Q 32 40 25 10 Q 48 25 52 80" fill="#388e3c" />
                    <path d="M 50 95 Q 50 30 50 2 Q 68 25 52 80" fill="#43a047" />
                    <path d="M 50 95 Q 68 40 75 10 Q 52 25 48 80" fill="#2e7d32" />
                    <path d="M 50 100 Q 85 60 95 25 Q 72 35 50 85" fill="#1b5e20" opacity="0.95" />
                    <path d="M 50 100 L 50 15" stroke="#a5d6a7" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <path d="M 50 100 Q 32 55 15 30" stroke="#a5d6a7" strokeWidth="1" fill="none" opacity="0.6" />
                    <path d="M 50 100 Q 68 55 85 30" stroke="#a5d6a7" strokeWidth="1" fill="none" opacity="0.6" />
                  </svg>
                </div>
                <div className="w-12 xl:w-14 h-10 xl:h-11 bg-gradient-to-b from-stone-50 via-stone-200 to-stone-300 rounded-b-md shadow-md border-t border-stone-300 relative z-10" />
              </div>
            </div>

            {/* CENTER: THE TV PLACED DIRECTLY ON TOP OF TABLE */}
            <div className="relative w-full max-w-[860px] flex flex-col items-center z-20">

              {/* TV Obsidian Bezel Container */}
              <div className="w-full relative rounded-t-lg sm:rounded-t-2xl overflow-hidden bg-slate-950 border-[3px] sm:border-[5px] md:border-[6px] border-slate-900 shadow-[0_15px_35px_rgba(0,0,0,0.6)] ring-1 ring-slate-800">
                
                {/* TV Screen Container (16:9 Aspect Ratio) */}
                <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
                  
                  {/* ======================================================
                      TV SCREEN CONTENT (IMAGE + CHYRONS)
                      Animates TV Power Off -> Black Screen -> TV Power On
                     ====================================================== */}
                  <div
                    className={`w-full h-full relative transition-all duration-200 ${
                      tvPowerState === 'turning-off'
                        ? 'animate-tv-power-off'
                        : tvPowerState === 'off'
                        ? 'opacity-0 scale-0 pointer-events-none'
                        : tvPowerState === 'turning-on'
                        ? 'animate-tv-power-on'
                        : 'opacity-100 scale-100'
                    }`}
                  >
                    {/* Inside TV: Active Story Broadcast Image */}
                    <img
                      src={activeStory.image}
                      alt={activeStory.englishTitle}
                      className={`w-full h-full object-cover ${
                        isPlaying ? 'scale-100 filter brightness-100' : 'scale-105 filter brightness-85'
                      }`}
                    />

                    {/* Glass Glare / Screen Sheen Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none z-10" />

                    {/* Top Bar Overlays on TV: Responsive spacing */}
                    <div className="absolute top-1.5 sm:top-3 left-1.5 sm:left-4 right-1.5 sm:right-4 flex items-center justify-between z-20">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[8px] sm:text-[10px] md:text-[11px] font-black px-1.5 sm:px-2.5 py-0.5 rounded-xs sm:rounded-sm shadow-md uppercase tracking-wider">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white animate-pulse" />
                          {activeStory.badge}
                        </span>
                        <span className="bg-black/60 backdrop-blur-md text-white text-[8px] sm:text-[10px] md:text-[11px] font-bold px-1.5 sm:px-2 py-0.5 rounded-xs sm:rounded-sm border border-white/20">
                          CR NEWS
                        </span>
                        <span className="hidden md:inline-block bg-black/50 backdrop-blur-md text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded border border-amber-400/30">
                          {activeStory.studio}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <span className="hidden sm:inline-block bg-slate-900/80 backdrop-blur-md text-amber-300 text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded border border-amber-400/30">
                          4K UHD
                        </span>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/20 backdrop-blur-sm cursor-pointer"
                          title={isMuted ? 'Unmute TV' : 'Mute TV'}
                          aria-label={isMuted ? 'Unmute TV' : 'Mute TV'}
                        >
                          {isMuted ? (
                            <FaVolumeXmark className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400" />
                          ) : (
                            <FaVolumeHigh className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Central Play/Pause Toggle Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="pointer-events-auto w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/50 hover:bg-red-600/90 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-80 cursor-pointer"
                        aria-label={isPlaying ? 'Pause broadcast' : 'Play broadcast'}
                        title={isPlaying ? 'Pause Auto-Broadcast' : 'Resume Auto-Broadcast'}
                      >
                        {isPlaying ? (
                          <FaPause className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <FaPlay className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white ml-0.5" />
                        )}
                      </button>
                    </div>

                    {/* TV Bottom Active Broadcast Chyron: Clean & non-intrusive on all devices */}
                    {activeStory.hasBuiltinChyron ? (
                      /* For Story 1 (Odia chyron already inside photo), keep bottom overlay minimal without overlapping text */
                      <div className="absolute bottom-1 right-1.5 sm:bottom-2 sm:right-2 z-20">
                        <button
                          onClick={() => {
                            const elem = document.getElementById('live-stream');
                            if (elem && elem.requestFullscreen) elem.requestFullscreen();
                          }}
                          className="bg-black/60 hover:bg-black/85 text-white/90 hover:text-white p-1 sm:p-1.5 rounded-xs sm:rounded-sm border border-white/20 transition-colors cursor-pointer backdrop-blur-xs"
                          title="Fullscreen view"
                          aria-label="Fullscreen view"
                        >
                          <FaExpand className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                        </button>
                      </div>
                    ) : (
                      /* For Stories 2, 3, 4: Responsive Authentic Lower Third */
                      <div className="absolute bottom-0 inset-x-0 z-20">
                        {/* Lower Third Main Headline Bar */}
                        <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 flex items-center justify-between text-white shadow-lg">
                          <div className="flex items-center gap-1.5 sm:gap-2 max-w-[88%]">
                            <span className="bg-black/40 text-[8px] sm:text-[9px] md:text-[10px] font-black px-1.5 py-0.5 rounded-xs tracking-wider uppercase flex-shrink-0">
                              {activeStory.badge}
                            </span>
                            <span className="text-[10px] sm:text-xs md:text-sm font-black line-clamp-1">
                              {activeStory.englishTitle}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-amber-200 hidden sm:block">
                            LIVE
                          </span>
                        </div>

                        {/* Lower Third Sub-Ticker Bar */}
                        <div className="bg-slate-950/95 backdrop-blur-md px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 flex items-center justify-between text-slate-200 border-t border-red-500/40 text-[8px] sm:text-[10px] md:text-[11px]">
                          <div className="flex items-center gap-1.5 line-clamp-1 max-w-[85%]">
                            <span className="text-amber-400 font-bold hidden xs:inline">
                              {activeStory.anchor}:
                            </span>
                            <span className="text-slate-300">
                              {activeStory.tickerOdia}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className="text-red-400 font-mono font-bold text-[8px] sm:text-[10px] hidden sm:inline">
                              {currentTime || '12:30 PM'}
                            </span>
                            <button
                              onClick={() => {
                                const elem = document.getElementById('live-stream');
                                if (elem && elem.requestFullscreen) elem.requestFullscreen();
                              }}
                              className="text-white/80 hover:text-white p-0.5 transition-colors cursor-pointer"
                              title="Fullscreen view"
                            >
                              <FaExpand className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ======================================================
                      TV OFF / ON ANIMATION OVERLAYS:
                      1. Bright Horizontal Beam Flash
                      2. CRT Scanlines Glitch
                      3. Center Phosphor Dot in Blackout
                     ====================================================== */}
                  {(tvPowerState === 'turning-off' || tvPowerState === 'turning-on') && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
                      <div className="w-full h-[2px] sm:h-[3px] bg-white shadow-[0_0_20px_#38bdf8,0_0_40px_#ffffff] animate-tv-beam" />
                    </div>
                  )}

                  {tvPowerState !== 'on' && (
                    <div
                      className="absolute inset-0 pointer-events-none z-30 opacity-30 animate-tv-scanlines"
                      style={{
                        backgroundImage:
                          'repeating-linear-gradient(0deg, rgba(255,255,255,0.12), rgba(255,255,255,0.12) 1px, transparent 1px, transparent 3px)',
                        backgroundSize: '100% 4px',
                      }}
                    />
                  )}

                  {tvPowerState === 'off' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-35">
                      <div className="w-2 h-2 rounded-full bg-cyan-200/90 shadow-[0_0_14px_#38bdf8] animate-ping" />
                    </div>
                  )}

                </div>

                {/* TV Bottom Bezel Chin with Power Indicator LED */}
                <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-2.5 sm:px-4 py-1 sm:py-1.5 flex items-center justify-between border-t border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        tvPowerState === 'on'
                          ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                          : tvPowerState === 'turning-off' || tvPowerState === 'off'
                          ? 'bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse'
                          : 'bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-ping'
                      }`}
                    />
                    <span className="text-[7.5px] sm:text-[9px] font-bold text-slate-400 tracking-widest uppercase truncate max-w-[140px] sm:max-w-none">
                      CR REALTIME • OLED
                    </span>
                  </div>

                  <div className="text-[7.5px] sm:text-[8px] font-mono">
                    {tvPowerState === 'on' ? (
                      <span className="text-slate-400">
                        <span className="text-amber-400">CH {activeStory.id}:</span> {activeStory.categoryShort}
                      </span>
                    ) : (
                      <span className="text-red-400 font-bold animate-pulse">
                        ⚡ TV SWITCHING...
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* TV DUAL METALLIC STAND LEGS (Resting firmly on the wooden table) */}
              <div className="w-full flex justify-between px-6 sm:px-16 md:px-20 z-30">
                {/* Left Leg */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="w-2.5 sm:w-4 h-5 sm:h-8 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 shadow-md"
                    style={{
                      transform: 'perspective(100px) rotateY(-8deg) skewX(-14deg)',
                      borderTop: '1px solid #64748b',
                    }}
                  />
                  <div className="w-5 sm:w-8 h-1.5 bg-slate-950 rounded-full shadow-[0_3px_8px_rgba(0,0,0,0.9)] -mt-0.5" />
                </div>

                {/* Center TV Base Ambient Shadow on Table */}
                <div className="w-32 sm:w-68 h-1.5 bg-black/50 blur-xs rounded-full self-end mb-0" />

                {/* Right Leg */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="w-2.5 sm:w-4 h-5 sm:h-8 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 shadow-md"
                    style={{
                      transform: 'perspective(100px) rotateY(8deg) skewX(14deg)',
                      borderTop: '1px solid #64748b',
                    }}
                  />
                  <div className="w-5 sm:w-8 h-1.5 bg-slate-950 rounded-full shadow-[0_3px_8px_rgba(0,0,0,0.9)] -mt-0.5" />
                </div>
              </div>

            </div>

            {/* RIGHT DECOR: Globe & Books (hidden on mobile, visible on desktop) */}
            <div className="hidden lg:flex items-end gap-3 pb-0 flex-shrink-0 z-10 ml-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-3 bg-[#8b261d] rounded-xs shadow-xs border-r-2 border-amber-300/60" />
                <div className="w-18 h-3 bg-[#1b3d54] rounded-xs shadow-xs border-r-2 border-amber-300/60 -mt-0.5" />
                <div className="w-20 h-3.5 bg-[#3d2314] rounded-xs shadow-sm border-r-2 border-amber-300/60 -mt-0.5" />
              </div>

              <div className="flex flex-col items-center pb-0">
                <div className="relative w-16 xl:w-20 h-24 xl:h-28 flex items-end justify-center">
                  <svg viewBox="0 0 100 120" className="w-full h-full filter drop-shadow-md">
                    <defs>
                      <radialGradient id="globeGradResp" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#ffe082" />
                        <stop offset="50%" stopColor="#d4a359" />
                        <stop offset="100%" stopColor="#795548" />
                      </radialGradient>
                    </defs>
                    <path d="M 50 15 A 35 35 0 0 1 50 85" fill="none" stroke="#b8860b" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="28" fill="url(#globeGradResp)" />
                    <path d="M 40 40 Q 48 35 55 45 Q 60 55 52 65 Q 42 62 40 40 Z" fill="#4e342e" opacity="0.8" />
                    <path d="M 58 35 Q 68 38 65 48 Q 60 50 58 35 Z" fill="#4e342e" opacity="0.8" />
                    <circle cx="50" cy="15" r="3" fill="#d4af37" />
                    <circle cx="50" cy="85" r="3" fill="#d4af37" />
                    <line x1="50" y1="87" x2="50" y2="108" stroke="#b8860b" strokeWidth="5" strokeLinecap="round" />
                    <ellipse cx="50" cy="112" rx="20" ry="5" fill="#8d6e3f" stroke="#d4af37" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------
              THE POLISHED WOODEN CONSOLE TABLETOP
             ---------------------------------------------------- */}
          <div className="relative w-full rounded-t-lg shadow-xl overflow-hidden z-20">
            {/* Upper Edge Bevel & Gloss Sheen */}
            <div className="h-1.5 sm:h-2 w-full bg-gradient-to-r from-[#422211] via-[#8c522f] via-[#c68953] via-[#8c522f] to-[#422211] border-t border-amber-200/50" />
            
            {/* Solid Walnut Table Face */}
            <div className="h-6 sm:h-8 md:h-9 w-full bg-gradient-to-r from-[#3e1f10] via-[#5c341b] via-[#6e3e20] via-[#5c341b] to-[#3e1f10] shadow-[inset_0_2px_4px_rgba(255,255,255,0.25)] flex items-center justify-between px-3 sm:px-8 border-b border-black/40">
              <div className="text-[8px] sm:text-[10px] font-bold text-amber-200/80 tracking-widest uppercase font-mono">
                • CONSOLE TABLETOP •
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold text-amber-200/70 tracking-widest uppercase font-mono hidden sm:block">
                SOLID WALNUT FINISH • STUDIO SERIES
              </div>
            </div>

            {/* RADIANT GOLDEN/AMBER LED COVE LIGHT STRIP */}
            <div className="relative h-1.5 sm:h-2.5 w-full bg-gradient-to-r from-amber-500 via-amber-300 via-yellow-200 via-amber-300 to-amber-500 shadow-[0_0_20px_#f59e0b,0_0_10px_#fbbf24,0_3px_12px_rgba(245,158,11,0.6)] z-10" />
          </div>

          {/* ----------------------------------------------------
              "INSIDE THE TABLE NEWS IS SHOWING"
              Mobile Responsive Console:
              - Swipeable horizontal snap carousel on phone screens!
              - Multi-column grid on tablet and desktop!
              - Interactive pagination dots on phone!
             ---------------------------------------------------- */}
          <div className="relative w-full bg-gradient-to-b from-[#24130a] via-[#1b0d06] to-[#120703] border-x-2 sm:border-x-4 border-b-2 sm:border-b-4 border-[#3e1f10] rounded-b-xl sm:rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-3 sm:p-5 lg:p-7 overflow-hidden z-20">
            
            {/* Ambient Golden Backlight Reflection */}
            <div className="absolute top-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-b from-amber-500/20 via-amber-500/5 to-transparent pointer-events-none" />

            {/* Vertical Fluted Wood Textures (desktop/tablet) */}
            <div
              className="absolute inset-y-0 left-0 w-4 sm:w-12 opacity-30 pointer-events-none hidden sm:block"
              style={{
                background:
                  'repeating-linear-gradient(90deg, #422211, #422211 4px, #1a0a04 4px, #1a0a04 10px)',
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-4 sm:w-12 opacity-30 pointer-events-none hidden sm:block"
              style={{
                background:
                  'repeating-linear-gradient(90deg, #422211, #422211 4px, #1a0a04 4px, #1a0a04 10px)',
              }}
            />

            <div className="relative z-10 max-w-[1240px] mx-auto">
              
              {/* Responsive Console Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3 border-b border-amber-900/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-md flex-shrink-0">
                    <FaTowerBroadcast className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-black uppercase tracking-widest text-amber-400 font-mono">
                        CONSOLE NEWSFEED
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-black text-white tracking-tight">
                      Live Breaking Stories Inside Table
                    </h3>
                  </div>
                </div>

                {/* Category Pills (horizontal scroll with smooth touch scrolling) */}
                <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[9.5px] sm:text-[11px] font-bold px-2.5 py-1 sm:py-1.5 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30 font-black'
                          : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-700/60'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Auto-Rotation Progress Bar */}
              <div className="w-full h-1 bg-stone-950 rounded-full overflow-hidden mt-2.5 mb-2 border border-amber-950/50">
                <div
                  key={autoTimerKey}
                  className={`h-full bg-gradient-to-r from-red-600 via-amber-400 to-emerald-400 ${
                    isPlaying && !isSwitching ? 'animate-story-progress' : 'w-0'
                  }`}
                />
              </div>

              {/* Mobile Swipe Notice & Story Dots (visible on mobile only) */}
              <div className="flex sm:hidden items-center justify-between text-[9.5px] text-amber-300/80 mb-2 font-mono">
                <span>Swipe stories or tap to tune in</span>
                <div className="flex items-center gap-1.5">
                  {filteredStories.map((story, idx) => (
                    <button
                      key={story.id}
                      onClick={() => triggerStorySwitch(story.id)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedStoryId === story.id
                          ? 'bg-amber-400 w-4 shadow-[0_0_6px_#f59e0b]'
                          : 'bg-stone-700 hover:bg-stone-500'
                      }`}
                      aria-label={`Go to story ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* ======================================================
                  RESPONSIVE NEWS CARDS CONTAINER:
                  - Phone (< sm): Horizontal swipeable snap carousel with full visibility
                  - Tablet (sm): 2-column grid
                  - Desktop (lg): 4-column side-by-side grid
                 ====================================================== */}
              <div
                className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar pt-1 pb-2"
              >
                {filteredStories.map((story) => {
                  const isSelected = selectedStoryId === story.id;
                  return (
                    <div
                      key={story.id}
                      data-story-id={story.id}
                      onClick={() => triggerStorySwitch(story.id)}
                      className={`relative rounded-xl p-3 sm:p-3.5 transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden flex-shrink-0 w-[82vw] max-w-[290px] sm:w-auto sm:max-w-none snap-center ${
                        isSelected
                          ? 'bg-gradient-to-b from-stone-900/95 via-stone-900/90 to-stone-950 border-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-[1.01]'
                          : 'bg-stone-900/70 hover:bg-stone-900/90 border border-stone-700/60 hover:border-amber-500/50 shadow-md'
                      }`}
                    >
                      {/* Active "ON TV NOW" Ribbon / Badge */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 z-20 bg-gradient-to-r from-red-600 to-amber-500 text-white text-[8.5px] sm:text-[9px] font-black px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                          <FaCircle className="w-1.5 h-1.5 fill-white animate-ping" />
                          <span>ON TV NOW</span>
                        </div>
                      )}

                      <div>
                        {/* 1. SEPARATE STORY IMAGE FOR EACH CARD */}
                        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-2.5 bg-stone-950 border border-stone-700/60 group-hover:border-amber-400/60 transition-colors">
                          <img
                            src={story.image}
                            alt={story.englishTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                          />

                          {/* Gradient scrim overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                          {/* Category Badge on top of Card Image */}
                          <div className="absolute top-1.5 left-1.5 z-10">
                            <span
                              className={`text-[8.5px] sm:text-[9px] font-black px-1.5 sm:px-2 py-0.5 rounded tracking-wider uppercase shadow-md ${story.categoryColor}`}
                            >
                              {story.categoryShort}
                            </span>
                          </div>

                          {/* Timestamp & Views on bottom of Card Image */}
                          <div className="absolute bottom-1.5 left-1.5 right-1.5 z-10 flex items-center justify-between text-[8.5px] sm:text-[9px] text-stone-300 font-mono">
                            <span className="flex items-center gap-1 bg-black/65 px-1.5 py-0.5 rounded backdrop-blur-xs">
                              <FaRegClock className="w-2.5 h-2.5 text-amber-400" />
                              {story.time}
                            </span>
                            <span className="flex items-center gap-1 bg-black/65 px-1.5 py-0.5 rounded backdrop-blur-xs">
                              <FaEye className="w-2.5 h-2.5 text-amber-400" />
                              {story.views}
                            </span>
                          </div>
                        </div>

                        {/* Odia & English Headline */}
                        <h4 className="text-xs sm:text-[13px] font-extrabold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug mb-1">
                          {story.title}
                        </h4>

                        <p className="text-[10.5px] sm:text-[11px] text-stone-400 line-clamp-2 leading-relaxed">
                          {story.summary}
                        </p>
                      </div>

                      {/* Card Footer: Action Button with Finger-Friendly Target */}
                      <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-stone-800/80 text-[10px]">
                        <span className="text-stone-400 font-mono text-[8.5px] sm:text-[9px]">
                          {story.studio.split('•')[0]}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            triggerStorySwitch(story.id);
                          }}
                          className={`inline-flex items-center gap-1 font-bold px-2.5 py-1 rounded transition-all cursor-pointer min-h-[28px] ${
                            isSelected
                              ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/30'
                              : 'text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-700/80 border border-stone-600/50'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <FaTv className="w-2.5 h-2.5 text-slate-950" />
                              <span>Viewing</span>
                            </>
                          ) : (
                            <>
                              <span>Tune In</span>
                              <FaArrowRight className="w-2 h-2" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Table Desk Synchronized News Marquee Ledge */}
              <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3.5 border-t border-amber-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-3 text-xs">
                <div className="flex items-center gap-2 max-w-full">
                  <span className="inline-flex items-center gap-1 bg-red-600 text-white font-black px-2 py-0.5 rounded text-[9px] tracking-wider uppercase flex-shrink-0">
                    <FaBolt className="w-2.5 h-2.5 fill-amber-300" />
                    LIVE
                  </span>
                  <span className="text-stone-300 font-medium text-[10.5px] sm:text-xs truncate">
                    Broadcasting: <span className="text-amber-300 font-bold">{activeStory.englishTitle}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-stone-400 text-[10px] font-mono self-end sm:self-auto">
                  <span className="text-amber-400">{activeStory.studio.split('•')[0]}</span>
                  <span>•</span>
                  <span className="text-emerald-400">{activeStory.views} viewers</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Section14;
export { Section14 as LiveBroadcastSection };

