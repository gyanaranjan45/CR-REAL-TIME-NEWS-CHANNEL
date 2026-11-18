import React, { useEffect, useId, useRef, useState } from "react";
import {
  ALL_CAREER_PAGES,
  COMPUTED_ROWS,
  SPACEBAR_CENTER_X,
  SPEAKER_GRID,
  CAREER_HEADER_DATA,
} from "./CareerPageData.js";

/**
 * Embedded CSS styles from index.css to make this component completely self-contained.
 */
export const CARRIER_STYLES = `
:root {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color-scheme: light dark;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  outline: none !important;
  -webkit-tap-highlight-color: transparent !important;
}

*:focus,
*:focus-visible,
*:focus-within,
*:active {
  outline: none !important;
  box-shadow: none !important;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  background: transparent;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Realistic SVG Rendering */
svg {
  shape-rendering: geometricPrecision;
  text-rendering: geometricPrecision;
  outline: none !important;
}

svg,
svg * {
  outline: none !important;
  -webkit-focus-ring-color: transparent !important;
  -webkit-tap-highlight-color: transparent !important;
  user-select: none;
}

/* Laptop Lid 3D Folding / Flip Animation around Hinge Axis (Center X = 720, Y = 510) */
.laptop-lid-layer {
  transform-origin: 720px 510px;
  transform-box: view-box;
  outline: none !important;
}

.laptop-lid-layer.open-lid-state {
  transform: none;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: transform 0.65s cubic-bezier(0.35, 1.15, 0.45, 1), opacity 0.25s ease, visibility 0s 0s;
}

.laptop-lid-layer.open-lid-state.is-closed {
  transform: perspective(1000px) rotateX(86deg) translateY(18px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: transform 0.65s cubic-bezier(0.35, 1.15, 0.45, 1), opacity 0.25s ease, visibility 0s 0.65s;
}

.laptop-lid-layer.closed-lid-state {
  transform: perspective(1000px) rotateX(-80deg);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: transform 0.65s cubic-bezier(0.35, 1.15, 0.45, 1), opacity 0.25s ease, visibility 0s 0.65s;
}

.laptop-lid-layer.closed-lid-state.is-closed {
  transform: none;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: transform 0.65s cubic-bezier(0.35, 1.15, 0.45, 1), opacity 0.25s ease, visibility 0s 0s;
}

/* Interactive COMPAQ Logo Flip Trigger (Open & Closed states) */
.compaq-logo-trigger,
.compaq-outer-logo-trigger {
  cursor: pointer;
  outline: none !important;
  transition: filter 0.2s ease;
}

.compaq-logo-trigger:hover text,
.compaq-outer-logo-trigger:hover text {
  fill: #1f1d17;
  filter: drop-shadow(0 1px 3px rgba(234, 179, 8, 0.6));
}

.compaq-logo-trigger:active text,
.compaq-outer-logo-trigger:active text {
  transform: translateY(1px);
}

/* Premium Notepad Job Cards (inside laptop display) */
.screen-career-cards {
  animation: fadeInNotepads 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeInNotepads {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Staggered card entrance: pops in with soft opacity and clean glow */
.notepad-entry-pop {
  animation: notepadCardPop 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes notepadCardPop {
  0% {
    opacity: 0;
    filter: brightness(1.22);
  }
  100% {
    opacity: 1;
    filter: brightness(1);
  }
}

/* Screen Power Off / CRT Refresh Flash Overlay */
.screen-flicker-overlay {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.08s ease, visibility 0s 0.08s;
}

.screen-flicker-overlay.is-off {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: opacity 0.03s ease, visibility 0s 0s;
}

.screen-notepad-card {
  cursor: pointer;
  outline: none !important;
  pointer-events: all;
}

/* Card paper subtle highlight & border focus on hover - 100% position locked, ZERO jumping */
.notepad-card-paper {
  transition: stroke-opacity 0.2s ease, stroke-width 0.2s ease, filter 0.2s ease;
}

.screen-notepad-card:hover .notepad-card-paper {
  stroke-opacity: 1;
  stroke-width: 1.8;
  filter: brightness(1.02);
}

/* 3D Drop Shadow deepens and enriches without ANY coordinate movement */
.notepad-card-shadow {
  transition: opacity 0.2s ease;
}

.screen-notepad-card:hover .notepad-card-shadow {
  opacity: 0.65;
}

/* Top accent color ribbon highlights */
.notepad-accent-tab {
  transition: stroke-width 0.2s ease, stroke-opacity 0.2s ease;
}

.screen-notepad-card:hover .notepad-accent-tab {
  stroke-width: 3.5;
  stroke-opacity: 1;
}

/* Dog-ear folded corner flap lights up */
.notepad-card-fold {
  transition: fill 0.2s ease, stroke 0.2s ease;
}

.screen-notepad-card:hover .notepad-card-fold {
  fill: #e2e8f0;
  stroke: #94a3b8;
}

/* 3D Icon container badge subtle glow */
.notepad-icon-box {
  transition: stroke-opacity 0.2s ease, fill-opacity 0.2s ease;
}

.screen-notepad-card:hover .notepad-icon-box {
  stroke-opacity: 0.85;
}

/* 3D icon subtle crisp filter */
.notepad-3d-icon {
  transition: filter 0.2s ease;
}

.screen-notepad-card:hover .notepad-3d-icon {
  filter: brightness(1.12);
}

/* Apply button brightens and stands out */
.notepad-apply-btn rect {
  transition: filter 0.2s ease;
}

.screen-notepad-card:hover .notepad-apply-btn rect {
  filter: brightness(1.2);
}

.notepad-apply-btn text {
  transition: letter-spacing 0.2s ease;
}

.screen-notepad-card:hover .notepad-apply-btn text {
  letter-spacing: 0.4px;
}

/* Screen Pagination Controls */
.screen-pagination-bar {
  user-select: none;
}

.screen-page-btn {
  cursor: pointer;
  outline: none !important;
}

.screen-page-btn rect {
  transition: fill 0.15s ease, stroke 0.15s ease;
}

.screen-page-btn text {
  transition: fill 0.15s ease;
}

.screen-page-btn:not(.is-disabled):hover rect {
  fill: #1e293b;
  stroke: #0284c7;
}

.screen-page-btn:not(.is-disabled):hover text {
  fill: #ffffff;
}

.screen-page-btn:not(.is-disabled):active rect {
  fill: #0f172a;
}

/* Central unified page indicator badge */
.screen-page-indicator {
  user-select: none;
}

.screen-page-indicator rect {
  transition: stroke 0.2s ease, fill 0.2s ease;
}

.screen-page-indicator text {
  transition: fill 0.2s ease;
}

/* Mouse: Completely stable, zero jitter / jumping */
.mouse-assembly {
  cursor: pointer;
  outline: none !important;
  transition: filter 0.15s ease;
}

.mouse-assembly:hover {
  filter: brightness(1.04);
}

.mouse-assembly:active {
  filter: brightness(0.96);
}

/* Keyboard keys: gentle micro-feedback */
.laptop-key {
  transform-box: fill-box;
  transform-origin: center;
  outline: none !important;
  transition: transform 0.08s ease, filter 0.08s ease;
  cursor: pointer;
}

.laptop-key:hover {
  filter: brightness(1.06);
}

.laptop-key:active {
  transform: translateY(1.5px);
  filter: brightness(0.94);
}
`;

/**
 * 3D SVG Icons for Each Career Role (Pure Vector, Rich Shading & Floating Effects)
 */
