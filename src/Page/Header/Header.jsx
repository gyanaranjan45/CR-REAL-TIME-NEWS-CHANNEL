import React, { useState, useEffect, useRef } from 'react';
import { FaXmark } from 'react-icons/fa6';
import {
  Home,
  Zap,
  Megaphone,
  Clock,
  Globe,
  Newspaper,
  FileText,
  Search,
  X,
  Menu,
  ChevronRight,
  Info,
  Briefcase,
  ShieldAlert,
  Tv,
  Radio,
  Calendar,
  GraduationCap,
  Phone,
} from 'lucide-react';
import { breakingHeadlines } from './HeaderData';

// =========================================================================
// 1. SATELLITE TRANSMISSION WAVE LAYER
// =========================================================================
/**
 * SatelliteTransmissionWaveLayer
 * 
 * Compact, Responsive, Slender, and Attractive Animated Transmission Wave Layer
 * Connecting:
 * [News Reporter with Tripod Camera & Mic (Left)]
 *     ===> Refined Electric Neon Cyan Uplink Wave Stream ===>
 * [Orbital Communications Satellite Dish (Top Center)]
 *     ===> Refined Electric Ruby Neon Downlink Wave Stream ===>
 * [Live Broadcast Television Screen with News Anchor (Right)]
 */
export const SatelliteTransmissionWaveLayer = () => {
  // Precision Bezier curves starting outside the reporter image (x >= 275) to prevent any overlap
  const uplinkPath = "M 275 145 C 390 24, 540 24, 690 65";
  const uplinkPathUpper = "M 271 141 C 386 20, 536 20, 687 61";
  const uplinkPathLower = "M 279 149 C 394 28, 544 28, 693 69";

  // Downlink ending before the television screen (x <= 1175) to prevent overlap with the TV anchor
  const downlinkPath = "M 750 65 C 900 24, 1050 24, 1175 145";
  const downlinkPathUpper = "M 753 61 C 904 20, 1054 20, 1179 141";
  const downlinkPathLower = "M 747 69 C 896 28, 1046 28, 1171 149";

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ==================================================== */}
          {/* 1. REFINED CRISP GLOW FILTERS                        */}
          {/* ==================================================== */}
          <filter id="waveGlowCyanSmall" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="1.2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="waveGlowRedSmall" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="1.2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="packetGlowSmall" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ==================================================== */}
          {/* 2. GRADIENTS                                         */}
          {/* ==================================================== */}
          <linearGradient id="uplinkBeamGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#00f0ff" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="downlinkBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.75" />
            <stop offset="25%" stopColor="#ff1744" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#e11d48" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#be123c" stopOpacity="0.4" />
          </linearGradient>

          <radialGradient id="cyanBeaconGradSmall" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="45%" stopColor="#00f0ff" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#00b4d8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0077b6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="rubyBeaconGradSmall" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="45%" stopColor="#ff2a55" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#e11d48" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9f1239" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dynamic Keyframes for Flowing Waves, Micro Beads & Beacons */}
        <style>{`
          @keyframes uplinkMicroBeadsAnim {
            0% {
              stroke-dashoffset: 40;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }

          @keyframes downlinkMicroBeadsAnim {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -40;
            }
          }

          @keyframes uplinkDashLaser {
            0% {
              stroke-dashoffset: 80;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }

          @keyframes downlinkDashLaser {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -80;
            }
          }

          @keyframes rfCompactRippleLeft {
            0% {
              opacity: 0.9;
              transform: scale(0.95);
            }
            50% {
              opacity: 0.3;
              transform: scale(1.08);
            }
            100% {
              opacity: 0.9;
              transform: scale(0.95);
            }
          }

          @keyframes rfCompactRippleRight {
            0% {
              opacity: 0.9;
              transform: scale(0.95);
            }
            50% {
              opacity: 0.3;
              transform: scale(1.08);
            }
            100% {
              opacity: 0.9;
              transform: scale(0.95);
            }
          }

          @keyframes starFlareRotateSmall {
            0% {
              transform: scale(0.85) rotate(0deg);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.2) rotate(90deg);
              opacity: 1;
            }
            100% {
              transform: scale(0.85) rotate(180deg);
              opacity: 0.8;
            }
          }

          .anim-uplink-micro-beads {
            animation: uplinkMicroBeadsAnim 1.1s linear infinite;
          }

          .anim-downlink-micro-beads {
            animation: downlinkMicroBeadsAnim 1.1s linear infinite;
          }

          .anim-uplink-laser-fast {
            animation: uplinkDashLaser 1.2s linear infinite;
          }

          .anim-downlink-laser-fast {
            animation: downlinkDashLaser 1.2s linear infinite;
          }

          .anim-rf-left-compact {
            animation: rfCompactRippleLeft 2s ease-in-out infinite;
            transform-origin: 690px 65px;
          }

          .anim-rf-right-compact {
            animation: rfCompactRippleRight 2s ease-in-out infinite 0.35s;
            transform-origin: 750px 65px;
          }

          .anim-dish-star-small {
            animation: starFlareRotateSmall 3.2s ease-in-out infinite;
            transform-origin: 720px 65px;
          }
        `}</style>

        {/* ==================================================== */}
        {/* WAVE 1: LEFT UPLINK (Reporter Camera -> Satellite)    */}
        {/* ==================================================== */}

        {/* 1A. Slender Luminous Ambient Cyan Aura */}
        <path
          d={uplinkPath}
          fill="none"
          stroke="#00d4ff"
          strokeWidth="9"
          vectorEffect="non-scaling-stroke"
          opacity="0.20"
          filter="url(#waveGlowCyanSmall)"
        />

        {/* 1B. Slender Energy Conduit Sheath */}
        <path
          d={uplinkPath}
          fill="none"
          stroke="url(#uplinkBeamGrad)"
          strokeWidth="3.2"
          vectorEffect="non-scaling-stroke"
          opacity="0.75"
          filter="url(#waveGlowCyanSmall)"
        />

        {/* 1C. Upper Precision Filament Laser */}
        <path
          d={uplinkPathUpper}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.2"
          strokeDasharray="12 16"
          vectorEffect="non-scaling-stroke"
          className="anim-uplink-laser-fast"
          opacity="0.75"
        />

        {/* 1D. Lower Precision Filament Laser */}
        <path
          d={uplinkPathLower}
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1.2"
          strokeDasharray="8 12"
          vectorEffect="non-scaling-stroke"
          className="anim-uplink-laser-fast"
          opacity="0.75"
        />

        {/* 1E. Core White Laser Centerline */}
        <path
          d={uplinkPath}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeDasharray="20 18"
          vectorEffect="non-scaling-stroke"
          className="anim-uplink-laser-fast"
          opacity="0.9"
        />

        {/* 1F. REFINED GLOWING MICRO DATA BEAD TRAIN (● ● ● ● ● ● ● ●) */}
        <path
          d={uplinkPath}
          fill="none"
          stroke="#00f0ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="0.1 20"
          vectorEffect="non-scaling-stroke"
          className="anim-uplink-micro-beads"
          filter="url(#waveGlowCyanSmall)"
          opacity="0.92"
        />
        <path
          d={uplinkPath}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="0.1 20"
          vectorEffect="non-scaling-stroke"
          className="anim-uplink-micro-beads"
          opacity="1"
        />

        {/* 1G. Compact High-Velocity Photon Packets (<animateMotion>) */}
        {[0, 0.35, 0.70, 1.05].map((delay, idx) => (
          <g key={`uplink-packet-small-${idx}`}>
            <circle r="3.8" fill="#00d4ff" filter="url(#packetGlowSmall)" opacity="0.85">
              <animateMotion
                path={uplinkPath}
                dur="1.4s"
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </circle>
            <circle r="2" fill="#00f0ff">
              <animateMotion
                path={uplinkPath}
                dur="1.4s"
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </circle>
            <circle r="1" fill="#ffffff">
              <animateMotion
                path={uplinkPath}
                dur="1.4s"
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </circle>
          </g>
        ))}

        {/* ==================================================== */}
        {/* WAVE 2: RIGHT DOWNLINK (Satellite -> TV Screen)      */}
        {/* ==================================================== */}

        {/* 2A. Slender Luminous Ambient Crimson Aura */}
        <path
          d={downlinkPath}
          fill="none"
          stroke="#ff1744"
          strokeWidth="9"
          vectorEffect="non-scaling-stroke"
          opacity="0.20"
          filter="url(#waveGlowRedSmall)"
        />

        {/* 2B. Slender Energy Conduit Sheath */}
        <path
          d={downlinkPath}
          fill="none"
          stroke="url(#downlinkBeamGrad)"
          strokeWidth="3.2"
          vectorEffect="non-scaling-stroke"
          opacity="0.75"
          filter="url(#waveGlowRedSmall)"
        />

        {/* 2C. Upper Precision Filament Laser */}
        <path
          d={downlinkPathUpper}
          fill="none"
          stroke="#fb7185"
          strokeWidth="1.2"
          strokeDasharray="12 16"
          vectorEffect="non-scaling-stroke"
          className="anim-downlink-laser-fast"
          opacity="0.75"
        />

        {/* 2D. Lower Precision Filament Laser */}
        <path
          d={downlinkPathLower}
          fill="none"
          stroke="#ff2a55"
          strokeWidth="1.2"
          strokeDasharray="8 12"
          vectorEffect="non-scaling-stroke"
          className="anim-downlink-laser-fast"
          opacity="0.75"
        />

        {/* 2E. Core White Laser Centerline */}
        <path
          d={downlinkPath}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeDasharray="20 18"
          vectorEffect="non-scaling-stroke"
          className="anim-downlink-laser-fast"
          opacity="0.9"
        />

        {/* 2F. REFINED GLOWING MICRO DATA BEAD TRAIN (● ● ● ● ● ● ● ●) */}
        <path
          d={downlinkPath}
          fill="none"
          stroke="#ff1744"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="0.1 20"
          vectorEffect="non-scaling-stroke"
          className="anim-downlink-micro-beads"
          filter="url(#waveGlowRedSmall)"
          opacity="0.92"
        />
        <path
          d={downlinkPath}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="0.1 20"
          vectorEffect="non-scaling-stroke"
          className="anim-downlink-micro-beads"
          opacity="1"
        />

        {/* 2G. Compact High-Velocity Photon Packets (<animateMotion>) */}
        {[0.08, 0.43, 0.78, 1.13].map((delay, idx) => (
          <g key={`downlink-packet-small-${idx}`}>
            <circle r="3.8" fill="#ff1744" filter="url(#packetGlowSmall)" opacity="0.85">
              <animateMotion
                path={downlinkPath}
                dur="1.4s"
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </circle>
            <circle r="2" fill="#ff2a55">
              <animateMotion
                path={downlinkPath}
                dur="1.4s"
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </circle>
            <circle r="1" fill="#ffffff">
              <animateMotion
                path={downlinkPath}
                dur="1.4s"
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
            </circle>
          </g>
        ))}

        {/* ==================================================== */}
        {/* 3. REFINED CONCENTRIC RADIO FREQUENCY (RF) WAVES     */}
        {/* ==================================================== */}

        {/* Left-Facing Cyan RF Signal Waves */}
        <g className="anim-rf-left-compact">
          <path
            d="M 664 48 A 26 26 0 0 0 660 84"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="1.8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.85"
            filter="url(#waveGlowCyanSmall)"
          />
          <path
            d="M 648 40 A 42 42 0 0 0 642 94"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="1.4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.75"
            filter="url(#waveGlowCyanSmall)"
          />
        </g>

        {/* Right-Facing Red RF Signal Waves */}
        <g className="anim-rf-right-compact">
          <path
            d="M 776 48 A 26 26 0 0 1 780 84"
            fill="none"
            stroke="#ff1744"
            strokeWidth="1.8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.85"
            filter="url(#waveGlowRedSmall)"
          />
          <path
            d="M 792 40 A 42 42 0 0 1 798 94"
            fill="none"
            stroke="#ff1744"
            strokeWidth="1.4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.75"
            filter="url(#waveGlowRedSmall)"
          />
        </g>

        {/* ==================================================== */}
        {/* 4. REFINED SIGNAL BEACONS & SPARKLE HUBS             */}
        {/* ==================================================== */}

        {/* 4A. Left Field Emitter (Positioned cleanly outside the reporter image) */}
        <g transform="translate(275, 145)">
          <circle r="5" fill="url(#cyanBeaconGradSmall)" />
          <circle r="2.2" fill="#00f0ff" filter="url(#packetGlowSmall)" />
          <circle r="1" fill="#ffffff" />
          <circle r="2.5" fill="none" stroke="#00e5ff" strokeWidth="1">
            <animate attributeName="r" from="2.5" to="11" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.9" to="0" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* 4B. Satellite Communications Transponder Core */}
        <g transform="translate(720, 65)">
          <circle r="6" fill="#ffffff" opacity="0.3" filter="url(#packetGlowSmall)" />
          <circle r="2.6" fill="#ffffff" />
          
          <g className="anim-dish-star-small">
            <line x1="-9" y1="0" x2="9" y2="0" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
            <line x1="0" y1="-9" x2="0" y2="9" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
            <line x1="-5" y1="-5" x2="5" y2="5" stroke="#38bdf8" strokeWidth="0.8" opacity="0.75" />
            <line x1="-5" y1="5" x2="5" y2="-5" stroke="#ff4d6d" strokeWidth="0.8" opacity="0.75" />
          </g>
        </g>

        {/* 4C. Right Reception Hub (Positioned cleanly before the TV monitor screen) */}
        <g transform="translate(1175, 145)">
          <circle r="5" fill="url(#rubyBeaconGradSmall)" />
          <circle r="2.2" fill="#ff1744" filter="url(#packetGlowSmall)" />
          <circle r="1" fill="#ffffff" />
          <circle r="2.5" fill="none" stroke="#ff2a55" strokeWidth="1">
            <animate attributeName="r" from="2.5" to="11" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" from="0.9" to="0" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

