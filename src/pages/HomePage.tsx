import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ContentSection } from '../components/ContentSection';
import { SportSection } from '../components/SportSection';
import { StreamingPartners } from '../components/StreamingPartners';
import { LiveStats } from '../components/LiveStats';
import { FeaturesSection } from '../components/FeaturesSection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <SEOHead 
        title="Star4KTV - Premium IPTV Streaming Service | 10,000+ Live Channels"
        description="Experience premium IPTV streaming with Star4KTV. Get access to 10,000+ live channels, 12+ OTT platforms, 4K Ultra HD quality, and 24/7 customer support. Subscribe now!"
        keywords="IPTV, streaming service, live TV, 4K streaming, premium IPTV, live channels, OTT platforms, Star4KTV, IPTV subscription, streaming, television, movies, sports"
        url="https://star4ktv.com/"
      />
      <Header />
      <main>
        {/* SEO H1 - Hidden but accessible to search engines */}
        <h1 className="sr-only">
          Star4KTV - Premium IPTV Streaming Service with 10,000+ Live Channels and 12+ OTT Platforms
        </h1>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <ContentSection title="Trending Now" contents={[{
            id: 1,
            title: 'Dune: Part Two',
            image: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
            rating: '8.5'
          }, {
            id: 2,
            title: 'RRR',
            image: 'https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
            rating: '7.9'
          }, {
            id: 3,
            title: 'The Substance',
            image: 'https://image.tmdb.org/t/p/w500/lqoMzCcZYEFK729d6qzt349fB4o.jpg',
            rating: '7.2'
          }, {
            id: 4,
            title: 'Deadpool & Wolverine',
            image: 'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
            rating: '7.7'
          }, {
            id: 5,
            title: 'Furiosa: A Mad Max Saga',
            image: 'https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
            rating: '7.5'
          }, {
            id: 6,
            title: 'Inside Out 2',
            image: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
            rating: '7.6'
          }]} />
          <SportSection sports={[{
            title: 'Manchester United vs Arsenal',
            image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=576',
            league: 'Premier League',
            time: 'Live Now'
          }, {
            title: 'Lakers vs Warriors',
            image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=576',
            league: 'NBA',
            time: 'Starting in 30m'
          }, {
            title: 'Formula 1 Monaco Grand Prix',
            image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=576',
            league: 'Formula 1',
            time: 'Tomorrow, 2:00 PM'
          }]} />
          <ContentSection title="New Releases" contents={[{
            id: 7,
            title: 'The Wild Robot',
            image: 'https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg',
            rating: '8.2'
          }, {
            id: 8,
            title: 'Wicked',
            image: 'https://image.tmdb.org/t/p/w500/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg',
            rating: '7.5'
          }, {
            id: 9,
            title: 'Oppenheimer',
            image: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
            rating: '8.3'
          }, {
            id: 10,
            title: 'Gladiator II',
            image: 'https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
            rating: '6.5'
          }, {
            id: 11,
            title: 'Spider-Man: No Way Home',
            image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
            rating: '8.2'
          }, {
            id: 12,
            title: 'Moana 2',
            image: 'https://image.tmdb.org/t/p/w500/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg',
            rating: '7.0'
          }]} />
          <ContentSection title="Recommended For You" contents={[{
            id: 13,
            title: 'Interstellar',
            image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
            rating: '8.7'
          }, {
            id: 14,
            title: 'Top Gun: Maverick',
            image: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
            rating: '8.2'
          }, {
            id: 15,
            title: 'Avatar',
            image: 'https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
            rating: '7.9'
          }, {
            id: 16,
            title: 'Avatar: The Way of Water',
            image: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
            rating: '7.6'
          }, {
            id: 17,
            title: 'The Dark Knight',
            image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
            rating: '9.0'
          }, {
            id: 18,
            title: 'The Batman',
            image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
            rating: '7.8'
          }]} />
        </div>
        <PricingSection />
        <StreamingPartners />
        <LiveStats />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
} 