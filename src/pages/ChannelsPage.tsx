import { Header } from '../components/Header';
import { ChannelsSection } from '../components/ChannelsSection';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export function ChannelsPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <SEOHead 
        title="Star4KTV Channels - 10,000+ Live IPTV Channels | Premium Streaming"
        description="Browse Star4KTV's extensive channel lineup with 10,000+ live channels including sports, movies, news, entertainment, and international content. Premium IPTV streaming at its best."
        keywords="IPTV channels, live TV channels, streaming channels, Star4KTV channels, premium IPTV, live streaming, sports channels, movie channels, international channels"
        url="https://star4ktv.com/channels"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://star4ktv.com/"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Channels",
              "item": "https://star4ktv.com/channels"
            }
          ]
        }}
      />
      <Header />
      <main className="pt-8">
        <ChannelsSection />
      </main>
      <Footer />
    </div>
  );
} 