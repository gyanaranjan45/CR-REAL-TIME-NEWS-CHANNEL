import React, { useState } from 'react';
import { socialMediaList, followUsConfig } from './FollowUsPageData';

/**
 * =========================================================================
 * 1. OFFICIAL SVG SOCIAL MEDIA ICONS (Proportional Responsive Scaling)
 * =========================================================================
 */
function SocialIcon({ id, className = 'w-4 h-4 min-[380px]:w-4.5 min-[380px]:h-4.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' }) {
  switch (id) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} text-white drop-shadow-sm`}>
          <rect
            x="2.5"
            y="2.5"
            width="19"
            height="19"
            rx="5.5"
            stroke="white"
            strokeWidth="2.1"
          />
          <circle
            cx="12"
            cy="12"
            r="4.6"
            stroke="white"
            strokeWidth="2.1"
          />
          <circle
            cx="17.4"
            cy="6.6"
            r="1.4"
            fill="white"
          />
        </svg>
      );

    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white drop-shadow-sm`}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case 'telegram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white drop-shadow-sm -translate-x-[0.5px] translate-y-[0.5px]`}>
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
      );

    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} text-white drop-shadow-sm`}>
          <path
            d="M17.5 14.3l-.01.07c-.24.75-.98 1.26-1.75 1.3-.72.05-1.63-.12-2.91-.65-2.55-1.07-4.21-3.63-4.34-3.8-.13-.18-1.03-1.37-1.03-2.62 0-1.24.65-1.85.88-2.1.23-.26.51-.32.68-.32.17 0 .34 0 .49.01.15.01.36-.06.57.44.22.51.73 1.77.8 1.9.06.13.1.28.02.45-.09.17-.13.28-.26.43-.13.15-.27.33-.38.44-.13.13-.26.27-.11.52.15.26.66 1.09 1.41 1.76.97.87 1.79 1.14 2.04 1.26.26.13.4.11.55-.06.15-.17.64-.75.81-1 .17-.26.34-.22.58-.13.23.08 1.48.7 1.74.83.25.13.42.19.49.3.06.1.06.61-.17 1.36z"
            fill="white"
          />
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 1.9.53 3.67 1.44 5.17L2.05 21.65a.625.625 0 00.77.77l4.58-1.38A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
            stroke="white"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white drop-shadow-sm translate-y-[1px]`}>
          <path d="M13.5 22v-8.5h2.8l.4-3.5h-3.2v-2.2c0-1 .3-1.7 1.7-1.7h1.8v-3.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6v2.5H7v3.5h2.8V22h3.7z" />
        </svg>
      );

    case 'youtube':
      return (
        <div className="relative flex items-center justify-center w-[48%] h-[34%]">
          <div className="w-full h-full bg-white rounded-[2px] sm:rounded-[4px] md:rounded-[6px] flex items-center justify-center shadow-xs">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[45%] h-[45%] text-[#e60000] translate-x-[0.5px]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      );

    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-white drop-shadow-sm`}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      );

    case 'website':
    case 'discord':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${className} text-white drop-shadow-sm`}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );

    default:
      return null;
  }
}

/**
 * =========================================================================
 * 2. USERS / GROUP ICON FOR TOP CAPSULE
 * =========================================================================
 */
function UsersGroupIcon({ className = 'w-8 h-8 text-white' }) {
  return (
    <svg viewBox="0 0 52 38" fill="currentColor" className={className} aria-hidden="true">
      {/* Center Figure */}
      <circle cx="26" cy="11.5" r="7" />
      <path d="M14 34c0-6.627 5.373-12 12-12s12 5.373 12 12v2H14v-2z" />

      {/* Left Silhouette */}
      <circle cx="10.5" cy="13.5" r="5.2" opacity="0.95" />
      <path d="M1 34c0-5.8 4-10.2 9.5-11.2 1.6 1.8 3.7 3.2 6.1 4-1.3 2.1-2 4.6-2 7.2v2H1v-2z" opacity="0.95" />

      {/* Right Silhouette */}
      <circle cx="41.5" cy="13.5" r="5.2" opacity="0.95" />
      <path d="M37.4 26.8c2.4-.8 4.5-2.2 6.1-4 5.5 1 9.5 5.4 9.5 11.2v2H35.4v-2c0-2.6-.7-5.1-2-7.2z" opacity="0.95" />
    </svg>
  );
}

/**
 * =========================================================================
 * 3. ULTRA-REALISTIC LANDSCAPE SMARTPHONE COMPONENT (3D Perspective Ground Plane)
 * =========================================================================
 */
