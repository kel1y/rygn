import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { PhotoGrid } from '@/components/gallery/photo-grid';
import { getGalleryImages } from '@/lib/gallery-images';

export default function Gallery() {
  const photos = getGalleryImages();

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
      <PhotoGrid photos={photos} />
      <Footer />
    </>
  );
}
