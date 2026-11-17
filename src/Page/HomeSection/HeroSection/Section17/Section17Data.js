/**
 * CRCCF NEWS BROADCAST DATA
 * 5 complete sample news records matching the broadcasting interface design
 * Includes short preview for CRT TV screen and full in-depth article content for the side box.
 */

const newsData = [
  {
    id: 1,
    category: 'Latest Update',
    badgeColor: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    headline: 'CRCCF Organizes Awareness Workshop on Digital Services',
    // 1-2 lines for TV internal screen
    description: 'Special session focused on citizen cyber safety, grievance redressal, and seamless digital service delivery.',
    date: '04 Nov 2026',
    time: '10:24 AM',
    tickerText: 'Workshop attended by officials and citizens for better service delivery • Digital literacy outreach expanded across 45 districts • Safe online banking guidelines published',
    // Complete full content for the right-side box
    fullStory: `The Cyber Response and Crime Coordination Force (CRCCF) successfully conducted an extensive multi-stakeholder capacity-building workshop dedicated to modern digital public infrastructure. The initiative brought together over 350 nodal administrative officers, cybersecurity researchers, and community leaders to streamline digital service delivery protocols.

During the keynote address, the director emphasized proactive cyber defense, swift resolution of public digital grievances, and the rapid rollout of encrypted identity verification channels. Attendees engaged in hands-on simulation modules dealing with real-time phishing interception and sovereign portal security frameworks.`,
    keyPoints: [
      'Comprehensive cyber safety training extended to frontline administrative officers.',
      'Deployment of localized citizen grievance tracking portals across 45 urban districts.',
      'Interactive modules on secure identity credentials and biometric protection.',
    ],
    officialSource: 'CRCCF Directorate of Public Outreach & Training',
    tags: ['CyberSafety', 'DigitalIndia', 'Governance', 'Workshops'],
  },
  {
    id: 2,
    category: 'Breaking News',
    badgeColor: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    headline: 'CRCCF Issues High-Priority Cyber Threat Advisory for Financial Sector',
    description: 'National taskforce detects coordinated phishing attacks targeting banking APIs; immediate security patches deployed.',
    date: '04 Nov 2026',
    time: '11:15 AM',
    tickerText: 'Critical advisory issued to 120+ financial institutions • Multi-factor authentication mandated for corporate transactions • Rapid incident response team activated',
    fullStory: `An urgent red-alert advisory has been disseminated to commercial banks, payment gateway providers, and fintech corporations following the detection of an advanced persistent threat (APT) campaign. The threat actors attempted to leverage automated API probing to compromise enterprise clearing gateways.

CRCCF emergency response units immediately collaborated with central regulatory authorities to isolate targeted endpoints and distribute cryptographic hash signatures. All financial institutions have been mandated to conduct mandatory security audits and enforce hardware-backed multi-factor authorization.`,
    keyPoints: [
      'Immediate mandatory API endpoint shielding and token rotation enforced.',
      'Over 120 banking networks integrated into real-time threat telemetry sharing.',
      'Zero reported consumer fund compromises due to preemptive algorithmic isolation.',
    ],
    officialSource: 'National Cyber Emergency Response Taskforce',
    tags: ['BreakingAlert', 'FintechSecurity', 'BankingAPI', 'ThreatAdvisory'],
  },
  {
    id: 3,
    category: 'Upcoming Event',
    badgeColor: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    headline: 'National Cybersecurity Summit 2026 Scheduled for Next Month',
    description: 'Forensic experts and industry pioneers gather to address emerging AI security threats and sovereign cloud resilience.',
    date: '04 Nov 2026',
    time: '12:00 PM',
    tickerText: 'Registrations open for youth ethical hacking championship • Keynote speakers announced from international telecom & tech leaders • Exhibition passes available online',
    fullStory: `Preparations are in the final stages for the upcoming National Cybersecurity Summit 2026, set to convene at the International Convention Center. The flagship three-day symposium will explore sovereign cloud defense architectures, generative AI countermeasures, and critical national infrastructure resilience.

Over 2,000 delegates comprising international forensic scientists, defense technologists, and collegiate innovators will participate in interactive war-gaming exercises and ethical hacking arenas. Special plenary tracks will focus on public-private threat intelligence syndication.`,
    keyPoints: [
      'Three days of keynote panels, technical deep-dives, and policy roundtables.',
      'Youth Cyber Vanguard Championship featuring real-time defense simulations.',
      'Launch of the National Cyber Resilience Whitepaper 2026-2030.',
    ],
    officialSource: 'CRCCF Strategic Events Committee',
    tags: ['CyberSummit2026', 'FutureTech', 'AIThreats', 'NationalSecurity'],
  },
  {
    id: 4,
    category: 'Public Alert',
    badgeColor: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    headline: 'Citizens Warned Against Fake Investment Schemes on Social Media',
    description: 'Advisory issued against fraudulent messaging groups offering fake returns. Never share OTPs or click unverified links.',
    date: '04 Nov 2026',
    time: '01:30 PM',
    tickerText: 'Report suspicious cyber fraud immediately at toll-free helpline 1930 • Over 1,200 fraudulent domain names blocked this week • Never share bank OTP or remote access pins',
    fullStory: `A high-volume public warning has been issued regarding deceptive social media investment circles promising impossible daily interest yields. Scammers have been creating spoofed trading applications and impersonating accredited institutional wealth managers on encrypted chat channels.

The Cyber Crime Coordination Cell has deactivated over 1,200 fraudulent domain names and seized hundreds of illicit mule accounts in a coordinated multi-state sweep. Citizens are urged to verify regulatory registrations on official portals before transferring funds.`,
    keyPoints: [
      'Immediate reporting protocol via the 1930 national cyber toll-free helpline.',
      'Strict caution against downloading unverified APK files or screen-sharing tools.',
      'All legitimate financial institutions are barred from soliciting funds via chat groups.',
    ],
    officialSource: 'CRCCF Citizen Protection & Cyber Intelligence Wing',
    tags: ['PublicWarning', 'FraudAlert', 'Helpline1930', 'SafeInvesting'],
  },
  {
    id: 5,
    category: 'Technology News',
    badgeColor: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    headline: 'Next-Gen Quantum-Resistant Encryption Rolled Out for Government Portals',
    description: 'Advanced cryptographic algorithms integrated into public identity systems to secure critical citizen records.',
    date: '04 Nov 2026',
    time: '02:45 PM',
    tickerText: 'Zero-trust architecture implemented across state datacenter networks • High-speed encrypted fiber link operational between capital command centers',
    fullStory: `In a landmark technological milestone for sovereign cyber defense, government digital infrastructure has transitioned to lattice-based post-quantum cryptography (PQC). The proactive upgrade immunizes sensitive citizen biometric databases, land title registries, and administrative archives against future quantum decryption capabilities.

Engineered in partnership with leading computational research universities, the hybrid encryption scheme functions with minimal latency overhead across existing server clusters, establishing a blueprint for modern secure e-governance.`,
    keyPoints: [
      'Complete post-quantum cryptographic hardening of central identity gateways.',
      'Zero-trust security paradigm integrated across state and federal servers.',
      'Backwards-compatible architecture requiring no hardware obsolescence for citizens.',
    ],
    officialSource: 'Department of Sovereign Cryptography & Standards',
    tags: ['QuantumResistant', 'Encryption', 'NextGenTech', 'ZeroTrust'],
  },
];

export default newsData;
export { newsData, newsData as newsRecords };

