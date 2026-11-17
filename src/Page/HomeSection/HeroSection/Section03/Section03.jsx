import React, { useState } from 'react';
import { FaBolt, FaLightbulb, FaTv, FaClockRotateLeft } from 'react-icons/fa6';

// 1. VINTAGE TORCH SUBCOMPONENT
/**
 * Tourch Component - Vintage 1960s-1980s Battery Box Torch with Broadcast Screen
 * 100% Native React + Tailwind + Pure Inline SVG & CSS Illustration
 * Pixel-Perfect Recreation matching the Reference Image exactly.
 */
function Tourch() {
  const [isLightOn, setIsLightOn] = useState(true);

  return (
    <div className="relative mx-auto w-full flex items-center justify-center select-none font-sans">
      {/* Responsive Aspect-Ratio Container */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          width: 'min(100%, 1024px, calc((100dvh - 48px) * 1.7395))',
          maxWidth: '1024px',
          aspectRatio: '1035 / 595',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-45 -10 1035 595"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Google Fonts embed for Hindi Devanagari typography */}
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700;800;900&family=Tiro+Devanagari+Hindi&display=swap');
                .hindi-headline {
                  font-family: 'Mukta', 'Kohinoor Devanagari', 'Noto Sans Devanagari', sans-serif;
                }
              `}
            </style>

            {/* Gaussian Blur Filters */}
            <filter id="torchBeamBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
            <filter id="softRayBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="coreGlowBlur" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id="neonBorderGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="groundShadowBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="20" />
            </filter>
            <filter id="strapShadowBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>

            {/* Radiant Flashlight Volumetric Beam Gradient */}
            <radialGradient id="torchVolumetricLight" cx="95%" cy="50%" r="90%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="15%" stopColor="#fffae0" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#fef08a" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#fde047" stopOpacity="0.35" />
              <stop offset="85%" stopColor="#eab308" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
            </radialGradient>

            {/* Hot Core Filament Glow */}
            <radialGradient id="hotFilamentGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fffae0" />
              <stop offset="60%" stopColor="#fde047" />
              <stop offset="85%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>

            {/* Parabolic Reflector Golden Tiers */}
            <radialGradient id="reflectorConeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="75%" stopColor="#ca8a04" />
              <stop offset="92%" stopColor="#854d0e" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>

            {/* Base Reflector Warm Glow Radial Gradient */}
            <radialGradient id="reflectorBaseWarmGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffdf0" />
              <stop offset="30%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#facc15" />
              <stop offset="85%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#ca8a04" />
            </radialGradient>

            {/* Reflector Bowl Clip Path to confine soft blurred shadow rays inside bowl */}
            <clipPath id="reflectorBowlClip">
              <ellipse cx="205" cy="320" rx="98" ry="164" />
            </clipPath>

            {/* 3D Tiered Depth Shadow Overlay for Reflector Bowl (Soft Shadow-Type Depth, NO hard lines) */}
            <radialGradient id="reflectorBowlDepthShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="36%" stopColor="#000000" stopOpacity="0" />
              <stop offset="39%" stopColor="#451a03" stopOpacity="0.32" />
              <stop offset="41%" stopColor="#000000" stopOpacity="0" />
              <stop offset="66%" stopColor="#000000" stopOpacity="0" />
              <stop offset="69%" stopColor="#78350f" stopOpacity="0.28" />
              <stop offset="71%" stopColor="#fffde7" stopOpacity="0.2" />
              <stop offset="74%" stopColor="#000000" stopOpacity="0" />
              <stop offset="92%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#3b1402" stopOpacity="0.4" />
            </radialGradient>

            {/* Exact Fiery Bulb Disc Radial Gradient matching User Reference */}
            <radialGradient id="fieryBulbDiscGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="26%" stopColor="#ffffff" />
              <stop offset="36%" stopColor="#fed7aa" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="70%" stopColor="#ea580c" />
              <stop offset="88%" stopColor="#9a3412" />
              <stop offset="100%" stopColor="#5c1d06" />
            </radialGradient>

            {/* Polished Golden Chamfer Sheen Gradient */}
            <linearGradient id="goldChamferGrad" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="20%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>

            {/* Bezel Face Specular Sheen Gradient */}
            <linearGradient id="bezelFaceSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e2736" />
              <stop offset="30%" stopColor="#2c384a" />
              <stop offset="60%" stopColor="#435368" />
              <stop offset="78%" stopColor="#62748e" />
              <stop offset="88%" stopColor="#3b485c" />
              <stop offset="100%" stopColor="#182230" />
            </linearGradient>

            {/* Cylindrical Barrel Body Gradient */}
            <linearGradient id="barrelCylinderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#192230" />
              <stop offset="25%" stopColor="#283547" />
              <stop offset="60%" stopColor="#3d4d65" />
              <stop offset="80%" stopColor="#556782" />
              <stop offset="100%" stopColor="#1c2534" />
            </linearGradient>

            {/* Fiery Radiant Bulb Halo Radial Gradient */}
            <radialGradient id="innerBulbHaloGrad" cx="48%" cy="50%" r="52%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="20%" stopColor="#fffae0" />
              <stop offset="42%" stopColor="#fde047" />
              <stop offset="65%" stopColor="#f97316" />
              <stop offset="85%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#7c2d12" />
            </radialGradient>

            {/* Reusable 4-Pointed Star Sparkle Shape */}
            <g id="goldenSparkle4pt">
              <path
                d="M 0 -9 Q 0 0 9 0 Q 0 0 0 9 Q 0 0 -9 0 Q 0 0 0 -9 Z"
                fill="#ffd166"
                stroke="#b45309"
                strokeWidth="0.6"
              />
              <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
            </g>

            {/* Reflector Gunmetal Outer Bezel */}
            <linearGradient id="bezelRimGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="20%" stopColor="#334155" />
              <stop offset="45%" stopColor="#1e293b" />
              <stop offset="70%" stopColor="#0f172a" />
              <stop offset="90%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            {/* Golden Patina Rim Edge */}
            <linearGradient id="patinaGoldEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="30%" stopColor="#d97706" />
              <stop offset="60%" stopColor="#92400e" />
              <stop offset="85%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>

            {/* Blue Metal Box Painted Enamel Steel */}
            <linearGradient id="blueBoxFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#223348" />
              <stop offset="15%" stopColor="#1a2738" />
              <stop offset="50%" stopColor="#162130" />
              <stop offset="85%" stopColor="#121b27" />
              <stop offset="100%" stopColor="#0d141e" />
            </linearGradient>

            {/* Top Bevel Metal Surface of Box */}
            <linearGradient id="boxTopFacetGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a2738" />
              <stop offset="20%" stopColor="#293c52" />
              <stop offset="60%" stopColor="#1e2c3c" />
              <stop offset="100%" stopColor="#141d28" />
            </linearGradient>

            {/* Brass Worn Edge Highlights */}
            <linearGradient id="brassEdgeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ca8a04" />
              <stop offset="25%" stopColor="#eab308" />
              <stop offset="50%" stopColor="#fde047" />
              <stop offset="75%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>

            {/* Handle Polished Brass Tubing */}
            <linearGradient id="brassRodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="25%" stopColor="#f59e0b" />
              <stop offset="65%" stopColor="#b45309" />
              <stop offset="85%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>

            {/* Handle Ribbed Phenolic Grip Cylinder */}
            <linearGradient id="gripRibHorizontal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="15%" stopColor="#9a3412" />
              <stop offset="35%" stopColor="#7c2d12" />
              <stop offset="65%" stopColor="#431407" />
              <stop offset="100%" stopColor="#1a0602" />
            </linearGradient>

            {/* Switch Hardware Brass Collar */}
            <radialGradient id="switchBrassCollar" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="30%" stopColor="#eab308" />
              <stop offset="70%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>

            {/* Switch Top Button Cap */}
            <linearGradient id="switchCapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="20%" stopColor="#cbd5e1" />
              <stop offset="60%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            {/* Woven Canvas Carrying Strap */}
            <linearGradient id="canvasStrapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="30%" stopColor="#b45309" />
              <stop offset="70%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>

            {/* Breaking News Ruby Red Ribbon */}
            <linearGradient id="breakingNewsRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b91c1c" />
              <stop offset="15%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="85%" stopColor="#b91c1c" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>

            {/* Brass Nameplate Background */}
            <linearGradient id="nameplateBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="20%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="80%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Rivet Screws */}
            <radialGradient id="brassRivetGrad" cx="40%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#fde047" />
              <stop offset="75%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>
          </defs>

          {/* ======================================================== */}
          {/* 1. STUDIO GROUND SHADOWS                                 */}
          {/* ======================================================== */}
          <g id="ground_shadows">
            {/* Broad Ambient Floor Shadow */}
            <ellipse
              cx="540"
              cy="530"
              rx="420"
              ry="32"
              fill="#000000"
              opacity="0.22"
              filter="url(#groundShadowBlur)"
            />
            {/* Contact Shadow Under Reflector Head */}
            <ellipse
              cx="210"
              cy="522"
              rx="130"
              ry="18"
              fill="#000000"
              opacity="0.45"
              filter="url(#strapShadowBlur)"
            />
            {/* Contact Shadow Under Main Box */}
            <ellipse
              cx="630"
              cy="510"
              rx="280"
              ry="14"
              fill="#000000"
              opacity="0.4"
              filter="url(#strapShadowBlur)"
            />
            {/* Contact Shadow Under Draping Strap */}
            <path
              d="M 330 518 Q 550 558, 880 528 Q 550 550, 330 518 Z"
              fill="#000000"
              opacity="0.32"
              filter="url(#strapShadowBlur)"
            />
          </g>

          {/* ======================================================== */}
          {/* 2. CARRYING STRAP (BACK SECTION BEHIND BODY)             */}
          {/* ======================================================== */}
          <g id="strap_back_layer">
            {/* Right side loop going behind body */}
            <path
              d="M 915 285 
                 C 945 280, 975 320, 960 380 
                 C 950 425, 935 480, 890 515
                 L 865 500
                 C 905 470, 925 420, 935 375
                 C 945 330, 930 295, 915 285 Z"
              fill="#9a3412"
              opacity="0.7"
            />
          </g>

          {/* ======================================================== */}
          {/* 3. MAIN NAVY BLUE METAL BATTERY BOX                      */}
          {/* ======================================================== */}
          <g id="battery_box_housing">
            {/* Box Outer Shadow Casing */}
            <rect
              x="306"
              y="148"
              width="624"
              height="350"
              rx="28"
              fill="#080c13"
            />

            {/* Top Perspective Facet (Viewing the Top Surface of the Box) */}
            <path
              d="M 332 148 
                 L 902 148 
                 A 26 26 0 0 1 928 174 
                 L 920 178 
                 L 316 178 
                 A 26 26 0 0 1 332 148 Z"
              fill="url(#boxTopFacetGrad)"
            />

            {/* Main Front Blue Steel Face */}
            <rect
              x="308"
              y="156"
              width="620"
              height="340"
              rx="26"
              fill="url(#blueBoxFrontGrad)"
              stroke="#0f172a"
              strokeWidth="2"
            />

            {/* Top Edge Bevel Catch-Light */}
            <path
              d="M 334 156 L 902 156"
              stroke="url(#brassEdgeHighlight)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Bottom Edge Bevel Shadow */}
            <path
              d="M 334 494 L 902 494"
              stroke="#090d14"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Right Edge Bevel Highlight */}
            <path
              d="M 928 180 L 928 470"
              stroke="#2e3e52"
              strokeWidth="1.5"
            />

            {/* Worn Brass Corner Patina & Edge Wear */}
            {/* Top-Right Brass Wear */}
            <path
              d="M 890 156 A 26 26 0 0 1 926 190"
              fill="none"
              stroke="url(#patinaGoldEdge)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Bottom-Right Brass Wear */}
            <path
              d="M 926 462 A 26 26 0 0 1 892 494"
              fill="none"
              stroke="url(#patinaGoldEdge)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Bottom-Left Brass Wear */}
            <path
              d="M 340 494 A 26 26 0 0 1 310 464"
              fill="none"
              stroke="url(#patinaGoldEdge)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Top-Left Brass Wear */}
            <path
              d="M 312 188 A 26 26 0 0 1 336 156"
              fill="none"
              stroke="url(#patinaGoldEdge)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Realistic Weathered Paint Scratches & Flecks */}
            <path d="M 335 170 L 339 173" stroke="#fde047" strokeWidth="0.8" opacity="0.8" />
            <path d="M 342 166 L 345 168" stroke="#ca8a04" strokeWidth="0.8" opacity="0.7" />
            <path d="M 908 175 L 912 178" stroke="#fde047" strokeWidth="0.9" opacity="0.8" />
            <path d="M 915 182 L 917 186" stroke="#ca8a04" strokeWidth="0.8" opacity="0.75" />
            <path d="M 912 475 L 916 478" stroke="#fde047" strokeWidth="0.9" opacity="0.8" />
            <path d="M 326 470 L 330 473" stroke="#fde047" strokeWidth="0.8" opacity="0.85" />
          </g>

          {/* ======================================================== */}
          {/* 4. TOP CONTROLS: SWITCH HARDWARE                         */}
          {/* ======================================================== */}
          <g
            id="top_switch"
            className="cursor-pointer"
            onClick={() => setIsLightOn(!isLightOn)}
            title="Toggle Flashlight Beam"
          >
            {/* Switch Mounting Shadow on Top Face */}
            <ellipse cx="732" cy="154" rx="28" ry="10" fill="#090d14" opacity="0.7" />

            {/* Brass Outer Collar Tier 1 */}
            <ellipse cx="732" cy="152" rx="25" ry="8.5" fill="url(#switchBrassCollar)" stroke="#78350f" strokeWidth="1" />
            <ellipse cx="732" cy="150" rx="24" ry="8" fill="none" stroke="#fde047" strokeWidth="0.8" opacity="0.8" />

            {/* Stepped Collar Tier 2 */}
            <ellipse cx="732" cy="144" rx="19" ry="6.5" fill="url(#switchBrassCollar)" stroke="#78350f" strokeWidth="0.8" />

            {/* Knurled Brass Collar Tier 3 */}
            <ellipse cx="732" cy="138" rx="15" ry="5.5" fill="url(#switchBrassCollar)" />

            {/* Switch Toggle Button Cap */}
            <ellipse cx="732" cy="132" rx="11" ry="4.5" fill="#1e293b" />
            <path
              d="M 721 132 L 721 124 A 11 4.5 0 0 1 743 124 L 743 132 A 11 4.5 0 0 1 721 132 Z"
              fill="url(#switchCapGrad)"
            />
            <ellipse cx="732" cy="124" rx="11" ry="4.2" fill="#475569" stroke="#94a3b8" strokeWidth="0.8" />
            <ellipse cx="730" cy="123" rx="4" ry="1.8" fill="#ffffff" opacity="0.75" />
          </g>

          {/* ======================================================== */}
          {/* 5. TOP HANDLE ASSEMBLY (HEAVY-DUTY VINTAGE BRASS & GRIP) */}
          {/* ======================================================== */}
          <g id="top_handle_assembly">
            {/* --- LEFT BRACKET FOOT (364, 150) --- */}
            <g id="handle_left_bracket">
              {/* Bracket Shadow */}
              <ellipse cx="364" cy="154" rx="22" ry="7" fill="#080c14" opacity="0.8" />
              {/* Flanged Brass Foot */}
              <path
                d="M 344 153 C 344 148, 384 148, 384 153 C 384 156, 344 156, 344 153 Z"
                fill="url(#switchBrassCollar)"
                stroke="#78350f"
                strokeWidth="1"
              />
              {/* Vertical Bracket Stanchion */}
              <path
                d="M 352 150 L 354 135 L 374 135 L 376 150 Z"
                fill="url(#brassRodGrad)"
                stroke="#78350f"
                strokeWidth="0.8"
              />
              {/* Rivet Screws on Left Bracket */}
              <circle cx="349" cy="152" r="3.2" fill="url(#brassRivetGrad)" stroke="#78350f" strokeWidth="0.6" />
              <circle cx="379" cy="152" r="3.2" fill="url(#brassRivetGrad)" stroke="#78350f" strokeWidth="0.6" />
            </g>

            {/* --- RIGHT BRACKET FOOT (810, 150) --- */}
            <g id="handle_right_bracket">
              {/* Bracket Shadow */}
              <ellipse cx="810" cy="154" rx="22" ry="7" fill="#080c14" opacity="0.8" />
              {/* Flanged Brass Foot */}
              <path
                d="M 790 153 C 790 148, 830 148, 830 153 C 830 156, 790 156, 790 153 Z"
                fill="url(#switchBrassCollar)"
                stroke="#78350f"
                strokeWidth="1"
              />
              {/* Vertical Bracket Stanchion */}
              <path
                d="M 798 150 L 800 135 L 820 135 L 822 150 Z"
                fill="url(#brassRodGrad)"
                stroke="#78350f"
                strokeWidth="0.8"
              />
              {/* Rivet Screws on Right Bracket */}
              <circle cx="795" cy="152" r="3.2" fill="url(#brassRivetGrad)" stroke="#78350f" strokeWidth="0.6" />
              <circle cx="825" cy="152" r="3.2" fill="url(#brassRivetGrad)" stroke="#78350f" strokeWidth="0.6" />
            </g>

            {/* --- ARCHED BRASS TUBING ROD --- */}
            {/* Left Arching Arm */}
            <path
              d="M 364 140 
                 L 364 90 
                 A 45 45 0 0 1 409 45 
                 L 435 45"
              fill="none"
              stroke="url(#brassRodGrad)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Left Arm Inner Specular Catch-Line */}
            <path
              d="M 364 135 
                 L 364 90 
                 A 45 45 0 0 1 409 45 
                 L 435 45"
              fill="none"
              stroke="#fef08a"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Right Arching Arm */}
            <path
              d="M 810 140 
                 L 810 90 
                 A 45 45 0 0 0 765 45 
                 L 735 45"
              fill="none"
              stroke="url(#brassRodGrad)"
              strokeWidth="14"
              strokeLinecap="round"
            />
            {/* Right Arm Inner Specular Catch-Line */}
            <path
              d="M 810 135 
                 L 810 90 
                 A 45 45 0 0 0 765 45 
                 L 735 45"
              fill="none"
              stroke="#fef08a"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* --- RIBBED BAKELITE/MOLDED GRIP SLEEVE (X: 432 TO 738, Y: 15 TO 75) --- */}
            <g id="handle_grip">
              {/* Flanged Brass Ferrule Cap (Left) */}
              <ellipse cx="435" cy="45" rx="6" ry="18" fill="url(#switchBrassCollar)" stroke="#78350f" strokeWidth="1" />
              {/* Flanged Brass Ferrule Cap (Right) */}
              <ellipse cx="735" cy="45" rx="6" ry="18" fill="url(#switchBrassCollar)" stroke="#78350f" strokeWidth="1" />

              {/* Main Grip Core Cylinder */}
              <rect x="435" y="27" width="300" height="36" fill="url(#gripRibHorizontal)" />

              {/* 14 Circumferential Rounded Ribs */}
              {[444, 465, 486, 507, 528, 549, 570, 591, 612, 633, 654, 675, 696, 717].map((ribX) => (
                <g key={`handle-rib-${ribX}`}>
                  {/* Rib Deep Shadow Groove (Left) */}
                  <line x1={ribX - 6} y1="23" x2={ribX - 6} y2="67" stroke="#1c0702" strokeWidth="2.5" />
                  {/* Rib Convex Body */}
                  <rect
                    x={ribX - 5}
                    y="22"
                    width="14"
                    height="46"
                    rx="6"
                    fill="url(#gripRibHorizontal)"
                    stroke="#3b0f06"
                    strokeWidth="0.8"
                  />
                  {/* Rib Specular Top Highlight */}
                  <path
                    d={`M ${ribX - 3} 25 Q ${ribX + 2} 24, ${ribX + 7} 25`}
                    stroke="#ea580c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  <line x1={ribX - 2} y1="28" x2={ribX + 6} y2="28" stroke="#fdba74" strokeWidth="1.2" opacity="0.85" />
                </g>
              ))}
            </g>
          </g>

          {/* ======================================================== */}
          {/* 6. CENTER RECESSED SCREEN: NEWS BROADCAST MONITOR        */}
          {/* ======================================================== */}
          <g id="screen_display_assembly">
            {/* Outer Recessed Bezel Trench (Deep Shadow in Metal Body) */}
            <rect
              x="332"
              y="164"
              width="580"
              height="266"
              rx="20"
              fill="#06090e"
            />

            {/* Glowing Golden-Amber Neon Frame Border */}
            <rect
              x="335"
              y="167"
              width="574"
              height="260"
              rx="18"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.8"
              filter="url(#neonBorderGlow)"
            />
            {/* Secondary Inner Warm Highlight Border */}
            <rect
              x="337"
              y="169"
              width="570"
              height="256"
              rx="16"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.2"
              opacity="0.9"
            />

            {/* High-Gloss Deep Navy Display Screen Glass Bed */}
            <rect
              x="338"
              y="170"
              width="568"
              height="254"
              rx="15"
              fill="#080e1a"
            />

            {/* Subtle Screen Ambient Vignette & Scanline Texture */}
            <radialGradient id="screenVignette" cx="50%" cy="50%" r="60%">
              <stop offset="60%" stopColor="#0d1b2a" stopOpacity="0" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0.8" />
            </radialGradient>
            <rect x="338" y="170" width="568" height="254" rx="15" fill="url(#screenVignette)" />

            {/* ------------------------------------------------------ */}
            {/* 6.1 TOP HEADER: CRCCF NEWS LOGO & BREAKING NEWS BANNER */}
            {/* ------------------------------------------------------ */}
            <g id="screen_top_header">
              {/* --- CRCCF NEWS LOGO (LEFT) --- */}
              <g id="crccf_logo" transform="translate(360, 182)">
                {/* Blue Globe Circle */}
                <circle cx="18" cy="18" r="17" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="1.2" />
                {/* Globe Latitude Wireframe Ellipses */}
                <ellipse cx="18" cy="18" rx="16" ry="6" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
                <ellipse cx="18" cy="18" rx="16" ry="12" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
                {/* Globe Longitude Wireframe Ellipses */}
                <ellipse cx="18" cy="18" rx="8" ry="16" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
                <line x1="18" y1="2" x2="18" y2="34" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
                <line x1="2" y1="18" x2="34" y2="18" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />

                {/* CRCCF Bold Text */}
                <text
                  x="42"
                  y="15"
                  fill="#ffffff"
                  fontSize="13.5"
                  fontWeight="900"
                  fontFamily="'Arial Black', Impact, sans-serif"
                  letterSpacing="0.8"
                >
                  CRCCF
                </text>

                {/* NEWS Red Capsule Pill */}
                <rect x="42" y="19" width="48" height="18" rx="5" fill="#dc2626" />
                <text
                  x="66"
                  y="32.5"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="900"
                  fontFamily="'Arial Black', Impact, sans-serif"
                  letterSpacing="1"
                >
                  NEWS
                </text>
              </g>

              {/* Radiant Lens Flare Starburst Between Logo and Ribbon */}
              <g transform="translate(488, 200)" opacity="0.75">
                <ellipse cx="0" cy="0" rx="36" ry="3" fill="#ffffff" filter="url(#softRayBlur)" />
                <ellipse cx="0" cy="0" rx="3" ry="36" fill="#ffffff" filter="url(#softRayBlur)" />
                <circle cx="0" cy="0" r="6" fill="#fffbeb" filter="url(#coreGlowBlur)" />
              </g>

              {/* --- BREAKING NEWS SLANTED RIBBON BANNER (RIGHT) --- */}
              <g id="breaking_news_ribbon" transform="translate(506, 178)">
                {/* Slanted Parallelogram Banner Body */}
                <polygon
                  points="24,0 380,0 364,44 0,44"
                  fill="url(#breakingNewsRibbon)"
                  filter="drop-shadow(0 3px 6px rgba(0,0,0,0.5))"
                />

                {/* Top Yellow/Gold Flare Streak */}
                <polygon
                  points="24,0 380,0 376,4 20,4"
                  fill="#fef08a"
                  opacity="0.9"
                />

                {/* Bold Italic BREAKING NEWS Typography */}
                <text
                  x="40"
                  y="31"
                  fill="#ffffff"
                  fontSize="24"
                  fontWeight="900"
                  fontStyle="italic"
                  fontFamily="'Arial Black', Impact, sans-serif"
                  letterSpacing="1.2"
                  style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.6))' }}
                >
                  BREAKING NEWS
                </text>

                {/* Diagonal Slanted Warning Stripes (Right End) */}
                <g transform="translate(320, 4)">
                  <polygon points="12,0 18,0 10,36 4,36" fill="#7f1d1d" opacity="0.9" />
                  <polygon points="22,0 28,0 20,36 14,36" fill="#ffffff" opacity="0.8" />
                  <polygon points="32,0 38,0 30,36 24,36" fill="#7f1d1d" opacity="0.9" />
                  <polygon points="42,0 48,0 40,36 34,36" fill="#ffffff" opacity="0.8" />
                </g>
              </g>
            </g>

            {/* ------------------------------------------------------ */}
            {/* 6.2 MAIN HEADLINE PILL CONTAINER (WHITE ROUNDED CARD)  */}
            {/* ------------------------------------------------------ */}
            <g id="headline_card" transform="translate(352, 238)">
              {/* Soft Drop Shadow Under White Card */}
              <rect
                x="0"
                y="3"
                width="540"
                height="62"
                rx="14"
                fill="#000000"
                opacity="0.45"
                filter="url(#strapShadowBlur)"
              />

              {/* White Enamel Rounded Card Surface */}
              <rect
                x="0"
                y="0"
                width="540"
                height="62"
                rx="14"
                fill="#ffffff"
                stroke="#e2e8f0"
                strokeWidth="1.2"
              />

              {/* Hindi Devanagari Headline Text */}
              <text
                x="270"
                y="41"
                textAnchor="middle"
                className="hindi-headline"
                style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' }}
              >
                {/* 'पुराने जमाने की' in dark navy */}
                <tspan
                  fill="#0f172a"
                  fontSize="24"
                  fontWeight="800"
                  letterSpacing="0.4"
                >
                  पुराने जमाने की{' '}
                </tspan>

                {/* '‘बैटरी बॉक्स टॉर्च’' in vibrant bold red */}
                <tspan
                  fill="#dc2626"
                  fontSize="25"
                  fontWeight="900"
                  letterSpacing="0.5"
                >
                  ‘बैटरी बॉक्स टॉर्च’{' '}
                </tspan>

                {/* 'फिर चर्चा में' in dark navy */}
                <tspan
                  fill="#0f172a"
                  fontSize="24"
                  fontWeight="800"
                  letterSpacing="0.4"
                >
                  फिर चर्चा में
                </tspan>
              </text>
            </g>

            {/* ------------------------------------------------------ */}
            {/* 6.3 SUBHEADLINE & DESCRIPTION WITH MOVIE CAMERA ICON    */}
            {/* ------------------------------------------------------ */}
            <g id="screen_subheadline" transform="translate(360, 318)">
              {/* Red Bullet Play Pointer Triangle */}
              <polygon
                points="18,18 30,26 18,34"
                fill="#dc2626"
                filter="drop-shadow(0 1px 2px rgba(0,0,0,0.5))"
              />

              {/* Two Lines of Crisp White Hindi Subheadline Text */}
              <text
                x="42"
                y="24"
                fill="#ffffff"
                className="hindi-headline"
                fontSize="15.5"
                fontWeight="600"
                letterSpacing="0.3"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
              >
                1960 से 1980 के दशक में इस्तेमाल होने वाली
              </text>
              <text
                x="42"
                y="47"
                fill="#ffffff"
                className="hindi-headline"
                fontSize="15.5"
                fontWeight="600"
                letterSpacing="0.3"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
              >
                यह टॉर्च उस समय रोशनी का प्रमुख साधन थी !
              </text>

              {/* Retro Film Projector / Movie Camera Icon (Right Side) */}
              <g id="camera_icon" transform="translate(425, 4)">
                {/* Glowing Cyan/Sky-Blue Neon Camera Wireframe */}
                {/* Left Film Reel */}
                <circle cx="18" cy="18" r="14" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2.4" />
                <circle cx="18" cy="18" r="4" fill="#38bdf8" />
                {/* Right Film Reel */}
                <circle cx="44" cy="18" r="14" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2.4" />
                <circle cx="44" cy="18" r="4" fill="#38bdf8" />

                {/* Rectangular Camera Housing Body */}
                <rect x="10" y="32" width="44" height="30" rx="4" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2.4" />

                {/* Projector Lens Cone (Pointing Left) */}
                <polygon
                  points="10,38 -6,44 -6,50 10,56"
                  fill="#0284c7"
                  fillOpacity="0.5"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                />

                {/* Projector Stand Base */}
                <line x1="24" y1="62" x2="16" y2="76" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="40" y1="62" x2="48" y2="76" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="32" y1="62" x2="32" y2="78" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
              </g>
            </g>
          </g>

          {/* ======================================================== */}
          {/* 7. BOTTOM BRASS NAMEPLATE (BATTERY BOX TORCH)            */}
          {/* ======================================================== */}
          <g id="brass_nameplate" transform="translate(488, 428)">
            {/* Deep Drop Shadow Under Brass Plaque */}
            <rect
              x="0"
              y="4"
              width="306"
              height="60"
              rx="12"
              fill="#06090e"
              opacity="0.65"
              filter="url(#strapShadowBlur)"
            />

            {/* Outer Beveled Frame of Plaque */}
            <rect
              x="0"
              y="0"
              width="306"
              height="60"
              rx="12"
              fill="url(#nameplateBrassGrad)"
              stroke="#78350f"
              strokeWidth="1.8"
            />
            {/* Inner Recessed Plate Border */}
            <rect
              x="5"
              y="5"
              width="296"
              height="50"
              rx="9"
              fill="none"
              stroke="#ca8a04"
              strokeWidth="0.8"
            />

            {/* 4 Corner Brass Rivet Screws */}
            {/* Top-Left Rivet */}
            <circle cx="16" cy="16" r="4.5" fill="url(#brassRivetGrad)" stroke="#78350f" strokeWidth="0.8" />
            <circle cx="15" cy="15" r="1.5" fill="#ffffff" opacity="0.8" />
            {/* Top-Right Rivet */}
            <circle cx="290" cy="16" r="4.5" fill="url(#brassRivetGrad)" stroke="#78350f" strokeWidth="0.8" />
            <circle cx="289" cy="15" r="1.5" fill="#ffffff" opacity="0.8" />
            {/* Bottom-Left Rivet */}
            <circle cx="16" cy="44" r="4.5" fill="url(#brassRivetGrad)" stroke="#78350f" strokeWidth="0.8" />
            <circle cx="15" cy="43" r="1.5" fill="#ffffff" opacity="0.8" />
            {/* Bottom-Right Rivet */}
            <circle cx="290" cy="44" r="4.5" fill="url(#brassRivetGrad)" stroke="#78350f" strokeWidth="0.8" />
            <circle cx="289" cy="43" r="1.5" fill="#ffffff" opacity="0.8" />

            {/* Engraved Typography */}
            {/* Line 1: BATTERY BOX TORCH */}
            <text
              x="153"
              y="28"
              textAnchor="middle"
              fill="#1c1917"
              fontSize="16.5"
              fontWeight="900"
              fontFamily="'Arial Black', Impact, sans-serif"
              letterSpacing="1.2"
            >
              BATTERY BOX TORCH
            </text>

            {/* Line 2: (Vintage • 1960s–1980s) */}
            <text
              x="153"
              y="47"
              textAnchor="middle"
              fill="#292524"
              fontSize="13"
              fontWeight="700"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="0.6"
            >
              (Vintage • 1960s–1980s)
            </text>
          </g>

          {/* ======================================================== */}
          {/* 8. LARGE FLASHLIGHT HEAD & REFLECTOR ASSEMBLY (LEFT)     */}
          {/* Exact pixel-perfect reproduction of User Reference Image */}
          {/* ======================================================== */}
          <g id="flashlight_reflector_assembly">
            {/* --- RADIANT LIGHT BEAM & VOLUMETRIC GLOW (WHEN ON) --- */}
            {isLightOn && (
              <g id="torch_beams" style={{ transition: 'opacity 0.3s ease' }}>
                {/* Ambient Wide Golden Atmospheric Cone */}
                <polygon
                  points="205,320 -40,30 -40,590"
                  fill="url(#torchVolumetricLight)"
                  filter="url(#torchBeamBlur)"
                  opacity="0.6"
                />

                {/* Dynamic Geometric Radiant Light Blades / Rays (Extending Left) */}
                <polygon points="205,320 0,90 0,170" fill="#fffde7" opacity="0.45" filter="url(#softRayBlur)" />
                <polygon points="205,320 0,190 0,270" fill="#fef08a" opacity="0.6" filter="url(#softRayBlur)" />
                <polygon points="205,320 0,285 0,345" fill="#ffffff" opacity="0.75" filter="url(#softRayBlur)" />
                <polygon points="205,320 0,360 0,440" fill="#fde047" opacity="0.55" filter="url(#softRayBlur)" />
                <polygon points="205,320 0,455 0,530" fill="#facc15" opacity="0.4" filter="url(#softRayBlur)" />

                {/* Core Lens Flare Bloom */}
                <ellipse cx="205" cy="320" rx="65" ry="95" fill="#ffffff" opacity="0.45" filter="url(#coreGlowBlur)" />
              </g>
            )}

            {/* --- REAR CYLINDRICAL BARREL & HOUSING COLLAR --- */}
            {/* Neck collar connecting head to main blue box */}
            <path
              d="M 205 126 
                 L 310 175 
                 L 310 465 
                 L 205 514 Z"
              fill="#141d28"
              stroke="#0a0f16"
              strokeWidth="2"
            />
            <path d="M 205 126 L 310 175" stroke="url(#brassEdgeHighlight)" strokeWidth="2.5" />
            <path d="M 205 514 L 310 465" stroke="#06090e" strokeWidth="3" />

            {/* Cylindrical metal barrel behind front bezel */}
            <path
              d="M 205 126 
                 L 285 152 
                 L 285 488 
                 L 205 514 Z"
              fill="url(#barrelCylinderGrad)"
              stroke="#0f172a"
              strokeWidth="1.5"
            />

            {/* Barrel Circumferential Seam Groove with Dashed Gold Line */}
            <path
              d="M 276 150 C 290 235, 290 405, 276 490"
              fill="none"
              stroke="#080c14"
              strokeWidth="3"
            />
            <path
              d="M 277 152 C 291 235, 291 405, 277 488"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.2"
              strokeDasharray="5 3 2 4 8 3"
              opacity="0.9"
            />

            {/* 4-Pointed Golden Star Sparkles (✦) Along Barrel */}
            <g transform="translate(278, 195) scale(0.65)"><use href="#goldenSparkle4pt" /></g>
            <g transform="translate(284, 235) scale(0.85)"><use href="#goldenSparkle4pt" /></g>
            <g transform="translate(288, 280) scale(1.25)"><use href="#goldenSparkle4pt" /></g>
            <g transform="translate(289, 320) scale(1.0)"><use href="#goldenSparkle4pt" /></g>
            <g transform="translate(287, 360) scale(0.8)"><use href="#goldenSparkle4pt" /></g>
            <g transform="translate(283, 405) scale(1.05)"><use href="#goldenSparkle4pt" /></g>
            <g transform="translate(277, 450) scale(0.65)"><use href="#goldenSparkle4pt" /></g>

            {/* --- PARABOLIC REFLECTOR BOWL (INSIDE THE BEZEL) --- */}
            {/* Base warm golden glow bowl */}
            <ellipse
              cx="205"
              cy="320"
              rx="98"
              ry="164"
              fill="url(#reflectorBaseWarmGlow)"
            />

            {/* Radiating Soft Shadow Rays & Light Blades (Inside Reflector Bowl) */}
            {/* Exact matching of user reference: soft feathered shadow rays, NO hard lines */}
            <g id="reflector_soft_shadow_rays" clipPath="url(#reflectorBowlClip)">
              <path d="M 235.0 319.6 L 303.0 318.6 A 98 164 0 0 1 295.2 384.1 L 232.6 339.5 A 30 50 0 0 0 235.0 319.6 Z" fill="#ea580c" opacity="0.6" filter="url(#softRayBlur)" />
              <path d="M 232.8 338.7 L 295.9 381.4 A 98 164 0 0 1 273.7 437.0 L 226.0 355.7 A 30 50 0 0 0 232.8 338.7 Z" fill="#b45309" opacity="0.75" filter="url(#softRayBlur)" />
              <path d="M 226.4 355.0 L 274.9 434.9 A 98 164 0 0 1 241.7 472.1 L 216.2 366.4 A 30 50 0 0 0 226.4 355.0 Z" fill="#f59e0b" opacity="0.55" filter="url(#softRayBlur)" />
              <path d="M 216.7 366.0 L 243.3 471.0 A 98 164 0 0 1 204.1 484.0 L 204.7 370.0 A 30 50 0 0 0 216.7 366.0 Z" fill="#eab308" opacity="0.65" filter="url(#softRayBlur)" />
              <path d="M 205.3 370.0 L 205.9 484.0 A 98 164 0 0 1 166.7 471.0 L 193.3 366.0 A 30 50 0 0 0 205.3 370.0 Z" fill="#ffffff" opacity="0.85" filter="url(#softRayBlur)" />
              <path d="M 193.8 366.4 L 168.3 472.1 A 98 164 0 0 1 135.1 434.9 L 183.6 355.0 A 30 50 0 0 0 193.8 366.4 Z" fill="#eab308" opacity="0.65" filter="url(#softRayBlur)" />
              <path d="M 184.0 355.7 L 136.3 437.0 A 98 164 0 0 1 114.1 381.4 L 177.2 338.7 A 30 50 0 0 0 184.0 355.7 Z" fill="#ffffff" opacity="0.85" filter="url(#softRayBlur)" />
              <path d="M 177.4 339.5 L 114.8 384.1 A 98 164 0 0 1 107.0 318.6 L 175.0 319.6 A 30 50 0 0 0 177.4 339.5 Z" fill="#eab308" opacity="0.65" filter="url(#softRayBlur)" />
              <path d="M 175.0 320.4 L 107.0 321.4 A 98 164 0 0 1 114.8 255.9 L 177.4 300.5 A 30 50 0 0 0 175.0 320.4 Z" fill="#ffffff" opacity="0.85" filter="url(#softRayBlur)" />
              <path d="M 177.2 301.3 L 114.1 258.6 A 98 164 0 0 1 136.3 203.0 L 184.0 284.3 A 30 50 0 0 0 177.2 301.3 Z" fill="#eab308" opacity="0.65" filter="url(#softRayBlur)" />
              <path d="M 183.6 285.0 L 135.1 205.1 A 98 164 0 0 1 168.3 167.9 L 193.8 273.6 A 30 50 0 0 0 183.6 285.0 Z" fill="#ffffff" opacity="0.85" filter="url(#softRayBlur)" />
              <path d="M 193.3 274.0 L 166.7 169.0 A 98 164 0 0 1 205.9 156.0 L 205.3 270.0 A 30 50 0 0 0 193.3 274.0 Z" fill="#eab308" opacity="0.65" filter="url(#softRayBlur)" />
              <path d="M 204.7 270.0 L 204.1 156.0 A 98 164 0 0 1 243.3 169.0 L 216.7 274.0 A 30 50 0 0 0 204.7 270.0 Z" fill="#ffffff" opacity="0.85" filter="url(#softRayBlur)" />
              <path d="M 216.2 273.6 L 241.7 167.9 A 98 164 0 0 1 274.9 205.1 L 226.4 285.0 A 30 50 0 0 0 216.2 273.6 Z" fill="#d97706" opacity="0.7" filter="url(#softRayBlur)" />
              <path d="M 226.0 284.3 L 273.7 203.0 A 98 164 0 0 1 295.9 258.6 L 232.8 301.3 A 30 50 0 0 0 226.0 284.3 Z" fill="#ea580c" opacity="0.6" filter="url(#softRayBlur)" />
              <path d="M 232.6 300.5 L 295.2 255.9 A 98 164 0 0 1 303.0 321.4 L 235.0 320.4 A 30 50 0 0 0 232.6 300.5 Z" fill="#b45309" opacity="0.75" filter="url(#softRayBlur)" />
            </g>

            {/* Middle Concentric Tier Step (Soft Diffuse Shadow, NO hard stroke line) */}
            <ellipse
              cx="205"
              cy="321"
              rx="68.5"
              ry="114.5"
              fill="none"
              stroke="#78350f"
              strokeWidth="3"
              opacity="0.24"
              filter="url(#softRayBlur)"
            />
            <ellipse
              cx="205"
              cy="319.5"
              rx="67"
              ry="112.5"
              fill="none"
              stroke="#fffde7"
              strokeWidth="1.5"
              opacity="0.24"
              filter="url(#softRayBlur)"
            />

            {/* 3D Tiered Depth Shadow Overlay (Continuous Smooth Shadow) */}
            <ellipse
              cx="205"
              cy="320"
              rx="98"
              ry="164"
              fill="url(#reflectorBowlDepthShadow)"
              pointerEvents="none"
            />

            {/* --- CENTRAL FIERY BULB DISC & HOT WHITE CORE FILAMENT --- */}
            {/* Outer Fiery Radial Disc with Soft Shadow Transition */}
            <ellipse
              cx="205"
              cy="320"
              rx="36"
              ry="58"
              fill="url(#fieryBulbDiscGrad)"
              opacity="0.95"
            />

            {/* Blinding White Hot Core Filament Oval */}
            <ellipse
              cx="203"
              cy="320"
              rx="15"
              ry="24"
              fill="#ffffff"
              filter="url(#softRayBlur)"
            />
            <circle cx="202" cy="320" r="8" fill="#ffffff" />

            {/* --- THICK DARK SLATE-NAVY FRONT BEZEL RIM (DONUT MASK) --- */}
            {/* Substantial Metallic Bezel Face with Specular Vertical Sheen */}
            <path
              d="M 205 126 
                 A 126 194 0 1 1 205 514 
                 A 126 194 0 1 1 205 126 Z 
                 M 205 158 
                 A 98 162 0 1 0 205 482 
                 A 98 162 0 1 0 205 158 Z"
              fill="url(#bezelFaceSpecular)"
              stroke="#0a0f18"
              strokeWidth="2"
            />

            {/* Outer Golden Brass Chamfer Edge */}
            <ellipse
              cx="205"
              cy="320"
              rx="126"
              ry="194"
              fill="none"
              stroke="url(#patinaGoldEdge)"
              strokeWidth="2.5"
            />

            {/* Striking Inner Golden Bezel Lip / Chamfer Ring */}
            <ellipse
              cx="205"
              cy="320"
              rx="98"
              ry="162"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3.8"
            />
            <ellipse
              cx="205"
              cy="320"
              rx="96.5"
              ry="160"
              fill="none"
              stroke="#fde047"
              strokeWidth="1.2"
              opacity="0.9"
            />

            {/* Realistic Chipped Paint / Flaked Brass Exposure on Rim Face */}
            {/* Top rim edge chips */}
            <path d="M 208 126 Q 216 124, 212 130 Z" fill="#facc15" stroke="#b45309" strokeWidth="0.5" />
            <path d="M 228 132 Q 235 130, 230 136 Z" fill="#fde047" />
            <path d="M 185 128 Q 192 127, 188 133 Z" fill="#facc15" />

            {/* Right face chips */}
            <path d="M 326 312 Q 332 318, 325 328 Q 322 320, 326 312 Z" fill="#facc15" stroke="#b45309" strokeWidth="0.5" />
            <path d="M 324 290 Q 328 294, 323 298 Z" fill="#fde047" />
            <path d="M 320 350 Q 324 354, 319 358 Z" fill="#f59e0b" />

            {/* Bottom rim edge chip */}
            <path d="M 210 514 Q 218 516, 214 519 Z" fill="#fde047" />

            {/* Fine Surface Weathering Scratches */}
            <path d="M 302 240 L 305 248" stroke="#fef08a" strokeWidth="0.8" opacity="0.75" />
            <path d="M 308 300 L 311 306" stroke="#fef08a" strokeWidth="0.8" opacity="0.8" />
            <path d="M 305 340 L 307 348" stroke="#ca8a04" strokeWidth="0.7" opacity="0.7" />
            <path d="M 300 390 L 303 396" stroke="#fef08a" strokeWidth="0.7" opacity="0.75" />
          </g>

          {/* ======================================================== */}
          {/* 9. WOVEN CANVAS CARRYING STRAP (FRONT DRAPING LAYER)     */}
          {/* ======================================================== */}
          <g id="carrying_strap_front">
            {/* --- LEFT D-RING MOUNT AT (324, 350) --- */}
            <g id="left_strap_lug">
              <ellipse cx="324" cy="350" rx="5" ry="12" fill="url(#switchBrassCollar)" stroke="#78350f" strokeWidth="1" />
              <path
                d="M 324 340 C 334 340, 334 360, 324 360"
                fill="none"
                stroke="url(#brassRodGrad)"
                strokeWidth="4"
              />
            </g>

            {/* --- RIGHT D-RING MOUNT AT (928, 290) --- */}
            <g id="right_strap_lug">
              <ellipse cx="928" cy="290" rx="5" ry="12" fill="url(#switchBrassCollar)" stroke="#78350f" strokeWidth="1" />
              <path
                d="M 928 280 C 938 280, 938 300, 928 300"
                fill="none"
                stroke="url(#brassRodGrad)"
                strokeWidth="4"
              />
            </g>

            {/* --- DRAPING CANVAS STRAP WEBBING RIBBON --- */}
            {/* Main Woven Strap Body */}
            <path
              d="M 324 350 
                 C 340 420, 275 490, 310 528 
                 C 335 555, 420 562, 550 560 
                 C 680 558, 800 540, 890 522 
                 C 940 512, 985 450, 960 380 
                 C 948 345, 935 305, 928 290
                 L 916 295
                 C 925 315, 936 345, 946 380
                 C 968 440, 930 495, 882 506
                 C 796 525, 678 542, 550 544
                 C 424 546, 350 540, 328 518
                 C 298 488, 352 425, 338 355 Z"
              fill="url(#canvasStrapGrad)"
              stroke="#78350f"
              strokeWidth="1.2"
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"
            />

            {/* Double-Stitched Edge Lines Along Canvas Strap */}
            <path
              d="M 327 355 
                 C 344 422, 285 488, 316 524 
                 C 340 550, 422 557, 550 555 
                 C 678 553, 796 535, 886 517 
                 C 934 507, 976 448, 954 382 
                 C 943 348, 931 310, 924 293"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="0.8"
              strokeDasharray="4 2"
              opacity="0.8"
            />
            <path
              d="M 335 360 
                 C 350 426, 300 484, 326 516 
                 C 348 542, 426 548, 550 546 
                 C 676 544, 792 527, 880 509 
                 C 926 499, 964 442, 944 382 
                 C 934 350, 924 315, 918 298"
              fill="none"
              stroke="#451a03"
              strokeWidth="0.8"
              strokeDasharray="4 2"
              opacity="0.75"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

// 2. MAIN SECTION 03 COMPONENT
export const Section03 = () => {
  return (
    <section
      id="section-03"
      className="w-full relative py-12 lg:py-16 select-none overflow-hidden bg-[#f7f8fa] border-b border-slate-200"
    >
      {/* Background Soft Studio Ambiance */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Section Header */}
      <header className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-wider uppercase mb-2.5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-amber-700">RETRO BROADCAST VAULT</span>
          <span className="text-slate-300">|</span>
          <span>1960s–1980s BATTERY BOX TORCH</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
          Vintage Battery Box Torch & Broadcast Display
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          An authentic recreation of the iconic mid-century heavy-duty battery box torch with an integrated news broadcast screen, brass mechanical switch, and radiant volumetric reflector beam.
        </p>

        {/* Tactical Status Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px] font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
            <FaLightbulb className="text-amber-500 text-xs" />
            <span>Interactive Switch Toggle</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
            <FaBolt className="text-yellow-600 text-xs" />
            <span>Volumetric Radiant Beam</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
            <FaTv className="text-red-600 text-xs" />
            <span>CRCCF Breaking News Display</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
            <FaClockRotateLeft className="text-blue-600 text-xs" />
            <span>Vintage Era 1960–1980</span>
          </span>
        </div>
      </header>

      {/* Main Vintage Torch Showcase */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-center">
        <Tourch />
      </div>
    </section>
  );
};

export default Section03;
