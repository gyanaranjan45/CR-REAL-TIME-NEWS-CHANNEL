import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';
import { ALL_36_CARDS } from './OurServicePageData';

/**
 * ============================================================================
 * 1. BOARD HEADER COMPONENT
 * ============================================================================
 * Top Header Strip of the Industrial Display Board
 * Replaced heading with: "CR REAL TIME NEWS CHANNEL"
 * Fully mobile responsive for iPhone SE (375px) and desktop screens
 */
export function BoardHeader() {
  return (
    <div 
      className="relative w-full overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #1c2e4f 0%, #15243e 60%, #101c32 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 2px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Subtle Satin Sheen Highlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 35%, transparent 65%)'
        }}
      />

      <div className="relative px-2 sm:px-6 md:px-8 py-2 sm:py-3.5 flex items-center justify-between gap-1.5 sm:gap-2">
        
        {/* Left Side: "CR" Badge */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          <div className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-[2px] bg-red-600 text-white font-black text-[9px] sm:text-xs tracking-wider shadow-sm border border-red-500">
            CR
          </div>
        </div>

        {/* Center: Main Heading "CR REAL TIME NEWS CHANNEL" */}
        <div className="flex-1 text-center px-1 sm:px-4 min-w-0">
          <h1 className="text-white font-black text-[10px] xs:text-xs sm:text-base md:text-lg lg:text-xl tracking-wide sm:tracking-wider font-sans uppercase drop-shadow-sm truncate">
            CR REAL TIME NEWS CHANNEL
          </h1>
        </div>

        {/* Right Side: LIVE / REAL-TIME Indicator */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="flex items-center gap-1 sm:gap-1.5 bg-red-600 text-white px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-[2px] shadow-xs border border-red-500">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[7.5px] sm:text-[11px] font-black tracking-widest uppercase font-mono">
              LIVE
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Hairline Highlight */}
      <div className="h-[1px] w-full bg-blue-900/60" />
    </div>
  );
}

/**
 * ============================================================================
 * 2. PRODUCTION CARD COMPONENT
 * ============================================================================
 * Ultra-realistic physical Kamishibai production control card.
 * Features:
 * - Mustard/golden yellow cardstock texture
 * - Clear vinyl protective sleeve pocket with top thumb notch
 * - Authentic industrial technical line layout
 * - Realistic stamps, barcodes, diagrams matching the reference image
 * - Staggered cascade animation support
 */
