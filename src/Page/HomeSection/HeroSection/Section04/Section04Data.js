import { FaHospital, FaDna, FaHeartPulse } from 'react-icons/fa6';

export const clinicalStories = [
  {
    id: 1,
    badge: 'ONCOLOGY BREAKTHROUGH',
    title: 'Indigenous CAR-T Cell Therapy Demonstrates 82% Remission Rate in Landmark AIIMS Multi-Center Trial',
    summary: 'Developed at a fraction of global costs, the personalized cell therapy treatment receives regulatory commercial approval for refractory leukemia and lymphoma patients.',
    author: 'Dr. Priya Nambiar, Medical Bureau',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
];

export const advisoryCards = [
  {
    id: 1,
    category: 'PUBLIC HEALTH',
    title: 'ICMR Expands AI-Assisted Chest X-Ray TB Screening Across 4,000 Rural Health Subcenters',
    time: '2h ago',
    icon: FaHospital,
  },
  {
    id: 2,
    category: 'GENOMIC MEDICINE',
    title: 'Genome India Project Completes 20,000 Whole-Genome Sequencing Registry for Rare Genetic Disorders',
    time: '4h ago',
    icon: FaDna,
  },
  {
    id: 3,
    category: 'PREVENTIVE WELLNESS',
    title: 'Cardiology Society Updates Dietary Sodium & Saturated Oil Guidelines for Premature Heart Disease Prevention',
    time: '6h ago',
    icon: FaHeartPulse,
  },
];



// --- Merged from AssociatedFiles/RealTimeNews.js ---
// CRCCF Real Time News - 5 Featured Cards Data
export const realTimeNewsData = [
  {
    id: 1,
    cardNumber: "01",
    category: "Cyber Crime",
    headline: "UPI Fraud Cases Rise: Users Advised to Stay Alert",
    date: "Nov 04, 2026",
    views: "12.8K",
    image: "/assets/card_1_exact.png",
    summary:
      "CRCCF alerts citizens against escalating fake UPI QR codes, fraudulent payment links, and impersonation scams targeting digital banking users nationwide.",
    readTime: "3 min read",
    author: "CRCCF Cyber Intelligence Wing",
  },
  {
    id: 2,
    cardNumber: "02",
    category: "Legal Update",
    headline: "SC Issues New Guidelines on Cyber Crime Investigation",
    date: "Nov 04, 2026",
    views: "9.4K",
    image: "/assets/card_2_exact.png",
    summary:
      "The Supreme Court of India introduces standardized forensic protocols and digital evidence custody chains for cybercrime investigations.",
    readTime: "4 min read",
    author: "Legal & Regulatory Affairs Cell",
  },
  {
    id: 3,
    cardNumber: "03",
    category: "Technology",
    headline: "India Pushes for AI Adoption with New National AI Plan",
    date: "Nov 03, 2026",
    views: "15.7K",
    image: "/assets/card_3_exact.png",
    summary:
      "Government unveils comprehensive semiconductor and AI roadmap, bolstering cyber defense neural networks and sovereign computational infrastructure.",
    readTime: "5 min read",
    author: "National Technology Bureau",
  },
  {
    id: 4,
    cardNumber: "04",
    category: "Weather Alert",
    headline: "Cyclone Alert for Odisha Coast, Advises Precautions",
    date: "Nov 03, 2026",
    views: "11.2K",
    image: "/assets/card_4_exact.png",
    summary:
      "Meteorological department issues severe cyclonic storm advisory for coastal Odisha and adjoining maritime zones with emergency response mobilization.",
    readTime: "2 min read",
    author: "Disaster Coordination Cell",
  },
  {
    id: 5,
    cardNumber: "05",
    category: "Cyber Security",
    headline: "CRCCF Launches Nationwide Cyber Awareness Drive",
    date: "Nov 02, 2026",
    views: "8.9K",
    image: "/assets/card_5_exact.png",
    summary:
      "Multi-city grassroots campaign launched by CRCCF covering schools, universities, and commercial clusters to empower citizens against cyber fraud.",
    readTime: "4 min read",
    author: "Public Safety & Awareness Wing",
  },
];

export const headerContent = {
  badge: "CR",
  titlePrimary: "Real Time",
  titleAccent: "News",
  subheading: "Latest News, Updates & In-Depth Reports",
  description:
    "Stay informed with real-time news, breaking updates, cybercrime reports, national developments, technology trends, legal updates, public safety alerts and special stories from across India.",
};

