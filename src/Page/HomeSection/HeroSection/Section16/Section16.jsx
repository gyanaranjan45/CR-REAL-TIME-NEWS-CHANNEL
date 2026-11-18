import React, { useState, useEffect, useRef, useMemo } from 'react';
import { STATIONS, NEWS_ITEMS, NEWS_CATEGORIES } from './Section16Data';
import { radioAudio } from './Section16Data';

export const Section16 = () => {
  // Radio mechanical and electrical states
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(65); // 0 to 100
  const [tuning, setTuning] = useState(51); // 0 to 100 dial position
  const [band, setBand] = useState('FM'); // MW, FM, SW
  const [antennaHeight, setAntennaHeight] = useState(85); // 0 (Down / Collapsed) to 100 (Up / Extended)
  const [antennaAngle, setAntennaAngle] = useState(88.5); // degrees tilt (0 = Upright, 88.5 = Along Border)
  const [signalQuality, setSignalQuality] = useState(0); // 0 to 1
  const [activeStation, setActiveStation] = useState(null);

  // News bulletin states
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Dragging and interaction refs
  const dialRef = useRef(null);
  const isDraggingTuningKnob = useRef(false);
  const isDraggingVolumeKnob = useRef(false);
  const dragStartY = useRef(0);
  const dragStartVal = useRef(0);

  const isDraggingAntenna = useRef(false);
  const dragAntennaStartY = useRef(0);
  const dragAntennaStartX = useRef(0);
  const dragAntennaStartH = useRef(85);

  // Filter stations by current band
  const bandStations = useMemo(() => {
    return STATIONS.filter((s) => s.band === band);
  }, [band]);

  // Filter news according to active category
  const filteredNews = useMemo(() => {
    if (selectedCategory === 'ALL') return NEWS_ITEMS;
    return NEWS_ITEMS.filter((n) => n.category === selectedCategory);
  }, [selectedCategory]);

  const currentNews = filteredNews[selectedNewsIndex % (filteredNews.length || 1)] || NEWS_ITEMS[0];

  // Continuous headline ticker string
  const allHeadlinesMarquee = useMemo(() => {
    return NEWS_ITEMS.map((item) => `[${item.badge}] ${item.headline}`).join('  ✦✦  ') + '  ✦✦  ';
  }, []);

  // Sync news category with tuned station
  useEffect(() => {
    if (activeStation) {
      if (activeStation.id.includes('delhi')) setSelectedCategory('National');
      else if (activeStation.id.includes('bbc') || activeStation.id.includes('voa')) setSelectedCategory('World');
      else if (activeStation.id.includes('ceylon') || activeStation.id.includes('retro') || activeStation.id.includes('vividh')) setSelectedCategory('Cinema');
      else if (activeStation.id.includes('bombay')) setSelectedCategory('Business');
    }
  }, [activeStation]);

  // Frequency tuning and signal calculation (Silent - Sound Effects Removed)
  useEffect(() => {
    if (!power) {
      radioAudio.setPower(false);
      setSignalQuality(0);
      setActiveStation(null);
      return;
    }

    radioAudio.setPower(true);
    radioAudio.setVolume(volume);

    const result = radioAudio.updateTuning(tuning, bandStations);
    if (result) {
      const antennaFactor = 0.7 + (antennaHeight / 100) * 0.3;
      setSignalQuality(result.signalStrength * antennaFactor);
      setActiveStation(result.activeStation || null);
    }
  }, [power, volume, tuning, band, bandStations, antennaHeight]);

  // News navigation handlers
  const handlePrevNews = (e) => {
    e.stopPropagation();
    const nextIdx = selectedNewsIndex > 0 ? selectedNewsIndex - 1 : filteredNews.length - 1;
    setSelectedNewsIndex(nextIdx);
  };

  const handleNextNews = (e) => {
    e.stopPropagation();
    const nextIdx = (selectedNewsIndex + 1) % filteredNews.length;
    setSelectedNewsIndex(nextIdx);
  };

  const handleSelectCategory = (catKey) => {
    setSelectedCategory(catKey);
    setSelectedNewsIndex(0);
  };

  // Antenna interaction handlers
  const toggleAntennaTilt = () => {
    setAntennaAngle((prev) => (prev <= 15 ? 88.5 : 0));
  };

  const handleTipMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isDraggingAntenna.current = true;
    dragAntennaStartY.current = e.clientY;
    dragAntennaStartX.current = e.clientX;
    dragAntennaStartH.current = antennaHeight;

    let didDrag = false;

    const handleMouseMove = (moveEvent) => {
      if (!isDraggingAntenna.current) return;
      const deltaY = dragAntennaStartY.current - moveEvent.clientY;
      const deltaX = moveEvent.clientX - dragAntennaStartX.current;
      const effectiveDelta = antennaAngle > 45 ? (deltaX * 0.75 - deltaY * 0.35) : deltaY * 0.85;

      if (Math.abs(effectiveDelta) > 3) {
        didDrag = true;
      }
      const nextH = Math.max(0, Math.min(100, dragAntennaStartH.current + effectiveDelta));
      setAntennaHeight(Math.round(nextH));
    };

    const handleMouseUp = () => {
      isDraggingAntenna.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (!didDrag) {
        setAntennaHeight((prev) => (prev > 30 ? 0 : 100));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTipTouchStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    isDraggingAntenna.current = true;
    dragAntennaStartY.current = touch.clientY;
    dragAntennaStartX.current = touch.clientX;
    dragAntennaStartH.current = antennaHeight;

    let didDrag = false;

    const handleTouchMove = (moveEvent) => {
      if (!isDraggingAntenna.current) return;
      const t = moveEvent.touches[0];
      const deltaY = dragAntennaStartY.current - t.clientY;
      const deltaX = t.clientX - dragAntennaStartX.current;
      const effectiveDelta = antennaAngle > 45 ? (deltaX * 0.75 - deltaY * 0.35) : deltaY * 0.85;

      if (Math.abs(effectiveDelta) > 4) {
        didDrag = true;
      }
      const nextH = Math.max(0, Math.min(100, dragAntennaStartH.current + effectiveDelta));
      setAntennaHeight(Math.round(nextH));
    };

    const handleTouchEnd = () => {
      isDraggingAntenna.current = false;
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (!didDrag) {
        setAntennaHeight((prev) => (prev > 30 ? 0 : 100));
      }
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleAntennaWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY < 0 ? 10 : -10;
    setAntennaHeight((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  const changeBand = (newBand) => {
    setBand(newBand);
  };

  const togglePower = () => {
    setPower(!power);
  };

  // Handle tuning knob dragging (Mouse)
  const handleTuningMouseDown = (e) => {
    e.preventDefault();
    isDraggingTuningKnob.current = true;
    dragStartY.current = e.clientY;
    dragStartVal.current = tuning;

    const handleMouseMove = (moveEvent) => {
      if (!isDraggingTuningKnob.current) return;
      const deltaY = dragStartY.current - moveEvent.clientY;
      const sensitivity = 0.35;
      const nextVal = Math.max(0, Math.min(100, dragStartVal.current + deltaY * sensitivity));
      setTuning(Math.round(nextVal * 10) / 10);
    };

    const handleMouseUp = () => {
      isDraggingTuningKnob.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle tuning knob dragging (Mobile Touch)
  const handleTuningTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    isDraggingTuningKnob.current = true;
    dragStartY.current = touch.clientY;
    dragStartVal.current = tuning;

    const handleTouchMove = (moveEvent) => {
      if (!isDraggingTuningKnob.current) return;
      const t = moveEvent.touches[0];
      const deltaY = dragStartY.current - t.clientY;
      const sensitivity = 0.35;
      const nextVal = Math.max(0, Math.min(100, dragStartVal.current + deltaY * sensitivity));
      setTuning(Math.round(nextVal * 10) / 10);
    };

    const handleTouchEnd = () => {
      isDraggingTuningKnob.current = false;
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  // Handle volume knob dragging (Mouse)
  const handleVolumeMouseDown = (e) => {
    e.preventDefault();
    isDraggingVolumeKnob.current = true;
    dragStartY.current = e.clientY;
    dragStartVal.current = volume;

    const handleMouseMove = (moveEvent) => {
      if (!isDraggingVolumeKnob.current) return;
      const deltaY = dragStartY.current - moveEvent.clientY;
      const sensitivity = 0.5;
      const nextVal = Math.max(0, Math.min(100, dragStartVal.current + deltaY * sensitivity));
      setVolume(Math.round(nextVal));
    };

    const handleMouseUp = () => {
      isDraggingVolumeKnob.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle volume knob dragging (Mobile Touch)
  const handleVolumeTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    isDraggingVolumeKnob.current = true;
    dragStartY.current = touch.clientY;
    dragStartVal.current = volume;

    const handleTouchMove = (moveEvent) => {
      if (!isDraggingVolumeKnob.current) return;
      const t = moveEvent.touches[0];
      const deltaY = dragStartY.current - t.clientY;
      const sensitivity = 0.5;
      const nextVal = Math.max(0, Math.min(100, dragStartVal.current + deltaY * sensitivity));
      setVolume(Math.round(nextVal));
    };

    const handleTouchEnd = () => {
      isDraggingVolumeKnob.current = false;
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTuningWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1 : -1;
    setTuning((prev) => Math.max(0, Math.min(100, Math.round((prev + delta * 1.5) * 10) / 10)));
  };

  const handleVolumeWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 3 : -3;
    setVolume((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  // Direct click or touch on dial scale glass
  const handleDialClick = (e) => {
    if (!dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setTuning(Math.round(pct * 10) / 10);
  };

  const handleDialTouch = (e) => {
    if (!dialRef.current) return;
    const touch = e.touches[0];
    const rect = dialRef.current.getBoundingClientRect();
    const clickX = touch.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setTuning(Math.round(pct * 10) / 10);
  };

  // Magic Eye Tube deflection shadow angle (90 deg = detuned, 4 deg = tight resonance lock)
  const magicEyeAngle = Math.max(4, Math.round(90 * (1 - signalQuality * 0.95)));

  // Responsive scaling container hook
  const containerRef = useRef(null);
  const apparatusRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [apparatusHeight, setApparatusHeight] = useState(660);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      const containerW = containerRef.current ? containerRef.current.clientWidth : w;
      const mobile = (w < 768) || (containerW < 520);
      setIsMobile(mobile);

      const targetWidth = mobile ? 440 : 960;
      const availWidth = Math.min(containerW, w) - (mobile ? 16 : 40);
      const fit = availWidth / targetWidth;
      setScale(Math.max(0.35, Math.min(1.0, fit)));

      if (apparatusRef.current) {
        const measured = apparatusRef.current.offsetHeight;
        if (measured > 200) {
          setApparatusHeight(measured);
        }
      } else {
        setApparatusHeight(mobile ? 760 : 660);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Continuous observer on apparatus size to ensure height is always 100% accurate on all devices
  useEffect(() => {
    if (!apparatusRef.current || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect?.height || apparatusRef.current?.offsetHeight;
        if (h && h > 200) {
          setApparatusHeight(Math.ceil(h));
        }
      }
    });
    ro.observe(apparatusRef.current);
    return () => ro.disconnect();
  }, [isMobile]);

  return (
    <section
      id="section-16"
      className="w-full relative pt-6 pb-12 lg:pt-8 lg:pb-16 select-none overflow-hidden border-b border-slate-300"
      style={{
        background: 'linear-gradient(180deg, #f8f9fa 0%, #edf1f5 45%, #e2e8f0 100%)',
      }}
    >
      {/* Section Header */}
      <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span>Akashvani • All India Radio World Service</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-serif">
          Vintage All-Wave Valve Receiver & Broadcast Teletype
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-1 font-mono">
          Interactive 1950s Superheterodyne Tube Receiver • Adjust telescopic antenna, tune shortwave & medium wave bands, and monitor real-time teletype news dispatches
        </p>
      </div>

      {/* Centered Radio Apparatus Container */}
      <div
        ref={containerRef}
        className="w-full flex justify-center items-start overflow-visible relative"
        style={{ height: `${Math.ceil(apparatusHeight * scale + (isMobile ? 28 : 20))}px` }}
      >
        <div
          ref={apparatusRef}
          className="relative flex flex-col items-center shrink-0 transition-transform duration-75 ease-out"
          style={{
            width: isMobile ? '430px' : '940px',
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            paddingTop: isMobile ? '10px' : '16px',
          }}
        >
          {/* 1. LEATHER CARRYING STRAP (Pure SVG) */}
          <div className={`relative z-10 ${isMobile ? 'w-64' : 'w-80'} h-9 flex justify-center -mb-2`}>
            <svg width={isMobile ? "210" : "270"} height="34" viewBox="0 0 270 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="leatherStrap" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#422213" />
                  <stop offset="25%" stopColor="#63371f" />
                  <stop offset="65%" stopColor="#3b1d0f" />
                  <stop offset="100%" stopColor="#1f0c05" />
                </linearGradient>
                <linearGradient id="strapBrass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#eab308" />
                  <stop offset="50%" stopColor="#fef08a" />
                  <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
              </defs>
              <rect x="20" y="11" width="18" height="20" rx="2" fill="url(#strapBrass)" stroke="#713f12" strokeWidth="1" />
              <circle cx="29" cy="21" r="3.5" fill="#3b1d0f" />
              <rect x="232" y="11" width="18" height="20" rx="2" fill="url(#strapBrass)" stroke="#713f12" strokeWidth="1" />
              <circle cx="241" cy="21" r="3.5" fill="#3b1d0f" />
              <path d="M 34 20 Q 135 0 236 20 Q 135 9 34 20 Z" fill="url(#leatherStrap)" stroke="#1a0a04" strokeWidth="1" />
              <path d="M 38 18 Q 135 3 232 18" stroke="#92400e" strokeWidth="0.75" strokeDasharray="3 3" fill="none" />
            </svg>
          </div>

          {/* 2. SOLID MAHOGANY WOOD CABINET (Pure SVG Textures & Gradients) */}
          <div
            className={`relative z-10 ${isMobile ? 'w-[430px] p-3.5' : 'w-[940px] p-6'} rounded-2xl border-4 transition-all duration-300`}
            style={{
              background: 'linear-gradient(180deg, #422013 0%, #2e140a 35%, #1f0c05 80%, #150703 100%)',
              borderColor: '#190a04',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.95), inset 0 2px 4px rgba(255, 235, 180, 0.25), inset 0 -6px 12px rgba(0, 0, 0, 0.8)',
            }}
          >
            {/* TELESCOPIC CHROME ANTENNA (Mounted directly on top edge of cabinet) */}
            <div className={`absolute ${isMobile ? '-top-[210px] left-3' : '-top-[244px] left-6'} z-0 flex flex-col items-center select-none`}>
              <svg width="140" height="250" viewBox="0 0 140 250" fill="none" className="overflow-visible">
                <defs>
                  <linearGradient id="chromeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9ca3af" />
                    <stop offset="30%" stopColor="#ffffff" />
                    <stop offset="60%" stopColor="#d1d5db" />
                    <stop offset="100%" stopColor="#4b5563" />
                  </linearGradient>
                  <linearGradient id="chromeJoint" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4b5563" />
                    <stop offset="40%" stopColor="#e5e7eb" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                  <radialGradient id="chromeBall" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#9ca3af" />
                    <stop offset="85%" stopColor="#374151" />
                    <stop offset="100%" stopColor="#111827" />
                  </radialGradient>
                  <radialGradient id="antennaTipGrad" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#ff7b7b" />
                    <stop offset="40%" stopColor="#ef4444" />
                    <stop offset="85%" stopColor="#b91c1c" />
                    <stop offset="100%" stopColor="#580808" />
                  </radialGradient>
                </defs>

                {/* Base Mounting Bracket on top of cabinet */}
                <rect x="52" y="241" width="36" height="8" rx="2" fill="url(#chromeGrad)" stroke="#1f2937" strokeWidth="0.8" />
                <circle cx="58" cy="245" r="1.8" fill="#1f2937" />
                <circle cx="82" cy="245" r="1.8" fill="#1f2937" />

                {/* Swivel Pivot Ball Turret */}
                <circle cx="70" cy="239" r="8" fill="url(#chromeBall)" stroke="#374151" strokeWidth="0.8" />
                <circle cx="70" cy="239" r="3" fill="#111827" />

                {/* Rotated Telescopic Mast */}
                <g transform={`rotate(${antennaAngle} 70 239)`} className="transition-transform duration-500 ease-in-out">
                  {/* CHROME ANTENNA BODY / ROD: Touching toggles Straight (0°) and Tilt (88.5° Border) */}
                  <g
                    onClick={toggleAntennaTilt}
                    onTouchEnd={(e) => { e.preventDefault(); toggleAntennaTilt(); }}
                    className="cursor-pointer group/rod"
                    title="Touch antenna body to toggle Straight / Tilt down along border"
                  >
                    <line x1="70" y1="239" x2="70" y2={191 - (antennaHeight / 100) * 110} stroke="transparent" strokeWidth="22" />

                    {/* Stage 1 (Base Outer Sleeve - Fixed) */}
                    <rect x="66" y="191" width="8" height="48" rx="1.5" fill="url(#chromeGrad)" stroke="#374151" strokeWidth="0.5" />
                    <rect x="64.5" y="189" width="11" height="3.5" rx="1" fill="url(#chromeJoint)" />

                    {/* Stage 2 (Medium - slides upwards) */}
                    <rect
                      x="66.5"
                      y={191 - (antennaHeight / 100) * 36}
                      width="7"
                      height="44"
                      rx="1"
                      fill="url(#chromeGrad)"
                      stroke="#374151"
                      strokeWidth="0.5"
                      className="transition-all duration-200"
                    />
                    <rect
                      x="65"
                      y={189 - (antennaHeight / 100) * 36}
                      width="10"
                      height="3"
                      rx="1"
                      fill="url(#chromeJoint)"
                      className="transition-all duration-200"
                    />

                    {/* Stage 3 (Fine - slides upwards) */}
                    <rect
                      x="67"
                      y={191 - (antennaHeight / 100) * 72}
                      width="6"
                      height="44"
                      rx="1"
                      fill="url(#chromeGrad)"
                      stroke="#374151"
                      strokeWidth="0.5"
                      className="transition-all duration-200"
                    />
                    <rect
                      x="65.5"
                      y={189 - (antennaHeight / 100) * 72}
                      width="9"
                      height="2.5"
                      rx="1"
                      fill="url(#chromeJoint)"
                      className="transition-all duration-200"
                    />

                    {/* Stage 4 (Top Slim Rod - slides upwards) */}
                    <rect
                      x="68"
                      y={191 - (antennaHeight / 100) * 110}
                      width="4"
                      height="44"
                      rx="1"
                      fill="url(#chromeGrad)"
                      stroke="#374151"
                      strokeWidth="0.5"
                      className="transition-all duration-200"
                    />
                  </g>

                  {/* RED BALL TIP AT TOP: Touching / Dragging moves antenna UP and DOWN */}
                  <g
                    onMouseDown={handleTipMouseDown}
                    onTouchStart={handleTipTouchStart}
                    onWheel={handleAntennaWheel}
                    className="cursor-ns-resize group/tip"
                    title="Touch / Drag Red Tip to Move UP and Move DOWN"
                  >
                    <circle
                      cx="70"
                      cy={191 - (antennaHeight / 100) * 110 - 5}
                      r="16"
                      fill="transparent"
                      className="transition-all duration-200"
                    />
                    <circle
                      cx="70"
                      cy={191 - (antennaHeight / 100) * 110 - 5}
                      r="6.5"
                      fill="url(#antennaTipGrad)"
                      stroke="#7f1d1d"
                      strokeWidth="0.75"
                      className="transition-all duration-200 group-hover/tip:brightness-125 filter group-hover/tip:drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]"
                    />
                    <circle
                      cx="68"
                      cy={191 - (antennaHeight / 100) * 110 - 7}
                      r="2"
                      fill="#ffffff"
                      opacity="0.8"
                      className="transition-all duration-200"
                    />
                  </g>
                </g>
              </svg>
            </div>

            {/* SVG Procedural Woodgrain Filter (No Images!) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl opacity-15 overflow-hidden">
              <defs>
                <filter id="cabinetWoodGrain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04 0.9" numOctaves="3" result="noise" />
                  <feColorMatrix type="saturate" values="0" />
                  <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
                </filter>
              </defs>
              <rect width="100%" height="100%" filter="url(#cabinetWoodGrain)" fill="#5c2c16" />
            </svg>

            {/* Brass Corner Brackets & Slotted Machine Screws */}
            <div className="absolute top-2 left-2 pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M 0 0 L 22 0 L 22 6 L 6 6 L 6 22 L 0 22 Z" fill="#b38646" stroke="#78531e" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="2.5" fill="#fef08a" stroke="#713f12" strokeWidth="0.5" />
                <line x1="8.5" y1="10" x2="11.5" y2="10" stroke="#451a03" strokeWidth="0.75" />
              </svg>
            </div>
            <div className="absolute top-2 right-2 pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M 24 0 L 2 0 L 2 6 L 18 6 L 18 22 L 24 22 Z" fill="#b38646" stroke="#78531e" strokeWidth="0.5" />
                <circle cx="14" cy="10" r="2.5" fill="#fef08a" stroke="#713f12" strokeWidth="0.5" />
                <line x1="12.5" y1="9" x2="15.5" y2="11" stroke="#451a03" strokeWidth="0.75" />
              </svg>
            </div>
            <div className="absolute bottom-2 left-2 pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M 0 24 L 22 24 L 22 18 L 6 18 L 6 2 L 0 2 Z" fill="#b38646" stroke="#78531e" strokeWidth="0.5" />
                <circle cx="10" cy="14" r="2.5" fill="#fef08a" stroke="#713f12" strokeWidth="0.5" />
                <line x1="9" y1="12.5" x2="11" y2="15.5" stroke="#451a03" strokeWidth="0.75" />
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M 24 24 L 2 24 L 2 18 L 18 18 L 18 2 L 24 2 Z" fill="#b38646" stroke="#78531e" strokeWidth="0.5" />
                <circle cx="14" cy="14" r="2.5" fill="#fef08a" stroke="#713f12" strokeWidth="0.5" />
                <line x1="12.5" y1="14" x2="15.5" y2="14" stroke="#451a03" strokeWidth="0.75" />
              </svg>
            </div>

            {/* INNER BRASS BEVELED FRAME */}
            <div
              className="rounded-lg p-2.5 border-2 shadow-inner"
              style={{
                background: 'linear-gradient(135deg, #cda35b 0%, #f6e19c 25%, #9e7534 60%, #5e4117 100%)',
                borderColor: '#634418',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.7), 0 3px 6px rgba(0,0,0,0.6)',
              }}
            >
              {/* DEEP RECESSED CHASSIS BAY */}
              <div
                className={`rounded-md p-2.5 sm:p-3.5 border border-neutral-900 ${
                  isMobile ? 'flex flex-col gap-2.5' : 'grid grid-cols-[minmax(0,1fr)_250px] gap-4'
                }`}
                style={{
                  background: 'radial-gradient(ellipse at center, #1a140f 0%, #0d0a08 100%)',
                  boxShadow: 'inset 0 6px 16px rgba(0,0,0,0.9)',
                }}
              >
                {/* LEFT: TUNING SCALE GLASS + WOVEN FABRIC SPEAKER GRILL */}
                <div className="flex flex-col gap-3.5 min-w-0 overflow-hidden">
                  {/* 1. VINTAGE BACKLIT TUNING SCALE (FREQUENCY DIAL) */}
                  <div
                    ref={dialRef}
                    onClick={handleDialClick}
                    onTouchStart={handleDialTouch}
                    className={`relative ${isMobile ? 'h-28' : 'h-36'} rounded-md border-2 border-[#544129] overflow-hidden min-w-0 cursor-crosshair`}
                    style={{
                      background: power
                        ? 'linear-gradient(180deg, #1f1a12 0%, #2d2315 40%, #21190f 100%)'
                        : '#100d09',
                      boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.95), inset 0 0 30px rgba(0,0,0,0.8)',
                    }}
                    title="Click dial to tune directly"
                  >
                    {/* Warm Tube Backlight Glow */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                        power ? 'opacity-100 animate-warm-glow' : 'opacity-0'
                      }`}
                      style={{
                        background: 'radial-gradient(ellipse at 50% 40%, rgba(245, 158, 11, 0.32) 0%, rgba(217, 119, 6, 0.18) 55%, rgba(0,0,0,0.65) 100%)',
                      }}
                    />

                    {/* Scale Header: Brand & 6E5 Magic Eye Tube */}
                    <div className="relative z-10 px-3.5 py-1 flex justify-between items-center border-b border-amber-900/40">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-serif font-black tracking-widest text-amber-400 uppercase">
                          PHILIPS SUPERHET
                        </span>
                        <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-amber-950/70 text-amber-300 border border-amber-700/50">
                          ALL-WAVE VALVE
                        </span>
                      </div>

                      {/* 6E5 MAGIC EYE VACUUM TUBE INDICATOR (Pure SVG) */}
                      <div className="flex items-center gap-1.5 bg-neutral-950/80 px-2 py-0.5 rounded-full border border-neutral-700">
                        <span className="text-[7.5px] font-mono tracking-tighter text-neutral-400">MAGIC EYE</span>
                        <svg width="19" height="19" viewBox="0 0 22 22">
                          <defs>
                            <radialGradient id="magicEyeGlow" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="#86efac" />
                              <stop offset="60%" stopColor="#22c55e" />
                              <stop offset="100%" stopColor="#14532d" />
                            </radialGradient>
                            <filter id="eyeNeon">
                              <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
                              <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>

                          <circle cx="11" cy="11" r="10" fill="#09140a" stroke="#2d3748" strokeWidth="1" />

                          {power && (
                            <circle
                              cx="11"
                              cy="11"
                              r="8.5"
                              fill="url(#magicEyeGlow)"
                              filter="url(#eyeNeon)"
                              opacity={0.35 + signalQuality * 0.65}
                            />
                          )}

                          {power && (
                            <path
                              d={`M 11 11 L ${11 + 9 * Math.cos((90 - magicEyeAngle / 2) * Math.PI / 180)} ${11 - 9 * Math.sin((90 - magicEyeAngle / 2) * Math.PI / 180)} A 9 9 0 0 1 ${11 + 9 * Math.cos((90 + magicEyeAngle / 2) * Math.PI / 180)} ${11 - 9 * Math.sin((90 + magicEyeAngle / 2) * Math.PI / 180)} Z`}
                              fill="#061208"
                              opacity="0.92"
                            />
                          )}

                          <circle cx="11" cy="11" r="3" fill="#1f2937" stroke="#4ade80" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>

                    {/* FREQUENCY SCALES (FM, MW, SW) */}
                    <div className="relative z-10 px-3.5 py-1 flex flex-col justify-between h-[84px] text-amber-200/90 font-mono text-[9px]">
                      {/* FM BAND */}
                      <div className={`transition-opacity duration-200 ${band === 'FM' ? 'opacity-100 font-bold text-amber-300' : 'opacity-40'}`}>
                        <div className="flex justify-between items-center text-[9px] tracking-wider">
                          <span className="text-amber-500 font-black">FM</span>
                          <span>88</span>
                          <span>92</span>
                          <span>96</span>
                          <span>100</span>
                          <span>104</span>
                          <span>108</span>
                          <span className="text-[7.5px] text-amber-500">MHz</span>
                        </div>
                        <svg width="100%" height="6" viewBox="0 0 460 6" preserveAspectRatio="none">
                          <line x1="0" y1="3" x2="460" y2="3" stroke="#d97706" strokeWidth="0.75" opacity="0.6" />
                          {Array.from({ length: 41 }).map((_, i) => (
                            <line
                              key={`fm-tick-${i}`}
                              x1={i * 11.5}
                              y1={i % 5 === 0 ? 0 : 1.5}
                              x2={i * 11.5}
                              y2={i % 5 === 0 ? 6 : 4.5}
                              stroke={i % 5 === 0 ? '#fef08a' : '#b45309'}
                              strokeWidth={i % 5 === 0 ? 1.2 : 0.75}
                            />
                          ))}
                        </svg>
                      </div>

                      {/* HISTORIC STATION MARKERS */}
                      <div className="flex justify-between items-center text-[8.5px] tracking-wider text-amber-300/80 font-serif uppercase px-2 py-0.5 bg-black/40 rounded border-y border-amber-900/30">
                        <span className={band === 'MW' && Math.abs(tuning - 28) < 5 ? 'text-red-400 font-bold drop-shadow' : ''}>Delhi (AIR)</span>
                        <span className={band === 'MW' && Math.abs(tuning - 46) < 5 ? 'text-red-400 font-bold drop-shadow' : ''}>Calcutta</span>
                        <span className={band === 'MW' && Math.abs(tuning - 54) < 5 ? 'text-red-400 font-bold drop-shadow' : ''}>Bombay</span>
                        <span className={band === 'MW' && Math.abs(tuning - 88) < 5 ? 'text-red-400 font-bold drop-shadow' : ''}>Ceylon</span>
                        <span className={band === 'SW' && Math.abs(tuning - 35) < 5 ? 'text-red-400 font-bold drop-shadow' : ''}>London (BBC)</span>
                      </div>

                      {/* MW (MEDIUM WAVE / AM) */}
                      <div className={`transition-opacity duration-200 ${band === 'MW' ? 'opacity-100 font-bold text-amber-300' : 'opacity-40'}`}>
                        <svg width="100%" height="6" viewBox="0 0 460 6" preserveAspectRatio="none">
                          <line x1="0" y1="3" x2="460" y2="3" stroke="#d97706" strokeWidth="0.75" opacity="0.6" />
                          {Array.from({ length: 45 }).map((_, i) => (
                            <line
                              key={`mw-tick-${i}`}
                              x1={i * 10.45}
                              y1={i % 5 === 0 ? 0 : 1.5}
                              x2={i * 10.45}
                              y2={i % 5 === 0 ? 6 : 4.5}
                              stroke={i % 5 === 0 ? '#fef08a' : '#b45309'}
                              strokeWidth={i % 5 === 0 ? 1.2 : 0.75}
                            />
                          ))}
                        </svg>
                        <div className="flex justify-between items-center text-[8.5px] tracking-wider">
                          <span className="text-amber-500 font-black">MW</span>
                          <span>540</span>
                          <span>700</span>
                          <span>850</span>
                          <span>1000</span>
                          <span>1200</span>
                          <span>1400</span>
                          <span>1600</span>
                          <span className="text-[7.5px] text-amber-500">kHz</span>
                        </div>
                      </div>

                      {/* SW (SHORTWAVE) */}
                      <div className={`transition-opacity duration-200 ${band === 'SW' ? 'opacity-100 font-bold text-amber-300' : 'opacity-40'}`}>
                        <div className="flex justify-between items-center text-[8.5px] tracking-wider">
                          <span className="text-amber-500 font-black">SW</span>
                          <span>49m (6MHz)</span>
                          <span>31m (9.5)</span>
                          <span>25m (11.8)</span>
                          <span>19m (15.2)</span>
                          <span>16m (17.8)</span>
                          <span className="text-[7.5px] text-amber-500">MHz</span>
                        </div>
                      </div>
                    </div>

                    {/* RED PHOSPHOR ILLUMINATED TUNING NEEDLE */}
                    <div
                      className="absolute top-0 bottom-0 pointer-events-none transition-all duration-75 ease-out z-20 flex flex-col items-center"
                      style={{ left: `${tuning}%`, transform: 'translateX(-50%)' }}
                    >
                      <div className="w-2.5 h-3 bg-red-800 rounded-b border border-red-500 shadow-md" />
                      <div
                        className={`w-[2.5px] flex-1 bg-red-500 transition-shadow ${
                          power ? 'shadow-[0_0_10px_rgba(239,68,68,1),0_0_20px_rgba(248,113,113,0.8)]' : 'bg-red-900 shadow-none'
                        } ${signalQuality > 0.7 ? 'animate-needle-flutter' : ''}`}
                      />
                      <div className="w-3 h-3 bg-red-700 rounded-t border-t border-red-400 flex items-center justify-center">
                        <div className="w-1 h-1 bg-amber-200 rounded-full" />
                      </div>
                    </div>

                    {/* GLASS REFLECTION OVERLAY (Pure SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="glassReflection" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
                          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.06" />
                          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
                          <stop offset="85%" stopColor="#ffffff" stopOpacity="0.04" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#glassReflection)" />
                    </svg>
                  </div>

                  {/* 2. ACOUSTIC SPEAKER GRILL CLOTH & VINTAGE NEWS BROADCAST DESK */}
                  <div
                    className={`relative ${isMobile ? 'h-[295px]' : 'h-[340px]'} rounded-md border-2 border-[#453621] overflow-hidden min-w-0 flex flex-col justify-between shadow-inner`}
                    style={{
                      background: '#2b2118',
                      boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.9), inset 0 0 35px rgba(0,0,0,0.8)',
                    }}
                  >
                    {/* Woven Fabric Texture (Pure SVG Pattern - No External Images!) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="vintageFabricWeave" width="12" height="12" patternUnits="userSpaceOnUse">
                          <rect width="12" height="12" fill="#382a1a" />
                          <rect x="0" y="1" width="12" height="2" fill="#8c6c42" opacity="0.8" />
                          <rect x="0" y="7" width="12" height="2" fill="#785a34" opacity="0.8" />
                          <rect x="1" y="0" width="2" height="12" fill="#b08b58" opacity="0.7" />
                          <rect x="7" y="0" width="2" height="12" fill="#694d2d" opacity="0.9" />
                          <circle cx="2" cy="2" r="1.2" fill="#dfbe8b" opacity="0.8" />
                          <circle cx="8" cy="8" r="1.2" fill="#dfbe8b" opacity="0.8" />
                          <circle cx="2" cy="8" r="0.8" fill="#1f160e" opacity="0.6" />
                          <circle cx="8" cy="2" r="0.8" fill="#1f160e" opacity="0.6" />
                        </pattern>

                        <radialGradient id="speakerConeShadow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#0a0705" stopOpacity="0.85" />
                          <stop offset="60%" stopColor="#140f0a" stopOpacity="0.6" />
                          <stop offset="90%" stopColor="#261b11" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#261b11" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      <rect width="100%" height="100%" fill="url(#vintageFabricWeave)" />
                      <circle cx="50%" cy="50%" r="130" fill="url(#speakerConeShadow)" />
                    </svg>

                    {/* Horizontal Brass Grille Bars */}
                    <div className="absolute inset-x-0 top-2 h-1 bg-gradient-to-r from-amber-900 via-amber-300 to-amber-900 opacity-60 shadow-sm pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-2 h-1 bg-gradient-to-r from-amber-900 via-amber-300 to-amber-900 opacity-60 shadow-sm pointer-events-none" />

                    {/* VINTAGE RADIO NEWS BULLETIN CONSOLE */}
                    <div
                      className={`relative z-10 m-2.5 rounded-md p-3 flex flex-col justify-between h-[calc(100%-20px)] border min-w-0 overflow-hidden transition-all duration-300 ${
                        power
                          ? 'bg-[#100b07]/85 backdrop-blur-[2px] border-amber-800/70 shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
                          : 'bg-[#090705]/90 border-neutral-800/60 opacity-30 pointer-events-none grayscale'
                      }`}
                    >
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between pb-1.5 border-b border-amber-900/60">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="flex h-2.5 w-2.5 relative shrink-0">
                            {power && (
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            )}
                            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${power ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]' : 'bg-neutral-700'}`}></span>
                          </span>
                          <span className="text-[10px] font-serif font-black tracking-wider text-amber-300 uppercase truncate">
                            {isMobile ? 'AKASHVANI NEWS DESK' : 'AKASHVANI NEWS DESK • ALL INDIA RADIO WORLD SERVICE'}
                          </span>
                        </div>

                        {/* Live Bulletin Monitor Badge */}
                        <div className="shrink-0 px-2.5 py-0.5 rounded text-[8.5px] sm:text-[9px] font-mono font-bold bg-amber-950/70 text-amber-300/90 border border-amber-800/60 shadow-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          <span>TELETYPE FEED</span>
                        </div>
                      </div>

                      {/* Category Filter Pills Bar */}
                      <div className={`flex items-center gap-1 py-1 ${isMobile ? 'overflow-x-auto no-scrollbar pb-1' : 'flex-wrap'}`}>
                        {NEWS_CATEGORIES.map((cat) => {
                          const isSel = selectedCategory === cat.key;
                          return (
                            <button
                              key={cat.key}
                              onClick={() => handleSelectCategory(cat.key)}
                              className={`px-2 py-0.5 rounded text-[8.5px] font-mono tracking-tight whitespace-nowrap transition-all duration-150 ${
                                isSel
                                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-black shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] border border-amber-300 scale-105'
                                  : 'bg-neutral-900/90 text-amber-200/70 hover:text-amber-100 hover:bg-neutral-800 border border-amber-900/40'
                              }`}
                            >
                              {cat.label}
                            </button>
                          );
                        })}
                      </div>

                      {/* Active News Story Display Card */}
                      <div
                        className={`border rounded-md p-2.5 flex flex-col justify-between gap-1.5 flex-1 my-1 shadow-inner transition-all duration-200 ${
                          currentNews.isSpecial
                            ? 'bg-[#20140a] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                            : 'bg-[#18110b]/90 border-amber-800/50'
                        }`}
                      >
                        {/* Meta Info Row */}
                        <div className="flex items-center justify-between text-[8.5px] font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className={`px-1.5 py-0.2 rounded font-bold border ${
                              currentNews.isSpecial
                                ? 'bg-red-950 text-amber-200 border-red-500 animate-pulse'
                                : 'bg-amber-950 text-amber-300 border-amber-600/60'
                            }`}>
                              {currentNews.badge}
                            </span>
                            <span className="text-amber-400/80">{currentNews.time}</span>
                            <span className="text-neutral-500">•</span>
                            <span className="text-amber-300/70">{currentNews.source}</span>
                          </div>
                          <div className="flex items-center gap-1 text-amber-400 font-bold">
                            <span>{selectedNewsIndex + 1}</span>
                            <span className="text-neutral-500">/</span>
                            <span>{filteredNews.length}</span>
                          </div>
                        </div>

                        {/* News Headline */}
                        <h4 className="text-amber-100 font-bold text-[13px] leading-snug line-clamp-1 font-sans">
                          {currentNews.headline}
                        </h4>

                        {/* News Full Details */}
                        <p className="text-amber-200/85 text-[11px] leading-relaxed line-clamp-3">
                          {currentNews.details}
                        </p>

                        {/* News Navigation & Station Status Controls */}
                        <div className="flex items-center justify-between pt-1 border-t border-amber-900/40 text-[8.5px] font-mono">
                          <button
                            onClick={handlePrevNews}
                            className="px-2 py-0.5 rounded bg-neutral-900 hover:bg-neutral-800 text-amber-300 border border-amber-800/50 flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>◄</span> <span>Previous News</span>
                          </button>
                          <span className="text-[8px] text-amber-400/80 truncate max-w-[160px]">
                            {activeStation ? `📡 ${activeStation.name}` : '📻 All-Wave Receiver'}
                          </span>
                          <button
                            onClick={handleNextNews}
                            className="px-2 py-0.5 rounded bg-neutral-900 hover:bg-neutral-800 text-amber-300 border border-amber-800/50 flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>Next News</span> <span>►</span>
                          </button>
                        </div>
                      </div>

                      {/* Bottom Live Scrolling News Ticker Bar */}
                      <div className="relative overflow-hidden w-full min-w-0 h-6 bg-black/75 rounded border border-amber-900/50 flex items-center px-2 shadow-inner">
                        <span className="shrink-0 bg-red-950 text-red-400 text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded mr-2 border border-red-800/60 shadow-sm">
                          LIVE ⚡
                        </span>
                        <div className="overflow-hidden whitespace-nowrap w-full min-w-0">
                          <div className="animate-news-marquee text-[9px] font-mono text-amber-300/90 tracking-wide">
                            {allHeadlinesMarquee}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: TACTILE VINTAGE ROTARY CONTROLS & MECHANICAL KEYS */}
                <div
                  className={`rounded-md border border-[#3b2d1d] min-w-0 overflow-hidden ${
                    isMobile
                      ? 'p-2 flex flex-col gap-1.5'
                      : 'p-3.5 flex flex-col justify-between items-center'
                  }`}
                  style={{
                    background: 'linear-gradient(180deg, #1b1510 0%, #14100c 100%)',
                    boxShadow: 'inset 0 3px 10px rgba(0,0,0,0.8)',
                  }}
                >
                  {/* PHILIPS EMBOSSED VINTAGE BRASS BADGE */}
                  <div className="w-full flex justify-center pt-0.5 pb-1">
                    <svg
                      width={isMobile ? "148" : "190"}
                      height={isMobile ? "32" : "42"}
                      viewBox="0 0 168 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="rightBadgeBrass" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#d4af37" />
                          <stop offset="30%" stopColor="#fff1b0" />
                          <stop offset="70%" stopColor="#a17b20" />
                          <stop offset="100%" stopColor="#5c4410" />
                        </linearGradient>
                        <radialGradient id="rightScrewHead" cx="35%" cy="35%" r="65%">
                          <stop offset="0%" stopColor="#fef08a" />
                          <stop offset="60%" stopColor="#b45309" />
                          <stop offset="100%" stopColor="#451a03" />
                        </radialGradient>
                      </defs>

                      <rect x="2" y="2" width="164" height="36" rx="3.5" fill="#130e09" stroke="url(#rightBadgeBrass)" strokeWidth="1.6" />
                      <circle cx="10" cy="20" r="2.2" fill="url(#rightScrewHead)" />
                      <circle cx="158" cy="20" r="2.2" fill="url(#rightScrewHead)" />

                      <text x="84" y="20" textAnchor="middle" fill="url(#rightBadgeBrass)" fontFamily="serif" fontSize="13" fontWeight="900" letterSpacing="3">
                        PHILIPS
                      </text>
                      <line x1="26" y1="24" x2="142" y2="24" stroke="url(#rightBadgeBrass)" strokeWidth="0.75" />
                      <text x="84" y="32" textAnchor="middle" fill="#d4af37" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" letterSpacing="1.8">
                        HIGH FIDELITY DE-LUXE
                      </text>
                    </svg>
                  </div>

                  {isMobile ? (
                    /* MOBILE HORIZONTAL CONTROLS DOCK */
                    <div className="w-full flex items-center justify-around gap-2 px-1 py-1">
                      {/* 1. VOLUME KNOB */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-[8.5px] font-mono tracking-wider text-amber-300/80 uppercase">
                          VOL <span className="font-bold text-amber-400">{volume}%</span>
                        </div>
                        <div
                          onMouseDown={handleVolumeMouseDown}
                          onTouchStart={handleVolumeTouchStart}
                          onWheel={handleVolumeWheel}
                          className="relative cursor-ns-resize group touch-none"
                          title="Touch & drag or scroll mouse wheel to adjust Volume"
                        >
                          <svg width="58" height="58" viewBox="0 0 72 72">
                            <defs>
                              <radialGradient id="knobEdgeGradM" cx="40%" cy="40%" r="60%">
                                <stop offset="0%" stopColor="#4a3f35" />
                                <stop offset="45%" stopColor="#2b231c" />
                                <stop offset="90%" stopColor="#17120e" />
                                <stop offset="100%" stopColor="#0a0806" />
                              </radialGradient>
                              <linearGradient id="brassCapGradM" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#fef08a" />
                                <stop offset="35%" stopColor="#d4af37" />
                                <stop offset="70%" stopColor="#926914" />
                                <stop offset="100%" stopColor="#533907" />
                              </linearGradient>
                            </defs>
                            <circle cx="36" cy="38" r="33" fill="#000000" opacity="0.75" />
                            <g transform={`rotate(${volume * 2.7 - 135} 36 36)`}>
                              <circle cx="36" cy="36" r="32" fill="url(#knobEdgeGradM)" stroke="#1a140f" strokeWidth="1" />
                              {Array.from({ length: 24 }).map((_, i) => (
                                <line
                                  key={`vol-m-tooth-${i}`}
                                  x1="36"
                                  y1="5"
                                  x2="36"
                                  y2="9"
                                  stroke="#5c4e42"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  transform={`rotate(${i * 15} 36 36)`}
                                />
                              ))}
                              <circle cx="36" cy="36" r="22" fill="url(#brassCapGradM)" stroke="#3e2a07" strokeWidth="0.75" />
                              <circle cx="36" cy="36" r="16" fill="none" stroke="#684a0d" strokeWidth="0.5" opacity="0.5" />
                              <rect x="34.5" y="8" width="3" height="12" rx="1.5" fill="#fef08a" stroke="#451a03" strokeWidth="0.5" />
                            </g>
                          </svg>
                          <div className="absolute -bottom-1 -left-1 flex gap-1 scale-75 opacity-100">
                            <button
                              onClick={(e) => { e.stopPropagation(); setVolume(Math.max(0, volume - 10)); }}
                              className="w-5 h-5 bg-neutral-800 rounded border border-neutral-600 text-[10px] text-amber-200 hover:bg-neutral-700 active:scale-95"
                            >
                              -
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); setVolume(Math.min(100, volume + 10)); }}
                              className="w-5 h-5 bg-neutral-800 rounded border border-neutral-600 text-[10px] text-amber-200 hover:bg-neutral-700 active:scale-95"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 2. RUBY PILOT LAMP & BAND SELECT DOCK */}
                      <div className="flex flex-col items-center gap-1.5 px-2 py-1 bg-black/45 rounded-md border border-amber-900/40 shadow-inner">
                        <div
                          onClick={togglePower}
                          className="cursor-pointer flex items-center gap-1.5"
                          title="Touch to switch Power ON/OFF"
                        >
                          <svg width="22" height="22" viewBox="0 0 22 22">
                            <defs>
                              <radialGradient id="rubyGlowM" cx="40%" cy="35%" r="60%">
                                <stop offset="0%" stopColor="#ff7a7a" />
                                <stop offset="40%" stopColor="#ef4444" />
                                <stop offset="85%" stopColor="#991b1b" />
                                <stop offset="100%" stopColor="#450a0a" />
                              </radialGradient>
                            </defs>
                            <circle cx="11" cy="11" r="10" fill="url(#rightBadgeBrass)" stroke="#451a03" strokeWidth="0.8" />
                            <circle
                              cx="11"
                              cy="11"
                              r="7"
                              fill={power ? 'url(#rubyGlowM)' : '#331010'}
                              stroke="#220505"
                              strokeWidth="0.5"
                            />
                            {power && (
                              <>
                                <circle cx="9" cy="9" r="2" fill="#ffffff" opacity="0.75" />
                                <circle cx="11" cy="11" r="9" fill="none" stroke="#f87171" strokeWidth="1" opacity="0.6" />
                              </>
                            )}
                          </svg>
                          <span className="text-[8px] font-mono tracking-widest text-neutral-300 uppercase font-bold">
                            {power ? 'POWER ON' : 'OFF'}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {['MW', 'FM', 'SW'].map((b) => {
                            const isActive = band === b;
                            return (
                              <button
                                key={`m-b-${b}`}
                                onClick={() => changeBand(b)}
                                className={`px-2 py-0.5 rounded text-[9px] font-bold font-mono tracking-wider transition-all duration-150 ${
                                  isActive
                                    ? 'bg-amber-600 text-amber-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] translate-y-0.5 border border-amber-800'
                                    : 'bg-neutral-800 text-amber-200/70 shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:bg-neutral-700 border border-neutral-600'
                                }`}
                              >
                                {b}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 3. TUNING KNOB */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-[8.5px] font-mono tracking-wider text-amber-300/80 uppercase">
                          TUNE <span className="font-bold text-amber-400">{tuning.toFixed(1)}</span>
                        </div>
                        <div
                          onMouseDown={handleTuningMouseDown}
                          onTouchStart={handleTuningTouchStart}
                          onWheel={handleTuningWheel}
                          className="relative cursor-ew-resize group touch-none"
                          title="Touch & drag or scroll mouse wheel to Tune Frequencies"
                        >
                          <svg width="64" height="64" viewBox="0 0 84 84">
                            <circle cx="42" cy="44" r="39" fill="#000000" opacity="0.8" />
                            <g transform={`rotate(${tuning * 7.2} 42 42)`}>
                              <circle cx="42" cy="42" r="38" fill="url(#knobEdgeGradM)" stroke="#1a140f" strokeWidth="1.2" />
                              {Array.from({ length: 36 }).map((_, i) => (
                                <line
                                  key={`tune-m-tooth-${i}`}
                                  x1="42"
                                  y1="5"
                                  x2="42"
                                  y2="10"
                                  stroke="#695b50"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  transform={`rotate(${i * 10} 42 42)`}
                                />
                              ))}
                              <circle cx="42" cy="42" r="28" fill="url(#brassCapGradM)" stroke="#3e2a07" strokeWidth="1" />
                              <circle cx="42" cy="42" r="21" fill="none" stroke="#855f13" strokeWidth="0.75" opacity="0.6" />
                              <circle cx="42" cy="42" r="14" fill="none" stroke="#523908" strokeWidth="0.75" opacity="0.6" />
                              <circle cx="42" cy="24" r="5" fill="#2d1f05" stroke="#ecc94b" strokeWidth="0.75" />
                              <circle cx="41" cy="23" r="2" fill="#fef08a" opacity="0.6" />
                            </g>
                          </svg>
                          <div className="absolute -bottom-1 -left-1 flex gap-1 scale-75 opacity-100">
                            <button
                              onClick={(e) => { e.stopPropagation(); setTuning(Math.max(0, tuning - 5)); }}
                              className="w-5 h-5 bg-neutral-800 rounded border border-neutral-600 text-[10px] text-amber-200 hover:bg-neutral-700 active:scale-95"
                            >
                              ◄
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); setTuning(Math.min(100, tuning + 5)); }}
                              className="w-5 h-5 bg-neutral-800 rounded border border-neutral-600 text-[10px] text-amber-200 hover:bg-neutral-700 active:scale-95"
                            >
                              ►
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* DESKTOP VERTICAL CONTROLS COLUMN */
                    <>
                      {/* 1. VOLUME ROTARY KNOB */}
                      <div className="flex flex-col items-center gap-1.5 w-full">
                        <div className="flex items-center justify-between w-full px-2 text-[9px] font-mono tracking-wider text-amber-300/80 uppercase">
                          <span>Volume</span>
                          <span className="font-bold text-amber-400">{volume}%</span>
                        </div>

                        <div
                          onMouseDown={handleVolumeMouseDown}
                          onTouchStart={handleVolumeTouchStart}
                          onWheel={handleVolumeWheel}
                          className="relative cursor-ns-resize group"
                          title="Click & drag or scroll mouse wheel to adjust Volume"
                        >
                          <svg width="72" height="72" viewBox="0 0 72 72">
                            <defs>
                              <radialGradient id="knobEdgeGrad" cx="40%" cy="40%" r="60%">
                                <stop offset="0%" stopColor="#4a3f35" />
                                <stop offset="45%" stopColor="#2b231c" />
                                <stop offset="90%" stopColor="#17120e" />
                                <stop offset="100%" stopColor="#0a0806" />
                              </radialGradient>
                              <linearGradient id="brassCapGrad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#fef08a" />
                                <stop offset="35%" stopColor="#d4af37" />
                                <stop offset="70%" stopColor="#926914" />
                                <stop offset="100%" stopColor="#533907" />
                              </linearGradient>
                            </defs>

                            <circle cx="36" cy="38" r="33" fill="#000000" opacity="0.75" />

                            <g transform={`rotate(${volume * 2.7 - 135} 36 36)`}>
                              <circle cx="36" cy="36" r="32" fill="url(#knobEdgeGrad)" stroke="#1a140f" strokeWidth="1" />
                              {Array.from({ length: 24 }).map((_, i) => (
                                <line
                                  key={`vol-tooth-${i}`}
                                  x1="36"
                                  y1="5"
                                  x2="36"
                                  y2="9"
                                  stroke="#5c4e42"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  transform={`rotate(${i * 15} 36 36)`}
                                />
                              ))}

                              <circle cx="36" cy="36" r="22" fill="url(#brassCapGrad)" stroke="#3e2a07" strokeWidth="0.75" />
                              <circle cx="36" cy="36" r="16" fill="none" stroke="#684a0d" strokeWidth="0.5" opacity="0.5" />
                              <rect x="34.5" y="8" width="3" height="12" rx="1.5" fill="#fef08a" stroke="#451a03" strokeWidth="0.5" />
                            </g>
                          </svg>

                          <div className="absolute -bottom-1 -left-2 flex gap-1 scale-75 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => { e.stopPropagation(); setVolume(Math.max(0, volume - 10)); }}
                              className="w-5 h-5 bg-neutral-800 rounded border border-neutral-600 text-[10px] text-amber-200 hover:bg-neutral-700 cursor-pointer"
                            >
                              -
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); setVolume(Math.min(100, volume + 10)); }}
                              className="w-5 h-5 bg-neutral-800 rounded border border-neutral-600 text-[10px] text-amber-200 hover:bg-neutral-700 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 2. RUBY PILOT LAMP (Power Switch & Light) */}
                      <div className="flex items-center gap-2 py-1">
                        <div
                          onClick={togglePower}
                          className="cursor-pointer flex items-center gap-2"
                          title="Click to switch Power ON/OFF"
                        >
                          <svg width="22" height="22" viewBox="0 0 22 22">
                            <defs>
                              <radialGradient id="rubyGlow" cx="40%" cy="35%" r="60%">
                                <stop offset="0%" stopColor="#ff7a7a" />
                                <stop offset="40%" stopColor="#ef4444" />
                                <stop offset="85%" stopColor="#991b1b" />
                                <stop offset="100%" stopColor="#450a0a" />
                              </radialGradient>
                            </defs>
                            <circle cx="11" cy="11" r="10" fill="url(#brassCapGrad)" stroke="#451a03" strokeWidth="0.8" />
                            <circle
                              cx="11"
                              cy="11"
                              r="7"
                              fill={power ? 'url(#rubyGlow)' : '#331010'}
                              stroke="#220505"
                              strokeWidth="0.5"
                            />
                            {power && (
                              <>
                                <circle cx="9" cy="9" r="2" fill="#ffffff" opacity="0.75" />
                                <circle cx="11" cy="11" r="9" fill="none" stroke="#f87171" strokeWidth="1" opacity="0.6" />
                              </>
                            )}
                          </svg>
                          <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase">
                            {power ? 'ON' : 'OFF'}
                          </span>
                        </div>
                      </div>

                      {/* 3. PRECISION TUNING ROTARY WHEEL */}
                      <div className="flex flex-col items-center gap-1.5 w-full">
                        <div className="flex items-center justify-between w-full px-2 text-[9px] font-mono tracking-wider text-amber-300/80 uppercase">
                          <span>Tuning</span>
                          <span className="font-bold text-amber-400">{tuning.toFixed(1)}</span>
                        </div>

                        <div
                          onMouseDown={handleTuningMouseDown}
                          onTouchStart={handleTuningTouchStart}
                          onWheel={handleTuningWheel}
                          className="relative cursor-ew-resize group"
                          title="Click & drag or scroll mouse wheel to Tune Frequencies"
                        >
                          <svg width="84" height="84" viewBox="0 0 84 84">
                            <circle cx="42" cy="44" r="39" fill="#000000" opacity="0.8" />

                            <g transform={`rotate(${tuning * 7.2} 42 42)`}>
                              <circle cx="42" cy="42" r="38" fill="url(#knobEdgeGrad)" stroke="#1a140f" strokeWidth="1.2" />
                              {Array.from({ length: 36 }).map((_, i) => (
                                <line
                                  key={`tune-tooth-${i}`}
                                  x1="42"
                                  y1="5"
                                  x2="42"
                                  y2="10"
                                  stroke="#695b50"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  transform={`rotate(${i * 10} 42 42)`}
                                />
                              ))}

                              <circle cx="42" cy="42" r="28" fill="url(#brassCapGrad)" stroke="#3e2a07" strokeWidth="1" />
                              <circle cx="42" cy="42" r="21" fill="none" stroke="#855f13" strokeWidth="0.75" opacity="0.6" />
                              <circle cx="42" cy="42" r="14" fill="none" stroke="#523908" strokeWidth="0.75" opacity="0.6" />

                              <circle cx="42" cy="24" r="5" fill="#2d1f05" stroke="#ecc94b" strokeWidth="0.75" />
                              <circle cx="41" cy="23" r="2" fill="#fef08a" opacity="0.6" />
                            </g>
                          </svg>

                          <div className="absolute -bottom-1 -left-2 flex gap-1 scale-75 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => { e.stopPropagation(); setTuning(Math.max(0, tuning - 5)); }}
                              className="w-5 h-5 bg-neutral-800 rounded border border-neutral-600 text-[10px] text-amber-200 hover:bg-neutral-700 cursor-pointer"
                            >
                              ◄
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); setTuning(Math.min(100, tuning + 5)); }}
                              className="w-5 h-5 bg-neutral-800 rounded border border-neutral-600 text-[10px] text-amber-200 hover:bg-neutral-700 cursor-pointer"
                            >
                              ►
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 4. MECHANICAL BAND SELECTOR PUSH-BUTTONS */}
                      <div className="w-full pt-1">
                        <span className="block text-[8px] font-mono tracking-widest text-center text-neutral-400 uppercase mb-1">
                          Band Select
                        </span>
                        <div className="grid grid-cols-3 gap-1">
                          {['MW', 'FM', 'SW'].map((b) => {
                            const isActive = band === b;
                            return (
                              <button
                                key={b}
                                onClick={() => changeBand(b)}
                                className={`py-1 rounded text-[10px] font-bold font-mono tracking-wider transition-all duration-150 cursor-pointer ${
                                  isActive
                                    ? 'bg-amber-600 text-amber-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] translate-y-0.5 border border-amber-800'
                                    : 'bg-neutral-800 text-amber-200/70 shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:bg-neutral-700 border border-neutral-600'
                                }`}
                              >
                                {b}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 4. SOLID HARDWOOD FEET & TABLE SHADOW */}
          <div className={`${isMobile ? 'w-[390px] px-8' : 'w-[880px] px-16'} flex justify-between -mt-1 z-0`}>
            <div className="w-16 h-5 rounded-b-lg bg-gradient-to-b from-[#210c05] to-[#0a0402] border-t-2 border-[#b38646] shadow-2xl" />
            <div className="w-16 h-5 rounded-b-lg bg-gradient-to-b from-[#210c05] to-[#0a0402] border-t-2 border-[#b38646] shadow-2xl" />
          </div>

          {/* Soft studio drop shadow on surface */}
          <div className={`${isMobile ? 'w-[370px] h-5' : 'w-[860px] h-7'} bg-black/25 blur-xl rounded-full -mt-2 pointer-events-none`} />
        </div>
      </div>
    </section>
  );
};

export default Section16;