function Job3DIcon({ type, id }) {
  switch (type) {
    case "code":
      // Frontend Architect: 3D Code Icon (Isometric Cube with Extruded Code Brackets)
      return (
        <g className="notepad-3d-icon">
          {/* Top isometric face */}
          <polygon points="14,4 23,8.5 14,13 5,8.5" fill="#38bdf8" />
          {/* Left isometric face */}
          <polygon points="5,8.5 14,13 14,23 5,18.5" fill="#0284c7" />
          {/* Right isometric face */}
          <polygon points="14,13 23,8.5 23,18.5 14,23" fill="#0369a1" />
          {/* Edge highlights */}
          <line x1="14" y1="4" x2="23" y2="8.5" stroke="#bae6fd" strokeWidth="0.8" />
          <line x1="14" y1="4" x2="5" y2="8.5" stroke="#bae6fd" strokeWidth="0.8" />
          {/* Extruded Code Brackets */}
          <polyline points="10,13.5 8,15.5 10,17.5" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="18,13.5 20,15.5 18,17.5" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="15" y1="13" x2="13" y2="18" stroke="#7dd3fc" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      );
    case "ai":
      // AI / ML Engineer: 3D AI Brain (Volumetric Neural Lobes & Glowing Synapses)
      return (
        <g className="notepad-3d-icon">
          {/* Left Brain Lobe (3D radial shaded) */}
          <path
            d="M 13.5,6 C 9.5,5.5 6,8 6,12.5 C 6,17 9.5,20.5 13.5,20.5 C 13.5,17 13.5,10 13.5,6 Z"
            fill={`url(#${id}-icon-brain-l)`}
          />
          {/* Right Brain Lobe (3D radial shaded) */}
          <path
            d="M 14.5,6 C 18.5,5.5 22,8 22,12.5 C 22,17 18.5,20.5 14.5,20.5 C 14.5,17 14.5,10 14.5,6 Z"
            fill={`url(#${id}-icon-brain-r)`}
          />
          {/* Neural Groove */}
          <line x1="14" y1="6" x2="14" y2="20.5" stroke="#4c1d95" strokeWidth="1" opacity="0.6" />
          {/* Synaptic circuit traces */}
          <line x1="9" y1="10" x2="13" y2="12" stroke="#e9d5ff" strokeWidth="0.9" opacity="0.8" />
          <line x1="9" y1="16" x2="13" y2="14" stroke="#e9d5ff" strokeWidth="0.9" opacity="0.8" />
          <line x1="19" y1="10" x2="15" y2="12" stroke="#e9d5ff" strokeWidth="0.9" opacity="0.8" />
          <line x1="19" y1="16" x2="15" y2="14" stroke="#e9d5ff" strokeWidth="0.9" opacity="0.8" />
          {/* Synapse nodes */}
          <circle cx="8.5" cy="10" r="1.3" fill="#ffffff" />
          <circle cx="8.5" cy="16" r="1.3" fill="#ffffff" />
          <circle cx="19.5" cy="10" r="1.3" fill="#ffffff" />
          <circle cx="19.5" cy="16" r="1.3" fill="#ffffff" />
          {/* Pulsing AI core beacon */}
          <circle cx="14" cy="13" r="2.2" fill="#facc15" />
          <circle cx="14" cy="13" r="1" fill="#ffffff" />
        </g>
      );
    case "cloud":
      // Cloud Systems Lead: 3D Cloud (Volumetric Puffy Cloud with Depth Shelf & Data Pulse)
      return (
        <g className="notepad-3d-icon">
          {/* 3D Under-shelf Shadow */}
          <path
            d="M 6.5,16 C 6.5,19 21.5,19 21.5,16 Z"
            fill="#064e3b"
            opacity="0.75"
          />
          {/* 3D Volumetric Cloud Puff Base */}
          <path
            d="M 8,16.5 C 5.5,16.5 4,14.5 4,12.5 C 4,10.5 5.8,9 8,9 C 8.5,6.5 11,5 14,5 C 17.5,5 19.8,7 20,9.5 C 22,9.8 23.5,11.2 23.5,13 C 23.5,15.2 21.5,16.5 19,16.5 Z"
            fill={`url(#${id}-icon-cloud-main)`}
          />
          {/* Cloud Top Crest Highlight */}
          <path
            d="M 9.5,8.8 C 11,6.5 13,6 15,6 C 17,6 18.5,7 19.2,8.5"
            fill="none"
            stroke="#a7f3d0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Server Rack Slot inside Cloud */}
          <rect x="9" y="12" width="10" height="2.2" rx="1.1" fill="#064e3b" />
          <circle cx="11" cy="13.1" r="0.6" fill="#4ade80" />
          <circle cx="13" cy="13.1" r="0.6" fill="#38bdf8" />
          <line x1="15" y1="13.1" x2="17.5" y2="13.1" stroke="#34d399" strokeWidth="0.6" />
        </g>
      );
    case "design":
      // Product UX Designer: 3D Design Pen (Angled 3D Drafting Stylus with Precision Anchor)
      return (
        <g className="notepad-3d-icon">
          <g transform="rotate(-30 14 14)">
            {/* Barrel top light face */}
            <polygon points="12,4 14,4 14,16 12,16" fill="#fbbf24" />
            {/* Barrel shaded bevel face */}
            <polygon points="14,4 16,4 16,16 14,16" fill="#d97706" />
            {/* Chrome Collar Ring */}
            <rect x="12" y="16" width="4" height="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.4" />
            {/* Titanium Stylus Nib */}
            <polygon points="12,18 16,18 14,24" fill={`url(#${id}-icon-pen-nib)`} />
            {/* Nib center ink slit */}
            <line x1="14" y1="18" x2="14" y2="22.5" stroke="#78350f" strokeWidth="0.5" />
            {/* Top End Cap */}
            <rect x="12" y="3" width="4" height="1.2" rx="0.5" fill="#b45309" />
          </g>
          {/* Floating 3D Vector Bézier Anchor Handle */}
          <line x1="5" y1="21" x2="13" y2="21" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          <circle cx="5" cy="21" r="1.3" fill="#ffffff" stroke="#d97706" strokeWidth="0.8" />
          <circle cx="9" cy="21" r="1.5" fill="#f59e0b" />
          <circle cx="13" cy="21" r="1.3" fill="#ffffff" stroke="#d97706" strokeWidth="0.8" />
        </g>
      );
    case "security":
      // Cybersecurity Lead: 3D Shield (Beveled Heraldic Shield with Keyhole Core)
      return (
        <g className="notepad-3d-icon">
          {/* 3D Shield Outer Bevel / Base */}
          <path
            d="M 14,4 L 6,7.5 L 6,13.5 C 6,18.5 10,22.5 14,24 C 18,22.5 22,18.5 22,13.5 L 22,7.5 Z"
            fill="#9f1239"
          />
          {/* Left Chiseled Facet (Darker shadow face) */}
          <path
            d="M 14,5 L 7,8 L 7,13.5 C 7,17.8 10.5,21.3 14,22.8 Z"
            fill="#e11d48"
          />
          {/* Right Chiseled Facet (Bright specular face) */}
          <path
            d="M 14,5 L 21,8 L 21,13.5 C 21,17.8 17.5,21.3 14,22.8 Z"
            fill="#fb7185"
          />
          {/* Center Crest: 3D Chrome Padlock / Keyhole */}
          <circle cx="14" cy="12" r="2.4" fill="#ffffff" />
          <polygon points="13,12 15,12 15.6,16.5 12.4,16.5" fill="#ffffff" />
          <circle cx="14" cy="12" r="1.1" fill="#881337" />
          <polygon points="13.5,12 14.5,12 14.8,15.2 13.2,15.2" fill="#881337" />
        </g>
      );
    case "fullstack":
      // Full-Stack Developer: 3D Laptop (Miniature Isometric 3D Laptop Workstation)
      return (
        <g className="notepad-3d-icon">
          {/* Display Lid Back Shell */}
          <polygon points="7,6 19,4 23,12 11,14" fill="#1e3a8a" />
          {/* Display Screen Face */}
          <polygon points="8,7 18,5 22,12 12,14" fill="#0f172a" />
          {/* Code Editor Glowing Lines on Screen */}
          <line x1="10" y1="8" x2="16" y2="6.8" stroke="#60a5fa" strokeWidth="0.8" />
          <line x1="11" y1="9.8" x2="17" y2="8.6" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="12" y1="11.6" x2="19" y2="10.2" stroke="#a5b4fc" strokeWidth="0.8" />
          {/* Isometric Keyboard Base Deck */}
          <polygon points="6,15 14,13 24,17 16,19" fill="#2563eb" />
          {/* Keyboard Front Thickness Bevel */}
          <polygon points="6,15 16,19 16,21 6,17" fill="#1d4ed8" />
          <polygon points="16,19 24,17 24,18.5 16,21" fill="#1e40af" />
          {/* Mini Trackpad on Base */}
          <polygon points="11,17 14,16 15.5,17.2 12.5,18.2" fill="#1d4ed8" />
          {/* Power Activity LED */}
          <circle cx="7" cy="16" r="0.6" fill="#38bdf8" />
        </g>
      );
    default:
      return <circle cx="14" cy="14" r="5" fill="#3b82f6" />;
  }
}

