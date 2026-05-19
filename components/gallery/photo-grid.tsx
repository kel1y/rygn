import Image from 'next/image';
import type { GalleryImage } from '@/lib/gallery-images';

interface PhotoGridProps {
  photos: GalleryImage[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {photos.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No gallery images yet. Add photos to{' '}
            <code className="text-sm bg-gray-100 px-2 py-1 rounded">
              public/images/gallery
            </code>{' '}
            and they will appear here automatically.
          </p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="mb-6 break-inside-avoid rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-50"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={100}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
