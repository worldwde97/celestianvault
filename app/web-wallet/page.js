'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND_NAME } from '@/config/brand';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useEffect, useState } from 'react';

export default function WebWallet() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('be-in-charge');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const features = [
    {
      emoji: '🌍',
      title: 'Available Everywhere',
      description: `Buy Bitcoin through web wallet all around the globe using the local currency of your bank account.`,
    },
    {
      emoji: '⚡',
      title: 'Fast Payment',
      description: 'Buy crypto with a credit/debit card, Apple Pay, Union Pay, via SEPA.',
    },
    {
      emoji: '💬',
      title: 'Excellent Customer Service',
      description: `Online crypto wallet ${BRAND_NAME} stands out for providing responsive and reliable customer service 24/7.`,
    },
    {
      emoji: '📱',
      title: 'Desktop/Mobile Versions',
      description: 'Use an online wallet, desktop wallet or download our mobile wallet app. Also, iOS and Android apps are available to manage your wallet on your phone.',
    },
  ];

  const faqs = [
    {
      question: 'What is a web wallet for bitcoin and other crypto?',
      answer: 'Web crypto wallet is an online version of your wallet which you can use right in your browser.',
    },
    {
      question: 'How do I create a crypto wallet online?',
      answer: `Open Online Crypto Wallet page on ${BRAND_NAME}; Click on "Get started"; Create a new wallet or unlock it with your password.`,
    },
    {
      question: 'What are the advantages of using the online bitcoin wallet for bitcoin and other crypto?',
      answer: 'You can easily access all assets right in your browser. It is convenient to use the online wallet at any time.',
    },
    {
      question: 'Are crypto web wallets safe?',
      answer: 'Web wallets are all typically hot wallets. Web wallets are the least safe, though all crypto hot wallets are quite vulnerable to online attacks. A benefit to hot wallets is ease-of-use.',
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
                Web Crypto <span className="gradient-text">Wallet</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Secure and convenient online crypto wallet for Bitcoin and other assets available anywhere at anytime.
                Store and exchange cryptocurrencies, tokens, and stablecoins with complete peace of mind.
              </p>
              <Link href="/register" className="btn-primary">
                Create Web Wallet
              </Link>
            </div>
            <div>
              <Image
                src="/images/overview.png"
                alt="Web Wallet Overview Interface"
                width={708}
                height={399}
                className="w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Online Crypto Wallet */}
      <section
        className="section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-imageees.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What is <span className="gradient-text">Online Crypto Wallet</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
            <p className="text-lg">
              An online wallet is a digital wallet that you can access via the internet, typically through your browser.
              It is commonly known as a web wallet. Hot wallets are also available, but they are different types.
              A web wallet is not always a hot wallet, but every hot wallet is a web wallet. Storing your Bitcoin
              in an online wallet is almost as secure as storing it in a cold wallet.
            </p>
            <p className="text-lg">
              Web wallets take various forms, but the main component is a clean, intuitive interface.
              Beyond that, you can exchange your currencies safely and quickly with minimal friction.
            </p>
          </div>
        </div>
      </section>

      {/* Get Celestian Section */}
      <section className="section-padding bg-dark-card relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              All-in-One <span className="gradient-text">Crypto Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of 10+ cryptocurrencies in a single, secure platform.
              Buy, store, exchange, and manage your digital assets with ease.
            </p>
          </div>

          {/* Main Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            {/* Buy Crypto - Featured */}
            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 border-2 border-primary/50 rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">💳</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Buy Cryptocurrency
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Purchase crypto instantly with Visa, Mastercard, or SEPA transfer. Fast, secure, and simple.
                  </p>
                  <Link href="/register" className="btn-primary inline-block">
                    Start Buying
                  </Link>
                </div>
              </div>
            </div>

            {/* Exchange - Featured */}
            <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 border-2 border-primary/50 rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-blue rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🔄</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Limitless Exchange
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Swap cryptocurrencies instantly without limits, registration, or verification. Lightning fast.
                  </p>
                  <Link href="/exchange" className="btn-primary inline-block">
                    Exchange Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Multi-Asset Support */}
            <div className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-primary transition-all duration-300 group text-center">
              <div className="w-14 h-14 bg-gradient-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💎</span>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <h4 className="text-lg font-semibold mb-2">Crypto Assets</h4>
              <div className="flex gap-2 justify-center text-2xl mb-3">
                <span>₿</span>
                <span>Ξ</span>
                <span>💰</span>
              </div>
              <p className="text-gray-400 text-sm">All major cryptocurrencies in one place</p>
            </div>

            {/* Secure Wallet */}
            <div className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-primary transition-all duration-300 group text-center">
              <div className="w-14 h-14 bg-gradient-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <div className="text-2xl font-bold gradient-text mb-2">SHA-256</div>
              <h4 className="text-lg font-semibold mb-3">Bank-Grade Security</h4>
              <p className="text-gray-400 text-sm">Military-grade encryption protecting your assets 24/7</p>
            </div>

            {/* Send */}
            <div className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-primary transition-all duration-300 group text-center">
              <div className="w-14 h-14 bg-gradient-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📤</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Send Anywhere</h4>
              <p className="text-gray-400 text-sm mb-4">Transfer crypto globally in seconds with any wallet address</p>
              <Link href="/register" className="text-primary hover:underline text-sm font-semibold">
                Send Now →
              </Link>
            </div>

            {/* Spend */}
            <div className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-primary transition-all duration-300 group text-center">
              <div className="w-14 h-14 bg-gradient-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Visa Card</h4>
              <p className="text-gray-400 text-sm mb-4">Spend crypto anywhere with your {BRAND_NAME} prepaid card</p>
              <Link href="/register" className="text-primary hover:underline text-sm font-semibold">
                Get Card →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/68a28f075452a7c98c9d0460_valos-web-bg-01.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.emoji}</div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Security */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/unlock.png"
                alt="Secure Wallet Unlock Interface"
                width={600}
                height={450}
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Top Security Wallet For Your <span className="gradient-text">Crypto Assets</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {BRAND_NAME} Wallet is a non-custodial wallet, so we don't store private data, backup files, or keys.
                Only users have access to their personal data. No transactions can be tracked by third parties.
                Fingerprint authentication and PIN protection are some of the available security features.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Multisigs feature is available (BTC, ETH)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">2FA authentication & Face ID</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Back up files only you have access to</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Total privacy and security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be In Charge */}
      <section
        id="be-in-charge"
        className="section-padding bg-dark-bg overflow-hidden relative"
      >
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              {['₿', 'Ξ', '💎', '🪙', '⚡', '🔒'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        <div className="container-custom text-center relative z-10">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Be In Charge of Your <span className="gradient-text">Crypto</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {BRAND_NAME} is an ultimate solution for modern crypto management. You can do it all from the comfort
            of one single app. Earn with staking, Purchase, Instantly Exchange at best rates, get crypto loans,
            add extra security layer with Multisignature, and the list goes on.
          </p>
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Link href="/register" className="btn-primary transform hover:scale-105 transition-transform">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-dark-card">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">FAQ</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h4 className="text-xl font-semibold mb-3">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Crypto-Risk-Management-BG-2.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Using Your Web Wallet Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Access your crypto anywhere, anytime with {BRAND_NAME} Wallet
          </p>
          <Link href="/register" className="btn-primary">
            Create Your Wallet
          </Link>
        </div>
      </section>
    </div>
  );
}
