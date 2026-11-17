import React from 'react';

/**
 * ===================================================================
 * 1. EXECUTIVE CHAIR COMPONENT (Pure HTML & CSS)
 * ===================================================================
 */
function ExecutiveChair({ className = '' }) {
  return (
    <div className={`relative w-full h-full flex flex-col items-center select-none pointer-events-none ${className}`}>
      <div 
        className="relative w-full h-full flex flex-col items-center"
        style={{ filter: 'drop-shadow(0 14px 22px rgba(0, 0, 0, 0.65))' }}
      >
        {/* Headrest */}
        <div 
          className="relative z-20 flex items-center justify-center"
          style={{
            width: '64%',
            height: '24%',
            borderRadius: '24px 24px 14px 14px',
            background: 'linear-gradient(180deg, #323844 0%, #1c2027 30%, #0d0f14 70%, #050608 100%)',
            boxShadow: `
              inset 0 3px 2px rgba(255, 255, 255, 0.28),
              inset 0 -3px 4px rgba(0, 0, 0, 0.9),
              inset 3px 0 3px rgba(255, 255, 255, 0.08),
              inset -3px 0 3px rgba(0, 0, 0, 0.6),
              0 4px 10px rgba(0, 0, 0, 0.7)
            `,
            border: '1px solid #2a303c',
          }}
        >
          <div 
            className="w-[70%] h-[35%] rounded-full opacity-60"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 75%)',
            }}
          />
          <div className="absolute inset-y-2 left-[20%] w-[1px] bg-black/40 border-r border-white/5" />
          <div className="absolute inset-y-2 right-[20%] w-[1px] bg-black/40 border-r border-white/5" />
        </div>

        {/* Neck Connector */}
        <div 
          className="relative z-10 -my-[3px]"
          style={{
            width: '28%',
            height: '6%',
            background: 'linear-gradient(180deg, #050608 0%, #15181f 50%, #0a0c10 100%)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
          }}
        />

        {/* Main Backrest with 4 Ribbed Cushions & Side Bolsters */}
        <div 
          className="relative z-10 w-full flex-1 flex items-stretch justify-center -mt-[2px]"
          style={{ width: '92%' }}
        >
          {/* Left Bolster */}
          <div 
            className="relative h-full flex-shrink-0"
            style={{
              width: '14%',
              borderRadius: '26px 8px 12px 28px',
              background: 'linear-gradient(90deg, #2b313d 0%, #15181f 40%, #080a0d 100%)',
              boxShadow: `
                inset 2px 3px 3px rgba(255, 255, 255, 0.2),
                inset -2px 0 4px rgba(0, 0, 0, 0.9),
                0 4px 8px rgba(0, 0, 0, 0.5)
              `,
              borderLeft: '1px solid #3b4352',
            }}
          >
            <div className="absolute top-2 left-1 bottom-4 w-[2px] bg-white/20 rounded-full blur-[0.5px]" />
          </div>

          {/* Central 4 Cushion Segments */}
          <div className="relative flex-1 flex flex-col justify-between px-1" style={{ zIndex: 12 }}>
            {[
              { h: '22%', b: '#383f4d', c: '#282f3a', o: '0.40' },
              { h: '23%', b: '#363d4a', c: '#242b35', o: '0.35' },
              { h: '24%', b: '#323945', c: '#202630', o: '0.30' },
              { h: '25%', b: '#2e343f', c: '#1c212a', o: '0.25' },
            ].map((seg, idx) => (
              <div 
                key={idx}
                className="relative w-full rounded-md flex items-center justify-center my-[1px]"
                style={{
                  height: seg.h,
                  background: `linear-gradient(180deg, ${seg.b} 0%, #1a1e26 35%, #08090d 100%)`,
                  boxShadow: `
                    inset 0 2px 2px rgba(255, 255, 255, 0.22),
                    inset 0 -2.5px 3px rgba(0, 0, 0, 0.85),
                    0 2px 4px rgba(0, 0, 0, 0.6)
                  `,
                  border: `1px solid ${seg.c}`,
                }}
              >
                <div 
                  className="w-[82%] h-[30%] rounded-full"
                  style={{
                    background: `radial-gradient(ellipse at 50% 25%, rgba(255, 255, 255, ${seg.o}) 0%, rgba(255, 255, 255, 0) 75%)`,
                  }}
                />
                <div className="absolute inset-y-1 left-[14%] w-[1px] bg-black/45 border-r border-white/5" />
                <div className="absolute inset-y-1 right-[14%] w-[1px] bg-black/45 border-r border-white/5" />
              </div>
            ))}
          </div>

          {/* Right Bolster */}
          <div 
            className="relative h-full flex-shrink-0"
            style={{
              width: '14%',
              borderRadius: '8px 26px 28px 12px',
              background: 'linear-gradient(270deg, #2b313d 0%, #15181f 40%, #080a0d 100%)',
              boxShadow: `
                inset -2px 3px 3px rgba(255, 255, 255, 0.2),
                inset 2px 0 4px rgba(0, 0, 0, 0.9),
                0 4px 8px rgba(0, 0, 0, 0.5)
              `,
              borderRight: '1px solid #3b4352',
            }}
          >
            <div className="absolute top-2 right-1 bottom-4 w-[2px] bg-white/20 rounded-full blur-[0.5px]" />
          </div>
        </div>

        {/* Armrests */}
        <div 
          className="absolute z-5 pointer-events-none"
          style={{
            left: '-1%',
            top: '42%',
            width: '11%',
            height: '38%',
            borderRadius: '14px 4px 6px 14px',
            background: 'linear-gradient(180deg, #303744 0%, #161920 40%, #080a0d 100%)',
            boxShadow: `
              inset 2px 2px 2px rgba(255, 255, 255, 0.2),
              inset -2px -2px 3px rgba(0, 0, 0, 0.8),
              0 6px 10px rgba(0, 0, 0, 0.6)
            `,
            border: '1px solid #2d3340',
            transform: 'rotate(2deg)',
          }}
        />

        <div 
          className="absolute z-5 pointer-events-none"
          style={{
            right: '-1%',
            top: '42%',
            width: '11%',
            height: '38%',
            borderRadius: '4px 14px 14px 6px',
            background: 'linear-gradient(180deg, #303744 0%, #161920 40%, #080a0d 100%)',
            boxShadow: `
              inset -2px 2px 2px rgba(255, 255, 255, 0.2),
              inset 2px -2px 3px rgba(0, 0, 0, 0.8),
              0 6px 10px rgba(0, 0, 0, 0.6)
            `,
            border: '1px solid #2d3340',
            transform: 'rotate(-2deg)',
          }}
        />
      </div>
    </div>
  );
}

/**
 * ===================================================================
 * 2. POTTED PLANT COMPONENT (Pure HTML & CSS 26-Leaf Shrub)
 * ===================================================================
 */
