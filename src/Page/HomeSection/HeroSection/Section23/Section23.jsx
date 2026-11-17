import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap } from 'lucide-react';
import { kindleNewsData, kindleHeaderData } from './Section23Data';

/**
 * Custom hook to safely detect real device battery status via the Battery Status API.
 */
function useBattery() {
  const [batteryState, setBatteryState] = useState({
    supported: false,
    level: null,
    charging: null,
  });

  useEffect(() => {
    let batteryInstance = null;
    let isMounted = true;

    const updateStatus = () => {
      if (!isMounted || !batteryInstance) return;
      setBatteryState({
        supported: true,
        level: Math.round(batteryInstance.level * 100),
        charging: batteryInstance.charging,
      });
    };

    async function initBattery() {
      if (typeof navigator !== 'undefined' && typeof navigator.getBattery === 'function') {
        try {
          const battery = await navigator.getBattery();
          if (!isMounted) return;
          batteryInstance = battery;

          updateStatus();
          battery.addEventListener('levelchange', updateStatus);
          battery.addEventListener('chargingchange', updateStatus);
        } catch {
          if (isMounted) {
            setBatteryState({ supported: false, level: null, charging: null });
          }
        }
      } else {
        if (isMounted) {
          setBatteryState({ supported: false, level: null, charging: null });
        }
      }
    }

    initBattery();

    return () => {
      isMounted = false;
      if (batteryInstance) {
        try {
          batteryInstance.removeEventListener('levelchange', updateStatus);
          batteryInstance.removeEventListener('chargingchange', updateStatus);
        } catch {}
      }
    };
  }, []);

  return batteryState;
}

/**
 * Custom hook for live dynamic local time and dynamic article publication dates.
 */
function useCurrentTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 10000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const formatDate = (dateObj) => {
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const getOffsetDateStr = (daysAgo = 0) => {
    const d = new Date(now);
    d.setDate(d.getDate() - daysAgo);
    return formatDate(d);
  };

  return { timeStr, getOffsetDateStr };
}

/**
 * Clean rectangular grayscale thumbnails matching the Kindle e-reader aesthetic
 */
