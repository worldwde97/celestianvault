import Link from 'next/link';
import Image from 'next/image';
import { BRAND_NAME } from '@/config/brand';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function Exchange() {
  const advantages = [
    {
      icon: '∞',
      title: 'No Limits',
      description: 'We do not set any limits, you can make as many exchanges as you need without restrictions.',
    },
    {
      icon: '🔒',
      title: 'Private',
      description: 'You do not have to go through an authorization procedure, so all your exchanges will be completely private.',
    },
    {
      icon: '⚡',
      title: 'Fast',
      description: `The exchanges that take place at ${BRAND_NAME} are made in a matter of minutes, allowing you to save valuable time.`,
    },
    {
      icon: '⚖️',
      title: 'Fair',
      description: 'Our exchange rates are carefully selected so that our customers are satisfied and know that our offers are among the best on the market.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fast Crypto <span className="gradient-text">Exchange</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {BRAND_NAME} platform is the fastest way to exchange any crypto-assets without registrations,
                KYC and long waits. It is one of the best crypto to crypto exchanges that established trust for
                a long time in the market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="btn-primary">
                  Start Exchanging
                </Link>
                <Link href="/web-wallet" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/bridging.png"
                alt="Crypto Exchange Bridging Interface"
                width={709}
                height={531}
                className="w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Advantages of Using <span className="gradient-text">Crypto Coins Exchange</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="card text-center hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{advantage.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted and Secure Section */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/combining_dag.png"
                alt="Secure Crypto Exchange DAG Technology"
                width={709}
                height={531}
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted and Secure <span className="gradient-text">Bitcoin & Crypto Exchange</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {BRAND_NAME} platform is the fastest way to exchange any crypto-assets without registrations,
                KYC and long waits. It is one of the best crypto to crypto exchanges that established trust for
                a long time in the market.
              </p>
              <Link href="/register" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* If You're New Section */}
      <section
        className="section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/poster_planet.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            If You're New to <span className="gradient-text">{BRAND_NAME} Crypto Exchange</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8 bg-dark-card/90 backdrop-blur-sm">
              <p className="text-xl text-gray-300 mb-6">
                Our task is to conduct safe and quality exchanges because we focus on our customers and strictly
                control the processes of our clients' time. {BRAND_NAME} cryptocurrency exchange online
                doesn't just work to provide services, but our team is constantly working to simplify and speed
                up the adoption of crypto assets in everyday life.
              </p>
              <p className="text-xl text-gray-300">
                Therefore, we understand to what extent it is important to create an ecosystem in which it will
                be convenient to conduct transactions and give clients the best exchange rates.
              </p>
            </div>
            <div className="text-center">
              <Link href="/register" className="btn-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Exchange</h3>
              <p className="text-gray-400">
                Exchange your crypto assets in seconds with the best market rates
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Best Rates</h3>
              <p className="text-gray-400">
                Get the most competitive exchange rates in the market
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🕶️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">No KYC Required</h3>
              <p className="text-gray-400">
                Start exchanging immediately without lengthy verification processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Select Currencies</h3>
              <p className="text-gray-400">
                Choose the cryptocurrency you want to exchange and the one you want to receive
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Enter Amount</h3>
              <p className="text-gray-400">
                Input the amount you want to exchange and review the exchange rate
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Exchange</h3>
              <p className="text-gray-400">
                Confirm the transaction and receive your crypto in minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/The Key Components of a Reliable Crypto Infrastructure.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Exchange Your Crypto?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start exchanging cryptocurrency with the best rates and no limits
          </p>
          <Link href="/register" className="btn-primary">
            Start Exchanging Now
          </Link>
        </div>
      </section>
    </div>
  );
}
