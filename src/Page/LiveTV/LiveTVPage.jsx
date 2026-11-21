import React, { useState, useEffect } from 'react';
import liveTvData from './LiveTVPageData';

/**
 * ============================================================================
 * EMBEDDED LIVETV STYLES
 * Transferred directly from index.css for complete encapsulation
 * ============================================================================
 */
const LiveTVStyles = () => (
  <style>{`
    /* Photorealistic Wood Surface Texture */
    .wood-table-grain {
      background-color: #b35f1d;
      background-image: 
        linear-gradient(to bottom, 
          rgba(255, 175, 90, 0.5) 0%, 
          rgba(215, 120, 45, 0.25) 20%, 
          rgba(150, 65, 15, 0.35) 55%, 
          rgba(95, 38, 8, 0.6) 100%
        ),
        radial-gradient(ellipse at 25% 45%, rgba(255, 200, 120, 0.35) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 35%, rgba(135, 50, 10, 0.4) 0%, transparent 60%),
        repeating-linear-gradient(
          0deg,
          #bf6922 0px,
          #a65315 2px,
          #cd782b 6px,
          #94430c 11px,
          #b8621e 18px,
          #df8e42 24px,
          #8a3a08 30px,
          #b05b18 38px,
          #c46e25 48px,
          #7d3205 58px,
          #be6721 72px
        );
    }

    /* Polished high-gloss lacquer reflection streak across the desk */
    .desk-lacquer-shine {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 240, 215, 0.12) 10%,
        rgba(255, 255, 255, 0.38) 22%,
        rgba(255, 245, 225, 0.18) 32%,
        rgba(255, 255, 255, 0) 45%,
        rgba(255, 235, 205, 0.1) 60%,
        rgba(255, 255, 255, 0.32) 78%,
        rgba(255, 240, 215, 0.15) 88%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    /* Fine Perforated Mesh Pattern for Pen Cup */
    .mesh-wire-pattern {
      background-color: #141518;
      background-image: 
        radial-gradient(circle at center, #000000 1.2px, transparent 1.6px),
        linear-gradient(45deg, #383a42 0.8px, transparent 0.8px),
        linear-gradient(-45deg, #2a2c33 0.8px, transparent 0.8px);
      background-size: 4px 4px, 4px 4px, 4px 4px;
    }

    /* Screen Glass Glare */
    .screen-glare {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.22) 0%,
        rgba(255, 255, 255, 0.1) 25%,
        rgba(255, 255, 255, 0.02) 45%,
        rgba(255, 255, 255, 0) 65%
      );
    }

    /* Page Entrance Animations */
    @keyframes pageFadeInDown {
      0% { opacity: 0; transform: translateY(-24px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes pageFadeInUp {
      0% { opacity: 0; transform: translateY(35px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes pageScaleFadeIn {
      0% { opacity: 0; transform: scale(0.93) translateY(15px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }

    @keyframes pageSlideInLeft {
      0% { opacity: 0; transform: translateX(-60px) rotate(-3deg); }
      100% { opacity: 1; transform: translateX(0) rotate(0deg); }
    }

    @keyframes pageSlideInRight {
      0% { opacity: 0; transform: translateX(60px) rotate(3deg); }
      100% { opacity: 1; transform: translateX(0) rotate(0deg); }
    }

    .anim-header {
      animation: pageFadeInDown 750ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both;
    }

    .anim-desk {
      animation: pageFadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both;
    }

    .anim-monitor {
      animation: pageScaleFadeIn 800ms cubic-bezier(0.16, 1, 0.3, 1) 360ms both;
    }

    .anim-plant {
      animation: pageSlideInLeft 850ms cubic-bezier(0.16, 1, 0.3, 1) 500ms both;
    }

    .anim-penholder {
      animation: pageSlideInRight 850ms cubic-bezier(0.16, 1, 0.3, 1) 560ms both;
    }

    /* Choreographed Broadcast Cards Transition Animation */
    @keyframes cardSlideInLeft {
      0% {
        opacity: 0;
        transform: translateX(-75px) scale(0.92);
      }
      65% {
        opacity: 1;
        transform: translateX(4px) scale(1.02);
      }
      100% {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }

    @keyframes cardSlideInRight {
      0% {
        opacity: 0;
        transform: translateX(75px) scale(0.92);
      }
      65% {
        opacity: 1;
        transform: translateX(-4px) scale(1.02);
      }
      100% {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }

    .animate-card-left {
      animation: cardSlideInLeft 500ms cubic-bezier(0.2, 0.9, 0.3, 1) both;
    }

    .animate-card-right {
      animation: cardSlideInRight 500ms cubic-bezier(0.2, 0.9, 0.3, 1) both;
    }
  `}</style>
);

/**
 * ============================================================================
 * CHANNEL ICON SUBCOMPONENT
 * Renders vector SVG broadcast icons mapped from livetv.js data
 * ============================================================================
 */
