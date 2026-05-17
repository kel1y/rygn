import { Users, Atom, Volume2, Lightbulb, Shield } from 'lucide-react';

export function CorePillars() {
  const pillars = [
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Guiding and empowering youth through mentorship and professional development.',
    },
    {
      icon: Atom,
      title: 'Capacity Building',
      description: 'Building knowledge and skills in nuclear science and related fields.',
    },
    {
      icon: Volume2,
      title: 'Awareness Raising',
      description: 'Educating communities and promoting peaceful use of nuclear science.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Skills',
      description: 'Driving innovation and developing technical skills for the future.',
    },
    {
      icon: Shield,
      title: 'Addressing Fears',
      description: 'Promoting communication and building public trust in nuclear technology.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a3a52] mb-16">
          OUR CORE PILLARS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Icon className="w-16 h-16 mb-4 text-[#2d9c4a]" />
                <h3 className="text-lg font-bold text-[#1a3a52] mb-2">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
