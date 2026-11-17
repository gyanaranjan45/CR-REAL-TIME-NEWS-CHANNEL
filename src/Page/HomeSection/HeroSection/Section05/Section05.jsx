import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { breakingNewsData } from './Section05Data';

/* ==========================================================================
   0. ISOLATED 3D BROADCAST CAMERA STYLES (Self-Contained Inside Component)
   ========================================================================== */
const CAMERA_CSS = `/* ==========================================================================
   CAMERA3D.CSS - Ultra-Realistic Broadcast Camera & 3D Three-Quarter Rig
   CR Real Time News Channel - Isolated, Conflict-Free Styling
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. SCENE CONTAINER & 3D PERSPECTIVE STAGE
   -------------------------------------------------------------------------- */
.cr-camera-scene {
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  overflow: visible;
}

.cr-camera-scaler {
  position: relative;
  width: 540px;
  height: 480px;
  flex-shrink: 0;
  transform-origin: 270px 240px;
}

.cr-camera-stage {
  position: absolute;
  inset: 0;
  perspective: 1200px;
  perspective-origin: 36% 46%;
  transform-style: preserve-3d;
}

/* Floor Contact Shadow */
.cr-camera-ground-shadow {
  position: absolute;
  bottom: 0px;
  left: 55px;
  width: 370px;
  height: 26px;
  background: radial-gradient(ellipse at center, rgba(10, 16, 28, 0.72) 0%, rgba(10, 16, 28, 0.25) 55%, transparent 75%);
  filter: blur(8px);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

/* ==========================================================================
   2. UNIFIED 3D CAMERA ROOT RIG
   Oriented in authentic three-quarter perspective:
   - Front lens & hood point toward RIGHT (news content container)
   - Rear section tapers smoothly into depth
   - Center anchor X ≈ 230px
   ========================================================================== */
.cr-camera-root {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transform: rotateY(-18deg) rotateX(4deg);
  transform-origin: 230px 240px;
  transition: transform 0.4s ease-out;
}

/* ==========================================================================
   3. CAMERA BODY & TAPERED 3D CHASSIS
   ========================================================================== */
.cr-camera-body {
  position: absolute;
  left: 125px;
  top: 116px;
  width: 165px;
  height: 128px;
  background: linear-gradient(155deg, #383c46 0%, #1f2228 35%, #0f1013 95%);
  border-radius: 9px 8px 8px 8px;
  box-shadow: 
    inset 0 1.5px 2px rgba(255, 255, 255, 0.32),
    inset -2px 0 4px rgba(255, 255, 255, 0.16),
    inset 0 -2px 4px rgba(0, 0, 0, 0.85),
    0 14px 26px rgba(0, 0, 0, 0.7);
  border: 1.5px solid #282a32;
  z-index: 10;
  transform-style: preserve-3d;
}

.cr-body-top-bevel {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 9px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, transparent 100%);
  border-radius: 8px 8px 0 0;
}

.cr-body-bottom-bevel {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
}

.cr-body-front-depth-face {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 14px;
  height: 100%;
  background: linear-gradient(90deg, #18191d 0%, #383c48 60%, #1e2026 100%);
  border-radius: 0 8px 8px 0;
  border-right: 1.5px solid #4a4f5e;
}

/* Recessed Operator Control Panel */
.cr-body-operator-panel {
  position: absolute;
  left: 12px;
  top: 12px;
  width: 134px;
  height: 102px;
  background: #101114;
  border-radius: 5px;
  border: 1px solid #23262e;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.88), 0 1px 1px rgba(255, 255, 255, 0.08);
  padding: 5px 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Row 1: Function Keys & LEDs */
.cr-panel-row-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1a1c22;
  padding-bottom: 3.5px;
}

.cr-panel-keys {
  display: flex;
  gap: 3.5px;
}

.cr-btn-pill {
  background: linear-gradient(180deg, #2e313a 0%, #16171a 100%);
  border: 0.5px solid #444854;
  border-radius: 2.5px;
  padding: 1.5px 5px;
  font-size: 5px;
  font-weight: 800;
  color: #e2e8f0;
  font-family: sans-serif;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  letter-spacing: 0.2px;
}

.cr-btn-pill.cr-btn-rec-pill {
  color: #f87171;
  border-color: #7f1d1d;
}

.cr-panel-leds {
  display: flex;
  gap: 3.5px;
  align-items: center;
}

.cr-led-status-green {
  width: 4px;
  height: 4px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 4px #22c55e;
}

.cr-led-status-amber {
  width: 4px;
  height: 4px;
  background: #f59e0b;
  border-radius: 50%;
  box-shadow: 0 0 3px #f59e0b;
}

/* Row 2: Playback Keys & Prominent Red REC Button */
.cr-panel-row-middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0;
}

.cr-playback-cluster {
  display: flex;
  gap: 3px;
}

.cr-btn-mini {
  width: 12px;
  height: 10px;
  background: #1c1e24;
  border: 0.5px solid #333640;
  border-radius: 2px;
  font-size: 5.5px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

.cr-btn-rec-large {
  width: 19px;
  height: 19px;
  background: radial-gradient(circle at 35% 35%, #ff4d4d 0%, #dc2626 55%, #990000 100%);
  border-radius: 50%;
  border: 1.5px solid #181a20;
  box-shadow: 0 0 8px rgba(220, 38, 38, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr-rec-glow-core {
  width: 7px;
  height: 7px;
  background: #ff2222;
  border-radius: 50%;
  box-shadow: inset 0 0 2px #fff;
}

/* Row 3: Nav Cluster & Numeric Preset Keys */
.cr-panel-row-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #1a1c22;
  padding-top: 3.5px;
}

.cr-nav-cluster {
  display: flex;
  gap: 2.5px;
  align-items: center;
}

.cr-nav-dot {
  width: 8px;
  height: 8px;
  background: #202228;
  border-radius: 50%;
  border: 0.5px solid #363942;
}
.cr-nav-dot.cr-nav-center {
  background: #363942;
}

.cr-preset-keys {
  display: flex;
  gap: 2.5px;
}

.cr-btn-num {
  width: 10px;
  height: 10px;
  background: #191b20;
  border: 0.5px solid #30333c;
  border-radius: 2px;
  font-size: 5px;
  font-weight: 700;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
}

/* Rear V-Mount Battery */
.cr-body-battery {
  position: absolute;
  left: -20px;
  top: 14px;
  width: 21px;
  height: 102px;
  background: linear-gradient(90deg, #0d0e10 0%, #24262d 60%, #141518 100%);
  border-radius: 5px 0 0 5px;
  box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.6);
  border: 1px solid #1a1b20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 2.5px;
}

.cr-battery-led-gauge {
  display: flex;
  flex-direction: column;
  gap: 3.5px;
}
.cr-battery-led {
  width: 4px;
  height: 4px;
  background: #334155;
  border-radius: 1px;
}
.cr-battery-led.on {
  background: #22c55e;
  box-shadow: 0 0 3px #22c55e;
}

.cr-battery-release-latch {
  width: 100%;
  height: 10px;
  background: #ff3333;
  border-radius: 1px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.6);
}

/* Cooling Vents */
.cr-body-vent-grill {
  position: absolute;
  right: 14px;
  top: 15px;
  width: 6px;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cr-vent-slot {
  width: 100%;
  height: 2.5px;
  background: #0d0e10;
  border-radius: 1px;
}

/* Corner Bolts */
.cr-corner-bolt {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #64748b;
  border-radius: 50%;
  box-shadow: inset 0 0 1px #000;
}
.cr-corner-bolt.bolt-tl { left: 4px; top: 4px; }
.cr-corner-bolt.bolt-bl { left: 4px; bottom: 4px; }
.cr-corner-bolt.bolt-tr { right: 14px; top: 4px; }
.cr-corner-bolt.bolt-br { right: 14px; bottom: 4px; }

/* ==========================================================================
   4. ARTICULATED 3D LCD DISPLAY (On Left Side)
   ========================================================================== */
.cr-camera-display {
  position: absolute;
  left: 5px;
  top: 130px;
  width: 150px;
  height: 110px;
  z-index: 14;
  transform-style: preserve-3d;
  transform: rotateY(20deg) rotateX(-2deg);
  transform-origin: right center;
}

.cr-display-rear-casing {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 150px;
  height: 110px;
  background: linear-gradient(135deg, #1a1b20 0%, #0d0e10 100%);
  border-radius: 8px;
  box-shadow: -7px 7px 16px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.16);
  border: 1.5px solid #24262e;
}

.cr-display-hinge-bracket {
  position: absolute;
  right: -14px;
  top: 44px;
  width: 16px;
  height: 24px;
  background: linear-gradient(90deg, #363942 0%, #17181c 100%);
  border-radius: 2px;
  border: 1px solid #282a32;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.cr-display-hinge-pin {
  width: 5.5px;
  height: 18px;
  background: #475569;
  border-radius: 1px;
}

.cr-display-arm-joint {
  position: absolute;
  right: -7px;
  width: 9px;
  height: 9px;
  background: #1e2026;
  border-radius: 1px;
}

.cr-display-frame {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 142px;
  height: 102px;
  background: #111215;
  border-radius: 6px;
  border: 1.5px solid #2a2c35;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cr-display-screen {
  position: relative;
  width: 100%;
  height: 78px;
  background: radial-gradient(circle at center, #0f2b5c 0%, #071329 70%, #030814 100%);
  border-radius: 3.5px;
  border: 1px solid #1e3a6a;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.85), 0 0 10px rgba(14, 116, 144, 0.35);
}

.cr-display-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.12) 1px, transparent 1px);
  background-size: 10px 10px;
}

.cr-display-globe {
  position: absolute;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  border: 1px solid rgba(56, 189, 248, 0.45);
  background: radial-gradient(circle, rgba(14, 116, 144, 0.25) 0%, transparent 70%);
  box-shadow: 0 0 16px rgba(6, 182, 212, 0.45);
}

.cr-display-globe-ring {
  position: absolute;
  width: 84px;
  height: 40px;
  border-radius: 50%;
  border: 1px dashed rgba(56, 189, 248, 0.35);
  transform: rotate(-18deg);
}

.cr-display-brand {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5px;
}

.cr-display-title {
  font-size: 14.5px;
  font-weight: 900;
  font-style: italic;
  color: #ffffff;
  letter-spacing: 0.9px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 255, 255, 0.65);
  font-family: sans-serif;
}

.cr-display-live-tag {
  display: flex;
  align-items: center;
  gap: 3.5px;
  background: #dc2626;
  border-radius: 3px;
  padding: 1.5px 6px;
  font-size: 7.5px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.9px;
  box-shadow: 0 0 7px #dc2626;
}

.cr-display-play-icon {
  width: 0;
  height: 0;
  border-top: 2.5px solid transparent;
  border-bottom: 2.5px solid transparent;
  border-left: 5px solid #ffffff;
}

.cr-display-glass-sheen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
  pointer-events: none;
}

.cr-display-bottom-bezel {
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr-display-4k-badge {
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 1.2px;
  color: #94a3b8;
  font-family: sans-serif;
}

/* ==========================================================================
   5. TOP LIGHTING, HANDLE & SHOTGUN MICROPHONE
   ========================================================================== */
.cr-camera-lighting-group {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  pointer-events: none;
}

/* Top Carry Handle */
.cr-camera-top-handle {
  position: absolute;
  left: 145px;
  top: 76px;
  width: 148px;
  height: 44px;
  z-index: 11;
  transform-style: preserve-3d;
  pointer-events: auto;
}

.cr-handle-bridge-bar {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 148px;
  height: 16px;
  background: linear-gradient(180deg, #464a55 0%, #202227 60%, #111215 100%);
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.32), 0 3px 6px rgba(0, 0, 0, 0.6);
  border: 1px solid #23252b;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 12px;
}

.cr-handle-cutout {
  width: 22px;
  height: 6px;
  background: #090a0c;
  border-radius: 2px;
  box-shadow: inset 0 1px 2px #000;
}

.cr-handle-riser-rear {
  position: absolute;
  left: 10px;
  top: 15px;
  width: 14px;
  height: 28px;
  background: linear-gradient(90deg, #23252a 0%, #404450 50%, #17181c 100%);
  border-radius: 0 0 3px 3px;
  border: 1px solid #22242a;
}

.cr-handle-riser-front {
  position: absolute;
  right: 14px;
  top: 15px;
  width: 14px;
  height: 28px;
  background: linear-gradient(90deg, #23252a 0%, #404450 50%, #17181c 100%);
  border-radius: 0 0 3px 3px;
  border: 1px solid #22242a;
}

/* EVF Unit */
.cr-camera-evf {
  position: absolute;
  left: -36px;
  top: -8px;
  width: 76px;
  height: 44px;
  z-index: 10;
  display: flex;
  align-items: center;
}

.cr-evf-eyecup {
  width: 24px;
  height: 36px;
  background: radial-gradient(ellipse at 30% 50%, #2c2e35 0%, #121316 65%, #050507 100%);
  border-radius: 18px 4px 4px 18px;
  box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.7);
  border: 1px solid #202228;
  flex-shrink: 0;
}

.cr-evf-body {
  width: 52px;
  height: 26px;
  background: linear-gradient(180deg, #3c404a 0%, #1c1e23 60%, #101114 100%);
  border-radius: 0 3px 3px 0;
  border: 1px solid #252830;
  border-left: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 3px 6px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.cr-evf-badge {
  font-size: 6.5px;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.8px;
  font-family: monospace;
}

/* On-Camera LED Video Light (Angled Facing RIGHT) */
.cr-camera-led {
  position: absolute;
  left: 205px;
  top: 8px;
  width: 104px;
  height: 72px;
  z-index: 16;
  transform-style: preserve-3d;
  pointer-events: auto;
}

.cr-led-bracket {
  position: absolute;
  left: 38px;
  bottom: 0px;
  width: 28px;
  height: 18px;
  background: linear-gradient(180deg, #3c4048 0%, #16171b 100%);
  border-radius: 2px;
  border: 1px solid #282a30;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.cr-led-bracket-screw {
  position: absolute;
  right: -5px;
  top: 4px;
  width: 6px;
  height: 10px;
  background: #4b4f59;
  border-radius: 2px;
}

.cr-led-housing {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 104px;
  height: 58px;
  background: linear-gradient(145deg, #2e3138 0%, #181a1e 60%, #0e0f12 100%);
  border-radius: 8px;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.28), 0 8px 18px rgba(0, 0, 0, 0.6);
  border: 2px solid #23252c;
  padding: 4px;
  transform-style: preserve-3d;
  transform: rotateY(28deg);
  transform-origin: left center;
}

.cr-led-housing-side-depth {
  position: absolute;
  left: -8px;
  top: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(90deg, #121316 0%, #252830 100%);
  border-radius: 6px 0 0 6px;
}

.cr-led-emitter-face {
  width: 100%;
  height: 100%;
  position: relative;
}

.cr-led-diodes-grid {
  width: 100%;
  height: 100%;
  background: #101215;
  border-radius: 4px;
  border: 1px solid #282a32;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2.5px;
  padding: 4px;
  position: relative;
}

.cr-led-diode {
  background: #fef08a;
  border-radius: 1px;
  box-shadow: 0 0 3px #fde047, 0 0 6px rgba(253, 224, 71, 0.85);
}

.cr-led-glow-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(253, 224, 71, 0.3) 0%, transparent 80%);
  pointer-events: none;
}

/* Shotgun Microphone (Extending RIGHT) */
.cr-camera-microphone {
  position: absolute;
  left: 236px;
  top: 58px;
  width: 196px;
  height: 38px;
  z-index: 15;
  display: flex;
  align-items: center;
  transform-style: preserve-3d;
  pointer-events: auto;
}

.cr-mic-cable-coil {
  position: absolute;
  left: -14px;
  top: 15px;
  width: 22px;
  height: 20px;
  border-bottom: 2.5px solid #101114;
  border-left: 2.5px solid #101114;
  border-radius: 0 0 0 14px;
}

.cr-mic-metal-tube {
  width: 34px;
  height: 15px;
  background: linear-gradient(180deg, #3d414a 0%, #1f2126 60%, #101114 100%);
  border-radius: 2px 0 0 2px;
  border: 0.5px solid #23252a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.cr-mic-shockmount {
  width: 24px;
  height: 25px;
  background: #191b20;
  border-radius: 3px;
  border: 1px solid #2a2c35;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-shrink: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
}

.cr-mic-o-ring {
  width: 4px;
  height: 19px;
  background: #dc2626;
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(220, 38, 38, 0.85);
}

.cr-mic-foam-windscreen {
  position: relative;
  width: 132px;
  height: 26px;
  background: linear-gradient(180deg, #32353d 0%, #1a1b1f 35%, #0e0f12 70%, #151619 100%);
  border-radius: 3px 13px 13px 3px;
  border: 1px solid #1c1d22;
  box-shadow: inset 0 2px 2px rgba(255, 255, 255, 0.16), 0 4px 10px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
}

.cr-mic-foam-pores {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(#050506 1px, transparent 1px),
    radial-gradient(#3a3d46 0.5px, transparent 0.5px);
  background-size: 3px 3px;
  opacity: 0.85;
}

.cr-mic-foam-dome-tip {
  position: absolute;
  right: 0;
  top: 0;
  width: 15px;
  height: 100%;
  border-radius: 0 13px 13px 0;
  background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
}

/* ==========================================================================
   6. OPTICAL ASSEMBLY & RIGHT-FACING 3D LENS HOOD
   ========================================================================== */
.cr-camera-lens-assembly {
  position: absolute;
  left: 285px;
  top: 96px;
  width: 235px;
  height: 168px;
  display: flex;
  align-items: center;
  z-index: 12;
  transform-style: preserve-3d;
}

/* PL Mount Bayonet Collar */
.cr-lens-pl-mount {
  width: 14px;
  height: 98px;
  background: linear-gradient(180deg, #505663 0%, #282a30 50%, #121315 100%);
  border-radius: 3px 0 0 3px;
  border: 1px solid #282a30;
  box-shadow: inset 1px 0 1px rgba(255, 255, 255, 0.3), 0 3px 6px rgba(0, 0, 0, 0.6);
  position: relative;
  flex-shrink: 0;
}

.cr-pl-chrome-ring {
  position: absolute;
  right: -2.5px;
  top: 4px;
  width: 4px;
  height: 90px;
  background: linear-gradient(180deg, #e2e8f0 0%, #94a3b8 40%, #334155 75%, #0f172a 100%);
  border-radius: 1px;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
}

.cr-pl-release-lever {
  position: absolute;
  left: 2px;
  top: 13px;
  width: 3.5px;
  height: 9px;
  background: #94a3b8;
  border-radius: 1px;
}

.cr-pl-lug {
  position: absolute;
  right: 0px;
  width: 5px;
  height: 7px;
  background: #64748b;
  border-radius: 1px;
}
.cr-pl-lug.lug-top { top: 20px; }
.cr-pl-lug.lug-bottom { bottom: 20px; }

/* Cylindrical Cinema Zoom Barrel */
.cr-lens-barrel {
  width: 70px;
  height: 104px;
  background: linear-gradient(180deg, #5c6270 0%, #343842 16%, #1e2026 48%, #0f1013 82%, #1a1c22 100%);
  border-radius: 3px;
  box-shadow: 
    inset 0 3px 3px rgba(255, 255, 255, 0.22), 
    inset 0 -3px 3px rgba(0, 0, 0, 0.85), 
    0 6px 14px rgba(0, 0, 0, 0.7);
  border: 1.5px solid #282a32;
  display: flex;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.cr-barrel-specular-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, transparent 100%);
  pointer-events: none;
  z-index: 2;
}

.cr-barrel-shadow-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 12px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
  pointer-events: none;
  z-index: 2;
}

/* Focus Ring */
.cr-lens-ring-focus {
  width: 42px;
  height: 100%;
  border-right: 1.5px solid #141518;
  background: repeating-linear-gradient(90deg, #121316 0px 2.5px, #3c404b 2.5px 4.5px);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.7);
  position: relative;
}

.cr-focus-scale-metric {
  position: absolute;
  left: 2px;
  top: 3px;
  font-size: 5px;
  font-family: monospace;
  font-weight: 700;
  color: #facc15;
  letter-spacing: 1.5px;
  text-shadow: 0 1px 1px #000;
}

.cr-focus-scale-feet {
  position: absolute;
  left: 2px;
  bottom: 3px;
  font-size: 4.5px;
  font-family: monospace;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 1.2px;
  text-shadow: 0 1px 1px #000;
}

.cr-focus-gear-teeth {
  position: absolute;
  left: 0;
  top: 14px;
  width: 100%;
  height: 70px;
  background: repeating-linear-gradient(90deg, #0e0f12 0px 2px, #4a4f5d 2px 3.5px);
}

/* Zoom Ring */
.cr-lens-ring-zoom {
  width: 28px;
  height: 100%;
  background: #191b20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 2px;
  position: relative;
}

.cr-zoom-focal-label {
  font-size: 5px;
  font-family: monospace;
  font-weight: 800;
  color: #e2e8f0;
  text-align: center;
  background: #0f1013;
  border-radius: 1px;
  padding: 1px 0;
}

.cr-zoom-grip-ribs {
  width: 100%;
  height: 80px;
  background: repeating-linear-gradient(90deg, #0a0b0d 0px 1.5px, #383c48 1.5px 3px);
  border-radius: 1px;
}

/* Red Cine Ring + Chrome Collar */
.cr-lens-cine-rings {
  width: 10px;
  height: 108px;
  display: flex;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
}

.cr-cine-red-band {
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, #ff4d4d 0%, #e50914 45%, #990000 100%);
  border-top: 1px solid #ff9999;
  border-bottom: 1px solid #660000;
  box-shadow: 0 0 6px rgba(229, 9, 20, 0.75), inset 0 1px 1px rgba(255, 255, 255, 0.6);
  position: relative;
}

.cr-red-band-sheen {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, transparent 100%);
}

.cr-cine-chrome-band {
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #f8fafc 0%, #cbd5e1 35%, #475569 70%, #0f172a 100%);
  border-top: 1px solid #ffffff;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
}

/* Transition Cone */
.cr-lens-cone-adapter {
  width: 14px;
  height: 120px;
  background: linear-gradient(90deg, #282a32 0%, #3e4350 40%, #1c1e24 100%);
  border-radius: 0 4px 4px 0;
  border-right: 1.5px solid #484d5c;
  box-shadow: inset 1px 0 2px rgba(255, 255, 255, 0.25), 0 4px 10px rgba(0, 0, 0, 0.6);
  flex-shrink: 0;
  position: relative;
}

.cr-cone-shoulder-sheen {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 14px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%);
}

.cr-cone-lock-screw {
  position: absolute;
  left: 3px;
  top: 24px;
  width: 6px;
  height: 8px;
  background: #64748b;
  border-radius: 1.5px;
  box-shadow: inset 0 0 1px #000;
}

/* ==========================================================================
   7. 3D RECTANGULAR MATTE BOX HOOD — POINTING TOWARD THE RIGHT
   Opening faces toward news content with visible cavity and optical glass
   ========================================================================== */
.cr-camera-lens-hood {
  position: relative;
  width: 136px;
  height: 164px;
  flex-shrink: 0;
  margin-left: -2px;
  transform-style: preserve-3d;
  transform: rotateY(32deg);
  transform-origin: left center;
}

/* Outer Left Wall Flank (Receding into 3/4 depth) */
.cr-hood-outer-flank {
  position: absolute;
  left: -12px;
  top: 6px;
  width: 26px;
  height: 152px;
  background: linear-gradient(90deg, #101115 0%, #2e323c 60%, #1e2027 100%);
  border-radius: 14px 0 0 14px;
  border-left: 2px solid #3c414e;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.cr-hood-flank-highlight {
  position: absolute;
  left: 2px;
  top: 4px;
  width: 3px;
  height: 144px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
  border-radius: 2px;
}

.cr-hood-flank-shadow {
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
}

.cr-hood-outer-top-bevel {
  position: absolute;
  left: 10px;
  top: 0px;
  width: 120px;
  height: 10px;
  background: linear-gradient(180deg, #444955 0%, #202228 100%);
  border-radius: 10px 10px 0 0;
  box-shadow: inset 0 1.5px 2px rgba(255, 255, 255, 0.4);
  z-index: 2;
}

/* 3D Angled Front Opening Rim facing RIGHT-FORWARD */
.cr-hood-angled-rim {
  position: absolute;
  left: 8px;
  top: 5px;
  width: 124px;
  height: 154px;
  background: linear-gradient(145deg, #2e323b 0%, #191b20 40%, #0d0e11 100%);
  border-radius: 15px;
  border: 4px solid #2d3039;
  box-shadow: 
    inset 0 2px 3px rgba(255, 255, 255, 0.35),
    inset -2px 0 3px rgba(255, 255, 255, 0.15),
    inset 0 -3px 5px rgba(0, 0, 0, 0.9),
    0 14px 28px rgba(0, 0, 0, 0.75);
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.cr-hood-metallic-lip {
  position: absolute;
  inset: 2px;
  border-radius: 11px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: none;
}

/* Deep 3D Hollow Interior Funnel Cavity */
.cr-hood-inner-cavity {
  position: relative;
  width: 100%;
  height: 100%;
  background: #090a0d;
  border-radius: 10px;
  box-shadow: inset 0 0 26px #000, inset 0 8px 18px rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cr-cavity-wall-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 22px;
  background: linear-gradient(180deg, #22252c 0%, transparent 100%);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);
}

.cr-cavity-wall-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 24px;
  background: linear-gradient(0deg, #050608 0%, transparent 100%);
}

.cr-cavity-wall-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 22px;
  height: 100%;
  background: linear-gradient(90deg, #18191f 0%, transparent 100%);
}

.cr-cavity-wall-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
  height: 100%;
  background: linear-gradient(270deg, #060709 0%, transparent 100%);
}

.cr-cavity-seam {
  position: absolute;
  width: 24px;
  height: 1px;
  background: rgba(255, 255, 255, 0.14);
}
.cr-cavity-seam.seam-tl { left: 8px; top: 4px; transform: rotate(45deg); }
.cr-cavity-seam.seam-tr { right: 8px; top: 4px; transform: rotate(-45deg); }
.cr-cavity-seam.seam-bl { left: 8px; bottom: 4px; transform: rotate(-45deg); }
.cr-cavity-seam.seam-br { right: 8px; bottom: 4px; transform: rotate(45deg); }

/* Circular Multi-Coated Lens Element */
.cr-lens-circular-element {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000;
  box-shadow: 
    0 0 16px rgba(0, 0, 0, 0.95),
    0 0 32px rgba(6, 182, 212, 0.25),
    0 0 32px rgba(168, 85, 247, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.cr-optic-baffle-1 {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, #323640 0%, #15161a 100%);
  border: 1.5px solid #414654;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.4), 0 2px 5px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr-optic-baffle-2 {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background: linear-gradient(180deg, #1b1d22 0%, #0d0e10 100%);
  border: 1px solid #2d303a;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr-optic-baffle-3 {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: #090a0d;
  border: 1px solid #3b3f4c;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Multi-Coated Optical Glass Base */
.cr-optic-glass-base {
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: radial-gradient(circle at 45% 45%, #0d1e3a 0%, #070d18 55%, #020306 100%);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.85);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Cyan / Sky-Blue Flare */
.cr-lens-flare-cyan {
  position: absolute;
  top: -8px;
  left: 2px;
  width: 64px;
  height: 44px;
  background: radial-gradient(ellipse at 50% 20%, rgba(56, 189, 248, 0.95) 0%, rgba(6, 182, 212, 0.75) 45%, transparent 75%);
  border-radius: 50%;
  filter: blur(2px);
  pointer-events: none;
}

.cr-lens-flare-cyan-core {
  position: absolute;
  top: 4px;
  left: 16px;
  width: 32px;
  height: 14px;
  background: radial-gradient(ellipse, #ffffff 0%, #7dd3fc 60%, transparent 100%);
  border-radius: 50%;
  filter: blur(1px);
  pointer-events: none;
}

/* Emerald-Green / Lime Flare */
.cr-lens-flare-green {
  position: absolute;
  top: 12px;
  right: -8px;
  width: 48px;
  height: 56px;
  background: radial-gradient(ellipse at 80% 50%, rgba(34, 197, 94, 0.9) 0%, rgba(16, 185, 129, 0.65) 50%, transparent 75%);
  border-radius: 50%;
  filter: blur(2.5px);
  pointer-events: none;
}

.cr-lens-flare-lime {
  position: absolute;
  bottom: 8px;
  right: 2px;
  width: 26px;
  height: 26px;
  background: radial-gradient(circle, #a3e635 0%, #84cc16 50%, transparent 80%);
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0.85;
  pointer-events: none;
}

/* Violet / Magenta Flare */
.cr-lens-flare-violet {
  position: absolute;
  bottom: -6px;
  left: 2px;
  width: 54px;
  height: 44px;
  background: radial-gradient(ellipse at 30% 80%, rgba(168, 85, 247, 0.95) 0%, rgba(147, 51, 234, 0.75) 45%, transparent 75%);
  border-radius: 50%;
  filter: blur(2px);
  pointer-events: none;
}

/* Concentric Rings */
.cr-glass-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.22);
  pointer-events: none;
}
.cr-glass-ring.ring-outer { width: 62px; height: 62px; border-color: rgba(56, 189, 248, 0.45); }
.cr-glass-ring.ring-mid { width: 48px; height: 48px; border-color: rgba(168, 85, 247, 0.4); }
.cr-glass-ring.ring-inner { width: 34px; height: 34px; border-color: rgba(34, 197, 94, 0.45); }

/* Specular Arc */
.cr-glass-specular-arc {
  position: absolute;
  top: 8px;
  left: 10px;
  width: 52px;
  height: 26px;
  border-top: 2px solid rgba(255, 255, 255, 0.88);
  border-radius: 50%;
  transform: rotate(-18deg);
  filter: drop-shadow(0 0 3px #ffffff);
  pointer-events: none;
}

/* Central Optical Aperture Iris */
.cr-lens-iris-core {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: radial-gradient(circle, #05080f 0%, #000 80%);
  border: 1px solid #1e293b;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.cr-lens-iris-pupil {
  width: 11px;
  height: 11px;
  background: #020305;
  border-radius: 50%;
  position: relative;
}

.cr-lens-catchlight {
  position: absolute;
  top: 2.5px;
  left: 2.5px;
  width: 2.5px;
  height: 2.5px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 3px #ffffff;
}

/* ==========================================================================
   8. UNIFIED TRIPOD SUPPORT SYSTEM
   Hierarchy: Mounting Plate -> Fluid Head -> Central Crown Hub -> 3 Connected Legs
   ALL 3 LEGS ATTACH DIRECTLY INTO THE CROWN HUB WITH ZERO GAP!
   ========================================================================== */
.cr-camera-support-system {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  pointer-events: none;
}

/* Mounting Baseplate (Centered under camera chassis at X = 230px) */
.cr-camera-mount {
  position: absolute;
  left: 135px;
  top: 242px;
  width: 175px;
  height: 20px;
  z-index: 9;
  transform-style: preserve-3d;
  pointer-events: auto;
}

.cr-mount-dovetail {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 13px;
  background: linear-gradient(180deg, #3c4048 0%, #1e2025 50%, #121316 100%);
  border-radius: 3px;
  border: 1px solid #282a30;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.28), 0 3px 6px rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.cr-mount-pin {
  width: 6px;
  height: 6px;
  background: #ff2222;
  border-radius: 50%;
  box-shadow: 0 0 4px #ff3333;
}

.cr-mount-channel {
  flex: 1;
  height: 4px;
  margin: 0 8px;
  background: #0d0e11;
  border-radius: 1px;
  border: 0.5px solid #22242a;
}

.cr-mount-15mm-rails {
  position: absolute;
  left: 12px;
  bottom: 0px;
  width: 145px;
  height: 6px;
  background: repeating-linear-gradient(90deg, #18191d 0px 4px, #424652 4px 8px);
  border-radius: 3px;
  border: 0.5px solid #0f1013;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

/* Professional Pan & Tilt Fluid Head */
.cr-camera-fluid-head {
  position: absolute;
  left: 170px;
  top: 256px;
  width: 120px;
  height: 72px;
  z-index: 8;
  transform-style: preserve-3d;
  pointer-events: auto;
}

.cr-fluid-bowl {
  position: absolute;
  left: 20px;
  top: 48px;
  width: 80px;
  height: 26px;
  background: radial-gradient(ellipse at 50% 0%, #3e424d 0%, #1c1e23 60%, #101114 100%);
  border-radius: 0 0 40px 40px;
  border: 1.5px solid #2a2c34;
  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.8), 0 5px 10px rgba(0, 0, 0, 0.65);
}

.cr-bowl-lock-handle {
  position: absolute;
  left: 32px;
  bottom: -6px;
  width: 16px;
  height: 8px;
  background: #141518;
  border-radius: 3px;
  border: 1px solid #333640;
}

.cr-fluid-body {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 120px;
  height: 52px;
  background: linear-gradient(155deg, #3c4049 0%, #202228 40%, #121316 100%);
  border-radius: 6px;
  border: 1.5px solid #282a32;
  box-shadow: 
    inset 0 1.5px 2px rgba(255, 255, 255, 0.28),
    inset 0 -2px 4px rgba(0, 0, 0, 0.8),
    0 8px 18px rgba(0, 0, 0, 0.65);
  position: relative;
}

.cr-fluid-bevel-highlight {
  position: absolute;
  right: 0;
  top: 0;
  width: 12px;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.5) 100%);
  border-radius: 0 5px 5px 0;
}

.cr-spirit-level {
  position: absolute;
  right: 14px;
  top: 9px;
  width: 13px;
  height: 13px;
  background: radial-gradient(circle at 45% 45%, #a3e635 0%, #65a30d 65%, #3f6212 100%);
  border-radius: 50%;
  border: 1px solid #14532d;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 5px rgba(132, 204, 22, 0.6);
}
.cr-spirit-level::after {
  content: '';
  position: absolute;
  left: 4.5px;
  top: 4.5px;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.88);
  border-radius: 50%;
}

.cr-fluid-tilt-knob {
  position: absolute;
  right: -5px;
  top: 28px;
  width: 7px;
  height: 14px;
  background: #1e2026;
  border-radius: 2px;
  border: 1px solid #3b3f4c;
}

.cr-fluid-pan-knob {
  position: absolute;
  left: -5px;
  top: 28px;
  width: 7px;
  height: 14px;
  background: #1e2026;
  border-radius: 2px;
  border: 1px solid #3b3f4c;
}

/* Signature Red Fluid Drag Dial */
.cr-fluid-red-dial {
  position: absolute;
  left: 18px;
  top: 8px;
  width: 36px;
  height: 36px;
  background: radial-gradient(circle, #ff2222 0%, #dc2626 50%, #990000 100%);
  border-radius: 50%;
  border: 2px solid #141518;
  box-shadow: 
    0 0 10px rgba(220, 38, 38, 0.7),
    inset 0 1.5px 2px rgba(255, 255, 255, 0.6),
    0 4px 8px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr-fluid-dial-disc {
  width: 22px;
  height: 22px;
  background: repeating-conic-gradient(#1f2127 0deg 15deg, #323640 15deg 30deg);
  border-radius: 50%;
  border: 1px solid #101114;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr-fluid-dial-core {
  width: 6px;
  height: 6px;
  background: #ff3333;
  border-radius: 50%;
  box-shadow: 0 0 3px #ff3333;
}

/* Pan Bar Handle (Extending Leftward) */
.cr-camera-pan-handle {
  position: absolute;
  left: -75px;
  top: 6px;
  width: 110px;
  height: 140px;
  z-index: 10;
  transform-style: preserve-3d;
  pointer-events: none;
}

.cr-pan-rosette {
  position: absolute;
  right: 6px;
  top: 6px;
  width: 19px;
  height: 19px;
  background: radial-gradient(circle, #454954 0%, #16171a 80%);
  border-radius: 50%;
  border: 1.5px solid #272a31;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: auto;
}

.cr-pan-rosette-ring {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1.5px solid #ff2222;
  box-shadow: 0 0 5px rgba(229, 9, 9, 0.7);
}

.cr-pan-stem-svg {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 110px;
  height: 140px;
  filter: drop-shadow(2px 5px 7px rgba(0, 0, 0, 0.7));
}

.cr-pan-rubber-grip {
  position: absolute;
  left: 6px;
  top: 84px;
  width: 24px;
  height: 60px;
  background: #101114;
  border-radius: 7px;
  transform: rotate(26deg);
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.75), inset 0 1px 1px rgba(255, 255, 255, 0.25);
  border: 1.5px solid #0e0f11;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 3px 2px;
  z-index: 2;
  pointer-events: auto;
}

.cr-grip-rib {
  width: 100%;
  height: 2px;
  background: #24262c;
  border-radius: 1px;
}

/* ==========================================================================
   9. EXTENDED BROADCAST TRIPOD LEGS & SINGLE CENTRAL HUB
   Matches media_1793702846934_59599fec.jpg:
   - All 3 legs originate directly from ONE common crown hub below fluid head
   - Zero gaps, 100% physically connected!
   ========================================================================== */
.cr-camera-tripod {
  position: absolute;
  left: 70px;
  top: 320px;
  width: 320px;
  height: 165px;
  z-index: 5;
  transform-style: preserve-3d;
  pointer-events: auto;
}

/* Central Tripod Crown Spider Hub (Directly under fluid head bowl) */
.cr-tripod-crown-hub {
  position: absolute;
  left: 100px;
  top: 0px;
  width: 120px;
  height: 28px;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr-crown-platform-top {
  position: absolute;
  left: 12px;
  top: 0px;
  width: 96px;
  height: 10px;
  background: linear-gradient(180deg, #444955 0%, #202228 100%);
  border-radius: 4px;
  border: 1px solid #2d303a;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 3px 6px rgba(0, 0, 0, 0.6);
}

/* Clevis Hinge Joints for each leg */
.cr-crown-clevis {
  position: absolute;
  top: 6px;
  width: 30px;
  height: 20px;
  background: linear-gradient(180deg, #383c46 0%, #1b1d22 65%, #0f1013 100%);
  border-radius: 4px;
  border: 1px solid #262932;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 2px 5px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.cr-crown-clevis.clevis-l {
  left: 10px;
  transform: rotate(14deg);
}

.cr-crown-clevis.clevis-c {
  left: 45px;
}

.cr-crown-clevis.clevis-r {
  right: 10px;
  transform: rotate(-14deg);
}

.cr-crown-bolt {
  width: 7px;
  height: 7px;
  background: radial-gradient(circle, #64748b 0%, #1e293b 80%);
  border-radius: 50%;
  border: 0.5px solid #0f172a;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.7);
}

/* 1. Central Leg (Directly below fluid head & locked inside center clevis) */
.cr-tripod-leg.cr-leg-center {
  position: absolute;
  left: 144px;
  top: 16px;
  width: 32px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 6;
}

/* 2. Left Leg (Locked inside left clevis, angles down-left ~20deg) */
.cr-tripod-leg.cr-leg-left {
  position: absolute;
  left: 110px;
  top: 16px;
  width: 32px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(20deg);
  transform-origin: top center;
  z-index: 5;
}

/* 3. Right Leg (Locked inside right clevis, angles down-right ~20deg) */
.cr-tripod-leg.cr-leg-right {
  position: absolute;
  left: 178px;
  top: 16px;
  width: 32px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(-20deg);
  transform-origin: top center;
  z-index: 5;
}

/* Twin Carbon-Fiber Round Cylindrical Tubes */
.cr-leg-twin-tubes-upper {
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  padding: 0 2px;
}

.cr-carbon-tube {
  width: 12px;
  height: 100%;
  background: linear-gradient(90deg, #14161a 0%, #3e4450 25%, #6b7586 48%, #2e333d 72%, #101114 100%);
  border-radius: 4px;
  border: 0.5px solid #0d0e11;
  box-shadow: inset 1px 0 1.5px rgba(255, 255, 255, 0.4), 1px 3px 6px rgba(0, 0, 0, 0.7);
}

/* Heavy Broadcast Stage Clamp */
.cr-leg-stage-clamp {
  width: 34px;
  height: 14px;
  margin-left: -1px;
  background: linear-gradient(180deg, #3d434f 0%, #1e2026 50%, #121317 100%);
  border-radius: 3px;
  border: 1px solid #141518;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.7);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3px;
  z-index: 7;
}

.cr-clamp-lever {
  width: 6px;
  height: 8px;
  background: #dc2626;
  border-radius: 1px;
  box-shadow: 0 0 4px #dc2626;
}

/* Lower Twin Telescopic Tubes */
.cr-leg-twin-tubes-lower {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
}

.cr-carbon-lower {
  width: 10px;
  height: 100%;
  background: linear-gradient(90deg, #121316 0%, #383e4a 25%, #5d6778 48%, #272a32 72%, #0e0f11 100%);
  border-radius: 3px;
  border: 0.5px solid #0a0b0d;
  box-shadow: inset 1px 0 1px rgba(255, 255, 255, 0.3), 1px 2px 4px rgba(0, 0, 0, 0.6);
}

/* Heavy Rubber Spiked Foot */
.cr-tripod-foot {
  width: 24px;
  height: 11px;
  background: #0c0d10;
  border-radius: 2px 2px 5px 5px;
  border: 1px solid #000;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.9);
}

/* Mid-Level Spreader Spider (Physically Connecting All 3 Clamps) */
.cr-mid-level-spreader {
  position: absolute;
  left: 0px;
  top: 76px;
  width: 320px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 6;
}

.cr-spreader-svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7));
}

.cr-spreader-center-dial {
  position: absolute;
  left: 153px;
  top: 5px;
  width: 14px;
  height: 14px;
  background: #252830;
  border-radius: 50%;
  border: 1px solid #141518;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 8;
}

.cr-spreader-dial-core {
  width: 6px;
  height: 6px;
  background: #ff2222;
  border-radius: 50%;
  box-shadow: 0 0 3px #ff2222;
}

/* ==========================================================================
   10. RESPONSIVE BREAKPOINTS
   ========================================================================== */
@media (max-width: 1280px) {
  .cr-camera-scene {
    max-width: 500px;
    height: 440px;
  }
  .cr-camera-scaler {
    transform: scale(0.90);
  }
}

@media (max-width: 1024px) {
  .cr-camera-scene {
    max-width: 460px;
    height: 400px;
  }
  .cr-camera-scaler {
    transform: scale(0.82);
  }
}

@media (max-width: 768px) {
  .cr-camera-scene {
    width: 100%;
    max-width: 100%;
    height: 330px;
    margin: 0 auto;
    overflow: visible;
  }
  .cr-camera-scaler {
    transform: scale(0.68) translateX(-10px);
  }
}

@media (max-width: 520px) {
  .cr-camera-scene {
    width: 100%;
    max-width: 100%;
    height: 260px;
    margin: 0 auto;
    overflow: visible;
  }
  .cr-camera-scaler {
    transform: scale(0.52) translateX(-12px);
  }
}

@media (max-width: 380px) {
  .cr-camera-scene {
    width: 100%;
    max-width: 100%;
    height: 220px;
    margin: 0 auto;
    overflow: visible;
  }
  .cr-camera-scaler {
    transform: scale(0.44) translateX(-12px);
  }
}

@media (max-width: 320px) {
  .cr-camera-scene {
    width: 100%;
    max-width: 100%;
    height: 195px;
    margin: 0 auto;
    overflow: visible;
  }
  .cr-camera-scaler {
    transform: scale(0.39) translateX(-14px);
  }
}
`;


