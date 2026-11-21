import React, { useState, useEffect } from 'react';
import { NEWS_CARDS } from './BreakingNewsPageData.js';

/**
 * BreakingNews Component
 * Combines header, live broadcast controls, 3D glossy cartoon cassette mascot,
 * paginated news cards (36 cards across 6 pages), and complete styling/animations.
 */
export default function BreakingNews({ className = '' }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(NEWS_CARDS.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = NEWS_CARDS.slice(startIndex, startIndex + cardsPerPage);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage(p => Math.min(totalPages, p + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage(p => Math.max(1, p - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Choreographed directional entrance animation:
  // Line 1: Middle card from top, Left & Right from sides
  // Line 2: Middle card from bottom, Left & Right from sides
  const getCardAnimation = (index) => {
    const baseDelay = hasLoaded ? 0 : 0.88;
    switch (index) {
      case 1: // Row 1 Middle (First) - from Top
        return { animation: `cardFlyFromTop 0.48s cubic-bezier(0.16, 1, 0.3, 1) ${(baseDelay + 0.04).toFixed(2)}s both` };
      case 0: // Row 1 Left (Second) - from Left
        return { animation: `cardFlyFromLeft 0.48s cubic-bezier(0.16, 1, 0.3, 1) ${(baseDelay + 0.16).toFixed(2)}s both` };
      case 2: // Row 1 Right (Second) - from Right
        return { animation: `cardFlyFromRight 0.48s cubic-bezier(0.16, 1, 0.3, 1) ${(baseDelay + 0.16).toFixed(2)}s both` };
      case 4: // Row 2 Middle (Third) - comes from BOTTOM (niche se aayega)
        return { animation: `cardFlyFromBottom 0.48s cubic-bezier(0.16, 1, 0.3, 1) ${(baseDelay + 0.28).toFixed(2)}s both` };
      case 3: // Row 2 Left (Fourth) - from Left
        return { animation: `cardFlyFromLeft 0.48s cubic-bezier(0.16, 1, 0.3, 1) ${(baseDelay + 0.40).toFixed(2)}s both` };
      case 5: // Row 2 Right (Fourth) - from Right
        return { animation: `cardFlyFromRight 0.48s cubic-bezier(0.16, 1, 0.3, 1) ${(baseDelay + 0.40).toFixed(2)}s both` };
      default:
        return {};
    }
  };

  return (
    <main className={`min-h-screen w-full bg-white flex flex-col items-center justify-start px-4 pt-12 sm:pt-14 md:pt-16 pb-8 sm:px-6 select-none overflow-x-hidden ${className}`}>
      {/* Self-contained Keyframes & Utility Animations shifted from index.css */}
      <style>{`
        /* Custom 3D metallic & gloss utility animations */
        @keyframes floatSway {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.4deg); }
        }
        @keyframes waveHand {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-6deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes pulseGleam {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        @keyframes pageBadgeIn {
          0% { opacity: 0; transform: translateY(-22px) scale(0.92); }
          60% { opacity: 1; transform: translateY(2px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pageTitleIn {
          0% { opacity: 0; transform: translateY(-28px) scale(0.96); }
          60% { opacity: 1; transform: translateY(3px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pageDescIn {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pageMascotIn {
          0% { opacity: 0; transform: translateY(45px) scale(0.97); }
          70% { opacity: 1; transform: translateY(-3px) scale(1.005); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cardFlyFromTop {
          0% { opacity: 0; transform: translateY(-75px); }
          60% { opacity: 0.95; transform: translateY(2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardFlyFromLeft {
          0% { opacity: 0; transform: translateX(-95px); }
          60% { opacity: 0.95; transform: translateX(3px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardFlyFromRight {
          0% { opacity: 0; transform: translateX(95px); }
          60% { opacity: 0.95; transform: translateX(-3px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardFlyFromBottom {
          0% { opacity: 0; transform: translateY(75px); }
          60% { opacity: 0.95; transform: translateY(-2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pageNumPop {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        @keyframes partFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes partDropIn {
          0% { opacity: 0; transform: translateY(-50px); }
          65% { opacity: 0.95; transform: translateY(3px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes partBodyDrop {
          0% { opacity: 0; transform: translateY(-60px); }
          70% { opacity: 1; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes partSlideFromLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          70% { opacity: 1; transform: translateX(3px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes partSlideFromRight {
          0% { opacity: 0; transform: translateX(60px); }
          70% { opacity: 1; transform: translateX(-3px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes partPopIn {
          0% { opacity: 0; transform: scale(0.94); }
          70% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes partScreenTurnOn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-float {
          animation: floatSway 4s ease-in-out infinite;
        }
        .animate-wave {
          transform-origin: 155px 175px;
          animation: waveHand 2.2s ease-in-out infinite;
        }
        .animate-gleam {
          animation: pulseGleam 3s ease-in-out infinite;
        }
        .animate-page-badge {
          animation: pageBadgeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .animate-page-title {
          animation: pageTitleIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
        }
        .animate-page-desc {
          animation: pageDescIn 0.7s ease-out 0.32s both;
        }
        .animate-page-mascot {
          animation: pageMascotIn 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both;
        }
        .animate-page-num-pop {
          animation: pageNumPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .brushed-metal-pattern {
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.08) 0px,
            rgba(255, 255, 255, 0.08) 1px,
            transparent 1px,
            transparent 4px
          );
        }
      `}</style>

      {/* Top Header Section */}
      <header className="w-full max-w-4xl text-center pt-2 pb-3 flex flex-col items-center">
        {/* Live Broadcast Pill - Staggered 1st */}
        <div className="animate-page-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-2 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
          CR LIVE BROADCAST
        </div>

        {/* Main Heading: BREAKING NEWS - Staggered 2nd */}
        <h1 className="animate-page-title text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
          BREAKING NEWS
        </h1>

        {/* Description: 2 to 3 lines, exactly 34 words - Staggered 3rd */}
        <p className="animate-page-desc mt-2 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
          Stay ahead with CR Real Time News Channel delivering live coverage of the Global Tech Innovation and Cultural Fest 2026. Discover exclusive keynote broadcasts, interactive exhibits, and groundbreaking announcements unfolding across the world today.
        </p>
      </header>

      {/* Mascot Presentation Stage */}
      <div className="w-full max-w-[1120px] flex items-center justify-center flex-1 px-2 py-2">
        <div className="relative select-none flex items-center justify-center w-full h-auto">
<svg
        viewBox="-30 -50 1520 1380"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Card Screen Clip Path to keep transitions cleanly inside monitor */}
          <clipPath id="cardsScreenClip">
            <rect x="160" y="193" width="1040" height="439" rx="26" />
          </clipPath>

          {/* Embedded SVG Animation Styles */}
          <style>{`
            @keyframes cardFlyFromTop {
              0% { opacity: 0; transform: translateY(-75px); }
              60% { opacity: 0.95; transform: translateY(2px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes cardFlyFromLeft {
              0% { opacity: 0; transform: translateX(-95px); }
              60% { opacity: 0.95; transform: translateX(3px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes cardFlyFromRight {
              0% { opacity: 0; transform: translateX(95px); }
              60% { opacity: 0.95; transform: translateX(-3px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes cardFlyFromBottom {
              0% { opacity: 0; transform: translateY(75px); }
              60% { opacity: 0.95; transform: translateY(-2px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes pageNumPop {
              0% { opacity: 0.3; }
              100% { opacity: 1; }
            }
            @keyframes partFadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes partDropIn {
              0% { opacity: 0; transform: translateY(-50px); }
              65% { opacity: 0.95; transform: translateY(3px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes partBodyDrop {
              0% { opacity: 0; transform: translateY(-60px); }
              70% { opacity: 1; transform: translateY(4px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes partSlideFromLeft {
              0% { opacity: 0; transform: translateX(-60px); }
              70% { opacity: 1; transform: translateX(3px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes partSlideFromRight {
              0% { opacity: 0; transform: translateX(60px); }
              70% { opacity: 1; transform: translateX(-3px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes partPopIn {
              0% { opacity: 0; transform: scale(0.94); }
              70% { opacity: 1; transform: scale(1.02); }
              100% { opacity: 1; transform: scale(1); }
            }
            @keyframes partScreenTurnOn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}</style>
          {/* ========================================================= */}
          {/* 1. REAL BRUSHED METAL & 3D LIGHTING SHADERS               */}
          {/* ========================================================= */}

          {/* Brushed aluminum micro-texture filter */}
          <filter id="brushedTexture" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.95" numOctaves="3" result="noise" />
            <feColorMatrix
              type="matrix"
              values="0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0.33 0.33 0.33 0 0
                      0    0    0    0.15 0"
              in="noise"
              result="monoNoise"
            />
            <feBlend mode="overlay" in="SourceGraphic" in2="monoNoise" />
          </filter>

          {/* Soft Ground Contact Shadow Blur */}
          <filter id="shadowBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="20" />
          </filter>

          {/* Cyan Glow Filter for Nose Sensor */}
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Pipe Specular Glow */}
          <filter id="pipeSpecularGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Lace Drop Shadow Filter */}
          <filter id="laceShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.3" />
          </filter>

          {/* ========================================================= */}
          {/* 2. GRADIENT DEFINITIONS                                   */}
          {/* ========================================================= */}

          {/* Metallic Silver Outer Bevel (Multi-stop Chrome) */}
          <linearGradient id="chromeBevel" x1="0%" y1="0%" x2="100%" y2="85%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="14%" stopColor="#FFFFFF" />
            <stop offset="28%" stopColor="#94A3B8" />
            <stop offset="44%" stopColor="#E2E8F0" />
            <stop offset="58%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#64748B" />
            <stop offset="90%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Brushed Face Surface Gradient */}
          <linearGradient id="brushedFace" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="16%" stopColor="#E2E8F0" />
            <stop offset="38%" stopColor="#F8FAFC" />
            <stop offset="50%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#F1F5F9" />
            <stop offset="90%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Cassette Right 3D Side Panel (Royal Blue) */}
          <linearGradient id="blueSidePanel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="22%" stopColor="#2563EB" />
            <stop offset="65%" stopColor="#1D4ED8" />
            <stop offset="88%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>

          {/* Screen Outer Orange Gasket */}
          <linearGradient id="orangeGasket" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="35%" stopColor="#F97316" />
            <stop offset="70%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>

          {/* Screen Inner Cyan Border */}
          <linearGradient id="cyanBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="45%" stopColor="#0284C7" />
            <stop offset="85%" stopColor="#0369A1" />
            <stop offset="100%" stopColor="#0C4A6E" />
          </linearGradient>

          {/* Screen Glossy Interior Gradient */}
          <radialGradient id="screenGloss" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#E0F2FE" />
            <stop offset="75%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </radialGradient>

          {/* Screen Specular Diagonal Glare */}
          <linearGradient id="screenGlare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.0" />
          </linearGradient>

          {/* Sclera Shading */}
          <radialGradient id="scleraGrad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="78%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </radialGradient>

          {/* Nose / Tape Head Navy Pill */}
          <linearGradient id="tapeHeadPill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>

          {/* Glowing Cyan Tape Spool Window */}
          <linearGradient id="cyanWindow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="35%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* 3D Tongue Red Gradient */}
          <radialGradient id="tongueGrad" cx="50%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFA4A4" />
            <stop offset="25%" stopColor="#EF4444" />
            <stop offset="75%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </radialGradient>

          {/* Mouth Cavity Interior */}
          <radialGradient id="mouthCavity" cx="50%" cy="65%" r="65%">
            <stop offset="0%" stopColor="#4A0413" />
            <stop offset="70%" stopColor="#270713" />
            <stop offset="100%" stopColor="#0D0307" />
          </radialGradient>

          {/* Futuristic Screen Card Gradients */}
          <linearGradient id="cardBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>

          <linearGradient id="cardHeaderGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="liveBadgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          <linearGradient id="ctaBtnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="eqBarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          {/* 3D Cylindrical Pipe Shading Gradients */}
          <linearGradient id="pipe3DCylinder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#09090B" />
            <stop offset="20%" stopColor="#18181B" />
            <stop offset="42%" stopColor="#3F3F46" />
            <stop offset="50%" stopColor="#71717A" />
            <stop offset="58%" stopColor="#27272A" />
            <stop offset="85%" stopColor="#18181B" />
            <stop offset="100%" stopColor="#09090B" />
          </linearGradient>

          {/* Wrist & Ankle Torus Rings */}
          <linearGradient id="ringOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="25%" stopColor="#FB923C" />
            <stop offset="60%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>

          <linearGradient id="ringBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="30%" stopColor="#3B82F6" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>

          {/* White Glove Shading */}
          <radialGradient id="gloveWhite" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F8FAFC" />
            <stop offset="88%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </radialGradient>

          <radialGradient id="fistWhite" cx="50%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#F8FAFC" />
            <stop offset="85%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </radialGradient>

          {/* ========================================================= */}
          {/* 3. DEDICATED 3D SNEAKER GRADIENTS (From Sneaker Master Ref) */}
          {/* ========================================================= */}

          {/* Sneaker White Leather Upper (3D Volumetric) */}
          <radialGradient id="sneakerLeatherWhite" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F8FAFC" />
            <stop offset="85%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </radialGradient>

          {/* Sneaker Royal Blue Mudguard & Accents */}
          <linearGradient id="sneakerRoyalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="25%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Sneaker Orange Side Accent Badge */}
          <linearGradient id="sneakerOrangeBadge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="25%" stopColor="#FB923C" />
            <stop offset="70%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>

          {/* Sneaker Metallic Silver Heel & Eyestay Panels */}
          <linearGradient id="sneakerSilverChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#CBD5E1" />
            <stop offset="65%" stopColor="#94A3B8" />
            <stop offset="85%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Sneaker Chunky Chrome Toe Bumper */}
          <linearGradient id="sneakerChromeBumper" x1="0%" y1="0%" x2="100%" y2="85%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="75%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Sneaker Midsole (Sculpted White Rubber) */}
          <linearGradient id="sneakerMidsoleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#F1F5F9" />
            <stop offset="80%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Sneaker Royal Blue Outsole with Deep Tread Grooves */}
          <linearGradient id="sneakerOutsoleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="40%" stopColor="#1D4ED8" />
            <stop offset="80%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Sneaker Shoelace Shading */}
          <linearGradient id="shoelaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>



          {/* Soft Floor Shadow */}
          <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#334155" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#64748B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* =================================================================== */}
        {/* 1. GROUND SHADOW (Broad, Realistic Stage Ground Shadow)              */}
        {/* =================================================================== */}
        <g id="animShadowWrapper" style={hasLoaded ? undefined : { animation: 'partFadeIn 0.5s ease-out 0.10s both' }}>
          <g id="groundShadowGroup">
            <ellipse cx="730" cy="1245" rx="740" ry="48" fill="url(#floorShadow)" />
            {/* Contact shadow under Left Hero Sneaker */}
            <ellipse cx="280" cy="1252" rx="210" ry="30" fill="#0F172A" opacity="0.6" filter="url(#shadowBlur)" />
            {/* Contact shadow under Right Sneaker */}
            <ellipse cx="900" cy="1245" rx="180" ry="28" fill="#0F172A" opacity="0.55" filter="url(#shadowBlur)" />
          </g>
        </g>

        {/* =================================================================== */}
        {/* 4. BLACK TUBULAR LEGS (Seamless connection into shoe ankle rings)   */}
        {/* =================================================================== */}
        <g id="animLegsWrapper" style={hasLoaded ? undefined : { animation: 'partDropIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.36s both' }}>
          <g id="legsConnectionGroup">
            {/* Left Leg: Enters naturally into left shoe ankle at (X: 345, Y: 1047) with full dynamic length */}
            <g id="leftLegPipe">
              <path
                d="M 380 825 C 370 895, 355 975, 345 1047"
                fill="none"
                stroke="#09090B"
                strokeWidth="68"
                strokeLinecap="round"
              />
              <path
                d="M 380 825 C 370 895, 355 975, 345 1047"
                fill="none"
                stroke="url(#pipe3DCylinder)"
                strokeWidth="60"
                strokeLinecap="round"
              />
              <path
                d="M 374 825 C 364 895, 350 975, 340 1045"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.8"
                filter="url(#pipeSpecularGlow)"
              />
            </g>

            {/* Right Leg: Enters naturally into right shoe ankle at (X: 810, Y: 1037) with full dynamic bend */}
            <g id="rightLegPipe">
              <path
                d="M 830 825 C 765 895, 645 935, 655 980 C 670 1025, 740 1030, 810 1037"
                fill="none"
                stroke="#09090B"
                strokeWidth="68"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 830 825 C 765 895, 645 935, 655 980 C 670 1025, 740 1030, 810 1037"
                fill="none"
                stroke="url(#pipe3DCylinder)"
                strokeWidth="60"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 820 825 C 758 895, 638 935, 648 980 C 662 1025, 735 1030, 805 1033"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.8"
                filter="url(#pipeSpecularGlow)"
              />
            </g>
          </g>
        </g>

        {/* =================================================================== */}
        {/* 4b. WAVING ARM TUBE (Attached to SIDE of body, behind front bezel)  */}
        {/* =================================================================== */}
        <g id="animLeftArmTube" style={hasLoaded ? undefined : { animation: 'partSlideFromLeft 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both' }}>
          <g id="wavingArmTubeBehindBody">
            {/* Black Cylindrical Arm Tube: Emerges from lateral side behind silver frame at X: 75, Y: 430 */}
            <path
              d="M 75 430 C 5 450, -25 340, -25 235 C -25 125, 20 45, 105 50"
              fill="none"
              stroke="#09090B"
              strokeWidth="68"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 75 430 C 5 450, -25 340, -25 235 C -25 125, 20 45, 105 50"
              fill="none"
              stroke="url(#pipe3DCylinder)"
              strokeWidth="60"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 70 420 C 12 440, -18 335, -18 235 C -18 130, 25 53, 100 55"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.8"
              filter="url(#pipeSpecularGlow)"
            />
          </g>
        </g>

        {/* =================================================================== */}
        {/* 5. CASSETTE BODY (SUBSTANTIALLY EXPANDED HEIGHT & WIDTH)            */}
        {/* =================================================================== */}
        <g id="cassetteBodyAnchor">
          {/* Main Chassis: Blue Side Panel + Lip + Metallic Frame Drops into place at 0.50s */}
          <g id="animCassetteChassis" style={hasLoaded ? undefined : { animation: 'partBodyDrop 0.6s cubic-bezier(0.2, 1.15, 0.4, 1) 0.50s both' }}>
            {/* Blue Side Panel (Aligned with Expanded Frame at X: 1285) */}
            <g id="blueRightSidePanel">
            <path
              d="M 1285 85 
                 L 1395 127 
                 C 1420 137, 1435 155, 1430 180 
                 L 1392 780 
                 C 1388 805, 1368 825, 1342 832 
                 L 1285 840 
                 Z"
              fill="url(#blueSidePanel)"
              stroke="#0F172A"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              d="M 1395 127 C 1420 137, 1435 155, 1430 180 L 1392 780"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="5"
              opacity="0.8"
            />
            <rect x="1335" y="195" width="54" height="11" rx="5.5" fill="#080C17" />
            <rect x="1332" y="230" width="54" height="11" rx="5.5" fill="#080C17" />
            <rect x="1329" y="265" width="54" height="11" rx="5.5" fill="#080C17" />
            <rect x="1326" y="300" width="54" height="11" rx="5.5" fill="#080C17" />
            {/* Right Arm Recessed Socket Hole */}
            <ellipse cx="1345" cy="515" rx="44" ry="36" fill="#080C17" stroke="#1E3A8A" strokeWidth="4" />
            <ellipse cx="1345" cy="515" rx="34" ry="28" fill="#030712" />
            <rect x="1310" y="665" width="50" height="11" rx="5.5" fill="#080C17" />
            <rect x="1307" y="700" width="50" height="11" rx="5.5" fill="#080C17" />
            <rect x="1304" y="735" width="50" height="11" rx="5.5" fill="#080C17" />
          </g>

          {/* Under-chassis Lip */}
          <path d="M 75 818 L 1285 826 L 1280 842 L 80 834 Z" fill="#1D4ED8" stroke="#0F172A" strokeWidth="4" />

          {/* Metallic Silver Frame (Height: 735px, Width: 1215px) */}
          <g id="metallicSilverFrame">
            <path
              d="M 115 105 
                 L 1240 80 
                 C 1270 77, 1285 90, 1285 125 
                 L 1285 795 
                 C 1285 827, 1270 840, 1240 840 
                 L 115 830 
                 C 85 830, 70 813, 70 780 
                 L 70 155 
                 C 70 125, 85 105, 115 105 
                 Z"
              fill="url(#chromeBevel)"
              stroke="#475569"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              d="M 123 115 
                 L 1232 92 
                 C 1258 90, 1272 100, 1272 130 
                 L 1272 783 
                 C 1272 811, 1258 825, 1232 825 
                 L 123 815 
                 C 97 815, 83 800, 83 770 
                 L 83 162 
                 C 83 135, 97 115, 123 115 
                 Z"
              fill="url(#brushedFace)"
              filter="url(#brushedTexture)"
              opacity="0.95"
            />

            {/* Bottom Cassette Deck Indent with Pagination Controls */}
            <g id="cassetteTapeDeckIndent">
              <path
                d="M 100 760 L 235 675 L 1130 670 L 1265 745 L 1245 800 L 120 800 Z"
                fill="#CBD5E1"
                stroke="#64748B"
                strokeWidth="3"
                opacity="0.75"
              />
              <path
                d="M 245 685 L 1120 680 L 1105 785 L 260 785 Z"
                fill="url(#brushedFace)"
                stroke="#94A3B8"
                strokeWidth="2.5"
              />

              {/* Bottom Interactive Pagination Deck: PREV, PAGE NUMBER, NEXT */}
              <g id="animBottomDeckWrapper" style={hasLoaded ? undefined : { animation: 'partPopIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.78s both' }}>
                <g id="bottomDeckPaginationControls">
                  {/* PREVIOUS BUTTON */}
                  <g
                    id="prevDeckBtn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (currentPage > 1) {
                        setCurrentPage(p => Math.max(1, p - 1));
                      }
                    }}
                    style={{ cursor: currentPage > 1 ? 'pointer' : 'not-allowed', opacity: currentPage > 1 ? 1 : 0.35 }}
                    className="select-none"
                  >
                    <rect
                      x="290"
                      y="710"
                      width="180"
                      height="50"
                      rx="25"
                      fill="url(#ctaBtnGrad)"
                      stroke="#60A5FA"
                      strokeWidth="1.5"
                      className="transition-opacity duration-150 hover:opacity-90 active:opacity-75 cursor-pointer"
                      filter="drop-shadow(0 3px 6px rgba(15, 23, 42, 0.35))"
                    />
                    <text
                      x="380"
                      y="741"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="14.5"
                      fontWeight="900"
                      letterSpacing="1"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      className="pointer-events-none"
                    >
                      ◀ PREV
                    </text>
                  </g>

                  {/* MIDDLE DIGITAL PAGE NUMBER DISPLAY (e.g., Page 1 of 6) */}
                  <g id="middlePageCounterDisplay" className="select-none">
                    {/* Digital Glass Housing */}
                    <rect
                      x="530"
                      y="708"
                      width="300"
                      height="54"
                      rx="15"
                      fill="#050B17"
                      stroke="#1E3A8A"
                      strokeWidth="2"
                      filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))"
                    />
                    {/* Inner Dark LED Screen */}
                    <rect x="536" y="714" width="288" height="42" rx="11" fill="#0A1428" />

                    {/* Pulsing Live Red Indicator */}
                    <circle cx="564" cy="735" r="5" fill="#EF4444">
                      <animate attributeName="opacity" values="1;0.25;1" dur="1.2s" repeatCount="indefinite" />
                    </circle>

                    {/* Dynamic Page Number Indicator with Animated Refresh Pop */}
                    <text
                      key={currentPage}
                      x="685"
                      y="741"
                      textAnchor="middle"
                      fill="#38BDF8"
                      fontSize="17"
                      fontWeight="900"
                      letterSpacing="2.5"
                      fontFamily="monospace, system-ui, sans-serif"
                      className="animate-page-num-pop pointer-events-none"
                    >
                      PAGE {currentPage} OF {totalPages}
                    </text>
                  </g>

                  {/* NEXT BUTTON */}
                  <g
                    id="nextDeckBtn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (currentPage < totalPages) {
                        setCurrentPage(p => Math.min(totalPages, p + 1));
                      }
                    }}
                    style={{ cursor: currentPage < totalPages ? 'pointer' : 'not-allowed', opacity: currentPage < totalPages ? 1 : 0.35 }}
                    className="select-none"
                  >
                    <rect
                      x="890"
                      y="710"
                      width="180"
                      height="50"
                      rx="25"
                      fill="url(#ctaBtnGrad)"
                      stroke="#60A5FA"
                      strokeWidth="1.5"
                      className="transition-opacity duration-150 hover:opacity-90 active:opacity-75 cursor-pointer"
                      filter="drop-shadow(0 3px 6px rgba(15, 23, 42, 0.35))"
                    />
                    <text
                      x="980"
                      y="741"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="14.5"
                      fontWeight="900"
                      letterSpacing="1"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      className="pointer-events-none"
                    >
                      NEXT ▶
                    </text>
                  </g>
                </g>
              </g>

              {/* Blue Cassette Accent Slot Line */}
              <rect x="290" y="774" width="780" height="8" rx="4" fill="#1D4ED8" opacity="0.8" />
              <rect x="300" y="776" width="760" height="2" rx="1" fill="#60A5FA" opacity="0.6" />
            </g>
            <path d="M 90 145 C 80 195, 82 275, 82 380" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
            <path d="M 125 112 L 1230 88" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.8" />

            {/* Top Frame Heading: CR REAL TIME NEWS CHANNEL (Centered on Expanded Top Banner) */}
            <g id="animTopBrandingWrapper" style={hasLoaded ? undefined : { animation: 'partPopIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.70s both' }}>
              <g id="topBodyNewsBranding" transform="rotate(-1.4 680 135)">
                {/* 3D Metallic Engraved White Bevel Shadow */}
                <text
                  x="680"
                  y="137"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="24"
                  fontWeight="900"
                  letterSpacing="4.5"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  opacity="0.9"
                >
                  CR REAL TIME NEWS CHANNEL
                </text>
                {/* Sharp High-Definition Typography */}
                <text
                  x="680"
                  y="135.5"
                  textAnchor="middle"
                  fontSize="24"
                  fontWeight="900"
                  letterSpacing="4.5"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  <tspan fill="#DC2626" fontWeight="950">CR </tspan>
                  <tspan fill="#0F172A">REAL TIME NEWS CHANNEL</tspan>
                </text>
              </g>
            </g>
          </g>
        </g>

        {/* Card Screen Panel (Expanded 3x2 Grid of Live News Cards - 6 per screen) */}
        <g id="animFaceScreenWrapper" style={hasLoaded ? undefined : { animation: 'partScreenTurnOn 0.5s ease-out 0.82s both' }}>
          <g id="facePanelScreen">
            <rect x="130" y="165" width="1100" height="495" rx="36" fill="url(#orangeGasket)" stroke="#9A3412" strokeWidth="4.5" />
            <rect x="146" y="181" width="1068" height="463" rx="30" fill="url(#cyanBorder)" stroke="#0284C7" strokeWidth="3.5" />
            <rect x="160" y="193" width="1040" height="439" rx="26" fill="#0A0F1D" />
            <path d="M 165 199 L 1130 179 C 960 320, 600 410, 165 440 Z" fill="url(#screenGlare)" opacity="0.25" />

            {/* 6 Large Cards Grid (3 cards col x 2 rows, each 318px wide x 193px tall) */}
            <g id="screenNewsCardsGrid" clipPath="url(#cardsScreenClip)">
              {currentCards.map((card, index) => {
                const col = index % 3;
                const row = Math.floor(index / 3);
                const cardX = 185 + col * (318 + 18);
                const cardY = 214 + row * (193 + 18);

                return (
                  <g
                    key={`${currentPage}-${card.id}`}
                    style={getCardAnimation(index)}
                    className="cursor-pointer group select-none"
                  >
                    {/* Card Base Container */}
                    <rect
                      x={cardX}
                      y={cardY}
                      width="318"
                      height="193"
                      rx="15"
                      fill="#090E1A"
                      stroke="#1E293B"
                      strokeWidth="1.5"
                      className="transition-all duration-200 hover:stroke-sky-400 hover:fill-[#0C1527]"
                    />
                    {/* Top Glow Accent Edge Line */}
                    <path
                      d={`M ${cardX + 18} ${cardY + 1} L ${cardX + 300} ${cardY + 1}`}
                      stroke={card.tagColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.85"
                    />

                    {/* 1. ICON (Prominent Glowing Badge) */}
                    <rect
                      x={cardX + 18}
                      y={cardY + 16}
                      width="42"
                      height="42"
                      rx="11"
                      fill={card.tagBg}
                      fillOpacity="0.3"
                      stroke={card.tagColor}
                      strokeWidth="1.3"
                    />
                    <text
                      x={cardX + 39}
                      y={cardY + 45}
                      textAnchor="middle"
                      fontSize="23"
                    >
                      {card.icon}
                    </text>

                    {/* 2. HEADING (Bold 2-Line News Headline) */}
                    <text
                      x={cardX + 18}
                      y={cardY + 84}
                      fill="#F8FAFC"
                      fontSize="15"
                      fontWeight="800"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      {card.titleLine1}
                    </text>
                    <text
                      x={cardX + 18}
                      y={cardY + 105}
                      fill="#38BDF8"
                      fontSize="14.5"
                      fontWeight="800"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      {card.titleLine2}
                    </text>

                    {/* 3. DESCRIPTION (Clean 2-Line Snippet) */}
                    <text
                      x={cardX + 18}
                      y={cardY + 134}
                      fill="#94A3B8"
                      fontSize="12"
                      fontWeight="500"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      {card.descLine1}
                    </text>
                    <text
                      x={cardX + 18}
                      y={cardY + 153}
                      fill="#64748B"
                      fontSize="12"
                      fontWeight="500"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      {card.descLine2}
                    </text>

                    {/* 4. ARROW BUTTON (Visual Page Redirect Button - No Actual Redirect) */}
                    <g
                      className="cursor-pointer group/arrow select-none"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      <circle
                        cx={cardX + 284}
                        cy={cardY + 154}
                        r="17"
                        fill="#0F172A"
                        stroke="#38BDF8"
                        strokeWidth="1.5"
                        className="transition-all duration-200 group-hover/arrow:fill-[#0284C7] group-hover/arrow:stroke-white"
                        filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))"
                      />
                      <path
                        d={`M ${cardX + 279} ${cardY + 154} L ${cardX + 289} ${cardY + 154} M ${cardX + 285} ${cardY + 150} L ${cardX + 289} ${cardY + 154} L ${cardX + 285} ${cardY + 158}`}
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-200 group-hover/arrow:stroke-white"
                      />
                    </g>
                  </g>
                );
              })}
            </g>
          </g>
        </g>
      </g>

        {/* =================================================================== */}
        {/* 6. WAVING HAND RINGS & GLOVE (In Front of Body, Elevated High in Sky)*/}
        {/* =================================================================== */}
        <g id="animLeftGloveWrapper" style={hasLoaded ? undefined : { animation: 'partSlideFromLeft 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both' }}>
          <g id="wavingGloveGroup" transform="translate(-45, -50)">
          {/* Wrist Rings (Arm Tube -> Orange Ring -> Blue/Cyan Ring -> Glove) */}
          <ellipse
            cx="150"
            cy="100"
            rx="42"
            ry="25"
            transform="rotate(-38 150 100)"
            fill="url(#ringOrange)"
            stroke="#7C2D12"
            strokeWidth="5"
          />
          <path
            d="M 126 92 C 140 82, 165 86, 174 100"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <ellipse
            cx="172"
            cy="82"
            rx="44"
            ry="26"
            transform="rotate(-38 172 82)"
            fill="url(#ringBlue)"
            stroke="#172554"
            strokeWidth="5"
          />
          <path
            d="M 148 72 C 162 62, 187 66, 198 80"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.88"
          />

          {/* Waving Cartoon Glove (Elevated high above the cassette corner, IN FRONT) */}
          <g id="elevatedWavingGlove">
            {/* Glove Drop Shadow onto scene/corner */}
            <path
              d="M 180 85 
                 C 176 60, 190 36, 210 15 
                 C 220 4, 234 6, 236 24 
                 C 240 36, 243 46, 250 32 
                 C 258 12, 270 -4, 283 -2 
                 C 293 2, 294 18, 286 34 
                 C 284 42, 290 46, 296 34 
                 C 308 16, 320 12, 330 20 
                 C 338 28, 334 44, 324 56 
                 C 322 64, 328 66, 336 56 
                 C 346 44, 360 48, 363 62 
                 C 368 76, 356 96, 340 110 
                 C 313 132, 258 142, 210 126 
                 C 193 120, 183 108, 180 85 
                 Z"
              fill="url(#gloveWhite)"
              stroke="#09090B"
              strokeWidth="7"
              strokeLinejoin="round"
              filter="drop-shadow(0 4px 10px rgba(15, 23, 42, 0.25))"
            />

            {/* Thumb Overlay */}
            <path
              d="M 202 85 C 235 102, 272 96, 279 72 C 285 52, 259 38, 229 52 Z"
              fill="url(#gloveWhite)"
              stroke="#09090B"
              strokeWidth="6"
            />

            {/* Palm Finger Darts / Creases */}
            <path d="M 268 14 C 260 38, 250 60, 240 78" fill="none" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />
            <path d="M 306 42 C 296 64, 284 82, 274 96" fill="none" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />

            {/* Finger Highlights */}
            <path d="M 218 12 C 226 4, 234 4, 234 16" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
            <path d="M 273 2 C 280 -4, 288 -2, 286 10" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
            <path d="M 318 18 C 324 12, 332 15, 330 26" fill="none" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" />
          </g>
        </g>
      </g>

        {/* =================================================================== */}
        {/* 7. RIGHT CLENCHED ARM & FIST (Side Socket, Compact 3D Anatomy)     */}
        {/* =================================================================== */}
        <g id="animRightArmWrapper" style={hasLoaded ? undefined : { animation: 'partSlideFromRight 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.72s both' }}>
          <g id="rightArmConnectionGroup">
          {/* Arm Tube from Socket to Wrist */}
          <path
            d="M 1345 515 C 1445 515, 1475 580, 1460 655 C 1442 715, 1408 755, 1380 775"
            fill="none"
            stroke="#09090B"
            strokeWidth="68"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 1345 515 C 1445 515, 1475 580, 1460 655 C 1442 715, 1408 755, 1380 775"
            fill="none"
            stroke="url(#pipe3DCylinder)"
            strokeWidth="60"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 1349 505 C 1439 505, 1466 570, 1453 645 C 1435 705, 1401 745, 1373 765"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.8"
            filter="url(#pipeSpecularGlow)"
          />

          {/* Wrist Rings (Arm Tube -> Blue Ring -> Orange Ring -> Glove) */}
          <ellipse
            cx="1380"
            cy="780"
            rx="42"
            ry="26"
            transform="rotate(25 1380 780)"
            fill="url(#ringBlue)"
            stroke="#172554"
            strokeWidth="5"
          />
          <path
            d="M 1355 772 C 1371 764, 1397 768, 1407 782"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          <ellipse
            cx="1370"
            cy="820"
            rx="46"
            ry="27"
            transform="rotate(25 1370 820)"
            fill="url(#ringOrange)"
            stroke="#7C2D12"
            strokeWidth="5"
          />
          <path
            d="M 1345 810 C 1363 802, 1390 806, 1400 822"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.88"
          />

          {/* 3D Clenched Cartoon Fist Hanging Vertically Beside Body */}
          <g id="rightClenchedGlove" transform="translate(50, 105)">
            <path
              d="M 1295 728 
                 C 1343 723, 1375 743, 1380 781 
                 C 1385 813, 1369 845, 1343 863 
                 C 1315 881, 1277 881, 1251 860 
                 C 1225 839, 1225 793, 1247 761 
                 C 1263 739, 1279 730, 1295 728 
                 Z"
              fill="url(#fistWhite)"
              stroke="#09090B"
              strokeWidth="7"
              strokeLinejoin="round"
              filter="drop-shadow(0 4px 10px rgba(15, 23, 42, 0.2))"
            />
            {/* Knuckle Segment Indents & Folds */}
            <path d="M 1305 793 L 1305 855" fill="none" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />
            <path d="M 1339 788 L 1337 838" fill="none" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />
            <path d="M 1275 790 L 1273 836" fill="none" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round" />
            {/* Two Crease Darts on back of hand */}
            <path d="M 1295 758 L 1295 781" fill="none" stroke="#94A3B8" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 1321 760 L 1321 783" fill="none" stroke="#94A3B8" strokeWidth="4.5" strokeLinecap="round" />
            {/* White Gloss Specular Highlight */}
            <ellipse cx="1300" cy="768" rx="23" ry="15" transform="rotate(15 1300 768)" fill="#FFFFFF" opacity="0.8" />
          </g>
        </g>
      </g>

        {/* =================================================================== */}
        {/* 7. PRECISE 3D SNEAKERS (Built exactly to Master Sneaker Reference)  */}
        {/* =================================================================== */}

        {/* --- LEFT SNEAKER (3/4 Front-Side Profile, 100% Solid & Connected) --- */}
        <g id="animLeftSneakerWrapper" style={hasLoaded ? undefined : { animation: 'partDropIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.20s both' }}>
          <g id="leftSneakerRebuilt" transform="translate(0, 135)">
          {/* Ground Contact Shadow under Left Sneaker */}
          <ellipse
            cx="280"
            cy="1115"
            rx="160"
            ry="22"
            fill="#0F172A"
            opacity="0.45"
            filter="url(#shadowBlur)"
          />

          {/* Ankle Connection: Black Leg Tube -> Orange Collar Ring -> Blue Padded Collar */}
          <g id="leftAnkleOpening">
            {/* Dark Ankle Opening Cavity where leg enters */}
            <ellipse
              cx="345"
              cy="912"
              rx="36"
              ry="18"
              transform="rotate(-15 345 912)"
              fill="#060A14"
            />

            {/* Rear Blue Padded Collar (Behind Leg Tube) */}
            <path
              d="M 312 910 C 316 886, 376 886, 380 910"
              fill="none"
              stroke="url(#sneakerRoyalBlue)"
              strokeWidth="16"
              strokeLinecap="round"
              transform="rotate(-15 345 912)"
            />

            {/* Rear Orange Torus Collar Rim (Behind Leg Tube) */}
            <path
              d="M 308 908 C 312 884, 380 884, 384 908"
              fill="none"
              stroke="url(#ringOrange)"
              strokeWidth="14"
              strokeLinecap="round"
              transform="rotate(-15 345 912)"
            />

            {/* FRONT Orange Torus Ring (Visually wraps tightly IN FRONT of black leg tube) */}
            <path
              d="M 308 912 C 312 938, 380 938, 384 912"
              fill="none"
              stroke="url(#ringOrange)"
              strokeWidth="16"
              strokeLinecap="round"
              transform="rotate(-15 345 912)"
            />
            {/* Dark Orange/Brown Outline */}
            <path
              d="M 306 914 C 310 942, 382 942, 386 914"
              fill="none"
              stroke="#7C2D12"
              strokeWidth="3.5"
              strokeLinecap="round"
              transform="rotate(-15 345 912)"
            />
            {/* Specular White Highlight Arc on Orange Collar Rim */}
            <path
              d="M 316 920 C 330 932, 362 932, 376 920"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
              transform="rotate(-15 345 912)"
            />

            {/* FRONT Blue Padded Collar Section (sits directly under orange ring) */}
            <path
              d="M 312 920 C 316 944, 376 944, 380 920 L 384 940 C 380 962, 312 962, 308 940 Z"
              fill="url(#sneakerRoyalBlue)"
              stroke="#0B2365"
              strokeWidth="3"
              transform="rotate(-15 345 912)"
            />
          </g>

          {/* Left Sneaker Main Solid Body (ZERO gaps, 100% connected) */}
          <g id="leftSneakerBody">
            {/* 1. SOLID BASE UPPER (Continuous White Leather Upper Foundation) */}
            <path
              d="M 310 935 
                 C 260 945, 190 990, 135 1065 
                 L 425 1065 
                 C 435 1020, 425 960, 385 935 
                 Z"
              fill="url(#sneakerLeatherWhite)"
              stroke="#94A3B8"
              strokeWidth="3.5"
            />

            {/* 2. METALLIC SILVER HEEL COUNTER PANEL */}
            <path
              d="M 355 935 
                 C 390 945, 425 980, 425 1065 
                 L 365 1065 
                 C 375 1030, 370 970, 345 955 
                 Z"
              fill="url(#sneakerSilverChrome)"
              stroke="#475569"
              strokeWidth="3.5"
            />
            {/* Heel Panel Stitching Line */}
            <path
              d="M 358 950 C 370 985, 375 1030, 368 1060"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="4,3"
            />

            {/* 3. ROYAL BLUE MUDGUARD & EYESTAY PANEL */}
            <path
              d="M 305 940 
                 L 240 940 
                 C 215 955, 185 990, 145 1055 
                 L 315 1065 
                 C 318 1035, 310 975, 305 940 
                 Z"
              fill="url(#sneakerRoyalBlue)"
              stroke="#0F172A"
              strokeWidth="3.5"
            />
            {/* Royal Blue Mudguard Stitching */}
            <path
              d="M 245 955 C 215 975, 175 1015, 155 1050"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2.5"
              strokeDasharray="5,4"
            />

            {/* 4. ORANGE SIDE ACCENT PANEL (Trapezoidal Badge) */}
            <g id="leftOrangeAccentPanel">
              <path
                d="M 305 955 
                   L 360 970 
                   C 364 975, 362 990, 355 1015 
                   L 310 1025 
                   C 302 1022, 298 1010, 298 995 
                   L 300 962 Z"
                fill="url(#sneakerOrangeBadge)"
                stroke="#C2410C"
                strokeWidth="3.5"
              />
              {/* Badge Perimeter Stitching */}
              <path
                d="M 308 962 L 354 975 C 356 982, 355 995, 350 1010 L 312 1018 C 306 1014, 304 1005, 304 995 Z"
                fill="none"
                stroke="#FFEDD5"
                strokeWidth="1.8"
                strokeDasharray="4,3"
              />
              {/* TWO HORIZONTAL WHITE STRIPES */}
              <rect
                x="312"
                y="972"
                width="30"
                height="8"
                rx="4"
                transform="rotate(-15 327 976)"
                fill="#FFFFFF"
                filter="url(#laceShadow)"
              />
              <rect
                x="308"
                y="992"
                width="30"
                height="8"
                rx="4"
                transform="rotate(-15 323 996)"
                fill="#FFFFFF"
                filter="url(#laceShadow)"
              />
            </g>

            {/* 5. ROYAL BLUE TONGUE & EYESTAYS */}
            <path
              d="M 240 940 C 265 935, 295 940, 305 955 L 265 1010 C 245 995, 235 975, 240 940 Z"
              fill="url(#sneakerRoyalBlue)"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            {/* Metallic Silver Eyestay Trim */}
            <path
              d="M 245 945 L 205 1005"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M 285 955 L 250 1015"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* 3 Pairs of Circular Grommet Eyelets */}
            <circle cx="242" cy="952" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="282" cy="960" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="224" cy="976" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="266" cy="984" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="206" cy="1000" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="250" cy="1008" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />

            {/* 6. THREE THICK WHITE SHOELACES WITH 3D VOLUME */}
            <g id="leftShoelaces">
              {/* Lace 1 (Top) */}
              <path
                d="M 242 952 Q 262 958 282 960"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="13"
                strokeLinecap="round"
                filter="url(#laceShadow)"
              />
              <path
                d="M 242 952 Q 262 958 282 960"
                fill="none"
                stroke="url(#shoelaceGrad)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 244 951 Q 262 956 280 958"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Lace 2 (Middle) */}
              <path
                d="M 224 976 Q 245 982 266 984"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="13"
                strokeLinecap="round"
                filter="url(#laceShadow)"
              />
              <path
                d="M 224 976 Q 245 982 266 984"
                fill="none"
                stroke="url(#shoelaceGrad)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 226 975 Q 245 980 264 982"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Lace 3 (Bottom) */}
              <path
                d="M 206 1000 Q 228 1006 250 1008"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="13"
                strokeLinecap="round"
                filter="url(#laceShadow)"
              />
              <path
                d="M 206 1000 Q 228 1006 250 1008"
                fill="none"
                stroke="url(#shoelaceGrad)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 208 999 Q 228 1004 248 1006"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.95"
              />
            </g>

            {/* 7. WHITE LEATHER FOREFOOT TOE VAMP DOME */}
            <path
              d="M 148 1045 
                 C 160 1015, 200 998, 235 1010 
                 C 238 1025, 225 1045, 195 1058 
                 C 170 1065, 152 1058, 148 1045 
                 Z"
              fill="url(#sneakerLeatherWhite)"
              stroke="#0055DD"
              strokeWidth="3"
            />
            {/* Toe Vamp Stitching Line */}
            <path
              d="M 155 1045 C 170 1025, 198 1015, 225 1022"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="4,3"
            />

            {/* 8. CHUNKY METALLIC SILVER TOE BUMPER / CAP */}
            <g id="leftMetallicToeBumper">
              <path
                d="M 125 1035 
                   C 112 1050, 116 1075, 145 1090 
                   C 175 1102, 210 1095, 222 1075 
                   L 202 1062 
                   C 180 1072, 155 1068, 142 1050 
                   Z"
                fill="url(#sneakerChromeBumper)"
                stroke="#334155"
                strokeWidth="4"
              />
              {/* Intense Specular White Chrome Reflection Curve */}
              <path
                d="M 130 1045 C 122 1062, 138 1084, 180 1090"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="5.5"
                strokeLinecap="round"
                opacity="0.95"
              />
            </g>

            {/* 9. SCULPTED WHITE MIDSOLE (Bonded directly along the upper base) */}
            <g id="leftMidsoleGroup">
              <path
                d="M 128 1065 
                   C 160 1078, 230 1078, 305 1070 
                   C 355 1065, 400 1068, 425 1065 
                   L 420 1088 
                   C 385 1098, 320 1095, 255 1100 
                   C 185 1105, 135 1098, 122 1082 
                   Z"
                fill="url(#sneakerMidsoleGrad)"
                stroke="#64748B"
                strokeWidth="3.5"
              />
              {/* Midsole 3D Contour Groove */}
              <path
                d="M 134 1076 C 175 1090, 245 1092, 315 1085 C 360 1080, 395 1083, 415 1078"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </g>

            {/* 10. ROYAL BLUE OUTSOLE & TRACTION TREAD NOTCHES */}
            <g id="leftRoyalBlueOutsole">
              <path
                d="M 122 1082 
                   C 145 1102, 205 1110, 265 1105 
                   C 325 1100, 385 1102, 420 1088 
                   L 415 1106 
                   C 380 1120, 315 1120, 250 1124 
                   C 180 1128, 130 1120, 115 1100 Z"
                fill="url(#sneakerOutsoleGrad)"
                stroke="#0F172A"
                strokeWidth="4"
              />
              {/* Visible Traction Tread Grooves along the sole curve */}
              <path d="M 138 1096 L 142 1114" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 168 1104 L 174 1120" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 205 1108 L 210 1123" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 252 1108 L 256 1123" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 315 1104 L 318 1118" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 360 1098 L 363 1112" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </g>

        {/* --- RIGHT SNEAKER (3/4 Front-Side Profile, 100% Solid & Connected) --- */}
        <g id="animRightSneakerWrapper" style={hasLoaded ? undefined : { animation: 'partDropIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.26s both' }}>
          <g id="rightSneakerRebuilt" transform="translate(0, 135)">
          {/* Ground Contact Shadow under Right Sneaker */}
          <ellipse
            cx="855"
            cy="1110"
            rx="150"
            ry="22"
            fill="#0F172A"
            opacity="0.45"
            filter="url(#shadowBlur)"
          />

          {/* Ankle Connection: Black Leg Tube -> Orange Collar Ring -> Blue Padded Collar */}
          <g id="rightAnkleOpening">
            {/* Dark Ankle Opening Cavity where right leg enters */}
            <ellipse
              cx="810"
              cy="902"
              rx="36"
              ry="18"
              transform="rotate(15 810 902)"
              fill="#060A14"
            />

            {/* Rear Blue Padded Collar (Behind leg) */}
            <path
              d="M 776 900 C 780 876, 840 876, 844 900"
              fill="none"
              stroke="url(#sneakerRoyalBlue)"
              strokeWidth="16"
              strokeLinecap="round"
              transform="rotate(15 810 902)"
            />

            {/* Rear Orange Torus Collar Rim (Behind leg) */}
            <path
              d="M 772 898 C 776 874, 844 874, 848 898"
              fill="none"
              stroke="url(#ringOrange)"
              strokeWidth="14"
              strokeLinecap="round"
              transform="rotate(15 810 902)"
            />

            {/* FRONT Orange Torus Ring (Visually wraps tightly IN FRONT of black leg tube) */}
            <path
              d="M 772 902 C 776 928, 844 928, 848 902"
              fill="none"
              stroke="url(#ringOrange)"
              strokeWidth="16"
              strokeLinecap="round"
              transform="rotate(15 810 902)"
            />
            {/* Dark Orange/Brown Base Rim Outline */}
            <path
              d="M 770 904 C 774 932, 846 932, 850 904"
              fill="none"
              stroke="#7C2D12"
              strokeWidth="3.5"
              strokeLinecap="round"
              transform="rotate(15 810 902)"
            />
            {/* Specular White Highlight Arc on Orange Collar Rim */}
            <path
              d="M 780 910 C 794 922, 826 922, 840 910"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
              transform="rotate(15 810 902)"
            />

            {/* FRONT Blue Padded Collar Section (sits directly under orange ring) */}
            <path
              d="M 776 910 C 780 934, 840 934, 844 910 L 848 930 C 844 952, 776 952, 772 930 Z"
              fill="url(#sneakerRoyalBlue)"
              stroke="#0B2365"
              strokeWidth="3"
              transform="rotate(15 810 902)"
            />
          </g>

          {/* Right Sneaker Main Solid Body (ZERO gaps, 100% connected) */}
          <g id="rightSneakerBody">
            {/* 1. SOLID BASE UPPER (Continuous White Leather Foundation) */}
            <path
              d="M 765 925 
                 C 730 955, 715 1010, 725 1060 
                 L 975 1060 
                 C 975 1015, 930 960, 845 930 
                 Z"
              fill="url(#sneakerLeatherWhite)"
              stroke="#94A3B8"
              strokeWidth="3.5"
            />

            {/* 2. METALLIC SILVER HEEL COUNTER PANEL */}
            <path
              d="M 765 925 
                 C 730 955, 715 1010, 725 1060 
                 L 785 1060 
                 C 775 1030, 780 970, 805 945 
                 Z"
              fill="url(#sneakerSilverChrome)"
              stroke="#475569"
              strokeWidth="3.5"
            />
            {/* Heel Panel Stitching Line */}
            <path
              d="M 785 945 C 770 980, 765 1025, 775 1055"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="4,3"
            />

            {/* 3. ROYAL BLUE MUDGUARD & EYESTAY PANEL */}
            <path
              d="M 795 930 
                 L 855 935 
                 C 885 945, 925 990, 965 1050 
                 L 790 1060 
                 C 785 1030, 790 970, 795 930 
                 Z"
              fill="url(#sneakerRoyalBlue)"
              stroke="#0F172A"
              strokeWidth="3.5"
            />
            {/* Fine Stitching along Royal Blue Mudguard */}
            <path
              d="M 855 935 C 880 945, 920 985, 955 1040"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2.5"
              strokeDasharray="5,4"
            />

            {/* 4. ORANGE SIDE ACCENT PANEL (Trapezoidal Badge) */}
            <g id="rightOrangeAccentPanel">
              <path
                d="M 865 940 
                   L 925 955 
                   C 930 960, 932 975, 925 1000 
                   L 878 1018 
                   C 868 1014, 862 1002, 860 985 
                   L 862 950 Z"
                fill="url(#sneakerOrangeBadge)"
                stroke="#C2410C"
                strokeWidth="3.5"
              />
              {/* Perimeter Stitching on Orange Badge */}
              <path
                d="M 868 948 L 920 960 C 924 968, 925 978, 920 994 L 882 1010 C 874 1005, 870 995, 868 985 Z"
                fill="none"
                stroke="#FFEDD5"
                strokeWidth="1.8"
                strokeDasharray="4,3"
              />
              {/* TWO HORIZONTAL WHITE STRIPES */}
              <rect
                x="874"
                y="958"
                width="30"
                height="8"
                rx="4"
                transform="rotate(15 889 962)"
                fill="#FFFFFF"
                filter="url(#laceShadow)"
              />
              <rect
                x="880"
                y="978"
                width="30"
                height="8"
                rx="4"
                transform="rotate(15 895 982)"
                fill="#FFFFFF"
                filter="url(#laceShadow)"
              />
            </g>

            {/* 5. ROYAL BLUE TONGUE & EYESTAYS */}
            <path
              d="M 805 925 C 825 918, 860 922, 872 940 L 845 995 C 830 980, 812 965, 805 925 Z"
              fill="url(#sneakerRoyalBlue)"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            {/* Metallic Silver Eyestay Trim */}
            <path
              d="M 810 930 L 848 990"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M 855 935 L 890 995"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* 3 Pairs of Metallic Silver Grommet Eyelets */}
            <circle cx="812" cy="936" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="856" cy="942" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="828" cy="960" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="872" cy="966" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="844" cy="984" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />
            <circle cx="888" cy="990" r="5.5" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.2" />

            {/* 6. THREE THICK WHITE SHOELACES WITH 3D VOLUME */}
            <g id="rightShoelaces">
              {/* Lace 1 (Top) */}
              <path
                d="M 812 936 Q 834 940 856 942"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="13"
                strokeLinecap="round"
                filter="url(#laceShadow)"
              />
              <path
                d="M 812 936 Q 834 940 856 942"
                fill="none"
                stroke="url(#shoelaceGrad)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 814 935 Q 834 938 854 940"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Lace 2 (Middle) */}
              <path
                d="M 828 960 Q 850 964 872 966"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="13"
                strokeLinecap="round"
                filter="url(#laceShadow)"
              />
              <path
                d="M 828 960 Q 850 964 872 966"
                fill="none"
                stroke="url(#shoelaceGrad)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 830 959 Q 850 962 870 964"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.95"
              />

              {/* Lace 3 (Bottom) */}
              <path
                d="M 844 984 Q 866 988 888 990"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="13"
                strokeLinecap="round"
                filter="url(#laceShadow)"
              />
              <path
                d="M 844 984 Q 866 988 888 990"
                fill="none"
                stroke="url(#shoelaceGrad)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M 846 983 Q 866 986 886 988"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.95"
              />
            </g>

            {/* 7. WHITE LEATHER FOREFOOT TOE VAMP DOME */}
            <path
              d="M 865 1010 
                 C 895 995, 940 1005, 965 1032 
                 C 955 1048, 930 1058, 895 1055 
                 C 875 1048, 862 1030, 865 1010 
                 Z"
              fill="url(#sneakerLeatherWhite)"
              stroke="#0055DD"
              strokeWidth="3"
            />
            {/* Toe Vamp Stitching Line */}
            <path
              d="M 872 1018 C 900 1005, 935 1015, 955 1032"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="4,3"
            />

            {/* 8. CHUNKY METALLIC SILVER TOE BUMPER / CAP */}
            <g id="rightMetallicToeBumper">
              <path
                d="M 885 1072 
                   C 872 1055, 895 1035, 975 1030 
                   C 992 1045, 988 1070, 960 1085 
                   L 940 1062 
                   C 920 1072, 898 1072, 885 1072 
                   Z"
                fill="url(#sneakerChromeBumper)"
                stroke="#334155"
                strokeWidth="4"
              />
              {/* Intense Specular White Chrome Reflection Curve */}
              <path
                d="M 900 1070 C 930 1078, 965 1075, 978 1050"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="5.5"
                strokeLinecap="round"
                opacity="0.95"
              />
            </g>

            {/* 9. SCULPTED WHITE MIDSOLE (Bonded directly along the upper base) */}
            <g id="rightMidsoleGroup">
              <path
                d="M 725 1060 
                   C 765 1068, 835 1068, 915 1060 
                   C 950 1055, 970 1058, 975 1060 
                   L 970 1082 
                   C 940 1095, 875 1095, 805 1092 
                   C 755 1090, 730 1085, 720 1078 
                   Z"
                fill="url(#sneakerMidsoleGrad)"
                stroke="#64748B"
                strokeWidth="3.5"
              />
              {/* Midsole 3D Contour Groove */}
              <path
                d="M 732 1070 C 785 1082, 860 1082, 930 1074 C 955 1070, 965 1072, 968 1070"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </g>

            {/* 10. ROYAL BLUE OUTSOLE & TRACTION TREAD NOTCHES */}
            <g id="rightRoyalBlueOutsole">
              <path
                d="M 720 1078 
                   C 745 1098, 815 1105, 885 1102 
                   C 945 1098, 965 1088, 970 1082 
                   L 965 1100 
                   C 940 1115, 875 1118, 810 1120 
                   C 745 1122, 725 1112, 715 1095 Z"
                fill="url(#sneakerOutsoleGrad)"
                stroke="#0F172A"
                strokeWidth="4"
              />
              {/* Visible Traction Tread Grooves along the sole curve */}
              <path d="M 740 1092 L 744 1110" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 780 1100 L 785 1116" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 830 1104 L 834 1118" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 885 1104 L 888 1118" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 935 1098 L 938 1112" stroke="#0A1838" strokeWidth="4.5" strokeLinecap="round" />
            </g>
          </g>
        </g>
      </g>
      </svg>
        </div>
      </div>
    </main>
  );
}

export { BreakingNews as BreakingNewsPage };
