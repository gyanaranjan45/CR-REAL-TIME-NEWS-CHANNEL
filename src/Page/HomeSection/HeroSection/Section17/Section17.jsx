import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause 
} from 'lucide-react';
import newsData from './Section17Data';

/**
 * COMPLETE PROFESSIONAL CRCCF NEWS BROADCAST COMPONENT
 * 
 * 1. Vintage CRT Television:
 *    - Wooden cabinet with mitered frame (760px x 480px)
 *    - Dual metallic top antennas (185px)
 *    - Left section: 495px wide CRT screen with stepped silver bezel & convex glass
 *    - Right section: 183px wide control panel with channel dial, blue power button,
 *      physical metallic PREV & NEXT knobs, and 15-slot speaker grille
 *    - Bottom: Exactly two tapered, outward-slanted wooden legs with polygon clipPath
 * 
 * 2. CRT Screen Internal Broadcast:
 *    - Top header: CRCCF NEWS badge on left, red pulsing LIVE indicator on right
 *    - 4:3 Aspect ratio news image on left (42% width)
 *    - Compact information card on right (55% width) with badge, vertical red bar, headline, 1-2 line description
 *    - Bottom ticker: Current time badge + continuous marquee scrolling text + red >> chevrons
 *    - Simultaneous horizontal slide transition:
 *      * NEXT: Outgoing moves RIGHT, incoming enters from LEFT
 *      * PREV: Outgoing moves LEFT, incoming enters from RIGHT
 * 
 * 3. Right-Side Detailed News Content Box:
 *    - Exact height matching TV cabinet (480px / scaled height)
 *    - Flush top & bottom alignment with the wooden TV cabinet
 *    - Hover/Click Pause:
 *      * Hover over card -> Auto scroll stops; mouse leave -> Auto resumes
 *      * Click on card -> Auto scroll stops; click again -> Auto resumes
 *    - 2px animated progress timeline bar
 *    - Full headline, category, key advisories callout box, in-depth multi-paragraph story, verified source & tags
 * 
 * 4. Interactive Controls:
 *    - TV Knobs PREV & NEXT are unblocked and respond instantly on every click
 *    - TV knobs rotate 30° mechanically on every slide transition
 *    - Web Audio mechanical click sound on manual knob action
 *    - All animations, keyframes & scrollbar styles are embedded directly inside this component
 */
