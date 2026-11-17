import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Target,
  Sparkles,
  Shield,
  History,
  Flag,
  Briefcase,
  TrendingUp,
  Award,
  HeartHandshake,
  Cpu,
  CheckCircle2,
  ShieldAlert,
  Flame,
  Scale,
  Heart,
  Lock,
  Eye,
  Megaphone,
  BellRing,
  Network,
  Users2,
  Compass,
  Mail,
  HelpCircle,
  Globe,
  Activity,
  Trophy,
  MessageSquareQuote,
  Mic,
  Users,
  UserCheck,
  Tv,
  BookOpen,
  CheckSquare,
  FileCheck,
  FileText,
  FileCode,
  Copyright,
  Handshake,
  Newspaper,
  Landmark,
  FolderArchive,
  Key as KeyIcon,
  GraduationCap,
  Satellite,
  Leaf,
  Podcast,
  Share2
} from 'lucide-react';
import { aboutUsDirectoryCards, cpuTVBranding } from './AboutUsPageData';

// ==========================================
// 1. CARD VECTOR ICONS (BATTLE-TESTED LUCIDE ICONS)
// ==========================================
const CardIcon = ({ type }) => {
  switch (type) {
    // 30 Core Final List Cards
    case 'meaning-name':
      return <HelpCircle className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-overview':
      return <Globe className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'identity':
      return <Shield className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'what-we-do':
      return <Briefcase className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'mission-vision':
      return <Target className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'objectives':
      return <Flag className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-core-values':
      return <Sparkles className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-activities':
      return <Activity className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'history-story':
      return <History className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-achievements':
      return <Trophy className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'chairmans-message':
      return <MessageSquareQuote className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'ceos-message':
      return <Award className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'editors-message':
      return <Mic className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'team-leadership':
      return <Users className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'editorial-team':
      return <UserCheck className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-network':
      return <Network className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'news-coverage':
      return <Tv className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'editorial-policy':
      return <BookOpen className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'code-of-ethics':
      return <ShieldCheck className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'fact-checking':
      return <CheckSquare className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'corrections-policy':
      return <FileCheck className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'independence-transparency':
      return <Eye className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'legal-compliance':
      return <Scale className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'privacy-policy':
      return <Lock className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'terms-conditions':
      return <FileText className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'guidelines':
      return <FileCode className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'legal-disclaimer':
      return <ShieldAlert className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'copyright':
      return <Copyright className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'partnership':
      return <Handshake className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'social-responsibility':
      return <Heart className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;

    // 18 Demo Cards
    case 'citizen-journalism':
      return <Megaphone className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'investigative-cell':
      return <Search className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'media-kit':
      return <Newspaper className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'broadcast-tech':
      return <Cpu className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'global-bureaus':
      return <Landmark className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'archives-library':
      return <FolderArchive className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'whistleblower-portal':
      return <KeyIcon className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'audience-grievance':
      return <BellRing className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'journalism-fellowships':
      return <GraduationCap className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'digital-innovation':
      return <TrendingUp className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'satellite-uplink':
      return <Satellite className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'environmental-esg':
      return <Leaf className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'community-podcasts':
      return <Podcast className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'syndication-licensing':
      return <Share2 className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'industry-awards':
      return <Flame className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'factcheck-lab':
      return <CheckCircle2 className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'subscriber-services':
      return <Users2 className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'future-roadmap':
      return <Compass className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;

    // Backward compatibility fallbacks
    case 'our-mission':
      return <ShieldCheck className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-vision':
      return <Target className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-values':
      return <Sparkles className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'who-we-are':
      return <Shield className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-history':
      return <History className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-objectives':
      return <Flag className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-impact':
      return <TrendingUp className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-leadership':
      return <Award className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'our-commitment':
      return <HeartHandshake className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
    case 'why-trust-us':
      return <CheckCircle2 className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;

    default:
      return <ShieldCheck className="w-5.5 h-5.5 text-white" strokeWidth={2.4} />;
  }
};

