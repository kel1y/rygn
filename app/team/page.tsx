import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { LeadershipGrid } from '@/components/team/leadership-grid';

export default function Team() {
  return (
    <>
      <Navigation />
      <BreadcrumbHeader 
        title="OUR TEAM" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Team', href: '/team' }
        ]}
      />
      <LeadershipGrid />
      <Footer />
    </>
  );
}