function ChannelIcon({ iconName }) {
  const iconClass = "w-10 h-10 sm:w-[44px] sm:h-[44px] md:w-[52px] md:h-[52px] lg:w-14 lg:h-14";

  switch (iconName) {
    case 'news':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <rect x="10" y="10" width="44" height="42" rx="3" fill="#ffffff" stroke="#004db3" strokeWidth="2.5" />
          <path d="M10 18 L54 18" stroke="#004db3" strokeWidth="2.5" />
          <text x="32" y="27" textAnchor="middle" fill="#004db3" fontSize="8" fontWeight="900" fontFamily="sans-serif">NEWS</text>
          <line x1="15" y1="33" x2="33" y2="33" stroke="#0055d4" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="15" y1="39" x2="33" y2="39" stroke="#0055d4" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="15" y1="45" x2="28" y2="45" stroke="#0055d4" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="37" y="32" width="11" height="15" rx="1.5" fill="#1a8cff" />
        </svg>
      );
    case 'world':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <defs>
            <radialGradient id="globe-g1" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#38b6ff" />
              <stop offset="60%" stopColor="#0062e6" />
              <stop offset="100%" stopColor="#00297a" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="23" fill="url(#globe-g1)" />
          <path d="M25 12 C29 15 32 20 29 25 C26 29 19 29 16 33 C14 36 17 40 21 42 C24 44 28 42 29 47 C30 51 25 54 22 55" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M38 13 C39 19 45 22 48 25 C50 28 47 33 44 34 C41 35 39 39 42 43 C45 47 49 49 53 48" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="32" cy="32" rx="23" ry="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
        </svg>
      );
    case 'business':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <rect x="13" y="38" width="7" height="16" rx="1.5" fill="#0070f3" />
          <rect x="24.5" y="29" width="7" height="25" rx="1.5" fill="#005ac8" />
          <rect x="36" y="20" width="7" height="34" rx="1.5" fill="#0047a8" />
          <rect x="47.5" y="12" width="7" height="42" rx="1.5" fill="#00358a" />
          <path d="M10 34 Q28 18 48 8" stroke="#0055d4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <polygon points="45,4 55,7 49,16" fill="#0055d4" />
        </svg>
      );
    case 'sports':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <circle cx="32" cy="32" r="23" fill="#ffffff" stroke="#003580" strokeWidth="2.2" />
          <polygon points="32,21 42,28 38,39 26,39 22,28" fill="#002d75" />
          <line x1="32" y1="21" x2="32" y2="9" stroke="#002d75" strokeWidth="2" />
          <polygon points="25,9 39,9 32,14" fill="#002d75" />
          <line x1="42" y1="28" x2="53" y2="23" stroke="#002d75" strokeWidth="2" />
          <polygon points="51,16 55,25 48,25" fill="#002d75" />
          <line x1="38" y1="39" x2="48" y2="49" stroke="#002d75" strokeWidth="2" />
          <polygon points="44,54 53,45 46,46" fill="#002d75" />
          <line x1="26" y1="39" x2="16" y2="49" stroke="#002d75" strokeWidth="2" />
          <polygon points="11,45 20,54 18,46" fill="#002d75" />
          <line x1="22" y1="28" x2="11" y2="23" stroke="#002d75" strokeWidth="2" />
          <polygon points="9,26 13,17 16,25" fill="#002d75" />
        </svg>
      );
    case 'entertainment':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <rect x="11" y="24" width="42" height="29" rx="3" fill="#002d75" stroke="#004db3" strokeWidth="2" />
          <polygon points="28,33 42,39 28,45" fill="#ffffff" />
          <g transform="rotate(-6 11 24)">
            <rect x="11" y="13" width="42" height="11" rx="2" fill="#001f5c" stroke="#004db3" strokeWidth="1.5" />
            <polygon points="16,13 21,13 16,24 11,24" fill="#ffffff" />
            <polygon points="27,13 32,13 27,24 22,24" fill="#ffffff" />
            <polygon points="38,13 43,13 38,24 33,24" fill="#ffffff" />
            <polygon points="49,13 54,13 49,24 44,24" fill="#ffffff" />
          </g>
        </svg>
      );
    case 'technology':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <rect x="17" y="17" width="30" height="30" rx="4" fill="#00358a" stroke="#0066e6" strokeWidth="2.5" />
          <rect x="23" y="23" width="18" height="18" rx="2" fill="#00d0ff" opacity="0.95" />
          <circle cx="32" cy="32" r="4" fill="#ffffff" />
          <line x1="23" y1="11" x2="23" y2="17" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="11" x2="32" y2="17" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="41" y1="11" x2="41" y2="17" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="23" y1="47" x2="23" y2="53" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="47" x2="32" y2="53" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="41" y1="47" x2="41" y2="53" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="11" y1="23" x2="17" y2="23" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="11" y1="32" x2="17" y2="32" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="11" y1="41" x2="17" y2="41" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="47" y1="23" x2="53" y2="23" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="47" y1="32" x2="53" y2="32" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="47" y1="41" x2="53" y2="41" stroke="#0066e6" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'politics':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <rect x="11" y="47" width="42" height="5" rx="1" fill="#003399" />
          <rect x="15" y="26" width="4" height="21" fill="#0055d4" />
          <rect x="25" y="26" width="4" height="21" fill="#0055d4" />
          <rect x="35" y="26" width="4" height="21" fill="#0055d4" />
          <rect x="45" y="26" width="4" height="21" fill="#0055d4" />
          <rect x="13" y="23" width="38" height="3" fill="#003399" />
          <polygon points="11,23 53,23 32,13" fill="#002673" />
          <path d="M25 13 C25 6 39 6 39 13 Z" fill="#0055d4" />
        </svg>
      );
    case 'weather':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <circle cx="26" cy="23" r="10" fill="#ffb300" />
          <g stroke="#ffb300" strokeWidth="2.2" strokeLinecap="round">
            <line x1="26" y1="7" x2="26" y2="10" />
            <line x1="13" y1="12" x2="15" y2="14" />
            <line x1="10" y1="23" x2="13" y2="23" />
            <line x1="38" y1="12" x2="36" y2="14" />
          </g>
          <path d="M22 44 C18 44 15 41 15 38 C15 35 17 33 20 32 C20 25 27 21 33 23 C38 19 45 21 47 26 C50 26 53 29 53 34 C53 38 50 42 46 42 L22 42 Z" fill="#ffffff" stroke="#0066e6" strokeWidth="2.2" />
        </svg>
      );
    case 'breaking':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <path d="M12 28 L30 16 L30 48 L12 36 Z" fill="#e60000" />
          <path d="M30 20 L44 14 L44 50 L30 44 Z" fill="#ff2a2a" />
          <rect x="10" y="28" width="6" height="8" rx="2" fill="#990000" />
          <path d="M48 24 Q54 32 48 40" stroke="#e60000" strokeWidth="3" strokeLinecap="round" />
          <path d="M52 18 Q60 32 52 46" stroke="#e60000" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'finance':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <circle cx="32" cy="32" r="23" fill="#0055d4" stroke="#003399" strokeWidth="2" />
          <circle cx="32" cy="32" r="18" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="3 3" />
          <text x="32" y="40" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="sans-serif">$</text>
        </svg>
      );
    case 'health':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <path d="M32 54 C32 54 10 40 10 24 C10 16 16 10 24 10 C28 10 32 14 32 14 C32 14 36 10 40 10 C48 10 54 16 54 24 C54 40 32 54 32 54 Z" fill="#e60000" />
          <path d="M18 28 L26 28 L29 20 L33 36 L37 24 L40 28 L46 28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'automotive':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <path d="M10 38 L16 24 C18 20 22 18 28 18 L36 18 C42 18 46 20 48 24 L54 38" stroke="#0055d4" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="8" y="36" width="48" height="14" rx="4" fill="#00358a" />
          <circle cx="18" cy="48" r="4" fill="#ffffff" stroke="#00225c" strokeWidth="2" />
          <circle cx="46" cy="48" r="4" fill="#ffffff" stroke="#00225c" strokeWidth="2" />
          <rect x="24" y="40" width="16" height="4" rx="1" fill="#38bdf8" />
        </svg>
      );
    case 'science':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <ellipse cx="32" cy="32" rx="24" ry="9" stroke="#0066e6" strokeWidth="2.5" fill="none" />
          <ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(60 32 32)" stroke="#0066e6" strokeWidth="2.5" fill="none" />
          <ellipse cx="32" cy="32" rx="24" ry="9" transform="rotate(120 32 32)" stroke="#0066e6" strokeWidth="2.5" fill="none" />
          <circle cx="32" cy="32" r="5" fill="#e60000" />
        </svg>
      );
    case 'education':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <polygon points="32,14 54,24 32,34 10,24" fill="#00358a" stroke="#0055d4" strokeWidth="2" />
          <path d="M18 30 L18 44 C18 44 24 50 32 50 C40 50 46 44 46 44 L46 30" stroke="#0055d4" strokeWidth="3" fill="#00266e" />
          <path d="M50 25 L50 42" stroke="#e60000" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'travel':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <circle cx="32" cy="32" r="23" stroke="#0055d4" strokeWidth="2.5" />
          <polygon points="32,10 40,32 32,27 24,32" fill="#e60000" />
          <polygon points="32,54 40,32 32,27 24,32" fill="#003399" />
        </svg>
      );
    case 'environment':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <path d="M14 48 C14 48 16 32 28 20 C40 8 52 10 52 10 C52 10 54 22 42 34 C30 46 14 48 14 48 Z" fill="#16a34a" />
          <path d="M14 48 C24 40 34 30 46 18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M28 34 C32 36 36 34 40 32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'justice':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <line x1="14" y1="20" x2="50" y2="20" stroke="#0055d4" strokeWidth="3" />
          <circle cx="32" cy="18" r="3" fill="#00358a" />
          <line x1="32" y1="20" x2="32" y2="48" stroke="#0055d4" strokeWidth="3" />
          <rect x="22" y="48" width="20" height="5" rx="2" fill="#00266e" />
          <path d="M14 20 L20 32 L8 32 Z" stroke="#0055d4" strokeWidth="2" fill="#38bdf8" />
          <path d="M50 20 L56 32 L44 32 Z" stroke="#0055d4" strokeWidth="2" fill="#38bdf8" />
        </svg>
      );
    case 'realestate':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <rect x="12" y="24" width="16" height="30" fill="#00358a" stroke="#0055d4" strokeWidth="2" />
          <rect x="28" y="14" width="24" height="40" fill="#004db3" stroke="#0055d4" strokeWidth="2" />
          <rect x="34" y="20" width="4" height="4" fill="#ffffff" />
          <rect x="42" y="20" width="4" height="4" fill="#ffffff" />
          <rect x="34" y="28" width="4" height="4" fill="#ffffff" />
          <rect x="42" y="28" width="4" height="4" fill="#ffffff" />
          <rect x="16" y="30" width="3" height="4" fill="#38bdf8" />
          <rect x="21" y="30" width="3" height="4" fill="#38bdf8" />
        </svg>
      );
    case 'space':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <g transform="rotate(45 32 32)">
            <path d="M32 10 C24 18 22 28 22 36 L42 36 C42 28 40 18 32 10 Z" fill="#0055d4" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="32" cy="24" r="4" fill="#38bdf8" />
            <polygon points="22,32 14,40 22,38" fill="#e60000" />
            <polygon points="42,32 50,40 42,38" fill="#e60000" />
            <polygon points="28,36 36,36 32,46" fill="#f59e0b" />
          </g>
        </svg>
      );
    case 'gaming':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <rect x="10" y="20" width="44" height="26" rx="10" fill="#002d75" stroke="#0055d4" strokeWidth="2.5" />
          <line x1="20" y1="28" x2="20" y2="38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="33" x2="25" y2="33" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="41" cy="30" r="2.5" fill="#e60000" />
          <circle cx="47" cy="35" r="2.5" fill="#38bdf8" />
        </svg>
      );
    case 'fashion':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <polygon points="32,14 48,26 32,52 16,26" stroke="#0055d4" strokeWidth="2.5" fill="#00358a" />
          <polygon points="32,14 48,26 32,32 16,26" fill="#38bdf8" />
          <line x1="32" y1="32" x2="32" y2="52" stroke="#ffffff" strokeWidth="2" />
        </svg>
      );
    case 'food':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <path d="M22 14 L22 28 C22 32 26 34 28 34 L28 50" stroke="#0055d4" strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="14" x2="18" y2="24" stroke="#0055d4" strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="14" x2="26" y2="24" stroke="#0055d4" strokeWidth="2" strokeLinecap="round" />
          <path d="M42 14 C42 22 38 26 38 34 L38 50" stroke="#0055d4" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'music':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <path d="M22 42 C18 42 16 45 16 48 C16 51 18 54 22 54 C26 54 28 51 28 48 L28 20 L48 14 L48 42 C44 42 42 45 42 48 C42 51 44 54 48 54 C52 54 54 51 54 48 L54 10 L22 18 Z" fill="#0055d4" />
        </svg>
      );
    case 'documentary':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <rect x="10" y="20" width="32" height="24" rx="4" fill="#00358a" stroke="#0055d4" strokeWidth="2.5" />
          <polygon points="42,26 54,18 54,46 42,38" fill="#0055d4" />
          <circle cx="26" cy="32" r="6" fill="#e60000" />
        </svg>
      );
    case 'defense':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <path d="M32 10 L48 16 C48 34 38 48 32 54 C26 48 16 34 16 16 Z" fill="#00358a" stroke="#0055d4" strokeWidth="2.5" />
          <polygon points="32,22 35,28 42,29 37,34 39,41 32,37 25,41 27,34 22,29 29,28" fill="#fbbf24" />
        </svg>
      );
    case 'energy':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <circle cx="32" cy="32" r="23" fill="#00266e" stroke="#0055d4" strokeWidth="2" />
          <polygon points="34,12 20,34 31,34 27,52 44,28 33,28" fill="#fbbf24" />
        </svg>
      );
    case 'aviation':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <path d="M32 10 L36 26 L52 34 L52 39 L36 34 L36 46 L42 50 L42 54 L32 51 L22 54 L22 50 L28 46 L28 34 L12 39 L12 34 L28 26 Z" fill="#0055d4" />
        </svg>
      );
    case 'startups':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <path d="M22 28 C22 20 26 14 32 14 C38 14 42 20 42 28 C42 33 39 36 36 39 L36 44 L28 44 L28 39 C25 36 22 33 22 28 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <rect x="29" y="44" width="6" height="4" fill="#64748b" />
          <line x1="32" y1="8" x2="32" y2="12" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'culture':
      return (
        <svg viewBox="0 0 64 64" className={iconClass}>
          <path d="M32 12 C44 12 52 20 52 32 C52 42 44 48 38 48 C34 48 34 44 30 44 C26 44 26 48 22 48 C14 48 10 40 10 32 C10 20 20 12 32 12 Z" fill="#ffffff" stroke="#0055d4" strokeWidth="2.5" />
          <circle cx="22" cy="24" r="3.5" fill="#ef4444" />
          <circle cx="34" cy="20" r="3.5" fill="#3b82f6" />
          <circle cx="44" cy="26" r="3.5" fill="#10b981" />
          <circle cx="42" cy="38" r="3.5" fill="#f59e0b" />
        </svg>
      );
    case 'agriculture':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <path d="M32 52 L32 20" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 40 C38 36 44 38 46 32 C46 32 40 32 34 38" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="#22c55e" />
          <path d="M32 40 C26 36 20 38 18 32 C18 32 24 32 30 38" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="#22c55e" />
          <path d="M32 28 C38 24 44 26 46 20 C46 20 40 20 34 26" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="#22c55e" />
          <path d="M32 28 C26 24 20 26 18 20 C18 20 24 20 30 26" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="#22c55e" />
        </svg>
      );
    case 'maritime':
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <circle cx="32" cy="18" r="5" stroke="#0055d4" strokeWidth="3" />
          <line x1="32" y1="23" x2="32" y2="48" stroke="#0055d4" strokeWidth="3.5" />
          <line x1="20" y1="28" x2="44" y2="28" stroke="#0055d4" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 38 C16 48 48 48 48 38" stroke="#0055d4" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case 'globalmarkets':
    default:
      return (
        <svg viewBox="0 0 64 64" className={iconClass} fill="none">
          <circle cx="32" cy="32" r="23" fill="#00266e" stroke="#0055d4" strokeWidth="2" />
          <line x1="20" y1="16" x2="20" y2="46" stroke="#22c55e" strokeWidth="1.5" />
          <rect x="17.5" y="24" width="5" height="14" rx="1" fill="#22c55e" />
          <line x1="32" y1="14" x2="32" y2="48" stroke="#38bdf8" strokeWidth="1.5" />
          <rect x="29.5" y="20" width="5" height="20" rx="1" fill="#38bdf8" />
          <line x1="44" y1="18" x2="44" y2="44" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="41.5" y="22" width="5" height="12" rx="1" fill="#ef4444" />
        </svg>
      );
  }
}

