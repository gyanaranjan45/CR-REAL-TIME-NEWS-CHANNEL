import React, { useState, useRef } from 'react';
import { DIAL_BUTTONS_8, COIL_POINTS_BENT, CONTACT_DETAILS } from './ContactUsPageData';

export default function ContactUs() {
  const [activeButton, setActiveButton] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [rotaryAngle, setRotaryAngle] = useState(0);
  const [spinDuration, setSpinDuration] = useState(720);
  const [centerActive, setCenterActive] = useState(false);
  const [isHandsetLifted, setIsHandsetLifted] = useState(false);

  const handsetTimerRef = useRef(null);
  const lastClickTimeRef = useRef(0);
  const comboCountRef = useRef(0);
  const comboTimeoutRef = useRef(null);

  // Handset lifts up when clicking keypad buttons, then smoothly returns to cradle
  const triggerHandsetLift = () => {
    setIsHandsetLifted(true);

    if (handsetTimerRef.current) {
      clearTimeout(handsetTimerRef.current);
    }

    // Handset stays lifted for 1.3s, then smoothly glides back down into its place
    handsetTimerRef.current = setTimeout(() => {
      setIsHandsetLifted(false);
    }, 1300);
  };

  // Trigger continuous rotation with dynamic speed acceleration based on click frequency (100% silent)
  const triggerRotarySpin = () => {
    const now = performance.now();
    const dt = now - lastClickTimeRef.current;
    lastClickTimeRef.current = now;

    if (comboTimeoutRef.current) {
      clearTimeout(comboTimeoutRef.current);
    }

    // Determine speed level based on how quickly user is clicking
    if (dt < 380) {
      comboCountRef.current = Math.min(comboCountRef.current + 1, 8);
    } else if (dt < 700) {
      comboCountRef.current = Math.min(comboCountRef.current + 1, 4);
    } else {
      comboCountRef.current = 1;
    }

    const combo = comboCountRef.current;
    const dynamicDuration = Math.max(220, 720 - (combo - 1) * 85);
    setSpinDuration(dynamicDuration);

    // Each click adds one full 360-degree round rotation
    setRotaryAngle((prev) => prev + 360);

    // When clicking stops, smoothly reset combo back to normal
    comboTimeoutRef.current = setTimeout(() => {
      comboCountRef.current = 0;
      setSpinDuration(720);
    }, dynamicDuration + 150);
  };

  // Clicking keypad buttons: BOTH rotary spins AND handset lifts up!
  const handleButtonClick = (e, btn) => {
    e.stopPropagation();
    setActiveButton(btn.id);
    triggerRotarySpin();
    triggerHandsetLift();
    setTimeout(() => setActiveButton(null), 180);
  };

  // Clicking center dialer icon: ONLY rotary spins, handset does NOT lift!
  const handleCenterClick = (e) => {
    e.stopPropagation();
    setCenterActive(true);
    setTimeout(() => setCenterActive(false), 120);
    triggerRotarySpin();
  };

  // Render high-visibility Contact Us vector icon inside each button
  const renderButtonIcon = (iconType, cx, cy, isAct) => {
    const yOff = isAct ? cy + 0.8 : cy;

    switch (iconType) {
      case 'phone':
        // Phone Handset
        return (
          <g transform={`translate(${cx}, ${yOff}) scale(0.92)`} className="pointer-events-none">
            <path
              d="M -5.5,-3 C -6,-1 -5,2 -2,5 C 1,8 4,9 6,8.5 L 8,6.5 C 8.5,6 8.5,5 7.8,4.5 L 5.5,3 C 5,2.7 4.3,2.8 3.8,3.3 L 3,4.2 C 1.5,3.3 0.2,2 -0.7,0.5 L 0.2,-0.3 C 0.7,-0.8 0.8,-1.5 0.5,-2 L -1,-4.3 C -1.5,-5 -2.5,-5 -3,-4.5 Z"
              fill="#ffd966"
              stroke="#ffffff"
              strokeWidth="0.8"
              filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.8))"
            />
          </g>
        );
      case 'email':
        // Email Envelope
        return (
          <g transform={`translate(${cx}, ${yOff}) scale(0.92)`} className="pointer-events-none">
            <rect x="-8" y="-5.5" width="16" height="11" rx="2" fill="none" stroke="#ffd966" strokeWidth="1.8" />
            <path d="M -8,-5.5 L 0,1.5 L 8,-5.5" fill="none" stroke="#ffd966" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );
      case 'reporter':
        // Reporter News Microphone
        return (
          <g transform={`translate(${cx}, ${yOff}) scale(0.95)`} className="pointer-events-none">
            <rect x="-3" y="-7" width="6" height="9" rx="3" fill="#ffd966" stroke="#ffffff" strokeWidth="0.7" />
            <path d="M -5.5,-2.5 C -5.5,3.5 5.5,3.5 5.5,-2.5" fill="none" stroke="#ffd966" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="0" y1="3.5" x2="0" y2="7.5" stroke="#ffd966" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="-3.5" y1="7.5" x2="3.5" y2="7.5" stroke="#ffd966" strokeWidth="1.6" strokeLinecap="round" />
          </g>
        );
      case 'team':
        // Our Team / Community
        return (
          <g transform={`translate(${cx}, ${yOff}) scale(0.92)`} className="pointer-events-none">
            <circle cx="-3" cy="-3.5" r="2.8" fill="#ffd966" />
            <path d="M -7.5,5.5 C -7.5,2 -4,1 -0.5,1 C 3,1 6.5,2 6.5,5.5" fill="none" stroke="#ffd966" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="3.5" cy="-2.5" r="2.2" fill="#fffbe0" />
          </g>
        );
      case 'location':
        // Location Pin
        return (
          <g transform={`translate(${cx}, ${yOff - 0.5}) scale(0.95)`} className="pointer-events-none">
            <path d="M 0,-7.5 C -4.2,-7.5 -6.5,-4.5 -6.5,-1 C -6.5,3.5 0,8 0,8 C 0,8 6.5,3.5 6.5,-1 C 6.5,-4.5 4.2,-7.5 0,-7.5 Z" fill="#ffd966" stroke="#ffffff" strokeWidth="0.8" />
            <circle cx="0" cy="-2" r="2" fill="#151719" />
          </g>
        );
      case 'website':
        // Official Website Globe
        return (
          <g transform={`translate(${cx}, ${yOff}) scale(0.95)`} className="pointer-events-none">
            <circle cx="0" cy="0" r="7" fill="none" stroke="#ffd966" strokeWidth="1.6" />
            <line x1="-7" y1="0" x2="7" y2="0" stroke="#ffd966" strokeWidth="1.4" />
            <ellipse cx="0" cy="0" rx="3.5" ry="7" fill="none" stroke="#ffd966" strokeWidth="1.4" />
          </g>
        );
      case 'broadcast':
        // Live News Broadcast Antenna / Radio Tower
        return (
          <g transform={`translate(${cx}, ${yOff}) scale(0.95)`} className="pointer-events-none">
            <path d="M -2,7 L 0,-6 L 2,7" stroke="#ffd966" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <line x1="-3.5" y1="1" x2="3.5" y2="1" stroke="#ffd966" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="0" cy="-6" r="2.2" fill="#ffd966" />
            <path d="M -5,-4 C -7,-1 -7,2 -5,5" fill="none" stroke="#ffd966" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 5,-4 C 7,-1 7,2 5,5" fill="none" stroke="#ffd966" strokeWidth="1.3" strokeLinecap="round" />
          </g>
        );
      case 'support':
        // 24/7 Support Lifebuoy
        return (
          <g transform={`translate(${cx}, ${yOff}) scale(0.95)`} className="pointer-events-none">
            <circle cx="0" cy="0" r="7" fill="none" stroke="#ffd966" strokeWidth="2.2" />
            <circle cx="0" cy="0" r="3.2" fill="none" stroke="#151719" strokeWidth="1.4" />
            <line x1="-6.5" y1="0" x2="-3.2" y2="0" stroke="#ffffff" strokeWidth="1.8" />
            <line x1="3.2" y1="0" x2="6.5" y2="0" stroke="#ffffff" strokeWidth="1.8" />
            <line x1="0" y1="-6.5" x2="0" y2="-3.2" stroke="#ffffff" strokeWidth="1.8" />
            <line x1="0" y1="3.2" x2="0" y2="6.5" stroke="#ffffff" strokeWidth="1.8" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-gray-800 flex flex-col items-center">
      
      {/* ============================================================ */}
      {/* SELF-CONTAINED CSS STYLES & LUXURY ENTRANCE KEYFRAMES         */}
      {/* ============================================================ */}
      <style>{`
        /* Realistic Mahogany Wood Grain Simulation */
        .mahogany-wood-grain {
          background: 
            linear-gradient(90deg, 
              rgba(255, 255, 255, 0.08) 0%, 
              transparent 15%, 
              rgba(0, 0, 0, 0.25) 45%, 
              rgba(255, 255, 255, 0.12) 55%, 
              rgba(0, 0, 0, 0.3) 85%, 
              rgba(255, 255, 255, 0.05) 100%
            ),
            repeating-linear-gradient(
              0deg,
              #350d08 0px,
              #44140c 3px,
              #290805 7px,
              #3d1109 11px,
              #4b160e 15px,
              #2a0805 20px,
              #380e08 24px,
              #47130b 29px
            );
          box-shadow: inset 0 2px 4px rgba(255, 200, 160, 0.15), inset 0 -2px 6px rgba(0, 0, 0, 0.7);
        }

        .mahogany-wood-horizontal {
          background: 
            linear-gradient(0deg, 
              rgba(0, 0, 0, 0.4) 0%, 
              rgba(255, 255, 255, 0.2) 30%, 
              rgba(255, 255, 255, 0.35) 45%, 
              rgba(0, 0, 0, 0.1) 60%, 
              rgba(0, 0, 0, 0.6) 100%
            ),
            repeating-linear-gradient(
              90deg,
              #2c0a06 0px,
              #48150d 4px,
              #360e08 9px,
              #531910 14px,
              #250704 18px,
              #3e120a 24px,
              #4d170e 28px
            );
        }

        /* Polished Golden Brass Gradients */
        .brass-metallic-radial {
          background: radial-gradient(
            circle at 45% 40%,
            #fffbd9 0%,
            #ffdd6b 20%,
            #e8ad25 45%,
            #ab730c 70%,
            #5f3e05 90%,
            #3f2702 100%
          );
        }

        .brass-metallic-linear {
          background: linear-gradient(
            135deg,
            #ffe98a 0%,
            #ffd24d 18%,
            #fff5be 32%,
            #d19519 50%,
            #7a5009 68%,
            #ffd966 85%,
            #ffeeb3 100%
          );
        }

        .brass-cylindrical {
          background: linear-gradient(
            90deg,
            #5c3c04 0%,
            #c48f1c 12%,
            #ffd866 28%,
            #fff7d4 38%,
            #ffd043 48%,
            #a66e0a 70%,
            #4a2e03 92%,
            #2a1a02 100%
          );
        }

        .brass-horizontal-tubular {
          background: linear-gradient(
            180deg,
            #fff4ba 0%,
            #ffd552 22%,
            #c99119 55%,
            #7d5206 82%,
            #402701 100%
          );
        }

        /* 3D Button Gloss */
        .button-3d-gloss {
          background: radial-gradient(
            circle at 35% 30%,
            #5a5f66 0%,
            #242629 45%,
            #111214 75%,
            #050607 100%
          );
          box-shadow: 
            inset 0 1px 2px rgba(255, 255, 255, 0.4),
            inset 0 -2px 3px rgba(0, 0, 0, 0.8),
            0 4px 6px -1px rgba(0, 0, 0, 0.6),
            0 2px 4px -2px rgba(0, 0, 0, 0.5);
        }

        .button-3d-gloss:active, .button-3d-gloss.active {
          transform: translateY(2px) scale(0.97);
          box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.9),
            0 1px 2px rgba(0, 0, 0, 0.4);
        }

        /* Rubber Coil Styling */
        .rubber-coil-segment {
          background: linear-gradient(
            90deg,
            #0f1114 0%,
            #22262b 18%,
            #4a5059 34%,
            #767e8a 44%,
            #3c4149 56%,
            #1a1d21 78%,
            #08090a 100%
          );
          box-shadow: 
            inset 0 2px 2px rgba(255, 255, 255, 0.25),
            inset 0 -2px 3px rgba(0, 0, 0, 0.8),
            0 4px 5px rgba(0, 0, 0, 0.65);
        }

        /* Studio Contact Shadow */
        .studio-contact-shadow {
          background: radial-gradient(
            ellipse 65% 35% at 50% 50%,
            rgba(10, 5, 2, 0.55) 0%,
            rgba(20, 10, 5, 0.35) 30%,
            rgba(30, 20, 10, 0.15) 55%,
            rgba(0, 0, 0, 0.05) 70%,
            transparent 85%
          );
          filter: blur(8px);
        }

        /* Header Entrance */
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(32px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.94);
          }
          70% {
            opacity: 1;
            transform: scale(1.015);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Telephone Assembly Animations */
        @keyframes phonePlinthRise {
          0% {
            opacity: 0;
            transform: translateY(42px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes phoneCasketBodyIn {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes phoneCordSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-35px) scaleX(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scaleX(1);
          }
        }

        @keyframes phoneCradleRise {
          0% {
            opacity: 0;
            transform: translateY(38px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes phoneHandsetSettleDown {
          0% {
            opacity: 0;
            transform: translateY(-65px);
          }
          65% {
            opacity: 1;
            transform: translateY(6px);
          }
          85% {
            transform: translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotaryBezelPopIn {
          0% {
            opacity: 0;
            transform: scale(0.72);
          }
          65% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* The 8 Rounded Keypad Buttons - Spinning into Place One By One */
        @keyframes dialButtonSpinIn {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-300deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.24) rotate(22deg);
          }
          82% {
            transform: scale(0.92) rotate(-6deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* Center Medallion Calling Icon Animation */
        @keyframes centerMedallionPulseIn {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.2) rotate(12deg);
          }
          80% {
            transform: scale(0.95) rotate(-3deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* Animation utility classes */
        .anim-header-badge {
          animation: fadeInDown 600ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both;
        }

        .anim-header-title {
          animation: fadeInDown 700ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both;
        }

        .anim-header-desc {
          animation: fadeInDown 700ms cubic-bezier(0.16, 1, 0.3, 1) 360ms both;
        }

        .anim-phone-wrapper {
          animation: popIn 850ms cubic-bezier(0.16, 1, 0.3, 1) 250ms both;
        }

        .anim-phone-shadow-plinth {
          animation: phonePlinthRise 800ms cubic-bezier(0.16, 1, 0.3, 1) 320ms both;
        }

        .anim-phone-casket {
          animation: phoneCasketBodyIn 850ms cubic-bezier(0.16, 1, 0.3, 1) 480ms both;
        }

        .anim-phone-cord {
          animation: phoneCordSlideIn 900ms cubic-bezier(0.16, 1, 0.3, 1) 600ms both;
        }

        .anim-phone-cradle {
          animation: phoneCradleRise 800ms cubic-bezier(0.16, 1, 0.3, 1) 700ms both;
        }

        .anim-phone-handset {
          animation: phoneHandsetSettleDown 950ms cubic-bezier(0.22, 1, 0.36, 1) 820ms both;
        }

        .anim-rotary-bezel {
          animation: rotaryBezelPopIn 750ms cubic-bezier(0.16, 1, 0.3, 1) 960ms both;
        }

        .anim-dial-button {
          animation: dialButtonSpinIn 560ms cubic-bezier(0.2, 0.9, 0.3, 1.2) both;
        }

        .anim-center-medallion {
          animation: centerMedallionPulseIn 600ms cubic-bezier(0.2, 0.9, 0.3, 1.2) 2180ms both;
        }

        /* Get in Touch Section */
        .anim-section-header {
          animation: fadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) 1750ms both;
        }

        .anim-card-left {
          animation: fadeInUp 850ms cubic-bezier(0.16, 1, 0.3, 1) 1900ms both;
        }

        .anim-card-right {
          animation: fadeInUp 850ms cubic-bezier(0.16, 1, 0.3, 1) 2050ms both;
        }

        .anim-stagger-item-1 { animation: fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 2050ms both; }
        .anim-stagger-item-2 { animation: fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 2170ms both; }
        .anim-stagger-item-3 { animation: fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 2290ms both; }
        .anim-stagger-item-4 { animation: fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 2410ms both; }
      `}</style>

      {/* ============================================================ */}
      {/* 1. TOP HEADER SECTION (PAGE HEADING)                          */}
      {/* ============================================================ */}
      <header className="w-full pt-12 pb-6 px-4 text-center max-w-4xl mx-auto">
        
        {/* Subtle Decorative Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs anim-header-badge">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          {CONTACT_DETAILS.channelName}
        </div>

        {/* Main Heading: Contact Us */}
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight anim-header-title">
          Contact <span className="text-blue-600">Us</span>
        </h1>

        {/* Small Description */}
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed anim-header-desc">
          Connect with the official CR Real Time News Channel team for news updates, inquiries, media partnerships, and support.
        </p>
      </header>

      {/* ============================================================ */}
      {/* 2. VINTAGE ANTIQUE TELEPHONE SHOWCASE                         */}
      {/* ============================================================ */}
      <section className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center anim-phone-wrapper">
        <div className="relative flex flex-col items-center justify-center select-none py-6 w-full">
          
          <div className="relative w-full max-w-[700px] flex items-center justify-center">
            <svg
              viewBox="-60 0 680 660"
              className="w-full h-auto drop-shadow-2xl overflow-visible"
              style={{ maxHeight: '82vh', aspectRatio: '1.03 / 1' }}
            >
              <defs>
                {/* 1. Wood Grain Overlay Pattern */}
                <pattern id="woodGrainStripes" width="100" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0,4 Q 25,6 50,4 T 100,4" stroke="#220603" strokeWidth="0.8" fill="none" opacity="0.35" />
                  <path d="M 0,9 Q 30,11 60,9 T 100,9" stroke="#180402" strokeWidth="0.6" fill="none" opacity="0.4" />
                  <path d="M 0,15 Q 20,13 50,15 T 100,15" stroke="#330b05" strokeWidth="0.9" fill="none" opacity="0.3" />
                  <path d="M 0,18 Q 40,19 70,18 T 100,18" stroke="#120201" strokeWidth="0.5" fill="none" opacity="0.45" />
                </pattern>

                {/* 2. Mahogany Wood Gradients */}
                <linearGradient id="mahoganyBodyGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#150402" />
                  <stop offset="12%" stopColor="#310905" />
                  <stop offset="28%" stopColor="#5c190f" />
                  <stop offset="50%" stopColor="#872b1a" />
                  <stop offset="72%" stopColor="#5c190f" />
                  <stop offset="88%" stopColor="#310905" />
                  <stop offset="100%" stopColor="#150402" />
                </linearGradient>

                <linearGradient id="mahoganyCapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a33d28" />
                  <stop offset="20%" stopColor="#691f13" />
                  <stop offset="55%" stopColor="#451109" />
                  <stop offset="85%" stopColor="#2c0804" />
                  <stop offset="100%" stopColor="#180302" />
                </linearGradient>

                <linearGradient id="mahoganyPlinthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8a2f1e" />
                  <stop offset="18%" stopColor="#54170d" />
                  <stop offset="55%" stopColor="#3a0c06" />
                  <stop offset="88%" stopColor="#220603" />
                  <stop offset="100%" stopColor="#120201" />
                </linearGradient>

                <linearGradient id="woodReflectionSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
                  <stop offset="35%" stopColor="#ffffff" stopOpacity="0.08" />
                  <stop offset="65%" stopColor="#ffffff" stopOpacity="0.0" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.45" />
                </linearGradient>

                {/* 3. Golden Brass Metallic Gradients */}
                <linearGradient id="rotaryOuterBezel" x1="20%" y1="10%" x2="80%" y2="90%">
                  <stop offset="0%" stopColor="#fff8d4" />
                  <stop offset="16%" stopColor="#ffdb66" />
                  <stop offset="34%" stopColor="#d99f18" />
                  <stop offset="52%" stopColor="#f7d45c" />
                  <stop offset="70%" stopColor="#966207" />
                  <stop offset="88%" stopColor="#ffd866" />
                  <stop offset="100%" stopColor="#fff5c7" />
                </linearGradient>

                <radialGradient id="rotaryInnerFace" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#fffae0" />
                  <stop offset="22%" stopColor="#f7d768" />
                  <stop offset="48%" stopColor="#d4971c" />
                  <stop offset="74%" stopColor="#8c5806" />
                  <stop offset="94%" stopColor="#4f2f02" />
                  <stop offset="100%" stopColor="#301b00" />
                </radialGradient>

                <linearGradient id="brassFootGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#422502" />
                  <stop offset="18%" stopColor="#9e690c" />
                  <stop offset="38%" stopColor="#ffd966" />
                  <stop offset="50%" stopColor="#fff8db" />
                  <stop offset="62%" stopColor="#f0b924" />
                  <stop offset="82%" stopColor="#875306" />
                  <stop offset="100%" stopColor="#331c01" />
                </linearGradient>

                <linearGradient id="brassPillarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#402402" />
                  <stop offset="22%" stopColor="#b37b12" />
                  <stop offset="45%" stopColor="#ffe68a" />
                  <stop offset="55%" stopColor="#ffffff" />
                  <stop offset="65%" stopColor="#ffd24d" />
                  <stop offset="85%" stopColor="#8c5605" />
                  <stop offset="100%" stopColor="#301900" />
                </linearGradient>

                <linearGradient id="brassBellReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#472a03" />
                  <stop offset="14%" stopColor="#996409" />
                  <stop offset="30%" stopColor="#fce079" />
                  <stop offset="44%" stopColor="#ffffff" />
                  <stop offset="56%" stopColor="#ffdf6b" />
                  <stop offset="76%" stopColor="#ab710a" />
                  <stop offset="92%" stopColor="#5e3804" />
                  <stop offset="100%" stopColor="#2e1900" />
                </linearGradient>

                <linearGradient id="brassStandBase" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fff6c7" />
                  <stop offset="30%" stopColor="#f5ca49" />
                  <stop offset="60%" stopColor="#b87a0e" />
                  <stop offset="90%" stopColor="#543302" />
                  <stop offset="100%" stopColor="#2b1800" />
                </linearGradient>

                <linearGradient id="bottomBrassMolding" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fffae0" />
                  <stop offset="25%" stopColor="#ffd866" />
                  <stop offset="60%" stopColor="#bd7f11" />
                  <stop offset="88%" stopColor="#613b03" />
                  <stop offset="100%" stopColor="#3b2201" />
                </linearGradient>

                {/* 4. Center Calling Medallion Gradients */}
                <radialGradient id="centerDiscDark" cx="42%" cy="38%" r="60%">
                  <stop offset="0%" stopColor="#3d1508" />
                  <stop offset="45%" stopColor="#240b04" />
                  <stop offset="80%" stopColor="#150502" />
                  <stop offset="100%" stopColor="#080100" />
                </radialGradient>

                <linearGradient id="centerRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff8d1" />
                  <stop offset="30%" stopColor="#ffd75e" />
                  <stop offset="60%" stopColor="#bd8111" />
                  <stop offset="85%" stopColor="#efc448" />
                  <stop offset="100%" stopColor="#fff2ba" />
                </linearGradient>

                <linearGradient id="goldFloralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fffde6" />
                  <stop offset="40%" stopColor="#ffd966" />
                  <stop offset="80%" stopColor="#d49317" />
                  <stop offset="100%" stopColor="#8c5806" />
                </linearGradient>

                {/* 5. Keypad Dial Buttons Gradients */}
                <radialGradient id="buttonDomedGloss" cx="35%" cy="30%" r="65%">
                  <stop offset="0%" stopColor="#4a4f57" />
                  <stop offset="22%" stopColor="#252930" />
                  <stop offset="55%" stopColor="#14161a" />
                  <stop offset="85%" stopColor="#0a0b0d" />
                  <stop offset="100%" stopColor="#030405" />
                </radialGradient>

                <linearGradient id="buttonSocketRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff6c9" />
                  <stop offset="35%" stopColor="#ffd866" />
                  <stop offset="70%" stopColor="#9e6608" />
                  <stop offset="100%" stopColor="#523202" />
                </linearGradient>

                {/* 6. Coiled Cord 3D Tube Lighting */}
                <linearGradient id="coiledWire3DGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0a0c0e" />
                  <stop offset="18%" stopColor="#1e2229" />
                  <stop offset="38%" stopColor="#4b5361" />
                  <stop offset="55%" stopColor="#778499" />
                  <stop offset="68%" stopColor="#3d4452" />
                  <stop offset="86%" stopColor="#15181d" />
                  <stop offset="100%" stopColor="#060708" />
                </linearGradient>

                {/* 7. Receiver Wooden Center Grip */}
                <linearGradient id="receiverHandleWood" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#852b1b" />
                  <stop offset="25%" stopColor="#54170d" />
                  <stop offset="60%" stopColor="#330b05" />
                  <stop offset="88%" stopColor="#1f0502" />
                  <stop offset="100%" stopColor="#100201" />
                </linearGradient>

                {/* Drop Shadows */}
                <filter id="buttonShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.85" />
                </filter>

                <filter id="rotaryShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#150402" floodOpacity="0.75" />
                </filter>

                <filter id="standShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#1a0604" floodOpacity="0.6" />
                </filter>
              </defs>

              {/* ========================================================== */}
              {/* GROUND CONTACT SHADOW & LOWER BASE (WIDER HORIZONTAL BODY) */}
              {/* ========================================================== */}
              <g id="wider-lower-body" transform="translate(300, 0) scale(1.18, 1) translate(-300, 0)">
                
                {/* Ground Contact Shadow with Entrance Animation */}
                <g className="anim-phone-shadow-plinth">
                  {/* Diffuse studio contact shadow directly under plinth & feet */}
                  <ellipse cx="300" cy="626" rx="265" ry="16" fill="#140603" opacity="0.38" filter="blur(6px)" />
                  <ellipse cx="300" cy="624" rx="235" ry="9" fill="#080201" opacity="0.55" filter="blur(3px)" />

                  {/* Sharp direct contact shadow patches under feet */}
                  <ellipse cx="94" cy="625" rx="30" ry="6" fill="#050100" opacity="0.88" />
                  <ellipse cx="506" cy="625" rx="30" ry="6" fill="#050100" opacity="0.88" />
                </g>

                {/* ========================================================== */}
                {/* LAYER 1: COILED TELEPHONE CORD (NATURALLY BENT C-BOW ARC)  */}
                {/* ========================================================== */}
                {/* Seamlessly connected: Left Earpiece Collar -> Curved Bow -> Base */}
                <g className="anim-phone-cord">
                  <g 
                    id="coiled-cable"
                    style={{
                      transform: isHandsetLifted ? 'scaleY(1.087)' : 'scaleY(1)',
                      transformBox: 'view-box',
                      transformOrigin: '96px 532px',
                      transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                      willChange: 'transform'
                    }}
                  >
                    {/* 1A. Upper Strain-Relief Boot & Lead-in Cable from Left Earpiece */}
                    <circle cx="106" cy="142" r="7.5" fill="#1b1d22" stroke="#090a0d" strokeWidth="1.5" />
                    <circle cx="106" cy="142" r="5" fill="#32363f" />

                    <path
                      d="M 106,142 C 86,142 74,150 70,164"
                      fill="none"
                      stroke="#131518"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 106,142 C 86,142 74,150 70,164"
                      fill="none"
                      stroke="#5a616d"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      opacity="0.6"
                    />

                    {/* 1B. 23 Symmetrically Curved 3D Helical Coils Tilting Along Outward C-Bow Arc */}
                    {COIL_POINTS_BENT.map((pt) => {
                      const { id, cx, cy, rotDeg } = pt;
                      const rx = 18;
                      const ry = 8;

                      return (
                        <g 
                          key={`coil-${id}`} 
                          id={`coil-segment-${id}`}
                          transform={`translate(${cx}, ${cy}) rotate(${rotDeg})`}
                        >
                          <ellipse
                            cx="0"
                            cy="3.5"
                            rx={rx - 1}
                            ry={ry - 1.5}
                            fill="#060708"
                            opacity="0.88"
                          />
                          <path
                            d={`M ${-rx},0 A ${rx} ${ry} 0 0 1 ${rx},0`}
                            fill="none"
                            stroke="#0b0c0f"
                            strokeWidth="8.5"
                            strokeLinecap="round"
                          />
                          <path
                            d={`M ${-rx + 2.5},1.8 A ${rx - 2.5} ${ry - 1.2} 0 0 0 ${rx - 2.5},1.8`}
                            fill="none"
                            stroke="url(#coiledWire3DGrad)"
                            strokeWidth="8"
                            strokeLinecap="round"
                          />
                          <path
                            d={`M ${-rx + 5},2.2 A ${rx - 5} ${ry - 2} 0 0 0 ${rx - 5},2.2`}
                            fill="none"
                            stroke="#9ba4b0"
                            strokeWidth="1.6"
                            opacity="0.55"
                            strokeLinecap="round"
                          />
                        </g>
                      );
                    })}

                    {/* 1C. Lower Cable Tail entering the telephone wooden base socket */}
                    <path
                      d="M 70,510 C 76,520 84,528 96,532"
                      fill="none"
                      stroke="#131518"
                      strokeWidth="9.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 70,510 C 76,520 84,528 96,532"
                      fill="none"
                      stroke="#5a616d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.55"
                    />

                    {/* Brass entry grommet/collar on the wooden base */}
                    <ellipse cx="96" cy="532" rx="7" ry="5" fill="url(#brassBellReflection)" stroke="#452a02" strokeWidth="1" />
                    <circle cx="96" cy="532" r="3.5" fill="#08090a" />
                  </g>
                </g>

                {/* ========================================================== */}
                {/* LAYER 2: MAIN TELEPHONE BODY – DARK WOODEN BASE             */}
                {/* ========================================================== */}
                <g id="main-wooden-base">
                  
                  {/* Plinth & Ground Feet Assembly Entrance */}
                  <g className="anim-phone-shadow-plinth">
                    {/* 2A. Golden Brass Corner Feet */}
                    <g id="foot-left">
                      <rect x="70" y="612" width="48" height="12" rx="5" fill="url(#brassFootGradient)" stroke="#422502" strokeWidth="1.2" />
                      <rect x="78" y="604" width="32" height="9" rx="3.5" fill="url(#brassBellReflection)" stroke="#523204" strokeWidth="1" />
                      <line x1="86" y1="605" x2="86" y2="623" stroke="#fffce8" strokeWidth="2.5" opacity="0.85" />
                      <line x1="102" y1="605" x2="102" y2="623" stroke="#422502" strokeWidth="2" opacity="0.6" />
                    </g>

                    <g id="foot-right">
                      <rect x="482" y="612" width="48" height="12" rx="5" fill="url(#brassFootGradient)" stroke="#422502" strokeWidth="1.2" />
                      <rect x="490" y="604" width="32" height="9" rx="3.5" fill="url(#brassBellReflection)" stroke="#523204" strokeWidth="1" />
                      <line x1="498" y1="605" x2="498" y2="623" stroke="#fffce8" strokeWidth="2.5" opacity="0.85" />
                      <line x1="514" y1="605" x2="514" y2="623" stroke="#422502" strokeWidth="2" opacity="0.6" />
                    </g>

                    {/* 2B. Bottom Wooden Plinth */}
                    <rect x="48" y="560" width="504" height="48" rx="14" fill="#120302" opacity="0.95" />
                    <rect 
                      x="50" 
                      y="556" 
                      width="500" 
                      height="50" 
                      rx="12" 
                      fill="url(#mahoganyPlinthGradient)" 
                      stroke="#3a0e08" 
                      strokeWidth="1.5"
                    />
                    <rect x="50" y="556" width="500" height="50" rx="12" fill="url(#woodGrainStripes)" opacity="0.65" />
                    <path
                      d="M 58,558 L 542,558"
                      stroke="#cf543b"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                    <path
                      d="M 60,560 L 540,560"
                      stroke="#ffa087"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      opacity="0.45"
                    />
                    <path
                      d="M 56,605 L 544,605"
                      stroke="#0a0201"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                  </g>

                  {/* Upper Victorian Casket Body & Pillars Entrance */}
                  <g className="anim-phone-casket">
                    {/* 2C. Golden Brass Molding Trim */}
                    <g id="bottom-brass-trim">
                      <rect x="72" y="546" width="456" height="11" rx="5" fill="#100302" opacity="0.75" />
                      <rect 
                        x="74" 
                        y="544" 
                        width="452" 
                        height="10" 
                        rx="4.5" 
                        fill="url(#bottomBrassMolding)" 
                        stroke="#684105" 
                        strokeWidth="1"
                      />
                      <line x1="84" y1="546.5" x2="516" y2="546.5" stroke="#fffceb" strokeWidth="1.8" opacity="0.9" />
                      <line x1="84" y1="551" x2="516" y2="551" stroke="#664104" strokeWidth="1.5" opacity="0.7" />
                    </g>

                    {/* 2D. Main Sloping Body */}
                    <g id="main-casket-body">
                      <path
                        d="M 140,272 L 460,272 C 456,350 480,450 532,548 L 68,548 C 120,450 144,350 140,272 Z"
                        fill="#150503"
                        opacity="0.45"
                      />
                      <path
                        d="M 144,272 
                           L 456,272 
                           C 452,350 478,450 528,546 
                           L 72,546 
                           C 122,450 148,350 144,272 Z"
                        fill="url(#mahoganyBodyGlow)"
                        stroke="#290704"
                        strokeWidth="2"
                      />
                      <path
                        d="M 144,272 
                           L 456,272 
                           C 452,350 478,450 528,546 
                           L 72,546 
                           C 122,450 148,350 144,272 Z"
                        fill="url(#woodGrainStripes)"
                        opacity="0.55"
                      />
                      <path
                        d="M 144,272 C 148,350 122,450 72,546"
                        stroke="#681f14"
                        strokeWidth="7"
                        fill="none"
                        opacity="0.4"
                      />
                      <path
                        d="M 146,272 C 150,350 124,450 75,546"
                        stroke="#ff896e"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.65"
                      />
                      <path
                        d="M 141,272 C 145,350 119,450 69,546"
                        stroke="#0f0201"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.85"
                      />
                      <path
                        d="M 456,272 C 452,350 478,450 528,546"
                        stroke="#681f14"
                        strokeWidth="7"
                        fill="none"
                        opacity="0.4"
                      />
                      <path
                        d="M 454,272 C 450,350 476,450 525,546"
                        stroke="#ff896e"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.65"
                      />
                      <path
                        d="M 459,272 C 455,350 481,450 531,546"
                        stroke="#0f0201"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.85"
                      />
                      <path
                        d="M 160,285 Q 300,295 440,285 Q 465,400 490,520 Q 300,538 110,520 Q 135,400 160,285 Z"
                        fill="url(#woodReflectionSheen)"
                        opacity="0.6"
                      />
                    </g>

                    {/* 2E. Left & Right Fluted Brass Pillars */}
                    <g id="fluted-pillar-left">
                      <rect x="136" y="272" width="22" height="274" rx="4" fill="url(#brassPillarGradient)" stroke="#4d2f04" strokeWidth="1" />
                      <line x1="141" y1="272" x2="141" y2="546" stroke="#ffffff" strokeWidth="1.8" opacity="0.85" />
                      <line x1="147" y1="272" x2="147" y2="546" stroke="#4a2e03" strokeWidth="1.2" opacity="0.6" />
                    </g>

                    <g id="fluted-pillar-right">
                      <rect x="442" y="272" width="22" height="274" rx="4" fill="url(#brassPillarGradient)" stroke="#4d2f04" strokeWidth="1" />
                      <line x1="447" y1="272" x2="447" y2="546" stroke="#ffffff" strokeWidth="1.8" opacity="0.85" />
                      <line x1="453" y1="272" x2="453" y2="546" stroke="#4a2e03" strokeWidth="1.2" opacity="0.6" />
                    </g>

                    {/* 2F. Upper Wooden Platform (Top Crown Platform) */}
                    <rect x="123" y="268" width="354" height="12" rx="4" fill="#0c0201" opacity="0.9" />
                    <rect 
                      x="122" 
                      y="228" 
                      width="356" 
                      height="44" 
                      rx="8" 
                      fill="url(#mahoganyCapGradient)" 
                      stroke="#3a0f08" 
                      strokeWidth="1.5"
                    />
                    <rect x="122" y="228" width="356" height="44" rx="8" fill="url(#woodGrainStripes)" opacity="0.7" />
                    <path
                      d="M 126,229 L 474,229"
                      stroke="#e46549"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                    <path
                      d="M 132,231 L 468,231"
                      stroke="#ffb39e"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                    <line x1="124" y1="250" x2="476" y2="250" stroke="#1d0503" strokeWidth="2.5" opacity="0.75" />
                    <line x1="124" y1="252" x2="476" y2="252" stroke="#c04b33" strokeWidth="1.2" opacity="0.5" />
                  </g>
                </g>
              </g>

              {/* ========================================================== */}
              {/* LAYER 3: VINTAGE ROTARY DIAL (STAYS 100% PERFECT CIRCLE)   */}
              {/* ========================================================== */}
              <g id="vintage-rotary-dial" filter="url(#rotaryShadow)">
                
                {/* Golden Rotary Faceplate Entrance Animation */}
                <g transform="translate(300, 408)">
                  <g 
                    className="anim-rotary-bezel"
                    style={{ transformOrigin: '0px 0px' }}
                  >
                    <g transform="translate(-300, -408)">
                      {/* 4A. Outer Deep Inset Shadow into Wood */}
                      <circle cx="300" cy="410" r="130" fill="#140402" opacity="0.9" />

                      {/* 4B. Large Circular Golden Metallic Outer Bezel Ring */}
                      <circle 
                        cx="300" 
                        cy="408" 
                        r="127" 
                        fill="url(#rotaryOuterBezel)" 
                        stroke="#543403" 
                        strokeWidth="2.8" 
                        className="cursor-pointer"
                        onClick={triggerRotarySpin}
                      />

                      {/* Outer Bezel Stepped Bevels */}
                      <circle cx="300" cy="408" r="122" fill="none" stroke="#fff9e0" strokeWidth="2.2" opacity="0.8" className="pointer-events-none" />
                      <circle cx="300" cy="408" r="118" fill="none" stroke="#5a3805" strokeWidth="2" opacity="0.85" className="pointer-events-none" />
                      <circle cx="300" cy="408" r="114" fill="none" stroke="#fed658" strokeWidth="1.4" opacity="0.6" className="pointer-events-none" />

                      {/* 4C. Inner Circular Brass Dial Surface */}
                      <circle 
                        cx="300" 
                        cy="408" 
                        r="112" 
                        fill="url(#rotaryInnerFace)" 
                        stroke="#734909" 
                        strokeWidth="1.6" 
                        className="cursor-pointer"
                        onClick={triggerRotarySpin}
                      />

                      {/* Concentric Spun-Brass Grooves */}
                      <circle cx="300" cy="408" r="103" fill="none" stroke="#fad46b" strokeWidth="0.8" opacity="0.4" className="pointer-events-none" />
                      <circle cx="300" cy="408" r="94" fill="none" stroke="#5d3905" strokeWidth="0.8" opacity="0.4" className="pointer-events-none" />
                      <circle cx="300" cy="408" r="74" fill="none" stroke="#ffe794" strokeWidth="0.6" opacity="0.3" className="pointer-events-none" />
                    </g>
                  </g>
                </g>

                {/* ROTATING ROTARY MECHANISM WRAPPER */}
                <g
                  transform={`rotate(${rotaryAngle}, 300, 408)`}
                  style={{
                    transition: `transform ${spinDuration}ms cubic-bezier(0.18, 0.85, 0.32, 1.02)`,
                    willChange: 'transform'
                  }}
                >
                  {/* ------------------------------------------------------ */}
                  {/* 4D. EIGHT CONTACT US ACTION BUTTONS WITH VECTOR ICONS  */}
                  {/* ------------------------------------------------------ */}
                  {DIAL_BUTTONS_8.map((btn, index) => {
                    const cx = 300 + btn.dx;
                    const cy = 408 + btn.dy;
                    const isAct = activeButton === btn.id;
                    const isHov = hoveredButton?.id === btn.id;

                    return (
                      <g
                        key={`btn-${btn.id}`}
                        className="cursor-pointer group"
                        onClick={(e) => handleButtonClick(e, btn)}
                        onMouseEnter={() => setHoveredButton(btn)}
                        onMouseLeave={() => setHoveredButton(null)}
                        transform={`translate(${cx}, ${cy})`}
                      >
                        <g 
                          className="anim-dial-button"
                          style={{ 
                            animationDelay: `${1100 + index * 125}ms`,
                            transformOrigin: '0px 0px'
                          }}
                        >
                          <g transform={`translate(${-cx}, ${-cy})`}>
                            <title>{btn.title}</title>

                            {/* Socket drop shadow on brass faceplate */}
                            <circle cx={cx} cy={cy + 3} r="23.5" fill="#291802" opacity="0.68" />

                            {/* Golden Brass Socket Collar */}
                            <circle 
                              cx={cx} 
                              cy={cy} 
                              r="22.5" 
                              fill="url(#buttonSocketRing)" 
                              stroke={isHov ? "#fff4ba" : "#633e05"} 
                              strokeWidth={isHov ? 2.2 : 1.3} 
                              className="transition-colors duration-150"
                            />
                            <circle cx={cx} cy={cy} r="20.5" fill="none" stroke="#fff4ba" strokeWidth="1" opacity="0.8" />

                            {/* Raised Glossy Black Button Surface */}
                            <circle
                              cx={cx}
                              cy={isAct ? cy + 1.2 : cy}
                              r={isAct ? 17.2 : 18}
                              fill="url(#buttonDomedGloss)"
                              stroke={isHov ? "#ffd966" : "#0a0a0c"}
                              strokeWidth={isHov ? 1.8 : 1.4}
                              className="transition-all duration-100"
                              filter="url(#buttonShadow)"
                            />

                            {/* Spherical Specular Highlight */}
                            <ellipse
                              cx={cx - 5.5}
                              cy={isAct ? cy - 4.2 : cy - 5.5}
                              rx="7"
                              ry="4"
                              fill="#ffffff"
                              opacity={isAct ? "0.2" : "0.6"}
                            />

                            {/* High-Visibility Custom Contact Us SVG Icon */}
                            {renderButtonIcon(btn.iconType, cx, cy, isAct)}
                          </g>
                        </g>
                      </g>
                    );
                  })}
                </g>

                {/* Floating Tooltip Displaying Button Name On Hover */}
                {hoveredButton && (
                  <g 
                    transform="translate(300, 260)" 
                    className="pointer-events-none transition-all duration-150"
                  >
                    <rect
                      x="-90"
                      y="-16"
                      width="180"
                      height="32"
                      rx="16"
                      fill="#150503"
                      stroke="#ffd966"
                      strokeWidth="1.5"
                      filter="drop-shadow(0 4px 10px rgba(0,0,0,0.85))"
                    />
                    <circle cx="-68" cy="0" r="3.5" fill="#ffd966" />
                    <text
                      x="-55"
                      y="4.5"
                      fill="#fff9e0"
                      fontSize="12.5"
                      fontWeight="800"
                      fontFamily="system-ui, -apple-system, sans-serif"
                    >
                      {hoveredButton.title}
                    </text>
                  </g>
                )}

                {/* -------------------------------------------------------- */}
                {/* 4E. CENTRAL CALLING ICON & MEDALLION (COMPACT & REFINED) */}
                {/* -------------------------------------------------------- */}
                <g transform="translate(300, 408)">
                  <g 
                    className="anim-center-medallion"
                    style={{ 
                      animationDelay: '2150ms',
                      transformOrigin: '0px 0px'
                    }}
                  >
                    <g transform="translate(-300, -408)">
                      <g 
                        id="center-medallion" 
                        className="cursor-pointer group select-none"
                        onClick={handleCenterClick}
                      >
                        {/* Outer Golden Brass Raised Ring with Concentric Grooves */}
                        <circle cx="300" cy="408" r={centerActive ? 32.2 : 33} fill="url(#centerRingGrad)" stroke="#523203" strokeWidth="1.6" className="transition-all duration-100" />
                        <circle cx="300" cy="408" r={centerActive ? 30.2 : 31} fill="none" stroke="#fff8d4" strokeWidth="1" opacity="0.8" />
                        <circle cx="300" cy="408" r={centerActive ? 28.7 : 29.5} fill="none" stroke="#694005" strokeWidth="1" opacity="0.75" />
                        <circle cx="300" cy="408" r={centerActive ? 26.7 : 27.5} fill="none" stroke="#ffd966" strokeWidth="0.7" opacity="0.5" />

                        {/* Dark Central Recessed Circular Disc */}
                        <circle 
                          cx="300" 
                          cy="408" 
                          r={centerActive ? 25 : 26} 
                          fill="url(#centerDiscDark)" 
                          stroke="#291106" 
                          strokeWidth="1.4" 
                          className="transition-all duration-100"
                        />
                        <circle cx="300" cy="408" r={centerActive ? 23.5 : 24.5} fill="none" stroke="#633116" strokeWidth="0.7" opacity="0.5" />

                        {/* Central Telephone Calling Handset Icon */}
                        <g 
                          transform={`translate(300, 408) scale(${centerActive ? 0.54 : 0.58})`}
                          className="pointer-events-none transition-transform duration-100"
                        >
                          <path
                            d="M -11,2 C -12,-0.5 -11.2,-3 -9,-4 L -5,-5.8 C -4,-6.2 -2.5,-5.8 -1.8,-4.8 L 0,-2 C 0.6,-1 0.3,0.3 -0.6,1 L -2,2 C -0.8,5 1.5,7.5 4.5,8.8 L 5.5,7.4 C 6.2,6.4 7.6,6.1 8.6,6.7 L 11.4,8.5 C 12.4,9.1 12.8,10.5 12.2,11.5 L 10.5,14.8 C 9.5,16.8 6.8,17.5 4.7,16.5 C -4.5,12.2 -9,5.5 -11,2 Z"
                            fill="url(#goldFloralGradient)"
                            stroke="#573804"
                            strokeWidth="1"
                            filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.85))"
                          />
                          <path
                            d="M 6,-4 C 8.8,-2 11,1 12,4.5"
                            fill="none"
                            stroke="url(#centerRingGrad)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            opacity="0.9"
                          />
                          <path
                            d="M 9.5,-7.5 C 13.5,-5 16.5,-1 18,3.5"
                            fill="none"
                            stroke="url(#centerRingGrad)"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            opacity="0.95"
                          />
                        </g>

                        {/* Subtle Glass Reflection Arc across Top of Medallion */}
                        <path
                          d="M 280,391 A 24 24 0 0 1 320,391 A 22 20 0 0 0 280,391 Z"
                          fill="#ffffff"
                          opacity="0.14"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>

              {/* ========================================================== */}
              {/* UPPER STAND & RECEIVER (WIDER HORIZONTAL SPREAD)           */}
              {/* ========================================================== */}
              <g id="wider-upper-assembly" transform="translate(300, 0) scale(1.18, 1) translate(-300, 0)">
                {/* LAYER 5: TOP CRADLE & BRASS STAND (ENTRANCE ANIMATION)     */}
                <g className="anim-phone-cradle">
                  <g id="cradle-and-stand" filter="url(#standShadow)">
                    <ellipse cx="300" cy="232" rx="64" ry="12" fill="#140402" opacity="0.75" />
                    <ellipse 
                      cx="300" 
                      cy="226" 
                      rx="60" 
                      ry="11" 
                      fill="url(#brassStandBase)" 
                      stroke="#593a05" 
                      strokeWidth="1.5"
                    />
                    <ellipse cx="300" cy="225" rx="56" ry="9" fill="none" stroke="#fffbe0" strokeWidth="1.2" opacity="0.8" />
                    <ellipse 
                      cx="300" 
                      cy="220" 
                      rx="46" 
                      ry="8.5" 
                      fill="url(#brassBellReflection)" 
                      stroke="#6b4406" 
                      strokeWidth="1.2"
                    />
                    <ellipse cx="300" cy="219" rx="43" ry="7" fill="none" stroke="#fff4b8" strokeWidth="1" opacity="0.7" />

                    {/* Central Vertical Brass Column */}
                    <path
                      d="M 272,216 
                         C 278,178 286,150 284,136 
                         L 316,136 
                         C 314,150 322,178 328,216 Z"
                      fill="url(#brassBellReflection)"
                      stroke="#523204"
                      strokeWidth="1.5"
                    />
                    <rect 
                      x="280" 
                      y="132" 
                      width="40" 
                      height="9" 
                      rx="3" 
                      fill="url(#brassBellReflection)" 
                      stroke="#613c05" 
                      strokeWidth="1"
                    />
                    <line x1="284" y1="134" x2="316" y2="134" stroke="#fffde8" strokeWidth="1.5" opacity="0.8" />

                    {/* Curved Golden Support Rods */}
                    <path
                      d="M 204,64 
                         C 204,120 245,130 290,133 
                         L 310,133 
                         C 355,130 396,120 396,64 
                         L 404,64 
                         C 404,128 360,140 312,143 
                         L 288,143 
                         C 240,140 196,128 196,64 Z"
                      fill="url(#brassBellReflection)"
                      stroke="#543504"
                      strokeWidth="1.5"
                    />

                    {/* Left Cradle Fork Prongs */}
                    <g id="cradle-rest-left">
                      <path
                        d="M 198,65 C 196,49 206,39 214,39 C 218,39 220,43 218,49 C 214,57 214,63 216,71 Z"
                        fill="url(#brassBellReflection)"
                        stroke="#573604"
                        strokeWidth="1.2"
                      />
                      <circle cx="214" cy="38" r="4.5" fill="url(#brassBellReflection)" stroke="#4a2e03" strokeWidth="1" />
                    </g>

                    {/* Right Cradle Fork Prongs */}
                    <g id="cradle-rest-right">
                      <path
                        d="M 402,65 C 404,49 394,39 386,39 C 382,39 380,43 382,49 C 386,57 386,63 384,71 Z"
                        fill="url(#brassBellReflection)"
                        stroke="#573604"
                        strokeWidth="1.2"
                      />
                      <circle cx="386" cy="38" r="4.5" fill="url(#brassBellReflection)" stroke="#4a2e03" strokeWidth="1" />
                    </g>

                    {/* Specular Spine Reflection */}
                    <path
                      d="M 206,68 C 206,116 248,128 300,130 C 352,128 394,116 394,68"
                      fill="none"
                      stroke="#fffbe8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                    <path
                      d="M 207,68 C 207,116 248,128 300,130 C 352,128 393,116 393,68"
                      fill="none"
                      stroke="#ffd54f"
                      strokeWidth="1"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  </g>
                </g>

                {/* ========================================================== */}
                {/* LAYER 6: TOP TELEPHONE RECEIVER ASSEMBLY                   */}
                {/* ========================================================== */}
                <g className="anim-phone-handset">
                  {/* Handset Drop Shadow onto Stand & Platform */}
                  <path
                    d="M 80,150 Q 300,80 520,150"
                    stroke="#100302"
                    strokeWidth={isHandsetLifted ? "11" : "18"}
                    opacity={isHandsetLifted ? "0.18" : "0.4"}
                    filter={isHandsetLifted ? "blur(10px)" : "blur(6px)"}
                    style={{
                      transition: 'all 700ms cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  />

                  {/* Complete handset resting securely in cradle / lifts up when dialed */}
                  <g 
                    id="receiver-assembly"
                    className="cursor-pointer select-none"
                    onClick={triggerHandsetLift}
                    style={{
                      transform: isHandsetLifted ? 'translateY(-34px)' : 'translateY(0px)',
                      transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                      willChange: 'transform'
                    }}
                  >
                    {/* 6A. Horizontal Dark Reddish-Brown Wooden Center Grip */}
                    <g id="receiver-wooden-grip">
                      <rect x="222" y="24" width="156" height="58" rx="14" fill="#0f0302" opacity="0.6" />
                      <rect 
                        x="222" 
                        y="20" 
                        width="156" 
                        height="56" 
                        rx="14" 
                        fill="url(#receiverHandleWood)" 
                        stroke="#330b05" 
                        strokeWidth="1.5"
                      />
                      <rect x="222" y="20" width="156" height="56" rx="14" fill="url(#woodGrainStripes)" opacity="0.75" />
                      <line x1="230" y1="26" x2="370" y2="26" stroke="#ffa38c" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                      <line x1="238" y1="28" x2="362" y2="28" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                      <line x1="230" y1="70" x2="370" y2="70" stroke="#120301" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
                    </g>

                    {/* 6B. Decorative Brass Ferrule Rings */}
                    <g id="brass-ferrules">
                      <rect x="214" y="22" width="14" height="52" rx="4" fill="url(#brassBellReflection)" stroke="#523204" strokeWidth="1.2" />
                      <line x1="219" y1="23" x2="219" y2="73" stroke="#fffbe8" strokeWidth="2.2" opacity="0.8" />
                      <rect x="372" y="22" width="14" height="52" rx="4" fill="url(#brassBellReflection)" stroke="#523204" strokeWidth="1.2" />
                      <line x1="377" y1="23" x2="377" y2="73" stroke="#fffbe8" strokeWidth="2.2" opacity="0.8" />
                    </g>

                    {/* 6C. Left & Right Arched Golden Brass Tubing Connectors */}
                    <g id="tubing-connectors">
                      <path
                        d="M 216,48 C 172,48 144,70 136,98"
                        fill="none"
                        stroke="#523204"
                        strokeWidth="15"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 216,48 C 172,48 144,70 136,98"
                        fill="none"
                        stroke="url(#brassBellReflection)"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 214,45 C 174,45 147,67 139,94"
                        fill="none"
                        stroke="#fffde8"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        opacity="0.85"
                      />

                      <path
                        d="M 384,48 C 428,48 456,70 464,98"
                        fill="none"
                        stroke="#523204"
                        strokeWidth="15"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 384,48 C 428,48 456,70 464,98"
                        fill="none"
                        stroke="url(#brassBellReflection)"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 386,45 C 426,45 453,67 461,94"
                        fill="none"
                        stroke="#fffde8"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        opacity="0.85"
                      />
                    </g>

                    {/* 6D. Left Golden Brass Earpiece/Mouthpiece Assembly */}
                    <g id="earpiece-left" transform="translate(136, 110) rotate(18) translate(-136, -110)">
                      <circle cx="136" cy="42" r="11" fill="url(#brassStandBase)" stroke="#573905" strokeWidth="1.2" />
                      <rect x="126" y="50" width="20" height="9" rx="3" fill="url(#brassBellReflection)" stroke="#543704" strokeWidth="1" />
                      <ellipse cx="136" cy="62" rx="22" ry="7" fill="url(#brassStandBase)" stroke="#593905" strokeWidth="1" />

                      <path
                        d="M 114,62 
                           C 112,100 86,125 76,148 
                           L 196,148 
                           C 186,125 160,100 158,62 Z"
                        fill="url(#brassBellReflection)"
                        stroke="#543604"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M 130,64 C 130,98 112,122 104,146"
                        stroke="#ffffff"
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.8"
                      />
                      <path
                        d="M 137,64 C 137,98 122,122 116,146"
                        stroke="#fff7cf"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.65"
                      />
                      <path
                        d="M 152,64 C 152,98 166,122 174,146"
                        stroke="#472e04"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.75"
                      />

                      <rect 
                        x="74" 
                        y="146" 
                        width="124" 
                        height="20" 
                        rx="7" 
                        fill="#16181b" 
                        stroke="#08090a" 
                        strokeWidth="1.5"
                      />
                      <line x1="82" y1="150" x2="190" y2="150" stroke="#686f7a" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
                      <line x1="84" y1="153" x2="188" y2="153" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />

                      <ellipse cx="136" cy="164" rx="58" ry="8" fill="#08090a" stroke="#1c1f24" strokeWidth="1" />
                      <ellipse cx="136" cy="164" rx="36" ry="4.5" fill="#13161a" stroke="#252a32" strokeWidth="0.6" />
                      <circle cx="136" cy="164" r="1.5" fill="#050607" />
                      <circle cx="126" cy="164" r="1.2" fill="#050607" />
                      <circle cx="146" cy="164" r="1.2" fill="#050607" />
                    </g>

                    {/* 6E. Right Golden Brass Earpiece/Mouthpiece Assembly */}
                    <g id="earpiece-right" transform="translate(464, 110) rotate(-18) translate(-464, -110)">
                      <circle cx="464" cy="42" r="11" fill="url(#brassStandBase)" stroke="#573905" strokeWidth="1.2" />
                      <rect x="454" y="50" width="20" height="9" rx="3" fill="url(#brassBellReflection)" stroke="#543704" strokeWidth="1" />
                      <ellipse cx="464" cy="62" rx="22" ry="7" fill="url(#brassStandBase)" stroke="#593905" strokeWidth="1" />

                      <path
                        d="M 442,62 
                           C 440,100 414,125 404,148 
                           L 524,148 
                           C 514,125 488,100 486,62 Z"
                        fill="url(#brassBellReflection)"
                        stroke="#543604"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M 458,64 C 458,98 440,122 432,146"
                        stroke="#ffffff"
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.8"
                      />
                      <path
                        d="M 465,64 C 465,98 450,122 444,146"
                        stroke="#fff7cf"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.65"
                      />
                      <path
                        d="M 480,64 C 480,98 494,122 502,146"
                        stroke="#472e04"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.75"
                      />

                      <rect 
                        x="402" 
                        y="146" 
                        width="124" 
                        height="20" 
                        rx="7" 
                        fill="#16181b" 
                        stroke="#08090a" 
                        strokeWidth="1.5"
                      />
                      <line x1="410" y1="150" x2="518" y2="150" stroke="#686f7a" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
                      <line x1="412" y1="153" x2="516" y2="153" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />

                      <ellipse cx="464" cy="164" rx="58" ry="8" fill="#08090a" stroke="#1c1f24" strokeWidth="1" />
                      <ellipse cx="464" cy="164" rx="36" ry="4.5" fill="#13161a" stroke="#252a32" strokeWidth="0.6" />
                      <circle cx="464" cy="164" r="1.5" fill="#050607" />
                      <circle cx="454" cy="164" r="1.2" fill="#050607" />
                      <circle cx="474" cy="164" r="1.2" fill="#050607" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. GET IN TOUCH SECTION (CONTACT INFORMATION & OUR LOCATION)   */}
      {/* ============================================================ */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Section Title & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-10 anim-section-header">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Get in <span className="text-blue-600">Touch</span>
            </h2>

            {/* Decorative Divider with Center Dot */}
            <div className="flex items-center justify-center gap-2 my-3">
              <span className="w-12 h-[2.5px] bg-blue-600 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              <span className="w-12 h-[2.5px] bg-blue-600 rounded-full"></span>
            </div>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed px-4">
              For news updates, media inquiries, advertising, business partnerships, press releases, feedback, and general support, connect with the CR Real Time News Channel through the following details.
            </p>
          </div>

          {/* Two Column Grid: Contact Information & Our Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* ============================================================ */}
            {/* CARD 1: CONTACT INFORMATION                                   */}
            {/* ============================================================ */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between anim-card-left">
              <div>
                {/* Header with Underline Bar */}
                <div className="mb-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="relative pb-2">
                      Contact
                      <span className="absolute bottom-0 left-0 w-9 h-1 bg-blue-600 rounded-full"></span>
                    </span>
                    <span className="text-blue-600 pb-2">Information</span>
                  </h3>
                </div>

                {/* Information Items */}
                <div className="space-y-5">
                  
                  {/* 1. Address */}
                  <div className="flex items-start gap-4 anim-stagger-item-1">
                    <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800">Address</h4>
                      <p className="text-xs sm:text-sm font-bold text-gray-900 mt-1 tracking-wide">
                        {CONTACT_DETAILS.addressTitle}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                        {CONTACT_DETAILS.fullAddress}
                      </p>
                    </div>
                  </div>

                  {/* 2. Contact Number */}
                  <div className="flex items-start gap-4 anim-stagger-item-2">
                    <div className="w-11 h-11 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800">Contact Number</h4>
                      <div className="text-xs sm:text-sm font-medium text-gray-700 mt-1">
                        <a 
                          href={CONTACT_DETAILS.contactNumberTel} 
                          className="hover:text-blue-600 font-semibold transition-colors underline-offset-2 hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>{CONTACT_DETAILS.contactNumber}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 3. Email ID */}
                  <div className="flex items-start gap-4 anim-stagger-item-3">
                    <div className="w-11 h-11 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="16" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800">Email ID</h4>
                      <div className="text-xs sm:text-sm text-gray-700 mt-1 space-y-1">
                        <div>
                          <span className="text-gray-500 font-medium text-[11px] block sm:inline sm:mr-1">Primary:</span>
                          <a 
                            href={CONTACT_DETAILS.primaryEmailMailto} 
                            className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline font-semibold"
                          >
                            {CONTACT_DETAILS.primaryEmail}
                          </a>
                        </div>
                        <div>
                          <span className="text-gray-500 font-medium text-[11px] block sm:inline sm:mr-1">HR & Recruitment:</span>
                          <a 
                            href={CONTACT_DETAILS.hrEmailMailto} 
                            className="hover:text-blue-600 transition-colors underline-offset-2 hover:underline font-semibold"
                          >
                            {CONTACT_DETAILS.hrEmail}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Official Website */}
                  <div className="flex items-start gap-4 anim-stagger-item-4">
                    <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-800">Official Website</h4>
                      <div className="text-xs sm:text-sm font-medium text-gray-700 mt-1">
                        <a 
                          href={CONTACT_DETAILS.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-700 transition-colors underline-offset-2 hover:underline font-semibold inline-flex items-center gap-1"
                        >
                          <span>{CONTACT_DETAILS.websiteUrl}</span>
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* CARD 2: OUR LOCATION & INTERACTIVE MAP                        */}
            {/* ============================================================ */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between anim-card-right">
              <div>
                {/* Header with Underline Bar & "Open in Maps" Link */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="relative pb-2">
                      Our
                      <span className="absolute bottom-0 left-0 w-8 h-1 bg-blue-600 rounded-full"></span>
                    </span>
                    <span className="text-blue-600 pb-2">Location</span>
                  </h3>

                  <a
                    href={CONTACT_DETAILS.mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50/70 hover:bg-blue-100/90 border border-blue-200/80 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                      <line x1="8" y1="2" x2="8" y2="18"/>
                      <line x1="16" y1="6" x2="16" y2="22"/>
                    </svg>
                    <span>Open in Maps</span>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>

                {/* Embedded Interactive Map Container */}
                <div className="relative w-full h-[300px] sm:h-[340px] rounded-xl overflow-hidden border border-gray-200 shadow-inner group">
                  <iframe
                    title="DLF Cyber City Location Map"
                    src={CONTACT_DETAILS.mapEmbedUrl}
                    className="w-full h-full border-0 filter saturate-[1.1]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Realistic Destination Marker Floating Popup Card */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-gray-200/80 max-w-[240px] pointer-events-none transition-transform duration-300 group-hover:scale-105">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-gray-900 truncate">
                          {CONTACT_DETAILS.channelName}
                        </h4>
                        <p className="text-[11px] text-gray-600 leading-tight mt-0.5">
                          {CONTACT_DETAILS.mapLocationTitle}
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-[10px] text-amber-600 font-semibold">
                          <span>{CONTACT_DETAILS.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={CONTACT_DETAILS.mapSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto mt-2 w-full text-center block text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded-lg transition-colors shadow-xs"
                    >
                      Open in Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export { ContactUs, ContactUs as ContactUsPage };
