// Predefined vintage radio stations across bands
export const STATIONS = [
  { id: 'air-delhi', band: 'MW', freq: '800 kHz', name: 'AIR Delhi (Vividh Bharati)', pos: 28, genre: 'Golden Era Melodies' },
  { id: 'calcutta', band: 'MW', freq: '1000 kHz', name: 'Calcutta A Broadcaster', pos: 46, genre: 'Classical & Tagore' },
  { id: 'bombay', band: 'MW', freq: '1080 kHz', name: 'Bombay Commercial Service', pos: 54, genre: 'Retro Film Songs' },
  { id: 'ceylon', band: 'MW', freq: '1540 kHz', name: 'Radio Ceylon (Binaca Geetmala)', pos: 88, genre: 'Ameen Sayani Classics' },
  { id: 'fm-gold', band: 'FM', freq: '92.4 MHz', name: 'AIR FM Gold', pos: 22, genre: 'Nostalgic Hits' },
  { id: 'fm-retro', band: 'FM', freq: '98.3 MHz', name: 'Retro Magic 98.3', pos: 51, genre: '70s & 80s Evergreens' },
  { id: 'fm-vividh', band: 'FM', freq: '102.8 MHz', name: 'Vividh Bharati FM', pos: 74, genre: 'Radio Drama & Gazals' },
  { id: 'fm-jazz', band: 'FM', freq: '106.2 MHz', name: 'Midnight Jazz Club', pos: 91, genre: 'Warm Tube Jazz' },
  { id: 'bbc-sw', band: 'SW', freq: '6.15 MHz', name: 'BBC World Service (London)', pos: 35, genre: 'Shortwave News Chimes' },
  { id: 'voa-sw', band: 'SW', freq: '11.8 MHz', name: 'Voice of America SW', pos: 68, genre: 'Global Cultural Dispatch' },
];

// Authentic Vintage Radio Broadcast News Bulletins (English World Service)
export const NEWS_ITEMS = [
  {
    id: 'cyber-ceo-sandeep-panda',
    category: 'Breaking',
    badge: '🔴 SPECIAL BULLETIN (LIVE)',
    source: 'Cyber Crime HQ',
    time: '02:00 PM',
    headline: 'Cyber Crime CEO Sandeep Panda Sir Visiting Company Today at 2:00 PM',
    details: 'Special Radio Broadcast: Cyber Crime Chief Executive Officer (CEO) Mr. Sandeep Panda Sir is arriving today at 2:00 PM for the official annual inspection and high-level cybersecurity review. All management and technical teams have finalized grand welcoming arrangements.',
    spokenText: 'Good day! This is the radio news bulletin. Today, Cyber Crime CEO Sandeep Panda Sir is visiting the company at 2 PM for the high-level security inspection. All teams have completed grand welcoming preparations for his arrival. Thank you.',
    isSpecial: true,
  },
  {
    id: 'n1',
    category: 'National',
    badge: 'National Desk',
    source: 'New Delhi Newsroom',
    time: '10:00 AM',
    headline: 'Parliament Passes Landmark Infrastructure and Rural Connectivity Bill',
    details: 'Both houses of Parliament have passed the National Rural Connectivity Mission with overwhelming consensus, speeding up national expressways, rail networks, and digital grid electrification.',
    spokenText: 'Parliament has passed the landmark Infrastructure and Rural Connectivity Bill with broad consensus.',
  },
  {
    id: 'n2',
    category: 'World',
    badge: 'BBC World Service',
    source: 'London Bureau',
    time: '10:15 AM',
    headline: 'Geneva Global Summit: 40 Nations Sign Clean Energy Multilateral Accord',
    details: 'Delegates from 40 nations gathered in Geneva have formally ratified an international agreement to accelerate cross-border renewable solar, wind, and green energy technology sharing.',
    spokenText: 'At the Geneva Global Summit, 40 nations signed a historic clean energy multilateral accord.',
  },
  {
    id: 'n3',
    category: 'Sports',
    badge: 'Sports Wire',
    source: 'Cricket Dispatch',
    time: '10:30 AM',
    headline: 'Indian Cricket Team Clinches Historic Five-Match Test Series 3-1',
    details: 'Led by a lethal final-day bowling spell, India bowled out the opposing lineup for 185 to seal an unforgettable 3-1 series victory in classic Test match cricket.',
    spokenText: 'The Indian Cricket Team has clinched an emphatic Test series victory 3-1.',
  },
  {
    id: 'n4',
    category: 'Cinema',
    badge: 'Vividh Bharati Music',
    source: 'Bombay Broadcast',
    time: '11:00 AM',
    headline: 'Vividh Bharati Special: Golden Era Bollywood Melodies Airing Tonight',
    details: 'By overwhelming listener request, a retrospective radio special honoring timeless 1970s and 80s musical masters S.D. Burman, R.D. Burman, and Madan Mohan airs at 8 PM.',
    spokenText: 'Vividh Bharati brings a special Golden Era retro music festival tonight.',
  },
  {
    id: 'n5',
    category: 'Science',
    badge: 'Space Telemetry',
    source: 'ISRO Operations',
    time: '11:20 AM',
    headline: 'ISRO Achievement: Cryogenic Engine Test for Gaganyaan Mission Successful',
    details: 'ISRO scientists at Mahendragiri propulsion complex have successfully completed the 720-second hot-fire test of the cryogenic upper stage engine, validating mission safety parameters.',
    spokenText: 'ISRO has successfully completed the cryogenic engine hot-fire test for the Gaganyaan mission.',
  },
  {
    id: 'n6',
    category: 'Business',
    badge: 'Financial Times',
    source: 'Bombay Commercial',
    time: '11:45 AM',
    headline: 'Stock Markets Reach All-Time Highs; Sensex Closes Above 80,000 Mark',
    details: 'Surging foreign institutional inflows across banking and manufacturing heavyweights propelled benchmark equities to historic zeniths while the domestic currency gained strength.',
    spokenText: 'Stock markets reached record highs with the Sensex closing above eighty thousand.',
  },
  {
    id: 'n7',
    category: 'Weather',
    badge: 'Meteorology Bureau',
    source: 'Weather Central',
    time: '12:00 PM',
    headline: 'Active Monsoon Brings Sustained Rainfall; Farmer Advisories Released',
    details: 'Widespread seasonal rainfall across agricultural heartlands has bolstered reservoir levels and accelerated kharif crop sowing across central and northern territories.',
    spokenText: 'The weather bureau reports sustained active monsoon showers and releases seasonal farming advisories.',
  },
];

