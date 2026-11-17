export const examAlerts = [
  { exam: 'UPSC CSE 2026 Prelims', date: 'MAY 24', daysLeft: '22 Days', status: 'Admit Cards Released', color: 'bg-indigo-600' },
  { exam: 'JEE ADVANCED 2026', date: 'JUN 02', daysLeft: '31 Days', status: 'Registration Open', color: 'bg-amber-600' },
  { exam: 'NEET-UG 2026', date: 'MAY 10', daysLeft: '8 Days', status: 'Center Allotment Live', color: 'bg-rose-600' },
  { exam: 'GATE 2027 Portal', date: 'SEP 15', daysLeft: '136 Days', status: 'Syllabus Updated', color: 'bg-emerald-600' },
];

export const stories = [
  {
    id: 1,
    badge: 'HIGHER EDUCATION',
    title: 'IIT-Bhubaneswar & IISc Partner for ₹500 Crore Deep-Tech Quantum Innovation Hub',
    desc: 'Selected student fellows to receive direct seed grants of ₹25 Lakhs each for semiconductor and marine robotics commercialization.',
    time: '2h ago',
    category: 'ACADEMIC RESEARCH',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    badge: 'YOUTH INNOVATION',
    title: 'National Startup Challenge 2026: 100 University Teams Awarded Central Incubation Mentorship',
    desc: 'From agricultural AI drones to biodegradable bioplastics, student entrepreneurs present working prototypes before national venture panels.',
    time: '4h ago',
    category: 'ENTREPRENEURSHIP',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    badge: 'GLOBAL SCHOLARSHIPS',
    title: 'Fulbright-Nehru & Chevening Fellowships Announce Record 240 Fully-Funded Seats for Indian Scholars',
    desc: 'Special focus on climate policy, artificial intelligence ethics, and public health systems for the 2026-27 cohort.',
    time: '6h ago',
    category: 'FELLOWSHIPS',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=500&q=80',
  },
];



// --- Merged from AssociatedFiles/Pen.js ---
/**
 * Pen.js - Content Data File for Fountain Pen Parchment
 * 
 * Edit headings and paragraphs here.
 * The luxury fountain pen will dynamically write this content onto the parchment.
 */

export const penDocument = {
  // Main parchment header
  title: "DAILY DISPATCH & GAZETTE",
  subtitle: "SPECIAL EDITION • RECORDED LIVE BY LUXURY FOUNTAIN PEN • 2026",
  
  // News articles & announcements (Heading + Paragraph)
  articles: [
    {
      id: 1,
      heading: "1. Global AI Summit Unveils Next-Gen Open Neural Systems",
      paragraph: "World technology leaders in Geneva announced new open neural standards today, paving the path for transparent, safe, and universally accessible intelligence systems worldwide.",
    },
    {
      id: 2,
      heading: "2. Historic Clean Energy Breakthrough Powers 50 Million Homes",
      paragraph: "Engineers confirmed that advanced fusion and solar micro-grids generated surplus clean power across three continents, setting an unprecedented global milestone.",
    },
    {
      id: 3,
      heading: "3. Cyber Defense Network Thwarts Massive Financial Breach",
      paragraph: "Automated quantum threat detection intercepted coordinated intrusion attempts, safeguarding national banking protocols and critical communications infrastructure.",
    },
  ],

  // Footer sign-off and verification
  signOff: "Verified & Published by The Press Bureau • Fleet Street",
  signatureName: "Chief Registrar & Editorial Council",
};

// Helper function to automatically wrap any long paragraph into balanced lines of ~72 characters
export function wrapParagraph(text, maxChars = 72) {
  if (!text) return [];
  const words = text.split(' ');
  const lines = [];
  let current = '';

  for (const word of words) {
    if ((current + (current ? ' ' : '') + word).length <= maxChars) {
      current += (current ? ' ' : '') + word;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export default penDocument;

