import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { newsPagesData, mobileNewsPagesData } from './AdvertiseWithUsPageData';

// ============================================================================
// 1. BESPOKE 3D-STYLED ANIMATED SVG ILLUSTRATION IMPORTS
// ============================================================================
// ============================================================================
// 1. BESPOKE 3D-STYLED ANIMATED SVG ILLUSTRATION COMPONENTS
// ============================================================================

// --- BusinessSVG.jsx ---
/**
 * BusinessSVG Component
 * 3D-styled vector illustration for Business & Finance news.
 * Features an animated upward surging trend arrow, breathing bars, and pulsing data nodes.
 */
export const BusinessSVG = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft Background Plate Gradient */}
        <radialGradient id="bizBgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>

        {/* Bar Gradients */}
        <linearGradient id="bizBar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="bizBar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="bizBar3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="bizBar4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        {/* Dynamic Red Trending Arrow Gradient */}
        <linearGradient id="bizArrowGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>

        {/* Arrow Filter Shadow */}
        <filter id="bizArrowShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#dc2626" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Background Glow */}
      <circle cx="60" cy="60" r="54" fill="url(#bizBgGlow)" />

      {/* Chart Grid Lines */}
      <line x1="20" y1="95" x2="105" y2="95" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="72" x2="105" y2="72" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="20" y1="48" x2="105" y2="48" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="20" y1="24" x2="105" y2="24" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />

      {/* Bar 1 */}
      <g>
        <rect x="25" y="74" width="14" height="21" rx="3" fill="url(#bizBar1)" />
        <rect x="25" y="74" width="14" height="2.5" rx="1.2" fill="#93c5fd" />
      </g>

      {/* Bar 2 */}
      <g>
        <rect x="44" y="58" width="14" height="37" rx="3" fill="url(#bizBar2)" />
        <rect x="44" y="58" width="14" height="2.5" rx="1.2" fill="#7dd3fc" />
      </g>

      {/* Bar 3 (Animated Breathing Growth) */}
      <g className="anim-biz-bar" style={{ transformOrigin: '70px 95px', animationDelay: '0.4s' }}>
        <rect x="63" y="44" width="14" height="51" rx="3" fill="url(#bizBar3)" />
        <rect x="63" y="44" width="14" height="2.5" rx="1.2" fill="#a5b4fc" />
      </g>

      {/* Bar 4 (Animated Breathing Growth) */}
      <g className="anim-biz-bar" style={{ transformOrigin: '89px 95px' }}>
        <rect x="82" y="28" width="14" height="67" rx="3" fill="url(#bizBar4)" />
        <rect x="82" y="28" width="14" height="2.5" rx="1.2" fill="#60a5fa" />
      </g>

      {/* Animated Surging Arrow & Trendline Group */}
      <g className="anim-biz-arrow">
        {/* Upward Trending Zigzag Line */}
        <path
          d="M 28 72 L 51 54 L 70 42 L 95 18"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 28 72 L 51 54 L 70 42 L 95 18"
          stroke="url(#bizArrowGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#bizArrowShadow)"
        />

        {/* Arrow Head */}
        <polygon
          points="95,12 104,22 93,24 95,18 89,20"
          fill="url(#bizArrowGrad)"
          filter="url(#bizArrowShadow)"
        />

        {/* Pulsing Data Indicator Nodes */}
        <circle cx="28" cy="72" r="3.5" fill="#ffffff" stroke="#ef4444" strokeWidth="2" className="anim-biz-node" />
        <circle cx="51" cy="54" r="3.5" fill="#ffffff" stroke="#ef4444" strokeWidth="2" className="anim-biz-node" style={{ animationDelay: '0.3s' }} />
        <circle cx="70" cy="42" r="3.5" fill="#ffffff" stroke="#ef4444" strokeWidth="2" className="anim-biz-node" style={{ animationDelay: '0.6s' }} />
        <circle cx="95" cy="18" r="4.2" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" className="anim-biz-node" style={{ animationDelay: '0.9s' }} />
      </g>
    </svg>
  );
};

// --- SportsSVG.jsx ---
/**
 * SportsSVG Component
 * 3D-styled vector illustration for Sports news.
 * Features an animated cricket ball with curved stitching seam and rotating kinetic blue motion orbit rings.
 */
export const SportsSVG = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Cricket Ball 3D Shading */}
        <radialGradient id="cricketBallGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="65%" stopColor="#b91c1c" />
          <stop offset="90%" stopColor="#7f1d1d" />
          <stop offset="100%" stopColor="#450a0a" />
        </radialGradient>

        {/* Orbit Motion Gradient */}
        <linearGradient id="sportsOrbitGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="ballShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="60" cy="100" rx="34" ry="8" fill="url(#ballShadow)" />

      {/* Rotating Kinetic Orbit Rings Group (Behind & In Front) */}
      <g className="anim-sports-orbit">
        {/* Kinetic Motion Back Arc */}
        <path
          d="M 18 64 C 18 38, 48 20, 82 24 C 95 26, 105 32, 108 42"
          stroke="url(#sportsOrbitGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="8 4"
        />

        {/* Secondary Motion Orbit Ring */}
        <ellipse
          cx="60"
          cy="58"
          rx="46"
          ry="18"
          transform="rotate(-28 60 58)"
          stroke="#93c5fd"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        />

        {/* Front Swirling Arc */}
        <path
          d="M 30 84 C 42 98, 78 100, 96 82 C 106 72, 108 58, 100 48"
          stroke="url(#sportsOrbitGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Orbit Particles */}
        <circle cx="102" cy="46" r="3" fill="#38bdf8" />
        <circle cx="94" cy="36" r="1.8" fill="#60a5fa" />
        <circle cx="24" cy="80" r="2" fill="#38bdf8" />
      </g>

      {/* Cricket Ball Body Group (with Subtle Spin Animation) */}
      <g className="anim-sports-ball">
        {/* Cricket Ball Body */}
        <circle cx="60" cy="58" r="32" fill="url(#cricketBallGrad)" />

        {/* Ball Specular Highlight (leather sheen) */}
        <ellipse cx="50" cy="46" rx="14" ry="9" transform="rotate(-30 50 46)" fill="#ffffff" opacity="0.3" />

        {/* Curved Center Seam Groove */}
        <path
          d="M 37 77 C 48 64, 64 48, 77 37"
          stroke="#450a0a"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* White Core Seam */}
        <path
          d="M 37 77 C 48 64, 64 48, 77 37"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Hand-stitched Seam Threads (Dashed) */}
        <path
          d="M 35 79 C 46 66, 66 46, 79 35"
          stroke="#fef2f2"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

// --- TechnologySVG.jsx ---
/**
 * TechnologySVG Component
 * 3D-styled vector illustration for Technology & AI news.
 * Features an animated AI neural core pulse, glowing circuit traces, and rotating holographic ring.
 */
export const TechnologySVG = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Screen Display Gradient */}
        <linearGradient id="techScreenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Laptop Metal Casing */}
        <linearGradient id="laptopChassisGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>

        <linearGradient id="laptopBaseGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Circuit Glow */}
        <linearGradient id="circuitGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        <radialGradient id="techCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background Animated Circuit Traces */}
      <g className="anim-tech-circuit">
        <path
          d="M 12 36 L 28 36 L 40 24 L 56 24"
          stroke="url(#circuitGlow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="36" r="2.5" fill="#38bdf8" />
        <circle cx="56" cy="24" r="2.5" fill="#818cf8" />
      </g>

      <g className="anim-tech-circuit" style={{ animationDelay: '0.5s' }}>
        <path
          d="M 108 40 L 94 40 L 82 28 L 72 28"
          stroke="url(#circuitGlow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="108" cy="40" r="2.5" fill="#38bdf8" />
      </g>

      <g className="anim-tech-circuit" style={{ animationDelay: '0.8s' }}>
        <path
          d="M 16 80 L 26 80 L 34 88 L 46 88"
          stroke="url(#circuitGlow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="80" r="2.5" fill="#6366f1" />
      </g>

      <g className="anim-tech-circuit" style={{ animationDelay: '1.1s' }}>
        <path
          d="M 104 78 L 92 78 L 86 86 L 74 86"
          stroke="url(#circuitGlow)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="104" cy="78" r="2.5" fill="#38bdf8" />
      </g>

      {/* Laptop Shadow */}
      <ellipse cx="60" cy="94" rx="42" ry="7" fill="#0f172a" opacity="0.25" />

      {/* Laptop Base (Keyboard Deck) */}
      <path
        d="M 22 84 L 98 84 L 104 89 L 16 89 Z"
        fill="url(#laptopBaseGrad)"
      />
      {/* Front Edge Lip */}
      <rect x="16" y="89" width="88" height="3" rx="1.5" fill="#475569" />
      {/* Trackpad */}
      <rect x="52" y="85" width="16" height="3.5" rx="0.8" fill="#94a3b8" />

      {/* Laptop Screen Lid */}
      <rect
        x="28"
        y="30"
        width="64"
        height="52"
        rx="4"
        fill="url(#laptopChassisGrad)"
        stroke="#475569"
        strokeWidth="1"
      />

      {/* Screen Glass Bezel */}
      <rect
        x="31"
        y="33"
        width="58"
        height="46"
        rx="2.5"
        fill="url(#techScreenGrad)"
      />

      {/* Web Camera Dot */}
      <circle cx="60" cy="32" r="0.8" fill="#0f172a" />

      {/* Screen Interface: Code Wave Lines */}
      <line x1="36" y1="42" x2="48" y2="42" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <line x1="36" y1="48" x2="44" y2="48" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <line x1="72" y1="42" x2="84" y2="42" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <line x1="76" y1="48" x2="84" y2="48" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <line x1="36" y1="68" x2="52" y2="68" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <line x1="68" y1="68" x2="84" y2="68" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />

      {/* Animated AI Neural Core (Pulsing Center) */}
      <g className="anim-tech-core">
        <circle cx="60" cy="55" r="16" fill="url(#techCoreGlow)" />
        <circle cx="60" cy="55" r="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="60" cy="55" r="3" fill="#ffffff" />
      </g>

      {/* Rotating Holographic Ring */}
      <ellipse
        cx="60"
        cy="55"
        rx="22"
        ry="7"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.2"
        strokeDasharray="4 2"
        className="anim-tech-ring"
      />
    </svg>
  );
};

// --- WeatherSVG.jsx ---
/**
 * WeatherSVG Component
 * 3D-styled vector illustration for Weather news.
 * Features rotating sun rays, floating volumetric cumulus clouds, and drizzling monsoon raindrops.
 */
export const WeatherSVG = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sun 3D Radial Glow */}
        <radialGradient id="sunGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#facc15" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </radialGradient>

        {/* Sun Halo */}
        <radialGradient id="sunCorona" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>

        {/* Cloud Front Layer Gradient */}
        <linearGradient id="cloudFrontGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* Cloud Back Layer Gradient */}
        <linearGradient id="cloudBackGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Cloud Shadow */}
        <filter id="cloudShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Atmospheric Sun Corona Glow */}
      <circle cx="70" cy="46" r="38" fill="url(#sunCorona)" />

      {/* Continuously Rotating Sun Rays */}
      <g className="anim-weather-rays">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
          <line
            key={`sun-ray-${idx}`}
            x1="70"
            y1="46"
            x2={70 + 32 * Math.cos((angle * Math.PI) / 180)}
            y2={46 + 32 * Math.sin((angle * Math.PI) / 180)}
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.75"
          />
        ))}
      </g>

      {/* 3D Sun Sphere */}
      <circle cx="70" cy="46" r="22" fill="url(#sunGrad)" />

      {/* Atmosphere Breeze Swirl Lines */}
      <path
        d="M 14 74 C 26 70, 34 76, 42 72"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 80 92 C 92 88, 102 94, 110 90"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Background Cloud Puffs */}
      <path
        d="M 38 68 C 38 60, 44 54, 52 54 C 54 54, 56 55, 58 56 C 62 48, 70 46, 78 50 C 84 54, 86 60, 84 66 C 88 68, 92 72, 92 78 C 92 84, 86 88, 80 88 L 38 88 Z"
        fill="url(#cloudBackGrad)"
        opacity="0.4"
      />

      {/* Foreground 3D Floating Volumetric Cloud */}
      <g filter="url(#cloudShadow)" className="anim-weather-cloud">
        <path
          d="M 28 88 C 22 88, 18 83, 18 77 C 18 71, 22 66, 28 66 C 29 66, 30 66, 31 66 C 33 56, 42 49, 52 49 C 61 49, 69 55, 71 63 C 73 62, 76 61, 79 61 C 86 61, 92 67, 92 74 C 92 75, 92 76, 91 77 C 95 79, 98 83, 98 88 C 98 94, 93 98, 87 98 L 28 98 C 22 98, 28 88, 28 88 Z"
          fill="url(#cloudFrontGrad)"
        />
        {/* Soft highlight crests on cloud bubbles */}
        <ellipse cx="52" cy="54" rx="12" ry="4" fill="#ffffff" opacity="0.8" />
        <ellipse cx="78" cy="65" rx="8" ry="3" fill="#ffffff" opacity="0.7" />
        <ellipse cx="28" cy="70" rx="6" ry="2.5" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Animated Drizzling Rain Droplets */}
      <line x1="36" y1="103" x2="33" y2="109" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" className="anim-weather-rain" />
      <line x1="52" y1="104" x2="49" y2="110" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" className="anim-weather-rain" style={{ animationDelay: '0.4s' }} />
      <line x1="68" y1="103" x2="65" y2="109" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" className="anim-weather-rain" style={{ animationDelay: '0.8s' }} />
      <line x1="84" y1="104" x2="81" y2="110" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" className="anim-weather-rain" style={{ animationDelay: '1.2s' }} />
    </svg>
  );
};

// --- NationalSVG.jsx ---
/**
 * NationalSVG Component
 * 3D-styled vector illustration for National News.
 * Features an India geographic silhouette with national tricolor accents,
 * pulsating radio broadcast wave arcs, and active radar beacon pings.
 */
export const NationalSVG = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* National Flag Tricolor Gradient on Map */}
        <linearGradient id="indiaMapGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="35%" stopColor="#fdba74" />
          <stop offset="50%" stopColor="#f8fafc" />
          <stop offset="68%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Map Drop Shadow */}
        <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#1e3a8a" floodOpacity="0.25" />
        </filter>

        {/* Beacon Glow */}
        <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Pulsing Broadcast Wave Arcs from Center */}
      <circle cx="60" cy="50" r="22" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 3" className="anim-national-wave" />
      <circle cx="60" cy="50" r="34" stroke="#60a5fa" strokeWidth="1.2" strokeDasharray="4 4" className="anim-national-wave" style={{ animationDelay: '0.6s' }} />
      <circle cx="60" cy="50" r="46" stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="4 4" className="anim-national-wave" style={{ animationDelay: '1.2s' }} />

      {/* Stylized Modern India Map Silhouette Path */}
      <g filter="url(#mapShadow)">
        <path
          d="M 58 14 
             C 62 14, 65 18, 66 22 
             C 68 25, 73 24, 76 26
             C 80 29, 81 33, 78 35
             C 74 37, 72 40, 75 42
             C 78 44, 88 43, 94 45
             C 99 47, 102 51, 98 55
             C 94 58, 88 56, 85 58
             C 83 60, 84 63, 81 66
             C 77 71, 75 79, 72 87
             C 69 95, 62 106, 60 108
             C 58 106, 52 95, 48 87
             C 45 80, 42 72, 38 67
             C 34 63, 26 62, 22 57
             C 18 52, 23 46, 28 47
             C 33 48, 38 46, 41 42
             C 44 38, 48 35, 46 29
             C 45 25, 48 20, 52 16
             Z"
          fill="url(#indiaMapGrad)"
          stroke="#1e3a8a"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>

      {/* Ashoka Chakra Blue Accent Node in Center */}
      <circle cx="60" cy="54" r="6" fill="#ffffff" stroke="#1e3a8a" strokeWidth="1.2" />
      <circle cx="60" cy="54" r="2.2" fill="#1e3a8a" />
      <line x1="60" y1="49" x2="60" y2="59" stroke="#1e3a8a" strokeWidth="0.8" />
      <line x1="55" y1="54" x2="65" y2="54" stroke="#1e3a8a" strokeWidth="0.8" />

      {/* News Location Radar Beacon Pins with Active Ping Ripples */}
      {/* 1. Northern Capital Hub (New Delhi) */}
      <g transform="translate(56, 36)">
        <circle cx="0" cy="0" r="9" fill="#ef4444" className="anim-national-ping" />
        <circle cx="0" cy="0" r="3.2" fill="#ef4444" stroke="#ffffff" strokeWidth="1.2" />
      </g>

      {/* 2. Western Hub (Mumbai) */}
      <g transform="translate(38, 62)">
        <circle cx="0" cy="0" r="8" fill="#3b82f6" className="anim-national-ping" style={{ animationDelay: '0.5s' }} />
        <circle cx="0" cy="0" r="2.8" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.2" />
      </g>

      {/* 3. Southern Tech Hub (Bengaluru) */}
      <g transform="translate(55, 84)">
        <circle cx="0" cy="0" r="8" fill="#10b981" className="anim-national-ping" style={{ animationDelay: '1.0s' }} />
        <circle cx="0" cy="0" r="2.8" fill="#10b981" stroke="#ffffff" strokeWidth="1.2" />
      </g>

      {/* 4. Eastern Hub (Kolkata) */}
      <g transform="translate(82, 55)">
        <circle cx="0" cy="0" r="8" fill="#f59e0b" className="anim-national-ping" style={{ animationDelay: '1.5s' }} />
        <circle cx="0" cy="0" r="2.8" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.2" />
      </g>
    </svg>
  );
};

