import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BreadcrumbHeader } from '@/components/breadcrumb-header';
import { NewsCard } from '@/components/news/news-card';
import { newsStories } from '@/lib/news-stories';

export default function NewsPage() {
  return (
    <>
      <Navigation />
      <BreadcrumbHeader
        title="NEWS & STORIES"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News', href: '/news' },
        ]}
      />
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg max-w-3xl mb-12 leading-relaxed">
            Follow RYGN&apos;s journey as we empower young leaders, strengthen
            partnerships, and advance Rwanda&apos;s peaceful nuclear future
            through summits, campaigns, and community engagement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsStories.map((story) => (
              <NewsCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
