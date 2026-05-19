import Image from 'next/image';

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-6">
              WHO WE ARE
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Rwandan Young Generation in Nuclear (RYGN) is a vibrant non-governmental organization committed to promoting the peaceful use of nuclear science and technology in Rwanda and across Africa.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We inspire, empower and connect young people to opportunities in nuclear science and related fields. Our mission is to lead the way in promoting nuclear literacy and developing a skilled workforce in Rwanda&apos;s nuclear sector.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through our programs and initiatives, we foster leadership, innovation, and sustainable development for a better tomorrow.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/team-group.jpg"
              alt="RYGN Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
