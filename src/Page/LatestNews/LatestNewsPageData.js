/**
 * Oven Data File - Latest News Page
 * Contains Page Meta and 16 High-Priority Cyber Threat Intelligence News Cards (8 per page)
 */

export const pageInfo = {
  title: "Latest News",
  badge: "LIVE BULLETIN",
  description: "Stay informed with real-time cybersecurity insights, breaking threat advisories, and essential digital safety updates."
};

export const latestNewsCards = [
  // Page 1 (8 Cards: Grid 4x2)
  {
    id: 1,
    icon: 'alert',
    color: 'orange',
    tag: 'CRITICAL',
    title: 'Zero-Day Patch',
    desc: 'Critical kernel security patch rolled out to mitigate active privilege escalation exploits.'
  },
  {
    id: 2,
    icon: 'ai',
    color: 'purple',
    tag: 'NEURAL',
    title: 'AI Threat Defense',
    desc: 'Autonomous neural models detect and neutralize sophisticated phishing scams instantly.'
  },
  {
    id: 3,
    icon: 'lock',
    color: 'rose',
    tag: 'HIGH RISK',
    title: 'Ransomware Surge',
    desc: 'Healthcare and financial sectors advised to reinforce offline backup immutability.'
  },
  {
    id: 4,
    icon: 'cloud',
    color: 'cyan',
    tag: 'IDENTITY',
    title: 'Cloud Identity Shield',
    desc: 'Strict multi-factor authentication mandated to prevent session hijacking across clouds.'
  },
  {
    id: 5,
    icon: 'network',
    color: 'emerald',
    tag: 'ORBIT',
    title: 'Satellite Uplink',
    desc: 'Critical cryptographic firmware deployed to protect commercial orbital communications.'
  },
  {
    id: 6,
    icon: 'mobile',
    color: 'pink',
    tag: 'FRAUD',
    title: 'Mobile Banking Alert',
    desc: 'Advisory warns against malicious SMS overlays stealing two-factor authentication tokens.'
  },
  {
    id: 7,
    icon: 'shield',
    color: 'blue',
    tag: 'SEC-OPS',
    title: 'Supply Chain Audit',
    desc: 'Global software registry enforces cryptographic provenance signatures on all builds.'
  },
  {
    id: 8,
    icon: 'user',
    color: 'amber',
    tag: 'ENCLAVE',
    title: 'Biometric Security',
    desc: 'Hardware secure enclaves upgraded to thwart high-resolution deepfake spoofing.'
  },

  // Page 2 (8 Cards for Next/Prev navigation)
  {
    id: 9,
    icon: 'key',
    color: 'indigo',
    tag: 'POST-Q',
    title: 'Quantum Safe Cipher',
    desc: 'Post-quantum lattice encryption algorithms adopted for long-term critical data safety.'
  },
  {
    id: 10,
    icon: 'radar',
    color: 'teal',
    tag: 'TAKEDOWN',
    title: 'Botnet Dismantled',
    desc: 'International task force seizes command servers of a million-node IoT malware network.'
  },
  {
    id: 11,
    icon: 'monitor',
    color: 'orange',
    tag: 'ZERO-DAY',
    title: 'Browser Engine Patch',
    desc: 'Critical vulnerability in JavaScript compiler resolved to block remote code execution.'
  },
  {
    id: 12,
    icon: 'database',
    color: 'cyan',
    tag: 'ENCRYPT',
    title: 'Data Vault Standards',
    desc: 'Zero-knowledge encryption standards implemented across all enterprise databases.'
  },
  {
    id: 13,
    icon: 'cert',
    color: 'purple',
    tag: 'PRIVACY',
    title: 'Privacy Compliance',
    desc: 'Strict consumer data governance rules enforce transparency on cross-platform tracking.'
  },
  {
    id: 14,
    icon: 'link',
    color: 'blue',
    tag: 'GATEWAY',
    title: 'Zero-Trust Gateways',
    desc: 'Microservices enforce strict mutual TLS to block unauthorized lateral traffic.'
  },
  {
    id: 15,
    icon: 'cpu',
    color: 'rose',
    tag: 'ROOT-TRUST',
    title: 'Firmware Protection',
    desc: 'Silicon root-of-trust verification added to prevent UEFI level bootkit intrusions.'
  },
  {
    id: 16,
    icon: 'filter',
    color: 'emerald',
    tag: 'DEFENSE',
    title: 'DDoS Mitigation',
    desc: 'High-capacity distributed edge filtering neutralizes multi-terabit volumetric attacks.'
  }
];

export const ovenSections = latestNewsCards;
export default latestNewsCards;
