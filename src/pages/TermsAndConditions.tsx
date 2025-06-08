import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <SEOHead 
        title="Terms and Conditions - Star4KTV | IPTV Streaming Service Agreement"
        description="Read Star4KTV's terms and conditions for our premium IPTV streaming service. Understand your rights and responsibilities as a subscriber."
        keywords="terms and conditions, terms of service, Star4KTV terms, IPTV terms, streaming service agreement, user agreement"
        url="https://star4ktv.com/terms-and-conditions"
      />
      <Header />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-[#E50914] hover:text-white mb-8 transition-colors">
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#E50914] mb-8">Terms and Conditions</h1>
          
          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              <strong>Effective Date:</strong> December 1, 2024
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Star4KTV's IPTV streaming service ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Service Description</h2>
              <p>
                Star4KTV provides an Internet Protocol Television (IPTV) streaming service that delivers live television channels, video-on-demand content, and related features over the internet. Our service includes access to over 7000+ channels from various countries and languages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Subscription and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">3.1 Subscription Plans</h3>
                  <p>We offer various subscription plans with different durations and device limits. Current plans include:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Silver: $20/month (1 device)</li>
                    <li>Gold: $220/year (1 device)</li>
                    <li>Platinum: $340/2 years (2 devices)</li>
                    <li>Diamond: $500/5 years (3 devices)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">3.2 Payment Terms</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Payment is due in advance for the selected subscription period</li>
                    <li>All fees are non-refundable except as provided in our money-back guarantee</li>
                    <li>Prices are subject to change with 30 days advance notice</li>
                    <li>Failure to pay may result in immediate service suspension</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Account Registration and Security</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>You must provide accurate and complete registration information</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>One account per customer; sharing accounts is strictly prohibited</li>
                <li>You must be 18 years or older to create an account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">5.1 Permitted Use</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Personal, non-commercial use only</li>
                    <li>Use limited to the number of devices specified in your plan</li>
                    <li>Viewing content within your subscribed package</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">5.2 Prohibited Activities</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Reselling, redistributing, or sharing your account access</li>
                    <li>Using the service for commercial purposes</li>
                    <li>Attempting to hack, reverse engineer, or bypass security measures</li>
                    <li>Recording, downloading, or reproducing content</li>
                    <li>Using VPNs or proxy services to circumvent geographic restrictions</li>
                    <li>Violating any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Device and Technical Requirements</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Compatible devices include smart TVs, smartphones, tablets, computers, and streaming devices</li>
                <li>Stable internet connection with minimum 5 Mbps for HD streaming</li>
                <li>Updated software and supported operating systems</li>
                <li>Device limits apply according to your subscription plan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Content and Availability</h2>
              <p>
                Content availability may vary by region and is subject to licensing agreements. We reserve the right to add, remove, or modify content at any time without notice. Channel lineups and programming schedules may change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Service Availability and Support</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>We strive for 99.9% uptime but cannot guarantee uninterrupted service</li>
                <li>Scheduled maintenance may temporarily affect service availability</li>
                <li>Customer support is available via email and phone during business hours</li>
                <li>Technical issues should be reported through official support channels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Cancellation and Refunds</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">9.1 Money-Back Guarantee</h3>
                  <p>We offer a 7-day money-back guarantee for new subscribers. Refund requests must be made within 7 days of initial purchase.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">9.2 Cancellation</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>You may cancel your subscription at any time</li>
                    <li>Service continues until the end of your current billing period</li>
                    <li>No refunds for partial periods after the initial guarantee period</li>
                    <li>Account access terminates upon expiration</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Intellectual Property</h2>
              <p>
                All content, trademarks, service marks, and logos are the property of their respective owners. You may not copy, distribute, or create derivative works from any content available through our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Disclaimers and Limitation of Liability</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">11.1 Service Disclaimer</h3>
                  <p>
                    The service is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any content or service functionality.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">11.2 Limitation of Liability</h3>
                  <p>
                    Star4KTV shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability is limited to the amount paid for the current subscription period.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account immediately for violation of these terms, non-payment, or any activity that may harm our service or other users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Texas, United States. Any disputes shall be resolved in the courts of San Antonio, Texas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Changes to Terms</h2>
              <p>
                We may modify these terms at any time. Significant changes will be communicated via email or service notifications. Continued use of the service constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
              <p>For questions regarding these terms and conditions, please contact us:</p>
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <p><strong>Star4KTV</strong></p>
                <p>702 San Pedro Ave</p>
                <p>San Antonio, TX 78212</p>
                <p>Email: <a href="mailto:legal@star4ktv.com" className="text-[#E50914] hover:underline">legal@star4ktv.com</a></p>
                <p>Support: <a href="mailto:support@star4ktv.com" className="text-[#E50914] hover:underline">support@star4ktv.com</a></p>
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