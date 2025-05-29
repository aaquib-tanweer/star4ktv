import { Users, Play, Globe, Trophy } from 'lucide-react';

export function LiveStats() {
  const stats = [{
    icon: <Users size={32} />,
    value: '20M+',
    label: 'Active Users',
    description: 'Worldwide subscribers'
  }, {
    icon: <Play size={32} />,
    value: '100K+',
    label: 'Hours Streamed',
    description: 'Daily streaming hours'
  }, {
    icon: <Globe size={32} />,
    value: '190+',
    label: 'Countries',
    description: 'Global availability'
  }, {
    icon: <Trophy size={32} />,
    value: '50K+',
    label: 'Live Events',
    description: 'Annual sports coverage'
  }];
  return <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Star4KTV by the Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={index} className="text-center p-6 rounded-lg bg-gray-900/30 hover:bg-gray-800/30 transition-all duration-300">
              <div className="text-[#E50914] mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
}