// ==========================================
// 2. CRT MONITOR DIRECTORY SCREEN (EXACTLY 12 CARDS PER PAGE + CRT ON/OFF ANIMATION)
// ==========================================
const DirectoryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCrtSwitching, setIsCrtSwitching] = useState(false);

  // Exactly 12 cards per page (3 columns × 4 rows)
  const CARDS_PER_PAGE = 12;

  // Real-time search filter across cards
  const filteredCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return aboutUsDirectoryCards;
    return aboutUsDirectoryCards.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.badge.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredCards.length / CARDS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(0);
  }, [searchQuery]);

  const currentCards = useMemo(() => {
    const start = currentPage * CARDS_PER_PAGE;
    return filteredCards.slice(start, start + CARDS_PER_PAGE);
  }, [filteredCards, currentPage]);

  // Authentic Retro CRT TV Off & On Screen Animation
  const changePageWithCrtEffect = (newPage) => {
    if (isCrtSwitching || newPage === currentPage) return;
    setIsCrtSwitching(true);

    // Screen collapses to a horizontal line and goes dark
    setTimeout(() => {
      setCurrentPage(newPage);
      // Screen snaps and blooms back on
      setTimeout(() => {
        setIsCrtSwitching(false);
      }, 70);
    }, 240);
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isCrtSwitching) {
      changePageWithCrtEffect(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1 && !isCrtSwitching) {
      changePageWithCrtEffect(currentPage + 1);
    }
  };

  // CRT Screen Variants for Smooth TV Off/On Bloom
  const crtSwitchVariants = {
    open: {
      scaleY: 1,
      scaleX: 1,
      opacity: 1,
      filter: 'brightness(1) contrast(1)',
      transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] }
    },
    closed: {
      scaleY: 0.005,
      scaleX: 0.98,
      opacity: [1, 1, 0.2, 0],
      filter: [
        'brightness(1) contrast(1)',
        'brightness(3) contrast(2)',
        'brightness(0.1)'
      ],
      transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#f8fbff] via-[#edf5fd] to-[#e4effb] text-slate-800 flex flex-col justify-between overflow-hidden select-none font-sans p-3 sm:p-4">
      
      {/* 2.A BACKGROUND FLUID CURVES & DOT MATRIX GRAPHICS */}
      {/* Top-Left Sky Blue Curves */}
      <svg className="absolute -top-4 -left-4 w-60 h-44 pointer-events-none opacity-80 z-0" viewBox="0 0 240 180" fill="none">
        <path d="M-10 0 C50 50 120 25 180 0 H-10 Z" fill="#60a5fa" opacity="0.35" />
        <path d="M-10 20 C70 80 140 45 210 0 H-10 Z" fill="#93c5fd" opacity="0.3" />
        <path d="M-10 -10 C40 60 90 95 160 85 C210 75 230 35 240 0 H-10 Z" fill="#38bdf8" opacity="0.22" />
      </svg>

      {/* Top-Right Dot Matrix */}
      <div 
        className="absolute top-2 right-2 w-40 h-28 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: 'radial-gradient(#3b82f6 1.5px, transparent 1.5px)',
          backgroundSize: '12px 12px'
        }}
      />

      {/* Bottom Ocean Blue Wave Ribbons */}
      <svg className="absolute -bottom-1 inset-x-0 w-full h-14 sm:h-18 pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1000 120" fill="none">
        <path d="M0 65 C160 105 340 25 510 55 C670 85 840 30 1000 75 V120 H0 Z" fill="#0284c7" opacity="0.8" />
        <path d="M0 85 C220 45 420 105 610 70 C810 35 910 85 1000 95 V120 H0 Z" fill="#1d4ed8" opacity="0.95" />
        <path d="M0 98 C320 75 680 115 1000 90 V120 H0 Z" fill="#0f172a" opacity="0.25" />
      </svg>

      {/* 2.B TOP SEARCH BAR (CENTERED PILL) */}
      <div className="relative z-10 w-full flex items-center justify-center pt-0 pb-1 shrink-0">
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-blue-500/80 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search About Us Pillars..."
              className="w-full bg-white/95 text-slate-800 placeholder-slate-400 text-xs sm:text-sm pl-10 pr-9 py-1.5 rounded-full border border-blue-200/90 shadow-[0_2px_8px_rgba(30,64,175,0.08)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 w-4 h-4 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 text-[10px] font-bold transition-colors"
                aria-label="Clear Search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2.C 12 CARDS GRID (FIXED 3 COLUMNS × 4 ROWS, FILLS SCREEN COMPLETELY WITHOUT OVERFLOW) */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center my-1 min-h-0 overflow-hidden">
        {/* CRT Off/On Phosphor Flash Beam */}
        {isCrtSwitching && (
          <motion.div
            initial={{ scaleX: 1, opacity: 1 }}
            animate={{ scaleX: [1, 0.6, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 0.22 }}
            className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-[3px] bg-white rounded-full pointer-events-none z-50 shadow-[0_0_24px_#38bdf8,0_0_8px_#ffffff]"
          />
        )}

        <motion.div
          animate={isCrtSwitching ? 'closed' : 'open'}
          variants={crtSwitchVariants}
          className="w-full h-full flex flex-col justify-between origin-center"
        >
          {currentCards.length > 0 ? (
            <div className="grid grid-cols-3 grid-rows-4 gap-2.5 w-full h-full items-stretch">
              {currentCards.map((card) => (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -2, scale: 1.012 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setSelectedCard(card)}
                  className="group relative bg-white/95 backdrop-blur-sm rounded-xl border border-blue-100 shadow-[0_2px_10px_rgba(30,64,175,0.06)] hover:shadow-[0_6px_20px_rgba(30,64,175,0.14)] hover:border-blue-300 transition-all duration-200 p-2.5 flex items-center gap-3 text-left cursor-pointer overflow-hidden"
                >
                  {/* Subtle bottom line hover glow */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Left: Vibrant Squircle Icon Container */}
                  <div 
                    className={`w-10 h-10 rounded-xl bg-gradient-to-b ${card.gradient} flex items-center justify-center shrink-0 shadow-sm border border-white/25`}
                  >
                    <CardIcon type={card.iconType} />
                  </div>

                  {/* Right: Title & Subtitle with ample room & zero truncation */}
                  <div className="flex flex-col min-w-0 flex-1 overflow-hidden pr-0.5">
                    <h3 className="text-[13px] font-black text-[#0b2545] tracking-tight leading-snug truncate group-hover:text-blue-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[10.5px] font-semibold text-slate-500 leading-tight mt-0.5 truncate">
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-6 bg-white/80 rounded-xl border border-blue-100 shadow-sm text-center my-auto">
              <p className="text-xs sm:text-sm font-bold text-slate-700">
                No pillars found matching "{searchQuery}"
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-xs font-bold shadow-xs hover:bg-blue-700"
              >
                Reset Search
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* 2.D BOTTOM PAGINATION CONTROLS (PREVIOUS BUTTON LEFT, NEXT BUTTON RIGHT) */}
      <div className="relative z-10 w-full flex items-center justify-between pt-1 pb-0.5 px-0.5 shrink-0">
        {/* Previous Button in Left Bottom */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 0 || isCrtSwitching}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase transition-all shadow-sm ${
            currentPage === 0 || isCrtSwitching
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-50'
              : 'bg-[#0b2545] hover:bg-[#163866] text-white active:scale-95'
          }`}
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>PREVIOUS</span>
        </button>

        {/* Center Page Indicator: Clean "PAGE 1 OF 2" */}
        <div className="px-4 py-1 bg-white/95 rounded-full border border-blue-200 text-[#0b2545] font-mono text-[10.5px] font-bold tracking-wider shadow-xs">
          PAGE {currentPage + 1} OF {totalPages}
        </div>

        {/* Next Button in Right Bottom */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1 || isCrtSwitching}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase transition-all shadow-sm ${
            currentPage >= totalPages - 1 || isCrtSwitching
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-50'
              : 'bg-[#0062eb] hover:bg-[#004dc2] text-white active:scale-95'
          }`}
          aria-label="Next Page"
        >
          <span>NEXT</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2.E CARD DETAIL OVERLAY / DOSSIER POPUP */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-300 shadow-2xl z-40 p-5 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex items-start justify-between border-b border-slate-200 pb-3 mb-2">
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-b ${selectedCard.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                  <CardIcon type={selectedCard.iconType} />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-black text-[#0b2545]">
                      {selectedCard.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-blue-100 text-blue-800 border border-blue-200">
                      {selectedCard.badge}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-blue-600 mt-0.5">{selectedCard.subtitle}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-left my-2">
              <h4 className="text-[10px] font-black text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Briefcase className="w-3 h-3 text-blue-600" />
                FOUNDATION CHARTER & MISSION DETAIL:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal bg-slate-50 p-3 rounded-xl border border-slate-200">
                {selectedCard.description}
              </p>
            </div>

            <div className="mt-auto pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1 text-blue-700 font-semibold">
                <Mail className="w-3.5 h-3.5" /> {selectedCard.email}
              </span>
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">
                CR REAL TIME ABOUT US DIRECTORY
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

// ==========================================
// 3. WIDE RETRO BEIGE CRT MONITOR COMPONENT
// ==========================================
const CrtMonitor = () => {
  return (
    <div className="relative flex flex-col items-center select-none w-full">
      {/* CRT MONITOR BEIGE CASING */}
      <div 
        className="relative z-20 rounded-[28px] p-4 sm:p-5 md:p-6 w-full"
        style={{
          background: 'linear-gradient(145deg, #f3ede2 0%, #ded7c6 25%, #cbbfab 85%, #b5a892 100%)',
          boxShadow: `
            0 25px 45px -10px rgba(0, 0, 0, 0.65),
            0 10px 20px -5px rgba(0, 0, 0, 0.4),
            inset 3px 3px 6px rgba(255, 255, 255, 0.85),
            inset -4px -5px 8px rgba(0, 0, 0, 0.4),
            inset 0 0 0 2px rgba(200, 190, 170, 0.5)
          `
        }}
      >
        <div className="absolute inset-1.5 rounded-[24px] border border-white/40 pointer-events-none" />

        {/* Top Center: "CR REAL TIME NEWS CHANNEL" Typography */}
        <div className="w-full flex items-center justify-center pt-0.5 pb-2">
          <span 
            className="text-black font-black tracking-[0.22em] text-xs sm:text-sm select-none uppercase text-center px-2"
            style={{
              textShadow: '0 1px 1px rgba(255, 255, 255, 0.7), 0 -1px 1px rgba(0, 0, 0, 0.25)'
            }}
          >
            {cpuTVBranding.monitorBezelTitle}
          </span>
        </div>

        {/* INNER BLACK BEZEL */}
        <div 
          className="relative rounded-[20px] p-2 sm:p-3"
          style={{
            background: 'linear-gradient(145deg, #0f1115 0%, #171a21 50%, #20242e 100%)',
            boxShadow: `
              inset 0 4px 8px rgba(0, 0, 0, 0.95),
              inset 0 -2px 4px rgba(255, 255, 255, 0.15),
              0 2px 4px rgba(255, 255, 255, 0.4)
            `
          }}
        >
          {/* CRT SCREEN INNER HOUSING (16:10 Widescreen) */}
          <div 
            className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden crt-curvature"
            style={{
              backgroundColor: '#f8fafc',
              boxShadow: `
                inset 0 0 35px rgba(0, 0, 0, 0.35),
                inset 0 0 10px rgba(0, 0, 0, 0.45)
              `
            }}
          >
            {/* The Directory Screen Component */}
            <div className="relative w-full h-full z-10">
              <DirectoryScreen />
            </div>

            {/* CRT Glass Scanline & Reflection Overlays */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none opacity-20"
              style={{
                background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.08) 51%)',
                backgroundSize: '100% 4px'
              }}
            />

            <div 
              className="absolute inset-0 z-30 pointer-events-none rounded-[16px]"
              style={{
                boxShadow: `
                  inset 0 0 45px rgba(0, 0, 0, 0.35),
                  inset 0 0 15px rgba(0, 0, 0, 0.25),
                  inset 0 2px 6px rgba(255, 255, 255, 0.35)
                `
              }}
            />

            <div 
              className="absolute inset-0 z-30 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.04) 22%, transparent 42%)',
                clipPath: 'polygon(0 0, 100% 0, 85% 45%, 0 75%)'
              }}
            />
          </div>
        </div>

        {/* BOTTOM BEZEL CONTROLS */}
        <div className="w-full flex items-center justify-between px-3 pt-3 pb-0.5">
          <div className="flex items-center gap-2 opacity-60">
            <span className="text-[8px] font-mono text-slate-700 tracking-wider">AUTO</span>
            <span className="text-[8px] font-mono text-slate-700 tracking-wider">MENU</span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* 4 Circular Control Buttons */}
            <div className="flex items-center gap-1.5 mr-1">
              {[0, 1, 2, 3].map((btnIndex) => (
                <div 
                  key={btnIndex}
                  className="w-3.5 h-3.5 rounded-full cursor-default"
                  style={{
                    background: 'linear-gradient(135deg, #ded6c2 0%, #b8af9c 100%)',
                    boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.8), 0 1px 2px rgba(0,0,0,0.4)',
                    border: '0.5px solid #a39b89'
                  }}
                />
              ))}
            </div>

            {/* Glowing Green Power Indicator */}
            <div className="flex items-center gap-1">
              <div 
                className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"
                style={{
                  boxShadow: '0 0 6px #22c55e, 0 0 12px #4ade80, inset 0 0 2px #ffffff'
                }}
              />
            </div>

            {/* Power Button */}
            <div 
              className="w-6 h-4 rounded-sm ml-1 flex items-center justify-center cursor-default"
              style={{
                background: 'linear-gradient(180deg, #c4baa4 0%, #8c826e 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.7), 0 1.5px 2px rgba(0,0,0,0.5)',
                border: '0.5px solid #6b6352'
              }}
            >
              <div className="w-2 h-2.5 flex items-center justify-center text-[7px] text-[#423d34] font-bold">
                ⏻
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MONITOR STAND */}
      <div className="relative z-10 flex flex-col items-center -mt-2">
        <div 
          className="w-56 h-8"
          style={{
            background: 'linear-gradient(90deg, #998f7e 0%, #cec4b2 20%, #ded7c6 50%, #b8ae9c 80%, #7e7464 100%)',
            boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.4), 0 4px 10px rgba(0,0,0,0.3)',
            borderLeft: '1px solid #706859',
            borderRight: '1px solid #706859'
          }}
        >
          <div className="w-full h-full flex flex-col justify-evenly px-2 opacity-50">
            <div className="h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.3)]" />
            <div className="h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.3)]" />
            <div className="h-[1px] bg-black/40 shadow-[0_1px_0_rgba(255,255,255,0.3)]" />
          </div>
        </div>

        <div 
          className="w-88 h-5 rounded-[14px] -mt-1"
          style={{
            background: 'linear-gradient(180deg, #ece5d6 0%, #d5cbba 40%, #b3a794 100%)',
            boxShadow: `
              0 6px 14px rgba(0, 0, 0, 0.6),
              inset 0 1px 1px rgba(255, 255, 255, 0.9),
              inset 0 -2px 3px rgba(0, 0, 0, 0.4)
            `
          }}
        />

        <div 
          className="w-96 h-5 -mt-1 rounded-full blur-md bg-black/30 pointer-events-none"
        />
      </div>
    </div>
  );
};

