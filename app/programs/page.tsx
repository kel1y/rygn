import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { ProgramGrid } from '@/components/programs/program-grid';

export default function Programs() {
  return (
    <>
      <Navigation />
      <BreadcrumbHeader 
        title="OUR PROGRAMS" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' }
        ]}
      />
      <ProgramGrid />
      <Footer />
    </>
  );
}
