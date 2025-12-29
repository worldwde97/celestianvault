import Link from 'next/link';
import Image from 'next/image';
import { BRAND_NAME } from '@/config/brand';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function About() {
  const stats = [
    { number: '10+', label: 'Assets Supported' },
    { number: '4+', label: 'Products & Services' },
    { number: '24/7', label: 'Live Support' },
  ];

  const milestones = [
    {
      number: '01',
      emoji: '💼',
      title: 'Started with single currency wallets',
      description: 'Launched our first cryptocurrency wallet supporting individual coins',
    },
    {
      number: '02',
      emoji: '🛡️',
      title: 'Added the additional secure layers',
      description: 'Implemented advanced security features and multi-factor authentication',
    },
    {
      number: '03',
      emoji: '🌐',
      title: 'Web super secure version',
      description: 'Released our highly secure web-based wallet platform',
    },
    {
      number: '04',
      emoji: '🔧',
      title: 'Token Generator, Bitcoin Multisigs support',
      description: 'Added support for token generation and Bitcoin multisignature wallets',
    },
    {
      number: '05',
      emoji: '🚀',
      title: 'Multi currency, crossplatform',
      description: 'Expanded to support multiple currencies across all major platforms',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">{BRAND_NAME} Wallet</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {BRAND_NAME} Wallet is a web wallet that supports the most popular coins and many others,
            providing you with complete control over your digital assets.
          </p>

          <div className="mb-12">
            <Image
              src="/images/explore_validators_cta.png"
              alt="Explore Validators"
              width={800}
              height={400}
              className="mx-auto rounded-2xl"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl font-bold gradient-text mb-3">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/boost_rewards.png"
                alt="Celestian Wallet Mission"
                width={600}
                height={400}
                className="mx-auto rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">{BRAND_NAME} Wallet</span> Mission
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  {BRAND_NAME} Wallet developers created digital wallets that provide complete security.
                  Everyone can use our software for easy storing and managing cryptocurrencies. We respect,
                  appreciate, and sincerely love blockchain technology. Our priority is the decentralization
                  of the {BRAND_NAME} Wallet software in accordance with the basic principles of blockchain.
                </p>
                <p className="text-lg">
                  User privacy and safety are the main postulates for us, that is why we do not store your
                  private keys, backup files, or any other data on {BRAND_NAME} Wallet servers. All your
                  private data is stored only by you. Our wallet is lightweight, has a convenient and
                  intuitive interface.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12 card text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-300">
              Freedom of privacy and top level security
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-dark-card relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16">
            {BRAND_NAME} Wallet has started with single currency mono wallets, and now our products are
            available from any browser, any operating system of your PC (Windows, macOS, Linux/Ubuntu),
            and smartphone (iOS and Android web).
          </p>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Connecting line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-transparent hidden md:block"></div>
                )}

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number circle */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg shadow-primary/50 relative z-10">
                      <span className="text-2xl font-bold">{milestone.number}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-dark-bg border border-dark-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-blue rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">{milestone.emoji}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-gray-400">
                Your data belongs to you. We never store your private keys or personal information.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-400">
                Constantly evolving to bring you the latest features and security improvements.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-400">
                Building a global community of users who believe in decentralization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/poster_planet.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the {BRAND_NAME} Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the future of decentralized finance
          </p>
          <Link href="/register" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
