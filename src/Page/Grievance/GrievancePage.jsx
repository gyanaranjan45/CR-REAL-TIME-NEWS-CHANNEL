import React, { useState, useEffect } from 'react';
import { allGrievanceCards } from './GrievancePageData';

// Official CR Real Time News Channel emblem logo from public/logo.png
const logoUrl = '/logo.png';

/**
 * ============================================================================
 * MASTER COMPONENT: Grievance.jsx
 * ============================================================================
 * Self-contained single-file React component housing all broadcasting studio
 * assets, animations, responsive layouts, embedded grievance cards, interactive
 * modals, and complete styles.
 */

/* ============================================================================
 * SECTION 0: COMPLETE STYLES & ANIMATIONS (FROM index.css)
 * ============================================================================
 * All studio keyframe animations, staggered entrance timings, horizontal
 * carousel slides, typography rendering, and shadow classes from index.css.
 */
export const grievanceStylesCss = `
/* ========================================================================== */
/* 1. STAGGERED PAGE ENTRANCE ANIMATIONS ("ek ek karke sab appear hoga")      */
/* ========================================================================== */

@keyframes animFadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes animFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes animPopScale {
  0% {
    opacity: 0;
    transform: scale(0.88) translateY(12px);
  }
  70% {
    transform: scale(1.03) translateY(-2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes animMaleAnchorEntrance {
  0% {
    opacity: 0;
    transform: translateX(-35px) translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}

@keyframes animFemaleAnchorEntrance {
  0% {
    opacity: 0;
    transform: translateX(35px) translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}

@keyframes animDeskEntrance {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

/* Page header elements stagger */
.entrance-badge {
  animation: animFadeInDown 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

.entrance-heading {
  animation: animFadeInUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;
}

.entrance-desc {
  animation: animFadeInUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
}

/* Studio stage elements stagger */
.entrance-chairs {
  animation: animDeskEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
}

.entrance-male-anchor {
  animation: animMaleAnchorEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
}

.entrance-female-anchor {
  animation: animFemaleAnchorEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.62s both;
}

.entrance-desk {
  animation: animDeskEntrance 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
}

.entrance-prop-mic-left {
  animation: animPopScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.75s both;
}

.entrance-prop-newspaper {
  animation: animPopScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.82s both;
}

.entrance-prop-laptop {
  animation: animPopScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.88s both;
}

.entrance-prop-mic-right {
  animation: animPopScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.94s both;
}

.entrance-card-0 {
  animation: cardsSlideInRight 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.85s both !important;
}
.entrance-card-1 {
  animation: cardsSlideInRight 0.55s cubic-bezier(0.16, 1, 0.3, 1) 1.05s both !important;
}
.entrance-card-2 {
  animation: cardsSlideInRight 0.55s cubic-bezier(0.16, 1, 0.3, 1) 1.25s both !important;
}

.entrance-cards-initial {
  animation: cardsSlideInRight 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
}

.entrance-pagination {
  animation: animFadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both;
}

/* ========================================================================== */
/* 2. CARD CAROUSEL SLIDE TRANSITION (ONE BY ONE: 3 EXIT, THEN 3 ENTER)       */
/* ========================================================================== */

@keyframes cardsSlideOutLeft {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-160px);
    opacity: 0;
  }
}

@keyframes cardsSlideInRight {
  0% {
    transform: translateX(160px);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes cardsSlideOutRight {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(160px);
    opacity: 0;
  }
}

@keyframes cardsSlideInLeft {
  0% {
    transform: translateX(-160px);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

/* Staggered Exit Left (Next: Card 0 leaves first, then Card 1, then Card 2) */
.anim-stagger-out-left-0 {
  animation: cardsSlideOutLeft 0.24s cubic-bezier(0.4, 0, 0.6, 1) 0ms both !important;
}
.anim-stagger-out-left-1 {
  animation: cardsSlideOutLeft 0.24s cubic-bezier(0.4, 0, 0.6, 1) 150ms both !important;
}
.anim-stagger-out-left-2 {
  animation: cardsSlideOutLeft 0.24s cubic-bezier(0.4, 0, 0.6, 1) 300ms both !important;
}

/* Staggered In Right (Next: New Card 0 arrives first, then New Card 1, then New Card 2) */
.anim-stagger-in-right-0 {
  animation: cardsSlideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) 0ms both !important;
}
.anim-stagger-in-right-1 {
  animation: cardsSlideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) 160ms both !important;
}
.anim-stagger-in-right-2 {
  animation: cardsSlideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) 320ms both !important;
}

/* Staggered Exit Right (Prev: Rightmost card leaves first, then Middle, then Leftmost) */
.anim-stagger-out-right-0 {
  animation: cardsSlideOutRight 0.24s cubic-bezier(0.4, 0, 0.6, 1) 0ms both !important;
}
.anim-stagger-out-right-1 {
  animation: cardsSlideOutRight 0.24s cubic-bezier(0.4, 0, 0.6, 1) 150ms both !important;
}
.anim-stagger-out-right-2 {
  animation: cardsSlideOutRight 0.24s cubic-bezier(0.4, 0, 0.6, 1) 300ms both !important;
}

/* Staggered In Left (Prev: Rightmost card enters first, then Middle, then Leftmost) */
.anim-stagger-in-left-0 {
  animation: cardsSlideInLeft 0.28s cubic-bezier(0.16, 1, 0.3, 1) 0ms both !important;
}
.anim-stagger-in-left-1 {
  animation: cardsSlideInLeft 0.28s cubic-bezier(0.16, 1, 0.3, 1) 160ms both !important;
}
.anim-stagger-in-left-2 {
  animation: cardsSlideInLeft 0.28s cubic-bezier(0.16, 1, 0.3, 1) 320ms both !important;
}

/* Legacy single classes for fallback */
.anim-slide-out-left {
  animation: cardsSlideOutLeft 0.22s cubic-bezier(0.4, 0, 0.6, 1) forwards;
}

.anim-slide-in-right {
  animation: cardsSlideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.anim-slide-out-right {
  animation: cardsSlideOutRight 0.22s cubic-bezier(0.4, 0, 0.6, 1) forwards;
}

.anim-slide-in-left {
  animation: cardsSlideInLeft 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Custom illustration shadows */
.studio-glow {
  filter: drop-shadow(0 0 25px rgba(0, 114, 234, 0.45));
}

.desk-shadow {
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2));
}

.vector-outline {
  stroke-linejoin: round;
  stroke-linecap: round;
}

/* Crystal-clear SVG text rendering & font antialiasing across all devices */
svg text {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}
`;

export const GrievanceStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: grievanceStylesCss }} />
);

/* ============================================================================
 * SECTION 1: STUDIO CHAIRS
 * ============================================================================ */
/**
 * StudioChairs - Tall, Wide Executive Broadcasting Chairs behind Presenters
 * Features:
 * - High-back executive chair silhouette rising behind head/ears (Y=98 to Y=430)
 * - 310px wide ergonomic shoulder wings (framing each presenter prominently on both sides)
 * - Contoured lumbar side bolsters
 * - Aerodynamic silver/white outer rim with bold 7px cartoon outline
 * - Rich electric-to-royal blue ribbed cushion gradient with cyan specular highlights
 * - Inner headrest pillow cushion and vertical ergonomic contour seams
 */
export const StudioChair = ({ side = 'left', className = '' }) => {
  const isLeft = side === 'left';

  return (
    <g className={`studio-chair ${className}`}>
      <defs>
        {/* Cushion Blue Gradient */}
        <linearGradient id={`chairBlue-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0084ff" />
          <stop offset="45%" stopColor="#0062d6" />
          <stop offset="100%" stopColor="#003e9e" />
        </linearGradient>

        {/* Headrest Pillow Gradient */}
        <linearGradient id={`chairHeadrest-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e90ff" />
          <stop offset="100%" stopColor="#004aad" />
        </linearGradient>

        {/* Glossy White/Silver Rim Gradient */}
        <linearGradient id={`chairRim-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="85%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Inner Highlight Glow */}
        <linearGradient id={`chairHighlight-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#0284c7" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
        </linearGradient>
      </defs>

      {isLeft ? (
        // ========================================================
        // LEFT CHAIR (Tall, Wide Executive Chair behind Male Anchor)
        // Center: X = 235, Width: X = 80 to 390 (310px wide!), Height: Y = 98 to 430 (332px tall!)
        // ========================================================
        <g id="left-chair-executive-group">
          {/* Chair Shadow on Stage Floor/Backdrop */}
          <path
            d="M 75 435 C 75 270, 80 160, 140 100 C 170 70, 300 70, 330 100 C 390 160, 395 270, 395 435 Z"
            fill="#000000"
            opacity="0.12"
          />

          {/* 1. Heavy Black Outline Base for Outer Shell */}
          <path
            d="M 90 430 
               L 85 280 
               C 80 228, 80 180, 105 160 
               C 120 148, 135 152, 145 130 
               C 155 105, 200 98, 235 98 
               C 270 98, 315 105, 325 130 
               C 335 152, 350 148, 365 160 
               C 390 180, 390 228, 385 280 
               L 380 430 Z"
            fill="none"
            stroke="#111111"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2. Silver/Chrome Ergonomic Outer Shell / Border Rim */}
          <path
            d="M 90 430 
               L 85 280 
               C 80 228, 80 180, 105 160 
               C 120 148, 135 152, 145 130 
               C 155 105, 200 98, 235 98 
               C 270 98, 315 105, 325 130 
               C 335 152, 350 148, 365 160 
               C 390 180, 390 228, 385 280 
               L 380 430 Z"
            fill={`url(#chairRim-${side})`}
            stroke="#111111"
            strokeWidth="6"
            strokeLinejoin="round"
          />

          {/* 3. Rich Electric Blue Ergonomic Cushioned Backrest */}
          <path
            d="M 102 425 
               L 98 282 
               C 94 235, 94 188, 116 170 
               C 128 160, 144 162, 154 142 
               C 162 118, 202 112, 235 112 
               C 268 112, 308 118, 316 142 
               C 326 162, 342 160, 354 170 
               C 376 188, 376 235, 372 282 
               L 368 425 Z"
            fill={`url(#chairBlue-${side})`}
            stroke="#111111"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* 4. Integrated Executive Headrest Cushion (Prominently visible above shoulders) */}
          <path
            d="M 160 146 
               C 166 122, 202 116, 235 116 
               C 268 116, 304 122, 310 146 
               C 304 164, 275 174, 235 174 
               C 195 174, 166 164, 160 146 Z"
            fill={`url(#chairHeadrest-${side})`}
            stroke="#111111"
            strokeWidth="4"
          />
          {/* Headrest Specular Highlight */}
          <path
            d="M 175 132 C 195 122, 275 122, 295 132"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* 5. Left Shoulder Wing Specular Gloss Streak */}
          <path
            d="M 106 280 
               C 102 235, 104 195, 122 178 
               C 130 170, 138 174, 144 184 
               C 134 200, 128 235, 126 280 Z"
            fill={`url(#chairHighlight-${side})`}
          />

          {/* 6. Right Shoulder Wing Specular Gloss Streak */}
          <path
            d="M 364 280 
               C 368 235, 366 195, 348 178 
               C 340 170, 332 174, 326 184 
               C 336 200, 342 235, 344 280 Z"
            fill={`url(#chairHighlight-${side})`}
          />

          {/* 7. Ergonomic Backrest Contour Seam Lines */}
          <path
            d="M 185 186 C 180 230, 180 320, 182 425"
            fill="none"
            stroke="#002f7a"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M 285 186 C 290 230, 290 320, 288 425"
            fill="none"
            stroke="#002f7a"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.65"
          />
        </g>
      ) : (
        // ========================================================
        // RIGHT CHAIR (Tall, Wide Executive Chair behind Female Anchor)
        // Center: X = 765, Width: X = 610 to 920 (310px wide!), Height: Y = 98 to 430 (332px tall!)
        // ========================================================
        <g id="right-chair-executive-group">
          {/* Chair Shadow on Stage Floor/Backdrop */}
          <path
            d="M 605 435 C 605 270, 610 160, 670 100 C 700 70, 830 70, 860 100 C 920 160, 925 270, 925 435 Z"
            fill="#000000"
            opacity="0.12"
          />

          {/* 1. Heavy Black Outline Base for Outer Shell */}
          <path
            d="M 620 430 
               L 615 280 
               C 610 228, 610 180, 635 160 
               C 650 148, 665 152, 675 130 
               C 685 105, 730 98, 765 98 
               C 800 98, 845 105, 855 130 
               C 865 152, 880 148, 895 160 
               C 920 180, 920 228, 915 280 
               L 910 430 Z"
            fill="none"
            stroke="#111111"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2. Silver/Chrome Ergonomic Outer Shell / Border Rim */}
          <path
            d="M 620 430 
               L 615 280 
               C 610 228, 610 180, 635 160 
               C 650 148, 665 152, 675 130 
               C 685 105, 730 98, 765 98 
               C 800 98, 845 105, 855 130 
               C 865 152, 880 148, 895 160 
               C 920 180, 920 228, 915 280 
               L 910 430 Z"
            fill={`url(#chairRim-${side})`}
            stroke="#111111"
            strokeWidth="6"
            strokeLinejoin="round"
          />

          {/* 3. Rich Electric Blue Ergonomic Cushioned Backrest */}
          <path
            d="M 632 425 
               L 628 282 
               C 624 235, 624 188, 646 170 
               C 658 160, 674 162, 684 142 
               C 692 118, 732 112, 765 112 
               C 798 112, 838 118, 846 142 
               C 856 162, 872 160, 884 170 
               C 906 188, 906 235, 902 282 
               L 898 425 Z"
            fill={`url(#chairBlue-${side})`}
            stroke="#111111"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* 4. Integrated Executive Headrest Cushion (Prominently visible above shoulders) */}
          <path
            d="M 690 146 
               C 696 122, 732 116, 765 116 
               C 798 116, 834 122, 840 146 
               C 834 164, 805 174, 765 174 
               C 725 174, 696 164, 690 146 Z"
            fill={`url(#chairHeadrest-${side})`}
            stroke="#111111"
            strokeWidth="4"
          />
          {/* Headrest Specular Highlight */}
          <path
            d="M 705 132 C 725 122, 805 122, 825 132"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* 5. Left Shoulder Wing Specular Gloss Streak */}
          <path
            d="M 636 280 
               C 632 235, 634 195, 652 178 
               C 660 170, 668 174, 674 184 
               C 664 200, 658 235, 656 280 Z"
            fill={`url(#chairHighlight-${side})`}
          />

          {/* 6. Right Shoulder Wing Specular Gloss Streak */}
          <path
            d="M 894 280 
               C 898 235, 896 195, 878 178 
               C 870 170, 862 174, 856 184 
               C 866 200, 872 235, 874 280 Z"
            fill={`url(#chairHighlight-${side})`}
          />

          {/* 7. Ergonomic Backrest Contour Seam Lines */}
          <path
            d="M 715 186 C 710 230, 710 320, 712 425"
            fill="none"
            stroke="#002f7a"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M 815 186 C 820 230, 820 320, 818 425"
            fill="none"
            stroke="#002f7a"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.65"
          />
        </g>
      )}
    </g>
  );
};

