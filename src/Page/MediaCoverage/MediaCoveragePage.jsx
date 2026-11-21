import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, Newspaper, Megaphone, Scale, Search, Users,
  CreditCard, CheckCircle, HeartHandshake, Lock, Siren, FileText,
  TrendingUp, AlertTriangle, DollarSign, Landmark, Cpu, PhoneCall,
  Award, CloudLightning, Activity, ShieldAlert, Eye, Sparkles,
  Briefcase, GraduationCap, Trees, ShoppingBag, KeyRound, MessageSquare,
  Globe, Radio, Zap, Building2, Compass, Layers,
  ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';
import {
  MEDIA_COVERAGE_HEADER,
  BROADCAST_INFO,
  MEDIA_CARDS_DATA
} from './MediaCoveragePageData';

// Lucide Icon Component Mapping
const ICON_MAP = {
  ShieldCheck, Newspaper, Megaphone, Scale, Search, Users,
  CreditCard, CheckCircle, HeartHandshake, Lock, Siren, FileText,
  TrendingUp, AlertTriangle, DollarSign, Landmark, Cpu, PhoneCall,
  Award, CloudLightning, Activity, ShieldAlert, Eye, Sparkles,
  Briefcase, GraduationCap, Trees, ShoppingBag, KeyRound, MessageSquare,
  Globe, Radio, Zap, Building2, Compass, Layers,
};

/* ========================================================
   1. CASCADING PLANT COMPONENT (100% Vector SVG)
   ======================================================== */
