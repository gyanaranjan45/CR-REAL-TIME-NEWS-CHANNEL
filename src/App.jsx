import React, { useState, useEffect, Suspense, lazy } from 'react';
import { FaArrowUp, FaArrowLeft } from 'react-icons/fa6';
import { Header } from './Page/Header/Header';
import { HomeSection } from './Page/HomeSection/HomeSection';
import { Footer } from './Page/Footer/Footer';

// Code-split subpages: Downloaded on-demand ONLY when user visits that tab
const AboutUsPage = lazy(() => import('./Page/AboutUs/AboutUsPage').then(m => ({ default: m.AboutUsPage || m.default })));
const OurServicePage = lazy(() => import('./Page/OurService/OurServicePage').then(m => ({ default: m.OurServicePage || m.default })));
const NewsPage = lazy(() => import('./Page/News/NewsPage').then(m => ({ default: m.NewsPage || m.default })));
const ContactUsPage = lazy(() => import('./Page/ContactUs/ContactUsPage').then(m => ({ default: m.ContactUsPage || m.default })));
const FollowUsPage = lazy(() => import('./Page/FollowUs/FollowUsPage').then(m => ({ default: m.FollowUsPage || m.default })));
const CareerPage = lazy(() => import('./Page/Career/CareerPage').then(m => ({ default: m.CareerPage || m.default })));
const GrievancePage = lazy(() => import('./Page/Grievance/GrievancePage').then(m => ({ default: m.GrievancePage || m.default })));
const AdvertiseWithUsPage = lazy(() => import('./Page/AdvertiseWithUs/AdvertiseWithUsPage').then(m => ({ default: m.AdvertiseWithUsPage || m.AdvertiseWithUs || m.default })));
const GalleryPage = lazy(() => import('./Page/Gallery/GalleryPage').then(m => ({ default: m.GalleryPage || m.Gallery || m.default })));
const MediaCoveragePage = lazy(() => import('./Page/MediaCoverage/MediaCoveragePage').then(m => ({ default: m.MediaCoveragePage || m.MediaCoverage || m.default })));
const ArticlePage = lazy(() => import('./Page/Article/ArticlePage').then(m => ({ default: m.ArticlePage || m.BlackComputer || m.default })));
const LiveTVPage = lazy(() => import('./Page/LiveTV/LiveTVPage').then(m => ({ default: m.LiveTVPage || m.LiveTV || m.default })));
const EBookPage = lazy(() => import('./Page/EBook/EBookPage').then(m => ({ default: m.EBookPage || m.Ebook || m.default })));
const ENewspaperPage = lazy(() => import('./Page/ENewspaper/ENewspaperPage').then(m => ({ default: m.ENewspaperPage || m.NewsPaper || m.default })));
const EventAndProgramsPage = lazy(() => import('./Page/EventAndPrograms/EventAndProgramsPage').then(m => ({ default: m.EventAndProgramsPage || m.MusicEventsConcerts || m.default })));
const BreakingNewsPage = lazy(() => import('./Page/BreakingNews/BreakingNewsPage').then(m => ({ default: m.BreakingNewsPage || m.BreakingNews || m.default })));
const LatestNewsPage = lazy(() => import('./Page/LatestNews/LatestNewsPage').then(m => ({ default: m.LatestNewsPage || m.Oven || m.default })));
const CopyrightPage = lazy(() => import('./Page/AboutUs/Copyright/CopyrightPage').then(m => ({ default: m.CopyrightPage || m.CopyRight || m.default })));
const PlaceholderPage = lazy(() => import('./Page/PlaceholderPage/PlaceholderPage').then(m => ({ default: m.PlaceholderPage || m.default })));

