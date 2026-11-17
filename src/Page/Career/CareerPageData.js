/**
 * Mathematically aligned 6-row keyboard layout for vintage Compaq Contura / LTE
 * Symmetrically aligned with widened base & lid - DEAD CENTER AT X = 720.
 * Key weights across all rows sum to exactly 16.20 units for consistent alignment.
 */
export const KEYBOARD_CONFIG = [
  {
    name: "Row 0 (Func)",
    y: 548,
    h: 15,
    xLeft: 318,
    xRight: 1122,
    keys: [
      { label: "Esc", w: 1.15, dark: true },
      { label: "F1", w: 1.0, dark: true },
      { label: "F2", w: 1.0, dark: true },
      { label: "F3", w: 1.0, dark: true },
      { label: "F4", w: 1.0, dark: true },
      { label: "F5", w: 1.0, dark: true },
      { label: "F6", w: 1.0, dark: true },
      { label: "F7", w: 1.0, dark: true },
      { label: "F8", w: 1.0, dark: true },
      { label: "F9", w: 1.0, dark: true },
      { label: "F10", w: 1.0, dark: true },
      { label: "F11", w: 1.0, dark: true },
      { label: "F12", w: 1.0, dark: true },
      { label: "PrtSc", w: 1.0, dark: true },
      { label: "ScrLk", w: 1.0, dark: true },
      { label: "Pause", w: 1.05, dark: true },
    ],
  },
  {
    name: "Row 1 (Num)",
    y: 568,
    h: 17.5,
    xLeft: 313,
    xRight: 1127,
    keys: [
      { label: "~", w: 1.0, dark: true },
      { label: "1", w: 1.0 },
      { label: "2", w: 1.0 },
      { label: "3", w: 1.0 },
      { label: "4", w: 1.0 },
      { label: "5", w: 1.0 },
      { label: "6", w: 1.0 },
      { label: "7", w: 1.0 },
      { label: "8", w: 1.0 },
      { label: "9", w: 1.0 },
      { label: "0", w: 1.0 },
      { label: "-", w: 1.0 },
      { label: "=", w: 1.0 },
      { label: "Backspace", w: 2.1, dark: true },
      { label: "Home", w: 1.1, dark: true },
    ],
  },
  {
    name: "Row 2 (QWERTY)",
    y: 589.5,
    h: 18,
    xLeft: 308,
    xRight: 1132,
    keys: [
      { label: "Tab", w: 1.5, dark: true },
      { label: "Q", w: 1.0 },
      { label: "W", w: 1.0 },
      { label: "E", w: 1.0 },
      { label: "R", w: 1.0 },
      { label: "T", w: 1.0 },
      { label: "Y", w: 1.0 },
      { label: "U", w: 1.0 },
      { label: "I", w: 1.0 },
      { label: "O", w: 1.0 },
      { label: "P", w: 1.0 },
      { label: "[", w: 1.0 },
      { label: "]", w: 1.0 },
      { label: "\\", w: 1.6, dark: true },
      { label: "PgUp", w: 1.1, dark: true },
    ],
  },
  {
    name: "Row 3 (ASDF)",
    y: 611,
    h: 18.5,
    xLeft: 303,
    xRight: 1137,
    keys: [
      { label: "Caps Lock", w: 1.85, dark: true },
      { label: "A", w: 1.0 },
      { label: "S", w: 1.0 },
      { label: "D", w: 1.0 },
      { label: "F", w: 1.0 },
      { label: "G", w: 1.0 },
      { label: "H", w: 1.0 },
      { label: "J", w: 1.0 },
      { label: "K", w: 1.0 },
      { label: "L", w: 1.0 },
      { label: ";", w: 1.0 },
      { label: "'", w: 1.0 },
      { label: "Enter", w: 2.25, dark: true },
      { label: "PgDn", w: 1.1, dark: true },
    ],
  },
  {
    name: "Row 4 (ZXCV)",
    y: 633,
    h: 19,
    xLeft: 298,
    xRight: 1142,
    keys: [
      { label: "Shift", w: 2.35, dark: true },
      { label: "Z", w: 1.0 },
      { label: "X", w: 1.0 },
      { label: "C", w: 1.0 },
      { label: "V", w: 1.0 },
      { label: "B", w: 1.0 },
      { label: "N", w: 1.0 },
      { label: "M", w: 1.0 },
      { label: ",", w: 1.0 },
      { label: ".", w: 1.0 },
      { label: "/", w: 1.0 },
      { label: "Shift", w: 2.75, dark: true },
      { label: "End", w: 1.1, dark: true },
    ],
  },
  {
    name: "Row 5 (Bottom)",
    y: 655.5,
    h: 19.5,
    xLeft: 293,
    xRight: 1147,
    keys: [
      { label: "Ctrl", w: 1.45, dark: true },
      { label: "Fn", w: 1.15, dark: true },
      { label: "Alt", w: 1.35, dark: true },
      { label: "", w: 5.75 }, // Spacebar
      { label: "Alt", w: 1.35, dark: true },
      { label: "Ctrl", w: 1.45, dark: true },
      { label: "◄", w: 0.95, dark: true },
      { label: "▲", w: 0.9, dark: true },
      { label: "▼", w: 0.9, dark: true },
      { label: "►", w: 0.95, dark: true },
    ],
  },
];