function ArticleThumbnail({ type }) {
  if (type === 'hacker') {
    return (
      <div className="relative w-[105px] sm:w-[115px] h-[72px] sm:h-[78px] rounded bg-neutral-900 overflow-hidden flex items-center justify-center border border-neutral-700 select-none flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900 to-neutral-800" />
        <svg viewBox="0 0 140 90" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#404044" />
              <stop offset="50%" stopColor="#222327" />
              <stop offset="100%" stopColor="#0d0e11" />
            </linearGradient>
            <radialGradient id="laptopGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d="M 12 90 C 22 60 40 50 50 50 C 60 50 78 60 88 90 Z" fill="#1e2025" />
          <path d="M 32 50 C 32 24 40 12 50 12 C 60 12 68 24 68 50 C 64 54 58 56 50 56 C 42 56 36 54 32 50 Z" fill="#2b2d34" stroke="#121316" strokeWidth="1.5" />
          <ellipse cx="50" cy="36" rx="12" ry="16" fill="#08090a" />
          <polygon points="35,82 65,82 72,90 28,90" fill="#2d3036" stroke="#4a4d55" strokeWidth="0.8" />
          <polygon points="38,62 62,62 65,82 35,82" fill="#181a1f" stroke="#5d616c" strokeWidth="0.8" />
          <rect x="40" y="64" width="20" height="15" fill="#f0f2f5" opacity="0.85" />
          <circle cx="50" cy="71" r="14" fill="url(#laptopGlow)" />
        </svg>
        <div className="absolute right-2 top-2.5 w-7 h-7 border border-white/50 bg-black/70 backdrop-blur-[1px] rounded flex flex-col items-center justify-center p-0.5 shadow-md">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white stroke-[2.2]" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'padlock') {
    return (
      <div className="relative w-[105px] sm:w-[115px] h-[72px] sm:h-[78px] rounded bg-neutral-950 overflow-hidden flex items-center justify-center border border-neutral-700 select-none flex-shrink-0">
        <svg viewBox="0 0 120 80" className="w-full h-full">
          <g stroke="#555860" strokeWidth="1" fill="none" strokeLinecap="round">
            <path d="M 10 20 H 35 L 45 35" />
            <circle cx="10" cy="20" r="2" fill="#888c94" />
            <path d="M 5 40 H 30 L 40 45" />
            <circle cx="5" cy="40" r="2" fill="#888c94" />
            <path d="M 12 60 H 36 L 46 50" />
            <circle cx="12" cy="60" r="2" fill="#888c94" />
            <path d="M 110 20 H 85 L 75 35" />
            <circle cx="110" cy="20" r="2" fill="#888c94" />
            <path d="M 115 40 H 90 L 80 45" />
            <circle cx="115" cy="40" r="2" fill="#888c94" />
          </g>
          <rect x="46" y="38" width="28" height="24" rx="3" fill="#eaebee" stroke="#222" strokeWidth="1" />
          <path d="M 52 38 V 30 C 52 23 68 23 68 30 V 38" fill="none" stroke="#eaebee" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="60" cy="48" r="2.2" fill="#181a1f" />
          <polygon points="59,48 61,48 61.5,55 58.5,55" fill="#181a1f" />
        </svg>
      </div>
    );
  }

  if (type === 'fingerprint') {
    return (
      <div className="relative w-[105px] sm:w-[115px] h-[72px] sm:h-[78px] rounded bg-neutral-950 overflow-hidden flex items-center justify-center border border-neutral-700 select-none flex-shrink-0">
        <div className="absolute inset-1.5 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between">
            <span className="w-2 h-2 border-t-2 border-l-2 border-white/80" />
            <span className="w-2 h-2 border-t-2 border-r-2 border-white/80" />
          </div>
          <div className="flex justify-between">
            <span className="w-2 h-2 border-b-2 border-l-2 border-white/80" />
            <span className="w-2 h-2 border-b-2 border-r-2 border-white/80" />
          </div>
        </div>
        <svg viewBox="0 0 80 80" className="w-11 h-11 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M 40 18 C 30 18 24 26 24 38 C 24 48 28 58 35 64" />
          <path d="M 40 24 C 33 24 29 30 29 38 C 29 46 32 55 38 60" />
          <path d="M 40 30 C 36 30 34 33 34 38 C 34 44 37 51 40 55" />
          <path d="M 40 36 C 39 36 38 37 38 39 C 38 43 41 47 43 50" />
          <path d="M 45 37 C 45 42 43 46 41 51" />
          <path d="M 48 32 C 48 40 45 47 43 54" />
          <path d="M 52 28 C 53 38 49 48 46 58" />
          <path d="M 56 34 C 56 44 51 54 48 62" />
        </svg>
        <div className="absolute inset-x-2 top-1/2 h-0.5 bg-white/40 shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
      </div>
    );
  }

  if (type === 'gavel') {
    return (
      <div className="relative w-[105px] sm:w-[115px] h-[72px] sm:h-[78px] rounded bg-neutral-950 overflow-hidden flex items-center justify-center border border-neutral-700 select-none flex-shrink-0">
        <svg viewBox="0 0 120 80" className="w-full h-full">
          <defs>
            <linearGradient id="gavelWood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#75777e" />
              <stop offset="40%" stopColor="#2c2e35" />
              <stop offset="100%" stopColor="#141518" />
            </linearGradient>
            <linearGradient id="metalRing" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e4e8" />
              <stop offset="50%" stopColor="#9aa0aa" />
              <stop offset="100%" stopColor="#f0f2f6" />
            </linearGradient>
          </defs>
          <line x1="10" y1="62" x2="110" y2="62" stroke="#44474f" strokeWidth="1" opacity="0.6" />
          <ellipse cx="65" cy="65" rx="35" ry="5" fill="#08090b" opacity="0.8" />
          <ellipse cx="65" cy="64" rx="22" ry="7" fill="url(#gavelWood)" stroke="#111" strokeWidth="1" />
          <ellipse cx="65" cy="62" rx="22" ry="5" fill="#3d4049" />
          <g transform="translate(42, 28) rotate(-24)">
            <rect x="-14" y="-8" width="28" height="16" rx="3" fill="url(#gavelWood)" stroke="#1a1b1f" strokeWidth="1" />
            <rect x="-4" y="-8" width="8" height="16" fill="url(#metalRing)" />
            <path d="M 0 8 L -28 32 C -29 33 -27 35 -25 34 L 2 9 Z" fill="url(#gavelWood)" stroke="#1a1b1f" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'shield') {
    return (
      <div className="relative w-[105px] sm:w-[115px] h-[72px] sm:h-[78px] rounded bg-neutral-950 overflow-hidden flex items-center justify-center border border-neutral-700 select-none flex-shrink-0">
        <svg viewBox="0 0 100 80" className="w-12 h-12 text-zinc-200">
          <path d="M 50 10 L 80 22 V 46 C 80 62 65 72 50 76 C 35 72 20 62 20 46 V 22 Z" fill="#1e2025" stroke="#9aa0aa" strokeWidth="2.5" />
          <path d="M 50 18 L 72 27 V 46 C 72 57 61 65 50 68 C 39 65 28 57 28 46 V 27 Z" fill="#2c2e36" />
          <g transform="translate(43, 33)">
            <rect x="2" y="7" width="10" height="9" rx="1.5" fill="#f0f2f5" />
            <path d="M 4 7 V 4 C 4 2.2 10 2.2 10 4 V 7" fill="none" stroke="#f0f2f5" strokeWidth="2" />
            <circle cx="7" cy="11.5" r="1.5" fill="#181a1f" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-[105px] sm:w-[115px] h-[72px] sm:h-[78px] rounded bg-neutral-950 overflow-hidden flex items-center justify-center border border-neutral-700 select-none flex-shrink-0">
      <svg viewBox="0 0 100 80" className="w-12 h-12 text-zinc-200" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="50" cy="50" r="8" fill="#f0f2f5" stroke="none" />
        <path d="M 36 36 A 20 20 0 0 1 64 36" strokeLinecap="round" strokeWidth="2.2" />
        <path d="M 26 26 A 34 34 0 0 1 74 26" strokeLinecap="round" strokeWidth="2.2" opacity="0.8" />
        <path d="M 16 16 A 48 48 0 0 1 84 16" strokeLinecap="round" strokeWidth="2" opacity="0.5" />
        <path d="M 44 68 L 50 50 L 56 68" strokeLinecap="round" strokeWidth="2" />
        <line x1="42" y1="64" x2="58" y2="64" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

/**
 * MAIN KINDLE COMPONENT
 * Complete implementation in a single component file.
 */
function Kindle({ warmth = 8, brightness = 96 }) {
  const { supported, level, charging } = useBattery();
  const { timeStr, getOffsetDateStr } = useCurrentTime();

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-2 sm:px-4 transition-all duration-300">
      {/* 
        ========================================================================
        PAGE TOP HEADING & DESCRIPTION
        Rendered at the top of the page above the Kindle device
        ========================================================================
      */}
      <header className="text-center mb-6 sm:mb-8 max-w-xl mx-auto px-4 select-none">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight font-sans">
          {kindleHeaderData?.pageTitle || 'CR Real Time News Channel'}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-medium leading-relaxed">
          {kindleHeaderData?.pageDescription || 'Latest Cyber Crime & Cyber Safety News | Amazon Kindle E-Reader Interface'}
        </p>
      </header>

      {/* 
        ========================================================================
        KINDLE PHYSICAL CHASSIS
        Deep matte charcoal chassis, rounded corners, multi-layer metallic bezel
        ========================================================================
      */}
      <div className="relative w-full max-w-[490px] mx-auto flex items-center justify-center p-1 sm:p-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full flex flex-col items-center select-none"
          style={{
            filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.22)) drop-shadow(0 10px 20px rgba(0,0,0,0.12))',
          }}
        >
        {/* Device Body Container */}
        <div
          className="relative w-full rounded-[38px] sm:rounded-[46px] p-[15px] sm:p-[19px] pb-[34px] sm:pb-[42px] kindle-chassis-bezel border border-black/40"
          style={{
            background: 'linear-gradient(176deg, #24262c 0%, #17181c 12%, #0e0f12 88%, #08090a 100%)',
          }}
        >
          {/* Subtle Outer Bezel Rim Reflection Highlight */}
          <div className="absolute inset-0 rounded-[38px] sm:rounded-[46px] pointer-events-none border border-white/[0.08]" />
          <div className="absolute inset-[1px] rounded-[37px] sm:rounded-[45px] pointer-events-none border border-black/90" />

          {/* 
            ====================================================================
            INNER DISPLAY SCREEN (E-INK RECESSED FRAME)
            ====================================================================
          */}
          <div
            className="relative w-full rounded-[4px] sm:rounded-[6px] overflow-hidden kindle-screen-recess flex flex-col"
            style={{
              backgroundColor: `hsl(42, ${12 + warmth * 0.4}%, ${96 - (100 - brightness) * 0.1}%)`,
              height: '670px',
              boxShadow: `
                inset 0 3px 6px -1px rgba(0, 0, 0, 0.45),
                inset 0 -2px 4px -1px rgba(0, 0, 0, 0.3),
                inset 2px 0 4px -1px rgba(0, 0, 0, 0.35),
                inset -2px 0 4px -1px rgba(0, 0, 0, 0.35),
                0 0 0 1px #2a2c33
              `,
            }}
          >
            {/* Paper Texture Micro-Grain Overlay */}
            <div className="absolute inset-0 eink-grain pointer-events-none opacity-40 z-10" />

            {/* Warm Light Color Tint Overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
              style={{
                backgroundColor: 'rgba(255, 230, 180, 0.15)',
                opacity: warmth / 40,
              }}
            />

            {/* 1. TOP DEVICE STATUS BAR */}
            <div className="w-full flex items-center justify-between px-3.5 pt-1.5 pb-1 text-kindle-inkDark border-b border-kindle-divider/40 text-[11px] sm:text-xs select-none z-20">
              <div
                className="font-semibold tracking-normal text-kindle-inkDark text-xs sm:text-[13px]"
                style={{ fontFamily: 'Georgia, serif, "Amazon Ember"' }}
              >
                Kindle
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 text-kindle-inkDark">
                <div className="flex items-center" title="Wi-Fi Signal: Connected">
                  <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </div>

                <div className="flex items-center gap-1">
                  {supported && level !== null ? (
                    <>
                      <span className="font-semibold text-[10px] sm:text-[11px] tabular-nums tracking-tighter">
                        {level}%
                      </span>
                      <div
                        className="relative w-5 h-2.5 sm:w-5.5 sm:h-3 border-[1.2px] border-kindle-inkDark rounded-sm p-[1px] flex items-center"
                        title={`Device Battery: ${level}% ${charging ? '(Charging)' : ''}`}
                      >
                        <div
                          className="h-full bg-kindle-inkDark rounded-[1px] transition-all duration-500"
                          style={{ width: `${Math.max(6, Math.min(100, level))}%` }}
                        />
                        <div className="absolute -right-[2.5px] top-[2px] bottom-[2px] w-[1.5px] bg-kindle-inkDark rounded-r-[1px]" />
                        {charging && (
                          <Zap className="absolute inset-0 m-auto w-2 h-2 text-white fill-white" />
                        )}
                      </div>
                    </>
                  ) : (
                    <div
                      className="relative w-5 h-2.5 sm:w-5.5 sm:h-3 border-[1.2px] border-kindle-inkDark rounded-sm p-[1px] flex items-center"
                      title="Device Battery"
                    >
                      <div className="h-full w-3/4 bg-kindle-inkDark rounded-[1px]" />
                      <div className="absolute -right-[2.5px] top-[2px] bottom-[2px] w-[1.5px] bg-kindle-inkDark rounded-r-[1px]" />
                    </div>
                  )}
                </div>

                <span className="font-semibold tabular-nums text-[11px] sm:text-xs">
                  {timeStr}
                </span>
              </div>
            </div>

            {/* 2. FIXED MAIN HEADING & DESCRIPTION */}
            <div className="w-full px-4 pt-2.5 pb-2 bg-transparent select-none z-20">
              <h1 className="font-bold text-lg sm:text-[19px] text-kindle-inkDark tracking-tight font-sans leading-tight">
                {kindleHeaderData?.heading || 'CR Real Time News Channel'}
              </h1>
              <p className="text-[10.5px] sm:text-[11.5px] text-kindle-inkMedium font-medium leading-tight mt-0.5 font-sans">
                {kindleHeaderData?.description || 'Latest Cyber Crime & Cyber Safety News'}
              </p>
            </div>

            {/* Subtle Divider Below Heading */}
            <div className="w-full border-b border-kindle-divider/70 z-20" />

            {/* 
              3. VERTICALLY SCROLLABLE NEWS FEED CONTAINER
              - Exactly THREE complete articles visible initially (each h-1/3)
              - Articles 4, 5, 6 scroll into view naturally
              - Subtle smooth scrolling without overlap
            */}
            <div className="relative flex-1 w-full overflow-y-auto kindle-scrollbar select-none cursor-default flex flex-col">
              {kindleNewsData.map((article, idx) => {
                const dynamicDate = getOffsetDateStr(article.daysAgo);
                const isLast = idx === kindleNewsData.length - 1;

                return (
                  <div
                    key={article.id}
                    className={`w-full h-1/3 flex-shrink-0 px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-3.5 select-none cursor-default bg-transparent ${
                      !isLast ? 'border-b border-kindle-divider/70' : ''
                    }`}
                  >
                    {/* News Thumbnail */}
                    <ArticleThumbnail type={article.thumbnailType} />

                    {/* Content Column */}
                    <div className="flex flex-col flex-1 min-w-0 justify-between self-stretch py-0.5">
                      <div>
                        {/* Bold News Headline */}
                        <h2 className="font-bold text-[13px] sm:text-[14.5px] leading-tight text-kindle-inkDark line-clamp-2 font-sans tracking-tight">
                          {article.title}
                        </h2>

                        {/* Short News Description */}
                        <p className="text-[10.5px] sm:text-[11.5px] text-kindle-inkMedium line-clamp-2 leading-relaxed mt-1 font-sans">
                          {article.description}
                        </p>
                      </div>

                      {/* Category Badge & Publication Date */}
                      <div className="flex items-center gap-2.5 mt-1.5">
                        <span className="inline-block bg-[#35373d] text-white text-[9.5px] sm:text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">
                          {article.category}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-kindle-inkMedium font-semibold tabular-nums">
                          {dynamicDate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 
            ====================================================================
            BOTTOM PHYSICAL BEZEL: AUTHENTIC "kindle" EMBOSSED BRANDING
            Preserves physical manufacturer logo centered horizontally beneath screen
            with signature Amazon smile curved arrow underneath!
            ====================================================================
          */}
          <div className="w-full flex flex-col items-center justify-center pt-2.5 sm:pt-3.5 pb-0 select-none pointer-events-none">
            <div className="flex flex-col items-center justify-center">
              <span
                className="kindle-logo-font text-neutral-400 text-lg sm:text-[20px] tracking-[-0.035em] font-medium leading-none"
                style={{
                  fontFamily: 'Georgia, serif, "Amazon Ember"',
                  textShadow: '0 1px 1px rgba(0,0,0,0.9), 0 -1px 0 rgba(255,255,255,0.06)',
                  color: '#7b7e85',
                }}
              >
                kindle
              </span>

              <svg
                viewBox="0 0 100 24"
                className="w-12 sm:w-14 h-3 sm:h-3.5 mt-[-1px] text-[#7b7e85]"
                style={{
                  filter: 'drop-shadow(0 1px 0 rgba(0,0,0,0.85))',
                }}
              >
                <path
                  d="M 14 6 C 36 18 64 18 84 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <polygon
                  points="83,5 88,11 81,11"
                  fill="currentColor"
                  transform="rotate(8 84 8)"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
}

export { Kindle };

export const Section23 = () => {
  return (
    <section
      id="section-23"
      className="w-full relative py-8 sm:py-12 select-none overflow-hidden bg-[#f4f7fb] border-b border-slate-200"
    >
      <div className="w-full flex items-center justify-center">
        <Kindle />
      </div>
    </section>
  );
};

export default Section23;
