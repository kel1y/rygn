import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/home/hero-section';
import { StatsSection } from '@/components/home/stats-section';
import { CorePillars } from '@/components/home/core-pillars';
import { NewsSection } from '@/components/home/news-section';
import { NewsletterSection } from '@/components/home/newsletter-section';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <CorePillars />
      <NewsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