// =========================================================================
// 2. CR REALTIME 3D LOGO
// =========================================================================
export const CRRealtimeLogo = ({ className = "w-full max-w-[500px] h-auto" }) => {
  // CR letters (arriving from the RIGHT side OUTSIDE the screen as requested)
  const crLetters = [
    { char: 'C', x: 4, width: 54, delay: '0.06s' },
    { char: 'R', x: 58, width: 54, delay: '0.14s' },
  ];

  // REALTIME letters (arriving from the LEFT side OUTSIDE the screen ONE BY ONE as requested)
  const realtimeLetters = [
    { char: 'R', x: 116, width: 47.7, delay: '0.04s' },
    { char: 'E', x: 163.7, width: 44.3, delay: '0.09s' },
    { char: 'A', x: 208, width: 47.7, delay: '0.14s' },
    { char: 'L', x: 255.8, width: 37.8, delay: '0.19s' },
    { char: 'T', x: 293.6, width: 44.3, delay: '0.24s' },
    { char: 'I', x: 337.9, width: 23.9, delay: '0.29s' },
    { char: 'M', x: 361.8, width: 57.9, delay: '0.34s' },
    { char: 'E', x: 419.7, width: 44.3, delay: '0.39s' },
  ];

  return (
    <div className={`relative inline-block select-none overflow-visible ${className}`} style={{ overflow: 'visible' }}>
      <svg
        viewBox="0 0 470 96"
        className="w-full h-auto overflow-visible"
        style={{ overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ==================================================== */}
          {/* 1. GRADIENTS                                          */}
          {/* ==================================================== */}

          {/* CR 3D Red Gradient Face */}
          <linearGradient id="crRedFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff2837" />
            <stop offset="28%" stopColor="#de1321" />
            <stop offset="68%" stopColor="#9a0913" />
            <stop offset="100%" stopColor="#500207" />
          </linearGradient>

          {/* CR Specular Top Sheen */}
          <linearGradient id="crTopSheenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#ff9da4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#de1321" stopOpacity="0" />
          </linearGradient>

          {/* REALTIME Deep Metallic Navy Gradient Face */}
          <linearGradient id="realtimeNavyFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#224578" />
            <stop offset="26%" stopColor="#122d56" />
            <stop offset="65%" stopColor="#081938" />
            <stop offset="100%" stopColor="#020815" />
          </linearGradient>

          {/* Blue Laser Streak Beam Gradient */}
          <linearGradient id="blueLaserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="20%" stopColor="#00d4ff" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </linearGradient>

          {/* Red Ribbon Gradient (NEWS CHANNELS) */}
          <linearGradient id="ribbonRedGradExact" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#990812" />
            <stop offset="15%" stopColor="#d91220" />
            <stop offset="60%" stopColor="#eb1725" />
            <stop offset="100%" stopColor="#ba0c16" />
          </linearGradient>

          {/* Ribbon Top Bevel Highlight */}
          <linearGradient id="ribbonTopBevelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff858e" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffaab0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ff707a" stopOpacity="0.3" />
          </linearGradient>

          {/* ==================================================== */}
          {/* 2. FILTERS (GLOW & SHADOW)                           */}
          {/* ==================================================== */}

          {/* White Starburst Glint Filter */}
          <filter id="whiteGlintGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Intense Blue Electric Flare Filter */}
          <filter id="blueFlareGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle 3D Typography Drop Shadow */}
          <filter id="logoDropShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="1.8" floodColor="#000000" floodOpacity="0.35" />
          </filter>

          {/* Ribbon Shadow */}
          <filter id="ribbonPlaqueShadow" x="-10%" y="-20%" width="120%" height="150%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* ==================================================== */}
        {/* ROW 1: "CR REALTIME" 3D METALLIC HEADLINE            */}
        {/* All letters come one after another and merge in mid  */}
        {/* ==================================================== */}

        {/* --- CR LETTERS (Red 3D metallic face, arriving from RIGHT SIDE) --- */}
        {crLetters.map((item) => (
          <g
            key={`cr-${item.char}-${item.x}`}
            className="animate-cr-from-right"
            style={{ animationDelay: item.delay }}
          >
            {/* Extrusion Depth Layer */}
            <text
              x={item.x}
              y="57"
              fill="#380105"
              fontSize="56"
              fontWeight="900"
              fontStyle="italic"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              textLength={item.width}
              lengthAdjust="spacingAndGlyphs"
            >
              {item.char}
            </text>

            {/* Main Face Layer */}
            <text
              x={item.x}
              y="55"
              fill="url(#crRedFaceGrad)"
              fontSize="56"
              fontWeight="900"
              fontStyle="italic"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              textLength={item.width}
              lengthAdjust="spacingAndGlyphs"
              filter="url(#logoDropShadow)"
            >
              {item.char}
            </text>

            {/* Top Rim Stroke */}
            <text
              x={item.x}
              y="55"
              fill="none"
              stroke="url(#crTopSheenGrad)"
              strokeWidth="0.8"
              fontSize="56"
              fontWeight="900"
              fontStyle="italic"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              textLength={item.width}
              lengthAdjust="spacingAndGlyphs"
            >
              {item.char}
            </text>
          </g>
        ))}

        {/* --- REALTIME LETTERS (Deep Metallic Navy, arriving from LEFT SIDE ONE BY ONE) --- */}
        {realtimeLetters.map((item) => (
          <g
            key={`rt-${item.char}-${item.x}`}
            className="animate-realtime-from-left"
            style={{ animationDelay: item.delay }}
          >
            {/* Extrusion Depth Layer */}
            <text
              x={item.x}
              y="57"
              fill="#00040d"
              fontSize="56"
              fontWeight="900"
              fontStyle="italic"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              textLength={item.width}
              lengthAdjust="spacingAndGlyphs"
            >
              {item.char}
            </text>

            {/* Main Face Layer */}
            <text
              x={item.x}
              y="55"
              fill="url(#realtimeNavyFaceGrad)"
              fontSize="56"
              fontWeight="900"
              fontStyle="italic"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              textLength={item.width}
              lengthAdjust="spacingAndGlyphs"
              filter="url(#logoDropShadow)"
            >
              {item.char}
            </text>

            {/* Top Metallic Rim Edge */}
            <text
              x={item.x}
              y="55"
              fill="none"
              stroke="#3d6ba7"
              strokeWidth="0.65"
              strokeOpacity="0.5"
              fontSize="56"
              fontWeight="900"
              fontStyle="italic"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              textLength={item.width}
              lengthAdjust="spacingAndGlyphs"
            >
              {item.char}
            </text>
          </g>
        ))}

        {/* --- Electric Blue Laser Beam across REALTIME (Sweeps right as letters merge) --- */}
        <g className="animate-laser-wipe">
          <rect
            x="122"
            y="35"
            width="336"
            height="3.5"
            rx="1.75"
            fill="url(#blueLaserBeamGrad)"
            filter="url(#blueFlareGlow)"
          />

          {/* Thin high-intensity center core white streak */}
          <rect
            x="145"
            y="36"
            width="290"
            height="1.2"
            rx="0.6"
            fill="#ffffff"
            opacity="0.9"
          />
        </g>

        {/* --- Star Flare Sparkles (Ignites right when letters merge) --- */}
        <g className="animate-sparkle-burst">
          {/* Star Flare 1: Left Burst at R-E Junction */}
          <circle cx="168" cy="36" r="3.2" fill="#ffffff" filter="url(#whiteGlintGlow)" />
          <ellipse cx="168" cy="36" rx="26" ry="1.2" fill="#ffffff" opacity="0.9" />
          <ellipse cx="168" cy="36" rx="1.2" ry="16" fill="#ffffff" opacity="0.9" />
          <line x1="160" y1="28" x2="176" y2="44" stroke="#93c5fd" strokeWidth="0.8" opacity="0.7" />
          <line x1="160" y1="44" x2="176" y2="28" stroke="#93c5fd" strokeWidth="0.8" opacity="0.7" />

          {/* Center Sparkle */}
          <circle cx="376" cy="36" r="2.8" fill="#ffffff" filter="url(#whiteGlintGlow)" />
          <ellipse cx="376" cy="36" rx="22" ry="1" fill="#bae6fd" opacity="0.85" />
          <ellipse cx="376" cy="36" rx="1" ry="14" fill="#bae6fd" opacity="0.85" />

          {/* Star Flare 2: Top Right Burst on Letter E */}
          <circle cx="442" cy="18" r="12" fill="#00d4ff" opacity="0.28" filter="url(#blueFlareGlow)" />
          <circle cx="442" cy="18" r="3.8" fill="#ffffff" filter="url(#whiteGlintGlow)" />
          <ellipse cx="442" cy="18" rx="32" ry="1.4" fill="#ffffff" />
          <ellipse cx="442" cy="18" rx="1.4" ry="20" fill="#ffffff" />
          <line x1="433" y1="9" x2="451" y2="27" stroke="#7dd3fc" strokeWidth="1" opacity="0.8" />
          <line x1="433" y1="27" x2="451" y2="9" stroke="#7dd3fc" strokeWidth="1" opacity="0.8" />
        </g>

        {/* ==================================================== */}
        {/* ROW 2: SLANTED CRIMSON RED "NEWS CHANNELS" RIBBON    */}
        {/* Animated: Snaps into position below the headline      */}
        {/* ==================================================== */}

        <g className="animate-ribbon-slam" filter="url(#ribbonPlaqueShadow)">
          {/* Slanted Parallelogram Plaque (from x≈104 to x≈380 at y=64, and x≈94 to x≈370 at y=91) */}
          <path
            d="M 104 64 L 380 64 L 370 91 L 94 91 Z"
            fill="url(#ribbonRedGradExact)"
          />

          {/* Top Bevel Highlight Edge */}
          <path
            d="M 104 64 L 380 64 L 379 66 L 103 66 Z"
            fill="url(#ribbonTopBevelGrad)"
          />

          {/* Bottom Dark Under-Edge */}
          <path
            d="M 94 91 L 370 91 L 369 89.5 L 95 89.5 Z"
            fill="#450206"
          />

          {/* Slanted White Slash Cut 1 (Left) */}
          <path
            d="M 372 65 L 375 65 L 366 90 L 363 90 Z"
            fill="#ffffff"
            opacity="0.95"
          />

          {/* Slanted White Slash Cut 2 (Right) */}
          <path
            d="M 380 65 L 386 65 L 377 90 L 371 90 Z"
            fill="#ffffff"
            opacity="0.9"
          />
        </g>

        {/* ==================================================== */}
        {/* ROW 3: "NEWS" (from Top outside of the nav)           */}
        {/*       "CHANNELS" (from Bottom outside to the nav)    */}
        {/* ==================================================== */}

        {/* "NEWS": Comes from TOP outside of the nav */}
        <g className="animate-news-from-top">
          <text
            x="170"
            y="82"
            fill="#ffffff"
            fontSize="15"
            fontWeight="900"
            fontStyle="italic"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            textAnchor="middle"
            textLength="92"
            lengthAdjust="spacingAndGlyphs"
            letterSpacing="0.22em"
          >
            NEWS
          </text>
        </g>

        {/* "CHANNELS": Comes from BOTTOM outside to the nav */}
        <g className="animate-channel-from-bottom">
          <text
            x="286"
            y="82"
            fill="#ffffff"
            fontSize="15"
            fontWeight="900"
            fontStyle="italic"
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            textAnchor="middle"
            textLength="130"
            lengthAdjust="spacingAndGlyphs"
            letterSpacing="0.22em"
          >
            CHANNELS
          </text>
        </g>
      </svg>
    </div>
  );
};

// =========================================================================
// 3. BROADCAST WELCOME MESSAGE BANNER
// =========================================================================
export const WelcomeHeaderMessage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Handle smooth dismissal
  const handleClose = () => {
    setIsVisible(false);
    // Remove completely from DOM after smooth slide-up animation (700ms)
    setTimeout(() => {
      setIsRendered(false);
    }, 700);
  };

  // Dynamic time-of-day greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    if (hour >= 17 && hour < 22) return 'Good Evening';
    return 'Welcome';
  };

  const greeting = getGreeting();

  // 5-second countdown timer with pause-on-hover capability
  useEffect(() => {
    if (!isVisible || isPaused) return;

    timerRef.current = setInterval(() => {
      clearInterval(timerRef.current);
      handleClose();
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [isVisible, isPaused]);

  if (!isRendered) return null;

  return (
    <div
      className={`w-full transition-all duration-700 ease-in-out relative z-50 select-none overflow-hidden ${
        isVisible
          ? 'max-h-16 opacity-100 translate-y-0'
          : 'max-h-0 opacity-0 -translate-y-full pointer-events-none'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      title={isPaused ? 'Auto-dismiss paused while hovering' : 'Will auto-dismiss in seconds'}
    >
      {/* Broadcast Welcome Ribbon */}
      <div className="w-full bg-gradient-to-r from-[#020713] via-[#091b3b] to-[#020713] text-white border-b border-red-500/50 shadow-md relative overflow-hidden px-3 sm:px-6 py-2 sm:py-2.5">
        
        {/* Subtle Background Scanline Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 3px)'
          }}
        />

        {/* Ambient Studio Spotlight Glow */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 500px 35px at 50% 50%, rgba(220, 38, 38, 0.25) 0%, transparent 75%)'
          }}
        />

        <div className="max-w-[1580px] mx-auto flex items-center justify-between gap-3 relative z-10">
          
          {/* Left Side: Welcome Badge & Animated Wave/Greeting */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {/* Red Broadcast Welcome Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#d91b24] text-white px-2.5 py-0.5 rounded-full text-[9px] sm:text-[9.5px] font-black tracking-wider uppercase shadow-xs flex-shrink-0 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>WELCOME</span>
            </div>

            {/* Main Welcome Message */}
            <div className="flex items-center gap-1 text-[11px] sm:text-xs md:text-[13px] text-white min-w-0 overflow-hidden">
              <span className="font-semibold text-slate-100 hidden sm:inline whitespace-nowrap">
                {greeting}! Welcome to
              </span>
              <span className="font-semibold text-slate-100 sm:hidden whitespace-nowrap">
                Welcome to
              </span>
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 truncate">
                CR Realtime News
              </span>
              <span className="hidden sm:inline font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-amber-300">
                Channels
              </span>
              <span className="hidden lg:inline text-slate-300 font-normal truncate">
                — India & Global 24/7 Verified Live Broadcast Network.
              </span>
            </div>
          </div>

          {/* Right Side: Status Badge, Countdown & Close Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* High-Tech Live Satellite Status Indicator */}
            <div className="hidden sm:inline-flex items-center gap-1.5 text-[8.5px] font-mono tracking-wider text-emerald-400 bg-emerald-950/50 border border-emerald-500/40 px-2 py-0.5 rounded-xs shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="uppercase font-bold">LIVE ON AIR</span>
            </div>

            {/* Countdown / Dismiss Timer Hint */}
            <span className="hidden md:inline text-[9px] text-slate-400 font-mono">
              {isPaused ? '(Paused)' : `(Auto-closing)`}
            </span>

            {/* Quick Close Button */}
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-white hover:bg-slate-800/80 p-1 sm:p-1.5 rounded-full transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Close welcome message"
              title="Close message"
            >
              <FaXmark className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Glowing Auto-Dismiss Countdown Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800/80 overflow-hidden pointer-events-none">
          <div 
            className={`h-full bg-gradient-to-r from-red-600 via-amber-400 to-sky-400 ${
              isPaused ? '' : 'animate-welcome-progress'
            }`} 
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          />
        </div>

      </div>
    </div>
  );
};

// =========================================================================
// 4. TOP BREAKING NEWS BAR (60 HEADLINES WITH DIRECTIONAL STREAM)
// =========================================================================
export const BreakingNewsBar = ({ onTabChange }) => {
  // 1. Dynamic Live Real-Time Date & Clock (Updates every second)
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const mobileDate = currentDateTime.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });

  const mobileTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  // 2. Breaking News Headlines Sequence (60 items imported from HeaderData)
  const headlines = breakingHeadlines;

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 5-Step Directional Entrance Animation Sequence:
  // 1. Left outside of screen
  // 2. Top outside of screen
  // 3. Bottom outside of header
  // 4. Right outside of header
  // 5. Back (zoom in from depth) and placed in position
  const animSequence = [
    { name: 'From Left', className: 'animate-news-from-left', icon: '←' },
    { name: 'From Top', className: 'animate-news-from-top-bar', icon: '↓' },
    { name: 'From Bottom', className: 'animate-news-from-bottom-bar', icon: '↑' },
    { name: 'From Right', className: 'animate-news-from-right-bar', icon: '→' },
    { name: 'From Back', className: 'animate-news-from-back', icon: '⤢' },
  ];

  const currentAnim = animSequence[currentNewsIndex % animSequence.length];
  const currentHeadline = headlines[currentNewsIndex];
  const words = currentHeadline.text.split(' ');

  // Sequence-wise interval: 4.2 seconds per headline (words stream in ~1.1s, then glide & reading time)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % headlines.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPaused, headlines.length]);

  return (
    <div className="w-full bg-gradient-to-r from-slate-100 via-[#f8fafc] to-slate-100 text-slate-800 border-b border-slate-200/90 py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 text-xs font-sans relative z-40 select-none overflow-hidden shadow-xs">
      
      {/* 1. TOP BROADCAST ACCENT LINE (High-energy red-sky-red dual telemetry hairline) */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600 via-sky-500 to-red-600 opacity-90 z-20 pointer-events-none" />

      {/* 2. AUTHENTIC LIGHT BROADCAST NEWS BACKGROUND GRAPHICS & TEXTURES */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* A. Live Studio Soft Radiant Glows (Soft red at LIVE badge, Sky-blue across ticker) */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: `
              radial-gradient(ellipse 280px 42px at 100px 50%, rgba(220, 38, 38, 0.10) 0%, rgba(220, 38, 38, 0.02) 60%, transparent 80%),
              radial-gradient(ellipse 520px 42px at 55% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 75%)
            `
          }}
        />

        {/* B. Broadcast TV Monitor Scanlines Texture (Subtle light mode grid) */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #0f172a 0px, #0f172a 1px, transparent 1px, transparent 3px)'
          }}
        />

        {/* C. Holographic News Globe Watermark */}
        <div className="absolute right-[24%] top-1/2 -translate-y-1/2 w-[150px] h-[50px] opacity-[0.14] overflow-hidden flex items-center justify-center">
          <img 
            src="/globe-with-rings-transparent.png" 
            alt="" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(2,132,199,0.3)] brightness-95" 
          />
        </div>

        {/* D. Vector World Map Matrix & Global News Network Grid (Light Theme) */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-55" 
          preserveAspectRatio="none" 
          viewBox="0 0 1600 44"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Latitude Grid Lines with coordinate markings */}
          <line x1="0" y1="10" x2="1600" y2="10" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.25" />
          <line x1="0" y1="22" x2="1600" y2="22" stroke="#94a3b8" strokeWidth="0.6" strokeDasharray="6 8" opacity="0.35" />
          <line x1="0" y1="34" x2="1600" y2="34" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.25" />

          {/* Longitude Cross markers */}
          <path d="M200 8v6 M200 30v6 M400 8v6 M400 30v6 M600 8v6 M600 30v6 M800 8v6 M800 30v6 M1000 8v6 M1000 30v6 M1200 8v6 M1200 30v6 M1400 8v6 M1400 30v6" stroke="#94a3b8" strokeWidth="0.7" opacity="0.25" />

          {/* Continents Matrix Dots (Global News World Map Silhouette in Sky Blue & Slate) */}
          {/* North America */}
          <g fill="#0284c7" opacity="0.6">
            <circle cx="160" cy="11" r="1.3" /><circle cx="170" cy="10" r="1.2" /><circle cx="180" cy="12" r="1.4" />
            <circle cx="195" cy="11" r="1.4" /><circle cx="210" cy="13" r="1.5" /><circle cx="218" cy="12" r="1.2" /><circle cx="226" cy="15" r="1.5" /><circle cx="236" cy="14" r="1.4" />
            <circle cx="205" cy="17" r="1.3" /><circle cx="215" cy="18" r="1.5" /><circle cx="225" cy="19" r="1.6" /><circle cx="235" cy="17" r="1.4" /><circle cx="245" cy="18" r="1.3" />
            <circle cx="220" cy="23" r="1.5" /><circle cx="228" cy="25" r="1.4" /><circle cx="236" cy="27" r="1.3" />
          </g>

          {/* South America */}
          <g fill="#0284c7" opacity="0.55">
            <circle cx="255" cy="29" r="1.4" /><circle cx="265" cy="30" r="1.5" /><circle cx="275" cy="31" r="1.4" />
            <circle cx="260" cy="34" r="1.5" /><circle cx="270" cy="35" r="1.6" /><circle cx="280" cy="36" r="1.4" />
            <circle cx="265" cy="38" r="1.3" /><circle cx="272" cy="40" r="1.2" />
          </g>

          {/* Europe */}
          <g fill="#0284c7" opacity="0.65">
            <circle cx="670" cy="12" r="1.4" /><circle cx="680" cy="11" r="1.5" /><circle cx="692" cy="10" r="1.4" /><circle cx="704" cy="12" r="1.3" />
            <circle cx="675" cy="16" r="1.3" /><circle cx="685" cy="15" r="1.5" /><circle cx="696" cy="16" r="1.6" /><circle cx="708" cy="15" r="1.5" />
            <circle cx="682" cy="19" r="1.4" /><circle cx="694" cy="20" r="1.5" /><circle cx="705" cy="21" r="1.4" />
          </g>

          {/* Africa */}
          <g fill="#475569" opacity="0.5">
            <circle cx="680" cy="25" r="1.4" /><circle cx="692" cy="24" r="1.5" /><circle cx="705" cy="25" r="1.6" /><circle cx="718" cy="26" r="1.4" />
            <circle cx="688" cy="29" r="1.5" /><circle cx="700" cy="30" r="1.6" /><circle cx="712" cy="31" r="1.5" />
            <circle cx="695" cy="35" r="1.4" /><circle cx="706" cy="36" r="1.5" /><circle cx="714" cy="38" r="1.3" />
          </g>

          {/* Asia & Middle East */}
          <g fill="#0284c7" opacity="0.7">
            <circle cx="750" cy="18" r="1.4" /><circle cx="765" cy="19" r="1.5" /><circle cx="780" cy="18" r="1.3" />
            <circle cx="820" cy="13" r="1.4" /><circle cx="840" cy="12" r="1.5" /><circle cx="860" cy="14" r="1.3" /><circle cx="880" cy="13" r="1.4" />
            <circle cx="900" cy="15" r="1.5" /><circle cx="920" cy="14" r="1.4" /><circle cx="940" cy="16" r="1.5" /><circle cx="960" cy="15" r="1.4" />
            
            {/* India & South Asia Prominent Cluster */}
            <circle cx="930" cy="21" r="1.6" /><circle cx="942" cy="23" r="1.8" /><circle cx="952" cy="21" r="1.5" />
            <circle cx="936" cy="26" r="1.7" /><circle cx="946" cy="27" r="1.8" />
            <circle cx="940" cy="31" r="1.5" />

            {/* East Asia & China */}
            <circle cx="1020" cy="15" r="1.5" /><circle cx="1040" cy="14" r="1.6" /><circle cx="1060" cy="16" r="1.4" />
            <circle cx="1010" cy="19" r="1.4" /><circle cx="1030" cy="20" r="1.5" /><circle cx="1050" cy="22" r="1.6" />
            <circle cx="1025" cy="25" r="1.3" /><circle cx="1045" cy="26" r="1.4" />
            {/* Japan */}
            <circle cx="1085" cy="16" r="1.4" /><circle cx="1092" cy="19" r="1.5" /><circle cx="1098" cy="22" r="1.4" />
          </g>

          {/* Australia & Oceania */}
          <g fill="#0284c7" opacity="0.6">
            <circle cx="1180" cy="30" r="1.5" /><circle cx="1195" cy="29" r="1.6" /><circle cx="1210" cy="31" r="1.5" /><circle cx="1225" cy="32" r="1.4" />
            <circle cx="1188" cy="35" r="1.4" /><circle cx="1202" cy="36" r="1.6" /><circle cx="1216" cy="35" r="1.5" />
          </g>

          {/* Satellite Telemetry Transmission Arcs */}
          <path d="M225 19 Q450 5 685 15" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.45" />
          <path d="M685 15 Q810 6 942 23" stroke="#dc2626" strokeWidth="0.9" strokeDasharray="4 4" opacity="0.6" />
          <path d="M942 23 Q1020 9 1092 19" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.45" />
          <path d="M1092 19 Q1150 24 1202 36" stroke="#0284c7" strokeWidth="0.7" strokeDasharray="3 4" opacity="0.4" />

          {/* News Hub Beacons (Pulsing node points) */}
          <circle cx="225" cy="19" r="2.2" fill="#0284c7" />
          <circle cx="685" cy="15" r="2.2" fill="#0284c7" />
          
          {/* New Delhi / Bhubaneswar Hub (Highlighted Red & Amber) */}
          <circle cx="942" cy="23" r="3" fill="#dc2626" />
          <circle cx="942" cy="23" r="6" stroke="#f59e0b" strokeWidth="0.8" opacity="0.8" />
          
          <circle cx="1092" cy="19" r="2.2" fill="#0284c7" />
          <circle cx="1202" cy="36" r="2.2" fill="#0284c7" />

          {/* Broadcast Audio Waveform Spectrum (Bottom Center) */}
          <g opacity="0.35" fill="#0284c7">
            <rect x="740" y="32" width="1.5" height="4" rx="0.5" />
            <rect x="744" y="30" width="1.5" height="6" rx="0.5" />
            <rect x="748" y="27" width="1.5" height="9" rx="0.5" />
            <rect x="752" y="31" width="1.5" height="5" rx="0.5" />
            <rect x="756" y="26" width="1.5" height="10" rx="0.5" fill="#dc2626" />
            <rect x="760" y="28" width="1.5" height="8" rx="0.5" />
            <rect x="764" y="30" width="1.5" height="6" rx="0.5" />
            <rect x="768" y="32" width="1.5" height="4" rx="0.5" />
          </g>
        </svg>

        {/* E. Broadcast Radar Scan Beam (Sweeps slowly across background every 10s) */}
        <div className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-sky-400/15 to-transparent animate-radar-beam pointer-events-none" />

        {/* F. Newsroom Watermark Micro-Ticker Ribbon (Seamless Crawl along the bottom) */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-30 pointer-events-none select-none">
          <div className="animate-micro-ticker text-[7.5px] font-mono tracking-[0.25em] text-slate-500 uppercase font-semibold">
            <span className="pr-12">
              CR REALTIME NEWS DESK • 24/7 GLOBAL SATELLITE DISPATCH • LIVE BROADCASTING NETWORK • BREAKING COVERAGE • WORLDWIDE TRANSMISSION • ASIA • EUROPE • AMERICAS • AFRICA •
            </span>
            <span className="pr-12">
              CR REALTIME NEWS DESK • 24/7 GLOBAL SATELLITE DISPATCH • LIVE BROADCASTING NETWORK • BREAKING COVERAGE • WORLDWIDE TRANSMISSION • ASIA • EUROPE • AMERICAS • AFRICA •
            </span>
          </div>
        </div>

      </div>

      <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-1.5 md:gap-4 relative z-10">
        
        {/* ========================================================================= */}
        {/* MOBILE-ONLY TOP METADATA ROW: [● LIVE] + Clock (Left) | Location + Follow Us (Right) */}
        {/* ========================================================================= */}
        <div className="flex md:hidden items-center justify-between w-full text-slate-700 pb-1.5 border-b border-slate-200/80 px-0.5">
          {/* Left: LIVE Pill Badge + Realtime Compact Clock */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="inline-flex items-center gap-1 bg-[#d91b24] text-white px-1.5 py-0.5 rounded-full text-[8px] font-black tracking-wider uppercase shadow-xs flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>LIVE</span>
            </div>
            <div className="flex items-center gap-1 text-[8.5px] text-slate-700 font-mono font-semibold whitespace-nowrap">
              <span className="text-slate-900 font-bold">{mobileTime}</span>
              <span className="text-slate-400 font-normal">|</span>
              <span className="text-slate-600">{mobileDate}</span>
            </div>
          </div>

          {/* Right: Location & Compact Follow Us Button (NO SOCIAL MEDIA ICONS ON MOBILE) */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="flex items-center gap-0.5 text-slate-700 font-bold text-[9px] whitespace-nowrap">
              <svg className="w-3 h-3 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>Bhubaneswar</span>
            </div>
            <button
              type="button"
              onClick={() => {
                if (onTabChange) onTabChange('Follow Us', '#follow-us');
              }}
              className="inline-flex items-center gap-1 text-[8.5px] font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 px-2 py-0.5 rounded-md shadow-xs active:scale-95 cursor-pointer whitespace-nowrap"
              title="Follow Us"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Follow Us</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN TICKER ROW: FULL WIDTH FOR HEADLINE ON MOBILE, FLEX ROW ON DESKTOP    */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 w-full min-w-0 flex-1 relative overflow-hidden">
          
          {/* Desktop-Only Left Unit: [● LIVE] Badge + Stacked Date & Time */}
          <div className="hidden md:flex flex-col items-start justify-center flex-shrink-0 relative z-30 bg-gradient-to-r from-slate-100/95 via-slate-50/90 to-transparent pr-2.5 pl-1 py-0.5 rounded-r-md">
            <div className="inline-flex items-center gap-1.5 bg-[#d91b24] text-white px-2.5 py-0.5 rounded-full text-[9px] sm:text-[9.5px] font-black tracking-wider uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>LIVE</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] sm:text-[9px] text-slate-600 font-medium tracking-tight mt-0.5 whitespace-nowrap">
              <span className="text-slate-700 font-semibold">{formattedDate}</span>
              <span className="text-slate-400">|</span>
              <span className="text-[#d91b24] font-mono font-bold tracking-normal">{formattedTime}</span>
            </div>
          </div>

          {/* Desktop-Only Vertical Divider (Illuminated broadcast accent line) */}
          <div className="hidden md:block w-[1px] h-7 bg-gradient-to-b from-transparent via-red-500/70 to-transparent mx-0.5 sm:mx-1 flex-shrink-0 relative z-30" />

          {/* Breaking News Interactive Area */}
          <div 
            className="flex items-start md:items-center gap-1.5 sm:gap-2 min-w-0 flex-1 relative cursor-pointer py-0.5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            title="Hover to pause headline"
          >
            {/* Desktop-Only Breaking News Label Header */}
            <div className="hidden md:flex items-center gap-1.5 bg-gradient-to-r from-slate-50/90 to-transparent pr-1.5 sm:pr-2 pl-0.5 sm:pl-1 flex-shrink-0 relative z-30">
              <span className="text-[#d91b24] font-black tracking-wider text-[11.5px] sm:text-[12px] uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d91b24] animate-ping" />
                Breaking News:
              </span>
            </div>

            {/* Complete News Message with Category Badge (Full View on Mobile with Flex-Wrap) */}
            <div 
              key={`news-${currentNewsIndex}`}
              className="flex flex-wrap md:flex-nowrap items-center gap-x-1 gap-y-0.5 min-w-0 text-[10.5px] xs:text-[11px] sm:text-[11.5px] relative z-20 flex-1 leading-snug"
            >
              {/* Category Badge: Arrives with direction animation at delay 0s */}
              <span 
                className={`bg-red-50 text-[#d91b24] border border-red-500/40 px-1.5 py-0.5 rounded text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider flex-shrink-0 shadow-2xs inline-block mr-0.5 ${currentAnim.className}`}
                style={{ animationDelay: '0s' }}
              >
                {currentHeadline.category}
              </span>

              {/* Complete Headline Words: Arrive one by one from respective side and place themselves */}
              {words.map((word, wIdx) => (
                <span
                  key={`word-${currentNewsIndex}-${wIdx}`}
                  className={`inline-block font-medium text-slate-900 tracking-normal whitespace-nowrap ${currentAnim.className}`}
                  style={{
                    animationDelay: `${0.04 + wIdx * 0.038}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* DESKTOP-ONLY RIGHT SIDE: Uplink + Sequence Counter (60 News) + Location   */}
        {/* ========================================================================= */}
        <div className="hidden md:flex items-center justify-end gap-2.5 sm:gap-3 text-[11px] sm:text-[11.5px] text-slate-700 flex-shrink-0 relative z-30 bg-gradient-to-l from-slate-100/95 via-slate-50/90 to-transparent pl-3 pr-1 py-0.5 rounded-l-md">
          
          {/* Live Satellite Uplink Indicator */}
          <div className="hidden 2xl:flex items-center gap-1.5 text-[8px] font-mono tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-400/50 px-2 py-0.5 rounded-xs shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase font-bold tracking-widest">UPLINK ACTIVE</span>
          </div>

          {/* Location: Bhubaneswar, Odisha */}
          <div className="flex items-center gap-1.5 text-slate-700 bg-white/80 border border-slate-200/80 px-2.5 py-0.5 rounded-md shadow-2xs flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-red-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span className="font-bold text-slate-800 whitespace-nowrap text-[11px] sm:text-[11.5px]">Bhubaneswar, Odisha</span>
          </div>

          {/* Follow Us Button (Positioned at the Right Side of Location) */}
          <button
            type="button"
            onClick={() => {
              if (onTabChange) {
                onTabChange('Follow Us', '#follow-us');
              }
            }}
            className="group flex items-center gap-1.5 text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-red-500/80 px-2.5 sm:px-3 py-0.5 rounded-md shadow-xs text-[10.5px] sm:text-[11px] font-bold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer flex-shrink-0"
            title="Follow CR Real Time News Channel on Social Media"
            aria-label="Follow Us"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="whitespace-nowrap">Follow Us</span>
            <svg className="w-3 h-3 text-white/90 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>
    </div>
  );
};

// =========================================================================
// 4B. DEDICATED ANIMATED VECTOR ICONS (E-BOOK OPEN/CLOSE & GALLERY SLIDE)
// =========================================================================

/**
 * AnimatedBookIcon
 * 3D Book that folds its left and right pages together at the spine to close,
 * and unfolds them back wide to open.
 */
export const AnimatedBookIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`overflow-visible ${className}`}
    {...props}
  >
    {/* Center Spine */}
    <path d="M12 7v14" className="book-spine-svg" />

    {/* Left Page (Folds inward to spine to close, unfolds to open) */}
    <g className="book-page-left-group">
      <path d="M12 7a4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3V7z" />
    </g>

    {/* Right Page (Folds inward to spine to close, unfolds to open) */}
    <g className="book-page-right-group">
      <path d="M12 7a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3V7z" />
    </g>
  </svg>
);

/**
 * AnimatedGalleryIcon
 * Photo card slides diagonally inside/under the fixed left corner sleeve line,
 * pauses snugly inside, and then slides back out proudly.
 */
export const AnimatedGalleryIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`overflow-visible ${className}`}
    {...props}
  >
    {/* Fixed Left Line Bracket Sleeve (M18 22H4a2 2 0 0 1-2-2V6) */}
    <path d="M18 22H4a2 2 0 0 1-2-2V6" className="gallery-holder-bracket" />

    {/* Front Photo Card (Slides inside the left line and comes back out!) */}
    <g className="gallery-slide-photo-card">
      <rect width="16" height="16" x="6" y="2" rx="2" />
      <circle cx="12" cy="8" r="2" />
      <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
    </g>
  </svg>
);

// =========================================================================
// 5. CR REALTIME NEWS HEADER
// =========================================================================
export const CRNewsHeader = ({ activeTab: externalActiveTab, onTabChange }) => {
  const [internalActiveTab, setInternalActiveTab] = useState('Home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoAnimKey, setLogoAnimKey] = useState(0);

  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;

  const handleTabClick = (tabName, href) => {
    if (onTabChange) {
      onTabChange(tabName, href);
    } else {
      setInternalActiveTab(tabName);
      if (href) {
        window.location.hash = href;
      }
    }
    setMobileMenuOpen(false);
  };

  // 1. LEFT SIDE ICON MENU (4 items requested with tailored hover rotation animations)
  const leftIconItems = [
    {
      name: 'Breaking News',
      label: 'BREAKING NEWS',
      href: '#breaking-news',
      icon: Zap,
      hasPulse: true,
      badge: 'FLASH',
      animClass: 'animate-icon-stagger-1-left',
      hoverAnimClass: 'animate-hover-zap',
    },
    {
      name: 'Headline News',
      label: 'HEADLINE NEWS',
      href: '#headline-news',
      icon: Megaphone,
      hasPulse: false,
      badge: null,
      animClass: 'animate-icon-stagger-2-left',
      hoverAnimClass: 'animate-hover-megaphone',
    },
    {
      name: 'Latest News',
      label: 'LATEST NEWS',
      href: '#latest-news',
      icon: Clock,
      hasPulse: false,
      badge: null,
      animClass: 'animate-icon-stagger-3-left',
      hoverAnimClass: 'animate-hover-clock',
    },
    {
      name: 'News',
      label: 'NEWS',
      href: '#news',
      icon: Globe,
      hasPulse: false,
      badge: null,
      animClass: 'animate-icon-stagger-4-left',
      hoverAnimClass: 'animate-hover-globe',
    },
  ];

  // 2. RIGHT SIDE ICON MENU (4 items requested with tailored hover rotation animations)
  const rightIconItems = [
    {
      name: 'E-Newspaper',
      label: 'E-NEWSPAPER',
      href: '#e-newspaper',
      icon: Newspaper,
      hasPulse: false,
      badge: null,
      animClass: 'animate-icon-stagger-1-right',
      hoverAnimClass: 'animate-hover-newspaper',
    },
    {
      name: 'Article',
      label: 'ARTICLE',
      href: '#article',
      icon: FileText,
      hasPulse: false,
      badge: null,
      animClass: 'animate-icon-stagger-2-right',
      hoverAnimClass: 'animate-hover-article',
    },
    {
      name: 'E-Book',
      label: 'E-BOOK',
      href: '#e-book',
      icon: AnimatedBookIcon,
      hasPulse: false,
      badge: null,
      animClass: 'animate-icon-stagger-3-right',
      hoverAnimClass: 'animate-hover-book',
    },
    {
      name: 'Gallery',
      label: 'GALLERY',
      href: '#gallery',
      icon: AnimatedGalleryIcon,
      hasPulse: false,
      badge: null,
      animClass: 'animate-icon-stagger-4-right',
      hoverAnimClass: 'animate-hover-gallery',
    },
  ];

  // 3. MAIN NAVIGATION MENU (10 items in exact requested order)
  const mainNavItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About Us', href: '#about-us', icon: Info },
    { name: 'Our Services', href: '#our-services', icon: Briefcase },
    { name: 'Grievance', href: '#grievance', icon: ShieldAlert },
    { name: 'Live TV', href: '#live-tv', icon: Tv },
    { name: 'Advertise With Us', href: '#advertise-with-us', icon: Megaphone },
    { name: 'Media Coverage', href: '#media-coverage', icon: Radio },
    { name: 'Events & Programs', href: '#events-programs', icon: Calendar },
    { name: 'Career', href: '#career', icon: GraduationCap },
    { name: 'Contact Us', href: '#contact-us', icon: Phone },
  ];

  return (
    <header className="w-full relative select-none shadow-md bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Dynamic Live Animated Transmission Wave Layer (Layered behind watermark images & text) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <SatelliteTransmissionWaveLayer />
      </div>

      {/* Broadcast Satellite Transmission Background */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
        {/* Orbital Satellite in Top-Center Sky with Perfect Fit (Soft Watermark Opacity) */}
        <div className="absolute top-0.5 sm:top-1 md:top-1.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-20 sm:opacity-35 transition-opacity duration-300">
          <img
            src="/satellite-clean-hd.png"
            alt="Orbital News Satellite"
            className="h-14 sm:h-22 md:h-25 lg:h-28 xl:h-30 w-auto object-contain object-top select-none drop-shadow-[0_4px_16px_rgba(0,180,216,0.12)] filter contrast-95"
            draggable="false"
          />
        </div>

        {/* Soft radial readability mask for center text */}
        <div className="absolute inset-0 bg-radial-to-c from-white/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Header Content Container */}
      <div className="relative w-full z-10">
        {/* Full-width container: Top Row spans edge-to-edge, Navigation bar centered */}
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 pt-2 sm:pt-2.5 pb-2 relative z-10">
          
          {/* Top Center-Anchored Header Block */}
          <div className="w-full flex flex-col items-center justify-center relative">
            
            {/* Main Visual Row: Responsive Flex Layout on Mobile, Absolute Pinned on Desktop */}
            <div className="w-full flex items-center justify-between sm:justify-center relative min-h-[52px] sm:min-h-[76px] px-1 sm:px-0">
              
              {/* Far Left: 3D CR NEWS CHANNEL Logo (Flex item on mobile; Pinned to Far Left on Desktop) */}
              <div className="flex sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 items-center justify-start z-10 flex-shrink-0 animate-logo-from-left">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick('Home', '#home');
                  }}
                  className="inline-flex items-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
                  title="CR News Channel Home"
                >
                  <img
                    src="/logo.png"
                    alt="CR News Channel Logo"
                    className="h-11 xs:h-12 sm:h-[66px] md:h-[74px] lg:h-[80px] xl:h-[84px] w-auto max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(8,37,86,0.20)]"
                    draggable="false"
                  />
                </a>
              </div>

              {/* Center Flanking Group: Left 4 Icons | CR REALTIME Logo | Right 4 Icons (100% Dead Center) */}
              <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 z-10 flex-1 sm:flex-initial mx-1 sm:mx-0 min-w-0">
                
                {/* 1. LEFT SIDE ICON MENU (Breaking News, Headline News, Latest News, News) - Equal 4-Column Grid */}
                <div className="hidden sm:grid grid-cols-4 items-center justify-items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 w-[280px] sm:w-[310px] md:w-[340px] lg:w-[365px] xl:w-[380px] flex-shrink-0">
                  {leftIconItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(item.name, item.href);
                        }}
                        className={`w-full flex flex-col items-center justify-center group cursor-pointer px-0.5 py-0.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${item.animClass}`}
                        title={item.name}
                        aria-label={item.name}
                      >
                        <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 md:w-9.5 md:h-9.5 lg:w-10 lg:h-10 rounded-xl bg-white/95 hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(238,27,28,0.22)] border border-slate-200/80 hover:border-red-500/50 flex items-center justify-center transition-all duration-200 relative backdrop-blur-xs flex-shrink-0">
                          <IconComponent className={`w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 text-[#082556] group-hover:text-[#ee1b1c] transition-colors origin-center ${item.hoverAnimClass}`} />
                          
                          {/* Pulsing Live Beacon for Breaking News */}
                          {item.hasPulse && (
                            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#ee1b1c] border-2 border-white shadow-xs"></span>
                            </span>
                          )}

                          {/* Tiny Red Pill Badge */}
                          {item.badge && (
                            <span className="absolute -bottom-1 px-1 py-[0.5px] bg-[#ee1b1c] text-white text-[5.5px] sm:text-[6px] font-black rounded-xs tracking-tighter shadow-xs">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[6.5px] sm:text-[7px] md:text-[7.5px] lg:text-[8px] xl:text-[8.5px] font-black text-[#082556] group-hover:text-[#ee1b1c] tracking-tight uppercase mt-1 font-['Montserrat',sans-serif] transition-colors text-center whitespace-nowrap">
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </div>

                {/* Center Vector Logo: CR REALTIME NEWS CHANNELS (Scales cleanly on mobile) */}
                <div 
                  onClick={() => setLogoAnimKey((k) => k + 1)}
                  title="Click to replay animation"
                  className="w-full max-w-[155px] xs:max-w-[180px] sm:max-w-[210px] md:max-w-[240px] lg:max-w-[270px] xl:max-w-[300px] flex-shrink-0 cursor-pointer overflow-visible"
                >
                  <CRRealtimeLogo key={`cr-logo-anim-${logoAnimKey}`} />
                </div>

                {/* 2. RIGHT SIDE ICON MENU (E-Newspaper, Article, E-Book, Gallery) - Identical Equal 4-Column Grid */}
                <div className="hidden sm:grid grid-cols-4 items-center justify-items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 w-[280px] sm:w-[310px] md:w-[340px] lg:w-[365px] xl:w-[380px] flex-shrink-0">
                  {rightIconItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(item.name, item.href);
                        }}
                        className={`w-full flex flex-col items-center justify-center group cursor-pointer px-0.5 py-0.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${item.animClass}`}
                        title={item.name}
                        aria-label={item.name}
                      >
                        <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 md:w-9.5 md:h-9.5 lg:w-10 lg:h-10 rounded-xl bg-white/95 hover:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(238,27,28,0.22)] border border-slate-200/80 hover:border-red-500/50 flex items-center justify-center transition-all duration-200 relative backdrop-blur-xs flex-shrink-0">
                          <IconComponent className={`w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 text-[#082556] group-hover:text-[#ee1b1c] transition-colors origin-center ${item.hoverAnimClass}`} />
                        </div>
                        <span className="text-[6.5px] sm:text-[7px] md:text-[7.5px] lg:text-[8px] xl:text-[8.5px] font-black text-[#082556] group-hover:text-[#ee1b1c] tracking-tight uppercase mt-1 font-['Montserrat',sans-serif] transition-colors text-center whitespace-nowrap">
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </div>

              </div>

              {/* Far Right: 3D Microphone & Newspaper Graphic (Flex item on mobile; Pinned on Desktop) */}
              <div className="flex sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 items-center justify-end z-10 flex-shrink-0 animate-logo-from-right">
                <a 
                  href="#about-us" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick('About Us', '#about-us');
                  }}
                  className="inline-flex items-center cursor-pointer transition-transform hover:scale-105 active:scale-95" 
                  title="About CR Realtime News Desk"
                >
                  <img
                    src="/news-mic-newspaper.png"
                    alt="News Microphone and Newspaper"
                    className="h-10 xs:h-11 sm:h-[52px] md:h-[60px] lg:h-[66px] xl:h-[72px] w-auto max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(238,27,28,0.18)]"
                    draggable="false"
                  />
                </a>
              </div>

            </div>

            {/* Slogan Line 1: Real News | Real People | A Better Tomorrow */}
            <p className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-xs lg:text-[12.5px] font-black text-[#061e47] tracking-tight sm:tracking-wide mt-1.5 sm:mt-2 flex items-center justify-center flex-wrap drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              <span className="animate-slogan-from-left">Real News</span>
              <span className="mx-1 text-slate-300 animate-slogan-center-pop">|</span>
              <span className="animate-slogan-center-pop">Real People</span>
              <span className="mx-1 text-slate-300 animate-slogan-center-pop">|</span>
              <span className="animate-slogan-from-right">A Better Tomorrow</span>
            </p>

            {/* Slogan Line 2: Balanced descriptive tagline (Full sentence without cutoff, sharp high contrast) */}
            <p className="text-[9px] xs:text-[9.5px] sm:text-[10.5px] md:text-[11px] text-slate-700 font-semibold w-full max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mt-0.5 leading-snug animate-description-fade-up text-center px-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              Bringing You the Latest News, In-Depth Analysis and Stories That Matter from India and Around the World.
            </p>

          </div>

          {/* 3. MAIN NAVIGATION MENU (Fixed Dark Navy Navigation Bar with Mic-to-Boom Expansion) */}
          <div className="w-full flex justify-center mt-2 sm:mt-2.5 px-2 sm:px-4 relative z-20">
            <nav 
              key={`navbar-boom-${logoAnimKey}`}
              className="w-full max-w-[1040px] lg:max-w-[1160px] xl:max-w-[1260px] 2xl:max-w-[1340px] bg-[#051329] text-white rounded-xl sm:rounded-2xl p-1 sm:p-1.5 shadow-xl flex items-center justify-between border border-blue-950/70 relative overflow-hidden animate-navbar-boom-expand"
            >
              {/* Central Broadcast Mic / Boom Pod (Visible during initial refresh, expands into navbar) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 animate-mic-pod-fade flex items-center justify-center">
                {/* Shockwave Rings on Boom */}
                <div className="absolute -inset-2 rounded-full border border-red-500/80 animate-boom-shockwave pointer-events-none" />
                <div className="absolute -inset-4 rounded-full border border-cyan-400/60 animate-boom-shockwave pointer-events-none" style={{ animationDelay: '0.42s' }} />

                {/* Compact Mic / Boom Pod with Live Acoustic Audio Bars */}
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#e01923] via-[#d91b24] to-[#b7121a] text-white px-2.5 py-1 rounded-full shadow-[0_0_20px_rgba(224,25,35,0.85)] border border-red-300/50 whitespace-nowrap">
                  <Megaphone className="w-3.5 h-3.5 text-white animate-pulse" />
                  <div className="flex items-center gap-0.5 ml-0.5">
                    <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" />
                    <span className="w-0.5 h-3.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.12s' }} />
                    <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.24s' }} />
                  </div>
                </div>
              </div>

              {/* Main Nav Bar Content (Reveals smoothly as the box expands to full width) */}
              <div className="w-full flex items-center justify-between animate-nav-content-reveal min-w-0">
                
                {/* All 10 Navigation Items Displayed on Desktop */}
                <div className="hidden lg:flex items-center justify-between flex-1 px-1 sm:px-2 gap-0.5 xl:gap-1 2xl:gap-1.5 min-w-0">
                  {mainNavItems.map((item, index) => {
                    const delay = `${0.75 + index * 0.035}s`;
                    const isActive = activeTab === item.name;
                    const IconComponent = item.icon;

                    return (
                      <div key={item.name} className="overflow-hidden py-0.5 flex-shrink-0">
                        <div 
                          className="animate-nav-link-rise"
                          style={{ animationDelay: delay }}
                        >
                          <button
                            onClick={() => handleTabClick(item.name, item.href)}
                            className={`flex items-center gap-1.5 px-2 sm:px-2.5 lg:px-2 xl:px-3 py-1.5 rounded-lg sm:rounded-xl text-[11px] lg:text-[11.5px] xl:text-[12.5px] font-bold cursor-pointer transition-all duration-150 whitespace-nowrap active:scale-95 ${
                              isActive
                                ? 'bg-gradient-to-r from-[#e01923] to-[#b7121a] hover:from-[#eb242e] hover:to-[#c4151e] text-white shadow-md shadow-red-500/30'
                                : 'text-slate-200 hover:text-white hover:bg-white/10'
                            }`}
                            title={item.name}
                            aria-label={item.name}
                          >
                            {item.name === 'Home' && (
                              <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                            )}
                            <span className="tracking-wide">{item.name}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tablet Navigation View (md:flex lg:hidden) - Home + Active item indicator + Horizontal Scroll */}
                <div className="hidden md:flex lg:hidden items-center flex-1 overflow-x-auto no-scrollbar gap-1 px-1">
                  {mainNavItems.map((item) => {
                    const isActive = activeTab === item.name;
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleTabClick(item.name, item.href)}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-[#e01923] to-[#b7121a] text-white shadow-xs'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {item.name === 'Home' && <IconComponent className="w-3.5 h-3.5" />}
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Mobile Left Indicator (Under md) - Home Pill */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => handleTabClick('Home', '#home')}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-[#e01923] to-[#b7121a] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md shadow-red-500/30"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>{activeTab === 'Home' ? 'Home' : activeTab}</span>
                  </button>
                </div>

                {/* Right Button: Red Pill with Search Icon + Mobile Hamburger */}
                <div className="relative flex items-center gap-1.5 sm:gap-2 flex-shrink-0 ml-1">
                  
                  {/* Search Button */}
                  <div className="overflow-hidden py-0.5 flex-shrink-0">
                    <div 
                      className="animate-nav-link-rise"
                      style={{ animationDelay: '1.12s' }}
                    >
                      <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        aria-label="Search CR Realtime news"
                        title="Search News"
                        className="w-7 h-7 sm:w-8 sm:h-8 lg:w-8.5 lg:h-8.5 bg-gradient-to-r from-[#e01923] to-[#b7121a] hover:from-[#eb242e] hover:to-[#c4151e] active:scale-95 text-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md shadow-red-500/30 flex-shrink-0 cursor-pointer transition-all duration-150"
                      >
                        <Search className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile & Tablet Hamburger Toggle */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden w-7 h-7 sm:w-8 sm:h-8 text-slate-300 hover:text-white flex items-center justify-center p-1 rounded-lg border border-slate-700 bg-slate-900/60 cursor-pointer"
                    aria-label="Toggle navigation menu"
                    title="Open Navigation Menu"
                  >
                    {mobileMenuOpen ? (
                      <X className="w-4 h-4 text-white" />
                    ) : (
                      <Menu className="w-4 h-4 text-slate-300" />
                    )}
                  </button>

                  {/* Search Dropdown Popover */}
                  {searchOpen && (
                    <div className="absolute right-0 top-full mt-2 w-64 sm:w-72 bg-white border border-slate-200 rounded-xl shadow-2xl p-2.5 z-50 flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Search CR Realtime news..."
                        autoFocus
                        className="w-full text-xs px-3 py-2 outline-none bg-slate-50 text-slate-800 rounded-lg placeholder-slate-400 border border-slate-200 focus:border-red-500 font-medium"
                      />
                      <button
                        onClick={() => setSearchOpen(false)}
                        className="text-slate-400 hover:text-slate-700 text-xs p-1 cursor-pointer"
                        title="Close Search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                </div>

              </div>

            </nav>
          </div>

          {/* Responsive Mobile Drawer Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 bg-white/98 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-2xl space-y-3 z-50 animate-welcome-slide-down">
              
              {/* Quick Icons Strip for Mobile (Left 4 + Right 4) */}
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2 px-1">
                  Quick Broadcast Desks
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {[...leftIconItems, ...rightIconItems].map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleTabClick(item.name, item.href)}
                        className="flex flex-col items-center p-1.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-red-50 text-[#082556] group-hover:text-red-600 flex items-center justify-center transition-colors">
                          <IconComp className={`w-4 h-4 origin-center ${item.hoverAnimClass}`} />
                        </div>
                        <span className="text-[8px] font-bold text-slate-700 group-hover:text-red-600 mt-1 truncate max-w-[65px] text-center">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* All 10 Main Navigation Items for Mobile */}
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1.5 px-1">
                  Main Navigation (10 Channels)
                </span>
                <div className="space-y-1">
                  {mainNavItems.map((item) => {
                    const IconComp = item.icon;
                    const isActive = activeTab === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleTabClick(item.name, item.href)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-sm'
                            : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </header>
  );
};

// =========================================================================
// 6. MAIN EXPORTED HEADER COMPONENT
// =========================================================================
export const Header = ({ activeTab, onTabChange }) => {
  return (
    <>
      {/* 0. Broadcast Welcome Message (Appears on refresh, auto-dismisses) */}
      <WelcomeHeaderMessage />

      {/* 1. Top Breaking News Bar */}
      <BreakingNewsBar onTabChange={onTabChange} />

      {/* 2. Main Header */}
      <CRNewsHeader activeTab={activeTab} onTabChange={onTabChange} />
    </>
  );
};

export default Header;
