import Image from 'next/image';

export function PhotoGrid() {
  const photos = [
    {
      image: '/images/gallery-1.jpg',
      alt: 'Team at conference',
    },
    {
      image: '/images/gallery-2.jpg',
      alt: 'Workshop session',
    },
    {
      image: '/images/gallery-3.jpg',
      alt: 'Presentation event',
    },
    {
      image: '/images/gallery-4.jpg',
      alt: 'Team group photo',
    },
    {
      image: '/images/gallery-5.jpg',
      alt: 'Youth empowerment event',
    },
    {
      image: '/images/gallery-6.jpg',
      alt: 'Award ceremony',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative h-72 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
