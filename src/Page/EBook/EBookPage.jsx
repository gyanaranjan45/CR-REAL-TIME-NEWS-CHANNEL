import React, { useState, useEffect } from 'react';
import { allNewsCards } from './EBookPageData';

// ============================================================================
// CONSTANTS & HELPERS
// ============================================================================
const TOTAL_SPREADS = 7; // Desktop: Spread 1 = Intro + Cards 1-4; Spreads 2-7 = 48 more cards
const TOTAL_MOBILE_PAGES = 8; // Mobile: 48 cards / 6 cards per page = 8 pages

const getLeftCardsForSpread = (idx) => {
  if (idx === 0) return [];
  const start = (idx - 1) * 8 + 4;
  return allNewsCards.slice(start, start + 4);
};

const getRightCardsForSpread = (idx) => {
  if (idx === 0) return allNewsCards.slice(0, 4);
  const start = (idx - 1) * 8 + 8;
  return allNewsCards.slice(start, start + 4);
};

const getMobileCardsForPage = (pageIdx) => {
  const start = pageIdx * 6;
  return allNewsCards.slice(start, start + 6);
};

// ============================================================================
// SUB-COMPONENTS FOR FRONT COVER
// ============================================================================
function CoverBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Upper subtle pinstripes */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #1e293b 0px, #1e293b 1px, transparent 1px, transparent 12px)',
        }}
      />
      {/* Lower faint chevron pattern */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 40 L40 20 L20 0 Z' fill='%231e293b' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}

function CompanyLogo({ src = '/logo.png', alt = 'CR News Channel Logo' }) {
  return (
    <div
      className="absolute z-20 flex items-center justify-start select-none"
      style={{
        top: '4.8%',
        left: '6.5%',
      }}
    >
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-md bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-105">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain p-0.5 select-none pointer-events-none"
          onError={(e) => {
            e.currentTarget.src = '/logo.png';
          }}
        />
      </div>
    </div>
  );
}

function CircularImageFrame({
  imageSrc = '/logo.png',
  alt = 'CR News Channel Main Logo',
  ringColor = '#feee05',
  archColor = '#2260b3',
}) {
  return (
    <div
      className="absolute z-10 flex items-center justify-center select-none"
      style={{
        top: '34.21%',
        left: '50.37%',
        transform: 'translate(-50%, -50%)',
        width: '63%',
        aspectRatio: '1 / 1',
      }}
    >
      {/* 1. Outer Blue Circular Arch */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M 2.0, 100
            A 98 98 0 0 1 198.0, 100
            L 186.5, 100
            A 86.5 86.5 0 0 0 13.5, 100
            Z
          "
          fill={archColor}
        />
      </svg>

      {/* 2. Yellow Inner Circular Border */}
      <div
        className="relative flex items-center justify-center rounded-full overflow-hidden"
        style={{
          width: '87.5%',
          aspectRatio: '1 / 1',
          backgroundColor: ringColor,
          padding: '3.6%',
        }}
      >
        {/* 3. Central Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center shadow-inner">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-contain p-2 sm:p-2.5 select-none pointer-events-none transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = '/logo.png';
            }}
          />
        </div>
      </div>
    </div>
  );
}

function BlueGeometricShape({ fillColor = '#2260b3' }) {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 401 570"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="
            17,254
            61,230
            61,284
            200.5,363
            340,284
            340,230
            384,254
            384,464
            200.5,568
            17,464
          "
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

function ReportTypography({
  _company = 'CR REAL TIME NEWS CHANNEL',
  companyColor = '#feee05',
}) {
  return (
    <div
      className="absolute z-20 inset-x-0 flex items-center justify-center text-center select-none"
      style={{
        top: '66.5%',
        bottom: '19.5%',
        paddingLeft: '12%',
        paddingRight: '12%',
      }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-[340px] mx-auto">
        <h1
          className="font-black uppercase text-center tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
          style={{
            color: companyColor,
            fontSize: 'clamp(18px, 5.2cqw, 24px)',
            lineHeight: 1.15,
          }}
        >
          <span className="block whitespace-nowrap">CR REAL TIME</span>
          <span className="block whitespace-nowrap">NEWS CHANNEL</span>
        </h1>
      </div>
    </div>
  );
}

function BookDepth() {
  return (
    <>
      <div className="book-spine-crease" />
      <div className="book-sheen-overlay" />
    </>
  );
}

function FrontCoverFace({
  company = 'CR REAL TIME NEWS CHANNEL',
  logoSrc = '/logo.png',
  imageSrc = '/logo.png',
  onOpen,
}) {
  return (
    <div
      className="relative w-full h-full bg-white rounded-[3px] overflow-hidden select-none"
      style={{
        containerType: 'inline-size',
      }}
    >
      {/* Top "Click to open" Prompt Badge */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onOpen?.();
        }}
        className="absolute z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-105 active:scale-95 animate-pulse-subtle cursor-pointer"
        style={{
          top: '4.8%',
          right: '6.5%',
        }}
        title="Click to open the book"
      >
        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
          Click to open
        </span>
        <svg
          className="w-3.5 h-3.5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>

      <CoverBackground />
      <CompanyLogo src={logoSrc} alt={company} />
      <CircularImageFrame imageSrc={imageSrc} alt={company} />
      <BlueGeometricShape fillColor="#2260b3" />
      <ReportTypography company={company} companyColor="#feee05" />
      <BookDepth />
    </div>
  );
}

// ============================================================================
// DESKTOP SUB-COMPONENTS
// ============================================================================
function NewsCard({ card }) {
  if (!card) return null;

  return (
    <div className="flex-1 w-full bg-white px-3.5 py-2.5 rounded-2xl border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group overflow-hidden">
      {/* Upper Row: Icon + Title + Status Badge */}
      <div className="flex items-center justify-between gap-2.5 min-w-0">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div
            className={`w-9 h-9 rounded-xl ${card.iconBg} text-white flex items-center justify-center flex-shrink-0 text-base shadow-xs`}
          >
            {card.iconText}
          </div>
          <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight flex-1 leading-snug">
            {card.title}
          </h4>
        </div>

        <span
          className={`text-[8.5px] font-black px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap uppercase tracking-wider ${card.badgeColor}`}
        >
          {card.badge}
        </span>
      </div>

      {/* Lower Row: Full Description + "CLICK TO OPEN →" Badge */}
      <div className="flex items-center justify-between gap-3 pt-1.5 border-t border-slate-100">
        <p className="text-[10px] text-slate-600 leading-normal text-left flex-1 line-clamp-2">
          {card.description}
        </p>

        <div className="flex items-center gap-1.5 bg-blue-50 group-hover:bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200/80 flex-shrink-0 transition-colors">
          <span className="text-[8.5px] font-black tracking-wide uppercase whitespace-nowrap">
            CLICK TO OPEN
          </span>
          <div className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] leading-none font-bold shadow-xs">
            →
          </div>
        </div>
      </div>
    </div>
  );
}

