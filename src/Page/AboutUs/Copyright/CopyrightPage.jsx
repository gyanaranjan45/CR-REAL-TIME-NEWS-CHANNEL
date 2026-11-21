import React from 'react';
import POLICY_DESIGNS_16, { COPYRIGHT_PAGE_META } from './CopyrightPageData.js';

/**
 * Exact Pixel-Perfect Orbital Logo Component
 * Tightened viewBox (65 20 440 245) removes unused white space so the design renders significantly larger.
 * Staged Reload Animation: First Circle -> Second Circle -> Text & Badge
 */
function OrbitalDesignLogo({ item, index = 0, id = "default" }) {
  const gradId = `orbit-grad-${id}`;
  const baseDelay = index * 60 + 80;
  const outerDelay = `${baseDelay}ms`;
  const innerDelay = `${baseDelay + 220}ms`;
  const textDelay = `${baseDelay + 440}ms`;

  return (
    <svg
      viewBox="65 20 440 245"
      className="w-full h-auto max-w-[360px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[460px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.03)]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id={gradId} x1="15%" y1="85%" x2="85%" y2="15%">
          {item.stops.map((stop, i) => (
            <stop key={i} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
      </defs>

      {/* 1. FIRST CIRCLE (OUTER ARCS + OUTER PLANET/ORBIT DOTS) - ENTERS FIRST */}
      <g
        className="anim-first-circle"
        style={{
          animationDelay: outerDelay,
          transformOrigin: '175.5px 154.5px',
          transformBox: 'view-box'
        }}
      >
        <path
          d="M 104.56,220.65 A 97.00,97.00 0 0,1 153.68,59.99"
          stroke={`url(#${gradId})`}
          strokeWidth="10.5"
          strokeLinecap="butt"
        />
        <path
          d="M 231.14,75.04 A 97.00,97.00 0 0,1 267.75,124.53"
          stroke={`url(#${gradId})`}
          strokeWidth="10.5"
          strokeLinecap="butt"
        />
        <path
          d="M 261.93,198.54 A 97.00,97.00 0 0,1 131.46,240.93"
          stroke={`url(#${gradId})`}
          strokeWidth="10.5"
          strokeLinecap="butt"
        />
        <circle cx="195" cy="56" r="27.5" fill={`url(#${gradId})`} />
        <circle cx="118" cy="233" r="12.2" fill={`url(#${gradId})`} />
      </g>

      {/* 2. SECOND CIRCLE (INNER ARCS + 3 INNER ORBIT DOTS) - ENTERS SECOND */}
      <g
        className="anim-second-circle"
        style={{
          animationDelay: innerDelay,
          transformOrigin: '175.5px 154.5px',
          transformBox: 'view-box'
        }}
      >
        <g className="inner-orbit-circle">
          {/* Upper Inner Arc */}
          <path
            d="M 127.08,132.94 A 53.00,53.00 0 0,1 198.73,106.86"
            stroke={`url(#${gradId})`}
            strokeWidth="8.5"
            strokeLinecap="butt"
          />
          {/* Lower Inner Arc */}
          <path
            d="M 196.21,203.29 A 53.00,53.00 0 0,1 123.66,165.52"
            stroke={`url(#${gradId})`}
            strokeWidth="8.5"
            strokeLinecap="butt"
          />
          {/* 3 Inner Orbit Dots */}
          <circle cx="122" cy="150" r="11.5" fill={`url(#${gradId})`} />
          <circle cx="210" cy="112" r="7.5" fill={`url(#${gradId})`} />
          <circle cx="204" cy="200" r="6.5" fill={`url(#${gradId})`} />
        </g>
      </g>

      {/* 3. WRITTEN CONTENT & BADGE ("USKE BAD JO LIKHA HE VO AYEGA") - ENTERS THIRD */}
      <g
        className="anim-text-block"
        style={{
          animationDelay: textDelay,
          transformOrigin: '146px 154.5px',
          transformBox: 'view-box'
        }}
      >
        {/* Main Title */}
        <text
          x="146"
          y="140"
          dominantBaseline="central"
          fill="#000000"
          fontSize={item.fontSize}
          fontWeight="800"
          fontFamily="'Inter', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="0.04em"
        >
          {item.title}
        </text>

        {/* COPYRIGHT Capsule Badge */}
        <g>
          {/* Themed Dark Capsule Pill Background */}
          <rect
            x="146"
            y="164"
            width="124"
            height="27"
            rx="13.5"
            fill={item.pillBg}
          />
          {/* Themed Vibrant Indicator Dot */}
          <circle cx="161" cy="177.5" r="4.5" fill={item.pillDot} />
          {/* Bold White COPYRIGHT Text */}
          <text
            x="172.5"
            y="178.5"
            dominantBaseline="central"
            fill="#FFFFFF"
            fontSize="12.5"
            fontWeight="800"
            fontFamily="'Inter', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="0.09em"
          >
            {COPYRIGHT_PAGE_META.defaultBadgeText || "COPYRIGHT"}
          </text>
        </g>
      </g>
    </svg>
  );
}

/**
 * Main CopyRight Page Component
 * Contains:
 * 1. Heading ("Copy Right") with reload fade-down animation
 * 2. Description
 * 3. 16 Policy Designations with 3-stage reload animation (First Circle -> Second Circle -> Text)
 * 4. Responsive grid showing exactly 2 items per line on mobile, 3 on tablet, 4 on desktop
 */
export default function CopyRight() {
  return (
    <div className="min-h-screen w-full bg-white text-[#1E293B] antialiased select-none font-sans pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-12 md:pb-16 px-2.5 sm:px-6 lg:px-8">
      <div className="max-w-[1560px] mx-auto flex flex-col items-center">
        {/* ========================================================= */}
        {/* PAGE HEADING & DESCRIPTION (HEADER ENTRANCE ANIMATION)    */}
        {/* ========================================================= */}
        <header className="animate-page-header w-full text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B192C] tracking-tight uppercase">
            {COPYRIGHT_PAGE_META.heading}
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed px-2">
            {COPYRIGHT_PAGE_META.description}
          </p>
        </header>

        {/* ========================================================= */}
        {/* 16 DESIGNS (MOBILE: 2 PER LINE, DESKTOP: 4 PER LINE)       */}
        {/* STAGED RELOAD: FIRST CIRCLE -> SECOND CIRCLE -> TEXT       */}
        {/* HOVER EFFECT: INNER CIRCLE ROTATES SMOOTHLY               */}
        {/* ========================================================= */}
        <main className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-10">
            {POLICY_DESIGNS_16.map((item, index) => (
              <div
                key={item.id}
                className="group w-full flex items-center justify-center p-1 sm:p-2 md:p-3 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <OrbitalDesignLogo item={item} index={index} id={`policy-${item.id}`} />
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Page Reload Staggered Keyframe Animations & Hover Rotation */}
      <style>{`
        /* Header Drop-in */
        @keyframes headerEntrance {
          0% {
            opacity: 0;
            transform: translateY(-24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* STAGE 1: First Circle Entrance (Scale & Fade In) */
        @keyframes firstCirclePop {
          0% {
            opacity: 0;
            transform: scale(0.65);
          }
          70% {
            opacity: 1;
            transform: scale(1.04);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* STAGE 2: Second Circle Entrance (Inner Circle pops in with spin) */
        @keyframes secondCirclePop {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-45deg);
          }
          75% {
            opacity: 1;
            transform: scale(1.08) rotate(6deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* STAGE 3: Text & Badge Entrance (Slide & Fade in from Right to Left) */
        @keyframes textSlideFade {
          0% {
            opacity: 0;
            transform: translateX(38px);
          }
          70% {
            opacity: 0.95;
            transform: translateX(-3px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-page-header {
          animation: headerEntrance 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-first-circle {
          opacity: 0;
          animation: firstCirclePop 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-second-circle {
          opacity: 0;
          animation: secondCirclePop 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .anim-text-block {
          opacity: 0;
          animation: textSlideFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Smooth Continuous Rotation of Inner Circle on Hover */
        .inner-orbit-circle {
          transform-origin: 175.5px 154.5px;
          transform-box: view-box;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .group:hover .inner-orbit-circle {
          animation: spinInnerOrbit 4s linear infinite;
        }

        @keyframes spinInnerOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export { CopyRight as CopyrightPage };