export const StudioChairs = ({ className = '' }) => {
  return (
    <g className={`studio-chairs-pair ${className}`}>
      <StudioChair side="left" />
      <StudioChair side="right" />
    </g>
  );
};

/* ============================================================================
 * SECTION 2: MALE ANCHOR
 * ============================================================================ */
/**
 * MaleAnchor - Left news presenter illustration.
 * Professional cartoon character in dark formal suit, white shirt, and bright red tie.
 * Fully-connected, seamless design:
 * - Thick, natural bent arms (shoulder -> bicep -> elbow -> bent forearm -> cuff -> hands)
 * - Arms seamlessly connected to the jacket body (NO cuts, NO thin sticks!)
 * - Full sleeve thickness (~45-50px) resting naturally on the desk tabletop
 * - White shirt cuffs peeking out at wrists
 * - Plump, cute cartoon hands resting together on top of the desk in front of presenter
 * - Both ears clearly visible (Left & Right) with inner ear folds
 * - Stylish quiff hair with two flicked anime locks at top-right
 * - Cute expressive anime eyes with specular reflections, eyebrows, joyful smile, and blush
 */
export const MaleAnchor = ({ 
  showFeatures = true, 
  className = '' 
}) => {
  return (
    <g id="male-anchor-unified" className={`male-anchor ${className}`}>
      <defs>
        {/* Hair Gradients */}
        <linearGradient id="maleHairGrad" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#4a2e1d" />
          <stop offset="40%" stopColor="#361f12" />
          <stop offset="100%" stopColor="#1a0d07" />
        </linearGradient>

        <linearGradient id="maleHairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#784b30" />
          <stop offset="60%" stopColor="#55331e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#361f12" stopOpacity="0" />
        </linearGradient>

        {/* Skin Gradients */}
        <linearGradient id="maleSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffeedd" />
          <stop offset="45%" stopColor="#fed8b9" />
          <stop offset="100%" stopColor="#f5be98" />
        </linearGradient>

        {/* Cheek Blush */}
        <radialGradient id="maleBlushRad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f87171" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#fb923c" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#fed8b9" stopOpacity="0" />
        </radialGradient>

        {/* Suit Dark Charcoal Navy Gradient */}
        <linearGradient id="maleSuitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#363c4a" />
          <stop offset="35%" stopColor="#262c38" />
          <stop offset="100%" stopColor="#161a22" />
        </linearGradient>

        {/* Suit Lapel Highlight Gradient */}
        <linearGradient id="maleLapelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#444b5c" />
          <stop offset="100%" stopColor="#202530" />
        </linearGradient>

        {/* Red Tie Gradient */}
        <linearGradient id="maleTieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3a36" />
          <stop offset="30%" stopColor="#e52422" />
          <stop offset="100%" stopColor="#b31211" />
        </linearGradient>
      </defs>

      {/* ======================================================== */}
      {/* 1. SEAMLESS SUIT BODY & THICK BENT ARMS                  */}
      {/* ======================================================== */}
      <g id="male-suit-seamless-body">
        {/* Continuous Unified Outer Silhouette of Suit Jacket with Thick Bent Arms */}
        {/* Curves naturally: Shoulder -> Bicep -> Elbow -> Forearm bending onto desk */}
        <path
          d="M 215 214 
             C 175 218, 148 226, 136 242 
             C 122 262, 116 295, 118 330 
             C 119 346, 122 356, 132 362 
             C 145 368, 168 368, 192 366 
             C 202 362, 268 362, 278 366 
             C 302 368, 325 368, 338 362 
             C 348 356, 351 346, 352 330 
             C 354 295, 348 262, 334 242 
             C 322 226, 295 218, 255 214 
             Z"
          fill="url(#maleSuitGrad)"
          stroke="#111111"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Inner Armpit / Sleeve Crease Line (Left Arm) */}
        <path
          d="M 158 245 C 148 280, 154 316, 178 344"
          fill="none"
          stroke="#111111"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Inner Armpit / Sleeve Crease Line (Right Arm) */}
        <path
          d="M 312 245 C 322 280, 316 316, 292 344"
          fill="none"
          stroke="#111111"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Forearm Bend Highlight Line (Left Arm) */}
        <path
          d="M 124 338 C 130 352, 142 360, 164 364"
          fill="none"
          stroke="#444b5c"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Forearm Bend Highlight Line (Right Arm) */}
        <path
          d="M 346 338 C 340 352, 328 360, 306 364"
          fill="none"
          stroke="#444b5c"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* White Collared Shirt V-Neck Area */}
        <polygon
          points="212,206 258,206 248,265 235,275 222,265"
          fill="#ffffff"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Shirt Collar Flaps */}
        <polygon
          points="210,204 235,228 222,238 202,214"
          fill="#f8fafc"
          stroke="#111111"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <polygon
          points="260,204 235,228 248,238 268,214"
          fill="#f8fafc"
          stroke="#111111"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Red Necktie Knot & Blade */}
        <polygon
          points="228,226 242,226 246,242 235,246 224,242"
          fill="url(#maleTieGrad)"
          stroke="#111111"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <polygon
          points="230,244 240,244 245,322 235,334 225,322"
          fill="url(#maleTieGrad)"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 235 246 L 235 330"
          stroke="#991b1b"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Suit Lapels */}
        <polygon
          points="208,212 232,282 188,302 178,256"
          fill="url(#maleLapelGrad)"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <polygon
          points="262,212 238,282 282,302 292,256"
          fill="url(#maleLapelGrad)"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 235 284 L 235 348"
          stroke="#111111"
          strokeWidth="3"
        />

        {/* White Shirt Cuffs peeking out of sleeves */}
        <polygon
          points="190,348 205,348 201,368 186,368"
          fill="#ffffff"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <polygon
          points="265,348 280,348 284,368 269,368"
          fill="#ffffff"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Plump Cartoon Hands Resting in Center on Desk */}
        <path
          d="M 202 352
             C 202 342, 220 338, 235 338
             C 250 338, 268 342, 268 352
             C 270 364, 258 372, 235 372
             C 212 372, 200 364, 202 352 Z"
          fill="url(#maleSkinGrad)"
          stroke="#111111"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        {/* Cute Thumb & Finger Fold Details */}
        <path
          d="M 220 350 C 230 358, 240 358, 250 350"
          fill="none"
          stroke="#d98964"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 226 360 C 235 364, 244 360, 248 358"
          fill="none"
          stroke="#d98964"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* ======================================================== */}
      {/* 2. NECK, BOTH EARS & HEAD JAWLINE                        */}
      {/* ======================================================== */}
      {/* Neck */}
      <polygon
        points="218,178 252,178 255,214 215,214"
        fill="#f5be98"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M 218 182 Q 235 198 252 182 L 255 194 Q 235 208 215 194 Z"
        fill="#e29b74"
      />

      {/* 1. Viewer's Left Ear */}
      <g id="male-ear-left">
        <ellipse
          cx="168"
          cy="150"
          rx="16"
          ry="18"
          fill="url(#maleSkinGrad)"
          stroke="#111111"
          strokeWidth="5"
        />
        <path
          d="M 164 142 C 170 144, 173 152, 168 158"
          fill="none"
          stroke="#d98964"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* 2. Viewer's Right Ear (Clearly Visible with Inner Fold) */}
      <g id="male-ear-right">
        <ellipse
          cx="302"
          cy="150"
          rx="16"
          ry="18"
          fill="url(#maleSkinGrad)"
          stroke="#111111"
          strokeWidth="5"
        />
        <path
          d="M 306 142 C 300 144, 297 152, 302 158"
          fill="none"
          stroke="#d98964"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Head Jawline Base (Cartoon rounded chibi face) */}
      <path
        d="M 172 135 
           C 168 95, 195 65, 235 65 
           C 275 65, 302 95, 298 135 
           C 296 178, 272 196, 235 196 
           C 198 196, 174 178, 172 135 
           Z"
        fill="url(#maleSkinGrad)"
        stroke="#111111"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* ======================================================== */}
      {/* 3. FACIAL FEATURES (Eyes, Eyebrows, Blush, Smile)        */}
      {/* ======================================================== */}
      {showFeatures && (
        <g id="male-face-details">
          {/* Rosy Cheek Blush */}
          <ellipse cx="196" cy="156" rx="14" ry="9" fill="url(#maleBlushRad)" />
          <ellipse cx="274" cy="156" rx="14" ry="9" fill="url(#maleBlushRad)" />

          {/* Eyebrows */}
          <path
            d="M 194 115 C 202 108, 214 108, 222 115"
            fill="none"
            stroke="#24150d"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 248 115 C 256 108, 268 108, 276 115"
            fill="none"
            stroke="#24150d"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Left Eye (Big cute cartoon eye with reflections) */}
          <g id="male-eye-left">
            <ellipse cx="208" cy="135" rx="9" ry="11.5" fill="#111111" />
            <circle cx="206" cy="131" r="3.8" fill="#ffffff" />
            <circle cx="211" cy="138" r="1.8" fill="#ffffff" />
          </g>

          {/* Right Eye */}
          <g id="male-eye-right">
            <ellipse cx="262" cy="135" rx="9" ry="11.5" fill="#111111" />
            <circle cx="260" cy="131" r="3.8" fill="#ffffff" />
            <circle cx="265" cy="138" r="1.8" fill="#ffffff" />
          </g>

          {/* Joyful Open Smile */}
          <g id="male-smile">
            <path
              d="M 223 148 
                 C 223 148, 235 148, 247 148 
                 C 247 166, 223 166, 223 148 
                 Z"
              fill="#b91c1c"
              stroke="#111111"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Cute Pink Tongue */}
            <path
              d="M 227 157 C 231 154, 239 154, 243 157 C 241 165, 229 165, 227 157 Z"
              fill="#f87171"
            />
            {/* Smile Top Lip Line */}
            <path
              d="M 221 148 C 232 150, 238 150, 249 148"
              fill="none"
              stroke="#111111"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>
        </g>
      )}

      {/* ======================================================== */}
      {/* 4. STYLISH MALE HAIR WITH TWO TOP-RIGHT ANIME LOCKS      */}
      {/* ======================================================== */}
      <g id="male-hair-styled">
        <path
          d="M 166 122 
             C 158 92, 172 58, 205 45 
             C 228 35, 260 35, 288 44 
             C 300 36, 312 38, 318 48 
             C 328 44, 335 52, 332 64 
             C 338 78, 335 100, 318 124 
             C 308 138, 302 142, 298 128 
             C 292 108, 285 90, 268 85 
             C 242 78, 204 84, 185 110 
             C 178 120, 170 135, 166 122 Z"
          fill="url(#maleHairGrad)"
          stroke="#111111"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <path
          d="M 172 125 
             C 165 92, 178 56, 212 44 
             C 230 38, 252 38, 275 46 
             C 285 36, 298 38, 304 48 
             C 316 42, 326 50, 322 62 
             C 326 74, 322 92, 310 108 
             C 302 96, 292 88, 278 84 
             C 252 76, 225 82, 206 102 
             C 195 114, 186 118, 178 118 
             C 172 118, 170 126, 172 125 Z"
          fill="url(#maleHairGrad)"
          stroke="#111111"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <path
          d="M 218 52 
             C 236 44, 262 46, 282 56 
             C 274 60, 256 54, 238 54 
             C 226 54, 218 56, 218 52 Z"
          fill="url(#maleHairHighlight)"
        />
      </g>
    </g>
  );
};

