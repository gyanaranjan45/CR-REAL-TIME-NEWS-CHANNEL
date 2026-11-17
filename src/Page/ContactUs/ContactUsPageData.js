/**
 * CR Real Time News Channel - Contact Us Data
 * Contains Rotary Dial Buttons, 3D Helical Coil Coordinates, and Official Contact Details
 */

const DIAL_RADIUS = 84;

export const DIAL_BUTTONS_8 = [
  { id: 'phone',     title: 'Phone Call',       shortLabel: 'Call',      iconType: 'phone',     angle: -135, dx: Math.round(DIAL_RADIUS * Math.cos(-135 * Math.PI / 180)), dy: Math.round(DIAL_RADIUS * Math.sin(-135 * Math.PI / 180)) },
  { id: 'email',     title: 'Email Us',         shortLabel: 'Email',     iconType: 'email',     angle: -90,  dx: 0,                                                         dy: -DIAL_RADIUS },
  { id: 'reporter',  title: 'Our Reporters',    shortLabel: 'Reporters', iconType: 'reporter',  angle: -45,  dx: Math.round(DIAL_RADIUS * Math.cos(-45 * Math.PI / 180)),  dy: Math.round(DIAL_RADIUS * Math.sin(-45 * Math.PI / 180)) },
  { id: 'team',      title: 'Our Team',         shortLabel: 'Team',      iconType: 'team',      angle: 0,    dx: DIAL_RADIUS,                                              dy: 0 },
  { id: 'location',  title: 'Our Location',     shortLabel: 'Location',  iconType: 'location',  angle: 45,   dx: Math.round(DIAL_RADIUS * Math.cos(45 * Math.PI / 180)),   dy: Math.round(DIAL_RADIUS * Math.sin(45 * Math.PI / 180)) },
  { id: 'website',   title: 'Official Website', shortLabel: 'Website',   iconType: 'website',   angle: 90,   dx: 0,                                                         dy: DIAL_RADIUS },
  { id: 'broadcast', title: 'Live News',        shortLabel: 'Live News', iconType: 'broadcast', angle: 135,  dx: Math.round(DIAL_RADIUS * Math.cos(135 * Math.PI / 180)),  dy: Math.round(DIAL_RADIUS * Math.sin(135 * Math.PI / 180)) },
  { id: 'support',   title: '24/7 Support',     shortLabel: 'Support',   iconType: 'support',   angle: 180,  dx: -DIAL_RADIUS,                                             dy: 0 },
];

/**
 * Precomputed 23 3D helical coil coordinates following an outward curved C-bow arc.
 * Symmetrically bends outward to the left, matching vintage antique telephone reference.
 */
export const COIL_POINTS_BENT = Array.from({ length: 23 }).map((_, idx) => {
  const t = idx / 22;
  const mt = 1 - t;
  // Cubic Bezier: P0=(70, 164), P1=(14, 230), P2=(18, 430), P3=(70, 510)
  const cx = mt * mt * mt * 70 + 3 * mt * mt * t * 14 + 3 * mt * t * t * 18 + t * t * t * 70;
  const cy = mt * mt * mt * 164 + 3 * mt * mt * t * 230 + 3 * mt * t * t * 430 + t * t * t * 510;

  // Tangent derivative for rotating coil perpendicular to curve
  const dx = 3 * mt * mt * (14 - 70) + 6 * mt * t * (18 - 14) + 3 * t * t * (70 - 18);
  const dy = 3 * mt * mt * (230 - 164) + 6 * mt * t * (430 - 230) + 3 * t * t * (510 - 430);

  const angleRad = Math.atan2(dy, dx);
  const rotDeg = (angleRad * 180) / Math.PI - 90;

  return {
    id: idx,
    cx: Math.round(cx * 10) / 10,
    cy: Math.round(cy * 10) / 10,
    rotDeg: Math.round(rotDeg * 10) / 10
  };
});

/**
 * Official Contact Information & Google Maps Destination for CR Real Time News Channel
 */
export const CONTACT_DETAILS = {
  channelName: 'CR Real Time News Channel',
  organization: 'CR CYBER CRIME FOUNDATION (CRCCF)',
  addressTitle: 'CR REAL TIME NEWS CHANNEL',
  fullAddress: 'Office No. 433, DLF Cyber City, Near Infocity, Patia, Bhubaneswar, Odisha – 751024, India.',
  contactNumber: '+91 9777999529',
  contactNumberTel: 'tel:+919777999529',
  primaryEmail: 'hr@crcybercrime.org',
  primaryEmailMailto: 'mailto:hr@crcybercrime.org',
  hrEmail: 'crccfhr@gmail.com',
  hrEmailMailto: 'mailto:crccfhr@gmail.com',
  websiteUrl: 'https://crcybercrime.org',
  mapSearchUrl: 'https://maps.google.com/?q=DLF+Cyber+City+Near+Infocity+Patia+Bhubaneswar+Odisha+751024',
  mapEmbedUrl: 'https://maps.google.com/maps?q=DLF%20Cyber%20City%20Infocity%20Patia%20Bhubaneswar%20Odisha%20751024&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapLocationTitle: 'Office No. 433, DLF Cyber City, Bhubaneswar',
  rating: '4.9 ★★★★★ (250+ Reviews)'
};
