import React, { useState, useEffect } from 'react';
import {
  Shield,
  FileText,
  Search,
  GraduationCap,
  TrendingUp,
  Users,
  Globe,
  Monitor,
  Check,
  MousePointer,
  RefreshCw,
} from 'lucide-react';

/**
 * Editorial Newspaper Configuration & Data
 * Easily customizable data structures for articles, news teasers, services, and statistics.
 */
const INITIAL_NEWSPAPER_DATA = {
  meta: {
    title: "CR Real time news",
    subOrganization: "CR CYBER CRIME FOUNDATION",
    tagline: "Cyber Safety | Awareness | Training | Prevention | Support",
    location: "Bhubaneswar, Odisha",
    price: "₹5.00",
    website: "www.crccf.org",
  },

  teasers: [
    {
      id: 1,
      category: "CYBER ALERT",
      badgeColor: "bg-[#A20D1C] text-white",
      headline: "CERT-In Issues High Severity Advisory on Critical Browser & Android Vulnerabilities",
      page: "Page : 02",
      type: "hacker",
    },
    {
      id: 2,
      category: "AWARENESS",
      badgeColor: "bg-[#0C2855] text-white",
      headline: "Multi-State Fake Job & Investment Fraud Ring Dismantled by Cyber Cell",
      page: "Page : 03",
      type: "lock",
    },
    {
      id: 3,
      category: "TRAINING",
      badgeColor: "bg-[#0C2855] text-white",
      headline: "National Cyber Security Awareness Training Reaches Over 50,000 Students",
      page: "Page : 05",
      type: "training",
    },
    {
      id: 4,
      category: "EVENTS",
      badgeColor: "bg-[#1E3A8A] text-white",
      headline: "All-India Cyber Defense Hackathon 2026 Announced with ₹25 Lakh Prize Pool",
      page: "Page : 08",
      type: "hackathon",
    },
  ],

  featuredStory: {
    headline: "How to Use CRCCF?",
    subheadline: "A Complete Guide to Accessing Services, Reporting Cyber Crimes, Learning, and Staying Safe Online",
    dateline: "Bhubaneswar:",
    content: "The CR Cyber Crime Foundation (CRCCF) is a national initiative dedicated to cyber crime prevention, awareness, support, and digital safety. The CRCCF platform gives citizens, students, professionals, and organizations a single, trusted place to learn, report, verify, and get support for cyber-related issues across all Indian states and Union Territories.",
    continuation: "Continued on Page 04 »",
  },

  whatIsCRCCF: {
    title: "What is CRCCF?",
    intro: "CRCCF (CR Cyber Crime Foundation) works to create a safer digital society by offering:",
    points: [
      "Cyber crime reporting and assistance",
      "Awareness and training programs",
      "Verification and security tools",
      "Research and preventive initiatives",
      "Support for cyber crime victims",
    ],
  },

  howToUseSteps: {
    title: "How to Use CRCCF – Step by Step",
    steps: [
      { num: 1, text: "Visit the official website:", link: "www.crccf.org" },
      { num: 2, text: "Choose a service (Report Crime, Track Case, Awareness, Training, Verification, etc.)" },
      { num: 3, text: "Fill in the required details and submit" },
      { num: 4, text: "Get a reference ID to track your request" },
      { num: 5, text: "Receive updates and support from the CRCCF team" },
    ],
  },

  services: [
    {
      id: 1,
      title: "Report Cyber Crime",
      desc: "File a complaint for online fraud, hacking, or digital abuse.",
      color: "bg-[#D92D20] text-white",
      icon: "laptop",
    },
    {
      id: 2,
      title: "Track Your Case",
      desc: "Check real-time status using your reference ID.",
      color: "bg-[#0070F3] text-white",
      icon: "search",
    },
    {
      id: 3,
      title: "Awareness & Training",
      desc: "Access free resources, courses, and cyber safety quizzes.",
      color: "bg-[#16A34A] text-white",
      icon: "grad",
    },
    {
      id: 4,
      title: "Verification Services",
      desc: "Verify documents, identities, and digital credentials securely.",
      color: "bg-[#7C3AED] text-white",
      icon: "verify",
    },
    {
      id: 5,
      title: "Live Cyber Alerts",
      desc: "Stay updated on the latest cyber threats and fraud trends.",
      color: "bg-[#EA580C] text-white",
      icon: "trend",
    },
  ],

  featuredReport: {
    headline: "CRCCF Launches Nationwide Cyber Awareness Drive Across India",
    dateline: "Bhubaneswar:",
    content: "CRCCF has started a nationwide cyber awareness drive to educate citizens, students, and professionals about online safety, cyber frauds, phishing threats, and data protection across public and private sectors.",
    continuation: "Continued on Page 06 »",
  },

  safetyTips: [
    "Use strong and unique passwords",
    "Enable two-factor authentication (2FA)",
    "Never click on unknown links",
    "Verify before sharing personal details",
    "Keep your devices and apps updated",
    "Report any suspicious activity to CRCCF",
  ],

  impactStats: [
    { value: "50,000+", label: "Citizens Reached", icon: "users" },
    { value: "12,000+", label: "Complaints Assisted", icon: "doc" },
    { value: "200+", label: "Training Programs", icon: "grad" },
    { value: "95%", label: "Resolution Support", icon: "shield" },
  ],
};

