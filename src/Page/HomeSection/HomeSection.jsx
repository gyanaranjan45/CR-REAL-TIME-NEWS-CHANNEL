import React from 'react';
import { HeroSection } from './HeroSection/HeroSection';
import { homeSectionConfig } from './HomeSectionData';

export const HomeSection = () => {
  return (
    <main className="w-full flex flex-col" data-channel={homeSectionConfig.channelId}>
      <HeroSection />
    </main>
  );
};

export default HomeSection;
