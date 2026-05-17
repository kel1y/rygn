import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3a52] mb-6 leading-tight">
              YOUTH POWERING <br />
              <span className="text-[#2d9c4a]">RWANDA&apos;S</span>
              <br />
              NUCLEAR FUTURE
            </h1>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Empowering today&apos;s youth to build a clean, safe and sustainable tomorrow through nuclear science and technology.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-[#1a3a52] text-white px-8 py-3 rounded-lg hover:bg-[#0f2847] transition-colors font-semibold"
              >
                Learn More
              </Link>
              <Link
                href="/get-involved"
                className="border-2 border-[#1a3a52] text-[#1a3a52] px-8 py-3 rounded-lg hover:bg-[#1a3a52] hover:text-white transition-colors font-semibold"
              >
                Join the Movement
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Young professionals working on nuclear science"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