// ==========================================
// 4. WIDE RETRO MODEL-M MECHANICAL KEYBOARD
// ==========================================
const Key = ({ label, subLabel, width = 'w-7 sm:w-8.5', isDark = false, className = '' }) => {
  return (
    <div 
      className={`relative h-6.5 sm:h-7.5 ${width} rounded-[3px] flex flex-col items-center justify-center cursor-default select-none transition-all ${className}`}
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #888c96 0%, #6f727c 40%, #585a63 100%)'
          : 'linear-gradient(180deg, #f5efe2 0%, #ded7c6 40%, #c5bba8 100%)',
        boxShadow: isDark
          ? `
              0 2px 0 #3d3f45,
              0 3px 2px rgba(0, 0, 0, 0.4),
              inset 0 1px 1px rgba(255, 255, 255, 0.4),
              inset 0 -1px 1px rgba(0, 0, 0, 0.5)
            `
          : `
              0 2px 0 #948b7b,
              0 3px 2px rgba(0, 0, 0, 0.35),
              inset 0 1px 1px rgba(255, 255, 255, 0.9),
              inset 0 -1px 1px rgba(0, 0, 0, 0.25)
            `,
        border: isDark ? '0.5px solid #4a4c54' : '0.5px solid #a89f8d'
      }}
    >
      <div 
        className="w-[88%] h-[82%] rounded-[2px] flex flex-col items-center justify-center p-0.5"
        style={{
          background: isDark
            ? 'linear-gradient(180deg, #747780 0%, #62656d 100%)'
            : 'linear-gradient(180deg, #eae3d2 0%, #dbd3c0 100%)',
          boxShadow: 'inset 0 0.5px 0.5px rgba(255,255,255,0.4)'
        }}
      >
        {subLabel && (
          <span className={`text-[6px] sm:text-[7px] leading-none ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {subLabel}
          </span>
        )}
        <span 
          className={`text-[8px] sm:text-[9.5px] font-bold font-mono leading-none tracking-tight ${
            isDark ? 'text-slate-100' : 'text-slate-800'
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

const Keyboard = () => {
  return (
    <div className="relative flex flex-col items-center select-none w-full">
      <div 
        className="absolute -bottom-2 inset-x-4 h-6 rounded-full blur-md bg-black/30 pointer-events-none"
      />

      <div 
        className="relative z-10 rounded-xl p-3 sm:p-4 flex flex-col gap-1.5 w-full"
        style={{
          background: 'linear-gradient(175deg, #f0e9dc 0%, #ded7c6 25%, #cbbfab 85%, #b4a792 100%)',
          boxShadow: `
            0 14px 28px -5px rgba(0, 0, 0, 0.65),
            0 6px 12px rgba(0, 0, 0, 0.4),
            inset 0 1.5px 1px rgba(255, 255, 255, 0.85),
            inset 0 -3px 4px rgba(0, 0, 0, 0.4),
            inset 0 0 0 1px rgba(200, 190, 170, 0.5)
          `,
          transform: 'perspective(600px) rotateX(8deg)',
          transformOrigin: 'bottom center'
        }}
      >
        {/* Top lip ridge */}
        <div className="w-full flex items-center justify-between px-2 pb-1.5 border-b border-[#bcb19d]/60">
          <span className="text-[7.5px] sm:text-[9px] font-mono font-bold text-slate-700 tracking-wider">
            {cpuTVBranding.keyboardModel}
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_#22c55e]" />
            <span className="text-[6.5px] sm:text-[8px] font-mono text-slate-600 uppercase font-semibold">
              {cpuTVBranding.keyboardSubtitle}
            </span>
          </div>
        </div>

        {/* 104 Keys Cluster */}
        <div className="w-full flex gap-2 sm:gap-4 items-start justify-between">
          {/* Main Alphanumeric & Function Keys */}
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center justify-between mb-1">
              <Key label="ESC" width="w-7 sm:w-9" isDark={true} />
              <div className="flex gap-1 ml-2">
                <Key label="F1" width="w-6 sm:w-8" isDark={true} />
                <Key label="F2" width="w-6 sm:w-8" isDark={true} />
                <Key label="F3" width="w-6 sm:w-8" isDark={true} />
                <Key label="F4" width="w-6 sm:w-8" isDark={true} />
              </div>
              <div className="flex gap-1">
                <Key label="F5" width="w-6 sm:w-8" isDark={true} />
                <Key label="F6" width="w-6 sm:w-8" isDark={true} />
                <Key label="F7" width="w-6 sm:w-8" isDark={true} />
                <Key label="F8" width="w-6 sm:w-8" isDark={true} />
              </div>
              <div className="flex gap-1">
                <Key label="F9" width="w-6 sm:w-8" isDark={true} />
                <Key label="F10" width="w-6 sm:w-8" isDark={true} />
                <Key label="F11" width="w-6 sm:w-8" isDark={true} />
                <Key label="F12" width="w-6 sm:w-8" isDark={true} />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Key label="~" subLabel="`" width="w-6 sm:w-8" isDark={true} />
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='].map((k) => (
                <Key key={k} label={k} width="w-6 sm:w-8" />
              ))}
              <Key label="BACKSPACE" width="w-14 sm:w-20" isDark={true} />
            </div>

            <div className="flex items-center gap-1">
              <Key label="TAB" width="w-11 sm:w-14" isDark={true} />
              {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'].map((k) => (
                <Key key={k} label={k} width="w-6 sm:w-8" />
              ))}
              <Key label="\" width="w-9 sm:w-13" isDark={true} />
            </div>

            <div className="flex items-center gap-1">
              <Key label="CAPS" width="w-12 sm:w-16" isDark={true} />
              {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"].map((k) => (
                <Key key={k} label={k} width="w-6 sm:w-8" />
              ))}
              <Key label="ENTER" width="w-13 sm:w-17" isDark={true} />
            </div>

            <div className="flex items-center gap-1">
              <Key label="SHIFT" width="w-14 sm:w-20" isDark={true} />
              {['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'].map((k) => (
                <Key key={k} label={k} width="w-6 sm:w-8" />
              ))}
              <Key label="SHIFT" width="w-14 sm:w-20" isDark={true} />
            </div>

            <div className="flex items-center gap-1">
              <Key label="CTRL" width="w-10 sm:w-13" isDark={true} />
              <Key label="ALT" width="w-10 sm:w-13" isDark={true} />
              <div 
                className="relative h-6.5 sm:h-7.5 flex-1 rounded-[3px] flex items-center justify-center cursor-default select-none"
                style={{
                  background: 'linear-gradient(180deg, #f5efe2 0%, #ded7c6 40%, #c5bba8 100%)',
                  boxShadow: `
                    0 2px 0 #948b7b,
                    0 3px 2px rgba(0, 0, 0, 0.35),
                    inset 0 1px 1px rgba(255, 255, 255, 0.9),
                    inset 0 -1px 1px rgba(0, 0, 0, 0.25)
                  `,
                  border: '0.5px solid #a89f8d'
                }}
              >
                <div 
                  className="w-[96%] h-[82%] rounded-[2px]"
                  style={{
                    background: 'linear-gradient(180deg, #eae3d2 0%, #dbd3c0 100%)',
                    boxShadow: 'inset 0 0.5px 0.5px rgba(255,255,255,0.4)'
                  }}
                />
              </div>
              <Key label="ALT" width="w-10 sm:w-13" isDark={true} />
              <Key label="CTRL" width="w-10 sm:w-13" isDark={true} />
            </div>
          </div>

          {/* Nav & Arrow Cluster */}
          <div className="flex flex-col gap-1 shrink-0">
            <div className="flex gap-1 mb-1">
              <Key label="PSC" width="w-5 sm:w-7" isDark={true} />
              <Key label="SLC" width="w-5 sm:w-7" isDark={true} />
              <Key label="BRK" width="w-5 sm:w-7" isDark={true} />
            </div>
            <div className="flex gap-1">
              <Key label="INS" width="w-5 sm:w-7" isDark={true} />
              <Key label="HOM" width="w-5 sm:w-7" isDark={true} />
              <Key label="PUP" width="w-5 sm:w-7" isDark={true} />
            </div>
            <div className="flex gap-1">
              <Key label="DEL" width="w-5 sm:w-7" isDark={true} />
              <Key label="END" width="w-5 sm:w-7" isDark={true} />
              <Key label="PDN" width="w-5 sm:w-7" isDark={true} />
            </div>
            <div className="h-4 sm:h-5" />
            <div className="flex flex-col items-center gap-1">
              <Key label="▲" width="w-5 sm:w-7" isDark={true} />
              <div className="flex gap-1">
                <Key label="◀" width="w-5 sm:w-7" isDark={true} />
                <Key label="▼" width="w-5 sm:w-7" isDark={true} />
                <Key label="▶" width="w-5 sm:w-7" isDark={true} />
              </div>
            </div>
          </div>

          {/* 10-Key Numpad Cluster */}
          <div className="flex flex-col gap-1 shrink-0">
            <div 
              className="flex items-center justify-between px-2 py-1 mb-1 bg-[#1a1b1f] rounded border border-[#3b3e47]"
              style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }}
            >
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_3px_#22c55e]" />
                <span className="text-[5.5px] font-mono text-slate-300">NUM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-950" />
                <span className="text-[5.5px] font-mono text-slate-500">CAPS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-950" />
                <span className="text-[5.5px] font-mono text-slate-500">SCR</span>
              </div>
            </div>

            <div className="flex gap-1">
              <Key label="NUM" width="w-5 sm:w-7" isDark={true} />
              <Key label="/" width="w-5 sm:w-7" isDark={true} />
              <Key label="*" width="w-5 sm:w-7" isDark={true} />
              <Key label="-" width="w-5 sm:w-7" isDark={true} />
            </div>

            <div className="flex gap-1">
              <Key label="7" width="w-5 sm:w-7" />
              <Key label="8" width="w-5 sm:w-7" />
              <Key label="9" width="w-5 sm:w-7" />
              <Key label="+" width="w-5 sm:w-7" isDark={true} />
            </div>

            <div className="flex gap-1">
              <Key label="4" width="w-5 sm:w-7" />
              <Key label="5" width="w-5 sm:w-7" />
              <Key label="6" width="w-5 sm:w-7" />
              <div className="w-5 sm:w-7" />
            </div>

            <div className="flex gap-1">
              <Key label="1" width="w-5 sm:w-7" />
              <Key label="2" width="w-5 sm:w-7" />
              <Key label="3" width="w-5 sm:w-7" />
              <Key label="ENT" width="w-5 sm:w-7" isDark={true} />
            </div>

            <div className="flex gap-1">
              <Key label="0" width="w-11 sm:w-15" />
              <Key label="." width="w-5 sm:w-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. MASTER RETRO WORKSTATION COMPONENT (PERFECT RESPONSIVE & ZERO DOUBLE SCROLLBAR)