function NewsBroadcast() {
  // Navigation & Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-play State:
  // isAutoActive: toggled by clicking the card (Click -> Stop, Click again -> Auto)
  // isCardHovered: true when mouse is over the right card (Hover -> Pause)
  const [isAutoActive, setIsAutoActive] = useState(true);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const AUTO_INTERVAL = 6000; // 6 seconds per news dispatch

  // Responsive Scaling & Layout State
  const [scale, setScale] = useState(1);
  const [isDesktop, setIsDesktop] = useState(true);

  // TV Physical Hardware State
  const [isPowered, setIsPowered] = useState(true);
  const [dialRotation, setDialRotation] = useState(48);
  const [knob1Rotation, setKnob1Rotation] = useState(0);
  const [knob2Rotation, setKnob2Rotation] = useState(0);
  const [brightness] = useState(100);
  const [showGlare] = useState(false);

  // Dimensions
  const BASE_WIDTH = 760;
  const BASE_HEIGHT = 480;
  const ANTENNA_HEIGHT = 185;
  const LEG_HEIGHT = 64;
  const TOTAL_HEIGHT = BASE_HEIGHT + ANTENNA_HEIGHT + LEG_HEIGHT; // 729px

  // Scaled Measurements
  const tvCabinetHeight = Math.round(BASE_HEIGHT * scale);
  const antennaOffset = Math.round(ANTENNA_HEIGHT * scale);

  // Responsive scaling container hook based on viewport
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      const w = window.innerWidth;
      setIsDesktop(w >= 1024);
      let computedScale = 1;
      if (w >= 1380) {
        computedScale = 1;
      } else if (w >= 1024) {
        const availableForTV = w - 540;
        computedScale = Math.min(1, Math.max(0.68, availableForTV / 780));
      } else {
        computedScale = Math.min(1, Math.max(0.42, (w - 32) / 780));
      }
      setScale(computedScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Subtle vintage mechanical click sound on manual knob action
  const playKnobClick = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio context might be waiting for user gesture
    }
  };

  // Instant, Unblocked Navigation Handlers
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  }, []);

  // Rotate TV knobs and dial whenever slide changes (both auto and manual)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (direction > 0) {
      setKnob2Rotation((prev) => (prev + 30) % 360);
      setDialRotation((prev) => (prev + 30) % 360);
    } else {
      setKnob1Rotation((prev) => (prev - 30 + 360) % 360);
      setDialRotation((prev) => (prev - 30 + 360) % 360);
    }
  }, [currentIndex, direction]);

  // Left Knob: PREVIOUS News Trigger
  const handleKnobPrev = () => {
    playKnobClick();
    handlePrev();
  };

  // Right Knob: NEXT News Trigger
  const handleKnobNext = () => {
    playKnobClick();
    handleNext();
  };

  const handleDialClick = () => {
    handleKnobNext();
  };

  const togglePower = () => {
    setIsPowered((prev) => !prev);
  };

  // Automatic slideshow timer:
  // Runs continuously unless user clicked to pause (isAutoActive === false) OR user is hovering card (isCardHovered === true)
  useEffect(() => {
    if (!isAutoActive || isCardHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTO_INTERVAL);

    return () => clearInterval(timer);
  }, [isAutoActive, isCardHovered, handleNext]);

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Card click handler: toggle auto-advance on/off
  const handleCardToggleAuto = () => {
    setIsAutoActive((prev) => !prev);
  };

  const currentRecord = newsData[currentIndex];

  return (
    <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 xl:gap-10 select-none">
      
      {/* EMBEDDED CSS (MARQUEE TICKER & CUSTOM SCROLLBAR DIRECTLY SCOPED IN COMPONENT) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 22s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. LEFT SIDE: VINTAGE CRT TELEVISION WITH INTEGRATED CONTROLS            */}
      {/* ========================================================================= */}
      <div className="shrink-0 flex flex-col items-center justify-center">
        {/* Responsive Scaled Canvas Box */}
        <div 
          className="relative flex flex-col items-center justify-end"
          style={{
            width: `${BASE_WIDTH * scale}px`,
            height: `${(TOTAL_HEIGHT + 6) * scale}px`,
            transition: 'width 0.15s ease-out, height 0.15s ease-out'
          }}
        >
          {/* Inner container rendered at fixed coordinate space and scaled */}
          <div 
            className="absolute bottom-1 flex flex-col items-center origin-bottom"
            style={{
              width: `${BASE_WIDTH}px`,
              height: `${TOTAL_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'bottom center',
            }}
          >
            {/* TOP V-SHAPED ANTENNAS */}
            <Antennas />

            {/* MAIN WOODEN CABINET */}
            <div 
              className="relative w-[760px] h-[480px] rounded-[3px] 
                         bg-[#3d180a] 
                         border border-[#55230f]
                         shadow-[0_25px_50px_-10px_rgba(0,0,0,0.85),0_12px_24px_-8px_rgba(0,0,0,0.7)]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.14) 2px, rgba(0,0,0,0.14) 3px, transparent 3px, transparent 6px, rgba(0,0,0,0.08) 6px, rgba(0,0,0,0.08) 7px),
                  linear-gradient(90deg, #321105 0%, #4a1c0b 12%, #381407 24%, #56210d 38%, #3e1608 52%, #521e0b 68%, #341206 82%, #491a0a 100%)
                `
              }}
            >
              {/* Outer Cabinet Beveled Edge Light & Shadows */}
              <div className="absolute inset-0 rounded-[2px] pointer-events-none shadow-[inset_0_2px_3px_rgba(255,255,255,0.25),inset_0_-3px_5px_rgba(0,0,0,0.85),inset_2px_0_3px_rgba(255,255,255,0.12),inset_-2px_0_4px_rgba(0,0,0,0.75)]" />

              {/* Cabinet Outer Frame Planks (Mitered Thickness ~20px) */}
              <div className="absolute inset-[20px] rounded-[2px] overflow-hidden bg-[#2d0f04] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.92),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.1)]">
                
                {/* Recessed Inner Wooden Front Face (720px wide, 440px high) */}
                <div 
                  className="relative w-full h-full flex flex-row p-3.5 gap-3.5"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.16) 2px, rgba(0,0,0,0.16) 3px, transparent 3px, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 6px),
                      linear-gradient(90deg, #2b0e04 0%, #421808 15%, #301005 35%, #46190a 55%, #331106 75%, #431709 100%)
                    `
                  }}
                >
                  
                  {/* LEFT CRT SCREEN SECTION (EXACT 495px FIXED WIDTH) */}
                  <div className="relative w-[495px] shrink-0 h-full">
                    <CRTScreen 
                      isPowered={isPowered} 
                      currentRecord={currentRecord}
                      direction={direction}
                      brightness={brightness} 
                      showGlare={showGlare} 
                    />
                  </div>

                  {/* RIGHT CONTROL PANEL SECTION (EXACT 183px FIXED WIDTH - FULL KNOBS & DIAL) */}
                  <div className="relative w-[183px] shrink-0 h-full flex flex-col justify-between py-0.5">
                    <ControlPanel 
                      isPowered={isPowered}
                      onTogglePower={togglePower}
                      dialRotation={dialRotation}
                      onDialClick={handleDialClick}
                      knob1Rotation={knob1Rotation}
                      knob2Rotation={knob2Rotation}
                      onKnobPrev={handleKnobPrev}
                      onKnobNext={handleKnobNext}
                    />
                  </div>

                </div>
              </div>

              {/* TWO WOODEN SUPPORT LEGS (ATTACHED SEAMLESSLY TO CABINET BOTTOM FRAME) */}
              <WoodenLegs />

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. RIGHT SIDE: DETAILED NEWS CONTENT BOX (EXACT TV CABINET HEIGHT MATCH)  */}
      {/* ========================================================================= */}
      <div 
        className="shrink-0 flex justify-center w-full lg:w-auto"
        style={{
          marginTop: isDesktop ? `${antennaOffset}px` : '0px',
        }}
      >
        <DetailedNewsCard 
          currentRecord={currentRecord}
          currentIndex={currentIndex}
          totalRecords={newsData.length}
          direction={direction}
          onPrev={handlePrev}
          onNext={handleNext}
          cardHeight={isDesktop ? tvCabinetHeight : 480}
          isAutoActive={isAutoActive}
          onToggleAuto={handleCardToggleAuto}
          isCardHovered={isCardHovered}
          setIsCardHovered={setIsCardHovered}
          autoInterval={AUTO_INTERVAL}
        />
      </div>

    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * TOP V-SHAPED ANTENNAS
 * ---------------------------------------------------------------------------
 */
function Antennas() {
  return (
    <div className="relative w-48 h-48 -mb-4 flex items-end justify-center z-0 pointer-events-none">
      <div className="absolute bottom-3.5 w-9 h-3.5 rounded-t-sm bg-[linear-gradient(180deg,#94a3b8_0%,#475569_60%,#1e293b_100%)] border-t border-[#cbd5e1] shadow-[0_-2px_4px_rgba(0,0,0,0.6)] z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#1e293b] border border-[#cbd5e1] shadow-inner" />
      </div>

      {/* LEFT ANTENNA */}
      <div 
        className="absolute bottom-4 origin-bottom flex flex-col items-center"
        style={{
          transform: 'rotate(-31deg)',
          height: '185px',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_0%,#cbd5e1_50%,#475569_100%)] shadow-sm border border-[#64748b]" />
        <div className="w-1 h-1.5 bg-[#475569] -mt-0.5" />
        <div className="w-[2px] flex-1 bg-[linear-gradient(90deg,#94a3b8_0%,#ffffff_35%,#cbd5e1_65%,#475569_100%)] shadow-[0_0_2px_rgba(0,0,0,0.3)]" />
        <div className="w-1 h-2 rounded-[1px] bg-[linear-gradient(180deg,#f8fafc_0%,#94a3b8_50%,#334155_100%)] border-[0.5px] border-[#64748b]" />
        <div className="w-[3px] h-20 bg-[linear-gradient(90deg,#64748b_0%,#f8fafc_40%,#cbd5e1_70%,#334155_100%)] shadow-[1px_0_3px_rgba(0,0,0,0.4)]" />
      </div>

      {/* RIGHT ANTENNA */}
      <div 
        className="absolute bottom-4 origin-bottom flex flex-col items-center"
        style={{
          transform: 'rotate(31deg)',
          height: '185px',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_0%,#cbd5e1_50%,#475569_100%)] shadow-sm border border-[#64748b]" />
        <div className="w-1 h-1.5 bg-[#475569] -mt-0.5" />
        <div className="w-[2px] flex-1 bg-[linear-gradient(90deg,#94a3b8_0%,#ffffff_35%,#cbd5e1_65%,#475569_100%)] shadow-[0_0_2px_rgba(0,0,0,0.3)]" />
        <div className="w-1 h-2 rounded-[1px] bg-[linear-gradient(180deg,#f8fafc_0%,#94a3b8_50%,#334155_100%)] border-[0.5px] border-[#64748b]" />
        <div className="w-[3px] h-20 bg-[linear-gradient(90deg,#64748b_0%,#f8fafc_40%,#cbd5e1_70%,#334155_100%)] shadow-[1px_0_3px_rgba(0,0,0,0.4)]" />
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * CRT SCREEN ASSEMBLY (CURVED GLASS & HOUSING)
 * ---------------------------------------------------------------------------
 */
function CRTScreen({ 
  isPowered, 
  currentRecord, 
  direction, 
  brightness, 
  showGlare 
}) {
  return (
    <div className="relative w-full h-full p-2.5 rounded-[18px] bg-[#1a1f26] shadow-[0_8px_16px_rgba(0,0,0,0.9),inset_0_2px_3px_rgba(255,255,255,0.4)]">
      {/* Outer Stepped Metallic Bezel */}
      <div 
        className="relative w-full h-full rounded-[14px] p-2"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 25%, #64748b 50%, #cbd5e1 75%, #ffffff 100%)',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -3px 6px rgba(0,0,0,0.8), 0 4px 10px rgba(0,0,0,0.6)'
        }}
      >
        {/* Inner Dark Gasket */}
        <div className="relative w-full h-full rounded-[10px] p-1.5 bg-[#0f172a] shadow-[inset_0_4px_10px_rgba(0,0,0,0.95)]">
          {/* Innermost Silver Bezel Lip */}
          <div 
            className="relative w-full h-full rounded-[7px] p-[2px]"
            style={{
              background: 'linear-gradient(180deg, #94a3b8 0%, #334155 100%)'
            }}
          >
            {/* The CRT Glass Surface */}
            <div 
              className="relative w-full h-full rounded-[5px] overflow-hidden bg-black flex items-center justify-center"
              style={{
                filter: isPowered ? `brightness(${brightness}%)` : 'brightness(10%)',
                transition: 'filter 0.3s ease-out',
                boxShadow: 'inset 0 0 30px rgba(0,0,0,0.9)'
              }}
            >
              {isPowered ? (
                <>
                  {/* CRCCF LIVE BROADCAST INTERFACE */}
                  <BroadcastDisplay 
                    currentRecord={currentRecord}
                    direction={direction}
                  />

                  {/* Scanline CRT Texture Overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20 z-20"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
                      backgroundSize: '100% 4px',
                    }}
                  />

                  {/* Curved Glass Reflection & Vignette */}
                  <div 
                    className="absolute inset-0 pointer-events-none rounded-[5px] z-30"
                    style={{
                      boxShadow: 'inset 0 0 45px rgba(0,0,0,0.7), inset 0 2px 6px rgba(255,255,255,0.3)',
                      background: 'radial-gradient(ellipse at 50% 50%, transparent 65%, rgba(0,0,0,0.5) 100%)'
                    }}
                  />

                  {/* Glass Curved Glare Arc */}
                  {showGlare && (
                    <div 
                      className="absolute top-1 left-2 w-36 h-28 pointer-events-none opacity-15 rounded-full z-30"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 70%)',
                        transform: 'rotate(-20deg)'
                      }}
                    />
                  )}
                </>
              ) : (
                /* TV Power Off Screen */
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 animate-ping" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * INTERNAL NEWS BROADCAST INTERFACE (INSIDE CRT SCREEN)
 * Synchronized simultaneous horizontal slide animation:
 * - NEXT (dir > 0): Outgoing exits to RIGHT (+100%), incoming enters from LEFT (-100% -> 0)
 * - PREV (dir < 0): Outgoing exits to LEFT (-100%), incoming enters from RIGHT (+100% -> 0)
 * ---------------------------------------------------------------------------
 */
function BroadcastDisplay({ currentRecord, direction }) {
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28, mass: 0.8 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28, mass: 0.8 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col justify-between font-sans select-none px-3.5 py-2.5">
      {/* Studio Background with World Map Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(135deg, #071739 0%, #0d265c 40%, #163678 70%, #081a3e 100%)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(#60a5fa 1px, transparent 1px),
              linear-gradient(to right, rgba(96,165,250,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(96,165,250,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '16px 16px, 32px 32px, 32px 32px'
          }}
        />
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-0 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-11 -right-4 w-28 h-2 bg-gradient-to-r from-transparent via-red-600 to-red-600 transform rotate-[-25deg] shadow-[0_0_8px_#dc2626]" />
      </div>

      {/* TOP BROADCAST HEADER */}
      <div className="relative z-10 w-full flex items-center justify-between pb-1">
        {/* CRCCF NEWS Logo Badge */}
        <div className="flex items-center shadow-md rounded-md overflow-hidden border border-white/30 backdrop-blur-xs">
          <div className="bg-[#0b4290] px-2.5 py-0.5 flex items-center justify-center">
            <span className="text-white font-black text-xs sm:text-sm tracking-wider drop-shadow-xs">
              CRCCF
            </span>
          </div>
          <div className="bg-[#d9141d] px-2.5 py-0.5 flex items-center justify-center">
            <span className="text-white font-black italic text-xs sm:text-sm tracking-widest drop-shadow-xs">
              NEWS
            </span>
          </div>
        </div>

        {/* LIVE Indicator */}
        <div className="flex items-center gap-1.5 bg-[#d9141d] border border-red-400/50 rounded-full px-2.5 py-0.5 shadow-[0_0_10px_rgba(220,20,30,0.6)]">
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span className="text-white font-black text-[10.5px] sm:text-xs tracking-wider">
            LIVE
          </span>
        </div>
      </div>

      {/* MAIN TWO-COLUMN CONTENT AREA (Absolute positioning gives simultaneous horizontal slide) */}
      <div className="relative z-10 flex-1 w-full overflow-hidden my-1">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentRecord.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full flex flex-row items-center justify-between gap-3 sm:gap-3.5"
          >
            {/* LEFT SIDE – 4:3 ASPECT RATIO IMAGE (42% width) */}
            <div className="w-[42%] shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border-2 border-white/80 shadow-[0_4px_14px_rgba(0,0,0,0.6)] group">
                <img 
                  src={currentRecord.image} 
                  alt={currentRecord.headline}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 pointer-events-none" />
              </div>
            </div>

            {/* RIGHT SIDE – COMPACT CARD (55% width) */}
            <div className="w-[55%] shrink-0 bg-gradient-to-r from-white via-white to-blue-50/95 rounded-xl px-3 py-2.5 sm:px-3.5 sm:py-3 border border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.45)] flex flex-col justify-center">
              {/* Category Badge */}
              <div className="inline-flex self-start">
                <span className="bg-[#d9141d] text-white font-bold text-[9.5px] sm:text-[10px] px-2.5 py-0.5 rounded-full shadow-[0_2px_4px_rgba(217,20,29,0.4)] tracking-wide uppercase">
                  {currentRecord.category}
                </span>
              </div>

              {/* Headline with Signature Red Accent Line */}
              <div className="flex items-start gap-2 mt-1.5">
                <div className="w-[3px] self-stretch bg-[#d9141d] rounded-full shrink-0 my-0.5 shadow-xs" />
                <h2 className="text-[#0a1931] font-black text-xs sm:text-[12.5px] md:text-[13px] leading-[1.25] tracking-tight line-clamp-2">
                  {currentRecord.headline}
                </h2>
              </div>

              {/* Short 1-2 Lines Description */}
              <p className="mt-1 pl-2.5 text-slate-600 font-medium text-[9.5px] sm:text-[10px] md:text-[10.5px] leading-snug line-clamp-2">
                {currentRecord.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM TICKER */}
      <div className="relative z-10 w-full pt-0.5">
        <div className="w-full h-7 rounded-lg bg-[#071329]/95 border border-blue-400/30 flex items-center overflow-hidden shadow-md backdrop-blur-md">
          {/* Time Badge */}
          <div className="bg-[#d9141d] h-full px-2.5 sm:px-3 flex items-center justify-center shrink-0 border-r border-red-500/50 shadow-sm">
            <span className="text-white font-extrabold text-[11px] sm:text-xs tracking-wider whitespace-nowrap">
              {currentRecord.time}
            </span>
          </div>

          <div className="w-[1px] h-3.5 bg-white/40 mx-2 shrink-0" />

          {/* Scrolling Ticker Marquee */}
          <div className="flex-1 overflow-hidden relative flex items-center">
            <div className="animate-marquee whitespace-nowrap flex items-center text-[10.5px] sm:text-[11px] text-white/95 font-semibold tracking-wide">
              <span>{currentRecord.tickerText}</span>
              <span className="mx-4 text-red-400 font-bold">•</span>
              <span>CRCCF 24/7 Digital Protection Network</span>
              <span className="mx-4 text-red-400 font-bold">•</span>
              <span>{currentRecord.tickerText}</span>
            </div>
          </div>

          {/* Red Chevron Accents >> */}
          <div className="px-2 flex items-center gap-0.5 text-red-500 font-black text-xs sm:text-sm shrink-0">
            <span>&gt;</span>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * CONTROL PANEL (DIAL, ILLUMINATED POWER, PHYSICAL KNOBS & SPEAKER GRILLE)
 * ---------------------------------------------------------------------------
 */
function ControlPanel({
  isPowered,
  onTogglePower,
  dialRotation,
  onDialClick,
  knob1Rotation,
  knob2Rotation,
  onKnobPrev,
  onKnobNext,
}) {
  return (
    <div className="w-full h-full flex flex-col justify-between py-1">
      {/* Upper Brushed Metal Tuning Plate */}
      <div 
        className="relative w-full h-[88px] rounded-[3px] p-2 flex items-center justify-between
                   border border-slate-400
                   shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.6)]"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 50%, #94a3b8 100%)'
        }}
      >
        {/* Four Corner Screws */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-xs" />
        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-xs" />
        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-xs" />
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-slate-600 shadow-xs" />

        {/* Rotary Tuning Dial */}
        <div 
          className="relative ml-1 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group"
          onClick={onDialClick}
          title="Channel Dial - Click to advance news"
        >
          <div 
            className="absolute inset-0 rounded-full border border-slate-400 shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            style={{
              background: 'radial-gradient(circle at 40% 40%, #ffffff 0%, #cbd5e1 60%, #64748b 100%)'
            }}
          />
          {/* Tick marks */}
          <div className="absolute inset-1 rounded-full pointer-events-none">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <div 
                key={deg} 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-slate-700/80 origin-[50%_30px]"
                style={{ transform: `rotate(${deg}deg)` }}
              />
            ))}
          </div>
          {/* Rotatable Center Core */}
          <div 
            className="relative w-11 h-11 rounded-full bg-[#18181b] border border-slate-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9),0_1px_2px_rgba(255,255,255,0.6)] flex items-center justify-center transition-transform duration-300 ease-out"
            style={{ transform: `rotate(${dialRotation}deg)` }}
          >
            <div 
              className="relative w-12 h-3.5 rounded-full flex items-center justify-between px-0.5 shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
              style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #cbd5e1 45%, #64748b 85%, #334155 100%)'
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-400 mx-auto" />
              <div className="absolute right-0.5 w-1 h-1 rounded-full bg-red-600 shadow-[0_0_2px_rgba(220,38,38,0.8)]" />
            </div>
          </div>
        </div>

        {/* Illuminated Power Button */}
        <div 
          className="relative mr-2 flex flex-col items-center justify-center cursor-pointer"
          onClick={onTogglePower}
          title="Power Button - Click to toggle TV screen"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 border border-slate-500 mb-1.5 shadow-inner" />
          <div className="w-7 h-7 rounded-[3px] p-[2.5px] bg-[#0f172a] border border-[#334155] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.9),0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center">
            <div 
              className={`w-full h-full rounded-[2px] transition-all duration-300 ${
                isPowered 
                  ? 'bg-[#00e5ff] shadow-[0_0_8px_#00e5ff,0_0_16px_rgba(0,229,255,0.7),inset_0_0_4px_#ffffff]' 
                  : 'bg-[#082f49] shadow-inner opacity-60'
              }`}
              style={{
                backgroundImage: isPowered 
                  ? 'radial-gradient(circle at 45% 45%, #ffffff 0%, #38bdf8 45%, #0284c7 90%)' 
                  : 'none'
              }}
            />
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 border border-slate-500 mt-1.5 shadow-inner" />
        </div>
      </div>

      {/* TWO PHYSICAL KNOBS (PREVIOUS & NEXT) - 100% UNBLOCKED & RESPONSIVE */}
      <ControlKnobs 
        knob1Rotation={knob1Rotation}
        knob2Rotation={knob2Rotation}
        onKnobPrev={onKnobPrev}
        onKnobNext={onKnobNext}
      />

      {/* SPEAKER GRILLE */}
      <SpeakerGrille />
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * PHYSICAL KNOBS WITH PREVIOUS AND NEXT NAVIGATION
 * ---------------------------------------------------------------------------
 */
function ControlKnobs({ knob1Rotation, knob2Rotation, onKnobPrev, onKnobNext }) {
  return (
    <div className="relative w-full py-1 flex flex-col items-center px-1">
      <div className="w-full flex items-center justify-around px-2">
        {/* LEFT KNOB: PREVIOUS */}
        <button
          type="button"
          onClick={onKnobPrev}
          className="flex flex-col items-center gap-1.5 focus:outline-none group select-none transition-transform active:scale-90 cursor-pointer"
          title="Previous News Story (Turn TV Knob Left)"
          aria-label="Previous News Story"
        >
          <Knob rotation={knob1Rotation} label="PREVIOUS" />
          <div className="px-2.5 py-0.5 rounded bg-black/70 border border-amber-500/40 shadow-xs flex items-center gap-1 group-hover:border-amber-400 group-hover:bg-black/90 transition-all">
            <span className="text-[9.5px] font-mono font-black tracking-widest text-amber-400 group-hover:text-amber-300">
              ◀ PREV
            </span>
          </div>
        </button>

        {/* RIGHT KNOB: NEXT */}
        <button
          type="button"
          onClick={onKnobNext}
          className="flex flex-col items-center gap-1.5 focus:outline-none group select-none transition-transform active:scale-90 cursor-pointer"
          title="Next News Story (Turn TV Knob Right)"
          aria-label="Next News Story"
        >
          <Knob rotation={knob2Rotation} label="NEXT" />
          <div className="px-2.5 py-0.5 rounded bg-black/70 border border-amber-500/40 shadow-xs flex items-center gap-1 group-hover:border-amber-400 group-hover:bg-black/90 transition-all">
            <span className="text-[9.5px] font-mono font-black tracking-widest text-amber-400 group-hover:text-amber-300">
              NEXT ▶
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

function Knob({ rotation, label }) {
  return (
    <div className="relative flex flex-col items-center" title={`${label} - Turn knob`}>
      <div 
        className="relative w-12 h-12 rounded-full p-[2px]
                   shadow-[0_6px_10px_rgba(0,0,0,0.85),0_2px_4px_rgba(0,0,0,0.6)]
                   transition-transform duration-300 group-hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(145deg, #ffffff 0%, #cbd5e1 35%, #64748b 70%, #1e293b 100%)'
        }}
      >
        <div className="relative w-full h-full rounded-full p-[2px] bg-[#1a1f26] shadow-inner">
          <div 
            className="relative w-full h-full rounded-full p-[3px] border border-slate-400"
            style={{
              background: 'conic-gradient(from 45deg, #f8fafc, #94a3b8, #ffffff, #64748b, #f8fafc, #94a3b8, #ffffff, #64748b)'
            }}
          >
            <div 
              className="relative w-full h-full rounded-full border border-slate-500 shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.9)] flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `rotate(${rotation}deg)`,
                background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #e2e8f0 40%, #94a3b8 80%, #64748b 100%)'
              }}
            >
              <div className="w-4.5 h-4.5 rounded-full border border-slate-400/80 bg-gradient-to-br from-slate-200 to-slate-400 shadow-inner flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600/70" />
              </div>
              <div className="absolute top-0.5 w-1 h-1.5 rounded-full bg-red-600 shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * SPEAKER GRILLE
 * ---------------------------------------------------------------------------
 */
function SpeakerGrille() {
  const slotCount = 15;
  return (
    <div 
      className="relative w-full h-[158px] rounded-[3px] p-2 flex flex-col justify-between overflow-hidden
                 border border-[#280e05]
                 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.85),inset_-1px_-1px_2px_rgba(255,255,255,0.08)]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 3px),
          linear-gradient(90deg, #2a0e05 0%, #3e1609 50%, #2a0e05 100%)
        `
      }}
    >
      {Array.from({ length: slotCount }).map((_, i) => (
        <div key={i} className="relative w-full h-[3px] flex items-center">
          <div className="w-full h-full rounded-[0.5px] bg-[#070302] shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.95)]" />
          <div className="absolute -bottom-[2px] left-0 right-0 h-[0.5px] bg-[#692910]/40 pointer-events-none" />
        </div>
      ))}
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * TWO WOODEN SUPPORT LEGS (SEAMLESS ATTACHMENT WITH FLAT TOP & BOTTOM)
 * ---------------------------------------------------------------------------
 */
