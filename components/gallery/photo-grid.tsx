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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.image}
              className="mb-6 break-inside-avoid rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-50"
            >
              <Image
                src={photo.image}
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
      </div>
    </section>
  );
}