function Phone3D({ className = '' }) {
  return (
    <div
      className={`relative w-full max-w-[660px] flex items-center justify-center ${className}`}
      style={{
        perspective: '1000px',
        perspectiveOrigin: '50% 30%',
      }}
    >
      {/* 3D Tilted Plane: Realistic flat-on-surface angle (34deg gives solid substance without vertical squishing) */}
      <div
        className="relative w-full flex items-center justify-center transition-all duration-300"
        style={{
          transform: 'rotateX(34deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 620 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible select-none"
        >
          <defs>
            {/* Ground Outer Ring Gradient (Cyan to Purple/Magenta) */}
            <linearGradient id="groundRingOuterGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.85" />
              <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0.8" />
            </linearGradient>

            {/* Ground Inner Ring Gradient (Vibrant Cyan) */}
            <linearGradient id="groundRingInnerGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#00d2ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.95" />
            </linearGradient>

            {/* Screen Wallpaper Gradient (Cyan -> Royal Blue -> Violet -> Magenta) */}
            <linearGradient id="screenWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d8ff" />
              <stop offset="26%" stopColor="#0066ff" />
              <stop offset="58%" stopColor="#4f46e5" />
              <stop offset="80%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>

            {/* Metallic Frame Gradient (Polished Dark Space Titanium) */}
            <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="25%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="75%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* Bottom Metallic Rail Thickness Gradient */}
            <linearGradient id="bottomRailGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#3b4556" />
              <stop offset="35%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#0a0e17" />
            </linearGradient>

            {/* Chamfer Highlight Line */}
            <linearGradient id="chamferGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" stopOpacity="0.1" />
              <stop offset="15%" stopColor="#94a3b8" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="85%" stopColor="#94a3b8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.1" />
            </linearGradient>

            {/* Diagonal Screen Glass Sheen */}
            <linearGradient id="diagonalGlareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
              <stop offset="28%" stopColor="#ffffff" stopOpacity="0.07" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>

            {/* Top Edge Glass Reflection */}
            <linearGradient id="topGlassGlare" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>

            {/* Horizontal Anamorphic Lens Flare Filter */}
            <filter id="horizontalFlare" x="-50%" y="-150%" width="200%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8 1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Bloom Filters */}
            <filter id="ringGlow" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="4" result="b1" />
              <feGaussianBlur stdDeviation="11" result="b2" />
              <feMerge>
                <feMergeNode in="b2" />
                <feMergeNode in="b1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <clipPath id="screenDisplayClip">
              <rect x="28" y="24" width="564" height="212" rx="20" />
            </clipPath>
          </defs>

          {/* =========================================================================
              GROUND PLANE: CONCENTRIC NEON RINGS & SURFACE SHADOW
          ========================================================================= */}
          {/* Surface Contact Shadow */}
          <ellipse
            cx="310"
            cy="244"
            rx="295"
            ry="24"
            fill="rgba(0, 0, 0, 0.5)"
            filter="blur(16px)"
          />

          {/* Large Outer Elliptical Glowing Neon Ring */}
          <ellipse
            cx="310"
            cy="195"
            rx="315"
            ry="72"
            stroke="url(#groundRingOuterGrad)"
            strokeWidth="3"
            filter="url(#ringGlow)"
            className="animate-ring-glow"
          />

          {/* Inner Concentric Glowing Neon Ring */}
          <ellipse
            cx="310"
            cy="195"
            rx="275"
            ry="58"
            stroke="url(#groundRingInnerGrad)"
            strokeWidth="2.5"
            strokeOpacity="0.95"
            filter="url(#ringGlow)"
          />

          {/* =========================================================================
              SMARTPHONE CHASSIS (Uniform Proportions & 3D Metallic Edge)
          ========================================================================= */}
          {/* Bottom 3D Metallic Edge Rail */}
          <path
            d="
              M 20 228
              C 20 242 32 252 48 252
              L 572 252
              C 588 252 600 242 600 228
              L 600 220
              L 20 220
              Z
            "
            fill="url(#bottomRailGrad)"
          />

          {/* Bottom Rail Top Chamfer Line */}
          <path
            d="M 28 228 L 592 228"
            stroke="url(#chamferGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Metallic Side Edge Buttons & Ports on Front Rim */}
          <rect x="180" y="236" width="36" height="5" rx="2.5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <rect x="230" y="236" width="36" height="5" rx="2.5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <rect x="280" y="236" width="60" height="5.5" rx="2.75" fill="#090d16" stroke="#475569" strokeWidth="0.8" />
          <rect x="354" y="236" width="36" height="5" rx="2.5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
          <rect x="404" y="236" width="36" height="5" rx="2.5" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />

          {/* Main Metallic Frame Shell (Solid & Substantial) */}
          <rect
            x="20"
            y="16"
            width="580"
            height="228"
            rx="28"
            fill="url(#frameGrad)"
            stroke="#475569"
            strokeWidth="1.6"
          />

          {/* Inner Black OLED Bezel */}
          <rect
            x="24"
            y="20"
            width="572"
            height="220"
            rx="24"
            fill="#000000"
          />

          {/* Clipped Screen Display Panel */}
          <g clipPath="url(#screenDisplayClip)">
            {/* Dynamic Wallpaper Gradient */}
            <rect
              x="28"
              y="24"
              width="564"
              height="212"
              fill="url(#screenWallGrad)"
            />

            {/* Diagonal Screen Glass Sheen Reflection */}
            <path
              d="M 28 24 L 290 24 L 150 236 L 28 236 Z"
              fill="url(#diagonalGlareGrad)"
            />

            {/* Top Bezel Glass Sheen */}
            <rect
              x="28"
              y="24"
              width="564"
              height="26"
              fill="url(#topGlassGlare)"
            />

            {/* iPhone Notch on Left Bezel */}
            <path
              d="
                M 28 98
                C 34 98 38 100 40 104
                C 42 108 42 112 42 116
                L 42 142
                C 42 146 42 150 40 154
                C 38 158 34 160 28 160
                Z
              "
              fill="#000000"
            />

            {/* Speaker Slit inside Notch */}
            <rect
              x="31"
              y="116"
              width="3"
              height="26"
              rx="1.5"
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="0.6"
            />

            {/* Front Camera Lens Dot inside Notch */}
            <circle cx="37" cy="121" r="2" fill="#080e1a" stroke="#1e293b" strokeWidth="0.5" />
            <circle cx="37" cy="121" r="0.75" fill="#00f0ff" opacity="0.8" />

            {/* =========================================================================
                INTERNAL SCREEN CONNECTION LASER BEAM (From Top Edge directly to Users Icon)
            ========================================================================= */}
            {/* Outer Cyan Glow Beam inside screen */}
            <line
              x1="310"
              y1="24"
              x2="310"
              y2="62"
              stroke="#00f5ff"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#ringGlow)"
            />
            {/* Bright Solid White Core Beam inside screen */}
            <line
              x1="310"
              y1="24"
              x2="310"
              y2="62"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* =========================================================================
                SCREEN CENTER CONTENT: USERS ICON + TITLE + SUBTITLE
            ========================================================================= */}
            <g id="screenContentText" className="select-none">
              {/* Luminous Energy Halo behind Users Icon */}
              <circle
                cx="310"
                cy="62"
                r="24"
                fill="#00f5ff"
                opacity="0.5"
                filter="blur(6px)"
              />
              <circle
                cx="310"
                cy="62"
                r="12"
                fill="#ffffff"
                opacity="0.85"
                filter="blur(2px)"
              />
              <circle
                cx="310"
                cy="62"
                r="4"
                fill="#ffffff"
              />

              {/* White Group/Users Icon */}
              <g transform="translate(285, 50)" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.4))">
                <circle cx="25" cy="11" r="7.5" fill="#ffffff" />
                <path d="M 12 33 C 12 25.8 17.8 20 25 20 C 32.2 20 38 25.8 38 33 Z" fill="#ffffff" />
                <circle cx="9" cy="13" r="5.5" fill="#ffffff" opacity="0.95" />
                <path d="M 0 33 C 0 27 4 22.5 9.5 21.5 C 11.2 23.5 13.3 24.9 15.7 25.7 C 14.4 27.9 13.7 30.3 13.7 33 Z" fill="#ffffff" opacity="0.95" />
                <circle cx="41" cy="13" r="5.5" fill="#ffffff" opacity="0.95" />
                <path d="M 37.3 25.7 C 39.7 24.9 41.8 23.5 43.5 21.5 C 49 22.5 53 27 53 33 L 36.3 33 C 36.3 30.3 35.6 27.9 34.3 25.7 Z" fill="#ffffff" opacity="0.95" />
              </g>

              {/* Title: Follow-up Space */}
              <text
                x="310"
                y="136"
                textAnchor="middle"
                fill="#ffffff"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontSize="29"
                fontWeight="800"
                letterSpacing="-0.6"
                filter="drop-shadow(0 2px 5px rgba(0,0,0,0.45))"
              >
                {followUsConfig.phoneTitle}
              </text>

              {/* Subtitle with Flanking Horizontal Lines: Stay Connected with Us */}
              <g id="subtitleGroup" opacity="0.95">
                <line
                  x1="175"
                  y1="162"
                  x2="235"
                  y2="162"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                />

                <text
                  x="310"
                  y="166"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                  fontSize="14"
                  fontWeight="500"
                  letterSpacing="0.4"
                  filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
                >
                  {followUsConfig.phoneSubtitle}
                </text>

                <line
                  x1="385"
                  y1="162"
                  x2="445"
                  y2="162"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                />
              </g>
            </g>
          </g>

          {/* =========================================================================
              TOP FRAME ENTRY POINT & HORIZONTAL LASER FLARE
          ========================================================================= */}
          {/* Laser beam entering the top frame */}
          <line
            x1="310"
            y1="0"
            x2="310"
            y2="24"
            stroke="#00f5ff"
            strokeWidth="5"
            filter="url(#ringGlow)"
          />
          <line
            x1="310"
            y1="0"
            x2="310"
            y2="24"
            stroke="#ffffff"
            strokeWidth="2.2"
          />

          {/* Horizontal Laser Lens Flare on Top Frame Edge (Anamorphic Streak) */}
          <ellipse
            cx="310"
            cy="16"
            rx="55"
            ry="2.5"
            fill="#00f5ff"
            filter="url(#horizontalFlare)"
            opacity="0.95"
          />
          <ellipse
            cx="310"
            cy="16"
            rx="24"
            ry="1.2"
            fill="#ffffff"
            filter="url(#horizontalFlare)"
            opacity="1"
          />
          <circle
            cx="310"
            cy="16"
            r="2.5"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * =========================================================================
 * 4. MAIN FOLLOW US STANDALONE COMPONENT
 * =========================================================================
 */
