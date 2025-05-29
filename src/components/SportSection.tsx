import { PlayIcon, PlusIcon } from 'lucide-react';

interface Sport {
  id: number;
  title: string;
  image: string;
  league: string;
  time: string;
}

interface SportSectionProps {
  sports: Sport[];
}

export function SportSection({ sports }: SportSectionProps) {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Live & Upcoming Sports
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sports.map(sport => (
          <div key={sport.id} className="relative group overflow-hidden rounded-lg bg-gray-900">
            <img src={sport.image} alt={sport.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-red-500 font-semibold">
                  {sport.league}
                </span>
                <span className="text-sm text-gray-400">{sport.time}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{sport.title}</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={scrollToPricing}
                  className="bg-[#E50914] hover:bg-[#f40612] text-white px-4 py-2 rounded-md flex items-center transition"
                >
                  <PlayIcon size={16} className="mr-2" />
                  Watch Live
                </button>
                <button className="bg-gray-700/80 hover:bg-gray-600/80 text-white px-4 py-2 rounded-md flex items-center transition">
                  <PlusIcon size={16} className="mr-2" />
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}