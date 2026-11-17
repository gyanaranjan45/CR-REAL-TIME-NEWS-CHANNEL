/**
 * Notebook 10-Page Dataset & Color Configuration
 * Contains all static tab configurations and independent page content
 * for all 10 pages (5 two-page spreads).
 */

// 5 Color Sections configuration for Front Cover Tabs and Numbers
export const NOTEBOOK_TABS_DATA = [
  {
    id: 1,
    num: 1,
    word: 'ONE',
    colorName: 'blue',
    bgClass: 'bg-[#3ca3eb]',
    borderLeftClass: 'border-l-[#3ca3eb]',
    textClass: 'text-[#2b8cd0]',
    accentClass: 'bg-[#2b8cd0]',
    shadowColor: 'rgba(60,163,235,0.4)',
  },
  {
    id: 2,
    num: 2,
    word: 'TWO',
    colorName: 'orange',
    bgClass: 'bg-[#eb6134]',
    borderLeftClass: 'border-l-[#eb6134]',
    textClass: 'text-[#d64e22]',
    accentClass: 'bg-[#d64e22]',
    shadowColor: 'rgba(235,97,52,0.4)',
  },
  {
    id: 3,
    num: 3,
    word: 'THREE',
    colorName: 'yellow',
    bgClass: 'bg-[#f4c82b]',
    borderLeftClass: 'border-l-[#f4c82b]',
    textClass: 'text-[#cfa412]',
    accentClass: 'bg-[#cfa412]',
    shadowColor: 'rgba(244,200,43,0.4)',
  },
  {
    id: 4,
    num: 4,
    word: 'FOUR',
    colorName: 'green',
    bgClass: 'bg-[#43b24c]',
    borderLeftClass: 'border-l-[#43b24c]',
    textClass: 'text-[#319b3a]',
    accentClass: 'bg-[#319b3a]',
    shadowColor: 'rgba(67,178,76,0.4)',
  },
  {
    id: 5,
    num: 5,
    word: 'FIVE',
    colorName: 'magenta',
    bgClass: 'bg-[#98246f]',
    borderLeftClass: 'border-l-[#98246f]',
    textClass: 'text-[#821c5d]',
    accentClass: 'bg-[#821c5d]',
    shadowColor: 'rgba(152,36,111,0.4)',
  },
];

// Tab Navigator & Section Index Definitions
export const NOTEBOOK_TABS = [
  {
    id: 1,
    num: 1,
    word: 'ONE',
    spreadIndex: 0,
    pageLeft: '01',
    pageRight: '02',
    colorName: 'blue',
    bgClass: 'bg-[#3ca3eb]',
    borderLeftClass: 'border-l-[#3ca3eb]',
    textClass: 'text-[#2b8cd0]',
    accentClass: 'bg-[#2b8cd0]',
  },
  {
    id: 2,
    num: 2,
    word: 'TWO',
    spreadIndex: 1,
    pageLeft: '03',
    pageRight: '04',
    colorName: 'orange',
    bgClass: 'bg-[#eb6134]',
    borderLeftClass: 'border-l-[#eb6134]',
    textClass: 'text-[#d64e22]',
    accentClass: 'bg-[#d64e22]',
  },
  {
    id: 3,
    num: 3,
    word: 'THREE',
    spreadIndex: 2,
    pageLeft: '05',
    pageRight: '06',
    colorName: 'yellow',
    bgClass: 'bg-[#f4c82b]',
    borderLeftClass: 'border-l-[#f4c82b]',
    textClass: 'text-[#cfa412]',
    accentClass: 'bg-[#cfa412]',
  },
  {
    id: 4,
    num: 4,
    word: 'FOUR',
    spreadIndex: 3,
    pageLeft: '07',
    pageRight: '08',
    colorName: 'green',
    bgClass: 'bg-[#43b24c]',
    borderLeftClass: 'border-l-[#43b24c]',
    textClass: 'text-[#319b3a]',
    accentClass: 'bg-[#319b3a]',
  },
  {
    id: 5,
    num: 5,
    word: 'FIVE',
    spreadIndex: 4,
    pageLeft: '09',
    pageRight: '10',
    colorName: 'magenta',
    bgClass: 'bg-[#98246f]',
    borderLeftClass: 'border-l-[#98246f]',
    textClass: 'text-[#821c5d]',
    accentClass: 'bg-[#821c5d]',
  },
];