export default function FollowUs() {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <section className="relative w-full min-h-screen py-4 md:py-6 px-3 flex flex-col items-center justify-center bg-white overflow-hidden select-none">
      {/* Dynamic Keyframe Style Definition */}
      <style>{`
        @keyframes followHeaderIn {
          0% { opacity: 0; transform: translateY(-45px) scale(0.92); filter: blur(8px); }
          65% { opacity: 1; transform: translateY(5px) scale(1.02); filter: blur(0px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
        }
        @keyframes followDescIn {
          0% { opacity: 0; transform: translateY(-20px); filter: blur(5px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        @keyframes followPlatformIn {
          0% { opacity: 0; transform: scale(0.82) translateY(35px); filter: blur(10px); }
          65% { opacity: 1; transform: scale(1.02) translateY(-4px); filter: blur(0px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0px); }
        }
        @keyframes followSocialPopIn {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); filter: blur(6px); }
          65% { opacity: 1; transform: scale(1.18) rotate(15deg); filter: blur(0px); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0px); }
        }
        @keyframes followBeamDropIn {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top center; }
          100% { opacity: 1; transform: scaleY(1); transform-origin: top center; }
        }
        @keyframes followWifiIn {
          0% { opacity: 0; transform: scale(0.2) rotate(-90deg); }
          65% { opacity: 1; transform: scale(1.22) rotate(10deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes followPhoneRise {
          0% { opacity: 0; transform: translateY(90px) scale(0.92); filter: blur(10px); }
          65% { opacity: 1; transform: translateY(-8px) scale(1.01); filter: blur(0px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
        }
        @keyframes telemetryPulseFlow {
          0% { top: 96%; opacity: 0; transform: translate(-50%, 0) scale(0.6); }
          4% { opacity: 1; transform: translate(-50%, 0) scale(1); }
          38% { top: 50%; opacity: 1; transform: translate(-50%, 0) scale(1.35); filter: drop-shadow(0 0 16px #ffffff) drop-shadow(0 0 28px #00f0ff); }
          48% { top: 42%; opacity: 1; transform: translate(-50%, 0) scale(1.15); }
          71% { top: 0%; opacity: 1; transform: translate(-50%, 0) scale(1.5); filter: drop-shadow(0 0 22px #ffffff) drop-shadow(0 0 35px #00f0ff); }
          75% { top: -3%; opacity: 0; transform: translate(-50%, 0) scale(1.8); }
          100% { top: -3%; opacity: 0; transform: translate(-50%, 0) scale(0.4); }
        }
        @keyframes wifiPulseBurst {
          0%, 32% { transform: scale(1); box-shadow: 0 0 20px rgba(0, 240, 255, 0.85); filter: brightness(1); }
          40% { transform: scale(1.22); box-shadow: 0 0 38px #00f0ff, 0 0 60px #0284c7, inset 0 0 18px #ffffff; filter: brightness(1.45) drop-shadow(0 0 16px #00f0ff); }
          48% { transform: scale(1.05); box-shadow: 0 0 28px rgba(0, 240, 255, 0.95); filter: brightness(1.15); }
          56%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(0, 240, 255, 0.85); filter: brightness(1); }
        }
        @keyframes ovalPlatformPulse {
          0%, 70% { filter: brightness(1); }
          74% { filter: brightness(1.25) drop-shadow(0 0 30px rgba(0, 240, 255, 0.95)); }
          84%, 100% { filter: brightness(1); }
        }
        @keyframes ovalExtractOutward1 {
          0%, 71% { opacity: 0; transform: scale(0.98); }
          73% { opacity: 0.95; transform: scale(1.0); filter: drop-shadow(0 0 14px #00f0ff); }
          92% { opacity: 0.35; transform: scale(1.28); filter: drop-shadow(0 0 26px rgba(0, 240, 255, 0.55)); }
          100% { opacity: 0; transform: scale(1.44); filter: drop-shadow(0 0 35px rgba(0, 240, 255, 0)); }
        }
        @keyframes ovalExtractOutward2 {
          0%, 76% { opacity: 0; transform: scale(0.98); }
          79% { opacity: 0.85; transform: scale(1.0); filter: drop-shadow(0 0 10px #38bdf8); }
          95% { opacity: 0.28; transform: scale(1.34); filter: drop-shadow(0 0 22px rgba(56, 189, 248, 0.45)); }
          100% { opacity: 0; transform: scale(1.52); filter: drop-shadow(0 0 32px rgba(56, 189, 248, 0)); }
        }
        .animate-follow-header { animation: followHeaderIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .animate-follow-desc { animation: followDescIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
        .animate-follow-platform { animation: followPlatformIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both; }
        .animate-follow-social { animation: followSocialPopIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
        .animate-follow-beam { animation: followBeamDropIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both; }
        .animate-follow-wifi { animation: followWifiIn 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) 0.55s both; }
        .animate-follow-phone { animation: followPhoneRise 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
        .telemetry-energy-pulse {
          position: absolute;
          left: 50%;
          width: 14px;
          height: 24px;
          border-radius: 9999px;
          background: radial-gradient(circle at 50% 30%, #ffffff 0%, #00f0ff 45%, #0072ff 85%, transparent 100%);
          box-shadow: 0 0 14px #ffffff, 0 0 26px #00f0ff, 0 0 42px #0088ff;
          animation: telemetryPulseFlow 2.8s linear infinite;
          pointer-events: none;
          z-index: 50;
        }
        .animate-wifi-burst { animation: wifiPulseBurst 2.8s ease-out infinite; }
        .animate-oval-extract-1 { animation: ovalExtractOutward1 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite; }
        .animate-oval-extract-2 { animation: ovalExtractOutward2 2.8s cubic-bezier(0.2, 0.8, 0.3, 1) infinite; }
        .animate-platform-pulse { animation: ovalPlatformPulse 2.8s ease-out infinite; }
      `}</style>
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top cyan/blue glow */}
        <div
          className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[920px] h-[480px] rounded-full blur-[110px] opacity-55 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 230, 255, 0.45) 0%, rgba(99, 102, 241, 0.22) 50%, transparent 75%)',
          }}
        />

        {/* Lower ground ambient glow */}
        <div
          className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[1020px] h-[440px] rounded-full blur-[100px] opacity-50 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 235, 255, 0.45) 0%, rgba(192, 132, 252, 0.25) 50%, transparent 75%)',
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1020px] flex flex-col items-center">
        {/* =========================================================================
            SECTION A: FOLLOW US HEADING CAPSULE WITH NOTCHED LINES
        ========================================================================= */}
        <div className="relative w-full flex items-center justify-center mb-2 sm:mb-3 animate-follow-header">
          {/* Left Decorative Line with Notch */}
          <div className="hidden sm:flex items-center flex-1 justify-end mr-3 md:mr-5">
            <svg className="w-32 md:w-44 h-5 overflow-visible" viewBox="0 0 170 20" fill="none">
              <defs>
                <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                  <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#2563eb" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
                </linearGradient>
                <filter id="glowLeft" x="-20%" y="-30%" width="140%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 10 10 L 138 10 L 145 4 L 170 4"
                stroke="url(#lineGradLeft)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#glowLeft)"
              />
              <circle cx="10" cy="10" r="3" fill="#38bdf8" filter="url(#glowLeft)" />
            </svg>
          </div>

          {/* Center Capsule Pill */}
          <div className="relative group cursor-default">
            {/* Ambient intense cyan neon glow */}
            <div
              className="absolute -inset-1 rounded-full blur-md opacity-90 transition-opacity duration-500 animate-neon-pulse"
              style={{
                background: 'linear-gradient(90deg, #00f0ff, #38bdf8, #818cf8, #c084fc)',
                filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.95)) drop-shadow(0 0 35px rgba(0, 180, 255, 0.6))',
              }}
            />

            {/* Main Capsule Body */}
            <div
              className="relative flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-12 py-1.5 sm:py-3 rounded-full border-[2.2px] border-cyan-300 shadow-[0_0_22px_rgba(0,240,255,0.95),inset_0_0_14px_rgba(0,240,255,0.55)] transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 20%, #4f46e5 52%, #7c3aed 80%, #9333ea 100%)',
              }}
            >
              {/* Top Glass Highlight */}
              <div className="absolute inset-x-5 top-1 h-[42%] rounded-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

              {/* Users/Group Icon */}
              <div className="relative z-10 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
                <UsersGroupIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Text: Follow-us */}
              <h1 className="relative z-10 text-white font-extrabold text-xl sm:text-3xl tracking-tight drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]">
                {followUsConfig.headerTitle}
              </h1>
            </div>
          </div>

          {/* Right Decorative Line with Notch */}
          <div className="hidden sm:flex items-center flex-1 justify-start ml-3 md:ml-5">
            <svg className="w-32 md:w-44 h-5 overflow-visible" viewBox="0 0 170 20" fill="none">
              <defs>
                <linearGradient id="lineGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" stopOpacity="1" />
                  <stop offset="25%" stopColor="#2563eb" stopOpacity="1" />
                  <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glowRight" x="-20%" y="-30%" width="140%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 2 4 L 27 4 L 34 10 L 160 10"
                stroke="url(#lineGradRight)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#glowRight)"
              />
              <circle cx="160" cy="10" r="3" fill="#38bdf8" filter="url(#glowRight)" />
            </svg>
          </div>
        </div>

        {/* =========================================================================
            DESCRIPTION BLOCK (BELOW HEADING & ABOVE OVAL PLATFORM)
        ========================================================================= */}
        <div className="relative z-20 w-full max-w-[760px] mx-auto px-4 text-center mb-3 sm:mb-4 animate-follow-desc">
          {/* Verified Network Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 mb-2 rounded-full bg-cyan-50/90 border border-cyan-300 text-cyan-800 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
            <span>{followUsConfig.badgeText || 'Official Broadcasting Network'}</span>
          </div>

          {/* Description Text */}
          <p className="text-slate-600 text-xs sm:text-sm md:text-[14px] leading-relaxed font-medium tracking-normal max-w-[680px] mx-auto">
            {followUsConfig.pageDescription ||
              'Stay connected with CR Real Time News Channel across all official social media platforms. Join our verified 24/7 digital broadcasting network for real-time alerts, breaking news headlines, investigative journalism, and direct citizen engagement.'}
          </p>

          {/* Glowing Accent Divider */}
          <div className="w-24 sm:w-36 h-[2px] mx-auto mt-2.5 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(0,240,255,0.7)]" />
        </div>

        {/* =========================================================================
            SECTION B: OVAL GLASS PLATFORM WITH 8 SOCIAL MEDIA ICONS
        ========================================================================= */}
        <div className="relative w-full max-w-[980px] flex flex-col items-center px-1 sm:px-2 animate-follow-platform">
          {/* Ambient Platform Down-Glow */}
          <div
            className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[120px] sm:h-[180px] rounded-[50%] blur-3xl opacity-75 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.55) 0%, rgba(59, 130, 246, 0.28) 45%, transparent 75%)',
            }}
          />

          {/* Outward Extraction Wave 1: Rounded Ring extracts/expands to outside */}
          <div
            className="absolute inset-0 rounded-[50%] pointer-events-none animate-oval-extract-1"
            style={{
              border: '2.5px solid rgba(0, 240, 255, 0.9)',
              boxShadow: '0 0 24px rgba(0, 240, 255, 0.8), inset 0 0 14px rgba(0, 240, 255, 0.4)',
            }}
          />

          {/* Outward Extraction Wave 2: Secondary echoing ring extracts to outside */}
          <div
            className="absolute inset-0 rounded-[50%] pointer-events-none animate-oval-extract-2"
            style={{
              border: '2px solid rgba(56, 189, 248, 0.75)',
              boxShadow: '0 0 32px rgba(37, 99, 235, 0.6), inset 0 0 18px rgba(56, 189, 248, 0.35)',
            }}
          />

          {/* SVG Glowing Double Oval Platform Canvas */}
          <div className="relative w-full aspect-[980/260] sm:aspect-[980/220] md:aspect-[980/190] min-h-[96px] sm:min-h-[140px] md:min-h-[185px] max-h-[190px] flex items-center justify-center animate-platform-pulse">
            {/* The SVG Ellipse Platform */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 980 200"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="neonRimGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.85" />
                  <stop offset="25%" stopColor="#00f5ff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                  <stop offset="75%" stopColor="#00f5ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.85" />
                </linearGradient>

                <linearGradient id="glassFillGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#f0f9ff" stopOpacity="0.75" />
                  <stop offset="75%" stopColor="#e0f2fe" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.7" />
                </linearGradient>

                <filter id="superGlow" x="-20%" y="-40%" width="140%" height="180%">
                  <feGaussianBlur stdDeviation="5" result="blur1" />
                  <feGaussianBlur stdDeviation="15" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="softGlow" x="-10%" y="-20%" width="120%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Underlying Glass Plate */}
              <ellipse cx="490" cy="100" rx="475" ry="90" fill="url(#glassFillGrad)" />

              {/* Outer Glowing Neon Ring */}
              <ellipse
                cx="490"
                cy="100"
                rx="475"
                ry="90"
                stroke="url(#neonRimGrad)"
                strokeWidth="3.8"
                filter="url(#superGlow)"
              />

              {/* Inner Crisp Neon Ring */}
              <ellipse
                cx="490"
                cy="100"
                rx="463"
                ry="80"
                stroke="#00f0ff"
                strokeWidth="1.8"
                strokeOpacity="0.85"
                filter="url(#softGlow)"
              />
            </svg>

            {/* 8 Social Media Icons Horizontal Row with 360° Hover Spin */}
            <div className="relative z-10 w-full px-2 min-[360px]:px-3 min-[400px]:px-4 sm:px-6 md:px-8 flex items-center justify-center gap-1 min-[360px]:gap-1.5 min-[400px]:gap-2 sm:gap-2.5 md:gap-3.5 max-w-[930px]">
              {socialMediaList.map((item, index) => {
                const isHovered = activeIcon === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${item.name}`}
                    onMouseEnter={() => setActiveIcon(item.id)}
                    onMouseLeave={() => setActiveIcon(null)}
                    className="group relative flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full transition-all duration-300 ease-out hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:scale-110 active:scale-95 shrink-0 animate-follow-social"
                    style={{ animationDelay: `${0.32 + index * 0.08}s` }}
                  >
                    {/* Brand Glow Aura */}
                    <div
                      className="absolute inset-0 rounded-full blur-md sm:blur-xl transition-opacity duration-300 pointer-events-none"
                      style={{
                        backgroundColor: item.glowColor,
                        opacity: isHovered ? 0.95 : 0.45,
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      }}
                    />

                    {/* Contact Drop Shadow */}
                    <div
                      className="absolute -bottom-1 sm:-bottom-2 w-6 min-[360px]:w-7 sm:w-10 md:w-12 h-1.5 sm:h-3 rounded-full blur-xs sm:blur-sm transition-all duration-300 pointer-events-none"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        transform: isHovered ? 'scale(1.2) translateY(3px)' : 'scale(1)',
                        opacity: isHovered ? 0.3 : 0.6,
                      }}
                    />

                    {/* 3D Circular Button with 360° Full Rotation on Hover */}
                    <div
                      className="relative w-7.5 h-7.5 min-[360px]:w-8 min-[360px]:h-8 min-[400px]:w-9 min-[400px]:h-9 min-[480px]:w-10 min-[480px]:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[66px] lg:h-[66px] rounded-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[360deg] shadow-md sm:shadow-lg"
                      style={{
                        background: item.gradient,
                        boxShadow: `
                          0 8px 16px -2px ${item.shadowColor},
                          0 3px 5px -1px rgba(0, 0, 0, 0.25),
                          inset 0 2px 4px rgba(255, 255, 255, 0.7),
                          inset 0 -3px 6px rgba(0, 0, 0, 0.38)
                        `,
                      }}
                    >
                      {/* Top Spherical Gloss */}
                      <div className="absolute inset-0 gloss-overlay pointer-events-none" />

                      {/* Top-Left Specular Reflection Dot */}
                      <div className="absolute top-0.5 left-1 sm:top-1 sm:left-2 md:top-1.5 md:left-3 w-1.5 min-[360px]:w-2 sm:w-3 md:w-4 h-0.5 sm:h-1 md:h-1.5 rounded-full bg-white/75 blur-[0.5px] pointer-events-none -rotate-12" />

                      {/* Icon Glyph */}
                      <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        <SocialIcon id={item.id} />
                      </div>
                    </div>

                    {/* Tooltip (Desktop only) */}
                    <div
                      className={`hidden md:block absolute -top-8 px-2 py-0.5 rounded-md text-[10px] font-semibold text-white bg-slate-900/90 backdrop-blur-sm shadow-md pointer-events-none transition-all duration-200 z-30 ${
                        isHovered ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-1'
                      }`}
                    >
                      {item.name}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION C: 100% UNBROKEN BOLD CONNECTION BEAM & WI-FI BADGE
        ========================================================================= */}
        <div className="relative flex flex-col items-center justify-center z-30 w-full max-w-[240px] -mt-1 pointer-events-none animate-follow-beam">
          {/* Top Line Segment (directly connecting oval platform rim to Wi-Fi) */}
          <div className="relative w-2 h-6 sm:h-9 md:h-11 flex flex-col items-center">
            {/* Top Anchor Flare at Oval Rim */}
            <div className="absolute -top-1 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-cyan-200 blur-[1px] shadow-[0_0_16px_#00f0ff,0_0_28px_#38bdf8]" />

            {/* Glowing High-Contrast Outer Line */}
            <div
              className="w-[3px] sm:w-[4px] h-full"
              style={{
                background: 'linear-gradient(180deg, #00f5ff 0%, #0284c7 60%, #0369a1 100%)',
                boxShadow: '0 0 10px #00f0ff, 0 0 20px #0284c7, 0 0 30px rgba(0,240,255,0.7)',
              }}
            />
            {/* Pure White Core Line */}
            <div className="absolute inset-0 w-[1.5px] sm:w-[1.8px] mx-auto bg-white shadow-[0_0_6px_#ffffff]" />
          </div>

          {/* Central Circular Wi-Fi Badge */}
          <div className="relative group cursor-pointer my-0 z-30 pointer-events-auto animate-follow-wifi">
            {/* Outer Pulsing Glow */}
            <div className="absolute -inset-2 sm:-inset-2.5 rounded-full bg-cyan-400 blur-md opacity-90 animate-wifi-burst pointer-events-none" />

            {/* Wi-Fi Orb Body */}
            <div
              className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full flex items-center justify-center border-2 border-cyan-200 shadow-[0_0_20px_rgba(0,240,255,0.85)] animate-wifi-wave"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #00e5ff 0%, #0072ff 55%, #003bbb 100%)',
              }}
            >
              <div className="absolute inset-0 rounded-full gloss-overlay pointer-events-none" />

              {/* Wi-Fi Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 md:w-6.5 md:h-6.5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] translate-y-[-1px]"
              >
                <path d="M12 20h.01" strokeWidth="3.2" />
                <path d="M8.5 16.429a5 5 0 0 1 7 0" />
                <path d="M5 12.859a10 10 0 0 1 14 0" />
                <path d="M1.5 9.288a15 15 0 0 1 21 0" />
              </svg>
            </div>
          </div>

          {/* Bottom Laser Conduit: EXTENDS SEAMLESSLY INTO THE PHONE TOP BEZEL */}
          <div className="relative w-2 h-9 sm:h-13 md:h-[76px] flex flex-col items-center z-20 pointer-events-none -mb-2 sm:-mb-3 md:-mb-4">
            {/* Glowing High-Contrast Outer Line */}
            <div
              className="w-[3px] sm:w-[4px] h-full rounded-full"
              style={{
                background: 'linear-gradient(180deg, #0369a1 0%, #0284c7 40%, #00f5ff 100%)',
                boxShadow: '0 0 10px #00f0ff, 0 0 20px #0284c7, 0 0 30px rgba(0,240,255,0.7)',
              }}
            />
            {/* Solid Pure White Core for maximum visibility */}
            <div className="absolute inset-0 w-[1.5px] sm:w-[1.8px] mx-auto rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
          </div>

          {/* Continuous Upward Telemetry Energy Pulse (Phone -> Wi-Fi -> Top Oval Platform Rim) */}
          <div className="absolute inset-0 w-8 mx-auto pointer-events-none overflow-visible z-40 flex justify-center">
            <div className="telemetry-energy-pulse" />
          </div>
        </div>

        {/* =========================================================================
            SECTION D & E: SMARTPHONE COMPONENT (SEAMLESS INTEGRATION WITH BEAM)
        ========================================================================= */}
        <div className="relative w-full flex items-center justify-center -mt-3 sm:-mt-5 md:-mt-7 z-10 px-2 sm:px-4 animate-follow-phone">
          <Phone3D />
        </div>
      </div>
    </section>
  );
}

export { FollowUs, FollowUs as FollowUsPage };
