import { Users, BookOpen, HandshakeIcon, Calendar } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: '2,000+',
      label: 'Youth Reached',
    },
    {
      icon: BookOpen,
      number: '200+',
      label: 'Students Engaged',
    },
    {
      icon: HandshakeIcon,
      number: '10+',
      label: 'Partnerships',
    },
    {
      icon: Calendar,
      number: '20+',
      label: 'Activities Conducted',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#1a3a52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center text-white">
                <Icon className="w-12 h-12 mb-4 text-[#2d9c4a]" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
