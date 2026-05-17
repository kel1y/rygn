import { Eye, Target } from 'lucide-react';

export function VisionMission() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="w-8 h-8 text-[#2d9c4a]" />
              <h3 className="text-2xl font-bold text-[#1a3a52]">VISION</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Inspiring and catalyzing the active engagement of youth in Rwanda and across Africa for the peaceful application and promotion of nuclear science and technology to contribute to society&apos;s peaceful nuclear future, leadership, innovation, and sustainable development.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-8 h-8 text-[#2d9c4a]" />
              <h3 className="text-2xl font-bold text-[#1a3a52]">MISSION</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To inspire and empower youth to lead in the peaceful use of nuclear science and technology; fostering leadership, communication and building public trust. We are dedicated to sustainable development for a better Rwanda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
