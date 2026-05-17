import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbHeaderProps {
  title: string;
  breadcrumbs: Array<{ label: string; href: string }>;
}

export function BreadcrumbHeader({ title, breadcrumbs }: BreadcrumbHeaderProps) {
  return (
    <div className="bg-[#1a3a52] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center gap-2">
              <Link href={crumb.href} className="hover:text-[#2d9c4a] transition-colors">
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
