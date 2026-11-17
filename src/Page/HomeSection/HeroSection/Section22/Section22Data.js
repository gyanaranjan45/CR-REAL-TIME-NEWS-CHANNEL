export const tipCategories = [
  { value: 'Civic Issue', label: 'Civic Issue (Water, Roads, Waste, Power)' },
  { value: 'Viral Rumor', label: 'Viral Forward / Suspected Fake News' },
  { value: 'Consumer Fraud', label: 'Consumer Exploitation / Fraudulent Scheme' },
  { value: 'Environmental', label: 'Unauthorized Deforestation / River Encroachment' },
];

export const tiplineInfo = {
  phone: '+91 94370 00000',
  encryption: '256-Bit Encrypted',
};



// --- Merged from AssociatedFiles/ClockData.js ---
/**
 * ClockData.js - Data Configuration for Victorian Clock & Historical Timeline
 */

export const clockTimelineData = {
  title: 'Historical Timeline',
  subtitle: 'CHRONICLES OF AGES • ARCHIVED EVENTS',
  
  // Real historical stories matching the Victorian Horology & Timeline aesthetic
  events: [
    {
      id: 'event-1',
      era: '1888 • THE GOLDEN AGE OF HOROLOGY',
      headingY: 238,
      lines: [
        { text: 'Precision pendulum clocks synchronized standard railway time,', y: 256 },
        { text: 'transforming Victorian transport, commerce, and global navigation.', y: 274 },
      ],
    },
    {
      id: 'event-2',
      era: '1905 • CELESTIAL MOTION & SPACE-TIME',
      headingY: 307,
      lines: [
        { text: 'From marine chronometers to astronomical observatory regulators,', y: 325 },
        { text: 'master artisans crafted the precision that defined modern science.', y: 343 },
      ],
    },
  ],

  // Red accent line on the left of the paragraphs
  redAccent: {
    x: 372,
    y: 227,
    width: 6,
    height: 125,
    rx: 3,
  },
};

export default clockTimelineData;


