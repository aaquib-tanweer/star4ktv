import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialChannelsToShow = 10;

const CATEGORY_KEYS = [
  'English Channels',
  'Cricket Channels',
  'NCAAB Channels',
  'NCAAF Channels',
  'Hindi Channels',
  'Tamil Channels',
  'Telugu Channels',
  'Malayalam Channels',
  'Gujarati Channels',
  'Punjabi Channels',
  'Nepali Channels',
  'Pakistani Channels',
  'MARATHI CHANNELS',
  'Islamic Channels',
  'Arabic Channels',
  'Kids Channels',
  'Filipino Channels',
  'Bengali Channels',
  'Afghani Channels',
  'Urdu Channels',
  'African/Jamaican Channels',
  'KANNADA CHANNELS',
  'Portuguese Channels',
  'Spanish Channels',
  'French Channels',
  'Russian Channels',
  'Polish Channels',
  'Chinese Channels',
  'Sinhala Channels',
  'Italian Channels',
  'Oriya Channels',
  'Jamaica Channels',
  'Adult Channels',
  'Bangla Channels',
  'Ex-Yugoslavia Channels',
  'Persian Channels',
  'Ukrainian Channels',
  'Israeli Channels'
] as const;
type CategoryKey = typeof CATEGORY_KEYS[number];

type ChannelMap = { [K in CategoryKey]: string };
type ChannelsData = { [key: string]: string[] };

