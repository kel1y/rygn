import Link from 'next/link';
import { TeamMemberCard } from './team-member-card';

export function LeadershipGrid() {
  const leaders = [
    {
      name: 'Bruce Francois Riyago',
      title: 'Founder/Chairperson',
      image: '/images/team-1.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Ursela Angel Frenakwako',
      title: 'Vice Chairperson',
      image: '/images/team-2.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Julius Jambo',
      title: 'Secretary General',
      image: '/images/team-3.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Muhammad Chantell',
      title: 'Communication Lead',
      image: '/images/team-4.jpg',
      linkedin: '#',
      twitter: '#',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-2">
            OUR LEADERSHIP
          </h2>
          <p className="text-gray-600 text-lg">
            Passionate young leaders driving the nuclear agenda forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {leaders.map((leader, index) => (
            <TeamMemberCard
              key={index}
              name={leader.name}
              title={leader.title}
              image={leader.image}
              linkedin={leader.linkedin}
              twitter={leader.twitter}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="#"
            className="bg-[#1a3a52] text-white px-8 py-3 rounded-lg hover:bg-[#0f2847] transition-colors font-semibold inline-block"
          >
            Meet the Entire Team
          </Link>
        </div>
      </div>
    </section>
  );
}