// Calculate layout positions for each key
export const GAP = 3.5;
export const COMPUTED_ROWS = KEYBOARD_CONFIG.map((row) => {
  const totalGaps = (row.keys.length - 1) * GAP;
  const availWidth = row.xRight - row.xLeft - totalGaps;
  const sumWeights = row.keys.reduce((sum, key) => sum + key.w, 0);

  let currentX = row.xLeft;
  const computedKeys = row.keys.map((key) => {
    const keyWidth = (key.w / sumWeights) * availWidth;
    const computed = {
      ...key,
      x: currentX,
      y: row.y,
      w: keyWidth,
      h: row.h,
    };
    currentX += keyWidth + GAP;
    return computed;
  });

  return {
    ...row,
    keys: computedKeys,
  };
});

// Calculate exact TrackPoint center between G, H (Row 3) and B (Row 4)
const gKey = COMPUTED_ROWS[3].keys.find((k) => k.label === "G");
const hKey = COMPUTED_ROWS[3].keys.find((k) => k.label === "H");
const bKey = COMPUTED_ROWS[4].keys.find((k) => k.label === "B");
const spaceKey = COMPUTED_ROWS[5].keys.find((k) => k.label === "");

export const TRACKPOINT_X = gKey && hKey ? (gKey.x + gKey.w + hKey.x) / 2 : 720;
export const TRACKPOINT_Y = gKey && bKey ? (gKey.y + gKey.h + bKey.y) / 2 : 620;
export const SPACEBAR_CENTER_X = spaceKey ? spaceKey.x + spaceKey.w / 2 : 720;

// Speaker perforated grille dot coordinates (6 cols x 7 rows)
export const SPEAKER_GRID = Array.from({ length: 42 }, (_, i) => ({
  x: (i % 6) * 7.2,
  y: Math.floor(i / 6) * 6.4,
}));

/**
 * Career Roles Data organized across 3 Pages (6 Roles per Page = 18 Total Roles)
 * Compact Horizontal Landscape 3D Notepad Cards (236px width x 118px height)
 * Fitted inside the vintage laptop screen aperture (780px wide x 372px high)
 */
