import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { NewsStory } from '@/lib/news-stories';

interface StoryContentProps {
  story: NewsStory;
}

export function StoryContent({ story }: StoryContentProps) {
  return (
    <article className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[#2d9c4a] font-semibold hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all stories
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-[#2d9c4a] text-white text-xs font-semibold uppercase px-3 py-1 rounded-full">
            {story.category}
          </span>
          <time className="text-sm text-gray-500 font-semibold uppercase">
            {story.date}
          </time>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-8 leading-tight">
          {story.title}
        </h1>

        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg mb-10">
          <Image
            src={story.image}
            alt={story.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            quality={100}
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          {story.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-base md:text-lg">
              {paragraph}
            </p>
          ))}

          {story.sections?.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-[#1a3a52] mb-3">
                {section.heading}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