/**
 * ScreenNotepadCard - Premium Horizontal 3D Notepad Job Card
 * Dimensions: 236px width x 118px height
 * Includes folded top-right corner, 3D soft shadows, stationery styling
 */
function ScreenNotepadCard({ card, id, className = "" }) {
  const FOLD = 13;
  const W = 236;
  const H = 118;
  const R = 6;

  // Path for card body with top-right diagonal fold cut
  const cardPath = `M 0,${R} A ${R},${R} 0 0,1 ${R},0 L ${W - FOLD},0 L ${W},${FOLD} L ${W},${H - R} A ${R},${R} 0 0,1 ${W - R},${H} L ${R},${H} A ${R},${R} 0 0,1 0,${H - R} Z`;

  // Fold flap triangle path
  const foldFlapPath = `M ${W - FOLD},0 L ${W - FOLD},${FOLD} L ${W},${FOLD} Z`;

  return (
    <g
      className={`screen-notepad-card ${className}`}
      transform={`translate(${card.x} ${card.y})`}
      role="button"
      tabIndex="-1"
      aria-label={`Job opening: ${card.title}`}
    >
      {/* Invisible stationary hit-box covering card + hover overshoot (prevents dancing/jitter) */}
      <rect
        x="-4"
        y="-8"
        width={W + 8}
        height={H + 16}
        fill="transparent"
        pointerEvents="all"
      />

      {/* Visual Card Content (Lifts smoothly on hover while parent stays firmly anchored) */}
      <g className="notepad-card-content">
        {/* Dual Soft Ambient 3D Shadows for Depth */}
        <rect
          className="notepad-card-shadow"
          x="3"
          y="5"
          width={W - 4}
          height={H - 2}
          rx="7"
          fill="#000000"
          opacity="0.32"
        />
        <rect
          x="1"
          y="2"
          width={W}
          height={H}
          rx="6"
          fill="#000000"
          opacity="0.2"
        />

        {/* Main Notepad Paper Body */}
        <path
          className="notepad-card-paper"
          d={cardPath}
          fill={`url(#${id}-notepad-paper)`}
          stroke={card.accent}
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Folded Top-Right Corner Flap with 3D Depth */}
        <path
          d={foldFlapPath}
          fill={`url(#${id}-notepad-fold)`}
          stroke="#cbd5e1"
          strokeWidth="0.8"
          className="notepad-card-fold"
        />
        {/* Flap Under-crease Shadows */}
        <line
          x1={W - FOLD}
          y1={FOLD}
          x2={W}
          y2={FOLD}
          stroke="#94a3b8"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <line
          x1={W - FOLD}
          y1="0"
          x2={W - FOLD}
          y2={FOLD}
          stroke="#94a3b8"
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* Top Accent Color Tab */}
        <line
          className="notepad-accent-tab"
          x1="12"
          y1="2"
          x2="48"
          y2="2"
          stroke={card.accent}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Subtle Stationery Note Ruling Guide Lines */}
        <line
          x1="12"
          y1="42"
          x2={W - 20}
          y2="42"
          stroke="#cbd5e1"
          strokeDasharray="3 3"
          strokeWidth="0.7"
          opacity="0.5"
        />
        <line
          x1="12"
          y1="85"
          x2={W - 12}
          y2="85"
          stroke="#e2e8f0"
          strokeWidth="0.9"
        />

        {/* 3D Icon Container Badge */}
        <rect
          className="notepad-icon-box"
          x="12"
          y="9"
          width="28"
          height="28"
          rx="6"
          fill={card.iconBg}
          stroke={card.accent}
          strokeWidth="1"
          strokeOpacity="0.35"
        />
        {/* 3D SVG Icon Graphic */}
        <g transform="translate(12 9)">
          <Job3DIcon type={card.iconType} id={id} />
        </g>

        {/* Category Pill Badge (Positioned at Top-Right before fold) */}
        <rect
          x="134"
          y="11"
          width="68"
          height="18"
          rx="9"
          fill={card.tagBg}
          stroke={card.accent}
          strokeWidth="0.9"
          strokeOpacity="0.45"
        />
        <text
          x="168"
          y="20"
          fill={card.tagColor}
          fontSize="8.2"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="Arial, system-ui, sans-serif"
          letterSpacing="0.2"
        >
          {card.tag}
        </text>

        {/* Job Title (Crisp, High-Contrast Slate) */}
        <text
          x="12"
          y="54"
          fill="#0f172a"
          fontSize="12"
          fontWeight="800"
          fontFamily="Arial, system-ui, sans-serif"
          letterSpacing="-0.2"
        >
          {card.title}
        </text>

        {/* Category / Seniority Subtitle */}
        <text
          x="12"
          y="67"
          fill={card.accent}
          fontSize="8.5"
          fontWeight="700"
          fontFamily="Arial, system-ui, sans-serif"
          letterSpacing="0.1"
        >
          {card.level}
        </text>

        {/* One-Line Short Description */}
        <text
          x="12"
          y="79"
          fill="#334155"
          fontSize="8"
          fontWeight="500"
          fontFamily="Arial, system-ui, sans-serif"
        >
          {card.desc}
        </text>

        {/* Salary Meta Info (Bottom-Left) */}
        <text
          x="12"
          y="102"
          fill="#0f172a"
          fontSize="9.2"
          fontWeight="800"
          fontFamily="Arial, system-ui, sans-serif"
        >
          {card.salary}
        </text>

        {/* Small Apply Now Button (Bottom-Right) */}
        <g className="notepad-apply-btn">
          <rect
            x="148"
            y="92"
            width="76"
            height="20"
            rx="4"
            fill={card.accent}
            stroke={card.accent}
            strokeWidth="0.9"
          />
          <text
            x="186"
            y="102"
            fill="#ffffff"
            fontSize="8.2"
            fontWeight="700"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Arial, system-ui, sans-serif"
            letterSpacing="0.2"
          >
            Apply Now →
          </text>
        </g>
      </g>
    </g>
  );
}

/**
 * Sculpted 3D Vintage Keycap
 */
