import React, { useState, useEffect } from 'react';
import { heroSlides } from './HeroSectionData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { Section01 } from './Section01/Section01';
import { Section02 } from './Section02/Section02';
import { Section03 } from './Section03/Section03';
import { Section04 } from './Section04/Section04';
import { Section05 } from './Section05/Section05';
import { Section06 } from './Section06/Section06';
import { Section07 } from './Section07/Section07';
import { Section08 } from './Section08/Section08';
import { Section09 } from './Section09/Section09';
import { Section10 } from './Section10/Section10';
import { Section11 } from './Section11/Section11';
import { Section12 } from './Section12/Section12';
import { Section13 } from './Section13/Section13';
import { Section14 } from './Section14/Section14';
import { Section15 } from './Section15/Section15';
import { Section16 } from './Section16/Section16';
import { Section17 } from './Section17/Section17';
import { Section18 } from './Section18/Section18';
import { Section19 } from './Section19/Section19';
import { Section20 } from './Section20/Section20';
import { Section21 } from './Section21/Section21';
import { Section22 } from './Section22/Section22';
import { Section23 } from './Section23/Section23';
import { Section24 } from './Section24/Section24';

// =========================================================================
// NEWS CAMERA FRAME SUBCOMPONENT
// =========================================================================
/**
 * NewsCameraFrame
 * 100% PURE CSS & SVG Broadcast Camera Front Frame / Matte Box.
 * 
 * Crafted 100% in code with ZERO camera frame image files:
 * - Continuous, smooth 3D 3/4 Side-Perspective Matte Box Chassis
 * - Titanium & Gunmetal Multi-Stop Metallic Gradients with Studio Highlights
 * - 3D Right-Side Front Chamfer Facet with Chrome Specular Gleam & Crimson Base Scoop
 * - Dynamic Neon Red Broadcast Tally Light Bar with Travelling Laser Shimmer Pulse
 * - Deep Recessed Left Sunhood Cavity with Stepped Anti-Glare Louvers & Concentric Arc Baffles
 * - Cyan Specular Viewfinder Rim Wire & Anamorphic Cyan Lens Flare (horizontal laser streak + diamond sparkle)
 * - Horizontal Red LED Accent Channel above Viewfinder
 * - Inner Aperture Bezel Framing Live Indian Parliament Feed (with waving Tricolour)
 * - Live [🔴 LIVE] Indicator with pulsating broadcast beacon
 * - Dynamic Synchronized Feed Switching with Optical Iris Shutter & Scanline Transition
 */
