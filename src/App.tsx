import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChannelsPage } from './pages/ChannelsPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { ReferralPolicy } from './pages/ReferralPolicy';
import { useEffect } from 'react';

function ScrollToSection() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const scrollToElement = () => {
        if (sectionId === 'contact') {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        } else {
          const section = document.getElementById(sectionId);
          if (section) {
            const headerOffset = 100;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      };

      // Initial scroll attempt
      scrollToElement();

      // Retry after a short delay to ensure DOM is ready
      const timeoutId = setTimeout(scrollToElement, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [location.hash]);

  return null;
}

export function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen bg-[#121212] text-white">
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/channels" element={<ChannelsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/referral-policy" element={<ReferralPolicy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}