function CSSPlant({ className = '' }) {
  const leaves = [
    // Backmost Tier
    { rot: -62, scale: 0.92, x: -38, y: -26, z: 2, cL: '#22c55e', cR: '#15803d', op: 0.88 },
    { rot: -44, scale: 0.98, x: -25, y: -40, z: 3, cL: '#34d399', cR: '#16a34a', op: 0.92 },
    { rot: -20, scale: 1.05, x: -10, y: -48, z: 4, cL: '#4ade80', cR: '#15803d', op: 0.95 },
    { rot: 2, scale: 1.08, x: 5, y: -50, z: 4, cL: '#34d399', cR: '#166534', op: 0.96 },
    { rot: 24, scale: 1.02, x: 22, y: -46, z: 3, cL: '#4ade80', cR: '#15803d', op: 0.92 },
    { rot: 48, scale: 0.95, x: 36, y: -36, z: 2, cL: '#22c55e', cR: '#166534', op: 0.88 },
    { rot: 66, scale: 0.88, x: 46, y: -22, z: 1, cL: '#16a34a', cR: '#14532d', op: 0.85 },

    // Middle-Back Tier
    { rot: -52, scale: 1.0, x: -32, y: -18, z: 5, cL: '#4ade80', cR: '#16a34a', op: 0.95 },
    { rot: -32, scale: 1.08, x: -18, y: -32, z: 6, cL: '#6ee7b7', cR: '#15803d', op: 0.98 },
    { rot: -10, scale: 1.12, x: -4, y: -38, z: 7, cL: '#4ade80', cR: '#166534', op: 1.0 },
    { rot: 12, scale: 1.1, x: 12, y: -36, z: 7, cL: '#6ee7b7', cR: '#15803d', op: 0.98 },
    { rot: 34, scale: 1.04, x: 28, y: -28, z: 6, cL: '#4ade80', cR: '#16a34a', op: 0.95 },
    { rot: 56, scale: 0.96, x: 40, y: -14, z: 5, cL: '#22c55e', cR: '#14532d', op: 0.9 },

    // Middle-Front Tier
    { rot: -40, scale: 1.05, x: -24, y: -8, z: 8, cL: '#6ee7b7', cR: '#16a34a', op: 1.0 },
    { rot: -22, scale: 1.12, x: -10, y: -20, z: 9, cL: '#86efac', cR: '#15803d', op: 1.0 },
    { rot: 0, scale: 1.15, x: 3, y: -24, z: 10, cL: '#a7f3d0', cR: '#16a34a', op: 1.0 },
    { rot: 20, scale: 1.1, x: 18, y: -18, z: 9, cL: '#6ee7b7', cR: '#15803d', op: 1.0 },
    { rot: 42, scale: 1.02, x: 32, y: -6, z: 8, cL: '#4ade80', cR: '#166534', op: 0.98 },

    // Foreground Outer Arching Tier
    { rot: -78, scale: 0.88, x: -42, y: 4, z: 11, cL: '#4ade80', cR: '#166534', op: 0.95 },
    { rot: -60, scale: 0.96, x: -30, y: 2, z: 12, cL: '#6ee7b7', cR: '#15803d', op: 1.0 },
    { rot: -30, scale: 1.05, x: -14, y: -4, z: 13, cL: '#86efac', cR: '#16a34a', op: 1.0 },
    { rot: 8, scale: 1.08, x: 8, y: -6, z: 13, cL: '#86efac', cR: '#16a34a', op: 1.0 },
    { rot: 32, scale: 1.0, x: 24, y: 0, z: 12, cL: '#6ee7b7', cR: '#15803d', op: 1.0 },
    { rot: 64, scale: 0.92, x: 38, y: 4, z: 11, cL: '#4ade80', cR: '#166534', op: 0.95 },
    { rot: 82, scale: 0.82, x: 46, y: 10, z: 10, cL: '#22c55e', cR: '#14532d', op: 0.9 },
  ];

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-end select-none pointer-events-none ${className}`}>
      {/* Tabletop Contact Shadow */}
      <div 
        className="absolute z-1 pointer-events-none"
        style={{
          bottom: '2%',
          width: '54%',
          height: '10%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(5, 12, 35, 0.55) 0%, rgba(10, 25, 60, 0.22) 50%, transparent 75%)',
          filter: 'blur(3px)',
        }}
      />

      {/* Tabletop Reflection */}
      <div 
        className="absolute z-2 pointer-events-none opacity-25"
        style={{
          bottom: '-12%',
          width: '38%',
          height: '22%',
          borderRadius: '0 0 16px 16px',
          background: 'linear-gradient(180deg, rgba(220, 230, 245, 0.45) 0%, transparent 100%)',
          filter: 'blur(2px)',
          transform: 'scaleY(-1)',
        }}
      />

      {/* Main Shrub Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Leaf Canopy */}
        <div 
          className="absolute w-full h-full flex items-center justify-center pointer-events-none"
          style={{ top: '-8%' }}
        >
          {leaves.map((leaf, i) => (
            <div
              key={i}
              className="absolute flex items-center justify-center pointer-events-none"
              style={{
                width: '30%',
                height: '40%',
                left: `calc(50% - 15% + ${leaf.x * 0.72}%)`,
                top: `calc(48% - 20% + ${leaf.y * 0.68}%)`,
                transform: `rotate(${leaf.rot}deg) scale(${leaf.scale})`,
                transformOrigin: '50% 90%',
                zIndex: leaf.z,
                opacity: leaf.op,
                filter: 'drop-shadow(0 4px 6px rgba(0, 20, 10, 0.32))',
              }}
            >
              <div 
                className="relative w-full h-full flex overflow-hidden"
                style={{
                  borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
                }}
              >
                {/* Left Illuminated Leaf Half */}
                <div 
                  className="w-1/2 h-full"
                  style={{
                    background: `linear-gradient(135deg, ${leaf.cL} 0%, #22c55e 55%, #15803d 100%)`,
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.65)',
                  }}
                >
                  <div 
                    className="w-full h-3/5 rounded-full opacity-45"
                    style={{
                      background: 'radial-gradient(ellipse at 40% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                    }}
                  />
                </div>

                {/* Right Shaded Leaf Half */}
                <div 
                  className="w-1/2 h-full"
                  style={{
                    background: `linear-gradient(225deg, ${leaf.cR} 0%, #166534 60%, #14532d 100%)`,
                    boxShadow: 'inset -1px 0 2px rgba(0, 0, 0, 0.45)',
                  }}
                />

                {/* Central Leaf Vein (Midrib) */}
                <div 
                  className="absolute inset-y-1 left-1/2 -translate-x-1/2 w-[1px]"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(200, 255, 200, 0.4) 60%, rgba(10, 50, 20, 0.6) 100%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Ceramic Planter Pot */}
        <div 
          className="absolute z-20 flex flex-col items-center pointer-events-none"
          style={{
            bottom: '4%',
            width: '38%',
            height: '42%',
            filter: 'drop-shadow(0 8px 14px rgba(0, 0, 0, 0.35))',
          }}
        >
          {/* Ceramic Pot Upper Rim Opening */}
          <div 
            className="relative z-30 flex items-center justify-center -mb-[3px]"
            style={{
              width: '104%',
              height: '24%',
              borderRadius: '9999px',
              background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 45%, #cbd5e1 100%)',
              boxShadow: `
                0 3px 6px rgba(0, 0, 0, 0.28),
                inset 0 1.5px 2px #ffffff,
                inset 0 -1.5px 2px rgba(0, 0, 0, 0.2)
              `,
              border: '1px solid #e2e8f0',
            }}
          >
            {/* Dark Rich Soil Bed */}
            <div 
              className="w-[84%] h-[68%] rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, #1c140d 0%, #0d0906 75%, #050403 100%)',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.95)',
              }}
            >
              <div className="w-[80%] h-[40%] rounded-full bg-black/60 blur-[1px]" />
            </div>
          </div>

          {/* Smooth Ceramic Body */}
          <div 
            className="relative z-20 w-full flex-1 flex flex-col items-center justify-between overflow-hidden"
            style={{
              borderRadius: '6px 6px 20px 20px',
              background: 'linear-gradient(90deg, #94a3b8 0%, #e2e8f0 14%, #ffffff 32%, #f8fafc 58%, #cbd5e1 86%, #64748b 100%)',
              boxShadow: `
                inset 2px 0 4px rgba(255, 255, 255, 0.9),
                inset -2px 0 4px rgba(0, 0, 0, 0.25),
                inset 0 -3px 5px rgba(0, 0, 0, 0.3)
              `,
              border: '1px solid #cbd5e1',
            }}
          >
            {/* Vertical Specular Ceramic Glaze Highlight */}
            <div 
              className="absolute top-0 bottom-1 left-[28%] w-[18%] pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0.95) 55%, transparent 100%)',
              }}
            />

            {/* Ambient Cyan Studio LED Reflection */}
            <div 
              className="absolute bottom-0 inset-x-0 h-[35%] pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.22) 100%)',
              }}
            />

            {/* Base Bevel Ring */}
            <div 
              className="w-[86%] h-[8%] rounded-b-lg -mb-[1px]"
              style={{
                background: 'linear-gradient(180deg, #94a3b8 0%, #64748b 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.4)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ===================================================================
 * 3. COFFEE MUG COMPONENT (Pure HTML & CSS "CR RealTime" Branding)
 * ===================================================================
 */
function CSSCoffeeMug({ brandLine1 = 'CR', brandLine2 = 'RealTime', className = '' }) {
  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-end select-none pointer-events-none ${className}`}>
      {/* Contact Drop Shadow */}
      <div 
        className="absolute z-1 pointer-events-none"
        style={{
          bottom: '4%',
          left: '12%',
          width: '76%',
          height: '14%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(5, 12, 35, 0.52) 0%, rgba(10, 25, 60, 0.2) 55%, transparent 75%)',
          filter: 'blur(3px)',
        }}
      />

      {/* Mug Reflection */}
      <div 
        className="absolute z-2 pointer-events-none opacity-22"
        style={{
          bottom: '-14%',
          left: '16%',
          width: '64%',
          height: '24%',
          borderRadius: '0 0 12px 12px',
          background: 'linear-gradient(180deg, rgba(220, 230, 245, 0.5) 0%, transparent 100%)',
          filter: 'blur(2px)',
          transform: 'scaleY(-1)',
        }}
      />

      {/* Mug Main Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Ceramic Handle (Left Side) */}
        <div 
          className="absolute z-10 pointer-events-none"
          style={{
            left: '2%',
            top: '32%',
            width: '28%',
            height: '46%',
            borderRadius: '16px 0 0 16px',
            border: '4px solid #ffffff',
            borderRight: 'none',
            background: 'transparent',
            boxShadow: `
              -3px 4px 8px rgba(0, 0, 0, 0.32),
              inset 2px 2px 2px rgba(255, 255, 255, 0.9),
              inset 0 -2px 3px rgba(0, 0, 0, 0.25)
            `,
          }}
        />

        {/* Ceramic Cylinder Mug Body */}
        <div 
          className="relative z-20 flex flex-col items-center pointer-events-none"
          style={{
            width: '62%',
            height: '80%',
            bottom: '6%',
            filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.28))',
          }}
        >
          {/* Top Oval Rim Opening */}
          <div 
            className="relative z-30 flex items-center justify-center -mb-[6px]"
            style={{
              width: '100%',
              height: '22%',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 40%, #cbd5e1 100%)',
              boxShadow: `
                0 2px 4px rgba(0, 0, 0, 0.2),
                inset 0 1.5px 2px #ffffff,
                inset 0 -1.5px 2px rgba(0, 0, 0, 0.3)
              `,
              border: '1px solid #e2e8f0',
            }}
          >
            {/* Fresh Steaming Dark Roast Coffee */}
            <div 
              className="w-[84%] h-[72%] rounded-full overflow-hidden flex items-center justify-center"
              style={{
                background: 'radial-gradient(ellipse at 45% 45%, #451a03 0%, #291004 65%, #120702 100%)',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.95)',
              }}
            >
              {/* Coffee Surface Specular Glint */}
              <div 
                className="w-[50%] h-[35%] rounded-full opacity-40 -mt-1"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.75) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>

          {/* Glossy Ceramic Mug Cylinder */}
          <div 
            className="relative z-20 w-full flex-1 flex flex-col items-center justify-center overflow-hidden"
            style={{
              borderRadius: '2px 2px 14px 14px',
              background: 'linear-gradient(90deg, #94a3b8 0%, #e2e8f0 14%, #ffffff 32%, #f8fafc 62%, #cbd5e1 88%, #64748b 100%)',
              boxShadow: `
                inset 2px 0 3px rgba(255, 255, 255, 0.9),
                inset -2px 0 3px rgba(0, 0, 0, 0.25),
                inset 0 -3px 4px rgba(0, 0, 0, 0.3)
              `,
              border: '1px solid #cbd5e1',
            }}
          >
            {/* Specular White Glaze Line */}
            <div 
              className="absolute top-0 bottom-0 left-[26%] w-[16%] pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0.95) 55%, transparent 100%)',
              }}
            />

            {/* "CR RealTime" Branding Badge on Mug */}
            <div 
              className="relative z-30 flex flex-col items-center px-1.5 py-0.5 rounded-xs"
              style={{
                background: 'linear-gradient(135deg, #ba121c 0%, #e11d2a 50%, #990f17 100%)',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
                border: '0.8px solid #f87171',
                transform: 'scale(0.92)',
              }}
            >
              <span 
                className="font-sans font-black text-white leading-none tracking-wider drop-shadow-xs"
                style={{ fontSize: 'clamp(3.8px, 0.8cqw, 8.5px)' }}
              >
                {brandLine1}
              </span>
              <span 
                className="font-sans font-black text-white leading-none tracking-[0.08em] mt-[1px]"
                style={{ fontSize: 'clamp(2.5px, 0.55cqw, 6px)' }}
              >
                {brandLine2}
              </span>
            </div>

            {/* Ambient Cyan Studio LED Glow at Base of Mug */}
            <div 
              className="absolute bottom-0 inset-x-0 h-[28%] pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.25) 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ===================================================================
 * 4. SPIRAL NOTEBOOK & EXECUTIVE PEN (Pure HTML & CSS)
 * ===================================================================
 */
function CSSNotebook({ className = '' }) {
  const loops = Array.from({ length: 12 });

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none pointer-events-none ${className}`}>
      {/* Contact Drop Shadow */}
      <div 
        className="absolute z-1 pointer-events-none"
        style={{
          left: '6%',
          top: '20%',
          width: '88%',
          height: '74%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(5, 12, 35, 0.48) 0%, rgba(10, 20, 50, 0.2) 60%, transparent 80%)',
          filter: 'blur(3.5px)',
          transform: 'rotate(-4deg)',
        }}
      />

      {/* Main Spiral Pad (Slight Isometric Angle) */}
      <div 
        className="relative z-10 w-full h-full flex items-center justify-center"
        style={{ transform: 'rotate(-4deg)' }}
      >
        {/* Paper Pad Stack */}
        <div 
          className="relative w-[86%] h-[82%] rounded-sm overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 85%, #e2e8f0 100%)',
            boxShadow: `
              0 6px 12px rgba(0, 0, 0, 0.32),
              inset 0 1px 2px #ffffff,
              inset 0 -2px 3px rgba(0, 0, 0, 0.2)
            `,
            border: '1px solid #cbd5e1',
          }}
        >
          {/* Ruled Horizontal Lines on Paper */}
          <div className="absolute inset-0 flex flex-col justify-evenly py-2 px-3 pointer-events-none opacity-45">
            {[1, 2, 3, 4, 5, 6].map((line) => (
              <div key={line} className="w-full h-[1px] bg-sky-300/40" />
            ))}
          </div>

          {/* Red Left Margin Line */}
          <div className="absolute top-0 bottom-0 left-[22%] w-[1px] bg-red-400/40 pointer-events-none" />

          {/* Top Spiral Binding Strip (Pure CSS) */}
          <div 
            className="absolute top-0 inset-x-0 h-[22%] flex items-center justify-between px-2"
            style={{
              background: 'linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%)',
              borderBottom: '1px solid #94a3b8',
            }}
          >
            {loops.map((_, i) => (
              <div 
                key={i}
                className="relative flex flex-col items-center"
                style={{ width: '6%', height: '120%', marginTop: '-15%' }}
              >
                {/* Silver Wire Loop Ring */}
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #94a3b8 40%, #334155 75%, #ffffff 100%)',
                    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5), inset 0 1px 1px #ffffff',
                    border: '0.8px solid #64748b',
                  }}
                />
                {/* Punch Hole */}
                <div 
                  className="w-[3px] h-[3px] rounded-full bg-slate-900 -mt-1 shadow-inner"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Executive Black & Gold Metal Pen Across the Pad */}
        <div 
          className="absolute z-20 pointer-events-none flex items-center justify-center"
          style={{
            width: '78%',
            height: '22%',
            transform: 'rotate(24deg) translate(8%, 10%)',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.45))',
          }}
        >
          {/* Pen Body Structure */}
          <div className="relative w-full h-[6px] flex items-center">
            {/* Gold Tip / Nib */}
            <div 
              className="w-[12%] h-full rounded-l-full"
              style={{
                clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
                background: 'linear-gradient(180deg, #fef08a 0%, #eab308 50%, #854d0e 100%)',
                boxShadow: 'inset 0 1px 1px #fef9c3',
              }}
            />

            {/* Gold Accent Ring 1 */}
            <div 
              className="w-[4%] h-[7px] -my-[0.5px]"
              style={{
                background: 'linear-gradient(180deg, #fef08a 0%, #ca8a04 50%, #713f12 100%)',
              }}
            />

            {/* Black Lacquer Main Barrel */}
            <div 
              className="flex-1 h-full relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #334155 0%, #0f172a 40%, #020617 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.35)',
              }}
            >
              {/* Barrel Specular Glint */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-white opacity-60" />
            </div>

            {/* Center Gold Band */}
            <div 
              className="w-[6%] h-[8px] -my-[1px]"
              style={{
                background: 'linear-gradient(180deg, #fef08a 0%, #eab308 50%, #854d0e 100%)',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
              }}
            />

            {/* Upper Cap */}
            <div 
              className="w-[32%] h-full relative"
              style={{
                background: 'linear-gradient(180deg, #334155 0%, #0f172a 40%, #020617 100%)',
              }}
            >
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-white opacity-60" />

              {/* Gold Pocket Clip */}
              <div 
                className="absolute -top-[2.5px] right-[15%] w-[70%] h-[2.5px] rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #fef08a 0%, #eab308 50%, #854d0e 100%)',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                }}
              />
            </div>

            {/* Gold Crown / Cap End */}
            <div 
              className="w-[5%] h-[7px] rounded-r-xs -my-[0.5px]"
              style={{
                background: 'linear-gradient(180deg, #fef08a 0%, #ca8a04 50%, #713f12 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ===================================================================
 * 5. METALLIC SILVER LAPTOP (Pure HTML & CSS Rigid Unibody)
 * ===================================================================
 */
function CSSLaptop({ className = '' }) {
  const functionKeys = Array.from({ length: 12 });
  const rowOneKeys = Array.from({ length: 12 });
  const rowTwoKeys = Array.from({ length: 11 });
  const bottomRowSideKeys = Array.from({ length: 3 });

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center select-none pointer-events-none ${className}`}>
      <div className="relative flex items-center justify-center" style={{ width: '100%', height: '100%' }}>
        
        {/* Display Lid (Rigid Rectangular Plate with Precision Rounded Corners) */}
        <div 
          className="absolute z-20 pointer-events-none flex flex-col items-center justify-center"
          style={{
            left: '34%',
            top: '7%',
            width: '58%',
            height: '68%',
            borderRadius: '9px 9px 2px 2px',
            transformOrigin: 'bottom right',
            transform: 'rotate(-3.5deg) skewX(-4deg)',
            background: 'linear-gradient(135deg, #dbe4ed 0%, #b8c4d4 22%, #8e9baa 50%, #687486 78%, #4a5566 100%)',
            boxShadow: `
              0 12px 24px rgba(0, 0, 0, 0.42),
              inset 0 1.8px 2.5px rgba(255, 255, 255, 0.9),
              inset 1.5px 0 2px rgba(255, 255, 255, 0.5),
              inset -1.5px 0 2px rgba(0, 0, 0, 0.4),
              inset 0 -1.5px 2px rgba(0, 0, 0, 0.5)
            `,
            border: '1px solid #78869a',
          }}
        >
          <div 
            className="absolute inset-0 pointer-events-none rounded-[8px]"
            style={{
              background: 'linear-gradient(125deg, transparent 32%, rgba(255, 255, 255, 0.18) 46%, rgba(255, 255, 255, 0.03) 60%, transparent 78%)',
            }}
          />
          <div 
            className="absolute right-0 bottom-0 w-[55%] h-[55%] pointer-events-none rounded-br-[8px]"
            style={{
              background: 'radial-gradient(ellipse at 85% 85%, rgba(56, 189, 248, 0.22) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute left-0 inset-y-0 w-[3.5px] rounded-l-[8px]"
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 60%, #020617 100%)',
              boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div className="w-[1px] h-full bg-cyan-400/40 ml-[0.5px]" />
          </div>
          <div className="absolute top-0 inset-x-2 h-[1px] bg-white opacity-90 rounded-full" />
        </div>

        {/* Hinge Bar */}
        <div 
          className="absolute z-22 pointer-events-none"
          style={{
            left: '34.5%',
            top: '72.5%',
            width: '56.5%',
            height: '4px',
            borderRadius: '2px',
            background: 'linear-gradient(180deg, #334155 0%, #0f172a 60%, #020617 100%)',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
            transform: 'rotate(-3.5deg)',
          }}
        />

        {/* Keyboard Base Deck */}
        <div 
          className="absolute z-15 pointer-events-none"
          style={{
            left: '5%',
            top: '72%',
            width: '91%',
            height: '21%',
          }}
        >
          <div 
            className="w-full h-full relative"
            style={{
              clipPath: 'polygon(32% 0%, 94% 0%, 99% 72%, 99% 100%, 1.5% 100%, 1.5% 72%)',
              background: 'linear-gradient(180deg, #64748b 0%, #94a3b8 20%, #cbd5e1 55%, #e2e8f0 82%, #f1f5f9 100%)',
            }}
          >
            <div 
              className="absolute inset-x-0 top-0 h-[3px] pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.45) 0%, transparent 100%)',
              }}
            />

            {/* Inset Chiclet Keyboard Well */}
            <div 
              className="absolute flex flex-col justify-between p-[1.5px]"
              style={{
                left: '34%',
                right: '8%',
                top: '5%',
                height: '52%',
                borderRadius: '3px',
                background: '#090e17',
                boxShadow: 'inset 0 1.5px 2px rgba(0, 0, 0, 0.95), 0 0.8px 1px rgba(255, 255, 255, 0.25)',
                border: '0.8px solid #1e293b',
              }}
            >
              <div className="w-full flex items-center justify-between gap-[1px]">
                {functionKeys.map((_, i) => (
                  <div key={i} className="flex-1 rounded-[0.5px]" style={{ height: 'clamp(1px, 0.2cqw, 2px)', background: '#1e293b' }} />
                ))}
              </div>
              <div className="w-full flex items-center justify-between gap-[1px]">
                {rowOneKeys.map((_, i) => (
                  <div key={i} className="flex-1 rounded-[0.5px]" style={{ height: 'clamp(1.2px, 0.25cqw, 2.5px)', background: '#1e293b' }} />
                ))}
              </div>
              <div className="w-full flex items-center justify-between gap-[1px]">
                {rowTwoKeys.map((_, i) => (
                  <div key={i} className="flex-1 rounded-[0.5px]" style={{ height: 'clamp(1.2px, 0.25cqw, 2.5px)', background: '#1e293b' }} />
                ))}
              </div>
              <div className="w-full flex items-center justify-between gap-[1.5px]">
                {bottomRowSideKeys.map((_, i) => (
                  <div key={i} className="w-[8%] rounded-[0.5px]" style={{ height: 'clamp(1.5px, 0.3cqw, 3px)', background: '#1e293b' }} />
                ))}
                <div className="flex-1 rounded-[0.5px]" style={{ height: 'clamp(1.5px, 0.3cqw, 3px)', background: '#2d3748' }} />
                {bottomRowSideKeys.map((_, i) => (
                  <div key={i} className="w-[8%] rounded-[0.5px]" style={{ height: 'clamp(1.5px, 0.3cqw, 3px)', background: '#1e293b' }} />
                ))}
              </div>
            </div>

            {/* Clean Aluminum Palm Rest & Trackpad */}
            <div 
              className="absolute flex items-center justify-center pointer-events-none"
              style={{
                left: '50%',
                top: '60%',
                width: '24%',
                height: '24%',
              }}
            >
              <div 
                className="w-full h-full rounded-xs"
                style={{
                  background: 'linear-gradient(180deg, #cbd5e1 0%, #e2e8f0 100%)',
                  border: '0.8px solid #94a3b8',
                  boxShadow: 'inset 0 0.5px 1px rgba(0, 0, 0, 0.15)',
                }}
              />
            </div>

            {/* Front Notch & Highlight */}
            <div 
              className="absolute bottom-0 left-[57%] w-[9%] h-[1.5px] rounded-b-xs"
              style={{
                background: 'linear-gradient(180deg, #64748b 0%, #334155 100%)',
                boxShadow: 'inset 0 0.5px 0.5px rgba(0,0,0,0.5)',
              }}
            />
            <div className="absolute bottom-0 inset-x-1 h-[0.8px] bg-white opacity-90 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ===================================================================
 * 6. DIGITAL 3D GLOBE (Pure HTML & CSS Responsive Sphere)
 * ===================================================================
 */
function DigitalGlobe({ className = '' }) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none pointer-events-none ${className}`}>
      {/* Deep Ocean Spherical Body (80% of container) */}
      <div 
        className="relative w-[80%] h-[80%] rounded-full desk-globe-sphere overflow-hidden flex items-center justify-center border border-cyan-400/40"
      >
        {/* Longitudinal grid lines */}
        <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
        <div 
          className="absolute inset-y-0 rounded-full border border-cyan-200/30"
          style={{ width: '56%', left: '22%' }}
        />
        <div 
          className="absolute inset-y-0 rounded-full border border-cyan-200/30"
          style={{ width: '28%', left: '36%' }}
        />
        
        {/* Latitudinal grid lines */}
        <div className="absolute w-full h-[1px] bg-cyan-300/35 top-1/2 -translate-y-1/2" />
        <div className="absolute w-[86%] h-[1px] bg-cyan-300/25 top-[28%]" />
        <div className="absolute w-[86%] h-[1px] bg-cyan-300/25 bottom-[28%]" />

        {/* Continents */}
        <div 
          className="absolute top-[28%] left-[42%] w-[25%] h-[17%] rounded-full bg-cyan-300/40 blur-[0.5px]"
          style={{ transform: 'rotate(-15deg)' }}
        />
        <div 
          className="absolute top-[48%] left-[48%] w-[29%] h-[23%] rounded-full bg-cyan-300/40 blur-[0.5px]"
          style={{ transform: 'rotate(25deg)' }}
        />
        <div 
          className="absolute top-[34%] left-[16%] w-[21%] h-[29%] rounded-full bg-cyan-300/35 blur-[0.5px]"
        />
        <div 
          className="absolute top-[62%] left-[22%] w-[17%] h-[23%] rounded-full bg-cyan-300/35 blur-[0.5px]"
        />

        {/* Specular high glint */}
        <div 
          className="absolute top-[12%] left-[22%] w-[32%] h-[24%] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 75%)',
          }}
        />
      </div>

      {/* Atmospheric Corona Aura Ring 1 */}
      <div 
        className="absolute w-[91.6%] h-[91.6%] rounded-full border border-cyan-300/40 pointer-events-none"
        style={{ boxShadow: '0 0 15px rgba(0, 240, 255, 0.45)' }}
      />
      
      {/* Outer Hologram Orbital Ring 2 */}
      <div 
        className="absolute w-[96.6%] h-[96.6%] rounded-full border border-dashed border-cyan-400/30 pointer-events-none animate-spin"
        style={{ animationDuration: '24s' }}
      />

      {/* Equatorial Neon Glow Ring */}
      <div 
        className="absolute w-[86.6%] h-[30%] rounded-full border-t-2 border-b-2 border-cyan-300/60 pointer-events-none"
        style={{
          transform: 'rotateX(72deg)',
          boxShadow: '0 0 12px rgba(0, 240, 255, 0.7)',
        }}
      />
    </div>
  );
}