function Keycap({ item, isSmall }) {
  const isDark = item.dark;
  return (
    <g className="laptop-key">
      {/* Keybed socket recess shadow */}
      <rect
        x={item.x + 0.5}
        y={item.y + 2}
        width={item.w - 1}
        height={item.h}
        rx="2.5"
        fill="#3d3930"
        opacity="0.55"
      />

      {/* 3D Keycap Skirt / Front Bevel */}
      <rect
        x={item.x}
        y={item.y + item.h - 3.5}
        width={item.w}
        height="4"
        rx="2"
        fill={isDark ? "#635e52" : "#aaa495"}
        stroke={isDark ? "#524d43" : "#948e81"}
        strokeWidth="0.8"
      />

      {/* 3D Keycap Top Dished Face */}
      <rect
        x={item.x + 0.8}
        y={item.y}
        width={item.w - 1.6}
        height={item.h - 2}
        rx="2.2"
        fill={isDark ? "url(#key-modifier-face)" : "url(#key-alpha-face)"}
        stroke={isDark ? "#9a9486" : "#fbf8ee"}
        strokeWidth="0.8"
      />

      {/* Top Specular Edge Highlight */}
      <line
        x1={item.x + 2.5}
        y1={item.y + 1.2}
        x2={item.x + item.w - 2.5}
        y2={item.y + 1.2}
        stroke={isDark ? "#b8b3a5" : "#ffffff"}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Left Specular Highlight */}
      <line
        x1={item.x + 1.5}
        y1={item.y + 2.5}
        x2={item.x + 1.5}
        y2={item.y + item.h - 4}
        stroke={isDark ? "#a6a092" : "#ffffff"}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Key Typography */}
      {item.label && (
        <text
          x={item.x + item.w / 2}
          y={item.y + item.h / 2 + 1.5}
          fill={isDark ? "#24221c" : "#3e3a31"}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={isSmall ? "7" : item.label.length > 3 ? "7.5" : "9"}
          fontWeight="600"
          fontFamily="Arial, system-ui, -apple-system, sans-serif"
          letterSpacing="-0.2"
        >
          {item.label}
        </text>
      )}
    </g>
  );
}

/**
 * LaptopSVG - Complete, self-contained SVG recreation of the reference photograph
 * WITH 6 PURE VECTOR SVG CAREER CARDS DESIGNED INSIDE THE SCREEN!
 * Touch/Click COMPAQ logo to smoothly fold / flip open!
 */