function WoodenLegs() {
  return (
    <div className="absolute -bottom-[61px] left-0 right-0 h-[64px] pointer-events-none z-[-1]">
      {/* Ground Soft Shadows */}
      <div 
        className="absolute -bottom-2 left-[100px] w-24 h-4 rounded-full opacity-60 blur-[3px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, transparent 75%)'
        }}
      />
      <div 
        className="absolute -bottom-2 right-[100px] w-24 h-4 rounded-full opacity-60 blur-[3px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, transparent 75%)'
        }}
      />

      {/* LEFT WOODEN LEG */}
      <div className="absolute top-0 left-[118px] w-[64px] h-[64px]">
        <div 
          className="relative w-full h-full"
          style={{
            clipPath: 'polygon(20px 0px, 62px 0px, 28px 64px, 0px 64px)',
            background: `
              linear-gradient(105deg, 
                #2a0d03 0%, 
                #58200b 22%, 
                #933b18 45%, 
                #c4592d 62%, 
                #a8451f 78%, 
                #5a230f 100%
              )
            `
          }}
        >
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 3px, transparent 3px, transparent 5px)'
            }}
          />
          <div 
            className="absolute top-0 left-0 right-0 h-3.5"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 right-0 h-[15px] border-t border-amber-600/50"
            style={{
              background: 'linear-gradient(180deg, #2b140b 0%, #120703 50%, #050201 100%)'
            }}
          >
            <div className="w-full h-[1px] bg-amber-500/40" />
          </div>
        </div>
      </div>

      {/* RIGHT WOODEN LEG */}
      <div className="absolute top-0 right-[118px] w-[64px] h-[64px]">
        <div 
          className="relative w-full h-full"
          style={{
            clipPath: 'polygon(2px 0px, 44px 0px, 64px 64px, 36px 64px)',
            background: `
              linear-gradient(75deg, 
                #2a0d03 0%, 
                #58200b 22%, 
                #933b18 45%, 
                #c4592d 62%, 
                #a8451f 78%, 
                #5a230f 100%
              )
            `
          }}
        >
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 3px, transparent 3px, transparent 5px)'
            }}
          />
          <div 
            className="absolute top-0 left-0 right-0 h-3.5"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 right-0 h-[15px] border-t border-amber-600/50"
            style={{
              background: 'linear-gradient(180deg, #2b140b 0%, #120703 50%, #050201 100%)'
            }}
          >
            <div className="w-full h-[1px] bg-amber-500/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * RIGHT-SIDE DETAILED NEWS CARD (MATCHING TV CABINET HEIGHT EXACTLY)
 * Hover -> stops auto; Mouse leave -> resumes auto.
 * Click card -> stops auto; Click again -> resumes auto.
 * ---------------------------------------------------------------------------
 */
