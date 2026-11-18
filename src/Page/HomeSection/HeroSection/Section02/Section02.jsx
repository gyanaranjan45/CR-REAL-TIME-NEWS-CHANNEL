import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NOTEBOOK_TABS_DATA, NOTEBOOK_TABS, NOTEBOOK_SPREADS } from './Section02Data';

// 1. NOTEBOOK SUBCOMPONENT
/* -------------------------------------------------------------------------
 * SUB-COMPONENT 1: Colored Arrow Index Tabs (Closed Cover)
 * ------------------------------------------------------------------------- */
function NotebookTabs({ tab, onClick }) {
  if (!tab) return null;
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      title={`Open Section ${tab.num}: ${tab.word}`}
      className="relative flex items-center h-7 sm:h-8 md:h-9 drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)] group transition-transform duration-300 hover:translate-x-1 cursor-pointer select-none"
    >
      <div
        className={`h-full w-14 sm:w-20 md:w-24 rounded-l-full ${tab.bgClass} flex items-center shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.18)] relative overflow-hidden`}
      >
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-tl-full pointer-events-none" />
      </div>

      <div
        className={`w-0 h-0 border-t-[14px] sm:border-t-[16px] md:border-t-[18px] border-b-[14px] sm:border-b-[16px] md:border-b-[18px] border-l-[12px] sm:border-l-[14px] md:border-l-[16px] border-t-transparent border-b-transparent ${tab.borderLeftClass} drop-shadow-[1px_1px_1px_rgba(0,0,0,0.12)]`}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 2: White Number Label Badges (1/ONE to 5/FIVE)
 * ------------------------------------------------------------------------- */
function NotebookNumberLabels({ tab, onClick }) {
  if (!tab) return null;
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      title={`Section ${tab.num}: ${tab.word}`}
      className="relative flex flex-col items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.14),0_1px_2px_rgba(0,0,0,0.08)] border-t border-l border-white border-b-2 border-stone-300 transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none shrink-0"
    >
      <span className={`text-base sm:text-lg md:text-xl font-black leading-none tracking-tight ${tab.textClass}`}>
        {tab.num}
      </span>
      <span className="text-[6.5px] sm:text-[7.5px] md:text-[8px] font-extrabold tracking-widest text-stone-500 uppercase mt-0.5 leading-none">
        {tab.word}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 3: Left Spiral Twin-Wire Silver Loops (15 Rings)
 * ------------------------------------------------------------------------- */
const SPIRAL_RINGS = Array.from({ length: 15 }, (_, i) => ({ id: i }));

function NotebookSpiral() {
  return (
    <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-10 z-20 pointer-events-none flex flex-col justify-between py-3.5 sm:py-5 [transform-style:preserve-3d]">
      {SPIRAL_RINGS.map((ring) => (
        <div
          key={ring.id}
          className="relative flex items-center justify-center h-3 sm:h-3.5 [transform-style:preserve-3d]"
        >
          <div className="absolute left-2.5 sm:left-3.5 w-1.5 sm:w-2 h-2.5 sm:h-3 bg-stone-900 rounded-[1px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] z-10" />
          <div className="absolute -left-1 sm:-left-1.5 w-6 sm:w-7 h-2 sm:h-2.5 rounded-full bg-gradient-to-r from-stone-400 via-slate-100 via-white to-stone-400 shadow-[0_3px_5px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.9)] border-t border-white/95 [transform:rotate(-8deg)_translateZ(12px)] flex items-center justify-center">
            <div className="w-4 sm:w-5 h-[1px] bg-white rounded-full opacity-90" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 4: Physical Paper Pad Stack & Back Cover
 * ------------------------------------------------------------------------- */
function NotebookPage() {
  return (
    <>
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#53b2bd] via-[#3d98a3] to-[#2d7d87] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-teal-900/30 pointer-events-none translate-y-1" />
      <div className="absolute inset-[2px] rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#faf8f4] via-[#f3f0ea] to-[#e7e4dc] shadow-inner border border-stone-300/80 pointer-events-none overflow-hidden translate-y-0.5">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-stone-400/30 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-l from-stone-400/25 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1 w-3 bg-gradient-to-r from-stone-300/60 to-transparent" />
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 5: Front Cover (Turquoise + 5 Colored Rows)
 * ------------------------------------------------------------------------- */
function NotebookCover({ onTabClick, onCoverClick }) {
  return (
    <div
      onClick={onCoverClick}
      title="Click to open notebook"
      className="relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#72d4df] via-[#5dc3ce] to-[#47abb8] shadow-[0_20px_40px_-15px_rgba(30,105,115,0.45)] border-t border-l border-white/50 border-r-2 border-b-2 border-teal-800/25 overflow-hidden [transform-style:preserve-3d] cursor-pointer group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-r from-teal-900/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-white/30 pointer-events-none" />

      <div className="relative h-full flex flex-col justify-center py-4 sm:py-6">
        <div className="flex flex-col justify-between h-[80%] sm:h-[78%]">
          {NOTEBOOK_TABS_DATA.map((tab) => (
            <div
              key={tab.id}
              className="flex items-center justify-end pr-3.5 sm:pr-5 md:pr-6 space-x-1.5 sm:space-x-2.5 [transform-style:preserve-3d]"
            >
              <NotebookTabs
                tab={tab}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onTabClick) onTabClick(tab.id);
                }}
              />
              <NotebookNumberLabels
                tab={tab}
                onClick={(e) => {
                  e.stopPropagation();
                  if (onTabClick) onTabClick(tab.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 6: Section Visual Illustration (Left Page Showcase)
 * ------------------------------------------------------------------------- */
function SectionVisualIllustration({ visualType }) {
  if (visualType === 'cover') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-teal-50 via-teal-100 to-cyan-200 rounded p-1.5 sm:p-2.5 flex flex-col items-center justify-center overflow-hidden border border-teal-200/60 shadow-inner">
        <div className="relative w-16 h-22 sm:w-24 sm:h-32 md:w-28 md:h-36 bg-gradient-to-br from-[#72d4df] to-[#45abb7] rounded-lg sm:rounded-xl shadow-md border-t border-l border-white/60 [transform:rotateY(-20deg)_rotateX(10deg)] flex flex-col justify-between p-1 sm:p-2">
          <div className="absolute -left-1.5 sm:-left-2 top-1.5 bottom-1.5 w-2 sm:w-3 flex flex-col justify-between">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-2.5 sm:w-3.5 h-0.5 sm:h-1 bg-gradient-to-r from-stone-200 to-stone-500 rounded-full shadow-xs" />
            ))}
          </div>
          <div className="self-end space-y-1 sm:space-y-1.5 w-8 sm:w-10 md:w-12">
            <div className="h-1 sm:h-1.5 w-full bg-[#3ca3eb] rounded-l-full" />
            <div className="h-1 sm:h-1.5 w-full bg-[#eb6134] rounded-l-full" />
            <div className="h-1 sm:h-1.5 w-full bg-[#f4c82b] rounded-l-full" />
            <div className="h-1 sm:h-1.5 w-full bg-[#43b24c] rounded-l-full" />
            <div className="h-1 sm:h-1.5 w-full bg-[#98246f] rounded-l-full" />
          </div>
          <div className="text-[6px] sm:text-[7px] md:text-[8px] font-black text-white/90 tracking-widest text-center">
            3D NOTEBOOK
          </div>
        </div>
      </div>
    );
  }

  if (visualType === 'spiral') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-slate-100 via-stone-200 to-slate-300 rounded p-1.5 sm:p-2.5 flex flex-col items-center justify-center overflow-hidden border border-stone-300 shadow-inner">
        <div className="space-y-1.5 sm:space-y-2.5 w-4/5 sm:w-3/4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-1.5 h-2.5 sm:w-2.5 sm:h-3.5 bg-stone-900 rounded-[1px] shadow-inner" />
              <div className="h-1.5 sm:h-2.5 flex-1 bg-gradient-to-b from-white via-slate-200 via-slate-400 to-slate-600 rounded-full shadow-xs border-t border-white" />
              <div className="w-1.5 h-2.5 sm:w-2.5 sm:h-3.5 bg-stone-900 rounded-[1px] shadow-inner" />
            </div>
          ))}
        </div>
        <div className="mt-1.5 sm:mt-2.5 px-1.5 py-0.5 bg-stone-800 text-stone-200 text-[6px] sm:text-[7px] md:text-[8px] font-bold tracking-wider rounded uppercase">
          TWIN-LOOP WIRE MECHANICS
        </div>
      </div>
    );
  }

  if (visualType === 'workspace') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-200 rounded p-1.5 sm:p-2.5 flex flex-col items-center justify-center overflow-hidden border border-amber-300/70 shadow-inner">
        <div className="relative flex flex-col items-center space-y-1 sm:space-y-1.5">
          <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#f4c82b] text-stone-900 font-extrabold text-[8px] sm:text-[10px] md:text-[11px] rounded shadow-xs border border-amber-400">
            SECTION 3 ACTIVE
          </div>
          <div className="w-0.5 h-1.5 sm:h-2.5 bg-amber-400" />
          <div className="flex space-x-1 sm:space-x-1.5">
            <span className="px-1 py-0.5 bg-white text-stone-700 text-[6px] sm:text-[8px] font-bold rounded shadow-xs">Flip Engine</span>
            <span className="px-1 py-0.5 bg-white text-stone-700 text-[6px] sm:text-[8px] font-bold rounded shadow-xs">Next/Prev</span>
          </div>
        </div>
        <div className="mt-1 sm:mt-2 text-[7px] sm:text-[8px] font-bold text-amber-800 tracking-wide">
          Physical Page Flip Engine
        </div>
      </div>
    );
  }

  if (visualType === 'responsive') {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-emerald-50 via-green-100 to-teal-100 rounded p-1.5 sm:p-2.5 flex flex-col items-center justify-center overflow-hidden border border-green-200 shadow-inner">
        <div className="flex items-end space-x-1 sm:space-x-1.5">
          <div className="w-10 h-8 sm:w-14 sm:h-11 bg-white rounded-t border border-green-700 flex flex-col items-center justify-center shadow-xs">
            <span className="text-[5px] sm:text-[6px] font-bold text-green-800">Desktop</span>
          </div>
          <div className="w-7 h-9 sm:w-9 sm:h-13 bg-white rounded-t border border-green-600 flex flex-col items-center justify-center shadow-xs">
            <span className="text-[5px] sm:text-[6px] font-bold text-green-700">Tablet</span>
          </div>
          <div className="w-4.5 h-7 sm:w-6 sm:h-9 bg-white rounded-t border border-green-500 flex flex-col items-center justify-center shadow-xs">
            <span className="text-[4px] sm:text-[5px] font-bold text-green-600">Mobile</span>
          </div>
        </div>
        <div className="mt-1 sm:mt-2 text-[6px] sm:text-[7px] font-bold text-green-800 uppercase tracking-wider">
          Zero-Scroll Responsive Matrix
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-fuchsia-50 via-purple-100 to-pink-100 rounded p-1.5 sm:p-2.5 flex flex-col items-center justify-center overflow-hidden border border-purple-200 shadow-inner">
      <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#98246f] to-purple-800 text-white flex flex-col items-center justify-center shadow-md border border-white">
        <span className="text-xs sm:text-sm font-black">✓</span>
        <span className="text-[5px] sm:text-[6px] font-extrabold uppercase tracking-widest text-pink-200">VERIFIED</span>
      </div>
      <div className="mt-1 text-[7px] sm:text-[8px] font-black text-purple-900 tracking-wide">
        PURE TAILWIND + FRAMER MOTION
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 7: Mobile Single Tall Page
 * ------------------------------------------------------------------------- */
function NotebookMobilePage({
  spread,
  onSelectTab,
  onPrevPage,
  onNextPage,
  onClose,
  disablePrev,
  disableNext,
}) {
  if (!spread) return null;
  const { leftPage, rightPage, tabId } = spread;
  const activeTabInfo = NOTEBOOK_TABS.find((t) => t.id === tabId) || NOTEBOOK_TABS[0];

  return (
    <div className="relative w-full h-full bg-[#fbf9f5] rounded-2xl p-3 flex flex-col justify-between shadow-[0_20px_45px_-12px_rgba(0,0,0,0.35)] [transform-style:preserve-3d] select-none border border-stone-300 overflow-visible">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_19px,#d8e6f3_20px)] [background-size:100%_20px] pointer-events-none rounded-2xl" />
      <div className="absolute top-0 bottom-0 left-7 w-[1.5px] bg-red-300/60 pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 pl-6 flex items-center justify-between pb-1.5 border-b border-stone-300/60 gap-1.5 min-w-0">
        <div className="flex items-center space-x-1.5 min-w-0 flex-1">
          <span
            className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full text-white shadow-xs shrink-0 ${activeTabInfo.bgClass}`}
          >
            {rightPage.badge.split('•')[0].trim()}
          </span>
          <span className="text-[9px] font-extrabold text-stone-800 tracking-tight leading-none truncate">
            {rightPage.title}
          </span>
        </div>

        <div className="flex items-center space-x-1.5 shrink-0">
          <span className="text-[8px] font-black text-stone-700 bg-stone-200 px-1.5 py-0.5 rounded font-mono">
            {rightPage.pageNumber}/10
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              title="Close Notebook"
              className="px-2 py-0.5 text-[8px] font-bold rounded bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors shadow-xs cursor-pointer flex items-center space-x-0.5"
            >
              <span>✕</span>
              <span>Close</span>
            </button>
          )}
        </div>
      </div>

      {/* Image Showcase */}
      <div className="relative z-10 pl-6 my-1.5 flex-1 flex flex-col min-h-0">
        <div className="relative w-full h-[145px] xs:h-[165px] bg-white p-1.5 rounded-xl border border-stone-300/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col">
          <div className="relative flex-1 w-full rounded-lg overflow-hidden min-h-0">
            <SectionVisualIllustration visualType={leftPage.visualType} />
          </div>
          <div className="pt-1 flex items-center justify-between text-[7.5px] text-stone-500">
            <span className="font-semibold text-stone-700 truncate pr-1">{leftPage.caption}</span>
            <span className="text-stone-400 font-mono shrink-0">FIG {tabId}.1</span>
          </div>
        </div>
      </div>

      {/* Content & Specs */}
      <div className="relative z-10 pl-6 my-1">
        <p className="text-[8px] font-medium text-stone-700 leading-snug mb-1.5 line-clamp-2">
          {rightPage.description}
        </p>

        <div className="grid grid-cols-2 gap-1 bg-white/85 backdrop-blur-xs p-1.5 rounded-lg border border-stone-300/60 shadow-xs">
          {rightPage.specs.map((item, idx) => (
            <div key={idx} className="flex flex-col min-w-0">
              <span className="text-[6px] font-bold uppercase tracking-wider text-stone-400 truncate">
                {item.label}
              </span>
              <span className="text-[7.5px] font-semibold text-stone-800 truncate">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="relative z-10 pl-6 pt-1.5 border-t border-stone-300/60 flex items-center justify-between gap-1">
        <button
          type="button"
          onClick={onPrevPage}
          disabled={disablePrev}
          className={`flex items-center space-x-1 px-2.5 py-1 rounded-md text-[9px] font-bold shadow-xs transition-all ${
            disablePrev
              ? 'bg-stone-200/50 text-stone-400 cursor-not-allowed'
              : 'bg-stone-200 hover:bg-stone-300 text-stone-800 active:scale-95 cursor-pointer'
          }`}
        >
          <span>←</span>
          <span>Prev</span>
        </button>

        <div className="flex items-center space-x-1.5">
          {NOTEBOOK_TABS.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => onSelectTab && onSelectTab(tab.id)}
              className={`w-2 h-2 rounded-full transition-transform cursor-pointer ${tab.bgClass} ${
                tab.id === tabId ? 'scale-125 ring-1 ring-stone-400' : 'opacity-40 hover:opacity-100'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onNextPage}
          disabled={disableNext}
          className={`flex items-center space-x-1 px-3 py-1 rounded-md text-white text-[9px] font-bold shadow-xs transition-all ${
            disableNext
              ? 'bg-stone-300 text-stone-400 cursor-not-allowed'
              : 'bg-teal-800 hover:bg-teal-700 active:scale-95 cursor-pointer'
          }`}
        >
          <span>Next</span>
          <span>→</span>
        </button>
      </div>

      <div className="absolute top-0 bottom-0 left-0 w-8 z-30 pointer-events-none">
        <NotebookSpiral />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 8: Desktop Left Page (Image Showcase)
 * ------------------------------------------------------------------------- */
function NotebookLeftPage({ spread, onSelectTab, onClose }) {
  if (!spread) return null;
  const { leftPage, tabId } = spread;
  const activeTabInfo = NOTEBOOK_TABS.find((t) => t.id === tabId) || NOTEBOOK_TABS[0];

  return (
    <div className="relative w-full h-full bg-[#fbf9f5] rounded-l-2xl sm:rounded-l-3xl p-3 sm:p-4 md:p-5 flex flex-col justify-between border-r border-stone-300 shadow-[inset_-10px_0_15px_-5px_rgba(0,0,0,0.08)] [transform-style:preserve-3d] overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-stone-200/30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-1.5 border-b border-stone-300/70 gap-1.5 min-w-0">
        <div className="min-w-0 flex-1">
          <span className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase text-stone-500 block truncate">
            {leftPage.category}
          </span>
          <div className="flex items-center space-x-1.5 mt-0.5 min-w-0">
            <span className={`w-2 h-2 rounded-full shrink-0 ${activeTabInfo.bgClass}`} />
            <span className="text-xs sm:text-sm font-extrabold text-stone-800 tracking-tight leading-none truncate">
              {leftPage.subtitle}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-[8px] sm:text-[10px] font-black text-stone-600 bg-stone-200/80 px-2 py-0.5 rounded-full font-mono">
            Page {leftPage.pageNumber} / 10
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              title="Close Notebook Cover"
              className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold rounded-md bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors shadow-xs cursor-pointer flex items-center space-x-1"
            >
              <span>✕</span>
              <span>Close</span>
            </button>
          )}
        </div>
      </div>

      {/* Framed Image Showcase */}
      <div className="relative z-10 my-2 flex-1 flex flex-col items-center justify-center min-h-0">
        <div className="relative w-full h-full max-h-[220px] sm:max-h-[260px] md:max-h-[290px] bg-white p-2 rounded-xl border border-stone-300/80 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col">
          <div className="relative flex-1 w-full rounded-lg overflow-hidden min-h-0">
            <SectionVisualIllustration visualType={leftPage.visualType} />
          </div>
          <div className="pt-1.5 flex items-center justify-between text-[8px] sm:text-[9px] text-stone-500">
            <span className="font-semibold text-stone-700 truncate pr-1">{leftPage.caption}</span>
            <span className="text-stone-400 font-mono shrink-0">PAGE {leftPage.pageNumber}</span>
          </div>
        </div>
      </div>

      {/* Footer Dots Navigator */}
      <div className="relative z-10 pt-1.5 border-t border-stone-300/60 flex items-center justify-between">
        <span className="text-[8px] sm:text-[9px] text-stone-500 font-medium">
          Section <strong>0{tabId}</strong> • Tab {activeTabInfo.word}
        </span>
        <div className="flex items-center space-x-1.5 shrink-0">
          {NOTEBOOK_TABS.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => onSelectTab && onSelectTab(tab.id)}
              title={`Jump to Section ${tab.num}`}
              className={`w-2.5 h-2.5 rounded-full transition-transform cursor-pointer ${tab.bgClass} ${
                tab.id === tabId ? 'scale-125 ring-2 ring-stone-400' : 'opacity-40 hover:opacity-100'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 9: Desktop Right Page (Content & Specs)
 * ------------------------------------------------------------------------- */
function NotebookRightPage({
  spread,
  onPrevPage,
  onNextPage,
  disablePrev,
  disableNext,
}) {
  if (!spread) return null;
  const { rightPage, tabId } = spread;
  const activeTabInfo = NOTEBOOK_TABS.find((t) => t.id === tabId) || NOTEBOOK_TABS[0];

  return (
    <div className="relative w-full h-full bg-[#faf8f3] rounded-r-2xl sm:rounded-r-3xl p-3 sm:p-4 md:p-5 flex flex-col justify-between shadow-[inset_10px_0_15px_-5px_rgba(0,0,0,0.08)] [transform-style:preserve-3d] overflow-visible select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_23px,#d8e6f3_24px)] [background-size:100%_24px] pointer-events-none rounded-r-2xl sm:rounded-r-3xl" />
      <div className="absolute top-0 bottom-0 left-5 sm:left-7 w-[2px] bg-red-300/60 pointer-events-none" />

      {/* Content Area */}
      <div className="relative z-10 pl-3.5 sm:pl-5 min-h-0">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-stone-300/40 gap-1.5 min-w-0">
          <span
            className={`text-[8px] sm:text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full text-white shadow-xs shrink-0 ${activeTabInfo.bgClass}`}
          >
            {rightPage.badge}
          </span>
          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-[8px] sm:text-[9px] font-semibold text-stone-500 hidden lg:inline">
              DATE: {rightPage.date}
            </span>
            <span className="text-[9px] sm:text-[10px] font-black text-stone-600 bg-stone-200/80 px-2 py-0.5 rounded-full font-mono">
              Page {rightPage.pageNumber} / 10
            </span>
          </div>
        </div>

        <h1 className={`text-sm sm:text-base md:text-lg font-black tracking-tight leading-tight mb-1.5 ${activeTabInfo.textClass}`}>
          {rightPage.title}
        </h1>

        <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-stone-700 leading-relaxed mb-2.5 line-clamp-3 sm:line-clamp-none">
          {rightPage.description}
        </p>

        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 bg-white/75 backdrop-blur-xs p-2 rounded-lg border border-stone-300/60 shadow-xs mb-2">
          {rightPage.specs.map((item, idx) => (
            <div key={idx} className="flex flex-col min-w-0">
              <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-stone-400 truncate">
                {item.label}
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-stone-800 truncate">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-10 pl-3.5 sm:pl-5 pt-1.5 border-t border-stone-300/60 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrevPage}
          disabled={disablePrev}
          title="Turn Page Previous"
          className={`flex items-center space-x-1 px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all shadow-xs ${
            disablePrev
              ? 'bg-stone-200/50 text-stone-400 cursor-not-allowed'
              : 'bg-stone-200 hover:bg-stone-300 text-stone-800 hover:scale-105 active:scale-95 cursor-pointer'
          }`}
        >
          <span>←</span>
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-1 text-[9px] sm:text-[10px] font-bold text-stone-600 font-mono">
          <span>Page {rightPage.pageNumber} / 10</span>
          <span className={`w-1.5 h-1.5 rounded-full ${activeTabInfo.bgClass}`} />
        </div>

        <button
          type="button"
          onClick={onNextPage}
          disabled={disableNext}
          title="Turn Page Next"
          className={`flex items-center space-x-1 px-3 sm:px-3.5 py-1 rounded-lg text-white text-[10px] sm:text-xs font-bold transition-all shadow-xs ${
            disableNext
              ? 'bg-stone-300 text-stone-400 cursor-not-allowed'
              : 'bg-teal-800 hover:bg-teal-700 hover:scale-105 active:scale-95 cursor-pointer'
          }`}
        >
          <span>Next</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * SUB-COMPONENT 10: Center Spiral Rings for Desktop Open Spread
 * ------------------------------------------------------------------------- */
const CENTER_RINGS = Array.from({ length: 14 }, (_, i) => ({ id: i }));

function NotebookCenterSpiral() {
  return (
    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 z-30 pointer-events-none flex flex-col justify-between py-4 sm:py-6 [transform-style:preserve-3d]">
      {CENTER_RINGS.map((ring) => (
        <div
          key={ring.id}
          className="relative flex items-center justify-center h-3 sm:h-3.5 [transform-style:preserve-3d]"
        >
          <div className="absolute left-1 w-1.5 sm:w-2 h-2.5 sm:h-3 bg-stone-900 rounded-[1px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] z-10" />
          <div className="absolute right-1 w-1.5 sm:w-2 h-2.5 sm:h-3 bg-stone-900 rounded-[1px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)] z-10" />
          <div className="w-7 sm:w-9 h-1.5 sm:h-2 rounded-full bg-gradient-to-b from-stone-100 via-slate-200 via-white to-slate-500 shadow-[0_2px_4px_rgba(0,0,0,0.35)] border-t border-white/95 [transform:translateZ(8px)] flex items-center justify-center">
            <div className="w-5 sm:w-7 h-[1px] bg-white rounded-full opacity-90" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================================
 * MASTER NOTEBOOK EXPORT
 * ========================================================================= */
function Notebook() {
  const [bookState, setBookState] = useState('closed');
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isPageTurning, setIsPageTurning] = useState(false);
  const [pageTurnDirection, setPageTurnDirection] = useState(null);
  const [targetSpreadIndex, setTargetSpreadIndex] = useState(null);

  const currentSpread = NOTEBOOK_SPREADS[currentSpreadIndex] || NOTEBOOK_SPREADS[0];

  const handleOpenCover = (targetIndex = 0) => {
    if (bookState !== 'closed') return;
    setCurrentSpreadIndex(targetIndex);
    setBookState('opening');
  };

  const handleCloseBook = () => {
    if (bookState === 'closed' || isPageTurning) return;
    setBookState('closing');
  };

  const handleCoverOpenComplete = () => {
    setBookState('open');
  };

  const handleCoverCloseComplete = () => {
    setBookState('closed');
    setCurrentSpreadIndex(0);
    setIsPageTurning(false);
    setPageTurnDirection(null);
    setTargetSpreadIndex(null);
  };

  const handleNextPage = () => {
    if (isPageTurning || currentSpreadIndex >= NOTEBOOK_SPREADS.length - 1) return;
    setIsPageTurning(true);
    setPageTurnDirection('next');
    setTargetSpreadIndex(currentSpreadIndex + 1);
  };

  const handlePrevPage = () => {
    if (isPageTurning || currentSpreadIndex <= 0) return;
    setIsPageTurning(true);
    setPageTurnDirection('prev');
    setTargetSpreadIndex(currentSpreadIndex - 1);
  };

  const handleSelectTab = (tabId) => {
    const tab = NOTEBOOK_TABS.find((t) => t.id === tabId);
    if (!tab) return;

    if (bookState === 'closed') {
      handleOpenCover(tab.spreadIndex);
      return;
    }

    if (isPageTurning || tab.spreadIndex === currentSpreadIndex) return;

    const direction = tab.spreadIndex > currentSpreadIndex ? 'next' : 'prev';
    setIsPageTurning(true);
    setPageTurnDirection(direction);
    setTargetSpreadIndex(tab.spreadIndex);
  };

  const handlePageTurnComplete = () => {
    if (targetSpreadIndex !== null) {
      setCurrentSpreadIndex(targetSpreadIndex);
      setTargetSpreadIndex(null);
    }
    setIsPageTurning(false);
    setPageTurnDirection(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full select-none px-2 sm:px-4 py-2">
      {/* Top Helper Control Button */}
      <div className="mb-3 z-40 flex items-center justify-center">
        <button
          type="button"
          onClick={() => (bookState === 'closed' ? handleOpenCover(0) : handleCloseBook())}
          className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white/95 hover:bg-white text-stone-800 shadow-md border border-stone-200 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs shrink-0"
        >
          <span>{bookState === 'closed' ? '📖' : '📕'}</span>
          <span>{bookState === 'closed' ? 'Click Cover to Open Notebook' : 'CLOSE NOTEBOOK'}</span>
        </button>
      </div>

      {/* Symmetrical Flat Shadow Underneath Notebook */}
      <motion.div
        animate={{
          width: bookState === 'closed' ? '65%' : '88%',
          opacity: bookState === 'closed' ? 0.25 : 0.35,
        }}
        transition={{ duration: 0.5 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 bg-black/25 blur-xl rounded-full pointer-events-none"
      />

      {/* ================= CONDITION 1: FLAT CLOSED NOTEBOOK ================= */}
      {bookState === 'closed' && (
        <motion.div
          key="closed-notebook-view"
          initial={{ rotateY: 0, rotateX: 0, rotateZ: 0 }}
          animate={{ rotateY: 0, rotateX: 0, rotateZ: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => handleOpenCover(0)}
          title="Click Cover to Open"
          className="relative h-[480px] sm:h-[520px] aspect-[5/7] max-w-[calc(100vw-2rem)] sm:max-w-[390px] cursor-pointer select-none"
        >
          <NotebookPage />
          <NotebookCover
            onTabClick={handleSelectTab}
            onCoverClick={() => handleOpenCover(0)}
          />
          <NotebookSpiral />
        </motion.div>
      )}

      {/* ================= CONDITION 2A: MOBILE OPEN VIEW ================= */}
      {bookState !== 'closed' && (
        <div className="block md:hidden w-full flex justify-center [perspective:1800px]">
          <motion.div
            key="mobile-stage-container"
            initial={{ rotateY: 0, rotateX: 0, rotateZ: 0, scale: 0.98 }}
            animate={{ rotateY: 0, rotateX: 0, rotateZ: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative h-[510px] aspect-[5/7.2] max-w-[calc(100vw-2rem)] w-full [transform-style:preserve-3d] select-none"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4eaeb9] via-[#3a96a1] to-[#2b7983] shadow-2xl pointer-events-none" />

            <NotebookMobilePage
              spread={
                isPageTurning && targetSpreadIndex !== null
                  ? NOTEBOOK_SPREADS[targetSpreadIndex]
                  : currentSpread
              }
              onSelectTab={handleSelectTab}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
              onClose={handleCloseBook}
              disablePrev={currentSpreadIndex === 0 || isPageTurning}
              disableNext={
                currentSpreadIndex === NOTEBOOK_SPREADS.length - 1 || isPageTurning
              }
            />

            {(bookState === 'opening' || bookState === 'closing') && (
              <motion.div
                key="mobile-cover-flip-vanish"
                initial={{
                  rotateY: bookState === 'opening' ? 0 : -140,
                  opacity: bookState === 'opening' ? 1 : 0,
                }}
                animate={{
                  rotateY: bookState === 'opening' ? -140 : 0,
                  opacity: bookState === 'opening' ? [1, 1, 0.5, 0] : [0, 0.5, 1, 1],
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.65, 0, 0.35, 1],
                }}
                onAnimationComplete={
                  bookState === 'opening'
                    ? handleCoverOpenComplete
                    : handleCoverCloseComplete
                }
                className="absolute inset-0 origin-left [transform-style:preserve-3d] z-30 pointer-events-none"
              >
                <div className="absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d] shadow-[-12px_0_25px_rgba(0,0,0,0.35)]">
                  <NotebookCover
                    onTabClick={() => {}}
                    onCoverClick={() => {}}
                  />
                  <NotebookSpiral />
                </div>
              </motion.div>
            )}

            {bookState === 'open' && isPageTurning && (
              <motion.div
                key={`mobile-turning-leaf-${pageTurnDirection}-${currentSpreadIndex}`}
                initial={{
                  rotateY: pageTurnDirection === 'next' ? 0 : -140,
                  opacity: pageTurnDirection === 'next' ? 1 : 0,
                }}
                animate={{
                  rotateY: pageTurnDirection === 'next' ? -140 : 0,
                  opacity: pageTurnDirection === 'next' ? [1, 1, 0.5, 0] : [0, 0.5, 1, 1],
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.65, 0, 0.35, 1],
                }}
                onAnimationComplete={handlePageTurnComplete}
                className="absolute inset-0 origin-left [transform-style:preserve-3d] z-30 pointer-events-none"
              >
                <NotebookMobilePage
                  spread={
                    pageTurnDirection === 'next'
                      ? currentSpread
                      : NOTEBOOK_SPREADS[targetSpreadIndex]
                  }
                  onSelectTab={() => {}}
                  onPrevPage={() => {}}
                  onNextPage={() => {}}
                  disablePrev={true}
                  disableNext={true}
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      {/* ================= CONDITION 2B: DESKTOP OPEN VIEW (DUAL-PAGE SPREAD) ================= */}
      {bookState !== 'closed' && (
        <div className="hidden md:block [perspective:1800px]">
          <motion.div
            key="desktop-open-view"
            initial={{ rotateY: 0, rotateX: 0, rotateZ: 0, scale: 0.98 }}
            animate={{ rotateY: 0, rotateX: 0, rotateZ: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative h-[500px] aspect-[10/7] max-w-[760px] [transform-style:preserve-3d] select-none"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4eaeb9] via-[#3a96a1] to-[#2b7983] shadow-2xl pointer-events-none">
              <div className="absolute inset-[3px] rounded-2xl bg-[#f0ede6] shadow-inner" />
            </div>

            <div className="absolute top-0 bottom-0 left-0 w-1/2 [transform-style:preserve-3d] z-10">
              <NotebookLeftPage
                spread={
                  isPageTurning && pageTurnDirection === 'prev'
                    ? NOTEBOOK_SPREADS[targetSpreadIndex]
                    : currentSpread
                }
                onSelectTab={handleSelectTab}
                onClose={handleCloseBook}
              />
            </div>

            <div className="absolute top-0 bottom-0 right-0 w-1/2 [transform-style:preserve-3d] z-10">
              <NotebookRightPage
                spread={
                  isPageTurning && pageTurnDirection === 'next'
                    ? NOTEBOOK_SPREADS[targetSpreadIndex]
                    : currentSpread
                }
                onSelectTab={handleSelectTab}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                disablePrev={currentSpreadIndex === 0 || isPageTurning || bookState !== 'open'}
                disableNext={
                  currentSpreadIndex === NOTEBOOK_SPREADS.length - 1 || isPageTurning || bookState !== 'open'
                }
              />
            </div>

            <NotebookCenterSpiral />

            {(bookState === 'opening' || bookState === 'closing') && (
              <motion.div
                key="cover-flipping-leaf"
                initial={{ rotateY: bookState === 'opening' ? 0 : -180 }}
                animate={{ rotateY: bookState === 'opening' ? -180 : 0 }}
                transition={{
                  duration: 0.85,
                  ease: [0.65, 0, 0.35, 1],
                }}
                onAnimationComplete={
                  bookState === 'opening'
                    ? handleCoverOpenComplete
                    : handleCoverCloseComplete
                }
                className="absolute top-0 bottom-0 right-0 w-1/2 origin-left [transform-style:preserve-3d] z-30 pointer-events-none"
              >
                <div className="absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d] shadow-[-14px_0_30px_rgba(0,0,0,0.35)]">
                  <NotebookCover
                    onTabClick={() => {}}
                    onCoverClick={() => {}}
                  />
                </div>

                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] [transform-style:preserve-3d] shadow-[14px_0_30px_rgba(0,0,0,0.35)]">
                  <NotebookLeftPage
                    spread={currentSpread}
                    onSelectTab={() => {}}
                    onClose={() => {}}
                  />
                </div>
              </motion.div>
            )}

            {bookState === 'open' && isPageTurning && (
              <motion.div
                key={`desktop-turning-leaf-${pageTurnDirection}-${currentSpreadIndex}`}
                initial={{
                  rotateY: pageTurnDirection === 'next' ? 0 : -180,
                }}
                animate={{
                  rotateY: pageTurnDirection === 'next' ? -180 : 0,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.65, 0, 0.35, 1],
                }}
                onAnimationComplete={handlePageTurnComplete}
                className="absolute top-0 bottom-0 right-0 w-1/2 origin-left [transform-style:preserve-3d] z-30 pointer-events-none"
              >
                <div className="absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d] shadow-[-12px_0_25px_rgba(0,0,0,0.35)]">
                  <NotebookRightPage
                    spread={
                      pageTurnDirection === 'next'
                        ? currentSpread
                        : NOTEBOOK_SPREADS[targetSpreadIndex]
                    }
                    onSelectTab={() => {}}
                    onPrevPage={() => {}}
                    onNextPage={() => {}}
                    disablePrev={true}
                    disableNext={true}
                  />
                </div>

                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] [transform-style:preserve-3d] shadow-[12px_0_25px_rgba(0,0,0,0.35)]">
                  <NotebookLeftPage
                    spread={
                      pageTurnDirection === 'next'
                        ? NOTEBOOK_SPREADS[targetSpreadIndex]
                        : currentSpread
                    }
                    onSelectTab={() => {}}
                    onClose={() => {}}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

// 2. MAIN SECTION 02 COMPONENT
export const Section02 = () => {
  return (
    <section
      id="section-02"
      className="w-full relative py-10 lg:py-16 select-none overflow-hidden border-b border-stone-300"
      style={{
        background: 'linear-gradient(180deg, #f5f4ef 0%, #ebe8df 50%, #e2dfd5 100%)',
      }}
    >
      {/* Section Header */}
      <div className="relative z-10 max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/90 border border-teal-300/80 text-teal-900 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-2 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
          <span>CRCCF EXECUTIVE DOSSIER • 3D SPIRAL NOTEBOOK</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight font-serif">
          Editorial Documentation & System Blueprints
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto mt-1 font-mono">
          Interactive 3D Spiral Notebook • Click tabs or cover to open, browse double-page spreads, and examine system architecture
        </p>
      </div>

      {/* Main 3D Presentation Container */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-[1200px] mx-auto overflow-visible">
        <Notebook />
      </div>
    </section>
  );
};

export default Section02;
