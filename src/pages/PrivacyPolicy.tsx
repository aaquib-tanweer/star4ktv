import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <SEOHead 
        title="Privacy Policy - Star4KTV | IPTV Streaming Service Data Protection"
        description="Read Star4KTV's privacy policy to understand how we collect, use, and protect your personal information. Learn about our data practices and your privacy rights."
        keywords="privacy policy, data protection, Star4KTV privacy, IPTV privacy policy, data security, user privacy"
        url="https://star4ktv.com/privacy-policy"
      />
      <Header />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-[#E50914] hover:text-white mb-8 transition-colors">
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#E50914] mb-8">Privacy Policy</h1>
          
          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              <strong>Effective Date:</strong> December 1, 2024
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                Star4KTV ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our IPTV streaming service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Personal Information</h3>
                  <p>We may collect the following personal information:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Billing address and payment information</li>
                    <li>Account credentials (username and password)</li>
                    <li>Device information and IP address</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Usage Information</h3>
                  <p>We automatically collect information about your use of our service:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Viewing history and preferences</li>
                    <li>Device performance data</li>
                    <li>Connection quality and streaming analytics</li>
                    <li>Time spent on different channels and content</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Provide and maintain our IPTV streaming service</li>
                <li>Process payments and manage your account</li>
                <li>Improve our service quality and user experience</li>
                <li>Send important service notifications and updates</li>
                <li>Provide customer support and technical assistance</li>
                <li>Analyze usage patterns to enhance content offerings</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>With service providers who assist in operating our platform</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In case of business merger, acquisition, or asset sale</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Account information is typically retained for the duration of your subscription and up to 7 years thereafter for tax and legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Access and obtain a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
                <li>Object to certain processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us remember your preferences, analyze site traffic, and provide personalized content recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Effective Date" at the top. You are advised to review this privacy policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Information</h2>
              <p>If you have any questions or concerns about this privacy policy or our data practices, please contact us:</p>
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <p><strong>Star4KTV</strong></p>
                <p>702 San Pedro Ave</p>
                <p>San Antonio, TX 78212</p>
                <p>Email: <a href="mailto:privacy@star4ktv.com" className="text-[#E50914] hover:underline">privacy@star4ktv.com</a></p>
                <p>Phone: <a href="tel:+12105551234" className="text-[#E50914] hover:underline">+1 (210) 555-1234</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 