/**
 * Helper to compute real live dates, issue number, and day
 */
function getRealTimeMetadata() {
  const now = new Date();
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  return {
    day: days[now.getDay()],
    dateShort: `${String(now.getDate()).padStart(2, '0')} ${months[now.getMonth()]} ${now.getFullYear()}`,
    time: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    edition: `Vol. 02, Issue ${dayOfYear}`,
    location: "Bhubaneswar, Odisha",
    price: "₹5.00"
  };
}

/**
 * Main Digital Newspaper Page Component
 */
function NewsPaper() {
  const [data] = useState(INITIAL_NEWSPAPER_DATA);
  const [teasers, setTeasers] = useState(INITIAL_NEWSPAPER_DATA.teasers);
  const [realTime, setRealTime] = useState(getRealTimeMetadata);
  const [isFetching, setIsFetching] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState('');

  // 1. Live real-time clock updating every second
  useEffect(() => {
    const timer = setInterval(() => {
      setRealTime(getRealTimeMetadata());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Fetch real live news headlines from Hacker News public API
  const fetchRealLiveNews = async () => {
    try {
      setIsFetching(true);
      const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const storyIds = await res.json();
      if (Array.isArray(storyIds) && storyIds.length >= 4) {
        const top4 = storyIds.slice(0, 4);
        const storyPromises = top4.map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((r) => r.json())
        );
        const stories = await Promise.all(storyPromises);

        setTeasers((prev) =>
          prev.map((t, idx) => {
            if (stories[idx] && stories[idx].title) {
              return {
                ...t,
                headline: stories[idx].title,
              };
            }
            return t;
          })
        );
        setLastSyncTime(
          new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
        );
      }
    } catch (e) {
      console.warn('Real live API note: using structured cyber security news', e);
    } finally {
      setIsFetching(false);
    }
  };

  // Fetch once on mount
  useEffect(() => {
    fetchRealLiveNews();
  }, []);

  return (
    <div className="w-full bg-[#E5E2D9] py-4 sm:py-8 md:py-10 px-2 sm:px-4 md:px-6 flex flex-col items-center justify-start select-none font-serif overflow-x-hidden">
      {/* THE PRINTED NEWSPAPER SHEET */}
      <main
        className="w-full max-w-[1120px] bg-[#F8F5ED] text-[#171717] rounded-[2px] p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0,0,0,0.25), 0 0 0 1px #d6cfbe',
        }}
      >
        {/* Subtle authentic paper texture watermark overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* 1. NEWSPAPER HEADER & MASTHEAD (Centered Heading with Real Live Data) */}
        <NewspaperMasthead
          meta={data.meta}
          realTime={realTime}
          isFetching={isFetching}
          onRefresh={fetchRealLiveNews}
          lastSyncTime={lastSyncTime}
        />

        {/* 2. TOP NEWS TEASER STRIP (4 Stories with Real-Time Feeds) */}
        <NewsTeaserStrip teasers={teasers} />

        {/* Thick divider between Teaser Strip and Main Stories */}
        <div className="w-full my-3 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />

        {/* 3. MAIN UPPER SECTION: FEATURED STORY & RIGHT EDITORIAL SIDEBAR */}
        <section className="flex flex-col lg:flex-row gap-5 mb-4 items-stretch">
          {/* Main Story Area (approx 67% width) */}
          <article className="w-full lg:w-[67%] flex flex-col justify-between lg:pr-5 lg:border-r border-[#C8C2B5]">
            <FeaturedArticle story={data.featuredStory} />
          </article>

          {/* Right Editorial Sidebar (approx 33% width) */}
          <aside className="w-full lg:w-[33%] flex flex-col justify-between gap-3.5">
            <HighlightsSidebar data={data.whatIsCRCCF} />
            <QuickGuide data={data.howToUseSteps} />
          </aside>
        </section>

        {/* Heavy double horizontal divider between Upper and Lower sections */}
        <div className="w-full my-3.5 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />

        {/* 4. LOWER NEWS SECTION (3-COLUMN EDITORIAL GRID) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4 items-stretch">
          {/* Column 1: Key Services */}
          <div className="w-full flex flex-col md:pr-4 md:border-r border-[#C8C2B5]">
            <ServicesColumn services={data.services} />
          </div>

          {/* Column 2: Featured Report */}
          <div className="w-full flex flex-col md:px-2 md:border-r border-[#C8C2B5]">
            <FeaturedReportColumn report={data.featuredReport} />
          </div>

          {/* Column 3: Safety Tips & Impact Stats */}
          <div className="w-full flex flex-col justify-between gap-3.5 md:pl-2">
            <SafetyTipsColumn tips={data.safetyTips} />
            <ImpactStatsModule stats={data.impactStats} />
          </div>
        </section>

        {/* Double divider before Footer Strip */}
        <div className="w-full mb-3 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />

        {/* 5. BOTTOM PUBLICATION STRIP / FOOTER BANNER */}
        <NewspaperFooter meta={data.meta} />
      </main>

      {/* Embedded Google Web Fonts for High-Fidelity Editorial Typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=Cinzel:wght@700;800;900&family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        .font-masthead {
          font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
        }
        .font-headline {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        }
        .font-body-editorial {
          font-family: 'Newsreader', Merriweather, Georgia, serif;
          line-height: 1.48;
        }
        .font-condensed {
          font-family: 'Oswald', 'Inter', -apple-system, sans-serif;
        }
      `}</style>
    </div>
  );
}

/**
 * 1. Masthead Component
 * Strictly Centered Headline + Real-Time Live Date & Metadata + Responsive Balance
 */
function NewspaperMasthead({ meta, realTime, isFetching, onRefresh, lastSyncTime }) {
  return (
    <header className="w-full flex flex-col mb-2.5">
      {/* Top Bar: Organization Tagline + Live Real-Time Clock & Status */}
      <div className="w-full flex items-center justify-between py-1 px-1 text-[11px] font-sans border-b border-[#1a1a1a] flex-wrap gap-y-1">
        {/* Left: Real-Time Live Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping shrink-0" />
          <span className="font-condensed font-bold tracking-wider uppercase text-[10px] text-[#A20D1C]">
            LIVE EDITION
          </span>
          <span className="text-gray-400 font-mono">|</span>
          <span className="font-mono text-[10.5px] font-bold text-[#1f2937]">
            {realTime.time} IST
          </span>
        </div>

        {/* Center: Top Organization Title */}
        <div className="font-serif font-black text-[11px] sm:text-[13px] tracking-[0.22em] text-[#1a1a1a] uppercase text-center order-first sm:order-none w-full sm:w-auto">
          {meta.subOrganization}
        </div>

        {/* Right: Live Sync Trigger Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onRefresh}
            disabled={isFetching}
            className="flex items-center gap-1 text-[10px] font-sans font-bold text-[#0C2855] hover:text-[#A20D1C] bg-[#EDE9DF] hover:bg-[#E2DDD0] px-2 py-0.5 rounded border border-[#C5BFB3] transition-colors cursor-pointer"
            title="Refresh Real-Time News Data"
          >
            <RefreshCw className={`w-2.5 h-2.5 ${isFetching ? 'animate-spin' : ''}`} />
            <span>{isFetching ? 'Syncing...' : lastSyncTime ? `Live (${lastSyncTime})` : 'Live Sync'}</span>
          </button>
        </div>
      </div>

      {/* Main Masthead Grid: Centered Headline with Left/Right Editorial Balance */}
      <div className="w-full relative py-2 flex flex-col items-center justify-center">
        {/* Left Editorial Metadata (Desktop balance for date box) */}
        <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col items-start text-left w-[170px] border-r border-[#C8C2B5] pr-3">
          <div className="bg-[#1F2937] text-white px-2.5 py-0.5 rounded-[2px] text-[9.5px] font-sans font-black tracking-widest uppercase mb-1 shadow-2xs">
            DIGITAL BROADSHEET
          </div>
          <div className="font-headline font-bold text-[13px] text-[#171717] leading-tight">
            {realTime.edition}
          </div>
          <div className="text-[10px] font-sans text-[#444] font-medium leading-tight mt-0.5">
            Real-Time Wire Feed
          </div>
          <div className="text-[10.5px] font-sans text-emerald-700 font-bold leading-tight mt-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
            <span>Live Broadcast</span>
          </div>
        </div>

        {/* Center: Massive Headline - STRICTLY AND MATHEMATICALLY CENTERED */}
        <div className="w-full text-center flex flex-col items-center justify-center px-1 lg:px-48">
          <h1 className="leading-none tracking-tight flex items-baseline justify-center flex-wrap gap-x-2.5 sm:gap-x-4">
            <span className="font-masthead font-black text-4xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#0C2855] tracking-tight">
              CR
            </span>
            <span className="font-headline italic font-black text-4xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#A20D1C] tracking-tight">
              Real time news
            </span>
          </h1>

          {/* Under-title Tagline Bar (Centered) */}
          <div className="w-full mt-2 pt-1 border-t border-[#D5CEC0] flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3 text-[11px] sm:text-[12px] font-sans font-semibold text-[#222222]">
            <span>Cyber Safety</span>
            <span className="text-[#A20D1C] font-black">|</span>
            <span>Awareness</span>
            <span className="text-[#A20D1C] font-black">|</span>
            <span>Training</span>
            <span className="text-[#A20D1C] font-black">|</span>
            <span>Prevention</span>
            <span className="text-[#A20D1C] font-black">|</span>
            <span>Support</span>
          </div>
        </div>

        {/* Right on Desktop / Centered below on Tablet & Mobile: Real-Time Date & Metadata Box */}
        <div className="mt-3 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex flex-col items-center lg:items-end text-center lg:text-right border-t lg:border-t-0 lg:border-l border-[#C8C2B5] pt-2 lg:pt-0 pl-0 lg:pl-3.5 w-full lg:w-[170px]">
          {/* Day Navy Pill (Dynamically real current day) */}
          <div className="bg-[#0C2855] text-white px-5 py-0.5 rounded-[2px] text-xs font-sans font-black tracking-widest uppercase mb-1 shadow-2xs">
            {realTime.day}
          </div>
          {/* Real Live Formatted Date */}
          <div className="font-headline font-bold text-[15.5px] text-[#171717] leading-tight">
            {realTime.dateShort}
          </div>
          {/* Real Edition Location */}
          <div className="text-[11px] font-sans text-[#444] font-medium leading-tight mt-0.5">
            {realTime.location}
          </div>
          {/* Real Volume / Issue */}
          <div className="text-[10.5px] font-sans font-bold text-[#171717] leading-tight mt-0.5">
            {realTime.edition}
          </div>
          {/* Price */}
          <div className="text-[11.5px] font-sans font-black text-[#A20D1C] mt-1 pt-1 border-t border-[#D5CEC0] w-full max-w-[150px] text-center lg:text-right">
            Price : {realTime.price}
          </div>
        </div>
      </div>

      {/* Double Horizontal Rule beneath Masthead */}
      <div className="w-full mt-2 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />
    </header>
  );
}

/**
 * 2. Top News Teaser Strip (4 Stories with thumbnails & badges)
 */
function NewsTeaserStrip({ teasers }) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-[#C8C2B5]">
        {teasers.map((t, idx) => (
          <div
            key={t.id}
            className={`flex items-start gap-2.5 pt-2 sm:pt-0 ${idx !== 0 ? 'sm:pl-3' : ''}`}
          >
            {/* Small News Thumbnail Photo */}
            <div className="w-[84px] h-[58px] shrink-0 rounded-[2px] overflow-hidden border border-[#A8A294] shadow-2xs">
              <EditorialThumbnail type={t.type} />
            </div>

            {/* Teaser Text Content */}
            <div className="flex-1 flex flex-col justify-between min-h-[58px]">
              <div>
                <span
                  className={`inline-block px-1.5 py-0.5 text-[8.5px] font-condensed font-black tracking-wider uppercase rounded-[2px] leading-none mb-1 ${t.badgeColor}`}
                >
                  {t.category}
                </span>
                <h4 className="font-headline font-bold text-[12px] leading-[1.25] text-[#171717] line-clamp-2 hover:text-[#A20D1C] transition-colors cursor-pointer">
                  {t.headline}
                </h4>
              </div>
              <span className="text-[10px] font-sans font-bold text-[#4B5563] mt-0.5">
                {t.page}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * 3. Featured Article Component
 * Giant Dominant Headline + Editorial Lead Column + Large Laptop Workspace Photo
 */
function FeaturedArticle({ story }) {
  return (
    <div className="w-full flex flex-col h-full justify-between">
      <div>
        {/* Massive Dominant Headline */}
        <h2 className="font-headline font-black text-3xl sm:text-4xl md:text-[50px] leading-[0.96] text-[#171717] tracking-tight mb-2 hover:text-[#0C2855] transition-colors">
          {story.headline}
        </h2>

        {/* Subheadline / Deck */}
        <h3 className="font-serif font-medium italic text-[14px] sm:text-[15.5px] leading-[1.3] text-[#2b2b2b] pb-2.5 border-b border-[#D5CEC0] mb-3">
          {story.subheadline}
        </h3>

        {/* Article Body Grid (Lead Story Column + Large Portal Screen Photo) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch">
          {/* Left Column Text (approx 4.5 cols) */}
          <div className="sm:col-span-5 flex flex-col justify-between pr-0 sm:pr-2">
            <div className="font-body-editorial text-[13.5px] sm:text-[14px] leading-[1.48] text-[#222222] text-justify">
              <span className="font-bold text-[#0C2855] text-[14.5px]">
                {story.dateline}{' '}
              </span>
              {story.content}
            </div>

            <a
              href="#page4"
              className="inline-flex items-center gap-1 font-sans font-bold text-xs text-[#A20D1C] hover:underline mt-3"
            >
              <span>{story.continuation}</span>
            </a>
          </div>

          {/* Right Photo Column: Laptop with CRCCF Portal Screen (approx 7.5 cols) */}
          <div className="sm:col-span-7 flex flex-col mt-2 sm:mt-0">
            <div className="w-full h-full min-h-[220px] sm:min-h-[250px] rounded-[2px] overflow-hidden border border-[#171717] shadow-2xs relative">
              <LaptopPortalIllustration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Highlights Sidebar ("What is CRCCF?")
 */
function HighlightsSidebar({ data }) {
  return (
    <div className="w-full border border-[#0C2855] rounded-[2px] overflow-hidden bg-[#FAF8F2] shadow-2xs">
      {/* Solid Navy Header Bar */}
      <div className="bg-[#0C2855] text-white py-1.5 px-3 text-center">
        <h3 className="font-headline font-bold text-sm sm:text-[15px] tracking-wide">
          {data.title}
        </h3>
      </div>

      {/* Content Area */}
      <div className="p-2.5">
        <p className="font-body-editorial text-xs leading-[1.35] text-[#333333] mb-2 font-medium">
          {data.intro}
        </p>

        <ul className="flex flex-col gap-1.5">
          {data.points.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs font-sans font-semibold text-[#1A1A1A]">
              <div className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="leading-tight">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * 5. Quick Guide Component ("How to Use CRCCF – Step by Step")
 */
function QuickGuide({ data }) {
  return (
    <div className="w-full border border-[#A20D1C] rounded-[2px] overflow-hidden bg-[#FAF8F2] shadow-2xs">
      {/* Solid Crimson Red Header Bar */}
      <div className="bg-[#A20D1C] text-white py-1.5 px-3 text-center">
        <h3 className="font-headline font-bold text-sm sm:text-[15px] tracking-wide">
          {data.title}
        </h3>
      </div>

      {/* Steps List */}
      <div className="p-2.5">
        <ol className="flex flex-col gap-2">
          {data.steps.map((step) => (
            <li key={step.num} className="flex items-start gap-2.5 text-xs font-sans">
              {/* Circular Navy Number Badge */}
              <span className="w-4 h-4 rounded-full bg-[#0C2855] text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                {step.num}
              </span>
              <div className="leading-snug text-[#1A1A1A] font-semibold">
                {step.text}{' '}
                {step.link && (
                  <a
                    href={`https://${step.link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0052CC] font-bold underline hover:text-[#A20D1C]"
                  >
                    {step.link}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/**
 * 6. Bottom News Column 1: Key Services You Can Use
 */
function ServicesColumn({ services }) {
  return (
    <div className="w-full flex flex-col">
      <h3 className="font-headline font-black text-lg sm:text-[18.5px] text-[#0C2855] leading-tight pb-1.5 border-b-2 border-[#0C2855] mb-2.5">
        Key Services You Can Use on CRCCF
      </h3>

      <div className="flex flex-col divide-y divide-[#DCD7CA]">
        {services.map((item) => (
          <div key={item.id} className="py-2 first:pt-0 last:pb-0 flex items-start gap-2.5">
            {/* Color-Coded Square Service Icon */}
            <div
              className={`w-7 h-7 rounded-[4px] shrink-0 flex items-center justify-center shadow-2xs ${item.color}`}
            >
              <ServiceIconRenderer type={item.icon} />
            </div>

            {/* Description Text */}
            <div className="flex-1 font-sans text-xs leading-snug">
              <span className="font-bold text-[#111827]">{item.title} – </span>
              <span className="text-[#374151] font-medium">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 7. Bottom News Column 2: Featured Report Article
 */
function FeaturedReportColumn({ report }) {
  return (
    <div className="w-full flex flex-col h-full justify-between">
      <div>
        <h3 className="font-headline font-bold text-lg sm:text-[18.5px] leading-[1.2] text-[#111827] mb-2 hover:text-[#0C2855] transition-colors cursor-pointer">
          {report.headline}
        </h3>

        {/* Seminar / Conference Photo */}
        <div className="w-full aspect-[16/10] rounded-[2px] overflow-hidden border border-[#171717] mb-2 shadow-2xs">
          <SeminarAudienceIllustration />
        </div>

        {/* Editorial Text */}
        <p className="font-body-editorial text-xs leading-[1.48] text-[#222222] text-justify">
          <span className="font-bold text-[#0C2855]">{report.dateline} </span>
          {report.content}
        </p>
      </div>

      <a
        href="#page6"
        className="inline-flex items-center gap-1 font-sans font-bold text-xs text-[#A20D1C] hover:underline mt-2"
      >
        <span>{report.continuation}</span>
      </a>
    </div>
  );
}

/**
 * 8. Bottom News Column 3: Cyber Safety Tips & Impact
 */
function SafetyTipsColumn({ tips }) {
  return (
    <div className="w-full border border-[#0C2855] rounded-[2px] overflow-hidden bg-[#FAF8F2] shadow-2xs">
      {/* Header Banner */}
      <div className="bg-[#0C2855] text-white py-1.5 px-3 text-center">
        <h3 className="font-headline font-bold text-sm tracking-wide">
          Cyber Safety Tips from CRCCF
        </h3>
      </div>

      <div className="p-2.5 flex items-center gap-3">
        {/* Glowing Digital Cyber Shield Infographic */}
        <div className="w-[84px] h-[84px] shrink-0 rounded-[4px] bg-[#0A192F] flex items-center justify-center border border-[#1E3A8A] shadow-inner p-1">
          <CyberShieldGraphic />
        </div>

        {/* Checklist */}
        <ul className="flex-1 flex flex-col gap-1">
          {tips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-1.5 text-[10.5px] font-sans font-semibold text-[#1F2937]">
              <Check className="w-3.5 h-3.5 text-[#16A34A] stroke-[3] shrink-0 mt-0.5" />
              <span className="leading-tight">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * 9. Impact Stats Module
 */
function ImpactStatsModule({ stats }) {
  return (
    <div className="w-full flex flex-col">
      {/* Navy Pill Banner */}
      <div className="w-full bg-[#0C2855] text-white py-1 px-3 rounded-[2px] text-center mb-2 shadow-2xs">
        <h4 className="font-headline font-bold text-xs tracking-wider uppercase">
          CRCCF Impact So Far
        </h4>
      </div>

      {/* 4 Stats Grid */}
      <div className="grid grid-cols-4 gap-1 text-center divide-x divide-[#D0CABF]">
        {stats.map((s, idx) => (
          <div key={idx} className="flex flex-col items-center px-1">
            <div className="text-[#0C2855] mb-0.5">
              <StatIconRenderer type={s.icon} />
            </div>
            <span className="font-headline font-black text-[13px] sm:text-[14px] text-[#111827] leading-none">
              {s.value}
            </span>
            <span className="text-[9px] font-sans font-medium text-[#4B5563] leading-tight mt-0.5">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 10. Publication Strip / Bottom Footer Banner
 */
function NewspaperFooter({ meta }) {
  return (
    <footer className="w-full bg-[#0C2855] text-white rounded-[3px] p-2 sm:p-2.5 flex flex-col md:flex-row items-center justify-between gap-3 shadow-md">
      {/* Left: Angled Red Pill Call-to-Action */}
      <div className="shrink-0">
        <a
          href="https://www.crccf.org/report"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#A20D1C] hover:bg-[#8F0B18] text-white font-condensed font-black text-xs sm:text-[13px] px-4 py-2 rounded-full border-2 border-white/80 shadow-sm uppercase tracking-wider text-center cursor-pointer transition-all hover:scale-[1.02]"
        >
          REPORT A CYBER CRIME TODAY
        </a>
      </div>

      {/* Center: Main Safety Tagline & Website Pill */}
      <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div>
          <div className="font-headline font-bold text-sm sm:text-base tracking-wide text-white">
            Stay Safe Online with CRCCF
          </div>
          <div className="text-[10.5px] sm:text-[11px] font-sans text-gray-200 font-medium">
            Report | Learn | Verify | Get Support
          </div>
        </div>

        {/* Website Pill with Cursor Arrow */}
        <a
          href={`https://${meta.website}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 bg-white text-[#0C2855] px-3 py-1 rounded-full text-xs font-sans font-bold shadow-xs hover:bg-gray-100 transition-colors"
        >
          <Globe className="w-3.5 h-3.5 text-[#0052CC]" />
          <span>{meta.website}</span>
          <MousePointer className="w-3 h-3 text-[#A20D1C] rotate-[-45deg]" />
        </a>
      </div>

      {/* Right: Authentic QR Code & Caption */}
      <div className="flex items-center gap-2 shrink-0 bg-white/10 px-2 py-1 rounded-[3px] border border-white/20">
        <div className="w-[38px] h-[38px] bg-white p-0.5 rounded-[2px] flex items-center justify-center">
          <NewspaperQRCode />
        </div>
        <div className="text-[9.5px] font-sans font-bold leading-tight text-white/95">
          Scan to Visit<br />CRCCF Website
        </div>
      </div>
    </footer>
  );
}

/* ========================================================================= */
/* SVG ILLUSTRATIONS & HIGH-FIDELITY GRAPHICS (NO EXTERNAL ASSET DEPENDENCY) */
/* ========================================================================= */

/**
 * Small Editorial Thumbnail Generator
 */
function EditorialThumbnail({ type }) {
  if (type === 'hacker') {
    return (
      <svg viewBox="0 0 100 70" className="w-full h-full" preserveAspectRatio="none">
        <rect width="100" height="70" fill="#0B132B" />
        {/* Glowing Matrix Lines */}
        <path d="M 10 15 L 90 15 M 10 25 L 75 25 M 25 35 L 85 35" stroke="#00FF66" strokeWidth="0.8" opacity="0.4" />
        {/* Silhouette of Hooded Hacker */}
        <path
          d="M 25 70 C 25 50, 35 40, 50 40 C 65 40, 75 50, 75 70 Z"
          fill="#1C2541"
        />
        {/* Hood */}
        <circle cx="50" cy="35" r="14" fill="#1C2541" />
        {/* Glowing Laptop Screen */}
        <polygon points="35,68 65,68 60,54 40,54" fill="#00E5FF" opacity="0.85" />
      </svg>
    );
  }

  if (type === 'lock') {
    return (
      <svg viewBox="0 0 100 70" className="w-full h-full" preserveAspectRatio="none">
        <rect width="100" height="70" fill="#0A192F" />
        {/* Glowing Digital Circuit Grid */}
        <path d="M 15 35 H 85 M 50 10 V 60 M 30 20 L 70 50" stroke="#0070F3" strokeWidth="1" opacity="0.6" />
        {/* 3D Cyan Padlock */}
        <rect x="40" y="32" width="20" height="18" rx="2.5" fill="#00E5FF" />
        <path d="M 44 32 V 24 C 44 20, 56 20, 56 24 V 32" stroke="#00E5FF" strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="40" r="2" fill="#0A192F" />
      </svg>
    );
  }

  if (type === 'training') {
    return (
      <svg viewBox="0 0 100 70" className="w-full h-full" preserveAspectRatio="none">
        <rect width="100" height="70" fill="#E2E8F0" />
        {/* Presentation Board */}
        <rect x="15" y="10" width="45" height="30" rx="1.5" fill="#0C2855" />
        <path d="M 20 20 H 50 M 20 26 H 42 M 20 32 H 55" stroke="#38BDF8" strokeWidth="1.2" />
        {/* Instructor Silhouette */}
        <circle cx="75" cy="24" r="6" fill="#1E293B" />
        <path d="M 68 70 L 68 40 C 68 34, 82 34, 82 40 L 82 70 Z" fill="#1E293B" />
        <path d="M 68 42 L 56 30" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Hackathon
  return (
    <svg viewBox="0 0 100 70" className="w-full h-full" preserveAspectRatio="none">
      <rect width="100" height="70" fill="#1E1B4B" />
      {/* Neon Hackathon Banner */}
      <rect x="25" y="8" width="50" height="12" rx="2" fill="#4338CA" />
      <text x="50" y="17" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        HACKATHON
      </text>
      {/* Row of Developers */}
      {[25, 42, 59, 76].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="38" r="4.5" fill="#312E81" />
          <path d={`M ${x - 6} 70 L ${x - 6} 48 C ${x - 6} 44, ${x + 6} 44, ${x + 6} 48 L ${x + 6} 70 Z`} fill="#312E81" />
          <polygon points={`${x - 4},64 ${x + 4},64 ${x + 3},54 ${x - 3},54`} fill="#38BDF8" opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Large Laptop with Portal Screen Illustration
 */
function LaptopPortalIllustration() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Background warm room environment */}
      <rect width="500" height="320" fill="#EFECE4" />
      <rect y="215" width="500" height="105" fill="#D3C7B5" />

      {/* Laptop Base (Keyboard & Trackpad) */}
      <polygon points="50,260 450,260 495,312 5,312" fill="#9DA3AC" stroke="#64748B" strokeWidth="1" />
      {/* Trackpad */}
      <rect x="195" y="275" width="110" height="30" rx="2" fill="#CAD2DB" stroke="#8A99AA" />

      {/* Human Hands on Keyboard */}
      <ellipse cx="130" cy="280" rx="38" ry="17" fill="#D4A373" transform="rotate(-8 130 280)" opacity="0.95" />
      <ellipse cx="370" cy="280" rx="38" ry="17" fill="#D4A373" transform="rotate(8 370 280)" opacity="0.95" />

      {/* Laptop Lid & Screen Bezel */}
      <rect x="65" y="16" width="370" height="248" rx="7" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
      {/* Screen Display Area */}
      <rect x="74" y="24" width="352" height="232" rx="3" fill="#0C2855" />

      {/* Portal Top Navigation Bar */}
      <rect x="74" y="24" width="352" height="24" fill="#081E40" />
      {/* Portal Logo */}
      <text x="86" y="40" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
        CRCCF
      </text>
      {/* Nav Links */}
      <text x="138" y="39" fill="#93C5FD" fontSize="6.8" fontFamily="sans-serif">
        Home  Services  Report Crime  Awareness  Training
      </text>

      {/* Portal Hero Banner Content */}
      <g transform="translate(135, 68)">
        <text x="0" y="16" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="sans-serif">
          A Safer & Secure
        </text>
        <text x="0" y="33" fill="#ffffff" fontSize="15" fontWeight="bold" fontFamily="sans-serif">
          Digital India
        </text>
        <text x="0" y="47" fill="#93C5FD" fontSize="8" fontFamily="sans-serif">
          Report | Learn | Verify | Get Support
        </text>
      </g>

      {/* Center Shield Graphic on Screen */}
      <g transform="translate(295, 62)">
        <path d="M 32 0 L 58 11 C 58 38, 48 54, 32 64 C 16 54, 6 38, 6 11 Z" fill="#0070F3" stroke="#38BDF8" strokeWidth="2" />
        <rect x="25" y="30" width="14" height="13" rx="1.5" fill="#ffffff" />
        <path d="M 28 30 V 23 C 28 19, 36 19, 36 23 V 30" stroke="#ffffff" strokeWidth="2" fill="none" />
      </g>

      {/* 4 Interactive Portal Feature Cards on Screen */}
      <g transform="translate(82, 146)">
        {/* Card 1: Report a Crime */}
        <rect x="0" y="0" width="78" height="54" rx="3" fill="#ffffff" stroke="#CBD5E1" />
        <circle cx="39" cy="19" r="8.5" fill="#DC2626" />
        <text x="39" y="38" fill="#1E293B" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          Report a Crime
        </text>

        {/* Card 2: Track Your Case */}
        <rect x="86" y="0" width="78" height="54" rx="3" fill="#ffffff" stroke="#CBD5E1" />
        <circle cx="125" cy="19" r="8.5" fill="#0284C7" />
        <text x="125" y="38" fill="#1E293B" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          Track Your Case
        </text>

        {/* Card 3: Awareness & Training */}
        <rect x="172" y="0" width="78" height="54" rx="3" fill="#ffffff" stroke="#CBD5E1" />
        <circle cx="211" cy="19" r="8.5" fill="#059669" />
        <text x="211" y="36" fill="#1E293B" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          Awareness &
        </text>
        <text x="211" y="44" fill="#1E293B" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          Training
        </text>

        {/* Card 4: Verification Services */}
        <rect x="258" y="0" width="78" height="54" rx="3" fill="#ffffff" stroke="#CBD5E1" />
        <circle cx="297" cy="19" r="8.5" fill="#7C3AED" />
        <text x="297" y="36" fill="#1E293B" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          Verification
        </text>
        <text x="297" y="44" fill="#1E293B" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          Services
        </text>
      </g>
    </svg>
  );
}

/**
 * Seminar Audience Illustration for Featured Report
 */
function SeminarAudienceIllustration() {
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      {/* Background Hall */}
      <rect width="400" height="240" fill="#E2E8F0" />

      {/* Projection Stage Backdrop */}
      <rect x="90" y="16" width="220" height="118" rx="3" fill="#0C2855" stroke="#1E293B" strokeWidth="2" />
      <text x="200" y="52" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        CRCCF
      </text>
      <text x="200" y="73" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        Cyber Awareness
      </text>
      <text x="200" y="90" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        Drive
      </text>

      {/* Speaker at Podium */}
      <g transform="translate(130, 72)">
        <circle cx="15" cy="15" r="7.5" fill="#1E293B" />
        <path d="M 5 62 L 5 30 C 5 24, 25 24, 25 30 L 25 62 Z" fill="#0284C7" />
        {/* Podium */}
        <polygon points="30,45 58,45 52,92 35,92" fill="#475569" />
        <path d="M 20 30 L 36 38" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Audience Heads in Forefront */}
      <g transform="translate(0, 136)">
        {[25, 75, 125, 175, 225, 275, 325, 375].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="35" r="17" fill="#0F172A" />
            <path d={`M ${x - 25} 105 C ${x - 25} 55, ${x + 25} 55, ${x + 25} 105 Z`} fill="#1E293B" />
          </g>
        ))}
      </g>
    </svg>
  );
}

/**
 * Cyber Shield Infographic Graphic
 */
function CyberShieldGraphic() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* Node connecting circles */}
      <circle cx="20" cy="20" r="4" fill="#00E5FF" opacity="0.6" />
      <circle cx="80" cy="20" r="4" fill="#00E5FF" opacity="0.6" />
      <circle cx="15" cy="70" r="4" fill="#00E5FF" opacity="0.6" />
      <circle cx="85" cy="70" r="4" fill="#00E5FF" opacity="0.6" />
      <path d="M 20 20 L 50 35 L 80 20 M 15 70 L 50 65 L 85 70" stroke="#0070F3" strokeWidth="1" strokeDasharray="2 2" />

      {/* Outer Cyan Shield */}
      <path
        d="M 50 15 L 80 27 C 80 58, 68 76, 50 88 C 32 76, 20 58, 20 27 Z"
        fill="#0C2855"
        stroke="#00E5FF"
        strokeWidth="2.5"
      />

      {/* Center White Padlock */}
      <rect x="41" y="48" width="18" height="15" rx="2" fill="#ffffff" />
      <path
        d="M 44 48 V 40 C 44 35, 56 35, 56 40 V 48"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="54" r="2" fill="#0C2855" />
    </svg>
  );
}

/**
 * Authentic QR Code SVG
 */
function NewspaperQRCode() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#000000">
      {/* Outer Corners */}
      <rect x="1" y="1" width="7" height="7" rx="0.5" fill="none" stroke="#000" strokeWidth="1.5" />
      <rect x="3" y="3" width="3" height="3" fill="#000" />

      <rect x="16" y="1" width="7" height="7" rx="0.5" fill="none" stroke="#000" strokeWidth="1.5" />
      <rect x="18" y="3" width="3" height="3" fill="#000" />

      <rect x="1" y="16" width="7" height="7" rx="0.5" fill="none" stroke="#000" strokeWidth="1.5" />
      <rect x="3" y="18" width="3" height="3" fill="#000" />

      {/* Internal Matrix Pixels */}
      <rect x="10" y="2" width="2" height="2" />
      <rect x="13" y="4" width="2" height="2" />
      <rect x="10" y="8" width="4" height="2" />
      <rect x="2" y="10" width="2" height="3" />
      <rect x="6" y="11" width="2" height="2" />
      <rect x="10" y="12" width="3" height="3" />
      <rect x="16" y="10" width="3" height="2" />
      <rect x="11" y="17" width="2" height="4" />
      <rect x="15" y="15" width="2" height="2" />
      <rect x="19" y="14" width="3" height="3" />
      <rect x="16" y="19" width="4" height="2" />
      <rect x="20" y="18" width="2" height="4" />
    </svg>
  );
}

/**
 * Service Icon Renderer
 */
function ServiceIconRenderer({ type }) {
  if (type === 'laptop') return <Monitor className="w-4 h-4" />;
  if (type === 'search') return <Search className="w-4 h-4" />;
  if (type === 'grad') return <GraduationCap className="w-4 h-4" />;
  if (type === 'verify') return <Shield className="w-4 h-4" />;
  return <TrendingUp className="w-4 h-4" />;
}

/**
 * Stat Icon Renderer
 */
function StatIconRenderer({ type }) {
  if (type === 'users') return <Users className="w-4 h-4" />;
  if (type === 'doc') return <FileText className="w-4 h-4" />;
  if (type === 'grad') return <GraduationCap className="w-4 h-4" />;
  return <Shield className="w-4 h-4" />;
}

export const Section11 = () => {
  return (
    <section
      id="section-11"
      className="w-full relative select-none overflow-hidden bg-[#E5E2D9] border-b border-[#C8C2B5]"
    >
      <NewsPaper />
    </section>
  );
};

export default Section11;
