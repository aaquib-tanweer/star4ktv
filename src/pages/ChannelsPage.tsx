import { Header } from '../components/Header';
import { ChannelsSection } from '../components/ChannelsSection';
import { Footer } from '../components/Footer';

export function ChannelsPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <main className="pt-8">
        <ChannelsSection />
      </main>
      <Footer />
    </div>
  );
} 