// --- EducationSVG.jsx ---
/**
 * EducationSVG Component
 * 3D-styled vector illustration for Education news.
 * Features an academic graduation mortarboard cap with gently swaying golden tassel,
 * an open book with reading ribbon, and twinkling achievement stars.
 */
export const EducationSVG = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Mortarboard Cap Gradients */}
        <linearGradient id="capTopGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="capRimGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Golden Tassel Gradient */}
        <linearGradient id="tasselGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Book Cover Gradient */}
        <linearGradient id="bookCoverGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>

        {/* Page Spread Gradient */}
        <linearGradient id="bookPageGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="48%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="52%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>

        {/* Drop Shadow */}
        <filter id="eduShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Background Soft Academic Halo */}
      <circle cx="60" cy="58" r="48" fill="#e0e7ff" opacity="0.35" />

      {/* ============================================================== */}
      {/* 1. OPEN ACADEMIC BOOK (BOTTOM BASE)                            */}
      {/* ============================================================== */}
      <g filter="url(#eduShadow)">
        {/* Book Hardcover Base */}
        <path
          d="M 18 84 C 36 78, 54 80, 60 84 C 66 80, 84 78, 102 84 L 102 96 C 84 90, 66 92, 60 96 C 54 92, 36 90, 18 96 Z"
          fill="url(#bookCoverGrad)"
        />

        {/* Book Pages Spread */}
        <path
          d="M 20 80 C 38 74, 54 77, 60 82 C 66 77, 82 74, 100 80 L 100 90 C 82 84, 66 87, 60 92 C 54 87, 38 84, 20 90 Z"
          fill="url(#bookPageGrad)"
        />

        {/* Center Spine Crease Line */}
        <line x1="60" y1="82" x2="60" y2="92" stroke="#94a3b8" strokeWidth="1.2" />

        {/* Red Silk Bookmark Ribbon */}
        <path
          d="M 60 88 C 60 94, 62 100, 66 104 L 70 102 L 67 96 C 64 92, 62 88, 60 88 Z"
          fill="#ef4444"
        />

        {/* Text Lines on Pages */}
        <line x1="28" y1="82" x2="52" y2="82" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="28" y1="85" x2="48" y2="85" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="68" y1="82" x2="92" y2="82" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <line x1="72" y1="85" x2="92" y2="85" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* ============================================================== */}
      {/* 2. GRADUATION MORTARBOARD CAP (WITH SWAYING TASSEL)            */}
      {/* ============================================================== */}
      <g filter="url(#eduShadow)">
        {/* Skull Cap Rim */}
        <path
          d="M 42 42 C 42 54, 78 54, 78 42 L 78 49 C 78 57, 42 57, 42 49 Z"
          fill="url(#capRimGrad)"
        />

        {/* Diamond Mortarboard Top Face */}
        <polygon
          points="60,20 102,35 60,50 18,35"
          fill="url(#capTopGrad)"
          stroke="#475569"
          strokeWidth="1"
        />
        {/* Top Face Edge Bevel Highlight */}
        <polyline
          points="18,35 60,20 102,35"
          stroke="#64748b"
          strokeWidth="1.2"
        />

        {/* Cap Center Button Pin */}
        <ellipse cx="60" cy="35" rx="3.5" ry="2" fill="url(#tasselGrad)" stroke="#78350f" strokeWidth="0.6" />

        {/* Animated Gently Swaying Golden Tassel */}
        <g className="anim-edu-tassel">
          <path
            d="M 60 35 C 72 38, 88 44, 90 54 L 88 68"
            stroke="url(#tasselGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Tassel Fringe Cluster */}
          <polygon
            points="88,66 93,76 85,76"
            fill="url(#tasselGrad)"
          />
          <circle cx="89" cy="67" r="2.2" fill="#d97706" />
        </g>
      </g>

      {/* Animated Twinkling Academic Achievement Stars */}
      <g className="anim-edu-star">
        <polygon points="26,20 28,24 32,26 28,28 26,32 24,28 20,26 24,24" fill="#f59e0b" />
      </g>
      <g className="anim-edu-star" style={{ animationDelay: '1s' }}>
        <polygon points="98,18 99,21 102,22 99,23 98,26 97,23 94,22 97,21" fill="#f59e0b" />
      </g>
    </svg>
  );
};

// --- HealthSVG.jsx ---
/**
 * HealthSVG Component
 * 3D-styled vector illustration for Health & Medicine news.
 * Features an animated heartbeat pulse on the 3D medical cross and an illuminated ECG cardiac waveform.
 */
export const HealthSVG = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Medical Cross Red Gradient */}
        <linearGradient id="crossGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#be123c" />
        </linearGradient>

        {/* Stethoscope Tubing Gradient */}
        <linearGradient id="stethoTubeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>

        {/* Chrome Metallic Headset Gradient */}
        <linearGradient id="chromeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>

        {/* ECG Heartbeat Line Glow */}
        <linearGradient id="ecgGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="45%" stopColor="#059669" />
          <stop offset="55%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>

        <filter id="healthShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#be123c" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Background Soft Glow */}
      <circle cx="60" cy="58" r="48" fill="#ffe4e6" opacity="0.4" />

      {/* ============================================================== */}
      {/* 1. 3D MEDICAL CROSS EMBLEM (ANIMATED CARDIAC HEARTBEAT)        */}
      {/* ============================================================== */}
      <g filter="url(#healthShadow)" className="anim-health-cross">
        {/* Shield Circular Backing */}
        <circle cx="60" cy="54" r="32" fill="#ffffff" stroke="#fecdd3" strokeWidth="2" />

        {/* 3D Red Medical Cross Shape */}
        <path
          d="M 52 32 C 52 30, 54 28, 56 28 L 64 28 C 66 28, 68 30, 68 32 L 68 46 L 82 46 C 84 46, 86 48, 86 50 L 86 58 C 86 60, 84 62, 82 62 L 68 62 L 68 76 C 68 78, 66 80, 64 80 L 56 80 C 54 80, 52 78, 52 76 L 52 62 L 38 62 C 36 62, 34 60, 34 58 L 34 50 C 34 48, 36 46, 38 46 L 52 46 Z"
          fill="url(#crossGrad)"
        />
        {/* Beveled Top Highlight on Cross */}
        <path
          d="M 53 32 L 67 32 L 67 47 L 85 47 L 85 51 L 67 51 L 67 79 L 63 79 L 63 51 L 35 51 L 35 47 L 53 47 Z"
          fill="#ffffff"
          opacity="0.25"
        />
      </g>

      {/* ============================================================== */}
      {/* 2. MODERN STETHOSCOPE                                          */}
      {/* ============================================================== */}
      {/* Tubing loop curving under cross */}
      <path
        d="M 32 30 C 20 45, 18 80, 48 94 C 66 100, 84 94, 94 78"
        stroke="url(#stethoTubeGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Chrome Binaural Earpiece Tubes */}
      <path
        d="M 28 20 C 32 20, 34 26, 32 30"
        stroke="url(#chromeGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="28" cy="20" r="2.5" fill="#1e293b" />

      {/* Chrome Stethoscope Chestpiece */}
      <circle cx="94" cy="78" r="9" fill="url(#chromeGrad)" stroke="#64748b" strokeWidth="1" />
      <circle cx="94" cy="78" r="6" fill="#0284c7" />
      <circle cx="94" cy="78" r="2.5" fill="#e0f2fe" />

      {/* ============================================================== */}
      {/* 3. GLOWING ANIMATED ECG HEARTBEAT WAVEFORM                     */}
      {/* ============================================================== */}
      <g className="anim-health-ecg">
        <path
          d="M 14 62 L 28 62 L 34 62 L 38 52 L 44 74 L 50 38 L 56 68 L 62 62 L 72 62 L 106 62"
          stroke="#ffffff"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 14 62 L 28 62 L 34 62 L 38 52 L 44 74 L 50 38 L 56 68 L 62 62 L 72 62 L 106 62"
          stroke="url(#ecgGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Glowing Active Heartbeat Pulse Dot */}
        <circle cx="50" cy="38" r="4" fill="#34d399" />
        <circle cx="50" cy="38" r="2" fill="#ffffff" />
      </g>
    </svg>
  );
};

// --- WorldSVG.jsx ---
/**
 * WorldSVG Component
 * 3D-styled vector illustration for World & International news.
 * Features an orbital flight animation of a communication satellite around Earth and pulsating global data beacons.
 */
export const WorldSVG = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Globe Ocean 3D Spherical Gradient */}
        <radialGradient id="globeOceanGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="25%" stopColor="#3b82f6" />
          <stop offset="65%" stopColor="#1d4ed8" />
          <stop offset="90%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>

        {/* Continents Green/Cyan Gradient */}
        <linearGradient id="continentGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="50%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Orbit Ring Gradient */}
        <linearGradient id="worldOrbitGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>

        {/* Globe Atmosphere Corona */}
        <radialGradient id="globeAtmosphere" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>

        <filter id="globeShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1e3a8a" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Atmospheric Outer Glow */}
      <circle cx="60" cy="60" r="46" fill="url(#globeAtmosphere)" />

      {/* ============================================================== */}
      {/* 1. SATELLITE COMMUNICATION ORBIT RING                          */}
      {/* ============================================================== */}
      <ellipse
        cx="60"
        cy="60"
        rx="52"
        ry="20"
        transform="rotate(-26 60 60)"
        stroke="url(#worldOrbitGrad)"
        strokeWidth="1.8"
        strokeDasharray="6 3"
        opacity="0.6"
      />

      {/* ============================================================== */}
      {/* 2. 3D BLUE EARTH GLOBE                                         */}
      {/* ============================================================== */}
      <g filter="url(#globeShadow)">
        {/* Ocean Base Sphere */}
        <circle cx="60" cy="60" r="32" fill="url(#globeOceanGrad)" />

        {/* Clip Path for Continents to stay within sphere */}
        <g clipPath="url(#globeClip)">
          {/* Latitude & Longitude Curvature Grid Lines */}
          <ellipse cx="60" cy="60" rx="32" ry="12" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.35" />
          <ellipse cx="60" cy="60" rx="32" ry="24" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.35" />
          <ellipse cx="60" cy="60" rx="12" ry="32" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.35" />
          <ellipse cx="60" cy="60" rx="24" ry="32" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.35" />
          <line x1="28" y1="60" x2="92" y2="60" stroke="#93c5fd" strokeWidth="0.8" opacity="0.4" />
          <line x1="60" y1="28" x2="60" y2="92" stroke="#93c5fd" strokeWidth="0.8" opacity="0.4" />

          {/* Continents (Stylized Vector Landmasses) */}
          {/* Eurasia & Africa */}
          <path
            d="M 52 38 C 58 35, 68 36, 74 42 C 78 46, 75 52, 70 54 C 66 56, 68 62, 72 68 C 68 74, 60 76, 56 70 C 53 66, 55 58, 50 56 C 45 54, 46 44, 52 38 Z"
            fill="url(#continentGrad)"
          />
          {/* Americas Arc on Left */}
          <path
            d="M 34 42 C 38 40, 42 45, 40 50 C 37 54, 38 60, 42 66 C 40 72, 34 76, 32 70 C 30 64, 32 50, 34 42 Z"
            fill="url(#continentGrad)"
          />
          {/* Australia / Islands */}
          <circle cx="82" cy="74" r="4.5" fill="url(#continentGrad)" />
          <circle cx="76" cy="79" r="2.5" fill="url(#continentGrad)" />
        </g>

        {/* Specular Glint on Top-Left Rim */}
        <path
          d="M 38 38 C 48 30, 65 30, 75 38 C 73 35, 60 28, 48 29 C 42 30, 39 34, 38 38 Z"
          fill="#ffffff"
          opacity="0.45"
        />
      </g>

      <clipPath id="globeClip">
        <circle cx="60" cy="60" r="32" />
      </clipPath>

      {/* ============================================================== */}
      {/* 3. ORBITING SATELLITE & SIGNAL TRANSMISSION                    */}
      {/* ============================================================== */}
      <g className="anim-world-satellite">
        <g transform="translate(60, 60) rotate(45)">
          <rect x="-8" y="-2" width="6" height="4" rx="0.5" fill="#38bdf8" stroke="#1e3a8a" strokeWidth="0.6" />
          <rect x="2" y="-2" width="6" height="4" rx="0.5" fill="#38bdf8" stroke="#1e3a8a" strokeWidth="0.6" />
          <rect x="-2" y="-3" width="4" height="6" rx="1" fill="#f8fafc" stroke="#475569" strokeWidth="0.6" />
        </g>
      </g>

      {/* Global Communication Beacons / Blinking Nodes */}
      <circle cx="68" cy="45" r="2.8" fill="#ef4444" stroke="#ffffff" strokeWidth="1" className="anim-world-node" />
      <circle cx="56" cy="66" r="2.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" className="anim-world-node" style={{ animationDelay: '0.6s' }} />
      <circle cx="38" cy="52" r="2.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" className="anim-world-node" style={{ animationDelay: '1.2s' }} />
    </svg>
  );
};

// --- Page2Icons.jsx ---
/**
 * ============================================================================
 * PAGE 2 ICONS (Pure 3D-styled vector SVG artwork with bespoke CSS animations)
 * ============================================================================
 */

/**
 * 1. BUSINESS (Page 2): Reserve Bank / Central Bank Vault & Gold Rupee Coin
 * Headline: "RBI Keeps Repo Rate Steady at 6.5%"
 */
export const BankVaultSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vaultBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="60%" stopColor="#1D4ED8" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
      <linearGradient id="vaultRoofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="goldCoinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
      <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FACC15" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
      </radialGradient>
      <filter id="vaultShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1E3A8A" floodOpacity="0.2" />
      </filter>
    </defs>

    {/* Ambient Floor Shadow */}
    <ellipse cx="60" cy="104" rx="42" ry="7" fill="#1E293B" opacity="0.14" />

    {/* Bank Institution Facade */}
    <g filter="url(#vaultShadow)">
      {/* Pediment Roof (Triangle) */}
      <polygon points="20,44 60,20 100,44" fill="url(#vaultRoofGrad)" />
      <polygon points="24,43 60,23 96,43" fill="#60A5FA" opacity="0.4" />

      {/* Architrave Beam */}
      <rect x="22" y="44" width="76" height="7" rx="1.5" fill="#1E40AF" />

      {/* 4 Classical Columns */}
      <rect x="27" y="51" width="8" height="38" rx="2" fill="url(#vaultBaseGrad)" />
      <rect x="45" y="51" width="8" height="38" rx="2" fill="url(#vaultBaseGrad)" />
      <rect x="67" y="51" width="8" height="38" rx="2" fill="url(#vaultBaseGrad)" />
      <rect x="85" y="51" width="8" height="38" rx="2" fill="url(#vaultBaseGrad)" />

      {/* Column highlights */}
      <line x1="29" y1="52" x2="29" y2="88" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="47" y1="52" x2="47" y2="88" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="69" y1="52" x2="69" y2="88" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="87" y1="52" x2="87" y2="88" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.7" />

      {/* Plinth Base Steps */}
      <rect x="18" y="89" width="84" height="6" rx="2" fill="#1E40AF" />
      <rect x="14" y="95" width="92" height="7" rx="2" fill="#172554" />
    </g>

    {/* Center Glowing Gold Rupee Coin (Animated Float & Glow) */}
    <g className="anim-rbi-coin">
      <circle cx="60" cy="68" r="19" fill="url(#goldGlow)" />
      <circle cx="60" cy="68" r="14" fill="url(#goldCoinGrad)" stroke="#FEF08A" strokeWidth="1.5" />
      <circle cx="60" cy="68" r="11" fill="none" stroke="#A16207" strokeWidth="0.8" strokeDasharray="2 1.5" />
      {/* Rupee Symbol ₹ */}
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontSize="12.5"
        fontWeight="900"
        fill="#78350F"
        fontFamily="sans-serif"
      >
        ₹
      </text>
    </g>
  </svg>
);

/**
 * 2. SPORTS (Page 2): Olympic Golden Torch & Dancing Victory Flame
 * Headline: "Olympic Contingent Begins Final Drills"
 */
