import React, { useState } from 'react';
import {
  Home,
  ArrowLeft,
  Tv,
  Newspaper,
  BookOpen,
  Images,
  Info,
  Briefcase,
  ShieldAlert,
  Megaphone,
  Radio,
  Calendar,
  GraduationCap,
  Phone,
  Globe,
  FileText,
  CheckCircle2,
  Play,
  VolumeX,
  Send,
  AlertTriangle,
  Award,
} from 'lucide-react';

export const PlaceholderPage = ({ route = 'about-us', onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Editorial Concern',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'Editorial Concern',
        subject: '',
        message: '',
      });
    }, 4500);
  };

  const navigateTo = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      window.location.hash = target.startsWith('#') ? target : `#${target}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Content configurations for every supported route
  const pageConfigs = {
    'about-us': {
      title: 'About CR REALTIME NEWS CHANNEL',
      subtitle: "India's Fearless, Independent, and Real-Time Multi-Platform News Network",
      category: 'COMPANY & EDITORIAL PROFILE',
      icon: Info,
      badge: 'OFFICIAL PROFILE',
      description:
        'CR REALTIME NEWS CHANNEL is dedicated to delivering accurate, uncompromised, and real-time news reporting from every corner of India and around the globe. Our team of seasoned journalists, investigative reporters, and broadcast engineers uphold the highest standards of journalistic integrity.',
      highlights: [
        { label: 'Founded On', value: 'Truth & Impartiality' },
        { label: 'Active Bureaus', value: '28 States & 8 UTs' },
        { label: 'Monthly Reach', value: '15+ Million Citizens' },
        { label: 'Broadcast Desks', value: '24/7 Real-Time Telemetry' },
      ],
      sections: [
        {
          title: 'Our Mission & Editorial Charter',
          content:
            'In an era overwhelmed by algorithmic noise and sensationalism, CR Real Time News Channel operates on three non-negotiable principles: Real News, Real People, and A Better Tomorrow. We bring critical reporting on governance, national security, climate, rural affairs, public health, and technology innovation directly to the people.',
        },
        {
          title: 'Pan-India Broadcast Infrastructure',
          content:
            'With state-of-the-art broadcast production facilities in New Delhi and Mumbai, synchronized live satellite transmission vans, and automated digital teletype networks, we provide immediate visual and field coverage of breaking developments.',
        },
      ],
    },
    'our-services': {
      title: 'Our Broadcast & Media Services',
      subtitle: 'Comprehensive 24/7 Multi-Channel News Coverage, Digital Feeds, and Wire Syndication',
      category: 'BROADCAST SOLUTIONS',
      icon: Briefcase,
      badge: 'ENTERPRISE & CITIZEN DESK',
      description:
        'From high-definition 24/7 broadcast television streaming to real-time digital broadsheets and wire syndication, CR REALTIME provides end-to-end journalistic services.',
      highlights: [
        { label: 'Television Feeds', value: '1080p Ultra-Low Latency' },
        { label: 'Digital Wire', value: 'Direct API Newsfeed' },
        { label: 'Syndication', value: '120+ Media Partners' },
        { label: 'Fact-Checking', value: 'Certified Verification Unit' },
      ],
      sections: [
        {
          title: '24/7 High-Definition Satellite Broadcast',
          content:
            'Round-the-clock live studio broadcasts, on-ground OB van reporting, prime-time debates, and specialized documentary segments delivered across satellite, cable, and OTT networks.',
        },
        {
          title: 'Digital Wire & Broadsheet Syndication',
          content:
            'Licensed daily broadsheet editions, digital E-paper editions, RSS/JSON teletype feeds, and specialized investigative dossiers for corporate, institutional, and government partners.',
        },
      ],
    },
    'grievance': {
      title: 'Grievance Redressal Mechanism',
      subtitle:
        'Statutory Redressal Cell compliant with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021',
      category: 'LEGAL & REGULATORY COMPLIANCE',
      icon: ShieldAlert,
      badge: 'STATUTORY REDRESSAL',
      description:
        'CR REALTIME NEWS CHANNEL maintains a robust and transparent self-regulatory mechanism to ensure that any grievance concerning news content published or broadcasted is handled expeditiously and with utmost fairness.',
      officer: {
        name: 'Shri R. K. Sharma',
        designation: 'Grievance Redressal Officer & Senior Executive Editor',
        address: 'CR Real Time News Channel Media Complex, Barakhamba Road, New Delhi - 110001, India',
        email: 'grievance@crrealtimenews.com',
        phone: '+91-11-2341-9988',
      },
      highlights: [
        { label: 'Acknowledgment', value: 'Within 24 Hours' },
        { label: 'Resolution Window', value: 'Within 15 Days' },
        { label: 'Regulator Body', value: 'Digital Media Ethics Council' },
        { label: 'Level of Redressal', value: 'Level I: Publisher Cell' },
      ],
    },
    'live-tv': {
      title: 'CR REALTIME LIVE TV Broadcast',
      subtitle: 'Watch 24/7 Live Satellite Studio Transmission and Ground Breaking Dispatches',
      category: 'REAL-TIME VIDEO DESK',
      icon: Tv,
      badge: 'LIVE ON AIR',
      description:
        'Experience real-time broadcast television streaming live from our central studios in New Delhi. High-definition multi-camera feed featuring live telemetry, synchronized ticker news, and investigative briefings.',
      highlights: [
        { label: 'Stream Quality', value: 'Full HD 1080p 60fps' },
        { label: 'Transmission', value: 'Satellite Uplink INSAT-4B' },
        { label: 'Broadcast Status', value: 'ON AIR • LIVE' },
        { label: 'Audio Mode', value: 'Muted (Audio Removed)' },
      ],
    },
    'advertise-with-us': {
      title: 'Advertise With CR REALTIME NEWS',
      subtitle: 'Amplify Your Brand Across Television, Digital Web, E-Paper, and Mobile Broadcasts',
      category: 'COMMERCIAL PARTNERSHIPS',
      icon: Megaphone,
      badge: 'MEDIA SALES DESK',
      description:
        'Reach decision-makers, industry leaders, and engaged citizens across India. With tailored sponsorship packages spanning prime-time TV commercial slots, digital display banners, and branded special reports.',
      highlights: [
        { label: 'Prime Time Slots', value: '10s / 20s / 30s Avails' },
        { label: 'Digital Impressions', value: '45M+ Monthly Impr.' },
        { label: 'Target Audience', value: 'Socio-Economic SEC A/B' },
        { label: 'Custom Solutions', value: 'Conclaves & Summits' },
      ],
    },
    'media-coverage': {
      title: 'Media Coverage & Press Releases',
      subtitle: 'Official Press Statements, Awards, Industry Recognitions, and Syndication Notices',
      category: 'PRESS & CORPORATE RELATIONS',
      icon: Radio,
      badge: 'PRESS ROOM',
      description:
        'Access the official newsroom media kit, corporate announcements, national journalism awards, and media coverage regarding CR REALTIME NEWS CHANNEL operations and milestones.',
      highlights: [
        { label: 'Journalism Awards', value: 'National Media Award 2025' },
        { label: 'Press Releases', value: 'Updated Weekly' },
        { label: 'Media Kit', value: 'High-Res Assets Ready' },
        { label: 'Spokesperson Desk', value: 'press@crrealtimenews.com' },
      ],
    },
    'events-programs': {
      title: 'Events, Conclaves & Special Programs',
      subtitle: 'National Leadership Summits, Investigative Conclaves, and Broadcast Townhalls',
      category: 'FLAGSHIP GATHERINGS',
      icon: Calendar,
      badge: 'ANNUAL CALENDAR',
      description:
        'CR REALTIME NEWS CHANNEL convenes thought leaders, policy architects, innovators, and everyday citizens through high-impact physical and virtual conclaves across India.',
      highlights: [
        { label: 'Upcoming Summit', value: 'National Conclave 2026' },
        { label: 'Location', value: 'Vigyan Bhawan, New Delhi' },
        { label: 'Theme', value: 'Digital India & Sovereign Tech' },
        { label: 'Delegate Capacity', value: '2,500+ Registered' },
      ],
    },
    'career': {
      title: 'Careers at CR REALTIME NEWS',
      subtitle: 'Shape the Future of Truth-Driven Independent Journalism in India',
      category: 'HUMAN CAPITAL & NEWSROOM',
      icon: GraduationCap,
      badge: 'HIRING OPENINGS',
      description:
        'Join a team of bold journalists, skilled camera operators, creative producers, data analysts, and software engineers working 24/7 to deliver real news that moves the world.',
      highlights: [
        { label: 'Open Positions', value: '14 Active Roles' },
        { label: 'Locations', value: 'Delhi, Mumbai, Bengaluru' },
        { label: 'Work Culture', value: 'Excellence & Integrity' },
        { label: 'Contact', value: 'careers@crrealtimenews.com' },
      ],
    },
    'contact-us': {
      title: 'Contact Our Bureau & Newsroom',
      subtitle: 'Get in Touch with Editorial Desks, State Bureaus, or Commercial Representatives',
      category: 'DIRECTORY & COMMUNICATIONS',
      icon: Phone,
      badge: '24/7 HELPDESK',
      description:
        'Have a breaking news tip, investigative lead, or general inquiry? Our central newsroom in New Delhi and regional bureaus across all major capitals are standing by 24/7.',
      highlights: [
        { label: 'Newsline (Toll-Free)', value: '1800-200-REAL (7325)' },
        { label: 'WhatsApp Tip-Off', value: '+91-98710-NEWS1' },
        { label: 'Main News Desk', value: 'newsdesk@crrealtimenews.com' },
        { label: 'Central Bureau', value: 'Connaught Place, New Delhi' },
      ],
    },
    'e-newspaper': {
      title: 'E-Newspaper Digital Edition',
      subtitle: 'Read Today’s Official CR Real Time News Broadsheet in High-Definition Format',
      category: 'PRINT & DIGITAL EDITIONS',
      icon: Newspaper,
      badge: 'TODAY’S EDITION',
      description:
        'Browse the complete, page-by-page digital replica of our morning broadsheet newspaper. Complete with editorial columns, financial analysis, investigative dossiers, and regional supplements.',
      highlights: [
        { label: 'Current Edition', value: 'Vol. XVIII • Issue 312' },
        { label: 'Total Pages', value: '24 Full Color Pages' },
        { label: 'Format', value: 'Vector Zoomable PDF & Web' },
        { label: 'Morning Release', value: '05:00 AM IST Daily' },
      ],
    },
    'article': {
      title: 'Special News Articles & Investigative Reports',
      subtitle: 'Long-Form Journalism, Exclusive Exposés, and Opinion Columns',
      category: 'EDITORIAL REPOSITORY',
      icon: FileText,
      badge: 'FEATURED DISPATCHES',
      description:
        'Deep-dive investigative articles and analytical commentaries authored by CR Real Time News senior editors, subject matter specialists, and field correspondents.',
      highlights: [
        { label: 'Investigation Desk', value: 'Special Bureau Reports' },
        { label: 'Publication Cadence', value: 'Real-Time Hourly' },
        { label: 'Fact Verification', value: 'Double-Sourced Standard' },
        { label: 'Editorial Desk', value: 'editor@crrealtimenews.com' },
      ],
    },
    'e-book': {
      title: 'E-Book & Investigative Dossiers Library',
      subtitle: 'Comprehensive Digital Publications, Whitepapers, and Annual News Yearbooks',
      category: 'DIGITAL ARCHIVE',
      icon: BookOpen,
      badge: 'PUBLICATIONS DESK',
      description:
        'Download and read curated e-books, specialized cyber security handbooks, crime intelligence briefs, and annual policy retrospectives published by CR Real Time News Channel.',
      highlights: [
        { label: 'Available Titles', value: '28 Digital Editions' },
        { label: 'Compatibility', value: 'Kindle, iPad, PDF, ePub' },
        { label: 'Access Level', value: 'Open Public Access' },
        { label: 'Publisher', value: 'CR Media Academic Press' },
      ],
    },
    'gallery': {
      title: 'Photo & Video Media Gallery',
      subtitle: 'High-Resolution Ground Coverage, Studio Photographs, and Historic Moments',
      category: 'VISUAL JOURNALISM',
      icon: Images,
      badge: 'PRESS ARCHIVE',
      description:
        'Explore our visual archives capturing historic national developments, frontline reports, television studio anchors, international summits, and cultural celebrations.',
      highlights: [
        { label: 'Photo Assets', value: '12,000+ Verified Images' },
        { label: 'Resolution', value: 'Ultra HD 4K Quality' },
        { label: 'Licensing', value: 'Editorial Syndication Ready' },
        { label: 'Updated', value: 'Continuous Daily Ingest' },
      ],
    },
  };

  const currentConfig = pageConfigs[route] || pageConfigs['about-us'];
  const PageIcon = currentConfig.icon || Info;

  return (
    <main className="w-full bg-[#f8fafc] text-slate-800 min-h-[75vh] pt-12 pb-6 sm:py-10 px-3 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1240px] xl:max-w-[1340px] mx-auto">
        
        {/* Top Breadcrumb & Back-to-Home Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-1.5 text-slate-700 hover:text-red-600 font-bold transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-red-600" />
              <span>Home</span>
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-red-600 font-bold uppercase tracking-wider">{currentConfig.category}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-none">{currentConfig.title}</span>
          </div>

          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-[#082556] hover:text-red-600 border border-slate-200 hover:border-red-500/50 shadow-xs text-xs font-bold transition-all duration-150 cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Homepage</span>
          </button>
        </div>

        {/* Hero Banner for Current Route */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#051329] via-[#082556] to-[#041021] text-white p-6 sm:p-8 md:p-10 shadow-2xl border border-blue-950/60 mb-8 sm:mb-10">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>{currentConfig.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-['Montserrat',sans-serif] leading-tight mb-3">
                {currentConfig.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-4">
                {currentConfig.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                {currentConfig.description}
              </p>
            </div>

            {/* Large Glowing Icon Card */}
            <div className="flex-shrink-0 self-start md:self-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center text-red-500">
                <PageIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white drop-shadow-[0_4px_12px_rgba(238,27,28,0.5)]" />
              </div>
            </div>
          </div>

          {/* Quick Metrics / Highlights Grid */}
          {currentConfig.highlights && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10 relative z-10">
              {currentConfig.highlights.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-black text-white mt-0.5 truncate font-['Montserrat',sans-serif]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* ROUTE SPECIFIC WORKFLOWS & RICH MODULES                                    */}
        {/* ========================================================================= */}

        {/* 1. GRIEVANCE REDRESSAL SPECIFIC LAYOUT */}
        {route === 'grievance' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* Left: Officer Details & Statutory Compliance */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md">
                <h2 className="text-lg font-black text-[#082556] font-['Montserrat',sans-serif] mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-600" />
                  <span>Designated Grievance Officer</span>
                </h2>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold block uppercase text-[10px]">Officer Name</span>
                    <span className="font-extrabold text-slate-800 text-sm">{currentConfig.officer?.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block uppercase text-[10px]">Designation</span>
                    <span className="font-semibold text-slate-700">{currentConfig.officer?.designation}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block uppercase text-[10px]">Postal Bureau Address</span>
                    <span className="font-medium text-slate-700 leading-relaxed block">{currentConfig.officer?.address}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block uppercase text-[10px]">Official Redressal Email</span>
                    <a href={`mailto:${currentConfig.officer?.email}`} className="font-bold text-red-600 hover:underline">
                      {currentConfig.officer?.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block uppercase text-[10px]">Direct Redressal Desk Phone</span>
                    <span className="font-bold text-slate-800">{currentConfig.officer?.phone}</span>
                  </div>
                </div>

                <div className="mt-5 p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Complaints must specify the exact news story, date, time of broadcast or URL, and precise grounds of concern under the Code of Ethics.
                  </span>
                </div>
              </div>

              {/* 3-Step Process Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md">
                <h3 className="text-base font-black text-[#082556] font-['Montserrat',sans-serif] mb-3">
                  Statutory Resolution Timeline
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-black flex items-center justify-center flex-shrink-0 text-xs">1</span>
                    <div>
                      <span className="font-bold text-slate-800">Acknowledgment (Day 1)</span>
                      <p className="text-slate-500 text-[11px]">System confirmation and tracking ticket generated within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#082556] font-black flex items-center justify-center flex-shrink-0 text-xs">2</span>
                    <div>
                      <span className="font-bold text-slate-800">Editorial Review (Days 2–7)</span>
                      <p className="text-slate-500 text-[11px]">The Editorial Council reviews raw broadcasts, footage, notes, and sources.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-black flex items-center justify-center flex-shrink-0 text-xs">3</span>
                    <div>
                      <span className="font-bold text-slate-800">Formal Resolution (Within 15 Days)</span>
                      <p className="text-slate-500 text-[11px]">Detailed written communication specifying decision, correction, or action taken.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Grievance Submission Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-black text-[#082556] font-['Montserrat',sans-serif]">
                    File an Online Grievance
                  </h2>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase">
                    Level-I Form
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center py-10">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3 animate-bounce" />
                    <h3 className="text-lg font-black text-emerald-900 font-['Montserrat',sans-serif]">
                      Grievance Successfully Registered
                    </h3>
                    <p className="text-xs text-emerald-700 max-w-md mx-auto mt-2 leading-relaxed">
                      Your complaint ticket <span className="font-mono font-bold">#CR-GRV-{Math.floor(100000 + Math.random() * 900000)}</span> has been securely logged. Our Grievance Officer will acknowledge receipt via email within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Complainant Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:bg-white outline-none font-medium"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@domain.com"
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:bg-white outline-none font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Phone / Mobile Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:bg-white outline-none font-medium"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Category of Concern *</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:bg-white outline-none font-medium"
                        >
                          <option>Factual Inaccuracy</option>
                          <option>Defamation / Reputation</option>
                          <option>Privacy Violation</option>
                          <option>Code of Ethics Non-Compliance</option>
                          <option>Copyright / Intellectual Property</option>
                          <option>Other Editorial Grievance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Story Headline / Broadcast Date & Time *</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Mention headline or URL of published content"
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:bg-white outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Particulars of Grievance *</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Detail the specific clause of the Code of Ethics violated and state facts accurately..."
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-red-500 focus:bg-white outline-none font-medium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black tracking-wide shadow-lg shadow-red-500/25 active:scale-98 transition-all duration-150 cursor-pointer uppercase text-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Grievance Ticket</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 2. LIVE TV SPECIFIC LAYOUT */}
        {route === 'live-tv' && (
          <div className="space-y-8 mb-10">
            {/* Live TV Video Player Container */}
            <div className="bg-[#051329] rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-slate-800 shadow-2xl">
              <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center border border-white/10 group">
                
                {/* Background Video Simulator Poster */}
                <img
                  src="/tv-anchor-live.jpg"
                  alt="Live TV Broadcast Anchor"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none" />

                {/* Live Overlays: Watermark Logo & Live Pulse */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center gap-2 z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-600 text-white font-black text-[10px] sm:text-xs tracking-wider uppercase shadow-md shadow-red-600/40 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <span>LIVE BROADCAST</span>
                  </div>
                  <span className="text-white/80 font-mono text-[10px] sm:text-xs font-semibold bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                    INSAT-4B HD
                  </span>
                </div>

                {/* Top-Right Telemetry Bar */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center gap-2 z-10">
                  <div className="hidden sm:flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-lg border border-white/10 text-white text-[11px] font-mono">
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span>MUTED</span>
                  </div>
                  <button
                    onClick={() => navigateTo('home')}
                    className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                  >
                    View on Homepage
                  </button>
                </div>

                {/* Central Play Icon Simulation */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(238,27,28,0.7)] group-hover:scale-110 transition-transform cursor-pointer border-2 border-white/60">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" />
                </div>

                {/* Bottom Live Lower-Third Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                  <div className="flex items-center justify-between text-white text-xs sm:text-sm font-bold">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-black rounded uppercase">SPECIAL REPORT</span>
                      <span className="truncate max-w-xs sm:max-w-md md:max-w-xl font-['Montserrat',sans-serif]">
                        Prime Time Studio: Nationwide Analysis on India’s Digital Frontier & Sovereignty
                      </span>
                    </div>
                    <span className="text-red-400 font-mono text-xs hidden md:inline-block">24/7 STREAM OK</span>
                  </div>
                </div>

              </div>

              {/* Broadcast Schedule Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-xs">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-white">
                  <span className="text-[10px] text-red-400 font-bold block uppercase">08:00 AM – 10:00 AM</span>
                  <span className="font-bold">Morning India Wire</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-white">
                  <span className="text-[10px] text-red-400 font-bold block uppercase">01:00 PM – 02:30 PM</span>
                  <span className="font-bold">Markets & National Desk</span>
                </div>
                <div className="bg-red-950/60 p-3 rounded-xl border border-red-800/80 text-white">
                  <span className="text-[10px] text-red-300 font-bold block uppercase">08:00 PM – 09:30 PM (NOW)</span>
                  <span className="font-bold text-red-100">Prime Time Debate Live</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-white">
                  <span className="text-[10px] text-red-400 font-bold block uppercase">10:00 PM – 11:30 PM</span>
                  <span className="font-bold">Cyber Crime Investigation</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. GENERAL CONTENT / CARDS LAYOUT FOR OTHER ROUTES */}
        {route !== 'grievance' && route !== 'live-tv' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black mb-4">
                <PageIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-[#082556] font-['Montserrat',sans-serif] mb-2">
                Real-Time Verification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every story undergoes rigorous multi-source verification and ground checks before broadcast transmission across our multi-channel networks.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#082556] flex items-center justify-center font-black mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-[#082556] font-['Montserrat',sans-serif] mb-2">
                Pan-India & Global Reach
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reaching over 15 million citizens monthly through digital broadsheets, 24/7 television broadcast, electronic e-books, and mobile wires.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-[#082556] font-['Montserrat',sans-serif] mb-2">
                Public Trust & Accountability
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating strictly under Indian statutory journalism guidelines, transparency protocols, and prompt reader redressal mechanisms.
              </p>
            </div>
          </div>
        )}

        {/* Bottom Call to Action Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-black text-[#082556] font-['Montserrat',sans-serif]">
              Explore Full CR REALTIME 24-Section Interactive Homepage
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Experience the 3D rotating globe, live broadcast TV rig, broadsheet viewer, and investigative dossiers.
            </p>
          </div>

          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs shadow-md shadow-red-500/25 cursor-pointer active:scale-95 transition-all duration-150 flex-shrink-0"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </div>

      </div>
    </main>
  );
};

export default PlaceholderPage;
