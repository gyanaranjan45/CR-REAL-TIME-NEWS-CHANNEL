/**
 * newsPaper.js
 * Comprehensive Data Source for CR Real-Time E-News Paper
 * Contains structured editorial metadata, teaser cards, crime watch reports,
 * safety spotlights, community reports, and emergency helpline configurations.
 */

export const NEWSPAPER_META = {
  title: "CR Real time news",
  pageHeaderTitle: "E-News Paper",
  pageHeaderSubtitle: "India's trusted digital broadsheet delivering real-time cyber defense bulletins, verified crime watch alerts, and citizen digital safety intelligence.",
  subOrganization: "CR CYBER CRIME FOUNDATION",
  tagline: "Cyber Safety | Awareness | Training | Prevention | Support",
  location: "Bhubaneswar, Odisha",
  price: "₹5.00",
  website: "www.crccf.org",
  reportUrl: "https://www.crccf.org/report",
  tollFreeHelpline: "1930",
};

/**
 * Section 1: Top News Teasers (Fast Real-Time Wire Feed)
 */
export const TEASERS_DATA = [
  {
    id: 1,
    category: "CYBER ALERT",
    badgeColor: "bg-[#A20D1C] text-white",
    headline: "CERT-In Issues High Severity Advisory on Critical Browser & Android Vulnerabilities",
    summary: "High-priority national warning for immediate patching of zero-day exploits impacting mobile and desktop operating systems.",
    type: "hacker",
    time: "5m ago",
    author: "National Cyber Alert Desk",
    priority: "CRITICAL",
  },
  {
    id: 2,
    category: "AWARENESS",
    badgeColor: "bg-[#0C2855] text-white",
    headline: "Multi-State Fake Job & Investment Fraud Ring Dismantled by Cyber Cell",
    summary: "Joint task force nabs 14 syndicate operatives operating illegal overseas crypto remittance channels targeting students.",
    type: "lock",
    time: "18m ago",
    author: "Special Investigation Team",
    priority: "HIGH",
  },
  {
    id: 3,
    category: "TRAINING",
    badgeColor: "bg-[#0C2855] text-white",
    headline: "National Cyber Security Awareness Training Reaches Over 50,000 Students",
    summary: "Pan-India digital literacy and hygiene modules completed across 420 schools and academic institutions.",
    type: "training",
    time: "32m ago",
    author: "CRCCF Education Wing",
    priority: "NORMAL",
  },
  {
    id: 4,
    category: "EVENTS",
    badgeColor: "bg-[#1E3A8A] text-white",
    headline: "All-India Cyber Defense Hackathon 2026 Announced with ₹25 Lakh Prize Pool",
    summary: "Premier collegiate and professional bug-bounty competition scheduled to stress-test critical digital infrastructure.",
    type: "hackathon",
    time: "45m ago",
    author: "National Events Directorate",
    priority: "FEATURED",
  },
];

/**
 * Section 2: Crime Watch & Special Investigations
 */
export const CRIME_REPORTS_DATA = [
  {
    id: "cr-1",
    category: "CRIME REPORT",
    badgeColor: "bg-[#A20D1C] text-white",
    headline: "Inter-State Ransomware Ring Busted; ₹14 Cr Seized Across 120 Accounts",
    summary: "Law enforcement freezes multi-layer mule accounts following extortion campaigns targeting private healthcare servers.",
    type: "forensics",
    time: "10m ago",
    author: "Financial Crimes Division",
    department: "Forensics & Recovery",
  },
  {
    id: "cr-2",
    category: "ADVISORY",
    badgeColor: "bg-[#C2410C] text-white",
    headline: "CBI & CERT-In Warn of Surge in AI Video Call Digital Arrest Scams",
    summary: "Citizens urged not to comply with fraudulent video calls impersonating law enforcement and judicial magistrates.",
    type: "deepfake",
    time: "25m ago",
    author: "Advisory Directorate",
    department: "AI Threat Intelligence",
  },
  {
    id: "cr-3",
    category: "DEFENSE",
    badgeColor: "bg-[#0C2855] text-white",
    headline: "National Critical Power Grid Foils Coordinated DDoS Cyber Intrusion",
    summary: "Automated perimeter defense systems successfully mitigate 1.2 Tbps volumetric traffic targeting regional dispatch centers.",
    type: "defense",
    time: "42m ago",
    author: "Critical Infrastructure Unit",
    department: "Grid Defense",
  },
  {
    id: "cr-4",
    category: "ENFORCEMENT",
    badgeColor: "bg-[#6D28D9] text-white",
    headline: "1,400 Fraudulent SIM Cards Deactivated in Pan-India Telecom Raid",
    summary: "Department of Telecommunications collaborates with state police to terminate connections acquired with forged credentials.",
    type: "police",
    time: "1h ago",
    author: "Telecom Security Wing",
    department: "Enforcement",
  },
];

/**
 * Section 3: National Digital Safety & Editorial Spotlight
 */