function DetailedNewsCard({ 
  currentRecord, 
  currentIndex, 
  totalRecords, 
  direction,
  onPrev, 
  onNext,
  cardHeight = 480,
  isAutoActive = true,
  onToggleAuto = () => {},
  isCardHovered = false,
  setIsCardHovered = () => {},
  autoInterval = 6000
}) {
  const heightStyle = typeof cardHeight === 'number' ? `${cardHeight}px` : cardHeight;
  const scrollContainerRef = useRef(null);

  // Automatically reset scroll position to top whenever active story changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentRecord.id]);

  // Is the auto timer currently paused?
  const isCurrentlyPaused = !isAutoActive || isCardHovered;

  return (
    <div 
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      onClick={onToggleAuto}
      title={isAutoActive ? 'Auto-play is active. Click to pause auto-scroll' : 'Auto-play is paused. Click to resume auto-scroll'}
      className="w-full lg:w-[460px] xl:w-[490px] shrink-0 bg-white rounded-2xl border border-stone-200/90 shadow-[0_10px_28px_-6px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col transition-all duration-150 cursor-pointer"
      style={{
        height: heightStyle,
        maxHeight: heightStyle,
      }}
    >
      {/* 1. CARD TOP STATUS BAR */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-white flex items-center justify-between border-b border-slate-700/60 shrink-0">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isCurrentlyPaused ? 'bg-amber-400' : 'bg-red-500 animate-ping'}`} />
          <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-slate-200">
            OFFICIAL BROADCAST DISPATCH
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Auto-Play Toggle Badge: Click toggles auto on/off */}
          <div
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[10px] font-mono text-slate-300 transition-colors"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${!isCurrentlyPaused ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span>{!isCurrentlyPaused ? 'AUTO' : (isCardHovered && isAutoActive ? 'HOVER PAUSE' : 'STOPPED')}</span>
            {!isCurrentlyPaused ? (
              <Pause className="w-2.5 h-2.5 text-slate-400" />
            ) : (
              <Play className="w-2.5 h-2.5 text-emerald-400" />
            )}
          </div>

          {/* Story Index Counter */}
          <div className="flex items-center gap-1 font-mono text-[11px] font-bold bg-slate-800/90 px-2 py-0.5 rounded-full border border-slate-700 text-amber-400 shadow-inner">
            <span>{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{String(totalRecords).padStart(2, '0')}</span>
          </div>

          {/* Quick Header Navigation Arrows */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              title="Previous Story (or turn Left TV Knob)"
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              title="Next Story (or turn Right TV Knob)"
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. AUTO-PLAY PROGRESS TIMELINE BAR */}
      <div className="w-full h-[2px] bg-slate-800 overflow-hidden shrink-0">
        {!isCurrentlyPaused && (
          <motion.div
            key={currentIndex}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: autoInterval / 1000, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400"
          />
        )}
      </div>

      {/* 3. SCROLLABLE INNER BODY WITH SYNCHRONIZED ANIMATION */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto custom-scrollbar cursor-default"
        onClick={(_e) => {
          // Allow clicks on links/buttons inside body, but card clicks toggle auto
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRecord.id}
            initial={{ opacity: 0, x: direction > 0 ? -16 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? 16 : -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="p-3.5 sm:p-4 flex flex-col gap-2"
          >
            {/* CATEGORY BADGE & TIMESTAMPS */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-stone-100">
              <span className="bg-[#d9141d] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                {currentRecord.category}
              </span>

              <div className="flex items-center gap-2.5 text-[11px] text-stone-500 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-stone-400" />
                  {currentRecord.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-stone-400" />
                  {currentRecord.time}
                </span>
              </div>
            </div>

            {/* FULL HEADLINE */}
            <h2 className="text-base sm:text-[16.5px] font-black text-slate-900 leading-snug tracking-tight">
              {currentRecord.headline}
            </h2>

            {/* KEY TAKEAWAYS / BULLET POINTS */}
            {currentRecord.keyPoints && currentRecord.keyPoints.length > 0 && (
              <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-amber-900 uppercase tracking-wide mb-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                  <span>Key Advisories & Highlights</span>
                </div>
                <ul className="space-y-1 text-[10.5px] text-amber-950 font-medium">
                  {currentRecord.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1 shrink-0" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FULL IN-DEPTH STORY CONTENT */}
            <div className="space-y-1.5 text-stone-700 text-[11px] sm:text-[11.5px] leading-relaxed">
              {currentRecord.fullStory.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* ARTICLE FOOTER: SOURCE & TAGS */}
            <div className="pt-1.5 border-t border-stone-100 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[10.5px]">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified CRCCF Bulletin</span>
                </div>
                <span className="text-[10px] text-stone-500 font-mono">
                  {currentRecord.officialSource}
                </span>
              </div>

              {/* TOPIC TAGS */}
              <div className="flex flex-wrap items-center gap-1 pt-0.5">
                {currentRecord.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[9.5px] font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. QUICK INSTRUCTION HINT AT BOTTOM OF CARD */}
      <div className="bg-stone-50 px-4 py-1.5 border-t border-stone-200 text-center shrink-0">
        <span className="text-[10px] font-medium text-stone-500">
          💡 Click card to {isAutoActive ? 'stop auto' : 'resume auto'}. Hover card to pause reading.
        </span>
      </div>
    </div>
  );
}

export const Section17 = () => {
  return (
    <section
      id="section-17"
      className="w-full relative py-10 lg:py-16 select-none overflow-hidden bg-[#faf8f5] border-b border-stone-200"
    >
      {/* Background Soft Studio Ambiance */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Container */}
      <header className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-bold tracking-wider uppercase mb-2 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>CRCCF News Broadcast Network</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight font-['Montserrat',sans-serif]">
          CRCCF Live Television Broadcast
        </h2>
        
        <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-lg mx-auto">
          Official digital services, cybersecurity advisories, and public alerts broadcast live inside the vintage CRT television display with full synchronized dispatches.
        </p>
      </header>

      {/* Complete News Broadcast Component (Vintage CRT TV + Synchronized Dispatch Card) */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 overflow-visible">
        <NewsBroadcast />
      </div>
    </section>
  );
};

export { Section17 as NewsBroadcastSection };

export default Section17;