export const OlympicTorchSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="torchHandleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="45%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <linearGradient id="torchGoldRim" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#CA8A04" />
        <stop offset="50%" stopColor="#FACC15" />
        <stop offset="100%" stopColor="#A16207" />
      </linearGradient>
      <radialGradient id="flameInnerGrad" cx="50%" cy="65%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="25%" stopColor="#FEF08A" />
        <stop offset="60%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#DC2626" />
      </radialGradient>
      <radialGradient id="torchHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="108" rx="24" ry="4.5" fill="#1E293B" opacity="0.16" />

    {/* Golden Ambient Halo */}
    <circle cx="60" cy="40" r="34" fill="url(#torchHalo)" className="anim-flame-glow" />

    {/* Dancing Dynamic Olympic Flame (Animated) */}
    <g className="anim-torch-flame">
      {/* Outer Flame Tongue */}
      <path
        d="M60 14 C48 26, 40 40, 47 55 C52 64, 68 64, 73 55 C80 40, 72 26, 60 14 Z"
        fill="url(#flameInnerGrad)"
        filter="drop-shadow(0 0 8px rgba(249,115,22,0.65))"
      />
      {/* Inner Hot Core */}
      <path
        d="M60 27 C53 36, 49 46, 53 54 C56 59, 64 59, 67 54 C71 46, 67 36, 60 27 Z"
        fill="#FEF08A"
        opacity="0.9"
      />
      <circle cx="60" cy="48" r="4" fill="#FFFFFF" />
    </g>

    {/* Olympic Torch Head and Handle */}
    <g>
      {/* Flared Gold Bowl Cup */}
      <path d="M42 56 L78 56 L72 70 L48 70 Z" fill="url(#torchGoldRim)" />
      <line x1="44" y1="59" x2="76" y2="59" stroke="#FEF08A" strokeWidth="1.2" />

      {/* Gold Ring Collar */}
      <rect x="46" y="70" width="28" height="5" rx="1.5" fill="#EAB308" stroke="#CA8A04" strokeWidth="0.8" />

      {/* Sleek Tapered Metallic Shaft */}
      <path d="M49 75 L71 75 L66 104 L54 104 Z" fill="url(#torchHandleGrad)" />
      <line x1="58" y1="76" x2="58" y2="103" stroke="#F1F5F9" strokeWidth="1.5" strokeOpacity="0.8" />

      {/* Grip Ribs */}
      <line x1="51" y1="83" x2="69" y2="83" stroke="#1E293B" strokeWidth="1" />
      <line x1="52" y1="89" x2="68" y2="89" stroke="#1E293B" strokeWidth="1" />
      <line x1="53" y1="95" x2="67" y2="95" stroke="#1E293B" strokeWidth="1" />

      {/* Base Pommel */}
      <rect x="52" y="104" width="16" height="4" rx="2" fill="url(#torchGoldRim)" />
    </g>

    {/* Mini Olympic Accent Rings */}
    <g transform="translate(42, 63) scale(0.42)" opacity="0.95">
      <circle cx="10" cy="8" r="7" stroke="#2563EB" strokeWidth="2.5" fill="none" />
      <circle cx="28" cy="8" r="7" stroke="#1E293B" strokeWidth="2.5" fill="none" />
      <circle cx="46" cy="8" r="7" stroke="#DC2626" strokeWidth="2.5" fill="none" />
      <circle cx="19" cy="15" r="7" stroke="#EAB308" strokeWidth="2.5" fill="none" />
      <circle cx="37" cy="15" r="7" stroke="#16A34A" strokeWidth="2.5" fill="none" />
    </g>
  </svg>
);

/**
 * 3. TECHNOLOGY (Page 2): 3D Quantum Processor Chip & Circuit Pulse
 * Headline: "Quantum Chip Breaks Computing Record"
 */
export const QuantumChipSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chipBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E1B4B" />
        <stop offset="50%" stopColor="#312E81" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="goldPinsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
      <radialGradient id="quantumCoreGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="40%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#4F46E5" />
      </radialGradient>
      <filter id="chipGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="40" ry="6" fill="#1E293B" opacity="0.14" />

    {/* External Gold Contact Pins (Top & Bottom) */}
    {[-28, -20, -12, -4, 4, 12, 20, 28].map((offset, i) => (
      <g key={`pin-tb-${i}`}>
        <rect x={60 + offset - 2} y="18" width="4" height="12" fill="url(#goldPinsGrad)" rx="1" />
        <rect x={60 + offset - 2} y="90" width="4" height="12" fill="url(#goldPinsGrad)" rx="1" />
      </g>
    ))}

    {/* External Gold Contact Pins (Left & Right) */}
    {[-28, -20, -12, -4, 4, 12, 20, 28].map((offset, i) => (
      <g key={`pin-lr-${i}`}>
        <rect x="18" y={60 + offset - 2} width="12" height="4" fill="url(#goldPinsGrad)" rx="1" />
        <rect x="90" y={60 + offset - 2} width="12" height="4" fill="url(#goldPinsGrad)" rx="1" />
      </g>
    ))}

    {/* Ceramic Chip Body */}
    <rect
      x="26"
      y="26"
      width="68"
      height="68"
      rx="10"
      fill="url(#chipBodyGrad)"
      stroke="#6366F1"
      strokeWidth="2"
      filter="drop-shadow(0 6px 12px rgba(15,23,42,0.4))"
    />

    {/* Precision Micro Circuit Tracks (Animated Pulses) */}
    <g className="anim-chip-circuit" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.8" fill="none">
      <path d="M35 35 L48 48 L48 72 L35 85" />
      <path d="M85 35 L72 48 L72 72 L85 85" />
      <path d="M48 60 L72 60" />
      <circle cx="35" cy="35" r="2" fill="#38BDF8" />
      <circle cx="35" cy="85" r="2" fill="#38BDF8" />
      <circle cx="85" cy="35" r="2" fill="#38BDF8" />
      <circle cx="85" cy="85" r="2" fill="#38BDF8" />
    </g>

    {/* Central Quantum Qubit Core (Pulsing Light Hologram) */}
    <g className="anim-chip-pulse" transform-origin="60 60">
      <circle cx="60" cy="60" r="16" fill="url(#quantumCoreGrad)" filter="url(#chipGlow)" />
      <circle cx="60" cy="60" r="11" fill="#0F172A" />
      {/* Holographic Quantum Qubit Hexagon */}
      <polygon points="60,53 66,57 66,63 60,67 54,63 54,57" fill="#67E8F9" />
      <circle cx="60" cy="60" r="2.5" fill="#FFFFFF" />
    </g>
  </svg>
);

/**
 * 4. WEATHER (Page 2): Coastal Ocean Waves & Refreshing Wind Swirls
 * Headline: "Cool Coastal Breeze Lowers Heatwave"
 */
export const OceanBreezeSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="waveDeepGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="waveCrestGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="windRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.2" />
      </linearGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="42" ry="6" fill="#0C4A6E" opacity="0.12" />

    {/* Rolling Sea Waves (Animated Wave Motion) */}
    <g className="anim-wave-sway">
      {/* Back Layer Deep Ocean Wave */}
      <path
        d="M16 88 C32 80, 48 94, 66 84 C82 75, 96 86, 106 82 L106 98 L16 98 Z"
        fill="url(#waveDeepGrad)"
        opacity="0.85"
      />

      {/* Front Dynamic Surging Wave Crest */}
      <path
        d="M14 94 C28 82, 42 76, 56 82 C68 87, 78 74, 94 77 C102 78, 106 84, 106 98 L14 98 Z"
        fill="url(#waveCrestGrad)"
        filter="drop-shadow(0 4px 8px rgba(2,132,199,0.3))"
      />

      {/* Foam Sea Spray Droplets */}
      <path
        d="M56 80 C60 77, 65 78, 68 82 M76 73 C80 70, 84 72, 86 76"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="88" cy="68" r="2" fill="#E0F2FE" />
      <circle cx="94" cy="72" r="1.5" fill="#E0F2FE" />
    </g>

    {/* Refreshing Cool Coastal Breeze Wind Swirls (Animated Stream) */}
    <g className="anim-wind-gust" stroke="url(#windRibbonGrad)" strokeLinecap="round" fill="none">
      {/* Top Breeze Stream */}
      <path d="M18 36 C42 36, 68 28, 82 34 C94 40, 90 52, 78 50 C70 48, 70 38, 79 38" strokeWidth="3" />
      
      {/* Middle Swift Stream */}
      <path d="M24 50 C48 50, 68 44, 88 47 C98 50, 102 56, 96 60" strokeWidth="2.5" />

      {/* Lower Breeze Curl */}
      <path d="M20 64 C38 64, 52 58, 64 62 C72 66, 70 73, 62 72" strokeWidth="2.2" />
    </g>

    {/* Sun Peeking Softly */}
    <circle cx="34" cy="30" r="11" fill="#FDE047" opacity="0.8" />
  </svg>
);

/**
 * 5. NATIONAL NEWS (Page 2): Green Eco Expressway Highway & Solar Canopy
 * Headline: "Green Expressway Network Dedicated"
 */
export const ExpresswaySVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="roadSurfGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#1E293B" />
      </linearGradient>
      <linearGradient id="greenVergeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#16A34A" />
        <stop offset="100%" stopColor="#22C55E" />
      </linearGradient>
      <linearGradient id="solarCanopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>

    {/* Horizon Sky & Sun */}
    <rect x="14" y="20" width="92" height="38" rx="6" fill="#E0F2FE" />
    <circle cx="60" cy="40" r="12" fill="#FACC15" />

    {/* Green Roadside Embankments */}
    <polygon points="14,98 106,98 68,48 52,48" fill="#15803D" />
    <polygon points="14,98 42,98 56,48 52,48" fill="url(#greenVergeGrad)" />
    <polygon points="106,98 78,98 64,48 68,48" fill="url(#greenVergeGrad)" />

    {/* Asphalt Expressway (Vanishing Perspective) */}
    <polygon points="40,98 80,98 64,48 56,48" fill="url(#roadSurfGrad)" />

    {/* Road Shoulders / Curbs */}
    <line x1="40" y1="98" x2="56" y2="48" stroke="#FFFFFF" strokeWidth="2" />
    <line x1="80" y1="98" x2="64" y2="48" stroke="#FFFFFF" strokeWidth="2" />

    {/* Fast Moving Highway Center Dashed Lines (Animated) */}
    <g className="anim-road-dash">
      <line x1="60" y1="52" x2="60" y2="58" stroke="#FACC15" strokeWidth="1.5" />
      <line x1="60" y1="64" x2="60" y2="73" stroke="#FACC15" strokeWidth="2.2" />
      <line x1="60" y1="81" x2="60" y2="95" stroke="#FACC15" strokeWidth="3.2" />
    </g>

    {/* Overhead High-Tech Solar Canopy Arch */}
    <path d="M30 62 Q60 44 90 62" stroke="#334155" strokeWidth="3" fill="none" />
    <rect x="36" y="47" width="48" height="6" rx="2" fill="url(#solarCanopyGrad)" stroke="#60A5FA" strokeWidth="0.8" />
    <line x1="32" y1="62" x2="32" y2="82" stroke="#475569" strokeWidth="2.5" />
    <line x1="88" y1="62" x2="88" y2="82" stroke="#475569" strokeWidth="2.5" />

    {/* Green Roadside Trees */}
    <circle cx="28" cy="74" r="8" fill="#16A34A" />
    <circle cx="24" cy="84" r="10" fill="#15803D" />
    <circle cx="92" cy="74" r="8" fill="#16A34A" />
    <circle cx="96" cy="84" r="10" fill="#15803D" />
  </svg>
);

/**
 * 6. EDUCATION (Page 2): Laboratory Microscope & Glowing DNA Helix
 * Headline: "STEM Research Grants Doubled for 2026"
 */
export const MicroscopeDNASVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="scopeMetalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="50%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <linearGradient id="dnaNodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="dnaNodeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F472B6" />
        <stop offset="100%" stopColor="#DB2777" />
      </linearGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="38" ry="6" fill="#1E293B" opacity="0.14" />

    {/* 3D Scientific Microscope (Left) */}
    <g>
      {/* Heavy Horseshoe Base */}
      <path d="M22 96 C22 90, 48 90, 48 96 L48 102 L22 102 Z" fill="url(#scopeMetalGrad)" />
      
      {/* Vertical Curved Arm */}
      <path d="M38 92 C46 80, 48 64, 40 50" stroke="#334155" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M38 92 C46 80, 48 64, 40 50" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Stage Platform */}
      <rect x="22" y="74" width="26" height="5" rx="1.5" fill="#1E293B" />
      <line x1="26" y1="74" x2="38" y2="74" stroke="#38BDF8" strokeWidth="2" />

      {/* Angled Eyepiece Tube */}
      <g transform="rotate(-25 34 38)">
        <rect x="29" y="18" width="10" height="28" rx="2" fill="url(#scopeMetalGrad)" />
        {/* Objective Lens */}
        <polygon points="30,46 38,46 36,54 32,54" fill="#0F172A" />
        <line x1="34" y1="55" x2="34" y2="73" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.8" />
      </g>
    </g>

    {/* Glowing Twisting DNA Double Helix (Right - Animated) */}
    <g className="anim-dna-spin" transform="translate(74, 24)">
      {/* DNA Strands & Connecting Rungs */}
      {[0, 14, 28, 42, 56, 70].map((y, i) => {
        const isAlternate = i % 2 === 0;
        const leftX = isAlternate ? 4 : 26;
        const rightX = isAlternate ? 26 : 4;
        return (
          <g key={`dna-rung-${i}`}>
            <line x1={leftX} y1={y} x2={rightX} y2={y} stroke="#CBD5E1" strokeWidth="1.8" />
            <circle cx={leftX} cy={y} r="4" fill="url(#dnaNodeGrad1)" filter="drop-shadow(0 0 3px rgba(99,102,241,0.5))" />
            <circle cx={rightX} cy={y} r="4" fill="url(#dnaNodeGrad2)" filter="drop-shadow(0 0 3px rgba(219,39,119,0.5))" />
          </g>
        );
      })}
    </g>
  </svg>
);

/**
 * 7. HEALTH (Page 2): 3D Medical Capsule Pill & Wellness Shield
 * Headline: "Nationwide Preventive Health Drive Starts"
 */
export const MedicineCapsuleSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ECFDF5" />
        <stop offset="100%" stopColor="#A7F3D0" />
      </linearGradient>
      <linearGradient id="capsuleRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F87171" />
        <stop offset="50%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
      <linearGradient id="capsuleWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <radialGradient id="healSparkleGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#34D399" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ambient Glow */}
    <circle cx="60" cy="58" r="42" fill="url(#healSparkleGlow)" />

    {/* Protective Medical Shield Base */}
    <path
      d="M60 22 C78 22, 92 28, 92 46 C92 72, 74 88, 60 98 C46 88, 28 72, 28 46 C28 28, 42 22, 60 22 Z"
      fill="url(#shieldBgGrad)"
      stroke="#10B981"
      strokeWidth="2.5"
      filter="drop-shadow(0 6px 14px rgba(16,185,129,0.2))"
    />

    {/* Embossed Medical Plus Cross on Shield */}
    <g fill="#059669" opacity="0.25">
      <rect x="54" y="38" width="12" height="34" rx="2" />
      <rect x="43" y="49" width="34" height="12" rx="2" />
    </g>

    {/* Floating 3D Medicine Capsule Pill (Animated) */}
    <g className="anim-capsule-float" transform="rotate(-30 60 58)">
      {/* Top Red Half */}
      <path
        d="M48 38 C48 29, 72 29, 72 38 L72 58 L48 58 Z"
        fill="url(#capsuleRedGrad)"
        filter="drop-shadow(0 4px 8px rgba(185,28,28,0.3))"
      />
      {/* Bottom White Half */}
      <path
        d="M48 58 L72 58 L72 78 C72 87, 48 87, 48 78 Z"
        fill="url(#capsuleWhiteGrad)"
        filter="drop-shadow(0 4px 8px rgba(30,41,59,0.25))"
      />
      {/* Center Golden Band */}
      <rect x="48" y="56.5" width="24" height="3" fill="#FACC15" />

      {/* Glossy Specular Highlight Reflection */}
      <path d="M52 35 C52 33, 56 33, 56 35 L56 75 C56 77, 52 77, 52 75 Z" fill="#FFFFFF" opacity="0.65" />
    </g>

    {/* Sparkle Twinkles */}
    <circle cx="82" cy="36" r="2.5" fill="#10B981" className="anim-edu-star" />
    <circle cx="36" cy="74" r="2" fill="#34D399" className="anim-edu-star" />
  </svg>
);

/**
 * 8. WORLD NEWS (Page 2): Clean Energy Earth Globe & 3D Wind Turbine
 * Headline: "Global Clean Energy Treaty Ratified"
 */
export const GreenEnergySVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="greenGlobeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0F766E" />
      </linearGradient>
      <linearGradient id="turbineTowerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <radialGradient id="solarGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FACC15" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="40" ry="6" fill="#1E293B" opacity="0.14" />

    {/* Renewable Green / Blue Globe in Background */}
    <g>
      <circle cx="50" cy="62" r="34" fill="url(#greenGlobeGrad)" filter="drop-shadow(0 4px 10px rgba(2,132,199,0.3))" />
      {/* Continental Green Landmasses */}
      <path
        d="M34 46 C40 42, 52 46, 56 52 C52 60, 42 62, 36 56 Z M56 64 C64 62, 70 70, 66 76 C58 82, 50 78, 52 70 Z M30 68 C36 66, 40 74, 34 80 Z"
        fill="#22C55E"
        opacity="0.9"
      />
      {/* Atmosphere Glow Ring */}
      <circle cx="50" cy="62" r="34" fill="none" stroke="#67E8F9" strokeWidth="1.5" opacity="0.7" />
    </g>

    {/* 3D Modern Wind Turbine (Foreground - Animated Rotating Blades) */}
    <g transform="translate(30, 0)">
      {/* Tapered Tower Mast */}
      <polygon points="53,52 57,52 60,102 50,102" fill="url(#turbineTowerGrad)" filter="drop-shadow(0 4px 6px rgba(15,23,42,0.2))" />

      {/* Rotating 3-Blade Rotor Hub (Animated) */}
      <g className="anim-turbine-spin" transform-origin="55 52">
        <circle cx="55" cy="52" r="4.5" fill="#334155" stroke="#FFFFFF" strokeWidth="1" />
        
        {/* Blade 1 (Up) */}
        <path d="M55 52 C53 40, 52 24, 55 18 C58 24, 57 40, 55 52 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.8" />
        {/* Blade 2 (Bottom Right) */}
        <path d="M55 52 C65 58, 80 68, 84 72 C78 74, 65 64, 55 52 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.8" />
        {/* Blade 3 (Bottom Left) */}
        <path d="M55 52 C45 58, 30 68, 26 72 C32 74, 45 64, 55 52 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.8" />
      </g>
    </g>

    {/* Solar Array in Corner */}
    <g transform="translate(16, 86)">
      <polygon points="0,10 18,6 26,16 6,20" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="0.8" />
      <line x1="9" y1="8" x2="16" y2="18" stroke="#93C5FD" strokeWidth="0.6" />
    </g>
  </svg>
);

