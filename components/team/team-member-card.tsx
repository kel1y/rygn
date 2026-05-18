import Image from 'next/image';
import { LinkedinIcon } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
}

export function TeamMemberCard({
  name,
  title,
  image,
  linkedin,
}: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover object-top"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[#1a3a52] mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 font-semibold">{title}</p>

        {linkedin && (
          <div className="flex justify-center">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#2d9c4a] transition-colors"
              aria-label={`${name} on LinkedIn`}
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
