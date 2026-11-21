/**
 * BlackComputer Data File
 * 8-Card Grid Modules Architecture (Icon, Title, Description)
 */

export const terminalCards = [
  // Page 1 (8 Cards: Grid 4x2)
  {
    id: 1,
    icon: 'cpu',
    title: 'SYSTEM CORE',
    desc: 'Mainframe processor status & runtime diagnostics.',
  },
  {
    id: 2,
    icon: 'radar',
    title: 'THREAT RADAR',
    desc: 'Realtime network scan & perimeter surveillance.',
  },
  {
    id: 3,
    icon: 'lock',
    title: 'DATA CIPHER',
    desc: 'Hardware cryptographic security & key vault.',
  },
  {
    id: 4,
    icon: 'shield',
    title: 'FIREWALL V4',
    desc: 'Active packet filter & gateway barrier.',
  },
  {
    id: 5,
    icon: 'network',
    title: 'NETWORK LOG',
    desc: 'Continuous telemetry flow & protocol audit.',
  },
  {
    id: 6,
    icon: 'ai',
    title: 'AI DEFENDER',
    desc: 'Autonomous heuristic detection algorithms.',
  },
  {
    id: 7,
    icon: 'database',
    title: 'MEMORY STACK',
    desc: 'Magnetic core allocation & cache blocks.',
  },
  {
    id: 8,
    icon: 'key',
    title: 'AUTH PROTOCOL',
    desc: 'Zero-trust verification & multi-stage token.',
  },
  // Page 2 (8 Cards for Next/Prev navigation)
  {
    id: 9,
    icon: 'cloud',
    title: 'CLOUD VAULT',
    desc: 'Encrypted offsite replication & restore point.',
  },
  {
    id: 10,
    icon: 'filter',
    title: 'PACKET SNIFFER',
    desc: 'Deep header analysis & traffic inspection.',
  },
  {
    id: 11,
    icon: 'user',
    title: 'IDENTITY KEY',
    desc: 'Biometric authorization & session manager.',
  },
  {
    id: 12,
    icon: 'alert',
    title: 'INTRUSION OPS',
    desc: 'Automated threat containment protocol.',
  },
  {
    id: 13,
    icon: 'monitor',
    title: 'RASTER VDU',
    desc: 'High-refresh electron display calibration.',
  },
  {
    id: 14,
    icon: 'link',
    title: 'TERMINAL LINK',
    desc: 'Low-latency serial communication bus.',
  },
  {
    id: 15,
    icon: 'cert',
    title: 'ENCRYPTION SSL',
    desc: 'Public key certificates & cipher suite.',
  },
  {
    id: 16,
    icon: 'cpu',
    title: 'DIAGNOSTIC ROM',
    desc: 'Firmware validation & hardware check.',
  },
];

export const blackComputerCards = terminalCards;
export const blackComputerSections = terminalCards;
export const laptopSections = terminalCards;

// CRT Phosphor Display Themes
export const CRT_THEMES = {
  green: {
    id: 'green',
    label: 'EMERALD',
    bg: '#041207',
    glow: 'rgba(34, 197, 94, 0.45)',
    primary: '#22c55e',
    content: '#86efac',
    accent: '#4ade80',
    border: 'rgba(34, 197, 94, 0.32)',
    badgeBg: 'rgba(34, 197, 94, 0.16)',
  },
  amber: {
    id: 'amber',
    label: 'AMBER',
    bg: '#140801',
    glow: 'rgba(245, 158, 11, 0.45)',
    primary: '#f59e0b',
    content: '#fde68a',
    accent: '#fbbf24',
    border: 'rgba(245, 158, 11, 0.32)',
    badgeBg: 'rgba(245, 158, 11, 0.16)',
  },
  cyan: {
    id: 'cyan',
    label: 'CYBER',
    bg: '#020d18',
    glow: 'rgba(56, 189, 248, 0.45)',
    primary: '#38bdf8',
    content: '#bae6fd',
    accent: '#7dd3fc',
    border: 'rgba(56, 189, 248, 0.32)',
    badgeBg: 'rgba(56, 189, 248, 0.16)',
  },
};

// Option 2: Mainframe ROM BIOS Diagnostics Lines
export const BIOS_LINES = [
  { text: 'OI-8000 ARCHIVE ARCHITECTURE [ROM V3.2]', tag: 'INIT', tagColor: 'accent' },
  { text: 'CPU 68000 @ 8.0 MHz ... CHECK 0x7E4F', tag: 'OK', tagColor: 'primary' },
  { text: 'SYSTEM RAM: 640 KB BASE MEMORY', tag: 'OK', tagColor: 'primary' },
  { text: 'CRT RASTER VDU CONTROLLER (1024x768)', tag: 'READY', tagColor: 'primary' },
  { text: 'TERMINAL CARD MODULES: ACTIVE', tag: 'MOUNTED', tagColor: 'accent' },
  { text: 'BOOT SEQUENCE VERIFIED >> LOADING CARDS', tag: 'ACTIVE', isFinal: true },
];

export default terminalCards;
