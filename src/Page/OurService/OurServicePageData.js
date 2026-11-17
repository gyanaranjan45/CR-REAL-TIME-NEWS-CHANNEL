// 36 Kamishibai Production Audit Cards Data
// Page 1: 18 Cards (Injection Molding & Cell A Assembly)
// Page 2: 18 Cards (Broadcast Telemetry & Cell B Testing QA)

export const PAGE_1_CARDS = [
  // --- ROW 1 ---
  {
    id: 'p1-r1-c1',
    row: 1,
    col: 1,
    code: 'INJ-M01',
    title: 'Injection Unit Clamping',
    station: 'Station 01: Press #1',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-left',
    status: 'passed',
    frequency: 'Daily - 1st Shift',
    owner: 'R. Sharma',
    checkpoints: [
      'Verify hydraulic clamping pressure (180 Bar)',
      'Check mold safety interlock limit switch',
      'Inspect tie-bar lubrication film'
    ]
  },
  {
    id: 'p1-r1-c2',
    row: 1,
    col: 2,
    code: 'BAR-M02',
    title: 'Barrel Temp & Nozzle Sealing',
    station: 'Station 02: Zone 1-4',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-qr',
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Every 2 Hours',
    owner: 'P. Patel',
    checkpoints: [
      'Zone 1-4 thermocouple variance < 3°C',
      'Nozzle tip drool check before cycle',
      'Purge shield safety latch functional'
    ]
  },
  {
    id: 'p1-r1-c3',
    row: 1,
    col: 3,
    code: 'MAT-D01',
    title: 'Polymer Moisture Dewpoint',
    station: 'Dryer Hopper A3',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'grid-subtle',
    status: 'passed',
    frequency: 'Per Batch Change',
    owner: 'K. Verma',
    checkpoints: [
      'Desiccant bed dew point <= -42°C',
      'Residence time verified at 4.0 hours',
      'Color masterbatch dosing ratio 2.5%'
    ]
  },
  {
    id: 'p1-r1-c4',
    row: 1,
    col: 4,
    code: 'ROB-X01',
    title: '3-Axis Part Unloader',
    station: 'Robotic Cell #4',
    hasNotch: true,
    hasMarking: true,
    markingType: 'technical-diagram',
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Daily Startup',
    owner: 'A. Joshi',
    checkpoints: [
      'Vacuum cup integrity and suction -75 kPa',
      'End-of-arm gripper clamp tension test',
      'Sprue cutter blade sharpness check'
    ]
  },
  {
    id: 'p1-r1-c5',
    row: 1,
    col: 5,
    code: 'CLR-Q01',
    title: 'Color Spectrophotometry',
    station: 'QA Lab Station',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-seal',
    lines: 'vertical-right',
    status: 'passed',
    frequency: 'Every Shift',
    owner: 'S. Nambiar',
    checkpoints: [
      'CIELAB Delta E < 0.8 against master tile',
      'Gloss level 60° angle: 18.5 +/- 1.5 GU',
      'Surface texture grain consistency'
    ]
  },
  {
    id: 'p1-r1-c6',
    row: 1,
    col: 6,
    code: 'WLD-U01',
    title: 'Ultrasonic Horn Amplitude',
    station: 'Welder #2',
    hasNotch: true,
    hasMarking: true,
    markingType: 'audit-stamp',
    lines: 'horizontal-split',
    status: 'passed',
    frequency: 'Shift Changeover',
    owner: 'M. Khan',
    checkpoints: [
      'Titanium horn frequency tuning: 20 kHz',
      'Pneumatic hold-down pressure 4.2 Bar',
      'Burst energy cutoff window verification'
    ]
  },

  // --- ROW 2 ---
  {
    id: 'p1-r2-c1',
    row: 2,
    col: 1,
    code: 'POK-Y01',
    title: 'Secondary Poka-Yoke Sensor',
    station: 'Assembly Bench 1',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-qr',
    lines: 'vertical-left',
    status: 'passed',
    frequency: '100% Every Part',
    owner: 'V. Rao',
    checkpoints: [
      'Retainer clip presence fiber-optic check',
      'Fail-safe audible horn alarm trip test',
      'Poka-yoke bypass key locked in cabinet'
    ]
  },
  {
    id: 'p1-r2-c2',
    row: 2,
    col: 2,
    code: 'TRQ-C01',
    title: 'Fastener Torque Calibration',
    station: 'Tool Station 05',
    hasNotch: true,
    hasMarking: true,
    markingType: 'technical-diagram',
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Twice Daily',
    owner: 'D. Sen',
    checkpoints: [
      'Digital torque transducer zero-offset test',
      'Target torque 3.8 Nm (+/- 0.2 Nm) verified',
      'Angle detection window 45° to 90°'
    ]
  },
  {
    id: 'p1-r2-c3',
    row: 2,
    col: 3,
    code: 'FLS-D01',
    title: 'Gap & Flushness Verification',
    station: 'Sub-Assembly 03',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'grid-subtle',
    status: 'passed',
    frequency: 'Every 50 Units',
    owner: 'H. Mehta',
    checkpoints: [
      'Feeler gauge gap check: 1.2 mm +/- 0.3 mm',
      'Step-flushness alignment <= 0.5 mm',
      'Edge burr height <= 0.05 mm'
    ]
  },
  {
    id: 'p1-r2-c4',
    row: 2,
    col: 4,
    code: 'HMP-F01',
    title: 'Hot Melt Adhesive Bonding',
    station: 'Lamination Cell',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Shift Startup',
    owner: 'T. Ghosh',
    checkpoints: [
      'PUR glue tank temperature 135°C',
      'Nozzle bead width 2.0 mm continuous',
      'Open time peel test within 45 seconds'
    ]
  },
  {
    id: 'p1-r2-c5',
    row: 2,
    col: 5,
    code: 'AIR-V01',
    title: 'Main Line Pneumatic Regulators',
    station: 'Manifold M-02',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-seal',
    lines: 'vertical-right',
    status: 'passed',
    frequency: 'Weekly PM',
    owner: 'G. Nair',
    checkpoints: [
      'Regulated pressure 6.2 Bar steady',
      'Auto-drain water trap bowl empty',
      'Air filter differential indicator in green'
    ]
  },
  {
    id: 'p1-r2-c6',
    row: 2,
    col: 6,
    code: 'LGT-I01',
    title: 'Lux Level Inspection Booth',
    station: 'Final Visual Gate',
    hasNotch: true,
    hasMarking: true,
    markingType: 'audit-stamp',
    lines: 'horizontal-split',
    status: 'passed',
    frequency: 'Monthly Audit',
    owner: 'C. Kulkarni',
    checkpoints: [
      'Working plane illuminance >= 1200 Lux',
      'D65 daylight simulation bulbs checked',
      'Matte neutral-grey background non-reflective'
    ]
  },

  // --- ROW 3 ---
  {
    id: 'p1-r3-c1',
    row: 3,
    col: 1,
    code: 'CLP-R01',
    title: 'Mold Cooling Water Temp',
    station: 'TCU Unit #1 & #2',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-left',
    status: 'passed',
    frequency: 'Hourly Log',
    owner: 'S. Jadhav',
    checkpoints: [
      'Moving half supply temp: 35°C +/- 2°C',
      'Fixed half supply temp: 45°C +/- 2°C',
      'Flow rate minimum 45 Liters/min'
    ]
  },
  {
    id: 'p1-r3-c2',
    row: 3,
    col: 2,
    code: 'HYD-O01',
    title: 'Hydraulic Oil Cleanliness',
    station: 'Central Sump',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-seal',
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Bi-Weekly',
    owner: 'R. Bhat',
    checkpoints: [
      'ISO 4406 particle count <= 16/14/11',
      'Oil temperature operating window 42-48°C',
      'Suction strainer differential clean'
    ]
  },
  {
    id: 'p1-r3-c3',
    row: 3,
    col: 3,
    code: 'CMM-A01',
    title: 'Active CMM Dimensional Audit',
    station: 'Metrology Lab',
    hasNotch: true,
    hasWhiteTag: false,
    hasMarking: true,
    markingType: 'white-tag-inserted',
    lines: 'grid-subtle',
    status: 'auditing',
    frequency: 'Active Audit Lot',
    owner: 'Chief Inspector',
    checkpoints: [
      'First-off piece 3D coordinate verification',
      'Datum A-B-C true position within 0.25 mm',
      'GD&T profile tolerance report signed'
    ]
  },
  {
    id: 'p1-r3-c4',
    row: 3,
    col: 4,
    code: 'PKG-D01',
    title: 'Returnable Packaging Dunnage',
    station: 'Pack Station 02',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Every Pallet',
    owner: 'L. Tiwari',
    checkpoints: [
      'Antistatic bubble liner condition checked',
      'Barcoded shipping label scan pass',
      'Pallet stack lock pins engaged'
    ]
  },
  {
    id: 'p1-r3-c5',
    row: 3,
    col: 5,
    code: '5S-F01',
    title: 'Floor Markings & 5S Standard',
    station: 'Cell Perimeter',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'horizontal-split',
    status: 'passed',
    frequency: 'End of Shift',
    owner: 'M. Fernandes',
    checkpoints: [
      'Yellow perimeter demarcation clean and visible',
      'WIP containers located inside designated lines',
      'Zero oil or granulate spill on floor'
    ]
  },
  {
    id: 'p1-r3-c6',
    row: 3,
    col: 6,
    code: 'LOT-R01',
    title: 'Final Shift Lot Sign-off',
    station: 'QA Gate 03',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-qr',
    lines: 'horizontal-split',
    status: 'passed',
    frequency: 'Shift Completion',
    owner: 'Shift Manager',
    checkpoints: [
      'All 18 station Kamishibai cards verified',
      'Non-conformance bin empty and audited',
      'Daily production tally signed into ERP'
    ]
  }
];

