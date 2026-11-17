export const boxOffice = [
  { rank: '#1', title: 'Vanguard: The Himalayan Siege', weekend: '₹142.5 Cr', status: 'BLOCKBUSTER' },
  { rank: '#2', title: 'Echoes of Konark', weekend: '₹68.2 Cr', status: 'SUPER HIT' },
  { rank: '#3', title: 'Cyber City 2099', weekend: '₹41.0 Cr', status: 'STEADY' },
];

export const reviews = [
  {
    id: 1,
    badge: "CRITIC'S PICK",
    title: 'A Cinematic Masterpiece of Historical Scale & Emotional Depth',
    movie: 'Vanguard: The Himalayan Siege',
    rating: 4.5,
    verdict: 'Spectacular aerial cinematography paired with authentic military realism. A benchmark for Indian war epics.',
    author: 'Karan Mehra, Senior Film Critic',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    badge: 'FESTIVAL SPECIAL',
    title: 'Odisha Indie Drama Sweeps International Film Festival With Standing Ovation',
    movie: 'Echoes of Konark',
    rating: 4.8,
    verdict: 'Poetic storytelling that weaves centuries of Odissi heritage with modern socio-environmental narratives.',
    author: 'Ananya Roy, Cinema Desk',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
  },
];

export const ottReleases = [
  { platform: 'NETFLIX', show: 'The Delhi Intelligence Files S2', genre: 'Espionage Thriller', date: 'Streaming Now' },
  { platform: 'PRIME VIDEO', show: 'Mirzapur: Legacy of the Throne', genre: 'Crime Drama', date: 'Friday 8 PM' },
  { platform: 'HOTSTAR', show: 'The National Investigation Desk', genre: 'Docuseries', date: 'New Episodes Weekly' },
];



// --- Merged from AssociatedFiles/DataAnalyticsBusinessIntelligenceServices.js ---
// ============================================================================
// THE GLOBAL BULLETIN — DAILY NEWSPAPER DATA
// Multi-page authentic newspaper broadsheet editions
// ============================================================================

