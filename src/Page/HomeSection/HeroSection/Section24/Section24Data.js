/**
 * Section 07 Data: Official Security Credentials & Access Badge Dataset
 * along with Real-Time News & Updates Feed
 */

export const employeeData = {
  company: "PRESS",
  division: "PRESS CORPS • BROADCAST WIRE",
  securityProtocol: "OFFICIAL ACCREDITATION • DIGITAL DISPATCH • LIVE PRESS GATEWAY",
  name: "PRESS ACCREDITATION",
  role: "CHIEF CORRESPONDENT",
  department: "National Investigative Wire",
  employeeId: "PRESS-CR-2026",
  shortId: "WIRE-01",
  bloodGroup: "O+",
  clearanceLevel: "LEVEL 4",
  cardType: "PRESS-CR80",
  issuedDate: "01 / 2026",
  validThru: "12 / 2028",
  secCode: "892",
  barcode: "CR-PRESS-WIRE-2026",
  backBarcode: "VER-NEWS-WIRE-2026",
  helpline: "+1 (800) 555-0199 • 100 Innovation Way, Press Bureau 4",
  propertyNotice:
    "This credential authorizes accredited live coverage by PRESS. It remains property of the Editorial Board and is subject to immediate verification.",
};

export const newsCategories = [
  'ALL UPDATES',
  'CYBER INTEL',
  'CRIME RADAR',
  'POLICY & LAW',
  'FINTECH & TECH',
  'DEFENSE'
];

