import { notFound } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { StoryContent } from '@/components/news/story-content';
import {
  getAllStorySlugs,
  getStoryBySlug,
} from '@/lib/news-stories';

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return { title: 'Story Not Found | RYGN' };
  }

  return {
    title: `${story.title} | RYGN`,
    description: story.excerpt,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <StoryContent story={story} />
      <Footer />
    </>
  );
}