// Broadcast-style lightweight fallback during on-demand route download
const PageLoadingFallback = () => (
  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8 bg-slate-50">
    <div className="inline-flex items-center gap-2 bg-[#d91b24] text-white px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase shadow-xs animate-pulse mb-3">
      <span className="w-2 h-2 rounded-full bg-white" />
      <span>LOADING TRANSMISSION</span>
    </div>
    <div className="w-8 h-8 border-3 border-red-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Floating Back to Top Button with Circular Progress Indicator
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to Top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all duration-300 cursor-pointer select-none ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-75 pointer-events-none'
      }`}
    >
      {/* Dynamic Circular Scroll Progress SVG Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="rgba(0, 0, 0, 0.12)"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="#e01923"
          strokeWidth="2.5"
          strokeDasharray="132"
          strokeDashoffset={132 - (132 * scrollProgress) / 100}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-100"
        />
      </svg>

      {/* Button Interior Glow & Solid Broadcast Red Center */}
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#990d14] via-[#d91b24] to-[#ef4444] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(217,27,36,0.55)] group-hover:shadow-[0_6px_22px_rgba(217,27,36,0.85)] group-hover:scale-105 active:scale-95 transition-all duration-200 border border-white/50">
        <FaArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 group-hover:-translate-y-0.5" />
      </div>

      {/* Hover Pulse Ripple Ring */}
      <span className="absolute -inset-1 rounded-full bg-red-600/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none transition-opacity duration-300" />
    </button>
  );
};

// Top Global Floating Back Pill (Displayed only on subpages, zero layout shift)
const TopBackNavigation = ({ onGoBack }) => {
  return (
    <button
      onClick={onGoBack}
      type="button"
      aria-label="Go back to previous page"
      title="Go back to previous page"
      className="absolute top-3 sm:top-4 left-3 sm:left-6 md:left-8 z-30 inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/90 text-slate-700 hover:text-red-600 hover:border-red-400 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(217,27,36,0.18)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 font-bold text-xs sm:text-sm cursor-pointer group select-none"
    >
      <div className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 rounded-full bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0">
        <FaArrowLeft className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-200 group-hover:-translate-x-0.5" />
      </div>
      <span>Back</span>
    </button>
  );
};

// Mapping table between hash routes and active navigation labels
const routeToNavMap = {
  home: 'Home',
  '#home': 'Home',
  'about-us': 'About Us',
  aboutus: 'About Us',
  copyright: 'About Us',
  'copy-right': 'About Us',
  'copy_right': 'About Us',
  'our-services': 'Our Services',
  'our-service': 'Our Services',
  ourservices: 'Our Services',
  ourservice: 'Our Services',
  grievance: 'Grievance',
  'live-tv': 'Live TV',
  'live_tv': 'Live TV',
  livetv: 'Live TV',
  'advertise-with-us': 'Advertise With Us',
  'media-coverage': 'Media Coverage',
  'events-programs': 'Events & Programs',
  eventsprograms: 'Events & Programs',
  'events_programs': 'Events & Programs',
  events: 'Events & Programs',
  programs: 'Events & Programs',
  career: 'Career',
  'contact-us': 'Contact Us',
  'follow-us': 'Follow Us',
  followus: 'Follow Us',
  'breaking-news': 'Breaking News',
  breakingnews: 'Breaking News',
  'breaking_news': 'Breaking News',
  'headline-news': 'Headline News',
  'latest-news': 'Latest News',
  latestnews: 'Latest News',
  'latest_news': 'Latest News',
  news: 'News',
  'e-newspaper': 'E-Newspaper',
  enewspaper: 'E-Newspaper',
  'e_newspaper': 'E-Newspaper',
  newspaper: 'E-Newspaper',
  article: 'Article',
  articles: 'Article',
  'e-book': 'E-Book',
  ebook: 'E-Book',
  'e_book': 'E-Book',
  gallery: 'Gallery',
};

// In-page sections that exist on the homepage
const inPageSectionAnchors = [
  'headline-news',
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize route from window.location.hash
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      return hash || 'home';
    }
    return 'home';
  });

  // Calculate active tab name for header navigation highlighting
  const activeTab = routeToNavMap[currentRoute] || 'Home';

  // Listen to hash changes in browser (back/forward navigation & anchor clicks)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      const targetRoute = hash || 'home';
      setCurrentRoute(targetRoute);

      // If it's an in-page section on home, scroll to it smoothly
      if (inPageSectionAnchors.includes(targetRoute)) {
        setTimeout(() => {
          const el = document.getElementById(targetRoute);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Centralized tab/link click handler
  const handleTabChange = (tabName, href) => {
    const rawTarget = (href || tabName || 'home').replace('#', '').trim().toLowerCase();
    
    // Normalize target
    let target = rawTarget;
    if (tabName === 'Home') target = 'home';
    if (tabName === 'About Us') target = 'about-us';
    if (tabName === 'Our Services') target = 'our-services';
    if (tabName === 'Grievance') target = 'grievance';
    if (tabName === 'Live TV') target = 'live-tv';
    if (tabName === 'Advertise With Us') target = 'advertise-with-us';
    if (tabName === 'Media Coverage') target = 'media-coverage';
    if (tabName === 'Events & Programs') target = 'events-programs';
    if (tabName === 'Career') target = 'career';
    if (tabName === 'Contact Us') target = 'contact-us';
    if (tabName === 'Follow Us') target = 'follow-us';
    if (tabName === 'Breaking News') target = 'breaking-news';
    if (tabName === 'Headline News') target = 'headline-news';
    if (tabName === 'Latest News') target = 'latest-news';
    if (tabName === 'News') target = 'news';
    if (tabName === 'E-Newspaper') target = 'e-newspaper';
    if (tabName === 'Article') target = 'article';
    if (tabName === 'E-Book') target = 'e-book';
    if (tabName === 'Gallery') target = 'gallery';

    window.location.hash = `#${target}`;
    setCurrentRoute(target);

    if (inPageSectionAnchors.includes(target) || target === 'home') {
      setTimeout(() => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Global back button navigation handler
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      const currentHash = window.location.hash;
      if (window.history.length > 1) {
        window.history.back();
        // If history.back did not change hash (e.g. fresh tab direct entry), fallback to home
        setTimeout(() => {
          if (window.location.hash === currentHash) {
            handleTabChange('Home', '#home');
          }
        }, 150);
      } else {
        handleTabChange('Home', '#home');
      }
    }
  };

  // Determine whether to display the 24-section homepage or a dedicated page
  const isHomepageView =
    currentRoute === 'home' ||
    currentRoute === '' ||
    inPageSectionAnchors.includes(currentRoute);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased overflow-x-hidden w-full">
      
      {/* 1. Header (Welcome Banner, Breaking Ticker Bar & CR Realtime Header) */}
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Conditional View: Homepage / About Us / Our Services / Grievance / News / Contact Us / Follow Us / Dedicated Placeholder Page */}
      {isHomepageView ? (
        <HomeSection />
      ) : (
        <div className="relative w-full flex-1">
          {/* Top Floating Back Pill - absolutely placed directly on top-left of the subpage */}
          <TopBackNavigation onGoBack={handleGoBack} />

          <Suspense fallback={<PageLoadingFallback />}>
            {currentRoute === 'about-us' || currentRoute === 'aboutus' ? (
              <AboutUsPage />
            ) : currentRoute === 'our-services' || currentRoute === 'our-service' || currentRoute === 'ourservice' || currentRoute === 'ourservices' ? (
              <OurServicePage />
            ) : currentRoute === 'grievance' ? (
              <GrievancePage />
            ) : currentRoute === 'news' ? (
              <NewsPage />
            ) : currentRoute === 'contact-us' || currentRoute === 'contactus' ? (
              <ContactUsPage />
            ) : currentRoute === 'follow-us' || currentRoute === 'followus' ? (
              <FollowUsPage />
            ) : currentRoute === 'career' || currentRoute === 'carrier' ? (
              <CareerPage />
            ) : currentRoute === 'advertise-with-us' || currentRoute === 'advertisewithus' || currentRoute === 'advertise' ? (
              <AdvertiseWithUsPage />
            ) : currentRoute === 'gallery' ? (
              <GalleryPage />
            ) : currentRoute === 'media-coverage' || currentRoute === 'mediacoverage' ? (
              <MediaCoveragePage />
            ) : currentRoute === 'events-programs' || currentRoute === 'events_programs' || currentRoute === 'eventsprograms' || currentRoute === 'events' || currentRoute === 'programs' ? (
              <EventAndProgramsPage />
            ) : currentRoute === 'article' || currentRoute === 'articles' ? (
              <ArticlePage />
            ) : currentRoute === 'live-tv' || currentRoute === 'livetv' || currentRoute === 'live_tv' ? (
              <LiveTVPage />
            ) : currentRoute === 'e-book' || currentRoute === 'ebook' || currentRoute === 'e_book' ? (
              <EBookPage />
            ) : currentRoute === 'breaking-news' || currentRoute === 'breakingnews' || currentRoute === 'breaking_news' ? (
              <BreakingNewsPage />
            ) : currentRoute === 'latest-news' || currentRoute === 'latestnews' || currentRoute === 'latest_news' ? (
              <LatestNewsPage />
            ) : currentRoute === 'copyright' || currentRoute === 'copy-right' || currentRoute === 'copy_right' ? (
              <CopyrightPage />
            ) : currentRoute === 'e-newspaper' || currentRoute === 'enewspaper' || currentRoute === 'e_newspaper' || currentRoute === 'newspaper' ? (
              <ENewspaperPage />
            ) : (
              <PlaceholderPage route={currentRoute} onNavigate={(tab) => handleTabChange(tab)} />
            )}
          </Suspense>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. OFFICIAL BROADCAST NEWS FOOTER & MOVING SATELLITE VAN SCENE            */}
      {/* ========================================================================= */}
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* ========================================================================= */}
      {/* 8. FLOATING BROADCAST BACK TO TOP BUTTON                                  */}
      {/* ========================================================================= */}
      <BackToTopButton />

    </div>
  );
}

export default App;