export const PAGE_2_CARDS = [
  // --- ROW 1 ---
  {
    id: 'p2-r1-c1',
    row: 1,
    col: 1,
    code: 'SMT-B01',
    title: 'Surface Mount PCB Inspection',
    station: 'SMT Line 01',
    hasNotch: true,
    hasMarking: true,
    markingType: 'technical-diagram',
    lines: 'vertical-left',
    status: 'passed',
    frequency: 'Continuous AOI',
    owner: 'E. Becker',
    checkpoints: [
      'Solder paste volume measurement 100%',
      'Component coplanarity within 0.05 mm',
      'Tombstone & polarity orientation check'
    ]
  },
  {
    id: 'p2-r1-c2',
    row: 1,
    col: 2,
    code: 'OPT-C02',
    title: 'Optical Vision Lens Alignment',
    station: 'Vision Cell #2',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Every 4 Hours',
    owner: 'A. Morita',
    checkpoints: [
      'Telecentric lens focal length calibration',
      'Coaxial ring illuminance 4500 Lux',
      'Master calibration target pixel test'
    ]
  },
  {
    id: 'p2-r1-c3',
    row: 1,
    col: 3,
    code: 'ESD-G03',
    title: 'Electrostatic Grounding Integrity',
    station: 'ESD Checkpoint',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-seal',
    lines: 'grid-subtle',
    status: 'passed',
    frequency: 'Shift Startup',
    owner: 'J. Dupont',
    checkpoints: [
      'Wrist strap resistance 750k - 10M Ohm',
      'Floor mat point-to-ground < 1.0 x 10^9',
      'Ionizer fan balance within +/- 15 Volts'
    ]
  },
  {
    id: 'p2-r1-c4',
    row: 1,
    col: 4,
    code: 'CNC-P04',
    title: 'CNC Precision Edge Trimming',
    station: 'Milling Station 4',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-qr',
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Every 25 Units',
    owner: 'M. Weber',
    checkpoints: [
      'Spindle runout less than 0.003 mm',
      'Diamond tool wear radius compensation',
      'Vacuum fixture hold-down pressure 90 kPa'
    ]
  },
  {
    id: 'p2-r1-c5',
    row: 1,
    col: 5,
    code: 'COA-T05',
    title: 'Anti-Glare Thermal Coating',
    station: 'Curing Oven B',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-right',
    status: 'passed',
    frequency: 'Hourly Batch Log',
    owner: 'S. Al-Mansoor',
    checkpoints: [
      'UV cure energy dosage >= 1200 mJ/cm2',
      'Cross-hatch adhesion ASTM Class 5B',
      'Specular reflectance <= 0.6% at 550nm'
    ]
  },
  {
    id: 'p2-r1-c6',
    row: 1,
    col: 6,
    code: 'LAS-M06',
    title: 'Fiber Laser Serial Marking',
    station: 'Laser Cell 06',
    hasNotch: true,
    hasMarking: true,
    markingType: 'audit-stamp',
    lines: 'horizontal-split',
    status: 'passed',
    frequency: '100% Tracking',
    owner: 'K. Takahashi',
    checkpoints: [
      '2D DataMatrix grade A/B verification',
      'Laser marking depth 25 +/- 5 microns',
      'Contrast ratio > 80% on dark substrate'
    ]
  },

  // --- ROW 2 ---
  {
    id: 'p2-r2-c1',
    row: 2,
    col: 1,
    code: 'HMI-T07',
    title: 'Touchscreen Response Calibration',
    station: 'Test Rig 01',
    hasNotch: true,
    hasMarking: true,
    markingType: 'technical-diagram',
    lines: 'vertical-left',
    status: 'passed',
    frequency: 'Shift Sampling',
    owner: 'L. Chen',
    checkpoints: [
      'Multi-touch 10-point simultaneous track',
      'Latency response time <= 12 ms',
      'Dielectric breakdown isolation test 1500V'
    ]
  },
  {
    id: 'p2-r2-c2',
    row: 2,
    col: 2,
    code: 'AUD-S08',
    title: 'Acoustic Audio Frequency Test',
    station: 'Anechoic Chamber',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-seal',
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Every 50 Units',
    owner: 'F. Rossi',
    checkpoints: [
      'Total harmonic distortion THD < 0.3%',
      'Frequency curve 20Hz - 20kHz +/- 1dB',
      'Chamber background noise floor < 18 dBA'
    ]
  },
  {
    id: 'p2-r2-c3',
    row: 2,
    col: 3,
    code: 'RF-W09',
    title: 'Wireless Transceiver Screening',
    station: 'RF Shield Box',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'grid-subtle',
    status: 'passed',
    frequency: '100% Automated',
    owner: 'D. Novak',
    checkpoints: [
      'TX Power output 19.5 dBm +/- 0.5 dBm',
      'EVM error vector magnitude < 2.5%',
      'Receiver sensitivity better than -96 dBm'
    ]
  },
  {
    id: 'p2-r2-c4',
    row: 2,
    col: 4,
    code: 'ENV-C10',
    title: 'Climatic Chamber Thermal Cycle',
    station: 'Chamber -40°C/+85°C',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Batch Reliability',
    owner: 'P. Lindqvist',
    checkpoints: [
      'Thermal ramp rate 5°C/min strictly held',
      'Relative humidity 85% at +85°C soak',
      'Live power-cycle diagnostics zero error'
    ]
  },
  {
    id: 'p2-r2-c5',
    row: 2,
    col: 5,
    code: 'VIB-T11',
    title: 'Random Vibration Stress Screen',
    station: 'Shaker Table #3',
    hasNotch: true,
    hasMarking: true,
    markingType: 'technical-diagram',
    lines: 'vertical-right',
    status: 'passed',
    frequency: 'Lot Validation',
    owner: 'R. Kowalski',
    checkpoints: [
      'PSD profile 0.04 g^2/Hz (20-1000 Hz)',
      'Fixture resonance test check pass',
      'Post-vibe optical micro-crack inspection'
    ]
  },
  {
    id: 'p2-r2-c6',
    row: 2,
    col: 6,
    code: 'EMC-R12',
    title: 'EMC Radiation Shield Chamber',
    station: 'EMC Lab Gate',
    hasNotch: true,
    hasMarking: true,
    markingType: 'audit-stamp',
    lines: 'horizontal-split',
    status: 'passed',
    frequency: 'Daily Audit',
    owner: 'H. Berg',
    checkpoints: [
      'Radiated emission CISPR 25 Class 5 pass',
      'Ferrite core placement verification',
      'Chamber door RF finger seal cleaned'
    ]
  },

  // --- ROW 3 ---
  {
    id: 'p2-r3-c1',
    row: 3,
    col: 1,
    code: 'BRC-L13',
    title: 'Live Broadcast Telemetry Feed',
    station: 'CR Studio Link',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-left',
    status: 'passed',
    frequency: 'Continuous Live',
    owner: 'Broadcast Engineer',
    checkpoints: [
      'SDI 12G signal jitter < 0.2 UI',
      'SMPTE 2110 IP video stream sync',
      'Audio-to-video lip sync delay < 5 ms'
    ]
  },
  {
    id: 'p2-r3-c2',
    row: 3,
    col: 2,
    code: 'NET-S14',
    title: 'Fiber Uplink Redundancy',
    station: 'Server Rack 02',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-qr',
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Auto Failover',
    owner: 'NetOps Lead',
    checkpoints: [
      '100GbE primary/secondary link live',
      'Optical attenuation loss < 0.35 dB/km',
      'BGP route convergence time < 50 ms'
    ]
  },
  {
    id: 'p2-r3-c3',
    row: 3,
    col: 3,
    code: 'ISO-Q15',
    title: 'Certified Production Release',
    station: 'Quality Directorate',
    hasNotch: true,
    hasWhiteTag: false,
    hasMarking: true,
    markingType: 'white-tag-inserted',
    lines: 'grid-subtle',
    status: 'auditing',
    frequency: 'Certified Lot',
    owner: 'VP Quality',
    checkpoints: [
      'IATF 16949 / ISO 9001 lot certificate',
      'End-of-line electrical safe-to-ship',
      'Digital blockchain production pedigree'
    ]
  },
  {
    id: 'p2-r3-c4',
    row: 3,
    col: 4,
    code: 'SAF-E16',
    title: 'Emergency Stop Safety Loop',
    station: 'Safety Circuit A',
    hasNotch: true,
    hasMarking: false,
    markingType: null,
    lines: 'vertical-split',
    status: 'passed',
    frequency: 'Shift Startup',
    owner: 'Plant Safety Officer',
    checkpoints: [
      'Dual-channel safety relay trip verified',
      'Light curtain mute boundary test',
      'Pneumatic dump valve exhaust < 100 ms'
    ]
  },
  {
    id: 'p2-r3-c5',
    row: 3,
    col: 5,
    code: 'BAR-P17',
    title: 'Pallet Dispatch Barcode Scan',
    station: 'Dispatch Dock 01',
    hasNotch: true,
    hasMarking: true,
    markingType: 'stamp-seal',
    lines: 'horizontal-split',
    status: 'passed',
    frequency: 'Every Shipment',
    owner: 'Logistics Supervisor',
    checkpoints: [
      'GS1-128 shipping container code check',
      'RFID transponder payload verified',
      'Tamper-evident seal number registered'
    ]
  },
  {
    id: 'p2-r3-c6',
    row: 3,
    col: 6,
    code: 'MGT-S18',
    title: 'Operations Room Sign-Off',
    station: 'Plant Ops Room',
    hasNotch: true,
    hasMarking: true,
    markingType: 'audit-stamp',
    lines: 'horizontal-split',
    status: 'passed',
    frequency: 'Shift Handover',
    owner: 'General Manager',
    checkpoints: [
      'Real-time news broadcast tally verified',
      'Cell B cycle efficiency OEE >= 89.5%',
      'ERP production closeout sign-off complete'
    ]
  }
];

export const ALL_36_CARDS = [...PAGE_1_CARDS, ...PAGE_2_CARDS];
export const INITIAL_CARDS = PAGE_1_CARDS;

export default ALL_36_CARDS;
