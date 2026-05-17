import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { InvolvementCards } from '@/components/get-involved/involvement-cards';
import { InvolvementForm } from '@/components/get-involved/involvement-form';

export default function GetInvolved() {
  return (
    <>
      <Navigation />
      <BreadcrumbHeader 
        title="GET INVOLVED" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Get Involved', href: '/get-involved' }
        ]}
      />
      <InvolvementCards />
      <InvolvementForm />
      <Footer />
    </>
  );
}
