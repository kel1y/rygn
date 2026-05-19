import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NewsCard } from '@/components/news/news-card';
import { newsStories } from '@/lib/news-stories';

export function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-3">
              LATEST NEWS & STORIES
            </h2>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Discover how RYGN is shaping Rwanda&apos;s nuclear future through
              summits, advocacy campaigns, and meaningful engagement with youth,
              partners, and communities across the country.
            </p>
          </div>
          <Link
            href="/news"
            className="text-[#2d9c4a] font-semibold hover:underline inline-flex items-center gap-2 shrink-0"
          >
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsStories.map((story) => (
            <NewsCard key={story.slug} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