export const NEWS_CATEGORIES = [
  { key: 'ALL', label: 'All News' },
  { key: 'Breaking', label: '⚡ CEO Sandeep Panda Visit' },
  { key: 'National', label: 'National' },
  { key: 'World', label: 'World' },
  { key: 'Sports', label: 'Sports' },
  { key: 'Cinema', label: 'Culture & Music' },
  { key: 'Science', label: 'Science & Tech' },
  { key: 'Business', label: 'Business' },
  { key: 'Weather', label: 'Weather' },
];

// Preserved market indices data
export const marketIndices = [
  { name: 'NIFTY 50', value: '24,852.15', change: '+142.30', percent: '+0.58%', isUp: true },
  { name: 'SENSEX', value: '81,332.72', change: '+415.98', percent: '+0.51%', isUp: true },
  { name: 'NASDAQ', value: '17,879.30', change: '-62.40', percent: '-0.35%', isUp: false },
  { name: 'S&P 500', value: '5,588.27', change: '+12.10', percent: '+0.22%', isUp: true },
  { name: 'FTSE 100', value: '8,245.10', change: '+31.40', percent: '+0.38%', isUp: true },
  { name: 'CR REALTIME', value: '4,120.80', change: '+55.20', percent: '+1.36%', isUp: true },
];


// --- Merged from AssociatedFiles/radioAudio.js ---
// Radio Tuning and Signal Engine (Silent - Sound Effects Removed)
// Computes carrier lock, resonance, and station reception for the vintage radio display

class RadioAudioEngine {
  constructor() {
    this.activeStation = null;
    this.isPlaying = false;
    this.isInitialized = true;
  }

  init() {
    // Silent
  }

  resume() {
    // Silent
  }

  playMechanicalClick() {
    // Silent
  }

  playNewsChime() {
    // Silent
  }

  setPower(_powerOn) {
    // Silent
  }

  setVolume(_volPercent) {
    // Silent
  }

  // Updates tuning calculations based on needle position & target stations
  updateTuning(tuningPos, stations) {
    if (!stations || !stations.length) {
      return { signalStrength: 0, activeStation: null };
    }

    let closestStation = null;
    let minDistance = Infinity;

    stations.forEach((st) => {
      const dist = Math.abs(st.pos - tuningPos);
      if (dist < minDistance) {
        minDistance = dist;
        closestStation = st;
      }
    });

    const lockRange = 3.6;
    const inRange = minDistance < lockRange;
    const signalStrength = inRange ? Math.max(0, 1 - minDistance / lockRange) : 0;
    this.activeStation = signalStrength > 0.35 ? closestStation : null;

    return {
      signalStrength,
      activeStation: this.activeStation,
    };
  }

  destroy() {
    // Silent
  }
}

export const radioAudio = new RadioAudioEngine();