/**
 * ============================================================================
 * MONITOR STAND SUBCOMPONENT
 * Swivel hinge medallion column & chamfered pedestal base
 * ============================================================================
 */
function MonitorStand() {
  return (
    <div className="relative flex flex-col items-center pointer-events-none select-none z-10 -mt-1">
      {/* Vertical Support Column with Swivel Hinge */}
      <div className="relative w-16 sm:w-20 md:w-24 h-[44px] sm:h-[52px] md:h-[60px] flex flex-col items-center">
        <div 
          className="w-[52px] sm:w-[60px] md:w-[68px] h-full shadow-xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #121316 0%, #292a30 25%, #3f424b 50%, #24252a 75%, #101113 100%)',
            boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.85), 0 4px 8px rgba(0,0,0,0.4)'
          }}
        >
          {/* Swivel Hinge Circular Medallion */}
          <div 
            className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] rounded-full border border-[#3c3e44]/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_2px_rgba(255,255,255,0.12)] flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 45% 40%, #2d2f35 0%, #1a1b1e 65%, #0f1012 100%)'
            }}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#131416] border border-black/50" />
          </div>

          {/* Neck vertical specular highlight */}
          <div className="absolute top-0 bottom-0 left-[48%] w-1.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* Flat Rectangular Pedestal Base Plate */}
      <div className="relative flex flex-col items-center">
        <div 
          className="w-48 sm:w-80 md:w-[380px] lg:w-[440px] h-4 sm:h-5.5 md:h-6 rounded-[4px] sm:rounded-[5px] relative border-t border-[#4c5058] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #2a2d33 0%, #1e2024 35%, #151619 80%, #0c0d0f 100%)',
            boxShadow: `
              0 1px 0 rgba(255, 255, 255, 0.2) inset,
              0 -1px 0 rgba(0, 0, 0, 0.95) inset,
              0 4px 10px rgba(0, 0, 0, 0.7),
              0 14px 28px rgba(0, 0, 0, 0.5)
            `
          }}
        >
          {/* Top Chamfer Edge Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          {/* Top Surface Light Reflection */}
          <div className="absolute top-0.5 left-4 sm:left-6 right-4 sm:right-6 h-1.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Tight Dark Contact Shadow on Desk */}
        <div className="w-52 sm:w-84 md:w-[390px] lg:w-[450px] h-2 bg-[#1e0a02]/95 blur-[1.5px] rounded-sm -mt-0.5" />

        {/* Ambient Shadow radiating across desk */}
        <div className="w-56 sm:w-92 md:w-[430px] lg:w-[500px] h-4 bg-[#1e0a02]/45 blur-[6px] rounded-md -mt-1.5" />
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * SCREEN DISPLAY SUBCOMPONENT
 * Broadcast cards grid with choreographed pagination transitions
 * ============================================================================
 */
