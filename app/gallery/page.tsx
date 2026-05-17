import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { PhotoGrid } from '@/components/gallery/photo-grid';

export default function Gallery() {
  return (
    <>
      <Navigation />
      <BreadcrumbHeader 
        title="GALLERY" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' }
        ]}
      />
      <PhotoGrid />
      <Footer />
    </>
  );
}
