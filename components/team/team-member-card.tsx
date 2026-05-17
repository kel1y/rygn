import Image from 'next/image';
import { LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export function TeamMemberCard({
  name,
  title,
  image,
  linkedin,
  twitter,
  instagram,
}: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[#1a3a52] mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 font-semibold">{title}</p>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#2d9c4a] transition-colors"
              aria-label={`${name} LinkedIn`}
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#2d9c4a] transition-colors"
              aria-label={`${name} Twitter`}
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#2d9c4a] transition-colors"
              aria-label={`${name} Instagram`}
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