// --- Page3Icons.jsx ---
/**
 * ============================================================================
 * PAGE 3 ICONS (Pure 3D-styled vector SVG artwork with bespoke CSS animations)
 * ============================================================================
 */

/**
 * 1. BUSINESS (Page 3): Venture Startup Rocket Surging from Gold Coin Stacks
 * Headline: "Tech Startups Secure Record $4B Funding"
 */
export const StartupRocketSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rocketHullGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <linearGradient id="rocketFinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
      <radialGradient id="rocketExhaustGrad" cx="50%" cy="0%" r="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#FEF08A" />
        <stop offset="70%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="coinGradP3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="60%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="38" ry="6" fill="#1E293B" opacity="0.14" />

    {/* Gold Coin Stacks at Base */}
    <g transform="translate(18, 76)">
      {/* Coin Stack 1 */}
      {[14, 8, 2].map((y, i) => (
        <g key={`coin1-${i}`}>
          <ellipse cx="20" cy={y} rx="14" ry="4.5" fill="url(#coinGradP3)" stroke="#CA8A04" strokeWidth="0.8" />
          <path d={`M6 ${y} L6 ${y + 4} A14 4.5 0 0 0 34 ${y + 4} L34 ${y} Z`} fill="#EAB308" />
        </g>
      ))}
      {/* Coin Stack 2 */}
      {[16, 10, 4].map((y, i) => (
        <g key={`coin2-${i}`}>
          <ellipse cx="64" cy={y} rx="14" ry="4.5" fill="url(#coinGradP3)" stroke="#CA8A04" strokeWidth="0.8" />
          <path d={`M50 ${y} L50 ${y + 4} A14 4.5 0 0 0 78 ${y + 4} L78 ${y} Z`} fill="#EAB308" />
        </g>
      ))}
    </g>

    {/* Rocket Propulsion Fire & Thrust (Animated) */}
    <g className="anim-startup-thrust" transform="translate(60, 68)">
      <polygon points="-8,0 8,0 0,32" fill="url(#rocketExhaustGrad)" filter="drop-shadow(0 0 8px rgba(249,115,22,0.8))" />
      <polygon points="-4,0 4,0 0,18" fill="#FFFFFF" />
    </g>

    {/* 3D Aerodynamic Startup Rocket (Angled Ascent) */}
    <g className="anim-rocket-glide">
      {/* Left & Right Red Fins */}
      <polygon points="46,58 34,68 46,64" fill="url(#rocketFinGrad)" />
      <polygon points="74,58 86,68 74,64" fill="url(#rocketFinGrad)" />

      {/* Main Bullet Fuselage */}
      <path
        d="M60 16 C50 30, 48 52, 48 64 L72 64 C72 52, 70 30, 60 16 Z"
        fill="url(#rocketHullGrad)"
        filter="drop-shadow(0 4px 10px rgba(15,23,42,0.3))"
      />

      {/* Nose Cone Tip */}
      <path d="M60 16 C55 24, 52 30, 52 32 L68 32 C68 30, 65 24, 60 16 Z" fill="url(#rocketFinGrad)" />

      {/* Blue Circular Porthole Window */}
      <circle cx="60" cy="42" r="6" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.8" />
      <circle cx="58" cy="40" r="1.5" fill="#FFFFFF" />

      {/* Center Thruster Nozzle */}
      <polygon points="52,64 68,64 66,69 54,69" fill="#334155" />
    </g>

    {/* Sparkles of Success */}
    <circle cx="32" cy="30" r="2.5" fill="#FACC15" className="anim-edu-star" />
    <circle cx="88" cy="24" r="2" fill="#FACC15" className="anim-edu-star" />
  </svg>
);

/**
 * 2. SPORTS (Page 2): 3D Badminton Shuttlecock & Racket Smash
 * Headline: "National Badminton Finals Set for Weekend"
 */
export const BadmintonSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shuttleCorkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F87171" />
        <stop offset="50%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#991B1B" />
      </linearGradient>
      <linearGradient id="featherGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="80%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
      <linearGradient id="racketRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="36" ry="5.5" fill="#1E293B" opacity="0.12" />

    {/* Badminton Racket in Background */}
    <g transform="rotate(-35 60 60)">
      {/* Racket Oval Head Frame */}
      <ellipse cx="60" cy="40" rx="28" ry="34" fill="#EFF6FF" stroke="url(#racketRimGrad)" strokeWidth="4" />
      {/* Cross String Weave */}
      <g stroke="#93C5FD" strokeWidth="0.8" opacity="0.75">
        <line x1="42" y1="20" x2="42" y2="60" />
        <line x1="51" y1="12" x2="51" y2="68" />
        <line x1="60" y1="8" x2="60" y2="72" />
        <line x1="69" y1="12" x2="69" y2="68" />
        <line x1="78" y1="20" x2="78" y2="60" />
        <line x1="36" y1="30" x2="84" y2="30" />
        <line x1="34" y1="40" x2="86" y2="40" />
        <line x1="36" y1="50" x2="84" y2="50" />
      </g>
      {/* Racket Shaft & Grip */}
      <line x1="60" y1="74" x2="60" y2="114" stroke="#1E40AF" strokeWidth="3.5" />
      <rect x="57" y="98" width="6" height="16" rx="2" fill="#1E293B" />
    </g>

    {/* Dynamic 3D Feathered Shuttlecock (Animated Smash Motion) */}
    <g className="anim-shuttle-smash" transform="translate(24, 18)">
      {/* White Aerodynamic Feathers */}
      <polygon points="26,20 46,20 42,50 30,50" fill="url(#featherGrad)" stroke="#CBD5E1" strokeWidth="0.8" />
      <polygon points="18,24 28,21 32,50 24,48" fill="url(#featherGrad)" stroke="#CBD5E1" strokeWidth="0.8" />
      <polygon points="44,21 54,24 48,48 40,50" fill="url(#featherGrad)" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Feather Binding Ribbons */}
      <path d="M22 34 Q36 31 50 34" stroke="#3B82F6" strokeWidth="1.6" fill="none" />
      <path d="M26 44 Q36 42 46 44" stroke="#3B82F6" strokeWidth="1.6" fill="none" />

      {/* Cork Head (Red/White Leather) */}
      <ellipse cx="36" cy="56" rx="9" ry="8" fill="url(#shuttleCorkGrad)" filter="drop-shadow(0 3px 6px rgba(220,38,38,0.4))" />
      <ellipse cx="36" cy="52" rx="9" ry="3" fill="#FFFFFF" />
    </g>

    {/* Speed Swoosh Trail */}
    <path d="M22 84 C38 78, 54 82, 72 74" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
  </svg>
);

/**
 * 3. TECHNOLOGY (Page 3): 6G Orbital Satellite & Spherical Radar Waves
 * Headline: "Next-Gen 6G Satellite Grid Tested"
 */
export const Satellite6GSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="satBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F1F5F9" />
        <stop offset="60%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
      <linearGradient id="solarWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <radialGradient id="radarPulseGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Deep Space Atmosphere */}
    <circle cx="60" cy="60" r="50" fill="#090D16" opacity="0.1" />

    {/* Expanding High-Speed 6G Radar Broadcast Waves (Animated) */}
    <g className="anim-satellite-radar" stroke="#38BDF8" fill="none" strokeLinecap="round">
      <circle cx="60" cy="74" r="14" strokeWidth="1.5" strokeOpacity="0.8" />
      <circle cx="60" cy="74" r="24" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="60" cy="74" r="34" strokeWidth="0.8" strokeOpacity="0.25" />
    </g>

    {/* Satellite Main Body & Solar Panels */}
    <g transform="translate(0, -6)">
      {/* Left Blue Solar Wing */}
      <g>
        <rect x="12" y="44" width="30" height="18" rx="2" fill="url(#solarWingGrad)" stroke="#60A5FA" strokeWidth="1" />
        <line x1="22" y1="44" x2="22" y2="62" stroke="#93C5FD" strokeWidth="0.8" />
        <line x1="32" y1="44" x2="32" y2="62" stroke="#93C5FD" strokeWidth="0.8" />
        <line x1="12" y1="53" x2="42" y2="53" stroke="#93C5FD" strokeWidth="0.8" />
        <line x1="42" y1="53" x2="48" y2="53" stroke="#94A3B8" strokeWidth="2.5" />
      </g>

      {/* Right Blue Solar Wing */}
      <g>
        <rect x="78" y="44" width="30" height="18" rx="2" fill="url(#solarWingGrad)" stroke="#60A5FA" strokeWidth="1" />
        <line x1="88" y1="44" x2="88" y2="62" stroke="#93C5FD" strokeWidth="0.8" />
        <line x1="98" y1="44" x2="98" y2="62" stroke="#93C5FD" strokeWidth="0.8" />
        <line x1="78" y1="53" x2="108" y2="53" stroke="#93C5FD" strokeWidth="0.8" />
        <line x1="72" y1="53" x2="78" y2="53" stroke="#94A3B8" strokeWidth="2.5" />
      </g>

      {/* Main Bus Chassis (Center Box) */}
      <rect
        x="48"
        y="38"
        width="24"
        height="30"
        rx="4"
        fill="url(#satBodyGrad)"
        stroke="#E2E8F0"
        strokeWidth="1.5"
        filter="drop-shadow(0 6px 12px rgba(15,23,42,0.35))"
      />
      {/* Gold Foil Heat Shield Plate */}
      <rect x="52" y="44" width="16" height="12" rx="1.5" fill="#EAB308" stroke="#CA8A04" strokeWidth="0.8" />
      
      {/* 6G Parabolic High-Gain Dish Antenna */}
      <path d="M50 72 Q60 84 70 72" stroke="#38BDF8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <line x1="60" y1="68" x2="60" y2="76" stroke="#94A3B8" strokeWidth="2" />
      <circle cx="60" cy="78" r="2" fill="#38BDF8" />
    </g>

    {/* Digital 6G Badge */}
    <g transform="translate(48, 20)">
      <rect x="0" y="0" width="24" height="10" rx="3" fill="#4F46E5" />
      <text x="12" y="7.5" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">
        6G
      </text>
    </g>
  </svg>
);

/**
 * 4. WEATHER (Page 3): Storm Cloud with 3D Electric Lightning Bolt
 * Headline: "Severe Thunderstorm Alert Issued"
 */
export const ThunderstormSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="stormCloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#64748B" />
        <stop offset="50%" stopColor="#475569" />
        <stop offset="100%" stopColor="#1E293B" />
      </linearGradient>
      <linearGradient id="boltGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
      <radialGradient id="lightningGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FACC15" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="38" ry="6" fill="#1E293B" opacity="0.14" />

    {/* Heavy Dark Thunderstorm Cloud */}
    <g filter="drop-shadow(0 6px 14px rgba(30,41,59,0.35))">
      <path
        d="M32 64 C22 64, 16 54, 22 44 C26 36, 36 34, 42 38 C46 26, 62 24, 72 32 C80 26, 94 30, 96 42 C104 44, 106 56, 98 64 Z"
        fill="url(#stormCloudGrad)"
      />
      {/* Cloud highlights */}
      <path
        d="M44 38 C48 30, 60 28, 68 34 M76 34 C84 32, 92 36, 94 44"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </g>

    {/* Diagonal Heavy Rain Streaks */}
    <g stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" opacity="0.7">
      <line x1="28" y1="72" x2="22" y2="86" />
      <line x1="42" y1="74" x2="36" y2="88" />
      <line x1="78" y1="72" x2="72" y2="86" />
      <line x1="92" y1="74" x2="86" y2="88" />
    </g>

    {/* 3D Glowing Electric Lightning Bolt (Animated Strobe Flash) */}
    <g className="anim-thunder-flash">
      {/* Ambient Flash Glow */}
      <circle cx="58" cy="74" r="22" fill="url(#lightningGlow)" />
      {/* Sharp Lightning Bolt */}
      <polygon
        points="64,44 48,68 58,68 52,96 76,64 64,64"
        fill="url(#boltGoldGrad)"
        stroke="#CA8A04"
        strokeWidth="1"
        filter="drop-shadow(0 0 10px rgba(250,204,21,0.9))"
      />
    </g>
  </svg>
);

/**
 * 5. NATIONAL NEWS (Page 3): Aerodynamic Bullet Train on High-Speed Viaduct
 * Headline: "High-Speed Bullet Train Passes Trial"
 */
export const BulletTrainSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="trainNoseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
      <linearGradient id="viaductGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#1E293B" />
      </linearGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="42" ry="6" fill="#1E293B" opacity="0.14" />

    {/* Elevated Concrete Viaduct & Tracks */}
    <g>
      <rect x="14" y="82" width="92" height="10" rx="2" fill="url(#viaductGrad)" />
      {/* Support Pillars */}
      <rect x="28" y="92" width="12" height="14" fill="#334155" />
      <rect x="80" y="92" width="12" height="14" fill="#334155" />
      {/* Steel Rail Line */}
      <line x1="14" y1="82" x2="106" y2="82" stroke="#94A3B8" strokeWidth="2" />
    </g>

    {/* Rushing Speed Lines Underneath (Animated) */}
    <g className="anim-train-speed" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" opacity="0.8">
      <line x1="18" y1="78" x2="38" y2="78" />
      <line x1="46" y1="78" x2="72" y2="78" />
      <line x1="80" y1="78" x2="102" y2="78" />
    </g>

    {/* Aerodynamic High-Speed Bullet Train Coach */}
    <g filter="drop-shadow(0 6px 12px rgba(15,23,42,0.3))">
      {/* Sleek Train Body */}
      <path
        d="M20 78 L78 78 C94 78, 106 68, 102 54 C98 44, 84 44, 70 44 L20 44 Z"
        fill="url(#trainNoseGrad)"
      />

      {/* Vande Bharat Saffron & Blue Racing Stripes */}
      <path d="M20 54 L78 54 C90 54, 98 58, 98 62 L20 62 Z" fill="#2563EB" />
      <path d="M20 62 L78 62 C88 62, 94 65, 94 68 L20 68 Z" fill="#F97316" />

      {/* Aerodynamic Cockpit Windshield */}
      <path d="M74 46 L90 52 L84 56 L72 56 Z" fill="#0F172A" stroke="#38BDF8" strokeWidth="0.8" />

      {/* Passenger Windows */}
      {[24, 34, 44, 54, 64].map((x) => (
        <rect key={x} x={x} y="48" width="7" height="4.5" rx="1" fill="#0F172A" />
      ))}

      {/* Headlight Beam */}
      <polygon points="98,62 114,56 114,68" fill="#FDE047" opacity="0.4" />
      <circle cx="98" cy="62" r="2.5" fill="#FFFFFF" />
    </g>
  </svg>
);

/**
 * 6. EDUCATION (Page 3): Smart Tablet, Floating Code Tags & Cloud Learning
 * Headline: "Digital Literacy Hubs in 500 Districts"
 */
export const DigitalHubSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tabletBezelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="tabletScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E1B4B" />
        <stop offset="100%" stopColor="#312E81" />
      </linearGradient>
      <linearGradient id="codeTagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>

    {/* Ground Shadow */}
    <ellipse cx="60" cy="106" rx="38" ry="6" fill="#1E293B" opacity="0.14" />

    {/* Modern Interactive Tablet Device */}
    <g filter="drop-shadow(0 6px 14px rgba(15,23,42,0.3))">
      {/* Tablet Outer Rim */}
      <rect x="22" y="24" width="76" height="66" rx="8" fill="url(#tabletBezelGrad)" stroke="#64748B" strokeWidth="1.2" />
      {/* Front Camera */}
      <circle cx="60" cy="28" r="1.5" fill="#64748B" />

      {/* Tablet Display Screen */}
      <rect x="27" y="32" width="66" height="50" rx="4" fill="url(#tabletScreenGrad)" />

      {/* Screen Interface: Code Lines */}
      <g stroke="#818CF8" strokeWidth="2" strokeLinecap="round" opacity="0.8">
        <line x1="33" y1="40" x2="52" y2="40" />
        <line x1="33" y1="46" x2="68" y2="46" stroke="#A78BFA" />
        <line x1="38" y1="52" x2="60" y2="52" stroke="#34D399" />
        <line x1="38" y1="58" x2="50" y2="58" stroke="#F472B6" />
        <line x1="33" y1="64" x2="44" y2="64" stroke="#FDE047" />
      </g>

      {/* Tablet Kickstand Base */}
      <polygon points="40,90 80,90 74,102 46,102" fill="#475569" />
    </g>

    {/* Floating Animated Coding Badge `< / >` */}
    <g className="anim-code-float" transform="translate(64, 16)">
      <rect x="0" y="0" width="38" height="20" rx="5" fill="url(#codeTagGrad)" stroke="#C4B5FD" strokeWidth="1" filter="drop-shadow(0 4px 8px rgba(109,40,217,0.4))" />
      <text x="19" y="14" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FFFFFF" fontFamily="monospace">
        &lt;/&gt;
      </text>
    </g>

    {/* Sparkle Nodes */}
    <circle cx="20" cy="38" r="2.5" fill="#8B5CF6" className="anim-edu-star" />
    <circle cx="100" cy="68" r="2" fill="#38BDF8" className="anim-edu-star" />
  </svg>
);