export function ProductionCard({ 
  card, 
  onSelect, 
  isHovered, 
  onHover,
  animationClass = '',
  animationDelay = '0ms'
}) {
  const {
    id,
    code,
    title,
    station,
    lines,
    hasMarking,
    markingType
  } = card;

  return (
    <div
      onClick={() => onSelect && onSelect(card)}
      onMouseEnter={() => onHover && onHover(id)}
      onMouseLeave={() => onHover && onHover(null)}
      className={`group relative cursor-pointer select-none transition-all duration-200 ${animationClass}`}
      style={{
        aspectRatio: '1.42 / 1',
        animationDelay: animationDelay,
        animationFillMode: 'both'
      }}
      title={`Click to inspect ${card.code}: ${card.title}`}
    >
      {/* Physical Card Pocket Sleeve Holder */}
      <div 
        className="w-full h-full rounded-[2px] relative overflow-hidden transition-all duration-200"
        style={{
          backgroundColor: '#dda72a', // Authentic industrial mustard-golden yellow
          backgroundImage: `
            linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(0, 0, 0, 0.06) 100%),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.015) 3px)
          `,
          boxShadow: isHovered 
            ? '0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15)' 
            : '0 2px 4px -1px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.45)',
          border: '1px solid #bf8a19',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {/* Top Thumb Cutout Notch (Reveals whiteboard surface behind card) */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-4.5 sm:w-6 h-1.5 sm:h-2 bg-[#f4f6f8] rounded-b-full border-b border-x border-[#c8cfd6]"
          style={{
            boxShadow: 'inset 0 1.5px 2px rgba(0,0,0,0.18)'
          }}
        />

        {/* Card Technical Lines & Grid Layout */}
        <div className="absolute inset-0 p-1 sm:p-1.5 flex flex-col justify-between pointer-events-none">
          {/* Top Section */}
          <div className="flex justify-between items-start pt-1 sm:pt-1.5 px-0.5">
            {/* Left micro-code */}
            <span className="text-[6px] sm:text-[8px] font-mono font-semibold tracking-tighter text-[#7a5912] opacity-80">
              {code}
            </span>
            {/* Right micro-step indicator */}
            <span className="text-[6px] sm:text-[7px] font-mono text-[#8a6514] opacity-75">
              5S/TPM
            </span>
          </div>

          {/* Dividing Crease / Column Lines matching reference */}
          {lines === 'vertical-split' && (
            <div className="absolute inset-y-0 left-[42%] w-[1px] bg-[#b58315] opacity-50" />
          )}
          {lines === 'vertical-left' && (
            <div className="absolute inset-y-0 left-[30%] w-[1px] bg-[#b58315] opacity-50" />
          )}
          {lines === 'vertical-right' && (
            <div className="absolute inset-y-0 right-[35%] w-[1px] bg-[#b58315] opacity-50" />
          )}
          {lines === 'horizontal-split' && (
            <>
              <div className="absolute inset-x-0 top-[45%] h-[1px] bg-[#b58315] opacity-45" />
              <div className="absolute inset-y-0 left-[55%] w-[1px] bg-[#b58315] opacity-40" />
            </>
          )}
          {lines === 'grid-subtle' && (
            <>
              <div className="absolute inset-x-0 top-[50%] h-[1px] bg-[#b58315] opacity-40" />
              <div className="absolute inset-y-0 left-[50%] w-[1px] bg-[#b58315] opacity-40" />
            </>
          )}

          {/* Authentic Industrial Dark Markings / Stamps */}
          {hasMarking && (
            <div className="absolute inset-0 flex items-center justify-center p-2 z-5">
              {markingType === 'stamp-qr' && (
                <div className="absolute top-2.5 right-2 opacity-85 rotate-[-3deg]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border border-[#2d220b] bg-[#3a2c0c]/80 p-0.5 rounded-[1px] flex flex-col justify-between shadow-xs">
                    <div className="flex justify-between">
                      <div className="w-1.5 h-1.5 bg-[#dfaa2b]" />
                      <div className="w-1.5 h-1.5 bg-[#dfaa2b]" />
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-1 h-1 bg-[#dfaa2b]" />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-1.5 h-1.5 bg-[#dfaa2b]" />
                      <div className="w-1 h-1 bg-transparent" />
                    </div>
                  </div>
                </div>
              )}

              {markingType === 'technical-diagram' && (
                <div className="absolute top-2.5 right-1.5 sm:right-2.5 opacity-80">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#281d09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <circle cx="8" cy="10" r="2" />
                    <path d="M12 12h4" />
                  </svg>
                </div>
              )}

              {markingType === 'stamp-seal' && (
                <div className="absolute top-2 right-2 opacity-75 rotate-[12deg]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-dashed border-[#2b200b] flex flex-col items-center justify-center p-0.5">
                    <span className="text-[5px] sm:text-[6px] font-extrabold uppercase tracking-tight text-[#2b200b] leading-none">PASS</span>
                    <span className="text-[4px] font-mono text-[#3d2d0f] leading-none mt-0.5">QC-04</span>
                  </div>
                </div>
              )}

              {markingType === 'audit-stamp' && (
                <div className="absolute top-2 right-2 opacity-85">
                  <div className="border border-[#2d220b] bg-[#2d220b]/10 px-1 py-0.5 rounded-[1px] flex flex-col items-center">
                    <span className="text-[6px] sm:text-[7px] font-bold text-[#2d220b] leading-tight">検 査</span>
                    <span className="text-[5px] font-mono text-[#2d220b] leading-none">OK</span>
                  </div>
                </div>
              )}

              {markingType === 'white-tag-inserted' && (
                <div className="absolute top-3 right-2 opacity-80">
                  <span className="inline-block px-1 py-0.5 bg-[#2d220b] text-[#f4d068] text-[5px] sm:text-[6px] font-mono font-bold rounded-xs tracking-wider">
                    RUN
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Bottom Card Title / Detail Strip */}
          <div className="pt-2 pb-0.5 px-0.5 z-10">
            <p className="text-[7px] sm:text-[9px] font-semibold text-[#3b2b0a] leading-tight truncate">
              {title}
            </p>
            <p className="text-[6px] sm:text-[7.5px] text-[#6b4c10] truncate font-mono mt-0.5 opacity-90">
              {station}
            </p>
          </div>
        </div>

        {/* Clear Plastic Acetate Sleeve Sheen / Reflection */}
        <div 
          className="absolute inset-0 pointer-events-none card-sleeve-glare opacity-40 group-hover:opacity-60 transition-opacity"
        />

        {/* Fine Pocket Edge Weld Line */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#9a6f14]/30 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-[2px] bg-[#9a6f14]/25 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[2px] bg-[#9a6f14]/25 pointer-events-none" />
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * 3. BOARD SURFACE COMPONENT
 * ============================================================================
 * Main Whiteboard Face
 * Houses:
 * - Top Navy Blue Header with "CR REAL TIME NEWS CHANNEL"
 * - Responsive Card Grid: 4 columns (12 cards) on mobile, 6 columns (18 cards) on desktop
 * - Next & Previous Buttons with clean "Page X of Y"
 * - Bottom Indicator Strip (Lime Green + Dark Blue)
 */
export function BoardSurface({
  cards,
  onSelectCard,
  hoveredCardId,
  setHoveredCardId,
  currentPage = 1,
  totalPages = 2,
  onNextPage,
  onPrevPage,
  isTransitioning = false,
  animationPhase = 'idle'
}) {
  return (
    <div 
      className="relative w-full rounded-[1px] overflow-hidden select-none"
      style={{
        backgroundColor: '#f6f8fa',
        backgroundImage: `
          linear-gradient(180deg, #ffffff 0%, #f3f5f8 50%, #e9edf2 100%)
        `,
        boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* 1. TOP HEADER BANNER (CR REAL TIME NEWS CHANNEL) */}
      <BoardHeader />

      {/* 2. MAIN WORKING SURFACE WITH RESPONSIVE CARDS */}
      <div className="relative px-2 sm:px-5 md:px-6 pt-2 sm:pt-2.5 pb-1">
        
        {/* Subtle Whiteboard Glare & Reflection */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.02) 100%)'
          }}
        />

        {/* 3. RESPONSIVE GRID: 4 COLUMNS ON MOBILE (12 CARDS), 6 COLUMNS ON DESKTOP (18 CARDS) */}
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 relative z-10">
          {cards.map((card, index) => {
            let animClass = '';
            if (animationPhase === 'exiting') {
              animClass = 'animate-card-exit';
            } else if (animationPhase === 'entering') {
              animClass = 'animate-card-enter';
            }

            return (
              <ProductionCard
                key={card.id}
                card={card}
                onSelect={onSelectCard}
                isHovered={hoveredCardId === card.id}
                onHover={setHoveredCardId}
                animationClass={animClass}
                animationDelay={`${index * 35}ms`}
              />
            );
          })}
        </div>

        {/* 
          =======================================================================
          4. NEXT & PREVIOUS BUTTONS (Compact & Tight against bottom)
          =======================================================================
        */}
        <div className="mt-2 pt-1 pb-0.5 flex items-center justify-between border-t border-neutral-300/70 relative z-20">
          
          {/* PREVIOUS BUTTON */}
          <button
            onClick={onPrevPage}
            disabled={isTransitioning || currentPage === 1}
            className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-[3px] font-bold font-sans tracking-wide transition-all shadow-xs ${
              currentPage === 1
                ? 'opacity-35 cursor-not-allowed bg-neutral-200 text-neutral-500 border border-neutral-300'
                : 'bg-gradient-to-b from-[#2a384f] to-[#162238] text-white hover:from-[#3b4c68] hover:to-[#1e2f4c] active:scale-95 border border-neutral-700 shadow-md cursor-pointer'
            }`}
            title="Previous Page"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="uppercase text-[9px] sm:text-[11px]">Previous</span>
          </button>

          {/* CLEAN PAGE NUMBER ONLY: "Page 1 of 2" (or "Page 1 of 3" on mobile) */}
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold font-sans tracking-wide text-neutral-800">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={onNextPage}
            disabled={isTransitioning || currentPage === totalPages}
            className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-[3px] font-bold font-sans tracking-wide transition-all shadow-xs ${
              currentPage === totalPages
                ? 'opacity-35 cursor-not-allowed bg-neutral-200 text-neutral-500 border border-neutral-300'
                : 'bg-gradient-to-b from-[#2a384f] to-[#162238] text-white hover:from-[#3b4c68] hover:to-[#1e2f4c] active:scale-95 border border-neutral-700 shadow-md cursor-pointer'
            }`}
            title="Next Page"
          >
            <span className="uppercase text-[9px] sm:text-[11px]">Next</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

        </div>

      </div>

      {/* 5. BOTTOM COLORED HORIZONTAL INDICATOR STRIP */}
      <div className="relative w-full h-1.5 sm:h-2 flex overflow-hidden">
        {/* Fluorescent Green Indicator */}
        <div 
          className="h-full bg-[#3cd070] relative z-10"
          style={{
            width: '18%',
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)'
          }}
        />
        {/* Dark Navy Blue Stripe */}
        <div 
          className="h-full bg-[#182949] flex-1 -ml-3 sm:-ml-4 relative z-5"
          style={{
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        />
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * 4. DISPLAY BOARD STAND COMPONENT
 * ============================================================================
 * Ultra-Realistic Industrial Stand & Metallic Frame Structure
 * 
 * Safe-Margin Mobile Architecture:
 * - Stand wrapper includes dedicated safe-zone margins (px-8 sm:px-12 md:px-14)
 *   so the side poles, star knobs, and cantilever feet NEVER clip or hide off-screen!
 * - Poles are flush against the board frame (zero floating gap)
 * - Continuous unbroken vertical steel poles from side clamps down to the floor
 * - Heavy-duty cantilever sled feet with thick rubber shoe pads
 * - 100% visible on iPhone SE (375px) and all screen sizes
 */
export function DisplayBoardStand({
  cards,
  onSelectCard,
  hoveredCardId,
  setHoveredCardId,
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  isTransitioning,
  transitionDirection,
  animationPhase
}) {
  return (
    <div className="relative w-full max-w-4xl mx-auto select-none py-1 sm:py-2 px-8 sm:px-12 md:px-14">
      
      {/* 
        STAND RIG CONTAINER: SHARED COORDINATE SYSTEM
        The Board is centered, and poles/clamps/feet stay 100% within safe margins!
      */}
      <div className="relative w-full">
        
        {/* 
          1. MAIN WHITEBOARD ASSEMBLY (Centered between the poles)
        */}
        <div className="relative w-full z-20">
          
          {/* OUTER ALUMINUM FRAME WITH MITERED CORNER CAPS */}
          <div 
            className="relative p-[5px] sm:p-[12px] rounded-[2px]"
            style={{
              background: 'linear-gradient(135deg, #e4e8ec 0%, #cbd4dc 30%, #9ba7b4 70%, #b8c3cd 100%)',
              boxShadow: `
                0 10px 25px -4px rgba(15, 23, 42, 0.25),
                0 4px 10px -2px rgba(15, 23, 42, 0.15),
                inset 0 1px 1px rgba(255, 255, 255, 0.9),
                inset 0 -1px 2px rgba(0, 0, 0, 0.35),
                inset 1px 0 2px rgba(255, 255, 255, 0.8),
                inset -1px 0 2px rgba(0, 0, 0, 0.35)
              `
            }}
          >
            {/* Mitered Corner Caps */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 sm:w-4.5 sm:h-4.5 rounded-tl-[2px] bg-gradient-to-br from-[#dce1e7] to-[#7f8c9b] border-r border-b border-[#606d7d]/60 z-30 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#525e6d] shadow-inner" />
            </div>
            <div className="absolute top-0 right-0 w-2.5 h-2.5 sm:w-4.5 sm:h-4.5 rounded-tr-[2px] bg-gradient-to-bl from-[#dce1e7] to-[#7f8c9b] border-l border-b border-[#606d7d]/60 z-30 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#525e6d] shadow-inner" />
            </div>
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 sm:w-4.5 sm:h-4.5 rounded-bl-[2px] bg-gradient-to-tr from-[#9aa7b5] to-[#dce1e7] border-r border-t border-[#606d7d]/60 z-30 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#525e6d] shadow-inner" />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-4.5 sm:h-4.5 rounded-br-[2px] bg-gradient-to-tl from-[#9aa7b5] to-[#dce1e7] border-l border-t border-[#606d7d]/60 z-30 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#525e6d] shadow-inner" />
            </div>

            {/* INNER WHITEBOARD SURFACE */}
            <BoardSurface 
              cards={cards}
              onSelectCard={onSelectCard}
              hoveredCardId={hoveredCardId}
              setHoveredCardId={setHoveredCardId}
              currentPage={currentPage}
              totalPages={totalPages}
              onNextPage={onNextPage}
              onPrevPage={onPrevPage}
              isTransitioning={isTransitioning}
              transitionDirection={transitionDirection}
              animationPhase={animationPhase}
            />
          </div>

          {/* SLIM HORIZONTAL ALUMINUM MARKER TRAY (Mounted on bottom frame edge) */}
          <div className="relative w-full -mt-0.5 z-25 px-3 sm:px-16">
            <div 
              className="w-full h-1.5 sm:h-2.5 rounded-b-[1px] relative flex items-center justify-between px-2"
              style={{
                background: 'linear-gradient(180deg, #cbd4dc 0%, #e2e8f0 40%, #94a3b8 85%, #475569 100%)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                borderBottom: '1px solid #334155'
              }}
            >
              <div className="absolute left-0 inset-y-0 w-1 sm:w-1.5 bg-[#1e293b] rounded-l-xs" />
              <div className="absolute right-0 inset-y-0 w-1 sm:w-1.5 bg-[#1e293b] rounded-r-xs" />

              <div className="flex items-center gap-1.5 sm:gap-2 ml-3 sm:ml-6 opacity-80">
                <div className="h-1 sm:h-1.5 w-5 sm:w-12 bg-neutral-900 rounded-full" />
                <div className="h-1 sm:h-1.5 w-5 sm:w-12 bg-blue-700 rounded-full" />
              </div>

              <div className="mr-3 sm:mr-6 h-1 sm:h-2 w-4 sm:w-8 bg-blue-950 rounded-xs border border-neutral-700" />
            </div>
          </div>

        </div>

        {/* 
          2. LOWER STAND HEIGHT SPACING (Directly beneath the board)
        */}
        <div className="relative w-full h-18 sm:h-28 md:h-32 z-10">
          
          {/* 
            HORIZONTAL METALLIC CROSSBAR
            Spans from inner face of Left Pole to inner face of Right Pole (Flush!)
          */}
          <div 
            className="absolute bottom-4 sm:bottom-7 -left-1 -right-1 h-2 sm:h-3.5 z-14 flex items-center justify-between"
            style={{
              background: 'linear-gradient(180deg, #475569 0%, #94a3b8 20%, #f1f5f9 50%, #94a3b8 80%, #334155 100%)',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
              borderTop: '1px solid #cbd5e1',
              borderBottom: '1px solid #1e293b'
            }}
          >
            {/* Left Welded Joint Sleeve against Left Pole */}
            <div className="w-2 sm:w-3.5 h-3.5 sm:h-6 bg-gradient-to-r from-neutral-800 to-neutral-600 rounded-xs -ml-1 border border-neutral-700 flex items-center justify-center shadow-xs">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-950 shadow-inner" />
            </div>
            {/* Right Welded Joint Sleeve against Right Pole */}
            <div className="w-2 sm:w-3.5 h-3.5 sm:h-6 bg-gradient-to-l from-neutral-800 to-neutral-600 rounded-xs -mr-1 border border-neutral-700 flex items-center justify-center shadow-xs">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-950 shadow-inner" />
            </div>
          </div>

          {/* Crossbar Floor Shadow */}
          <div className="absolute bottom-2.5 sm:bottom-4 left-1 right-1 h-1.5 sm:h-2 bg-black/20 blur-[2px] pointer-events-none" />

        </div>

        {/* 
          3. LEFT CONTINUOUS VERTICAL STEEL LEG (FLUSH AGAINST LEFT BOARD EDGE)
          Stays 100% visible inside the safe margin (No Clipping!)
        */}
        <div 
          className="absolute -left-2.5 sm:-left-4 top-14 sm:top-24 bottom-0 w-2.5 sm:w-4.5 z-25 flex flex-col items-center pointer-events-none"
        >
          {/* Top Push-In Tube End Cap */}
          <div className="w-full h-1.5 sm:h-2 bg-[#111827] rounded-t-xs shadow-xs border-b border-neutral-700" />

          {/* Thick, Solid Continuous Vertical Steel Tube */}
          <div 
            className="w-full flex-1 rounded-[1px] relative shadow-md"
            style={{
              background: 'linear-gradient(90deg, #475569 0%, #64748b 15%, #94a3b8 35%, #f1f5f9 50%, #94a3b8 65%, #64748b 85%, #334155 100%)',
              boxShadow: 'inset 1.5px 0 0 rgba(255,255,255,0.85), inset -1.5px 0 0 rgba(0,0,0,0.4), 2px 2px 6px rgba(0,0,0,0.25)'
            }}
          >
            {/* Mounting Clamp Bracket & Star Knob (Completely inside safe zone!) */}
            <div className="absolute top-6 sm:top-14 -left-1 sm:-left-2 w-3.5 sm:w-6.5 h-8 sm:h-14 bg-[#1e293b] rounded-l-sm border border-neutral-600 shadow-md flex flex-col items-center justify-between py-1 sm:py-1.5 pointer-events-auto">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-800 shadow-inner" />
              <div className="w-2.5 h-2.5 sm:w-5 sm:h-5 rounded-full bg-[#0a0f1d] border border-neutral-400 flex items-center justify-center shadow-md">
                <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-gradient-to-tr from-neutral-400 to-neutral-200 shadow-inner" />
              </div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-800 shadow-inner" />
            </div>
          </div>

          {/* Solid Cantilever Sled Foot at Base of Left Leg */}
          <div className="w-10 sm:w-18 flex flex-col items-center -mb-0.5">
            {/* Welded Triangular Gusset */}
            <div 
              className="w-6 sm:w-12 h-4 sm:h-8 relative -mb-1"
              style={{
                background: 'linear-gradient(135deg, #64748b 0%, #94a3b8 35%, #cbd5e1 60%, #475569 100%)',
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-full bg-white/60" />
            </div>

            {/* Heavy-Duty Solid Steel Sled Foot Base */}
            <div 
              className="w-full h-2.5 sm:h-4.5 rounded-[2px] relative flex items-center justify-between px-0.5 sm:px-1"
              style={{
                background: 'linear-gradient(180deg, #f1f5f9 0%, #cbd5e1 25%, #94a3b8 50%, #475569 80%, #1e293b 100%)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                border: '1px solid #334155'
              }}
            >
              <div className="w-1.5 sm:w-3.5 h-full bg-[#0a0f1d] rounded-l-xs border-r border-neutral-700 shadow-xs" />
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#020617] shadow-inner" />
              <div className="w-1.5 sm:w-3.5 h-full bg-[#0a0f1d] rounded-r-xs border-l border-neutral-700 shadow-xs" />
            </div>

            <div className="w-full h-1.5 sm:h-2.5 -mt-0.5 rounded-full blur-[2px] bg-black/55" />
          </div>

        </div>

        {/* 
          4. RIGHT CONTINUOUS VERTICAL STEEL LEG (FLUSH AGAINST RIGHT BOARD EDGE)
          Stays 100% visible inside the safe margin (No Clipping!)
        */}
        <div 
          className="absolute -right-2.5 sm:-right-4 top-14 sm:top-24 bottom-0 w-2.5 sm:w-4.5 z-25 flex flex-col items-center pointer-events-none"
        >
          {/* Top Push-In Tube End Cap */}
          <div className="w-full h-1.5 sm:h-2 bg-[#111827] rounded-t-xs shadow-xs border-b border-neutral-700" />

          {/* Thick, Solid Continuous Vertical Steel Tube */}
          <div 
            className="w-full flex-1 rounded-[1px] relative shadow-md"
            style={{
              background: 'linear-gradient(270deg, #475569 0%, #64748b 15%, #94a3b8 35%, #f1f5f9 50%, #94a3b8 65%, #64748b 85%, #334155 100%)',
              boxShadow: 'inset -1.5px 0 0 rgba(255,255,255,0.85), inset 1.5px 0 0 rgba(0,0,0,0.4), -2px 2px 6px rgba(0,0,0,0.25)'
            }}
          >
            {/* Mounting Clamp Bracket & Star Knob (Completely inside safe zone!) */}
            <div className="absolute top-6 sm:top-14 -right-1 sm:-right-2 w-3.5 sm:w-6.5 h-8 sm:h-14 bg-[#1e293b] rounded-r-sm border border-neutral-600 shadow-md flex flex-col items-center justify-between py-1 sm:py-1.5 pointer-events-auto">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-800 shadow-inner" />
              <div className="w-2.5 h-2.5 sm:w-5 sm:h-5 rounded-full bg-[#0a0f1d] border border-neutral-400 flex items-center justify-center shadow-md">
                <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-gradient-to-tr from-neutral-400 to-neutral-200 shadow-inner" />
              </div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-800 shadow-inner" />
            </div>
          </div>

          {/* Solid Cantilever Sled Foot at Base of Right Leg */}
          <div className="w-10 sm:w-18 flex flex-col items-center -mb-0.5">
            {/* Welded Triangular Gusset */}
            <div 
              className="w-6 sm:w-12 h-4 sm:h-8 relative -mb-1"
              style={{
                background: 'linear-gradient(225deg, #64748b 0%, #94a3b8 35%, #cbd5e1 60%, #475569 100%)',
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-full bg-white/60" />
            </div>

            {/* Heavy-Duty Solid Steel Sled Foot Base */}
            <div 
              className="w-full h-2.5 sm:h-4.5 rounded-[2px] relative flex items-center justify-between px-0.5 sm:px-1"
              style={{
                background: 'linear-gradient(180deg, #f1f5f9 0%, #cbd5e1 25%, #94a3b8 50%, #475569 80%, #1e293b 100%)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                border: '1px solid #334155'
              }}
            >
              <div className="w-1.5 sm:w-3.5 h-full bg-[#0a0f1d] rounded-l-xs border-r border-neutral-700 shadow-xs" />
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#020617] shadow-inner" />
              <div className="w-1.5 sm:w-3.5 h-full bg-[#0a0f1d] rounded-r-xs border-l border-neutral-700 shadow-xs" />
            </div>

            <div className="w-full h-1.5 sm:h-2.5 -mt-0.5 rounded-full blur-[2px] bg-black/55" />
          </div>

        </div>

      </div>

      {/* OVERALL AMBIENT FLOOR SHADOW */}
      <div className="w-[90%] h-3 sm:h-5 -mt-0.5 rounded-full blur-[6px] bg-slate-900/30 pointer-events-none mx-auto" />

    </div>
  );
}

/**
 * ============================================================================
 * 5. CARD DETAIL MODAL COMPONENT
 * ============================================================================
 */
export function CardDetailModal({ card, onClose, onToggleStatus }) {
  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg bg-neutral-100 rounded-lg shadow-2xl border border-neutral-300 overflow-hidden z-10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#182949] text-white px-5 py-3.5 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-bold text-sm sm:text-base tracking-wide uppercase">
                Kamishibai Card Detail
              </h3>
              <p className="text-[11px] text-blue-200 font-mono">
                {card.code} &bull; {card.station}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          
          {/* Physical Yellow Card Preview */}
          <div className="flex justify-center">
            <div 
              className="w-56 rounded-md p-3 relative shadow-md border border-[#c4921b]"
              style={{
                backgroundColor: '#dda72a',
                backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.05) 100%)',
              }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-neutral-100 rounded-b-full border-b border-x border-neutral-300 shadow-inner" />
              
              <div className="pt-2 flex justify-between items-start text-[#4d3608] font-mono text-[10px]">
                <span className="font-bold">{card.code}</span>
                <span>AUDIT 5S</span>
              </div>

              <div className="my-3 text-center">
                <p className="font-bold text-sm text-[#2b1f06] leading-tight">
                  {card.title}
                </p>
                <p className="text-[11px] text-[#5c4008] mt-1 font-mono">
                  {card.station}
                </p>
              </div>

              <div className="border-t border-[#b88514] pt-2 flex justify-between items-center text-[9px] text-[#4d3608]">
                <span>Freq: {card.frequency}</span>
                <span>{card.owner}</span>
              </div>
            </div>
          </div>

          {/* Card Info Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-white p-3.5 rounded-md border border-neutral-200 shadow-xs">
            <div>
              <span className="text-neutral-500 font-medium">Standard Frequency:</span>
              <p className="font-semibold text-neutral-800 mt-0.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                {card.frequency}
              </p>
            </div>
            <div>
              <span className="text-neutral-500 font-medium">Assigned Auditor:</span>
              <p className="font-semibold text-neutral-800 mt-0.5 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                {card.owner}
              </p>
            </div>
            <div>
              <span className="text-neutral-500 font-medium">Grid Coordinate:</span>
              <p className="font-mono font-semibold text-neutral-800 mt-0.5">
                Row {card.row}, Column {card.col}
              </p>
            </div>
            <div>
              <span className="text-neutral-500 font-medium">Current Status:</span>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold mt-0.5 ${
                card.status === 'passed' 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-amber-100 text-amber-800 border border-amber-300'
              }`}>
                {card.status === 'passed' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                {card.status === 'passed' ? 'Audit Verified' : 'In Progress'}
              </span>
            </div>
          </div>

          {/* Audit Verification Checkpoints */}
          <div className="bg-white p-3.5 rounded-md border border-neutral-200 shadow-xs">
            <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Standardized Work Verification Points
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-700">
              {card.checkpoints && card.checkpoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-neutral-200/80 px-5 py-3 border-t border-neutral-300 flex justify-between items-center">
          <button
            onClick={() => onToggleStatus && onToggleStatus(card.id)}
            className="px-3.5 py-1.5 text-xs font-semibold bg-white border border-neutral-300 text-neutral-800 rounded-md hover:bg-neutral-50 transition-colors shadow-xs"
          >
            Toggle Audit Status
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold bg-[#182949] text-white rounded-md hover:bg-blue-900 transition-colors shadow-xs"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}

/**
 * ============================================================================
 * 6. MAIN COMPLETE OURSERVICE COMPONENT (DEFAULT EXPORT)
 * ============================================================================
 * Full self-contained component containing:
 * - "OUR SERVICES" heading & detailed description
 * - Responsive 12 cards (mobile) / 18 cards (desktop) paging
 * - Staggered one-by-one cascade exit/enter animation
 * - Stand, whiteboard, cards, and modal
 */
export default function Ourservice({ cards = ALL_36_CARDS }) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 640
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Staggered cascade animation states
  const [animationPhase, setAnimationPhase] = useState('idle'); // 'idle' | 'exiting' | 'entering'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('next');

  // Track responsive screen size (Mobile shows 12 cards, Desktop shows 18 cards)
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      const maxPages = mobile ? 3 : 2;
      setCurrentPage(prev => Math.min(prev, maxPages));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageSize = isMobile ? 12 : 18;
  const totalPages = isMobile ? 3 : 2;

  // Active slice of cards for current page and device mode
  const currentCards = cards.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Trigger one-by-one card removal and addition animation
  const handlePageChange = (targetPage, direction) => {
    if (isTransitioning || targetPage === currentPage) return;

    setIsTransitioning(true);
    setTransitionDirection(direction);
    setAnimationPhase('exiting'); // Trigger staggered one-by-one exit

    // After cards exit cascade (~600ms), switch page and start entrance cascade
    setTimeout(() => {
      setCurrentPage(targetPage);
      setAnimationPhase('entering'); // Trigger staggered one-by-one enter

      // After new cards finish entering (~600ms), settle back to idle
      setTimeout(() => {
        setAnimationPhase('idle');
        setIsTransitioning(false);
      }, 600);

    }, 600);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1, 'next');
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1, 'prev');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#f3f4f6] px-1 sm:px-4 md:px-8 py-6 sm:py-12 select-none overflow-x-hidden">
      
      {/* Clean Factory / Studio Neutral Lighting Background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 25%, #ffffff 0%, #f3f5f8 65%, #e2e8f0 100%)'
        }}
      />

      {/* 
        =======================================================================
        TOP SECTION: OUR SERVICES HEADING & DETAILED DESCRIPTION
        =======================================================================
      */}
      <header className="max-w-3xl mx-auto text-center mb-6 sm:mb-10 px-4 relative z-20">
        
        {/* Industry Pill Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-[10px] sm:text-xs font-semibold tracking-wide uppercase mb-2.5 sm:mb-3 shadow-xs">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Industrial Visual Management Systems</span>
        </div>

        {/* Main Heading: Our Services */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight uppercase font-sans drop-shadow-xs">
          Our Services
        </h1>

        {/* Tailored Industry-Grade Description */}
        <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans">
          We specialize in the engineering and turnkey fabrication of heavy-duty industrial production display boards, Kamishibai 5S audit stations, and real-time plant-floor visual control boards. Built with high-grade extruded aluminum perimeter frames, precision tubular steel stands with reinforced angled cantilever feet, and modular information card pockets designed to streamline manufacturing workflows, ensure audit readiness, and maximize operational productivity.
        </p>

        {/* Red Brand Accent Divider */}
        <div className="w-12 sm:w-16 h-1 bg-red-600 mx-auto mt-3 sm:mt-4 rounded-full shadow-xs" />
      </header>

      {/* 
        =======================================================================
        MAIN INDUSTRIAL DISPLAY BOARD STAND SHOWCASE
        Dedicated safe margins ensure side poles, knobs, and feet are 100% visible
        =======================================================================
      */}
      <main className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center">
        <DisplayBoardStand
          cards={currentCards}
          onSelectCard={(card) => setSelectedCard(card)}
          hoveredCardId={hoveredCardId}
          setHoveredCardId={setHoveredCardId}
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
          isTransitioning={isTransitioning}
          transitionDirection={transitionDirection}
          animationPhase={animationPhase}
        />
      </main>

      {/* Optional Card Detail Inspection Modal */}
      {selectedCard && (
        <CardDetailModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
          onToggleStatus={() => {
            setSelectedCard(prev => ({
              ...prev,
              status: prev.status === 'passed' ? 'auditing' : 'passed'
            }));
          }}
        />
      )}

    </div>
  );
}

export { Ourservice, Ourservice as OurServicePage };
