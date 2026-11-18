/**
 * Multi-page news cards dataset for CR Realtime News Channel
 * 3 Pages of 8 cards each (24 items total across the 8 categories).
 * Each card includes a headline, matched descriptive narrative, category,
 * accent color, and bespoke iconKey mapped to its unique animated 3D illustration.
 */
export const newsPagesData = [
  // =========================================================================
  // PAGE 1: Historic Peaks, Series Deciders & Emerging AI Workflows
  // =========================================================================
  [
    {
      id: 'business',
      category: 'BUSINESS',
      headline: 'Sensex Climbs Past 82,000 Mark',
      description: 'Markets surge to historic highs backed by strong foreign inflows and banking sector rally.',
      accentColor: '#10B981',
      iconKey: 'business_p1',
    },
    {
      id: 'sports',
      category: 'SPORTS',
      headline: 'India Eyes Series Win in 3rd ODI',
      description: 'Top-order batsmen in prime form ahead of the high-stakes series decider clash.',
      accentColor: '#3B82F6',
      iconKey: 'sports_p1',
    },
    {
      id: 'technology',
      category: 'TECHNOLOGY',
      headline: 'AI Tools Transform Modern Work',
      description: 'Enterprise adoption rises rapidly as generative intelligence streamlines daily workflows.',
      accentColor: '#6366F1',
      iconKey: 'technology_p1',
    },
    {
      id: 'weather',
      category: 'WEATHER',
      headline: 'Monsoon Likely This Week',
      description: 'Meteorological department forecasts widespread rainfall bringing relief from summer heat.',
      accentColor: '#F59E0B',
      iconKey: 'weather_p1',
    },
    {
      id: 'national',
      category: 'NATIONAL NEWS',
      headline: 'Major National Developments Today',
      description: 'Key policy reforms and infrastructure expansion initiatives announced nationwide.',
      accentColor: '#F97316',
      iconKey: 'national_p1',
    },
    {
      id: 'education',
      category: 'EDUCATION',
      headline: 'New Education Opportunities Announced',
      description: 'Global university tie-ups and updated scholarship programs launched for students.',
      accentColor: '#8B5CF6',
      iconKey: 'education_p1',
    },
    {
      id: 'health',
      category: 'HEALTH',
      headline: 'Healthcare Services Get Major Boost',
      description: 'Advanced digital diagnostic centers and upgraded regional hospitals approved.',
      accentColor: '#F43F5E',
      iconKey: 'health_p1',
    },
    {
      id: 'world',
      category: 'WORLD NEWS',
      headline: 'Global Developments Making Headlines',
      description: 'International trade summits and diplomatic dialogues shape new global alliances.',
      accentColor: '#06B6D4',
      iconKey: 'world_p1',
    },
  ],

  // =========================================================================
  // PAGE 2: Central Bank Rates, Olympic Drills & Quantum Breakthroughs
  // =========================================================================
  [
    {
      id: 'business',
      category: 'BUSINESS',
      headline: 'RBI Keeps Repo Rate Steady at 6.5%',
      description: 'Monetary policy committee maintains calibrated interest rates to support durable economic growth and curb inflation.',
      accentColor: '#10B981',
      iconKey: 'business_p2',
    },
    {
      id: 'sports',
      category: 'SPORTS',
      headline: 'Olympic Contingent Begins Final Drills',
      description: 'Elite national athletes enter intensive high-altitude training camps with focused preparation for podium medals.',
      accentColor: '#3B82F6',
      iconKey: 'sports_p2',
    },
    {
      id: 'technology',
      category: 'TECHNOLOGY',
      headline: 'Quantum Chip Breaks Computing Record',
      description: 'Next-gen superconducting processor achieves 99.9% gate fidelity, opening revolutionary avenues in computational physics.',
      accentColor: '#6366F1',
      iconKey: 'technology_p2',
    },
    {
      id: 'weather',
      category: 'WEATHER',
      headline: 'Cool Coastal Breeze Lowers Heatwave',
      description: 'Vigorous maritime breeze sweeping along coastal regions brings welcome temperature drop and pleasant evenings.',
      accentColor: '#0EA5E9',
      iconKey: 'weather_p2',
    },
    {
      id: 'national',
      category: 'NATIONAL NEWS',
      headline: 'Green Expressway Network Dedicated',
      description: 'Over 1,200 km of solar-powered eco-friendly highway corridors opened to drastically cut transit freight times.',
      accentColor: '#16A34A',
      iconKey: 'national_p2',
    },
    {
      id: 'education',
      category: 'EDUCATION',
      headline: 'STEM Research Grants Doubled for 2026',
      description: 'Substantial national grant increase drives cutting-edge innovation in biotechnology, AI robotics, and space research.',
      accentColor: '#8B5CF6',
      iconKey: 'education_p2',
    },
    {
      id: 'health',
      category: 'HEALTH',
      headline: 'Nationwide Preventive Health Drive Starts',
      description: 'Comprehensive diagnostic checkups, wellness clinics, and subsidized essential medicines launched across 300 cities.',
      accentColor: '#10B981',
      iconKey: 'health_p2',
    },
    {
      id: 'world',
      category: 'WORLD NEWS',
      headline: 'Global Clean Energy Treaty Ratified',
      description: 'Historic accord signed by 50 nations commits to tripling worldwide wind and solar renewable generation capacity.',
      accentColor: '#059669',
      iconKey: 'world_p2',
    },
  ],

  // =========================================================================
  // PAGE 3: VC Capital Surges, Satellite 6G Grids & Bullet Trains
  // =========================================================================
  [
    {
      id: 'business',
      category: 'BUSINESS',
      headline: 'Tech Startups Secure Record $4B Funding',
      description: 'Venture capital investments surge across domestic semiconductor hubs, green mobility, and AI enterprises.',
      accentColor: '#F59E0B',
      iconKey: 'business_p3',
    },
    {
      id: 'sports',
      category: 'SPORTS',
      headline: 'National Badminton Finals Set for Weekend',
      description: 'Top-seeded Indian shuttlers showcase world-class agility through hard-fought semi-finals to book title clash.',
      accentColor: '#2563EB',
      iconKey: 'sports_p3',
    },
    {
      id: 'technology',
      category: 'TECHNOLOGY',
      headline: 'Next-Gen 6G Satellite Grid Tested',
      description: 'Low-Earth orbit communications constellation proves ultra-low latency mesh networking in real-world space trials.',
      accentColor: '#4F46E5',
      iconKey: 'technology_p3',
    },
    {
      id: 'weather',
      category: 'WEATHER',
      headline: 'Severe Thunderstorm Alert Issued',
      description: 'Meteorological agency issues regional advisories for high-speed squall winds, heavy showers, and lightning activity.',
      accentColor: '#D97706',
      iconKey: 'weather_p3',
    },
    {
      id: 'national',
      category: 'NATIONAL NEWS',
      headline: 'High-Speed Bullet Train Passes Trial',
      description: 'Indigenous aerodynamic bullet train clocks 320 km/h smoothly on dedicated viaduct tracks during trial run.',
      accentColor: '#EA580C',
      iconKey: 'national_p3',
    },
    {
      id: 'education',
      category: 'EDUCATION',
      headline: 'Digital Literacy Hubs in 500 Districts',
      description: 'State-of-the-art interactive coding labs and vocational tech programs established for aspiring rural youth.',
      accentColor: '#7C3AED',
      iconKey: 'education_p3',
    },
    {
      id: 'health',
      category: 'HEALTH',
      headline: 'AI Diagnostic Centers Open in 50 Districts',
      description: 'Next-gen robotic neural scanners detect cardiovascular and oncological anomalies in under 30 seconds.',
      accentColor: '#E11D48',
      iconKey: 'health_p3',
    },
    {
      id: 'world',
      category: 'WORLD NEWS',
      headline: 'International Space Station Mission Launched',
      description: 'Multinational astronaut crew aboard next-generation spacecraft initiates approach for orbital laboratory docking.',
      accentColor: '#0284C7',
      iconKey: 'world_p3',
    },
  ],
];

// Fallback single-page array for backward compatibility
export const newsCardsData = newsPagesData[0];

// All 24 cards flattened
export const allNewsCards = newsPagesData.flat();

// Mobile Pages Data: 4 pages of 6 cards each (3 cards per line × 2 lines)
export const mobileNewsPagesData = [
  allNewsCards.slice(0, 6),   // Page 1: 6 cards
  allNewsCards.slice(6, 12),  // Page 2: 6 cards
  allNewsCards.slice(12, 18), // Page 3: 6 cards
  allNewsCards.slice(18, 24), // Page 4: 6 cards
];

export default newsPagesData;