/* ==========================================================================
   1. FEATURE CARD VECTOR SVG ICONS
   ========================================================================== */
function CardIcon({ type, color = "#E50909" }) {
  const common = "w-6 h-6 sm:w-8 sm:h-8";

  switch (type) {
    case 'video':
      return (
        <svg className={common} viewBox="0 0 24 24" fill={color}>
          <path d="M4 6a3 3 0 00-3 3v6a3 3 0 003 3h9a3 3 0 003-3V9a3 3 0 00-3-3H4zm13.5 3.34l4.13-2.75A1 1 0 0123 7.42v9.16a1 1 0 01-1.37.93l-4.13-2.75V9.34z" />
        </svg>
      );
    case 'zap':
      return (
        <svg className={common} viewBox="0 0 24 24" fill={color}>
          <path d="M13 2.5L4 13.5h6.5v8l9-11h-6.5l3-8z" />
        </svg>
      );
    case 'shield-check':
      return (
        <svg className={common} viewBox="0 0 24 24" fill={color}>
          <path fillRule="evenodd" d="M12 2.25c-3.28 0-6.19 1.4-8.25 3.65A1 1 0 003.5 7.2v6.6c0 5.4 3.73 9.77 8.5 11.2 4.77-1.43 8.5-5.8 8.5-11.2V7.2a1 1 0 00-.25-1.3A12.05 12.05 0 0012 2.25zm4.7 7.7a1 1 0 00-1.4-1.42L11 12.83l-1.8-1.8a1 1 0 00-1.4 1.42l2.5 2.5a1 1 0 001.4 0l5-5.25z" clipRule="evenodd" />
        </svg>
      );
    case 'radio':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
          <path d="M7.76 16.24a6 6 0 0 1 0-8.48" />
          <circle cx="12" cy="12" r="2.5" fill={color} />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.48" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      );
    case 'shield-alert':
      return (
        <svg className={common} viewBox="0 0 24 24" fill={color}>
          <path fillRule="evenodd" d="M12 2.25c-3.28 0-6.19 1.4-8.25 3.65A1 1 0 003.5 7.2v6.6c0 5.4 3.73 9.77 8.5 11.2 4.77-1.43 8.5-5.8 8.5-11.2V7.2a1 1 0 00-.25-1.3A12.05 12.05 0 0012 2.25zm0 5.75a1 1 0 011 1v4.5a1 1 0 11-2 0V9a1 1 0 011-1zm0 8.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
        </svg>
      );
    case 'lock':
      return (
        <svg className={common} viewBox="0 0 24 24" fill={color}>
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3H6a3 3 0 00-3 3v6.75a3 3 0 003 3h12a3 3 0 003-3V12.75a3 3 0 00-3-3h-.75v-3A5.25 5.25 0 0012 1.5zm-3.25 5.25a3.25 3.25 0 016.5 0v3h-6.5v-3z" clipRule="evenodd" />
        </svg>
      );
    case 'fingerprint':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
          <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
          <path d="M17.29 21.02c.12-.6.43-2.3.43-3.02 0-3.32-2.69-6-6-6s-6 2.68-6 6c0 .85.25 2.15.42 2.75" />
          <path d="M8 8a4 4 0 0 1 8 0c0 2.5-.5 5.5-1.5 8" />
          <path d="M2 12a10 10 0 0 1 18-6" />
          <path d="M22 12a10 10 0 0 1-2.5 6.5" />
        </svg>
      );
    case 'cpu':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" />
          <rect x="9" y="9" width="6" height="6" fill={color} />
          <path d="M15 2v2M9 2v2M15 20v2M9 20v2M20 15h2M20 9h2M2 15h2M2 9h2" />
        </svg>
      );
    case 'globe':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg className={common} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4L12 2z" />
        </svg>
      );
    case 'scale':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
      );
    case 'users':
      return (
        <svg className={common} viewBox="0 0 24 24" fill={color}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

/* ==========================================================================
   2. CTA ACTION BUTTON ICONS
   ========================================================================== */
function CTAIcon({ type }) {
  if (type === 'play') {
    return (
      <span className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white inline-block ml-0.5 group-hover:scale-110 transition-transform" />
    );
  }
  if (type === 'newspaper') {
    return (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0739B5] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    );
  }
  if (type === 'radar') {
    return (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="white" />
        <line x1="12" y1="12" x2="19" y2="7" />
      </svg>
    );
  }
  if (type === 'book') {
    return (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0739B5] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    );
  }
  if (type === 'compass') {
    return (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0739B5] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

/* ==========================================================================
   3. SLIDE CONTENT PRESENTATION (Responsive Mobile-First)
   ========================================================================== */
function SlideContent({ slide }) {
  if (!slide) return null;

  return (
    <div className="flex flex-col justify-center items-start space-y-2.5 sm:space-y-4 w-full select-none">
      {/* 1. Top Branding Banner */}
      <div className="flex items-center w-full max-w-[640px] select-none">
        <div className="flex items-center flex-1 min-w-0">
          {/* Left Red Badge: CR */}
          <div className="relative z-10 flex items-center justify-center bg-[#E50909] text-white px-3 sm:px-7 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl rounded-tr-lg shadow-sm -mr-2 sm:-mr-3 -skew-x-[12deg] shrink-0">
            <span className="skew-x-[12deg] font-black italic text-xl sm:text-[34px] tracking-tight leading-none">
              {slide.badge}
            </span>
          </div>

          {/* Middle/Right Blue Bar: Channel Title */}
          <div className="flex-1 min-w-0 flex items-center bg-[#0739B5] text-white pl-4 sm:pl-9 pr-2.5 sm:pr-6 py-1.5 sm:py-3 rounded-r-xl shadow-sm overflow-hidden">
            <span className="font-bold italic text-sm sm:text-lg md:text-2xl tracking-tight text-white whitespace-nowrap truncate">
              {slide.title}
            </span>
          </div>
        </div>

        {/* Dual Angled Parallel Stripes */}
        <div className="flex items-center gap-1 sm:gap-1.5 ml-1.5 sm:ml-3 shrink-0">
          <div className="w-1.5 sm:w-2.5 h-5 sm:h-9 bg-[#0739B5] -skew-x-[22deg] rounded-[1px]" />
          <div className="w-1.5 sm:w-2.5 h-5 sm:h-9 bg-[#E50909] -skew-x-[22deg] rounded-[1px]" />
        </div>
      </div>

      {/* 2. News Categories - Grouped so pipe never wraps alone */}
      <div className="flex items-center flex-wrap gap-y-1 gap-x-1 sm:gap-x-2 text-[#092A70] font-extrabold text-xs sm:text-sm md:text-base tracking-tight select-none pt-0.5">
        {slide.categories.map((cat, index) => (
          <div key={cat.id || cat.name} className="inline-flex items-center">
            <span className="hover:text-[#E50909] transition-colors cursor-pointer whitespace-nowrap">
              {cat.name}
            </span>
            {index < slide.categories.length - 1 && (
              <span className="text-[#E50909] font-bold mx-1.5 sm:mx-2.5 select-none text-xs sm:text-sm">
                |
              </span>
            )}
          </div>
        ))}
      </div>

      {/* 3. Channel Description with Red Bar */}
      <div className="flex items-stretch gap-2 sm:gap-3.5 max-w-[620px] pt-0.5">
        <div className="w-[3px] bg-[#E50909] rounded-full shrink-0" />
        <p className="text-[#092A70] text-xs sm:text-sm md:text-[15px] leading-relaxed sm:leading-[1.4] font-semibold tracking-tight">
          {slide.description}
        </p>
      </div>

      {/* 4. Four Feature Cards (2x2 on mobile, 4 in row on tablet/desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 w-full max-w-[620px] pt-0.5 sm:pt-1">
        {slide.cards.map((card) => (
          <div
            key={card.id}
            className={`group flex flex-col items-center justify-center p-2 sm:p-3.5 bg-white rounded-xl sm:rounded-2xl border border-[#E8EAF0] shadow-[0_4px_16px_-4px_rgba(9,42,112,0.08)] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-[1.02] ${card.hoverBorder} ${card.accentBg}`}
          >
            <div className="mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110">
              <CardIcon type={card.iconType} color={card.iconColor} />
            </div>
            <div className="text-center font-bold text-[#092A70] text-[11px] sm:text-xs md:text-[13px] leading-tight">
              <div>{card.titleLine1}</div>
              <div>{card.titleLine2}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. CTA Action Buttons (Side-by-side on all screens for clean layout) */}
      <div className="flex flex-row items-center gap-2 sm:gap-4 w-full max-w-[620px] pt-0.5 sm:pt-1">
        <button
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-3 bg-[#E50909] hover:bg-[#D90000] text-white font-bold text-xs sm:text-base py-2.5 sm:py-3.5 px-3 sm:px-5 rounded-full shadow-[0_6px_20px_-3px_rgba(229,9,9,0.38)] transition-all duration-200 select-none group cursor-pointer hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <CTAIcon type={slide.primaryCTA.icon} />
          <span className="tracking-tight">{slide.primaryCTA.text}</span>
        </button>

        <button
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-3 bg-white hover:bg-blue-50/50 text-[#0739B5] font-bold text-xs sm:text-base py-2 sm:py-3 px-3 sm:px-5 rounded-full border-2 border-[#0739B5] shadow-[0_4px_16px_-4px_rgba(7,57,181,0.12)] transition-all duration-200 select-none group cursor-pointer hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <CTAIcon type={slide.secondaryCTA.icon} />
          <span className="tracking-tight">{slide.secondaryCTA.text}</span>
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. OPTICAL LENS SHUTTER FLASH & IRIS BLINK
   ========================================================================== */
function CameraLensShutter({ isShutterActive }) {
  return (
    <div className="absolute pointer-events-none z-30 left-[450px] top-[178px] -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px]">
      <AnimatePresence>
        {isShutterActive && (
          <motion.div
            key="lens-burst"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.2, opacity: 0.95 }}
              animate={{ scale: [0.2, 1.8, 2.2], opacity: [1, 0.9, 0] }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="absolute w-20 h-20 rounded-full bg-radial from-white via-cyan-300 to-transparent blur-xs"
            />
            <motion.div
              initial={{ scale: 0.4, opacity: 1 }}
              animate={{ scale: [0.4, 2.0], opacity: [0.9, 0] }}
              transition={{ duration: 0.36, ease: "easeOut" }}
              className="absolute w-24 h-24 rounded-full border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(56,189,248,0.8)]"
            />
            <motion.div
              initial={{ scaleX: 0.1, opacity: 0.9 }}
              animate={{ scaleX: [0.2, 3.2, 0.8], opacity: [1, 0.85, 0] }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="absolute h-1.5 w-44 origin-left -left-6 bg-gradient-to-r from-transparent via-cyan-300 via-white to-transparent blur-[1px] shadow-[0_0_16px_rgba(56,189,248,0.9)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ==========================================================================
   5. 3D BROADCAST CAMERA SUBCOMPONENTS (100% Internal to this file)
   ========================================================================== */

function CameraBody() {
  return (
    <div className="cr-camera-body" data-component="camera-body">
      <div className="cr-body-top-bevel" />
      <div className="cr-body-bottom-bevel" />
      <div className="cr-body-front-depth-face" />

      {/* Rear V-Mount Battery */}
      <div className="cr-body-battery" title="V-Mount Broadcast Battery Pack">
        <div className="cr-battery-led-gauge">
          <span className="cr-battery-led on" />
          <span className="cr-battery-led on" />
          <span className="cr-battery-led on" />
          <span className="cr-battery-led on" />
        </div>
        <div className="cr-battery-release-latch" />
      </div>

      {/* Recessed Control Panel */}
      <div className="cr-body-operator-panel">
        <div className="cr-panel-row-top">
          <div className="cr-panel-keys">
            <div className="cr-btn-pill" title="Menu">MENU</div>
            <div className="cr-btn-pill" title="OK">OK</div>
            <div className="cr-btn-pill cr-btn-rec-pill" title="Tally">REC</div>
          </div>
          <div className="cr-panel-leds">
            <div className="cr-led-status-green" title="Power OK" />
            <div className="cr-led-status-amber" title="Media Active" />
          </div>
        </div>

        <div className="cr-panel-row-middle">
          <div className="cr-playback-cluster">
            <div className="cr-btn-mini" title="Rewind">◀</div>
            <div className="cr-btn-mini" title="Play">▶</div>
            <div className="cr-btn-mini" title="Pause">❚❚</div>
          </div>
          <div className="cr-btn-rec-large" title="Record Tally">
            <div className="cr-rec-glow-core" />
          </div>
        </div>

        <div className="cr-panel-row-bottom">
          <div className="cr-nav-cluster">
            <div className="cr-nav-dot cr-nav-up" />
            <div className="cr-nav-dot cr-nav-left" />
            <div className="cr-nav-dot cr-nav-center" />
            <div className="cr-nav-dot cr-nav-right" />
            <div className="cr-nav-dot cr-nav-down" />
          </div>
          <div className="cr-preset-keys">
            <div className="cr-btn-num">1</div>
            <div className="cr-btn-num">2</div>
            <div className="cr-btn-num">3</div>
            <div className="cr-btn-num">4</div>
          </div>
        </div>
      </div>

      {/* Side Ventilation Intake */}
      <div className="cr-body-vent-grill">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="cr-vent-slot" />
        ))}
      </div>

      <div className="cr-corner-bolt bolt-tl" />
      <div className="cr-corner-bolt bolt-bl" />
      <div className="cr-corner-bolt bolt-tr" />
      <div className="cr-corner-bolt bolt-br" />
    </div>
  );
}

function CameraDisplay() {
  return (
    <div className="cr-camera-display" data-component="camera-display">
      <div className="cr-display-rear-casing" />
      <div className="cr-display-hinge-bracket" title="Articulated Friction Hinge">
        <div className="cr-display-hinge-pin" />
        <div className="cr-display-arm-joint" />
      </div>

      <div className="cr-display-frame">
        <div className="cr-display-screen">
          <div className="cr-display-grid" />
          <div className="cr-display-globe" />
          <div className="cr-display-globe-ring" />

          <div className="cr-display-brand">
            <div className="cr-display-title">CR NEWS</div>
            <div className="cr-display-live-tag">
              <span className="cr-display-play-icon" />
              <span>LIVE</span>
            </div>
          </div>

          <div className="cr-display-glass-sheen" />
        </div>

        <div className="cr-display-bottom-bezel">
          <span className="cr-display-4k-badge">4K</span>
        </div>
      </div>
    </div>
  );
}

function CameraLighting() {
  return (
    <div className="cr-camera-lighting-group" data-component="camera-lighting">
      {/* 1. Top Carry Handle & EVF */}
      <div className="cr-camera-top-handle" title="Magnesium Top Carry Handle">
        <div className="cr-handle-riser-rear" />
        <div className="cr-handle-bridge-bar">
          <div className="cr-handle-cutout" />
          <div className="cr-handle-cutout" />
          <div className="cr-handle-cutout" />
        </div>
        <div className="cr-handle-riser-front" />

        <div className="cr-camera-evf" title="Electronic Viewfinder (4K HDR)">
          <div className="cr-evf-eyecup" />
          <div className="cr-evf-body">
            <span className="cr-evf-badge">4K HDR</span>
          </div>
        </div>
      </div>

      {/* 2. On-Camera LED Video Light */}
      <div className="cr-camera-led" title="On-Camera LED Video Light (Angled Right)">
        <div className="cr-led-bracket">
          <div className="cr-led-bracket-screw" />
        </div>

        <div className="cr-led-housing">
          <div className="cr-led-housing-side-depth" />
          <div className="cr-led-emitter-face">
            <div className="cr-led-diodes-grid">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="cr-led-diode" />
              ))}
              <div className="cr-led-glow-overlay" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Shotgun Microphone */}
      <div className="cr-camera-microphone" title="Broadcast Shotgun Microphone">
        <div className="cr-mic-cable-coil" />
        <div className="cr-mic-metal-tube" />
        <div className="cr-mic-shockmount">
          <div className="cr-mic-o-ring" />
          <div className="cr-mic-o-ring" />
        </div>
        <div className="cr-mic-foam-windscreen">
          <div className="cr-mic-foam-pores" />
          <div className="cr-mic-foam-dome-tip" />
        </div>
      </div>
    </div>
  );
}

function CameraLens({ lensRef }) {
  return (
    <div className="cr-camera-lens-assembly" data-component="camera-lens">
      {/* PL Mount Bayonet Collar */}
      <div className="cr-lens-pl-mount" title="PL Cinema Mount Bayonet Collar">
        <div className="cr-pl-chrome-ring" />
        <div className="cr-pl-release-lever" />
        <div className="cr-pl-lug lug-top" />
        <div className="cr-pl-lug lug-bottom" />
      </div>

      {/* Cylindrical Cinema Zoom Barrel */}
      <div className="cr-lens-barrel" title="Cylindrical Cinema Zoom Barrel">
        <div className="cr-barrel-specular-top" />
        <div className="cr-barrel-shadow-bottom" />

        <div className="cr-lens-ring-focus" title="Focus Ring">
          <div className="cr-focus-scale-metric">1.5 2 3 5 ∞</div>
          <div className="cr-focus-scale-feet">5' 7' 10' 15'</div>
          <div className="cr-focus-gear-teeth" />
        </div>

        <div className="cr-lens-ring-zoom" title="Zoom Ring (35-70mm)">
          <span className="cr-zoom-focal-label">35-70</span>
          <div className="cr-zoom-grip-ribs" />
        </div>
      </div>

      {/* Red Cine Ring & Chrome Collar */}
      <div className="cr-lens-cine-rings" title="Signature Red Cine Ring & Chrome Collar">
        <div className="cr-cine-red-band">
          <div className="cr-red-band-sheen" />
        </div>
        <div className="cr-cine-chrome-band" />
      </div>

      {/* Transition Cone Adapter */}
      <div className="cr-lens-cone-adapter" title="Matte Box Flange Adapter">
        <div className="cr-cone-shoulder-sheen" />
        <div className="cr-cone-lock-screw" />
      </div>

      {/* 3D Rectangular Matte Box Hood Pointing Right */}
      <div className="cr-camera-lens-hood" title="Cinema Matte Box (Pointing Right)">
        <div className="cr-hood-outer-flank">
          <div className="cr-hood-flank-highlight" />
          <div className="cr-hood-flank-shadow" />
        </div>
        <div className="cr-hood-outer-top-bevel" />

        <div className="cr-hood-angled-rim">
          <div className="cr-hood-metallic-lip" />

          <div className="cr-hood-inner-cavity">
            <div className="cr-cavity-wall-top" />
            <div className="cr-cavity-wall-bottom" />
            <div className="cr-cavity-wall-left" />
            <div className="cr-cavity-wall-right" />
            <div className="cr-cavity-seam seam-tl" />
            <div className="cr-cavity-seam seam-tr" />
            <div className="cr-cavity-seam seam-bl" />
            <div className="cr-cavity-seam seam-br" />

            {/* Circular Optical Glass Element with lensRef attached */}
            <div ref={lensRef} className="cr-lens-circular-element" title="Circular Cinema Optic (Right-Facing)">
              <div className="cr-optic-baffle-1">
                <div className="cr-optic-baffle-2">
                  <div className="cr-optic-baffle-3">
                    <div className="cr-optic-glass-base">
                      <div className="cr-lens-flare-cyan" />
                      <div className="cr-lens-flare-cyan-core" />
                      <div className="cr-lens-flare-green" />
                      <div className="cr-lens-flare-lime" />
                      <div className="cr-lens-flare-violet" />
                      <div className="cr-glass-ring ring-outer" />
                      <div className="cr-glass-ring ring-mid" />
                      <div className="cr-glass-ring ring-inner" />
                      <div className="cr-glass-specular-arc" />
                      <div className="cr-lens-iris-core">
                        <div className="cr-lens-iris-pupil">
                          <div className="cr-lens-catchlight" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function CameraTripod() {
  return (
    <div className="cr-camera-support-system" data-component="camera-support-system">
      {/* Baseplate Mount */}
      <div className="cr-camera-mount" title="15mm Studio Rods & Dovetail Quick Plate">
        <div className="cr-mount-dovetail">
          <div className="cr-mount-pin pin-left" />
          <div className="cr-mount-channel" />
          <div className="cr-mount-pin pin-right" />
        </div>
        <div className="cr-mount-15mm-rails" />
      </div>

      {/* Fluid Head & Pan Handle */}
      <div className="cr-camera-fluid-head" title="Broadcast Pan & Tilt Fluid Head">
        <div className="cr-fluid-bowl">
          <div className="cr-bowl-lock-handle" />
        </div>
        <div className="cr-fluid-body">
          <div className="cr-spirit-level" />
          <div className="cr-fluid-tilt-knob" />
          <div className="cr-fluid-pan-knob" />
          <div className="cr-fluid-bevel-highlight" />
        </div>
        <div className="cr-fluid-red-dial">
          <div className="cr-fluid-dial-disc">
            <div className="cr-fluid-dial-core" />
          </div>
        </div>

        <div className="cr-camera-pan-handle">
          <div className="cr-pan-rosette">
            <div className="cr-pan-rosette-ring" />
          </div>
          <svg className="cr-pan-stem-svg" viewBox="0 0 110 140" preserveAspectRatio="none">
            <defs>
              <linearGradient id="crPanArmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#555a66" />
                <stop offset="40%" stopColor="#2c2f37" />
                <stop offset="100%" stopColor="#121316" />
              </linearGradient>
            </defs>
            <path d="M 98 12 C 68 18, 50 45, 42 85 L 24 125" fill="none" stroke="url(#crPanArmGrad)" strokeWidth="10" strokeLinecap="round" />
            <path d="M 98 12 C 68 18, 50 45, 42 85 L 24 125" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="cr-pan-rubber-grip">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="cr-grip-rib" />
            ))}
          </div>
        </div>
      </div>

      {/* Tripod Crown Hub & 3 Spread Legs */}
      <div className="cr-camera-tripod" title="Heavy-Duty Broadcast Tripod">
        <div className="cr-tripod-crown-hub">
          <div className="cr-crown-platform-top" />
          <div className="cr-crown-clevis clevis-l"><div className="cr-crown-bolt" /></div>
          <div className="cr-crown-clevis clevis-c"><div className="cr-crown-bolt" /></div>
          <div className="cr-crown-clevis clevis-r"><div className="cr-crown-bolt" /></div>
        </div>

        {/* Center Leg */}
        <div className="cr-tripod-leg cr-leg-center">
          <div className="cr-leg-twin-tubes-upper">
            <div className="cr-carbon-tube tube-l" />
            <div className="cr-carbon-tube tube-r" />
          </div>
          <div className="cr-leg-stage-clamp"><div className="cr-clamp-lever" /></div>
          <div className="cr-leg-twin-tubes-lower">
            <div className="cr-carbon-lower tube-l" />
            <div className="cr-carbon-lower tube-r" />
          </div>
          <div className="cr-tripod-foot" />
        </div>

        {/* Left Leg */}
        <div className="cr-tripod-leg cr-leg-left">
          <div className="cr-leg-twin-tubes-upper">
            <div className="cr-carbon-tube tube-l" />
            <div className="cr-carbon-tube tube-r" />
          </div>
          <div className="cr-leg-stage-clamp"><div className="cr-clamp-lever" /></div>
          <div className="cr-leg-twin-tubes-lower">
            <div className="cr-carbon-lower tube-l" />
            <div className="cr-carbon-lower tube-r" />
          </div>
          <div className="cr-tripod-foot" />
        </div>

        {/* Right Leg */}
        <div className="cr-tripod-leg cr-leg-right">
          <div className="cr-leg-twin-tubes-upper">
            <div className="cr-carbon-tube tube-l" />
            <div className="cr-carbon-tube tube-r" />
          </div>
          <div className="cr-leg-stage-clamp"><div className="cr-clamp-lever" /></div>
          <div className="cr-leg-twin-tubes-lower">
            <div className="cr-carbon-lower tube-l" />
            <div className="cr-carbon-lower tube-r" />
          </div>
          <div className="cr-tripod-foot" />
        </div>

        {/* Mid-Level Spreader */}
        <div className="cr-mid-level-spreader">
          <svg className="cr-spreader-svg" viewBox="0 0 320 30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="crSpreaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a1c22" />
                <stop offset="50%" stopColor="#3d424e" />
                <stop offset="100%" stopColor="#1a1c22" />
              </linearGradient>
            </defs>
            <path d="M 88 15 L 160 12 L 232 15" fill="none" stroke="url(#crSpreaderGrad)" strokeWidth="6" strokeLinecap="round" />
            <path d="M 88 15 L 160 12 L 232 15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <div className="cr-spreader-center-dial">
            <div className="cr-spreader-dial-core" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Camera3D({ isShutterActive = false, lensRef = null }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, x: -12 }}
      animate={{ 
        opacity: 1, 
        scale: isShutterActive ? 1.008 : 1, 
        x: 0 
      }}
      transition={{ 
        duration: isShutterActive ? 0.12 : 0.75, 
        ease: "easeOut" 
      }}
      className="cr-camera-scene"
      aria-label="CR Real Time News Channel Broadcast Camera"
    >
      <div className="cr-camera-scaler">
        <div className="cr-camera-stage">
          <div className="cr-camera-ground-shadow" />
          <div className="cr-camera-root" data-component="camera-root">
            <CameraTripod />
            <CameraBody />
            <CameraDisplay />
            <CameraLighting />
            <CameraLens lensRef={lensRef} />
          </div>

          {/* Optical Shutter Flash Overlay Scaled Seamlessly Inside Rig */}
          <CameraLensShutter isShutterActive={isShutterActive} />
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   6. MASTER COMPONENT: BREAKING CYBER NEWS
   ========================================================================== */
function BreakingCyberNews() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [exitingSlide, setExitingSlide] = useState(null);
  const [retractingSlide, setRetractingSlide] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isShutterActive, setIsShutterActive] = useState(false);
  const [cardDeltas, setCardDeltas] = useState({ deltaX: -520, deltaY: 0 });
  const [isFirstMount, setIsFirstMount] = useState(true);

  const lensRef = useRef(null);
  const contentTargetRef = useRef(null);

  const totalSlides = breakingNewsData.length;
  const currentSlide = breakingNewsData[currentSlideIndex];

  // Dynamic calculation using getBoundingClientRect
  const getDeltaCoordinates = useCallback(() => {
    if (!lensRef.current || !contentTargetRef.current) {
      return { deltaX: -520, deltaY: 0 };
    }
    const lensRect = lensRef.current.getBoundingClientRect();
    const targetRect = contentTargetRef.current.getBoundingClientRect();

    const lensCenterX = lensRect.left + lensRect.width / 2;
    const lensCenterY = lensRect.top + lensRect.height / 2;

    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;

    return {
      deltaX: Math.round(lensCenterX - targetCenterX),
      deltaY: Math.round(lensCenterY - targetCenterY)
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCardDeltas(getDeltaCoordinates());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getDeltaCoordinates]);

  // NEXT Button: Old card exits RIGHT, new card emerges from lens and expands
  const handleNext = useCallback(() => {
    if (isTransitioning) return;

    setCardDeltas(getDeltaCoordinates());
    setIsTransitioning(true);
    setIsFirstMount(false);

    const prevCard = breakingNewsData[currentSlideIndex];
    const nextIndex = (currentSlideIndex + 1) % totalSlides;

    setExitingSlide(prevCard);
    setIsShutterActive(true);
    setCurrentSlideIndex(nextIndex);

    setTimeout(() => {
      setIsShutterActive(false);
    }, 320);

    setTimeout(() => {
      setExitingSlide(null);
      setIsTransitioning(false);
    }, 880);
  }, [currentSlideIndex, totalSlides, isTransitioning, getDeltaCoordinates]);

  // PREVIOUS Button: Current card shrinks into the lens, lens blinks, previous card emerges
  const handlePrev = useCallback(() => {
    if (isTransitioning) return;

    setCardDeltas(getDeltaCoordinates());
    setIsTransitioning(true);
    setIsFirstMount(false);

    const currentCard = breakingNewsData[currentSlideIndex];
    const prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;

    setRetractingSlide(currentCard);

    setTimeout(() => {
      setIsShutterActive(true);
      setRetractingSlide(null);
      setCurrentSlideIndex(prevIndex);
    }, 480);

    setTimeout(() => {
      setIsShutterActive(false);
    }, 850);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1380);
  }, [currentSlideIndex, totalSlides, isTransitioning, getDeltaCoordinates]);

  // Select specific slide
  const handleSelect = useCallback((index) => {
    if (index === currentSlideIndex || isTransitioning) return;
    if (index > currentSlideIndex) {
      handleNext();
    } else {
      handlePrev();
    }
  }, [currentSlideIndex, isTransitioning, handleNext, handlePrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="relative w-full max-w-[1240px] mx-auto select-none overflow-visible p-3 sm:p-6 lg:p-8">
      {/* 100% Self-Contained Camera Stylesheet */}
      <style>{CAMERA_CSS}</style>
      {/* 2-Column Hero Grid: Camera & Traveling Content Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-4 items-center overflow-visible">
        
        {/* LEFT COLUMN: 3D Broadcast Camera with Optical Projector */}
        <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end pr-0 lg:pr-2 relative w-full overflow-visible self-start lg:self-center">
          {/* Ambient Lens Flare Aura */}
          <motion.div
            animate={{
              opacity: isShutterActive ? 0.6 : 0.15,
              scaleX: isShutterActive ? 1.3 : 1.0,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-44 bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl pointer-events-none rounded-full"
          />

          {/* 3D Broadcast Camera */}
          <Camera3D 
            isShutterActive={isShutterActive}
            lensRef={lensRef}
          />
        </div>

        {/* RIGHT COLUMN: Destination Content Area & Navigation */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-start pl-0 lg:pl-3 w-full relative min-h-[410px] sm:min-h-[460px] overflow-visible">
          {/* Target Content Area holding the active single card */}
          <div 
            ref={contentTargetRef}
            className="relative w-full min-h-[390px] sm:min-h-[440px] flex flex-col justify-center items-start overflow-visible"
          >
            {/* NEXT EXIT: Currently expanded card exits to the RIGHT */}
            {exitingSlide && (
              <motion.div
                key={`exiting-card-${exitingSlide.id}`}
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{ 
                  x: typeof window !== 'undefined' ? Math.max(window.innerWidth * 0.7, 750) : 750,
                  opacity: 0,
                  scale: 1 
                }}
                transition={{ duration: 0.48, ease: [0.36, 0, 0.66, 0] }}
                className="absolute top-0 left-0 w-full max-w-[640px] pointer-events-none z-10 will-change-transform"
              >
                <SlideContent slide={exitingSlide} />
              </motion.div>
            )}

            {/* PREVIOUS RETRACTION: Card shrinks from full-size directly into camera lens without collapsing container */}
            {retractingSlide && (
              <motion.div
                key={`retracting-card-${retractingSlide.id}`}
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{ 
                  x: cardDeltas.deltaX,
                  y: cardDeltas.deltaY,
                  scale: [1, 0.45, 0.05],
                  opacity: [1, 0.8, 0],
                  boxShadow: "0 0 45px rgba(56, 189, 248, 0.95)"
                }}
                transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full max-w-[640px] pointer-events-none z-30 will-change-transform rounded-3xl origin-center"
              >
                <SlideContent slide={retractingSlide} />
              </motion.div>
            )}

            {/* SINGLE PERSISTENT EXPANDING CARD (Emerges from lens center & expands) */}
            {!retractingSlide && (
              <motion.div
                key={`persistent-card-${currentSlide.id}`}
                initial={
                  isFirstMount 
                    ? { x: 0, y: 0, scale: 1, opacity: 1 } 
                    : {
                        x: cardDeltas.deltaX,
                        y: cardDeltas.deltaY,
                        scale: 0.08,
                        opacity: 0,
                        boxShadow: "0 0 50px rgba(56, 189, 248, 0.95)"
                      }
                }
                animate={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  boxShadow: "0 4px 20px -2px rgba(9, 42, 112, 0.04)"
                }}
                transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[640px] z-20 will-change-transform rounded-3xl origin-center"
              >
                <SlideContent slide={currentSlide} />
              </motion.div>
            )}
          </div>

          {/* Interactive Navigation Bar: Prev, 4 Indicators, Counter, Next */}
          <div className="flex items-center justify-between w-full max-w-[620px] pt-3 sm:pt-4 border-t border-slate-100 select-none">
            {/* Left: Previous Button & Counter */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={isTransitioning}
                aria-label="Previous Slide"
                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white text-[#092A70] shadow-xs transition-all ${
                  isTransitioning 
                    ? 'opacity-40 cursor-not-allowed' 
                    : 'hover:bg-blue-50/60 hover:border-blue-300 hover:text-[#0739B5] cursor-pointer hover:scale-105 active:scale-95'
                }`}
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-bold text-slate-500">
                <span className="text-[#0739B5] font-extrabold text-sm sm:text-base">
                  0{currentSlideIndex + 1}
                </span>
                <span className="text-slate-300">/</span>
                <span>0{totalSlides}</span>
              </div>
            </div>

            {/* Middle: 4 Slide Indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => {
                const isActive = index === currentSlideIndex;
                return (
                  <button
                    key={index}
                    onClick={() => !isTransitioning && handleSelect(index)}
                    disabled={isTransitioning}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                      isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'
                    } ${
                      isActive 
                        ? 'w-7 sm:w-8 bg-[#0739B5] shadow-[0_0_8px_rgba(7,57,181,0.5)]' 
                        : 'w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                );
              })}
            </div>

            {/* Right: Next Button */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 hidden sm:inline-block">
                Lens Portal
              </span>
              <button
                onClick={handleNext}
                disabled={isTransitioning}
                aria-label="Next Slide"
                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white text-[#092A70] shadow-xs transition-all ${
                  isTransitioning 
                    ? 'opacity-40 cursor-not-allowed' 
                    : 'hover:bg-blue-50/60 hover:border-blue-300 hover:text-[#0739B5] cursor-pointer hover:scale-105 active:scale-95'
                }`}
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export const Section05 = () => {
  return (
    <section
      id="section-05"
      className="w-full relative py-8 sm:py-12 lg:py-16 select-none overflow-hidden bg-white border-b border-slate-200"
    >
      <div className="w-full max-w-[1340px] mx-auto px-2 sm:px-6 lg:px-8">
        <BreakingCyberNews />
      </div>
    </section>
  );
};

export default Section05;
