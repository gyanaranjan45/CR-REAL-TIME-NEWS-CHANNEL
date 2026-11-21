import React, { useState, useEffect } from 'react';
import {
  Globe,
  MousePointer,
  RefreshCw,
  ArrowRight,
  ShieldAlert,
  Lock,
  GraduationCap,
  Trophy,
  FileSearch,
  ScanFace,
  ShieldCheck,
  Siren,
  Fingerprint,
  Landmark,
  Users,
  Cpu,
  HeartHandshake
} from 'lucide-react';
import INITIAL_NEWSPAPER_DATA from './ENewspaperPageData.js';

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
export default function NewsPaper() {
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
    <div className="min-h-screen w-full bg-[#E5E2D9] pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-12 px-2 sm:px-4 md:px-6 flex flex-col items-center justify-start select-none font-serif overflow-x-hidden">
      {/* Top Page Heading & Description (Above Broadsheet Layout with Entrance Animation) */}
      <header className="animate-page-header w-full max-w-[1120px] text-center mb-4 sm:mb-6 flex flex-col items-center">
        <h1 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl text-[#0C2855] tracking-tight">
          E-News Paper
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm md:text-base text-[#4B5563] font-sans max-w-xl leading-relaxed">
          India&apos;s trusted digital broadsheet delivering real-time cyber defense bulletins, verified crime watch alerts, and citizen digital safety intelligence.
        </p>
      </header>

      {/* THE PRINTED NEWSPAPER SHEET (Smooth Broadsheet Unfold Animation) */}
      <main
        className="animate-broadsheet w-full max-w-[1120px] bg-[#F8F5ED] text-[#171717] rounded-[2px] p-3 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden"
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

        {/* Thick divider between Teaser Strip and Main Content */}
        <div className="w-full my-3 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />

        {/* ========================================================= */}
        {/* SECTION 1: CRIME WATCH & SPECIAL INVESTIGATIONS (4-COL)   */}
        {/* ========================================================= */}
        <section className="w-full my-2">
          <SectionHeader
            title="CRIME WATCH & SPECIAL INVESTIGATIONS"
            badge="SPECIAL DISPATCH • WIRE FEED"
            color="#A20D1C"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {data.crimeReports.map((item, idx) => (
              <TeaserNewsCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </section>

        {/* Heavy double horizontal divider */}
        <div className="w-full my-3 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />

        {/* ========================================================= */}
        {/* SECTION 2: NATIONAL DIGITAL SAFETY & EDITORIAL SPOTLIGHT  */}
        {/* ========================================================= */}
        <section className="w-full my-2">
          <SectionHeader
            title="NATIONAL DIGITAL SAFETY & EDITORIAL SPOTLIGHT"
            badge="CRCCF IN-DEPTH FOCUS"
            color="#0C2855"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {data.spotlightCards.map((item, idx) => (
              <TeaserNewsCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </section>

        {/* Heavy double horizontal divider */}
        <div className="w-full my-3 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />

        {/* ========================================================= */}
        {/* SECTION 3: EDUCATION, INNOVATION & COMMUNITY ACTION (4-COL)*/}
        {/* ========================================================= */}
        <section className="w-full my-2">
          <SectionHeader
            title="EDUCATION, INNOVATION & COMMUNITY ACTION"
            badge="CAMPUS & INDUSTRY WIRE"
            color="#1E3A8A"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {data.communityReports.map((item, idx) => (
              <TeaserNewsCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </section>

        {/* Heavy double horizontal divider */}
        <div className="w-full my-3 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />

        {/* ========================================================= */}
        {/* SECTION 4: NATIONAL CYBER EMERGENCY HELPLINE TICKER STRIP */}
        {/* ========================================================= */}
        <section className="w-full my-1 bg-[#F3EFE6] border border-[#171717] rounded-[2px] p-2 sm:p-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="bg-[#A20D1C] text-white font-condensed font-black px-2.5 py-1 text-[11px] sm:text-xs rounded-[2px] tracking-wider uppercase shrink-0 animate-pulse">
              NATIONAL HELPLINE 1930
            </span>
            <p className="font-sans text-xs font-semibold text-[#171717] leading-tight">
              Report financial cyber fraud immediately within the golden hour to freeze stolen funds across Indian banks.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="font-mono text-[11px] font-bold text-[#0C2855] bg-white px-2 py-0.5 rounded border border-[#C8C2B5]">
              Dial: 1930 (Toll Free)
            </span>
            <span className="font-mono text-[11px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-[#C8C2B5]">
              Active 24x7
            </span>
          </div>
        </section>

        {/* Double divider before Footer Strip */}
        <div className="w-full mb-3 border-t-[3px] border-b border-t-[#171717] border-b-[#171717] h-[5px]" />

        {/* 5. BOTTOM PUBLICATION STRIP / FOOTER BANNER */}
        <NewspaperFooter meta={data.meta} />
      </main>

      {/* Embedded Google Web Fonts for High-Fidelity Editorial Typography & Page Reload Animations */}
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

        /* Page Reload & Mount Animations */
        @keyframes headerFadeDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes newspaperPaperIn {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.98);
            filter: blur(5px);
          }
          65% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardFadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-page-header {
          animation: headerFadeDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-broadsheet {
          animation: newspaperPaperIn 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards;
        }

        .animate-teaser-card {
          animation: cardFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
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
            <span className="font-masthead font-black text-3xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#0C2855] tracking-tight">
              CR
            </span>
            <span className="font-headline italic font-black text-3xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#A20D1C] tracking-tight">
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
 * 2. Top News Teaser Strip (4 Stories with icons & badges)
 */
function NewsTeaserStrip({ teasers }) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {teasers.map((t, idx) => (
          <TeaserNewsCard key={t.id} item={t} index={idx} />
        ))}
      </div>
    </section>
  );
}

/**
 * Universal Teaser News Card Component (Self-Contained Individual Box with Clean Icon Badge)
 */
function TeaserNewsCard({ item, index = 0 }) {
  return (
    <div
      style={{ animationDelay: `${index * 75 + 180}ms` }}
      className="animate-teaser-card w-full h-full bg-[#FAF7EE] hover:bg-white border border-[#C8C2B5] hover:border-[#0C2855] rounded-[3px] p-2 sm:p-2.5 flex items-start gap-2.5 sm:gap-3 shadow-2xs hover:shadow-xs transition-all duration-150 cursor-pointer group"
    >
      {/* Category Icon Badge */}
      <EditorialCardIcon type={item.type} />

      {/* Teaser Text Content */}
      <div className="flex-1 flex flex-col justify-between min-h-[48px]">
        <div>
          <span
            className={`inline-block px-1.5 py-0.5 text-[8.5px] font-condensed font-black tracking-wider uppercase rounded-[2px] leading-none mb-1 shadow-2xs ${item.badgeColor}`}
          >
            {item.category}
          </span>
          <h4 className="font-headline font-bold text-[12px] leading-[1.25] text-[#171717] line-clamp-2 group-hover:text-[#A20D1C] transition-colors">
            {item.headline}
          </h4>
        </div>
        <div className="flex items-center justify-between text-[10px] font-sans font-bold text-[#4B5563] mt-1 pt-0.5 border-t border-[#E5E0D5]">
          <span className="text-[#6B7280] font-mono text-[9.5px]">
            {item.time || 'Live Wire'}
          </span>
          <span className="text-[#0C2855] group-hover:text-[#A20D1C] group-hover:translate-x-1 transition-all inline-flex items-center">
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Editorial Section Header with Decorative Tag & Border
 */
function SectionHeader({ title, badge, color = "#171717" }) {
  return (
    <div className="w-full flex items-center justify-between pb-1 mb-2.5 border-b-2 border-[#171717]">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-[1px]" style={{ backgroundColor: color }} />
        <h3 className="font-condensed font-black tracking-wider uppercase text-xs sm:text-[13px] text-[#171717]">
          {title}
        </h3>
      </div>
      <span
        className="text-[9.5px] sm:text-[10px] font-sans font-bold uppercase tracking-wider"
        style={{ color: color }}
      >
        {badge}
      </span>
    </div>
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
/* EDITORIAL CARD ICONS (CLEAN VECTOR BADGES REPLACING HEAVY SVGS)         */
/* ========================================================================= */

/**
 * Modern Clean Editorial Icon Badge Component
 */
function EditorialCardIcon({ type }) {
  const iconMap = {
    hacker: { icon: ShieldAlert, bg: 'bg-red-100/90 text-red-700 border-red-300' },
    lock: { icon: Lock, bg: 'bg-amber-100/90 text-amber-700 border-amber-300' },
    training: { icon: GraduationCap, bg: 'bg-blue-100/90 text-[#0C2855] border-blue-300' },
    hackathon: { icon: Trophy, bg: 'bg-amber-100/90 text-amber-700 border-amber-300' },
    trophy: { icon: Trophy, bg: 'bg-amber-100/90 text-amber-700 border-amber-300' },
    forensics: { icon: FileSearch, bg: 'bg-rose-100/90 text-rose-700 border-rose-300' },
    deepfake: { icon: ScanFace, bg: 'bg-purple-100/90 text-purple-700 border-purple-300' },
    defense: { icon: ShieldCheck, bg: 'bg-emerald-100/90 text-emerald-700 border-emerald-300' },
    police: { icon: Siren, bg: 'bg-indigo-100/90 text-indigo-700 border-indigo-300' },
    portal: { icon: Globe, bg: 'bg-sky-100/90 text-sky-800 border-sky-300' },
    aadhaar: { icon: Fingerprint, bg: 'bg-emerald-100/90 text-emerald-700 border-emerald-300' },
    bank: { icon: Landmark, bg: 'bg-blue-100/90 text-blue-700 border-blue-300' },
    students: { icon: Users, bg: 'bg-teal-100/90 text-teal-700 border-teal-300' },
    quantum: { icon: Cpu, bg: 'bg-cyan-100/90 text-cyan-700 border-cyan-300' },
    women: { icon: HeartHandshake, bg: 'bg-violet-100/90 text-violet-700 border-violet-300' },
  };

  const item = iconMap[type] || iconMap.defense;
  const IconComponent = item.icon;

  return (
    <div
      className={`w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-[5px] border flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:shadow-xs transition-all duration-200 ${item.bg}`}
    >
      <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
    </div>
  );
}

export { NewsPaper as ENewspaperPage };
