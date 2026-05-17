import { Users, BookOpen, Calendar, Target } from 'lucide-react';

export function InvolvementCards() {
  const options = [
    {
      icon: Users,
      title: 'Join our network',
      description: 'Connect with like-minded youth passionate about nuclear science and sustainable development.',
    },
    {
      icon: BookOpen,
      title: 'Get mentorship',
      description: 'Access professional mentoring and guidance from experienced nuclear science leaders.',
    },
    {
      icon: Calendar,
      title: 'Participate in programs',
      description: 'Join our training, workshops, and skill-building programs throughout the year.',
    },
    {
      icon: Target,
      title: 'Make an impact',
      description: 'Help shape the future of nuclear science and contribute to Rwanda&apos;s development.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-12 text-center">
          GET INVOLVED IN OUR MISSION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#2d9c4a]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a3a52] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