const ChannelTile = ({
  title,
  channels,
  onClick
}: {
  title: string;
  channels: string[];
  onClick: () => void;
}) => {
  return (
    <div className="w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] mb-5">
      <div className="border border-gray-700/50 rounded-xl overflow-hidden bg-black/80 h-full hover:border-[#E50914]/50 transition-all duration-300 cursor-pointer">
        <button
          onClick={onClick}
          className="w-full px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#E50914] transition-colors hover:bg-gray-800/30"
        >
          <span className="text-lg font-semibold text-white text-left">{title}</span>
          <ChevronDownIcon className="text-[#E50914] w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const ChannelModal = ({
  isOpen,
  onClose,
  title,
  channels
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  channels: string[];
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedChannels = showAll ? channels : channels.slice(0, initialChannelsToShow);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              {channels.length === 0 ? (
                <div className="text-center text-gray-400 py-8 text-lg">No channels available in this category.</div>
              ) : (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {displayedChannels.map((channel, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg text-center text-sm font-medium transition-all duration-200 border border-gray-600 hover:border-[#E50914]/40 cursor-pointer"
                      >
                        {channel}
                      </div>
                    ))}
                  </div>
                  {channels.length > initialChannelsToShow && (
                    <div className="mt-6 text-center">
                      <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-[#E50914] hover:text-white bg-gray-800 hover:bg-[#E50914] px-6 py-2 rounded-lg transition-all duration-300 font-medium"
                      >
                        {showAll ? 'Show Less' : `Show More (${channels.length - initialChannelsToShow} more)`}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function ChannelsSection() {
  const channelMap: ChannelMap = {
    'Hindi Channels': 'hindi',
    'Tamil Channels': 'tamil',
    'Gujarati Channels': 'gujrati',
    'Punjabi Channels': 'punjabi',
    'Nepali Channels': 'nepalese',
    'Pakistani Channels': 'urdu',
    'MARATHI CHANNELS': 'marathi',
    'Islamic Channels': 'islamic',
    'Arabic Channels': 'arabic',
    'Telugu Channels': 'telugu',
    'Kids Channels': 'kids',
    'Filipino Channels': 'filipino',
    'Bengali Channels': 'bangla',
    'English Channels': 'english',
    'Afghani Channels': 'afghan',
    'Malayalam Channels': 'malayalam',
    'Urdu Channels': 'urdu',
    'African/Jamaican Channels': 'jamaica',
    'KANNADA CHANNELS': 'kannada',
    'Cricket Channels': 'sports',
    'Portuguese Channels': 'portuguese',
    'Spanish Channels': 'spanish',
    'French Channels': 'french',
    'Russian Channels': 'russian',
    'Polish Channels': 'polish',
    'Chinese Channels': 'chinese',
    'Sinhala Channels': 'sinhalse',
    'Italian Channels': 'italian',
    'NCAAB Channels': 'ncaab',
    'Oriya Channels': 'oriya',
    'Jamaica Channels': 'jamaica',
    'Adult Channels': 'adult',
    'Bangla Channels': 'bangla',
    'Ex-Yugoslavia Channels': 'exyogoslavia',
    'NCAAF Channels': 'ncaaf',
    'Persian Channels': 'persian',
    'Ukrainian Channels': 'ukrain',
    'Israeli Channels': 'israel'
  };

  const channels: ChannelsData = {
    sports: [
      "SKY SPORTS MAIN EVENT", "SKY SPORTS PREMIER LEAGUE", "SKY SPORTS FOOTBALL", "SKY SPORTS CRICKET", 
      "SKY SPORTS F1", "SKY SPORTS GOLF", "SKY SPORTS ACTION", "SKY SPORTS ARENA", "SKY SPORTS MIX",
      "BT SPORT 1", "BT SPORT 2", "BT SPORT 3", "BT SPORT ESPN", "EUROSPORT 1", "EUROSPORT 2",
      "PREMIER SPORTS 1", "PREMIER SPORTS 2", "RACING TV", "WWE NETWORK", "UFC FIGHT PASS",
      "BEIN SPORTS 1", "BEIN SPORTS 2", "BEIN SPORTS 3", "ESPN", "ESPN 2", "FOX SPORTS 1", "FOX SPORTS 2",
      "TENNIS CHANNEL", "NBA TV", "NFL NETWORK", "MLB NETWORK", "NHL NETWORK", "GOLF CHANNEL",
      "WILLOW CRICKET", "TEN SPORTS", "SONY SIX", "STAR SPORTS 1", "STAR SPORTS 2", "STAR SPORTS 3"
    ],
    english: [
      "BBC ONE", "BBC TWO", "ITV 1", "CHANNEL 4", "CHANNEL 5", "SKY ONE", "SKY ATLANTIC", "SKY WITNESS",
      "SKY COMEDY", "SKY CRIME", "SKY DOCUMENTARIES", "SKY HISTORY", "SKY NATURE", "SKY ARTS",
      "DISCOVERY CHANNEL", "NATIONAL GEOGRAPHIC", "HISTORY CHANNEL", "ANIMAL PLANET", "INVESTIGATION DISCOVERY",
      "CRIME & INVESTIGATION", "ALIBI", "DAVE", "GOLD", "YESTERDAY", "DRAMA", "E4", "MORE4", "ITV2", "ITV3",
      "ITV4", "5USA", "5STAR", "BBC NEWS", "SKY NEWS", "CNN", "FOX NEWS", "MSNBC", "BBC WORLD NEWS",
      "AL JAZEERA ENGLISH", "EURONEWS"
    ],
    hindi: [
      "STAR PLUS", "ZEE TV", "COLORS", "SONY TV", "SAB TV", "AND TV", "&TV HD", "STAR BHARAT",
      "ZEE ANMOL", "SONY PAL", "STAR UTSAV", "ZEE CINEMA", "SONY MAX", "STAR GOLD", "AND PICTURES",
      "B4U MOVIES", "UTV MOVIES", "MOVIES OK", "CINEMA TV", "ZEE ACTION", "ZEE CLASSIC", "ZEE BOLLYWOOD",
      "AAJ TAK", "INDIA TV", "NEWS 18 INDIA", "ZEE NEWS", "ABP NEWS", "NDTV INDIA", "INDIA TODAY",
      "DD NATIONAL", "DD NEWS", "MTV INDIA", "9XM", "ZOOM", "ZING", "B4U MUSIC", "MASTIII"
    ],
    tamil: [
      "SUN TV", "VIJAY TV", "ZEE TAMIL", "COLORS TAMIL", "KALAIGNAR TV", "RAJ TV", "JAYA TV", "POLIMER TV",
      "CAPTAIN TV", "VASANTH TV", "MAKKAL TV", "PEPPERS TV", "PUTHIYA THALAIMURAI", "NEWS 7 TAMIL",
      "THANTHI TV", "NEWS18 TAMIL NADU", "SUN MUSIC", "ISAI ARUVI", "JAYA MAX", "K TV", "RAJ DIGITAL PLUS",
      "ADITHYA TV", "SUN LIFE", "ANGEL TV TAMIL", "DISCOVERY TAMIL"
    ],
    telugu: [
      "GEMINI TV", "ETV TELUGU", "ZEE TELUGU", "STAR MAA", "TV9 TELUGU", "NTV", "TV5 NEWS", "ABN ANDHRA JYOTHY",
      "SAKSHI TV", "V6 NEWS", "T NEWS", "RAJ NEWS TELUGU", "ETV ANDHRA PRADESH", "DD SAPTAGIRI",
      "GEMINI MOVIES", "GEMINI COMEDY", "ZEE CINEMALU", "STAR MAA MOVIES", "ETV CINEMA", "GEMINI MUSIC",
      "MAA MUSIC", "VISSA TV", "BHAKTI TV", "HINDU DHARMAM"
    ],
    urdu: [
      "GEO NEWS", "GEO TV", "ARY NEWS", "ARY DIGITAL", "ARY DIGITAL WORLD", "ARY ZAUQ", "ARY MUSIC", "ARY QTV",
      "HUM TV", "HUM EUROPE", "HUM WORLD", "HUM TV WORLD 2", "HUM SITARAY", "MASALA TV", "DUNYA TV",
      "CAPITAL TV", "MADNI TV UK", "ARUJ", "NOOR TV", "NEWS ONE", "PEACE TV URDU", "PRIME TV",
      "PEACE TV URDU ENG", "PASHTO 1", "MTA1 A", "KASHISH TV", "KAYZ TV", "KTN", "KHYBER NEWS",
      "KOHENOOR TV", "KHYBER TV", "92 NEWS", "TIMES", "URDU 1", "SUCH TV", "STARLITE", "STAR MAX",
      "SILVER SCREEN", "SINOH TV", "BUSINESS PLUS", "AWAY", "CHANNEL 5", "D TV", "CHANNEL 24",
      "AHLULBAYT TV", "AL QURAN KAREEM LIVE", "DAWN NEWS", "EXPRESS NEWS", "EXPRESS ENTERTAINMENT",
      "ENJOY NOW HD", "DEMOD TV", "MADNI TV", "ISAAC TV", "INDU$ VISION", "HIDAYAT TV", "HADI TV",
      "JAAG TV", "TAKBEER TV", "TV ONE", "ZAIQA TV", "WIN TV", "VIBE TV", "ROZE NEWS", "RAAH TV",
      "RAAVI TV", "SAMAA", "SAHAR TV", "AAJ NEWS", "FILMAX", "FILM WORLD", "FILM ASIA", "FILMAZIA", "FALAK TV"
    ],
    arabic: [
      "MTV LEBANON", "AL JAZEERA", "AL JAZEERA DOC", "SAUDI QURAN", "SAUDI NEWS", "SAUDI 2", "NORSAT 2", "NORSAT TV",
      "NOURSAT", "AL HAYAT 2", "CTV COPTIC", "AL MANAH", "PANORAMA FILM", "PANORAMA DRAMA", "NRT TV", "MEDI 1 TV",
      "TIME FILM", "TIME COMEDY", "NILE DRAMA 2", "NILE SPORT", "MBC DRAMA", "NBN", "TIME CINEMA", "MEHWAR",
      "KUWAIT TV", "SUDAIT TV", "AL NAHAR DRAMA", "AL OUTA INTER", "FUTURE TV", "MAGHRIBIA", "SKY NEWS ARABIC",
      "NAT GEO ABU DHABI", "RT NEWS", "IORA ATV", "MBC MAX", "MBC SPORT 1", "MBC SPORT 2", "ABU DHABI DRAMA",
      "AL HAYAT 1", "FRANCE 2 ARABIC", "NILE DRAMA", "NILE FAMILY", "NILE CINEMA", "NILE COMEDY", "FRANCE 3 ARABIC",
      "FRANCE 4 ARABIC", "AL TUNISIA", "AL JAZEERA MOUBASHER", "AL RESALLA TV", "AL RAI", "AL RAHMA", "AL OULA",
      "AL NAHAR SPORT", "AL NAHAR AL YOUM", "AL NAHAR AL HAYUM", "AL NAHAR", "AL MAYADEEN", "AL MAJID", "AL JADEED",
      "AL HDATH", "AL HAYAT MUSALMAN", "AL ARAQUIA", "MBC MASR 2", "MBC ACTION", "MBC BOLLYWOOD", "LDC LEBANON",
      "AL ARABIA", "AIJAL", "AFRIADIA TV", "ART AFLAXI 1", "ART AFLAXI 2", "ART NEXAYAT 2", "AD SPORT 1", "2M MONDE",
      "BBC NEWS ARABIC", "CINEMA PRO", "CBC NEWS", "CBC DRAMA", "DUBAI SPORT 4", "DUBAI NOUR", "LBC LEBANON",
      "LBC EUROPE", "CAIRO CINEMA", "CBC 1", "MBC 1", "MBC 2", "MBC 3", "MBC 4", "CBC SOFRA", "CBC EXTRA",
      "CAIRO DRAMA", "OTV", "NILE CULTURE", "SUBIA DRAMA", "ROTANA MUZIK", "ROTANA KHALUJA", "ROTANA CLIP",
      "ROTANA CLASSIC", "ROTANA CINEMA", "STAR CINEMA 1", "STAR CINEMA 2", "FRANCE 24 ARABIC", "SAUDI SUNNAH",
      "DUBAI ONE", "FATA FEAT TV", "FOX ARABIC", "FOX MOVIE ARABIC", "LBC"
    ],
    marathi: [
      "COLPORS MARATHI", "TV9 MAHARASHTRA", "STAR PRAVAH", "ZEE TALKIES", "SAAM TV", "9X JHAKASAS", "ABP MANJHA", "24 TASS TV"
    ],
    bangla: [
      "SONY AATH", "ETV BANGLA", "MASRANGA", "PEACE TV BANGLA", "STAR JALSHA", "EXUSHEY TV", "MOVIE BANGLA", "TIME TV",
      "TARA MUZIK", "ZEE BANGLA US", "SOMOY NEWS TV", "R PLUS", "PLANET M CINEMA", "SANGSAD BANGLADESH", "SANGEET BANGLADESH",
      "JAMUNA TV", "INDEPENDENT TV", "MILLENNIUM TV", "MY TV", "DESH TV", "DHOOM MUZIK", "GHANTA", "GAAN BANGLA", "ERATOR TV",
      "NEWS TIME", "RUPASHI BANGLA", "SA TV", "BTV WORLD", "BANGLA VISION", "ASIAN TV", "BOISHAKHI TV", "ASIAN TV",
      "SR BANGLA TV", "ABP ANANDA", "NTV", "AAKASH BANGLA", "COLORS BANGLA", "CHANNEL I", "CHANNEL S", "ATN NEWS",
      "ATN BANGLA", "CHANNEL 9", "CHANNEL 24"
    ],
    kids: [
      "FAMILY HD", "ABC SPARK", "TREEHOUSE SD", "TREEHOUSE HD", "CARTOON NETWORK", "NICKELODEON", 
      "DISNEY XD HD", "NICKELODEON TEEN", "YTV EAST HD", "NICK JR UK", "DISNEY JUNIOR-CA", 
      "DISNEY CHANNEL-CA", "DISNEY JUNIOR-UK", "DISNEY CHANNEL", "CARTOON NETWORK", "NICKTOON UK", "FAMILY JR-CA"
    ],
    kannada: [
      "COLORS KANNADA", "ZEE KANNADA", "STAR SUVARNA", "UDAYA TV", "PUBLIC TV",
      "TV9 KANNADA", "KASTURI TV", "RAJA NEWS", "SUVARNA NEWS 24X7", "NEWS18 KANNADA",
      "UDAYA MOVIES", "UDAYA MUSIC", "UDAYA COMEDY", "STAR SUVARNA PLUS",
      "COLORS SUPER", "DD CHANDANA", "DIGHVIJAY NEWS", "PRAJA TV"
    ],
    exyogoslavia: [
      "PINK PLUS", "PINK", "PINK 2", "PINK 3", "PINK ACTION", "PINK FOLK", "PINK PREMIUM", "PINK HORROR",
      "PINK MONTENEGRO", "PINK WESTERN", "KLASIC TV", "N1", "HAYAT FOLK", "HAYAT PLUS", "DOMA TV",
      "LOV I RIBOLOV", "24 KITCHEN", "HISTORY CHANNEL", "ANIMAL PLANET", "DISCOVERY ID", "FOR MOVIES",
      "FOR EX", "FOX CRIME", "FOX LIFE EX", "HBO ADRIA & HBO COMEDY", "CINESTAR PREMIUM", "CINESTAR ACTION",
      "CINEMAX", "HAYAT HD", "HAPPY", "SONCE", "NOVEZAMKY", "B92", "ATV", "ATV1"
    ],
    italian: [
      "RAI INTERNATIONAL", "RAI ITALIA", "RAI 1", "RAI 2", "RAI 3", "SKY TG24", "EURONEWS", "RAI NEWS 24", "ETV",
      "SKY SPORT 1", "RAI PREMIUM", "FANO TV", "CIELO", "MEDIASET DUE", "MEDIASET EXTRA", "AXN", "SKY CINEMA 1"
    ],
    ncaab: [
      "NCAAB 01", "NCAAB 02", "NCAAB 03", "NCAAB 04", "NCAAB 05", "NCAAB 06", "NCAAB 07", "NCAAB 08"
    ],
    chinese: [
      "THE PHOENIX", "PHOENIX HONG KONG", "PHOENIX SICHUAN", "SUN TV", "YANGTZE RIVER THEATRE", 
      "ARTE INTERNATIONAL", "THREE INTERNATIONAL", "TRT INTERNATIONAL", "FIRST FINANCIAL"
    ],
    sinhalse: [
      "HIRU TV", "LORD BUDDHA TV", "ITN DERANA TV", "THE BUDDHIST", "SRI LANKA RUPAVAHINI", "SHAKTHI TV",
      "TV DERANA", "NETHRA TV", "VASANTHAM TV", "CHANNEL EYE"
    ],
    russian: [
      "RUSSIA 1", "RUSSIA 2", "RUSSIA 24", "SPORT 1 RUS", "CHANNEL ONE RUSSIA", "ANIMAL PLANET RUS", 
      "CARTOON NETWORK RUS", "MUSIC BOX RUS", "MUSIC BOX RUSSIA", "ILLUSION RUS", "COMEDY RUS", 
      "EUROSPORT RUSSIA", "EUROSPORT 2 RUS", "EUROPA PLUS TV", "NAT GEO RUSSIA", "NAT GEO WILD RUS", 
      "DISCOVERY CHANNEL RUS", "TV 1000 RUSSIA", "NTV HD RUS", "NTV PLUS RUS", "NASHE KINO", 
      "NASHE NOVOE KINO", "2X2 RUS", "A-ONE RUS", "VIASAT HISTORY RUS", "VIASAT NATURE RUS"
    ],
    polish: [
      "FILMBOX FAMILY POL", "CANAL+ FAMILY POL", "MINIMINI+ POL", "ORANGE SPORT POL", "NSPORT POL", "EUROSPORT POL", 
      "COMEDY CENTRAL POL", "TV4 POL", "TVN 7 POL", "VIVA POL", "SKAHBO POL", "HBO 2 POL", "HBO COMEDY POL", 
      "ANIMAL PLANET POL", "POLSAT PLAY POL", "POLSAT FILM POL", "NAT GEO WILD POL", "POLSAT SPORT NEWS", 
      "POLSAT NEWS", "POLSAT SPORT", "POLSAT SPORT EXTRA", "NAT GEO POL", "ESKA TV", "CANAL+ POL", 
      "CANAL+ SERIALE POL", "CANAL+ FILM POL", "POLSAT JIMJAM POL", "DISCOVERY SCIENCE POL", "BBC EARTH POL", 
      "DISNEY JUNIOR POL", "TV POLONIA", "ITVN POL", "TVN", "TVN 7", "TVP 1", "TVP 2", "TVP SPORT", "TVN 24", 
      "TVN TURBO", "TVN STYLE", "TVP HISTORIA", "POLSAT", "POLSAT 2", "TVP SERIALE", "ALE KINO", "KINO TV", 
      "KINO POLSKA", "TRWM TV", "TVP INFO", "DOMO+", "KUCHNIA+"
    ],
    persian: [
      "KLISAT TV", "MAIWAND TV", "PAYAM E AFGHAN", "PAYAM JAVAN TV", "PASHTO TV", "PRESS TV", 
      "GANJE HOZOUR TV", "MOHABBAT TV", "MELLI TV", "RTA", "SALAM TV", "JAMM E JAMM", 
      "KASIM TV", "SIMAY AZADI", "TAPESH TV", "TIME TV", "BBC PERSIAN", "ZARIN TV", 
      "RANGARANG TV", "FARSI 1", "VOA FARSI", "ZHWANDOON TV", "ARIANA INTERNATIONAL", 
      "ARIANA TV", "ARIANA TV NETWORK", "ATN NEWS", "CARACOL", "LEMAR TV", "TOLO NEWS", 
      "TOLO TV", "AAA MUSIC", "AAA FAMILY", "BBC", "CHANNEL ONE", "CLICK SAT", "ICC TV", 
      "FACES 2", "GEM USA", "MERCI TV", "NEX 1TV", "PMC TV", "TVP", "VOA TV"
    ],
    malayalam: [
      "ASIANET", "SURYA TV", "MAZHAVIL MANORAMA", "KAIRALI TV", "AMRITA TV", "KIRAN TV",
      "ASIANET NEWS", "MEDIA ONE", "MANORAMA NEWS", "NEWS 18 KERALA", "MATHRUBHUMI NEWS",
      "KAPPA TV", "ASIANET MOVIES", "SURYA MOVIES", "KAIRALI WE", "FLOWERS TV"
    ],
    portuguese: [
      "BAND NEWS", "BAND INTERNATIONAL", "GLOBO USA 1", "GLOBO USA", "GLOBO BRASIL", "GLOBO PREMIUM", 
      "RECORD USA", "RECORD BRASIL", "SPORTV AMÉRICA", "REAL MADRID TV", "BENFICA TV 1 SD", 
      "SPORTV 1 SD", "SPORTV 2 SD", "SPORTV 3 SD", "RTP INTERNACIONAL", "RTP MADEIRA", "RTP AÇORES", 
      "RTP 1", "RTP 2", "SIC", "SIC NOTÍCIAS", "SIC MULHER", "SIC RADICAL", "TVI", "TVI24", 
      "CMTV", "A BOLA TV", "SPORTV 1 HD", "SPORTV 2 HD", "SPORTV 3", "SPORTV 4", "SPORTV 5", 
      "BENFICA TV 1 HD", "BENFICA TV 2 HD", "SPORTING TV HD", "PORTO CANAL", "PFC", "MOTOS TV", 
      "MOTO VISION TV", "AXN PORTUGAL", "AXN WHITE", "AXN BLACK", "FOX PORTUGAL", "TYCINE 1", 
      "TYCINE 2", "TYCINE 3", "TYCINE 4", "CAÇA E PESCA", "TOROS TV", "DISCOVERY CHANNEL", 
      "ODISSEIA", "CANAL HISTÓRIA", "DISNEY CHANNEL PT", "RTP ÁFRICA", "ETV", "HOLLYWOOD", 
      "RTP MEMÓRIA", "RTP INFORMACÃO", "NAT GEO PORTUGAL", "MOV", "TV SÉRIES", "SIC CARAS", 
      "CANAL PANDA", "CINE MUNDO"
    ],
    ncaaf: [
      "NCAAF 01", "NCAAF 02", "NCAAF 03", "NCAAF 04", "NCAAF 05", "NCAAF 06", "NCAAF 07", "NCAAF 08"
    ],
    khamer: [
      "CTN KHMER", "CNC KHMER", "MYTV KHMER", "HANG MEAS KHMER", "BAYON TV", "APSARA TV"
    ],
    ukrain: [
      "UKRAINE 1", "UKRAINE 2", "UKRAINE 3", "UKRAINE 4", "UKRAINE 5", "UKRAINE 6"
    ],
    israel: [
      "IBA 1", "IBA 2", "KAN 11", "KESET 12", "RESHET 13", "IL 24 NEWS", "MAKO TV", "HERE 11", "KAN 33", "KAN 88"
    ],
    oriya: [
      "OTV", "ZEE SARTHAK", "COLORS ODIA", "KANAK NEWS", "NEWS7", "NAXATRA NEWS",
      "PRAMEYA NEWS7", "DD ODIA", "KALINGA TV", "MBC TV", "NANDIGHOSHA TV",
      "TARANG MUSIC", "TARANG TV", "ALANKAR TV", "ODISHA TV"
    ],
    jamaica: [
      "TVJ", "CVM TV", "LOVE TV", "HYPE TV", "FLOW 1", "READY TV", "RE TV",
      "JAMAICAN NEWS NETWORK", "FAME TV", "MELLO TV", "JUICE TV", "WEST INDIES SPORTS",
      "CARIBBEAN GOSPEL", "ISLAND VIBES", "REGGAE ENTERTAINMENT TV"
    ],
    filipino: [
      "GMA LIFE TV", "GMA PINOY TV", "GMA NEWS TV", "GMA MOVIE CENTRAL", "GMA REGIONAL TV", "GMA AFFORDABOX"
    ],
    gujrati: [
      "COLORS GUJARATI", "DD GIRNAR", "GTPL", "GS TV", "SANDESH NEWS", "TV9 GUJARATI",
      "VTV GUJARATI", "ZEE 24 KALAK", "ABP ASMITA", "CNBC GUJARATI", "GSTV NEWS",
      "MANTAVYA NEWS", "GUJARAT SAMACHAR TV", "ZEE GUJARATI", "KARTAVYA TV"
    ],
    afghan: [
      "TOLO TV", "TOLO NEWS", "LEMAR TV", "ATN NEWS", "ARIANA TV", "SHAMSHAD TV",
      "1TV", "KHURSHID TV", "RTA", "NOOR TV", "ZHWANDOON TV", "HEWAD TV",
      "AYNA TV", "AFGHAN TV", "KABUL NEWS", "ATN NATIONAL", "KAYHAN TV"
    ],
    adult: [
      "BUNGA BUNGA TV", "XTSY", "SCT HD", "ADULT BABES", "JUICY", "REAL", "HUSTLER TV",
      "RED LIGHT HD", "RED LIGHT 2", "BABESTATION XTRA"
    ],
    punjabi: [
      "PTC PUNJABI", "PTC NEWS", "PTC CHAKDE", "PTC SIMRAN", "PTC GOLD", "PTC MUSIC", "PTC DHAMAKA",
      "DD PUNJABI", "ZEE PUNJABI", "COLORS PUNJABI", "PUNJAB TODAY", "PUNJAB NEWS EXPRESS",
      "PUNJAB KESARI", "PUNJAB NEWS", "PUNJAB TV", "PUNJABI NEWS", "PUNJABI CINEMA", "PUNJABI MUSIC",
      "PUNJABI DRAMA", "PUNJABI CULTURE", "PUNJABI HERITAGE", "PUNJABI FOLK", "PUNJABI CLASSIC",
      "PUNJABI MODERN", "PUNJABI TRADITIONAL", "PUNJABI FESTIVAL", "PUNJABI SPECIAL", "PUNJABI HITS"
    ],
    islamic: [
      "PEACE TV", "PEACE TV URDU", "PEACE TV BANGLA", "AL JAZEERA", "AL JAZEERA ENGLISH", "AL JAZEERA DOC",
      "SAUDI QURAN", "SAUDI NEWS", "SAUDI 2", "AL HAYAT 1", "AL HAYAT 2", "AL MAYADEEN", "AL MAJID",
      "AL JADEED", "AL HDATH", "AL HAYAT MUSALMAN", "AL ARAQUIA", "AL RESALLA TV", "AL RAI", "AL RAHMA",
      "AL OULA", "AL NAHAR", "AL NAHAR AL YOUM", "AL NAHAR AL HAYUM", "AL NAHAR SPORT", "AL NAHAR DRAMA",
      "AL NAHAR AL HAYUM", "AL NAHAR", "AL MAYADEEN", "AL MAJID", "AL JADEED", "AL HDATH", "AL HAYAT MUSALMAN",
      "AL ARAQUIA", "AL RESALLA TV", "AL RAI", "AL RAHMA", "AL OULA", "AL NAHAR", "AL NAHAR AL YOUM",
      "AL NAHAR AL HAYUM", "AL NAHAR SPORT", "AL NAHAR DRAMA", "AL NAHAR AL HAYUM", "AL NAHAR", "AL MAYADEEN",
      "AL MAJID", "AL JADEED", "AL HDATH", "AL HAYAT MUSALMAN", "AL ARAQUIA", "AL RESALLA TV", "AL RAI",
      "AL RAHMA", "AL OULA", "AL NAHAR", "AL NAHAR AL YOUM", "AL NAHAR AL HAYUM", "AL NAHAR SPORT", "AL NAHAR DRAMA"
    ],
    nepalese: [
      "NEPAL TV", "NEPAL PLUS", "NEPAL NEWS", "NEPAL CINEMA", "NEPAL MUSIC", "NEPAL DRAMA", "NEPAL SPORTS",
      "NEPAL CULTURE", "NEPAL HERITAGE", "NEPAL FOLK", "NEPAL CLASSIC", "NEPAL MODERN", "NEPAL TRADITIONAL",
      "NEPAL FESTIVAL", "NEPAL SPECIAL", "NEPAL HITS", "NEPAL GOLD", "NEPAL SILVER", "NEPAL PLATINUM",
      "NEPAL DIAMOND", "NEPAL RUBY", "NEPAL EMERALD", "NEPAL SAPPHIRE", "NEPAL TOPAZ", "NEPAL AMETHYST",
      "NEPAL GARNET", "NEPAL OPAL", "NEPAL PEARL", "NEPAL JADE", "NEPAL TURQUOISE", "NEPAL LAPIS LAZULI"
    ],
    spanish: [
      "UNIVISION", "TELEMUNDO", "UNIMAS", "GALAVISION", "ESPN DEPORTES", "FOX DEPORTES", "BEIN SPORTS EN ESPAÑOL",
      "CNN EN ESPAÑOL", "HISTORY EN ESPAÑOL", "DISCOVERY EN ESPAÑOL", "NAT GEO EN ESPAÑOL", "ANIMAL PLANET EN ESPAÑOL",
      "TLC EN ESPAÑOL", "LIFETIME EN ESPAÑOL", "FXM", "CINEMAX EN ESPAÑOL", "HBO EN ESPAÑOL", "SHOWTIME EN ESPAÑOL",
      "STARZ EN ESPAÑOL", "CINEMAX EN ESPAÑOL", "HBO EN ESPAÑOL", "SHOWTIME EN ESPAÑOL", "STARZ EN ESPAÑOL",
      "CINEMAX EN ESPAÑOL", "HBO EN ESPAÑOL", "SHOWTIME EN ESPAÑOL", "STARZ EN ESPAÑOL", "CINEMAX EN ESPAÑOL",
      "HBO EN ESPAÑOL", "SHOWTIME EN ESPAÑOL", "STARZ EN ESPAÑOL", "CINEMAX EN ESPAÑOL", "HBO EN ESPAÑOL",
      "SHOWTIME EN ESPAÑOL", "STARZ EN ESPAÑOL", "CINEMAX EN ESPAÑOL", "HBO EN ESPAÑOL", "SHOWTIME EN ESPAÑOL",
      "STARZ EN ESPAÑOL", "CINEMAX EN ESPAÑOL", "HBO EN ESPAÑOL", "SHOWTIME EN ESPAÑOL", "STARZ EN ESPAÑOL"
    ],
    french: [
      "TV5 MONDE", "FRANCE 24", "FRANCE 2", "FRANCE 3", "FRANCE 4", "FRANCE 5", "ARTE", "CANAL+", "CANAL+ CINEMA",
      "CANAL+ SPORT", "CANAL+ SERIES", "CANAL+ FAMILY", "CANAL+ DECALE", "CANAL+ INFOSPORT", "CANAL+ SPORT 360",
      "CANAL+ FOOT", "CANAL+ RUGBY", "CANAL+ TENNIS", "CANAL+ GOLF", "CANAL+ CYCLISME", "CANAL+ FORMULE 1",
      "CANAL+ MOTO GP", "CANAL+ RALLYE", "CANAL+ SKI", "CANAL+ SURF", "CANAL+ VOILE", "CANAL+ EQUITATION",
      "CANAL+ PECHE", "CANAL+ CHASSE", "CANAL+ NATURE", "CANAL+ HISTOIRE", "CANAL+ GEOGRAPHIE", "CANAL+ SCIENCE",
      "CANAL+ CULTURE", "CANAL+ MUSIQUE", "CANAL+ CONCERT", "CANAL+ JAZZ", "CANAL+ CLASSIQUE", "CANAL+ OPERA",
      "CANAL+ BALLET", "CANAL+ THEATRE", "CANAL+ COMEDIE", "CANAL+ HUMOUR", "CANAL+ MAGAZINE", "CANAL+ DOCUMENTAIRE"
    ]
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{ title: string; channels: string[] } | null>(null);

  const handleTileClick = (category: string) => {
    const channelKey = channelMap[category as CategoryKey];
    const channelList = channels[channelKey] || [];
    setSelectedCategory({ title: category, channels: channelList });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="container mx-auto px-2 py-8 pt-24">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Channel Lineup</h1>
        <p className="text-gray-400 text-lg">Browse through our extensive collection of channels from around the world</p>
      </div>
      <div className="flex flex-wrap gap-5">
        {CATEGORY_KEYS.map((category) => (
          <ChannelTile
            key={category}
            title={category}
            channels={channels[channelMap[category]] || []}
            onClick={() => handleTileClick(category)}
          />
        ))}
      </div>
      
      <ChannelModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={selectedCategory?.title || ''}
        channels={selectedCategory?.channels || []}
      />
    </div>
  );
} 