/* ============================================================================
 * SECTION 3: FEMALE ANCHOR
 * ============================================================================ */
/**
 * FemaleAnchor - Right news presenter illustration.
 * Professional cartoon character in vivid red formal blazer, white inner blouse,
 * long brunette ponytail with red hair tie, and white pearl earrings.
 * Fully-connected, seamless design:
 * - Thick, natural bent arms (shoulder -> bicep -> elbow -> bent forearm -> cuff -> hands)
 * - Arms seamlessly connected to the blazer body (NO cuts, NO thin sticks!)
 * - Full sleeve thickness (~45-50px) resting naturally on the desk tabletop
 * - White inner blouse cuffs peeking out at wrists
 * - Plump, cute cartoon hands resting together on top of the desk in front of presenter
 * - Both ears clearly visible (Left & Right) with white pearl earrings
 * - High ponytail with red scrunchie and flowing brunette locks
 * - Cute expressive anime eyes with specular reflections, eyebrows, joyful smile, and blush
 */
export const FemaleAnchor = ({ 
  showFeatures = true, 
  className = '' 
}) => {
  return (
    <g id="female-anchor-unified" className={`female-anchor ${className}`}>
      <defs>
        {/* Hair Gradients */}
        <linearGradient id="femaleHairGrad" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#4a2416" />
          <stop offset="40%" stopColor="#381b10" />
          <stop offset="100%" stopColor="#220e07" />
        </linearGradient>

        <linearGradient id="femaleHairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7a422d" />
          <stop offset="50%" stopColor="#5d3120" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#381b10" stopOpacity="0" />
        </linearGradient>

        {/* Skin Gradients */}
        <linearGradient id="femaleSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffeedd" />
          <stop offset="45%" stopColor="#fed8b9" />
          <stop offset="100%" stopColor="#f5be98" />
        </linearGradient>

        {/* Cheek Blush */}
        <radialGradient id="femaleBlushRad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f87171" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#fb923c" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#fed8b9" stopOpacity="0" />
        </radialGradient>

        {/* Red Blazer Gradients */}
        <linearGradient id="femaleBlazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3a36" />
          <stop offset="40%" stopColor="#e52422" />
          <stop offset="100%" stopColor="#b31211" />
        </linearGradient>

        <linearGradient id="femaleLapelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4a" />
          <stop offset="100%" stopColor="#cb1d1b" />
        </linearGradient>

        {/* Red Scrunchie Gradient */}
        <linearGradient id="scrunchieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4542" />
          <stop offset="100%" stopColor="#b91312" />
        </linearGradient>

        {/* Pearl Shading */}
        <radialGradient id="pearlGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </radialGradient>
      </defs>

      {/* ======================================================== */}
      {/* 1. BACK HAIR (Ponytail flowing behind right shoulder)    */}
      {/* ======================================================== */}
      <g id="female-ponytail">
        <path
          d="M 822 95 
             C 845 80, 875 105, 878 140 
             C 882 180, 895 210, 915 250 
             C 925 270, 922 300, 908 318 
             C 892 335, 868 335, 856 310 
             C 845 285, 842 245, 836 210 
             C 830 175, 818 135, 822 95 Z"
          fill="url(#femaleHairGrad)"
          stroke="#111111"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <path
          d="M 845 115 
             C 860 145, 878 185, 888 230 
             C 892 250, 890 275, 878 290 
             C 868 275, 860 240, 852 195 
             C 846 160, 838 130, 845 115 Z"
          fill="url(#femaleHairHighlight)"
        />

        {/* Red Scrunchie / Hair Tie */}
        <ellipse
          cx="822"
          cy="96"
          rx="12"
          ry="15"
          transform="rotate(25 822 96)"
          fill="url(#scrunchieGrad)"
          stroke="#111111"
          strokeWidth="4"
        />
        <ellipse
          cx="820"
          cy="92"
          rx="6"
          ry="3"
          transform="rotate(25 820 92)"
          fill="#ff8e8b"
        />
      </g>

      {/* ======================================================== */}
      {/* 2. SEAMLESS BLAZER BODY & THICK BENT ARMS                */}
      {/* ======================================================== */}
      <g id="female-blazer-seamless-body">
        {/* Continuous Unified Outer Silhouette of Blazer with Thick Bent Arms */}
        {/* Curves naturally: Shoulder -> Bicep -> Elbow -> Forearm bending onto desk */}
        <path
          d="M 745 214 
             C 705 218, 678 226, 666 242 
             C 652 262, 646 295, 648 330 
             C 649 346, 652 356, 662 362 
             C 675 368, 698 368, 722 366 
             C 732 362, 798 362, 808 366 
             C 832 368, 855 368, 868 362 
             C 878 356, 881 346, 882 330 
             C 884 295, 878 262, 864 242 
             C 852 226, 825 218, 785 214 
             Z"
          fill="url(#femaleBlazerGrad)"
          stroke="#111111"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Inner Armpit / Sleeve Crease Line (Left Arm) */}
        <path
          d="M 688 245 C 678 280, 684 316, 708 344"
          fill="none"
          stroke="#111111"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Inner Armpit / Sleeve Crease Line (Right Arm) */}
        <path
          d="M 842 245 C 852 280, 846 316, 822 344"
          fill="none"
          stroke="#111111"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Forearm Bend Highlight Line (Left Arm) */}
        <path
          d="M 654 338 C 660 352, 672 360, 694 364"
          fill="none"
          stroke="#ff6b68"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Forearm Bend Highlight Line (Right Arm) */}
        <path
          d="M 876 338 C 870 352, 858 360, 836 364"
          fill="none"
          stroke="#ff6b68"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* White Inner Blouse */}
        <polygon
          points="738,206 792,206 780,265 765,275 750,265"
          fill="#ffffff"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 742 208 Q 765 220 788 208 L 782 234 Q 765 246 748 234 Z"
          fill="#e2e8f0"
        />

        {/* Red Blazer Lapels */}
        <polygon
          points="738,212 762,282 718,302 708,256"
          fill="url(#femaleLapelGrad)"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <polygon
          points="792,212 768,282 812,302 822,256"
          fill="url(#femaleLapelGrad)"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 765 284 L 765 348"
          stroke="#991b1b"
          strokeWidth="3"
        />

        {/* White Inner Blouse Cuffs peeking out of sleeves */}
        <polygon
          points="720,348 735,348 731,368 716,368"
          fill="#ffffff"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <polygon
          points="795,348 810,348 814,368 799,368"
          fill="#ffffff"
          stroke="#111111"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Plump Cartoon Hands Resting in Center on Desk */}
        <path
          d="M 732 352
             C 732 342, 750 338, 765 338
             C 780 338, 798 342, 798 352
             C 800 364, 788 372, 765 372
             C 742 372, 730 364, 732 352 Z"
          fill="url(#femaleSkinGrad)"
          stroke="#111111"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        {/* Cute Thumb & Finger Fold Details */}
        <path
          d="M 750 350 C 760 358, 770 358, 780 350"
          fill="none"
          stroke="#d98964"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 756 360 C 765 364, 774 360, 778 358"
          fill="none"
          stroke="#d98964"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* ======================================================== */}
      {/* 3. NECK, BOTH EARS WITH PEARLS & HEAD JAWLINE            */}
      {/* ======================================================== */}
      {/* Neck */}
      <polygon
        points="748,178 782,178 785,214 745,214"
        fill="#f5be98"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M 748 182 Q 765 198 782 182 L 785 194 Q 765 208 745 194 Z"
        fill="#e29b74"
      />

      {/* 1. Viewer's Left Ear with Pearl Earring */}
      <g id="female-ear-left">
        <ellipse
          cx="698"
          cy="150"
          rx="15"
          ry="17"
          fill="url(#femaleSkinGrad)"
          stroke="#111111"
          strokeWidth="5"
        />
        <circle cx="696" cy="162" r="6" fill="url(#pearlGrad)" stroke="#111111" strokeWidth="2.5" />
        <circle cx="694.5" cy="160" r="1.8" fill="#ffffff" />
      </g>

      {/* 2. Viewer's Right Ear with Pearl Earring */}
      <g id="female-ear-right">
        <ellipse
          cx="832"
          cy="150"
          rx="15"
          ry="17"
          fill="url(#femaleSkinGrad)"
          stroke="#111111"
          strokeWidth="5"
        />
        <circle cx="834" cy="162" r="6" fill="url(#pearlGrad)" stroke="#111111" strokeWidth="2.5" />
        <circle cx="832.5" cy="160" r="1.8" fill="#ffffff" />
      </g>

      {/* Head Jawline Base */}
      <path
        d="M 702 135 
           C 698 95, 725 65, 765 65 
           C 805 65, 832 95, 828 135 
           C 826 178, 802 196, 765 196 
           C 728 196, 704 178, 702 135 
           Z"
        fill="url(#femaleSkinGrad)"
        stroke="#111111"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* ======================================================== */}
      {/* 4. FACIAL FEATURES (Eyes, Eyebrows, Blush, Smile)        */}
      {/* ======================================================== */}
      {showFeatures && (
        <g id="female-face-details">
          {/* Rosy Cheek Blush */}
          <ellipse cx="724" cy="156" rx="14" ry="9" fill="url(#femaleBlushRad)" />
          <ellipse cx="806" cy="156" rx="14" ry="9" fill="url(#femaleBlushRad)" />

          {/* Eyebrows */}
          <path
            d="M 722 115 C 730 108, 742 108, 750 115"
            fill="none"
            stroke="#24150d"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 780 115 C 788 108, 800 108, 808 115"
            fill="none"
            stroke="#24150d"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Left Eye */}
          <g id="female-eye-left">
            <ellipse cx="736" cy="135" rx="9" ry="11.5" fill="#111111" />
            <circle cx="734" cy="131" r="3.8" fill="#ffffff" />
            <circle cx="739" cy="138" r="1.8" fill="#ffffff" />
          </g>

          {/* Right Eye */}
          <g id="female-eye-right">
            <ellipse cx="794" cy="135" rx="9" ry="11.5" fill="#111111" />
            <circle cx="792" cy="131" r="3.8" fill="#ffffff" />
            <circle cx="797" cy="138" r="1.8" fill="#ffffff" />
          </g>

          {/* Joyful Open Smile */}
          <g id="female-smile">
            <path
              d="M 751 148 
                 C 751 148, 765 148, 779 148 
                 C 779 166, 751 166, 751 148 
                 Z"
              fill="#b91c1c"
              stroke="#111111"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Cute Pink Tongue */}
            <path
              d="M 756 157 C 760 154, 768 154, 773 157 C 771 165, 758 165, 756 157 Z"
              fill="#f87171"
            />
            {/* Smile Top Lip Line */}
            <path
              d="M 749 148 C 760 150, 768 150, 781 148"
              fill="none"
              stroke="#111111"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>
        </g>
      )}

      {/* ======================================================== */}
      {/* 5. FLOWING BRUNETTE HAIR & BANGS                         */}
      {/* ======================================================== */}
      <g id="female-hair-styled">
        <path
          d="M 696 122 
             C 690 90, 706 54, 742 42 
             C 770 32, 808 36, 830 58 
             C 845 72, 846 95, 840 122 
             C 830 110, 818 90, 795 82 
             C 760 70, 725 80, 708 108 
             C 700 120, 698 128, 696 122 Z"
          fill="url(#femaleHairGrad)"
          stroke="#111111"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Graceful Side-swept Bangs */}
        <path
          d="M 700 116 
             C 702 85, 722 55, 762 46 
             C 790 40, 822 52, 834 82 
             C 824 78, 810 78, 798 84 
             C 784 90, 774 100, 762 102 
             C 748 104, 740 98, 728 102 
             C 716 108, 712 118, 700 116 Z"
          fill="url(#femaleHairGrad)"
          stroke="#111111"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <path
          d="M 698 118 C 692 135, 694 155, 700 168 C 696 160, 692 142, 698 118 Z"
          fill="url(#femaleHairGrad)"
          stroke="#111111"
          strokeWidth="4"
        />

        <path
          d="M 746 52 
             C 765 44, 792 46, 814 58 
             C 804 62, 788 56, 768 56 
             C 756 56, 748 58, 746 52 Z"
          fill="url(#femaleHairHighlight)"
        />
      </g>
    </g>
  );
};