export const newsUpdatesData = [
  {
    id: 'up-1',
    headline: 'CERT-In Issues High-Severity Alert on Zero-Day Flaw in Cloud Edge Gateways',
    description: 'National cybersecurity agency flags critical remote execution flaw impacting enterprise VPNs; immediate patching mandate issued to banking and public utility backbones to prevent zero-click perimeter compromise.',
    timestamp: '4 mins ago',
    date: '04 Nov 2026',
    time: '12:48 PM IST',
    category: 'CYBER INTEL',
    isLive: true,
    isNew: true,
    indicator: 'LIVE',
    priority: 'CRITICAL',
    source: 'CR Cyber Intel Wire',
    readTime: '2 min read',
    highlights: [
      'CVSS 3.1 Severity Score rated 9.8 (Critical Remote Code Execution)',
      'Enterprise edge firewalls and SSL VPN concentrators targeted worldwide',
      'Federal advisory directs immediate patch deployment within 12 hours'
    ],
    hash: 'CERT-IN-2026-ADV-0982'
  },
  {
    id: 'up-2',
    headline: 'Supreme Court Constitutional Bench Begins Final Hearing on Digital Data Protection Rules',
    description: 'Seven-judge bench examines cross-border telemetry parameters, consumer consent protocols, and hefty corporate breach penalties under the updated DPDP framework to ensure individual privacy rights.',
    timestamp: '16 mins ago',
    date: '04 Nov 2026',
    time: '12:35 PM IST',
    category: 'POLICY & LAW',
    isLive: false,
    isNew: true,
    indicator: 'NEW',
    priority: 'HIGH',
    source: 'Supreme Court Bureau',
    readTime: '3 min read',
    highlights: [
      'Seven-judge constitutional bench reviewing cross-border telemetry clauses',
      'Mandatory algorithmic audits proposed for significant data fiduciaries',
      'Penal provisions up to ₹250 Crore for gross systemic data negligence'
    ],
    hash: 'SC-DPDP-BENCH-2026-04'
  },
  {
    id: 'up-3',
    headline: 'Multi-State Cyber Crime Taskforce Neutralizes ₹4.8 Cr Digital Arrest Syndicate',
    description: 'Coordinated inter-state raids across 5 metropolitan areas lead to seizure of 240+ cloned SIMs, frozen cryptocurrency cold wallets, and forged federal warrants mimicking enforcement directorate seals.',
    timestamp: '38 mins ago',
    date: '04 Nov 2026',
    time: '12:12 PM IST',
    category: 'CRIME RADAR',
    isLive: false,
    isNew: false,
    indicator: 'VERIFIED',
    priority: 'HIGH',
    source: 'Special Crime Cell',
    readTime: '4 min read',
    highlights: [
      '14 suspects detained across Delhi NCR, Bengaluru, Kolkata, and Surat',
      '240 spoofed SIM cards, VoIP router nodes, and biometric mules unmasked',
      'Victims recovered ₹1.82 Crore through fast-track banking freeze protocols'
    ],
    hash: 'CBI-STF-CRIME-7749'
  },
  {
    id: 'up-4',
    headline: 'RBI Rolls Out Phase-3 Offline CBDC Pilot with Soundwave NFC Verification',
    description: 'Central bank deploys innovative acoustic data transmission enabling seamless offline micro-payments on feature phones in remote non-network rural corridors with sub-second cryptographic settlement.',
    timestamp: '1 hr ago',
    date: '04 Nov 2026',
    time: '11:45 AM IST',
    category: 'FINTECH & TECH',
    isLive: false,
    isNew: true,
    indicator: 'NEW',
    priority: 'MEDIUM',
    source: 'Banking & Tech Bureau',
    readTime: '3 min read',
    highlights: [
      'Near-zero latency payments enabled on low-cost 2G feature phones',
      'Dual-key hardware enclave authentication prevents double-spending',
      'Pilot expansion covers 120 rural districts across 8 central states'
    ],
    hash: 'RBI-CBDC-PILOT-8902'
  },
  {
    id: 'up-5',
    headline: 'Defense Ministry Clears ₹22,000 Cr Procurement for Indigenous Maritime Drones',
    description: 'High-Altitude Long-Endurance (HALE) reconnaissance UAV systems equipped with multi-spectral synthetic aperture radar approved for persistent Indian Ocean surveillance.',
    timestamp: '2 hrs ago',
    date: '04 Nov 2026',
    time: '10:30 AM IST',
    category: 'DEFENSE',
    isLive: false,
    isNew: false,
    indicator: 'DEVELOPING',
    priority: 'MEDIUM',
    source: 'Strategic Affairs Desk',
    readTime: '3 min read',
    highlights: [
      'Indigenous payload integrates DRDO quantum-encrypted satellite downlink',
      'Continuous 36-hour flight endurance up to 45,000 feet operational ceiling',
      'Covers crucial chokepoints in the Malacca Strait and Gulf of Aden'
    ],
    hash: 'MOD-DAC-UAV-2026-61'
  },
  {
    id: 'up-6',
    headline: 'Global Sovereign Compute Alliance Finalizes Model Watermarking Standard',
    description: '34 partner nations sign multilateral treaty ensuring cryptographic provenance tags on generative model weights to counteract synthetic deepfakes and democratic election interference.',
    timestamp: '3 hrs ago',
    date: '04 Nov 2026',
    time: '09:20 AM IST',
    category: 'FINTECH & TECH',
    isLive: false,
    isNew: false,
    indicator: 'VERIFIED',
    priority: 'LOW',
    source: 'Global Tech Correspondent',
    readTime: '5 min read',
    highlights: [
      'Mandatory latent-space digital fingerprinting on all foundation models >10B parameters',
      'Immutable ledger for verification of synthetic media authenticity',
      'Enforcement protocols scheduled for deployment by Q2 2027'
    ],
    hash: 'GSCA-COMPUTE-GENAI-11'
  },
  {
    id: 'up-7',
    headline: 'State Power Grid Repels Distributed Denial-of-Service Assault During Peak Hours',
    description: 'Automated AI firewalls successfully filtered over 14 million anomalous requests per second targeting the Northern Regional Load Despatch Centre without any blackout disruptions.',
    timestamp: '5 hrs ago',
    date: '04 Nov 2026',
    time: '07:15 AM IST',
    category: 'CYBER INTEL',
    isLive: false,
    isNew: false,
    indicator: 'RESOLVED',
    priority: 'HIGH',
    source: 'Critical Infrastructure Desk',
    readTime: '2 min read',
    highlights: [
      'Peak attack volume exceeded 1.8 Terabits per second across 62 botnet clusters',
      'Automated telemetry isolation prevented any grid load redistribution failure',
      'Joint investigation launched by NCIIPC and National Cyber Crime Cell'
    ],
    hash: 'NRLDC-GRID-DEF-0441'
  },
];

// Preserved video items dataset if needed by any downstream consumers
export const videoItems = [
  {
    id: 'vid-1',
    title: 'Inside the Cyber Crime Investigation Hub: Special Documentary',
    category: 'INVESTIGATIVE',
    duration: '14:20',
    views: '124K',
    date: '2 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vid-2',
    title: 'Parliament Winter Session Debates: Key Security Bills Explained',
    category: 'POLITICS',
    duration: '08:45',
    views: '89K',
    date: '5 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
  },
];

export default employeeData;
