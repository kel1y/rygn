import Image from 'next/image';

export function PhotoGrid() {
  const photos = [
    { image: '/images/Picture1.jpg', alt: 'RYGN gallery photo 1' },
    { image: '/images/Picture2.jpg', alt: 'RYGN gallery photo 2' },
    { image: '/images/Picture3.jpg', alt: 'RYGN gallery photo 3' },
    { image: '/images/Picture4.jpg', alt: 'RYGN gallery photo 4' },
    { image: '/images/Picture5.jpg', alt: 'RYGN gallery photo 5' },
    { image: '/images/Picture6.jpg', alt: 'RYGN gallery photo 6' },
    { image: '/images/Picture7.jpg', alt: 'RYGN gallery photo 7' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.image}
              className="relative aspect-[4/3] min-h-[220px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