/* ============================================================================
 * SECTION 4: MICROPHONE
 * ============================================================================ */
/**
 * Microphone - Studio broadcasting microphone component.
 * Features:
 * - Weighted desk stand with solid 3D bevel base
 * - Telescopic stand pole with chrome accent collar
 * - Red rectangular 'NEWS' flag callout
 * - Solid, mechanically seamless swivel mount (ZERO gaps, NO detached floating parts!)
 * - Professional broadcast capsule head with chrome band, textured grille, and specular gloss
 * - Natural 10-degree tilt toward presenter
 */
export const Microphone = ({ 
  side = 'left', 
  x = 350, 
  y = 370, 
  scale = 1, 
  showFlag = true,
  className = '' 
}) => {
  const isLeft = side === 'left';
  // Gentle, natural tilt toward anchor (left: -10deg, right: +10deg)
  const angle = isLeft ? -10 : 10;

  return (
    <g 
      id={`microphone-${side}`} 
      transform={`translate(${x}, ${y}) scale(${scale})`} 
      className={`news-microphone ${className}`}
    >
      <defs>
        {/* Metal Dark Grey Gradient */}
        <linearGradient id={`micMetal-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="35%" stopColor="#374151" />
          <stop offset="70%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>

        {/* Mic Capsule Head Gradient */}
        <linearGradient id={`micCapsule-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="40%" stopColor="#374151" />
          <stop offset="85%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>

        {/* Mic Base Radial Gradient */}
        <radialGradient id={`micBaseGrad-${side}`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="40%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>

        {/* Red Flag Gradient */}
        <linearGradient id={`micFlagGrad-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
      </defs>

      {/* --- DESK CONTACT SHADOW --- */}
      <ellipse
        cx="0"
        cy="2"
        rx="20"
        ry="7"
        fill="#000000"
        opacity="0.45"
      />

      {/* --- WEIGHTED ROUND BASE --- */}
      {/* Base Bevel Rim */}
      <ellipse
        cx="0"
        cy="0"
        rx="17"
        ry="6"
        fill={`url(#micBaseGrad-${side})`}
        stroke="#111111"
        strokeWidth="3.5"
      />
      {/* Base Center Collar */}
      <ellipse
        cx="0"
        cy="-3"
        rx="7"
        ry="3"
        fill="#374151"
        stroke="#111111"
        strokeWidth="2.5"
      />

      {/* --- VERTICAL STAND POLE --- */}
      <rect
        x="-3.5"
        y="-76"
        width="7"
        height="74"
        rx="2"
        fill={`url(#micMetal-${side})`}
        stroke="#111111"
        strokeWidth="3.5"
      />

      {/* --- RED 'NEWS' RECTANGULAR FLAG --- */}
      {showFlag && (
        <g id={`mic-flag-${side}`} transform="translate(0, -48)">
          {/* Main Flag Body */}
          <rect
            x="-15"
            y="-10"
            width="30"
            height="20"
            rx="3"
            fill={`url(#micFlagGrad-${side})`}
            stroke="#111111"
            strokeWidth="3"
          />
          {/* Top highlight line */}
          <line
            x1="-13"
            y1="-8"
            x2="13"
            y2="-8"
            stroke="#fca5a5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* White NEWS text */}
          <text
            x="0"
            y="4.5"
            fill="#ffffff"
            fontSize="9"
            fontWeight="900"
            fontFamily="Montserrat, sans-serif"
            textAnchor="middle"
            letterSpacing="0.8"
          >
            NEWS
          </text>
        </g>
      )}

      {/* --- TOP STAND COLLAR RING --- */}
      <rect
        x="-5.5"
        y="-78"
        width="11"
        height="4"
        rx="1.5"
        fill="#94a3b8"
        stroke="#111111"
        strokeWidth="2.5"
      />

      {/* --- SOLID SWIVEL MOUNT & INTEGRATED CAPSULE --- */}
      {/* Rotates cleanly around swivel pivot point (0, -78) with NO gaps */}
      <g transform={`rotate(${angle} 0 -78)`}>
        {/* Pivot Hinge Joint Disc */}
        <circle
          cx="0"
          cy="-78"
          r="5"
          fill="#475569"
          stroke="#111111"
          strokeWidth="3"
        />
        <circle
          cx="0"
          cy="-78"
          r="1.8"
          fill="#cbd5e1"
        />

        {/* Solid Mechanical Neck / Yoke Stem (Connects pivot directly into capsule!) */}
        <path
          d="M -5 -78 L -7.5 -90 L 7.5 -90 L 5 -78 Z"
          fill="#334155"
          stroke="#111111"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Capsule Lower Cylindrical Body */}
        <rect
          x="-8.5"
          y="-108"
          width="17"
          height="18"
          rx="2.5"
          fill={`url(#micMetal-${side})`}
          stroke="#111111"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Chrome Accent Connector Band */}
        <rect
          x="-9.5"
          y="-112"
          width="19"
          height="4"
          rx="1.5"
          fill="#cbd5e1"
          stroke="#111111"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Capsule Upper Dome Mesh Grille */}
        <path
          d="M -9 -112 
             C -9 -132, 9 -132, 9 -112 
             Z"
          fill={`url(#micCapsule-${side})`}
          stroke="#111111"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Grille Mesh Texture Stripes */}
        <line x1="-7.5" y1="-117" x2="7.5" y2="-117" stroke="#4b5563" strokeWidth="1.5" />
        <line x1="-6.5" y1="-122" x2="6.5" y2="-122" stroke="#4b5563" strokeWidth="1.5" />
        <line x1="-4.5" y1="-127" x2="4.5" y2="-127" stroke="#4b5563" strokeWidth="1.5" />

        {/* Vertical Center Grille Seam */}
        <line x1="0" y1="-130" x2="0" y2="-112" stroke="#374151" strokeWidth="1.5" />

        {/* Specular Grille Highlight */}
        <path
          d="M -5 -125 C -2 -129, 2 -129, 5 -125"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </g>
  );
};

/* ============================================================================
 * SECTION 5: NEWSPAPER
 * ============================================================================ */
/**
 * Newspaper - Folded multi-sheet news publication illustration.
 * Custom branded with "CR REAL TIME NEWS CHANNEL", blue Earth globe graphic,
 * simulated article columns, and realistic perspective depth.
 */
