import { FaRoad, FaTrainSubway, FaBridge } from 'react-icons/fa6';

export const projects = [
  {
    id: 1,
    name: 'Mumbai-Ahmedabad Bullet Train Corridor (MAHSR)',
    length: '508 km',
    completion: 86,
    deadline: 'Operational Pilot Q1 2027',
    budget: '₹1.10 Lakh Cr',
    milestone: '320 km of continuous elevated viaduct spans and all 12 undersea tunnel bores completed.',
    type: 'HIGH-SPEED RAIL',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'Delhi-Mumbai Expressway & Greenfield Logistics Spines',
    length: '1,386 km',
    completion: 92,
    deadline: 'Full Corridor Opening Dec 2026',
    budget: '₹1.03 Lakh Cr',
    milestone: 'Travel time between economic capital and national capital slashed from 24 hours to 12 hours.',
    type: 'EXPRESSWAY NETWORK',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=700&q=80',
  },
];

export const quickStats = [
  { label: 'Highways Constructed', val: '38.5 km/day', change: '+14% YoY', icon: FaRoad },
  { label: 'Electrified Rail Network', val: '98.2%', change: 'Target 100%', icon: FaTrainSubway },
  { label: 'Smart City Transit Nodes', val: '104 Operational', change: 'Metro & BRT', icon: FaBridge },
];

