import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { WhoWeAre } from '@/components/about/who-we-are';
import { VisionMission } from '@/components/about/vision-mission';

export default function About() {
  return (
    <>
      <Navigation />
      <BreadcrumbHeader 
        title="ABOUT RYGN" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]}
      />
      <WhoWeAre />
      <VisionMission />
      <Footer />
    </>
  );
}