function ScreenDisplay({ currentCards, activePage, totalPages, handlePrev, handleNext, isMobile }) {
  const getCardAnimConfig = (index) => {
    if (isMobile) {
      if (index === 0) return { className: 'animate-card-left', delay: '0ms' };
      if (index === 1) return { className: 'animate-card-right', delay: '0ms' };
      if (index === 2) return { className: 'animate-card-left', delay: '160ms' };
      if (index === 3) return { className: 'animate-card-right', delay: '160ms' };
    }

    if (index === 1) return { className: 'animate-card-left', delay: '0ms' };
    if (index === 2) return { className: 'animate-card-right', delay: '0ms' };

    if (index === 0) return { className: 'animate-card-left', delay: '140ms' };
    if (index === 3) return { className: 'animate-card-right', delay: '140ms' };

    if (index === 5) return { className: 'animate-card-left', delay: '280ms' };
    if (index === 6) return { className: 'animate-card-right', delay: '280ms' };

    if (index === 4) return { className: 'animate-card-left', delay: '420ms' };
    if (index === 7) return { className: 'animate-card-right', delay: '420ms' };

    return { className: 'animate-card-left', delay: '0ms' };
  };

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-gradient-to-b from-[#0066e6] via-[#004bb8] to-[#002f85] flex flex-col justify-between p-1.5 sm:p-2.5 md:p-3">
      {/* Background Broadcast Geometric Polygon Accents */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 620"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 260,0 0,180" fill="#0088ff" opacity="0.3" />
        <polygon points="740,0 1000,0 1000,180" fill="#00b4ff" opacity="0.25" />
        <polygon points="0,480 180,620 0,620" fill="#002660" opacity="0.5" />
        <polygon points="820,620 1000,480 1000,620" fill="#0088ff" opacity="0.25" />
      </svg>

      {/* Top Ambient Sheen Streak */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none z-20" />

      {/* 
        Responsive Broadcast Cards Grid: 
        - Mobile: 2 Columns × 2 Rows
        - Desktop: 4 Columns × 2 Rows
      */}
      <div 
        key={`grid-page-${activePage}`}
        className="relative z-10 w-full flex-1 grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-1.5 sm:gap-2 md:gap-2.5 p-0.5"
      >
        {currentCards.map((card, index) => {
          const anim = getCardAnimConfig(index);
          return (
            <div
              key={`card-${activePage}-${card.id}`}
              className={`group relative rounded-[8px] sm:rounded-[12px] md:rounded-[14px] overflow-hidden border-2 border-[#38a2ff]/80 hover:border-cyan-300 shadow-[0_3px_12px_rgba(0,40,120,0.6),inset_0_1px_2px_rgba(255,255,255,0.45)] hover:shadow-[0_4px_16px_rgba(0,180,255,0.7)] transition-all duration-200 flex flex-col justify-between cursor-pointer ${anim.className}`}
              style={{
                animationDelay: anim.delay,
                background: 'linear-gradient(180deg, #1b63d6 0%, #003799 50%, #001854 100%)',
              }}
            >
              {/* Top Gloss Highlight */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 via-white/5 to-transparent pointer-events-none z-20" />

              {/* Upper Section: Glossy Pearl White Icon Tile (~53% height) */}
              <div 
                className="relative w-full h-[53%] flex items-center justify-center pt-1 pb-1.5 sm:pb-2.5 overflow-hidden rounded-t-[6px] sm:rounded-t-[10px] md:rounded-t-[12px]"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f4f8fe 50%, #dbe7f9 100%)',
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.95), 0 2px 4px rgba(0,0,0,0.15)'
                }}
              >
                {/* Soft specular sheen */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/70 blur-[3px] pointer-events-none" />

                {/* Scaled & Enlarged Vector Icon */}
                <div className="relative z-10 transform group-hover:scale-108 transition-transform duration-200 drop-shadow-[0_2px_4px_rgba(0,40,120,0.3)]">
                  <ChannelIcon iconName={card.icon} />
                </div>

                {/* Dynamic Red Swoosh Wave Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 overflow-hidden pointer-events-none">
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,20 Q40,18 70,6 Q88,-2 100,8 L100,20 L0,20 Z" fill="#cc0000" />
                    <path d="M0,20 Q50,15 80,4 Q92,-2 100,5 L100,20 L0,20 Z" fill="#e60000" />
                  </svg>
                </div>
              </div>

              {/* Lower Section: Deep Navy Name Box (~47% height, half the card) with 2 lines of name */}
              <div 
                className="relative w-full h-[47%] py-0.5 sm:py-1.5 px-1 flex flex-col items-center justify-center overflow-hidden z-10"
                style={{
                  background: 'linear-gradient(180deg, #001f5c 0%, #001238 65%, #000c26 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.12)'
                }}
              >
                {/* Line 1: Primary Category Name */}
                <span className="text-white font-black italic tracking-wide text-center text-[10px] sm:text-[11.5px] md:text-[13px] leading-tight font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate max-w-full px-1">
                  {card.line1}
                </span>

                {/* Line 2: Secondary / Subtitle Label */}
                <span className="text-cyan-300 font-semibold italic text-center text-[8px] sm:text-[9.5px] md:text-[10.5px] leading-tight tracking-wider uppercase font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] truncate max-w-full px-1 mt-0.5">
                  {card.line2}
                </span>

                {/* Glowing Red Underline */}
                <div className="w-6 sm:w-8 md:w-10 h-[2px] bg-[#e60000] rounded-full mt-0.5 sm:mt-1 shadow-[0_1px_3px_rgba(255,0,0,0.85)]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* 
        BOTTOM PAGINATION CONTROLS (Previous, Page X of Y, Next)
      */}
      <div className="relative z-20 w-full flex items-center justify-between pt-1 pb-0.5 px-1 sm:px-2 border-t border-blue-400/30 mt-0.5 sm:mt-1">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={activePage === 1}
          className={`flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all ${
            activePage === 1
              ? 'bg-blue-900/40 text-blue-300/40 cursor-not-allowed border border-blue-800/40'
              : 'bg-blue-600/80 hover:bg-blue-500 text-white cursor-pointer shadow-md hover:shadow-cyan-500/30 border border-blue-300/50'
          }`}
        >
          <span>←</span>
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden text-[9px]">Prev</span>
        </button>

        {/* Page Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-blue-950/70 border border-blue-400/40 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
          <span className="text-cyan-300 text-[10px] sm:text-xs font-black tracking-wider uppercase">
            Page {activePage} of {totalPages}
          </span>
          <div className="hidden sm:flex items-center gap-1 ml-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <span
                key={page}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  activePage === page ? 'bg-cyan-400 w-3' : 'bg-blue-400/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={activePage === totalPages}
          className={`flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all ${
            activePage === totalPages
              ? 'bg-blue-900/40 text-blue-300/40 cursor-not-allowed border border-blue-800/40'
              : 'bg-blue-600/80 hover:bg-blue-500 text-white cursor-pointer shadow-md hover:shadow-cyan-500/30 border border-blue-300/50'
          }`}
        >
          <span className="sm:hidden text-[9px]">Next</span>
          <span className="hidden sm:inline">Next</span>
          <span>→</span>
        </button>
      </div>

      {/* Screen Glass Sheen & Bezel Shadow Overlay */}
      <div className="absolute inset-0 pointer-events-none screen-glare opacity-25 z-30" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_16px_rgba(0,0,0,0.55)] z-30" />
    </div>
  );
}

/**
 * ============================================================================
 * MONITOR CHASSIS & SCREEN ASSEMBLY
 * ============================================================================
 */
function Monitor({ currentCards, activePage, totalPages, handlePrev, handleNext, isMobile }) {
  return (
    <div className="relative flex flex-col items-center z-20 w-full">
      {/* Monitor Main Body */}
      <div 
        className="relative w-full max-w-[420px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[880px] aspect-[16/10] rounded-[8px] sm:rounded-[12px] md:rounded-[14px] p-2 sm:p-3 md:p-[16px] pb-2.5 sm:pb-4 md:pb-[20px] transition-all duration-300"
        style={{
          background: 'linear-gradient(175deg, #282a30 0%, #1a1b1f 35%, #121316 100%)',
          boxShadow: `
            0 1px 0 rgba(255, 255, 255, 0.18) inset,
            0 -1px 0 rgba(0, 0, 0, 0.95) inset,
            0 28px 56px -12px rgba(0, 0, 0, 0.55),
            0 12px 28px rgba(0, 0, 0, 0.4)
          `
        }}
      >
        {/* Subtle Inner Bevel Frame */}
        <div 
          className="relative w-full h-full rounded-[6px] sm:rounded-[8px] overflow-hidden p-[2px] bg-[#090a0c] shadow-[inset_0_2px_4px_rgba(0,0,0,0.95),0_1px_1px_rgba(255,255,255,0.08)]"
        >
          <div className="w-full h-full rounded-[4px] sm:rounded-[6px] overflow-hidden">
            <ScreenDisplay 
              currentCards={currentCards}
              activePage={activePage}
              totalPages={totalPages}
              handlePrev={handlePrev}
              handleNext={handleNext}
              isMobile={isMobile}
            />
          </div>
        </div>

        {/* Bottom Bezel LED */}
        <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2f323a] border border-black/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.9)]" />
        </div>

        {/* Outer Bezel Top Specular Highlight Stripe */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      </div>

      <MonitorStand />
    </div>
  );
}

/**
 * ============================================================================
 * ORIGINAL INDOOR PLANT SUBCOMPONENT
 * Exact realistic green potted houseplant with multi-layered leaves,
 * 3D ceramic pot, soil rim, and contact shadows.
 * ============================================================================
 */
function Plant() {
  return (
    <div className="relative flex flex-col items-center select-none pointer-events-none z-20">
      {/* Plant Leaves Container */}
      <div className="relative w-36 sm:w-44 md:w-52 h-44 sm:h-52 md:h-60 -mb-6 z-10">
        <svg
          viewBox="0 0 200 240"
          className="w-full h-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Shaded Background Leaf Gradient */}
            <linearGradient id="leaf-dark" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#0e3a15" />
              <stop offset="60%" stopColor="#1a6325" />
              <stop offset="100%" stopColor="#298737" />
            </linearGradient>

            {/* Midtone Vibrant Green Leaf Gradient */}
            <linearGradient id="leaf-mid" x1="0%" y1="100%" x2="40%" y2="0%">
              <stop offset="0%" stopColor="#175e22" />
              <stop offset="40%" stopColor="#259e35" />
              <stop offset="100%" stopColor="#43c448" />
            </linearGradient>

            {/* Bright Leaf Highlight Side */}
            <linearGradient id="leaf-bright" x1="0%" y1="80%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#249c32" />
              <stop offset="50%" stopColor="#4dd938" />
              <stop offset="100%" stopColor="#7bee3d" />
            </linearGradient>

            {/* Leaf Light Highlight */}
            <linearGradient id="leaf-sun" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9dfb5c" />
              <stop offset="70%" stopColor="#55da31" />
              <stop offset="100%" stopColor="#239a2d" />
            </linearGradient>

            {/* Ceramic Pot Cylinder Gradient */}
            <linearGradient id="pot-body" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d5d8de" />
              <stop offset="15%" stopColor="#f3f5f8" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e4e7ec" />
              <stop offset="100%" stopColor="#b6bac2" />
            </linearGradient>

            {/* Pot Rim Gradient */}
            <linearGradient id="pot-rim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c8ccd4" />
              <stop offset="25%" stopColor="#ffffff" />
              <stop offset="75%" stopColor="#e0e3e9" />
              <stop offset="100%" stopColor="#abb0b9" />
            </linearGradient>

            {/* Soil Gradient */}
            <radialGradient id="soil-dark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1c130d" />
              <stop offset="80%" stopColor="#2d1d13" />
              <stop offset="100%" stopColor="#3d2719" />
            </radialGradient>
          </defs>

          {/* Stems Base */}
          <g stroke="#1b5a22" strokeWidth="3" strokeLinecap="round">
            <path d="M100,210 Q95,170 85,140" />
            <path d="M100,210 Q105,170 120,135" />
            <path d="M100,210 Q100,160 102,110" />
            <path d="M98,210 Q80,180 60,150" />
            <path d="M102,210 Q125,185 145,155" />
          </g>

          {/* LAYER 1: Deep Dark Background Leaves */}
          <g id="layer-back-leaves" opacity="0.95">
            <path d="M90,180 C60,185 30,175 12,150 C25,130 65,145 92,170 Z" fill="url(#leaf-dark)" />
            <path d="M92,170 C70,160 30,145 12,150" stroke="#0e3a15" strokeWidth="1" fill="none" />
            <path d="M108,180 C138,185 168,175 186,152 C173,132 133,145 106,170 Z" fill="url(#leaf-dark)" />
            <path d="M92,145 C65,125 45,95 38,62 C62,72 85,105 95,135 Z" fill="url(#leaf-dark)" />
            <path d="M108,145 C135,125 155,95 162,62 C138,72 115,105 105,135 Z" fill="url(#leaf-dark)" />
            <path d="M98,120 C90,80 88,45 100,18 C112,45 110,80 102,120 Z" fill="url(#leaf-dark)" />
          </g>

          {/* LAYER 2: Mid-tier Leaves with Shading & Veins */}
          <g id="layer-mid-leaves">
            <path d="M90,170 C55,160 25,140 18,110 C45,115 75,135 92,160 Z" fill="url(#leaf-mid)" />
            <path d="M18,110 C45,115 75,135 92,160" fill="url(#leaf-bright)" opacity="0.6" />
            <path d="M90,165 Q55,138 18,110" stroke="#165920" strokeWidth="1.2" fill="none" />

            <path d="M110,170 C145,160 175,140 182,110 C155,115 125,135 108,160 Z" fill="url(#leaf-bright)" />
            <path d="M110,170 C145,160 175,140 182,110" fill="url(#leaf-mid)" opacity="0.5" />
            <path d="M110,165 Q145,138 182,110" stroke="#165920" strokeWidth="1.2" fill="none" />

            <path d="M95,150 C70,120 50,85 52,50 C75,68 92,105 98,140 Z" fill="url(#leaf-mid)" />
            <path d="M98,140 C85,100 70,68 52,50 C65,80 85,115 95,150" fill="url(#leaf-bright)" opacity="0.7" />
            <path d="M96,145 Q74,98 52,50" stroke="#1c6626" strokeWidth="1.2" fill="none" />

            <path d="M105,150 C130,120 150,85 148,50 C125,68 108,105 102,140 Z" fill="url(#leaf-bright)" />
            <path d="M104,145 Q126,98 148,50" stroke="#1c6626" strokeWidth="1.2" fill="none" />

            <path d="M88,190 C62,192 38,185 24,170 C42,158 72,168 90,185 Z" fill="url(#leaf-bright)" />
            <path d="M88,188 Q56,178 24,170" stroke="#1b6023" strokeWidth="1" fill="none" />

            <path d="M112,190 C138,192 162,185 176,170 C158,158 128,168 110,185 Z" fill="url(#leaf-bright)" />
            <path d="M112,188 Q144,178 176,170" stroke="#1b6023" strokeWidth="1" fill="none" />
          </g>

          {/* LAYER 3: Forefront Fresh Lime Growth */}
          <g id="layer-front-leaves">
            <path d="M97,165 C82,130 72,90 76,55 C92,75 104,115 101,155 Z" fill="url(#leaf-sun)" />
            <path d="M98,160 Q88,110 76,55" stroke="#25852d" strokeWidth="1.2" fill="none" />

            <path d="M103,165 C118,130 128,90 124,55 C108,75 96,115 99,155 Z" fill="url(#leaf-bright)" />
            <path d="M101,160 Q112,110 124,55" stroke="#25852d" strokeWidth="1.2" fill="none" />

            <path d="M98,130 C90,95 88,60 96,30 C104,60 106,95 102,130 Z" fill="url(#leaf-sun)" />
            <path d="M100,125 Q97,75 96,30" stroke="#2a9032" strokeWidth="1" fill="none" />

            <path d="M99,85 C96,65 92,42 98,22 C104,42 102,65 101,85 Z" fill="url(#leaf-sun)" />

            <path d="M94,180 C78,165 65,145 68,125 C82,135 96,155 98,175 Z" fill="url(#leaf-bright)" />
            <path d="M106,180 C122,165 135,145 132,125 C118,135 104,155 102,175 Z" fill="url(#leaf-sun)" />

            {/* Front Drooping Center Leaves Over Pot Edge */}
            <path d="M92,205 C75,208 55,205 45,195 C60,185 85,190 95,200 Z" fill="url(#leaf-sun)" />
            <path d="M108,205 C125,208 145,205 155,195 C140,185 115,190 105,200 Z" fill="url(#leaf-bright)" />
            <path d="M96,210 C92,218 85,225 78,226 C82,215 90,210 97,208 Z" fill="url(#leaf-bright)" />
            <path d="M104,210 C108,218 115,225 122,226 C118,215 110,210 103,208 Z" fill="url(#leaf-sun)" />
          </g>
        </svg>
      </div>

      {/* White Ceramic Pot Container */}
      <div className="relative w-24 sm:w-28 md:w-32 flex flex-col items-center">
        {/* Pot Rim & Opening */}
        <div 
          className="w-full h-4 sm:h-5 rounded-full border border-gray-200/80 shadow-[inset_0_2px_3px_rgba(0,0,0,0.25)] relative overflow-hidden z-10"
          style={{
            background: 'linear-gradient(180deg, #f0f2f5 0%, #ffffff 50%, #d8dbe2 100%)'
          }}
        >
          {/* Inner Pot Rim Dark Soil Base */}
          <div 
            className="w-[88%] h-[75%] mx-auto mt-0.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, #1e130b 0%, #2e1e12 70%, #140d07 100%)'
            }}
          />
        </div>

        {/* Pot Body (Tapered downward) */}
        <div 
          className="w-[94%] h-20 sm:h-24 md:h-28 -mt-2 rounded-b-[18px] sm:rounded-b-[22px] relative overflow-hidden border-x border-b border-gray-200/70"
          style={{
            background: 'linear-gradient(90deg, #cdd1d8 0%, #eef0f4 15%, #ffffff 35%, #f6f7fa 55%, #e1e4ea 80%, #b8bcc4 100%)',
            boxShadow: `
              0 8px 18px rgba(0,0,0,0.18),
              0 2px 6px rgba(0,0,0,0.12),
              inset 0 -3px 6px rgba(0,0,0,0.08)
            `,
            clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)'
          }}
        >
          {/* Glossy Specular Highlight Streak */}
          <div className="absolute top-0 bottom-0 left-[32%] w-3 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[0.5px]" />
          
          {/* Subtle Ambient Reflection of Warm Wood at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#c46820]/15 to-transparent pointer-events-none" />
        </div>

        {/* Contact Shadow Under Pot */}
        <div className="w-[78%] h-2.5 bg-[#250d02]/85 blur-[2.5px] rounded-full -mt-1" />
        
        {/* Soft Ambient Shadow on Desk */}
        <div className="w-[92%] h-4 bg-[#230d02]/35 blur-[6px] rounded-full -mt-2" />
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * ORIGINAL PEN HOLDER SUBCOMPONENT
 * Exact black wire mesh pencil holder with tall realistic pens (blue, red, black),
 * metallic rims, interior pens visible through mesh, and desk contact shadows.
 * ============================================================================
 */