// ==========================================
export const AboutUs = () => {
  const WORKSTATION_WIDTH = 880;
  const WORKSTATION_HEIGHT = 830;

  const getMetrics = () => {
    if (typeof window === 'undefined') {
      return { 
        scale: 1, 
        unscaledWidth: WORKSTATION_WIDTH, 
        unscaledHeight: WORKSTATION_HEIGHT, 
        scaledWidth: WORKSTATION_WIDTH, 
        scaledHeight: WORKSTATION_HEIGHT 
      };
    }
    const screenWidth = Math.min(
      window.innerWidth || 1020,
      document.documentElement?.clientWidth || window.innerWidth || 1020
    );

    // Desktop view (>= 920px): Strictly 1:1 scale (no modification to desktop experience)
    if (screenWidth >= 920) {
      return {
        scale: 1,
        unscaledWidth: WORKSTATION_WIDTH,
        unscaledHeight: WORKSTATION_HEIGHT,
        scaledWidth: WORKSTATION_WIDTH,
        scaledHeight: WORKSTATION_HEIGHT,
      };
    }

    // Mobile / Tablet view (< 920px): Proportional scale down to fit screen cleanly
    const padding = screenWidth < 500 ? 16 : 24;
    const availableWidth = Math.max(260, screenWidth - padding);
    const targetScale = Math.min(1, availableWidth / WORKSTATION_WIDTH);

    return {
      scale: targetScale,
      unscaledWidth: WORKSTATION_WIDTH,
      unscaledHeight: WORKSTATION_HEIGHT,
      scaledWidth: Math.ceil(WORKSTATION_WIDTH * targetScale),
      scaledHeight: Math.ceil(WORKSTATION_HEIGHT * targetScale),
    };
  };

  const [layout, setLayout] = useState(getMetrics);

  useEffect(() => {
    const handleResize = () => {
      setLayout(getMetrics());
    };

    handleResize();

    const timer1 = setTimeout(handleResize, 50);
    const timer2 = setTimeout(handleResize, 150);

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-start pt-4 sm:pt-7 pb-16 sm:pb-24 px-3 sm:px-4 selection:bg-blue-600 selection:text-white">
      
      {/* 0. ABOUT US PAGE HEADER & DESCRIPTION */}
      <header className="w-full max-w-4xl flex flex-col items-center text-center mb-3 sm:mb-6 select-none">
        {/* Top category badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0b2545] text-[9.5px] sm:text-xs font-bold tracking-widest uppercase mb-1.5 sm:mb-2 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>{cpuTVBranding.systemCategoryBadge}</span>
        </div>

        {/* Main Heading: About Us */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0b2545] tracking-tight uppercase leading-snug px-2">
          {cpuTVBranding.pageTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider mt-1">
          {cpuTVBranding.pageSubtitle}
        </p>

        {/* Description related to About Us */}
        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl font-normal leading-relaxed px-3">
          {cpuTVBranding.pageDescription}
        </p>

        {/* Gradient divider line */}
        <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full mt-2.5 sm:mt-3 opacity-80" />
      </header>

      {/* 1. WORKSTATION LAYOUT WRAPPER (CLEAN DESKTOP & FLUID MOBILE RESPONSIVE) */}
      <div 
        id="workstation-wrapper"
        className="relative shrink-0 my-1 sm:my-2"
        style={{
          width: `${layout.scaledWidth}px`,
          height: `${layout.scaledHeight}px`,
          maxWidth: '100%'
        }}
      >
        <div 
          id="workstation-inner"
          className="relative flex flex-col items-center justify-start shrink-0 transition-transform duration-100"
          style={{
            width: `${layout.unscaledWidth}px`,
            height: `${layout.unscaledHeight}px`,
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: `translateX(-50%) scale(${layout.scale})`,
            transformOrigin: 'top center'
          }}
        >
          {/* HARDWARE ROW 1: CRT MONITOR (12 CARDS IN 3x4 GRID, FILLS SCREEN COMPLETELY) */}
          <div className="w-[880px] shrink-0 z-20">
            <CrtMonitor />
          </div>

          {/* HARDWARE ROW 2: KEYBOARD (WIDENED TO MATCH MONITOR) */}
          <div className="w-[880px] shrink-0 -mt-8 z-30">
            <Keyboard />
          </div>

        </div>
      </div>

    </div>
  );
};

export const RetroCPUTV = AboutUs;
export const AboutUsPage = AboutUs;
export default AboutUs;
