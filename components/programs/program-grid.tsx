import { Users, Atom, Users2, Lightbulb, Shield, Megaphone, Calendar, FileText } from 'lucide-react';

export function ProgramGrid() {
  const programs = [
    {
      icon: Users,
      title: 'Awareness & Outreach',
      description: 'Awareness-based engagement to reach out to the wider audience on nuclear science and technology.',
    },
    {
      icon: Users2,
      title: 'Mentorship & Capacity Building',
      description: 'Mentoring & capacity building to equip the next generation with nuclear expertise.',
    },
    {
      icon: Shield,
      title: 'Women & Girls in Nuclear',
      description: 'STEM empowerment and leadership for women and girls in the nuclear field.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Skills Development',
      description: 'Developing technical and entrepreneurial skills for nuclear applications.',
    },
    {
      icon: Atom,
      title: 'Addressing Fears & Perceptions',
      description: 'Education-based engagement and public awareness on nuclear applications.',
    },
    {
      icon: Megaphone,
      title: 'Media & Engagement',
      description: 'LinkedIn & X posts, podcasts, articles, interviews & media engagement.',
    },
    {
      icon: Calendar,
      title: 'Events & Conferences',
      description: 'Organizing and participating in nuclear science summits and forums.',
    },
    {
      icon: FileText,
      title: 'Publications & Resources',
      description: 'Creating educational materials and thought leadership content.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
            WHAT WE DO
          </h2>
          <p className="text-gray-700 text-lg">
            We implement a diverse range of flagship programs focused on youth empowerment and opportunities in nuclear science and related fields.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <Icon className="w-12 h-12 text-[#2d9c4a] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-[#1a3a52] mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