export const ALL_CAREER_PAGES = [
  // PAGE 1: Core Architecture & Engineering
  [
    {
      id: "p1-frontend",
      x: 350,
      y: 138,
      title: "Frontend Architect",
      level: "Staff Level • Web Core",
      desc: "Build high-performance web UIs & design systems.",
      salary: "$160k - $190k",
      tag: "Remote",
      accent: "#0284c7",
      iconBg: "#f0f9ff",
      tagBg: "#f0f9ff",
      tagColor: "#0369a1",
      iconType: "code",
    },
    {
      id: "p1-ai-ml",
      x: 602,
      y: 138,
      title: "AI / ML Engineer",
      level: "Research Lab • Agents",
      desc: "Train neural reasoning models & agent workflows.",
      salary: "$175k - $210k",
      tag: "AI Lab",
      accent: "#7c3aed",
      iconBg: "#faf5ff",
      tagBg: "#faf5ff",
      tagColor: "#6d28d9",
      iconType: "ai",
    },
    {
      id: "p1-cloud",
      x: 854,
      y: 138,
      title: "Cloud Systems Lead",
      level: "DevOps • Infrastructure",
      desc: "Orchestrate distributed Kubernetes & cloud meshes.",
      salary: "$155k - $185k",
      tag: "Infra",
      accent: "#059669",
      iconBg: "#ecfdf5",
      tagBg: "#ecfdf5",
      tagColor: "#047857",
      iconType: "cloud",
    },
    {
      id: "p1-design",
      x: 350,
      y: 274,
      title: "Product UX Designer",
      level: "Design Sys • Creative",
      desc: "Craft intuitive user journeys & tactile UI motions.",
      salary: "$140k - $170k",
      tag: "Design",
      accent: "#d97706",
      iconBg: "#fffbeb",
      tagBg: "#fffbeb",
      tagColor: "#b45309",
      iconType: "design",
    },
    {
      id: "p1-security",
      x: 602,
      y: 274,
      title: "Cybersecurity Lead",
      level: "SecOps • Zero Trust",
      desc: "Implement cryptographic defense & threat audits.",
      salary: "$165k - $195k",
      tag: "Security",
      accent: "#e11d48",
      iconBg: "#fff1f2",
      tagBg: "#fff1f2",
      tagColor: "#be123c",
      iconType: "security",
    },
    {
      id: "p1-fullstack",
      x: 854,
      y: 274,
      title: "Full-Stack Developer",
      level: "Product • Core Growth",
      desc: "Ship full-stack features using Node & Next.js.",
      salary: "$145k - $175k",
      tag: "Hybrid",
      accent: "#2563eb",
      iconBg: "#eff6ff",
      tagBg: "#eff6ff",
      tagColor: "#1d4ed8",
      iconType: "fullstack",
    },
  ],
  // PAGE 2: Data, Research & Platform
  [
    {
      id: "p2-data",
      x: 350,
      y: 138,
      title: "Data Platform Lead",
      level: "Big Data • Pipelines",
      desc: "Architect streaming pipelines with Kafka & Spark.",
      salary: "$165k - $195k",
      tag: "Data",
      accent: "#0284c7",
      iconBg: "#f0f9ff",
      tagBg: "#f0f9ff",
      tagColor: "#0369a1",
      iconType: "code",
    },
    {
      id: "p2-research",
      x: 602,
      y: 138,
      title: "LLM Research Scientist",
      level: "AI Lab • Foundation",
      desc: "Develop multimodal reasoning & transformer models.",
      salary: "$185k - $220k",
      tag: "AI Lab",
      accent: "#7c3aed",
      iconBg: "#faf5ff",
      tagBg: "#faf5ff",
      tagColor: "#6d28d9",
      iconType: "ai",
    },
    {
      id: "p2-devops",
      x: 854,
      y: 138,
      title: "DevOps / SRE Architect",
      level: "Infra • Reliability",
      desc: "Scale global edge clusters & multi-region CI/CD.",
      salary: "$160k - $190k",
      tag: "Remote",
      accent: "#059669",
      iconBg: "#ecfdf5",
      tagBg: "#ecfdf5",
      tagColor: "#047857",
      iconType: "cloud",
    },
    {
      id: "p2-brand",
      x: 350,
      y: 274,
      title: "Brand Visual Designer",
      level: "Design Sys • Brand",
      desc: "Define visual identity, iconography & vector art.",
      salary: "$130k - $160k",
      tag: "Creative",
      accent: "#d97706",
      iconBg: "#fffbeb",
      tagBg: "#fffbeb",
      tagColor: "#b45309",
      iconType: "design",
    },
    {
      id: "p2-secops",
      x: 602,
      y: 274,
      title: "SecOps Threat Analyst",
      level: "Security • SOC",
      desc: "Lead proactive threat hunting & zero-day response.",
      salary: "$150k - $180k",
      tag: "Security",
      accent: "#e11d48",
      iconBg: "#fff1f2",
      tagBg: "#fff1f2",
      tagColor: "#be123c",
      iconType: "security",
    },
    {
      id: "p2-mobile",
      x: 854,
      y: 274,
      title: "Mobile Lead Engineer",
      level: "Product • iOS & Android",
      desc: "Engineer native apps with React Native & Swift.",
      salary: "$150k - $180k",
      tag: "Hybrid",
      accent: "#2563eb",
      iconBg: "#eff6ff",
      tagBg: "#eff6ff",
      tagColor: "#1d4ed8",
      iconType: "fullstack",
    },
  ],
  // PAGE 3: Emerging Systems & High Performance
  [
    {
      id: "p3-systems",
      x: 350,
      y: 138,
      title: "Distributed Systems Eng",
      level: "Core Platform • Rust",
      desc: "Build ultra low-latency database engines in Rust.",
      salary: "$170k - $205k",
      tag: "Remote",
      accent: "#0284c7",
      iconBg: "#f0f9ff",
      tagBg: "#f0f9ff",
      tagColor: "#0369a1",
      iconType: "code",
    },
    {
      id: "p3-agents",
      x: 602,
      y: 138,
      title: "Autonomous Agents Eng",
      level: "Research Lab • Agents",
      desc: "Deploy autonomous agent frameworks & tool callers.",
      salary: "$180k - $215k",
      tag: "AI Lab",
      accent: "#7c3aed",
      iconBg: "#faf5ff",
      tagBg: "#faf5ff",
      tagColor: "#6d28d9",
      iconType: "ai",
    },
    {
      id: "p3-infra",
      x: 854,
      y: 138,
      title: "Infra Security Lead",
      level: "DevOps • Cloud Sec",
      desc: "Harden Terraform pipelines & AWS IAM policies.",
      salary: "$165k - $195k",
      tag: "Infra",
      accent: "#059669",
      iconBg: "#ecfdf5",
      tagBg: "#ecfdf5",
      tagColor: "#047857",
      iconType: "cloud",
    },
    {
      id: "p3-motion",
      x: 350,
      y: 274,
      title: "Motion UX Specialist",
      level: "Design Sys • Motion",
      desc: "Create physics-based micro-interactions & SVG art.",
      salary: "$135k - $165k",
      tag: "Design",
      accent: "#d97706",
      iconBg: "#fffbeb",
      tagBg: "#fffbeb",
      tagColor: "#b45309",
      iconType: "design",
    },
    {
      id: "p3-crypto",
      x: 602,
      y: 274,
      title: "Cryptographic Engineer",
      level: "SecOps • Cryptography",
      desc: "Implement post-quantum cryptography & HSM systems.",
      salary: "$175k - $210k",
      tag: "Security",
      accent: "#e11d48",
      iconBg: "#fff1f2",
      tagBg: "#fff1f2",
      tagColor: "#be123c",
      iconType: "security",
    },
    {
      id: "p3-backend",
      x: 854,
      y: 274,
      title: "Backend Core Architect",
      level: "Core Platform • Go",
      desc: "Design scalable microservices with gRPC & Go.",
      salary: "$160k - $190k",
      tag: "Hybrid",
      accent: "#2563eb",
      iconBg: "#eff6ff",
      tagBg: "#eff6ff",
      tagColor: "#1d4ed8",
      iconType: "fullstack",
    },
  ],
];

export const CAREER_CARDS = ALL_CAREER_PAGES[0];

/**
 * Career Page Header Information
 */
export const CAREER_HEADER_DATA = {
  title: "Career",
  description:
    "Discover your next breakthrough opportunity and shape the future of technology with us. We are looking for passionate innovators, engineers, and creators ready to solve meaningful problems. Explore open positions and build a rewarding career where your work creates a lasting impact.",
};

export default ALL_CAREER_PAGES;
