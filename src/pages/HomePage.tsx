import React from 'react';
import { ModernHero } from '@/components/home/ModernHero';
import { QuickLinks } from '@/components/home/QuickLinks';
import { TestSeriesExplorer } from '@/components/home/TestSeriesExplorer';
import { BooksShowcase } from '@/components/home/BooksShowcase';
import { WhyUs } from '@/components/home/WhyUs';
import { Testimonials } from '@/components/home/Testimonials';
import { Stats } from '@/components/home/Stats';
import { EnrollCTA } from '@/components/home/EnrollCTA';
import { FAQ } from '@/components/home/FAQ';

function HomePage() {
  return (
    <>
      <ModernHero />
      <QuickLinks />
      <TestSeriesExplorer />
      <BooksShowcase />
      <WhyUs />
      <Testimonials />
      <Stats />
      <EnrollCTA />
      <FAQ />
    </>
  );
}

export default HomePage;
