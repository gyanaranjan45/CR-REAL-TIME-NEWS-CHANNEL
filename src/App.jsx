import React, { useState, useEffect } from 'react';
import { Header } from './Page/Header/Header';
import { HomeSection } from './Page/HomeSection/HomeSection';
import { AboutUsPage } from './Page/AboutUs/AboutUsPage';
import { OurServicePage } from './Page/OurService/OurServicePage';
import { NewsPage } from './Page/News/NewsPage';
import { ContactUsPage } from './Page/ContactUs/ContactUsPage';
import { FollowUsPage } from './Page/FollowUs/FollowUsPage';
import { CareerPage } from './Page/Career/CareerPage';
import { GrievancePage } from './Page/Grievance/GrievancePage';
import { PlaceholderPage } from './Page/PlaceholderPage/PlaceholderPage';
import { Footer } from './Page/Footer/Footer';

// Mapping table between hash routes and active navigation labels
const routeToNavMap = {
  home: 'Home',
  '#home': 'Home',
  'about-us': 'About Us',
  aboutus: 'About Us',
  'our-services': 'Our Services',
  'our-service': 'Our Services',
  ourservices: 'Our Services',
  ourservice: 'Our Services',
  grievance: 'Grievance',
  'live-tv': 'Live TV',
  'advertise-with-us': 'Advertise With Us',
  'media-coverage': 'Media Coverage',
  'events-programs': 'Events & Programs',
  career: 'Career',
  'contact-us': 'Contact Us',
  'follow-us': 'Follow Us',
  followus: 'Follow Us',
  'breaking-news': 'Breaking News',
  'headline-news': 'Headline News',
  'latest-news': 'Latest News',
  news: 'News',
  'e-newspaper': 'E-Newspaper',
  article: 'Article',
  articles: 'Article',
  'e-book': 'E-Book',
  gallery: 'Gallery',
};

// In-page sections that exist on the homepage
const inPageSectionAnchors = [
  'breaking-news',
  'headline-news',
  'latest-news',
  'e-newspaper',
  'article',
  'articles',
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
      ) : currentRoute === 'about-us' || currentRoute === 'aboutus' ? (
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
      ) : (
        /* Dedicated Placeholder Page for routes (Live TV, Advertise, etc.) */
        <PlaceholderPage route={currentRoute} onNavigate={(tab) => handleTabChange(tab)} />
      )}

      {/* ========================================================================= */}
      {/* 7. OFFICIAL BROADCAST NEWS FOOTER & MOVING SATELLITE VAN SCENE            */}
      {/* ========================================================================= */}
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

    </div>
  );
}

export default App;