export const Newspaper = ({ x = 450, y = 375, scale = 1, className = '' }) => {
  return (
    <g 
      id="center-newspaper" 
      transform={`translate(${x}, ${y}) scale(${scale})`} 
      className={`newspaper-graphic ${className}`}
    >
      <defs>
        {/* Paper Gradient */}
        <linearGradient id="paperFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        <linearGradient id="paperPageBack1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        <linearGradient id="paperPageBack2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Globe Gradient */}
        <linearGradient id="globeBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      {/* --- DESK CONTACT DROP SHADOW --- */}
      <polygon
        points="-75,18 78,18 88,26 -65,26"
        fill="#000000"
        opacity="0.4"
      />

      {/* --- LAYERED BACK SHEETS (Left folded spine sheets) --- */}
      {/* 3rd Layer Sheet */}
      <polygon
        points="-78,-46 -58,-46 -56,15 -76,15"
        fill="url(#paperPageBack2)"
        stroke="#111111"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* 2nd Layer Sheet */}
      <polygon
        points="-72,-49 -52,-49 -50,17 -70,17"
        fill="url(#paperPageBack1)"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* --- FRONT NEWSPAPER SHEET (Main Page) --- */}
      <polygon
        points="-66,-54 74,-54 82,18 -58,18"
        fill="url(#paperFrontGrad)"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Center Fold Crease Shadow */}
      <line
        x1="8"
        y1="-53"
        x2="12"
        y2="17"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      {/* --- HEADLINE BANNER BOX --- */}
      <rect
        x="-56"
        y="-48"
        width="122"
        height="23"
        rx="2"
        fill="#ffffff"
        stroke="#111111"
        strokeWidth="3"
      />

      {/* Top Header Line: "CR REAL TIME" */}
      <text
        x="5"
        y="-36"
        textAnchor="middle"
        fontFamily="Montserrat, 'Arial Black', Impact, sans-serif"
      >
        <tspan fill="#e52422" fontWeight="900" fontSize="9.5">CR </tspan>
        <tspan fill="#111111" fontWeight="900" fontSize="8.8" letterSpacing="0.6">REAL TIME</tspan>
      </text>

      {/* Bottom Sub-Header Line: "NEWS CHANNEL" */}
      <text
        x="5"
        y="-27"
        fill="#0284c7"
        fontSize="7.5"
        fontWeight="900"
        fontFamily="Montserrat, 'Arial Black', sans-serif"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        NEWS CHANNEL
      </text>

      {/* --- BLUE GLOBE ILLUSTRATION (Right side of page) --- */}
      <g id="newspaper-globe" transform="translate(48, -4)">
        {/* Ocean Sphere */}
        <circle
          cx="0"
          cy="0"
          r="16"
          fill="url(#globeBlueGrad)"
          stroke="#111111"
          strokeWidth="3"
        />

        {/* Clip path for globe continents */}
        <clipPath id="globeClip">
          <circle cx="0" cy="0" r="14.5" />
        </clipPath>

        {/* Continents (White vector landmasses) */}
        <g clipPath="url(#globeClip)">
          {/* Americas silhouette */}
          <path
            d="M -14 -6 
               C -10 -12, -4 -10, -5 -4 
               C -6 0, -10 2, -7 8 
               C -4 14, -8 16, -11 12 
               C -15 8, -16 0, -14 -6 Z"
            fill="#ffffff"
          />
          {/* Eurasia / Africa silhouette */}
          <path
            d="M 0 -12 
               C 5 -15, 12 -12, 14 -6 
               C 15 0, 10 4, 8 8 
               C 6 12, 0 10, -2 4 
               C -4 0, -3 -8, 0 -12 Z"
            fill="#ffffff"
          />
        </g>
      </g>

      {/* --- ARTICLE TEXT LINES (Grey simulated news columns) --- */}
      {/* Column 1 (Left) */}
      <g id="article-lines-left" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round">
        <line x1="-54" y1="-18" x2="-2" y2="-18" />
        <line x1="-54" y1="-11" x2="-6" y2="-11" />
        <line x1="-54" y1="-4"  x2="-4" y2="-4" />
        <line x1="-54" y1="3"   x2="-10" y2="3" />
        <line x1="-54" y1="10"  x2="-2" y2="10" />
      </g>

      {/* Column 2 (Middle) */}
      <g id="article-lines-mid" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round">
        <line x1="8" y1="-18" x2="24" y2="-18" />
        <line x1="8" y1="-11" x2="22" y2="-11" />
        <line x1="8" y1="-4"  x2="24" y2="-4" />
        <line x1="8" y1="3"   x2="20" y2="3" />
        <line x1="8" y1="10"  x2="24" y2="10" />
      </g>
    </g>
  );
};

/* ============================================================================
 * SECTION 6: LAPTOP
 * ============================================================================ */
/**
 * Laptop - Studio laptop illustration positioned on the anchor desk.
 * Features a dark slate-grey chassis, angled open display lid,
 * custom "CR REAL TIME NEWS CHANNEL" transparent emblem logo,
 * visible bottom keyboard base edge, and desk contact shadow.
 */
export const Laptop = ({ x = 600, y = 376, scale = 1, className = '' }) => {
  return (
    <g 
      id="studio-laptop" 
      transform={`translate(${x}, ${y}) scale(${scale})`} 
      className={`laptop-graphic ${className}`}
    >
      <defs>
        {/* Laptop Screen Lid Gradient */}
        <linearGradient id="laptopLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="50%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>

        {/* Laptop Base Rim Gradient */}
        <linearGradient id="laptopBaseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="50%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>

        {/* Logo Radial Glow behind emblem */}
        <radialGradient id="laptopLogoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* --- DESK CONTACT DROP SHADOW --- */}
      <polygon
        points="-62,18 72,18 84,24 -52,24"
        fill="#000000"
        opacity="0.45"
      />

      {/* --- BOTTOM BASE / KEYBOARD CHASSIS --- */}
      {/* Lower chassis thickness lip */}
      <polygon
        points="-56,12 68,12 75,18 -50,18"
        fill="#111827"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Top surface of open base platform */}
      <polygon
        points="-52,8 64,8 70,13 -48,13"
        fill="url(#laptopBaseGrad)"
        stroke="#111111"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* --- OPEN DISPLAY LID (Facing camera / viewer) --- */}
      {/* Outer Screen Bevel / Frame */}
      <polygon
        points="-48,-62 52,-62 58,10 -42,10"
        fill="url(#laptopLidGrad)"
        stroke="#111111"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Top Edge Specular Highlight */}
      <line
        x1="-45"
        y1="-60"
        x2="49"
        y2="-60"
        stroke="#9ca3af"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Inner Screen Bevel Inset */}
      <polygon
        points="-44,-58 48,-58 54,6 -38,6"
        fill="#28303f"
        stroke="#1f242d"
        strokeWidth="1.5"
      />

      {/* Subtle illuminated backing disc */}
      <circle
        cx="5"
        cy="-26"
        r="24"
        fill="url(#laptopLogoGlow)"
      />

      {/* --- USER BRANDED EMBLEM LOGO (Transparent Background) --- */}
      <image
        href={logoUrl}
        xlinkHref={logoUrl}
        x="-19"
        y="-50"
        width="48"
        height="48"
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  );
};

/* ============================================================================
 * SECTION 7: GRIEVANCE CARDS (CAROUSEL & NAVIGATION)
 * ============================================================================ */
/**
 * GrievanceCards - Exactly 12 Digital Grievance Cards embedded inside the news desk front body.
 * Responsive Layout:
 *   - Desktop (isMobile = false): 3 cards per page = 4 pages (Width: 226px, Height: 126px, slots: [141, 387, 633]).
 *   - Mobile Responsive (isMobile = true): 2 cards per page = 6 pages (Width: 354px, Height: 146px, slots: [136, 510]).
 *     Provides EXTRA LARGE, high-contrast, crystal-clear typography and enlarged icons directly inside the desk!
 *
 * Page Changing Animations:
 *   - Staggered ONE-BY-ONE Departure and Arrival (Horizontal Slide):
 *     - When NEXT is clicked:
 *       - Exit: Card 0 slides out to left (0ms), then Card 1 (150ms), then Card 2 (300ms).
 *       - Enter: New Card 0 slides in from right (0ms), then Card 1 (160ms), then Card 2 (320ms).
 *     - When PREV is clicked:
 *       - Exit: Rightmost card slides out to right first (0ms), then middle card (150ms), then leftmost (300ms).
 *       - Enter: Rightmost card slides in from left first (0ms), then middle card (160ms), then leftmost (320ms).
 *     - NO jumping from top. NO pop-scale reset. Smooth resting state after transition.
 *
 * Navigation Bar:
 *   - Left: PREVIOUS (disabled on Page 1)
 *   - Center: PAGE X OF 6 (mobile) or PAGE X OF 4 (desktop)
 *   - Right: NEXT (disabled on last page)
 */
