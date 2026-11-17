import { FaAnchor, FaJetFighter, FaTowerObservation } from 'react-icons/fa6';

export const tacticalBriefings = [
  {
    id: 1,
    badge: 'INDIGENOUS DEFENSE',
    title: 'IAF Clears Serial Production of Tejas Mk-2 with Advanced Active Electronically Scanned Array (AESA) Radar',
    summary: 'Equipped with enhanced payload capacity of 6,500 kg, indigenous Uttam radar suite, and GE F414 engines, the supersonic multirole fighter enters production line.',
    division: 'Aeronautical Development Agency',
    time: '1h ago',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80',
  },
];

export const triServices = [
  {
    id: 1,
    service: 'INDIAN NAVY',
    title: 'Third Nuclear-Powered Ballistic Submarine Completes Deep-Sea Acoustic & Propulsion Trials',
    time: '3h ago',
    icon: FaAnchor,
    tag: 'STRATEGIC DETERRENT',
  },
  {
    id: 2,
    service: 'INDIAN ARMY',
    title: 'Border Roads Organization Inaugurates High-Altitude Twin Tunnel at 14,000 Feet in Eastern Ladakh',
    time: '5h ago',
    icon: FaTowerObservation,
    tag: 'ALL-WEATHER LOGISTICS',
  },
  {
    id: 3,
    service: 'TRI-SERVICES COMMAND',
    title: 'Joint Air-Sea-Land Amphibious Drill "Dakshin Prahar" Concludes in Andaman & Nicobar Islands',
    time: '7h ago',
    icon: FaJetFighter,
    tag: 'JOINT DOCTRINE',
  },
];



// --- Merged from AssociatedFiles/Kindle.js ---
/**
 * PROJECT: CRCCF – MINIMAL KINDLE NEWS READER
 * Single static data file for Kindle component.
 */

export const kindleHeaderData = {
  pageTitle: "CR Real Time News Channel",
  pageDescription: "Latest Cyber Crime & Cyber Safety News | Amazon Kindle E-Reader Interface",
  heading: "CR Real Time News Channel",
  description: "Latest Cyber Crime & Cyber Safety News",
};

export const kindleNewsData = [
  {
    id: 1,
    title: "CRCCF Alerts Users About New Online Banking Scam",
    description: "CRCCF issues a public alert regarding emerging online banking fraud and recommends preventive security measures.",
    category: "Cyber Alert",
    daysAgo: 0,
    date: "2026-11-05",
    thumbnailType: "hacker",
  },
  {
    id: 2,
    title: "Government Launches New Cyber Safety Awareness Program",
    description: "New initiatives promote digital awareness, responsible internet usage and online safety.",
    category: "Awareness",
    daysAgo: 1,
    date: "2026-11-04",
    thumbnailType: "padlock",
  },
  {
    id: 3,
    title: "How to Protect Your Digital Identity in 5 Simple Steps",
    description: "Learn essential methods to protect personal information and prevent identity theft.",
    category: "Cyber Tips",
    daysAgo: 2,
    date: "2026-11-03",
    thumbnailType: "fingerprint",
  },
  {
    id: 4,
    title: "CRCCF Assists in Major Cyber Fraud Case",
    description: "Investigative units and cyber defense specialists collaborate with enforcement agencies to dismantle an interstate cyber syndicate.",
    category: "Case Update",
    daysAgo: 3,
    date: "2026-11-02",
    thumbnailType: "gavel",
  },
  {
    id: 5,
    title: "Important Cybersecurity Guidelines for Internet Users",
    description: "Key preventive protocols including two-factor verification, cautious download habits, and verified payment gateways.",
    category: "Cyber Safety",
    daysAgo: 4,
    date: "2026-11-01",
    thumbnailType: "shield",
  },
  {
    id: 6,
    title: "New Digital Safety Awareness Initiative Announced",
    description: "Comprehensive nationwide campaign educating students, senior citizens, and digital consumers on cyber defense.",
    category: "Public Awareness",
    daysAgo: 5,
    date: "2026-10-31",
    thumbnailType: "awareness",
  },
];
