import React, { useState, useRef, useEffect } from 'react';
import { liveMatches, sportsStories } from './Section15Data';
import { FaTape, FaMicrophoneLines, FaVolumeHigh, FaShieldHalved } from 'react-icons/fa6';

const BASE_WIDTH = 820;
const BASE_HEIGHT = 546.13; // Exact 820 / (1024 / 682) aspect ratio

/**
 * Photorealistic Vintage Cassette Tape Voice Recorder / Player
 * Recreated with exact 1:1 pixel fidelity using React, Tailwind CSS, and SVG.
 * Completely self-contained component with full interactive controls & audio feedback.
 */
function CassetteRecorder() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(() => {
    if (typeof window !== 'undefined') {
      const pad = window.innerWidth < 640 ? 16 : 32;
      const w = Math.min(window.innerWidth - pad, BASE_WIDTH);
      const maxH = (window.innerHeight - pad) * 1.50146;
      return Math.min(w, maxH) / BASE_WIDTH;
    }
    return 1;
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [spinSpeed, setSpinSpeed] = useState(1);
  const [activeBtn, setActiveBtn] = useState('play');

  // Audio Context for mechanical clicking sound effects
  const audioCtxRef = useRef(null);

  // Responsive scaling observer to guarantee 100% pixel fidelity on all screens
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0) {
        setScale(rect.width / BASE_WIDTH);
      }
    };

    updateScale();

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const width = entry.contentRect.width;
          if (width > 0) {
            setScale(width / BASE_WIDTH);
          }
        }
      });
      ro.observe(el);
    }

    window.addEventListener('resize', updateScale);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioCtxRef.current = new AudioCtx();
    }
  };

  const playClickSound = (type = 'click') => {
    try {
      initAudio();
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'heavy') {
        // Heavy metallic mechanical latch clunk (Record / Play)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(35, now + 0.08);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'release') {
        // Mechanical release snap (Stop)
        osc.type = 'square';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.05);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else {
        // Standard mechanical button snap (Rewind / FF / Pause)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.04);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      }
    } catch {
      // Audio not permitted or supported
    }
  };

  // Button Action Handlers
  const handleRecord = () => {
    playClickSound('heavy');
    setActiveBtn('rec');
    setIsRecording(true);
    setIsPlaying(true);
    setIsPaused(false);
    setSpinSpeed(1);
  };

  const handlePlay = () => {
    playClickSound('heavy');
    setActiveBtn('play');
    setIsPlaying(true);
    setIsRecording(false);
    setIsPaused(false);
    setSpinSpeed(1);
  };

  const handleStop = () => {
    playClickSound('release');
    setActiveBtn('stop');
    setIsPlaying(false);
    setIsRecording(false);
    setIsPaused(false);
    setSpinSpeed(1);
    setTimeout(() => setActiveBtn(null), 180);
  };

  const handleRewind = () => {
    playClickSound('click');
    setActiveBtn('rew');
    setIsPlaying(true);
    setIsRecording(false);
    setIsPaused(false);
    setSpinSpeed(-3); // Fast backwards
  };

  const handleFastForward = () => {
    playClickSound('click');
    setActiveBtn('ff');
    setIsPlaying(true);
    setIsRecording(false);
    setIsPaused(false);
    setSpinSpeed(3); // Fast forwards
  };

  const handlePause = () => {
    playClickSound('click');
    setActiveBtn('pause');
    setIsPaused((prev) => !prev);
  };

  // Rotation duration calculation based on spin speed and pause state
  const rotationDuration =
    isPaused || !isPlaying ? '0s' : Math.abs(spinSpeed) === 1 ? '3.5s' : '0.8s';
  const rotationDirection = spinSpeed < 0 ? 'reverse' : 'normal';

  return (
    <div
      ref={containerRef}
      className="relative mx-auto select-none flex items-center justify-center my-4"
      style={{
        width: 'min(100%, 820px, calc((100vh - 24px) * 1.50146))',
        maxWidth: '820px',
        aspectRatio: '1024 / 682',
      }}
    >
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {/* 1. Diffuse Ambient Floor Shadow beneath Recorder */}
        <div
          className="absolute pointer-events-none rounded-[50%]"
          style={{
            left: '7.81%',
            top: '92.5%',
            width: '84.375%',
            height: '5.865%',
            background:
              'radial-gradient(ellipse at center, rgba(12, 15, 20, 0.46) 0%, rgba(18, 22, 28, 0.22) 50%, rgba(22, 26, 32, 0.05) 75%, transparent 90%)',
            filter: 'blur(11px)',
          }}
        />

        {/* 2. Rubber Feet Contact Shadows */}
        {/* Left foot contact shadow */}
        <div
          className="absolute pointer-events-none rounded-[50%]"
          style={{
            left: '12.89%',
            top: '93.5%',
            width: '7.71%',
            height: '2.34%',
            background:
              'radial-gradient(ellipse at center, rgba(6, 8, 10, 0.92) 0%, rgba(10, 12, 16, 0.50) 60%, transparent 85%)',
            filter: 'blur(3px)',
          }}
        />

        {/* Right foot contact shadow */}
        <div
          className="absolute pointer-events-none rounded-[50%]"
          style={{
            left: '79.29%',
            top: '93.5%',
            width: '7.81%',
            height: '2.34%',
            background:
              'radial-gradient(ellipse at center, rgba(6, 8, 10, 0.92) 0%, rgba(10, 12, 16, 0.50) 60%, transparent 85%)',
            filter: 'blur(3px)',
          }}
        />

        {/* 3. Rubber Feet Protruding from Bottom of Chassis */}
        <div
          className="absolute rounded-b-xl z-0"
          style={{
            left: '12.89%',
            top: '90.17%',
            width: '7.71%',
            height: '3.95%',
            background: 'linear-gradient(to bottom, #181a1e 0%, #101114 60%, #08090a 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 2px 4px rgba(0, 0, 0, 0.8)',
            borderBottom: '1.5px solid #050607',
          }}
        />

        <div
          className="absolute rounded-b-xl z-0"
          style={{
            left: '79.29%',
            top: '90.17%',
            width: '7.81%',
            height: '3.95%',
            background: 'linear-gradient(to bottom, #181a1e 0%, #101114 60%, #08090a 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 2px 4px rgba(0, 0, 0, 0.8)',
            borderBottom: '1.5px solid #050607',
          }}
        />

        {/* 4. Main Outer Chassis (Satin Charcoal / Black Textured Plastic Body) */}
        <div
          className="relative z-10 w-full h-full rounded-[44px] overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 50% 25%, #2a2e35 0%, #1e2025 50%, #141518 85%, #0e0f11 100%)',
            border: '2px solid #2d3138',
            boxShadow: `
              0 24px 48px -8px rgba(0, 0, 0, 0.85),
              0 12px 24px -4px rgba(0, 0, 0, 0.65),
              inset 0 2px 1px 0 rgba(255, 255, 255, 0.28),
              inset 2px 0 2px 0 rgba(255, 255, 255, 0.12),
              inset -2px 0 2px 0 rgba(0, 0, 0, 0.5),
              inset 0 -3px 3px 0 rgba(0, 0, 0, 0.8)
            `,
          }}
        >
          {/* Subtle Matte / Leatherette Surface Micro-Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.24] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(#ffffff 0.75px, transparent 0.75px), radial-gradient(#ffffff 0.75px, transparent 0.75px)',
              backgroundSize: '3px 3px',
              backgroundPosition: '0 0, 1.5px 1.5px',
            }}
          />

          {/* 5. Upper Chrome Bezel & Recessed Module (Door + Speaker) */}
          <div
            className="absolute rounded-[24px] overflow-hidden"
            style={{
              left: '4.31%',
              top: '8.145%',
              width: '91.379%',
              height: '60.832%',
              background: 'linear-gradient(135deg, #f2eff4 0%, #dcdbe0 30%, #a4a2a8 60%, #e8e7ec 100%)',
              padding: '5px',
              boxShadow: `
                0 3px 6px rgba(0, 0, 0, 0.5),
                inset 0 1.5px 0 rgba(255, 255, 255, 0.9),
                inset 0 -1.5px 0 rgba(0, 0, 0, 0.4)
              `,
            }}
          >
            {/* Inner dark rim separating chrome from contents */}
            <div
              className="relative w-full h-full rounded-[19px] overflow-hidden flex"
              style={{
                background: '#d4d3cf',
                boxShadow: 'inset 0 0 0 1.5px #1a1c20',
              }}
            >
              {/* 5A. Left Side: Cassette Door Compartment (Clear Acrylic Window) */}
              <div
                className="relative rounded-[12px] overflow-hidden"
                style={{
                  margin: '2.5px 0 2.5px 2.5px',
                  width: '63.6%',
                  height: 'calc(100% - 5px)',
                  background: '#121417',
                  border: '2px solid #08090a',
                  boxShadow: `
                    inset 0 2px 6px rgba(0, 0, 0, 0.9),
                    0 1px 0 rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                <CassetteTape
                  isPlaying={isPlaying}
                  rotationDuration={rotationDuration}
                  rotationDirection={rotationDirection}
                />
              </div>

              {/* 5B. Right Side: Full Content Box Section */}
              <div
                className="relative flex-1 h-full overflow-hidden p-1 select-none"
                style={{
                  margin: '2.5px 2.5px 2.5px 0',
                  background: 'linear-gradient(135deg, #deddd9 0%, #cecdc9 50%, #bcbbb7 100%)',
                  boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.8)',
                }}
              >
                {/* The Recessed Content Box covering the entire section */}
                <div
                  className="relative w-full h-full rounded-[10px] p-3.5 flex flex-col justify-between overflow-hidden"
                  style={{
                    background: 'linear-gradient(to bottom, #dedbd5 0%, #ebe8e1 100%)',
                    border: '1.5px solid #b2afa6',
                    boxShadow: `
                      inset 0 2px 4px rgba(0, 0, 0, 0.16),
                      0 1px 0 rgba(255, 255, 255, 0.9)
                    `,
                  }}
                >
                  {/* 1. Top Meta Header */}
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#444e5d] uppercase tracking-wider">
                    <span>LOG #004 • OCT 24</span>
                    <span className="text-[#cb181c] font-black tracking-wider">4.75 CM/S</span>
                  </div>

                  {/* 2. Main Content Body Area */}
                  <div className="flex flex-col gap-2 my-auto">
                    <p
                      className="text-[13px] leading-[1.45] text-[#1e2530] font-semibold"
                      style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)' }}
                    >
                      High-fidelity analog audio recording captured on magnetic tape with automatic level
                      biasing and vintage broadcast response.
                    </p>
                    <p
                      className="text-[11.5px] leading-[1.4] text-[#4d5666] font-medium"
                      style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.7)' }}
                    >
                      Extended dynamic headroom with active analog acoustic capture and low-noise magnetic
                      tape formulation.
                    </p>
                  </div>

                  {/* 3. Bottom Meta Footer */}
                  <div
                    className="text-[11px] font-semibold text-[#525d6d] pt-2 border-t border-[#c4c0b6] flex items-center justify-between"
                    style={{ textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)' }}
                  >
                    <span className="font-bold">SOURCE: MIC IN</span>
                    <span className="font-bold">TIME: 03:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Lower Push-Button Controls Array (6 Mechanical Keys) */}
          <div
            className="absolute flex items-center justify-between"
            style={{
              left: '12.176%',
              top: '76.429%',
              width: '75.646%',
              height: '18.197%',
              gap: '8px',
            }}
          >
            {/* BUTTON 1: RECORD */}
            <button
              onClick={handleRecord}
              title="Record"
              className="relative flex items-center justify-center rounded-[8px] transition-transform active:translate-y-1 focus:outline-none cursor-pointer"
              style={{
                width: '16.52%',
                height: '100%',
                background: 'linear-gradient(to bottom, #d62325 0%, #b81619 55%, #940f12 100%)',
                boxShadow:
                  activeBtn === 'rec' || isRecording
                    ? 'inset 0 3px 6px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)'
                    : `
                      inset 0 1.5px 0 rgba(255, 255, 255, 0.45),
                      inset 1.5px 0 0 rgba(255, 255, 255, 0.2),
                      inset -1.5px 0 0 rgba(0, 0, 0, 0.4),
                      inset 0 -2px 0 rgba(0, 0, 0, 0.5),
                      0 4px 6px -1px rgba(0, 0, 0, 0.6)
                    `,
                transform: activeBtn === 'rec' || isRecording ? 'translateY(3px)' : 'none',
              }}
            >
              <div
                className="w-[28px] h-[28px] rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 45% 45%, #700a0c 0%, #4a0507 80%, #300203 100%)',
                  boxShadow: `
                    inset 0 2px 4px rgba(0, 0, 0, 0.8),
                    0 1px 0 rgba(255, 255, 255, 0.25)
                  `,
                }}
              />
            </button>

            {/* BUTTON 2: PLAY */}
            <button
              onClick={handlePlay}
              title="Play"
              className="relative flex items-center justify-center rounded-[8px] transition-transform active:translate-y-1 focus:outline-none cursor-pointer"
              style={{
                width: '16.52%',
                height: '100%',
                background: 'linear-gradient(to bottom, #3c4046 0%, #2d3136 55%, #1f2226 100%)',
                boxShadow:
                  activeBtn === 'play' || (isPlaying && !isRecording)
                    ? 'inset 0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)'
                    : `
                      inset 0 1.5px 0 rgba(255, 255, 255, 0.25),
                      inset 1.5px 0 0 rgba(255, 255, 255, 0.12),
                      inset -1.5px 0 0 rgba(0, 0, 0, 0.4),
                      inset 0 -2px 0 rgba(0, 0, 0, 0.6),
                      0 4px 6px -1px rgba(0, 0, 0, 0.6)
                    `,
                transform:
                  activeBtn === 'play' || (isPlaying && !isRecording) ? 'translateY(3px)' : 'none',
              }}
            >
              <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-[#f2f4f7] ml-1 drop-shadow-sm" />
            </button>

            {/* BUTTON 3: STOP */}
            <button
              onClick={handleStop}
              title="Stop"
              className="relative flex items-center justify-center rounded-[8px] transition-transform active:translate-y-1 focus:outline-none cursor-pointer"
              style={{
                width: '16.52%',
                height: '100%',
                background: 'linear-gradient(to bottom, #3c4046 0%, #2d3136 55%, #1f2226 100%)',
                boxShadow:
                  activeBtn === 'stop'
                    ? 'inset 0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)'
                    : `
                      inset 0 1.5px 0 rgba(255, 255, 255, 0.25),
                      inset 1.5px 0 0 rgba(255, 255, 255, 0.12),
                      inset -1.5px 0 0 rgba(0, 0, 0, 0.4),
                      inset 0 -2px 0 rgba(0, 0, 0, 0.6),
                      0 4px 6px -1px rgba(0, 0, 0, 0.6)
                    `,
                transform: activeBtn === 'stop' ? 'translateY(3px)' : 'none',
              }}
            >
              <div className="w-[19px] h-[19px] rounded-sm bg-[#f2f4f7] drop-shadow-sm" />
            </button>

            {/* BUTTON 4: REWIND */}
            <button
              onClick={handleRewind}
              title="Rewind"
              className="relative flex items-center justify-center rounded-[8px] transition-transform active:translate-y-1 focus:outline-none cursor-pointer"
              style={{
                width: '16.52%',
                height: '100%',
                background: 'linear-gradient(to bottom, #3c4046 0%, #2d3136 55%, #1f2226 100%)',
                boxShadow:
                  activeBtn === 'rew'
                    ? 'inset 0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)'
                    : `
                      inset 0 1.5px 0 rgba(255, 255, 255, 0.25),
                      inset 1.5px 0 0 rgba(255, 255, 255, 0.12),
                      inset -1.5px 0 0 rgba(0, 0, 0, 0.4),
                      inset 0 -2px 0 rgba(0, 0, 0, 0.6),
                      0 4px 6px -1px rgba(0, 0, 0, 0.6)
                    `,
                transform: activeBtn === 'rew' ? 'translateY(3px)' : 'none',
              }}
            >
              <div className="flex items-center -space-x-1.5 drop-shadow-sm">
                <div className="w-0 h-0 border-y-[12px] border-y-transparent border-r-[16px] border-r-[#f2f4f7]" />
                <div className="w-0 h-0 border-y-[12px] border-y-transparent border-r-[16px] border-r-[#f2f4f7]" />
              </div>
            </button>

            {/* BUTTON 5: FAST FORWARD */}
            <button
              onClick={handleFastForward}
              title="Fast Forward"
              className="relative flex items-center justify-center rounded-[8px] transition-transform active:translate-y-1 focus:outline-none cursor-pointer"
              style={{
                width: '16.52%',
                height: '100%',
                background: 'linear-gradient(to bottom, #3c4046 0%, #2d3136 55%, #1f2226 100%)',
                boxShadow:
                  activeBtn === 'ff'
                    ? 'inset 0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)'
                    : `
                      inset 0 1.5px 0 rgba(255, 255, 255, 0.25),
                      inset 1.5px 0 0 rgba(255, 255, 255, 0.12),
                      inset -1.5px 0 0 rgba(0, 0, 0, 0.4),
                      inset 0 -2px 0 rgba(0, 0, 0, 0.6),
                      0 4px 6px -1px rgba(0, 0, 0, 0.6)
                    `,
                transform: activeBtn === 'ff' ? 'translateY(3px)' : 'none',
              }}
            >
              <div className="flex items-center -space-x-1.5 drop-shadow-sm">
                <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[16px] border-l-[#f2f4f7]" />
                <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[16px] border-l-[#f2f4f7]" />
              </div>
            </button>

            {/* BUTTON 6: PAUSE */}
            <button
              onClick={handlePause}
              title="Pause"
              className="relative flex items-center justify-center rounded-[8px] transition-transform active:translate-y-1 focus:outline-none cursor-pointer"
              style={{
                width: '16.66%',
                height: '100%',
                background: 'linear-gradient(to bottom, #3c4046 0%, #2d3136 55%, #1f2226 100%)',
                boxShadow:
                  activeBtn === 'pause'
                    ? 'inset 0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.5)'
                    : `
                      inset 0 1.5px 0 rgba(255, 255, 255, 0.25),
                      inset 1.5px 0 0 rgba(255, 255, 255, 0.12),
                      inset -1.5px 0 0 rgba(0, 0, 0, 0.4),
                      inset 0 -2px 0 rgba(0, 0, 0, 0.6),
                      0 4px 6px -1px rgba(0, 0, 0, 0.6)
                    `,
                transform: activeBtn === 'pause' ? 'translateY(3px)' : 'none',
              }}
            >
              <div className="flex items-center gap-[6px] drop-shadow-sm">
                <div className="w-[6px] h-[22px] rounded-sm bg-[#f2f4f7]" />
                <div className="w-[6px] h-[22px] rounded-sm bg-[#f2f4f7]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Animation Keyframes */}
      <style>{`
        @keyframes spinReel {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Photorealistic Cassette Tape & Compartment Component
 * Recreated with 1:1 pixel fidelity based on the close-up reference image.
 */
function CassetteTape({
  isPlaying = false,
  rotationDuration = '3.5s',
  rotationDirection = 'normal',
}) {
  return (
    <div className="relative w-full h-full select-none overflow-hidden rounded-[12px] bg-[#101215]">
      {/* 1. Cassette Shell Body */}
      <div
        className="relative w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, #2b2f35 0%, #1c1f24 40%, #121417 100%)',
          boxShadow: 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* 2. Cassette Shell Outer Bevel & Molded Rim */}
        <div
          className="absolute inset-[3px] rounded-[10px] pointer-events-none"
          style={{
            border: '1.5px solid #08090b',
            boxShadow: `
              inset 0 1.5px 0 0 rgba(255, 255, 255, 0.15),
              inset 1.5px 0 0 0 rgba(255, 255, 255, 0.08),
              inset -1.5px 0 0 0 rgba(0, 0, 0, 0.5),
              inset 0 -1.5px 0 0 rgba(0, 0, 0, 0.7)
            `,
          }}
        />

        {/* 3. The 4 Corner Phillips-Head Metallic Screws */}
        <div className="absolute top-[8px] left-[8px] z-30">
          <PhillipsScrew />
        </div>
        <div className="absolute top-[8px] right-[8px] z-30">
          <PhillipsScrew />
        </div>
        <div className="absolute bottom-[8px] left-[8px] z-30">
          <PhillipsScrew />
        </div>
        <div className="absolute bottom-[8px] right-[8px] z-30">
          <PhillipsScrew />
        </div>

        {/* 4. White Paper Sticker Label ("NEWS AUDIO") */}
        <div
          className="absolute rounded-[5px] overflow-hidden flex items-center justify-between px-4 z-10"
          style={{
            top: '24px',
            left: '38px',
            right: '38px',
            height: '76px',
            background: 'linear-gradient(to bottom, #f9f9f8 0%, #ebebea 70%, #dededc 100%)',
            boxShadow: `
              0 1.5px 3px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.95),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1)
            `,
            clipPath:
              'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)',
          }}
        >
          {/* 4A. Left: Red Audio Waveform Logo */}
          <div className="flex items-center h-full py-2">
            <svg
              viewBox="0 0 135 90"
              className="h-[52px] w-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
            >
              <line
                x1="8"
                y1="45"
                x2="127"
                y2="45"
                stroke="#cb181c"
                strokeWidth="6.5"
                strokeLinecap="round"
              />
              <circle cx="8" cy="45" r="4" fill="#cb181c" />
              <circle cx="127" cy="45" r="4" fill="#cb181c" />

              <line x1="24" y1="34" x2="24" y2="56" stroke="#cb181c" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="41" y1="37" x2="41" y2="53" stroke="#cb181c" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="58" y1="21" x2="58" y2="69" stroke="#cb181c" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="75" y1="27" x2="75" y2="63" stroke="#cb181c" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="92" y1="5" x2="92" y2="85" stroke="#cb181c" strokeWidth="7" strokeLinecap="round" />
              <line x1="109" y1="21" x2="109" y2="69" stroke="#cb181c" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="124" y1="34" x2="124" y2="56" stroke="#cb181c" strokeWidth="6.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* 4B. Center: "NEWS AUDIO" Typography */}
          <div className="flex items-center gap-2.5 tracking-tighter select-none pl-2 pr-1">
            <span
              className="font-black italic text-2xl md:text-3xl text-[#102032] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
              style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
            >
              NEWS
            </span>
            <span
              className="font-black italic text-2xl md:text-3xl text-[#cb181c] drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
              style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
            >
              AUDIO
            </span>
          </div>

          {/* 4C. Right: Red Dual Racing Stripes */}
          <div className="flex items-center gap-2 h-full py-1 pr-1">
            <div
              className="w-5 h-full bg-[#cb181c] transform -skew-x-[32deg] shadow-sm"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            />
            <div
              className="w-3.5 h-full bg-[#cb181c] transform -skew-x-[32deg] shadow-sm"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            />
          </div>
        </div>

        {/* 5. Central Tape Viewport & Spool Hubs Chamber */}
        <div
          className="absolute z-10 flex items-center justify-between"
          style={{
            top: '110px',
            bottom: '82px',
            left: '38px',
            right: '38px',
          }}
        >
          <SpoolReel
            isPlaying={isPlaying}
            rotationDuration={rotationDuration}
            rotationDirection={rotationDirection}
          />

          {/* Center Tape Viewport Bridge */}
          <div
            className="relative flex-1 h-[88px] mx-[-12px] z-10 rounded-[4px] overflow-hidden flex flex-col justify-between"
            style={{
              background: 'linear-gradient(to bottom, #111317 0%, #1a1c22 50%, #111317 100%)',
              border: '2px solid #08090b',
              boxShadow: `
                inset 0 3px 6px rgba(0, 0, 0, 0.9),
                0 1px 0 rgba(255, 255, 255, 0.15)
              `,
            }}
          >
            <div
              className="w-full h-[18px] opacity-90"
              style={{
                background: 'linear-gradient(to bottom, #2b130a 0%, #461d0f 50%, #2b130a 100%)',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.6)',
              }}
            />

            <div
              className="relative w-full h-[36px] flex items-center justify-center px-4"
              style={{
                background: 'linear-gradient(to bottom, #f0eee9 0%, #dedcd5 50%, #eae8e1 100%)',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              <div className="w-[1.5px] h-full bg-[#353840] opacity-40 mx-auto" />
            </div>

            <div
              className="w-full h-[18px] opacity-90"
              style={{
                background: 'linear-gradient(to bottom, #2b130a 0%, #461d0f 50%, #2b130a 100%)',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.6)',
              }}
            />
          </div>

          <SpoolReel
            isPlaying={isPlaying}
            rotationDuration={rotationDuration}
            rotationDirection={rotationDirection}
          />
        </div>

        {/* 6. Lower Raised Textured Grip Trapezoid */}
        <div
          className="absolute bottom-[3px] inset-x-[22px] h-[78px] z-10 overflow-hidden"
          style={{
            clipPath: 'polygon(3.5% 0%, 96.5% 0%, 100% 100%, 0% 100%)',
            background: 'linear-gradient(to bottom, #32373e 0%, #22262b 35%, #181b1f 100%)',
            boxShadow: `
              inset 0 1.5px 0 0 rgba(255, 255, 255, 0.28),
              inset 1.5px 0 0 0 rgba(255, 255, 255, 0.12),
              inset -1.5px 0 0 0 rgba(0, 0, 0, 0.5),
              0 -2px 4px rgba(0, 0, 0, 0.4)
            `,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.16] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '4px 4px',
              backgroundPosition: '0 0, 2px 2px',
            }}
          />

          <div className="relative w-full h-full flex items-center justify-between px-[98px]">
            <div
              className="w-[26px] h-[26px] rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom, #0a0b0d 0%, #1c1f24 100%)',
                border: '1.5px solid #383c44',
                boxShadow: `
                  inset 0 2px 4px rgba(0, 0, 0, 0.9),
                  0 1px 0 rgba(255, 255, 255, 0.15)
                `,
              }}
            >
              <div className="w-[14px] h-[14px] rounded-full bg-[#050607] shadow-inner" />
            </div>

            <div
              className="w-[26px] h-[26px] rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom, #0a0b0d 0%, #1c1f24 100%)',
                border: '1.5px solid #383c44',
                boxShadow: `
                  inset 0 2px 4px rgba(0, 0, 0, 0.9),
                  0 1px 0 rgba(255, 255, 255, 0.15)
                `,
              }}
            >
              <div className="w-[14px] h-[14px] rounded-full bg-[#050607] shadow-inner" />
            </div>
          </div>
        </div>

        {/* 7. Acrylic Glass Specular Reflection Highlight Streak */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.40) 0%, 
                rgba(255, 255, 255, 0.20) 15%, 
                rgba(255, 255, 255, 0.05) 35%, 
                transparent 55%, 
                rgba(255, 255, 255, 0.06) 80%, 
                transparent 100%
              )
            `,
          }}
        />

        <div
          className="absolute inset-x-0 top-0 h-[2px] pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
}

/**
 * 3D Metallic Phillips-Head Screw Component
 */
function PhillipsScrew() {
  return (
    <div
      className="w-[18px] h-[18px] rounded-full flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at 35% 35%, #a8abb0 0%, #686a70 65%, #383a3e 100%)',
        boxShadow: `
          inset 0 1px 1px rgba(255, 255, 255, 0.8),
          0 1.5px 3px rgba(0, 0, 0, 0.85)
        `,
      }}
    >
      <div
        className="w-[13px] h-[13px] rounded-full flex items-center justify-center relative"
        style={{
          background: '#15171a',
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.9)',
        }}
      >
        <div
          className="absolute w-[8px] h-[2px] rounded-[0.5px]"
          style={{
            background: 'linear-gradient(to bottom, #d0d2d6 0%, #808288 100%)',
            boxShadow: '0 0.5px 0 rgba(0,0,0,0.5)',
          }}
        />
        <div
          className="absolute w-[2px] h-[8px] rounded-[0.5px]"
          style={{
            background: 'linear-gradient(to right, #d0d2d6 0%, #808288 100%)',
            boxShadow: '0 0.5px 0 rgba(0,0,0,0.5)',
          }}
        />
      </div>
    </div>
  );
}

/**
 * Precision Spool Reel with Magnetic Brown Tape Ribbon & White 6-Toothed Hub
 */
function SpoolReel({ isPlaying, rotationDuration, rotationDirection }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full z-20"
      style={{
        width: '106px',
        height: '106px',
        background: `
          radial-gradient(circle, 
            #220e06 0%, 
            #3e190a 35%, 
            #52210e 55%, 
            #381508 72%, 
            #1e0c05 82%, 
            #14161a 84%
          )
        `,
        boxShadow: `
          0 3px 8px rgba(0, 0, 0, 0.85),
          inset 0 0 0 1px rgba(0, 0, 0, 0.8)
        `,
      }}
    >
      <div
        className="absolute inset-[8px] rounded-full pointer-events-none opacity-25"
        style={{
          background:
            'repeating-radial-gradient(circle, transparent 0px, transparent 1.5px, #000000 2px, #000000 3px)',
        }}
      />

      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: '74px',
          height: '74px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f0ee 40%, #d8d8d4 100%)',
          boxShadow: `
            0 2px 5px rgba(0, 0, 0, 0.6),
            inset 0 1.5px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1.5px 0 rgba(0, 0, 0, 0.25)
          `,
          transformOrigin: 'center center',
          willChange: 'transform',
          animation: isPlaying
            ? `spinReel ${rotationDuration} linear infinite ${rotationDirection}`
            : 'none',
        }}
      >
        <div
          className="absolute inset-[3px] rounded-full pointer-events-none"
          style={{
            border: '1.5px solid rgba(0, 0, 0, 0.12)',
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.8)',
          }}
        />

        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute rounded-[1px]"
            style={{
              width: '8px',
              height: '13px',
              background: 'linear-gradient(to bottom, #ffffff 0%, #dfdfdb 60%, #b8b8b2 100%)',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
              transform: `rotate(${deg}deg) translateY(-22px)`,
            }}
          />
        ))}

        <div
          className="w-[34px] h-[34px] rounded-full flex items-center justify-center relative"
          style={{
            background: 'radial-gradient(circle, #08090b 0%, #14161a 75%, #24272e 100%)',
            boxShadow: `
              inset 0 2px 4px rgba(0, 0, 0, 0.9),
              0 1px 0 rgba(255, 255, 255, 0.8)
            `,
          }}
        />
      </div>
    </div>
  );
}

export const Section15 = () => {
  return (
    <section
      id="section-15"
      className="w-full relative py-12 lg:py-16 select-none overflow-hidden bg-[#f6f7f9] border-b border-slate-200"
    >
      {/* Background Soft Studio Ambiance */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-800/5 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Header Container */}
      <header className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-wider uppercase mb-2.5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="font-mono text-red-600">CRCCF AUDIO ARCHIVES</span>
          <span className="text-slate-300">|</span>
          <span>FIELD VOICE RECORDER</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-['Montserrat',sans-serif]">
          Vintage Cassette Recorder & Investigative Voice Logs
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          Undercover field recordings captured on magnetic tape with automatic level biasing, mechanical push-button controls, and authentic acoustic feedback.
        </p>

        {/* Tactical Status Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px] font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
            <FaTape className="text-amber-600 text-xs" />
            <span>4.75 cm/s Analog Tape</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
            <FaVolumeHigh className="text-red-600 text-xs" />
            <span>Dual Mechanical Spools</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
            <FaMicrophoneLines className="text-blue-600 text-xs" />
            <span>Low-Noise Acoustic Bias</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-xs">
            <FaShieldHalved className="text-emerald-600 text-xs" />
            <span>Evidence Docket CR-004</span>
          </span>
        </div>
      </header>

      {/* Cassette Voice Recorder Component */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-center">
        <CassetteRecorder />
      </div>
    </section>
  );
};

export { Section15 as SportsArenaSection, liveMatches, sportsStories };

export default Section15;