function CascadingPlant({ className = '' }) {
  const numFlutes = 15;
  const flutes = Array.from({ length: numFlutes }, (_, i) => {
    const t = (i / (numFlutes - 1)) * 2 - 1;
    const x = 100 + t * 44;
    const depth = Math.sqrt(Math.max(0, 1 - t * t));
    return { x, depth, t };
  });

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      <svg
        viewBox="0 0 240 315"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="mcCeramicGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cfc7b8" />
            <stop offset="18%" stopColor="#ede6da" />
            <stop offset="42%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f4ede2" />
            <stop offset="88%" stopColor="#dfd7c8" />
            <stop offset="100%" stopColor="#bcb2a0" />
          </linearGradient>

          <linearGradient id="mcSoilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e140d" />
            <stop offset="100%" stopColor="#3d2a1b" />
          </linearGradient>

          <linearGradient id="mcLeafDark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18360d" />
            <stop offset="100%" stopColor="#285416" />
          </linearGradient>

          <linearGradient id="mcLeafMid" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#295916" />
            <stop offset="100%" stopColor="#488628" />
          </linearGradient>

          <linearGradient id="mcLeafBright" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#437d22" />
            <stop offset="100%" stopColor="#71b53b" />
          </linearGradient>

          <linearGradient id="mcLeafHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5ea12e" />
            <stop offset="100%" stopColor="#98db52" />
          </linearGradient>

          <linearGradient id="mcStemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#315918" />
            <stop offset="100%" stopColor="#497c25" />
          </linearGradient>

          <radialGradient id="mcBaseShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.25)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <filter id="mcDrawerVineShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="-2" dy="3" stdDeviation="2.5" floodColor="#000" floodOpacity="0.38" />
          </filter>
        </defs>

        <ellipse cx="100" cy="190" rx="46" ry="6" fill="url(#mcBaseShadow)" />

        <g id="ceramic-planter">
          <path
            d="M62,115 C52,135 50,170 64,186 C74,192 126,192 136,186 C150,170 148,135 138,115 Z"
            fill="url(#mcCeramicGrad)"
            stroke="#cfc5b4"
            strokeWidth="0.8"
          />
          <ellipse cx="100" cy="115" rx="38" ry="9" fill="url(#mcCeramicGrad)" stroke="#e0d7c7" strokeWidth="1" />
          <ellipse cx="100" cy="115" rx="34" ry="7" fill="url(#mcSoilGrad)" />

          {flutes.map((flute, idx) => (
            <path
              key={idx}
              d={`M${flute.x},118 C${flute.x + flute.t * 3},138 ${flute.x + flute.t * 4},168 ${flute.x + flute.t * 1.5},186`}
              stroke={`rgba(130, 115, 95, ${0.12 + (1 - flute.depth) * 0.22})`}
              strokeWidth={1.2 + flute.depth * 0.8}
              strokeLinecap="round"
              fill="none"
            />
          ))}

          <path
            d="M94,119 C94,138 93,168 95,186"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M66,185 C78,190 122,190 134,185"
            stroke="rgba(0, 0, 0, 0.22)"
            strokeWidth="2"
            fill="none"
          />
        </g>

        <g id="foliage-background">
          <path d="M50,100 C40,90 38,75 52,80 C62,83 64,100 50,100 Z" fill="url(#mcLeafDark)" />
          <path d="M42,110 C30,100 32,85 45,93 C54,99 52,110 42,110 Z" fill="url(#mcLeafDark)" />
          <path d="M65,80 C55,65 58,53 72,60 C82,65 78,83 65,80 Z" fill="url(#mcLeafDark)" />
          <path d="M85,60 C80,40 95,35 102,50 C108,63 95,70 85,60 Z" fill="url(#mcLeafDark)" />
          <path d="M110,55 C115,37 130,40 132,53 C134,65 120,70 110,55 Z" fill="url(#mcLeafDark)" />
          <path d="M135,70 C145,55 160,63 155,77 C150,87 138,83 135,70 Z" fill="url(#mcLeafDark)" />
          <path d="M148,90 C162,80 175,90 168,105 C162,115 148,103 148,90 Z" fill="url(#mcLeafDark)" />
          <path d="M152,110 C168,103 180,117 172,130 C165,137 150,123 152,110 Z" fill="url(#mcLeafDark)" />
        </g>

        <g id="foliage-midground">
          <ellipse cx="62" cy="95" rx="14" ry="10" transform="rotate(-25 62 95)" fill="url(#mcLeafMid)" />
          <ellipse cx="52" cy="83" rx="13" ry="9" transform="rotate(-40 52 83)" fill="url(#mcLeafBright)" />
          <ellipse cx="70" cy="77" rx="15" ry="11" transform="rotate(-15 70 77)" fill="url(#mcLeafMid)" />
          <ellipse cx="60" cy="65" rx="14" ry="9" transform="rotate(-30 60 65)" fill="url(#mcLeafBright)" />
          <ellipse cx="80" cy="63" rx="16" ry="11" transform="rotate(-5 80 63)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="74" cy="53" rx="14" ry="9" transform="rotate(-20 74 53)" fill="url(#mcLeafBright)" />
          <ellipse cx="98" cy="50" rx="17" ry="12" transform="rotate(5 98 50)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="92" cy="67" rx="16" ry="11" transform="rotate(-10 92 67)" fill="url(#mcLeafBright)" />
          <ellipse cx="108" cy="61" rx="17" ry="12" transform="rotate(15 108 61)" fill="url(#mcLeafMid)" />
          <ellipse cx="118" cy="51" rx="15" ry="10" transform="rotate(25 118 51)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="102" cy="80" rx="18" ry="12" transform="rotate(2 102 80)" fill="url(#mcLeafMid)" />
          <ellipse cx="85" cy="85" rx="16" ry="11" transform="rotate(-15 85 85)" fill="url(#mcLeafBright)" />
          <ellipse cx="118" cy="77" rx="16" ry="11" transform="rotate(20 118 77)" fill="url(#mcLeafBright)" />
          <ellipse cx="132" cy="63" rx="16" ry="11" transform="rotate(30 132 63)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="144" cy="77" rx="15" ry="10" transform="rotate(40 144 77)" fill="url(#mcLeafBright)" />
          <ellipse cx="135" cy="90" rx="17" ry="12" transform="rotate(25 135 90)" fill="url(#mcLeafMid)" />
          <ellipse cx="152" cy="97" rx="15" ry="10" transform="rotate(45 152 97)" fill="url(#mcLeafBright)" />
        </g>

        <g id="foliage-foreground">
          <ellipse cx="58" cy="107" rx="11" ry="8" transform="rotate(-20 58 107)" fill="url(#mcLeafBright)" />
          <ellipse cx="72" cy="101" rx="12" ry="9" transform="rotate(-10 72 101)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="82" cy="109" rx="11" ry="8" transform="rotate(10 82 109)" fill="url(#mcLeafBright)" />

          <path d="M96,113 Q95,127 98,139" stroke="url(#mcStemGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <ellipse cx="94" cy="121" rx="7" ry="5" transform="rotate(-25 94 121)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="102" cy="127" rx="6.5" ry="4.5" transform="rotate(30 102 127)" fill="url(#mcLeafBright)" />
          <ellipse cx="96" cy="133" rx="6" ry="4.5" transform="rotate(-15 96 133)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="99" cy="140" rx="5.5" ry="4" transform="rotate(15 99 140)" fill="url(#mcLeafHighlight)" />

          <ellipse cx="116" cy="103" rx="13" ry="9" transform="rotate(15 116 103)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="128" cy="110" rx="12" ry="8" transform="rotate(35 128 110)" fill="url(#mcLeafBright)" />
          <ellipse cx="140" cy="107" rx="13" ry="9" transform="rotate(40 140 107)" fill="url(#mcLeafHighlight)" />
        </g>

        <g id="cascading-vines" filter="url(#mcDrawerVineShadow)">
          <path
            d="M148,103 C168,125 178,155 176,190 C174,225 186,260 180,305"
            stroke="url(#mcStemGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="158" cy="117" rx="10" ry="7" transform="rotate(45 158 117)" fill="url(#mcLeafBright)" />
          <ellipse cx="168" cy="127" rx="9" ry="6.5" transform="rotate(35 168 127)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="162" cy="139" rx="9.5" ry="7" transform="rotate(65 162 139)" fill="url(#mcLeafMid)" />
          <ellipse cx="174" cy="147" rx="9" ry="6.5" transform="rotate(40 174 147)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="168" cy="160" rx="9" ry="6" transform="rotate(60 168 160)" fill="url(#mcLeafBright)" />
          <ellipse cx="178" cy="170" rx="8.5" ry="6" transform="rotate(30 178 170)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="170" cy="184" rx="8.5" ry="6" transform="rotate(55 170 184)" fill="url(#mcLeafMid)" />

          <ellipse cx="180" cy="196" rx="8.5" ry="6" transform="rotate(25 180 196)" fill="url(#mcLeafBright)" />
          <ellipse cx="172" cy="210" rx="8.5" ry="6" transform="rotate(65 172 210)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="182" cy="222" rx="8" ry="5.5" transform="rotate(35 182 222)" fill="url(#mcLeafBright)" />
          <ellipse cx="175" cy="236" rx="8" ry="5.5" transform="rotate(50 175 236)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="184" cy="250" rx="7.5" ry="5" transform="rotate(30 184 250)" fill="url(#mcLeafBright)" />
          <ellipse cx="177" cy="264" rx="7.5" ry="5" transform="rotate(45 177 264)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="183" cy="278" rx="7" ry="4.5" transform="rotate(25 183 278)" fill="url(#mcLeafBright)" />
          <ellipse cx="178" cy="292" rx="6.5" ry="4" transform="rotate(40 178 292)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="180" cy="305" rx="5.5" ry="3.5" transform="rotate(25 180 305)" fill="url(#mcLeafHighlight)" />

          <path
            d="M138,120 C152,142 158,170 154,205 C150,235 156,260 151,288"
            stroke="url(#mcStemGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="145" cy="133" rx="9" ry="6" transform="rotate(40 145 133)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="154" cy="145" rx="8.5" ry="6" transform="rotate(30 154 145)" fill="url(#mcLeafBright)" />
          <ellipse cx="146" cy="158" rx="8.5" ry="6" transform="rotate(60 146 158)" fill="url(#mcLeafMid)" />
          <ellipse cx="156" cy="170" rx="8" ry="5.5" transform="rotate(35 156 170)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="148" cy="184" rx="8.5" ry="5.5" transform="rotate(55 148 184)" fill="url(#mcLeafBright)" />

          <ellipse cx="156" cy="198" rx="8" ry="5.5" transform="rotate(25 156 198)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="149" cy="214" rx="7.5" ry="5" transform="rotate(50 149 214)" fill="url(#mcLeafMid)" />
          <ellipse cx="155" cy="230" rx="7.5" ry="5" transform="rotate(30 155 230)" fill="url(#mcLeafBright)" />
          <ellipse cx="149" cy="246" rx="7" ry="4.5" transform="rotate(45 149 246)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="154" cy="262" rx="6.5" ry="4.5" transform="rotate(30 154 262)" fill="url(#mcLeafBright)" />
          <ellipse cx="150" cy="276" rx="6" ry="4" transform="rotate(40 150 276)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="151" cy="288" rx="5" ry="3.5" transform="rotate(20 151 288)" fill="url(#mcLeafHighlight)" />

          <path
            d="M128,128 C138,146 140,172 134,212"
            stroke="url(#mcStemGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="134" cy="140" rx="7.5" ry="5" transform="rotate(35 134 140)" fill="url(#mcLeafBright)" />
          <ellipse cx="141" cy="154" rx="7" ry="5" transform="rotate(25 141 154)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="133" cy="168" rx="7" ry="4.5" transform="rotate(50 133 168)" fill="url(#mcLeafMid)" />
          <ellipse cx="138" cy="182" rx="6.5" ry="4.5" transform="rotate(30 138 182)" fill="url(#mcLeafHighlight)" />
          <ellipse cx="134" cy="198" rx="6.5" ry="4.5" transform="rotate(40 134 198)" fill="url(#mcLeafBright)" />
          <ellipse cx="135" cy="212" rx="5.5" ry="3.5" transform="rotate(30 135 212)" fill="url(#mcLeafHighlight)" />
        </g>
      </svg>
    </div>
  );
}

/* ========================================================
   2. SHELF PLANT COMPONENT (100% Vector SVG)
   ======================================================== */
function ShelfPlant({ className = '' }) {
  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="mcShelfPotGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d5cebe" />
            <stop offset="20%" stopColor="#f2ece1" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#ece4d8" />
            <stop offset="100%" stopColor="#c5bea8" />
          </linearGradient>

          <linearGradient id="mcSpLeafDark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a3b12" />
            <stop offset="100%" stopColor="#2c5a1a" />
          </linearGradient>

          <linearGradient id="mcSpLeafMid" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2b5e19" />
            <stop offset="100%" stopColor="#4f932e" />
          </linearGradient>

          <linearGradient id="mcSpLeafBright" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4d8c2c" />
            <stop offset="100%" stopColor="#82cf46" />
          </linearGradient>

          <radialGradient id="mcSpShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
            <stop offset="60%" stopColor="rgba(0,0,0,0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <ellipse cx="50" cy="112" rx="26" ry="4.5" fill="url(#mcSpShadow)" />

        <g id="shelf-pot">
          <path
            d="M28,68 C27,85 30,105 35,110 C42,113 58,113 65,110 C70,105 73,85 72,68 Z"
            fill="url(#mcShelfPotGrad)"
            stroke="#cfc5b3"
            strokeWidth="0.6"
          />
          <ellipse cx="50" cy="68" rx="22" ry="5.5" fill="url(#mcShelfPotGrad)" stroke="#ded6c5" strokeWidth="0.8" />
          <ellipse cx="50" cy="68" rx="19" ry="4" fill="#241a12" />
          <path d="M30,80 Q50,84 70,80" stroke="rgba(140, 125, 105, 0.2)" strokeWidth="0.8" fill="none" />
          <path d="M32,92 Q50,96 68,92" stroke="rgba(140, 125, 105, 0.2)" strokeWidth="0.8" fill="none" />
          <path d="M34,103 Q50,106 66,103" stroke="rgba(140, 125, 105, 0.18)" strokeWidth="0.8" fill="none" />
        </g>

        <g id="shelf-foliage">
          <ellipse cx="38" cy="52" rx="10" ry="7" transform="rotate(-35 38 52)" fill="url(#mcSpLeafDark)" />
          <ellipse cx="62" cy="50" rx="10" ry="7" transform="rotate(35 62 50)" fill="url(#mcSpLeafDark)" />
          <ellipse cx="50" cy="40" rx="10" ry="8" fill="url(#mcSpLeafDark)" />
          <ellipse cx="32" cy="58" rx="9" ry="6.5" transform="rotate(-45 32 58)" fill="url(#mcSpLeafMid)" />
          <ellipse cx="45" cy="48" rx="10" ry="7" transform="rotate(-15 45 48)" fill="url(#mcSpLeafMid)" />
          <ellipse cx="55" cy="47" rx="10" ry="7" transform="rotate(20 55 47)" fill="url(#mcSpLeafMid)" />
          <ellipse cx="68" cy="56" rx="9" ry="6.5" transform="rotate(45 68 56)" fill="url(#mcSpLeafMid)" />
          <ellipse cx="38" cy="63" rx="8" ry="5.5" transform="rotate(-25 38 63)" fill="url(#mcSpLeafBright)" />
          <ellipse cx="48" cy="56" rx="9" ry="6.5" transform="rotate(-5 48 56)" fill="url(#mcSpLeafBright)" />
          <ellipse cx="58" cy="58" rx="8.5" ry="6" transform="rotate(15 58 58)" fill="url(#mcSpLeafBright)" />
          <ellipse cx="63" cy="64" rx="7.5" ry="5" transform="rotate(35 63 64)" fill="url(#mcSpLeafBright)" />
          <ellipse cx="50" cy="65" rx="7" ry="5" transform="rotate(5 50 65)" fill="url(#mcSpLeafBright)" />
        </g>
      </svg>
    </div>
  );
}

/* ========================================================
   3. OPEN SHELF COMPONENT
   ======================================================== */
function OpenShelf({ isLit = true }) {
  return (
    <div 
      className="relative h-full flex-[1.67] bg-[#ede5d8] rounded-l-[1px] p-[3px] sm:p-[4px] md:p-[5px] flex flex-col justify-end"
      style={{
        boxShadow: `
          inset 0 1px 1px rgba(255, 255, 255, 0.9),
          inset -1px 0 2px rgba(0, 0, 0, 0.08)
        `,
      }}
    >
      <div 
        className="relative w-full h-full rounded-[1px] overflow-hidden flex items-end px-[3%] pb-[3%]"
        style={{
          background: `
            linear-gradient(180deg, 
              #4a3320 0%, 
              #68492e 20%, 
              #7d5838 50%, 
              #8a6341 80%, 
              #946c49 100%
            )
          `,
          boxShadow: `
            inset 0 6px 10px -2px rgba(0, 0, 0, 0.5),
            inset 3px 0 6px -1px rgba(0, 0, 0, 0.4),
            inset -3px 0 6px -1px rgba(0, 0, 0, 0.3)
          `,
        }}
      >
        {isLit && (
          <div 
            className="absolute top-0 inset-x-0 h-4 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 220, 140, 0.55) 0%, rgba(255, 195, 100, 0.2) 60%, transparent 100%)',
            }}
          />
        )}

        <div 
          className="absolute bottom-0 inset-x-0 h-[25%] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(255, 215, 150, 0.12) 60%, rgba(255, 225, 170, 0.25) 100%)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        />

        <div className="relative z-10 w-full h-[90%] flex items-end justify-between px-[1%]">
          {/* Small Decorative Plant */}
          <div className="relative w-[13%] h-[85%] flex flex-col items-center justify-end">
            <ShelfPlant />
          </div>

          {/* Hardcover Books Stack with Broadcast Book Title */}
          <div className="relative w-[35%] h-[72%] flex flex-col items-center justify-end">
            <div className="relative w-full flex flex-col items-center filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">
              <div 
                className="w-[90%] h-[8px] sm:h-[10.5px] md:h-[13px] bg-[#d5cbbd] rounded-[1px] border-b border-black/15 flex items-center px-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
              >
                <div className="w-2.5 h-[2px] bg-[#8c7b68]/60 rounded-full" />
              </div>
              <div 
                className="w-full h-[12px] sm:h-[15px] md:h-[18px] bg-[#fbf9f5] rounded-[1px] border border-[#d8d0c4] flex items-center justify-center px-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1.5px_3px_rgba(0,0,0,0.18)]"
              >
                <span className="text-[5px] sm:text-[6.5px] md:text-[8px] font-serif font-bold tracking-[0.11em] text-neutral-850 uppercase select-none truncate">
                  {BROADCAST_INFO.bookTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Black Set-Top Box with Blue Power Indicator */}
          <div className="relative w-[32%] h-[52%] flex flex-col items-center justify-end">
            <div 
              className="relative w-full h-[11px] sm:h-[14px] md:h-[18px] bg-[#141416] rounded-[2px] flex items-center justify-center px-2.5 border border-[#2b2b2e] shadow-[0_4px_8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]"
            >
              <div 
                className="absolute inset-[1px] rounded-[1px]"
                style={{
                  background: 'linear-gradient(180deg, #222226 0%, #131315 60%, #0c0c0e 100%)',
                }}
              />
              <div className="relative z-10 flex items-center gap-1.5">
                <div 
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1890ff] shadow-[0_0_6px_#00b4d8,0_0_10px_#0077b6] animate-pulse"
                />
              </div>
              <div className="absolute right-2 w-1 h-1 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   4. STORAGE DRAWER COMPONENT
   ======================================================== */
function StorageDrawer() {
  return (
    <div 
      className="relative h-full flex-[1] rounded-r-[1px] overflow-hidden flex items-center justify-center p-[3px] sm:p-[4px] md:p-[5px]"
      style={{
        backgroundColor: '#4a2510',
        boxShadow: `
          inset 0 1px 1px rgba(255, 255, 255, 0.25),
          inset -1px 0 2px rgba(0, 0, 0, 0.5)
        `,
      }}
    >
      <div 
        className="relative w-full h-full rounded-[1px] overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.25) 100%),
            url('/assets/wood_texture.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: `
            inset 0 1px 1px rgba(255, 255, 255, 0.3),
            inset 0 -1px 2px rgba(0, 0, 0, 0.5)
          `,
        }}
      >
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, transparent 2px, rgba(255,255,255,0.1) 4px, transparent 7px)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <div 
            className="relative w-12 sm:w-16 md:w-20 h-[3px] sm:h-[4px] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.55)]"
            style={{
              background: 'linear-gradient(180deg, #f0f0f2 0%, #c4c4c8 45%, #96969c 85%, #727278 100%)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.45), inset 0 1px 0.5px rgba(255,255,255,0.85)',
            }}
          >
            <div 
              className="absolute -top-[1.5px] left-1.5 w-[3px] h-[6px] sm:h-[7px] bg-[#a8a8ae] rounded-[0.5px] shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            />
            <div 
              className="absolute -top-[1.5px] right-1.5 w-[3px] h-[6px] sm:h-[7px] bg-[#a8a8ae] rounded-[0.5px] shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="w-14 sm:w-18 md:w-22 h-[3px] bg-black/35 blur-[2px] rounded-full mt-0.5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   5. FLOATING ENTERTAINMENT CONSOLE
   ======================================================== */
function EntertainmentConsole({ isLit = true }) {
  return (
    <div 
      className="absolute top-[71.5%] left-[4.8%] w-[91.5%] h-[16.8%] z-20 flex select-none animate-console-reveal"
      style={{
        filter: isLit 
          ? 'drop-shadow(0 14px 20px rgba(255, 185, 90, 0.45)) drop-shadow(0 22px 35px rgba(0, 0, 0, 0.25))'
          : 'drop-shadow(0 14px 20px rgba(0, 0, 0, 0.35))',
      }}
    >
      <div className="relative w-full h-full flex rounded-[2px] shadow-[0_12px_28px_-4px_rgba(0,0,0,0.38)]">
        <OpenShelf isLit={isLit} />
        <StorageDrawer />
      </div>

      {isLit && (
        <div 
          className="absolute -bottom-1 inset-x-2 h-[2px] pointer-events-none rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent 2%, rgba(255, 215, 130, 0.9) 15%, rgba(255, 215, 130, 0.9) 85%, transparent 98%)',
            boxShadow: '0 2px 10px rgba(255, 190, 80, 0.9)',
          }}
        />
      )}
    </div>
  );
}

/* ========================================================
   6. WOODEN SLATS COMPONENT
   ======================================================== */
function WoodenSlats({ isLit = true }) {
  const slats = Array.from({ length: 14 });

  return (
    <div 
      className="absolute top-[7.5%] bottom-[28.5%] right-[6.8%] w-[21.2%] z-10 flex overflow-hidden shadow-[-6px_0_12px_rgba(0,0,0,0.22)] animate-slats-reveal"
      style={{
        backgroundColor: '#2b160b',
      }}
    >
      {isLit && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 50% 50%, 
                rgba(255, 205, 115, 0.85) 0%, 
                rgba(245, 170, 65, 0.6) 45%, 
                rgba(215, 125, 35, 0.35) 80%,
                rgba(150, 75, 15, 0.15) 100%
              )
            `,
            boxShadow: 'inset 0 0 16px rgba(255, 190, 80, 0.6)',
          }}
        />
      )}

      {slats.map((_, index) => (
        <div 
          key={index}
          className="relative flex-1 h-full mx-[0.5px]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, 
                #1b0d06 0%, 
                #381c0d 14%, 
                #4e2813 45%, 
                #5a2f18 55%, 
                #381c0d 88%, 
                #180b05 100%
              ),
              url('/assets/wood_texture.png')
            `,
            backgroundSize: 'cover, 40px auto',
            backgroundPosition: `${index * 8}% 0%`,
            boxShadow: `
              inset 1px 0 0.5px rgba(255, 220, 160, 0.22),
              inset -1px 0 1px rgba(0, 0, 0, 0.85),
              2px 0 4px rgba(0, 0, 0, 0.45)
            `,
          }}
        >
          <div 
            className="absolute left-[38%] top-0 bottom-0 w-[1px] opacity-25 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,240,200,0.6) 50%, rgba(255,255,255,0.2) 100%)',
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ========================================================
   7. WALL LIGHTING COMPONENT
   ======================================================== */
function WallLighting({ intensity = 1, isLit = true }) {
  if (!isLit) return null;

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0">
      {/* Top Edge Strip */}
      <div 
        className="absolute left-[9.5%] right-[6.8%] top-[7.5%] h-[3px] -translate-y-1/2 rounded-full"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 230, 160, 0.4) 0%, rgba(255, 245, 205, 1) 15%, rgba(255, 248, 220, 1) 85%, rgba(255, 230, 160, 0.4) 100%)',
          boxShadow: `
            0 -2px 6px rgba(255, 235, 170, 0.95),
            0 -6px 14px rgba(255, 200, 100, 0.8),
            0 -16px 30px rgba(255, 180, 70, 0.55),
            0 -30px 60px rgba(255, 160, 50, 0.3)
          `,
          opacity: intensity,
        }}
      />

      {/* Left Edge Strip */}
      <div 
        className="absolute left-[9.5%] top-[7.5%] bottom-[28.5%] w-[3px] -translate-x-1/2 rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 230, 160, 0.4) 0%, rgba(255, 245, 205, 1) 15%, rgba(255, 248, 220, 1) 85%, rgba(255, 230, 160, 0.4) 100%)',
          boxShadow: `
            -2px 0 6px rgba(255, 235, 170, 0.95),
            -6px 0 14px rgba(255, 200, 100, 0.8),
            -16px 0 30px rgba(255, 180, 70, 0.55),
            -30px 0 60px rgba(255, 160, 50, 0.3)
          `,
          opacity: intensity,
        }}
      />

      {/* Right Edge Strip */}
      <div 
        className="absolute right-[6.8%] top-[7.5%] bottom-[28.5%] w-[3px] translate-x-1/2 rounded-full"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 230, 160, 0.4) 0%, rgba(255, 245, 205, 1) 15%, rgba(255, 248, 220, 1) 85%, rgba(255, 230, 160, 0.4) 100%)',
          boxShadow: `
            2px 0 6px rgba(255, 235, 170, 0.95),
            6px 0 14px rgba(255, 200, 100, 0.8),
            16px 0 30px rgba(255, 180, 70, 0.55),
            30px 0 60px rgba(255, 160, 50, 0.3)
          `,
          opacity: intensity,
        }}
      />

      {/* Panel Bottom Glow Strip */}
      <div 
        className="absolute left-[9.5%] right-[6.8%] top-[71.5%] h-[2.5px] -translate-y-1/2 rounded-full"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 230, 160, 0.4) 0%, rgba(255, 245, 205, 0.9) 15%, rgba(255, 248, 220, 0.9) 85%, rgba(255, 230, 160, 0.4) 100%)',
          boxShadow: `
            0 2px 8px rgba(255, 220, 130, 0.8),
            0 6px 18px rgba(255, 190, 80, 0.55)
          `,
          opacity: intensity,
        }}
      />

      {/* Floating Console Under-Glow */}
      <div 
        className="absolute left-[5.5%] right-[4.2%] top-[88.3%] h-[3px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 220, 140, 0.3) 0%, rgba(255, 245, 200, 1) 15%, rgba(255, 248, 220, 1) 85%, rgba(255, 220, 140, 0.3) 100%)',
          boxShadow: `
            0 3px 8px rgba(255, 235, 170, 0.95),
            0 8px 18px rgba(255, 200, 95, 0.85),
            0 18px 36px rgba(255, 175, 70, 0.65),
            0 32px 55px rgba(255, 150, 45, 0.4)
          `,
          opacity: intensity,
        }}
      />

      <div 
        className="absolute left-[10%] right-[8%] top-[89%] h-12 blur-xl"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 215, 135, 0.75) 0%, rgba(255, 185, 80, 0.45) 45%, rgba(240, 150, 45, 0.15) 75%, transparent 100%)',
          opacity: intensity,
        }}
      />
    </div>
  );
}

/* ========================================================
   8. DECORATIVE OBJECTS COMPONENT (Planter Placement)
   ======================================================== */
function DecorativeObjects() {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 select-none">
      <div 
        className="absolute right-[2.2%] top-[52.1%] w-[16.2%] aspect-[240/315] flex flex-col items-center animate-plant-reveal"
      >
        <CascadingPlant />
      </div>
    </div>
  );
}

/* ========================================================
   9. TELEVISION COMPONENT (Responsive + CRT & Card Animations)
   ======================================================== */
const CARDS_PER_PAGE_DESKTOP = 6;
const CARDS_PER_PAGE_MOBILE = 4;

function Television({ isPowered = true }) {
  const [screenOn, setScreenOn] = useState(isPowered);
  const [currentPage, setCurrentPage] = useState(0);
  const [time, setTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  // Responsive mobile detection (< 640px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 640 : false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsPerPage = isMobile ? CARDS_PER_PAGE_MOBILE : CARDS_PER_PAGE_DESKTOP;
  const totalPages = Math.ceil(MEDIA_CARDS_DATA.length / cardsPerPage);
  const safePage = Math.min(currentPage, Math.max(0, totalPages - 1));

  const [tvState, setTvState] = useState('idle');
  const [cardAnimKey, setCardAnimKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setCardAnimKey((prev) => prev + 1);
    }, 1200);
    return () => clearTimeout(initialTimer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const startIndex = safePage * cardsPerPage;
  const currentCards = MEDIA_CARDS_DATA.slice(startIndex, startIndex + cardsPerPage);

  const triggerPageTransition = (newPage) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTvState('closing');

    setTimeout(() => {
      setCurrentPage(newPage);
      setTvState('opening');
      setCardAnimKey((prev) => prev + 1);

      setTimeout(() => {
        setTvState('idle');
        setIsTransitioning(false);
      }, 700);
    }, 280);
  };

  const handlePrevPage = () => {
    const newPage = safePage > 0 ? safePage - 1 : totalPages - 1;
    triggerPageTransition(newPage);
  };

  const handleNextPage = () => {
    const newPage = safePage < totalPages - 1 ? safePage + 1 : 0;
    triggerPageTransition(newPage);
  };

  return (
    <div 
      className="absolute top-[11.5%] sm:top-[17.1%] left-[17.5%] sm:left-[20.2%] w-[64%] sm:w-[58.4%] h-[55%] sm:h-[45.4%] z-30 flex flex-col items-center select-none animate-tv-reveal"
      style={{
        filter: 'drop-shadow(0 16px 28px rgba(0, 0, 0, 0.55)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))',
      }}
    >
      {/* Outer Television Bezel */}
      <div className="relative w-full h-full bg-[#111111] rounded-[2px] p-[3px] sm:p-[4px] md:p-[5px] flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_0_1px_#050505]">
        
        {/* Inner Screen Frame */}
        <div className="relative w-full h-full overflow-hidden rounded-[1px] bg-[#02050e] flex items-center justify-center">
          
          {screenOn ? (
            <div 
              className={`relative w-full h-full bg-[#050c20] overflow-hidden flex flex-col justify-between origin-center ${
                tvState === 'closing' ? 'animate-tv-close' : ''
              } ${tvState === 'opening' ? 'animate-tv-open' : ''}`}
            >
              {/* Deep Ocean Blue Background with Glows */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(ellipse at 50% 10%, rgba(0, 102, 255, 0.35) 0%, transparent 60%),
                    radial-gradient(ellipse at 85% 85%, rgba(0, 150, 255, 0.25) 0%, transparent 55%),
                    radial-gradient(ellipse at 15% 90%, rgba(130, 0, 255, 0.2) 0%, transparent 55%),
                    linear-gradient(180deg, #060e28 0%, #030816 100%)
                  `,
                }}
              />

              <div 
                className="absolute bottom-0 inset-x-0 h-16 pointer-events-none opacity-25"
                style={{
                  background: 'radial-gradient(ellipse at 50% 100%, #0070f3 0%, transparent 70%)',
                }}
              />

              {/* 1. TOP BROADCAST BAR */}
              <div className="relative z-10 w-full flex items-center justify-between px-1.5 sm:px-3 pt-0.5 sm:pt-1.5 pb-0.5">
                {/* Channel Bug */}
                <div className="flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-md px-1 sm:px-2 py-0.2 sm:py-0.5 rounded border border-white/10 shadow-sm shrink-0">
                  <span className="bg-[#d90429] text-white text-[5px] sm:text-[8px] md:text-[9.5px] font-black px-0.5 sm:px-1 py-0.2 rounded-xs tracking-wider leading-none">
                    {BROADCAST_INFO.channelBug.badge}
                  </span>
                  <span className="text-white text-[5px] sm:text-[8px] md:text-[9.5px] font-extrabold tracking-wider leading-none">
                    {BROADCAST_INFO.channelBug.name}
                  </span>
                  <span className="text-amber-400 text-[4px] sm:text-[7.5px] font-bold tracking-widest uppercase border-l border-white/20 pl-1 sm:pl-1.5 leading-none">
                    {BROADCAST_INFO.channelBug.tag}
                  </span>
                </div>

                {/* LIVE Status & Real-Time Clock */}
                <div className="flex items-center gap-1 sm:gap-2 bg-black/60 backdrop-blur-md px-1 sm:px-2 py-0.2 sm:py-0.5 rounded border border-white/10 shadow-sm shrink-0 whitespace-nowrap">
                  <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-red-500 text-[4.5px] sm:text-[7.5px] md:text-[8.5px] font-black tracking-widest uppercase leading-none">
                      {BROADCAST_INFO.liveStatus}
                    </span>
                  </div>
                  <span className="text-white/30 text-[4.5px] sm:text-[6px]">|</span>
                  <span className="text-amber-300 font-mono text-[5px] sm:text-[8px] md:text-[9.5px] font-bold leading-none tracking-tight">
                    {formattedTime}
                  </span>
                  <span className="text-white/60 text-[5.5px] sm:text-[7px] font-mono hidden md:inline">
                    {formattedDate}
                  </span>
                </div>
              </div>

              {/* 2. CENTER STAGE: CARDS GRID */}
              <div 
                key={cardAnimKey}
                className={`relative z-10 flex-1 grid gap-1 sm:gap-2 px-1.5 sm:px-3.5 py-0.5 sm:py-1 items-stretch ${
                  isMobile ? 'grid-cols-2 grid-rows-2' : 'grid-cols-3 grid-rows-2'
                }`}
              >
                {currentCards.map((card, index) => {
                  const Icon = ICON_MAP[card.icon] || ShieldCheck;
                  
                  let animClass = '';
                  let animDelay = '0s';

                  if (isMobile) {
                    if (index === 1) {
                      animClass = 'animate-card-from-top';
                      animDelay = '0.08s';
                    } else if (index === 0) {
                      animClass = 'animate-card-from-left';
                      animDelay = '0.18s';
                    } else if (index === 3) {
                      animClass = 'animate-card-from-right';
                      animDelay = '0.26s';
                    } else {
                      animClass = 'animate-card-from-left';
                      animDelay = '0.34s';
                    }
                  } else {
                    const isMiddle = index % 3 === 1;
                    const isLeft = index % 3 === 0;
                    const isRight = index % 3 === 2;

                    if (isMiddle) {
                      animClass = 'animate-card-from-top';
                      animDelay = '0.08s';
                    } else if (isLeft) {
                      animClass = 'animate-card-from-left';
                      animDelay = '0.22s';
                    } else if (isRight) {
                      animClass = 'animate-card-from-right';
                      animDelay = '0.36s';
                    }
                  }

                  return (
                    <div
                      key={card.id}
                      className={`group relative rounded-md sm:rounded-xl p-1 sm:p-2 flex items-center justify-between cursor-pointer transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-xl overflow-hidden ${animClass}`}
                      style={{
                        background: card.gradient,
                        boxShadow: `0 3px 8px ${card.shadow}, inset 0 1px 1px rgba(255, 255, 255, 0.45)`,
                        animationDelay: animDelay,
                      }}
                    >
                      <div 
                        className="absolute top-0 inset-x-0 h-[45%] pointer-events-none rounded-t-lg opacity-25"
                        style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, transparent 100%)',
                        }}
                      />

                      {/* Icon */}
                      <div className="relative z-10 flex items-center justify-center w-5 h-5 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded sm:rounded-xl bg-white/15 backdrop-blur-xs border border-white/25 shrink-0 shadow-inner">
                        <Icon className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                      </div>

                      {/* Title & Subtitle */}
                      <div className="relative z-10 flex-1 min-w-0 px-1 sm:px-2 flex flex-col justify-center">
                        <h4 className="text-white font-bold text-[6px] sm:text-[8.5px] md:text-[10px] leading-tight drop-shadow-sm truncate">
                          {card.title}
                        </h4>
                        <p className="text-white/85 text-[4.5px] sm:text-[6.5px] md:text-[7.5px] leading-tight truncate mt-0.5 font-light">
                          {card.subtitle}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="relative z-10 w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md group-hover:translate-x-0.5 transition-transform">
                        <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 text-neutral-800" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 3. BOTTOM NAVIGATION */}
              <div className="relative z-10 w-full bg-black/60 backdrop-blur-md border-t border-white/10 px-1.5 sm:px-3 py-0.5 sm:py-1 flex items-center justify-between shadow-lg">
                <button
                  onClick={handlePrevPage}
                  disabled={isTransitioning}
                  className="flex items-center gap-0.5 sm:gap-1 bg-white/10 hover:bg-white/20 active:bg-white/30 disabled:opacity-50 text-white text-[5px] sm:text-[7.5px] md:text-[8.5px] font-semibold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-md border border-white/20 transition-all cursor-pointer shadow-sm shrink-0"
                  title="Previous Cards"
                >
                  <ChevronLeft className="w-2 h-2 sm:w-3 sm:h-3" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center justify-center bg-white/10 backdrop-blur-md px-2 sm:px-4 py-0.5 sm:py-1 rounded-full border border-white/15 shadow-sm shrink-0">
                  <span className="text-white text-[5.5px] sm:text-[8.5px] md:text-[10px] font-semibold tracking-wide font-mono">
                    Page <span className="text-amber-400 font-bold">{safePage + 1}</span> of <span className="text-neutral-300 font-bold">{totalPages}</span>
                  </span>
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={isTransitioning}
                  className="flex items-center gap-0.5 sm:gap-1 bg-white/10 hover:bg-white/20 active:bg-white/30 disabled:opacity-50 text-white text-[5px] sm:text-[7.5px] md:text-[8.5px] font-semibold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-md border border-white/20 transition-all cursor-pointer shadow-sm shrink-0"
                  title="Next Cards"
                >
                  <span>Next</span>
                  <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3" />
                </button>
              </div>

              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(125deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 30%, transparent 60%)',
                }}
              />

              <div 
                className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.25)]"
              />
            </div>
          ) : (
            <div className="w-full h-full bg-[#0a0a0c] flex flex-col items-center justify-center">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                }}
              />
              <span className="text-white/20 text-xs font-light tracking-widest uppercase">Standby</span>
            </div>
          )}

          <div className="absolute top-1.5 right-1.5 opacity-0 hover:opacity-100 transition-opacity z-30">
            <button
              onClick={() => setScreenOn(!screenOn)}
              className="bg-black/75 hover:bg-black text-white/80 text-[8px] px-2 py-0.5 rounded backdrop-blur-sm border border-white/20 shadow-sm"
              title="Toggle Power"
            >
              {screenOn ? 'Power Off' : 'Power On'}
            </button>
          </div>
        </div>

        {/* Bottom Bezel */}
        <div className="relative w-full h-[8px] sm:h-[10px] flex items-center justify-center">
          <div className="absolute right-2 bottom-[3px] w-[2px] h-[2px] rounded-full bg-cyan-400/80 shadow-[0_0_3px_#22d3ee]" />
        </div>
      </div>
    </div>
  );
}

/* ========================================================
   10. MASTER TV WALL COMPONENT
   ======================================================== */
function TVWall({ isLit = true, isTvOn = true }) {
  return (
    <div className="relative w-full aspect-[628/410] max-w-[1256px] mx-auto overflow-hidden rounded-lg shadow-2xl select-none">
      {/* 1. Room Background Wall */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 50% 30%, #f6eee4 0%, #ebe0d3 40%, #e2d4c4 75%, #d6c4b2 100%)
          `,
        }}
      >
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '8px 8px',
          }}
        />

        <div 
          className="absolute top-0 inset-x-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 245, 230, 0.4) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Architectural LED Cove Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-glow-warmup">
        <WallLighting isLit={isLit} intensity={1} />
      </div>

      {/* 3. Main Floating Accent Panel */}
      <div 
        className="absolute top-[7.5%] bottom-[28.5%] left-[9.5%] right-[28.0%] z-10 rounded-l-[1px] animate-panel-reveal"
        style={{
          backgroundColor: '#f3ece2',
          backgroundImage: 'linear-gradient(135deg, #f7f1e8 0%, #eee6da 60%, #e8decb 100%)',
          boxShadow: `
            inset 0 1px 2px rgba(255, 255, 255, 0.8),
            inset 1px 0 2px rgba(255, 255, 255, 0.6),
            -2px 0 12px rgba(0, 0, 0, 0.08),
            0 -2px 12px rgba(0, 0, 0, 0.08)
          `,
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 45% 45%, transparent 40%, rgba(0, 0, 0, 0.03) 100%)',
          }}
        />
      </div>

      {/* 4. Vertical Wooden Slat Panel */}
      <WoodenSlats isLit={isLit} />

      {/* 5. Wall-Mounted Flat Screen Television */}
      <Television isPowered={isTvOn} />

      {/* 6. Floating Entertainment Console */}
      <EntertainmentConsole isLit={isLit} />

      {/* 7. Decorative Objects (Cascading Plant) */}
      <DecorativeObjects />

      {/* 8. Hardwood Flooring at the Bottom */}
      <div 
        className="absolute bottom-0 inset-x-0 h-[3.2%] z-20 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #703d1c 0%, #542b10 40%, #3a1c09 100%)',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.6) 0px, transparent 1px, transparent 140px)',
          }}
        />

        {isLit && (
          <div 
            className="absolute inset-x-0 top-0 h-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 200, 100, 0.45) 0%, rgba(245, 160, 60, 0.15) 50%, transparent 80%)',
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ========================================================
   MEDIA COVERAGE CUSTOM KEYFRAMES & COMPONENT STYLES
   ======================================================== */
const MEDIA_COVERAGE_STYLES = `
/* Custom Architectural Lighting & Material Gradients */
.bg-wall-ambient {
  background: radial-gradient(circle at 50% 45%, #f2eae0 0%, #e8dcce 45%, #dacaba 85%, #d1bfac 100%);
}

.wall-panel-glow {
  box-shadow: 
    0 -12px 30px -4px rgba(255, 195, 110, 0.45),
    0 12px 30px -4px rgba(255, 195, 110, 0.4),
    -12px 0 30px -4px rgba(255, 195, 110, 0.45),
    12px 0 30px -4px rgba(255, 195, 110, 0.45),
    0 0 50px 10px rgba(255, 180, 80, 0.25);
}

.console-underglow {
  box-shadow: 
    0 14px 28px -2px rgba(255, 190, 90, 0.55),
    0 24px 45px -4px rgba(255, 175, 70, 0.35),
    0 35px 60px 0px rgba(255, 160, 50, 0.2);
}

.shelf-cove-glow {
  box-shadow: 
    inset 0 10px 16px -6px rgba(255, 205, 120, 0.45),
    inset 0 3px 6px 0 rgba(0, 0, 0, 0.08),
    inset 0 -2px 4px 0 rgba(0, 0, 0, 0.04);
}

.tv-bezel-shadow {
  box-shadow: 
    0 18px 38px -6px rgba(0, 0, 0, 0.5),
    0 8px 16px -2px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.08);
}

.slat-wood {
  background: linear-gradient(90deg, 
    #4a2713 0%, 
    #7a4623 25%, 
    #8e542c 50%, 
    #693a1c 75%, 
    #3f1f0e 100%
  );
  box-shadow: 
    inset 1px 0 0 rgba(255, 230, 185, 0.22),
    inset -1px 0 0 rgba(0, 0, 0, 0.4),
    2px 0 4px rgba(0, 0, 0, 0.35);
}

.drawer-wood {
  background: 
    linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0.15) 100%),
    linear-gradient(90deg, #603417 0%, #7d4822 30%, #874f26 55%, #6e3c1a 80%, #542b11 100%);
  background-size: cover;
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.2),
    inset 0 -1px 2px rgba(0, 0, 0, 0.3);
}

.hardwood-floor {
  background: 
    linear-gradient(180deg, #643818 0%, #4a2710 40%, #361a08 100%);
  box-shadow: 
    inset 0 4px 10px rgba(0, 0, 0, 0.6),
    0 -1px 0 rgba(255, 200, 120, 0.2);
}

/* CINEMATIC PAGE ENTRANCE & COMPONENT REVEAL KEYFRAMES */
@keyframes pageHeaderReveal {
  0% {
    opacity: 0;
    transform: translateY(-28px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes panelReveal {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slatsReveal {
  0% {
    opacity: 0;
    transform: translateY(-35px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes consoleReveal {
  0% {
    opacity: 0;
    transform: translateY(45px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes tvReveal {
  0% {
    opacity: 0;
    transform: scale(0.92);
    filter: brightness(0.2);
  }
  70% {
    opacity: 0.95;
    transform: scale(1.01);
    filter: brightness(1.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: brightness(1);
  }
}

@keyframes plantReveal {
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(15px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes glowWarmup {
  0% {
    opacity: 0;
    filter: blur(30px);
  }
  100% {
    opacity: 1;
    filter: blur(24px);
  }
}

.animate-page-header {
  animation: pageHeaderReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

.animate-panel-reveal {
  animation: panelReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
}

.animate-slats-reveal {
  animation: slatsReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
}

.animate-console-reveal {
  animation: consoleReveal 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
}

.animate-tv-reveal {
  animation: tvReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.85s both;
}

.animate-plant-reveal {
  animation: plantReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.05s both;
}

.animate-glow-warmup {
  animation: glowWarmup 1.4s ease-out 0.35s both;
}

/* TV SCREEN CLOSE / OPEN & CARD TRANSITION KEYFRAMES */
@keyframes tvCloseAnim {
  0% {
    transform: scaleY(1) scaleX(1);
    opacity: 1;
    filter: brightness(1);
  }
  40% {
    transform: scaleY(0.015) scaleX(1);
    opacity: 0.95;
    filter: brightness(3);
    background-color: #ffffff;
  }
  75% {
    transform: scaleY(0.015) scaleX(0.08);
    opacity: 0.9;
    filter: brightness(4);
    background-color: #ffffff;
  }
  100% {
    transform: scale(0);
    opacity: 0;
    filter: brightness(0);
    background-color: #000000;
  }
}

@keyframes tvOpenAnim {
  0% {
    transform: scaleY(0.015) scaleX(0.08);
    opacity: 0.85;
    filter: brightness(4);
    background-color: #ffffff;
  }
  40% {
    transform: scaleY(0.015) scaleX(1);
    opacity: 0.95;
    filter: brightness(2.5);
  }
  75% {
    transform: scaleY(1.02) scaleX(1);
    opacity: 1;
    filter: brightness(1.25);
  }
  100% {
    transform: scaleY(1) scaleX(1);
    opacity: 1;
    filter: brightness(1);
  }
}

.animate-tv-close {
  animation: tvCloseAnim 0.28s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-tv-open {
  animation: tvOpenAnim 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes cardFromTop {
  0% {
    opacity: 0;
    transform: translateY(-80px) scale(0.9);
  }
  70% {
    opacity: 1;
    transform: translateY(4px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes cardFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px) scale(0.9);
  }
  70% {
    opacity: 1;
    transform: translateX(5px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes cardFromRight {
  0% {
    opacity: 0;
    transform: translateX(100px) scale(0.9);
  }
  70% {
    opacity: 1;
    transform: translateX(-5px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.animate-card-from-top {
  animation: cardFromTop 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-card-from-left {
  animation: cardFromLeft 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-card-from-right {
  animation: cardFromRight 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}
`;

/* ========================================================
   11. MAIN MEDIA COVERAGE PAGE COMPONENT
   ======================================================== */
export default function MediaCoverage() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start pt-12 pb-6 sm:py-8 md:py-12 px-3 sm:px-6 md:px-10 select-none">
      {/* Media Coverage Scoped Stylesheet */}
      <style>{MEDIA_COVERAGE_STYLES}</style>

      {/* Top Page Header: Media Coverage Heading & Description with Staggered Entrance */}
      <header className="w-full max-w-3xl text-center mb-6 sm:mb-8 md:mb-10 flex flex-col items-center animate-page-header">
        {/* Category Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-2 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>CR REAL TIME NEWS • {MEDIA_COVERAGE_HEADER.kicker || 'PRESS & BROADCASTS'}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-2.5 font-sans">
          {MEDIA_COVERAGE_HEADER.title}
        </h1>

        {/* Broadcast Red Accent Line */}
        <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mb-3 shadow-xs" />

        <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
          {MEDIA_COVERAGE_HEADER.description}
        </p>
      </header>

      {/* Main Showcase Stage */}
      <main className="w-full max-w-[1360px] flex items-center justify-center">
        <TVWall isLit={true} isTvOn={true} />
      </main>
    </div>
  );
}

export { MediaCoverage, MediaCoverage as MediaCoveragePage };
