import React, { useState } from 'react';

/**
 * Authentic Dummy Newspaper Content Data
 * Includes English Victorian Broadsheet & Hindi Dainik Samachar Editions
 */
const defaultNewsData = {
  english: {
    masthead: 'THE DAILY CHRONICLE',
    dateline: 'VOL. LXXVIII • No. 24,108 • LONDON, 1888 • ONE PENNY • MORNING DISPATCH',
    caption: 'Fig. 1 • The Great Northern Ridge Expedition',
    topRight: {
      tag: '★ SPECIAL DISPATCH ★',
      headline: ['NORTHERN RIDGE REACHED', 'AT THE BREAK OF DAWN'],
      body: [
        'The intrepid exploration team has',
        'scaled the frozen mountain crest,',
        'establishing the highest altitude',
        'beacon. All party members remain',
        'in sound health and high spirits.',
        'Dispatches sent via heliograph.',
      ],
    },
    middleLeft: {
      headline: 'STEAM POWER REVOLUTIONIZES PRINT',
      body: [
        'Fleet Street workshops report profound',
        'success with twin-cylinder presses,',
        'delivering over 12,000 broadsheets',
        'every morning without mechanical error.',
        'Public demand for instantaneous daily',
        'intelligence reaches unprecedented highs.',
        'Fresh editions now depart on early trains.',
      ],
    },
    noticeCard: {
      title: '★ SPECIAL NOTICE ★',
      brand: 'CAXTON & SONS',
      item1: 'Fine Printing Inks,',
      item2: 'Rag Paper & Metal Type',
      offer: 'Prompt Express Delivery',
      address: 'Fleet St. No. 7, London',
    },
    bottomSection: {
      headline: 'IMPERIAL TELEGRAPH NETWORK UNITES CONTINENTS',
      col1: [
        'Submarine cables laid across oceanic depths',
        'now transmit diplomatic treaties in seconds.',
        'Commercial exchanges report brisk trade',
        'as market intelligence aligns worldwide.',
      ],
      col2: [
        'Chambers of commerce across the realm',
        'herald this dawn of global cooperation.',
        'Postal authorities confirm daily telegram',
        'tariffs shall be reduced for all citizens.',
      ],
      footer: 'PRINTED & PUBLISHED AT THE STEAM MANUAL PRESS • FLEET STREET • ALL RIGHTS RESERVED • MDCCCLXXXVIII',
    },
  },
  hindi: {
    masthead: 'दैनिक भारत समाचार',
    dateline: 'वर्ष ५२ • अंक २१० • नई दिल्ली • मूल्य: ₹ १.०० • राष्ट्रीय प्रातःकालीन संस्करण',
    caption: 'चित्र १ • बर्फीली चोटियों का विहंगम दृश्य',
    topRight: {
      tag: '★ विशेष रिपोर्ट ★',
      headline: ['पर्वतारोहियों ने रचा नया इतिहास', 'भोर में फहराया शीर्ष पर परचम'],
      body: [
        'साहसी दल ने बर्फीली चोटियों को पार करते',
        'हुए उच्चतम शिखर पर विजय प्राप्त की।',
        'कमांड बेस को मिले संदेश के अनुसार सभी',
        'सदस्य पूरी तरह स्वस्थ एवं सुरक्षित हैं।',
        'इस साहसिक अभियान की सर्वत्र प्रशंसा।',
        'कठिन मौसम में भी दल का हौसला अडिग।',
      ],
    },
    middleLeft: {
      headline: 'आधुनिक प्रिंटिंग प्रेस का सफल शुभारंभ',
      body: [
        'नई उन्नत रोटरी प्रिंटिंग मशीनरी की सहायता',
        'से समाचार पत्रों का मुद्रण अब तीन गुना',
        'तेज गति से संभव हो सका है। प्रतिदिन',
        'हजारों प्रतियां समय पर पाठकों तक पहुंचेंगी।',
        'संपादकीय मंडल ने नई तकनीक की सराहना की।',
        'अब ताजा खबरें सुबह-सुबह घर-घर पहुंचेंगी।',
      ],
    },
    noticeCard: {
      title: '★ सार्वजनिक सूचना ★',
      brand: 'राष्ट्रीय मुद्रणालय',
      item1: 'सर्वोत्तम मुद्रण स्याही',
      item2: 'एवं उच्च गुणवत्ता कागज',
      offer: 'थोक मूल्य पर उपलब्ध',
      address: 'प्रेस एवेन्यू, नई दिल्ली',
    },
    bottomSection: {
      headline: 'देशभर में आधुनिक संचार और सूचना तंत्र का हुआ सफल विस्तार',
      col1: [
        'दूरदराज के इलाकों को मुख्य सूचना तंत्र से',
        'जोड़ने का विशाल कार्य पूर्ण हो गया है।',
        'डिजिटल और टेलीग्राफ तंत्र द्वारा अब',
        'खबरें कुछ ही क्षणों में प्रसारित होंगी।',
      ],
      col2: [
        'व्यापारियों और आम नागरिकों ने इस नई',
        'सुविधा का जोरदार स्वागत किया है।',
        'प्रशासन ने कहा कि यह सूचना क्रांति के',
        'नए युग का स्वर्णिम और सफल आरंभ है।',
      ],
      footer: 'मुद्रक एवं प्रकाशक: स्टीम प्रिंटिंग प्रेस • नई दिल्ली • सर्वाधिकार सुरक्षित • २०२६',
    },
  },
};

/**
 * Printer Component - Antique Victorian Manual Printing Press
 * 100% Native React + Pure Inline SVG & CSS Illustration
 * Pixel-Perfect Recreation of Reference Image with Authentic Dummy Broadsheet News Content.
 */
