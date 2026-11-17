import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { dispatches } from './Section01Data';
import {
  FaArrowRight,
  FaRotateLeft,
  FaCheck,
  FaRegCopy,
  FaPlay,
  FaPause,
  FaScroll,
  FaClock,
} from 'react-icons/fa6';

export const Section01 = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [writingPhase, setWritingPhase] = useState('idle'); // 'idle' | 'title' | 'body' | 'quote' | 'signature' | 'completed'
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedBody, setDisplayedBody] = useState('');
  const [displayedQuote, setDisplayedQuote] = useState('');
  const [displayedSignature, setDisplayedSignature] = useState('');
  const [copied, setCopied] = useState(false);

  // Auto-Cycle & Queue States
  const [isAutoCycle, setIsAutoCycle] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [countdownProgress, setCountdownProgress] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const [isPageFlipping, setIsPageFlipping] = useState(false);

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const paperRef = useRef(null);
  const quillRef = useRef(null);
  const cursorRef = useRef(null);
  const inkwellRef = useRef(null);

  const activeDispatch = dispatches[activeStoryIndex];
  const isWriting = writingPhase !== 'idle' && writingPhase !== 'completed';

  // --------------------------------------------------------------------------
  // 1. DOCK QUILL PEN IN VINTAGE INKWELL
  // --------------------------------------------------------------------------
  const dockQuill = (smooth = true) => {
    if (!containerRef.current || !quillRef.current || !inkwellRef.current) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const iRect = inkwellRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 640;
    const quillW = isMobile ? 64 : 80;
    const quillH = isMobile ? 85 : 106;
    const nibX = quillW * 0.0245;
    const nibY = quillH * 0.9815;

    // Center nib into mouth opening of vintage inkwell
    const targetX = iRect.left - parentRect.left + iRect.width * 0.48;
    const targetY = iRect.top - parentRect.top + iRect.height * 0.18;

    quillRef.current.style.transition = smooth ? 'all 0.75s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
    quillRef.current.style.left = `${targetX - nibX}px`;
    quillRef.current.style.top = `${targetY - nibY}px`;
  };

  // --------------------------------------------------------------------------
  // 2. SYNCHRONIZE QUILL NIB EXACTLY TO ACTIVE LETTER INSERTION POINT
  // --------------------------------------------------------------------------
  const syncQuillToCursor = (immediate = false) => {
    if (!containerRef.current || !quillRef.current) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 640;
    const quillW = isMobile ? 64 : 80;
    const quillH = isMobile ? 85 : 106;
    const nibX = quillW * 0.0245;
    const nibY = quillH * 0.9815;

    if (cursorRef.current) {
      const cRect = cursorRef.current.getBoundingClientRect();
      const targetX = cRect.left - parentRect.left;
      const targetY = cRect.bottom - parentRect.top;

      quillRef.current.style.transition = immediate
        ? 'none'
        : 'left 0.035s linear, top 0.055s ease-out';
      quillRef.current.style.left = `${targetX - nibX}px`;
      quillRef.current.style.top = `${targetY - nibY}px`;
    }
  };

  // Initial dock & window resize handler
  useLayoutEffect(() => {
    if (writingPhase === 'idle' || writingPhase === 'completed') {
      dockQuill(false);
    } else {
      syncQuillToCursor(true);
    }
  }, [writingPhase]);

  useEffect(() => {
    const handleResize = () => {
      if (writingPhase === 'idle' || writingPhase === 'completed') {
        dockQuill(false);
      } else {
        syncQuillToCursor(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [writingPhase]);

  // Synchronize after every character render
  useLayoutEffect(() => {
    if (isWriting) {
      syncQuillToCursor();
    }
  }, [displayedTitle, displayedBody, displayedQuote, displayedSignature, writingPhase]);

  // --------------------------------------------------------------------------
  // 3. SCROLL INTERSECTION OBSERVER:
  // Observes the PARCHMENT PAPER SHEET itself so user is looking directly at it!
  // --------------------------------------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasTriggered(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (paperRef.current) {
      observer.observe(paperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // --------------------------------------------------------------------------
  // 4. WRITE LETTER BY LETTER, ONE BY ONE:
  // In first line it writes the first letter of first word, then 2nd letter...
  // Line by line, all content is inked by the feather quill!
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!hasTriggered) {
      dockQuill(false);
      return;
    }

    let isCancelled = false;
    let timer = null;

    // Reset all lines to clean parchment
    setDisplayedTitle('');
    setDisplayedBody('');
    setDisplayedQuote('');
    setDisplayedSignature('');
    setWritingPhase('idle');
    dockQuill(false);

    const activeDisp = dispatches[activeStoryIndex];
    const fullTitle = activeDisp.title;
    const fullBody = activeDisp.body;
    const fullQuote = activeDisp.quoteOdia;
    const fullSignature = `✍ ${activeDisp.signatory}`;

    // Brief 350ms pause: quill leaves inkpot and flies to Line 1
    const startDelay = setTimeout(() => {
      if (isCancelled) return;

      // Phase 1: Write TITLE (Line 1 starts with first letter of first word!)
      setWritingPhase('title');
      let tIdx = 0;

      function stepTitle() {
        if (isCancelled) return;
        tIdx++;
        setDisplayedTitle(fullTitle.slice(0, tIdx));

        if (tIdx < fullTitle.length) {
          const char = fullTitle[tIdx - 1];
          const delay = (char === ',' || char === ':' || char === '—') ? 55 : 30;
          timer = setTimeout(stepTitle, delay);
        } else {
          // Title complete! Pause 220ms, glide to body line 1
          timer = setTimeout(() => {
            if (isCancelled) return;

            // Phase 2: Write BODY (Line 1 starts with first letter of first word!)
            setWritingPhase('body');
            let bIdx = 0;

            function stepBody() {
              if (isCancelled) return;
              bIdx++;
              setDisplayedBody(fullBody.slice(0, bIdx));

              if (bIdx < fullBody.length) {
                const char = fullBody[bIdx - 1];
                const delay = (char === '.' || char === ',' || char === ';') ? 48 : 22;
                timer = setTimeout(stepBody, delay);
              } else {
                // Body complete! Glide to regional Odia excerpt
                timer = setTimeout(() => {
                  if (isCancelled) return;

                  // Phase 3: Write ODIA EXCERPT QUOTE
                  setWritingPhase('quote');
                  let qIdx = 0;

                  function stepQuote() {
                    if (isCancelled) return;
                    qIdx++;
                    setDisplayedQuote(fullQuote.slice(0, qIdx));

                    if (qIdx < fullQuote.length) {
                      timer = setTimeout(stepQuote, 20);
                    } else {
                      // Quote complete! Glide to signature
                      timer = setTimeout(() => {
                        if (isCancelled) return;

                        // Phase 4: Write CURSIVE SIGNATURE
                        setWritingPhase('signature');
                        let sIdx = 0;

                        function stepSignature() {
                          if (isCancelled) return;
                          sIdx++;
                          setDisplayedSignature(fullSignature.slice(0, sIdx));

                          if (sIdx < fullSignature.length) {
                            timer = setTimeout(stepSignature, 26);
                          } else {
                            // Completed! Return gracefully to inkwell
                            timer = setTimeout(() => {
                              if (isCancelled) return;
                              setWritingPhase('completed');
                              dockQuill(true);
                            }, 250);
                          }
                        }
                        stepSignature();
                      }, 200);
                    }
                  }
                  stepQuote();
                }, 200);
              }
            }
            stepBody();
          }, 220);
        }
      }
      stepTitle();
    }, 350);

    return () => {
      isCancelled = true;
      clearTimeout(startDelay);
      if (timer) clearTimeout(timer);
    };
  }, [hasTriggered, activeStoryIndex]);

  // --------------------------------------------------------------------------
  // 5. AUTO-CYCLE TO NEXT DISPATCH WHEN WRITING IS COMPLETED
  // After writing finishes, wait a few seconds, then auto-advance to next story!
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (writingPhase !== 'completed' || !isAutoCycle) {
      setCountdownProgress(0);
      setSecondsRemaining(5);
      return;
    }

    let elapsed = 0;
    const TOTAL_MS = 5500;
    const INTERVAL_MS = 50;

    const timer = setInterval(() => {
      if (isHovered) return; // Pause countdown while reading/hovering

      elapsed += INTERVAL_MS;
      const progress = Math.min(100, (elapsed / TOTAL_MS) * 100);
      setCountdownProgress(progress);
      setSecondsRemaining(Math.max(1, Math.ceil((TOTAL_MS - elapsed) / 1000)));

      if (elapsed >= TOTAL_MS) {
        clearInterval(timer);
        setIsPageFlipping(true);
        setTimeout(() => {
          setActiveStoryIndex((curr) => (curr + 1) % dispatches.length);
          setIsPageFlipping(false);
        }, 280);
      }
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [writingPhase, isAutoCycle, isHovered, activeStoryIndex]);

  // Select dispatch manually from upcoming list
  const handleSelectDispatch = (index) => {
    if (index === activeStoryIndex) return;
    setIsPageFlipping(true);
    setTimeout(() => {
      setActiveStoryIndex(index);
      setIsPageFlipping(false);
    }, 260);
  };

  // Click on parchment paper to complete writing immediately
  const handleInstantComplete = () => {
    if (isWriting) {
      const activeDisp = dispatches[activeStoryIndex];
      setDisplayedTitle(activeDisp.title);
      setDisplayedBody(activeDisp.body);
      setDisplayedQuote(activeDisp.quoteOdia);
      setDisplayedSignature(`✍ ${activeDisp.signatory}`);
      setWritingPhase('completed');
      setTimeout(() => dockQuill(true), 50);
    }
  };

  // Re-write letter animation from beginning
  const handleReplayWriting = () => {
    setDisplayedTitle('');
    setDisplayedBody('');
    setDisplayedQuote('');
    setDisplayedSignature('');
    setWritingPhase('idle');
    dockQuill(false);
    setTimeout(() => {
      setHasTriggered(false);
      setTimeout(() => setHasTriggered(true), 50);
    }, 50);
  };

  const handleCopyText = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${activeDispatch.title}\n\n${activeDispatch.body}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="national-chronicle"
      ref={sectionRef}
      className="w-full bg-[#fbf8f3] text-slate-900 py-10 sm:py-14 lg:py-16 border-b border-stone-200 relative overflow-hidden select-none"
    >
      {/* Warm ambient studio lighting matching the light aesthetic of the website */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf6ee] via-[#f7f1e5] to-[#f2eae0] pointer-events-none" />

      {/* Subtle fine studio desk grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#96784d 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            HEADER: Section Title, Writing Status & Auto-Cycle Controls
           ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 border-b-2 border-[#caa979]/40 pb-3 sm:pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-red-100/90 border border-red-300 mb-1.5 shadow-xs">
              <span className={`w-2 h-2 rounded-full ${isWriting ? 'bg-red-600 animate-ping' : 'bg-red-600'}`} />
              <span className="text-[10px] font-black tracking-[0.2em] text-red-800 uppercase font-['Cinzel',serif]">
                THE OFFICIAL NATIONAL CHRONICLE
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 font-['Cinzel',serif] leading-tight drop-shadow-xs">
              India Spotlight: The States Gazette
            </h2>
            <p className="text-xs text-stone-600 font-serif italic mt-0.5">
              Authentic Manuscript Broadside • Inscribing Folio 0{activeStoryIndex + 1} of 0{dispatches.length}
            </p>
          </div>

          {/* Quick Writing Status & Auto-Cycle Control */}
          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto text-xs font-mono">
            {/* Auto-Cycle Toggle Button */}
            <button
              onClick={() => setIsAutoCycle(!isAutoCycle)}
              className={`px-2.5 py-1 rounded-sm border text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                isAutoCycle
                  ? 'bg-amber-100/90 text-amber-900 border-amber-400 hover:bg-amber-200/70'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
              title="Toggle automatic dispatch switching"
            >
              {isAutoCycle ? (
                <>
                  <FaPlay className="text-[8px] text-amber-700 animate-pulse" />
                  <span>Auto-Cycle: ON</span>
                </>
              ) : (
                <>
                  <FaPause className="text-[8px] text-stone-400" />
                  <span>Auto-Cycle: PAUSED</span>
                </>
              )}
            </button>

            {/* Writing / Attested Badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border text-[11px] font-bold shadow-xs ${
                isWriting
                  ? 'bg-amber-50 text-amber-900 border-amber-400 animate-pulse'
                  : 'bg-emerald-50 text-emerald-900 border-emerald-300'
              }`}
            >
              {isWriting ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping" />
                  <span>✍ PENNING IN INK...</span>
                </>
              ) : (
                <>
                  <FaCheck className="w-2.5 h-2.5 text-emerald-600" />
                  <span>✓ ATTESTED & SEALED</span>
                </>
              )}
            </span>

            <button
              onClick={handleReplayWriting}
              className="px-2.5 py-1 rounded-sm bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
              title="Re-write letter animation from first letter"
            >
              <FaRotateLeft className="w-2.5 h-2.5" />
              <span>Re-Pen</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            TWO-COLUMN DESK LAYOUT:
            LEFT: Realistic Parchment Paper Letter with Feather Quill
            RIGHT: Archival Dispatch Queue
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* ======================================================
              LEFT COLUMN: REAL PARCHMENT PAPER & FEATHER QUILL
             ====================================================== */}
          <div
            className="lg:col-span-7 xl:col-span-7 flex justify-center w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              ref={containerRef}
              className="relative w-full max-w-[760px]"
              style={{
                /* Natural soft multi-tier paper shadow onto light studio desk */
                filter:
                  'drop-shadow(0 2px 5px rgba(60,40,20,0.1)) drop-shadow(0 10px 22px rgba(50,30,10,0.13)) drop-shadow(0 24px 48px rgba(40,20,5,0.1))',
              }}
            >
              {/* Paper Relative Wrapper */}
              <div className="relative w-full">
                {/* THE REAL AUTHENTIC PARCHMENT PAPER SHEET */}
                <div
                  ref={paperRef}
                  onClick={handleInstantComplete}
                  className={`relative p-5 sm:p-7 md:p-8 cursor-default transition-all duration-500 overflow-hidden ${
                    isPageFlipping
                      ? 'opacity-40 scale-[0.98] -translate-y-1'
                      : 'opacity-100 scale-100 translate-y-0'
                  }`}
                  style={{
                    /* Rich warm ivory antique parchment paper */
                    backgroundColor: '#fefcf7',
                    backgroundImage: [
                      'repeating-linear-gradient(180deg, transparent, transparent 31px, rgba(165, 130, 85, 0.22) 32px)',
                      'radial-gradient(ellipse at 50% 25%, #ffffff 0%, #faf3e1 35%, #f5e8cf 75%, #ebd6b0 100%)',
                    ].join(', '),
                    /* Crisp antique paper edge */
                    border: '1px solid rgba(165, 120, 65, 0.5)',
                    /* Turned dog-eared corner on bottom-left */
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 52px 100%, 0 calc(100% - 52px))',
                  }}
                >
                  {/* Classical Red Margin Guide Line (Timeless hallmark of writing stationery) */}
                  <div className="absolute top-0 bottom-0 left-[38px] sm:left-[50px] w-[1.5px] bg-red-800/25 pointer-events-none" />

                  {/* Subtle Archival Watermark in Paper Center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] select-none">
                    <div className="w-56 h-56 rounded-full border-[8px] border-[#5a2e12] flex items-center justify-center font-['Cinzel',serif] text-8xl font-black text-[#5a2e12]">
                      CR
                    </div>
                  </div>

                {/* --------------------------------------------------
                    1. PARCHMENT STATIONERY MASTHEAD & WAX SEALS
                   -------------------------------------------------- */}
                <div className="pl-4 sm:pl-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b-2 border-[#caa979]/50 relative z-10 pr-20 sm:pr-32">
                  <div>
                    <div className="text-[8.5px] sm:text-[9.5px] font-bold text-[#8c673d] tracking-[0.22em] uppercase font-['Cinzel',serif]">
                      {activeDispatch.folio}
                    </div>
                    <h3 className="text-sm sm:text-lg md:text-xl font-black text-[#231209] font-['Cinzel',serif] tracking-wider mt-0.5">
                      CHRONICLE OF {activeDispatch.region.toUpperCase()}
                    </h3>
                    <div className="text-[9.5px] sm:text-xs text-[#6e4e35] font-serif italic mt-0.5">
                      {activeDispatch.date}
                    </div>
                  </div>

                  {/* Vintage Postmark Stamp & Carmine Red Wax Seal */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {/* Hand-Stamped Circular Postmark */}
                    <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full border-2 border-dashed border-[#8c2518]/60 flex flex-col items-center justify-center p-0.5 sm:p-1 transform -rotate-12 select-none pointer-events-none">
                      <span className="text-[5px] sm:text-[6px] font-black text-[#8c2518] tracking-widest uppercase font-mono">
                        GOVT. POST
                      </span>
                      <span className="text-[6px] sm:text-[7px] font-black text-[#8c2518] uppercase text-center leading-none my-0.5">
                        REALTIME
                      </span>
                      <span className="text-[4.5px] sm:text-[5.5px] text-[#8c2518] font-mono">
                        NOV '26
                      </span>
                    </div>

                    {/* Carmine Red Wax Seal */}
                    <div className="relative select-none pointer-events-none">
                      <div className="w-8.5 h-8.5 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#a82415] via-[#8c1c0f] to-[#591007] shadow-lg border border-[#d97706]/70 flex flex-col items-center justify-center text-center p-0.5 sm:p-1 animate-wax-seal">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#f59e0b]/60 flex flex-col items-center justify-center">
                          <span className="text-[5.5px] sm:text-[7px] font-black text-[#fef3c7] font-['Cinzel',serif] tracking-widest leading-none">
                            CR
                          </span>
                          <span className="text-[4px] sm:text-[4.5px] font-bold text-[#fde68a] uppercase tracking-tighter">
                            SEAL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --------------------------------------------------
                    2. INK-WRITTEN MANUSCRIPT (LETTER BY LETTER)
                    Natural writing flow directly along stationery lines
                   -------------------------------------------------- */}
                <div className="pl-4 sm:pl-7 py-3 sm:py-4 relative z-10 pr-2 sm:pr-4">

                  {/* Letterpress Filing Stamp Line */}
                  <div className="flex items-center justify-between gap-2 mb-2 pr-16 sm:pr-24">
                    <span className="text-[9px] sm:text-[9.5px] font-bold text-[#8c2518] tracking-widest uppercase font-mono">
                      [ • {activeDispatch.tag} • ]
                    </span>

                    <span className="text-[9.5px] sm:text-[10px] text-[#8c673d] font-serif italic">
                      Filed from {activeDispatch.bureau}
                    </span>
                  </div>

                  {/* GRAND HEADLINE: INK-WRITTEN LETTER BY LETTER */}
                  <div className="min-h-[46px] sm:min-h-[60px] mb-2.5 pr-14 sm:pr-20">
                    <h4 className="text-base sm:text-xl lg:text-[22px] font-black text-[#1c1007] font-['Playfair_Display',serif] leading-snug tracking-normal drop-shadow-xs">
                      {displayedTitle ? (
                        <>
                          <span>{displayedTitle}</span>
                          {writingPhase === 'title' && (
                            <span
                              ref={cursorRef}
                              className="inline-block w-[2.5px] h-[1em] bg-[#8c2518] align-baseline ml-0.5 animate-pulse"
                            />
                          )}
                        </>
                      ) : (
                        <span className="text-[#a89073]/60 italic text-sm font-serif">
                          {hasTriggered ? 'Quill dipping in ink...' : 'Scroll into view to pen dispatch...'}
                        </span>
                      )}
                    </h4>
                  </div>

                  {/* Ornamental Ink Rule Flourish */}
                  <div className="flex items-center gap-3 my-2 text-[#caa979]">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#caa979] to-transparent" />
                    <span className="font-serif text-xs">❦ &nbsp; ✦ &nbsp; ❦</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#caa979] to-transparent" />
                  </div>

                  {/* MANUSCRIPT BODY TEXT: FLOWS DIRECTLY ALONG RULED GUIDELINES! */}
                  <div className="min-h-[120px] sm:min-h-[135px] text-sm sm:text-[15.5px] text-[#28150a] font-['EB_Garamond',serif] leading-[28px] sm:leading-[32px] mb-3 pr-2">
                    {displayedBody ? (
                      <>
                        <span>{displayedBody}</span>
                        {writingPhase === 'body' && (
                          <span
                            ref={cursorRef}
                            className="inline-block w-[2px] h-[1em] bg-[#8c2518] align-baseline ml-0.5 animate-pulse"
                          />
                        )}
                      </>
                    ) : writingPhase === 'title' ? (
                      <span className="text-[#a89073]/40 italic text-xs">Awaiting heading completion...</span>
                    ) : null}
                  </div>

                  {/* REGIONAL ODIA CITATION (CLASSICAL INDENTED CALLIGRAPHY - NO WEB BOX!) */}
                  {(displayedQuote || writingPhase === 'quote' || writingPhase === 'signature' || writingPhase === 'completed') && (
                    <div className="my-3 pl-3.5 pr-1 border-l-2 border-[#8c2518]/55 italic transition-opacity duration-300">
                      <div className="text-[8px] sm:text-[8.5px] font-bold text-[#8c2518] uppercase tracking-widest font-['Cinzel',serif] mb-0.5 not-italic">
                        ❧ Regional Correspondence Excerpt:
                      </div>
                      <p className="text-xs sm:text-[14px] font-serif italic text-[#1e0f06] leading-[26px]">
                        ❝ {displayedQuote} ❞
                        {writingPhase === 'quote' && (
                          <span
                            ref={cursorRef}
                            className="inline-block w-[2px] h-[1em] bg-[#8c2518] align-baseline ml-0.5 animate-pulse"
                          />
                        )}
                      </p>
                    </div>
                  )}

                  {/* OFFICIAL ATTESTATION & CURSIVE SIGNATURE BLOCK */}
                  <div className="mt-3.5 pt-2.5 border-t border-[#caa979]/50 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <div className="text-[8px] sm:text-[8.5px] font-bold text-[#73533b] uppercase tracking-wider font-mono">
                        Official Attestation & Authorship:
                      </div>
                      <div className="text-base sm:text-xl font-serif italic text-[#8c2518] font-bold tracking-wide mt-0.5 min-h-[26px]">
                        <span>{displayedSignature}</span>
                        {writingPhase === 'signature' && (
                          <span
                            ref={cursorRef}
                            className="inline-block w-[2px] h-[1em] bg-[#8c2518] align-baseline ml-0.5 animate-pulse"
                          />
                        )}
                      </div>
                      <div className="text-[9.5px] sm:text-[10.5px] text-[#593d2b] font-serif">
                        {activeDispatch.signatoryTitle}
                      </div>
                    </div>
                  </div>

                </div>{/* End content area */}

              </div>{/* End paperRef */}

              {/* --------------------------------------------------
                  3. THE DOG-EARED FOLDED CORNER AT BOTTOM-LEFT
                  Placed on paper wrapper so it aligns with paper bottom-left
                 -------------------------------------------------- */}
              <div
                className="absolute bottom-0 left-0 w-[52px] h-[52px] pointer-events-none z-20"
                style={{
                  clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
                  background:
                    'linear-gradient(135deg, #be995c 0%, #d8bb88 35%, #ecd7ad 70%, #fff7dc 100%)',
                  filter: 'drop-shadow(-3px -3px 5px rgba(50,30,10,0.25))',
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      'linear-gradient(135deg, transparent 48%, rgba(255,255,255,0.7) 50%, rgba(100,60,20,0.2) 53%, transparent 55%)',
                  }}
                />
              </div>
            </div>{/* End Paper Relative Wrapper */}

            {/* --------------------------------------------------
                4. VINTAGE BRASS INKWELL (Top right of stationery)
               -------------------------------------------------- */}
            <div
              ref={inkwellRef}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 flex flex-col items-center select-none pointer-events-none z-30"
            >
              <div className="relative">
                <img
                  src="/assets/vintage_inkwell.png"
                  className="w-11 sm:w-14 h-auto filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                  alt="Vintage Inkwell"
                />
                {/* Dark crimson ink in well opening */}
                <div className="absolute top-[5px] left-[13px] sm:top-[6px] sm:left-[15px] w-5 h-2 sm:w-6 sm:h-2.5 rounded-full bg-[radial-gradient(ellipse_at_center,_#8c2518_0%,_#1a0f08_80%)] opacity-95" />
              </div>
              <span className="text-[7px] sm:text-[7.5px] font-bold text-[#8c673d] tracking-widest uppercase font-['Cinzel',serif] mt-0.5">
                ROYAL INK
              </span>
            </div>

            {/* --------------------------------------------------
                5. TRAVELING VINTAGE FEATHER QUILL PEN
               -------------------------------------------------- */}
            <div
              ref={quillRef}
              className={`absolute pointer-events-none z-40 w-16 h-[85px] sm:w-20 sm:h-[106px] ${
                isWriting ? 'animate-quill-scribing' : 'animate-quill-docked'
              }`}
              style={{
                transformOrigin: '2.45% 98.15%',
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src="/assets/vintage_quill_pen.png"
                  className="w-full h-full object-contain filter drop-shadow-[2px_6px_10px_rgba(66,41,24,0.35)]"
                  alt="Vintage Feather Quill Pen"
                />
                {/* Crimson ink droplet right at the sharpened nib tip */}
                <div
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#8c2518] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_#8c2518] animate-ink-drip"
                  style={{ left: '2.45%', top: '98.15%' }}
                />
              </div>
            </div>

            {/* --------------------------------------------------
                6. DESK ACTION TOOLS (BELOW PARCHMENT SHEET)
                Placed on the light writing desk below the paper!
               -------------------------------------------------- */}
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1 text-xs font-serif text-stone-600">
              <div className="flex items-center gap-1.5 italic">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600/70" />
                <span>Click paper to instantly complete ink script • Letter {activeStoryIndex + 1} of {dispatches.length}</span>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-[11px] font-serif font-bold transition-all shadow-xs cursor-pointer"
                  title="Copy letter text"
                >
                  <FaRegCopy className="text-[10px] text-amber-700" />
                  <span>{copied ? 'Copied!' : 'Copy Dispatch'}</span>
                </button>

                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#8c2518] hover:bg-[#a62c1c] text-white text-[11px] font-serif font-bold transition-all shadow-xs cursor-pointer border border-red-700">
                  <span>Examine Gazette</span>
                  <FaArrowRight className="text-[9px]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================
            RIGHT COLUMN: UPCOMING DISPATCHES ARCHIVE QUEUE
           ====================================================== */}
        <div
          className="lg:col-span-5 xl:col-span-5 flex flex-col gap-3.5 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Light Archival Panel matching light theme */}
          <div className="bg-white border-2 border-[#d9cbb5] rounded-sm p-4 sm:p-5 shadow-lg shadow-stone-900/5 relative overflow-hidden backdrop-blur-sm">

            {/* Classical decorative border corner ornaments */}
            <div className="absolute top-1.5 left-2 text-[#caa979] text-[10px] font-serif select-none">✦</div>
            <div className="absolute top-1.5 right-2 text-[#caa979] text-[10px] font-serif select-none">✦</div>
            <div className="absolute bottom-1.5 left-2 text-[#caa979] text-[10px] font-serif select-none">✦</div>
            <div className="absolute bottom-1.5 right-2 text-[#caa979] text-[10px] font-serif select-none">✦</div>

            {/* Panel Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#e5d8c3] mb-3.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#8c2518] border border-red-300 flex items-center justify-center text-white shadow-xs">
                  <FaScroll className="text-xs" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-wider uppercase font-['Cinzel',serif] leading-tight">
                    Archival Dispatch Queue
                  </h3>
                  <p className="text-[10px] text-stone-500 font-serif italic">
                    Chronicle Bureau Correspondences
                  </p>
                </div>
              </div>

              {/* Queue Position Pill */}
              <span className="px-2.5 py-0.5 rounded-sm bg-[#faf6ee] border border-[#d9cbb5] text-[10px] font-mono text-[#8c2518] font-bold">
                {activeStoryIndex + 1} / {dispatches.length} QUEUED
              </span>
            </div>

            {/* Live Countdown & Reading Indicator */}
            <div className="mb-3.5 p-2.5 rounded-sm bg-[#faf6ee] border border-[#e5d8c3] flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-stone-800 flex items-center gap-1.5">
                  {isWriting ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
                      <span className="text-amber-900 font-bold">Inscribing Current Folio...</span>
                    </>
                  ) : isAutoCycle ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span className="text-emerald-800 font-bold">
                        {isHovered ? '⏸ Paused (Reading...)' : `Next Folio in ${secondsRemaining}s`}
                      </span>
                    </>
                  ) : (
                    <span className="text-stone-500">Auto-cycle paused</span>
                  )}
                </span>

                <span className="text-[10px] text-stone-500 font-serif italic">
                  {isHovered ? 'Hover active' : 'Click card to jump'}
                </span>
              </div>

              {/* Live Progress Bar for Auto-Cycle */}
              <div className="w-full bg-[#e6dccb] h-1.5 rounded-full overflow-hidden border border-[#d9cbb5]">
                <div
                  className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 h-full transition-all duration-75 ease-linear shadow-xs"
                  style={{
                    width: writingPhase === 'completed' && isAutoCycle ? `${countdownProgress}%` : isWriting ? '45%' : '0%',
                  }}
                />
              </div>
            </div>

            {/* LIST OF DISPATCH CARDS (Active + Upcoming) */}
            <div className="flex flex-col gap-2.5">
              {dispatches.map((disp, idx) => {
                const isActive = idx === activeStoryIndex;
                const isUpNext = idx === (activeStoryIndex + 1) % dispatches.length;

                return (
                  <div
                    key={disp.id}
                    onClick={() => handleSelectDispatch(idx)}
                    className={`p-3 rounded-sm border transition-all duration-200 cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? 'bg-gradient-to-r from-[#fff9f0] via-[#fffbf6] to-[#fffdf9] border-2 border-amber-600 shadow-md shadow-amber-900/10 scale-[1.01]'
                        : 'bg-[#faf8f4] hover:bg-white border-[#e8dfd1] hover:border-amber-500/70 hover:shadow-xs'
                    }`}
                  >
                    {/* Active Indicator Accent Ribbon */}
                    {isActive && (
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700" />
                    )}

                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`px-1.5 py-0.5 rounded-xs text-[9px] font-bold tracking-wider uppercase font-['Cinzel',serif] ${
                            isActive
                              ? 'bg-[#8c2518] text-white border border-red-700'
                              : 'bg-[#f0e6d6] text-[#6d4a27] border border-[#d6c4a8]'
                          }`}
                        >
                          {disp.region}
                        </span>

                        <span className="text-[9px] text-stone-500 font-mono">
                          FOLIO 0{disp.id}
                        </span>
                      </div>

                      {/* Status Label */}
                      <div>
                        {isActive ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-amber-100 border border-amber-400 text-amber-900 text-[9.5px] font-mono font-bold animate-pulse">
                            {isWriting ? '✍ INSCRIBING NOW' : '✓ ATTESTED ON DESK'}
                          </span>
                        ) : isUpNext ? (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs bg-emerald-100 border border-emerald-400 text-emerald-800 text-[9px] font-mono font-bold">
                            UP NEXT ⏳
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono text-stone-500 flex items-center gap-1">
                            <FaClock className="text-[8px]" />
                            <span>{disp.readTime}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Headline Preview */}
                    <h4
                      className={`font-['Playfair_Display',serif] text-xs sm:text-[13px] leading-snug line-clamp-2 transition-colors ${
                        isActive
                          ? 'font-black text-slate-900'
                          : 'font-semibold text-slate-800 group-hover:text-[#8c2518]'
                      }`}
                    >
                      {disp.title}
                    </h4>

                    {/* Card Footer: Bureau & Action */}
                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#e5d8c3] text-[9.5px]">
                      <span className="text-stone-500 font-serif italic truncate max-w-[200px]">
                        {disp.bureau}
                      </span>

                      <span
                        className={`flex items-center gap-1 font-serif font-bold transition-transform group-hover:translate-x-0.5 ${
                          isActive
                            ? 'text-[#8c2518]'
                            : 'text-stone-600 group-hover:text-[#8c2518]'
                        }`}
                      >
                        <span>{isActive ? 'Active on Paper' : 'Inscribe Now'}</span>
                        <FaArrowRight className="text-[8px]" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Panel Footer Advice */}
            <div className="mt-3.5 pt-2.5 border-t border-[#e5d8c3] flex items-center justify-between text-[10px] text-stone-500 font-serif italic">
              <span>Hover pauses auto-cycle timer</span>
              <span>Realtime Chancery Feed</span>
            </div>

          </div>
        </div>

        </div>

      </div>
    </section>
  );
};

export default Section01;
export { Section01 as NationalIndiaSection };