/**
 * 7. HEALTH (Page 3): 3D Holographic AI Heart & Neural Scan Grid
 * Headline: "AI Diagnostic Centers Open in 50 Districts"
 */
export const AIHeartScanSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heartRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FB7185" />
        <stop offset="40%" stopColor="#F43F5E" />
        <stop offset="100%" stopColor="#BE123C" />
      </linearGradient>
      <radialGradient id="aiHeartHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="neuralBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
        <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Ambient Glow */}
    <circle cx="60" cy="56" r="42" fill="url(#aiHeartHalo)" />

    {/* Circular Diagnostic Monitor Frame */}
    <circle cx="60" cy="56" r="38" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.5" />
    <circle cx="60" cy="56" r="44" stroke="#60A5FA" strokeWidth="0.8" opacity="0.3" />

    {/* 3D Anatomical Style Heart (Realistic Dual-Phase Heartbeat Animation) */}
    <g className="anim-ai-heart" transform-origin="60 56">
      <path
        d="M60 78 C40 64, 28 50, 32 38 C35 28, 48 26, 60 38 C72 26, 85 28, 88 38 C92 50, 80 64, 60 78 Z"
        fill="url(#heartRedGrad)"
        filter="drop-shadow(0 6px 14px rgba(244,63,94,0.45))"
      />
      {/* Heart glossy specular arc */}
      <path d="M40 36 C42 32, 48 32, 52 36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
    </g>

    {/* AI Laser Scan Horizontal Line (Moving Diagnostics Beam) */}
    <g className="anim-laser-scan">
      <line x1="24" y1="56" x2="96" y2="56" stroke="url(#neuralBeamGrad)" strokeWidth="2.5" />
      <circle cx="60" cy="56" r="3" fill="#38BDF8" />
    </g>

    {/* AI Neural Circuit Synapses */}
    <g stroke="#38BDF8" strokeWidth="1" opacity="0.75" fill="none">
      <path d="M26 36 L36 44 L44 44" />
      <circle cx="26" cy="36" r="2" fill="#38BDF8" />
      <path d="M94 72 L84 66 L78 66" />
      <circle cx="94" cy="72" r="2" fill="#38BDF8" />
    </g>
  </svg>
);

/**
 * 8. WORLD NEWS (Page 3): Deep Space Capsule Shuttle & Planetary Orbit
 * Headline: "International Space Station Mission Launched"
 */
export const SpaceMissionSVG = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="spacePlanetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="60%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="shuttleBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#64748B" />
      </linearGradient>
      <radialGradient id="plasmaIonGrad" cx="0%" cy="50%" r="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="70%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Curved Planetary Horizon in Deep Space */}
    <path d="M12 104 C40 84, 80 84, 108 104 L108 114 L12 114 Z" fill="#0284C7" opacity="0.3" />
    <path d="M14 104 C42 86, 78 86, 106 104" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.8" fill="none" />

    {/* Twinkling Distant Stars in Galaxy */}
    <circle cx="26" cy="24" r="1.5" fill="#FFFFFF" className="anim-edu-star" />
    <circle cx="86" cy="18" r="1.8" fill="#FACC15" className="anim-edu-star" />
    <circle cx="102" cy="48" r="1.2" fill="#FFFFFF" className="anim-edu-star" />
    <circle cx="20" cy="58" r="1.2" fill="#38BDF8" className="anim-edu-star" />

    {/* Orbit Elliptical Flight Path */}
    <ellipse cx="60" cy="56" rx="46" ry="24" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" transform="rotate(-18 60 56)" />

    {/* Next-Gen Deep Space Shuttle Craft (Animated Orbital Roll) */}
    <g className="anim-space-orbit" transform="translate(42, 32)">
      {/* Blue Ion Plasma Engine Exhaust Glow */}
      <polygon points="4,24 -12,20 -12,28" fill="url(#plasmaIonGrad)" filter="drop-shadow(0 0 6px #38BDF8)" />
      
      {/* Delta Wing Aerodynamic Fuselage */}
      <polygon points="36,24 8,8 14,24 8,40" fill="url(#shuttleBodyGrad)" filter="drop-shadow(0 4px 10px rgba(15,23,42,0.4))" />
      
      {/* Cockpit Canopy (Black Tint) */}
      <polygon points="28,24 20,20 20,28" fill="#0F172A" stroke="#38BDF8" strokeWidth="0.8" />

      {/* Vertical Stabilizer Fin */}
      <polygon points="14,24 6,24 10,14" fill="#3B82F6" />
    </g>
  </svg>
);

// ============================================================================
// 2. DATA IMPORT (IMPORTED AT TOP)
// ============================================================================

/**
 * Maps each card's unique iconKey (and category fallback) to its dedicated 3D animated SVG component.
 */
const illustrationMap = {
  // Page 1
  business_p1: BusinessSVG,
  sports_p1: SportsSVG,
  technology_p1: TechnologySVG,
  weather_p1: WeatherSVG,
  national_p1: NationalSVG,
  education_p1: EducationSVG,
  health_p1: HealthSVG,
  world_p1: WorldSVG,

  // Page 2
  business_p2: BankVaultSVG,
  sports_p2: OlympicTorchSVG,
  technology_p2: QuantumChipSVG,
  weather_p2: OceanBreezeSVG,
  national_p2: ExpresswaySVG,
  education_p2: MicroscopeDNASVG,
  health_p2: MedicineCapsuleSVG,
  world_p2: GreenEnergySVG,

  // Page 3
  business_p3: StartupRocketSVG,
  sports_p3: BadmintonSVG,
  technology_p3: Satellite6GSVG,
  weather_p3: ThunderstormSVG,
  national_p3: BulletTrainSVG,
  education_p3: DigitalHubSVG,
  health_p3: AIHeartScanSVG,
  world_p3: SpaceMissionSVG,

  // Category ID Fallbacks
  business: BusinessSVG,
  sports: SportsSVG,
  technology: TechnologySVG,
  weather: WeatherSVG,
  national: NationalSVG,
  education: EducationSVG,
  health: HealthSVG,
  world: WorldSVG,
};

// ============================================================================
// 3. BILLBOARD SHADOW COMPONENT
// ============================================================================
export const BillboardShadow = ({
  isLightOn = true,
  lightIntensity = 1.0,
  groundY = 870,
}) => {
  const warmGlowOpacity = isLightOn ? 0.18 * lightIntensity : 0;

  return (
    <g id="billboard-ground-shadow-group" className="pointer-events-none">
      <defs>
        <filter id="shadowSoftBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
        </filter>
        <filter id="shadowMediumBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
        <filter id="shadowTightBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
        <filter id="warmBounceBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="22" />
        </filter>

        <radialGradient id="ambientShadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0a0c10" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#1e2025" stopOpacity="0.25" />
          <stop offset="80%" stopColor="#40434c" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#50535c" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="contactShadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#050608" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#0d0e12" stopOpacity="0.65" />
          <stop offset="70%" stopColor="#16171d" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#202227" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="edgeContactGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#040405" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#0c0d10" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#18191f" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="floorWarmBounceGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb300" stopOpacity="0.8" />
          <stop offset="25%" stopColor="#ffa000" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#ff8f00" stopOpacity="0.2" />
          <stop offset="85%" stopColor="#e65100" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ff6f00" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse
        cx="700"
        cy={groundY + 6}
        rx="460"
        ry="36"
        fill="url(#floorWarmBounceGrad)"
        filter="url(#warmBounceBlur)"
        style={{ opacity: warmGlowOpacity }}
        className="light-transition"
      />
      <ellipse
        cx="700"
        cy={groundY}
        rx="220"
        ry="22"
        fill="url(#floorWarmBounceGrad)"
        filter="url(#shadowMediumBlur)"
        style={{ opacity: warmGlowOpacity * 0.9 }}
        className="light-transition"
      />
      <ellipse
        cx="700"
        cy={groundY + 4}
        rx="380"
        ry="26"
        fill="url(#ambientShadowGrad)"
        filter="url(#shadowSoftBlur)"
      />
      <ellipse
        cx="700"
        cy={groundY - 1}
        rx="210"
        ry="15"
        fill="url(#contactShadowGrad)"
        filter="url(#shadowMediumBlur)"
      />
      <rect
        x="564"
        y={groundY - 5}
        width="272"
        height="8"
        rx="4"
        fill="url(#edgeContactGrad)"
        filter="url(#shadowTightBlur)"
      />
      <rect
        x="572"
        y={groundY - 5}
        width="256"
        height="3"
        rx="1.5"
        fill="#020304"
        opacity="0.9"
      />
    </g>
  );
};

// ============================================================================
// 4. BILLBOARD STAND COMPONENT
// ============================================================================
export const BillboardStand = ({ topY = 545, poleHeight = 280 }) => {
  const poleBottomY = topY + poleHeight;
  const collarY = poleBottomY;
  const baseFlangeY = poleBottomY + 18;
  const baseContactY = poleBottomY + 41;
  const boltY = poleBottomY + 29;

  return (
    <g id="billboard-stand-group">
      <defs>
        <linearGradient id="poleFrontGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#121317" />
          <stop offset="6%" stopColor="#2c2f37" />
          <stop offset="25%" stopColor="#202228" />
          <stop offset="65%" stopColor="#181a1f" />
          <stop offset="92%" stopColor="#101115" />
          <stop offset="100%" stopColor="#0a0b0d" />
        </linearGradient>

        <linearGradient id="poleVerticalShade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#08080a" stopOpacity="0.75" />
          <stop offset="12%" stopColor="#14151a" stopOpacity="0.1" />
          <stop offset="85%" stopColor="#14151a" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#08080b" stopOpacity="0.65" />
        </linearGradient>

        <linearGradient id="topFlangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#15161b" />
          <stop offset="20%" stopColor="#2c2f36" />
          <stop offset="70%" stopColor="#1c1d23" />
          <stop offset="100%" stopColor="#0d0e12" />
        </linearGradient>

        <linearGradient id="baseCollarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#16171d" />
          <stop offset="10%" stopColor="#30343e" />
          <stop offset="30%" stopColor="#22252c" />
          <stop offset="80%" stopColor="#181a1f" />
          <stop offset="100%" stopColor="#0d0e11" />
        </linearGradient>

        <linearGradient id="baseFlangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#141519" />
          <stop offset="8%" stopColor="#323640" />
          <stop offset="35%" stopColor="#22242b" />
          <stop offset="75%" stopColor="#17191e" />
          <stop offset="100%" stopColor="#0b0c0f" />
        </linearGradient>

        <linearGradient id="boltWasherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#484d59" />
          <stop offset="50%" stopColor="#252830" />
          <stop offset="100%" stopColor="#101115" />
        </linearGradient>

        <linearGradient id="boltHeadGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#545a68" />
          <stop offset="40%" stopColor="#30343d" />
          <stop offset="80%" stopColor="#1a1c22" />
          <stop offset="100%" stopColor="#0e0f13" />
        </linearGradient>
      </defs>

      {/* Top Mounting Bracket */}
      <g id="pole-top-joint">
        <rect x="618" y={topY - 1} width="164" height="14" rx="2" fill="url(#topFlangeGrad)" />
        <rect x="618" y={topY - 1} width="164" height="4" fill="#060708" opacity="0.8" />
        <line x1="619" y1={topY + 12} x2="781" y2={topY + 12} stroke="#383c46" strokeWidth="1" opacity="0.6" />
        <circle cx="632" cy={topY + 6} r="3" fill="#252730" stroke="#0e0f13" strokeWidth="0.8" />
        <circle cx="768" cy={topY + 6} r="3" fill="#252730" stroke="#0e0f13" strokeWidth="0.8" />
      </g>

      {/* Vertical Column */}
      <g id="vertical-pole">
        <rect x="644" y={topY} width="112" height={poleHeight} fill="url(#poleFrontGrad)" />
        <rect x="644" y={topY} width="112" height={poleHeight} fill="url(#poleVerticalShade)" className="pointer-events-none" />
        <line x1="645" y1={topY} x2="645" y2={poleBottomY} stroke="#414652" strokeWidth="1.2" opacity="0.75" />
        <line x1="651" y1={topY} x2="651" y2={poleBottomY} stroke="#2f323a" strokeWidth="1" opacity="0.4" />
        <line x1="755" y1={topY} x2="755" y2={poleBottomY} stroke="#060708" strokeWidth="1.5" />
        <line x1="644" y1={topY + Math.round(poleHeight * 0.34)} x2="756" y2={topY + Math.round(poleHeight * 0.34)} stroke="#101115" strokeWidth="1" opacity="0.35" />
        <line x1="644" y1={topY + Math.round(poleHeight * 0.68)} x2="756" y2={topY + Math.round(poleHeight * 0.68)} stroke="#101115" strokeWidth="1" opacity="0.35" />
      </g>

      {/* Baseplate Assembly */}
      <g id="mounting-baseplate">
        <rect x="626" y={collarY} width="148" height="18" rx="2" fill="url(#baseCollarGrad)" />
        <line x1="627" y1={collarY + 1} x2="773" y2={collarY + 1} stroke="#474c59" strokeWidth="1.2" />
        <line x1="626" y1={collarY + 18} x2="774" y2={collarY + 18} stroke="#090a0d" strokeWidth="1.5" />
        <line x1="628" y1={collarY + 1} x2="628" y2={collarY + 18} stroke="#363943" strokeWidth="1" />
        <line x1="772" y1={collarY + 1} x2="772" y2={collarY + 18} stroke="#121317" strokeWidth="1" />

        <rect x="576" y={baseFlangeY} width="248" height="23" rx="3" fill="url(#baseFlangeGrad)" />
        <line x1="578" y1={baseFlangeY + 1} x2="822" y2={baseFlangeY + 1} stroke="#4f5564" strokeWidth="1.4" />
        <line x1="577" y1={baseFlangeY + 2} x2="577" y2={baseContactY} stroke="#414552" strokeWidth="1" />
        <line x1="576" y1={baseContactY + 1} x2="824" y2={baseContactY + 1} stroke="#07080a" strokeWidth="1.8" />

        {/* 4 Heavy Industrial Anchor Bolts */}
        <g id="anchor-bolt-1" transform={`translate(594, ${boltY})`}>
          <circle cx="0" cy="0" r="7.5" fill="url(#boltWasherGrad)" stroke="#1a1c22" strokeWidth="0.8" />
          <polygon points="0,-5 4.5,-2.5 4.5,2.5 0,5 -4.5,2.5 -4.5,-2.5" fill="url(#boltHeadGrad)" stroke="#121317" strokeWidth="0.6" />
          <circle cx="-1.5" cy="-1.5" r="1.2" fill="#8890a2" opacity="0.7" />
        </g>
        <g id="anchor-bolt-2" transform={`translate(614, ${boltY})`}>
          <circle cx="0" cy="0" r="7.5" fill="url(#boltWasherGrad)" stroke="#1a1c22" strokeWidth="0.8" />
          <polygon points="0,-5 4.5,-2.5 4.5,2.5 0,5 -4.5,2.5 -4.5,-2.5" fill="url(#boltHeadGrad)" stroke="#121317" strokeWidth="0.6" />
          <circle cx="-1.5" cy="-1.5" r="1.2" fill="#8890a2" opacity="0.7" />
        </g>
        <g id="anchor-bolt-3" transform={`translate(786, ${boltY})`}>
          <circle cx="0" cy="0" r="7.5" fill="url(#boltWasherGrad)" stroke="#1a1c22" strokeWidth="0.8" />
          <polygon points="0,-5 4.5,-2.5 4.5,2.5 0,5 -4.5,2.5 -4.5,-2.5" fill="url(#boltHeadGrad)" stroke="#121317" strokeWidth="0.6" />
          <circle cx="-1.5" cy="-1.5" r="1.2" fill="#757c8d" opacity="0.6" />
        </g>
        <g id="anchor-bolt-4" transform={`translate(806, ${boltY})`}>
          <circle cx="0" cy="0" r="7.5" fill="url(#boltWasherGrad)" stroke="#1a1c22" strokeWidth="0.8" />
          <polygon points="0,-5 4.5,-2.5 4.5,2.5 0,5 -4.5,2.5 -4.5,-2.5" fill="url(#boltHeadGrad)" stroke="#121317" strokeWidth="0.6" />
          <circle cx="-1.5" cy="-1.5" r="1.2" fill="#757c8d" opacity="0.6" />
        </g>
      </g>
    </g>
  );
};