function LaptopSVG({ className = "" }) {
  const id = useId();
  const [isClosed, setIsClosed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCardCount, setVisibleCardCount] = useState(0);
  const [isScreenFlickering, setIsScreenFlickering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const totalPages = ALL_CAREER_PAGES.length;
  const displayedCards = ALL_CAREER_PAGES[currentPage - 1] || ALL_CAREER_PAGES[0];
  const timerRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clearAllTimers = () => {
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
  };

  useEffect(() => {
    // Initial Page Load / Refresh Intro Animation:
    // 1. Laptop flips closed
    // 2. Pauses closed showing the vintage Compaq lid
    // 3. Flips open smoothly
    // 4. Screen powers on and cards pop in one by one!
    clearAllTimers();

    // Step 1: At 350ms, start flipping lid closed
    timerRefs.current.push(
      setTimeout(() => {
        setIsClosed(true);
      }, 350)
    );

    // Step 2: At 1550ms, flip lid back open
    timerRefs.current.push(
      setTimeout(() => {
        setIsClosed(false);
      }, 1550)
    );

    // Step 3: At 2200ms (lid is upright), power on screen
    timerRefs.current.push(
      setTimeout(() => {
        // Silent transition
      }, 2200)
    );

    // Step 4: Staggered card entrance: add cards one by one!
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(1), 2350));
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(2), 2470));
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(3), 2590));
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(4), 2710));
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(5), 2830));
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(6), 2950));

    return () => clearAllTimers();
  }, []);

  // Screen refresh & sequential card appearance ("screen off hooke on, ek ek karke card add hoga")
  const handlePageChange = (newPage) => {
    if (newPage === currentPage || isScreenFlickering) return;
    clearAllTimers();

    // 1. Screen turns off (blackout overlay snaps on) & reset visible cards
    setIsScreenFlickering(true);
    setVisibleCardCount(0);

    // 2. Change current page data while screen is pitch black
    timerRefs.current.push(
      setTimeout(() => {
        setCurrentPage(newPage);
      }, 160)
    );

    // 3. Screen turns back on!
    timerRefs.current.push(
      setTimeout(() => {
        setIsScreenFlickering(false);
      }, 240)
    );

    // 4. Staggered card entrance: add cards one by one!
    // Card 1
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(1), 300));
    // Card 2
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(2), 390));
    // Card 3
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(3), 480));
    // Card 4
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(4), 570));
    // Card 5
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(5), 660));
    // Card 6
    timerRefs.current.push(setTimeout(() => setVisibleCardCount(6), 750));
  };

  const toggleFold = (e) => {
    e?.stopPropagation();
    clearAllTimers();
    if (e?.currentTarget && typeof e.currentTarget.blur === "function") {
      e.currentTarget.blur();
    }
    if (typeof document !== "undefined" && document.activeElement && typeof document.activeElement.blur === "function") {
      document.activeElement.blur();
    }
    setIsClosed((prev) => {
      const nextClosed = !prev;
      if (!nextClosed && visibleCardCount < 6) {
        setVisibleCardCount(6);
      }
      return nextClosed;
    });
  };

  const currentViewBox = isMobile ? "220 40 1000 815" : "0 32 1440 788";

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      <svg
        className="w-full h-auto max-h-full"
        viewBox={currentViewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Vintage cream laptop with 6 career cards on screen and wired mouse illustration"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* ============================================================== */}
          {/* SHADOW & AMBIENT OCCLUSION FILTERS                             */}
          {/* ============================================================== */}
          {/* Ground ambient shadow under laptop (Centered at X = 720) */}
          <radialGradient id={`${id}-table-ambient-shadow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#100d0a" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#120f0c" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#15120e" stopOpacity="0" />
          </radialGradient>

          {/* Mouse drop shadow */}
          <radialGradient id={`${id}-mouse-ambient-shadow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0e0a07" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#120e0b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#120e0b" stopOpacity="0" />
          </radialGradient>

          {/* Screen boundary clipping */}
          <clipPath id={`${id}-screen-clip`}>
            <rect x="330" y="86" width="780" height="372" rx="3" />
          </clipPath>

          {/* Job card crisp white surface gradient */}
          <linearGradient id={`${id}-card-surface`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>

          {/* Modern Notepad Stationery Paper Gradient */}
          <linearGradient id={`${id}-notepad-paper`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>

          {/* Notepad Top-Right Dog-Ear Folded Flap Gradient */}
          <linearGradient id={`${id}-notepad-fold`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* 3D Brain Lobe Gradients */}
          <radialGradient id={`${id}-icon-brain-l`} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6b21a8" />
          </radialGradient>
          <radialGradient id={`${id}-icon-brain-r`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#581c87" />
          </radialGradient>

          {/* 3D Cloud Gradient */}
          <linearGradient id={`${id}-icon-cloud-main`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="40%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          {/* 3D Stylus Pen Nib Gradient */}
          <linearGradient id={`${id}-icon-pen-nib`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          {/* ============================================================== */}
          {/* MATERIALS & GRADIENTS                                          */}
          {/* ============================================================== */}
          {/* Vintage Cream / Putty Plastic - Display Lid */}
          <linearGradient id={`${id}-lid-plastic`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5f0e3" />
            <stop offset="15%" stopColor="#ded9cb" />
            <stop offset="75%" stopColor="#c4bea9" />
            <stop offset="100%" stopColor="#a39d8b" />
          </linearGradient>

          {/* Outer Closed Lid Shell Gradient */}
          <linearGradient id={`${id}-closed-lid-plastic`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ded8c8" />
            <stop offset="35%" stopColor="#cfc8b7" />
            <stop offset="75%" stopColor="#b8b2a0" />
            <stop offset="100%" stopColor="#96907f" />
          </linearGradient>

          {/* Straight Lid Inner Bezel Shading */}
          <linearGradient id={`${id}-bezel-inner-rim`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#625c4e" />
            <stop offset="10%" stopColor="#484337" />
            <stop offset="90%" stopColor="#3c382f" />
            <stop offset="100%" stopColor="#504a3e" />
          </linearGradient>

          {/* Large Black Screen - Deep Flat Reflective LCD Glass */}
          <linearGradient id={`${id}-screen-glass`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f1620" />
            <stop offset="35%" stopColor="#0a0f16" />
            <stop offset="75%" stopColor="#0c121b" />
            <stop offset="100%" stopColor="#06090e" />
          </linearGradient>

          {/* Smooth Diagonal Glass Glare */}
          <linearGradient id={`${id}-screen-window-glare`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
            <stop offset="35%" stopColor="#dbeafe" stopOpacity="0.02" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.01" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Base Deck Cream Plastic */}
          <linearGradient id={`${id}-base-deck`} x1="0.2" y1="0" x2="0.2" y2="1">
            <stop offset="0%" stopColor="#ede8da" />
            <stop offset="35%" stopColor="#dad5c6" />
            <stop offset="75%" stopColor="#c0baa9" />
            <stop offset="100%" stopColor="#969080" />
          </linearGradient>

          {/* Chassis Front Vertical Thickness Face */}
          <linearGradient id={`${id}-chassis-front`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e2ded1" />
            <stop offset="30%" stopColor="#c5bfb0" />
            <stop offset="75%" stopColor="#a39d8e" />
            <stop offset="100%" stopColor="#7a7566" />
          </linearGradient>

          {/* Right Modular Cavity Depth (Dark Interior Opening) */}
          <linearGradient id={`${id}-cavity-interior`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1814" />
            <stop offset="50%" stopColor="#25221c" />
            <stop offset="100%" stopColor="#12100d" />
          </linearGradient>

          {/* Keycap Faces */}
          <linearGradient id="key-alpha-face" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#ede8dc" />
            <stop offset="100%" stopColor="#d4cebe" />
          </linearGradient>

          <linearGradient id="key-modifier-face" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b2ac9f" />
            <stop offset="30%" stopColor="#969183" />
            <stop offset="100%" stopColor="#7a7567" />
          </linearGradient>

          {/* Cylindrical Hinge Shading */}
          <linearGradient id={`${id}-hinge-cyl`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8e4d6" />
            <stop offset="25%" stopColor="#f7f4ea" />
            <stop offset="65%" stopColor="#bbb5a4" />
            <stop offset="100%" stopColor="#7e7868" />
          </linearGradient>

          {/* Mouse 3D Shell Radial Shading */}
          <radialGradient id={`${id}-mouse-shell`} cx="42%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="22%" stopColor="#f6f3e8" />
            <stop offset="65%" stopColor="#dbd5c4" />
            <stop offset="100%" stopColor="#a9a391" />
          </radialGradient>
        </defs>

        {/* ============================================================== */}
        {/* GROUND CONTACT SHADOWS (CENTERED AT X = 720)                   */}
        {/* ============================================================== */}
        <g className="scene-shadows" pointerEvents="none">
          {/* Laptop broad ambient shadow */}
          <ellipse cx="720" cy="765" rx="550" ry="70" fill={`url(#${id}-table-ambient-shadow)`} />
          {/* Laptop sharp contact shadow along front chassis */}
          <ellipse cx="720" cy="804" rx="480" ry="22" fill="#0c0a08" opacity="0.48" />

          {/* Mouse ambient & contact shadow (Rendered only on desktop/tablet) */}
          {!isMobile && (
            <>
              <ellipse
                cx="1310"
                cy="702"
                rx="66"
                ry="50"
                transform="rotate(-20 1310 702)"
                fill={`url(#${id}-mouse-ambient-shadow)`}
              />
              <ellipse
                cx="1305"
                cy="696"
                rx="54"
                ry="36"
                transform="rotate(-20 1305 696)"
                fill="#0e0a07"
                opacity="0.5"
              />
            </>
          )}
        </g>

        {/* ============================================================== */}
        {/* FLEXIBLE MOUSE WIRE CONNECTED TO LAPTOP (DESKTOP ONLY)         */}
        {/* ============================================================== */}
        {!isMobile && (
          <g className="mouse-cable">
            {/* Wire drop shadow */}
            <path
              d="M 1080 534 C 1150 492, 1220 486, 1260 536 C 1282 562, 1288 592, 1292 608"
              fill="none"
              stroke="#16120e"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.35"
            />
            {/* Main wire body (vintage insulated rubber cord) */}
            <path
              d="M 1080 520 C 1150 478, 1220 472, 1260 522 C 1282 548, 1288 578, 1292 594"
              fill="none"
              stroke="#c8c3b2"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            {/* Wire highlight specular reflection stripe */}
            <path
              d="M 1080 518.5 C 1150 476.5, 1220 470.5, 1260 520.5 C 1282 546.5, 1288 576.5, 1292 592.5"
              fill="none"
              stroke="#f5f1e4"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.75"
            />
          </g>
        )}

        {/* ============================================================== */}
        {/* LAPTOP COMPLETE ASSEMBLY (DEAD CENTER AT X = 720)              */}
        {/* ============================================================== */}
        <g className="laptop-assembly">
          
          {/* ------------------------------------------------------------ */}
          {/* 1. DISPLAY LID: OPEN STATE (FLIPS DOWN WHEN COMPAQ IS CLICKED) */}
          {/* ------------------------------------------------------------ */}
          <g className={`laptop-lid-layer open-lid-state ${isClosed ? "is-closed" : ""}`}>
            {/* Outer Lid Shell - 880px wide (x: 280 to 1160, y: 50 to 520, center = 720) */}
            <rect
              x="280"
              y="50"
              width="880"
              height="470"
              rx="12"
              fill={`url(#${id}-lid-plastic)`}
              stroke="#948e7f"
              strokeWidth="2.5"
            />

            {/* Top specular highlight edge - straight horizontal line */}
            <line x1="292" y1="52" x2="1148" y2="52" stroke="#ffffff" strokeWidth="2.5" opacity="0.85" />
            {/* Left specular edge - straight vertical line */}
            <line x1="281" y1="62" x2="281" y2="512" stroke="#ffffff" strokeWidth="1.5" opacity="0.65" />
            {/* Right edge shadow - straight vertical line */}
            <line x1="1159" y1="62" x2="1159" y2="512" stroke="#686357" strokeWidth="1.5" opacity="0.6" />

            {/* Left Symmetrical Perforated Speaker Grille */}
            <g transform="translate(298 74)" fill="#545044" opacity="0.85">
              {SPEAKER_GRID.map((dot, i) => (
                <circle key={`spk-l-${i}`} cx={dot.x} cy={dot.y} r="1.6" />
              ))}
            </g>

            {/* Right Symmetrical Perforated Speaker Grille */}
            <g transform="translate(1104 74)" fill="#545044" opacity="0.85">
              {SPEAKER_GRID.map((dot, i) => (
                <circle key={`spk-r-${i}`} cx={dot.x} cy={dot.y} r="1.6" />
              ))}
            </g>

            {/* Left Bezel Latch Hook Indentation */}
            <rect x="273" y="140" width="7" height="32" rx="3" fill="#5c574c" stroke="#eee9dd" strokeWidth="1" />
            <rect x="275" y="146" width="3" height="14" rx="1.5" fill="#ded9cb" />

            {/* Right Bezel Dual-Slider Recess (Brightness & Contrast Controls) */}
            <rect
              x="1138"
              y="260"
              width="13"
              height="80"
              rx="5.5"
              fill="#888375"
              stroke="#ece7da"
              strokeWidth="1.8"
            />
            {/* Upper Brightness Slider */}
            <g transform="translate(1140 272)">
              <rect width="9" height="16" rx="2.5" fill="#ded9cc" stroke="#726e61" strokeWidth="1" />
              <line x1="2" y1="6" x2="7" y2="6" stroke="#504c41" strokeWidth="1.2" />
              <line x1="2" y1="10" x2="7" y2="10" stroke="#504c41" strokeWidth="1.2" />
            </g>
            {/* Lower Contrast Slider */}
            <g transform="translate(1140 308)">
              <rect width="9" height="16" rx="2.5" fill="#ded9cc" stroke="#726e61" strokeWidth="1" />
              <line x1="2" y1="6" x2="7" y2="6" stroke="#504c41" strokeWidth="1.2" />
              <line x1="2" y1="10" x2="7" y2="10" stroke="#504c41" strokeWidth="1.2" />
            </g>

            {/* LARGE WIDE RECTANGULAR BEZEL RECESS (Center = 720, Width = 792) */}
            <rect
              x="324"
              y="80"
              width="792"
              height="384"
              rx="5"
              fill={`url(#${id}-bezel-inner-rim)`}
              stroke="#484338"
              strokeWidth="3"
            />

            {/* LARGE WIDE BLACK SCREEN GLASS (IMMERSIVE FLAT DISPLAY - Width = 780) */}
            <rect
              x="330"
              y="86"
              width="780"
              height="372"
              rx="3"
              fill={`url(#${id}-screen-glass)`}
            />

            {/* SCREEN VIEWPORT CONTENT - 6 PURE VECTOR SVG CAREER CARDS */}
            <g clipPath={`url(#${id}-screen-clip)`}>
              {/* Top OS Window Menu Bar inside Screen */}
              <g className="screen-top-bar" pointerEvents="none">
                <rect x="330" y="86" width="780" height="28" fill="#090e15" opacity="0.95" />
                <line x1="330" y1="114" x2="1110" y2="114" stroke="#1c2838" strokeWidth="1" />

                {/* Window Dots */}
                <circle cx="346" cy="100" r="3.5" fill="#ef4444" opacity="0.8" />
                <circle cx="357" cy="100" r="3.5" fill="#f59e0b" opacity="0.8" />
                <circle cx="368" cy="100" r="3.5" fill="#10b981" opacity="0.8" />

                {/* Title */}
                <text
                  x="386"
                  y="103.5"
                  fill="#94a3b8"
                  fontSize="8"
                  fontWeight="700"
                  fontFamily="Arial, system-ui, sans-serif"
                  letterSpacing="0.6"
                >
                  CR REAL TIME NEWS CHANNEL  •  CAREER OPPORTUNITIES
                </text>

                {/* Active Roles Live Indicator */}
                <circle cx="1006" cy="100" r="3" fill="#10b981" />
                <text
                  x="1016"
                  y="103"
                  fill="#10b981"
                  fontSize="8"
                  fontWeight="700"
                  fontFamily="Arial, system-ui, sans-serif"
                  letterSpacing="0.4"
                >
                  PAGE {currentPage} OF {totalPages} • 6 ROLES OPEN
                </text>
              </g>

              {/* 6 Career Cards Grid (3 Columns x 2 Rows) - Rendered One by One ("ek ek karke card add hoga") */}
              <g className="screen-career-cards" key={`page-${currentPage}`}>
                {displayedCards.map((card, idx) => {
                  if (idx >= visibleCardCount) return null;
                  return (
                    <ScreenNotepadCard
                      key={`${card.id}-p${currentPage}`}
                      card={card}
                      id={id}
                      className="notepad-entry-pop"
                    />
                  );
                })}
              </g>

              {/* Bottom Pagination Bar: [Previous] on Left, [Page Numbers] in Middle, [Next] on Right */}
              <g className="screen-pagination-bar">
                {/* Bar Base Container */}
                <rect
                  x="350"
                  y="408"
                  width="740"
                  height="28"
                  rx="5"
                  fill="#080e18"
                  stroke="#1e293b"
                  strokeWidth="1"
                />

                {/* Left: Previous Button */}
                <g
                  className={`screen-page-btn ${currentPage === 1 ? "is-disabled" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  role="button"
                  tabIndex={currentPage === 1 ? -1 : 0}
                  aria-label="Previous page"
                  style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
                >
                  <rect
                    x="358"
                    y="412"
                    width="84"
                    height="20"
                    rx="4"
                    fill={currentPage === 1 ? "#0f172a" : "#131d2e"}
                    stroke={currentPage === 1 ? "#1e293b" : "#334155"}
                    strokeWidth="1"
                  />
                  <text
                    x="400"
                    y="422"
                    fill={currentPage === 1 ? "#475569" : "#94a3b8"}
                    fontSize="8"
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontFamily="Arial, system-ui, sans-serif"
                    letterSpacing="0.3"
                  >
                    ← Previous
                  </text>
                </g>

                {/* Middle: Unified Page Indicator (Updates on Next / Previous) */}
                <g className="screen-page-indicator">
                  <rect
                    x="655"
                    y="412"
                    width="130"
                    height="20"
                    rx="4"
                    fill="#0e1726"
                    stroke="#1e293b"
                    strokeWidth="1"
                  />
                  <text
                    x="720"
                    y="422"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#94a3b8"
                    fontSize="8.5"
                    fontWeight="600"
                    fontFamily="Arial, system-ui, sans-serif"
                    letterSpacing="0.4"
                  >
                    Page <tspan fill="#38bdf8" fontWeight="700">{currentPage}</tspan> of {totalPages}
                  </text>
                </g>

                {/* Right: Next Button */}
                <g
                  className={`screen-page-btn ${currentPage === totalPages ? "is-disabled" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                  }}
                  role="button"
                  tabIndex={currentPage === totalPages ? -1 : 0}
                  aria-label="Next page"
                  style={{ cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
                >
                  <rect
                    x="998"
                    y="412"
                    width="84"
                    height="20"
                    rx="4"
                    fill={currentPage === totalPages ? "#0f172a" : "#131d2e"}
                    stroke={currentPage === totalPages ? "#1e293b" : "#334155"}
                    strokeWidth="1"
                  />
                  <text
                    x="1040"
                    y="422"
                    fill={currentPage === totalPages ? "#475569" : "#94a3b8"}
                    fontSize="8"
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontFamily="Arial, system-ui, sans-serif"
                    letterSpacing="0.3"
                  >
                    Next →
                  </text>
                </g>
              </g>

              {/* Screen Power Off / CRT Refresh Flash Overlay */}
              <g
                className={`screen-flicker-overlay ${isScreenFlickering ? "is-off" : ""}`}
                pointerEvents="none"
              >
                {/* Pure Deep Screen Off Blackout Covering Aperture */}
                <rect
                  x="330"
                  y="86"
                  width="780"
                  height="372"
                  rx="3"
                  fill="#04060a"
                />
                {/* Vintage CRT Horizontal Collapsing Scanline Glare */}
                <line
                  x1="330"
                  y1="272"
                  x2="1110"
                  y2="272"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  opacity="0.4"
                />
              </g>
            </g>

            {/* Subtle Flat Glass Sheen Reflection over Cards */}
            <g pointerEvents="none">
              <rect
                x="330"
                y="86"
                width="780"
                height="372"
                rx="3"
                fill={`url(#${id}-screen-window-glare)`}
              />
              <polygon
                points="360,86 610,86 830,458 580,458"
                fill="#ffffff"
                opacity="0.02"
              />
            </g>

            {/* Bottom Bezel Strip */}
            <rect
              x="282"
              y="464"
              width="876"
              height="56"
              fill={`url(#${id}-lid-plastic)`}
            />
            <line x1="282" y1="464" x2="1158" y2="464" stroke="#7a7567" strokeWidth="1.2" />

            {/* INTERACTIVE CR REAL TIME NEWS CHANNEL LOGO - TOUCH/CLICK TO FOLD / CLOSE LAPTOP! */}
            <g
              className="compaq-logo-trigger"
              onClick={toggleFold}
              role="button"
              aria-label="Click CR REAL TIME NEWS CHANNEL logo to fold or close laptop"
              style={{ cursor: "pointer", outline: "none" }}
            >
              <rect x="460" y="474" width="520" height="42" fill="transparent" />
              <text
                x="720"
                y="497"
                fill="#3a372f"
                textAnchor="middle"
                fontSize="15"
                fontFamily="Arial, Helvetica, sans-serif"
                fontStyle="italic"
                fontWeight="900"
                letterSpacing="1"
              >
                CR REAL TIME NEWS CHANNEL
              </text>
            </g>

            {/* Straight Horizontal Recessed Status Bar Between Hinges */}
            <rect x="384" y="508" width="672" height="8" rx="2" fill="#878275" />
            <rect x="540" y="509" width="360" height="6" rx="1.5" fill="#464a43" stroke="#686c64" strokeWidth="1" />
          </g>

          {/* ------------------------------------------------------------ */}
          {/* 2. BASE DECK & KEYBOARD (CENTERED AT X = 720, WIDENED)       */}
          {/* Left corner = 250, Right corner = 1190 (Width = 940)         */}
          {/* ------------------------------------------------------------ */}
          {/* Main Top Base Deck Surface */}
          <polygon
            points="280,520 1160,520 1190,750 250,750"
            fill={`url(#${id}-base-deck)`}
            stroke="#8e897a"
            strokeWidth="3"
          />

          {/* Deck top ridge specular highlight */}
          <line x1="282" y1="520" x2="1158" y2="520" stroke="#ffffff" strokeWidth="2" opacity="0.75" />
          <line x1="252" y1="748" x2="1188" y2="748" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />

          {/* Power Switch & Indicator LED on Top-Left Base Deck */}
          <g transform="translate(272 530)">
            <rect width="28" height="14" rx="3" fill="#888376" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
            <rect x="3" y="2.5" width="10" height="9" rx="2" fill="#585449" />
            <circle cx="20" cy="7" r="2.5" fill="#4d8c46" stroke="#2b5e26" strokeWidth="0.8" />
          </g>

          {/* Molded Horizontal Cooling Vents / Ribs Above Keyboard */}
          <g opacity="0.75">
            {Array.from({ length: 5 }, (_, index) => (
              <line
                key={`vent-rib-${index}`}
                x1={440 + index * 4}
                y1={532 + index * 2.8}
                x2={1000 - index * 4}
                y2={532 + index * 2.8}
                stroke="#7a7567"
                strokeWidth="1.8"
              />
            ))}
          </g>

          {/* Recessed Keyboard Keybed Outer Well */}
          <polygon
            points="310,544 1130,544 1150,684 290,684"
            fill="#9b9587"
            stroke="#807b6e"
            strokeWidth="2"
          />
          {/* Inner Keybed Floor */}
          <polygon
            points="314,546 1126,546 1146,682 294,682"
            fill="#beb8ab"
          />

          {/* FULLY ALIGNED 6-ROW KEYBOARD KEYS (WIDENED & CENTERED AT 720) */}
          <g className="keyboard-keys-group">
            {COMPUTED_ROWS.map((rowConfig, rowIndex) => (
              <g key={`row-${rowIndex}`}>
                {rowConfig.keys.map((keyItem, keyIndex) => (
                  <Keycap
                    key={`k-${rowIndex}-${keyIndex}`}
                    item={keyItem}
                    isSmall={rowIndex === 0}
                  />
                ))}
              </g>
            ))}
          </g>

          {/* ------------------------------------------------------------ */}
          {/* 3. PALM REST & DUAL CLICK BUTTONS (CENTERED BELOW SPACEBAR)  */}
          {/* ------------------------------------------------------------ */}
          <g className="palmrest-click-buttons">
            {/* Recessed Capsule Slot centered under Spacebar */}
            <rect
              x={SPACEBAR_CENTER_X - 80}
              y="696"
              width="160"
              height="28"
              rx="6"
              fill="#888375"
              stroke="#6b6659"
              strokeWidth="1.2"
              opacity="0.85"
            />

            {/* Left Click Button */}
            <rect
              x={SPACEBAR_CENTER_X - 76}
              y="699"
              width="74"
              height="22"
              rx="4"
              fill="#d0cbbe"
              stroke="#837f71"
              strokeWidth="1.5"
            />
            <line
              x1={SPACEBAR_CENTER_X - 72}
              y1="702"
              x2={SPACEBAR_CENTER_X - 6}
              y2="702"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.8"
            />

            {/* Right Click Button */}
            <rect
              x={SPACEBAR_CENTER_X + 2}
              y="699"
              width="74"
              height="22"
              rx="4"
              fill="#d0cbbe"
              stroke="#837f71"
              strokeWidth="1.5"
            />
            <line
              x1={SPACEBAR_CENTER_X + 6}
              y1="702"
              x2={SPACEBAR_CENTER_X + 72}
              y2="702"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.8"
            />
          </g>

          {/* ------------------------------------------------------------ */}
          {/* 4. CHASSIS VERTICAL FRONT FACE, PORTS & MODULAR CAVITY       */}
          {/* Left = 250, Right = 1190 (Symmetrically centered at 720)     */}
          {/* ------------------------------------------------------------ */}
          {/* Front Vertical Thickness Face */}
          <polygon
            points="250,750 1190,750 1190,794 1172,810 268,810 250,794"
            fill={`url(#${id}-chassis-front)`}
            stroke="#888374"
            strokeWidth="2.5"
          />

          {/* Left: 3.5-inch Floppy Disk Drive Slot & Eject Button */}
          <g className="floppy-drive">
            {/* Outer Drive Bezel */}
            <polygon
              points="274,764 546,764 545,784 273,784"
              fill="#423e36"
              stroke="#7c776b"
              strokeWidth="2"
            />
            {/* Floppy Insertion Slot */}
            <line x1="290" y1="772" x2="510" y2="772" stroke="#d8d3c4" strokeWidth="3.5" strokeLinecap="round" />
            {/* Floppy Drive Eject Button */}
            <rect
              x="516"
              y="768"
              width="18"
              height="9"
              rx="1.5"
              fill="#b6b0a1"
              stroke="#585448"
              strokeWidth="1"
            />
          </g>

          {/* Center: Battery / Access Latch Mechanism (Centered at X = 720) */}
          <g className="center-latch">
            <polygon
              points="654,762 786,762 785,786 653,786"
              fill="#b8b3a5"
              stroke="#8e897c"
              strokeWidth="1.8"
            />
            <rect x="708" y="768" width="24" height="8" rx="2" fill="#6f6a5e" />
          </g>

          {/* Right: Modular Drive Bay Open Cavity */}
          <g className="modular-bay-cavity">
            <polygon
              points="874,758 1166,758 1166,782 874,782"
              fill={`url(#${id}-cavity-interior)`}
              stroke="#38342d"
              strokeWidth="2"
            />
            <line x1="872" y1="758" x2="1168" y2="758" stroke="#eeeae0" strokeWidth="2.5" />
            <line x1="894" y1="768" x2="1126" y2="768" stroke="#504c43" strokeWidth="2" />
            <rect x="1132" y="764" width="18" height="6" rx="1.5" fill="#888375" />
          </g>

          {/* Side Flank Thickness (Left & Right Edges) */}
          {/* Visible Left Flank */}
          <polygon
            points="280,520 250,750 250,794 280,548"
            fill="#b8b2a3"
            stroke="#807b6e"
            strokeWidth="1.5"
            opacity="0.65"
          />

          {/* Visible Right Flank Thickness */}
          <polygon
            points="1160,520 1190,750 1190,794 1160,548"
            fill="#8e8879"
            stroke="#6e685c"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* ------------------------------------------------------------ */}
          {/* 5. DISPLAY LID: CLOSED STATE (APPEARS WHEN LAPTOP IS FOLDED)  */}
          {/* ------------------------------------------------------------ */}
          <g
            className={`laptop-lid-layer closed-lid-state ${isClosed ? "is-closed" : ""}`}
            style={{ outline: "none" }}
          >
            {/* Closed Top Lid Outer Casing */}
            <polygon
              points="278,518 1162,518 1190,752 250,752"
              fill={`url(#${id}-closed-lid-plastic)`}
              stroke="#8c8676"
              strokeWidth="2.5"
            />
            {/* Lid top bevel highlight */}
            <line x1="280" y1="520" x2="1160" y2="520" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
            <line x1="252" y1="750" x2="1188" y2="750" stroke="#726d5f" strokeWidth="2" />

            {/* Recessed Exterior Center Plate with CR REAL TIME NEWS CHANNEL (Centered at X = 720) - TOUCH TO FLIP OPEN */}
            <g
              className="compaq-outer-logo-trigger"
              onClick={toggleFold}
              role="button"
              aria-label="Click CR REAL TIME NEWS CHANNEL to flip open laptop"
              style={{ cursor: isClosed ? "pointer" : "default", outline: "none" }}
            >
              <rect
                x="490"
                y="608"
                width="460"
                height="56"
                rx="6"
                fill="#cbc5b3"
                stroke="#868070"
                strokeWidth="1.5"
              />
              <rect
                x="494"
                y="612"
                width="452"
                height="48"
                rx="4"
                fill="#ded8c6"
              />
              <text
                x="720"
                y="642"
                fill="#3a372f"
                textAnchor="middle"
                fontSize="16.5"
                fontFamily="Arial, Helvetica, sans-serif"
                fontStyle="italic"
                fontWeight="900"
                letterSpacing="1.2"
              >
                CR REAL TIME NEWS CHANNEL
              </text>
            </g>

            {/* Outer Lid Molded Contour Grooves */}
            <line x1="350" y1="540" x2="1090" y2="540" stroke="#b2ac9b" strokeWidth="1.5" />
            <line x1="330" y1="730" x2="1110" y2="730" stroke="#b2ac9b" strokeWidth="1.5" />

            {/* Front Closed Latch Catch Clip */}
            <rect x="700" y="746" width="40" height="8" rx="2" fill="#5c574c" stroke="#eee9dd" strokeWidth="1" />
            <rect x="712" y="748" width="16" height="4" rx="1" fill="#ded9cb" />
          </g>

          {/* Left 3D Barrel Hinge - Stays fixed on base */}
          <g className="left-hinge">
            <rect
              x="280"
              y="506"
              width="70"
              height="28"
              rx="4"
              fill={`url(#${id}-hinge-cyl)`}
              stroke="#827d6f"
              strokeWidth="2"
            />
            <line x1="282" y1="512" x2="348" y2="512" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            <line x1="315" y1="507" x2="315" y2="533" stroke="#6f6a5d" strokeWidth="1.5" />
          </g>

          {/* Right 3D Barrel Hinge - Stays fixed on base */}
          <g className="right-hinge">
            <rect
              x="1090"
              y="506"
              width="70"
              height="28"
              rx="4"
              fill={`url(#${id}-hinge-cyl)`}
              stroke="#827d6f"
              strokeWidth="2"
            />
            <line x1="1092" y1="512" x2="1158" y2="512" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
            <line x1="1125" y1="507" x2="1125" y2="533" stroke="#6f6a5d" strokeWidth="1.5" />
          </g>
        </g>

        {/* ============================================================== */}
        {/* VINTAGE WIRED COMPUTER MOUSE (LOCATED ON RIGHT DESK AREA)      */}
        {/* ============================================================== */}
        {!isMobile && (
          <g className="mouse-assembly" transform="translate(1310 680) rotate(-20)">
            {/* Mouse Base Perimeter Lip / Underbody */}
            <path
              d="M -18 -82 C -32 -82, -42 -50, -44 -10 C -46 35, -34 68, 0 78 C 34 68, 46 35, 44 -10 C 42 -50, 32 -82, 18 -82 Z"
              fill="#8a8474"
              stroke="#686355"
              strokeWidth="1.8"
            />

            {/* Raised Contoured 3D Shell Body - Sleek ergonomic vintage mouse */}
            <path
              d="M -16 -82 C -28 -82, -39 -48, -41 -8 C -43 32, -32 64, 0 74 C 32 64, 43 32, 41 -8 C 39 -48, 28 -82, 16 -82 Z"
              fill={`url(#${id}-mouse-shell)`}
              stroke="#a6a08e"
              strokeWidth="1.5"
            />

            {/* Left Flank Ergonomic Thumb Bevel */}
            <path
              d="M -41 -8 C -43 25, -34 50, -18 64 C -28 54, -36 32, -35 -4 C -34 -28, -26 -58, -16 -76 C -24 -60, -38 -32, -41 -8 Z"
              fill="#b2ac9b"
              opacity="0.45"
            />

            {/* Front Button Separation Arch */}
            <path
              d="M -38 -12 Q 0 -4 38 -12"
              fill="none"
              stroke="#969080"
              strokeWidth="1.5"
            />
            <path
              d="M -37 -11 Q 0 -3 37 -11"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              opacity="0.75"
            />

            {/* Longitudinal Seam Dividing Left & Right Buttons */}
            <line
              x1="0"
              y1="-82"
              x2="0"
              y2="-12"
              stroke="#7a7465"
              strokeWidth="1.8"
            />
            <line
              x1="0.8"
              y1="-82"
              x2="0.8"
              y2="-12"
              stroke="#ffffff"
              strokeWidth="1"
              opacity="0.65"
            />

            {/* Middle Scroll Wheel / Toggle Button in center seam */}
            <g transform="translate(-4.5 -60)">
              <rect x="0" y="0" width="9" height="22" rx="4.5" fill="#585448" stroke="#8a8475" strokeWidth="1" />
              <rect x="1.5" y="2" width="6" height="18" rx="3" fill="#726d5e" />
              <line x1="2" y1="6" x2="7" y2="6" stroke="#423e35" strokeWidth="1" />
              <line x1="2" y1="10" x2="7" y2="10" stroke="#423e35" strokeWidth="1" />
              <line x1="2" y1="14" x2="7" y2="14" stroke="#423e35" strokeWidth="1" />
            </g>

            {/* Specular Ambient Highlight along the Palm Dome */}
            <path
              d="M -22 18 C -14 6, 14 6, 22 18 C 16 32, -16 32, -22 18 Z"
              fill="#ffffff"
              opacity="0.4"
            />

            {/* Front Nose Cable Relief Collar Grommet */}
            <rect
              x="-4.5"
              y="-86"
              width="9"
              height="6"
              rx="2"
              fill="#726e60"
              stroke="#545044"
              strokeWidth="1"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

/**
 * Career Component - combines the layout and header,
 * full vintage laptop SVG scene from LaptopSVG,
 * styling from CARRIER_STYLES, and roles data from CareerPageData.js.
 */
export function Carrier({
  className = "",
  onlyLaptop = false,
  title = CAREER_HEADER_DATA?.title || "Career Opportunities",
  description = CAREER_HEADER_DATA?.description ||
    "Discover your next breakthrough opportunity and shape the future of journalism, media technology, and digital broadcasting with CR Real Time News. Explore open positions and build a rewarding career where your work creates a lasting impact.",
}) {
  if (onlyLaptop) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CARRIER_STYLES }} />
        <LaptopSVG className={className} />
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CARRIER_STYLES }} />
      <main className={`w-full min-h-screen flex flex-col items-center justify-start pt-12 sm:pt-4 md:pt-6 pb-8 md:pb-12 px-2 sm:px-4 md:px-8 bg-transparent ${className}`}>
        {/* Page Header Section */}
        <header className="w-full max-w-4xl text-center flex flex-col items-center mb-2.5 sm:mb-3.5 px-2">
          {/* Official Channel Network Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            CR Real Time News Network • Careers
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-2 sm:mb-2.5">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-[16px] text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </header>

        {/* Vintage Laptop & Mouse Illustration - Expanded horizontally with compact height */}
        <div className="w-full max-w-[1380px] xl:max-w-[1440px] mx-auto flex items-center justify-center px-1 sm:px-3">
          <LaptopSVG className="w-full" />
        </div>
      </main>
    </>
  );
}

export { LaptopSVG, Carrier as LaptopSVGNamed, Carrier as CareerPage };
export default Carrier;