function InsidePageLeft({ cards = [], spreadIndex = 0 }) {
  const isIntroPage = spreadIndex === 0;

  if (isIntroPage) {
    return (
      <div className="relative w-full h-full bg-[#fafbfc] p-5 sm:p-6 flex flex-col justify-between select-none overflow-hidden text-slate-800">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5 z-10 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block flex-shrink-0" />
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
              Official Publication
            </span>
          </div>
          <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">
            CR REAL TIME NEWS
          </span>
        </div>

        {/* Middle Content */}
        <div className="my-auto flex flex-col items-center text-center z-10 px-4 py-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md border-2 border-amber-400 mb-3 bg-white flex items-center justify-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="CR News Channel Logo"
              className="w-full h-full object-contain p-1"
            />
          </div>

          <h3 className="text-sm sm:text-base font-black tracking-tight text-slate-900 uppercase">
            CR REAL TIME NEWS CHANNEL
          </h3>

          <div className="inline-block bg-blue-50 text-blue-800 border border-blue-200/80 rounded-full px-3 py-0.5 my-2 text-[10px] sm:text-[11px] font-bold tracking-wide">
            "Safeguarding Truth, Reviewing News"
          </div>

          <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed max-w-xs mt-1">
            Dedicated to round-the-clock truthful journalism, unbiased investigative reporting, and instantaneous real-time broadcasting worldwide.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-3 w-full max-w-xs text-left">
            <div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm">
              <span className="block text-[8px] font-bold text-slate-400 uppercase">
                Network
              </span>
              <span className="text-[11px] font-bold text-slate-800">
                24/7 Live Stream
              </span>
            </div>
            <div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm">
              <span className="block text-[8px] font-bold text-slate-400 uppercase">
                Integrity
              </span>
              <span className="text-[11px] font-bold text-slate-800">
                100% Fact-Checked
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex items-center justify-between border-t border-slate-200/80 pt-2.5 z-10 text-[10px] text-slate-400 flex-shrink-0">
          <span>Transparency & Broadcast Report</span>
          <span className="font-bold text-slate-700">02</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-[#fafbfc] p-4 sm:p-4.5 flex flex-col justify-between select-none overflow-hidden text-slate-800">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2 z-10 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block flex-shrink-0" />
          <span className="text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
            Official Publication
          </span>
        </div>
        <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">
          CR REAL TIME NEWS
        </span>
      </div>

      <div className="flex-1 w-full flex flex-col justify-between gap-2.5 my-2.5 z-10">
        {cards.map((card) => (
          <NewsCard key={card.id} card={card} />
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-slate-200/80 pt-2 z-10 text-[9.5px] text-slate-400 flex-shrink-0">
        <span className="font-semibold text-slate-500 uppercase tracking-wider">
          CR REAL TIME NEWS CHANNEL
        </span>
        <span className="font-bold text-slate-700">
          PAGE {String(spreadIndex * 2 + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

function InsidePageRight({
  cards = [],
  spreadIndex = 0,
  totalSpreads = 7,
  onPrev,
  onNext,
  onClose,
  isFlipping = false,
}) {
  const isFirstSpread = spreadIndex === 0;
  const isLastSpread = spreadIndex >= totalSpreads - 1;

  return (
    <div className="relative w-full h-full bg-[#fafbfc] p-4 sm:p-4.5 flex flex-col justify-between select-none overflow-hidden text-slate-800">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div
        className="absolute top-0 bottom-0 left-0 w-4 pointer-events-none z-20"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.08) 0%, transparent 100%)',
        }}
      />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2 z-10 flex-shrink-0">
        <div className="min-w-0 flex-1 mr-2">
          <span className="text-[10px] font-black tracking-[0.2em] text-slate-700 uppercase block leading-tight">
            Broadcast Operations
          </span>
          <span className="text-[8px] font-semibold text-slate-400 tracking-wider uppercase block">
            CR Real Time Network
          </span>
        </div>
        <button
          onClick={onClose}
          disabled={isFlipping}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[9.5px] font-bold tracking-wide transition-colors cursor-pointer border border-slate-200 shadow-xs flex-shrink-0"
          title="Close book cover"
        >
          <span>✕</span>
          <span>Close Cover</span>
        </button>
      </div>

      {/* 4 Cards */}
      <div className="flex-1 w-full flex flex-col justify-between gap-2.5 my-2.5 z-10">
        {cards.map((card) => (
          <NewsCard key={card.id} card={card} />
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between border-t border-slate-200/80 pt-2 z-10 flex-shrink-0 gap-2">
        <button
          onClick={onPrev}
          disabled={isFirstSpread || isFlipping}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-[9.5px] font-bold tracking-wide transition-all flex-shrink-0 ${
            isFirstSpread
              ? 'text-slate-300 bg-slate-100/60 cursor-not-allowed border border-slate-200/40'
              : 'text-slate-700 bg-white hover:bg-blue-50 hover:text-blue-600 border border-slate-200 shadow-xs cursor-pointer active:scale-95'
          }`}
          title={isFirstSpread ? 'First spread' : 'Go to previous page spread'}
        >
          <span className="text-[10px]">‹</span>
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-slate-100/90 border border-slate-200 text-slate-700 text-[10px] font-extrabold tracking-wider flex-shrink-0">
          <span className="text-blue-600">Page {spreadIndex + 1}</span>
          <span className="text-slate-400 font-medium">of</span>
          <span>{totalSpreads}</span>
        </div>

        <button
          onClick={onNext}
          disabled={isLastSpread || isFlipping}
          className={`flex items-center gap-1 px-3.5 py-1 rounded-md text-[9.5px] font-bold tracking-wide transition-all flex-shrink-0 ${
            isLastSpread
              ? 'text-slate-300 bg-slate-100/60 cursor-not-allowed border border-slate-200/40'
              : 'text-white bg-blue-600 hover:bg-blue-700 shadow-xs cursor-pointer active:scale-95'
          }`}
          title={isLastSpread ? 'Last spread' : 'Flip to next page spread'}
        >
          <span>Next</span>
          <span className="text-[10px]">›</span>
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// MOBILE SUB-COMPONENT (6 CARDS PER PAGE, BADGE REMOVED)
// ============================================================================
function MobileCardPage({
  cards = [],
  pageIndex = 0,
  totalPages = 8,
  onPrev,
  onNext,
  onClose,
  isFlipping = false,
}) {
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex >= totalPages - 1;

  return (
    <div className="relative w-full h-full bg-[#fafbfc] p-2.5 sm:p-3 flex flex-col justify-between select-none overflow-hidden text-slate-800">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-1.5 z-10 flex-shrink-0">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block flex-shrink-0" />
            <span className="text-[9.5px] font-black tracking-[0.16em] text-slate-800 uppercase truncate">
              CR REAL TIME NEWS
            </span>
          </div>
          <span className="text-[7.5px] font-semibold text-slate-400 tracking-wider uppercase block truncate pl-3">
            Official Broadcast Cards
          </span>
        </div>

        <button
          onClick={onClose}
          disabled={isFlipping}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[8.5px] font-bold tracking-wide transition-colors cursor-pointer border border-slate-200 shadow-xs flex-shrink-0"
          title="Close book cover"
        >
          <span>✕</span>
          <span>Close</span>
        </button>
      </div>

      {/* 6 Cards (Badge removed, Title full width) */}
      <div className="flex-1 w-full flex flex-col justify-between gap-1.5 my-1.5 z-10 overflow-hidden">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-1 w-full bg-white px-2.5 py-1.5 rounded-xl border border-slate-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group"
          >
            <div className="flex items-center gap-2 min-w-0 w-full">
              <div
                className={`w-6 h-6 rounded-lg ${card.iconBg} text-white flex items-center justify-center flex-shrink-0 text-xs shadow-xs`}
              >
                {card.iconText}
              </div>
              <h4 className="text-[10px] sm:text-[11px] font-black text-slate-900 uppercase tracking-tight flex-1 leading-snug break-words">
                {card.title}
              </h4>
            </div>

            <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
              <p className="text-[8px] text-slate-600 leading-tight text-left flex-1 line-clamp-1">
                {card.description}
              </p>

              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200/80 flex-shrink-0">
                <span className="text-[7px] font-black tracking-wider uppercase whitespace-nowrap">
                  CLICK TO OPEN
                </span>
                <div className="w-3 h-3 rounded-full bg-blue-600 text-white flex items-center justify-center text-[7px] leading-none font-bold shadow-xs">
                  →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between border-t border-slate-200/80 pt-1.5 z-10 flex-shrink-0 gap-1">
        <button
          onClick={onPrev}
          disabled={isFirstPage || isFlipping}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[8.5px] font-bold tracking-wide transition-all flex-shrink-0 ${
            isFirstPage
              ? 'text-slate-300 bg-slate-100/60 cursor-not-allowed border border-slate-200/40'
              : 'text-slate-700 bg-white hover:bg-blue-50 hover:text-blue-600 border border-slate-200 shadow-xs cursor-pointer active:scale-95'
          }`}
          title={isFirstPage ? 'First page' : 'Go to previous page'}
        >
          <span className="text-[9px]">‹</span>
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-slate-100/90 border border-slate-200 text-slate-700 text-[8.5px] font-extrabold tracking-wider flex-shrink-0">
          <span className="text-blue-600">Page {pageIndex + 1}</span>
          <span className="text-slate-400 font-medium">of</span>
          <span>{totalPages}</span>
        </div>

        <button
          onClick={onNext}
          disabled={isLastPage || isFlipping}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-[8.5px] font-bold tracking-wide transition-all flex-shrink-0 ${
            isLastPage
              ? 'text-slate-300 bg-slate-100/60 cursor-not-allowed border border-slate-200/40'
              : 'text-white bg-blue-600 hover:bg-blue-700 shadow-xs cursor-pointer active:scale-95'
          }`}
          title={isLastPage ? 'Last page' : 'Flip to next page'}
        >
          <span>Next</span>
          <span className="text-[9px]">›</span>
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPLETE EBOOK COMPONENT (Includes All In-One Functionality)
// ============================================================================
export default function Ebook() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Desktop spread index (0 to 6)
  const [spreadIndex, setSpreadIndex] = useState(0);

  // Mobile single-page index (0 to 7)
  const [mobilePageIndex, setMobilePageIndex] = useState(0);

  // Viewport resize tracking
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimensions.width < 768;

  // 3D Page Turning State
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);
  const [leafAngle, setLeafAngle] = useState(0);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    if (isFlipping) return;
    setIsOpen(false);
    setTimeout(() => {
      setSpreadIndex(0);
      setMobilePageIndex(0);
    }, 1250);
  };

  const toggleBook = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  // Flip forward
  const handleNext = () => {
    if (isFlipping) return;

    if (isMobile) {
      if (mobilePageIndex >= TOTAL_MOBILE_PAGES - 1) return;
      setIsFlipping(true);
      setFlipDirection('next');
      setLeafAngle(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLeafAngle(-180);
        });
      });

      setTimeout(() => {
        setMobilePageIndex((prev) => prev + 1);
        setIsFlipping(false);
        setFlipDirection(null);
        setLeafAngle(0);
      }, 750);
    } else {
      if (spreadIndex >= TOTAL_SPREADS - 1) return;
      setIsFlipping(true);
      setFlipDirection('next');
      setLeafAngle(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLeafAngle(-180);
        });
      });

      setTimeout(() => {
        setSpreadIndex((prev) => prev + 1);
        setIsFlipping(false);
        setFlipDirection(null);
        setLeafAngle(0);
      }, 850);
    }
  };

  // Flip backward
  const handlePrev = () => {
    if (isFlipping) return;

    if (isMobile) {
      if (mobilePageIndex <= 0) return;
      setIsFlipping(true);
      setFlipDirection('prev');
      setLeafAngle(-180);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLeafAngle(0);
        });
      });

      setTimeout(() => {
        setMobilePageIndex((prev) => prev - 1);
        setIsFlipping(false);
        setFlipDirection(null);
        setLeafAngle(0);
      }, 750);
    } else {
      if (spreadIndex <= 0) return;
      setIsFlipping(true);
      setFlipDirection('prev');
      setLeafAngle(-180);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLeafAngle(0);
        });
      });

      setTimeout(() => {
        setSpreadIndex((prev) => prev - 1);
        setIsFlipping(false);
        setFlipDirection(null);
        setLeafAngle(0);
      }, 850);
    }
  };

  // Desktop Slices
  const currentLeftCards = getLeftCardsForSpread(spreadIndex);
  const currentRightCards = getRightCardsForSpread(spreadIndex);
  const nextLeftCards =
    spreadIndex < TOTAL_SPREADS - 1
      ? getLeftCardsForSpread(spreadIndex + 1)
      : [];
  const nextRightCards =
    spreadIndex < TOTAL_SPREADS - 1
      ? getRightCardsForSpread(spreadIndex + 1)
      : [];
  const prevLeftCards =
    spreadIndex > 0 ? getLeftCardsForSpread(spreadIndex - 1) : [];
  const prevRightCards =
    spreadIndex > 0 ? getRightCardsForSpread(spreadIndex - 1) : [];

  // Mobile Slices (6 cards per page)
  const currentMobileCards = getMobileCardsForPage(mobilePageIndex);
  const nextMobileCards =
    mobilePageIndex < TOTAL_MOBILE_PAGES - 1
      ? getMobileCardsForPage(mobilePageIndex + 1)
      : [];
  const prevMobileCards =
    mobilePageIndex > 0 ? getMobileCardsForPage(mobilePageIndex - 1) : [];

  // Sizing
  let pageWidth, pageHeight;
  if (!isMobile) {
    pageWidth = 420;
    pageHeight = 597;
  } else {
    pageWidth = Math.min(Math.round(windowDimensions.width * 0.9), 390);
    pageHeight = Math.round((pageWidth * 570) / 401);
  }

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-between pt-12 pb-6 sm:py-8 md:py-10 px-2 sm:px-6 overflow-x-hidden select-none">
      {/* 
        Embedded Scoped Styles transferred directly from index.css 
      */}
      <style>{`
        .book-stage-3d {
          perspective: 2600px;
          perspective-origin: center center;
        }
        .book-shadow-physical {
          box-shadow:
            22px 28px 45px -8px rgba(15, 23, 42, 0.45),
            10px 16px 24px -5px rgba(15, 23, 42, 0.28),
            2px 4px 8px -1px rgba(15, 23, 42, 0.15),
            -2px 0 6px -2px rgba(15, 23, 42, 0.08),
            0 -2px 6px -2px rgba(15, 23, 42, 0.08);
        }
        .book-spread-shadow {
          box-shadow:
            0 28px 55px -10px rgba(15, 23, 42, 0.42),
            0 14px 28px -6px rgba(15, 23, 42, 0.25),
            0 4px 10px -2px rgba(15, 23, 42, 0.15);
        }
        .book-edge-right {
          position: absolute;
          top: 3px;
          right: -8px;
          bottom: 4px;
          width: 8px;
          background: linear-gradient(
            to right,
            #cfd1d4 0%,
            #ffffff 20%,
            #e2e4e7 35%,
            #f8f9fa 50%,
            #d8dbdf 70%,
            #b8bcc2 90%,
            #8e9299 100%
          );
          border-radius: 0 2px 2px 0;
          box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.8),
                      inset -1px 0 1px rgba(0, 0, 0, 0.2);
          transform: skewY(0.4deg);
          transform-origin: top left;
          pointer-events: none;
        }
        .book-edge-bottom {
          position: absolute;
          left: 3px;
          right: 1px;
          bottom: -6px;
          height: 6px;
          background: linear-gradient(
            to bottom,
            #cfd1d4 0%,
            #ffffff 25%,
            #e1e3e6 45%,
            #f5f6f8 65%,
            #b8bcc2 85%,
            #7a7e85 100%
          );
          border-radius: 0 0 2px 2px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8),
                      inset 0 -1px 1px rgba(0, 0, 0, 0.25);
          transform: skewX(0.4deg);
          transform-origin: top left;
          pointer-events: none;
        }
        .book-spine-crease {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 22px;
          background: linear-gradient(
            to right,
            rgba(30, 35, 45, 0.16) 0%,
            rgba(30, 35, 45, 0.08) 25%,
            rgba(255, 255, 255, 0.12) 40%,
            rgba(30, 35, 45, 0.04) 65%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 40;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }
        .book-sheen-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            130deg,
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.05) 30%,
            transparent 55%,
            rgba(10, 20, 40, 0.03) 85%,
            rgba(10, 20, 40, 0.08) 100%
          );
          pointer-events: none;
          z-index: 35;
          border-radius: 3px;
        }
        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.94;
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite ease-in-out;
        }
      `}</style>

      {/* Top Header Section */}
      <header className="w-full max-w-2xl text-center mb-3 sm:mb-4 flex-shrink-0">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-2 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>CR REAL TIME NEWS • INTERACTIVE DIGITAL EDITION</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2 font-sans">
          E-Book
        </h1>

        {/* Broadcast Red Accent Line */}
        <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mb-2.5 shadow-xs" />

        <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl font-normal mx-auto">
          Explore the official CR Real Time News Channel interactive e-book, highlighting 24/7 verified broadcasting operations, investigative desks, and satellite transmission networks. Turn pages through realistic 3D flips to discover comprehensive worldwide newsroom coverage.
        </p>
      </header>

      {/* Main 3D Book Interactive Experience */}
      <main className="flex flex-col items-center justify-center w-full my-auto flex-1">
        <div className="relative flex flex-col items-center justify-center my-auto py-2 select-none w-full">
          {/* 3D Perspective Stage */}
          <div
            className="book-stage-3d relative flex items-center justify-center mx-auto"
            style={{
              width: `${pageWidth}px`,
              height: `${pageHeight}px`,
            }}
          >
            <div
              className={`relative w-full h-full ${
                isOpen ? 'book-spread-shadow' : 'book-shadow-physical'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: !isMobile && isOpen ? 'translateX(50%)' : 'translateX(0)',
                transition:
                  'transform 1.25s cubic-bezier(0.25, 1, 0.35, 1), box-shadow 1.25s ease',
              }}
            >
              {/* Base Page */}
              <div
                className={`absolute inset-0 bg-[#fafbfc] overflow-hidden ${
                  isMobile ? 'rounded-[4px]' : 'rounded-r-[4px]'
                }`}
                style={{
                  zIndex: 10,
                }}
              >
                {isMobile ? (
                  <MobileCardPage
                    cards={
                      isFlipping && flipDirection === 'next'
                        ? nextMobileCards
                        : currentMobileCards
                    }
                    pageIndex={
                      isFlipping && flipDirection === 'next'
                        ? mobilePageIndex + 1
                        : mobilePageIndex
                    }
                    totalPages={TOTAL_MOBILE_PAGES}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    onClose={handleClose}
                    isFlipping={isFlipping}
                  />
                ) : (
                  <InsidePageRight
                    cards={
                      isFlipping && flipDirection === 'next'
                        ? nextRightCards
                        : currentRightCards
                    }
                    spreadIndex={
                      isFlipping && flipDirection === 'next'
                        ? spreadIndex + 1
                        : spreadIndex
                    }
                    totalSpreads={TOTAL_SPREADS}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    onClose={handleClose}
                    isFlipping={isFlipping}
                  />
                )}

                <div className="book-edge-right" />
                <div className="book-edge-bottom" />
              </div>

              {/* Spine crease shadow (Desktop only) */}
              {!isMobile && (
                <div
                  className="absolute top-0 bottom-0 pointer-events-none transition-opacity duration-700"
                  style={{
                    left: '-8px',
                    width: '16px',
                    background:
                      'linear-gradient(to right, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.14) 48%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.14) 52%, rgba(0,0,0,0.04) 100%)',
                    opacity: isOpen ? 1 : 0,
                    zIndex: 25,
                  }}
                />
              )}

              {/* Cover Leaf */}
              <div
                onClick={isOpen ? undefined : handleOpen}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="absolute inset-0 cursor-pointer"
                style={{
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d',
                  transform: isOpen
                    ? 'rotateY(-180deg)'
                    : isHovered
                    ? 'rotateY(-6deg) translateY(-2px)'
                    : 'rotateY(0deg) translateY(0)',
                  transition: 'transform 1.25s cubic-bezier(0.25, 1, 0.35, 1)',
                  zIndex: isOpen ? (isMobile ? 5 : 15) : 35,
                  pointerEvents: isOpen ? 'none' : 'auto',
                }}
              >
                {/* Front Face of Cover */}
                <div
                  className="absolute inset-0 rounded-[3px] overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                  }}
                >
                  <FrontCoverFace onOpen={handleOpen} />
                  <div className="book-edge-right" />
                  <div className="book-edge-bottom" />
                </div>

                {/* Back Face of Cover (Left page on desktop only) */}
                {!isMobile && (
                  <div
                    className="absolute inset-0 rounded-l-[4px] overflow-hidden bg-[#fafbfc]"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <InsidePageLeft
                      cards={
                        isFlipping && flipDirection === 'prev'
                          ? prevLeftCards
                          : currentLeftCards
                      }
                      spreadIndex={
                        isFlipping && flipDirection === 'prev'
                          ? spreadIndex - 1
                          : spreadIndex
                      }
                      totalSpreads={TOTAL_SPREADS}
                    />
                  </div>
                )}

                <div
                  className="absolute inset-0 pointer-events-none rounded-[3px] transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 60%)',
                    opacity: isHovered && !isOpen ? 0.15 : 0,
                  }}
                />
              </div>

              {/* Active Turning Leaf on Mobile */}
              {isMobile && isOpen && isFlipping && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${leafAngle}deg)`,
                    transition: 'transform 750ms cubic-bezier(0.25, 1, 0.35, 1)',
                    zIndex: 60,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[4px] overflow-hidden bg-[#fafbfc] shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                    }}
                  >
                    <MobileCardPage
                      cards={
                        flipDirection === 'next'
                          ? currentMobileCards
                          : prevMobileCards
                      }
                      pageIndex={
                        flipDirection === 'next'
                          ? mobilePageIndex
                          : mobilePageIndex - 1
                      }
                      totalPages={TOTAL_MOBILE_PAGES}
                      isFlipping={true}
                    />
                  </div>

                  <div
                    className="absolute inset-0 rounded-[4px] overflow-hidden bg-[#fafbfc] shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <MobileCardPage
                      cards={
                        flipDirection === 'next'
                          ? nextMobileCards
                          : currentMobileCards
                      }
                      pageIndex={
                        flipDirection === 'next'
                          ? mobilePageIndex + 1
                          : mobilePageIndex
                      }
                      totalPages={TOTAL_MOBILE_PAGES}
                      isFlipping={true}
                    />
                  </div>
                </div>
              )}

              {/* Active Turning Leaf on Desktop */}
              {!isMobile && isOpen && isFlipping && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${leafAngle}deg)`,
                    transition: 'transform 850ms cubic-bezier(0.25, 1, 0.35, 1)',
                    zIndex: 60,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-r-[4px] overflow-hidden bg-[#fafbfc] shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                    }}
                  >
                    <InsidePageRight
                      cards={
                        flipDirection === 'next'
                          ? currentRightCards
                          : prevRightCards
                      }
                      spreadIndex={
                        flipDirection === 'next'
                          ? spreadIndex
                          : spreadIndex - 1
                      }
                      totalSpreads={TOTAL_SPREADS}
                      isFlipping={true}
                    />
                  </div>

                  <div
                    className="absolute inset-0 rounded-l-[4px] overflow-hidden bg-[#fafbfc] shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <InsidePageLeft
                      cards={
                        flipDirection === 'next'
                          ? nextLeftCards
                          : currentLeftCards
                      }
                      spreadIndex={
                        flipDirection === 'next'
                          ? spreadIndex + 1
                          : spreadIndex
                      }
                      totalSpreads={TOTAL_SPREADS}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Helper Toggle Button Below */}
          <div className="mt-2.5 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center select-none px-2">
            <button
              onClick={toggleBook}
              className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-xs hover:shadow transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{isOpen ? '📖' : '✨'}</span>
              <span>{isOpen ? 'Close Cover' : 'Flip Open Cover'}</span>
            </button>

            {isOpen && (
              <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 bg-white/80 border border-slate-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-2xs">
                {isMobile
                  ? `Mobile Page ${mobilePageIndex + 1} of ${TOTAL_MOBILE_PAGES} • 6 Cards`
                  : spreadIndex === 0
                  ? 'Spread 1 of 7 • Profile & Cards 1 - 4'
                  : `Spread ${spreadIndex + 1} of ${TOTAL_SPREADS} • Page ${spreadIndex * 2 + 1} & ${spreadIndex * 2 + 2}`}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export { Ebook, Ebook as EBookPage };