// ============================================================================
// 5. BILLBOARD FRAME COMPONENT
// ============================================================================
export const BillboardFrame = ({
  isLightOn = true,
  lightIntensity = 1.0,
  bottomRailText = 'CR REALTIME NEWS CHANNEL',
  children = null,
  screenHeight = 408,
  frameHeight = 480,
}) => {
  const topRailGlowOpacity = isLightOn ? 0.3 * lightIntensity : 0;
  const bottomY = 65 + frameHeight;
  const displayBottomY = 101 + screenHeight;
  const plaqueY = displayBottomY + 3;
  const plaqueCenterY = displayBottomY + 17;

  return (
    <g id="billboard-frame-group">
      <defs>
        <linearGradient id="frameTopRailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2c2f37" />
          <stop offset="25%" stopColor="#1e2026" />
          <stop offset="70%" stopColor="#15171b" />
          <stop offset="100%" stopColor="#0d0e11" />
        </linearGradient>

        <linearGradient id="frameBottomRailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#17191e" />
          <stop offset="40%" stopColor="#121317" />
          <stop offset="85%" stopColor="#0b0c0e" />
          <stop offset="100%" stopColor="#060608" />
        </linearGradient>

        <linearGradient id="frameLeftStileGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2e3139" />
          <stop offset="25%" stopColor="#202228" />
          <stop offset="80%" stopColor="#141519" />
          <stop offset="100%" stopColor="#0d0e11" />
        </linearGradient>

        <linearGradient id="frameRightStileGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d0e11" />
          <stop offset="25%" stopColor="#131418" />
          <stop offset="75%" stopColor="#0f1013" />
          <stop offset="100%" stopColor="#08080a" />
        </linearGradient>

        <linearGradient id="frameTopHighlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#202227" />
          <stop offset="15%" stopColor="#484d5a" />
          <stop offset="50%" stopColor="#585e6e" />
          <stop offset="85%" stopColor="#484d5a" />
          <stop offset="100%" stopColor="#202227" />
        </linearGradient>

        <linearGradient id="billboardSurfaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fcfcfd" />
          <stop offset="20%" stopColor="#f7f8fa" />
          <stop offset="65%" stopColor="#f1f3f6" />
          <stop offset="100%" stopColor="#ebedf2" />
        </linearGradient>

        <linearGradient id="innerTopShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
          <stop offset="35%" stopColor="#000000" stopOpacity="0.22" />
          <stop offset="75%" stopColor="#000000" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="innerLeftShadowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.38" />
          <stop offset="40%" stopColor="#000000" stopOpacity="0.18" />
          <stop offset="80%" stopColor="#000000" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="innerRightShadowGrad" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.28" />
          <stop offset="50%" stopColor="#000000" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="innerBottomShadowGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.26" />
          <stop offset="50%" stopColor="#000000" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="topRailHotspotGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffecb3" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#ffc107" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#ffa000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ff8f00" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="brandPlateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e2128" />
          <stop offset="45%" stopColor="#121419" />
          <stop offset="100%" stopColor="#08090c" />
        </linearGradient>

        <linearGradient id="brandTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e2e8f0" />
          <stop offset="75%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>

      {/* Outer Metallic Frame Body */}
      <g id="outer-metallic-frame">
        <rect x="80" y="65" width="1240" height={frameHeight} rx="10" ry="10" fill="#131518" />
        <polygon points="80,65 1320,65 1284,101 116,101" fill="url(#frameTopRailGrad)" />
        <polygon points={`116,${displayBottomY} 1284,${displayBottomY} 1320,${bottomY} 80,${bottomY}`} fill="url(#frameBottomRailGrad)" />
        <polygon points={`80,65 116,101 116,${displayBottomY} 80,${bottomY}`} fill="url(#frameLeftStileGrad)" />
        <polygon points={`1284,101 1320,65 1320,${bottomY} 1284,${displayBottomY}`} fill="url(#frameRightStileGrad)" />

        <line x1="80" y1="65" x2="116" y2="101" stroke="#0e1013" strokeWidth="1.2" />
        <line x1="1320" y1="65" x2="1284" y2="101" stroke="#0a0b0d" strokeWidth="1.2" />
        <line x1="80" y1={bottomY} x2="116" y2={displayBottomY} stroke="#08090b" strokeWidth="1.2" />
        <line x1="1320" y1={bottomY} x2="1284" y2={displayBottomY} stroke="#060608" strokeWidth="1.2" />

        <line x1="88" y1="66" x2="1312" y2="66" stroke="url(#frameTopHighlightGrad)" strokeWidth="1.6" />
        <line x1="81" y1="73" x2="81" y2={bottomY - 7} stroke="#3d414c" strokeWidth="1.2" opacity="0.8" />

        <rect x="84" y={bottomY} width="1232" height="6" rx="2" fill="#090a0d" />
        <line x1="84" y1={bottomY} x2="1316" y2={bottomY} stroke="#050507" strokeWidth="1.8" />
        <line x1="86" y1={bottomY + 6} x2="1314" y2={bottomY + 6} stroke="#21232b" strokeWidth="0.8" opacity="0.5" />

        {/* Bottom Rail Plaque: CR REALTIME NEWS CHANNEL */}
        {bottomRailText && (
          <g id="bottom-rail-branding-badge">
            <rect x="340" y={plaqueY} width="720" height="28" rx="4.5" fill="url(#brandPlateGrad)" stroke="#2d313c" strokeWidth="1" />
            <line x1="342" y1={plaqueY + 1} x2="1058" y2={plaqueY + 1} stroke="#5a6175" strokeWidth="0.9" />
            <line x1="341" y1={plaqueY + 28} x2="1059" y2={plaqueY + 28} stroke="#040506" strokeWidth="1.2" />

            <circle cx="356" cy={plaqueCenterY} r="2.6" fill="#22252e" stroke="#484e5e" strokeWidth="0.6" />
            <circle cx="356" cy={plaqueCenterY} r="1.1" fill="#717a8e" />
            <circle cx="1044" cy={plaqueCenterY} r="2.6" fill="#22252e" stroke="#484e5e" strokeWidth="0.6" />
            <circle cx="1044" cy={plaqueCenterY} r="1.1" fill="#717a8e" />

            {/* Glowing Red Broadcast Indicator */}
            <circle cx="380" cy={plaqueCenterY} r="3.8" fill="#ef4444" />
            <circle cx="380" cy={plaqueCenterY} r="1.6" fill="#ffffff" />
            <circle cx="380" cy={plaqueCenterY} r="6.5" fill="none" stroke="#ef4444" strokeWidth="0.6" opacity="0.6" />

            {/* Plaque Text */}
            <text x="712" y={plaqueCenterY + 1.2} textAnchor="middle" dominantBaseline="central" fill="#020304" fontSize="17.5" fontWeight="900" letterSpacing="4.5" fontFamily="'Inter', system-ui, sans-serif">
              {bottomRailText}
            </text>
            <text x="712" y={plaqueCenterY} textAnchor="middle" dominantBaseline="central" fill="url(#brandTextGrad)" fontSize="17.5" fontWeight="900" letterSpacing="4.5" fontFamily="'Inter', system-ui, sans-serif" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.35))' }}>
              {bottomRailText}
            </text>
          </g>
        )}
      </g>

      {/* Recessed Inner Rim Bezel */}
      <g id="inner-frame-bezel">
        <rect x="114" y="99" width="1172" height={screenHeight + 4} rx="3" fill="#0c0d10" />
        <line x1="114" y1={displayBottomY + 2} x2="1286" y2={displayBottomY + 2} stroke="#252831" strokeWidth="1" />
        <line x1="1286" y1="99" x2="1286" y2={displayBottomY + 2} stroke="#1f2129" strokeWidth="1" />
      </g>

      {/* Display Board Surface & Inner Recession Shadows */}
      <g id="advertising-display-board">
        <rect x="116" y="101" width="1168" height={screenHeight} rx="2" fill="url(#billboardSurfaceGrad)" />
        <rect x="116" y="101" width="1168" height="30" fill="url(#innerTopShadowGrad)" className="pointer-events-none" />
        <rect x="116" y="101" width="24" height={screenHeight} fill="url(#innerLeftShadowGrad)" className="pointer-events-none" />
        <rect x="1260" y="101" width="24" height={screenHeight} fill="url(#innerRightShadowGrad)" className="pointer-events-none" />
        <rect x="116" y={displayBottomY - 16} width="1168" height="16" fill="url(#innerBottomShadowGrad)" className="pointer-events-none" />
        <rect x="116" y="101" width="1168" height={screenHeight} rx="2" fill="none" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.12" className="pointer-events-none" />

        {/* React Dynamic Content Container */}
        <foreignObject x="116" y="101" width="1168" height={screenHeight} id="billboard-react-ad-container" className="overflow-hidden pointer-events-auto">
          <div className="w-full h-full relative select-none">
            {children}
          </div>
        </foreignObject>
      </g>

      {/* Top Rail Floodlight Hotspots */}
      <g id="top-rail-lamp-reflections" className="pointer-events-none light-transition" style={{ opacity: topRailGlowOpacity }}>
        <ellipse cx="265" cy="67" rx="46" ry="3.8" fill="url(#topRailHotspotGrad)" />
        <ellipse cx="555" cy="67" rx="46" ry="3.8" fill="url(#topRailHotspotGrad)" />
        <ellipse cx="845" cy="67" rx="46" ry="3.8" fill="url(#topRailHotspotGrad)" />
        <ellipse cx="1135" cy="67" rx="46" ry="3.8" fill="url(#topRailHotspotGrad)" />
      </g>
    </g>
  );
};

// ============================================================================
// 6. BILLBOARD LIGHTS COMPONENT
// ============================================================================
export const BillboardLights = ({
  isLightOn = true,
  lightIntensity = 1.0,
  lightColorTemperature = 'golden',
  beamBottomY = 480,
  onLightClick,
}) => {
  const lightPositions = [265, 555, 845, 1135];

  const colorProfiles = {
    golden: {
      core: '#fffcf0',
      inner: '#ffdf7a',
      mid: '#ffb300',
      rim: '#ff8f00',
      deep: '#e65100',
      glowRgba: 'rgba(255, 185, 40, ',
      coreRgba: 'rgba(255, 245, 210, ',
    },
    warm: {
      core: '#fffff5',
      inner: '#ffe8a3',
      mid: '#ffc107',
      rim: '#ffa000',
      deep: '#f57c00',
      glowRgba: 'rgba(255, 200, 70, ',
      coreRgba: 'rgba(255, 248, 225, ',
    },
    neutral: {
      core: '#ffffff',
      inner: '#fff5d6',
      mid: '#ffe082',
      rim: '#ffca28',
      deep: '#ffa726',
      glowRgba: 'rgba(255, 220, 120, ',
      coreRgba: 'rgba(255, 255, 245, ',
    },
    cool: {
      core: '#ffffff',
      inner: '#f0f7ff',
      mid: '#90caf9',
      rim: '#42a5f5',
      deep: '#1e88e5',
      glowRgba: 'rgba(100, 180, 255, ',
      coreRgba: 'rgba(235, 245, 255, ',
    },
  };

  const palette = colorProfiles[lightColorTemperature] || colorProfiles.golden;
  const beamOpacity = isLightOn ? 0.35 * lightIntensity : 0;
  const emitterOpacity = isLightOn ? 0.65 * Math.max(0.3, lightIntensity) : 0.15;
  const haloOpacity = isLightOn ? 0.28 * lightIntensity : 0;

  return (
    <g id="billboard-four-floodlights-group" onClick={onLightClick} className={onLightClick ? 'cursor-pointer' : ''}>
      <defs>
        <linearGradient id="lampHousingTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e323b" />
          <stop offset="60%" stopColor="#1e2027" />
          <stop offset="100%" stopColor="#13151a" />
        </linearGradient>

        <linearGradient id="lampHousingFrontGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#101114" />
          <stop offset="8%" stopColor="#252831" />
          <stop offset="30%" stopColor="#191b20" />
          <stop offset="70%" stopColor="#16171d" />
          <stop offset="92%" stopColor="#22252e" />
          <stop offset="100%" stopColor="#0d0e11" />
        </linearGradient>

        <linearGradient id="lampStalkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#121316" />
          <stop offset="35%" stopColor="#2c303a" />
          <stop offset="70%" stopColor="#1a1c22" />
          <stop offset="100%" stopColor="#0e0f12" />
        </linearGradient>

        <linearGradient id="lampBracketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#353a47" />
          <stop offset="40%" stopColor="#22252d" />
          <stop offset="100%" stopColor="#14161b" />
        </linearGradient>

        <linearGradient id="lampHingePinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a6070" />
          <stop offset="50%" stopColor="#2a2d36" />
          <stop offset="100%" stopColor="#121317" />
        </linearGradient>

        <linearGradient id="broadBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.inner} stopOpacity="0.85" />
          <stop offset="15%" stopColor={palette.mid} stopOpacity="0.6" />
          <stop offset="45%" stopColor={palette.rim} stopOpacity="0.3" />
          <stop offset="80%" stopColor={palette.deep} stopOpacity="0.08" />
          <stop offset="100%" stopColor={palette.deep} stopOpacity="0" />
        </linearGradient>

        <linearGradient id="coreBeamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.core} stopOpacity="0.95" />
          <stop offset="20%" stopColor={palette.inner} stopOpacity="0.75" />
          <stop offset="60%" stopColor={palette.mid} stopOpacity="0.25" />
          <stop offset="100%" stopColor={palette.rim} stopOpacity="0" />
        </linearGradient>

        <radialGradient id="apertureHotspotGrad" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor={palette.core} stopOpacity="1" />
          <stop offset="25%" stopColor={palette.inner} stopOpacity="0.85" />
          <stop offset="60%" stopColor={palette.mid} stopOpacity="0.4" />
          <stop offset="100%" stopColor={palette.rim} stopOpacity="0" />
        </radialGradient>

        <radialGradient id="ledRadialGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.core} stopOpacity="1" />
          <stop offset="40%" stopColor={palette.inner} stopOpacity="0.7" />
          <stop offset="80%" stopColor={palette.mid} stopOpacity="0.2" />
          <stop offset="100%" stopColor={palette.rim} stopOpacity="0" />
        </radialGradient>

        <radialGradient id="lampUpwardSpillGrad" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor={palette.inner} stopOpacity="0.6" />
          <stop offset="45%" stopColor={palette.mid} stopOpacity="0.25" />
          <stop offset="80%" stopColor={palette.rim} stopOpacity="0.05" />
          <stop offset="100%" stopColor={palette.deep} stopOpacity="0" />
        </radialGradient>

        <filter id="beamFeatherFilter" x="-40%" y="-10%" width="180%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
        </filter>
        <filter id="beamCoreFilter" x="-30%" y="-10%" width="160%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
        </filter>
        <filter id="lampLensGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </filter>
        <filter id="lampUpwardSpillFilter" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
        </filter>
      </defs>

      {/* Downward Conical Light Beams */}
      <g id="floodlight-downward-beams" className="pointer-events-none light-transition" style={{ opacity: beamOpacity, mixBlendMode: 'screen' }}>
        {lightPositions.map((cx, idx) => {
          const broadPath = `M ${cx - 40} 14 L ${cx + 40} 14 L ${cx + 215} ${beamBottomY} L ${cx - 215} ${beamBottomY} Z`;
          const corePath = `M ${cx - 27} 14 L ${cx + 27} 14 L ${cx + 125} ${Math.round(beamBottomY * 0.75)} L ${cx - 125} ${Math.round(beamBottomY * 0.75)} Z`;

          return (
            <g key={`light-beam-${idx}`} id={`beam-emitter-${idx + 1}`}>
              <path d={broadPath} fill="url(#broadBeamGrad)" filter="url(#beamFeatherFilter)" />
              <path d={corePath} fill="url(#coreBeamGrad)" filter="url(#beamCoreFilter)" />
              <ellipse cx={cx} cy={26} rx={58} ry={24} fill="url(#apertureHotspotGrad)" filter="url(#beamCoreFilter)" />
            </g>
          );
        })}
      </g>

      {/* Ambient Upward Halos */}
      <g id="floodlights-ambient-halos" className="pointer-events-none light-transition" style={{ opacity: haloOpacity }}>
        {lightPositions.map((cx, idx) => (
          <g key={`ambient-halo-${idx}`}>
            <ellipse cx={cx} cy={-20} rx={58} ry={24} fill="url(#lampUpwardSpillGrad)" filter="url(#lampUpwardSpillFilter)" />
            <ellipse cx={cx} cy={-2} rx={54} ry={20} fill="url(#ledRadialGlow)" filter="url(#lampLensGlowFilter)" opacity="0.4" />
          </g>
        ))}
      </g>

      {/* Physical Lamp Hardware */}
      <g id="floodlight-physical-assemblies">
        {lightPositions.map((cx, idx) => {
          const diodeColumns = 8;
          const diodeRows = 2;
          const diodeWidth = 4;
          const diodeHeight = 4;
          const startX = cx - 38;
          const spacingX = 11;
          const startY = -6;
          const spacingY = 8;

          return (
            <g key={`fixture-${idx}`} id={`floodlight-unit-${idx + 1}`}>
              {/* Clamp Bracket */}
              <rect x={cx - 16} y="61" width="32" height="12" rx="2" fill="url(#lampBracketGrad)" stroke="#111317" strokeWidth="0.8" />
              <circle cx={cx - 9} cy="67" r="2.2" fill="#1b1d24" stroke="#484d5c" strokeWidth="0.6" />
              <circle cx={cx + 9} cy="67" r="2.2" fill="#1b1d24" stroke="#484d5c" strokeWidth="0.6" />

              {/* Vertical Arm Stalk */}
              <rect x={cx - 7} y="16" width="14" height="47" fill="url(#lampStalkGrad)" />
              <line x1={cx - 7} y1="16" x2={cx - 7} y2="63" stroke="#4a5060" strokeWidth="0.8" opacity="0.7" />
              <line x1={cx + 7} y1="16" x2={cx + 7} y2="63" stroke="#060708" strokeWidth="0.8" />

              {/* Heavy Hinge Joint */}
              <circle cx={cx} cy="16" r="9" fill="url(#lampHingePinGrad)" stroke="#111317" strokeWidth="1" />
              <circle cx={cx} cy="16" r="4.5" fill="#1c1f26" stroke="#444957" strokeWidth="0.8" />
              <circle cx={cx} cy="16" r="2" fill="#7a8296" />

              {/* Housing Casing & Visor */}
              <rect x={cx - 48} y="-19" width="96" height="34" rx="4.5" fill="url(#lampHousingTopGrad)" stroke="#0a0b0e" strokeWidth="1.2" />
              <line x1={cx - 46} y1="-18" x2={cx + 46} y2="-18" stroke="#5d6475" strokeWidth="1" opacity="0.85" />
              <rect x={cx - 44} y="-12" width="88" height="25" rx="3" fill="url(#lampHousingFrontGrad)" stroke="#14161c" strokeWidth="0.8" />
              <line x1={cx - 44} y1="13" x2={cx + 44} y2="13" stroke="#040506" strokeWidth="1.5" />

              {/* LED Diffuser & Diode Grid */}
              <rect
                x={cx - 41}
                y="-9"
                width="82"
                height="19"
                rx="2"
                fill={isLightOn ? palette.core : '#15171d'}
                stroke={isLightOn ? palette.rim : '#2a2e38'}
                strokeWidth="0.8"
                style={{
                  filter: isLightOn ? `drop-shadow(0 0 10px ${palette.glowRgba} 0.95))` : 'none',
                  transition: 'all 0.3s ease-out',
                }}
              />

              {/* Diode Matrix */}
              <g id={`led-matrix-${idx + 1}`} style={{ opacity: emitterOpacity }} className="light-transition pointer-events-none">
                {Array.from({ length: diodeRows }).map((_, rIdx) =>
                  Array.from({ length: diodeColumns }).map((_, cIdx) => (
                    <rect
                      key={`led-${rIdx}-${cIdx}`}
                      x={startX + cIdx * spacingX}
                      y={startY + rIdx * spacingY}
                      width={diodeWidth}
                      height={diodeHeight}
                      rx="1"
                      fill={isLightOn ? palette.inner : '#3a3f4d'}
                    />
                  ))
                )}
              </g>

              {/* Optical Glass Lens Cover */}
              <rect x={cx - 41} y="-9" width="82" height="19" rx="2" fill="#ffffff" fillOpacity={isLightOn ? 0.22 : 0.06} className="pointer-events-none" />
            </g>
          );
        })}
      </g>
    </g>
  );
};