export const NewsCameraFrame = ({ 
  className = '',
  feedSrc = '/parliament-feed-exact.jpg',
  feedLabel = 'NATIONAL BUREAU ● PARLIAMENT HOUSE LIVE',
  badgeText = 'NEXT LIVE',
  onClick,
}) => {
  const [currentFeed, setCurrentFeed] = useState(feedSrc);
  const [incomingFeed, setIncomingFeed] = useState(feedSrc);
  const [isSwitching, setIsSwitching] = useState(false);

  // Optical Feed Switching Animation Trigger
  useEffect(() => {
    if (feedSrc !== currentFeed) {
      setIncomingFeed(feedSrc);
      setIsSwitching(true);

      const switchTimer = setTimeout(() => {
        setCurrentFeed(feedSrc);
      }, 200);

      const finishTimer = setTimeout(() => {
        setIsSwitching(false);
      }, 550);

      return () => {
        clearTimeout(switchTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [feedSrc, currentFeed]);

  // 12 Stepped Anti-Glare Louvers strictly inside left cavity (x: 135 to 232)
  const louvers = [
    { yLeft: 190, yRight: 218, xLeft: 142, xRight: 236 },
    { yLeft: 210, yRight: 235, xLeft: 138, xRight: 235 },
    { yLeft: 230, yRight: 252, xLeft: 136, xRight: 234 },
    { yLeft: 250, yRight: 270, xLeft: 135, xRight: 233 },
    { yLeft: 270, yRight: 288, xLeft: 135, xRight: 232 },
    { yLeft: 290, yRight: 306, xLeft: 135, xRight: 231 },
    { yLeft: 310, yRight: 324, xLeft: 135, xRight: 230 },
    { yLeft: 330, yRight: 342, xLeft: 135, xRight: 229 },
    { yLeft: 350, yRight: 360, xLeft: 135, xRight: 228 },
    { yLeft: 370, yRight: 378, xLeft: 135, xRight: 227 },
    { yLeft: 390, yRight: 396, xLeft: 136, xRight: 227 },
    { yLeft: 410, yRight: 414, xLeft: 138, xRight: 228 },
  ];

  // Concentric curved anti-reflection baffles along bottom curve of left hood
  const bottomRibs = [
    { d: 'M 140 435 C 148 470, 178 505, 228 518' },
    { d: 'M 145 450 C 153 480, 184 512, 230 524' },
    { d: 'M 150 465 C 158 490, 189 518, 232 530' },
    { d: 'M 158 480 C 165 502, 195 524, 234 535' },
    { d: 'M 166 495 C 172 512, 201 528, 236 540' },
  ];

  return (
    <div 
      onClick={onClick}
      className={`relative w-full ${className ? className : 'max-w-[880px] xl:max-w-[960px] mx-auto'} select-none ${onClick ? 'cursor-pointer' : ''}`}
      title={onClick ? 'Click to switch to this live feed' : undefined}
    >
      
      {/* 3D Perspective Matte Box Container */}
      <div 
        className="relative"
        style={{ perspective: '1400px' }}
      >
        <svg
          viewBox="0 0 1024 603"
          className="w-full h-auto overflow-visible filter drop-shadow-[0_22px_45px_rgba(0,0,0,0.22)] drop-shadow-[0_45px_75px_rgba(0,0,0,0.15)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* ==================================================== */}
            {/* 1. METALLIC & CHROME GRADIENTS                       */}
            {/* ==================================================== */}

            {/* Main 3D Matte Box Chassis Gradient (Titanium Gunmetal) */}
            <linearGradient id="pureChassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e3746" />
              <stop offset="15%" stopColor="#1e2634" />
              <stop offset="45%" stopColor="#121822" />
              <stop offset="80%" stopColor="#080c14" />
              <stop offset="100%" stopColor="#030508" />
            </linearGradient>

            {/* Top Outer Chrome Specular Bevel Highlight */}
            <linearGradient id="pureTopChromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#94a3b8" stopOpacity="0.7" />
              <stop offset="92%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Right Front 3D Chamfer Facet Metallic Gradient */}
            <linearGradient id="pureRightChamferFacetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.95" />
              <stop offset="10%" stopColor="#94a3b8" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#334155" />
              <stop offset="55%" stopColor="#1e293b" />
              <stop offset="78%" stopColor="#0f172a" />
              <stop offset="88%" stopColor="#9f1239" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0.95" />
            </linearGradient>

            {/* Glowing Neon Red Tally Light Dynamic Gradient */}
            <linearGradient id="pureRedTallyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4d5a" />
              <stop offset="25%" stopColor="#ff1929" />
              <stop offset="50%" stopColor="#e60012" />
              <stop offset="75%" stopColor="#ff1929" />
              <stop offset="100%" stopColor="#ff4d5a" />
            </linearGradient>

            {/* Horizontal Top Red LED Reflector Channel Gradient */}
            <linearGradient id="pureTopRedChannelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff1929" stopOpacity="0" />
              <stop offset="30%" stopColor="#ff1929" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#ff4d5a" stopOpacity="0.95" />
              <stop offset="95%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff4d5a" stopOpacity="0.4" />
            </linearGradient>

            {/* Right Bevel Ambient Red Volumetric Glow Reflection */}
            <radialGradient id="pureRightBevelRedReflect" cx="90%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff1929" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#c40010" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#c40010" stopOpacity="0" />
            </radialGradient>

            {/* Receding Left Sunhood Cavity Interior Gradient */}
            <linearGradient id="pureHoodCavityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0c111a" />
              <stop offset="45%" stopColor="#060910" />
              <stop offset="100%" stopColor="#020407" />
            </linearGradient>

            {/* Diagonal Viewfinder Glass Reflection */}
            <linearGradient id="pureGlassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="28%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="46%" stopColor="#ffffff" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="54%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="72%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Lens Aperture Radial Vignette */}
            <radialGradient id="pureLensVignette" cx="50%" cy="50%" r="55%">
              <stop offset="65%" stopColor="#000000" stopOpacity="0" />
              <stop offset="92%" stopColor="#000000" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
            </radialGradient>

            {/* ==================================================== */}
            {/* 2. GLOW & BLUR FILTERS                               */}
            {/* ==================================================== */}

            {/* Volumetric Red Tally Ambient Glow */}
            <filter id="pureRedTallyGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Laser Shimmer Sparkle Filter */}
            <filter id="pureTallySparkleGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Anamorphic Cyan Lens Flare Glow */}
            <filter id="pureCyanFlareGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* ==================================================== */}
            {/* 3. CLIPPING PATHS (HOOD CAVITY & INNER APERTURE)     */}
            {/* ==================================================== */}
            
            {/* Left Sunhood Recessed Interior Cavity (Safely inside outer rim) */}
            <clipPath id="pureHoodCavityClip">
              <path d="M 130 160 C 122 220, 122 380, 130 520 L 208 552 L 235 440 L 226 340 L 232 245 C 235 188, 255 156, 310 148 L 264 93 C 202 97, 160 120, 130 160 Z" />
            </clipPath>

            {/* Mathematically Traced Inner Aperture Window */}
            <clipPath id="pureApertureClip">
              <path d="M 310 148 C 255 156, 235 188, 232 245 L 226 340 L 235 440 C 238 485, 260 508, 310 514 L 795 506 C 840 504, 864 478, 866 425 L 866 225 C 864 168, 840 140, 795 133 Z" />
            </clipPath>
          </defs>

          {/* ======================================================= */}
          {/* LAYER 1: OUTER MATTE BOX CHASSIS (CONTINUOUS 3D FORM)   */}
          {/* ======================================================= */}
          
          {/* Main 3D Outer Silhouette Chassis (Continuous Rounded Curve) */}
          <path
            d="M 926 300 C 926 360, 922 435, 908 485 C 890 530, 855 565, 805 582 C 750 588, 600 580, 462 569 C 338 560, 267 556, 208 552 C 179 546, 137 542, 118 526 C 98 509, 97 476, 93 451 C 89 425, 93 398, 94 373 C 95 347, 96 324, 99 300 C 101 276, 105 252, 110 229 C 114 205, 114 180, 126 160 C 137 140, 156 120, 179 109 C 239 97, 362 76, 467 59 C 605 37, 722 12, 777 13 C 825 15, 870 38, 902 78 C 922 118, 926 185, 926 300 Z"
            fill="url(#pureChassisGrad)"
            stroke="#151a24"
            strokeWidth="3.2"
          />

          {/* Top Chrome Specular Highlight Edge Wire */}
          <path
            d="M 179 109 C 239 97, 362 76, 467 59 C 605 37, 722 12, 777 13 C 825 15, 870 38, 902 78"
            fill="none"
            stroke="url(#pureTopChromeGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Solid Left Outer Rounded Rim Wire (Razor-sharp, Smooth Edge) */}
          <path
            d="M 179 109 C 156 120, 137 140, 126 160 C 114 180, 110 229, 99 300 C 94 373, 93 451, 118 526 C 137 542, 179 546, 208 552"
            fill="none"
            stroke="#3a4556"
            strokeWidth="2.2"
            strokeOpacity="0.8"
          />

          {/* Bottom Dark Metallic Cast Shadow Bevel */}
          <path
            d="M 208 552 C 317 559, 462 569, 611 578 C 723 588, 778 585, 838 575 C 875 550, 905 510, 920 450"
            fill="none"
            stroke="#020306"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* ======================================================= */}
          {/* LAYER 2: 3D RIGHT-SIDE FRONT CHAMFER FACET              */}
          {/* (Exact bevel surface matching original reference image) */}
          {/* ======================================================= */}
          <path
            d="M 866 135 C 892 155, 906 195, 910 250 L 912 410 C 910 465, 892 505, 866 525 L 852 485 C 872 460, 880 410, 880 330 C 880 230, 872 170, 852 145 Z"
            fill="url(#pureRightChamferFacetGrad)"
          />

          {/* Right Bevel Ambient Red Volumetric Glow Reflection */}
          <path
            d="M 830 50 C 880 75, 915 130, 920 240 L 920 440 C 915 500, 880 545, 830 565 L 850 510 C 875 470, 885 410, 885 320 C 885 230, 875 160, 850 110 Z"
            fill="url(#pureRightBevelRedReflect)"
          />

          {/* Inner Blue/Cyan Specular Viewfinder Rim Wire (Right Bezel) */}
          <path
            d="M 800 133 C 835 138, 862 165, 866 225 L 866 425 C 864 478, 835 502, 800 506"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.8"
            strokeOpacity="0.85"
            strokeLinecap="round"
          />

          {/* ======================================================= */}
          {/* LAYER 3: PHOTOREALISTIC CURVED NEON RED BROADCAST TALLY */}
          {/* Exact match to reference image: smooth neon glass tube   */}
          {/* with intense crimson glow & brilliant white-hot filament*/}
          {/* ======================================================= */}

          {/* 1. Volumetric Soft Crimson Ambient Glow */}
          <path
            d="M 780 26 C 835 34, 882 62, 910 108 C 925 152, 928 220, 928 300 C 928 380, 925 448, 910 492 C 882 538, 835 566, 780 574"
            fill="none"
            stroke="#ff002e"
            strokeWidth="36"
            strokeLinecap="round"
            opacity="0.4"
            filter="url(#pureRedTallyGlow)"
          />

          {/* 2. Concentrated Vivid Neon Red Aura */}
          <path
            d="M 780 26 C 835 34, 882 62, 910 108 C 925 152, 928 220, 928 300 C 928 380, 925 448, 910 492 C 882 538, 835 566, 780 574"
            fill="none"
            stroke="#ff1929"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.8"
            filter="url(#pureRedTallyGlow)"
          />

          {/* 3. Solid Glowing Translucent Neon Tube Body */}
          <path
            d="M 780 26 C 835 34, 882 62, 910 108 C 925 152, 928 220, 928 300 C 928 380, 925 448, 910 492 C 882 538, 835 566, 780 574"
            fill="none"
            stroke="url(#pureRedTallyGrad)"
            strokeWidth="9"
            strokeLinecap="round"
          />

          {/* 4. White-Hot Luminous Center Core Filament Line */}
          <path
            d="M 782 28 C 836 36, 881 64, 908 110 C 923 154, 925 220, 925 300 C 925 380, 923 446, 908 490 C 881 536, 836 564, 782 572"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />

          {/* ======================================================= */}
          {/* LAYER 4: DEEP RECESSED LEFT HOOD CAVITY & LOUVERS       */}
          {/* (STRICTLY CLIPPED SO NOTHING EVER POKES OUTSIDE)        */}
          {/* ======================================================= */}
          <g clipPath="url(#pureHoodCavityClip)">
            {/* Recessed Left Hood Polygon Cavity Base */}
            <path
              d="M 126 160 C 114 180, 110 229, 99 300 C 94 373, 93 451, 118 526 L 208 552 L 235 440 L 226 340 L 232 245 C 235 188, 255 156, 310 148 L 264 93 C 202 97, 156 120, 126 160 Z"
              fill="url(#pureHoodCavityGrad)"
            />

            {/* 12 Stepped Anti-Glare Louvers / Baffles (Safely inside cavity) */}
            {louvers.map((rib, idx) => (
              <g key={idx}>
                {/* Louver Under-Groove Cast Shadow */}
                <line
                  x1={rib.xLeft}
                  y1={rib.yLeft + 2}
                  x2={rib.xRight}
                  y2={rib.yRight + 2}
                  stroke="#020406"
                  strokeWidth="3.2"
                />
                {/* Louver Main Satin Gunmetal Vane */}
                <line
                  x1={rib.xLeft}
                  y1={rib.yLeft}
                  x2={rib.xRight}
                  y2={rib.yRight}
                  stroke="#182230"
                  strokeWidth="2.2"
                />
                {/* Louver Top Edge Specular Chrome Highlight Wire */}
                <line
                  x1={rib.xLeft}
                  y1={rib.yLeft - 1.2}
                  x2={rib.xRight}
                  y2={rib.yRight - 1.2}
                  stroke="#54657d"
                  strokeWidth="1.2"
                  strokeOpacity="0.85"
                />
              </g>
            ))}

            {/* Concentric Curved Anti-Reflection Ribs on Bottom Curved Floor */}
            {bottomRibs.map((arc, idx) => (
              <g key={`arc-${idx}`}>
                <path d={arc.d} fill="none" stroke="#020406" strokeWidth="2.8" />
                <path d={arc.d} fill="none" stroke="#253244" strokeWidth="1.8" />
                <path d={arc.d} fill="none" stroke="#64748b" strokeWidth="0.9" strokeOpacity="0.75" />
              </g>
            ))}

            {/* Sloped Interior Roof of Hood */}
            <path
              d="M 264 93 L 310 148 C 450 142, 650 138, 795 133 L 750 13 C 605 37, 424 65, 264 93 Z"
              fill="#090d14"
              opacity="0.95"
            />

            {/* Sloped Interior Floor of Hood */}
            <path
              d="M 208 552 L 235 440 L 310 514 C 450 510, 650 505, 795 506 L 751 587 C 558 575, 358 562, 208 552 Z"
              fill="#05080e"
              opacity="0.98"
            />
          </g>

          {/* Solid Left Outer Rim Bevel (Thick 30px solid metallic rim guaranteeing zero protrusion) */}
          <path
            d="M 126 160 C 114 180, 110 229, 99 300 C 94 373, 93 451, 118 526 L 140 518 C 122 455, 122 375, 126 300 C 129 235, 134 185, 146 170 Z"
            fill="#182230"
            opacity="0.95"
          />

          {/* ======================================================= */}
          {/* LAYER 5: INNER APERTURE VIEWPORT (LIVE SCENE FEED)       */}
          {/* ======================================================= */}
          <g clipPath="url(#pureApertureClip)">
            {/* Previous Feed Fading Out during Switch */}
            {isSwitching && (
              <image
                href={incomingFeed}
                x="205"
                y="120"
                width="670"
                height="400"
                preserveAspectRatio="xMidYMid slice"
                style={{
                  opacity: 0.6,
                }}
              />
            )}

            {/* Current Active Live Scene Feed */}
            <image
              href={currentFeed}
              x="205"
              y="120"
              width="670"
              height="400"
              preserveAspectRatio="xMidYMid slice"
              className="transition-all duration-500 ease-out"
              style={{
                opacity: isSwitching ? 0.35 : 1,
                transform: isSwitching ? 'scale(1.03)' : 'scale(1)',
                transformOrigin: '540px 320px',
              }}
            />

            {/* Optical Camera Iris Shutter Flash during Feed Switch */}
            <rect
              x="205"
              y="120"
              width="670"
              height="400"
              fill="#020617"
              className="transition-opacity duration-300 pointer-events-none"
              style={{ opacity: isSwitching ? 0.6 : 0 }}
            />

            {/* Horizontal Blue Laser Scanline on Switch */}
            {isSwitching && (
              <line
                x1="205"
                y1="320"
                x2="875"
                y2="320"
                stroke="#38bdf8"
                strokeWidth="2.5"
                filter="url(#pureCyanFlareGlow)"
                className="animate-pulse"
              />
            )}

            {/* Lens Radial Vignette Shadow */}
            <rect
              x="205"
              y="120"
              width="670"
              height="400"
              fill="url(#pureLensVignette)"
              pointerEvents="none"
            />

            {/* Diagonal Viewfinder Glass Sheen Reflection */}
            <rect
              x="205"
              y="120"
              width="670"
              height="400"
              fill="url(#pureGlassReflection)"
              pointerEvents="none"
            />

            {/* Broadcast Viewfinder Corner Framing Brackets */}
            <g stroke="#38bdf8" strokeWidth="1.6" strokeOpacity="0.65" fill="none" pointerEvents="none">
              {/* Top-Left Bracket */}
              <path d="M 265 185 L 250 185 L 250 200" />
              {/* Top-Right Bracket */}
              <path d="M 835 185 L 850 185 L 850 200" />
              {/* Bottom-Left Bracket */}
              <path d="M 265 485 L 250 485 L 250 470" />
              {/* Bottom-Right Bracket */}
              <path d="M 835 485 L 850 485 L 850 470" />
            </g>

            {/* Feed Status Telemetry Strip at Bottom */}
            <g transform="translate(305, 495)" pointerEvents="none">
              <rect x="-8" y="-14" width="310" height="17" rx="3" fill="#030712" fillOpacity="0.8" />
              <circle cx="0" cy="-5" r="3" fill={isSwitching ? '#f59e0b' : '#10b981'} className="animate-pulse" />
              <text x="8" y="-1" fill="#94a3b8" fontSize="9.5" fontWeight="700" fontFamily="'Montserrat', monospace" letterSpacing="0.8">
                {isSwitching ? 'SYNCING SATELLITE FEED...' : feedLabel}
              </text>
            </g>
          </g>

          {/* Inner Aperture Metallic Bezel Framing Rim */}
          <path
            d="M 310 148 C 255 156, 235 188, 232 245 L 226 340 L 235 440 C 238 485, 260 508, 310 514 L 795 506 C 840 504, 864 478, 866 425 L 866 225 C 864 168, 840 140, 795 133 Z"
            fill="none"
            stroke="#1c2432"
            strokeWidth="5"
          />

          {/* Aperture Top Specular Highlight Wire */}
          <path
            d="M 310 148 C 450 142, 650 138, 795 133"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeOpacity="0.5"
          />

          {/* Aperture Bottom Dark Shading Edge */}
          <path
            d="M 310 514 C 450 510, 650 505, 795 506"
            fill="none"
            stroke="#020306"
            strokeWidth="2.8"
          />

          {/* ======================================================= */}
          {/* LAYER 6: ANAMORPHIC CYAN LENS FLARE ON LEFT APERTURE    */}
          {/* ======================================================= */}
          <g transform="translate(232, 335)">
            {/* Horizontal Blue Laser Beam Streak */}
            <ellipse
              cx="0"
              cy="0"
              rx="85"
              ry="2.2"
              fill="#00f0ff"
              filter="url(#pureCyanFlareGlow)"
            />
            {/* Wide Diffuse Cyan Beam */}
            <ellipse
              cx="0"
              cy="0"
              rx="130"
              ry="1.2"
              fill="#38bdf8"
              opacity="0.85"
            />
            {/* Core White Diamond Sparkle */}
            <circle cx="0" cy="0" r="5" fill="#ffffff" filter="url(#pureCyanFlareGlow)" />
            <circle cx="0" cy="0" r="2.2" fill="#ffffff" />
            <ellipse cx="0" cy="0" rx="24" ry="1.2" fill="#ffffff" />
            <ellipse cx="0" cy="0" rx="1.2" ry="20" fill="#ffffff" />
            {/* Diagonal Anamorphic Cross Glints */}
            <line x1="-10" y1="-10" x2="10" y2="10" stroke="#7dd3fc" strokeWidth="1" opacity="0.85" />
            <line x1="-10" y1="10" x2="10" y2="-10" stroke="#7dd3fc" strokeWidth="1" opacity="0.85" />
          </g>

          {/* ======================================================= */}
          {/* LAYER 7: VIEWPORT BROADCAST [🔴 LIVE] INDICATOR          */}
          {/* ======================================================= */}
          <g transform="translate(710, 168)" pointerEvents="none">
            {/* Dark glass pill */}
            <rect x="0" y="0" width={badgeText.length > 4 ? 104 : 82} height="26" rx="5" fill="#070c18" fillOpacity="0.88" stroke="#334155" strokeWidth="1" />
            {/* Luminous Pulsing On-Air Beacon */}
            <circle cx="15" cy="13" r="9" fill="#ff0000" className="animate-ping" opacity="0.45" />
            <circle cx="15" cy="13" r="5" fill="#e01923" />
            <circle cx="14" cy="12" r="1.8" fill="#ffffff" opacity="0.8" />
            {/* LIVE text */}
            <text x="29" y="17" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="'Montserrat', sans-serif" letterSpacing="0.8">
              {badgeText}
            </text>
          </g>

        </svg>
      </div>

      {/* 3D Base Ambient Shadows */}
      <div className="w-4/5 mx-auto h-5 bg-black/15 blur-xl -mt-3 pointer-events-none rounded-full" />
      <div className="w-1/3 ml-auto mr-12 h-6 bg-red-600/25 blur-2xl -mt-5 pointer-events-none rounded-full" />
    </div>
  );
};

// =========================================================================
// HERO BANNER CAROUSEL
// =========================================================================
const HeroBanner = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [flyingSlide, setFlyingSlide] = useState(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [direction, setDirection] = useState('next');

  // 5 Synchronized Broadcast News Stories
  const slides = heroSlides;

  // The slide previewed inside the camera viewfinder (the 2nd in sequence)
  const nextPreviewIndex = isExpanding && flyingSlide
    ? (slides.findIndex((s) => s.id === flyingSlide.id) + 1) % slides.length
    : (currentSlideIndex + 1) % slides.length;
  const cameraPreviewSlide = slides[nextPreviewIndex];

  // Trigger continuous dot-to-left expansion: starts as small dot at camera, travels leftward growing smoothly
  const handleNext = () => {
    if (isExpanding) return;
    const incomingIndex = (currentSlideIndex + 1) % slides.length;
    setDirection('next');
    setFlyingSlide(slides[incomingIndex]);
    setIsExpanding(true);

    setTimeout(() => {
      setCurrentSlideIndex(incomingIndex);
      setIsExpanding(false);
      setFlyingSlide(null);
    }, 950);
  };

  const handlePrev = () => {
    if (isExpanding) return;
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    setDirection('prev');
    setFlyingSlide(slides[prevIndex]);
    setIsExpanding(true);

    setTimeout(() => {
      setCurrentSlideIndex(prevIndex);
      setIsExpanding(false);
      setFlyingSlide(null);
    }, 950);
  };

  const handleJumpToSlide = (idx) => {
    if (isExpanding || idx === currentSlideIndex) return;
    const dir = idx > currentSlideIndex ? 'next' : 'prev';
    setDirection(dir);
    setFlyingSlide(slides[idx]);
    setIsExpanding(true);

    setTimeout(() => {
      setCurrentSlideIndex(idx);
      setIsExpanding(false);
      setFlyingSlide(null);
    }, 950);
  };

  // Shortened time interval for dynamic broadcast rotation (3.8s)
  const AUTO_INTERVAL = 3800;

  // Auto-advance carousel smoothly at short time interval
  useEffect(() => {
    if (isExpanding) return;
    const timer = setInterval(() => {
      handleNext();
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isExpanding, currentSlideIndex]);

  // Renders Left Column Story Typography with Timely Choreographed Entrance
  const renderTextContent = (slide, isIncoming = false) => {
    const isNext = direction === 'next';
    const exitAnim = isNext ? 'heroTextExitNext' : 'heroTextExitPrev';
    const badgeAnim = isNext ? 'textStaggerBadgeNext' : 'textStaggerBadgePrev';
    const t1Anim = isNext ? 'textStaggerTitle1Next' : 'textStaggerTitle1Prev';
    const t2Anim = isNext ? 'textStaggerTitle2Next' : 'textStaggerTitle2Prev';
    const descAnim = isNext ? 'textStaggerDescNext' : 'textStaggerDescPrev';
    const ctaAnim = isNext ? 'textStaggerCtaNext' : 'textStaggerCtaPrev';

    return (
      <div 
        key={`content-${slide.id}-${isIncoming ? 'in' : 'static'}`}
        className={`flex flex-col items-start justify-center text-left space-y-2.5 sm:space-y-3.5 lg:space-y-4 w-full ${
          !isIncoming && isExpanding ? 'pointer-events-none' : ''
        }`}
        style={
          !isIncoming && isExpanding
            ? { animation: `${exitAnim} 0.22s cubic-bezier(0.4, 0, 1, 1) forwards` }
            : {}
        }
      >
        {/* Badge: [🔴 LIVE |||||||||] with animated soundwave bars */}
        <div 
          className="flex items-center gap-2"
          style={
            isIncoming
              ? { animation: `${badgeAnim} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.18s both` }
              : {}
          }
        >
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${slide.badgeBg} text-white text-[10.5px] sm:text-[11px] font-black uppercase tracking-wider shadow-sm ${slide.badgeShadow} transition-colors duration-300`}>
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {slide.badge}
          </span>

          {/* Animated Soundwave Equalizer */}
          <div className={`flex items-center gap-0.5 h-3 px-1 ${slide.soundwaveColor}`} aria-hidden="true">
            <span className="w-0.5 bg-current rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
            <span className="w-0.5 bg-current rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-3.5" />
            <span className="w-0.5 bg-current rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-2.5" />
            <span className="w-0.5 bg-current rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-4" />
            <span className="w-0.5 bg-current rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] 2xl:text-[66px] font-black tracking-tight leading-[1.08] sm:leading-[1.06] text-[#0a1931] font-['Montserrat',sans-serif]">
          <span 
            className="block"
            style={
              isIncoming
                ? { animation: `${t1Anim} 0.46s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both` }
                : {}
            }
          >
            {slide.title1}
          </span>
          <span 
            className="block text-[#e01923]"
            style={
              isIncoming
                ? { animation: `${t2Anim} 0.46s cubic-bezier(0.22, 1, 0.36, 1) 0.32s both` }
                : {}
            }
          >
            {slide.title2}
          </span>
        </h1>

        {/* Subtitle / News Summary Description */}
        <p 
          className="text-xs sm:text-[15px] md:text-base lg:text-[17px] xl:text-[18px] text-slate-700 font-medium max-w-2xl leading-relaxed"
          style={
            isIncoming
              ? { animation: `${descAnim} 0.48s cubic-bezier(0.22, 1, 0.36, 1) 0.40s both` }
              : {}
          }
        >
          {slide.description}
        </p>

        {/* Action Button: [▶ Watch Live →] */}
        <div 
          className="pt-1 sm:pt-2.5"
          style={
            isIncoming
              ? { animation: `${ctaAnim} 0.48s cubic-bezier(0.22, 1, 0.36, 1) 0.48s both` }
              : {}
          }
        >
          <a
            href={slide.ctaLink}
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#e01923] to-[#be121d] hover:from-[#ec222c] hover:to-[#cb1520] active:scale-95 text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full font-bold text-xs sm:text-[14.5px] shadow-lg shadow-red-600/35 cursor-pointer transition-all duration-200"
          >
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white text-red-600 flex items-center justify-center text-[7px] sm:text-[8px] pl-0.5 font-bold shadow-xs">
              ▶
            </span>
            <span className="tracking-wide font-['Montserrat',sans-serif]">{slide.cta}</span>
            <span className="text-xs sm:text-sm font-bold">→</span>
          </a>
        </div>

        {/* Pagination Indicators with Live Auto-Change Countdown Progress Bar */}
        <div className="flex items-center gap-1.5 pt-2 sm:pt-3">
          {slides.map((_, idx) => {
            const activeIdx = isIncoming ? slides.findIndex(s => s.id === slide.id) : currentSlideIndex;
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => handleJumpToSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'w-8 sm:w-9 bg-slate-300/80 relative shadow-xs'
                    : 'w-2 bg-slate-400/60 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isActive && (
                  <span
                    key={`bar-${activeIdx}-${isExpanding}`}
                    className="absolute inset-0 bg-red-600 rounded-full"
                    style={{
                      animation: !isExpanding ? 'carouselProgressBar 3.8s linear forwards' : 'none',
                      width: isExpanding ? '100%' : undefined,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full bg-[#030914] select-none py-0 overflow-hidden">
      {/* Dynamic Keyframes: 100% Continuous, Silky-Smooth Mathematical Interpolation (Zero Stepped Jumps) */}
      <style>{`
        /* Desktop Next: Starts at camera lens (77% 50%) as a small 28px dot, travels smoothly leftward to (20% 50%) expanding continuously to 2400px (full-bleed coverage) */
        @keyframes heroDotExpandToLeftDesktop {
          0% {
            clip-path: circle(28px at 77% 50%);
            opacity: 0.98;
          }
          100% {
            clip-path: circle(2400px at 20% 50%);
            opacity: 1;
          }
        }

        /* Desktop Prev: Starts at left side (20% 50%) as a small 28px dot, travels smoothly rightward to (77% 50%) expanding continuously to 2400px (full-bleed coverage) */
        @keyframes heroDotExpandToRightDesktop {
          0% {
            clip-path: circle(28px at 20% 50%);
            opacity: 0.98;
          }
          100% {
            clip-path: circle(2400px at 77% 50%);
            opacity: 1;
          }
        }

        /* Mobile Viewport */
        @keyframes heroDotExpandMobile {
          0% {
            clip-path: circle(20px at 50% 75%);
            opacity: 0.98;
          }
          100% {
            clip-path: circle(1500px at 50% 25%);
            opacity: 1;
          }
        }

        /* 100% Continuous, Silky-Smooth Mathematical Interpolation (Zero Stepped Jumps) */
        .dot-expand-next {
          animation: heroDotExpandToLeftDesktop 0.95s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          will-change: clip-path;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .dot-expand-prev {
          animation: heroDotExpandToRightDesktop 0.95s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          will-change: clip-path;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        @media (max-width: 1023px) {
          .dot-expand-next, .dot-expand-prev {
            animation: heroDotExpandMobile 0.95s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          }
        }

        /* Outgoing Text Exit (Smooth fade and slide away as wave starts) */
        @keyframes heroTextExitNext {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-24px);
          }
        }

        @keyframes heroTextExitPrev {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(24px);
          }
        }

        /* Incoming Staggered Elements: Direction Next (Gliding in from right timely with image wave) */
        @keyframes textStaggerBadgeNext {
          0% {
            opacity: 0;
            transform: translateX(22px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes textStaggerTitle1Next {
          0% {
            opacity: 0;
            transform: translateX(28px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textStaggerTitle2Next {
          0% {
            opacity: 0;
            transform: translateX(34px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textStaggerDescNext {
          0% {
            opacity: 0;
            transform: translateX(26px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textStaggerCtaNext {
          0% {
            opacity: 0;
            transform: translateX(22px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes textStaggerWatermarkNext {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Incoming Staggered Elements: Direction Prev (Gliding in from left timely with image wave) */
        @keyframes textStaggerBadgePrev {
          0% {
            opacity: 0;
            transform: translateX(-22px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes textStaggerTitle1Prev {
          0% {
            opacity: 0;
            transform: translateX(-28px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textStaggerTitle2Prev {
          0% {
            opacity: 0;
            transform: translateX(-34px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textStaggerDescPrev {
          0% {
            opacity: 0;
            transform: translateX(-26px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textStaggerCtaPrev {
          0% {
            opacity: 0;
            transform: translateX(-22px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes textStaggerWatermarkPrev {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Active Pagination Carousel Progress Countdown Bar */
        @keyframes carouselProgressBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>

      {/* Full-bleed Full-Width Container (Zero Side Space) */}
      <div className="relative w-full z-10">
        
        {/* Main Banner: Edge-to-Edge Grand Broadcast Canvas */}
        <div 
          className="relative w-full overflow-hidden shadow-2xl min-h-[460px] sm:min-h-[500px] md:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] 2xl:min-h-[660px] flex items-center border-y border-slate-800/60"
        >
          {/* Base Screen Hero Background Layers (Instant seamless handoff when expansion completes) */}
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
                currentSlideIndex === idx
                  ? 'opacity-100 scale-100 z-0'
                  : 'opacity-0 scale-[1.02] pointer-events-none -z-10'
              }`}
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            />
          ))}

          {/* Dynamic Expanding Layer: 100% Continuous, Silky-Smooth Mathematical Interpolation */}
          {isExpanding && flyingSlide && (
            <div 
              className={`absolute inset-0 z-10 pointer-events-none overflow-hidden ${
                direction === 'next' ? 'dot-expand-next' : 'dot-expand-prev'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${flyingSlide.bgImage}')` }}
              />
            </div>
          )}

          {/* Subtle White Reading Gradient Overlay on Left */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-[54%] xl:w-[48%] bg-gradient-to-r from-white via-white/92 sm:via-white/75 to-transparent pointer-events-none z-10" />

          {/* Dynamic Watermark in Top Left Sky matching current screen */}
          {isExpanding && flyingSlide ? (
            <>
              {/* Outgoing Watermark */}
              <div 
                className="absolute top-6 sm:top-8 lg:top-10 left-8 sm:left-14 lg:left-20 xl:left-28 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800/[0.08] tracking-widest pointer-events-none select-none font-['Montserrat',sans-serif] z-10"
                style={{
                  animation: `${direction === 'next' ? 'heroTextExitNext' : 'heroTextExitPrev'} 0.22s cubic-bezier(0.4, 0, 1, 1) forwards`
                }}
              >
                {slides[currentSlideIndex].watermark}
              </div>

              {/* Incoming Watermark */}
              <div 
                className="absolute top-6 sm:top-8 lg:top-10 left-8 sm:left-14 lg:left-20 xl:left-28 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800/[0.08] tracking-widest pointer-events-none select-none font-['Montserrat',sans-serif] z-10"
                style={{
                  animation: `${direction === 'next' ? 'textStaggerWatermarkNext' : 'textStaggerWatermarkPrev'} 0.45s cubic-bezier(0.22, 1, 0.36, 1) 0.20s both`
                }}
              >
                {flyingSlide.watermark}
              </div>
            </>
          ) : (
            <div 
              key={`wm-${slides[currentSlideIndex].id}`}
              className="absolute top-6 sm:top-8 lg:top-10 left-8 sm:left-14 lg:left-20 xl:left-28 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-800/[0.08] tracking-widest pointer-events-none select-none font-['Montserrat',sans-serif] z-10"
            >
              {slides[currentSlideIndex].watermark}
            </div>
          )}

          {/* Two-Column Layout: Left Typography & Controls | Right 3D Camera Front Frame */}
          <div className="relative z-20 w-full max-w-[1880px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Content Column: Timely synchronized text entrance with expanding image wave */}
            <div className="lg:col-span-7 xl:col-span-7 relative w-full flex flex-col items-start justify-center text-left">
              {isExpanding && flyingSlide ? (
                <>
                  {/* Outgoing Story Text: Exits smoothly as new image begins to fly */}
                  <div className="absolute inset-0">
                    {renderTextContent(slides[currentSlideIndex], false)}
                  </div>

                  {/* Incoming Story Text: Enters timely as image expands from small to big */}
                  <div className="relative w-full">
                    {renderTextContent(flyingSlide, true)}
                  </div>
                </>
              ) : (
                /* Static Active Story */
                renderTextContent(slides[currentSlideIndex], false)
              )}
            </div>

            {/* Right Column: 3D Camera Front Frame Previewing the NEXT Image */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end w-full">
              <NewsCameraFrame 
                feedSrc={cameraPreviewSlide.feedImage}
                feedLabel={cameraPreviewSlide.feedLabel}
                badgeText="NEXT LIVE"
                onClick={handleNext}
                className="w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[650px] 2xl:max-w-[700px] ml-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)] hover:scale-[1.01] transition-transform duration-200"
              />
            </div>

          </div>

          {/* Circular Carousel Navigation Arrows (Left & Right) */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#0a1931]/85 hover:bg-[#0a1931] text-white flex items-center justify-center shadow-xl transition-all active:scale-90 z-30 cursor-pointer border border-white/20"
            aria-label="Previous story"
          >
            <FaChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#0a1931]/85 hover:bg-[#0a1931] text-white flex items-center justify-center shadow-xl transition-all active:scale-90 z-30 cursor-pointer border border-white/20"
            aria-label="Next story"
          >
            <FaChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </button>

        </div>
      </div>
    </section>
  );
};

// =========================================================================
// MAIN HERO SECTION & 24 INDIVIDUAL SECTIONS SEQUENTIAL CONTAINER
// =========================================================================
export const HeroSection = () => {
  return (
    <>
      {/* Hero Banner Carousel & Viewfinder */}
      <div id="home">
        <HeroBanner />
      </div>

      {/* 24 Sequential Homepage Sections */}
      <div id="news">
        <Section01 />
      </div>
      <Section02 />
      <Section03 />
      <Section04 />
      <div id="breaking-news">
        <Section05 />
      </div>
      <Section06 />
      <Section07 />
      <Section08 />
      <div id="article">
        <Section09 />
      </div>
      <Section10 />
      <div id="e-newspaper">
        <Section11 />
      </div>
      <Section12 />
      <Section13 />
      <div id="headline-news">
        <Section14 />
      </div>
      <Section15 />
      <Section16 />
      <Section17 />
      <Section18 />
      <Section19 />
      <Section20 />
      <Section21 />
      <Section22 />
      <Section23 />
      <div id="latest-news">
        <Section24 />
      </div>
    </>
  );
};

export default HeroSection;
