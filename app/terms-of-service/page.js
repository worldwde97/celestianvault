import { BRAND_NAME } from '@/config/brand';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: December 25, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using {BRAND_NAME} Wallet, you accept and agree to be bound by the terms
                and provisions of this agreement. If you do not agree to these Terms of Service, please
                do not use our services.
              </p>
            </div>

            {/* Use of Service */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Use of Service</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  {BRAND_NAME} Wallet provides a non-custodial cryptocurrency wallet service. You acknowledge
                  and agree that:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>You are solely responsible for maintaining the security of your private keys and passwords</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>We do not have access to your private keys or backup files</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>You are responsible for any activity that occurs under your wallet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Lost or forgotten passwords cannot be recovered by us</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Use the service in compliance with all applicable laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Not use the service for any illegal or unauthorized purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Not attempt to gain unauthorized access to any part of the service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Maintain the security and confidentiality of your wallet credentials</span>
                </li>
              </ul>
            </div>

            {/* Risks */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Risks and Disclaimers</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Cryptocurrency transactions involve significant risks. You acknowledge and agree that:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cryptocurrency values are highly volatile and can result in significant losses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Transactions are irreversible once confirmed on the blockchain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>We are not responsible for market fluctuations or investment losses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>You should only invest what you can afford to lose</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                {BRAND_NAME} Wallet shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, or
                other intangible losses, resulting from your access to or use of or inability to access or
                use the service.
              </p>
            </div>

            {/* Service Availability */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Service Availability</h2>
              <p className="text-gray-300 leading-relaxed">
                We strive to maintain the availability of our services 24/7, but we do not guarantee
                uninterrupted access. We reserve the right to modify, suspend, or discontinue the service
                at any time without notice.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                The service and its original content, features, and functionality are owned by {BRAND_NAME}
                Wallet and are protected by international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
            </div>

            {/* Termination */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access to the service immediately, without prior notice or
                liability, for any reason whatsoever, including without limitation if you breach the Terms.
                You may terminate your use of the service at any time.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material,
                we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes
                a material change will be determined at our sole discretion.
              </p>
            </div>

            {/* Governing Law */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed and construed in accordance with applicable international laws,
                without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-primary mt-4">
                legal@{BRAND_NAME.toLowerCase()}wallet.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
