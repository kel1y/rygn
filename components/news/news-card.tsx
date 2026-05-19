import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { NewsStory } from '@/lib/news-stories';

interface NewsCardProps {
  story: NewsStory;
}

export function NewsCard({ story }: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
      <div className="relative h-52 w-full">
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-[#2d9c4a] text-white text-xs font-semibold uppercase px-3 py-1 rounded-full">
          {story.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-gray-500 font-semibold uppercase mb-3">
          {story.date}
        </p>
        <h3 className="text-xl font-bold text-[#1a3a52] mb-3 leading-snug">
          {story.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
          {story.excerpt}
        </p>
        <Link
          href={`/news/${story.slug}`}
          className="text-[#2d9c4a] font-semibold hover:underline inline-flex items-center gap-2 mt-auto"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
