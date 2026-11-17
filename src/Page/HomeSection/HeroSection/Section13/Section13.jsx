import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SATELLITE_DATA } from './Section13Data';

function SatelliteNewsMachine() {
  const [activeHeadline, setActiveHeadline] = useState(0);

  // Cycle headlines periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeadline((prev) => (prev + 1) % SATELLITE_DATA.topNews.headlines.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // =========================================================================
  // SUB-RENDER 01: TOP SATELLITE DISH ASSEMBLY (PARABOLIC DISH + SPHERE + RODS + RING + LIGHTS)
  // =========================================================================
  const renderTopSatellite = (isMobile) => (
    <div className={`relative flex flex-col items-center w-full z-40 ${isMobile ? 'max-w-[360px] sm:max-w-[400px]' : ''}`}>
      {/* SATELLITE DISH & 3-POINT SUPPORT STRUCTURE CONTAINER */}
      <div className={`relative ${isMobile ? 'w-full max-w-[340px] sm:max-w-[380px] h-[190px] sm:h-[210px]' : 'w-[340px] sm:w-[380px] md:w-[410px] h-[210px] sm:h-[220px]'} flex items-center justify-center`}>
        <svg 
          className="w-full h-full overflow-visible" 
          viewBox="0 0 400 210"
        >
          {/* 1. DISH UNDERSIDE METALLIC HULL */}
          <path 
            d="M 40 102 C 50 162, 120 195, 200 195 C 280 195, 350 162, 360 102 Z" 
            fill="url(#dishHullGrad)" 
            stroke="#64748b" 
            strokeWidth="1.5"
            filter="url(#dishRimGlow)"
          />
          <path 
            d="M 52 118 C 85 160, 140 182, 200 182 C 260 182, 315 160, 348 118" 
            fill="none" 
            stroke="#334155" 
            strokeWidth="1.5" 
            opacity="0.6" 
          />

          {/* 2. CONCAVE PARABOLIC INNER DISH SURFACE */}
          <ellipse 
            cx="200" cy="102" rx="160" ry="46" 
            fill="url(#dishConcaveGrad)" 
          />
          <ellipse 
            cx="200" cy="102" rx="159.5" ry="45.5" 
            fill="none" 
            stroke="#1a428a" 
            strokeWidth="7" 
          />
          <ellipse 
            cx="200" cy="102" rx="163" ry="49" 
            fill="none" 
            stroke="#e2e8f0" 
            strokeWidth="2.2" 
            opacity="0.9" 
          />
          <ellipse 
            cx="200" cy="102" rx="156" ry="42" 
            fill="none" 
            stroke="#60a5fa" 
            strokeWidth="1.2" 
            opacity="0.75" 
          />

          {/* Glare and Bounce */}
          <path 
            d="M 50 96 C 75 75, 130 65, 190 70 C 130 76, 80 88, 50 96 Z" 
            fill="#ffffff" 
            opacity="0.55" 
          />
          <ellipse 
            cx="200" cy="102" rx="150" ry="40" 
            fill="url(#dishGoldenBounce)" 
          />

          {/* Signal rings */}
          <ellipse cx="200" cy="104" rx="115" ry="30" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="200" cy="105" rx="70" ry="18" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
          <ellipse cx="200" cy="106" rx="30" ry="8" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />

          {/* Central Transmitter Feed Hub Socket */}
          <ellipse cx="200" cy="108" rx="20" ry="6" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
          <ellipse cx="200" cy="108" rx="12" ry="3.5" fill="#0284c7" />

          {/* 3 SUPPORT RODS */}
          <line x1="200" y1="58" x2="200" y2="132" stroke="url(#metalRodGrad)" strokeWidth="10" strokeLinecap="round" filter="url(#rodShadow)" />
          <rect x="194" y="56" width="12" height="6" rx="1.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
          <rect x="194" y="126" width="12" height="6" rx="1.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />

          <line x1="196" y1="58" x2="86" y2="110" stroke="url(#metalRodGradLeft)" strokeWidth="9" strokeLinecap="round" filter="url(#rodShadow)" />
          <circle cx="196" cy="58" r="4.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
          <circle cx="86" cy="110" r="4.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />

          <line x1="204" y1="58" x2="314" y2="110" stroke="url(#metalRodGradRight)" strokeWidth="9" strokeLinecap="round" filter="url(#rodShadow)" />
          <circle cx="204" cy="58" r="4.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
          <circle cx="314" cy="110" r="4.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />

          {/* TOP SIGNAL SPHERE */}
          <g transform="translate(188, 50)">
            <rect x="0" y="0" width="24" height="12" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="1.2" />
            <rect x="2" y="9" width="20" height="3" rx="1" fill="#cbd5e1" />
          </g>
          <g filter="url(#sphereGlow)">
            <circle cx="200" cy="30" r="24" fill="url(#goldSphereGrad)" stroke="#78350f" strokeWidth="0.8" />
            <ellipse cx="200" cy="30" rx="23.5" ry="3.5" fill="none" stroke="rgba(120,53,15,0.45)" strokeWidth="1" />
            <circle cx="191" cy="21" r="4.5" fill="#ffffff" opacity="0.95" />
            <circle cx="195" cy="25" r="2" fill="#ffffff" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* COMPONENT 04: DISH MOUNT RING (Rotating Base) */}
      <div className="relative flex flex-col items-center -mt-3.5 z-30">
        <div className="relative w-[150px] sm:w-[160px] h-[26px] sm:h-[28px] rounded-t-xl gold-industrial-chassis border-t-2 border-amber-200 shadow-lg flex items-center justify-between px-3.5">
          <div className="w-2.5 h-2.5 rounded-full mini-silver-screw" />
          <div className="w-24 h-1 bg-amber-950/40 rounded-full" />
          <div className="w-2.5 h-2.5 rounded-full mini-silver-screw" />
        </div>
        <div className="w-[110px] sm:w-[116px] h-[10px] sm:h-[12px] dark-graphite-tube border-x border-slate-600 shadow-inner flex items-center justify-center">
          <div className="w-16 h-0.5 bg-slate-500 rounded-full" />
        </div>
        <div className="w-[160px] sm:w-[168px] h-[16px] sm:h-[18px] rounded-sm silver-collar-chrome flex items-center justify-center border-t border-white shadow-md" />
        <div className="w-[140px] sm:w-[150px] h-[8px] dark-graphite-tube border-x border-slate-600 shadow-sm" />
      </div>

      {/* COMPONENT 05 & 06: TOP STATUS INDICATORS & CENTRAL LIGHT MODULE */}
      <div className={`relative ${isMobile ? 'w-full max-w-[340px] sm:max-w-[380px]' : 'w-84 sm:w-96 md:w-[425px]'} flex items-end justify-between px-2 -mt-0.5 z-40`}>
        {/* Left Indicator */}
        <div className="flex flex-col items-center">
          <div className="relative w-[54px] sm:w-[64px] h-[32px] sm:h-[36px] rounded-t-xl dark-graphite-tube border-t-2 border-x-2 border-slate-400 shadow-xl flex items-center justify-center p-1 overflow-hidden">
            <div className="relative w-full h-full rounded-lg bg-[#020914] border border-slate-700 shadow-inner flex items-center justify-center gap-1.5 sm:gap-2 px-1">
              <div className="relative w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-br from-white via-cyan-300 to-cyan-500 shadow-[0_0_12px_#00f0ff,0_0_24px_rgba(0,240,255,0.85)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white blur-[0.5px]" />
              </div>
              <div className="relative w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-br from-white via-emerald-300 to-emerald-500 shadow-[0_0_12px_#10b981,0_0_24px_rgba(16,185,129,0.85)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white blur-[0.5px]" />
              </div>
              <div className="absolute inset-0 indicator-glass-glare pointer-events-none" />
            </div>
          </div>
          <div className="w-[58px] sm:w-[70px] h-[8px] sm:h-[10px] dark-graphite-tube rounded-sm border-2 border-slate-500 shadow-md flex items-center justify-between px-1.5 sm:px-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mini-silver-screw" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mini-silver-screw" />
          </div>
        </div>

        {/* Central Light Module */}
        <div className="flex-1 max-w-[200px] flex flex-col items-center mx-1">
          <div className="relative w-full h-[46px] sm:h-[50px] central-light-chassis border-t border-x border-slate-400 flex items-center justify-center p-1 shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
            <div className="relative w-[140px] sm:w-[160px] h-[32px] sm:h-[36px] rounded-md silver-bezel-plate flex items-center justify-center p-1 border border-slate-300">
              <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full mini-silver-screw" />
              <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full mini-silver-screw" />
              <div className="absolute bottom-1 left-1.5 w-1.5 h-1.5 rounded-full mini-silver-screw" />
              <div className="absolute bottom-1 right-1.5 w-1.5 h-1.5 rounded-full mini-silver-screw" />
              <div className="relative w-[108px] sm:w-[124px] h-[18px] sm:h-[22px] rounded-md bg-[#021430] border border-cyan-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.9)] flex items-center justify-center px-1">
                <motion.div 
                  className="w-[96px] sm:w-[110px] h-[6px] sm:h-[7px] rounded-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 shadow-[0_0_10px_#00f0ff,0_0_22px_rgba(0,240,255,0.95)]"
                  animate={{
                    opacity: [0.9, 1, 0.9],
                    filter: [
                      "drop-shadow(0 0 6px rgba(0,240,255,0.8))",
                      "drop-shadow(0 0 14px rgba(0,240,255,1))",
                      "drop-shadow(0 0 6px rgba(0,240,255,0.8))",
                    ]
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-cyan-400/20 blur-[2px] pointer-events-none rounded-md" />
              </div>
            </div>
          </div>
          <div className="w-[180px] sm:w-[205px] h-[10px] sm:h-[12px] dark-graphite-tube rounded-sm border-2 border-slate-500 shadow-md flex items-center justify-between px-3">
            <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
            <div className="w-24 sm:w-28 h-0.5 bg-slate-600 rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          </div>
        </div>

        {/* Right Indicator */}
        <div className="flex flex-col items-center">
          <div className="relative w-[54px] sm:w-[64px] h-[32px] sm:h-[36px] rounded-t-xl dark-graphite-tube border-t-2 border-x-2 border-slate-400 shadow-xl flex items-center justify-center p-1 overflow-hidden">
            <div className="relative w-full h-full rounded-lg bg-[#020914] border border-slate-700 shadow-inner flex items-center justify-center gap-1.5 sm:gap-2 px-1">
              <div className="relative w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-br from-white via-cyan-300 to-cyan-500 shadow-[0_0_12px_#00f0ff,0_0_24px_rgba(0,240,255,0.85)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white blur-[0.5px]" />
              </div>
              <div className="relative w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-br from-white via-emerald-300 to-emerald-500 shadow-[0_0_12px_#10b981,0_0_24px_rgba(16,185,129,0.85)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white blur-[0.5px]" />
              </div>
              <div className="absolute inset-0 indicator-glass-glare pointer-events-none" />
            </div>
          </div>
          <div className="w-[58px] sm:w-[70px] h-[8px] sm:h-[10px] dark-graphite-tube rounded-sm border-2 border-slate-500 shadow-md flex items-center justify-between px-1.5 sm:px-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mini-silver-screw" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mini-silver-screw" />
          </div>
        </div>
      </div>
    </div>
  );

  // =========================================================================
  // SUB-RENDER 02: LEFT DISPLAY PANEL (CRCCF HEADLINES / NEWS LIST)
  // =========================================================================
  const renderLeftPanel = (isMobile) => (
    <div className={`relative ${isMobile ? 'w-full max-w-[360px] sm:max-w-[400px] h-[280px] sm:h-[300px]' : 'w-[330px] sm:w-[370px] md:w-[410px] lg:w-[425px] h-[270px] sm:h-[300px] md:h-[335px]'} rounded-3xl gold-industrial-chassis gold-outer-bevel p-2.5 sm:p-3.5 flex items-center justify-center shadow-2xl flex-shrink-0 mx-auto`}>
      {/* Inner High-Tech Display Bezel */}
      <div className="relative w-full h-full rounded-2xl solar-matrix-grid border-2 border-cyan-400/80 p-3 sm:p-3.5 overflow-hidden flex flex-col justify-between shadow-[inset_0_0_30px_rgba(2,132,199,0.85)]">
        {/* World Map Silhouette Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full text-cyan-300 fill-current" viewBox="0 0 200 100">
            <path d="M22,35 Q32,22 48,28 Q62,32 58,48 Q54,62 38,58 Q28,52 22,35 Z" opacity="0.45"/>
            <path d="M82,24 Q112,18 132,32 Q142,52 122,62 Q102,72 82,52 Q78,32 82,24 Z" opacity="0.55"/>
            <path d="M138,38 Q158,32 172,42 Q168,68 148,62 Q132,52 138,38 Z" opacity="0.45"/>
            <path d="M108,68 Q128,65 132,82 Q112,88 102,78 Z" opacity="0.35"/>
          </svg>
        </div>

        {/* Red Angled CRCCF HEADLINES Header Panel */}
        <div className="relative flex items-center overflow-hidden rounded-md shadow-md border border-red-500/80 mb-1.5 z-10">
          <div className="flex-1 bg-gradient-to-r from-red-600 via-red-600 to-red-700 py-1.5 px-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center shadow-[0_0_6px_#ffffff]">
                <div className="w-2.5 h-full rounded-full border border-white/80" />
              </div>
              <span className="text-sm sm:text-base md:text-lg font-black italic tracking-wider text-white font-display">
                CRCCF HEADLINES
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-red-950/70 border border-red-400 text-[10px] font-bold text-red-100 tracking-wider">
              LIVE
            </span>
          </div>
          <div className="w-14 sm:w-16 h-8 red-header-stripes border-l-2 border-red-900" />
        </div>

        {/* Left Panel News Headlines List */}
        <div className="flex-1 flex flex-col justify-around py-0.5 font-hindi z-10">
          {SATELLITE_DATA.leftNews.items.map((item, index) => (
            <div key={item.id} className="relative flex flex-col">
              <div className="flex items-start gap-2.5">
                <div className="mt-1 flex-shrink-0 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,1)]" />
                <div className="flex-1">
                  <p className={`text-xs sm:text-sm md:text-[15px] font-bold leading-snug transition-colors duration-300 ${
                    activeHeadline === index ? 'text-white' : 'text-slate-100'
                  }`}>
                    {item.text}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] font-mono text-cyan-300/80">
                    <span className="bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-500/40 font-semibold">{item.category}</span>
                    <span>{item.timestamp}</span>
                  </div>
                </div>
              </div>
              {index < SATELLITE_DATA.leftNews.items.length - 1 && (
                <div className="relative w-full h-[1px] my-1 rounded-full bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Screen Scanline & Telemetry */}
        <div className="flex items-center justify-between text-[10px] text-cyan-300/90 font-mono z-10 border-t border-cyan-500/35 pt-1">
          <span>ORBIT: 35,786 KM</span>
          <span className="text-emerald-400 font-semibold">SIGNAL: LOCK 99.4%</span>
        </div>
      </div>

      {/* 4 Corner Bolts */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 rounded-full silver-bolt" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 rounded-full silver-bolt" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 rounded-full silver-bolt" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 rounded-full silver-bolt" />

      {/* Right-Edge Mounting Bracket (Desktop Only) */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-28 dark-graphite-tube rounded-r-md border-r-2 border-y-2 border-slate-500 shadow-lg flex flex-col justify-between py-1.5 items-center">
          <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
        </div>
      )}
    </div>
  );

  // =========================================================================
  // SUB-RENDER 03: CENTRAL INDUSTRIAL CHASSIS (BREAKING NEWS & STORY CONTENT)
  // =========================================================================
  const renderMainChassis = (isMobile) => (
    <div className={`relative ${isMobile ? 'w-[215px] sm:w-[245px] min-h-[350px] sm:min-h-[380px] p-2 sm:p-2.5' : 'w-84 sm:w-96 md:w-[425px] min-h-[380px] sm:min-h-[415px] md:min-h-[445px] p-3 sm:p-4'} rounded-3xl gold-industrial-chassis gold-outer-bevel flex flex-col justify-between shadow-2xl z-30 flex-shrink-0 mx-auto`}>
      {/* Side Mounting Flanges for Connectors (Desktop Only) */}
      {!isMobile ? (
        <>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-28 dark-graphite-tube rounded-l-md border-l-2 border-y-2 border-slate-500 shadow-lg flex flex-col justify-between py-1.5 items-center">
            <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
            <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-28 dark-graphite-tube rounded-r-md border-r-2 border-y-2 border-slate-500 shadow-lg flex flex-col justify-between py-1.5 items-center">
            <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
            <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          </div>
        </>
      ) : (
        <>
          {/* Mobile Mounting Flanges for Left Dish and Right Thruster */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-20 dark-graphite-tube rounded-l-md border-l border-y border-slate-400 flex flex-col justify-between py-1 items-center z-10">
            <div className="w-1.5 h-1.5 rounded-full silver-bolt" />
            <div className="w-1.5 h-1.5 rounded-full silver-bolt" />
          </div>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-20 dark-graphite-tube rounded-r-md border-r border-y border-slate-400 flex flex-col justify-between py-1 items-center z-10">
            <div className="w-1.5 h-1.5 rounded-full silver-bolt" />
            <div className="w-1.5 h-1.5 rounded-full silver-bolt" />
          </div>
        </>
      )}

      {/* 4 Chamfered Industrial Corners with Heavy Silver Bolts */}
      <div className="absolute -top-1.5 -left-1.5 w-8 sm:w-10 h-8 sm:h-10 chamfer-bracket rounded-tl-xl border-t-2 border-l-2 border-slate-400 flex items-center justify-center shadow-md">
        <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full silver-bolt flex items-center justify-center">
          <div className="w-1 h-2.5 bg-slate-700/60 rotate-45" />
        </div>
      </div>
      <div className="absolute -top-1.5 -right-1.5 w-8 sm:w-10 h-8 sm:h-10 chamfer-bracket rounded-tr-xl border-t-2 border-r-2 border-slate-400 flex items-center justify-center shadow-md">
        <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full silver-bolt flex items-center justify-center">
          <div className="w-1 h-2.5 bg-slate-700/60 -rotate-45" />
        </div>
      </div>
      <div className="absolute -bottom-1.5 -left-1.5 w-8 sm:w-10 h-8 sm:h-10 chamfer-bracket rounded-bl-xl border-b-2 border-l-2 border-slate-400 flex items-center justify-center shadow-md">
        <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full silver-bolt flex items-center justify-center">
          <div className="w-1 h-2.5 bg-slate-700/60 -rotate-45" />
        </div>
      </div>
      <div className="absolute -bottom-1.5 -right-1.5 w-8 sm:w-10 h-8 sm:h-10 chamfer-bracket rounded-br-xl border-b-2 border-r-2 border-slate-400 flex items-center justify-center shadow-md">
        <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full silver-bolt flex items-center justify-center">
          <div className="w-1 h-2.5 bg-slate-700/60 rotate-45" />
        </div>
      </div>

      {/* Top Edge Cyan LED Slit */}
      <div className="w-3/4 mx-auto h-2 rounded-full cyan-illuminated-slot shadow-md -mt-1" />

      {/* BREAKING NEWS HEADER PANEL */}
      <div className="relative mt-1 mb-1 flex items-center overflow-hidden rounded-lg shadow-lg border border-red-500/80">
        <div className="flex-1 bg-gradient-to-r from-red-600 via-red-600 to-red-700 py-1 sm:py-1.5 px-2 sm:px-3 flex items-center justify-between">
          <span className={`${isMobile ? 'text-[11px] sm:text-sm' : 'text-base sm:text-lg md:text-xl'} font-black italic tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-display whitespace-nowrap`}>
            BREAKING NEWS
          </span>
          <span className="flex items-center gap-1 flex-shrink-0 ml-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            <span className="text-[8px] font-bold text-white tracking-widest uppercase">ON AIR</span>
          </span>
        </div>
        <div className="w-8 sm:w-16 h-7 sm:h-9 red-header-stripes border-l-2 border-red-900 flex-shrink-0" />
      </div>

      {/* COMPONENT 10: WHITE NEWS CONTENT AREA CARD (HEADING + NEWS STORY CONTENT ONLY) */}
      <div className="relative flex-1 bg-gradient-to-b from-white via-[#fcfdff] to-[#f1f5f9] rounded-2xl p-2 sm:p-3 flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-slate-300 overflow-hidden">
        {/* TOP: Hindi Headline */}
        <div className="text-center font-hindi pt-0.5">
          <h2 className={`${isMobile ? 'text-[11.5px] sm:text-xs' : 'text-sm sm:text-base md:text-[19px]'} font-extrabold text-[#0e223d] leading-tight tracking-tight`}>
            {SATELLITE_DATA.breakingNews.headlineLine1}
          </h2>
          <h3 className={`${isMobile ? 'text-sm sm:text-base' : 'text-lg sm:text-xl md:text-[24px]'} font-black text-[#dc2626] leading-snug my-0.5 tracking-tight`}>
            {SATELLITE_DATA.breakingNews.headlineHighlight}
          </h3>
          <h2 className={`${isMobile ? 'text-[11.5px] sm:text-xs' : 'text-sm sm:text-base md:text-[19px]'} font-extrabold text-[#0e223d] leading-tight tracking-tight`}>
            {SATELLITE_DATA.breakingNews.headlineLine2}
          </h2>
        </div>

        {/* Decorative Subtle Accent Divider */}
        <div className="relative my-1 flex items-center justify-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute w-2 h-2 rotate-45 bg-red-600 rounded-[1px] shadow-sm" />
        </div>

        {/* MIDDLE: News Story Content Points */}
        <div className="flex-1 flex flex-col justify-center gap-1 font-hindi px-0.5">
          <div className="p-1 sm:p-1.5 rounded-lg bg-gradient-to-r from-amber-50/90 via-slate-50 to-blue-50/80 border border-amber-200/80 shadow-sm">
            <p className={`${isMobile ? 'text-[9.5px] sm:text-[10px]' : 'text-[10.5px] sm:text-[11.5px]'} text-slate-800 leading-relaxed text-center font-medium`}>
              {SATELLITE_DATA.breakingNews.summary}
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-0.5">
            {SATELLITE_DATA.breakingNews.storyPoints?.map((item) => (
              <div key={item.id} className="flex items-center gap-1.5 bg-white/70 px-1.5 py-0.5 rounded border border-slate-200/80 shadow-xs">
                <span className="inline-flex items-center justify-center px-1 py-0.2 rounded text-[8px] font-bold bg-red-100 text-red-700 border border-red-200 flex-shrink-0">
                  {item.badge}
                </span>
                <p className={`${isMobile ? 'text-[9px] sm:text-[10px]' : 'text-[10.5px] sm:text-[11px]'} text-slate-700 leading-snug font-medium`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM: News Source / Live Broadcast Status Footer */}
        <div className="pt-1 border-t border-slate-200/90 flex items-center justify-between text-[9px] text-slate-500 font-hindi">
          <span className="font-semibold text-slate-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {SATELLITE_DATA.breakingNews.footerTag}
          </span>
          <span className="font-mono text-slate-400 font-bold text-[8px]">
            LIVE SYNC
          </span>
        </div>
      </div>

      {/* Bottom Edge Cyan LED Slit with Center Sensor Eye */}
      <div className="relative flex items-center justify-center mt-1.5">
        <div className="w-3/4 h-2 rounded-full cyan-illuminated-slot shadow-md" />
        <div className="absolute w-4 h-4 rounded-full cyan-glow-pip border border-white" />
      </div>
    </div>
  );

  // =========================================================================
  // SUB-RENDER 04: LOWER SUPPORT ASSEMBLY (THRUSTER PEDESTAL & GLOW ROD)
  // =========================================================================
  const renderLowerSupport = (isMobile) => (
    <div className={`relative flex flex-col items-center z-20 -mt-1 w-full ${isMobile ? 'max-w-[360px] sm:max-w-[400px]' : ''}`}>
      {/* 1. LOWER MOUNTING PLATE & SIDE DAMPERS */}
      <div className={`relative ${isMobile ? 'w-full max-w-[340px] sm:max-w-[380px]' : 'w-84 sm:w-96 md:w-[425px]'} flex items-center justify-center`}>
        {/* Left Damper */}
        <div className="absolute left-4 sm:left-8 top-0 w-7 sm:w-9 h-18 sm:h-22 dark-graphite-tube rounded-b-lg border-2 border-slate-500 flex flex-col items-center justify-between p-1 shadow-2xl z-20">
          <div className="w-full h-2.5 sm:h-3 gold-industrial-chassis rounded-t-sm" />
          <div className="w-3.5 sm:w-4 h-1.5 bg-slate-300 rounded-sm" />
          <div className="w-5 sm:w-7 h-3.5 sm:h-4 rounded-b-full cyan-glow-pip shadow-[0_4px_16px_rgba(56,189,248,1)]" />
        </div>

        {/* Wide Metallic Lower Mounting Plate */}
        <div className={`${isMobile ? 'w-[260px] sm:w-[320px]' : 'w-[300px] sm:w-[340px] md:w-[360px]'} h-[14px] sm:h-[16px] dark-graphite-tube rounded-b-md border-x-2 border-b-2 border-slate-500 flex items-center justify-between px-3 sm:px-4 shadow-lg z-10`}>
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full silver-bolt" />
          <div className="w-24 sm:w-44 h-1.5 rounded-full bg-slate-600" />
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full silver-bolt" />
        </div>

        {/* Right Damper */}
        <div className="absolute right-4 sm:right-8 top-0 w-7 sm:w-9 h-18 sm:h-22 dark-graphite-tube rounded-b-lg border-2 border-slate-500 flex flex-col items-center justify-between p-1 shadow-2xl z-20">
          <div className="w-full h-2.5 sm:h-3 gold-industrial-chassis rounded-t-sm" />
          <div className="w-3.5 sm:w-4 h-1.5 bg-slate-300 rounded-sm" />
          <div className="w-5 sm:w-7 h-3.5 sm:h-4 rounded-b-full cyan-glow-pip shadow-[0_4px_16px_rgba(56,189,248,1)]" />
        </div>
      </div>

      {/* 2. CENTRAL METALLIC CONNECTOR */}
      <div className="w-[170px] sm:w-[200px] md:w-[220px] h-[16px] sm:h-[18px] dark-graphite-tube rounded-sm border-x-2 border-b border-slate-600 shadow-md flex items-center justify-between px-3 z-20">
        <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
        <div className="w-20 sm:w-32 h-2 rounded-full cyan-illuminated-slot" />
        <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
      </div>

      {/* 3. CYLINDRICAL SUPPORT HOUSING */}
      <div className="relative flex flex-col items-center z-20">
        <div className="w-[190px] sm:w-[230px] md:w-[250px] h-[18px] sm:h-[20px] silver-collar-chrome rounded-sm border-t border-white shadow-md flex items-center justify-between px-4">
          <div className="w-2 h-2 rounded-full mini-silver-screw" />
          <div className="w-2 h-2 rounded-full mini-silver-screw" />
        </div>
        <div className="w-5 h-5 rounded-full cyan-glow-pip border-2 border-white -mt-2.5 shadow-[0_0_16px_rgba(56,189,248,1)] z-30" />
      </div>

      {/* 4. MAIN PEDESTAL / CONICAL THRUSTER */}
      <div className="relative flex flex-col items-center -mt-1.5 z-10">
        <div 
          className="relative w-[210px] sm:w-[260px] md:w-[290px] h-[85px] sm:h-[105px] md:h-[115px] silver-pedestal-chrome border-t-2 border-slate-300 shadow-[0_24px_50px_rgba(0,0,0,0.45)] flex items-center justify-center overflow-visible"
          style={{
            clipPath: "polygon(22% 0%, 78% 0%, 100% 100%, 0% 100%)",
            borderRadius: "2px 2px 28px 28px",
          }}
        />

        <div className="w-[210px] sm:w-[260px] md:w-[290px] h-[26px] sm:h-[32px] -mt-5 rounded-[50%] dark-graphite-tube border-2 border-slate-400 shadow-[inset_0_4px_12px_rgba(0,0,0,0.95),0_10px_20px_rgba(0,0,0,0.7)] flex items-center justify-center z-10">
          <div className="w-[155px] sm:w-[195px] md:w-[220px] h-[14px] sm:h-[18px] rounded-[50%] bg-[#020b18] border border-cyan-800" />
        </div>

        {/* 5. BOTTOM BLUE ENERGY GLOW ROD */}
        <motion.div 
          className="relative -mt-2 w-5 sm:w-5.5 h-14 sm:h-18 rounded-b-full cyan-illuminated-slot flex flex-col items-center justify-end z-20"
          animate={{
            boxShadow: [
              "0 0 14px #38bdf8, 0 0 28px rgba(56,189,248,0.85)",
              "0 0 26px #7dd3fc, 0 0 52px rgba(56,189,248,1)",
              "0 0 14px #38bdf8, 0 0 28px rgba(56,189,248,0.85)",
            ],
            height: ["52px", "68px", "52px"],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5.5 sm:w-6 h-5.5 sm:h-6 rounded-full cyan-glow-pip -mb-1 shadow-[0_0_24px_rgba(56,189,248,1)]" />
        </motion.div>

        {/* Floor Shadow */}
        <div className="w-[280px] sm:w-[400px] md:w-[500px] h-8 bg-slate-900/20 blur-xl rounded-full mt-3" />
      </div>
    </div>
  );

  // =========================================================================
  // SUB-RENDER 05: RIGHT DISPLAY PANEL (TOP NEWS LIST)
  // =========================================================================
  const renderRightPanel = (isMobile) => (
    <div className={`relative ${isMobile ? 'w-full max-w-[360px] sm:max-w-[400px] h-[280px] sm:h-[300px]' : 'w-[330px] sm:w-[370px] md:w-[410px] lg:w-[425px] h-[270px] sm:h-[300px] md:h-[335px]'} rounded-3xl gold-industrial-chassis gold-outer-bevel p-2.5 sm:p-3.5 flex items-center justify-center shadow-2xl flex-shrink-0 mx-auto`}>
      {/* Left-Edge Mounting Bracket (Desktop Only) */}
      {!isMobile && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-28 dark-graphite-tube rounded-l-md border-l-2 border-y-2 border-slate-500 shadow-lg flex flex-col justify-between py-1.5 items-center">
          <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
        </div>
      )}

      {/* Inner High-Tech Display Screen Bezel */}
      <div className="relative w-full h-full rounded-2xl solar-matrix-grid border-2 border-cyan-400/80 p-3 sm:p-3.5 overflow-hidden flex flex-col justify-between shadow-[inset_0_0_30px_rgba(2,132,199,0.85)]">
        {/* Red Angled TOP NEWS Header Panel */}
        <div className="relative flex items-center overflow-hidden rounded-md shadow-md border border-red-500/80 mb-1.5">
          <div className="flex-1 bg-gradient-to-r from-red-600 via-red-600 to-red-700 py-1.5 px-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base md:text-xl font-black italic tracking-wider text-white font-display">
              TOP NEWS
            </span>
            <span className="px-2 py-0.5 rounded-full bg-red-950/70 border border-red-400 text-[10px] font-bold text-red-100 tracking-wider">
              FEED
            </span>
          </div>
          <div className="w-14 sm:w-16 h-8 red-header-stripes border-l-2 border-red-900" />
        </div>

        {/* 3 News Headlines with Red Play Triangular Bullets */}
        <div className="flex-1 flex flex-col justify-around py-0.5 font-hindi">
          {SATELLITE_DATA.topNews.headlines.map((item, index) => (
            <div key={item.id} className="relative flex flex-col">
              <div className="flex items-start gap-2.5">
                <div className="mt-1 flex-shrink-0 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.95)]" />
                <div className="flex-1">
                  <p className={`text-xs sm:text-sm md:text-[15px] font-bold leading-snug transition-colors duration-300 ${
                    activeHeadline === index ? 'text-white' : 'text-slate-100'
                  }`}>
                    {item.text}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] font-mono text-cyan-300/80">
                    <span className="bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-500/40 font-semibold">{item.category}</span>
                    <span>{item.timestamp}</span>
                  </div>
                </div>
              </div>
              {index < SATELLITE_DATA.topNews.headlines.length - 1 && (
                <div className="relative w-full h-[1px] my-1 rounded-full bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Screen Indicator */}
        <div className="flex items-center justify-between text-[10px] text-cyan-300/90 font-mono pt-1 border-t border-cyan-500/35">
          <span>TELETEXT SYNC</span>
          <span className="text-cyan-400 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            STREAM OK
          </span>
        </div>
      </div>

      {/* 4 Corner Bolts */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 rounded-full silver-bolt" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 rounded-full silver-bolt" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 rounded-full silver-bolt" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 rounded-full silver-bolt" />
    </div>
  );

  // =========================================================================
  // SUB-RENDER 06: LEFT HORIZONTAL MECHANICAL CONNECTOR (DESKTOP)
  // =========================================================================
  const renderLeftConnector = () => (
    <div className="relative w-12 sm:w-14 md:w-16 h-40 flex flex-col justify-between items-center z-20 flex-shrink-0">
      <div className="relative w-full h-8 flex items-center justify-between">
        <div className="w-3.5 h-7 dark-graphite-tube rounded-l-sm border-l-2 border-y border-slate-400 shadow-md" />
        <div className="flex-1 h-5 mx-0.5 dark-graphite-tube rounded-sm border-y-2 border-slate-400 flex items-center justify-between px-1 shadow-md">
          <div className="w-1.5 h-full bg-slate-200 rounded-sm" />
          <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          <div className="w-1.5 h-full bg-slate-200 rounded-sm" />
        </div>
        <div className="w-3.5 h-7 dark-graphite-tube rounded-r-sm border-r-2 border-y border-slate-400 shadow-md" />
      </div>

      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full dark-graphite-tube border-2 border-slate-400 flex items-center justify-center shadow-2xl z-10">
        <div className="w-5 h-5 rounded-full silver-bolt" />
      </div>

      <div className="relative w-full h-8 flex items-center justify-between">
        <div className="w-3.5 h-7 dark-graphite-tube rounded-l-sm border-l-2 border-y border-slate-400 shadow-md" />
        <div className="flex-1 h-5 mx-0.5 dark-graphite-tube rounded-sm border-y-2 border-slate-400 flex items-center justify-between px-1 shadow-md">
          <div className="w-1.5 h-full bg-slate-200 rounded-sm" />
          <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          <div className="w-1.5 h-full bg-slate-200 rounded-sm" />
        </div>
        <div className="w-3.5 h-7 dark-graphite-tube rounded-r-sm border-r-2 border-y border-slate-400 shadow-md" />
      </div>
    </div>
  );

  // =========================================================================
  // SUB-RENDER 07: RIGHT HORIZONTAL MECHANICAL CONNECTOR (DESKTOP)
  // =========================================================================
  const renderRightConnector = () => (
    <div className="relative w-12 sm:w-14 md:w-16 h-40 flex flex-col justify-between items-center z-20 flex-shrink-0">
      <div className="relative w-full h-8 flex items-center justify-between">
        <div className="w-3.5 h-7 dark-graphite-tube rounded-l-sm border-l-2 border-y border-slate-400 shadow-md" />
        <div className="flex-1 h-5 mx-0.5 dark-graphite-tube rounded-sm border-y-2 border-slate-400 flex items-center justify-between px-1 shadow-md">
          <div className="w-1.5 h-full bg-slate-200 rounded-sm" />
          <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          <div className="w-1.5 h-full bg-slate-200 rounded-sm" />
        </div>
        <div className="w-3.5 h-7 dark-graphite-tube rounded-r-sm border-r-2 border-y border-slate-400 shadow-md" />
      </div>

      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full dark-graphite-tube border-2 border-slate-400 flex items-center justify-center shadow-2xl z-10">
        <div className="w-5 h-5 rounded-full silver-bolt" />
      </div>

      <div className="relative w-full h-8 flex items-center justify-between">
        <div className="w-3.5 h-7 dark-graphite-tube rounded-l-sm border-l-2 border-y border-slate-400 shadow-md" />
        <div className="flex-1 h-5 mx-0.5 dark-graphite-tube rounded-sm border-y-2 border-slate-400 flex items-center justify-between px-1 shadow-md">
          <div className="w-1.5 h-full bg-slate-200 rounded-sm" />
          <div className="w-2.5 h-2.5 rounded-full silver-bolt" />
          <div className="w-1.5 h-full bg-slate-200 rounded-sm" />
        </div>
        <div className="w-3.5 h-7 dark-graphite-tube rounded-r-sm border-r-2 border-y border-slate-400 shadow-md" />
      </div>
    </div>
  );

  // =========================================================================
  // SUB-RENDER 08: VERTICAL ARTICULATED MECHANICAL CONNECTOR (MOBILE/TABLET)
  // (Dual Articulated Bent Pipes with Silver Collars & Central Pivot Knuckle)
  // =========================================================================
  const renderVerticalConnector = (_type) => (
    <div className="relative w-36 sm:w-40 h-10 flex items-center justify-between z-30 -my-1 pointer-events-none px-2">
      {/* Left articulated vertical pipe */}
      <div className="w-5 h-full flex flex-col items-center justify-between">
        <div className="w-4 h-2 dark-graphite-tube rounded-t-sm border-t-2 border-x border-slate-400" />
        <div className="w-3 flex-1 dark-graphite-tube border-x-2 border-slate-400 flex flex-col items-center justify-between py-0.5">
          <div className="w-full h-1 bg-slate-200" />
          <div className="w-2 h-2 rounded-full silver-bolt" />
          <div className="w-full h-1 bg-slate-200" />
        </div>
        <div className="w-4 h-2 dark-graphite-tube rounded-b-sm border-b-2 border-x border-slate-400" />
      </div>

      {/* Central Pivot Knuckle Joint with Heavy Silver Bolt & Cyan Slot */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-7 h-7 rounded-full dark-graphite-tube border-2 border-slate-400 flex items-center justify-center shadow-lg">
          <div className="w-3.5 h-3.5 rounded-full silver-bolt" />
        </div>
        <div className="w-16 h-1.5 rounded-full cyan-illuminated-slot -mt-1 shadow-[0_0_8px_#38bdf8]" />
      </div>

      {/* Right articulated vertical pipe */}
      <div className="w-5 h-full flex flex-col items-center justify-between">
        <div className="w-4 h-2 dark-graphite-tube rounded-t-sm border-t-2 border-x border-slate-400" />
        <div className="w-3 flex-1 dark-graphite-tube border-x-2 border-slate-400 flex flex-col items-center justify-between py-0.5">
          <div className="w-full h-1 bg-slate-200" />
          <div className="w-2 h-2 rounded-full silver-bolt" />
          <div className="w-full h-1 bg-slate-200" />
        </div>
        <div className="w-4 h-2 dark-graphite-tube rounded-b-sm border-b-2 border-x border-slate-400" />
      </div>
    </div>
  );

  // =========================================================================
  // SUB-RENDER 09: HORIZONTAL 3D SATELLITE DISH (LEFT WING - LARGE, THICK & VISIBLE)
  // =========================================================================
  const renderLeftDishWing = () => (
    <div className="relative w-[95px] sm:w-[105px] h-[190px] sm:h-[210px] flex items-center justify-end flex-shrink-0 z-20 -mr-2 sm:-mr-1">
      <svg 
        className="w-full h-full overflow-visible" 
        viewBox="0 0 110 200"
      >
        <defs>
          <radialGradient id="dishConcaveHoriz" cx="65%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#f1f5f9" />
            <stop offset="42%" stopColor="#cbd5e1" />
            <stop offset="68%" stopColor="#94a3b8" />
            <stop offset="86%" stopColor="#475569" />
            <stop offset="96%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>

          <radialGradient id="dishGoldBounceHoriz" cx="90%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(251,191,36,0.65)" />
            <stop offset="35%" stopColor="rgba(245,158,11,0.35)" />
            <stop offset="70%" stopColor="rgba(217,119,6,0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* 1. CHASSIS MOUNTING FLANGE (Bolted into Left Face of Chassis) */}
        <rect x="94" y="65" width="16" height="70" rx="3" fill="url(#metalRodGrad)" stroke="#475569" strokeWidth="1.2" />
        <circle cx="98" cy="74" r="2.5" fill="#e2e8f0" stroke="#334155" strokeWidth="0.8" />
        <circle cx="98" cy="126" r="2.5" fill="#e2e8f0" stroke="#334155" strokeWidth="0.8" />

        {/* 2. CENTRAL LIGHT MODULE (Cyan Glowing Slot at Mounting Neck) */}
        <rect x="84" y="76" width="12" height="48" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        <rect x="86" y="82" width="4" height="36" rx="1.5" fill="#0284c7" filter="url(#sphereGlow)" />
        <line x1="88" y1="84" x2="88" y2="116" stroke="#ffffff" strokeWidth="1.5" />

        {/* 3. GOLDEN DISH MOUNT RING (Rotating Base) */}
        <rect x="74" y="70" width="12" height="60" rx="3" fill="url(#goldSphereGrad)" stroke="#78350f" strokeWidth="1" />
        <circle cx="80" cy="78" r="2" fill="#f8fafc" stroke="#475569" strokeWidth="0.6" />
        <circle cx="80" cy="122" r="2" fill="#f8fafc" stroke="#475569" strokeWidth="0.6" />

        {/* 4. DISH UNDERSIDE METALLIC HULL (Back of Dish) */}
        <path 
          d="M 74 72 C 60 40, 48 30, 36 24 C 54 80, 54 120, 36 176 C 48 170, 60 160, 74 128 Z" 
          fill="url(#dishHullGrad)" 
          stroke="#475569" 
          strokeWidth="1.5" 
          filter="url(#dishRimGlow)"
        />

        {/* 5. PARABOLIC CONCAVE DISH BOWL (Facing Left) */}
        <ellipse cx="36" cy="100" rx="16" ry="76" fill="url(#dishConcaveHoriz)" />
        
        {/* Outer Deep Cobalt Blue Metallic Rim Bezel */}
        <ellipse cx="36" cy="100" rx="15.5" ry="75.5" fill="none" stroke="#1a428a" strokeWidth="6.5" />
        {/* Chrome Specular Lip Edge */}
        <ellipse cx="36" cy="100" rx="17.5" ry="77.5" fill="none" stroke="#e2e8f0" strokeWidth="1.8" opacity="0.9" />
        {/* Inner Cyan-Tinted Ring */}
        <ellipse cx="36" cy="100" rx="13.5" ry="72" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.75" />

        {/* Dish Inner Golden Reflection Bounce */}
        <ellipse cx="40" cy="100" rx="12" ry="65" fill="url(#dishGoldBounceHoriz)" />

        {/* Dish Concentric Signal Rings */}
        <ellipse cx="44" cy="100" rx="9" ry="50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
        <ellipse cx="48" cy="100" rx="6" ry="28" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />

        {/* Central Transmitter Feed Hub Socket */}
        <ellipse cx="54" cy="100" rx="4" ry="14" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
        <ellipse cx="54" cy="100" rx="2" ry="8" fill="#0284c7" />

        {/* 6. THREE SUPPORT RODS (Tripod Mount extending to Left Sphere) */}
        {/* Central Horizontal Support Rod */}
        <line x1="54" y1="100" x2="16" y2="100" stroke="url(#metalRodGrad)" strokeWidth="7" strokeLinecap="round" filter="url(#rodShadow)" />
        <rect x="50" y="96" width="6" height="8" rx="1" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />

        {/* Top Diagonal Support Rod */}
        <line x1="36" y1="42" x2="16" y2="97" stroke="url(#metalRodGradLeft)" strokeWidth="6" strokeLinecap="round" filter="url(#rodShadow)" />
        <circle cx="36" cy="42" r="3.5" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />

        {/* Bottom Diagonal Support Rod */}
        <line x1="36" y1="158" x2="16" y2="103" stroke="url(#metalRodGradRight)" strokeWidth="6" strokeLinecap="round" filter="url(#rodShadow)" />
        <circle cx="36" cy="158" r="3.5" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />

        {/* 7. TOP SIGNAL SPHERE (Receiver Node, Prominent Golden Sphere at Left Tip) */}
        <rect x="14" y="94" width="8" height="12" rx="1.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        
        <g filter="url(#sphereGlow)">
          <circle cx="13" cy="100" r="13" fill="url(#goldSphereGrad)" stroke="#78350f" strokeWidth="0.8" />
          <ellipse cx="13" cy="100" rx="2" ry="12.5" fill="none" stroke="rgba(120,53,15,0.4)" strokeWidth="0.8" />
          <circle cx="9" cy="95" r="3" fill="#ffffff" opacity="0.95" />
          <circle cx="11" cy="98" r="1.5" fill="#ffffff" opacity="0.8" />
        </g>
      </svg>
    </div>
  );

  // =========================================================================
  // SUB-RENDER 10: HORIZONTAL 3D THRUSTER PEDESTAL (RIGHT WING - LARGE, THICK & VISIBLE)
  // =========================================================================
  const renderRightThrusterWing = () => (
    <div className="relative w-[85px] sm:w-[95px] h-[170px] sm:h-[190px] flex items-center justify-start flex-shrink-0 z-20 -ml-2 sm:-ml-1">
      <svg 
        className="w-full h-full overflow-visible" 
        viewBox="0 0 100 180"
      >
        {/* 1. CHASSIS MOUNTING FLANGE (Bolted into Right Face of Chassis) */}
        <rect x="0" y="55" width="14" height="70" rx="3" fill="url(#metalRodGrad)" stroke="#475569" strokeWidth="1.2" />
        <circle cx="7" cy="65" r="2.5" fill="#e2e8f0" stroke="#334155" strokeWidth="0.8" />
        <circle cx="7" cy="115" r="2.5" fill="#e2e8f0" stroke="#334155" strokeWidth="0.8" />

        {/* 2. INDUSTRIAL SIDE DAMPERS (Top & Bottom Dampers with Cyan Nozzles) */}
        <g transform="translate(10, 42)">
          <rect x="0" y="0" width="16" height="12" rx="2" fill="url(#goldSphereGrad)" stroke="#78350f" strokeWidth="0.8" />
          <rect x="14" y="2" width="10" height="8" rx="1.5" fill="#1e293b" stroke="#475569" strokeWidth="0.8" />
          <circle cx="26" cy="6" r="3" fill="#38bdf8" filter="url(#sphereGlow)" />
        </g>
        <g transform="translate(10, 126)">
          <rect x="0" y="0" width="16" height="12" rx="2" fill="url(#goldSphereGrad)" stroke="#78350f" strokeWidth="0.8" />
          <rect x="14" y="2" width="10" height="8" rx="1.5" fill="#1e293b" stroke="#475569" strokeWidth="0.8" />
          <circle cx="26" cy="6" r="3" fill="#38bdf8" filter="url(#sphereGlow)" />
        </g>

        {/* 3. CYLINDRICAL SUPPORT HOUSING (Stepped Collar with Center Sensor Eye) */}
        <rect x="12" y="74" width="12" height="32" rx="2" fill="url(#metalRodGrad)" stroke="#64748b" strokeWidth="1" />
        <circle cx="18" cy="90" r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" filter="url(#sphereGlow)" />

        {/* 4. FLARED SILVER CONICAL PEDESTAL THRUSTER (Flaring to the Right) */}
        <path 
          d="M 24 82 L 56 60 C 60 78, 60 102, 56 120 L 24 98 Z" 
          fill="url(#metalRodGrad)" 
          stroke="#94a3b8" 
          strokeWidth="1.2" 
          filter="url(#rodShadow)"
        />

        {/* Thruster Mouth Opening (Ellipse at x=56) */}
        <ellipse cx="56" cy="90" rx="5" ry="30" fill="#020b18" stroke="#64748b" strokeWidth="1.5" />
        <ellipse cx="57" cy="90" rx="3.5" ry="24" fill="#021430" stroke="#0284c7" strokeWidth="1" />

        {/* 5. HORIZONTAL CYAN ENERGY GLOW ROD (Beaming Outward to the Right) */}
        <rect x="56" y="86" width="30" height="8" rx="4" fill="url(#metalRodGrad)" />
        <rect x="56" y="87" width="28" height="6" rx="3" fill="#38bdf8" filter="url(#sphereGlow)" />
        <line x1="58" y1="90" x2="82" y2="90" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

        {/* Glowing Tip Emitter */}
        <circle cx="86" cy="90" r="5" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" filter="url(#sphereGlow)" />
      </svg>
    </div>
  );

  return (
    <div className="relative w-full py-8 sm:py-12 bg-[#ffffff] flex flex-col items-center justify-center p-2 sm:p-6 select-none overflow-x-hidden">
      
      {/* SHARED SVG DEFINITIONS (Gradients & Filters for All Resolutions - Placed at Root for Reliable Browser Rendering) */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="metalRodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="15%" stopColor="#475569" />
            <stop offset="35%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#cbd5e1" />
            <stop offset="85%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="metalRodGradLeft" x1="0%" y1="0%" x2="70%" y2="70%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="20%" stopColor="#475569" />
            <stop offset="45%" stopColor="#cbd5e1" />
            <stop offset="55%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#cbd5e1" />
            <stop offset="90%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="metalRodGradRight" x1="100%" y1="0%" x2="30%" y2="70%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="20%" stopColor="#475569" />
            <stop offset="45%" stopColor="#cbd5e1" />
            <stop offset="55%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#cbd5e1" />
            <stop offset="90%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="dishHullGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="12%" stopColor="#475569" />
            <stop offset="30%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="70%" stopColor="#94a3b8" />
            <stop offset="88%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <radialGradient id="dishConcaveGrad" cx="50%" cy="30%" r="58%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#f1f5f9" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="65%" stopColor="#94a3b8" />
            <stop offset="84%" stopColor="#475569" />
            <stop offset="96%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>

          <radialGradient id="dishGoldenBounce" cx="50%" cy="92%" r="48%">
            <stop offset="0%" stopColor="rgba(251,191,36,0.65)" />
            <stop offset="35%" stopColor="rgba(245,158,11,0.35)" />
            <stop offset="70%" stopColor="rgba(217,119,6,0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <radialGradient id="goldSphereGrad" cx="35%" cy="26%" r="68%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#fff9c4" />
            <stop offset="44%" stopColor="#fbc02d" />
            <stop offset="72%" stopColor="#f57f17" />
            <stop offset="90%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </radialGradient>

          <filter id="rodShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.45" />
          </filter>
          <filter id="sphereGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.75" />
          </filter>
          <filter id="dishRimGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>
      </svg>
      
      {/* Embedded CSS for 3D Mechanical Materials, Specular Reflections, and Bevels */}
      <style>{`
        /* 1. GOLD INDUSTRIAL METALLIC CHASSIS (Thick, Specular Bevels, Orange-Gold Depth) */
        .gold-industrial-chassis {
          background: linear-gradient(145deg, 
            #fff59d 0%, 
            #ffca28 14%, 
            #ffa000 35%, 
            #f57c00 62%, 
            #e65100 85%, 
            #bf360c 100%
          );
          box-shadow: 
            0 20px 48px rgba(0, 0, 0, 0.35),
            inset 0 3px 3px rgba(255, 255, 255, 0.95),
            inset 0 -5px 8px rgba(110, 35, 0, 0.9),
            inset 4px 0 5px rgba(255, 248, 190, 0.8),
            inset -4px 0 6px rgba(130, 45, 0, 0.85);
        }

        .gold-outer-bevel {
          border: 7px solid;
          border-top-color: #fffde7;
          border-left-color: #ffe082;
          border-right-color: #f57f17;
          border-bottom-color: #bf360c;
        }

        /* 45-Degree Chamfered Corner Plates */
        .chamfer-bracket {
          background: linear-gradient(135deg, #334155 0%, #1e293b 60%, #0f172a 100%);
          box-shadow: 
            inset 0 1px 1px rgba(255,255,255,0.4),
            inset 0 -2px 3px rgba(0,0,0,0.8),
            0 4px 8px rgba(0,0,0,0.3);
        }

        /* Industrial Silver Bolt / Rivet */
        .silver-bolt {
          background: radial-gradient(circle at 35% 30%, 
            #ffffff 0%, 
            #e2e8f0 35%, 
            #94a3b8 65%, 
            #475569 90%, 
            #1e293b 100%
          );
          box-shadow: 
            0 2px 4px rgba(0,0,0,0.4),
            inset 0 1px 1px rgba(255,255,255,0.9),
            inset 0 -1px 2px rgba(15,23,42,0.8);
        }

        /* Mini Silver Screw with Center Slot */
        .mini-silver-screw {
          background: radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
          box-shadow: 0 1px 2px rgba(0,0,0,0.5), inset 0 0.5px 0.5px #fff;
          position: relative;
        }
        .mini-silver-screw::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 1px;
          background: #334155;
        }

        /* 2. SILVER & CHROME INDUSTRIAL FINISHES */
        .silver-chrome-specular {
          background: linear-gradient(135deg, 
            #ffffff 0%, 
            #f1f5f9 22%, 
            #cbd5e1 45%, 
            #94a3b8 68%, 
            #e2e8f0 85%, 
            #64748b 100%
          );
          box-shadow: 
            0 8px 24px rgba(0,0,0,0.35),
            inset 0 2px 2px rgba(255,255,255,0.95),
            inset 0 -2px 3px rgba(30,41,59,0.7);
        }

        /* Stepped Silver Collar Chrome Specular */
        .silver-collar-chrome {
          background: linear-gradient(90deg, 
            #1e293b 0%, 
            #475569 12%, 
            #cbd5e1 32%, 
            #ffffff 50%, 
            #cbd5e1 68%, 
            #64748b 88%, 
            #1e293b 100%
          );
          box-shadow: 
            0 4px 12px rgba(0,0,0,0.35),
            inset 0 2px 2px rgba(255,255,255,0.9),
            inset 0 -2px 4px rgba(15,23,42,0.8);
        }

        /* 14. FLARED SILVER CONICAL PEDESTAL (Thruster Housing Specular Chrome) */
        .silver-pedestal-chrome {
          background: linear-gradient(90deg, 
            #1e293b 0%, 
            #475569 10%, 
            #94a3b8 20%, 
            #cbd5e1 32%, 
            #ffffff 48%, 
            #f8fafc 52%, 
            #e2e8f0 65%, 
            #94a3b8 78%, 
            #475569 90%, 
            #1e293b 100%
          );
          box-shadow: 
            0 24px 50px rgba(0,0,0,0.45),
            inset 0 3px 4px rgba(255,255,255,0.95),
            inset 0 -8px 16px rgba(15,23,42,0.95);
        }

        /* Dark Metallic Tubes & Joints */
        .dark-graphite-tube {
          background: linear-gradient(145deg, #334155 0%, #1e293b 50%, #0f172a 100%);
          box-shadow: 
            inset 0 1px 1px rgba(255,255,255,0.3),
            inset 0 -2px 4px rgba(0,0,0,0.9),
            0 6px 14px rgba(0,0,0,0.45);
        }

        /* 3. CONCAVE SATELLITE DISH BOWL */
        .dish-concave-surface {
          background: 
            radial-gradient(ellipse 75% 60% at 50% 28%, 
              #ffffff 0%, 
              #f1f5f9 20%, 
              #cbd5e1 42%, 
              #94a3b8 65%, 
              #475569 82%, 
              #1e293b 96%
            );
          box-shadow: 
            inset 0 24px 36px rgba(255,255,255,0.95),
            inset 0 -32px 48px rgba(15,23,42,0.95),
            inset 20px 0 26px rgba(71,85,105,0.45),
            inset -20px 0 26px rgba(71,85,105,0.45),
            0 16px 40px rgba(0,0,0,0.35);
        }

        /* 1. TOP SIGNAL SPHERE (Ø 48px Golden Spherical Receiver Node) */
        .gold-receiver-sphere {
          background: radial-gradient(circle at 35% 26%, 
            #ffffff 0%, 
            #fff9c4 22%, 
            #fbc02d 48%, 
            #f57f17 74%, 
            #bf360c 96%
          );
          box-shadow: 
            0 0 22px rgba(251,191,36,0.95),
            0 0 42px rgba(245,158,11,0.5),
            inset -3px -3px 6px rgba(120,53,15,0.9);
        }

        /* NEON CYAN ILLUMINATED ACCENTS */
        .cyan-illuminated-slot {
          background: linear-gradient(90deg, #0284c7 0%, #38bdf8 25%, #ffffff 50%, #38bdf8 75%, #0284c7 100%);
          box-shadow: 
            0 0 8px #38bdf8,
            0 0 22px rgba(56,189,248,0.9),
            inset 0 0 4px #ffffff;
        }

        .cyan-glow-pip {
          background: radial-gradient(circle, #e0f2fe 15%, #38bdf8 65%, #0284c7 100%);
          box-shadow: 
            0 0 12px #38bdf8, 
            0 0 24px rgba(56,189,248,1);
        }

        /* 8/12. SOLAR CELL HIGH-TECH DISPLAY GRID */
        .solar-matrix-grid {
          background-color: #031842;
          background-image: 
            linear-gradient(to right, rgba(0, 229, 255, 0.45) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(0, 229, 255, 0.45) 1.5px, transparent 1.5px);
          background-size: 32px 32px;
        }

        /* RED HEADER HAZARD STRIPES */
        .red-header-stripes {
          background: repeating-linear-gradient(
            -45deg,
            #dc2626,
            #dc2626 9px,
            #7f1d1d 9px,
            #7f1d1d 16px
          );
        }

        /* 5. CENTRAL LIGHT HOUSING BEVEL (W: 200px, H: 62px, 45-degree top chamfers) */
        .central-light-chassis {
          background: linear-gradient(180deg, #334155 0%, #1e293b 35%, #0f172a 100%);
          box-shadow: 
            0 6px 16px rgba(0,0,0,0.45),
            inset 0 1.5px 2px rgba(255,255,255,0.4),
            inset 0 -2px 4px rgba(0,0,0,0.8);
          clip-path: polygon(12% 0%, 88% 0%, 100% 28%, 100% 100%, 0% 100%, 0% 28%);
        }

        /* SILVER BEZEL PLATE FOR CYAN LIGHT */
        .silver-bezel-plate {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 30%, #94a3b8 65%, #f8fafc 90%, #64748b 100%);
          box-shadow: 
            0 2px 6px rgba(0,0,0,0.5),
            inset 0 1px 1.5px rgba(255,255,255,0.95),
            inset 0 -1.5px 2px rgba(15,23,42,0.75);
        }

        /* INDICATOR HOUSING GLASS OVERLAY */
        .indicator-glass-glare {
          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.06) 45%, transparent 46%);
        }
      `}</style>

      {/* MASTER SCALER & WRAPPER TO ENSURE PERFECT STABILITY ACROSS ALL RESOLUTIONS */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center overflow-visible">
        
        {/* ========================================================================= */}
        {/* DESKTOP VIEW (lg:flex, hidden on mobile/tablet)                           */}
        {/* Horizontal 3D broadcasting matrix: Left Panel <-> Center Machine <-> Right Panel */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex flex-col items-center justify-center w-full transform lg:scale-[0.88] xl:scale-100 origin-center transition-transform duration-200 my-auto py-2">
          {/* Top Satellite Assembly */}
          {renderTopSatellite(false)}

          {/* Three-Panel Connected Broadcasting Row */}
          <div className="relative flex items-center justify-center z-30 -mt-0.5 w-full">
            {renderLeftPanel(false)}
            {renderLeftConnector()}
            {renderMainChassis(false)}
            {renderRightConnector()}
            {renderRightPanel(false)}
          </div>

          {/* Lower Support Assembly */}
          {renderLowerSupport(false)}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW (flex lg:hidden)                                     */}
        {/* Rotated 90° Broadcast Matrix: Top Panel -> Rotated Middle Unit -> Bottom Panel */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col items-center justify-center w-full px-1 sm:px-3 py-3 gap-0 max-w-[420px] mx-auto">
          {/* 1. TOP PANEL: CRCCF HEADLINES */}
          {renderLeftPanel(true)}

          {/* Top Articulated Vertical Connector (Connecting Top Panel directly to Top of Chassis!) */}
          {renderVerticalConnector("TOP")}

          {/* 2. ROTATED 90° SATELLITE BROADCASTING UNIT: */}
          {/* Left Wing: Large 3D Satellite Dish <=== Center: Main Chassis ===> Right Wing: Large 3D Thruster */}
          <div className="relative flex items-center justify-center w-full my-1 overflow-visible">
            {/* Left Wing: High-Detail Large 3D Satellite Dish (Pointing Left, Thick & Clearly Visible) */}
            {renderLeftDishWing()}

            {/* Center: Main Control Body (Upright, Legible News Card) */}
            <div className="w-[210px] sm:w-[235px] flex-shrink-0 z-20">
              {renderMainChassis(true)}
            </div>

            {/* Right Wing: High-Detail Large 3D Conical Thruster (Pointing Right, Thick & Clearly Visible) */}
            {renderRightThrusterWing()}
          </div>

          {/* Bottom Articulated Vertical Connector (Connecting Bottom of Chassis directly to Bottom Panel!) */}
          {renderVerticalConnector("BOTTOM")}

          {/* 3. BOTTOM PANEL: TOP NEWS */}
          {renderRightPanel(true)}
        </div>

      </div>
    </div>
  );
}

export const Section13 = () => {
  return (
    <section
      id="section-13"
      className="w-full relative select-none overflow-hidden bg-white border-b border-slate-200"
    >
      <SatelliteNewsMachine />
    </section>
  );
};

export default Section13;