export const GrievanceCards = ({
  onSelectCard,
  currentPage: propCurrentPage,
  totalPages: propTotalPages,
  cardsPerPage: propCardsPerPage,
  isMobile: propIsMobile,
  animDirection: propAnimDirection,
  isTransitioning: propIsTransitioning,
  handleNext: propHandleNext,
  handlePrev: propHandlePrev,
  className = ''
}) => {
  // Internal responsive fallback
  const [internalIsMobile, setInternalIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    if (propIsMobile !== undefined) return;
    const handleResize = () => setInternalIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [propIsMobile]);

  const isMobile = propIsMobile !== undefined ? propIsMobile : internalIsMobile;
  const cardsPerPage = propCardsPerPage !== undefined ? propCardsPerPage : (isMobile ? 2 : 3);
  const totalPages = propTotalPages !== undefined ? propTotalPages : Math.ceil(allGrievanceCards.length / cardsPerPage);

  // Initial load state to prevent re-triggering entrance animations on page flips
  const [hasLoadedInitial, setHasLoadedInitial] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoadedInitial(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Uncontrolled state fallbacks
  const [localPage, setLocalPage] = useState(0);
  const [localAnimDirection, setLocalAnimDirection] = useState(null);
  const [localIsTransitioning, setLocalIsTransitioning] = useState(false);

  const currentPage = propCurrentPage !== undefined ? propCurrentPage : localPage;
  const animDirection = propAnimDirection !== undefined ? propAnimDirection : localAnimDirection;
  const isTransitioning = propIsTransitioning !== undefined ? propIsTransitioning : localIsTransitioning;

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const allCards = allGrievanceCards;
  const startIndex = currentPage * cardsPerPage;
  const currentCards = allCards.slice(startIndex, startIndex + cardsPerPage);

  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage >= totalPages - 1;

  // Fallback handlers if not controlled from parent
  const handleNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (propHandleNext) {
      propHandleNext(e);
      return;
    }
    if (isNextDisabled || isTransitioning) return;
    setLocalIsTransitioning(true);
    setLocalAnimDirection('out-left');
    const exitDuration = isMobile ? 390 : 540;
    const enterDuration = isMobile ? 440 : 600;

    setTimeout(() => {
      setLocalPage((prev) => Math.min(totalPages - 1, prev + 1));
      setLocalAnimDirection('in-right');
      setTimeout(() => {
        setLocalAnimDirection(null);
        setLocalIsTransitioning(false);
      }, enterDuration);
    }, exitDuration);
  };

  const handlePrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (propHandlePrev) {
      propHandlePrev(e);
      return;
    }
    if (isPrevDisabled || isTransitioning) return;
    setLocalIsTransitioning(true);
    setLocalAnimDirection('out-right');
    const exitDuration = isMobile ? 390 : 540;
    const enterDuration = isMobile ? 440 : 600;

    setTimeout(() => {
      setLocalPage((prev) => Math.max(0, prev - 1));
      setLocalAnimDirection('in-left');
      setTimeout(() => {
        setLocalAnimDirection(null);
        setLocalIsTransitioning(false);
      }, enterDuration);
    }, exitDuration);
  };

  // Dimensions & slot positions based on mode
  // On mobile: 2 cards: width 354px each, height 138px (positioned cleanly below the countertop lip)
  // On desktop: 3 cards: width 226px each, height 126px
  const slotX = isMobile
    ? [136, 510]           // 2 cards: gap 20px, spans X=136 to X=864
    : [141, 387, 633];     // 3 cards: gap 20px, spans X=141 to X=859

  const cardW = isMobile ? 354 : 226;
  const cardH = isMobile ? 142 : 126;
  const cardY = isMobile ? 428 : 438;

  return (
    <g id="desk-grievance-cards-group" className={`desk-grievance-cards ${className}`}>
      <defs>
        {/* Clip Path to keep cards cleanly inside the desk front body */}
        <clipPath id="deskCardsClip">
          <rect x="110" y="420" width="780" height="158" rx="10" />
        </clipPath>

        {/* Card Solid High-Contrast Dark Navy Background Gradient - Zero Blur, High Sharpness */}
        <linearGradient id="cardGlassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0c2357" />
          <stop offset="50%" stopColor="#08183c" />
          <stop offset="100%" stopColor="#040e24" />
        </linearGradient>

        {/* Card Hovered Glassmorphic Background Gradient */}
        <linearGradient id="cardHoverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#13367c" />
          <stop offset="50%" stopColor="#0c2357" />
          <stop offset="100%" stopColor="#061638" />
        </linearGradient>

        {/* Card Top Bevel Reflection */}
        <linearGradient id="cardBevelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
        </linearGradient>

        {/* Icon Circle Radial Glow */}
        <radialGradient id="iconCircleGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#00b4ff" />
          <stop offset="60%" stopColor="#0066de" />
          <stop offset="100%" stopColor="#003580" />
        </radialGradient>

        {/* Action Arrow Button Gradient */}
        <linearGradient id="arrowBtnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066de" />
          <stop offset="100%" stopColor="#00a2ff" />
        </linearGradient>

        {/* Action Arrow Button Hover Gradient */}
        <linearGradient id="arrowBtnHoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Nav Console Button Gradient */}
        <linearGradient id="navBtnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0a1945" />
        </linearGradient>

        <linearGradient id="navBtnHoverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0f2b6a" />
        </linearGradient>
      </defs>

      {/* --- RENDER CARDS ON DESK BODY (CLIPPED & ANIMATED ONE-BY-ONE) --- */}
      <g id="desk-cards-slider-track" clipPath="url(#deskCardsClip)">
        <g id="desk-cards-viewport">
          {currentCards.map((card, idx) => {
            const isHovered = hoveredCard === card.id;
            const currentCardX = slotX[idx];

            // Compute Stagger Order:
            // Next: Card 0 leaves first (0), then Card 1 (1), then Card 2 (2).
            // Prev: Rightmost card leaves first (0), then previous cards!
            const isNextDirection = animDirection === 'out-left' || animDirection === 'in-right';
            const staggerOrder = isNextDirection ? idx : (currentCards.length - 1 - idx);

            // NEVER drop from top. When transitioning: apply horizontal stagger class.
            // On initial page load: apply entrance-card-X (staggered from right).
            // When idle: empty class so it rests quietly!
            const cardAnimClass = animDirection
              ? `anim-stagger-${animDirection}-${staggerOrder}`
              : (hasLoadedInitial ? '' : `entrance-card-${idx}`);

            // Stable key based on page & card id - DOES NOT CHANGE when animDirection resets to null!
            const cardKey = `${card.id}-p${currentPage}-${isMobile ? 'm' : 'd'}`;

            return (
              <g
                key={cardKey}
                id={`grievance-card-${card.id}`}
                className={`cursor-pointer ${cardAnimClass}`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onSelectCard && onSelectCard(card)}
              >
                {/* Card Outer Cast Shadow */}
                <rect
                  x={currentCardX + 2}
                  y={cardY + 4}
                  width={cardW}
                  height={cardH}
                  rx="14"
                  fill="#000000"
                  opacity="0.6"
                />

                {/* Card Main Body Plate - High Contrast Neon Blue Border */}
                <rect
                  x={currentCardX}
                  y={cardY}
                  width={cardW}
                  height={cardH}
                  rx="14"
                  fill={isHovered ? 'url(#cardHoverGrad)' : 'url(#cardGlassGrad)'}
                  stroke={isHovered ? '#38bdf8' : '#0084ff'}
                  strokeWidth={isHovered ? '3.5' : (isMobile ? '2.8' : '2.4')}
                  strokeLinejoin="round"
                />

                {/* Top Gloss Reflection Line */}
                <line
                  x1={currentCardX + 14}
                  y1={cardY + 3}
                  x2={currentCardX + cardW - 14}
                  y2={cardY + 3}
                  stroke="url(#cardBevelGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity={isHovered ? 1 : 0.85}
                />

                {/* --- TOP ROW: ICON ON LEFT, HEADING & SUBTITLE ON RIGHT --- */}
                {/* 1. Icon Circle Badge (Top-Left) */}
                <circle
                  cx={currentCardX + (isMobile ? 34 : 26)}
                  cy={cardY + (isMobile ? 34 : 26)}
                  r={isMobile ? 22 : 15}
                  fill="url(#iconCircleGrad)"
                  stroke="#38bdf8"
                  strokeWidth={isMobile ? '2.2' : '1.6'}
                />

                {/* Icon Graphic (Enlarged on mobile) */}
                {card.iconType === 'document' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <rect x="3" y="1" width="10" height="14" rx="1.5" fill="none" stroke="#ffffff" strokeWidth="1.6" />
                    <line x1="5.5" y1="4.5" x2="10.5" y2="4.5" stroke="#38bdf8" strokeWidth="1.3" />
                    <line x1="5.5" y1="8" x2="10.5" y2="8" stroke="#38bdf8" strokeWidth="1.3" />
                    <circle cx="11.5" cy="11.5" r="2" fill="#ef4444" />
                  </g>
                )}

                {card.iconType === 'shield' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <path d="M 8 1 L 14 3.5 C 14 10, 11.5 13, 8 15 C 4.5 13, 2 10, 2 3.5 Z" fill="#0096ff" stroke="#ffffff" strokeWidth="1.5" />
                    <path d="M 5 7.5 L 7 9.5 L 11 5" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
                  </g>
                )}

                {card.iconType === 'scales' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <line x1="8" y1="2" x2="8" y2="14" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="2.5" y1="4.5" x2="13.5" y2="4.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M 2.5 4.5 L 1 9 L 4 9 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.9" />
                    <path d="M 13.5 4.5 L 12 9 L 15 9 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.9" />
                    <line x1="4.5" y1="14" x2="11.5" y2="14" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
                  </g>
                )}

                {card.iconType === 'broadcast' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <circle cx="8" cy="8" r="2" fill="#ffffff" />
                    <path d="M 4.5 4.5 C 2 7, 2 9, 4.5 11.5" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 11.5 4.5 C 14 7, 14 9, 11.5 11.5" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                )}

                {card.iconType === 'integrity' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <circle cx="8" cy="8" r="6.5" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                    <polygon points="8,3.5 9.5,6.5 12.5,6.5 10,8.5 11,11.5 8,9.5 5,11.5 6,8.5 3.5,6.5 6.5,6.5" fill="#38bdf8" />
                  </g>
                )}

                {card.iconType === 'reply' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <path d="M 2.5 2.5 H 13.5 A 1.8 1.8 0 0 1 15.3 4.3 V 9.7 A 1.8 1.8 0 0 1 13.5 11.5 H 7 L 3.5 14 V 11.5 H 2.5 A 1.8 1.8 0 0 1 0.7 9.7 V 4.3 A 1.8 1.8 0 0 1 2.5 2.5 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                    <line x1="4" y1="6" x2="11" y2="6" stroke="#38bdf8" strokeWidth="1.3" strokeLinecap="round" />
                  </g>
                )}

                {card.iconType === 'legal' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <rect x="3.5" y="1.5" width="9" height="4.5" rx="1" fill="#ffffff" transform="rotate(-30 8 3.75)" />
                    <line x1="8" y1="3.8" x2="12.5" y2="11.5" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="3" y1="13.5" x2="13.5" y2="13.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                )}

                {card.iconType === 'safety' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <path d="M 8 3 C 5 0.5, 1.5 3, 3.5 7 L 8 13 L 12.5 7 C 14.5 3, 11 0.5, 8 3 Z" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.2" />
                  </g>
                )}

                {card.iconType === 'copyright' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <circle cx="8" cy="8" r="6" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                    <path d="M 9.5 5.5 C 8.5 4.8, 6 4.8, 6 8 C 6 11.2, 8.5 11.2, 9.5 10.5" fill="none" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" />
                  </g>
                )}

                {card.iconType === 'election' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <rect x="2.5" y="5" width="11" height="9" rx="1.5" fill="none" stroke="#ffffff" strokeWidth="1.4" />
                    <path d="M 5 5 L 8 1.5 L 11 5" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="5.5" y1="9" x2="10.5" y2="9" stroke="#38bdf8" strokeWidth="1.4" strokeLinecap="round" />
                  </g>
                )}

                {card.iconType === 'privacy' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <rect x="3.5" y="6.5" width="9" height="7.5" rx="1.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.2" />
                    <path d="M 5 6.5 V 4 C 5 2.5, 11 2.5, 11 4 V 6.5" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="8" cy="10" r="1.2" fill="#ffffff" />
                  </g>
                )}

                {card.iconType === 'community' && (
                  <g transform={isMobile ? `translate(${currentCardX + 23}, ${cardY + 23}) scale(1.35)` : `translate(${currentCardX + 18}, ${cardY + 18})`}>
                    <circle cx="7" cy="4.5" r="2.2" fill="#ffffff" />
                    <path d="M 3 12 C 3 9.5, 11 9.5, 11 12" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="12" cy="5.5" r="1.8" fill="#38bdf8" />
                    <path d="M 10 12 C 10 10.5, 14 10.5, 14 12" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />
                  </g>
                )}

                {/* 2. Heading & Subtitle ON THE RIGHT SIDE OF ICON */}
                {/* Title: 23px Bold on mobile, Pure White */}
                <text
                  x={currentCardX + (isMobile ? 68 : 48)}
                  y={cardY + (isMobile ? 29 : 22)}
                  fill="#ffffff"
                  fontSize={isMobile ? '23' : '12'}
                  fontWeight="900"
                  fontFamily="'Montserrat', system-ui, sans-serif"
                  letterSpacing="0.1"
                  textRendering="optimizeLegibility"
                >
                  {card.title}
                </text>

                {/* Subtitle: 15.5px on mobile, Electric Sky Blue */}
                <text
                  x={currentCardX + (isMobile ? 68 : 48)}
                  y={cardY + (isMobile ? 49 : 35)}
                  fill="#38bdf8"
                  fontSize={isMobile ? '15.5' : '9.5'}
                  fontWeight="800"
                  fontFamily="'Montserrat', system-ui, sans-serif"
                  letterSpacing="0.2"
                  textRendering="optimizeLegibility"
                >
                  {card.name}
                </text>

                {/* Subtle Divider Line */}
                <line
                  x1={currentCardX + 16}
                  y1={cardY + (isMobile ? 60 : 46)}
                  x2={currentCardX + cardW - 16}
                  y2={cardY + (isMobile ? 60 : 46)}
                  stroke="#0050ba"
                  strokeWidth={isMobile ? '1.5' : '1'}
                  opacity="0.5"
                />

                {/* --- MIDDLE ROW: SHORT 2-LINE DESCRIPTION (EXTRA LARGE & CRISP) --- */}
                {/* Desc 1: 16.5px on mobile, Pure White */}
                <text
                  x={currentCardX + 16}
                  y={cardY + (isMobile ? 85 : 62)}
                  fill="#ffffff"
                  fontSize={isMobile ? '16.5' : '9.2'}
                  fontWeight="700"
                  fontFamily="'Montserrat', system-ui, sans-serif"
                  letterSpacing="0.1"
                  textRendering="optimizeLegibility"
                >
                  {card.desc1}
                </text>
                {/* Desc 2: 16px on mobile, Bright Off-White */}
                <text
                  x={currentCardX + 16}
                  y={cardY + (isMobile ? 109 : 76)}
                  fill="#f8fafc"
                  fontSize={isMobile ? '16' : '9'}
                  fontWeight="600"
                  fontFamily="'Montserrat', system-ui, sans-serif"
                  letterSpacing="0.1"
                  textRendering="optimizeLegibility"
                >
                  {card.desc2}
                </text>

                {/* --- BOTTOM ROW: ACTION ARROW BUTTON ON RIGHT --- */}
                <g transform={`translate(${currentCardX + cardW - (isMobile ? 36 : 30)}, ${cardY + cardH - (isMobile ? 30 : 26)})`}>
                  <circle
                    cx="14"
                    cy="14"
                    r={isMobile ? '14' : '11'}
                    fill={isHovered ? 'url(#arrowBtnHoverGrad)' : 'url(#arrowBtnGrad)'}
                    stroke="#0c2357"
                    strokeWidth={isMobile ? '1.5' : '1.2'}
                  />
                  <path
                    d={isMobile
                      ? "M 10 14 L 18 14 M 14.5 10.5 L 18 14 L 14.5 17.5"
                      : "M 8.5 12 L 15.5 12 M 12.5 9 L 15.5 12 L 12.5 15"}
                    stroke="#ffffff"
                    strokeWidth={isMobile ? '2.2' : '1.8'}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            );
          })}
        </g>
      </g>

      {/* --- NICHE TABLE NAV CONTROLS (MOVED DOWN TO Y=582) --- */}
      {/* PREVIOUS ON FAR LEFT (X=141), NEXT ON FAR RIGHT (X=763), PAGE X OF TOTAL IN MIDDLE (X=500) */}
      <g id="desk-pagination-controls" className="entrance-pagination">
        {/* Previous Button (Far Left End - Inactive when currentPage === 0) */}
        <g
          id="btn-desk-prev"
          className={isPrevDisabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer transition-all duration-150'}
          onMouseEnter={() => !isPrevDisabled && setHoveredBtn('prev')}
          onMouseLeave={() => setHoveredBtn(null)}
          onClick={handlePrev}
        >
          {/* Shadow */}
          <rect x="142" y="583" width="96" height="26" rx="13" fill="#000000" opacity="0.4" />
          {/* Main button */}
          <rect
            x="141"
            y="582"
            width="96"
            height="26"
            rx="13"
            fill={isPrevDisabled ? '#061026' : (hoveredBtn === 'prev' ? 'url(#navBtnHoverGrad)' : 'url(#navBtnGrad)')}
            stroke={isPrevDisabled ? '#1e293b' : (hoveredBtn === 'prev' ? '#38bdf8' : '#0284c7')}
            strokeWidth="1.8"
          />
          <text
            x="189"
            y="599"
            textAnchor="middle"
            fill={isPrevDisabled ? '#475569' : '#ffffff'}
            fontSize="10.5"
            fontWeight="900"
            fontFamily="'Montserrat', system-ui, sans-serif"
            letterSpacing="0.8"
            textRendering="optimizeLegibility"
          >
            ◀ PREVIOUS
          </text>
        </g>

        {/* Middle Page Number Display: PAGE X OF TOTAL */}
        <g id="desk-page-middle-display">
          {/* Middle Glass Container */}
          <rect
            x="410"
            y="582"
            width="180"
            height="26"
            rx="13"
            fill="#030f28"
            stroke="#0072ea"
            strokeWidth="1.6"
          />
          {/* Subtle LED Status indicators */}
          <circle cx="426" cy="595" r="3" fill="#38bdf8" />
          <circle cx="426" cy="595" r="5" fill="#38bdf8" opacity="0.3" />
          <circle cx="574" cy="595" r="3" fill="#38bdf8" />
          <circle cx="574" cy="595" r="5" fill="#38bdf8" opacity="0.3" />
          {/* Page Counter Text */}
          <text
            x="500"
            y="599"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="11"
            fontWeight="900"
            fontFamily="'Montserrat', system-ui, sans-serif"
            letterSpacing="1.4"
            textRendering="optimizeLegibility"
          >
            PAGE {currentPage + 1} OF {totalPages}
          </text>
        </g>

        {/* Next Button (Far Right End - Inactive when currentPage === totalPages - 1) */}
        <g
          id="btn-desk-next"
          className={isNextDisabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer transition-all duration-150'}
          onMouseEnter={() => !isNextDisabled && setHoveredBtn('next')}
          onMouseLeave={() => setHoveredBtn(null)}
          onClick={handleNext}
        >
          {/* Shadow */}
          <rect x="764" y="583" width="96" height="26" rx="13" fill="#000000" opacity="0.4" />
          {/* Main button */}
          <rect
            x="763"
            y="582"
            width="96"
            height="26"
            rx="13"
            fill={isNextDisabled ? '#061026' : (hoveredBtn === 'next' ? 'url(#navBtnHoverGrad)' : 'url(#navBtnGrad)')}
            stroke={isNextDisabled ? '#1e293b' : (hoveredBtn === 'next' ? '#38bdf8' : '#0284c7')}
            strokeWidth="1.8"
          />
          <text
            x="811"
            y="599"
            textAnchor="middle"
            fill={isNextDisabled ? '#475569' : '#ffffff'}
            fontSize="10.5"
            fontWeight="900"
            fontFamily="'Montserrat', system-ui, sans-serif"
            letterSpacing="0.8"
            textRendering="optimizeLegibility"
          >
            NEXT ▶
          </text>
        </g>
      </g>
    </g>
  );
};

