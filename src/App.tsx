import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ChannelsPage } from './pages/ChannelsPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { ReferralPolicy } from './pages/ReferralPolicy';

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