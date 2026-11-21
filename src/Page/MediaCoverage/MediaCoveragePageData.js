/**
 * Media Coverage Data File
 * Pure data structures for the Media Coverage presentation.
 * Contains card data, header content, broadcast bugs, and related metadata.
 * Pure data only - no React components or rendering logic.
 */

export const MEDIA_COVERAGE_HEADER = {
  kicker: 'PRESS & BROADCASTS',
  title: 'Media Coverage',
  description: 'Explore our verified media broadcasts and national television coverage. Stay updated with in-depth investigative reports, real-time public awareness campaigns, cyber security alerts, and critical citizen advisories highlighted across prominent broadcast networks.',
};

export const BROADCAST_INFO = {
  channelBug: {
    badge: 'CR',
    name: 'NEWS 24/7',
    tag: 'PORTAL',
  },
  liveStatus: 'LIVE',
  bookTitle: 'CR REAL TIME NEWS CHANNEL',
};

export const MEDIA_CARDS_DATA = [
  // PAGE 1: Core Awareness & News
  {
    id: 1,
    title: 'Cyber Safety',
    subtitle: 'Stay Safe Online, Be Aware',
    icon: 'ShieldCheck',
    gradient: 'linear-gradient(135deg, #0066ff 0%, #0047cc 100%)',
    shadow: 'rgba(0, 102, 255, 0.45)',
  },
  {
    id: 2,
    title: 'Latest News',
    subtitle: 'Get Real & Verified News',
    icon: 'Newspaper',
    gradient: 'linear-gradient(135deg, #ff1a1a 0%, #cc0000 100%)',
    shadow: 'rgba(255, 26, 26, 0.45)',
  },
  {
    id: 3,
    title: 'Awareness',
    subtitle: 'Learn, Be Alert, Stay Protected',
    icon: 'Megaphone',
    gradient: 'linear-gradient(135deg, #00aa44 0%, #008833 100%)',
    shadow: 'rgba(0, 170, 68, 0.45)',
  },
  {
    id: 4,
    title: 'Fraud Alert',
    subtitle: 'Avoid Frauds, Stay Secure',
    icon: 'Scale',
    gradient: 'linear-gradient(135deg, #ff8800 0%, #cc6600 100%)',
    shadow: 'rgba(255, 136, 0, 0.45)',
  },
  {
    id: 5,
    title: 'Investigation',
    subtitle: 'Track & Verify Critical Cases',
    icon: 'Search',
    gradient: 'linear-gradient(135deg, #7700ff 0%, #5500cc 100%)',
    shadow: 'rgba(119, 0, 255, 0.45)',
  },
  {
    id: 6,
    title: 'Public Help',
    subtitle: 'Report & Get Assistance',
    icon: 'Users',
    gradient: 'linear-gradient(135deg, #00aacc 0%, #0088aa 100%)',
    shadow: 'rgba(0, 170, 204, 0.45)',
  },

  // PAGE 2: Technology, Security & Rights
  {
    id: 7,
    title: 'Digital Banking',
    subtitle: 'Secure Transactions & Wallets',
    icon: 'CreditCard',
    gradient: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
    shadow: 'rgba(30, 64, 175, 0.45)',
  },
  {
    id: 8,
    title: 'Fact Check',
    subtitle: 'Bust Rumors, Know The Truth',
    icon: 'CheckCircle',
    gradient: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
    shadow: 'rgba(225, 29, 72, 0.45)',
  },
  {
    id: 9,
    title: 'Child Safety',
    subtitle: 'Safe Digital Space for Kids',
    icon: 'HeartHandshake',
    gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    shadow: 'rgba(5, 150, 105, 0.45)',
  },
  {
    id: 10,
    title: 'Identity Theft',
    subtitle: 'Shield Your Private Data',
    icon: 'Lock',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
    shadow: 'rgba(234, 88, 12, 0.45)',
  },
  {
    id: 11,
    title: 'Crime Patrol',
    subtitle: 'Live FIR & Crime Reports',
    icon: 'Siren',
    gradient: 'linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)',
    shadow: 'rgba(147, 51, 234, 0.45)',
  },
  {
    id: 12,
    title: 'Legal Rights',
    subtitle: 'Consumer Protection Laws',
    icon: 'FileText',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    shadow: 'rgba(2, 132, 199, 0.45)',
  },

  // PAGE 3: Finance, Economy & Forensics
  {
    id: 13,
    title: 'Market Watch',
    subtitle: 'Stock Indices & Bullish Trends',
    icon: 'TrendingUp',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    shadow: 'rgba(37, 99, 235, 0.45)',
  },
  {
    id: 14,
    title: 'Scam Warning',
    subtitle: 'Identify Ponzi & Call Scams',
    icon: 'AlertTriangle',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
    shadow: 'rgba(220, 38, 38, 0.45)',
  },
  {
    id: 15,
    title: 'Smart Savings',
    subtitle: 'Safe Investment & Wealth',
    icon: 'DollarSign',
    gradient: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    shadow: 'rgba(22, 163, 74, 0.45)',
  },
  {
    id: 16,
    title: 'Tax Updates',
    subtitle: 'GST, ITR & Citizen Filings',
    icon: 'Landmark',
    gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
    shadow: 'rgba(217, 119, 6, 0.45)',
  },
  {
    id: 17,
    title: 'AI Forensics',
    subtitle: 'Next-Gen Digital Evidence',
    icon: 'Cpu',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    shadow: 'rgba(139, 92, 246, 0.45)',
  },
  {
    id: 18,
    title: 'Emergency 24x7',
    subtitle: 'Direct Emergency Helplines',
    icon: 'PhoneCall',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    shadow: 'rgba(8, 145, 178, 0.45)',
  },

  // PAGE 4: Public Safety, Weather & Vigilance
  {
    id: 19,
    title: 'National Hero',
    subtitle: 'Honoring Brave Citizens',
    icon: 'Award',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    shadow: 'rgba(59, 130, 246, 0.45)',
  },
  {
    id: 20,
    title: 'Disaster Alert',
    subtitle: 'Flood, Cyclone & Storm Radar',
    icon: 'CloudLightning',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
    shadow: 'rgba(239, 68, 68, 0.45)',
  },
  {
    id: 21,
    title: 'Health First',
    subtitle: 'Vaccines & Medical Alerts',
    icon: 'Activity',
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    shadow: 'rgba(16, 185, 129, 0.45)',
  },
  {
    id: 22,
    title: 'Traffic Live',
    subtitle: 'Real-Time Highway Congestion',
    icon: 'ShieldAlert',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    shadow: 'rgba(245, 158, 11, 0.45)',
  },
  {
    id: 23,
    title: 'Corruption Eye',
    subtitle: 'Whistleblower & Grievance',
    icon: 'Eye',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
    shadow: 'rgba(168, 85, 247, 0.45)',
  },
  {
    id: 24,
    title: 'Women Safety',
    subtitle: 'Instant Helplines & SOS Network',
    icon: 'Sparkles',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    shadow: 'rgba(6, 182, 212, 0.45)',
  },

  // PAGE 5: Employment, Education & Consumer
  {
    id: 25,
    title: 'Job Verifier',
    subtitle: 'Authenticate Job Offers Online',
    icon: 'Briefcase',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
    shadow: 'rgba(37, 99, 235, 0.45)',
  },
  {
    id: 26,
    title: 'Exam Portal',
    subtitle: 'Official Dates & Key Alerts',
    icon: 'GraduationCap',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
    shadow: 'rgba(244, 63, 94, 0.45)',
  },
  {
    id: 27,
    title: 'Eco Living',
    subtitle: 'Clean Air & Green Energy',
    icon: 'Trees',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
    shadow: 'rgba(34, 197, 94, 0.45)',
  },
  {
    id: 28,
    title: 'Smart Buyer',
    subtitle: 'Verify Sellers & Return Rights',
    icon: 'ShoppingBag',
    gradient: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)',
    shadow: 'rgba(249, 115, 22, 0.45)',
  },
  {
    id: 29,
    title: 'Data Privacy',
    subtitle: 'Control Permissions & Cookies',
    icon: 'KeyRound',
    gradient: 'linear-gradient(135deg, #c084fc 0%, #9333ea 100%)',
    shadow: 'rgba(192, 132, 252, 0.45)',
  },
  {
    id: 30,
    title: 'Public Forum',
    subtitle: 'Community Debates & Voices',
    icon: 'MessageSquare',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
    shadow: 'rgba(20, 184, 166, 0.45)',
  },

  // PAGE 6: Global & National Highlights
  {
    id: 31,
    title: 'World Brief',
    subtitle: 'Geopolitics & Summit Coverage',
    icon: 'Globe',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
    shadow: 'rgba(29, 78, 216, 0.45)',
  },
  {
    id: 32,
    title: 'Live Streams',
    subtitle: 'Key Press Conferences Live',
    icon: 'Radio',
    gradient: 'linear-gradient(135deg, #e11d48 0%, #9f1239 100%)',
    shadow: 'rgba(225, 29, 72, 0.45)',
  },
  {
    id: 33,
    title: 'Solar Power',
    subtitle: 'Subsidies & Rooftop Projects',
    icon: 'Zap',
    gradient: 'linear-gradient(135deg, #84cc16 0%, #4d7c0f 100%)',
    shadow: 'rgba(132, 204, 22, 0.45)',
  },
  {
    id: 34,
    title: 'Smart Cities',
    subtitle: 'Metros, High-Speed Rail & Infra',
    icon: 'Building2',
    gradient: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)',
    shadow: 'rgba(217, 119, 6, 0.45)',
  },
  {
    id: 35,
    title: 'Special Report',
    subtitle: 'Deep-Dive Investigative Media',
    icon: 'Compass',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    shadow: 'rgba(99, 102, 241, 0.45)',
  },
  {
    id: 36,
    title: 'Citizen Hub',
    subtitle: 'Instant Services & Portal Access',
    icon: 'Layers',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
    shadow: 'rgba(14, 165, 233, 0.45)',
  },
];

export default {
  header: MEDIA_COVERAGE_HEADER,
  broadcast: BROADCAST_INFO,
  cards: MEDIA_CARDS_DATA,
};
