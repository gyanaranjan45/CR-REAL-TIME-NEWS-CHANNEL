import React, { useState } from 'react';
import { quickLinks, ourServices, supportLinks } from './FooterData';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPaperPlane,
  FaGooglePlay,
  FaApple,
} from 'react-icons/fa6';

// =========================================================================
// 1. BROADCAST VAN WHEEL
// =========================================================================
/**
 * BroadcastVanWheel
 * A detailed, realistic SVG Alloy Wheel for the CR News Broadcast Van.
 * Features: Rubber tire with treads, alloy multi-spoke rim, brake disc,
 * red brake caliper, center hub, and high-speed CSS rotation animation.
 */
export const BroadcastVanWheel = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className} select-none pointer-events-none`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-[spin_0.32s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Tire Rubber Gradient */}
          <radialGradient id="tireRubberGrad" cx="50%" cy="50%" r="50%">
            <stop offset="68%" stopColor="#1e2229" />
            <stop offset="82%" stopColor="#121418" />
            <stop offset="94%" stopColor="#0d0e11" />
            <stop offset="100%" stopColor="#050607" />
          </radialGradient>

          {/* Alloy Metallic Rim Gradient */}
          <radialGradient id="alloyRimGrad" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="35%" stopColor="#cbd5e1" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </radialGradient>

          {/* Brake Rotor Disc Gradient */}
          <radialGradient id="rotorDiscGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="65%" stopColor="#475569" />
            <stop offset="85%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>

          {/* Spoke Metallic Linear Gradient */}
          <linearGradient id="spokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* 1. OUTER RUBBER TIRE */}
        <circle cx="50" cy="50" r="49" fill="url(#tireRubberGrad)" stroke="#090b0e" strokeWidth="2" />
        {/* Tire Sidewall Tread Ring */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#2a303c" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#12151b" strokeWidth="2" />

        {/* 2. INNER ALLOY BEZEL */}
        <circle cx="50" cy="50" r="36" fill="url(#alloyRimGrad)" stroke="#1e293b" strokeWidth="1" />

        {/* 3. BRAKE ROTOR DISC (Behind spokes) */}
        <circle cx="50" cy="50" r="28" fill="url(#rotorDiscGrad)" />
        {/* Ventilation holes on brake disc */}
        <circle cx="50" cy="50" r="24" fill="none" stroke="#0f172a" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />

        {/* 4. ALLOY WHEEL SPOKES (8 Twin-Spokes for high-end Euro van aesthetic) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 50 50)`}>
            <polygon
              points="48.5,16 51.5,16 52.5,40 47.5,40"
              fill="url(#spokeGrad)"
              stroke="#1e293b"
              strokeWidth="0.5"
            />
            {/* Spoke center highlight */}
            <line x1="50" y1="17" x2="50" y2="39" stroke="#ffffff" strokeWidth="0.6" opacity="0.8" />
          </g>
        ))}

        {/* 5. CENTER HUB CAP & LUG NUTS */}
        <circle cx="50" cy="50" r="14" fill="url(#alloyRimGrad)" stroke="#0f172a" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="10" fill="#0f172a" />
        <circle cx="50" cy="50" r="6" fill="#cbd5e1" stroke="#334155" strokeWidth="0.8" />
        {/* Center Logo Dot */}
        <circle cx="50" cy="50" r="2.5" fill="#e01923" />

        {/* 5 Chrome Lug Nuts */}
        {[0, 72, 144, 216, 288].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 50 50)`}>
            <circle cx="50" cy="41" r="1.5" fill="#f8fafc" stroke="#475569" strokeWidth="0.4" />
          </g>
        ))}
      </svg>
    </div>
  );
};

// =========================================================================
// 2. BROADCAST HIGHWAY SCENE
// =========================================================================
/**
 * BroadcastHighwayScene
 * Recreates the asphalt highway road and the moving CR News satellite broadcast van.
 * Features:
 * - Multi-lane asphalt road with guardrail and glowing amber reflector lamps
 * - Animated dashed highway speed lines rushing past
 * - CR News Broadcast Van with SVG alloy wheels attached to wheel arches
 * - Wheels rotating at high speed
 * - Red & blue neon laser motion speed trails behind the van
 * - Glowing headlights and ground contact reflections
 */
export const BroadcastHighwayScene = () => {
  return (
    <div className="relative w-full overflow-hidden select-none bg-[#07090e] border-t border-slate-800/80">
      
      {/* ========================================================= */}
      {/* CINEMATIC SIDE VIEW HIGHWAY ROAD (PROFILE / ELEVATION VIEW) */}
      {/* ========================================================= */}
      <div className="relative w-full h-28 sm:h-32 md:h-36 lg:h-40 overflow-hidden flex flex-col justify-between">
        
        {/* 1. STEEL HIGHWAY CRASH BARRIER / GUARDRAIL (SIDE PROFILE VIEW) */}
        <div className="relative w-full h-7 sm:h-8 z-10 flex items-end">
          
          {/* Vertical Steel Support Posts spaced across the barrier */}
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-3 sm:px-6 pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 sm:w-2 h-6 sm:h-7 bg-gradient-to-b from-[#2a3443] via-[#1a202c] to-[#0c1017] border-x border-slate-700/50 shadow-sm" 
              />
            ))}
          </div>

          {/* Horizontal W-Beam Steel Rail Profile */}
          <div className="relative w-full h-3 sm:h-3.5 bg-gradient-to-b from-[#384355] via-[#222935] to-[#121822] border-y border-slate-600/60 shadow-[0_4px_10px_rgba(0,0,0,0.65)]">
            {/* Top Chrome Edge Highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />
            {/* Bottom Dark Under-Bevel */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/60" />
          </div>

          {/* Rectangular Glowing Amber Hazard / Safety Lamps Mounted on Top of Guardrail */}
          <div className="absolute inset-x-0 -top-2 flex justify-between px-6 sm:px-10 pointer-events-none z-20">
            {[...Array(11)].map((_, i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* Rectangular Amber Lamp Box */}
                <div className="w-4 sm:w-5 h-2.5 sm:h-3 rounded-xs bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-[0_0_10px_#f59e0b,0_0_22px_#d97706] border border-amber-200/70 animate-pulse" />
                {/* Soft Vertical Ambient Light Cast onto Asphalt Road Below */}
                <div className="absolute top-3 w-8 sm:w-12 h-20 bg-gradient-to-b from-amber-500/25 via-amber-600/5 to-transparent blur-[3px] pointer-events-none" />
              </div>
            ))}
          </div>

        </div>

        {/* 2. SIDE VIEW ASPHALT HIGHWAY DRIVING SURFACE */}
        <div className="relative w-full flex-1 bg-gradient-to-b from-[#131722] via-[#090c13] to-[#040608] flex flex-col justify-center overflow-hidden">
          
          {/* Wet Night Road Ambient Blue/Cyan Sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-blue-950/20 pointer-events-none" />

          {/* Far-Side Solid White Barrier Shoulder Line */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-slate-300/70 shadow-[0_0_4px_rgba(255,255,255,0.3)]" />

          {/* Horizontal Dashed White Lane Divider (Viewed in Profile / Side Elevation) */}
          <div className="relative w-full h-1 sm:h-1.5 flex items-center justify-between gap-8 sm:gap-14 px-4 sm:px-8 pointer-events-none opacity-85">
            {[...Array(18)].map((_, i) => (
              <div 
                key={i} 
                className="w-12 sm:w-16 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-white/70 via-white/90 to-white/70 rounded-xs shadow-[0_0_6px_rgba(255,255,255,0.45)] flex-shrink-0" 
              />
            ))}
          </div>

          {/* Subtle Horizontal Speed Streaks on the Asphalt (Matching Cinematic Photo 1) */}
          <div className="absolute inset-0 flex flex-col justify-around py-2 pointer-events-none opacity-25">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
          </div>

        </div>

        {/* 3. FOREGROUND ASPHALT CURB / ROAD BASE (BOTTOM OF SIDE VIEW) */}
        <div className="relative w-full h-2 sm:h-2.5 bg-[#020305] border-t border-slate-900 shadow-inner" />

        {/* ========================================================= */}
        {/* 4. CR NEWS BROADCAST VAN (DRIVING ACROSS FLAT ROAD)       */}
        {/* Moving continuously Left-to-Right in an infinite loop     */}
        {/* ========================================================= */}
        <div 
          className="absolute left-0 bottom-2 sm:bottom-2.5 flex items-end pointer-events-none z-20 animate-[vanDriveAcross_10s_linear_infinite]"
          style={{
            willChange: 'transform',
          }}
        >
          
          {/* Van Driving Stage Wrapper (Suspension Micro-bounce) */}
          <div className="relative w-[170px] sm:w-[200px] md:w-[240px] lg:w-[270px] animate-[vanSuspension_0.22s_ease-in-out_infinite_alternate]">
            
            {/* 4A. NEON SPEED LIGHT TRAILS STREAMING BEHIND THE VAN */}
            <div className="absolute right-[82%] top-[40%] -translate-y-1/2 w-32 sm:w-48 md:w-64 pointer-events-none z-10">
              {/* Upper Red Laser Streak */}
              <div className="h-[1.5px] sm:h-[2px] bg-gradient-to-l from-[#ff1929] via-[#ff3b49] to-transparent shadow-[0_0_10px_#ff1929]" />
              {/* Middle Blue Speed Trail */}
              <div className="h-[1.5px] bg-gradient-to-l from-[#00d2ff] via-[#38bdf8] to-transparent shadow-[0_0_8px_#00d2ff] mt-1.5 sm:mt-2 opacity-80" />
              {/* Lower Red Tail Streak */}
              <div className="h-[2px] bg-gradient-to-l from-[#ff1929] via-[#ff1929] to-transparent shadow-[0_0_12px_#ff1929] mt-2" />
            </div>

            {/* 4B. FORWARD HEADLIGHT CONE CASTING ONTO ROAD */}
            <div className="absolute left-[92%] top-[65%] -translate-y-1/2 w-28 sm:w-40 md:w-56 h-20 pointer-events-none z-10">
              <div className="w-full h-full bg-gradient-to-r from-cyan-100/35 via-cyan-400/10 to-transparent transform -skew-y-3 blur-sm" />
            </div>

            {/* 4C. VAN CUTOUT IMAGE (NO WHEELS IN SOURCE IMAGE) */}
            <div className="relative w-full">
              <img
                src="/cr-news-van.png"
                alt="CR News Satellite Broadcast Van"
                className="w-full h-auto object-contain block relative z-20 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.85)]"
                draggable="false"
              />

              {/* 4D. REAR WHEEL (INSERTED INTO REAR WHEEL ARCH VIA CSS/SVG) */}
              <div 
                className="absolute z-10 w-[10.2%] aspect-square"
                style={{
                  left: '11.3%',
                  top: '82.7%',
                }}
              >
                <BroadcastVanWheel />
              </div>

              {/* 4E. FRONT WHEEL (INSERTED INTO FRONT WHEEL ARCH VIA CSS/SVG) */}
              <div 
                className="absolute z-10 w-[10.2%] aspect-square"
                style={{
                  left: '59.0%',
                  top: '82.8%',
                }}
              >
                <BroadcastVanWheel />
              </div>

              {/* 4F. SATELLITE DISH TRANSMISSION BEACON PULSE */}
              <div className="absolute top-[8%] left-[34%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300 shadow-[0_0_10px_#00e5ff]" />
                </span>
              </div>

              {/* 4G. GROUND WET TIRE CONTACT SHADOW & RED REFLECTION */}
              <div className="absolute -bottom-2 inset-x-6 h-5 bg-black/80 blur-md pointer-events-none rounded-full z-0" />
              <div className="absolute -bottom-1 left-4 w-28 h-3 bg-red-600/35 blur-sm pointer-events-none rounded-full z-0" />

            </div>

          </div>

        </div>

      </div>

      {/* Global CSS Keyframes for Highway & Van Driving Motion */}
      <style>{`
        @keyframes vanDriveAcross {
          0% {
            transform: translate3d(-580px, 0, 0);
          }
          100% {
            transform: translate3d(calc(100vw + 320px), 0, 0);
          }
        }
        @keyframes vanSuspension {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-1.2px);
          }
          100% {
            transform: translateY(0.8px);
          }
        }
      `}</style>

    </div>
  );
};

// =========================================================================
// 3. MAIN FOOTER COMPONENT
// =========================================================================
export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full select-none overflow-hidden bg-white text-slate-800 shadow-2xl relative">
      
      {/* ========================================================= */}
      {/* 1. MAIN FOOTER CONTENT WITH ENHANCED WATERMARK BACKGROUND */}
      {/* Featuring soft blur, high clarity, and atmospheric glow   */}
      {/* ========================================================= */}
      <div className="relative w-full overflow-hidden pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-200">
        
        {/* Layer 1: Watermark Background Image with Soft Contrast & Reduced Watermark Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat pointer-events-none filter blur-[1.5px] scale-105 transform"
          style={{
            backgroundImage: "url('/footer-bg-watermark.jpg')",
            opacity: 0.22,
          }}
        />

        {/* Layer 2: Frosted Glass Gradient Wash (Preserves pristine text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/58 to-white/82 pointer-events-none" />

        {/* Layer 3: Broadcast Tech Radial Ambient Glow & Digital Network Sheen */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 18%, rgba(2, 132, 199, 0.14) 0%, rgba(7, 25, 61, 0.05) 50%, transparent 75%)',
          }}
        />

        {/* Layer 4: Subtle Tech Dot Matrix Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(#0369a1 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          
          {/* Main 5-Column Grid Layout matching reference image 1:1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 items-start">
            
            {/* ----------------------------------------------------- */}
            {/* COLUMN 1: CR NEWS LOGO, TAGLINE, DESCRIPTION, SOCIALS */}
            {/* (Takes 3.5 cols on desktop)                           */}
            {/* ----------------------------------------------------- */}
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col space-y-3 sm:space-y-4">
              
              {/* Brand Logo & Slogan Header */}
              <div className="flex items-center gap-3.5">
                
                {/* Header Top-Left Logo (Official CR News Channel Logo) */}
                <a
                  href="#home"
                  className="block transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
                  title="CR News Channel Home"
                >
                  <img
                    src="/logo.png"
                    alt="CR News Channel Logo"
                    className="h-[52px] sm:h-[58px] md:h-[64px] w-auto max-w-full object-contain filter drop-shadow-[0_3px_10px_rgba(8,37,86,0.18)] drop-shadow-[0_1px_4px_rgba(238,27,28,0.15)]"
                    draggable="false"
                  />
                </a>

                {/* Vertical Divider Line */}
                <div className="w-[1.5px] h-11 bg-slate-300 flex-shrink-0" />

                {/* 3-Line Mission Slogan */}
                <div className="flex flex-col text-[11px] sm:text-[12px] font-black tracking-wider text-[#07193d] uppercase leading-tight font-['Montserrat',sans-serif]">
                  <span>REAL NEWS</span>
                  <span>REAL PEOPLE</span>
                  <span>REAL IMPACT</span>
                </div>

              </div>

              {/* Tagline Paragraph */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal max-w-sm pt-1">
                Bringing you the latest updates, in-depth analysis and stories from India and around the world. Stay informed. Stay ahead.
              </p>

              {/* 5 Social Media Circular Icon Pills - Fully Visible on Mobile & Desktop */}
              <div className="flex items-center gap-2.5 pt-2">
                
                {/* Facebook */}
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#1877f2] hover:bg-[#166fe5] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>

                {/* X / Twitter */}
                <a
                  href="#twitter"
                  aria-label="X"
                  className="w-8 h-8 rounded-full bg-black hover:bg-slate-800 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/crrealtimenewschannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@crrealtimenews?si=Zb1c7yQxCpkdW1dR"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-[#ff0000] hover:bg-[#e60000] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/cr-realtime-news-channel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-[#0a66c2] hover:bg-[#084e96] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>

              </div>

            </div>

            {/* ----------------------------------------------------- */}
            {/* MOBILE TWO-COLUMN WRAPPER: QUICK LINKS & SERVICES     */}
            {/* Side-by-side on mobile, unwrapped on desktop via md/lg:contents */}
            {/* ----------------------------------------------------- */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:contents lg:contents">
              
              {/* COLUMN 2: QUICK LINKS (Left Column on Mobile) */}
              <div className="lg:col-span-2 xl:col-span-2 flex flex-col">
                <div className="mb-2.5 sm:mb-3">
                  <h4 className="text-[#07193d] font-bold text-[13.5px] sm:text-[15px] tracking-wide font-['Montserrat',sans-serif]">
                    Quick Links
                  </h4>
                  <div className="w-8 h-[2px] bg-[#e01923] mt-1 rounded-full" />
                </div>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-slate-600">
                  {quickLinks.map((item) => {
                    const name = typeof item === 'string' ? item : item.name;
                    const href = typeof item === 'string' ? `#${item.toLowerCase().replace(/\s+/g, '-')}` : item.href;
                    return (
                      <li key={name}>
                        <a href={href} className="hover:text-[#e01923] transition-colors">
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* COLUMN 3: OUR SERVICES (Right Column on Mobile) */}
              <div className="lg:col-span-2 xl:col-span-2 flex flex-col">
                <div className="mb-2.5 sm:mb-3">
                  <h4 className="text-[#07193d] font-bold text-[13.5px] sm:text-[15px] tracking-wide font-['Montserrat',sans-serif]">
                    Our Services
                  </h4>
                  <div className="w-8 h-[2px] bg-[#e01923] mt-1 rounded-full" />
                </div>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-slate-600">
                  {ourServices.map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#e01923] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ----------------------------------------------------- */}
            {/* COLUMN 4: SUPPORT (Hidden on Mobile, Visible on Desktop) */}
            {/* ----------------------------------------------------- */}
            <div className="hidden md:flex lg:col-span-2 xl:col-span-2 flex-col">
              <div className="mb-2.5 sm:mb-3">
                <h4 className="text-[#07193d] font-bold text-[13.5px] sm:text-[15px] tracking-wide font-['Montserrat',sans-serif]">
                  Support
                </h4>
                <div className="w-8 h-[2px] bg-[#e01923] mt-1 rounded-full" />
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-slate-600">
                {supportLinks.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#e01923] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ----------------------------------------------------- */}
            {/* COLUMN 5: SUBSCRIBE TO NEWSLETTER & DOWNLOAD APP     */}
            {/* ----------------------------------------------------- */}
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col space-y-4">
              
              {/* Subscribe Section */}
              <div>
                <div className="mb-2">
                  <h4 className="text-[#07193d] font-bold text-[14px] sm:text-[15px] tracking-wide font-['Montserrat',sans-serif]">
                    Subscribe to Our News
                  </h4>
                  <div className="w-8 h-[2px] bg-[#e01923] mt-1 rounded-full" />
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Get the latest news, updates and exclusive stories directly in your inbox.
                </p>

                {/* Email Input + Subscribe Button Form */}
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5 w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 bg-white border border-slate-300 rounded-md px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#e01923] shadow-xs"
                  />
                  <button
                    type="submit"
                    className="bg-[#e01923] hover:bg-[#c9121c] active:scale-95 text-white px-3.5 py-2 rounded-md font-bold text-xs tracking-wide flex items-center gap-1.5 transition-all shadow-sm shadow-red-500/30 cursor-pointer flex-shrink-0"
                  >
                    <span>Subscribe</span>
                    <FaPaperPlane className="w-3 h-3" />
                  </button>
                </form>

                {subscribed && (
                  <p className="text-[11px] text-emerald-600 font-semibold mt-1.5 animate-fadeIn">
                    ✓ Subscribed! You will now receive daily news updates.
                  </p>
                )}
              </div>

              {/* Download Our App Section */}
              <div className="pt-1">
                <div className="mb-2">
                  <h4 className="text-[#07193d] font-bold text-[14px] sm:text-[15px] tracking-wide font-['Montserrat',sans-serif]">
                    Download Our App
                  </h4>
                  <div className="w-8 h-[2px] bg-[#e01923] mt-1 rounded-full" />
                </div>

                {/* Official Store Badges (using React Icons) */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  
                  {/* Google Play Badge */}
                  <a
                    href="#google-play"
                    className="inline-flex items-center gap-2 bg-black hover:bg-slate-900 text-white px-3 py-1.5 rounded-md shadow-sm transition-transform hover:scale-105"
                  >
                    <FaGooglePlay className="w-4 h-4 text-[#34A853]" />
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-[7.5px] uppercase tracking-wider text-slate-400">GET IT ON</span>
                      <span className="text-[11.5px] font-bold text-white font-['Montserrat',sans-serif]">Google Play</span>
                    </div>
                  </a>

                  {/* App Store Badge */}
                  <a
                    href="#app-store"
                    className="inline-flex items-center gap-2 bg-black hover:bg-slate-900 text-white px-3 py-1.5 rounded-md shadow-sm transition-transform hover:scale-105"
                  >
                    <FaApple className="w-4 h-4 text-white" />
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-[7.5px] uppercase tracking-wider text-slate-400">Download on the</span>
                      <span className="text-[11.5px] font-bold text-white font-['Montserrat',sans-serif]">App Store</span>
                    </div>
                  </a>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 2. THE HIGHWAY ROAD WITH RUNNING SATELLITE BROADCAST VAN  */}
      {/* (100% CSS Road + Rotating SVG Wheels + Speed Trails)      */}
      {/* ========================================================= */}
      <BroadcastHighwayScene />

      {/* ========================================================= */}
      {/* 3. CLEAN BOTTOM COPYRIGHT & LEGAL BAR                     */}
      {/* ========================================================= */}
      <div className="bg-[#040608] border-t border-slate-800 text-slate-400 text-xs py-3.5 px-4 sm:px-8">
        <div className="max-w-[1640px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs">
            © {new Date().getFullYear()} <span className="text-white font-bold">CR Realtime News Channels</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export { Footer as NewsFooter };

export default Footer;