/* ============================================================================
 * SECTION 8: NEWS DESK
 * ============================================================================ */
/**
 * NewsDesk - Broadcasting Studio Main Desk with Tall Body & Natural Height Countertop.
 * Features:
 * - 230px tall front navy body panel (Y=386 to Y=616)
 * - 3 Embedded Grievance Redressal Cards (Editorial Grievance, Fake News Buster, Citizen Redressal)
 * - 984px wide (spans almost entire 1000px canvas)
 * - Countertop at natural height (Y=292 to Y=420) so presenters are NEVER submerged
 * - Thicker, chunkier 3D bevels (9px border on lip, 7.5px on structural panels)
 * - Flared electric-azure 3D side fins with specular reflection highlights (230px tall)
 * - Substantial deep navy trapezoidal façade with double architectural studio trim lines
 * - Heavy tiered electric-blue and navy base plinth (Y=612 to Y=662)
 * - Deep floor cast shadow (Y=656)
 */
export const NewsDesk = ({
  onSelectCard,
  currentPage,
  totalPages,
  cardsPerPage,
  isMobile,
  animDirection,
  isTransitioning,
  handleNext,
  handlePrev,
  className = ''
}) => {
  return (
    <g id="broadcast-news-desk" className={`news-desk ${className}`}>
      <defs>
        {/* Tabletop Glossy Ice-Blue Gradient */}
        <linearGradient id="deskTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#f0f7ff" />
          <stop offset="65%" stopColor="#c5e0fd" />
          <stop offset="100%" stopColor="#91c4fc" />
        </linearGradient>

        {/* Tabletop Front Lip / Bevel Royal Blue Gradient */}
        <linearGradient id="deskLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0084ff" />
          <stop offset="25%" stopColor="#0066de" />
          <stop offset="80%" stopColor="#0043ad" />
          <stop offset="100%" stopColor="#002b78" />
        </linearGradient>

        {/* Desk Front Main Body Deep Navy Gradient (Rich Depth on Tall 230px Panel) */}
        <linearGradient id="deskBodyNavyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#143477" />
          <stop offset="40%" stopColor="#0e265c" />
          <stop offset="100%" stopColor="#08183c" />
        </linearGradient>

        {/* Side Wings Vivid Electric Azure Gradient */}
        <linearGradient id="deskSideAzureGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0096ff" />
          <stop offset="50%" stopColor="#0072ea" />
          <stop offset="100%" stopColor="#0050ba" />
        </linearGradient>

        {/* Plinth Stepped Ledge Vivid Blue Gradient */}
        <linearGradient id="plinthBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0084ff" />
          <stop offset="35%" stopColor="#006ae0" />
          <stop offset="100%" stopColor="#0047a8" />
        </linearGradient>
      </defs>

      {/* --- DESK FLOOR CAST SHADOW --- */}
      <ellipse
        cx="500"
        cy="656"
        rx="485"
        ry="22"
        fill="#000000"
        opacity="0.88"
      />

      {/* ========================================================= */}
      {/* 1. TIERED BASE / PLINTH (SOLID STUDIO FOUNDATION LEDGE)   */}
      {/* ========================================================= */}
      <g id="desk-base-plinth">
        {/* Bottom Dark Navy Base Slab (X=66 to X=934, Y=636..662) */}
        <path
          d="M 66 636 
             L 934 636 
             C 950 636, 958 644, 952 654 
             C 946 660, 934 662, 920 662 
             L 80 662 
             C 66 662, 54 660, 48 654 
             C 42 644, 50 636, 66 636 Z"
          fill="#06122d"
          stroke="#111111"
          strokeWidth="7.5"
          strokeLinejoin="round"
        />

        {/* Upper Stepped Electric-Blue Moulding Tier (X=78 to X=922, Y=612..640) */}
        <path
          d="M 78 612 
             L 922 612 
             C 934 612, 942 618, 938 628 
             L 932 640 
             L 68 640 
             L 62 628 
             C 58 618, 66 612, 78 612 Z"
          fill="url(#plinthBlueGrad)"
          stroke="#111111"
          strokeWidth="7.5"
          strokeLinejoin="round"
        />

        {/* Specular White Highlight line on plinth edge */}
        <line
          x1="84"
          y1="616"
          x2="916"
          y2="616"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.9"
        />
      </g>

      {/* ========================================================= */}
      {/* 2. TALL MAIN DESK BODY FAÇADE & WIDE 3D SIDE WINGS        */}
      {/* (230px TALL BODY: Y=386 to Y=616)                        */}
      {/* ========================================================= */}
      <g id="desk-front-façade">
        {/* Left 3D Wing / Bracket Outer Blue Fin (Flares X=12..116, Y=386..616 - 230px TALL!) */}
        <polygon
          points="12,386 116,386 138,616 70,616"
          fill="url(#deskSideAzureGrad)"
          stroke="#111111"
          strokeWidth="7.5"
          strokeLinejoin="round"
        />

        {/* Left Wing Bevel Reflection Stripe */}
        <polygon
          points="22,394 68,394 104,608 76,608"
          fill="#38bdf8"
          opacity="0.45"
        />

        {/* Right 3D Wing / Bracket Outer Blue Fin (Flares X=884..988, Y=386..616 - 230px TALL!) */}
        <polygon
          points="988,386 884,386 862,616 930,616"
          fill="url(#deskSideAzureGrad)"
          stroke="#111111"
          strokeWidth="7.5"
          strokeLinejoin="round"
        />

        {/* Right Wing Bevel Reflection Stripe */}
        <polygon
          points="978,394 932,394 896,608 924,608"
          fill="#38bdf8"
          opacity="0.45"
        />

        {/* Central Trapezoidal Front Navy Body (230px TALL: Y=386 to Y=616) */}
        <polygon
          points="106,386 894,386 870,616 130,616"
          fill="url(#deskBodyNavyGrad)"
          stroke="#111111"
          strokeWidth="7.5"
          strokeLinejoin="round"
        />

        {/* Sleek Studio Architectural Trim Lines on the Tall Body */}
        <line
          x1="134"
          y1="400"
          x2="866"
          y2="400"
          stroke="#0072ea"
          strokeWidth="4"
          opacity="0.8"
        />
        <line
          x1="138"
          y1="500"
          x2="862"
          y2="500"
          stroke="#0072ea"
          strokeWidth="2.5"
          opacity="0.3"
        />
        {/* Embedded Grievance Redressal Cards (Fitted seamlessly on the tall body panel) */}
        <GrievanceCards
          onSelectCard={onSelectCard}
          currentPage={currentPage}
          totalPages={totalPages}
          cardsPerPage={cardsPerPage}
          isMobile={isMobile}
          animDirection={animDirection}
          isTransitioning={isTransitioning}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </g>

      {/* ========================================================= */}
      {/* 3. CURVED COUNTERTOP (TABLETOP AT NATURAL RESTING LEVEL)  */}
      {/* ========================================================= */}
      <g id="desk-countertop">
        {/* Tabletop Front Curved Lip (Deep Royal Blue Bevel - 984px Wide) */}
        <path
          d="M 8 368 
             C 6 344, 26 330, 75 322 
             C 195 298, 805 298, 925 322 
             C 974 330, 994 344, 992 368 
             C 990 392, 960 404, 915 410 
             C 792 420, 208 420, 85 410 
             C 40 404, 10 392, 8 368 Z"
          fill="url(#deskLipGrad)"
          stroke="#111111"
          strokeWidth="9"
          strokeLinejoin="round"
        />

        {/* Tabletop Top Surface (Glossy Icy-White/Cyan Surface) */}
        <path
          d="M 18 356 
             C 16 334, 36 322, 82 314 
             C 198 292, 802 292, 918 314 
             C 964 322, 984 334, 982 356 
             C 980 376, 954 388, 912 394 
             C 790 404, 210 404, 88 394 
             C 46 388, 20 376, 18 356 Z"
          fill="url(#deskTopGrad)"
          stroke="#111111"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Top Surface Specular Reflection Highlight Curve */}
        <path
          d="M 68 324 
             C 196 302, 804 302, 932 324"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Front Lip Specular Edge Highlight Curve */}
        <path
          d="M 94 402 
             C 218 412, 782 412, 906 402"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>
    </g>
  );
};