/**
 * ===================================================================
 * 7. INDIAN PARLIAMENT SANSAD BHAVAN (Pure HTML & CSS Architecture)
 * ===================================================================
 */
function CSSNewsThumbnail({ thumbnailUrl = '', className = '' }) {
  if (thumbnailUrl && thumbnailUrl !== '/assets/parliament.png') {
    return (
      <div className={`relative w-full h-full rounded-lg overflow-hidden border border-cyan-400/30 shadow-md ${className}`}>
        <img src={thumbnailUrl} alt="News thumbnail" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full h-full rounded-lg overflow-hidden border border-cyan-400/30 shadow-md select-none pointer-events-none flex flex-col justify-between ${className}`}
      style={{
        background: 'linear-gradient(180deg, #60a5fa 0%, #93c5fd 40%, #bae6fd 65%, #e0f2fe 72%)',
      }}
    >
      {/* Sky & Tricolor Flag */}
      <div className="relative w-full h-[32%] flex items-end justify-center">
        <div className="relative flex flex-col items-center">
          <div 
            className="bg-slate-300 shadow-xs" 
            style={{
              width: 'clamp(1px, 0.15cqw, 1.5px)',
              height: 'clamp(8px, 1.6cqw, 16px)',
            }}
          />
          <div 
            className="absolute top-0 flex flex-col shadow-xs"
            style={{
              left: 'clamp(1px, 0.15cqw, 1.5px)',
              width: 'clamp(8px, 1.4cqw, 14px)',
              height: 'clamp(5px, 0.9cqw, 9px)',
              clipPath: 'polygon(0% 0%, 100% 5%, 95% 50%, 100% 95%, 0% 100%)',
            }}
          >
            <div className="w-full h-1/3 bg-[#ff9933]" />
            <div className="w-full h-1/3 bg-white flex items-center justify-center">
              <div 
                className="rounded-full bg-[#000080]" 
                style={{
                  width: 'clamp(1.2px, 0.2cqw, 2px)',
                  height: 'clamp(1.2px, 0.2cqw, 2px)',
                }}
              />
            </div>
            <div className="w-full h-1/3 bg-[#138808]" />
          </div>
        </div>
      </div>

      {/* Parliament Architecture */}
      <div className="relative z-10 w-full flex flex-col items-center -mt-[4%]" style={{ height: '42%' }}>
        <div 
          className="w-[28%] h-[20%] rounded-t-full shadow-xs"
          style={{
            background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 50%, #d97706 100%)',
            border: '0.5px solid #b45309',
          }}
        />
        <div 
          className="w-[96%] h-[12%] rounded-t-xs"
          style={{
            background: 'linear-gradient(180deg, #fef3c7 0%, #fcd34d 50%, #b45309 100%)',
          }}
        />
        <div 
          className="relative w-[96%] flex-1 flex items-stretch overflow-hidden"
          style={{
            background: '#451a03',
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #fef3c7 0px, #fef3c7 2.5px, #d97706 3px, #78350f 3.5px, #291307 5.5px)',
            }}
          />
          <div 
            className="absolute left-[47%] bottom-0 w-[6%] h-[75%] rounded-t-xs"
            style={{ background: '#1c0c04' }}
          />
        </div>
        <div 
          className="w-[98%] h-[12%] rounded-b-xs"
          style={{
            background: 'linear-gradient(180deg, #d97706 0%, #92400e 60%, #451a03 100%)',
          }}
        />
      </div>

      {/* Lawns & Red Sandstone Path */}
      <div 
        className="relative z-20 w-full flex-1 flex items-stretch overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #15803d 0%, #166534 60%, #14532d 100%)',
        }}
      >
        <div className="flex-1 relative">
          <div className="absolute top-1 left-2 right-1 h-[6px] rounded-full bg-gradient-to-r from-[#166534] via-[#22c55e] to-[#15803d]" />
        </div>
        <div 
          className="h-full relative"
          style={{
            width: '18%',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
            background: 'linear-gradient(180deg, #b91c1c 0%, #dc2626 50%, #991b1b 100%)',
          }}
        />
        <div className="flex-1 relative">
          <div className="absolute top-1 left-1 right-2 h-[6px] rounded-full bg-gradient-to-r from-[#15803d] via-[#22c55e] to-[#166534]" />
        </div>
      </div>
    </div>
  );
}

/**
 * ===================================================================
 * 8. CENTRAL NEWS DISPLAY & BRANDING PANEL (Fluid & Responsive)
 * ===================================================================
 */
function NewsDisplay({
  headline = "केंद्र सरकार ने नई रोजगार नीति को दी मंजूरी",
  description = "युवाओं के लिए रोजगार के नए अवसर, आने वाले महीनों में लाखों नौकरियां मिलने की उम्मीद।",
  date = "05 नवंबर 2026",
  category = "राष्ट्रीय समाचार",
  breakingNewsText = "BREAKING NEWS",
  liveText = "LIVE UPDATE",
  isLive = true,
  channelHindi = "भारत",
  channelEnglish = "NEWS",
  thumbnailUrl = "",
  className = "",
}) {
  return (
    <div className={`relative w-full h-full flex items-center justify-between px-1 sm:px-2 pt-0.5 pb-0.5 select-none ${className}`}>
      {/* Left Branding with Responsive Digital Globe */}
      <div className="relative w-[23%] h-full flex items-center justify-center flex-shrink-0">
        <div 
          className="relative flex items-center justify-center"
          style={{
            width: 'clamp(34px, 12.5cqw, 136px)',
            height: 'clamp(34px, 12.5cqw, 136px)',
            maxWidth: '92%',
            maxHeight: '92%',
            aspectRatio: '1/1',
          }}
        >
          <DigitalGlobe />
          
          {/* Slanted "भारत NEWS" 3D Badge */}
          <div 
            className="absolute z-20 flex flex-col items-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            style={{ transform: 'skewX(-14deg) translateY(-1px)' }}
          >
            <div 
              className="bg-gradient-to-r from-[#ba121c] via-[#e11d2a] to-[#ba121c] text-white border border-red-400/50 shadow-md flex items-center justify-center"
              style={{
                padding: 'clamp(1px, 0.25cqw, 3px) clamp(3px, 0.8cqw, 14px)',
              }}
            >
              <span 
                className="font-hindi font-black tracking-wider text-white drop-shadow whitespace-nowrap leading-none"
                style={{ fontSize: 'clamp(5px, 1.25cqw, 16px)' }}
              >
                {channelHindi}
              </span>
            </div>
            <div 
              className="bg-white text-[#041a54] border border-gray-200 shadow-md -mt-[1px] w-full text-center flex items-center justify-center"
              style={{
                padding: 'clamp(1px, 0.2cqw, 2px) clamp(2.5px, 0.7cqw, 12px)',
              }}
            >
              <span 
                className="font-sans font-black tracking-[0.2em] uppercase whitespace-nowrap leading-none"
                style={{ fontSize: 'clamp(3.5px, 0.85cqw, 11px)' }}
              >
                {channelEnglish}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Left Red Slanted Accent */}
      <div 
        className="bg-gradient-to-b from-red-600 to-red-700 shadow-lg -ml-0.5 sm:-ml-1 mr-0.5 sm:mr-1 flex-shrink-0"
        style={{ 
          width: 'clamp(3px, 1.1cqw, 14px)',
          height: 'clamp(18px, 6cqw, 68px)',
          transform: 'skewX(-16deg)' 
        }}
      />

      {/* Central News Card */}
      <div className="relative flex-1 h-full flex flex-col justify-between py-0.5 pl-0.5 pr-0.5 min-w-0">
        {/* Top Header: BREAKING NEWS & LIVE UPDATE */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-0.5 sm:gap-1.5 min-w-0">
            <div 
              className="flex gap-0.5 items-center italic font-black text-red-600 select-none flex-shrink-0"
              style={{ fontSize: 'clamp(7px, 1.3cqw, 16px)' }}
            >
              <span className="transform -skew-x-[18deg] text-red-500 font-extrabold">/</span>
              <span className="transform -skew-x-[18deg] text-red-600 font-extrabold -ml-0.5">/</span>
              <span className="transform -skew-x-[18deg] text-red-700 font-extrabold -ml-0.5">/</span>
            </div>
            <div 
              className="relative bg-gradient-to-r from-[#ba141f] via-[#e01b28] to-[#990f17] text-white border-y border-red-400/40 shadow-lg flex-shrink-0 flex items-center justify-center"
              style={{ 
                transform: 'skewX(-16deg)',
                padding: 'clamp(1px, 0.25cqw, 3px) clamp(4px, 1.8cqw, 24px)',
              }}
            >
              <span 
                className="font-news-heading font-black tracking-widest uppercase text-white drop-shadow-md whitespace-nowrap leading-none"
                style={{ fontSize: 'clamp(5px, 1.15cqw, 14px)' }}
              >
                {breakingNewsText}
              </span>
            </div>
          </div>

          {isLive && (
            <div 
              className="flex items-center gap-1 bg-gradient-to-r from-[#590a0f] to-[#7f131a] border border-red-500/60 rounded-full shadow-md mr-0.5 sm:mr-1 flex-shrink-0"
              style={{
                padding: 'clamp(1px, 0.2cqw, 2px) clamp(3px, 0.8cqw, 12px)',
              }}
            >
              <span 
                className="rounded-full bg-red-500 animate-live-dot flex-shrink-0"
                style={{
                  width: 'clamp(3px, 0.55cqw, 8px)',
                  height: 'clamp(3px, 0.55cqw, 8px)',
                }}
              />
              <span 
                className="text-white font-news-heading font-bold tracking-wider uppercase whitespace-nowrap leading-none"
                style={{ fontSize: 'clamp(4.5px, 0.85cqw, 10px)' }}
              >
                {liveText}
              </span>
            </div>
          )}
        </div>

        {/* Main News Card Surface */}
        <div 
          className="relative w-full flex items-center bg-gradient-to-r from-[#03133b]/94 via-[#061d52]/94 to-[#020f30]/94 border border-cyan-400/30 shadow-2xl backdrop-blur-sm mt-0.5 overflow-hidden"
          style={{ 
            height: 'clamp(34px, 11.23cqw, 120px)',
            padding: 'clamp(2px, 0.6cqw, 8px)',
            gap: 'clamp(3px, 1cqw, 12px)',
            borderRadius: 'clamp(4px, 0.9cqw, 12px)',
          }}
        >
          {/* Architecture Thumbnail */}
          <div 
            className="relative h-full flex-shrink-0"
            style={{ width: 'clamp(34px, 18cqw, 195px)' }}
          >
            <CSSNewsThumbnail thumbnailUrl={thumbnailUrl} />
          </div>

          {/* Hindi Headline, Description, Date & Category */}
          <div className="flex-1 flex flex-col justify-between h-full py-0.5 overflow-hidden min-w-0">
            <h2 
              className="font-hindi font-bold text-white tracking-wide drop-shadow-md line-clamp-2"
              style={{ 
                fontSize: 'clamp(6.5px, 1.7cqw, 20px)',
                lineHeight: 1.15,
              }}
            >
              {headline}
            </h2>
            <p 
              className="font-hindi text-blue-100/90 line-clamp-1 sm:line-clamp-2 font-normal mt-0.5"
              style={{ 
                fontSize: 'clamp(4.5px, 1.05cqw, 13px)',
                lineHeight: 1.2,
              }}
            >
              {description}
            </p>

            <div 
              className="flex items-center text-blue-200/90 font-medium pt-0.5 border-t border-blue-400/20"
              style={{ 
                fontSize: 'clamp(4px, 0.85cqw, 11px)',
                gap: 'clamp(2px, 0.6cqw, 8px)',
              }}
            >
              <div className="flex items-center gap-1 flex-shrink-0">
                <div 
                  className="rounded-xs bg-white border border-slate-300 flex flex-col overflow-hidden shadow-xs flex-shrink-0"
                  style={{
                    width: 'clamp(6px, 0.8cqw, 10px)',
                    height: 'clamp(6px, 0.8cqw, 10px)',
                  }}
                >
                  <div className="w-full bg-red-600" style={{ height: '30%' }} />
                  <div className="w-full flex-1 flex items-center justify-center">
                    <div className="w-[50%] h-[50%] bg-slate-700" />
                  </div>
                </div>
                <span className="font-hindi text-cyan-200 whitespace-nowrap">{date}</span>
              </div>
              <span className="text-cyan-400/50 flex-shrink-0">|</span>
              <div className="flex items-center gap-1 min-w-0">
                <div 
                  className="relative flex flex-col items-center flex-shrink-0"
                  style={{
                    width: 'clamp(5px, 0.7cqw, 8px)',
                    height: 'clamp(6px, 0.85cqw, 11px)',
                  }}
                >
                  <div 
                    className="w-full rounded-full bg-cyan-400 flex items-center justify-center shadow-xs"
                    style={{ height: '70%' }}
                  >
                    <div className="w-[30%] h-[30%] rounded-full bg-slate-900" />
                  </div>
                </div>
                <span className="font-hindi text-cyan-200 truncate">{category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Red Slanted Accent */}
      <div 
        className="bg-gradient-to-b from-red-600 to-red-700 shadow-lg -mr-0.5 sm:-mr-1 ml-0.5 sm:ml-1 flex-shrink-0"
        style={{ 
          width: 'clamp(3px, 1.1cqw, 14px)',
          height: 'clamp(18px, 6cqw, 68px)',
          transform: 'skewX(-16deg)' 
        }}
      />
    </div>
  );
}

/**
 * ===================================================================
 * 9. TABLETOP SURFACE & UNDER-TABLE CYAN LED (Pure HTML & CSS)
 * ===================================================================
 */
function DeskTabletop({ className = '' }) {
  return (
    <div className={`relative w-full h-full select-none pointer-events-none ${className}`}>
      {/* Curved Glossy Tabletop Top Layer */}
      <div className="relative w-full h-[78%] desk-tabletop-surface overflow-hidden">
        <div className="absolute inset-0 desk-tabletop-sheen pointer-events-none" />
        <div 
          className="absolute top-[8%] left-[12%] right-[12%] h-[24%] rounded-full opacity-65 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 75%)',
          }}
        />
      </div>

      {/* Tabletop 3D Beveled Rim Edge */}
      <div className="relative w-full h-[22%] desk-tabletop-rim overflow-hidden -mt-[1px]">
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white opacity-95" />
      </div>

      {/* Continuous Under-Table Cyan Neon LED Bar */}
      <div className="absolute bottom-[3px] inset-x-[0.5%] h-[5px] desk-tabletop-neon-strip flex items-center">
        <div className="w-full h-[1.5px] bg-white mx-auto opacity-95" />
      </div>
    </div>
  );
}

/**
 * ===================================================================
 * 10. DESK BASE PLATFORM & FLOOR SHADOW (Pure HTML & CSS)
 * ===================================================================
 */
function DeskBase({ className = '' }) {
  return (
    <div className={`relative w-full h-full select-none pointer-events-none ${className}`}>
      {/* Floor Ground Ambient Radial Shadow */}
      <div 
        className="absolute -bottom-[20%] w-[114%] h-[160%] desk-ground-shadow pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Stadium Pill Metallic Bottom Platform */}
      <div 
        className="relative z-10 w-full h-full desk-base-platform flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 inset-x-4 h-[1.5px] bg-white opacity-85 rounded-full" />
        
        {/* Recessed Cyan Neon LED Ground Strip */}
        <div className="w-[94%] h-[4.5px] desk-base-neon-strip flex items-center">
          <div className="w-full h-[1.5px] bg-white opacity-95" />
        </div>
      </div>
    </div>
  );
}

/**
 * ===================================================================
 * 11. EMBEDDED PURE CSS STYLES FOR FUTURISTIC NEWS DESK
 * ===================================================================
 */
const deskStyles = `
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #ffffff;
  color: #111827;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.font-hindi {
  font-family: 'Noto Sans Devanagari', 'Poppins', sans-serif;
}

.font-news-heading {
  font-family: 'Rajdhani', 'Poppins', sans-serif;
}

/* 1. Floor Ground Shadow */
.desk-ground-shadow {
  background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(5, 12, 35, 0.52) 0%, rgba(10, 20, 50, 0.25) 50%, rgba(0, 0, 0, 0) 75%);
  filter: blur(8px);
}

/* 2. Metallic Bottom Base Platform */
.desk-base-platform {
  background: linear-gradient(180deg, #ffffff 0%, #e2e8f0 16%, #cbd5e1 38%, #94a3b8 72%, #64748b 92%, #475569 100%);
  border-radius: 9999px;
  box-shadow: 
    0 10px 22px rgba(0, 0, 0, 0.38),
    inset 0 2px 2px #ffffff,
    inset 0 -2px 3px rgba(0, 0, 0, 0.5);
  border: 1px solid #64748b;
}

/* 3. Base Neon Cyan LED Strip */
.desk-base-neon-strip {
  background: #00f5ff;
  border-radius: 9999px;
  box-shadow: 
    0 0 10px #00f5ff, 
    0 0 22px #00c8ff, 
    0 0 38px #0077ff,
    inset 0 0 3px #ffffff;
}

/* 4. Tapered Desk Body Container */
.desk-tapered-body {
  clip-path: polygon(0% 0%, 100% 0%, 95.8% 100%, 4.2% 100%);
}

/* 5. Left Metallic Pillar / Wing */
.desk-pillar-left {
  background: linear-gradient(90deg, #ffffff 0%, #e2e8f0 25%, #94a3b8 65%, #cbd5e1 88%, #f8fafc 100%);
  border-left: 1px solid #cbd5e1;
  box-shadow: inset -2px 0 5px rgba(0, 0, 0, 0.25);
}

/* 6. Right Metallic Pillar / Wing */
.desk-pillar-right {
  background: linear-gradient(270deg, #ffffff 0%, #e2e8f0 25%, #94a3b8 65%, #cbd5e1 88%, #f8fafc 100%);
  border-right: 1px solid #cbd5e1;
  box-shadow: inset 2px 0 5px rgba(0, 0, 0, 0.25);
}

/* 7. Pillar Neon Contour Line */
.desk-pillar-neon-contour {
  background: #00f5ff;
  box-shadow: 
    0 0 8px #00f5ff, 
    0 0 18px #00b4ff, 
    0 0 28px #0066ff;
}

/* 8. Deep Midnight Navy Screen Backplate */
.desk-navy-screen {
  background: radial-gradient(ellipse at 50% 25%, #051b4e 0%, #03133b 55%, #010a26 100%);
  box-shadow: 
    inset 0 0 35px rgba(0, 0, 0, 0.85),
    inset 0 0 12px rgba(0, 180, 255, 0.2);
  border: 1px solid #08286a;
}

/* 9. Horizontal Screen Cyan LED Bars */
.desk-screen-neon-bar {
  background: #00f5ff;
  box-shadow: 
    0 0 10px #00f5ff, 
    0 0 22px #00b8ff, 
    0 0 36px #0066ff;
}

/* 10. Tabletop Curved Surface */
.desk-tabletop-surface {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 38%, #eef2f7 72%, #dce4ed 88%, #c5d1de 100%);
  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
  box-shadow: 
    inset 0 2px 3px #ffffff,
    inset 0 -2px 5px rgba(0, 0, 0, 0.15);
}

/* 11. Tabletop Ambient Sheen Overlay */
.desk-tabletop-sheen {
  background: radial-gradient(ellipse 50% 80% at 50% 80%, rgba(190, 215, 255, 0.45) 0%, rgba(220, 230, 255, 0.15) 60%, rgba(255, 255, 255, 0) 100%);
  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
}

/* 12. Tabletop Beveled Rim */
.desk-tabletop-rim {
  background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 25%, #94a3b8 70%, #64748b 100%);
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

/* 13. Continuous Under-Table Cyan LED Light Strip */
.desk-tabletop-neon-strip {
  background: #00f5ff;
  border-radius: 9999px;
  box-shadow: 
    0 0 12px #00f5ff, 
    0 0 28px #00c8ff, 
    0 0 50px #0077ff,
    0 4px 18px rgba(0, 240, 255, 0.7);
}

/* 14. 3D Digital Globe Spherical Glow */
.desk-globe-sphere {
  background: radial-gradient(circle at 45% 38%, #00e5ff 0%, #0066ff 38%, #05194d 72%, #010a26 100%);
  box-shadow: 
    0 0 20px #00b4ff, 
    0 0 40px rgba(0, 180, 255, 0.45),
    inset 0 0 15px rgba(0, 240, 255, 0.6);
}

/* Animations */
@keyframes pulseGlow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 0 8px #ef4444, 0 0 18px #ef4444;
  }
  50% {
    opacity: 0.55;
    transform: scale(0.92);
    box-shadow: 0 0 3px #ef4444;
  }
}

.animate-live-dot {
  animation: pulseGlow 1.8s infinite ease-in-out;
}
`;

/**
 * ===================================================================
 * 12. MAIN TABLE DESIGN COMPONENT (Consolidated & Responsive Across All Devices)
 * ===================================================================
 */
function TableDesign({
  headline = "केंद्र सरकार ने नई रोजगार नीति को दी मंजूरी",
  description = "युवाओं के लिए रोजगार के नए अवसर, आने वाले महीनों में लाखों नौकरियां मिलने की उम्मीद।",
  date = "05 नवंबर 2026",
  category = "राष्ट्रीय समाचार",
  breakingNewsText = "BREAKING NEWS",
  liveText = "LIVE UPDATE",
  isLive = true,
  channelHindi = "भारत",
  channelEnglish = "NEWS",
  mugBrandLine1 = "CR",
  mugBrandLine2 = "RealTime",
  thumbnailUrl = "",
  className = "",
}) {
  return (
    <div className={`relative w-full flex items-center justify-center p-1 sm:p-3 md:p-6 lg:p-8 select-none ${className}`}>
      {/* Embedded 3D Desk Stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: deskStyles }} />

      {/* Responsive 2:1 Aspect Ratio Studio Broadcast Canvas with Container Query support */}
      <div 
        className="relative w-full mx-auto select-none overflow-visible"
        style={{ 
          maxWidth: 'min(100%, 1240px, calc((100vh - 1.5rem) * 2))',
          aspectRatio: '2 / 1',
          perspective: '1200px',
          containerType: 'inline-size',
        }}
      >
        
        {/* 1. Chair Behind Desk */}
        <div 
          className="absolute pointer-events-none"
          style={{
            left: '35.16%',
            top: '1.95%',
            width: '27.83%',
            height: '35%',
            zIndex: 10,
          }}
        >
          <ExecutiveChair />
        </div>

        {/* 2. Base Platform */}
        <div 
          className="absolute pointer-events-none"
          style={{
            left: '4.8%',
            bottom: '4.5%',
            width: '90.4%',
            height: '6.5%',
            zIndex: 15,
          }}
        >
          <DeskBase />
        </div>

        {/* 3. Tapered Desk Body Structure */}
        <div 
          className="absolute desk-tapered-body overflow-hidden pointer-events-none"
          style={{
            left: '2.5%',
            top: '44%',
            width: '95%',
            height: '45.2%',
            zIndex: 20,
          }}
        >
          <div className="relative w-full h-full flex">
            {/* Left Metallic Pillar */}
            <div className="relative desk-pillar-left h-full flex-shrink-0" style={{ width: '8.5%' }}>
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-white opacity-85" />
              <div className="absolute top-0 right-0 bottom-0 w-[4px] desk-pillar-neon-contour">
                <div className="w-[1.5px] h-full bg-white mx-auto opacity-90" />
              </div>
            </div>

            {/* Central Recessed Midnight Screen */}
            <div className="relative desk-navy-screen flex-1 h-full flex flex-col justify-between">
              <div className="w-full h-[4.5px] desk-screen-neon-bar flex items-center">
                <div className="w-full h-[1.5px] bg-white opacity-90" />
              </div>
              <div className="w-full h-[4.5px] desk-screen-neon-bar flex items-center">
                <div className="w-full h-[1.5px] bg-white opacity-90" />
              </div>
            </div>

            {/* Right Metallic Pillar */}
            <div className="relative desk-pillar-right h-full flex-shrink-0" style={{ width: '8.5%' }}>
              <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-white opacity-85" />
              <div className="absolute top-0 left-0 bottom-0 w-[4px] desk-pillar-neon-contour">
                <div className="w-[1.5px] h-full bg-white mx-auto opacity-90" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Recessed Screen News Display */}
        <div 
          className="absolute pointer-events-auto"
          style={{
            left: '10.8%',
            top: '46.5%',
            width: '78.4%',
            height: '39%',
            zIndex: 25,
          }}
        >
          <NewsDisplay 
            headline={headline}
            description={description}
            date={date}
            category={category}
            breakingNewsText={breakingNewsText}
            liveText={liveText}
            isLive={isLive}
            channelHindi={channelHindi}
            channelEnglish={channelEnglish}
            thumbnailUrl={thumbnailUrl}
          />
        </div>

        {/* 5. Tabletop Surface & Rim */}
        <div 
          className="absolute pointer-events-none"
          style={{
            left: '0.8%',
            top: '32.5%',
            width: '98.4%',
            height: '13.5%',
            zIndex: 30,
          }}
        >
          <DeskTabletop />
        </div>

        {/* 6. Tabletop Items */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 40 }}>
          {/* Potted Plant */}
          <div 
            className="absolute"
            style={{
              left: '11.72%',
              top: '5.86%',
              width: '13.67%',
              height: '38.28%',
            }}
          >
            <CSSPlant />
          </div>

          {/* Coffee Mug */}
          <div 
            className="absolute"
            style={{
              left: '26.86%',
              top: '23.44%',
              width: '9.28%',
              height: '19.53%',
            }}
          >
            <CSSCoffeeMug 
              brandLine1={mugBrandLine1}
              brandLine2={mugBrandLine2}
            />
          </div>

          {/* Spiral Notebook & Pen */}
          <div 
            className="absolute"
            style={{
              left: '41.02%',
              top: '32.23%',
              width: '16.11%',
              height: '9.77%',
            }}
          >
            <CSSNotebook />
          </div>

          {/* Metallic Silver Laptop */}
          <div 
            className="absolute"
            style={{
              left: '59.57%',
              top: '12.70%',
              width: '26.37%',
              height: '31.45%',
            }}
          >
            <CSSLaptop />
          </div>
        </div>

      </div>
    </div>
  );
}

export { TableDesign, TableDesign as Table };

export const Section07 = () => {
  return (
    <section
      id="section-07"
      className="w-full relative select-none overflow-hidden bg-white border-b border-slate-200"
    >
      <TableDesign />
    </section>
  );
};

export default Section07;