function Printer({ initialMode = 'english' }) {
  const [isCranking, setIsCranking] = useState(false);
  const [contentMode, setContentMode] = useState(initialMode); // 'english' | 'hindi'

  const activeNews = contentMode === 'hindi' ? defaultNewsData.hindi : defaultNewsData.english;
  const isHindi = contentMode === 'hindi';
  const textFont = isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif";
  const headerFont = isHindi ? "'Mukta', sans-serif" : "'Cinzel', 'Playfair Display', Georgia, serif";

  const toggleMode = () => {
    setContentMode((prev) => (prev === 'english' ? 'hindi' : 'english'));
  };

  return (
    <div className="w-full py-8 sm:py-12 bg-[#f8fafc] flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10 select-none font-sans overflow-x-hidden">
      {/* Page Reload Slide-In Animation Styles */}
      <style>{`
        @keyframes reloadSlideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-120px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes reloadSlideFromRight {
          0% {
            opacity: 0;
            transform: translateX(120px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-from-left {
          animation: reloadSlideFromLeft 0.95s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-slide-from-right {
          animation: reloadSlideFromRight 0.95s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      {/* 2-Column Responsive Layout: Fully Optimized for Mobile, Tablet, Laptop & Desktop */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col xl:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12 py-3 sm:py-6">
        {/* ======================================================== */}
        {/* LEFT SIDE: PRINTED PAPER CONTENT DISPLAY BOX             */}
        {/* Responsive, Clean Card Matching Live Paper Output         */}
        {/* ======================================================== */}
        <div className="order-2 xl:order-1 animate-slide-from-left w-full max-w-full sm:max-w-[460px] md:max-w-[480px] xl:max-w-[420px] 2xl:max-w-[460px] bg-white rounded-2xl sm:rounded-[28px] p-4 sm:p-5 md:p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] border border-slate-200/80 transition-all">
          {/* Card Top Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 sm:pb-3 mb-3 sm:mb-3.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Live Newspaper Content
              </span>
            </div>
            <button
              type="button"
              onClick={toggleMode}
              className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 border border-slate-200 transition-all cursor-pointer flex items-center gap-1.5"
              title="Switch language between English & Hindi"
            >
              <span>{isHindi ? '🇮🇳 हिंदी' : '🇬🇧 English'}</span>
              <span className="text-slate-400 text-[10px]">⇄</span>
            </button>
          </div>

          {/* Newspaper Content Reader Body */}
          <div className="space-y-3 sm:space-y-3.5 text-slate-800">
            {/* 1. Masthead */}
            <div className="bg-[#fcfaf4] p-2.5 sm:p-3 rounded-xl border border-amber-900/10 text-center">
              <div className="border-b border-amber-900/15 pb-1 mb-1">
                <h2
                  className="text-base sm:text-lg xl:text-xl font-black text-slate-900 tracking-wide"
                  style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Cinzel', 'Playfair Display', Georgia, serif" }}
                >
                  {activeNews.masthead}
                </h2>
              </div>
              <p
                className="text-[9.5px] sm:text-[10.5px] font-medium text-slate-600 tracking-tight"
                style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif" }}
              >
                {activeNews.dateline}
              </p>
            </div>

            {/* 2. Lead Expedition Story */}
            <div className="space-y-1.5 border-b border-slate-100 pb-2.5 sm:pb-3">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[9.5px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-red-100 text-red-700 tracking-wider">
                  {activeNews.topRight.tag}
                </span>
              </div>
              <h3
                className="text-xs sm:text-sm xl:text-[15px] font-extrabold text-slate-900 leading-snug"
                style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif" }}
              >
                {activeNews.topRight.headline.join(' ')}
              </h3>

              {/* Graphic Thumbnail + Story snippet */}
              <div className="flex gap-2.5 sm:gap-3 items-start pt-1">
                <div className="w-20 sm:w-24 h-14 sm:h-16 rounded-lg bg-sky-100 border border-sky-300 relative overflow-hidden shrink-0 flex flex-col justify-end shadow-2xs">
                  <svg viewBox="0 0 134 88" className="w-full h-full block">
                    <rect width="134" height="88" fill="#d0dfef" />
                    <polygon points="10,88 62,38 112,88" fill="#3c5f8a" />
                    <polygon points="74,88 112,54 140,88" fill="#587ea9" />
                    <circle cx="102" cy="30" r="8" fill="#ffffff" />
                  </svg>
                  <div className="bg-slate-900/85 px-1 py-0.5 text-[7.5px] sm:text-[8px] text-white text-center truncate">
                    {activeNews.caption}
                  </div>
                </div>
                <p
                  className="text-[11px] sm:text-xs text-slate-600 leading-relaxed"
                  style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif" }}
                >
                  {activeNews.topRight.body.join(' ')}
                </p>
              </div>
            </div>

            {/* 3. Printing Press Revolution Story */}
            <div className="space-y-1 border-b border-slate-100 pb-2.5 sm:pb-3">
              <h4
                className="text-xs sm:text-sm font-extrabold text-slate-900"
                style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif" }}
              >
                {activeNews.middleLeft.headline}
              </h4>
              <p
                className="text-[11px] sm:text-xs text-slate-600 leading-relaxed"
                style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif" }}
              >
                {activeNews.middleLeft.body.join(' ')}
              </p>
            </div>

            {/* 4. Advertisement Notice Box */}
            <div className="bg-sky-50/80 rounded-xl p-2.5 border border-dashed border-sky-300 space-y-1 text-center">
              <span className="text-[8.5px] sm:text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-sky-200 text-sky-900 tracking-wider">
                {activeNews.noticeCard.title}
              </span>
              <h5
                className="text-xs font-bold text-slate-900 pt-0.5"
                style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Cinzel', Georgia, serif" }}
              >
                {activeNews.noticeCard.brand}
              </h5>
              <p className="text-[10.5px] sm:text-[11px] text-slate-600">
                {activeNews.noticeCard.item1} {activeNews.noticeCard.item2}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-0.5 text-[9.5px] sm:text-[10px]">
                <span className="font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                  {activeNews.noticeCard.offer}
                </span>
                <span className="text-slate-500">{activeNews.noticeCard.address}</span>
              </div>
            </div>

            {/* 5. Bottom Telegraph Report */}
            <div className="space-y-1 pt-0.5">
              <h4
                className="text-xs sm:text-sm font-extrabold text-slate-900"
                style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif" }}
              >
                {activeNews.bottomSection.headline}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px] sm:text-[11px] text-slate-600 leading-relaxed pt-0.5">
                <p style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif" }}>
                  {activeNews.bottomSection.col1.join(' ')}
                </p>
                <p style={{ fontFamily: isHindi ? "'Mukta', sans-serif" : "'Playfair Display', Georgia, serif" }}>
                  {activeNews.bottomSection.col2.join(' ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT SIDE: VICTORIAN MANUAL PRINTING PRESS MACHINE      */}
        {/* Responsive, Aspect-Locked Inline SVG Illustration        */}
        {/* ======================================================== */}
        <div className="order-1 xl:order-2 animate-slide-from-right w-full max-w-full sm:max-w-[620px] md:max-w-[720px] lg:max-w-[820px] xl:max-w-[900px] 2xl:max-w-[960px] aspect-[1024/682] relative flex items-center justify-center shadow-none min-w-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 682"
            width="100%"
            height="100%"
            className="w-full h-full block"
            style={{ overflow: 'visible' }}
          >
            <defs>
              {/* Embedded Google Fonts for Authentic Victorian Serif Typography & Devanagari */}
              <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Mukta:wght@400;500;600;700;800;900&display=swap');
                .victorian-title {
                  font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
                }
                .crank-rotate {
                  transform-origin: 758px 290px;
                  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
              `}
              </style>

              {/* Gaussian Blur Filters for Natural Soft Shadows */}
              <filter id="printerGroundBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="16" />
              </filter>
              <filter id="paperShadowBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
              <filter id="footContactBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" />
              </filter>

              {/* --- CAST IRON NAVY BLUE SHADING GRADIENTS --- */}
              <linearGradient id="ironNavyFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2c4772" />
                <stop offset="18%" stopColor="#1e3456" />
                <stop offset="55%" stopColor="#152742" />
                <stop offset="85%" stopColor="#0f1d32" />
                <stop offset="100%" stopColor="#091322" />
              </linearGradient>

              {/* --- STEEL BLUE CAST IRON CRANK ARM GRADIENTS (AS IN USER ZOOM IMAGE) --- */}
              <linearGradient id="crankSteelBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#152642" />
                <stop offset="25%" stopColor="#253f6c" />
                <stop offset="65%" stopColor="#3c5f95" />
                <stop offset="90%" stopColor="#648bc2" />
                <stop offset="100%" stopColor="#96bee9" />
              </linearGradient>

              <linearGradient id="crankHighlightBevel" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e2edfa" />
                <stop offset="35%" stopColor="#9bc0ed" />
                <stop offset="75%" stopColor="#6089c2" />
                <stop offset="100%" stopColor="#2b4774" />
              </linearGradient>

              <linearGradient id="archedPlateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#27426b" />
                <stop offset="25%" stopColor="#1b3152" />
                <stop offset="70%" stopColor="#14243e" />
                <stop offset="100%" stopColor="#0c172a" />
              </linearGradient>

              {/* --- POLISHED BRASS & GOLD PIPING GRADIENTS --- */}
              <linearGradient id="goldPipingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fffde7" />
                <stop offset="18%" stopColor="#fef08a" />
                <stop offset="42%" stopColor="#f59e0b" />
                <stop offset="75%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>

              <linearGradient id="goldHorizontalBar" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="25%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="85%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>

              <linearGradient id="goldCylinderVertical" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef9c3" />
                <stop offset="20%" stopColor="#facc15" />
                <stop offset="55%" stopColor="#d97706" />
                <stop offset="85%" stopColor="#92400e" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>

              <radialGradient id="brassDishGrad" cx="45%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#fef08a" />
                <stop offset="55%" stopColor="#f59e0b" />
                <stop offset="82%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#5c2605" />
              </radialGradient>

              <linearGradient id="screwSpindleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="25%" stopColor="#475569" />
                <stop offset="60%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              {/* --- TOP CRIMSON RED ROLLER GRADIENT (3D CYLINDRICAL) --- */}
              <linearGradient id="redRollerCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#62110e" />
                <stop offset="8%" stopColor="#8a0000" />
                <stop offset="16%" stopColor="#ea2627" />
                <stop offset="28%" stopColor="#ff938e" />
                <stop offset="38%" stopColor="#ffffff" />
                <stop offset="48%" stopColor="#fb5b5d" />
                <stop offset="70%" stopColor="#dc2626" />
                <stop offset="88%" stopColor="#a5090d" />
                <stop offset="100%" stopColor="#380404" />
              </linearGradient>

              {/* --- BOTTOM STEEL BLUE ROLLER GRADIENT --- */}
              <linearGradient id="blueRollerCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0a101b" />
                <stop offset="10%" stopColor="#1a2d4e" />
                <stop offset="22%" stopColor="#8ea5cf" />
                <stop offset="30%" stopColor="#dbeafe" />
                <stop offset="42%" stopColor="#4d73aa" />
                <stop offset="70%" stopColor="#23396a" />
                <stop offset="88%" stopColor="#274172" />
                <stop offset="100%" stopColor="#09111e" />
              </linearGradient>

              {/* --- TURNED WALNUT HARDWOOD HANDLE GRADIENT (RICH AMBER HONEY WOOD) --- */}
              <linearGradient id="woodGripSpecular" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#ffedd5" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="walnutWoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" />
                <stop offset="15%" stopColor="#f97316" />
                <stop offset="38%" stopColor="#ea580c" />
                <stop offset="65%" stopColor="#c2410c" />
                <stop offset="85%" stopColor="#7c2d12" />
                <stop offset="100%" stopColor="#380e04" />
              </linearGradient>

              {/* --- GEAR TOOTH 3D INDUSTRIAL GRADIENTS --- */}
              <linearGradient id="gearToothFace" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="35%" stopColor="#f59e0b" />
                <stop offset="80%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
              <linearGradient id="gearToothTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#fde047" />
              </linearGradient>
            </defs>

            {/* ======================================================== */}
            {/* 1. STUDIO GROUND SHADOWS                                 */}
            {/* ======================================================== */}
            <g id="ground_shadows">
              <ellipse
                cx="496"
                cy="646"
                rx="430"
                ry="24"
                fill="#0f172a"
                opacity="0.22"
                filter="url(#printerGroundBlur)"
              />
              <ellipse
                cx="260"
                cy="650"
                rx="102"
                ry="11"
                fill="#080c14"
                opacity="0.65"
                filter="url(#footContactBlur)"
              />
              <ellipse
                cx="742"
                cy="650"
                rx="102"
                ry="11"
                fill="#080c14"
                opacity="0.65"
                filter="url(#footContactBlur)"
              />
              <ellipse
                cx="912"
                cy="644"
                rx="68"
                ry="7"
                fill="#0f172a"
                opacity="0.14"
                filter="url(#printerGroundBlur)"
              />
            </g>

            {/* ======================================================== */}
            {/* 2. REAR STRUCTURAL CASING & BACKING WALL                  */}
            {/* ======================================================== */}
            <g id="rear_structural_layer">
              <rect
                x="270"
                y="180"
                width="460"
                height="200"
                fill="#0e1b2e"
              />
              <rect
                x="268"
                y="185"
                width="458"
                height="28"
                rx="4"
                fill="#101e33"
                stroke="#08101d"
                strokeWidth="2"
              />
              <polygon
                points="298,366 696,366 704,386 290,386"
                fill="#172740"
                stroke="#0a1322"
                strokeWidth="2"
              />
              <line x1="294" y1="367" x2="700" y2="367" stroke="url(#goldPipingGrad)" strokeWidth="1.8" />
            </g>

            {/* ======================================================== */}
            {/* 3. RIGHT DRIVE GEAR WHEEL & 8-SPOKE FLYWHEEL ASSEMBLY     */}
            {/* Exact recreation of user zoom reference image            */}
            {/* ======================================================== */}
            <g id="gear_flywheel_assembly">
              {/* Ambient Gear Drop Shadow */}
              <ellipse
                cx="758"
                cy="290"
                rx="76"
                ry="150"
                fill="#090e18"
                opacity="0.38"
              />

              {/* Stepped Brass Journal Sleeve Behind Gear on Main Axle */}
              <rect x="730" y="270" width="28" height="40" rx="3" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
              <ellipse cx="730" cy="290" rx="6" ry="20" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1.2" />

              {/* Spur Gear Rim: Solid Brass Body */}
              <ellipse
                cx="758"
                cy="290"
                rx="63"
                ry="128"
                fill="url(#goldPipingGrad)"
                stroke="#78350f"
                strokeWidth="2.5"
              />

              {/* --- 15 PRECISE 3D SQUARE-CUT INDUSTRIAL SPUR GEAR TEETH --- */}
              <g id="spur_gear_teeth">
                <polygon points="770.2,166.5 772.8,147.9 781.5,152.5 777.4,170.5" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="772.8,147.9 781.5,152.5 779.3,154.3 770.6,149.7" fill="url(#gearToothTop)" />
                <polygon points="781.1,173.4 786.0,155.8 794.1,163.4 787.8,180.0" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="786.0,155.8 794.1,163.4 791.9,165.2 783.8,157.6" fill="url(#gearToothTop)" />
                <polygon points="791.2,184.2 798.2,168.3 805.5,178.8 797.2,193.4" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="798.2,168.3 805.5,178.8 803.3,180.6 796.0,170.1" fill="url(#gearToothTop)" />
                <polygon points="800.1,198.8 809.1,185.1 815.2,198.0 805.2,210.1" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="809.1,185.1 815.2,198.0 813.0,199.8 806.9,186.9" fill="url(#gearToothTop)" />
                <polygon points="807.6,216.6 818.1,205.5 822.9,220.5 811.5,229.6" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="818.1,205.5 822.9,220.5 820.7,222.3 815.9,207.3" fill="url(#gearToothTop)" />
                <polygon points="813.3,236.9 825.1,228.9 828.4,245.4 816.0,251.2" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="825.1,228.9 828.4,245.4 826.2,247.2 822.9,230.7" fill="url(#gearToothTop)" />
                <polygon points="817.1,259.1 829.7,254.4 831.4,271.8 818.5,274.2" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="829.7,254.4 831.4,271.8 829.2,273.6 827.5,256.2" fill="url(#gearToothTop)" />
                <polygon points="818.9,282.3 831.9,281.1 831.9,298.9 818.9,297.7" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="831.9,281.1 831.9,298.9 829.7,300.7 829.7,282.9" fill="url(#gearToothTop)" />
                <polygon points="818.5,305.8 831.4,308.2 829.7,325.6 817.1,320.9" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="831.4,308.2 829.7,325.6 827.5,327.4 829.2,310.0" fill="url(#gearToothTop)" />
                <polygon points="816.0,328.8 828.4,334.6 825.1,351.1 813.3,343.1" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="828.4,334.6 825.1,351.1 822.9,352.9 826.2,336.4" fill="url(#gearToothTop)" />
                <polygon points="811.5,350.4 822.9,359.5 818.1,374.5 807.6,363.4" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="822.9,359.5 818.1,374.5 815.9,376.3 820.7,361.3" fill="url(#gearToothTop)" />
                <polygon points="805.2,369.9 815.2,382.0 809.1,394.9 800.1,381.2" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="815.2,382.0 809.1,394.9 806.9,396.7 813.0,383.8" fill="url(#gearToothTop)" />
                <polygon points="797.2,386.6 805.5,401.2 798.2,411.7 791.2,395.8" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="805.5,401.2 798.2,411.7 796.0,413.5 803.3,403.0" fill="url(#gearToothTop)" />
                <polygon points="787.8,400.0 794.1,416.6 786.0,424.2 781.1,406.6" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="794.1,416.6 786.0,424.2 783.8,426.0 791.9,418.4" fill="url(#gearToothTop)" />
                <polygon points="777.4,409.5 781.5,427.5 772.8,432.1 770.2,413.5" fill="url(#gearToothFace)" stroke="#78350f" strokeWidth="0.8" />
                <polygon points="781.5,427.5 772.8,432.1 770.6,433.9 779.3,429.3" fill="url(#gearToothTop)" />
              </g>

              {/* Cast-Iron Flywheel Rim Inside Gear (Dark Navy) */}
              <ellipse
                cx="758"
                cy="290"
                rx="58"
                ry="120"
                fill="url(#ironNavyFront)"
                stroke="#070f1a"
                strokeWidth="3"
              />

              {/* Flywheel Inner Beveled Rim */}
              <ellipse
                cx="758"
                cy="290"
                rx="46"
                ry="106"
                fill="#060c15"
                stroke="#2e4d7a"
                strokeWidth="2"
              />

              {/* --- 8 TAPERED SCULPTED CAST-IRON SPOKES --- */}
              <g id="flywheel_8_spokes">
                {/* Spoke 0 deg */}
                <polygon points="774.0,285.5 804.0,287.2 804.0,292.8 774.0,294.5" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="1" />
                <line x1="774.0" y1="290.0" x2="804.0" y2="290.0" stroke="#7ea7d8" strokeWidth="2.2" strokeLinecap="round" />
                {/* Spoke 45 deg */}
                <polygon points="772.5,306.6 792.5,363.0 788.5,366.9 766.1,313.0" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="1" />
                <line x1="769.3" y1="309.8" x2="790.5" y2="365.0" stroke="#7ea7d8" strokeWidth="2.2" strokeLinecap="round" />
                {/* Spoke 90 deg */}
                <polygon points="762.5,318.0 760.8,396.0 755.2,396.0 753.5,318.0" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="1" />
                <line x1="758.0" y1="318.0" x2="758.0" y2="396.0" stroke="#7ea7d8" strokeWidth="2.2" strokeLinecap="round" />
                {/* Spoke 135 deg */}
                <polygon points="749.9,313.0 727.5,366.9 723.5,363.0 743.5,306.6" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="1" />
                <line x1="746.7" y1="309.8" x2="725.5" y2="365.0" stroke="#7ea7d8" strokeWidth="2.2" strokeLinecap="round" />
                {/* Spoke 180 deg */}
                <polygon points="742.0,294.5 712.0,292.8 712.0,287.2 742.0,285.5" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="1" />
                <line x1="742.0" y1="290.0" x2="712.0" y2="290.0" stroke="#7ea7d8" strokeWidth="2.2" strokeLinecap="round" />
                {/* Spoke 225 deg */}
                <polygon points="743.5,273.4 723.5,217.0 727.5,213.1 749.9,267.0" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="1" />
                <line x1="746.7" y1="270.2" x2="725.5" y2="215.0" stroke="#7ea7d8" strokeWidth="2.2" strokeLinecap="round" />
                {/* Spoke 270 deg */}
                <polygon points="753.5,262.0 755.2,184.0 760.8,184.0 762.5,262.0" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="1" />
                <line x1="758.0" y1="262.0" x2="758.0" y2="184.0" stroke="#7ea7d8" strokeWidth="2.2" strokeLinecap="round" />
                {/* Spoke 315 deg */}
                <polygon points="766.1,267.0 788.5,213.1 792.5,217.0 772.5,273.4" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="1" />
                <line x1="769.3" y1="270.2" x2="790.5" y2="215.0" stroke="#7ea7d8" strokeWidth="2.2" strokeLinecap="round" />
              </g>

              {/* Flywheel Central Hub Collar (Brass Bushing) */}
              <ellipse cx="758" cy="290" rx="16" ry="28" fill="url(#goldPipingGrad)" stroke="#5c2605" strokeWidth="2" />
              <ellipse cx="758" cy="290" rx="9" ry="16" fill="url(#goldVerticalHighlight)" />
              <circle cx="758" cy="290" r="4.5" fill="#1b1208" stroke="#facc15" strokeWidth="1" />
            </g>

            {/* ======================================================== */}
            {/* 4. BOTTOM STEEL BLUE ROLLER                              */}
            {/* ======================================================== */}
            <g id="bottom_blue_roller">
              <rect x="294" y="286" width="32" height="82" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
              <ellipse cx="294" cy="327" rx="6" ry="41" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1.5" />
              <ellipse cx="326" cy="327" rx="7" ry="41" fill="url(#goldPipingGrad)" stroke="#78350f" strokeWidth="1.5" />

              <rect x="674" y="286" width="32" height="82" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
              <ellipse cx="674" cy="327" rx="7" ry="41" fill="url(#goldPipingGrad)" stroke="#78350f" strokeWidth="1.5" />
              <ellipse cx="706" cy="327" rx="6" ry="41" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1.5" />

              <rect
                x="324"
                y="286"
                width="352"
                height="82"
                fill="url(#blueRollerCylinder)"
              />
              <line x1="325" y1="312" x2="675" y2="312" stroke="#8ea5cf" strokeWidth="5" opacity="0.85" />
              <line x1="325" y1="315" x2="675" y2="315" stroke="#ffffff" strokeWidth="2.2" opacity="0.95" />
              <line x1="324" y1="367" x2="676" y2="367" stroke="#050811" strokeWidth="2.5" />
            </g>

            {/* ======================================================== */}
            {/* 5. LOWER FRONT BRASS TIE-ROD                             */}
            {/* ======================================================== */}
            <g id="lower_front_tie_rod">
              <rect
                x="278"
                y="433"
                width="437"
                height="15"
                rx="7.5"
                fill="url(#goldCylinderVertical)"
                stroke="#78350f"
                strokeWidth="2"
              />
              <line x1="280" y1="437" x2="713" y2="437" stroke="#fffde7" strokeWidth="2.2" opacity="0.95" />
              <line x1="280" y1="445" x2="713" y2="445" stroke="#451a03" strokeWidth="1.5" opacity="0.8" />
            </g>

            {/* ======================================================== */}
            {/* 6. PRINTED BROADSHEET NEWSPAPER                          */}
            {/* Supports Realistic English & Hindi Dummy News + Wireframe */}
            {/* ======================================================== */}
            <g
              id="printed_newspaper_sheet"
              className="cursor-pointer"
              onClick={toggleMode}
              title="Click newspaper to switch between English / Hindi / Placeholder Lines"
            >
              {/* Ambient Paper Cast Shadow */}
              <polygon
                points="336,288 664,288 680,614 314,614"
                fill="#080e18"
                opacity="0.38"
                filter="url(#paperShadowBlur)"
              />

              {/* Vintage Heavy Cream BroadSheet Rag Paper */}
              <polygon
                points="338,286 662,286 676,609 320,609"
                fill="#fef8e8"
                stroke="#cbd5e1"
                strokeWidth="1.4"
              />

              {/* Roller Inking Shadow Crease */}
              <rect x="338" y="286" width="324" height="6" fill="#1f0303" opacity="0.35" />

              {/* Decorative Outer Inset Border Frame */}
              <polygon
                points="348,298 652,298 665,599 331,599"
                fill="none"
                stroke="#4a6f98"
                strokeWidth="1.8"
              />

              {/* ====================================================== */}
              {/* OPTION A: REALISTIC DUMMY BROADSHEET CONTENT           */}
              {/* ====================================================== */}
              {contentMode !== 'wireframe' ? (
                <g id="newspaper_rich_dummy_content">
                  {/* 6.1 NEWSPAPER MASTHEAD (HEADER) */}
                  <g id="newspaper_masthead">
                    <line x1="358" y1="305" x2="642" y2="305" stroke="#37557d" strokeWidth="0.9" />

                    {/* Masthead Main Title */}
                    <text
                      x="500"
                      y="319"
                      textAnchor="middle"
                      fill="#162b48"
                      fontFamily={headerFont}
                      fontSize={isHindi ? "12.8" : "13.2"}
                      fontWeight="900"
                      letterSpacing={isHindi ? "0.6" : "1.8"}
                    >
                      {activeNews.masthead}
                    </text>

                    <line x1="358" y1="322.5" x2="642" y2="322.5" stroke="#37557d" strokeWidth="0.75" />

                    {/* Dateline & Issue Number */}
                    <text
                      x="500"
                      y="329.2"
                      textAnchor="middle"
                      fill="#2b4772"
                      fontFamily={textFont}
                      fontSize={isHindi ? "5.4" : "5.2"}
                      fontWeight="600"
                      letterSpacing={isHindi ? "0.2" : "0.5"}
                    >
                      {activeNews.dateline}
                    </text>

                    <line x1="358" y1="332.5" x2="642" y2="332.5" stroke="#37557d" strokeWidth="0.8" />
                  </g>

                  {/* 6.2 TOP-LEFT ILLUSTRATION (MOUNTAINS & SUN) + CAPTION */}
                  <g id="newspaper_illustration">
                    <rect
                      x="360"
                      y="337"
                      width="134"
                      height="86"
                      rx="2"
                      fill="#d0dfef"
                      stroke="#37557d"
                      strokeWidth="1.8"
                    />
                    <polygon points="362,413 414,364 464,413" fill="#3c5f8a" />
                    <polygon points="426,413 464,380 492,413" fill="#587ea9" />
                    <circle cx="454" cy="356" r="8" fill="#ffffff" />

                    {/* Photo Caption Strip */}
                    <rect x="360.5" y="413" width="133" height="10" fill="#1b2e47" rx="1" />
                    <text
                      x="427"
                      y="420.5"
                      textAnchor="middle"
                      fill="#f1f5f9"
                      fontFamily={textFont}
                      fontSize="4.9"
                      fontWeight="600"
                      fontStyle={isHindi ? "normal" : "italic"}
                    >
                      {activeNews.caption}
                    </text>
                  </g>

                  {/* 6.3 TOP-RIGHT STORY (CATEGORY, HEADLINE & REPORT) */}
                  <g id="newspaper_right_article_text">
                    <text
                      x="506"
                      y="346"
                      fill="#b91c1c"
                      fontFamily={textFont}
                      fontSize={isHindi ? "5.6" : "5.3"}
                      fontWeight="800"
                      letterSpacing="0.4"
                    >
                      {activeNews.topRight.tag}
                    </text>

                    {/* Lead Headline */}
                    {activeNews.topRight.headline.map((hl, i) => (
                      <text
                        key={`tr-hl-${i}`}
                        x="506"
                        y={355.5 + i * 9.2}
                        fill="#0f1f33"
                        fontFamily={textFont}
                        fontSize={isHindi ? "8" : "7.8"}
                        fontWeight="900"
                        letterSpacing={isHindi ? "0.1" : "0.2"}
                      >
                        {hl}
                      </text>
                    ))}

                    <line x1="506" y1="374" x2="642" y2="374" stroke="#94a3b8" strokeWidth="0.6" />

                    {/* Article body lines */}
                    {activeNews.topRight.body.map((line, i) => (
                      <text
                        key={`tr-b-${i}`}
                        x="506"
                        y={382.5 + i * 8.2}
                        fill="#233a59"
                        fontFamily={textFont}
                        fontSize={isHindi ? "5.6" : "5.4"}
                        fontWeight="500"
                      >
                        {line}
                      </text>
                    ))}
                  </g>

                  {/* 6.4 MIDDLE-LEFT ARTICLE */}
                  <g id="newspaper_bottom_article_text">
                    <text
                      x="360"
                      y="444.5"
                      fill="#0f1f33"
                      fontFamily={textFont}
                      fontSize={isHindi ? "8" : "7.6"}
                      fontWeight="900"
                      letterSpacing={isHindi ? "0.1" : "0.2"}
                    >
                      {activeNews.middleLeft.headline}
                    </text>

                    <line x1="360" y1="448" x2="538" y2="448" stroke="#94a3b8" strokeWidth="0.6" />

                    {/* Paragraph lines */}
                    {activeNews.middleLeft.body.map((line, i) => (
                      <text
                        key={`ml-b-${i}`}
                        x="360"
                        y={456.5 + i * 8.4}
                        fill="#233a59"
                        fontFamily={textFont}
                        fontSize={isHindi ? "5.6" : "5.4"}
                        fontWeight="500"
                      >
                        {line}
                      </text>
                    ))}
                  </g>

                  {/* 6.5 MIDDLE-RIGHT SPECIAL AD CARD */}
                  <g id="newspaper_ad_card">
                    <rect
                      x="552"
                      y="437"
                      width="92"
                      height="75"
                      rx="3"
                      fill="#eaf2fc"
                      stroke="#3b618b"
                      strokeWidth="1.4"
                    />
                    <rect
                      x="554.5"
                      y="439.5"
                      width="87"
                      height="70"
                      rx="2"
                      fill="none"
                      stroke="#6f91b5"
                      strokeWidth="0.7"
                      strokeDasharray="3 2"
                    />

                    {/* Notice Header */}
                    <text
                      x="598"
                      y="449.5"
                      textAnchor="middle"
                      fill="#0f1f33"
                      fontFamily={textFont}
                      fontSize="6"
                      fontWeight="900"
                      letterSpacing="0.4"
                    >
                      {activeNews.noticeCard.title}
                    </text>
                    <line x1="562" y1="453" x2="634" y2="453" stroke="#6f91b5" strokeWidth="0.6" />

                    {/* Brand Name */}
                    <text
                      x="598"
                      y="463"
                      textAnchor="middle"
                      fill="#162b48"
                      fontFamily={headerFont}
                      fontSize={isHindi ? "6.8" : "6.4"}
                      fontWeight="800"
                    >
                      {activeNews.noticeCard.brand}
                    </text>

                    {/* Items */}
                    <text
                      x="598"
                      y="472.5"
                      textAnchor="middle"
                      fill="#233a59"
                      fontFamily={textFont}
                      fontSize={isHindi ? "5.5" : "5.2"}
                      fontWeight="500"
                    >
                      {activeNews.noticeCard.item1}
                    </text>
                    <text
                      x="598"
                      y="481.5"
                      textAnchor="middle"
                      fill="#233a59"
                      fontFamily={textFont}
                      fontSize={isHindi ? "5.5" : "5.2"}
                      fontWeight="500"
                    >
                      {activeNews.noticeCard.item2}
                    </text>

                    {/* Offer */}
                    <text
                      x="598"
                      y="492"
                      textAnchor="middle"
                      fill="#b45309"
                      fontFamily={textFont}
                      fontSize={isHindi ? "5.7" : "5.4"}
                      fontWeight="800"
                    >
                      {activeNews.noticeCard.offer}
                    </text>

                    {/* Address */}
                    <text
                      x="598"
                      y="502"
                      textAnchor="middle"
                      fill="#64748b"
                      fontFamily={textFont}
                      fontSize="4.9"
                      fontWeight="500"
                    >
                      {activeNews.noticeCard.address}
                    </text>
                  </g>

                  {/* 6.6 BOTTOM FULL-WIDTH STORY */}
                  <g id="newspaper_bottom_section">
                    <line x1="358" y1="521" x2="642" y2="521" stroke="#37557d" strokeWidth="1" />
                    <line x1="358" y1="523.5" x2="642" y2="523.5" stroke="#37557d" strokeWidth="0.5" />

                    {/* Main Headline */}
                    <text
                      x="500"
                      y="533"
                      textAnchor="middle"
                      fill="#0f1f33"
                      fontFamily={textFont}
                      fontSize={isHindi ? "8" : "7.6"}
                      fontWeight="900"
                      letterSpacing={isHindi ? "0.2" : "0.3"}
                    >
                      {activeNews.bottomSection.headline}
                    </text>

                    <line x1="358" y1="536.5" x2="642" y2="536.5" stroke="#cbd5e1" strokeWidth="0.6" />

                    {/* Left Column */}
                    {activeNews.bottomSection.col1.map((line, i) => (
                      <text
                        key={`bs-c1-${i}`}
                        x="358"
                        y={545 + i * 8.2}
                        fill="#233a59"
                        fontFamily={textFont}
                        fontSize={isHindi ? "5.5" : "5.3"}
                        fontWeight="500"
                      >
                        {line}
                      </text>
                    ))}

                    {/* Column Divider */}
                    <line x1="499" y1="538.5" x2="499" y2="574" stroke="#cbd5e1" strokeWidth="0.6" />

                    {/* Right Column */}
                    {activeNews.bottomSection.col2.map((line, i) => (
                      <text
                        key={`bs-c2-${i}`}
                        x="505"
                        y={545 + i * 8.2}
                        fill="#233a59"
                        fontFamily={textFont}
                        fontSize={isHindi ? "5.5" : "5.3"}
                        fontWeight="500"
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                </g>
              ) : (
                /* ====================================================== */
                /* OPTION B: ORIGINAL WIREFRAME PLACEHOLDER LINES         */
                /* ====================================================== */
                <g id="newspaper_placeholder_wireframe">
                  <rect x="358" y="308" width="284" height="7.5" rx="1.5" fill="#507299" />
                  <rect x="358" y="320" width="284" height="2.5" rx="1" fill="#7594bd" />

                  <g id="newspaper_illustration">
                    <rect
                      x="360"
                      y="336"
                      width="134"
                      height="88"
                      rx="2"
                      fill="#d0dfef"
                      stroke="#507299"
                      strokeWidth="2"
                    />
                    <polygon points="362,422 414,370 464,422" fill="#446690" />
                    <polygon points="426,422 464,386 492,422" fill="#678cb8" />
                    <circle cx="454" cy="360" r="9" fill="#ffffff" />
                  </g>

                  <g id="newspaper_right_article_text">
                    <line x1="506" y1="344" x2="642" y2="344" stroke="#507299" strokeWidth="3.2" strokeLinecap="round" />
                    <line x1="506" y1="355" x2="642" y2="355" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="506" y1="366" x2="642" y2="366" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="506" y1="377" x2="642" y2="377" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="506" y1="388" x2="642" y2="388" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="506" y1="399" x2="642" y2="399" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="506" y1="410" x2="642" y2="410" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="506" y1="421" x2="588" y2="421" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                  </g>

                  <g id="newspaper_bottom_article_text">
                    <line x1="360" y1="442" x2="536" y2="442" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="360" y1="455" x2="536" y2="455" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="360" y1="468" x2="536" y2="468" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="360" y1="481" x2="536" y2="481" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="360" y1="494" x2="536" y2="494" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="360" y1="507" x2="492" y2="507" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                  </g>

                  <g id="newspaper_ad_card">
                    <rect
                      x="552"
                      y="440"
                      width="94"
                      height="72"
                      rx="2"
                      fill="#d9e6f4"
                      stroke="#507299"
                      strokeWidth="1.8"
                    />
                    <line x1="560" y1="454" x2="638" y2="454" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="560" y1="468" x2="638" y2="468" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="560" y1="482" x2="638" y2="482" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="560" y1="496" x2="620" y2="496" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                  </g>

                  <g id="newspaper_footer_lines">
                    <line x1="358" y1="528" x2="642" y2="528" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="358" y1="540" x2="642" y2="540" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="358" y1="552" x2="642" y2="552" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="358" y1="564" x2="642" y2="564" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="358" y1="576" x2="642" y2="576" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                    <line x1="358" y1="588" x2="550" y2="588" stroke="#507299" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </g>
              )}
            </g>

            {/* ======================================================== */}
            {/* 7. TOP CRIMSON RED ROLLER                                */}
            {/* ======================================================== */}
            <g id="top_red_roller">
              <rect x="294" y="208" width="32" height="78" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
              <ellipse cx="294" cy="247" rx="6" ry="39" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1.5" />
              <ellipse cx="326" cy="247" rx="7" ry="39" fill="url(#goldPipingGrad)" stroke="#78350f" strokeWidth="1.5" />

              <rect x="674" y="208" width="32" height="78" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
              <ellipse cx="674" cy="247" rx="7" ry="39" fill="url(#goldPipingGrad)" stroke="#78350f" strokeWidth="1.5" />
              <ellipse cx="706" cy="247" rx="6" ry="39" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1.5" />

              <rect
                x="324"
                y="208"
                width="352"
                height="78"
                fill="url(#redRollerCylinder)"
              />
              <line x1="324" y1="209" x2="676" y2="209" stroke="#380404" strokeWidth="2.5" />
              <line x1="325" y1="228" x2="675" y2="228" stroke="#ff938e" strokeWidth="4.5" opacity="0.85" />
              <line x1="325" y1="231" x2="675" y2="231" stroke="#ffffff" strokeWidth="2.4" opacity="0.95" />
              <line x1="324" y1="285" x2="676" y2="285" stroke="#1f0202" strokeWidth="3" />
            </g>

            {/* ======================================================== */}
            {/* 8. ARCHITECTURAL CAST-IRON STANCHIONS / FRAME            */}
            {/* ======================================================== */}
            <g id="stanchions_frame">
              {/* 8.1 LEFT STANCHION */}
              <g id="left_stanchion">
                <rect
                  x="160"
                  y="620"
                  width="199"
                  height="38"
                  rx="4"
                  fill="url(#ironNavyFront)"
                  stroke="#08101c"
                  strokeWidth="2.5"
                />
                <path
                  d="M 160 620 L 359 620 L 354 624 L 166 624 Z"
                  fill="url(#goldHorizontalBar)"
                  stroke="#78350f"
                  strokeWidth="0.8"
                />
                <rect
                  x="166"
                  y="626"
                  width="186"
                  height="26"
                  rx="2.5"
                  fill="none"
                  stroke="url(#goldPipingGrad)"
                  strokeWidth="2.8"
                />
                <line x1="162" y1="656" x2="357" y2="656" stroke="url(#goldHorizontalBar)" strokeWidth="2.5" />

                <rect
                  x="198"
                  y="582"
                  width="132"
                  height="38"
                  rx="3"
                  fill="url(#ironNavyFront)"
                  stroke="#08101c"
                  strokeWidth="2"
                />
                <line x1="199" y1="583" x2="329" y2="583" stroke="url(#goldHorizontalBar)" strokeWidth="2.5" />

                <rect
                  x="228"
                  y="590"
                  width="84"
                  height="24"
                  rx="4"
                  fill="#0d1828"
                  stroke="url(#goldPipingGrad)"
                  strokeWidth="2"
                />
                <g id="left_foot_cartouche">
                  <polygon points="270,598 274,602 270,606 266,602" fill="#fef08a" stroke="#78350f" strokeWidth="0.8" />
                  <path d="M 264 602 Q 256 596, 246 602 Q 238 607, 248 607" fill="none" stroke="url(#goldPipingGrad)" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M 276 602 Q 284 596, 294 602 Q 302 607, 292 607" fill="none" stroke="url(#goldPipingGrad)" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="242" cy="604" r="1.5" fill="#fef08a" />
                  <circle cx="298" cy="604" r="1.5" fill="#fef08a" />
                </g>

                <path
                  d="M 204 582 
                   C 214 545, 235 525, 235 480 
                   C 235 460, 212 455, 214 442 
                   C 216 430, 238 410, 245 360 
                   C 248 335, 232 320, 222 285 
                   C 218 270, 238 255, 248 235 
                   C 255 220, 258 210, 256 195 
                   C 252 180, 236 170, 237 160 
                   C 238 145, 254 130, 270 120 
                   L 316 120 
                   C 310 145, 308 170, 310 208 
                   L 310 440 
                   C 310 510, 316 550, 328 582 Z"
                  fill="url(#ironNavyFront)"
                  stroke="#08101d"
                  strokeWidth="2.5"
                />

                <path
                  d="M 206 582 
                   C 216 545, 237 525, 237 480 
                   C 237 460, 214 455, 216 442 
                   C 218 430, 240 410, 247 360 
                   C 250 335, 234 320, 224 285 
                   C 220 270, 240 255, 250 235 
                   C 257 220, 260 210, 258 195 
                   C 254 180, 238 170, 239 160 
                   C 240 145, 256 130, 272 122"
                  fill="none"
                  stroke="url(#goldPipingGrad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />

                <path
                  d="M 314 122 
                   C 308 145, 306 170, 308 208 
                   L 308 440 
                   C 308 510, 314 550, 326 582"
                  fill="none"
                  stroke="url(#goldPipingGrad)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                <circle cx="216" cy="442" r="7.5" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
                <circle cx="216" cy="442" r="3" fill="#fef08a" />

                <rect x="220" y="270" width="28" height="30" rx="3" fill="url(#ironNavyFront)" stroke="#09121f" strokeWidth="2" />
                <rect x="222" y="272" width="6" height="26" fill="url(#goldCylinderVertical)" />
                <ellipse cx="222" cy="285" rx="6" ry="14" fill="url(#goldPipingGrad)" stroke="#5c2605" strokeWidth="1.5" />
                <ellipse cx="222" cy="285" rx="3" ry="8" fill="#172b4c" />
                <circle cx="222" cy="285" r="2.5" fill="#fef08a" />

                <rect x="246" y="224" width="16" height="22" rx="2" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1.2" />
                <circle cx="250" cy="235" r="3" fill="#fef08a" />

                <rect x="264" y="116" width="56" height="12" rx="2" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="2" />
                <line x1="264" y1="117" x2="320" y2="117" stroke="url(#goldHorizontalBar)" strokeWidth="2.5" />
                <line x1="264" y1="127" x2="320" y2="127" stroke="url(#goldHorizontalBar)" strokeWidth="1.8" />
              </g>

              {/* 8.2 RIGHT STANCHION */}
              <g id="right_stanchion">
                <rect
                  x="645"
                  y="620"
                  width="195"
                  height="38"
                  rx="4"
                  fill="url(#ironNavyFront)"
                  stroke="#08101c"
                  strokeWidth="2.5"
                />
                <path
                  d="M 645 620 L 840 620 L 834 624 L 651 624 Z"
                  fill="url(#goldHorizontalBar)"
                  stroke="#78350f"
                  strokeWidth="0.8"
                />
                <rect
                  x="651"
                  y="626"
                  width="182"
                  height="26"
                  rx="2.5"
                  fill="none"
                  stroke="url(#goldPipingGrad)"
                  strokeWidth="2.8"
                />
                <line x1="647" y1="656" x2="838" y2="656" stroke="url(#goldHorizontalBar)" strokeWidth="2.5" />

                <rect
                  x="672"
                  y="582"
                  width="132"
                  height="38"
                  rx="3"
                  fill="url(#ironNavyFront)"
                  stroke="#08101c"
                  strokeWidth="2"
                />
                <line x1="673" y1="583" x2="803" y2="583" stroke="url(#goldHorizontalBar)" strokeWidth="2.5" />

                <rect
                  x="708"
                  y="590"
                  width="68"
                  height="24"
                  rx="4"
                  fill="#0d1828"
                  stroke="url(#goldPipingGrad)"
                  strokeWidth="2"
                />
                <g id="right_foot_cartouche">
                  <polygon points="742,598 746,602 742,606 738,602" fill="#fef08a" stroke="#78350f" strokeWidth="0.8" />
                  <path d="M 736 602 Q 728 596, 720 602 Q 714 607, 722 607" fill="none" stroke="url(#goldPipingGrad)" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M 748 602 Q 756 596, 764 602 Q 770 607, 762 607" fill="none" stroke="url(#goldPipingGrad)" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="718" cy="604" r="1.5" fill="#fef08a" />
                  <circle cx="766" cy="604" r="1.5" fill="#fef08a" />
                </g>

                <path
                  d="M 798 582 
                   C 788 545, 767 525, 767 480 
                   C 767 460, 790 455, 788 442 
                   C 786 430, 764 410, 757 360 
                   C 754 335, 770 320, 780 285 
                   C 784 270, 764 255, 754 235 
                   C 747 220, 744 210, 746 195 
                   C 750 180, 766 170, 765 160 
                   C 764 145, 748 130, 732 120 
                   L 686 120 
                   C 692 145, 694 170, 692 208 
                   L 692 440 
                   C 692 510, 686 550, 674 582 Z"
                  fill="url(#ironNavyFront)"
                  stroke="#08101d"
                  strokeWidth="2.5"
                />

                <path
                  d="M 796 582 
                   C 786 545, 765 525, 765 480 
                   C 765 460, 788 455, 786 442 
                   C 784 430, 762 410, 755 360 
                   C 752 335, 768 320, 778 285 
                   C 782 270, 762 255, 752 235 
                   C 745 220, 742 210, 744 195 
                   C 748 180, 764 170, 763 160 
                   C 762 145, 746 130, 730 122"
                  fill="none"
                  stroke="url(#goldPipingGrad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />

                <path
                  d="M 688 122 
                   C 694 145, 696 170, 694 208 
                   L 694 440 
                   C 694 510, 688 550, 676 582"
                  fill="none"
                  stroke="url(#goldPipingGrad)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Stepped brass collar at right upper roller level (x: 716..736, y: 235) */}
                <rect x="716" y="226" width="20" height="20" rx="3" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
                <ellipse cx="716" cy="236" rx="5" ry="10" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1.2" />

                {/* Stepped brass collar on right elbow boss (x: 764..784, y: 442) */}
                <rect x="764" y="432" width="20" height="20" rx="3" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
                <ellipse cx="784" cy="442" rx="7.5" ry="10" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
                <circle cx="784" cy="442" r="3" fill="#fef08a" />

                <rect x="682" y="116" width="56" height="12" rx="2" fill="url(#ironNavyFront)" stroke="#08101c" strokeWidth="2" />
                <line x1="682" y1="117" x2="738" y2="117" stroke="url(#goldHorizontalBar)" strokeWidth="2.5" />
                <line x1="682" y1="127" x2="738" y2="127" stroke="url(#goldHorizontalBar)" strokeWidth="1.8" />
              </g>
            </g>

            {/* ======================================================== */}
            {/* 9. ORNATE ARCHED TYMPANUM: "Manual Printing Press"        */}
            {/* ======================================================== */}
            <g id="top_arched_header">
              <path
                d="M 306 208 
                 L 306 155 
                 C 306 82, 396 35, 496 35 
                 C 596 35, 686 82, 686 155 
                 L 686 208 Z"
                fill="url(#archedPlateGrad)"
                stroke="#080f1a"
                strokeWidth="3.2"
              />

              <path
                d="M 314 206 
                 L 314 155 
                 C 314 88, 398 42, 496 42 
                 C 594 42, 678 88, 678 155 
                 L 678 206 Z"
                fill="none"
                stroke="url(#goldPipingGrad)"
                strokeWidth="7"
              />
              <path
                d="M 319 204 
                 L 319 155 
                 C 319 92, 400 47, 496 47 
                 C 592 47, 673 92, 673 155 
                 L 673 204 Z"
                fill="none"
                stroke="#451a03"
                strokeWidth="2"
              />
              <path
                d="M 324 202 
                 L 324 155 
                 C 324 96, 402 52, 496 52 
                 C 590 52, 668 96, 668 155 
                 L 668 202 Z"
                fill="none"
                stroke="#fef08a"
                strokeWidth="1.5"
                opacity="0.9"
              />

              <rect
                x="298"
                y="180"
                width="396"
                height="28"
                rx="2"
                fill="url(#ironNavyFront)"
                stroke="#08101d"
                strokeWidth="2.2"
              />
              <line x1="300" y1="181" x2="692" y2="181" stroke="url(#goldHorizontalBar)" strokeWidth="2.8" />
              <line x1="300" y1="207" x2="692" y2="207" stroke="url(#goldHorizontalBar)" strokeWidth="2.2" />

              <g id="apex_fleuron" transform="translate(496, 35)">
                <polygon points="0,-8 7,0 0,8 -7,0" fill="url(#goldPipingGrad)" stroke="#5c2605" strokeWidth="1.2" />
                <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
              </g>
              <polygon points="496,57 501,63 496,69 491,63" fill="#fef08a" stroke="#78350f" strokeWidth="1" />

              <path
                d="M 326 172 
                 C 336 156, 354 175, 368 162 
                 C 378 152, 366 142, 355 146 
                 C 342 151, 344 167, 332 170"
                fill="none"
                stroke="url(#goldPipingGrad)"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <circle cx="338" cy="162" r="2.8" fill="#fef08a" />
              <circle cx="363" cy="155" r="2.8" fill="#fef08a" />

              <path
                d="M 666 172 
                 C 656 156, 638 175, 624 162 
                 C 614 152, 626 142, 637 146 
                 C 650 151, 648 167, 660 170"
                fill="none"
                stroke="url(#goldPipingGrad)"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <circle cx="654" cy="162" r="2.8" fill="#fef08a" />
              <circle cx="629" cy="155" r="2.8" fill="#fef08a" />

              <path
                d="M 452 166 Q 476 161, 496 168 Q 516 161, 540 166"
                fill="none"
                stroke="url(#goldPipingGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <polygon points="496,164 500,168 496,172 492,168" fill="#fde047" stroke="#78350f" strokeWidth="0.8" />

              <text
                x="496"
                y="110"
                textAnchor="middle"
                className="victorian-title"
                fill="#ffffff"
                fontSize="38"
                fontWeight="900"
                letterSpacing="1.4"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.85))' }}
              >
                Manual
              </text>

              <text
                x="496"
                y="146"
                textAnchor="middle"
                className="victorian-title"
                fill="#ffffff"
                fontSize="31"
                fontWeight="900"
                letterSpacing="0.9"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.85))' }}
              >
                Printing Press
              </text>
            </g>

            {/* ======================================================== */}
            {/* 10. DUAL TOP BRASS ADJUSTMENT HANDWHEELS & SPINDLES      */}
            {/* ======================================================== */}
            <g id="top_adjustment_screws">
              <g id="left_screw">
                <rect x="284" y="56" width="28" height="66" fill="url(#screwSpindleGrad)" />
                {[64, 72, 80, 88, 96, 104, 112].map((sy) => (
                  <line
                    key={`screw-thread-l-${sy}`}
                    x1="284"
                    y1={sy}
                    x2="312"
                    y2={sy - 4}
                    stroke="#94a3b8"
                    strokeWidth="2.2"
                  />
                ))}

                <ellipse cx="298" cy="120" rx="18" ry="7" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.8" />
                <rect x="282" y="112" width="32" height="8" rx="1.5" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1" />

                <path
                  d="M 244 40 
                   L 244 56 
                   A 54 18 0 0 0 352 56 
                   L 352 40 Z"
                  fill="url(#goldCylinderVertical)"
                  stroke="#5c2605"
                  strokeWidth="2.2"
                />
                <ellipse cx="298" cy="56" rx="54" ry="18" fill="none" stroke="#78350f" strokeWidth="2" />

                {[252, 262, 274, 286, 298, 310, 322, 334, 344].map((kx) => (
                  <line
                    key={`knurl-l-${kx}`}
                    x1={kx}
                    y1="46"
                    x2={kx}
                    y2="66"
                    stroke="#451a03"
                    strokeWidth="1.4"
                    opacity="0.8"
                  />
                ))}

                <ellipse
                  cx="298"
                  cy="40"
                  rx="54"
                  ry="18"
                  fill="url(#brassDishGrad)"
                  stroke="#5c2605"
                  strokeWidth="2.5"
                />
                <ellipse cx="298" cy="39" rx="36" ry="11" fill="url(#brassDishGrad)" stroke="#78350f" strokeWidth="1.8" />
                <ellipse cx="298" cy="38" rx="14" ry="5.5" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.2" />
                <ellipse cx="298" cy="37" rx="5" ry="2.5" fill="#fef08a" />
              </g>

              <g id="right_screw">
                <rect x="684" y="56" width="28" height="66" fill="url(#screwSpindleGrad)" />
                {[64, 72, 80, 88, 96, 104, 112].map((sy) => (
                  <line
                    key={`screw-thread-r-${sy}`}
                    x1="684"
                    y1={sy}
                    x2="712"
                    y2={sy - 4}
                    stroke="#94a3b8"
                    strokeWidth="2.2"
                  />
                ))}

                <ellipse cx="698" cy="120" rx="18" ry="7" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.8" />
                <rect x="682" y="112" width="32" height="8" rx="1.5" fill="url(#goldCylinderVertical)" stroke="#78350f" strokeWidth="1" />

                <path
                  d="M 644 40 
                   L 644 56 
                   A 54 18 0 0 0 752 56 
                   L 752 40 Z"
                  fill="url(#goldCylinderVertical)"
                  stroke="#5c2605"
                  strokeWidth="2.2"
                />
                <ellipse cx="698" cy="56" rx="54" ry="18" fill="none" stroke="#78350f" strokeWidth="2" />

                {[652, 662, 674, 686, 698, 710, 722, 734, 744].map((kx) => (
                  <line
                    key={`knurl-r-${kx}`}
                    x1={kx}
                    y1="46"
                    x2={kx}
                    y2="66"
                    stroke="#451a03"
                    strokeWidth="1.4"
                    opacity="0.8"
                  />
                ))}

                <ellipse
                  cx="698"
                  cy="40"
                  rx="54"
                  ry="18"
                  fill="url(#brassDishGrad)"
                  stroke="#5c2605"
                  strokeWidth="2.5"
                />
                <ellipse cx="698" cy="39" rx="36" ry="11" fill="url(#brassDishGrad)" stroke="#78350f" strokeWidth="1.8" />
                <ellipse cx="698" cy="38" rx="14" ry="5.5" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.2" />
                <ellipse cx="698" cy="37" rx="5" ry="2.5" fill="#fef08a" />
              </g>
            </g>

            {/* ======================================================== */}
            {/* 11. CAST-IRON CRANK ARM & TURNED WALNUT WOOD HANDLE      */}
            {/* Exact recreation of user zoom reference image            */}
            {/* Metallic Steel-Blue Arm with Chamfer Highlight & Grip    */}
            {/* ======================================================== */}
            <g
              id="crank_handle_assembly"
              className={`cursor-pointer ${isCranking ? 'crank-rotate' : 'transition-transform duration-300'}`}
              style={{
                transformOrigin: '758px 290px',
                transform: isCranking ? 'rotate(360deg)' : 'none',
              }}
              onClick={() => setIsCranking(!isCranking)}
              title="Click to Crank Press"
            >
              {/* Upper Axle Pivot Pin / Shaft from Gear Rim (x: 820 to 836, y: 268) */}
              <rect x="822" y="262" width="12" height="12" rx="2" fill="url(#ironNavyFront)" stroke="#091322" strokeWidth="1.5" />


              {/* Solid Cast-Iron Crank Arm (Metallic Steel-Blue) */}
              {/* Upper Boss at (831, 268) -> Dogleg -> Vertical Dropper to Lower Boss at (848, 453) */}
              <path
                d="M 822 262
       C 824 256, 838 256, 840 262
       C 843 270, 856 290, 861 305
       L 861 440
       C 866 446, 866 460, 861 466
       C 856 472, 840 472, 835 466
       C 830 460, 830 446, 835 440
       L 835 305
       C 830 295, 822 278, 822 268 Z"
                fill="url(#crankSteelBlue)"
                stroke="#091322"
                strokeWidth="2.2"
              />
              {/* Crank Arm Right Edge Specular Bevel Line */}
              <path
                d="M 839 261
       C 842 270, 855 290, 860 305
       L 860 440
       C 865 446, 865 460, 860 466"
                fill="none"
                stroke="url(#crankHighlightBevel)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {/* Upper Pivot Boss & Pin at (831, 268) */}
              <circle cx="831" cy="268" r="10" fill="url(#crankSteelBlue)" stroke="#091322" strokeWidth="1.8" />
              <circle cx="831" cy="268" r="7.5" fill="none" stroke="url(#crankHighlightBevel)" strokeWidth="1.4" />
              <circle cx="831" cy="268" r="4.5" fill="url(#goldPipingGrad)" stroke="#451a03" strokeWidth="1.2" />

              {/* Lower Pivot Boss & Brass Rivet Pin at (848, 453) */}
              <circle cx="848" cy="453" r="15" fill="url(#crankSteelBlue)" stroke="#091322" strokeWidth="2.2" />
              <circle cx="848" cy="453" r="11.5" fill="none" stroke="url(#crankHighlightBevel)" strokeWidth="1.8" />
              <circle cx="848" cy="453" r="6" fill="url(#goldPipingGrad)" stroke="#5c2605" strokeWidth="1.4" />
              <circle cx="846" cy="451" r="2" fill="#ffffff" opacity="0.8" />


              {/* Polished Brass Ferrule Sleeve connecting Boss to Walnut Grip */}
              <rect x="861" y="443" width="7" height="38" rx="2" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.2" />
              <rect x="868" y="441" width="14" height="42" rx="3" fill="url(#goldCylinderVertical)" stroke="#5c2605" strokeWidth="1.5" />
              <line x1="872" y1="443" x2="872" y2="481" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />

              {/* Turned Walnut Wood Grip Silhouette */}
              {/* Narrow waist at 896 (r=18), swelling belly at 944 (r=30), rounded dome cap at 980 */}
              <path
                d="M 882 441
       C 888 443, 892 445, 898 445
       C 912 445, 926 433, 944 432
       C 962 431, 974 442, 980 462
       C 974 482, 962 493, 944 492
       C 926 491, 912 479, 898 479
       C 892 479, 888 481, 882 483 Z"
                fill="url(#walnutWoodGrad)"
                stroke="#2e1005"
                strokeWidth="2.0"
              />

              {/* Underside Depth Shadow along bottom belly */}
              <path
                d="M 884 478
       C 892 476, 910 488, 944 490
       C 960 491, 972 482, 978 464
       C 974 478, 960 487, 944 487
       C 926 487, 910 475, 898 475
       C 892 475, 888 476, 884 478 Z"
                fill="#1c0702"
                opacity="0.55"
              />

              {/* High-Gloss Lacquer Specular Reflection Highlight */}
              <path
                d="M 890 449
       C 906 448, 924 439, 944 438
       C 958 437, 968 444, 972 453
       C 966 448, 956 443, 944 444
       C 924 445, 906 454, 890 454 Z"
                fill="url(#woodGripSpecular)"
                opacity="0.9"
              />
              {/* Pure White Hotspot Glint on Swelling Belly */}
              <ellipse cx="942" cy="442" rx="14" ry="2.2" fill="#ffffff" opacity="0.75" />

            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export const Section10 = () => {
  return (
    <section
      id="section-10"
      className="w-full relative select-none overflow-hidden bg-[#f8fafc] border-b border-slate-200"
    >
      <Printer />
    </section>
  );
};

export default Section10;
