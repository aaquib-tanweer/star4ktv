import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ChannelsPage } from './pages/ChannelsPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { ReferralPolicy } from './pages/ReferralPolicy';

function ScrollToSection() {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we have a scrollTo state
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      
      // Wait for the page to be fully loaded
      const scrollToSection = () => {
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
      };

      // Try to scroll immediately
      scrollToSection();
      
      // Also try after a short delay to ensure the page is fully rendered
      const timeoutId = setTimeout(scrollToSection, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  return null;
}

export function App() {
  useEffect(() => {
    // Handle page refresh - redirect to homepage top
    const handleBeforeUnload = () => {
      sessionStorage.setItem('pageRefreshed', 'true');
    };

    // Check if page was refreshed
    if (sessionStorage.getItem('pageRefreshed')) {
      sessionStorage.removeItem('pageRefreshed');
      window.location.href = '/';
    }

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#121212] text-white">
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/channels" element={<ChannelsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/referral-policy" element={<ReferralPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}