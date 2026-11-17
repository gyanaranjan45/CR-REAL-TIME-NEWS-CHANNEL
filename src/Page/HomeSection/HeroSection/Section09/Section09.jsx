import React, { useState, useEffect, useCallback } from 'react';

// ==========================================
// 1. CYBER CRIME INTELLIGENCE DATA
// ==========================================
const PRESET_STORIES = [
  {
    id: 'alerts',
    tag: 'CYBER • TECHNOLOGY • AWARENESS • UPDATES',
    titleMain: 'Cyber Crime',
    titleAccent: 'News Update',
    subTitle: 'Latest Cyber Crime Alerts',
    date: 'NOVEMBER 05, 2026',
    edition: 'FINAL EDITION — NO. 4409',
    headline: 'Global Ransomware Surge Neutralized by Multi-Agency Coalition',
    paragraphs: [
      'Federal cyber security agencies and allied international task forces confirmed the disruption of a major ransomware syndicate responsible for attacks across critical infrastructure sectors.',
      'Investigative telemetry indicates the threat actors leveraged novel zero-day vulnerabilities in enterprise perimeter gateways before deploying secondary encrypted payload routines.',
    ],
    highlights: [
      'Zero-Day Vulnerability Patched across Cloud Proxies',
      'Encrypted Extortion Vaults Seized in Operation Sentinel',
      'Threat Actor Command & Control Infrastructure Dismantled'
    ]
  },
  {
    id: 'phishing',
    tag: 'CRIMINAL TELEMETRY • THREAT INTEL • FORENSICS',
    titleMain: 'Cyber Crime',
    titleAccent: 'News Update',
    subTitle: 'AI-Generated Phishing Outbreak',
    date: 'NOVEMBER 05, 2026',
    edition: 'FLASH DISPATCH — PRIORITY 1',
    headline: 'Deepfake Audio and Hyper-Realistic Spoofing Bypass Corporate Controls',
    paragraphs: [
      'Financial institutions report a steep escalation in targeted social engineering campaigns utilizing synthetic voice clones of executive leadership to authorize fraudulent wire transfers.',
      'Security researchers urge organizations to implement out-of-band cryptographic validation for high-value financial movements and critical credential resets.',
    ],
    highlights: [
      'Automated Voice Verification Mandated for Wire Approvals',
      'Synthetic Persona Infiltration Vectors Identified',
      'Enterprise Phishing Resistance Up 38% Post-Simulation'
    ]
  },
  {
    id: 'darknet',
    tag: 'INTELLIGENCE REPORT • DIGITAL INVESTIGATION',
    titleMain: 'Cyber Crime',
    titleAccent: 'News Update',
    subTitle: 'Underground Data Vaults Leaked',
    date: 'NOVEMBER 05, 2026',
    edition: 'SPECIAL REPORT — UNRESTRICTED',
    headline: 'Massive Repository of Stolen Session Tokens Infiltrated by Analysts',
    paragraphs: [
      'An intelligence consortium successfully acquired decrypted ledgers from a premier darknet broker, revealing over 40 million harvested browser cookies and authentication tokens.',
      'Security operations centers globally are revoking stale bearer tokens to prevent unauthorized cloud dashboard access and privilege escalation cascades.',
    ],
    highlights: [
      'Over 40 Million Compromised Session Cookies Nullified',
      'Credential Stuffing Automations Blocked at Border Gateways',
      'Hardware Security Key Mandate Enacted across Critical Orgs'
    ]
  }
];

// ==========================================
// 2. WEB AUDIO API SOUND ENGINE
// ==========================================
class TypewriterSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playKeyClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.04;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.008));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(3200 + Math.random() * 600, t);
    noiseFilter.Q.setValueAtTime(3.5, t);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.5, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.04);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(950 + Math.random() * 200, t);
    osc.frequency.exponentialRampToValueAtTime(350, t + 0.05);

    oscGain.gain.setValueAtTime(0.25, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);

    noise.start(t);
    osc.start(t);
    noise.stop(t + 0.05);
    osc.stop(t + 0.06);
  }

  playSpacebar() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(95, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.09);

    oscGain.gain.setValueAtTime(0.6, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.1);
    this.playKeyClick();
  }

  playBell() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(2480, t);
    gain1.gain.setValueAtTime(0.35, t);
    gain1.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(4960, t);
    gain2.gain.setValueAtTime(0.18, t);
    gain2.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);

    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 1.2);
    osc2.stop(t + 0.8);
  }

  playPlatenRoll() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.linearRampToValueAtTime(40, t + 0.12);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.13);
  }
}

const soundEngine = new TypewriterSoundEngine();