function PenHolder() {
  return (
    <div className="relative flex flex-col items-center select-none pointer-events-none z-20">
      {/* Tall Pens Container (Protruding well above the rim) */}
      <div className="relative w-24 sm:w-28 md:w-32 h-36 sm:h-44 md:h-48 -mb-[88px] sm:-mb-28 z-10">
        <svg
          viewBox="0 0 140 200"
          className="w-full h-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Blue Pen Gradient */}
            <linearGradient id="pen-blue-dark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#002b80" />
              <stop offset="35%" stopColor="#0055ff" />
              <stop offset="70%" stopColor="#0044cc" />
              <stop offset="100%" stopColor="#001f5c" />
            </linearGradient>

            <linearGradient id="pen-blue-bright" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#003db3" />
              <stop offset="40%" stopColor="#1a75ff" />
              <stop offset="75%" stopColor="#005ce6" />
              <stop offset="100%" stopColor="#002b80" />
            </linearGradient>

            {/* Red Pen Gradient */}
            <linearGradient id="pen-red-vibrant" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#800000" />
              <stop offset="35%" stopColor="#ff1a1a" />
              <stop offset="70%" stopColor="#cc0000" />
              <stop offset="100%" stopColor="#590000" />
            </linearGradient>

            {/* Black Pen Gradient */}
            <linearGradient id="pen-black-sleek" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f1013" />
              <stop offset="40%" stopColor="#383c47" />
              <stop offset="75%" stopColor="#1e2026" />
              <stop offset="100%" stopColor="#0a0a0d" />
            </linearGradient>
          </defs>

          {/* PEN 1: First Blue Pen (Far Left, Tallest, Upright) */}
          <g transform="rotate(-5 32 150)">
            <rect x="26" y="24" width="9" height="150" rx="3.5" fill="url(#pen-blue-dark)" />
            <path d="M26 30 L30.5 8 L35 30 Z" fill="#0044cc" />
            <rect x="23" y="26" width="3" height="48" rx="1.5" fill="#002d80" />
            <rect x="23.5" y="26" width="1.5" height="48" fill="rgba(255,255,255,0.45)" />
            <line x1="29.5" y1="20" x2="29.5" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          </g>

          {/* PEN 2: Second Blue Pen (Middle Left, Leaning Slightly) */}
          <g transform="rotate(2 58 150)">
            <rect x="52" y="30" width="9" height="150" rx="3.5" fill="url(#pen-blue-bright)" />
            <path d="M52 36 L56.5 14 L61 36 Z" fill="#0055e6" />
            <rect x="49" y="32" width="3" height="46" rx="1.5" fill="#0038a8" />
            <line x1="55.5" y1="28" x2="55.5" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          </g>

          {/* PEN 3: Red Pen (Center-Right, Vibrant Red) */}
          <g transform="rotate(9 80 150)">
            <rect x="74" y="26" width="9" height="150" rx="3.5" fill="url(#pen-red-vibrant)" />
            <path d="M74 32 L78.5 10 L83 32 Z" fill="#e60000" />
            <rect x="83" y="28" width="3" height="48" rx="1.5" fill="#990000" />
            <line x1="77.5" y1="22" x2="77.5" y2="160" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
          </g>

          {/* PEN 4: Black Pen (Far Right, Angled Outward) */}
          <g transform="rotate(16 102 150)">
            <rect x="96" y="34" width="9" height="150" rx="3.5" fill="url(#pen-black-sleek)" />
            <path d="M96 40 L100.5 18 L105 40 Z" fill="#181a20" />
            <rect x="105" y="36" width="3" height="46" rx="1.5" fill="#0b0c0e" />
            <line x1="99.5" y1="30" x2="99.5" y2="160" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {/* Wire Mesh Cup Body */}
      <div className="relative w-[88px] sm:w-[104px] md:w-[120px] flex flex-col items-center">
        {/* Top Metallic Rim Ring */}
        <div 
          className="w-full h-4 sm:h-5 rounded-full border border-[#484c56] relative z-20 overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.65)]"
          style={{
            background: 'linear-gradient(180deg, #444750 0%, #202227 50%, #111215 100%)'
          }}
        >
          <div className="absolute top-0 left-2 right-2 h-[1.5px] bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          <div className="w-[88%] h-[60%] mx-auto mt-0.5 rounded-full bg-[#0a0a0c] shadow-[inset_0_3px_5px_rgba(0,0,0,0.95)]" />
        </div>

        {/* Perforated Wire Mesh Cylinder */}
        <div 
          className="w-[94%] h-24 sm:h-28 md:h-32 -mt-2 relative overflow-hidden border-x border-[#2b2d34] z-10"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)'
          }}
        >
          {/* Background Interior (Showing Pen Bodies Through Mesh) */}
          <div className="absolute inset-0 bg-[#0e0f12]">
            <div className="absolute inset-0 opacity-60">
              <div className="w-2.5 h-full bg-[#0044cc] rotate-[-5deg] absolute left-4" />
              <div className="w-2.5 h-full bg-[#005ce6] rotate-[2deg] absolute left-8" />
              <div className="w-2.5 h-full bg-[#cc0000] rotate-[9deg] absolute left-12" />
              <div className="w-2.5 h-full bg-[#181a20] rotate-[16deg] absolute left-16" />
            </div>
          </div>

          {/* Wire Mesh Grid Overlay */}
          <div 
            className="absolute inset-0 mesh-wire-pattern opacity-95"
            style={{
              boxShadow: `
                inset 6px 0 10px rgba(0,0,0,0.85),
                inset -6px 0 10px rgba(0,0,0,0.85),
                inset 0 6px 8px rgba(0,0,0,0.7)
              `
            }}
          />

          {/* Cylindrical Highlight */}
          <div className="absolute top-0 bottom-0 left-[26%] w-5 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

          {/* Right Shadow */}
          <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
        </div>

        {/* Bottom Metal Base Collar */}
        <div 
          className="w-[90%] h-2.5 sm:h-3 -mt-1 rounded-b-md border-b border-x border-[#383b42] relative z-20 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #282a30 0%, #121316 100%)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.85)'
          }}
        >
          <div className="w-full h-[1px] bg-white/25" />
        </div>

        {/* Contact Shadow Under Cup on Desk */}
        <div className="w-[84%] h-2.5 bg-[#250e03]/95 blur-[2px] rounded-full -mt-0.5" />
        
        {/* Soft Ambient Shadow on Desk */}
        <div className="w-full h-4 bg-[#230d02]/50 blur-[5px] rounded-full -mt-1.5" />
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * WOODEN DESK SUBCOMPONENT
 * ============================================================================
 */