// ============================================================================
// 7. NEWS HEADER COMPONENT
// ============================================================================
export const NewsHeader = ({ isMobile = false }) => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full ${isMobile ? 'h-8 mb-2' : 'h-7 mb-1.5'} flex items-center justify-between px-2 select-none flex-shrink-0`}>
      {/* Title */}
      <div className="flex items-center gap-2.5">
        <div className={`w-1.5 ${isMobile ? 'h-5' : 'h-4'} bg-red-600 rounded-full shadow-sm`} />
        <div className="flex items-baseline gap-2">
          <h2 className={`${isMobile ? 'text-[15.5px]' : 'text-[12.5px]'} font-black uppercase tracking-wider text-[#102A50]`}>
            LATEST NEWS
          </h2>
          <span className={`${isMobile ? 'text-[12px]' : 'text-[10px]'} font-bold text-blue-600 tracking-wide uppercase hidden sm:inline`}>
            • CR Realtime Network
          </span>
        </div>
      </div>

      {/* Live Badge & Clock */}
      <div className="flex items-center gap-3">
        {timeStr && (
          <span className={`${isMobile ? 'text-[12px]' : 'text-[10.5px]'} font-mono font-semibold text-slate-500 hidden sm:inline`}>
            {timeStr} IST
          </span>
        )}
        <div className={`flex items-center gap-1.5 bg-red-50 border border-red-200/80 ${isMobile ? 'px-3 py-1' : 'px-2.5 py-0.5'} rounded-full shadow-xs`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
          </span>
          <span className={`${isMobile ? 'text-[12px]' : 'text-[10px]'} font-black tracking-widest text-red-600 uppercase`}>
            LIVE
          </span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 8. NEWS FOOTER COMPONENT
// ============================================================================
export const NewsFooter = ({
  currentPage = 1,
  totalPages = 3,
  onPrev,
  onNext,
  _onSelectPage,
  isMobile = false,
}) => {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <div className={`w-full ${isMobile ? 'h-9 mt-2' : 'h-8 mt-1.5'} flex items-center justify-between px-3 pt-1 border-t border-blue-100/80 select-none flex-shrink-0`}>
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={isFirstPage}
        className={`group flex items-center gap-1.5 ${isMobile ? 'px-4 py-1.5 text-[13px]' : 'px-3.5 py-1 text-[11px]'} rounded-full font-bold tracking-tight transition-all duration-200 ${
          isFirstPage
            ? 'opacity-35 cursor-not-allowed bg-slate-100/90 text-slate-400 border border-slate-200/80 shadow-none'
            : 'cursor-pointer bg-white text-[#102A50] border border-[#BBD4F5] shadow-[0_1px_4px_rgba(59,130,246,0.08)] hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_4px_12px_rgba(37,99,235,0.22)] hover:-translate-x-0.5 active:scale-95'
        }`}
        aria-label="Previous Page"
      >
        <svg viewBox="0 0 16 16" className={`${isMobile ? 'w-4 h-4' : 'w-3.5 h-3.5'} fill-none stroke-current stroke-[2.4] transition-transform duration-200 ${!isFirstPage ? 'group-hover:-translate-x-0.5' : ''}`}>
          <path d="M10 3.5L5.5 8l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Previous</span>
      </button>

      {/* Page Count */}
      <div className={`flex items-center gap-1.5 ${isMobile ? 'px-4 py-1 text-[14px]' : 'px-3.5 py-0.5 text-[12px]'} rounded-full bg-white border border-[#BBD4F5] font-bold text-[#102A50] tracking-wide shadow-2xs`}>
        <span className="text-slate-500 font-medium">Page</span>
        <span className={`inline-flex items-center justify-center min-w-[22px] px-1.5 ${isMobile ? 'h-6 text-[13px]' : 'h-5 text-[11.5px]'} rounded-md bg-blue-600 text-white font-black shadow-xs`}>
          {currentPage}
        </span>
        <span className="text-slate-400 font-normal">of</span>
        <span className="text-[#102A50] font-black">{totalPages}</span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={isLastPage}
        className={`group flex items-center gap-1.5 ${isMobile ? 'px-4 py-1.5 text-[13px]' : 'px-3.5 py-1 text-[11px]'} rounded-full font-bold tracking-tight transition-all duration-200 ${
          isLastPage
            ? 'opacity-35 cursor-not-allowed bg-slate-100/90 text-slate-400 border border-slate-200/80 shadow-none'
            : 'cursor-pointer bg-white text-[#102A50] border border-[#BBD4F5] shadow-[0_1px_4px_rgba(59,130,246,0.08)] hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_4px_12px_rgba(37,99,235,0.22)] hover:translate-x-0.5 active:scale-95'
        }`}
        aria-label="Next Page"
      >
        <span>Next</span>
        <svg viewBox="0 0 16 16" className={`${isMobile ? 'w-4 h-4' : 'w-3.5 h-3.5'} fill-none stroke-current stroke-[2.4] transition-transform duration-200 ${!isLastPage ? 'group-hover:translate-x-0.5' : ''}`}>
          <path d="M6 3.5l4.5 4.5L6 12.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

// ============================================================================
// 9. NEWS CARD COMPONENT
// ============================================================================
export const NewsCard = ({ card, index = 0, isMobile = false }) => {
  const IllustrationComponent =
    illustrationMap[card.iconKey] || illustrationMap[card.id] || BusinessSVG;

  let animationClass = 'animate-slide-in-left';
  let animationDelay = 0;

  if (isMobile) {
    const colIndex = index % 3; // 0 = Card 1, 1 = Card 2, 2 = Card 3
    const rowIndex = Math.floor(index / 3);
    const rowOffset = rowIndex * 90;

    if (colIndex === 1) {
      // 2num card (center) arrives FIRST smoothly from center
      animationClass = 'animate-slide-in-center';
      animationDelay = 0 + rowOffset;
    } else if (colIndex === 0) {
      // 1num card arrives from LEFT after 2num card
      animationClass = 'animate-slide-in-left';
      animationDelay = 450 + rowOffset;
    } else {
      // 3num card arrives from RIGHT after 2num card
      animationClass = 'animate-slide-in-right';
      animationDelay = 450 + rowOffset;
    }
  } else {
    // Desktop layout (4 columns x 2 rows)
    const colIndex = index % 4;
    const rowIndex = Math.floor(index / 4);

    const isFromLeft = colIndex === 0 || colIndex === 1;
    animationClass = isFromLeft ? 'animate-slide-in-left' : 'animate-slide-in-right';

    const isCenterCard = colIndex === 1 || colIndex === 2;
    const baseDelay = isCenterCard ? 0 : 420;
    const rowOffset = rowIndex * 60;
    animationDelay = baseDelay + rowOffset;
  }

  return (
    <div
      style={{ animationDelay: `${animationDelay}ms` }}
      className={`w-full h-full min-h-0 ${animationClass}`}
    >
      {isMobile ? (
        /* ============================================================== */
        /* MOBILE CARD LAYOUT (3 COLUMNS: 373px × 250px): LARGE & CRISP   */
        /* ============================================================== */
        <div className="group relative w-full h-full bg-white border-2 border-[#BBD4F5] rounded-[18px] p-3.5 flex items-center gap-3.5 shadow-[0_4px_16px_rgba(59,130,246,0.08)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.2)] hover:border-blue-500 transition-all duration-300 cursor-pointer overflow-hidden select-none">
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[18px]">
            <div className="shimmer-sweep" style={{ animationDelay: `${index * 0.8 + 1.2}s` }} />
          </div>

          {/* LEFT: 3D Illustration (ENLARGED & PROMINENT) */}
          <div className="w-[35%] h-full min-h-[90px] flex items-center justify-center bg-slate-50/95 rounded-2xl p-2 border border-slate-200/80 overflow-hidden flex-shrink-0 group-hover:bg-blue-50/60 transition-colors duration-300 relative z-10 shadow-xs">
            <div
              className="w-full h-full max-w-[110px] max-h-[110px] animate-float-gentle group-hover:scale-110 transition-transform duration-300 ease-out flex items-center justify-center"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <IllustrationComponent className="w-full h-full drop-shadow-sm" />
            </div>
          </div>

          {/* RIGHT: Content Column (LARGE HIGH-CONTRAST TYPOGRAPHY) */}
          <div className="w-[65%] h-full flex flex-col justify-between py-0.5 px-1 min-w-0 relative z-10">
            <div className="pt-0">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200/90 mb-1.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-[12px] font-black uppercase tracking-wider text-blue-700">
                  {card.category}
                </span>
              </div>

              {/* Bold Large Headline */}
              <h3 className="text-[20.5px] font-black text-[#0f172a] leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors tracking-tight">
                {card.headline}
              </h3>

              {/* Clear Bold Description */}
              <p className="text-[15px] font-bold text-[#334155] leading-snug line-clamp-3 mt-1.5 group-hover:text-slate-900 transition-colors">
                {card.description}
              </p>
            </div>

            {/* Bottom Right Arrow */}
            <div className="flex justify-end pt-1 mt-auto">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 border border-blue-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300 shadow-xs">
                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-none stroke-current stroke-[2.6]">
                  <path d="M6 3.5l4.5 4.5L6 12.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-400/20 via-blue-500/5 to-transparent rounded-tr-[18px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        /* ============================================================== */
        /* DESKTOP CARD LAYOUT: 100% ORIGINAL HORIZONTAL DESIGN           */
        /* ============================================================== */
        <div className="group relative w-full h-full min-h-[74px] bg-white border border-[#BBD4F5] rounded-[15px] p-2 flex items-center gap-2.5 shadow-[0_2px_10px_rgba(59,130,246,0.06)] hover:shadow-[0_10px_24px_rgba(37,99,235,0.16)] hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden select-none">
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[15px]">
            <div className="shimmer-sweep" style={{ animationDelay: `${index * 0.8 + 1.2}s` }} />
          </div>

          <div className="w-[30%] sm:w-[36%] h-full min-h-[58px] flex items-center justify-center bg-slate-50/80 rounded-xl p-1 border border-slate-100/80 overflow-hidden flex-shrink-0 group-hover:bg-blue-50/50 transition-colors duration-300 relative z-10">
            <div
              className="w-full h-full max-w-[64px] max-h-[64px] sm:max-w-[82px] sm:max-h-[82px] animate-float-gentle group-hover:scale-108 transition-transform duration-300 ease-out flex items-center justify-center"
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <IllustrationComponent className="w-full h-full drop-shadow-xs" />
            </div>
          </div>

          <div className="w-[70%] sm:w-[64%] h-full flex flex-col justify-between py-0.5 px-1 min-w-0 relative z-10">
            <div className="pt-0">
              <h3 className="text-[12.5px] sm:text-[11.8px] font-black text-[#102A50] leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors tracking-tight">
                {card.headline}
              </h3>
              <p className="text-[10.5px] sm:text-[9.8px] font-medium text-[#64748B] leading-snug line-clamp-2 mt-0.5 group-hover:text-slate-600 transition-colors">
                {card.description}
              </p>
            </div>

            <div className="flex justify-end pt-0.5 mt-auto">
              <div className="w-5.5 h-5.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/90 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300 shadow-2xs">
                <svg viewBox="0 0 16 16" className="w-3 h-3 fill-none stroke-current stroke-[2.2]">
                  <path d="M6 3.5l4.5 4.5L6 12.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/15 via-blue-500/5 to-transparent rounded-tr-[15px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 10. NEWS GRID COMPONENT
// ============================================================================
export const NewsGrid = ({ cards = [], currentPage = 1, isMobile = false }) => {
  const gridClasses = isMobile
    ? 'grid-cols-3 grid-rows-2 gap-2.5'
    : 'grid-cols-4 grid-rows-2 gap-2';

  return (
    <div
      key={`grid-page-${currentPage}-${isMobile ? 'm' : 'd'}`}
      className={`w-full flex-1 grid ${gridClasses} min-h-0`}
    >
      {cards.map((card, idx) => (
        <NewsCard
          key={`${card.id}-${card.iconKey}-${currentPage}-${idx}`}
          card={card}
          index={idx}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

// ============================================================================
// 11. NEWS DASHBOARD COMPONENT
// ============================================================================
export const NewsDashboard = ({ isVisible = true, isMobile = false }) => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = isMobile ? mobileNewsPagesData.length : newsPagesData.length;

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const currentCards = useMemo(() => {
    if (isMobile) {
      return mobileNewsPagesData[currentPage - 1] || mobileNewsPagesData[0];
    }
    return newsPagesData[currentPage - 1] || newsPagesData[0];
  }, [isMobile, currentPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handleSelectPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-full h-full flex flex-col px-3 pt-2 pb-1.5 bg-gradient-to-b from-[#fafcff] to-[#f4f7fb] overflow-hidden select-none transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-[0.985] pointer-events-none'
      }`}
    >
      {isVisible && (
        <>
          <NewsHeader isMobile={isMobile} />
          <NewsGrid cards={currentCards} currentPage={currentPage} isMobile={isMobile} />
          <NewsFooter
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={handlePrev}
            onNext={handleNext}
            onSelectPage={handleSelectPage}
            isMobile={isMobile}
          />
        </>
      )}
    </div>
  );
};

// ============================================================================
// 12. MASTER BILLBOARD COMPONENT
// ============================================================================
export const Billboard = ({
  isLightOn: externalLightOn = true,
  lightIntensity: externalLightIntensity = 1.0,
  lightColorTemperature = 'golden',
  bottomRailText = 'CR REALTIME NEWS CHANNEL',
  className = '',
  children = null,
  autoPowerCycle = true,
}) => {
  const [isLightOn, setIsLightOn] = useState(externalLightOn);
  const [lightIntensity, setLightIntensity] = useState(externalLightIntensity);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const clearAllTimers = () => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  };

  const runPowerCycle = useCallback(() => {
    clearAllTimers();
    setCardsVisible(false);
    setIsLightOn(false);
    setLightIntensity(0);

    const strikeTimer = setTimeout(() => {
      setIsLightOn(true);
      setLightIntensity(0.45);
    }, 700);

    const dipTimer = setTimeout(() => {
      setIsLightOn(false);
      setLightIntensity(0);
    }, 820);

    const fullOnTimer = setTimeout(() => {
      setIsLightOn(true);
      setLightIntensity(externalLightIntensity);
    }, 940);

    const cardsTimer = setTimeout(() => {
      setCardsVisible(true);
    }, 1150);

    timersRef.current = [strikeTimer, dipTimer, fullOnTimer, cardsTimer];
  }, [externalLightIntensity]);

  useEffect(() => {
    if (!autoPowerCycle) {
      setCardsVisible(true);
      return;
    }

    const initialDelayTimer = setTimeout(() => {
      runPowerCycle();
    }, 350);

    return () => {
      clearTimeout(initialDelayTimer);
      clearAllTimers();
    };
  }, [autoPowerCycle, runPowerCycle]);

  const screenHeight = isMobile ? 600 : 408;
  const frameHeight = isMobile ? 672 : 480;
  const standY = isMobile ? 737 : 545;
  const poleHeight = isMobile ? 220 : 280;
  const groundY = isMobile ? 998 : 870;
  const beamBottomY = isMobile ? 670 : 480;
  const viewBox = isMobile ? '70 -45 1260 1080' : '0 -45 1400 965';

  return (
    <div className={`relative w-full flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto max-h-[92vh] drop-shadow-sm transition-all duration-300"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Realistic 3D Outdoor Advertising Billboard"
        role="img"
      >
        <BillboardShadow
          isLightOn={isLightOn}
          lightIntensity={lightIntensity}
          groundY={groundY}
        />

        <BillboardStand
          topY={standY}
          poleHeight={poleHeight}
        />

        <BillboardFrame
          isLightOn={isLightOn}
          lightIntensity={lightIntensity}
          bottomRailText={bottomRailText}
          screenHeight={screenHeight}
          frameHeight={frameHeight}
        >
          {React.isValidElement(children)
            ? React.cloneElement(children, { isVisible: cardsVisible, isMobile })
            : children}
        </BillboardFrame>

        <BillboardLights
          isLightOn={isLightOn}
          lightIntensity={lightIntensity}
          lightColorTemperature={lightColorTemperature}
          beamBottomY={beamBottomY}
          onLightClick={runPowerCycle}
        />
      </svg>
    </div>
  );
};


// ============================================================================
// 12B. CUSTOM BILLBOARD ANIMATIONS & EMBEDDED STYLES (FROM index.css)
// ============================================================================
export const billboardStyles = `
@layer base {
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Custom smooth transitions for light controls */
.light-transition {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease-in-out, fill 0.3s ease-in-out;
}

/* Subtle glow effects */
.filter-lamp-glow {
  filter: drop-shadow(0 0 16px rgba(255, 180, 40, 0.85)) drop-shadow(0 0 32px rgba(255, 140, 0, 0.45));
}

/* ============================================================== */
/* 8 NEWS CARDS CORE ANIMATIONS                                   */
/* ============================================================== */

/* 1. Staggered Entrance Animation */
@keyframes cardEntrance {
  0% {
    opacity: 0;
    transform: translateY(16px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-card-entrance {
  animation: cardEntrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* 1b. Directional Slide-In Entrance Animations for Card 2 & 3 first, then Card 1 & 4 */
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translate3d(-140px, 0, 0) scale(0.94);
  }
  30% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translate3d(140px, 0, 0) scale(0.94);
  }
  30% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.animate-slide-in-left {
  animation: slideInFromLeft 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.animate-slide-in-right {
  animation: slideInFromRight 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* 1c. Center Drop-In Entrance Animation for Card 2 & Card 5 on mobile */
@keyframes slideInFromCenter {
  0% {
    opacity: 0;
    transform: translate3d(0, -32px, 0) scale(0.92);
  }
  30% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.animate-slide-in-center {
  animation: slideInFromCenter 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* 2. Glass Light Shimmer Sweep */
@keyframes shimmerSweep {
  0% {
    transform: translateX(-160%) skewX(-20deg);
    opacity: 0;
  }
  15% {
    opacity: 0.65;
  }
  35% {
    transform: translateX(260%) skewX(-20deg);
    opacity: 0;
  }
  100% {
    transform: translateX(260%) skewX(-20deg);
    opacity: 0;
  }
}

.shimmer-sweep {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 55%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0) 15%,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(255, 255, 255, 0) 85%,
    transparent 100%
  );
  animation: shimmerSweep 7s infinite ease-in-out;
  pointer-events: none;
}

/* ============================================================== */
/* 8 DISTINCT INDIVIDUAL ICON ANIMATIONS                         */
/* ============================================================== */

/* ICON 1: BUSINESS (Surging trend arrow & growing bars) */
@keyframes bizArrowSurge {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(2px, -3.5px);
  }
}
.anim-biz-arrow {
  animation: bizArrowSurge 2.2s ease-in-out infinite;
}

@keyframes bizBarPulse {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.08);
  }
}
.anim-biz-bar {
  transform-origin: bottom;
  animation: bizBarPulse 2.8s ease-in-out infinite;
}

@keyframes bizNodeBlink {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.35);
    opacity: 0.7;
  }
}
.anim-biz-node {
  animation: bizNodeBlink 1.8s ease-in-out infinite;
  transform-origin: center;
}

/* ICON 2: SPORTS (Cricket ball spin & motion orbit swoosh) */
@keyframes sportsOrbitSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.anim-sports-orbit {
  transform-origin: 60px 58px;
  animation: sportsOrbitSpin 6s linear infinite;
}

@keyframes sportsBallSeamWobble {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(6deg);
  }
}
.anim-sports-ball {
  transform-origin: 60px 58px;
  animation: sportsBallSeamWobble 3s ease-in-out infinite;
}

/* ICON 3: TECHNOLOGY (AI Neural Core pulse & circuit flow) */
@keyframes techCorePulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.18);
    opacity: 1;
  }
}
.anim-tech-core {
  transform-origin: 60px 55px;
  animation: techCorePulse 2.4s ease-in-out infinite;
}

@keyframes techCircuitBlink {
  0%, 100% {
    opacity: 0.35;
  }
  50% {
    opacity: 1;
  }
}
.anim-tech-circuit {
  animation: techCircuitBlink 1.6s ease-in-out infinite;
}

@keyframes techHoloRing {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.anim-tech-ring {
  transform-origin: 60px 55px;
  animation: techHoloRing 8s linear infinite;
}

/* ICON 4: WEATHER (Continuous rotating sun rays & cloud drift) */
@keyframes weatherSunRays {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.anim-weather-rays {
  transform-origin: 70px 46px;
  animation: weatherSunRays 14s linear infinite;
}

@keyframes weatherCloudFloat {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(3px, -2.5px);
  }
}
.anim-weather-cloud {
  animation: weatherCloudFloat 4s ease-in-out infinite;
}

@keyframes weatherRainDrop {
  0% {
    transform: translateY(-4px);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateY(6px);
    opacity: 0;
  }
}
.anim-weather-rain {
  animation: weatherRainDrop 1.6s ease-in infinite;
}

/* ICON 5: NATIONAL (Radar beacon pulses & broadcast wave arcs) */
@keyframes nationalBeaconPing {
  0% {
    transform: scale(0.9);
    opacity: 0.95;
  }
  60% {
    transform: scale(1.8);
    opacity: 0;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}
.anim-national-ping {
  transform-origin: center;
  animation: nationalBeaconPing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes nationalBroadcastArc {
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.65;
    transform: scale(1.03);
  }
}
.anim-national-wave {
  transform-origin: 60px 50px;
  animation: nationalBroadcastArc 3s ease-in-out infinite;
}

/* ICON 6: EDUCATION (Tassel gentle sway & achievement star twinkle) */
@keyframes eduTasselSwing {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}
.anim-edu-tassel {
  transform-origin: 60px 35px;
  animation: eduTasselSwing 3.2s ease-in-out infinite;
}

@keyframes eduStarTwinkle {
  0%, 100% {
    transform: scale(0.85);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}
.anim-edu-star {
  transform-origin: center;
  animation: eduStarTwinkle 2s ease-in-out infinite;
}

/* ICON 7: HEALTH (Cardiovascular Heartbeat & ECG Pulse Flow) */
@keyframes healthHeartbeat {
  0%, 100% {
    transform: scale(1);
  }
  12% {
    transform: scale(1.07);
  }
  24% {
    transform: scale(1);
  }
  36% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1);
  }
}
.anim-health-cross {
  transform-origin: 60px 54px;
  animation: healthHeartbeat 2.2s ease-in-out infinite;
}

@keyframes healthEcgTrace {
  0%, 100% {
    opacity: 0.75;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.02);
  }
}
.anim-health-ecg {
  transform-origin: center;
  animation: healthEcgTrace 1.8s ease-in-out infinite;
}

/* ICON 8: WORLD (Satellite orbit flight & global communication pulse) */
@keyframes worldSatelliteGlide {
  0% {
    transform: rotate(0deg) translate(46px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(46px) rotate(-360deg);
  }
}
.anim-world-satellite {
  transform-origin: 60px 60px;
  animation: worldSatelliteGlide 10s linear infinite;
}

@keyframes worldBeaconBlink {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.4);
    opacity: 1;
  }
}
.anim-world-node {
  transform-origin: center;
  animation: worldBeaconBlink 1.9s ease-in-out infinite;
}

/* ============================================================== */
/* PAGE 2 BESPOKE ICON ANIMATIONS                                 */
/* ============================================================== */

/* Page 2 - Business: RBI Gold Coin Hover */
@keyframes rbiCoinHover {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-3.5px) scale(1.05);
  }
}
.anim-rbi-coin {
  transform-origin: 60px 68px;
  animation: rbiCoinHover 2.6s ease-in-out infinite;
}

/* Page 2 - Sports: Olympic Flame Dance & Halo */
@keyframes torchFlameDance {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.05, 0.96) rotate(-2deg);
  }
  50% {
    transform: scale(0.97, 1.06) rotate(1.5deg);
  }
  75% {
    transform: scale(1.04, 0.98) rotate(-1deg);
  }
}
.anim-torch-flame {
  transform-origin: 60px 55px;
  animation: torchFlameDance 1.8s ease-in-out infinite;
}

@keyframes flameGlowPulse {
  0%, 100% {
    opacity: 0.35;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.65;
    transform: scale(1.1);
  }
}
.anim-flame-glow {
  transform-origin: 60px 40px;
  animation: flameGlowPulse 2.2s ease-in-out infinite;
}

/* Page 2 - Tech: Quantum Core Pulse & Circuit Blinking */
@keyframes chipQuantumPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.12);
    opacity: 1;
    filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.8));
  }
}
.anim-chip-pulse {
  transform-origin: 60px 60px;
  animation: chipQuantumPulse 2s ease-in-out infinite;
}

@keyframes chipCircuitFlash {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
.anim-chip-circuit {
  animation: chipCircuitFlash 1.6s ease-in-out infinite;
}

/* Page 2 - Weather: Ocean Wave Sway & Wind Gust */
@keyframes waveSwayRoll {
  0%, 100% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(-3px) scaleY(1.04);
  }
}
.anim-wave-sway {
  transform-origin: bottom center;
  animation: waveSwayRoll 3s ease-in-out infinite;
}

@keyframes windGustStream {
  0%, 100% {
    stroke-dashoffset: 0;
    opacity: 0.85;
  }
  50% {
    stroke-dashoffset: 12;
    opacity: 1;
  }
}
.anim-wind-gust {
  stroke-dasharray: 60;
  animation: windGustStream 2.8s ease-in-out infinite;
}

/* Page 2 - National: Expressway Fast Road Dashes */
@keyframes roadDashesGlide {
  0% {
    transform: translateY(-8px);
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(8px);
    opacity: 0.3;
  }
}
.anim-road-dash {
  animation: roadDashesGlide 1.2s linear infinite;
}

/* Page 2 - Education: DNA Double Helix Twist */
@keyframes dnaHelixTwist {
  0%, 100% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(-1);
  }
}
.anim-dna-spin {
  transform-origin: center;
  animation: dnaHelixTwist 3.5s ease-in-out infinite;
}

/* Page 2 - Health: Floating Medicine Capsule */
@keyframes capsuleHoverFloat {
  0%, 100% {
    transform: rotate(-30deg) translateY(0);
  }
  50% {
    transform: rotate(-24deg) translateY(-4px);
  }
}
.anim-capsule-float {
  transform-origin: 60px 58px;
  animation: capsuleHoverFloat 2.8s ease-in-out infinite;
}

/* Page 2 - World: Wind Turbine Smooth Rotation */
@keyframes turbineSmoothRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.anim-turbine-spin {
  transform-origin: 55px 52px;
  animation: turbineSmoothRotate 4s linear infinite;
}

/* ============================================================== */
/* PAGE 3 BESPOKE ICON ANIMATIONS                                 */
/* ============================================================== */

/* Page 3 - Business: Startup Rocket Thrust Pulse */
@keyframes startupThrustPulse {
  0%, 100% {
    transform: scaleY(1);
    opacity: 0.85;
  }
  50% {
    transform: scaleY(1.35) scaleX(1.1);
    opacity: 1;
  }
}
.anim-startup-thrust {
  transform-origin: 0 0;
  animation: startupThrustPulse 0.4s ease-in-out infinite alternate;
}

@keyframes rocketAscentGlide {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3.5px);
  }
}
.anim-rocket-glide {
  animation: rocketAscentGlide 2.2s ease-in-out infinite;
}

/* Page 3 - Sports: Badminton Shuttlecock Smash */
@keyframes shuttleSmashVibe {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  20% {
    transform: translate(2px, -3px) rotate(4deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-2deg);
  }
}
.anim-shuttle-smash {
  transform-origin: center;
  animation: shuttleSmashVibe 1.6s ease-in-out infinite;
}

/* Page 3 - Technology: 6G Satellite Radar Spherical Waves */
@keyframes satRadarExpand {
  0% {
    transform: scale(0.7);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}
.anim-satellite-radar {
  transform-origin: 60px 68px;
  animation: satRadarExpand 2.2s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
}

/* Page 3 - Weather: Thunderstorm Lightning Strobe Flash */
@keyframes thunderStrobeFlash {
  0%, 90%, 100% {
    opacity: 0.2;
    transform: scale(0.96);
  }
  92% {
    opacity: 1;
    transform: scale(1.06);
    filter: drop-shadow(0 0 16px rgba(250, 204, 21, 1));
  }
  94% {
    opacity: 0.3;
  }
  96% {
    opacity: 1;
    transform: scale(1.08);
  }
}
.anim-thunder-flash {
  transform-origin: 58px 74px;
  animation: thunderStrobeFlash 2.5s infinite;
}

/* Page 3 - National: Bullet Train Speed Streaks */
@keyframes trainSpeedStreaks {
  0% {
    stroke-dashoffset: 40;
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: -40;
    opacity: 0.3;
  }
}
.anim-train-speed {
  stroke-dasharray: 20 10;
  animation: trainSpeedStreaks 0.8s linear infinite;
}

/* Page 3 - Education: Floating Code Block Tag */
@keyframes codeTagFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-4px) rotate(-2deg);
  }
}
.anim-code-float {
  transform-origin: center;
  animation: codeTagFloat 2.6s ease-in-out infinite;
}

/* Page 3 - Health: AI Anatomical Heart Rhythm */
@keyframes aiHeartbeatRhythm {
  0%, 100% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.12);
  }
  28% {
    transform: scale(0.98);
  }
  42% {
    transform: scale(1.08);
  }
  58% {
    transform: scale(1);
  }
}
.anim-ai-heart {
  transform-origin: 60px 56px;
  animation: aiHeartbeatRhythm 2s ease-in-out infinite;
}

@keyframes laserDiagnosticSweep {
  0%, 100% {
    transform: translateY(-16px);
    opacity: 0.4;
  }
  50% {
    transform: translateY(16px);
    opacity: 1;
  }
}
.anim-laser-scan {
  animation: laserDiagnosticSweep 2s ease-in-out infinite;
}

/* Page 3 - World: Space Shuttle Orbital Roll */
@keyframes spaceShuttleOrbit {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(3px, -3px) rotate(-3deg);
  }
}
.anim-space-orbit {
  transform-origin: center;
  animation: spaceShuttleOrbit 4s ease-in-out infinite;
}
`;

// ============================================================================
// 13. ALL-IN-ONE ADVERTISE WITH US ROOT COMPONENT (PAGE LAYOUT + BILLBOARD + STYLES)
// ============================================================================
export const AdvertiseWithUs = ({
  isLightOn = true,
  lightIntensity = 1.0,
  lightColorTemperature = 'golden',
  bottomRailText = 'CR REALTIME NEWS CHANNEL',
  className = '',
  showHeader = true,
  children,
}) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e8edf5] flex flex-col items-center justify-start pt-12 pb-6 sm:py-12 px-2 sm:px-8 overflow-y-auto overflow-x-hidden select-none">
      {/* Embedded CSS animations & styles from index.css */}
      <style>{billboardStyles}</style>

      {/* ============================================================== */}
      {/* 1. TOP PAGE HEADER SECTION                                     */}
      {/* ============================================================== */}
      {showHeader && (
        <header className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mb-3 sm:mb-5">
          {/* Accent Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-600 font-bold text-[11px] sm:text-[11.5px] tracking-widest uppercase shadow-2xs mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Prime Outdoor Media Network</span>
          </div>

          {/* Main Page Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#102A50] tracking-tight uppercase">
            Advertise With Us
          </h1>

          {/* Decorative Red Accent Line */}
          <div className="w-16 h-1 bg-red-600 rounded-full mt-2 mb-3 shadow-xs" />

          {/* Exactly 3 Single-Line Descriptions (1 Line Each, Total 3 Lines) */}
          <div className="w-full text-center space-y-1.5 text-slate-600 text-[13px] sm:text-[14px] md:text-[14.5px] font-medium leading-normal">
            <p className="whitespace-normal sm:whitespace-nowrap">
              Maximize your brand presence across high-impact digital hoardings in prime transit corridors.
            </p>
            <p className="whitespace-normal sm:whitespace-nowrap">
              Engage millions of daily commuters with 24/7 dynamic broadcasting and live sponsored news feeds.
            </p>
            <p className="whitespace-normal sm:whitespace-nowrap">
              Partner with CR Realtime Network to drive unmatched audience recall and scale your enterprise reach.
            </p>
          </div>
        </header>
      )}

      {/* ============================================================== */}
      {/* 2. COMPLETE 3D BILLBOARD WITH NEWS DASHBOARD                  */}
      {/* ============================================================== */}
      <main className="w-full max-w-6xl mx-auto flex items-center justify-center">
        <Billboard
          isLightOn={isLightOn}
          lightIntensity={lightIntensity}
          lightColorTemperature={lightColorTemperature}
          bottomRailText={bottomRailText}
          className={className}
        >
          {children || <NewsDashboard />}
        </Billboard>
      </main>
    </div>
  );
};

export const AdvertiseWithUsPage = AdvertiseWithUs;
export default AdvertiseWithUs;

