import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function NewsSection() {
  const news = [
    {
      image: '/images/news-1.jpg',
      date: '16 MAY 2025',
      title: 'Rwanda Youth Nuclear Summit 2025',
      description: 'Empowering youth to lead Rwanda&apos;s nuclear future and sustainable development.',
      link: '#',
    },
    {
      image: '/images/news-2.jpg',
      date: '15 MAY 2026',
      title: 'Women and Girls in Nuclear Power Campaign',
      description: 'Celebrating and promoting the role of women and girls in nuclear science.',
      link: '#',
    },
    {
      image: '/images/news-3.jpg',
      date: '01 MAY 2025',
      title: 'High-Level Engagement with WRN Rwanda',
      description: 'Strengthening collaboration and advancing nuclear development and youth engagement.',
      link: '#',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52]">
            LATEST NEWS & STORIES
          </h2>
          <Link href="#" className="text-[#2d9c4a] font-semibold hover:underline flex items-center gap-2">
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-gray-500 font-semibold uppercase mb-3">
                  {item.date}
                </p>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="text-[#2d9c4a] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