function Desk() {
  return (
    <div className="relative w-full select-none pointer-events-none">
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="real-wood-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04 0.003"
              numOctaves="5"
              seed="18"
              result="fibers"
            />
            <feColorMatrix
              type="matrix"
              values="
                0.45 0    0    0   0.72
                0.28 0.12 0    0   0.40
                0.05 0.10 0.08 0   0.12
                0    0    0    1   0"
              in="fibers"
              result="woodBase"
            />
          </filter>
        </defs>
      </svg>

      {/* Main Top Horizontal Desk Surface */}
      <div 
        className="relative w-full h-[72px] sm:h-[88px] md:h-[104px] lg:h-28 rounded-t-[6px] sm:rounded-t-[8px] md:rounded-t-[10px] overflow-hidden border-t border-x border-[#ffc685]/45 shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
        style={{
          backgroundColor: '#b6601c',
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(255, 180, 95, 0.55) 0%, 
              rgba(220, 125, 45, 0.28) 22%, 
              rgba(155, 70, 18, 0.38) 60%, 
              rgba(90, 35, 6, 0.65) 100%
            ),
            radial-gradient(ellipse at 25% 45%, rgba(255, 205, 125, 0.38) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 35%, rgba(130, 48, 8, 0.45) 0%, transparent 60%),
            repeating-linear-gradient(
              0deg,
              #bf6922 0px,
              #a34f13 3px,
              #cd782b 7px,
              #91400a 12px,
              #b8621e 19px,
              #e29246 25px,
              #883807 32px,
              #b05b18 40px,
              #c56f26 50px,
              #7b3004 60px,
              #bd6620 74px
            )
          `
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 w-[1.5px] bg-gradient-to-b from-white/40 via-white/15 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[1.5px] bg-gradient-to-b from-white/40 via-white/15 to-transparent z-20 pointer-events-none" />

        <div 
          className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none"
          style={{ filter: 'url(#real-wood-grain)' }}
        />

        <div className="absolute inset-0 desk-lacquer-shine opacity-80 mix-blend-screen pointer-events-none" />

        {/* Surface Reflections */}
        <div className="absolute inset-0 w-full flex justify-center md:justify-between pointer-events-none">
          {/* 1. Left Reflection: White Plant Pot */}
          <div className="hidden md:flex w-48 sm:w-56 md:w-64 justify-start">
            <div className="w-36 sm:w-40 md:w-44 ml-2 sm:ml-4 md:ml-6 flex flex-col items-center opacity-50 blur-[2px] pointer-events-none">
              <div 
                className="w-full h-1/3"
                style={{
                  background: 'linear-gradient(180deg, rgba(80,210,65,0.45) 0%, rgba(255,255,255,0.7) 100%)'
                }}
              />
              <div 
                className="w-20 sm:w-24 md:w-[104px] h-2/3"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.1) 80%, transparent 100%)'
                }}
              />
            </div>
          </div>

          {/* 2. Center Reflection: Monitor Stand */}
          <div className="w-full md:flex-1 flex justify-center px-2 sm:px-4">
            <div className="w-48 sm:w-76 md:w-84 flex flex-col items-center opacity-48 pointer-events-none">
              <div 
                className="w-full h-1/2 blur-[4px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,115,245,0.38) 0%, rgba(0,85,210,0.18) 35%, transparent 85%)'
                }}
              />
              <div 
                className="w-44 sm:w-72 md:w-80 h-1/2 blur-[1.5px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(12,13,16,0.85) 0%, rgba(18,14,10,0.35) 45%, transparent 100%)'
                }}
              />
            </div>
          </div>

          {/* 3. Right Reflection: Pen Holder */}
          <div className="hidden md:flex w-48 sm:w-56 md:w-64 justify-end">
            <div className="w-24 sm:w-28 md:w-32 mr-8 sm:mr-14 md:mr-20 lg:mr-24 flex flex-col items-center opacity-45 blur-[1.5px] pointer-events-none">
              <div className="w-full h-1/3 flex justify-center gap-1.5">
                <div className="w-2 h-full bg-[#0055ff]/40" />
                <div className="w-2 h-full bg-[#ff2222]/40" />
                <div className="w-2 h-full bg-[#111111]/40" />
              </div>
              <div 
                className="w-[72px] sm:w-[88px] md:w-24 h-2/3"
                style={{
                  background: 'linear-gradient(180deg, rgba(12,13,16,0.85) 0%, rgba(18,14,10,0.3) 50%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>

        <div 
          className="absolute top-[26%] left-0 right-0 h-6 sm:h-10 bg-gradient-to-b from-transparent via-white/22 to-transparent pointer-events-none blur-[1px]"
        />
      </div>

      {/* Desk Front Edge */}
      <div className="relative w-full">
        <div className="w-full h-[2px] bg-gradient-to-r from-[#e89b52]/40 via-[#fff2d8] to-[#e89b52]/40 shadow-[0_1px_3px_rgba(255,245,220,0.65)] z-20 relative" />
        <div 
          className="w-full h-6 sm:h-7 md:h-8 rounded-b-[4px] relative overflow-hidden z-10 border-x border-[#733308]"
          style={{
            background: `
              linear-gradient(180deg, 
                #853706 0%, 
                #5a2304 60%, 
                #3d1602 100%
              )
            `,
            boxShadow: `
              0 6px 14px rgba(0,0,0,0.35),
              0 14px 28px rgba(0,0,0,0.25)
            `
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-l from-black/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * DESK FRONT LEGS SUBCOMPONENT
 * ============================================================================
 */
function DeskFront() {
  return (
    <div className="relative w-full h-16 sm:h-20 md:h-24 select-none pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-5 sm:h-6 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-20 pointer-events-none" />

      {/* Left Desk Leg */}
      <div 
        className="absolute top-0 bottom-0 left-4 sm:left-10 md:left-16 w-6 sm:w-10 md:w-12 z-10 overflow-hidden"
        style={{
          background: `
            linear-gradient(90deg, 
              #8c3f09 0%, 
              #b45b1c 30%, 
              #783407 75%, 
              #3d1902 100%
            ),
            repeating-linear-gradient(
              0deg,
              #803808 0px,
              #9c460e 12px,
              #6f2e05 28px,
              #8d3f0b 45px
            )
          `,
          boxShadow: `
            -2px 0 4px rgba(0,0,0,0.3) inset,
            6px 0 12px rgba(0,0,0,0.45)
          `
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-white/30" />
        <div className="absolute top-0 bottom-0 right-0 w-2.5 bg-gradient-to-l from-black/75 to-transparent" />
      </div>

      {/* Right Desk Leg */}
      <div 
        className="absolute top-0 bottom-0 right-4 sm:right-10 md:right-16 w-6 sm:w-10 md:w-12 z-10 overflow-hidden"
        style={{
          background: `
            linear-gradient(90deg, 
              #3d1902 0%, 
              #783407 25%, 
              #b45b1c 70%, 
              #8c3f09 100%
            ),
            repeating-linear-gradient(
              0deg,
              #803808 0px,
              #9c460e 12px,
              #6f2e05 28px,
              #8d3f0b 45px
            )
          `,
          boxShadow: `
            2px 0 4px rgba(0,0,0,0.3) inset,
            -6px 0 12px rgba(0,0,0,0.45)
          `
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-white/30" />
        <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-black/75 to-transparent" />
      </div>
    </div>
  );
}

/**
 * ============================================================================
 * MAIN LIVETV PRIMARY COMPONENT
 * ============================================================================
 */
export default function LiveTV() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allCards = liveTvData.channels || [];
  const cardsPerPage = isMobile ? liveTvData.config.cardsPerPageMobile : liveTvData.config.cardsPerPageDesktop;
  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  const activePage = Math.min(currentPage, totalPages);

  const startIndex = (activePage - 1) * cardsPerPage;
  const currentCards = allCards.slice(startIndex, startIndex + cardsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <>
      {/* Embedded Component Styles */}
      <LiveTVStyles />

      <main 
        className="relative w-full min-h-screen flex flex-col justify-between overflow-x-hidden select-none pt-12 pb-6 sm:py-8 md:py-10 px-2 sm:px-4"
        style={{
          background: 'radial-gradient(ellipse at 50% 28%, #ffffff 0%, #f6f7fa 45%, #e6eaf1 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-transparent to-black/5 pointer-events-none" />

        {/* Page Top Header */}
        <header className="relative w-full max-w-2xl mx-auto text-center pt-1 sm:pt-2 md:pt-4 px-4 z-20 anim-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-xs mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-red-700 font-extrabold text-[10px] sm:text-xs tracking-wider uppercase">
              CR REAL TIME NEWS • {liveTvData.header.badge || 'LIVE STREAM'}
            </span>
          </div>

          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-sans mb-2"
          >
            {liveTvData.header.title}
          </h1>

          {/* Broadcast Red Accent Line */}
          <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mb-2.5 shadow-xs" />

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-lg mx-auto font-normal">
            {liveTvData.header.description}
          </p>
        </header>

        {/* Main Setup Center Stage */}
        <div className="relative w-full max-w-[1400px] lg:max-w-[1460px] mx-auto px-2 sm:px-6 md:px-8 flex-1 flex flex-col justify-end z-10">
          
          {/* Upper Row: Monitor, Plant, and Pen Holder */}
          <div className="relative w-full flex items-end justify-center md:justify-between pb-0 pt-2 sm:pt-4 md:pt-6">
            
            {/* Left Column: Original Houseplant (Hidden on mobile) */}
            <div className="hidden md:flex w-48 sm:w-56 md:w-64 justify-start z-10 anim-plant">
              <div className="flex-shrink-0 ml-2 sm:ml-4 md:ml-6">
                <Plant />
              </div>
            </div>

            {/* Center Column: Monitor */}
            <div className="w-full md:flex-1 max-w-[420px] sm:max-w-[620px] md:max-w-[800px] lg:max-w-[840px] flex justify-center z-20 px-1 sm:px-4 anim-monitor">
              <div className="w-full">
                <Monitor 
                  currentCards={currentCards}
                  activePage={activePage}
                  totalPages={totalPages}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  isMobile={isMobile}
                />
              </div>
            </div>

            {/* Right Column: Original Pen Holder (Shifted inward from table edge) */}
            <div className="hidden md:flex w-48 sm:w-56 md:w-64 justify-end z-10 anim-penholder">
              <div className="flex-shrink-0 mr-8 sm:mr-14 md:mr-20 lg:mr-24">
                <PenHolder />
              </div>
            </div>

          </div>

          {/* Lower Section: Standalone Wooden Desk & Legs (Firmly docked under the monitor, plant & pen holder) */}
          <div className="relative w-full max-w-[95%] sm:max-w-[96%] md:max-w-[1260px] mx-auto flex flex-col z-0 anim-desk -mt-8 sm:-mt-11 md:-mt-14 lg:-mt-16">
            <Desk />
            <DeskFront />
          </div>

        </div>
      </main>
    </>
  );
}

export { LiveTV, LiveTV as LiveTVPage };