/* ============================================================================
 * SECTION 9: NEWS STUDIO SCENE
 * ============================================================================ */
/**
 * NewsStudio - Master News Broadcasting Studio Scene.
 * Clean, distraction-free composition on a pure white background.
 * Features:
 * - News Desk with 230px Tall Navy Front Body (Y=386 to Y=616)
 * - Male Anchor with thick bent arms resting comfortably on desk (fully visible, NOT submerged)
 * - Female Anchor with thick bent arms resting comfortably on desk (fully visible, NOT submerged)
 * - Custom "CR REAL TIME NEWS CHANNEL" Folded Newspaper
 * - Laptop branded with transparent "CR REAL TIME" logo emblem
 * - Studio Capsule Microphones with generous breathing room (no collision with presenters)
 * - Executive Studio Chairs properly framing presenters
 */
export const NewsStudio = ({
  onSelectCard,
  showMicFlags = true,
  currentPage,
  totalPages,
  cardsPerPage,
  isMobile,
  animDirection,
  isTransitioning,
  handleNext,
  handlePrev,
  className = ''
}) => {
  return (
    <div className={`relative flex items-center justify-center w-full ${className}`}>
      {/* Studio Scalable Stage Container */}
      <div className="relative w-full max-w-5xl aspect-[100/68] flex items-center justify-center">
        {/* MASTER SVG SCENE */}
        <svg
          viewBox="0 0 1000 680"
          className="w-full h-full select-none overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ======================================================== */}
          {/* LAYER 1: STUDIO CHAIRS (Staggered Entrance 4)            */}
          {/* ======================================================== */}
          <g className="entrance-chairs">
            <StudioChairs />
          </g>

          {/* ======================================================== */}
          {/* LAYER 2: NEWS BROADCASTING DESK WITH TALL FRONT BODY     */}
          {/* (Staggered Entrance 5)                                   */}
          {/* ======================================================== */}
          <g className="entrance-desk">
            <NewsDesk
              onSelectCard={onSelectCard}
              currentPage={currentPage}
              totalPages={totalPages}
              cardsPerPage={cardsPerPage}
              isMobile={isMobile}
              animDirection={animDirection}
              isTransitioning={isTransitioning}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </g>

          {/* ======================================================== */}
          {/* LAYER 3: SEAMLESS ANCHORS (Staggered Entrance 6 & 7)     */}
          {/* ======================================================== */}
          <g className="entrance-male-anchor">
            <MaleAnchor showFeatures={true} />
          </g>
          <g className="entrance-female-anchor">
            <FemaleAnchor showFeatures={true} />
          </g>

          {/* ======================================================== */}
          {/* LAYER 4: PROPS WITH GENEROUS BREATHING ROOM              */}
          {/* (Staggered Entrance 8, 9, 10, 11)                        */}
          {/* ======================================================== */}
          {/* Left Microphone */}
          <g className="entrance-prop-mic-left">
            <Microphone
              side="left"
              x={350}
              y={370}
              scale={0.84}
              showFlag={showMicFlags}
            />
          </g>

          {/* Branded Center Newspaper */}
          <g className="entrance-prop-newspaper">
            <Newspaper
              x={435}
              y={366}
              scale={0.70}
            />
          </g>

          {/* Branded Studio Laptop */}
          <g className="entrance-prop-laptop">
            <Laptop
              x={560}
              y={365}
              scale={0.76}
            />
          </g>

          {/* Right Microphone */}
          <g className="entrance-prop-mic-right">
            <Microphone
              side="right"
              x={650}
              y={370}
              scale={0.84}
              showFlag={showMicFlags}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

/* ============================================================================
 * SECTION 10: MASTER GRIEVANCE PORTAL PAGE & INTERACTIVE SYSTEM
 * ============================================================================ */
export const Grievance = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [animDirection, setAnimDirection] = useState(null); // 'out-left' | 'in-right' | 'out-right' | 'in-left'
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Responsive mode: on mobile (<640px), show 2 cards per page (6 pages). On desktop (>=640px), show 3 cards (4 pages).
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsPerPage = isMobile ? 2 : 3;
  const totalPages = Math.ceil(allGrievanceCards.length / cardsPerPage); // 6 on mobile, 4 on desktop

  // Keep currentPage valid when switching between desktop and mobile
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(totalPages - 1);
    }
  }, [totalPages, currentPage]);

  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage === totalPages - 1;

  // Next Page Handler: Staggered 1-by-1 Exit (Left) & Staggered 1-by-1 Enter (Right)
  const handleNext = () => {
    if (isNextDisabled || isTransitioning) return;
    setIsTransitioning(true);
    setAnimDirection('out-left');
    const exitDuration = isMobile ? 390 : 540;
    const enterDuration = isMobile ? 440 : 600;

    setTimeout(() => {
      setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
      setAnimDirection('in-right');
      setTimeout(() => {
        setAnimDirection(null);
        setIsTransitioning(false);
      }, enterDuration);
    }, exitDuration);
  };

  // Prev Page Handler: Staggered 1-by-1 Exit (Right) & Staggered 1-by-1 Enter (Left)
  const handlePrev = () => {
    if (isPrevDisabled || isTransitioning) return;
    setIsTransitioning(true);
    setAnimDirection('out-right');
    const exitDuration = isMobile ? 390 : 540;
    const enterDuration = isMobile ? 440 : 600;

    setTimeout(() => {
      setCurrentPage((prev) => Math.max(0, prev - 1));
      setAnimDirection('in-left');
      setTimeout(() => {
        setAnimDirection(null);
        setIsTransitioning(false);
      }, enterDuration);
    }, exitDuration);
  };

  const handleSelectCard = (card) => {
    setActiveModal(card);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-start text-slate-800">
      {/* Embedded Complete Studio Animations & Typography Styles */}
      <GrievanceStyles />
      {/* ======================================================== */}
      {/* 1. TOP HEADER SECTION: GRIEVANCE HEADING & DESCRIPTION   */}
      {/* ======================================================== */}
      <header className="w-full max-w-5xl mx-auto px-4 pt-5 sm:pt-12 pb-3 sm:pb-6 text-center">
        {/* Official Authority Badge (Staggered Entrance 1) */}
        <div className="entrance-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          CR Real Time News Channel • Public Ombudsman & Grievance Cell
        </div>

        {/* Main Heading: GRIEVANCE (Staggered Entrance 2) */}
        <h1 className="entrance-heading text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-2">
          Grievance
        </h1>

        {/* Compact, smaller font size description (Staggered Entrance 3) */}
        <p className="entrance-desc max-w-xl mx-auto text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
          Official Grievance portal of CR Real Time News Channel. Submit your concerns regarding broadcast accuracy, report fake news, or seek prompt editorial resolution directly from our Ombudsman.
        </p>
      </header>

      {/* ======================================================== */}
      {/* 2. NEWS STUDIO BROADCASTING SCENE WITH DESK CARDS       */}
      {/* ======================================================== */}
      <main className="w-full max-w-6xl px-0.5 sm:px-6 pb-12 flex flex-col items-center">
        <NewsStudio
          onSelectCard={handleSelectCard}
          currentPage={currentPage}
          totalPages={totalPages}
          cardsPerPage={cardsPerPage}
          isMobile={isMobile}
          animDirection={animDirection}
          isTransitioning={isTransitioning}
          handleNext={handleNext}
          handlePrev={handlePrev}
          className="w-full"
        />
      </main>

      {/* ======================================================== */}
      {/* 3. INTERACTIVE GRIEVANCE MODAL ON CARD CLICK             */}
      {/* ======================================================== */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-1.5 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <img src={logoUrl} alt="CR Real Time Logo" className="w-12 h-12 object-contain drop-shadow-sm shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Grievance Redressal
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                  {activeModal.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6">
              You selected <strong>{activeModal.name}</strong>. Our grievance redressal officers acknowledge all submissions within 24 hours and issue a formal resolution within 48 hours.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  alert(`Proceeding to ${activeModal.title} official form.`);
                  setActiveModal(null);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
              >
                Proceed with {activeModal.title}
                <span>→</span>
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const GrievancePage = Grievance;
export default Grievance;