// ==========================================
// 3. TYPEWRITER KEY COMPONENT
// ==========================================
function TypewriterKey({ 
  label, 
  subLabel, 
  width = 'w-5 xs:w-6 sm:w-7 md:w-8', 
  height = 'h-5 xs:h-6 sm:h-7 md:h-8',
  isWide = false, 
  isSpace = false,
  isPressed = false, 
  onClick 
}) {
  if (isSpace) {
    return (
      <div 
        onClick={onClick}
        className={`group relative h-5 xs:h-6 sm:h-7 md:h-8 cursor-pointer transition-all duration-75 select-none ${
          isPressed ? 'translate-y-0.5' : 'hover:-translate-y-0.5'
        }`}
        style={{ width: '58%' }}
      >
        <div className="absolute inset-0 bg-[#0b1016] rounded-xs sm:rounded-md translate-y-0.5 shadow-md" />
        <div className="absolute inset-0 rounded-xs sm:rounded-md p-[1px] sm:p-[1.5px] bg-gradient-to-b from-[#fcebb6] via-[#d4af37] to-[#7d5c19] shadow-sm">
          <div className="w-full h-full rounded-[2px] sm:rounded-[3px] bg-gradient-to-b from-[#2a3746] via-[#1a232c] to-[#121820] flex items-center justify-center border-t border-white/20">
            <div className="w-2/3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`group relative flex-shrink cursor-pointer select-none transition-all duration-75 ${width} ${height} ${
        isPressed ? 'translate-y-0.5' : 'hover:-translate-y-0.5'
      }`}
    >
      <div 
        className={`absolute inset-0 rounded-full bg-[#0a0f15] translate-y-0.5 blur-[0.5px] ${
          isWide ? 'rounded-md sm:rounded-xl' : 'rounded-full'
        }`} 
      />
      <div 
        className={`relative w-full h-full p-[1px] sm:p-[2px] shadow-xs sm:shadow-sm transition-shadow duration-75 ${
          isWide ? 'rounded-xs sm:rounded-lg' : 'rounded-full'
        } ${isPressed ? 'shadow-inner' : 'shadow-[0_1.5px_3px_rgba(0,0,0,0.5)]'}`}
        style={{
          background: 'linear-gradient(145deg, #fcebb6 0%, #e2c068 25%, #d4af37 50%, #997316 75%, #5a420b 100%)',
        }}
      >
        <div 
          className={`w-full h-full flex flex-col items-center justify-center transition-colors duration-75 border ${
            isWide ? 'rounded-[2px] sm:rounded-[7px] px-0.5 sm:px-1.5' : 'rounded-full'
          } ${
            isPressed 
              ? 'bg-[#ece4d0] border-[#b09e7f] shadow-inner' 
              : 'bg-gradient-to-b from-[#fdfbf6] via-[#f7f2e4] to-[#ede3cb] border-[#dfd2b5] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(150,130,90,0.3)]'
          }`}
        >
          {subLabel && (
            <span className="hidden sm:inline text-[6px] sm:text-[8px] font-newspaper font-bold text-[#4a4233] leading-none mb-0.5">
              {subLabel}
            </span>
          )}
          <span className={`font-serifTitle font-bold text-[#1a1815] tracking-tight leading-none ${
            isWide 
              ? 'text-[6px] xs:text-[7px] sm:text-[9px] md:text-[10px] font-sans font-semibold text-[#2f2921] truncate max-w-full' 
              : 'text-[8px] xs:text-[9px] sm:text-xs md:text-sm'
          }`}>
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. TYPEWRITER KEYBOARD COMPONENT
// ==========================================
function TypewriterKeyboard({ activeKey, onKeyPress }) {
  const row1 = [
    { key: '1', label: '1', sub: '!' },
    { key: '2', label: '2', sub: '@' },
    { key: '3', label: '3', sub: '#' },
    { key: '4', label: '4', sub: '$' },
    { key: '5', label: '5', sub: '%' },
    { key: '6', label: '6', sub: '^' },
    { key: '7', label: '7', sub: '&' },
    { key: '8', label: '8', sub: '*' },
    { key: '9', label: '9', sub: '(' },
    { key: '0', label: '0', sub: ')' },
    { key: '-', label: '-', sub: '_' },
    { key: '=', label: '=', sub: '+' },
    { key: 'Backspace', label: 'Backspace', isWide: true, width: 'w-8 xs:w-10 sm:w-13 md:w-15' },
  ];

  const row2 = [
    { key: 'Tab', label: 'Tab', isWide: true, width: 'w-6 xs:w-8 sm:w-10 md:w-11' },
    { key: 'q', label: 'Q' },
    { key: 'w', label: 'W' },
    { key: 'e', label: 'E' },
    { key: 'r', label: 'R' },
    { key: 't', label: 'T' },
    { key: 'y', label: 'Y' },
    { key: 'u', label: 'U' },
    { key: 'i', label: 'I' },
    { key: 'o', label: 'O' },
    { key: 'p', label: 'P' },
    { key: '[', label: '{', sub: '[' },
    { key: ']', label: '}', sub: ']' },
  ];

  const row3 = [
    { key: 'CapsLock', label: 'Caps', isWide: true, width: 'w-7 xs:w-9 sm:w-11 md:w-13' },
    { key: 'a', label: 'A' },
    { key: 's', label: 'S' },
    { key: 'd', label: 'D' },
    { key: 'f', label: 'F' },
    { key: 'g', label: 'G' },
    { key: 'h', label: 'H' },
    { key: 'j', label: 'J' },
    { key: 'k', label: 'K' },
    { key: 'l', label: 'L' },
    { key: ';', label: ';', sub: ':' },
    { key: "'", label: "'", sub: '"' },
    { key: 'Enter', label: 'Enter', isWide: true, width: 'w-8 xs:w-10 sm:w-13 md:w-15' },
  ];

  const row4 = [
    { key: 'ShiftLeft', label: 'Shift', isWide: true, width: 'w-8 xs:w-10 sm:w-13 md:w-15' },
    { key: 'z', label: 'Z' },
    { key: 'x', label: 'X' },
    { key: 'c', label: 'C' },
    { key: 'v', label: 'V' },
    { key: 'b', label: 'B' },
    { key: 'n', label: 'N' },
    { key: 'm', label: 'M' },
    { key: ',', label: ',', sub: '<' },
    { key: '.', label: '.', sub: '>' },
    { key: '/', label: '/', sub: '?' },
    { key: 'ShiftRight', label: 'Shift', isWide: true, width: 'w-8 xs:w-10 sm:w-13 md:w-15' },
  ];

  return (
    <div className="relative w-full flex flex-col items-center gap-[2px] xs:gap-1 sm:gap-1.5 px-0.5 sm:px-3 pt-0.5 sm:pt-1 pb-1.5 sm:pb-2.5 z-20">
      <div className="w-full flex justify-center items-center gap-[1.5px] xs:gap-1 sm:gap-1.5 flex-nowrap">
        {row1.map((item) => (
          <TypewriterKey
            key={item.key}
            label={item.label}
            subLabel={item.sub}
            width={item.width || 'w-5 xs:w-6 sm:w-7 md:w-8'}
            height="h-5 xs:h-6 sm:h-7 md:h-8"
            isWide={item.isWide}
            isPressed={activeKey?.toLowerCase() === item.key.toLowerCase()}
            onClick={() => onKeyPress(item.key)}
          />
        ))}
      </div>

      <div className="w-full flex justify-center items-center gap-[1.5px] xs:gap-1 sm:gap-1.5 flex-nowrap">
        {row2.map((item) => (
          <TypewriterKey
            key={item.key}
            label={item.label}
            subLabel={item.sub}
            width={item.width || 'w-5 xs:w-6 sm:w-7 md:w-8'}
            height="h-5 xs:h-6 sm:h-7 md:h-8"
            isWide={item.isWide}
            isPressed={activeKey?.toLowerCase() === item.key.toLowerCase()}
            onClick={() => onKeyPress(item.key)}
          />
        ))}
      </div>

      <div className="w-full flex justify-center items-center gap-[1.5px] xs:gap-1 sm:gap-1.5 flex-nowrap">
        {row3.map((item) => (
          <TypewriterKey
            key={item.key}
            label={item.label}
            subLabel={item.sub}
            width={item.width || 'w-5 xs:w-6 sm:w-7 md:w-8'}
            height="h-5 xs:h-6 sm:h-7 md:h-8"
            isWide={item.isWide}
            isPressed={activeKey?.toLowerCase() === item.key.toLowerCase()}
            onClick={() => onKeyPress(item.key)}
          />
        ))}
      </div>

      <div className="w-full flex justify-center items-center gap-[1.5px] xs:gap-1 sm:gap-1.5 flex-nowrap">
        {row4.map((item) => (
          <TypewriterKey
            key={item.key}
            label={item.label}
            subLabel={item.sub}
            width={item.width || 'w-5 xs:w-6 sm:w-7 md:w-8'}
            height="h-5 xs:h-6 sm:h-7 md:h-8"
            isWide={item.isWide}
            isPressed={activeKey?.toLowerCase() === item.key.toLowerCase()}
            onClick={() => onKeyPress(item.key)}
          />
        ))}
      </div>

      <div className="w-full flex justify-center items-center pt-0.5">
        <TypewriterKey
          isSpace
          isPressed={activeKey === ' ' || activeKey === 'Space'}
          onClick={() => onKeyPress(' ')}
        />
      </div>
    </div>
  );
}

// ==========================================
// 5. TYPEBAR BASKET COMPONENT
// ==========================================
function TypebarBasket({ isStriking = false }) {
  const barsCount = 26;
  const bars = Array.from({ length: barsCount }, (_, i) => {
    const angle = -60 + (120 / (barsCount - 1)) * i;
    return { id: i, angle };
  });

  return (
    <div className="relative w-full h-16 sm:h-20 overflow-hidden flex items-end justify-center pointer-events-none">
      <div 
        className="absolute bottom-0 w-[84%] sm:w-[76%] h-28 rounded-t-full bg-gradient-to-b from-[#0a0f16] via-[#101924] to-[#172533] shadow-[inset_0_12px_20px_rgba(0,0,0,0.9),0_2px_4px_rgba(255,255,255,0.05)] border-t border-[#3d5166]/40"
      />

      <div className="absolute bottom-2 w-52 sm:w-60 h-24 flex items-end justify-center">
        {bars.map((bar) => (
          <div
            key={bar.id}
            className="absolute bottom-0 origin-bottom w-[1.5px] sm:w-[2px] h-14 sm:h-18 rounded-t-xs"
            style={{
              transform: `rotate(${bar.angle}deg)`,
              background: 'linear-gradient(to top, #232d38 0%, #7e8d9d 50%, #d8e2ec 85%, #a8b7c7 100%)',
              boxShadow: '0 0 1px rgba(0,0,0,0.8)',
            }}
          >
            <div className="w-1 h-2 -ml-[1px] bg-gradient-to-r from-[#8fa0b2] via-[#f1f5f9] to-[#506071] rounded-t-xs shadow-xs" />
          </div>
        ))}
      </div>

      <div 
        className={`absolute bottom-3 w-1.5 h-16 bg-gradient-to-t from-[#334155] via-[#cbd5e1] to-[#ffffff] rounded-t-sm origin-bottom transition-all duration-75 z-20 ${
          isStriking 
            ? 'scale-y-125 -translate-y-2 brightness-150 shadow-[0_0_6px_rgba(255,255,255,0.8)]' 
            : 'scale-y-95 opacity-80'
        }`}
      >
        <div className="w-2 h-2.5 -ml-0.5 bg-gradient-to-b from-[#ffffff] to-[#94a3b8] rounded-t-sm shadow-md" />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-0.5">
        <div className="w-6 h-6 relative flex items-center justify-center">
          <div className="absolute -top-1 w-5 h-4 flex justify-between">
            <div className="w-1 h-4 bg-gradient-to-b from-[#d4af37] via-[#997819] to-[#40300a] rounded-t-xs" />
            <div className="w-1 h-4 bg-gradient-to-b from-[#d4af37] via-[#997819] to-[#40300a] rounded-t-xs" />
          </div>
          <div className="w-7 h-3 bg-gradient-to-r from-[#2a3642] via-[#526477] to-[#2a3642] rounded-xs border-t border-b border-[#d4af37]/60 shadow-sm flex items-center justify-center">
            <div className="w-4 h-0.5 bg-[#121820] rounded-full" />
          </div>
        </div>
      </div>

      <svg 
        className="absolute bottom-0 w-[86%] sm:w-[80%] h-9 pointer-events-none z-10" 
        viewBox="0 0 400 60" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldRimGradSingle" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#87651a" />
            <stop offset="25%" stopColor="#eecf73" />
            <stop offset="50%" stopColor="#fae7a5" />
            <stop offset="75%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#7a5a12" />
          </linearGradient>
        </defs>
        <path 
          d="M 10,60 Q 200,-15 390,60" 
          fill="none" 
          stroke="url(#goldRimGradSingle)" 
          strokeWidth="3" 
        />
      </svg>
    </div>
  );
}

// ==========================================
// 6. TYPEWRITER CARRIAGE COMPONENT
// ==========================================
function TypewriterCarriage({ onCarriageReturn, onFeedPaper, children }) {
  const [leverPulled, setLeverPulled] = useState(false);
  const [knobRotating, setKnobRotating] = useState(false);
  const [isMountSpinning, setIsMountSpinning] = useState(true);

  useEffect(() => {
    // Spin the knobs synchronously while the paper feeds out on load
    const timer = setTimeout(() => {
      setIsMountSpinning(false);
    }, 1450);
    return () => clearTimeout(timer);
  }, []);

  const handleReturnClick = () => {
    setLeverPulled(true);
    soundEngine.playBell();
    setTimeout(() => {
      soundEngine.playPlatenRoll();
      if (onCarriageReturn) onCarriageReturn();
    }, 180);
    setTimeout(() => setLeverPulled(false), 450);
  };

  const handleKnobClick = () => {
    setKnobRotating(true);
    soundEngine.playPlatenRoll();
    if (onFeedPaper) onFeedPaper();
    setTimeout(() => setKnobRotating(false), 300);
  };

  const brassKnobStyle = {
    background: 'repeating-linear-gradient(90deg, #916a16, #916a16 2px, #e8ca65 3px, #fce99f 4px, #aa8014 6px)'
  };

  return (
    <div className="relative w-full flex flex-col items-center z-10">
      {/* Platen Paper Feed Slot Mask: Clips anything below the platen slot so internal paper is 100% hidden */}
      <div 
        className="relative w-full flex justify-center -mb-5 xs:-mb-6 sm:-mb-7 z-10"
        style={{
          clipPath: 'polygon(-100% -1000px, 200% -1000px, 200% calc(100% - 4px), -100% calc(100% - 4px))',
          WebkitClipPath: 'polygon(-100% -1000px, 200% -1000px, 200% calc(100% - 4px), -100% calc(100% - 4px))',
        }}
      >
        <div className="w-full flex justify-center animate-paper-feed-on-load origin-bottom">
          {children}
        </div>
      </div>

      <div className="relative w-[92%] xs:w-[90%] sm:w-[86%] max-w-2xl h-8 xs:h-10 sm:h-12 flex items-center justify-between z-20">
        <div className="relative flex items-center -ml-3 xs:-ml-4 sm:-ml-6">
          <button
            type="button"
            title="Carriage Return"
            onClick={handleReturnClick}
            className="group relative cursor-pointer outline-none focus:ring-0 z-30 scale-[0.7] xs:scale-85 sm:scale-100 origin-bottom-right"
          >
            <div 
              className={`transition-all duration-300 origin-bottom-right ${
                leverPulled 
                  ? 'rotate-[-22deg] translate-x-1.5 -translate-y-1.5' 
                  : 'hover:-rotate-3'
              }`}
            >
              <svg width="36" height="48" viewBox="0 0 44 60" className="drop-shadow-sm">
                <path
                  d="M38,55 C38,40 28,25 14,14 C10,10 6,10 6,14 C6,18 12,22 22,34 C26,38 30,48 30,55"
                  fill="none"
                  stroke="url(#chromeGradSingle)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <ellipse cx="8" cy="12" rx="6" ry="10" fill="url(#brassPaddleSingle)" stroke="#8c6a1e" strokeWidth="1" />
                <defs>
                  <linearGradient id="chromeGradSingle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#cbd5e1" />
                    <stop offset="70%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <linearGradient id="brassPaddleSingle" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#faf0cb" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#785913" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>

          {/* Left Platen Knob with Load Spin Animation */}
          <button
            type="button"
            title="Left Platen Roller Knob"
            onClick={handleKnobClick}
            className={`group relative flex items-center cursor-pointer outline-none focus:ring-0 transition-transform duration-300 ${
              isMountSpinning 
                ? 'animate-knob-load-left' 
                : knobRotating 
                ? 'rotate-90' 
                : 'hover:scale-105'
            }`}
          >
            <div className="w-5 xs:w-7 sm:w-9 h-8 xs:h-10 sm:h-12 rounded-xs bg-gradient-to-r from-[#4d3609] via-[#d4af37] to-[#785913] p-[1px] sm:p-[1.5px] shadow-lg flex items-center justify-center">
              <div 
                style={brassKnobStyle}
                className="w-full h-full rounded-[2px] border-y border-[#3d2c08] shadow-inner flex flex-col justify-between py-0.5"
              >
                <div className="w-full h-0.5 bg-[#fef08a]/60" />
                <div className="w-full h-0.5 bg-[#422006]/60" />
                <div className="w-full h-0.5 bg-[#fef08a]/60" />
              </div>
            </div>
            <div className="w-1.5 xs:w-2.5 h-5 xs:h-6 bg-gradient-to-r from-[#1e293b] via-[#475569] to-[#0f172a] shadow-sm -ml-0.5 rounded-r-xs" />
          </button>
        </div>

        <div className="relative flex-1 h-7 xs:h-8 sm:h-10 mx-1 bg-gradient-to-b from-[#182029] via-[#2c3846] to-[#0f151c] rounded-xs shadow-[inset_0_3px_5px_rgba(0,0,0,0.8),inset_0_-1px_3px_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden border-t border-[#475569]/40 border-b border-black">
          <div className="absolute top-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-1 w-[94%] h-0.5 bg-gradient-to-r from-[#94a3b8] via-[#e2e8f0] to-[#64748b] rounded-full shadow-xs flex justify-around items-center px-4 sm:px-8">
            <div className="w-2 sm:w-2.5 h-1 sm:h-1.5 bg-[#1e293b] border border-[#64748b] rounded-xs" />
            <div className="w-2 sm:w-2.5 h-1 sm:h-1.5 bg-[#1e293b] border border-[#64748b] rounded-xs" />
          </div>
        </div>

        <div className="relative flex items-center -mr-3 xs:-mr-4 sm:-mr-6">
          <div className="w-1.5 xs:w-2.5 h-5 xs:h-6 bg-gradient-to-r from-[#0f172a] via-[#475569] to-[#1e293b] shadow-sm -mr-0.5 rounded-l-xs" />

          {/* Right Platen Knob with Load Spin Animation */}
          <button
            type="button"
            title="Right Platen Roller Knob"
            onClick={handleKnobClick}
            className={`group relative flex items-center cursor-pointer outline-none focus:ring-0 transition-transform duration-300 ${
              isMountSpinning 
                ? 'animate-knob-load-right' 
                : knobRotating 
                ? '-rotate-90' 
                : 'hover:scale-105'
            }`}
          >
            <div className="w-5 xs:w-7 sm:w-9 h-8 xs:h-10 sm:h-12 rounded-xs bg-gradient-to-r from-[#785913] via-[#d4af37] to-[#4d3609] p-[1px] sm:p-[1.5px] shadow-lg flex items-center justify-center">
              <div 
                style={brassKnobStyle}
                className="w-full h-full rounded-[2px] border-y border-[#3d2c08] shadow-inner flex flex-col justify-between py-0.5"
              >
                <div className="w-full h-0.5 bg-[#fef08a]/60" />
                <div className="w-full h-0.5 bg-[#422006]/60" />
                <div className="w-full h-0.5 bg-[#fef08a]/60" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. NEWSPAPER SHEET COMPONENT
// ==========================================
function NewspaperSheet({ currentStory, paperScrollOffset = 0, onCycleStory }) {
  const paperGrainStyle = {
    backgroundColor: '#faf6ec',
    backgroundImage: `
      radial-gradient(#d3c9af 0.75px, transparent 0.75px),
      radial-gradient(#b8ad93 0.75px, #faf6ec 0.75px)
    `,
    backgroundSize: '24px 24px',
    backgroundPosition: '0 0, 12px 12px'
  };

  return (
    <div 
      style={{
        ...paperGrainStyle,
        transform: `translateY(${paperScrollOffset}px)`,
      }}
      className="relative w-[92%] sm:w-[84%] max-w-lg rounded-t-md shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-6px_10px_rgba(0,0,0,0.08)] border-t border-x border-[#ded4be] px-2.5 sm:px-5 pt-2.5 sm:pt-3 pb-6 sm:pb-8 transition-transform duration-300 origin-bottom"
    >
      <div className="relative border border-[#3b4b5e]/40 p-1.5 sm:p-2.5 rounded-xs">
        <div className="absolute -top-0.5 -left-0.5 w-2 sm:w-2.5 h-2 sm:h-2.5 border-t-2 border-l-2 border-[#1e293b]" />
        <div className="absolute -top-0.5 -right-0.5 w-2 sm:w-2.5 h-2 sm:h-2.5 border-t-2 border-r-2 border-[#1e293b]" />
        <div className="absolute -bottom-0.5 -left-0.5 w-2 sm:w-2.5 h-2 sm:h-2.5 border-b-2 border-l-2 border-[#1e293b]" />
        <div className="absolute -bottom-0.5 -right-0.5 w-2 sm:w-2.5 h-2 sm:h-2.5 border-b-2 border-r-2 border-[#1e293b]" />

        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#4b5563] to-[#4b5563]" />
          <p className="text-[6.5px] sm:text-[9px] tracking-[0.16em] sm:tracking-[0.2em] font-serif uppercase text-[#334155] font-semibold whitespace-nowrap">
            {currentStory?.tag || 'CYBER • TECHNOLOGY • AWARENESS • UPDATES'}
          </p>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#4b5563] to-[#4b5563]" />
        </div>

        <div className="w-full h-[1px] bg-[#27384a]/30 mb-1.5 sm:mb-2" />

        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
          <div className="flex-shrink-0 w-8 sm:w-11 h-6 sm:h-9 bg-white/70 border-[1.5px] border-[#1d4ed8] rounded-xs shadow-xs p-0.5 flex flex-col justify-between">
            <div className="w-full h-0.5 sm:h-1 bg-[#1d4ed8] rounded-xs flex items-center justify-between px-0.5">
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <div className="w-2.5 sm:w-3 h-0.5 bg-white rounded-full" />
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-2 sm:w-2.5 h-2.5 sm:h-3 border border-[#1d4ed8] bg-blue-50/50 rounded-xs flex items-center justify-center">
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#1d4ed8]/40 rounded-full" />
              </div>
              <div className="flex-1 flex flex-col gap-0.5">
                <div className="w-full h-0.5 bg-[#1d4ed8]/70" />
                <div className="w-4/5 h-0.5 bg-[#1d4ed8]/70" />
              </div>
            </div>
            <div className="flex gap-0.5">
              <div className="w-1/2 h-0.5 bg-[#1d4ed8]/60" />
              <div className="w-1/2 h-0.5 bg-[#1d4ed8]/60" />
            </div>
          </div>

          <h1 className="text-base sm:text-2xl md:text-[26px] leading-tight font-serifTitle tracking-tight flex flex-wrap items-baseline gap-x-1 sm:gap-x-1.5">
            <span className="font-extrabold text-[#112233]">
              {currentStory?.titleMain || 'Cyber Crime'}
            </span>
            <span className="font-serif italic font-bold text-[#b91c1c]">
              {currentStory?.titleAccent || 'News Update'}
            </span>
          </h1>
        </div>

        <div className="w-full space-y-[1px] sm:space-y-[1.5px] mb-2 sm:mb-2.5">
          <div className="w-full h-[1.5px] bg-[#1a2b3c]" />
          <div className="w-full h-[0.75px] bg-[#1a2b3c]/60" />
        </div>

        <div className="grid grid-cols-12 gap-2 sm:gap-3 items-start">
          <div className="col-span-5 relative group">
            <div className="relative rounded-xs overflow-hidden shadow-sm border border-[#1e293b]/50 bg-[#06101e] aspect-[4/3]">
              <img 
                src="/hacker-graphic.png" 
                alt="Cyber Threat Hacker" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-[#0b1b33]', 'to-[#020617]');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-md border-[1.5px] border-cyan-400/80 shadow-[0_0_10px_rgba(6,182,212,0.8)] flex items-center justify-center">
                  <div className="w-2.5 sm:w-3 h-3 sm:h-4 border-2 border-cyan-300 rounded-t-full -mt-1 sm:-mt-1.5" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-[6px] sm:text-[7px] font-newspaper text-[#5c5446] mt-0.5 sm:mt-1 px-0.5">
              <span>FIG. 1 — PERIMETER</span>
              <span className="font-mono text-cyan-800 font-bold hidden sm:inline">SECURED</span>
            </div>
          </div>

          <div 
            onClick={onCycleStory}
            title="Click to cycle threat reports"
            className="col-span-7 flex flex-col justify-between cursor-pointer group/story"
          >
            <div>
              <div className="flex items-baseline justify-between mb-0.5">
                <h2 className="text-[10px] sm:text-sm md:text-[15px] font-serifTitle font-bold text-[#142332] tracking-tight">
                  {currentStory?.subTitle || 'Latest Cyber Crime Alerts'}
                </h2>
                <span className="text-[6px] sm:text-[7.5px] font-newspaper font-bold text-[#b91c1c] tracking-widest uppercase opacity-85">
                  {currentStory?.edition?.split('—')?.[0] || 'FLASH DISPATCH'}
                </span>
              </div>

              <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-[#b91c1c] rounded-xs mb-1 sm:mb-1.5 shadow-xs" />

              <h3 className="text-[8px] sm:text-[10.5px] font-serifTitle font-bold text-[#1c2430] leading-tight sm:leading-snug mb-1 sm:mb-1.5 tracking-tight group-hover/story:text-blue-950 transition-colors line-clamp-2">
                {currentStory?.headline}
              </h3>

              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[6.5px] sm:text-[8px] leading-[1.25] sm:leading-[1.32] text-[#2c261e] font-serif">
                <div className="space-y-0.5 text-justify">
                  <p className="line-clamp-4">
                    <span className="font-bold text-[#111827]">
                      {currentStory?.paragraphs[0]?.slice(0, 20)}
                    </span>
                    {currentStory?.paragraphs[0]?.slice(20)}
                  </p>
                </div>

                <div className="space-y-0.5 text-justify border-l border-[#d3cbb7] pl-1 sm:pl-1.5">
                  <p className="line-clamp-4">
                    {currentStory?.paragraphs[1] || currentStory?.paragraphs[0]}
                  </p>
                </div>
              </div>

              <div className="mt-1 sm:mt-1.5 pt-0.5 sm:pt-1 border-t border-[#d3cbb7]/80 flex items-center justify-between text-[6px] sm:text-[7px] font-newspaper text-[#4e463a]">
                <span className="font-bold text-[#b91c1c] uppercase tracking-wider">INTEL:</span>
                <span className="truncate max-w-[110px] sm:max-w-[170px] italic font-medium">
                  {currentStory?.highlights?.[0] || 'Zero-Day Patched across Proxies'}
                </span>
                <span className="font-mono text-[#6b6252] hidden xs:inline">{currentStory?.date || 'NOV 05, 2026'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 8. TYPEWRITER BODY & SCULPTED CHASSIS
// ==========================================
function TypewriterBody({ isStriking, activeKey, onKeyPress }) {
  return (
    <div className="relative w-full max-w-[98%] xs:max-w-[94%] sm:max-w-xl md:max-w-2xl flex flex-col items-center">
      <div 
        className="relative w-full rounded-xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#243547] via-[#172533] to-[#0e1620] border-t border-[#48637e]/50 overflow-hidden pb-1.5 xs:pb-2 sm:pb-2.5 pt-0.5"
        style={{
          boxShadow: `
            0 16px 32px -8px rgba(0, 0, 0, 0.75),
            0 0 0 1px rgba(255, 255, 255, 0.08),
            inset 0 1.5px 3px rgba(255, 255, 255, 0.25),
            inset 0 -6px 12px rgba(0, 0, 0, 0.8)
          `
        }}
      >
        <div className="w-full px-3 xs:px-4 sm:px-6 pt-0.5">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />
        </div>

        <div className="relative w-full flex justify-between items-start px-2 xs:px-3 sm:px-4 pt-0.5">
          <div className="w-8 xs:w-10 sm:w-20 h-5 xs:h-6 sm:h-7 rounded-tl-lg xs:rounded-tl-xl border-t-2 border-l-2 border-[#d4af37]/70 shadow-xs" />
          <div className="flex-1 max-w-xs xs:max-w-sm sm:max-w-md mx-0.5 xs:mx-1">
            <TypebarBasket isStriking={isStriking} />
          </div>
          <div className="w-8 xs:w-10 sm:w-20 h-5 xs:h-6 sm:h-7 rounded-tr-lg xs:rounded-tr-xl border-t-2 border-r-2 border-[#d4af37]/70 shadow-xs" />
        </div>

        <div className="relative w-[98%] xs:w-[96%] mx-auto my-0.5">
          <div className="w-full h-1 xs:h-1.5 rounded-full bg-gradient-to-r from-[#111922] via-[#2f4255] to-[#111922] shadow-inner flex items-center justify-center">
            <div className="w-[90%] h-[0.75px] bg-gradient-to-r from-transparent via-[#f8e398] to-transparent opacity-70" />
          </div>
        </div>

        <div className="relative w-[98%] xs:w-[96%] mx-auto rounded-lg xs:rounded-xl bg-gradient-to-b from-[#090d13] via-[#101721] to-[#18232f] p-0.5 xs:p-1 sm:p-2 shadow-[inset_0_8px_16px_rgba(0,0,0,0.9),0_1px_2px_rgba(255,255,255,0.1)] border-t border-[#000000]">
          <TypewriterKeyboard 
            activeKey={activeKey}
            onKeyPress={onKeyPress}
          />
        </div>

        <div className="relative w-full mt-0.5 sm:mt-1 px-3 xs:px-4 sm:px-5 flex justify-between items-center">
          <div className="w-10 xs:w-14 sm:w-24 h-0.5 sm:h-1 rounded-full bg-gradient-to-r from-[#d4af37] via-[#94721c] to-transparent opacity-70" />
          <div className="text-[7px] xs:text-[8px] sm:text-[9px] tracking-widest uppercase font-serif text-[#d4af37]/60 font-bold truncate">
            ROYAL CYBER ED. 1928
          </div>
          <div className="w-10 xs:w-14 sm:w-24 h-0.5 sm:h-1 rounded-full bg-gradient-to-l from-[#d4af37] via-[#94721c] to-transparent opacity-70" />
        </div>
      </div>

      <div className="w-[88%] h-4 xs:h-5 sm:h-6 bg-black/60 blur-md xs:blur-lg -mt-2 sm:-mt-3 rounded-full pointer-events-none" />
    </div>
  );
}

// ==========================================
// 9. MASTER TYPERWRITER DESIGN COMPONENT
// ==========================================
function TyperwriterDesign() {
  const [activeKey, setActiveKey] = useState(null);
  const [isStriking, setIsStriking] = useState(false);
  const [paperScrollOffset, setPaperScrollOffset] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const currentStory = PRESET_STORIES[storyIndex];

  // Cycle through real cyber news stories
  const handleCycleStory = useCallback(() => {
    soundEngine.playPlatenRoll();
    setStoryIndex((prev) => (prev + 1) % PRESET_STORIES.length);
  }, []);

  // Typebar strike animation trigger
  const triggerStrike = useCallback(() => {
    setIsStriking(true);
    setTimeout(() => setIsStriking(false), 120);
  }, []);

  // Carriage return & bell
  const handleCarriageReturn = useCallback(() => {
    soundEngine.playBell();
    setTimeout(() => {
      soundEngine.playPlatenRoll();
    }, 180);
  }, []);

  // Feed paper scroll
  const handleFeedPaper = useCallback(() => {
    soundEngine.playPlatenRoll();
    setPaperScrollOffset((prev) => (prev > -40 ? prev - 10 : 0));
  }, []);

  // Keystrokes handler
  const handleKeystroke = useCallback((key) => {
    setActiveKey(key);
    setTimeout(() => setActiveKey(null), 100);
    triggerStrike();

    if (key === ' ' || key === 'Space') {
      soundEngine.playSpacebar();
      return;
    }

    if (key === 'Enter') {
      handleCarriageReturn();
      return;
    }

    soundEngine.playKeyClick();
  }, [triggerStrike, handleCarriageReturn]);

  // Physical keyboard listener & initial page load audio effects
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      handleKeystroke(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial load mechanical sound effects as paper feeds out
    const rollTimer = setTimeout(() => {
      try {
        soundEngine.playPlatenRoll();
      } catch {
        // audio context suspended until user gesture
      }
    }, 250);

    const bellTimer = setTimeout(() => {
      try {
        soundEngine.playBell();
      } catch {
        // audio context suspended
      }
    }, 1450);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(rollTimer);
      clearTimeout(bellTimer);
    };
  }, [handleKeystroke]);

  return (
    <div className="relative w-full py-8 sm:py-14 bg-[#f6eee2] text-stone-800 flex flex-col items-center justify-center overflow-x-hidden select-none p-1 sm:p-4">
      {/* Keyframe Styles for Paper Roll & Platen Knobs on Load */}
      <style>{`
        @keyframes paperRollEmergence {
          0% {
            transform: translateY(102%);
          }
          75% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes knobRollInitialLeft {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(720deg);
          }
        }

        @keyframes knobRollInitialRight {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-720deg);
          }
        }

        .animate-paper-feed-on-load {
          animation: paperRollEmergence 1.4s cubic-bezier(0.18, 0.9, 0.32, 1) forwards;
          will-change: transform;
        }

        .animate-knob-load-left {
          animation: knobRollInitialLeft 1.4s cubic-bezier(0.18, 0.9, 0.32, 1) forwards;
        }

        .animate-knob-load-right {
          animation: knobRollInitialRight 1.4s cubic-bezier(0.18, 0.9, 0.32, 1) forwards;
        }
      `}</style>

      {/* Main Centered Scaled Stage */}
      <div className="relative z-20 w-full max-w-[560px] flex flex-col items-center justify-center scale-[0.68] min-[360px]:scale-[0.74] min-[400px]:scale-[0.82] sm:scale-90 md:scale-[0.96] lg:scale-100 origin-center transition-transform my-auto">
        <TypewriterCarriage
          onCarriageReturn={handleCarriageReturn}
          onFeedPaper={handleFeedPaper}
        >
          <NewspaperSheet
            currentStory={currentStory}
            paperScrollOffset={paperScrollOffset}
            onCycleStory={handleCycleStory}
          />
        </TypewriterCarriage>

        <TypewriterBody
          isStriking={isStriking}
          activeKey={activeKey}
          onKeyPress={handleKeystroke}
        />
      </div>

      {/* Desk Surface Horizon & Soft Shadow */}
      <div className="relative z-10 w-full max-w-xl mx-auto pointer-events-none -mt-3 sm:-mt-4">
        <div className="w-full h-5 sm:h-6 bg-gradient-to-t from-[#cbb292]/30 to-transparent blur-md" />
      </div>
    </div>
  );
}

export const Section09 = () => {
  return (
    <section
      id="section-09"
      className="w-full relative select-none overflow-hidden bg-[#f6eee2] border-b border-[#e5d9c7]"
    >
      <TyperwriterDesign />
    </section>
  );
};

export default Section09;
