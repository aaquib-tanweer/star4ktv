const ChannelSection = ({ title, channels }: { title: string; channels: string[] }) => (
  <div className="mb-16">
    <div className="flex justify-center mb-8">
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center px-8 py-3">
          {title}
        </h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#E50914] rounded-full"></div>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {channels.map((channel, index) => (
        <div 
          key={index} 
          className="bg-gray-900/50 hover:bg-gray-800/70 text-white p-4 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg border border-gray-700/30 hover:border-[#E50914]/50 backdrop-blur-sm"
        >
          <span className="text-sm font-medium">{channel}</span>
        </div>
      ))}
    </div>
  </div>
);

export function ChannelsSection() {
  const channels = {
    english: [
      "SKY 2", "TRUE MOVIES 1 UK", "BBC ONE", "BBC TWO", "BBC4", "CP24 HD", "CP24 SD", "BNN",
      "CHCH TV", "CBC NEWS NETWORK", "CBC TORONTO", "GLOBAL TV", "CITY TV", "CTV TV",
      "THE WEATHER CHANNEL -CA", "OMNI 1", "OMNI 2", "OWN - CA", "HBO-EAST CA", "SLICE -CA",
      "ABC-HD-WKBW", "CBS-HD", "FOX-HD", "NBC HD", "BLOOMBERG TV ASIA", "CNBC HD",
      "CNBC WORLD", "CNBC AFRICA", "BLOOMBERG TV US", "RT INTERNATIONAL", "BBC WORLD NEWS",
      "124 NEWS", "ALJAZEERA ENG", "FOX NEWS", "MSNBC", "HBO-EAST US", "HBO-2 US", 
      "HBO-FAMILY", "STARZ KID & FAMILY", "USA-HD", "SHOWTIME WEST", "STARZ EAST",
      "STARZ CINEMA", "HBO COMEDY", "HBO ZONE", "CINEMA 5 STAR", "CINEMA ACTION",
      "SHOWTIME EAST", "SKY MOVIES THRILLER", "SKY MOVIES SHOWCASE", "SKY MOVIES DRAMA UK",
      "SKY MOVIES FAMILY UK", "SKY UK MOVIES SCIFI & HORROR", "MOVIES 4 MEN", "BBC THREE",
      "BBC NEWS", "ALIBI CHANNEL", "GOLD TV", "CBS ACTION UK", "DISCOVERY ID UK",
      "DISCOVERY SCIENCE-UK", "DISCOVERY HISTORY UK", "ITV 1", "ITV 2", "IVT 3", "ITV 4",
      "E4", "5USA", "WATCH", "GOOD FOOD", "WEATHER NATION -US", "ABC NEWS", 
      "HBO SIGNATURE EAST", "CBS DRAMA UK", "BRAVO-CA", "AMC-CA", "FY-CA", "A&E-CA",
      "TLC-CA", "SHOWCASE-CA", "W NETWORK EAST", "M3 (MUCHMOREMUSIC)-CA", "HISTORY TV-CA",
      "DISCOVERY CHANNEL", "DISCOVERY ID CA", "LOVE NATURE", "ANIMAL PLANET HD-CA",
      "NAT GEO", "DOCUMENTARY", "MILITARY", "SHOWTIME", "FYI TV", "GSN TV", "WILD TV",
      "CNN HD", "3E", "FOOD HD-CA", "COOKING CHANNEL", "BRAVO USA", "TBS", "DESTINATION US",
      "WE TV", "TNT", "VELOCITY", "HIFI", "HGTV", "DIY NETWORK", "SYFY", "SPACE",
      "HISTORY", "HISTORY 2 HD", "DISCOVERY ID CA", "DISCOVERY HISTORY", "NATGEO WILD",
      "CINEMAX", "MTV DANCE UK", "BLOOMBERGE UK", "MTV ROCK UK", "DAVE CHANNEL -UK",
      "SYFY UK", "CHANNEL 4", "CHANNEL 5 -UK", "DMAX CHANNEL-UK", "TRUE MOVIES UK",
      "TRUE MOVIES 2 UK", "SKY ACTION", "SKY MOVIES PREMIER", "SKY ATLANTIC", "SKY DISNEY",
      "SKY MODERN GREATS", "MOVIES", "SKY MOVIES COMEDY", "SKY UK 1", "5 STAR",
      "COMEDY CENTRAL", "NAT GEO UK", "ANIMAL PLANET-UK", "DISCOVERY SCIENCE-CA",
      "DISCOVERY TURBO", "SKY NEWS", "FOX UK TV", "VEVO 1 HD", "VEVO 2 HD", "VEVO 3 HD",
      "VH1 USA", "BET", "MTV MUSIC UK", "MTV HITS"
    ],
    hindi: [
      "AND TV HD US", "AND TV HD IND", "AND PICTURES -US", "AND PICTURE IND", "SONY TV HD",
      "SONY TV US", "SONY TV UK", "SONY TV AUD", "STAR PLUS HD", "STAR PLUS US",
      "STAR PLUS AUD", "ZEE-TV HD- IND", "ZEE-TV HD -CAN", "ZEE TV APAC", "ZEE TV UK",
      "AAPKA COLORS HD", "COLORS HD -IND", "COLORS-UK", "COLORS -US", "LIFE OK-US",
      "LIFE OK AUD", "ZEE CINEMA HD-IND", "ZEE CINEMA US", "ZEE CINEMA UK", "ZEE CINEMA APC",
      "ZEE CINEMA HD -US", "SONY MAX", "SET MAX UK", "SET MAX AUD", "SET MAX UK", "SAB US",
      "SAB UK", "SAB AUD", "RISTHEY", "RISHTEY UK", "B4U MUSIC", "TV ASIA HD", "AAJTAK US",
      "ZEE ZING", "ZING TV UK", "SAHARA ONE", "AASTHA", "ZEE SMILE", "ZEE BUSINESS IND",
      "MUSIC EXPRESS", "FILMY", "CARE WORLD", "SAMAY AALAMI IND", "SANSKAR TV IND", "ET NOW",
      "TEZ NES IND", "ABP NEWS IND", "STAR PLUS USA", "MUSIC XPRESS", "ZEE NEWS IND",
      "ZEE PURVAIYA", "ZEE SANGAM", "ZEE MARUDHARA", "ZEE MPCG", "ZEE CLASSIC",
      "ZEE KHANA KHAZANA", "ZEE ETC BOLLYWOOD", "STAR GOLD", "NDTV 24*7", "PICTURES HD",
      "B4U MOVIES", "UTV MOVIES", "DHAMMAL", "B4U PLUS", "ZOOM TV", "ZOOM UK", "10 MOVIES",
      "9XM TV IND", "BIG MAGIC", "BOLLYWOOD NEWS", "BINDASS PLAY", "9X JALWA IND",
      "APKA CHANNEL", "HEADLINE TODAY", "FOOD FOOD", "MTV INDIA", "SONY MIX", "TIMES NOW",
      "MANORANJAN TV", "MUSIC INDIA IND", "MTUNES HD", "SAHHARA SAMAY", "UTV BINDASS",
      "TV COLORS"
    ],
    telugu: [
      "BHATHI TV", "GEMINI TV", "GEMINI MOVIES", "GEMINI COMEDY", "ZEE TELUGU",
      "ETV TELEGU", "MAA MUSIC", "MAA GOLD", "NTV", "MAA MOVIES US", "MAA TV", "MANA TV",
      "MAHAA TV", "POOJA TV", "OM CVR", "TV9 NEWS", "V6 NEWS TV", "TOLLYWOOD TV",
      "TV1 NEWS", "I NEWS", "VANITHA TV", "T NEWS", "STUDIO N TV", "RAJ VISSA",
      "RAKSHANA TV", "SAKHI TV", "CALVARY TV", "CVR NEWS", "CVR ENGLSH NEWS",
      "ABN ANDHRA JYOT", "10 TV", "ARADANA TV", "6TV", "ETV ANDHRA PRADESH",
      "RAJ NEWS TELUGU"
    ],
    tamil: [
      "TET HD", "TAMIL VISION", "TAMIL ONE", "STAR VIJAY -US", "SUN TV -US", "KTV-US",
      "SUN MUSIC -US", "ADITHYA TV-US", "SIRIPOLI TV", "KALAIGNAR TV", "JAYA MOVIE",
      "JAYA TV", "JAYA MAX", "JAYA PLUS", "RAJ TV", "RAJ NEWS", "RAJ MUSIC",
      "RAJ DIGITAL PLUS", "K4U", "LANKASRI TV", "VIMBAM TV", "EET", "CHITHIRAM TV",
      "MURASU", "ISAI ARUVI -IND", "MAKKAL TV", "NEWS7TAMIL", "THANTHI TV",
      "VANNATHIRAI VTV", "SRI SANKARA TAMIL", "PUTHIYA THALAIMURAI", "CAPTAIN TV",
      "CAPTAIN NEWS", "VASANNTHAM TV", "STAR VIJAY-UK"
    ],
    punjabi: [
      "SIKH CHANNEL-UK", "JUS ONE PUNJABI", "AONE PUNJABI", "PTC JUNJABI NEWS",
      "JUS PUNJABI", "Mh1", "HAMDARD TV", "PTC CHAK DE", "JHANJAR TV", "GOLD ONE TV",
      "DIP CHANNEL", "ZEE PUNJABI UK", "SIKH CHANNEL", "PTC PUNJABI US", "SEA TV",
      "ALPHA ETC PUNJABI", "24*7 GURBANI", "CHAKDE TV", "BRIT ASIA", "APNA CHANNEL",
      "ANKHILA PUNJAB TV", "9X TASHAN", "NAGARA TV", "5AAB", "SARDARI", "SANGAT TV",
      "ANKHILA PUNJABI"
    ],
    spanish: [
      "TV CHILLE", "CDN 37", "C5N", "AMERICAN PERU", "CALLE 13", "CUATRO", "CDN SPORT",
      "TV AZTECA", "EWTN", "TRU TV HD SP", "CNN EN ESPANOL", "HMX TV SP", "AE SP",
      "LIFE TIME SP", "BOOMERANG SP", "UNO MAS UNO SP", "DE PELACULA", "CBEEBIES SP",
      "CANAL LIGA", "CANAL FUTBOL", "TELEHIT SP", "ESTELLAS SP", "FORO TV SP", "ESPN SP",
      "ESPN 3 SP", "TELEFORMULA", "DISCOVERY KID SP", "DISNEY JRE SP", "DISRITO COMEDIA",
      "TNT SERIES", "FOX SPORT 2 HD", "GALA TV", "GLITZ SP", "GUAREVISION", "GALAVISION",
      "GOLDEN TV", "GOLDEN EDGE", "EL GOURMET", "MTV LIVE HD", "NICK JR", "NICK TOONS",
      "NICK SP", "DISNEY CHANNEL", "NAT GEO WILD", "CNTRO AMERICA", "TLE REBELDE",
      "TLNOVELAS", "MILENIO TV", "SYFY SP", "VH1 SP", "HD THEATRE", "HOME AND HEALTH",
      "UNICABLE", "STUDIO UNIVERSAL", "SAT SP", "TVE", "TV COLUMBIA", "DISNEY JUNIOR",
      "TOONCAST", "TNTSP", "UNIVISION", "UNIMAS", "CARACOL"
    ],
    sports: [
      "ESPN", "ESPN 2", "FOX SPORTS 1", "FOX SPORTS 2", "NBA TV", "NFL NETWORK",
      "SKY SPORTS", "EUROSPORT", "BEIN SPORTS", "TSN", "SPORTSNET"
    ]
  };

  return (
    <div id="channels" className="py-16 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            7000+ Multi Cultural Live Channels
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the world's most comprehensive IPTV channel lineup with premium content from every corner of the globe
          </p>
        </div>
        
        <div className="space-y-12">
          {Object.entries(channels).map(([category, channelList]) => (
            <ChannelSection 
              key={category}
              title={`${category.toUpperCase().replace('_', ' ')} CHANNELS`} 
              channels={channelList} 
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find Your Favorite Channel?
            </h3>
            <p className="text-gray-300 mb-6">
              We're constantly adding new channels to our lineup. Contact us to request specific channels or get more information about our offerings.
            </p>
            <button className="bg-gradient-to-r from-[#E50914] to-[#f40612] hover:from-[#f40612] hover:to-[#E50914] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 