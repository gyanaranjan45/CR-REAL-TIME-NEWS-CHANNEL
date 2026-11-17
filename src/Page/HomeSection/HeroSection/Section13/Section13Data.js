export const featuredVehicle = {
  brand: 'MAHINDRA & TATA ADVANCED LABS',
  model: 'Apex-E Hyperion All-Electric SUV',
  range: '680 KM',
  accel: '3.4s (0-100 km/h)',
  battery: '94 kWh LFP Blade',
  chargeSpeed: '10-80% in 18 Mins',
  summary: 'India’s first production electric performance SUV built on 800-volt silicon-carbide architecture with dual-motor all-wheel drive and Level 2+ ADAS.',
  image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
};

export const autoNews = [
  {
    id: 1,
    badge: 'BATTERY TECH',
    title: 'Solid-State Electrolyte Pilot Cell Developed in Pune Achieves 1,200 Charge Cycles Without Degradation',
    time: '3h ago',
  },
  {
    id: 2,
    badge: 'COMMERCIAL EV',
    title: '500 Hydrogen Fuel-Cell Heavy Trucks Deployed Across Odisha-Jharkhand Mineral Corridors',
    time: '5h ago',
  },
  {
    id: 3,
    badge: 'MARKET STATS',
    title: 'Electric Two-Wheeler Penetration Reaches 24% of Total Monthly Vehicle Registrations',
    time: '7h ago',
  },
];



// --- Merged from AssociatedFiles/SatelliteNewsMachine.js ---
// Configuration and Content Data for CRCCF 3D Satellite News Broadcasting Machine

export const SATELLITE_DATA = {
  station: {
    callsign: "CRCCF",
    subTag: "NEWS",
    frequency: "14.248 GHz",
    status: "BROADCASTING LIVE",
    satelliteName: "INSAT-4CR / GEOSYNC-7",
    signalStrength: 99.4,
    uplinkBitrate: "128 Mbps HD",
  },
  
  // Left Panel News List (CRCCF HEADLINES & LIVE FEEDS)
  leftNews: {
    tag: "CRCCF HEADLINES",
    subTag: "LIVE FEED",
    items: [
      {
        id: "L1",
        text: "सैटलाइट नेटवर्क 24x7 ग्लोबल प्रसारण सक्रिय",
        timestamp: "10:30 IST",
        category: "NETWORK",
      },
      {
        id: "L2",
        text: "एंटीक गैजेट्स व रेट्रो इलेक्ट्रॉनिक्स की भारी मांग",
        timestamp: "10:22 IST",
        category: "TRENDING",
      },
      {
        id: "L3",
        text: "1970s के दुर्लभ मॉडल्स की अंतरराष्ट्रीय नीलामी",
        timestamp: "10:14 IST",
        category: "AUCTION",
      }
    ]
  },

  // Central Breaking News Area (Headline & Story Content)
  breakingNews: {
    tag: "BREAKING NEWS",
    headlineLine1: "पुराने जमाने की",
    headlineHighlight: "‘बैटरी बॉक्स टॉर्च’",
    headlineLine2: "फिर चर्चा में",
    summary: "1960–1980 के दशक की मेटल बॉडी और हैवी ग्लास रिफ्लेक्टर वाली ऐतिहासिक टॉर्च कलेक्टर्स और ऑक्शन में रिकॉर्ड मांग पर पहुंची।",
    storyPoints: [
      {
        id: "SP1",
        badge: "विंटेज दौर",
        text: "1960 से 1980 के दशक का मजबूत मेटल फ्रेम व ब्रास स्विच निर्माण"
      },
      {
        id: "SP2",
        badge: "भारी मांग",
        text: "एंटीक कलेक्टर्स और ऑक्शन मार्केट में रिकॉर्ड कीमत पर नीलामी"
      },
      {
        id: "SP3",
        badge: "रेट्रो क्रेज",
        text: "पुरानी तकनीक और क्लासिक इंजीनियरिंग का पुनर्जीवन"
      }
    ],
    footerTag: "📡 विशेष रिपोर्ट • CRCCF ब्यूरो • 24x7 सैटलाइट कवरेज",
  },

  // Right Panel News List (TOP NEWS)
  topNews: {
    tag: "TOP NEWS",
    headlines: [
      {
        id: "R1",
        text: "1960–1980 के दशक की टॉर्च फिर बनी आकर्षण",
        timestamp: "18:42 IST",
        category: "RETRO TECH",
      },
      {
        id: "R2",
        text: "कलेक्टरों व म्यूजियम में बढ़ी रिकॉर्ड मांग",
        timestamp: "18:35 IST",
        category: "AUCTION",
      },
      {
        id: "R3",
        text: "पुरानी तकनीक और विंटेज डिजाइन की वापसी",
        timestamp: "18:20 IST",
        category: "SPECIAL REPORT",
      }
    ]
  },

  animationSequence: {
    entranceDuration: 2.2,
    dishRotationSpeed: 16,
    ledBlinkRate: 1.8,
  }
};