export const newspaperEditions = [
  // PAGE 1: FRONT PAGE (Exact reproduction of reference newspaper)
  {
    pageNumber: 1,
    totalPages: 8,
    date: 'TUE, NOV 5, 2024',
    volume: 'VOL. 12, NO. 3,642',
    editionTag: 'INTERNATIONAL EDITION',
    breakingNews: 'Major relief operation underway after powerful earthquake hits coastal region',
    leadStory: {
      headline: 'Relief Efforts Intensify After Coastal Earthquake',
      subhead: 'Rescue teams, medical units, and emergency supplies rushed to affected areas as officials assess the damage and search for survivors.',
      byline: 'By Elaine Carter',
      bylineTitle: 'Global Bulletin Staff',
      dateline: 'RIVERMERE, Nov. 5 —',
      col1: 'A major relief operation intensified Tuesday after a powerful earthquake struck a coastal region, leaving widespread damage, disrupting essential services, and prompting a large-scale search for survivors.\n\nAuthorities said rescue teams are working around the clock to reach isolated communities,',
      col2: 'while medical units and emergency supplies are being airlifted to the hardest-hit areas.\n\n“Our priority is to save lives and get help to those who need it most,” a disaster response official said, adding that damage assessments are ongoing.\n\nContinued on Page 4 ▶',
      image: '/images/newspaper-rescue.jpg',
      caption: 'Rescue workers search through the rubble of a collapsed building in the earthquake-affected coastal region on Tuesday.',
      credit: 'REUTERS/FILE PHOTO',
      jumpPage: 4
    },
    subStories: [
      {
        section: 'TECHNOLOGY',
        headline: 'Next-Gen Satellite Launches to Expand Global Connectivity',
        text: 'A new generation satellite launched Tuesday, aiming to deliver faster and more reliable internet access to underserved regions around the world.',
        image: '/images/newspaper-satellite.jpg',
        page: 5
      },
      {
        section: 'POLITICS',
        headline: 'World Leaders Meet to Advance Climate Action',
        text: 'A high-level summit brought together global leaders to accelerate clean energy goals and reduce emissions ahead of next year’s climate review.',
        image: '/images/newspaper-politics.jpg',
        page: 3
      }
    ],
    newsBriefs: [
      {
        headline: 'Leaders Call for Stronger Disaster Preparedness',
        text: 'Global leaders urged greater investment in early warning systems and resilience planning.',
        page: 2
      },
      {
        headline: 'Markets Steady Amid Renewed Economic Optimism',
        text: 'Global markets were largely steady Tuesday as fresh data fueled optimism about a sustained recovery.',
        page: 6
      },
      {
        headline: 'New Space Mission Reaches Key Milestone',
        text: 'A landmark space mission successfully completed a critical maneuver, bringing it closer to its main objectives.',
        page: 7
      },
      {
        headline: 'Health Officials Urge Caution as Seasonal Flu Cases Rise',
        text: 'Health authorities advised the public to get vaccinated and take basic precautions as flu cases increase in several regions.',
        page: 8
      }
    ]
  },

  // PAGE 2: DISASTER PREPAREDNESS & POLICY
  {
    pageNumber: 2,
    totalPages: 8,
    date: 'TUE, NOV 5, 2024',
    volume: 'VOL. 12, NO. 3,642',
    editionTag: 'DISASTER POLICY & RESILIENCE',
    breakingNews: 'Summit delegates urge $15B early-warning fund for vulnerable coastal settlements',
    leadStory: {
      headline: 'Leaders Call for Stronger Global Disaster Preparedness',
      subhead: 'International ministers gather to establish unified emergency logistics corridors and mandate seismic retrofitting standards.',
      byline: 'By Marcus Vance',
      bylineTitle: 'Senior International Correspondent',
      dateline: 'GENEVA —',
      col1: 'Global leaders convened in Geneva on Tuesday to demand immediate, multilateral funding for early-warning seismic detectors and reinforced coastal seawalls.\n\nHighlighting recent coastal tremors, delegations emphasized that preventative infrastructure investment saves ten times the cost of post-crisis emergency recovery.',
      col2: '“We cannot afford complacency when nature strikes,” declared the summit chair. The proposal calls for automated satellite triggers to alert municipal sirens within seconds of deep-sea tectonic shifts.\n\nCross-border coordination pacts are expected to be ratified before Friday’s closing session.',
      image: '/images/newspaper-rescue.jpg',
      caption: 'Delegates inspect scale engineering models for modular seismic shelter pods.',
      credit: 'ASSOCIATED PRESS',
      jumpPage: 4
    },
    subStories: [
      {
        section: 'INFRASTRUCTURE',
        headline: 'Seismic Building Codes Enforced Across Ports',
        text: 'Major maritime hubs across the Pacific rim announced mandatory retrofitting of container docks to withstand magnitude 8.0 quakes.',
        image: '/images/newspaper-satellite.jpg',
        page: 4
      },
      {
        section: 'LOGISTICS',
        headline: 'Rapid Cargo Airlifts Pre-Positioned Near Quake Zones',
        text: 'Humanitarian logistics networks have staged 40,000 emergency shelter kits at regional airfields to deploy within 3 hours.',
        image: '/images/newspaper-politics.jpg',
        page: 1
      }
    ],
    newsBriefs: [
      {
        headline: 'Tsunami Early Warning Network Upgraded',
        text: 'Subsea fiber-optic acoustic sensors completed testing along continental fault lines.',
        page: 1
      },
      {
        headline: 'Emergency Medical Corps Deployed',
        text: 'Mobile surgical teams mobilized from four neighboring provinces.',
        page: 4
      },
      {
        headline: 'Telecom Backups Restored Via Satellite',
        text: 'Emergency broadband terminals restore municipal coordination links.',
        page: 5
      },
      {
        headline: 'Clean Water Purification Units Arrive',
        text: 'Solar-powered filtration systems dispatched to three coastal hamlets.',
        page: 8
      }
    ]
  },

  // PAGE 3: POLITICS & CLIMATE ACTION
  {
    pageNumber: 3,
    totalPages: 8,
    date: 'TUE, NOV 5, 2024',
    volume: 'VOL. 12, NO. 3,642',
    editionTag: 'GLOBAL POLITICS & CLIMATE',
    breakingNews: 'World Leaders Sign Landmark Multilateral Clean Energy Accord in Brussels',
    leadStory: {
      headline: 'World Leaders Meet to Advance Historic Climate Action',
      subhead: 'High-level summit brings together sixty heads of state to accelerate zero-emission mandates and clean power investments.',
      byline: 'By Julian Mercier',
      bylineTitle: 'Chief Diplomatic Editor',
      dateline: 'BRUSSELS —',
      col1: 'Heads of state and international climate envoys opened high-stakes negotiations in Brussels on Tuesday, pledging renewed commitments to halve industrial greenhouse emissions before 2035.\n\nThe multilateral forum agreed on binding renewable electricity mandates, tax credits for solar grids, and a strict phase-out timetable for coal generators.',
      col2: '“The window for measured incrementalism has closed,” European leadership stated during the plenary press conference. “Decisive investment in next-generation clean tech is now our collective economic imperative.”\n\nFinancial accords pledging $100B in green transition grants were finalized in closed-door sessions.',
      image: '/images/newspaper-politics.jpg',
      caption: 'Heads of state address international press during joint ministerial briefing on clean energy quotas.',
      credit: 'EPA/EUROPEAN PRESSPHOTO',
      jumpPage: 6
    },
    subStories: [
      {
        section: 'ENERGY POLICY',
        headline: 'Offshore Wind Grid Achieves Record Output',
        text: 'Northern maritime wind farms supplied 68% of regional industrial power during sustained seasonal gales.',
        image: '/images/newspaper-satellite.jpg',
        page: 6
      },
      {
        section: 'DIPLOMACY',
        headline: 'Bilateral Carbon Border Tariffs Ratified',
        text: 'New trade agreements will equalize import duties on steel and cement based on audited carbon intensity.',
        image: '/images/newspaper-politics.jpg',
        page: 6
      }
    ],
    newsBriefs: [
      {
        headline: 'Electric Grid Interconnectors Expand',
        text: 'Cross-border high-voltage direct current lines connect three regional power grids.',
        page: 5
      },
      {
        headline: 'Carbon Capture Project Breaks Ground',
        text: 'Commercial facility aims to sequester 2 million tons of industrial CO2 annually.',
        page: 5
      },
      {
        headline: 'Hydrogen Transit Fleet Rolls Out',
        text: 'Metropolitan rail authority commissions first zero-emission passenger trains.',
        page: 7
      },
      {
        headline: 'Biodiversity Reserve Protection Doubled',
        text: 'Treaty expands protected coastal marine sanctuaries across 12,000 square miles.',
        page: 1
      }
    ]
  },

  // PAGE 4: EARTHQUAKE IN-DEPTH (Continued from Page 1)
  {
    pageNumber: 4,
    totalPages: 8,
    date: 'TUE, NOV 5, 2024',
    volume: 'VOL. 12, NO. 3,642',
    editionTag: 'SPECIAL REPORT: RIVERMERE QUAKE',
    breakingNews: 'Search and rescue teams work under spotlights through the night as 12 survivors pulled from rubble',
    leadStory: {
      headline: 'Inside Rivermere: Rescue Operations Brave Aftershocks',
      subhead: 'Specialized canine search units, heavy crane operators, and field trauma medics battle difficult terrain in coastal towns.',
      byline: 'By Elaine Carter & David Chen',
      bylineTitle: 'Reporting from the Rivermere Disaster Zone',
      dateline: 'RIVERMERE HARBOR —',
      col1: 'Under the glare of portable generator floodlights, search and rescue crews worked relentlessly through the night in the coastal municipality of Rivermere.\n\nEarlier Tuesday, a magnitude 7.1 earthquake struck just 18 miles offshore, triggering severe structural collapse along harbor commercial streets and severed electrical feeds.',
      col2: '“Every minute counts,” said Captain Luis Morales of the Urban Search and Rescue Task Force. By midnight, twelve individuals had been successfully extracted alive from a collapsed municipal center.\n\nEmergency triage clinics established on open soccer fields have treated over 300 residents.',
      image: '/images/newspaper-rescue.jpg',
      caption: 'Emergency personnel navigate heavy concrete debris with specialized thermal imaging cameras.',
      credit: 'REUTERS/POOL',
      jumpPage: 1
    },
    subStories: [
      {
        section: 'CIVIC RELIEF',
        headline: 'Temporary Housing Villages Erected in Hours',
        text: 'Engineers deployed prefabricated insulated shelters to house 1,500 displaced families safely.',
        image: '/images/newspaper-rescue.jpg',
        page: 1
      },
      {
        section: 'TELECOMS',
        headline: 'Drone Mesh Networks Restore 911 Service',
        text: 'Autonomous tethered drones beaming cellular connectivity maintain links for emergency first responders.',
        image: '/images/newspaper-satellite.jpg',
        page: 5
      }
    ],
    newsBriefs: [
      {
        headline: 'Harbor Seawalls Withstand Secondary Wave',
        text: 'Engineered surge barriers prevented major inundation of low-lying downtown blocks.',
        page: 1
      },
      {
        headline: 'Blood Donation Drives Exceed Targets',
        text: 'Regional blood banks report lines of volunteer donors stretching three city blocks.',
        page: 8
      },
      {
        headline: 'Bridge Safety Inspections Underway',
        text: 'Department of Transportation conducts ultrasound stress tests on main coastal viaducts.',
        page: 2
      },
      {
        headline: 'Clean Drinking Water Tankers Deployed',
        text: 'Twenty municipal bulk water tankers supply distribution checkpoints across the district.',
        page: 8
      }
    ]
  },

  // PAGE 5: TECHNOLOGY & SATELLITE CONNECTIVITY
  {
    pageNumber: 5,
    totalPages: 8,
    date: 'TUE, NOV 5, 2024',
    volume: 'VOL. 12, NO. 3,642',
    editionTag: 'TECHNOLOGY & TELECOMS',
    breakingNews: 'Falcon 9 delivers next-generation broadband constellation into polar orbit with zero orbital anomalies',
    leadStory: {
      headline: 'Next-Gen Satellite Launches to Expand Global Connectivity',
      subhead: 'Advanced phased-array satellite network delivers multi-gigabit broadband speeds to remote maritime, aviation, and rural corridors.',
      byline: 'By Dr. Aris Thorne',
      bylineTitle: 'Aerospace & Telecoms Correspondent',
      dateline: 'CAPE CANAVERAL —',
      col1: 'At 05:42 EST on Tuesday, a high-capacity communications array blasted into low Earth orbit aboard an orbital rocket, initiating deployment of the Next-Gen Global Link network.\n\nEquipped with optical laser cross-links, the spacecraft can route data between satellites in vacuum without touching ground stations, slashing latency.',
      col2: '“This launch fundamentally closes the digital divide for schools, field clinics, and isolated communities,” said the mission director. Commercial bandwidth will go live across polar zones within ninety days.\n\nEarly downlink telemetry confirms solar arrays deployed flawlessly.',
      image: '/images/newspaper-satellite.jpg',
      caption: 'The primary tracking dish at the coastal receiving station tracks the ascending orbital payload.',
      credit: 'NASA/SPACEX WIRE',
      jumpPage: 7
    },
    subStories: [
      {
        section: 'QUANTUM TECH',
        headline: 'Quantum Key Encryption Tested in Space',
        text: 'Researchers verified unbreakable quantum cryptographic keys beamed between satellite and terrestrial receivers.',
        image: '/images/newspaper-satellite.jpg',
        page: 7
      },
      {
        section: 'SILICON DESIGN',
        headline: '2-Nanometer Chip Prototypes Enter Foundry',
        text: 'Semiconductor manufacturers demonstrate functioning 2nm logic dies with 30% reduction in power draw.',
        image: '/images/newspaper-satellite.jpg',
        page: 6
      }
    ],
    newsBriefs: [
      {
        headline: 'Subsea Data Cables Expand Transatlantic Route',
        text: 'New 400-terabit transatlantic fiber optic cable achieves first commercial lighting.',
        page: 6
      },
      {
        headline: 'Open-Source AI Framework Released',
        text: 'Consortium of university labs publishes fully auditable foundation model.',
        page: 3
      },
      {
        headline: 'Cybersecurity Alert on Legacy Protocols',
        text: 'Enterprise networks urged to sunset unauthenticated telnet and SNMP configurations.',
        page: 2
      },
      {
        headline: 'Battery Breakthrough in Solid-State Cells',
        text: 'New ceramic separator prevents dendrite formation across 1,000 rapid charge cycles.',
        page: 3
      }
    ]
  },

  // PAGE 6: BUSINESS & MARKETS
  {
    pageNumber: 6,
    totalPages: 8,
    date: 'TUE, NOV 5, 2024',
    volume: 'VOL. 12, NO. 3,642',
    editionTag: 'BUSINESS & GLOBAL FINANCE',
    breakingNews: 'Global equities rally as inflation data stabilizes and manufacturing indices reach 18-month highs',
    leadStory: {
      headline: 'Markets Steady Amid Renewed Economic Optimism',
      subhead: 'Cooling inflation prints and surging industrial productivity drive broad-based rallies across European, Asian, and American bourses.',
      byline: 'By Victoria Sterling',
      bylineTitle: 'Chief Financial Analyst',
      dateline: 'NEW YORK / LONDON —',
      col1: 'Global financial bourses traded with robust momentum on Tuesday, propelled by resilient industrial orders, easing logistics costs, and central bank commentary suggesting rate cuts could arrive earlier than anticipated.\n\nThe benchmark S&P and FTSE indices registered gains across eight consecutive trading sessions.',
      col2: '“Corporate earnings across capital goods and technology have outperformed even optimistic estimates,” noted a senior strategist at Morgan Stanley. Strong job creation figures confirmed that the global economy is heading for a soft landing.\n\nBond yields retreated to year-to-date lows as volatility gauges eased.',
      image: '/images/newspaper-politics.jpg',
      caption: 'Traders on the floor of the stock exchange review intraday earnings releases during afternoon rally.',
      credit: 'BLOOMBERG FINANCIAL',
      jumpPage: 1
    },
    subStories: [
      {
        section: 'VENTURE CAPITAL',
        headline: 'Enterprise AI Startups Secure $8.4B in Q3',
        text: 'Venture funding rebounded sharply as institutional investors backed practical automation and infrastructure platforms.',
        image: '/images/newspaper-politics.jpg',
        page: 5
      },
      {
        section: 'COMMODITIES',
        headline: 'Crude Oil Stabilizes Near $74 Per Barrel',
        text: 'Balanced inventories and record renewable power generation kept global energy prices predictable.',
        image: '/images/newspaper-satellite.jpg',
        page: 3
      }
    ],
    newsBriefs: [
      {
        headline: 'Retail Spending Outperforms Holiday Forecasts',
        text: 'Early consumer spending trends show 4.2% annual growth across core retail sectors.',
        page: 1
      },
      {
        headline: 'Central Bank Reaffirms Price Stability Goal',
        text: 'Governing board minutes highlight disciplined monetary stance and banking system safety.',
        page: 3
      },
      {
        headline: 'Supply Chain Index Hits Pre-Pandemic Norms',
        text: 'Global freight transit times and container shipping spot rates normalize completely.',
        page: 1
      },
      {
        headline: 'Cross-Border Mergers Rebound in Q4',
        text: 'Clean energy and software sectors announce three blockbuster acquisition transactions.',
        page: 3
      }
    ]
  },

  // PAGE 7: SPACE & SCIENTIFIC DISCOVERY
  {
    pageNumber: 7,
    totalPages: 8,
    date: 'TUE, NOV 5, 2024',
    volume: 'VOL. 12, NO. 3,642',
    editionTag: 'SCIENCE & SPACE EXPLORATION',
    breakingNews: 'Interplanetary probe successfully completes deep gravitational assist flyby around Jupiter',
    leadStory: {
      headline: 'New Space Mission Reaches Critical Milestone',
      subhead: 'Deep-space exploratory vessel executes orbital trajectory maneuver, transmitting crystal-clear telemetry from the outer solar system.',
      byline: 'By Dr. Neil Abernathy',
      bylineTitle: 'Space Sciences Editor',
      dateline: 'PASADENA, Calif. —',
      col1: 'Mission controllers at the Jet Propulsion Laboratory erupted in cheers Tuesday as the Odyssey-9 deep space probe confirmed completion of its high-precision trajectory correction burn.\n\nTraveling at 38,000 miles per hour, the robotic spacecraft passed within 2,400 miles of its target asteroid belt waypoint.',
      col2: 'High-resolution spectrometer data received on Earth revealed rich surface concentrations of rare industrial silicates and hydrated subsurface minerals.\n\n“This data reframes our understanding of planetary genesis,” remarked lead principal investigator Dr. Sarah Kim.\n\nThe probe now begins its three-year journey to the Jovian moons.',
      image: '/images/newspaper-satellite.jpg',
      caption: 'Spectrometric radar mosaic constructed from telemetry downlinks received at Goldstone tracking station.',
      credit: 'NASA/JPL-CALTECH',
      jumpPage: 5
    },
    subStories: [
      {
        section: 'ASTRONOMY',
        headline: 'Webb Telescope Identifies Earliest Supermassive Galaxy',
        text: 'Astronomers peer back 13.2 billion years to discover fully formed stellar core defying cosmological expectations.',
        image: '/images/newspaper-satellite.jpg',
        page: 5
      },
      {
        section: 'LUNAR EXPLORATION',
        headline: 'Artemis Surface Rover Completes Mobility Trials',
        text: 'Autonomous lunar prospecting vehicle tests cryogenic regolith drills in simulated lunar chamber.',
        image: '/images/newspaper-satellite.jpg',
        page: 5
      }
    ],
    newsBriefs: [
      {
        headline: 'Fusion Reactor Maintains Sustained Plasma Arc',
        text: 'Magnetic confinement tokamak achieves 8-minute stable plasma duration at 100M°C.',
        page: 3
      },
      {
        headline: 'Neutrino Detector Deep Beneath Antarctic Ice',
        text: 'Under-ice sensor array detects ultra-high-energy galactic cosmic ray sources.',
        page: 5
      },
      {
        headline: 'Deep Sea Trench Submersible Reaches Bottom',
        text: 'Crewed titanium spherical vessel maps uncharted hydrothermal vent ecosystem.',
        page: 1
      },
      {
        headline: 'Atmospheric Methane Monitor Launches',
        text: 'High-resolution imaging spectrometer begins mapping global pipeline emissions.',
        page: 3
      }
    ]
  },

  // PAGE 8: GLOBAL HEALTH & COMMUNITY
  {
    pageNumber: 8,
    totalPages: 8,
    date: 'TUE, NOV 5, 2024',
    volume: 'VOL. 12, NO. 3,642',
    editionTag: 'HEALTH & LIFE SCIENCES',
    breakingNews: 'Health agencies launch universal seasonal vaccination campaign with record public participation',
    leadStory: {
      headline: 'Health Officials Urge Caution as Seasonal Flu Cases Rise',
      subhead: 'Medical authorities advise preventative immunization, improved ventilation, and prompt testing as winter viral cases tick upward.',
      byline: 'By Dr. Clara Montgomery',
      bylineTitle: 'Medical & Epidemiology Correspondent',
      dateline: 'ATLANTA —',
      col1: 'Public health authorities issued a joint seasonal advisory on Tuesday, encouraging families to update their annual influenza and respiratory immunizations ahead of the approaching winter peak.\n\nSurveillance data indicates that viral transmissions have climbed 14% over the past fortnight across metropolitan centers.',
      col2: '“Early immunization remains our most effective barrier against severe hospitalization and workplace absences,” emphasized state epidemiologists during Tuesday’s advisory.\n\nPharmacies and public clinics have opened walk-in community immunization booths with zero copays for all eligible residents.',
      image: '/images/newspaper-rescue.jpg',
      caption: 'Nurse prepares pediatric vaccine dosages at community health fair in central district.',
      credit: 'WORLD HEALTH MEDIA',
      jumpPage: 1
    },
    subStories: [
      {
        section: 'MEDICAL RESEARCH',
        headline: 'mRNA Cancer Vaccine Enters Phase 3 Trials',
        text: 'Personalized immunotherapy vaccines targeting post-surgical melanoma recurrence demonstrate 78% protection rate.',
        image: '/images/newspaper-rescue.jpg',
        page: 6
      },
      {
        section: 'WELLNESS',
        headline: 'Sleep Architecture Linked to Cellular Longevity',
        text: 'Comprehensive clinical study confirms deep REM sleep cycles flush metabolic waste from brain tissues.',
        image: '/images/newspaper-rescue.jpg',
        page: 1
      }
    ],
    newsBriefs: [
      {
        headline: 'Universal Blood Type Enzyme Tested',
        text: 'Bacterial enzymes successfully convert Type A and B donor blood to universal Type O.',
        page: 4
      },
      {
        headline: 'Antibiotic Alternative Targets Resistant Microbes',
        text: 'Bacteriophage therapy demonstrates complete efficacy in antibiotic-resistant wound trials.',
        page: 4
      },
      {
        headline: 'Community Exercise Corridors Reduce Hypertension',
        text: 'Urban greenway walking paths linked to measurable drops in municipal cardiovascular events.',
        page: 3
      },
      {
        headline: 'Rapid Water Testing Pens Deployed Globally',
        text: 'Portable colorimetric strips detect waterborne pathogens within three minutes.',
        page: 1
      }
    ]
  }
];

export const dataAnalyticsText = newspaperEditions.map(e => `PAGE ${e.pageNumber} / ${e.leadStory.headline}`);

export default newspaperEditions;