export const SPOTLIGHT_CARDS_DATA = [
  {
    id: "sp-1",
    category: "PORTAL GUIDE",
    badgeColor: "bg-[#0C2855] text-white",
    headline: "How CRCCF Protects Indian Citizens: Complete Digital Safety Portal Guide",
    summary: "A step-by-step citizen handbook on registering cyber fraud grievances, freezing stolen funds, and accessing forensic support.",
    type: "portal",
    time: "Citizen Focus",
    author: "Portal Editorial Board",
    department: "Citizen Assistance",
  },
  {
    id: "sp-2",
    category: "BIOMETRIC LOCK",
    badgeColor: "bg-[#059669] text-white",
    headline: "UIDAI Recommends Masked Aadhaar & Biometric Locking to Prevent Spoofing",
    summary: "Detailed guidelines on how citizens can safeguard their identity using mAadhaar biometric locks against cloning attempts.",
    type: "aadhaar",
    time: "Special Guide",
    author: "Identity Security Bureau",
    department: "Biometric Protection",
  },
  {
    id: "sp-3",
    category: "BANKING SAFETY",
    badgeColor: "bg-[#0070F3] text-white",
    headline: "Dynamic Geolocation Locks Mandated for High-Value Net Banking Transfers",
    summary: "RBI directives mandate multi-factor real-time location authentication for transactions above ₹50,000.",
    type: "bank",
    time: "Banking Wire",
    author: "Fintech Risk Desk",
    department: "Banking Regulations",
  },
  {
    id: "sp-4",
    category: "AI DETECTION",
    badgeColor: "bg-[#7C3AED] text-white",
    headline: "State Forensic Labs Deploy AI Video & Audio Deepfake Detection Engines",
    summary: "Indigenous neural verification pipelines operationalized to counter biometric synthesis and forensic evidence manipulation.",
    type: "deepfake",
    time: "Labs Wire",
    author: "State Forensic Labs",
    department: "Digital Forensics",
  },
];

/**
 * Section 4: Education, Innovation & Community Action
 */
export const COMMUNITY_REPORTS_DATA = [
  {
    id: "cm-1",
    category: "EDUCATION",
    badgeColor: "bg-[#059669] text-white",
    headline: "50,000 School Students Complete National Cyber Hygiene Exam in Nov",
    summary: "CBSE and state boards recognize student cyber hygiene certifications in widespread anti-bullying and anti-phishing campaign.",
    type: "students",
    time: "Campus Wire",
    author: "Academic Outreach Wing",
    department: "Youth Education",
  },
  {
    id: "cm-2",
    category: "INNOVATION",
    badgeColor: "bg-[#0070F3] text-white",
    headline: "Indian Research Labs Unveil Indigenous Post-Quantum Cryptographic Chips",
    summary: "Next-generation cryptographic hardware unveiled to protect critical defense communication against future quantum computing attacks.",
    type: "quantum",
    time: "Tech Wire",
    author: "Applied Cryptography Team",
    department: "Advanced R&D",
  },
  {
    id: "cm-3",
    category: "COMMUNITY",
    badgeColor: "bg-[#7C3AED] text-white",
    headline: "Project Suraksha: Empowering 25,000 Rural Women with Safe UPI Skills",
    summary: "Grassroots workshops in 18 districts train women self-help groups in fraud detection, QR verification, and secure digital payments.",
    type: "women",
    time: "Field Report",
    author: "Community Action Bureau",
    department: "Rural Inclusion",
  },
  {
    id: "cm-4",
    category: "HACKATHON",
    badgeColor: "bg-[#1E1B4B] text-white",
    headline: "All-India Cyber Defense Hackathon 2026: ₹25L Prize Pool Registrations Open",
    summary: "National competition invites ethical hackers and collegiate developers to build resilient intrusion detection solutions.",
    type: "trophy",
    time: "Live Event",
    author: "Hackathon Council",
    department: "Talent & Innovation",
  },
];

/**
 * Section Layouts & Header Configurations
 */
export const SECTION_CONFIGS = [
  {
    key: "crimeReports",
    title: "CRIME WATCH & SPECIAL INVESTIGATIONS",
    badge: "SPECIAL DISPATCH • WIRE FEED",
    color: "#A20D1C",
  },
  {
    key: "spotlightCards",
    title: "NATIONAL DIGITAL SAFETY & EDITORIAL SPOTLIGHT",
    badge: "CRCCF IN-DEPTH FOCUS",
    color: "#0C2855",
  },
  {
    key: "communityReports",
    title: "EDUCATION, INNOVATION & COMMUNITY ACTION",
    badge: "CAMPUS & INDUSTRY WIRE",
    color: "#1E3A8A",
  },
];

/**
 * National Cyber Emergency Helpline Strip Configuration
 */
export const HELPLINE_CONFIG = {
  number: "1930",
  label: "NATIONAL HELPLINE 1930",
  description: "Report financial cyber fraud immediately within the golden hour to freeze stolen funds across Indian banks.",
  tollFreeText: "Dial: 1930 (Toll Free)",
  statusText: "Active 24x7",
};

/**
 * Consolidated Newspaper Data Bundle
 */
export const INITIAL_NEWSPAPER_DATA = {
  meta: NEWSPAPER_META,
  teasers: TEASERS_DATA,
  crimeReports: CRIME_REPORTS_DATA,
  spotlightCards: SPOTLIGHT_CARDS_DATA,
  communityReports: COMMUNITY_REPORTS_DATA,
  sections: SECTION_CONFIGS,
  helpline: HELPLINE_CONFIG,
};

export default INITIAL_NEWSPAPER_DATA;