// Spreads dataset for 10 Pages (5 Spreads)
export const NOTEBOOK_SPREADS = [
  // Spread 0: Pages 01 & 02 (Section 1: Blue)
  {
    spreadIndex: 0,
    tabId: 1,
    leftPage: {
      pageNumber: '01',
      category: 'COVER ARCHITECTURE',
      subtitle: '3D Isometric Notebook Blueprint',
      caption: 'Figure 1.1 — 3D Hardcover Isometric Model',
      visualType: 'cover',
      tag: 'BLUE SECTION',
    },
    rightPage: {
      pageNumber: '02',
      badge: 'BLUE SECTION • TAB 01',
      title: 'Front Cover Geometry & Proportions',
      date: 'Nov 03, 2026',
      description:
        'The vertical portrait notebook features smooth matte cyan-aqua surfacing, rounded corners, and authentic 3D edge bevels. Engineered at a natural three-quarter perspective to preserve dominant visual hierarchy.',
      specs: [
        { label: 'Cover Tone', value: '#64c8d3 (Turquoise)' },
        { label: 'Surface Finish', value: 'Smooth Matte Laminate' },
        { label: 'Spine Edge', value: 'Left Metallic Spiral' },
        { label: 'Aspect Ratio', value: 'Portrait Ratio 5 : 7' },
      ],
      notes: [
        'Vibrant turquoise matte front cover with physical board thickness.',
        'Precision rounded corners with specular top highlight bevels.',
        'Dominant visual element with subtle studio contact shadows.',
      ],
    },
  },

  // Spread 1: Pages 03 & 04 (Section 2: Orange)
  {
    spreadIndex: 1,
    tabId: 2,
    leftPage: {
      pageNumber: '03',
      category: 'SPIRAL BINDING SYSTEM',
      subtitle: 'Twin-Wire Silver Mechanism',
      caption: 'Figure 2.1 — Metallic Ring & Punch Slot Cross-Section',
      visualType: 'spiral',
      tag: 'ORANGE SECTION',
    },
    rightPage: {
      pageNumber: '04',
      badge: 'ORANGE SECTION • TAB 02',
      title: 'Twin-Wire Metallic Spine Mechanics',
      date: 'Nov 03, 2026',
      description:
        'Along the left spine, 15 evenly spaced silver metallic rings are constructed from multi-layered cylindrical gradient bands. Each loop enters rectangular punched holes with realistic shadow occlusion.',
      specs: [
        { label: 'Ring Count', value: '15 Twin Wire Loops' },
        { label: 'Material', value: 'Brushed Silver Chrome' },
        { label: 'Binding Slots', value: 'Rectangular Die-Cut' },
        { label: '3D Extrusion', value: '12px Front / -14px Rear' },
      ],
      notes: [
        'Curved wire-like loops with specular core reflection highlights.',
        'Deep dark binding holes with interior cast shadows.',
        'Continuous physical loop wrapping cleanly around notebook spine.',
      ],
    },
  },

  // Spread 2: Pages 05 & 06 (Section 3: Yellow)
  {
    spreadIndex: 2,
    tabId: 3,
    leftPage: {
      pageNumber: '05',
      category: 'INTERACTIVE WORKSPACE',
      subtitle: 'Section 3 Runtime Architecture',
      caption: 'Figure 3.1 — Framer Motion 3D Page Engine Graph',
      visualType: 'workspace',
      tag: 'YELLOW SECTION',
    },
    rightPage: {
      pageNumber: '06',
      badge: 'YELLOW SECTION • TAB 03',
      title: 'Section 3 Physical Page-Turn Engine',
      date: 'Nov 03, 2026',
      description:
        'This active workspace executes real-time 3D page curl and flip transitions. Clicking Next or Prev rotates physical page leaves around the center spiral binding with dynamic shadows and paper bending illusions.',
      specs: [
        { label: 'Directory', value: 'section 3 Workspace' },
        { label: 'Motion Engine', value: 'Framer Motion 3D' },
        { label: 'Flip Physics', value: '750ms Cubic-Bezier Curve' },
        { label: 'Display Mode', value: '100dvh Zero-Scroll Lock' },
      ],
      notes: [
        'Next button flips right page leaf across center spine to the left.',
        'Previous button flips left page leaf across center spine to the right.',
        'Paper curl illusion with dynamic ambient shadow during rotation.',
      ],
    },
  },

  // Spread 3: Pages 07 & 08 (Section 4: Green)
  {
    spreadIndex: 3,
    tabId: 4,
    leftPage: {
      pageNumber: '07',
      category: 'VIEWPORT ADAPTATION',
      subtitle: 'Responsive Multi-Device Layout',
      caption: 'Figure 4.1 — Viewport Matrix & Auto-Scale Bounds',
      visualType: 'responsive',
      tag: 'GREEN SECTION',
    },
    rightPage: {
      pageNumber: '08',
      badge: 'GREEN SECTION • TAB 04',
      title: 'Adaptive Viewport & Zero-Scroll System',
      date: 'Nov 03, 2026',
      description:
        'Strict viewport constraints (72vh max-height) ensure the notebook fits seamlessly across all laptop, desktop, tablet, and mobile screens without generating vertical or horizontal scrollbars.',
      specs: [
        { label: 'Viewport Unit', value: '72vh Viewport Lock' },
        { label: 'Spread Bounds', value: '540px Height x 770px Width' },
        { label: 'Overflow Rule', value: 'Strict overflow-hidden' },
        { label: 'Aspect Ratio', value: '10 : 7 Dual-Page Spread' },
      ],
      notes: [
        'No scrollbars appear on any screen size or orientation.',
        'Dual-page spread scales proportionally with aspect-ratio utilities.',
        'Soft studio ambient lighting and floor contact shadows preserved.',
      ],
    },
  },

  // Spread 4: Pages 09 & 10 (Section 5: Magenta)
  {
    spreadIndex: 4,
    tabId: 5,
    leftPage: {
      pageNumber: '09',
      category: 'PRODUCTION AUDIT',
      subtitle: 'Code Integrity & Build Certification',
      caption: 'Figure 5.1 — 100% Tailwind & JSX Verified Seal',
      visualType: 'audit',
      tag: 'MAGENTA SECTION',
    },
    rightPage: {
      pageNumber: '10',
      badge: 'MAGENTA SECTION • TAB 05',
      title: 'Asset Integrity & Production Audit',
      date: 'Nov 03, 2026',
      description:
        'The entire application is verified for optimal production bundling. All shapes, bevels, tabs, arrows, spirals, and diagrams are constructed with pure React JSX elements, Framer Motion, and Tailwind CSS.',
      specs: [
        { label: 'Framework', value: 'React 19 + Vite 6' },
        { label: 'Styling', value: 'Tailwind CSS v3.4.17' },
        { label: 'Animation', value: 'Framer Motion 3D' },
        { label: 'Asset Count', value: '0 External Images (Pure JSX)' },
      ],
      notes: [
        'Zero custom CSS files; strictly scoped Tailwind utility classes.',
        'Hardware-accelerated 3D transforms with preserve-3d and origin-left.',
        'Production build compiled with zero warnings and optimized chunks.',
      ],
    },
  },
];
