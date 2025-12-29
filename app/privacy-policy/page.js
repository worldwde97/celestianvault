import { BRAND_NAME } from '@/config/brand';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
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
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                At {BRAND_NAME} Wallet, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our cryptocurrency wallet services.
                Please read this privacy policy carefully.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Personal Information</h3>
                  <p className="leading-relaxed">
                    We do not store your private keys, backup files, or any sensitive wallet data on our servers.
                    Your private information remains solely in your control.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Usage Data</h3>
                  <p className="leading-relaxed">
                    We may collect anonymous usage data to improve our services, including browser type,
                    device information, and interaction with our application.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To provide and maintain our cryptocurrency wallet services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To improve and optimize our application performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To communicate with you about updates and security alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To detect and prevent fraud and security issues</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement industry-standard security measures to protect your information. All wallet data
                is encrypted and stored locally on your device. We use SHA-256 encryption for all transactions
                and employ multiple security layers including 2FA authentication and multisignature support.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Your Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Access and control your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Delete your account and associated data at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Opt-out of marketing communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Request information about data we may have collected</span>
                </li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                We may use third-party services for analytics and payment processing. These services have
                their own privacy policies, and we encourage you to review them. We do not share your private
                keys or wallet credentials with any third parties.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-primary mt-4">
                privacy@{BRAND_NAME.toLowerCase()}wallet.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
