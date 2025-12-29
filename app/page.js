'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND_NAME } from '@/config/brand';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-card overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Secure Multi Crypto <span className="gradient-text">Wallet</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Safely store and swap your cryptocurrency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/register" className="btn-primary transform hover:scale-105 transition-transform">
                  Create Wallet
                </Link>
                <Link href="/login" className="btn-secondary transform hover:scale-105 transition-transform">
                  Sign In
                </Link>
              </div>
              <div className="flex gap-8 items-center">
                <Image
                  src="/images/apple.png"
                  alt="Apple iOS"
                  width={80}
                  height={80}
                  className="transform hover:scale-110 transition-transform cursor-pointer"
                />
                <Image
                  src="/images/android.png"
                  alt="Android"
                  width={80}
                  height={80}
                  className="transform hover:scale-110 transition-transform cursor-pointer"
                />
                <Image
                  src="/images/windows.svg"
                  alt="Windows"
                  width={80}
                  height={80}
                  className="transform hover:scale-110 transition-transform cursor-pointer"
                />
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <Image
                src="/images/hero-main.png"
                alt="Secure Multi Crypto Wallet Interface"
                width={800}
                height={600}
                className="w-full rounded-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pay With Crypto Section */}
      <section
        className="section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/visa-card.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pay With Your Crypto <span className="gradient-text">Anywhere</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Top up your balance with your cryptocurrency and use your wallet for secure storage and seamless payments worldwide.
          </p>
          <Link href="/register" className="btn-primary inline-block">
            Get your Visa Card
          </Link>
        </div>
      </section>

      {/* Store & Exchange Crypto */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Store Crypto Card */}
            <div className="card hover:border-primary transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-blue rounded-lg flex items-center justify-center">
                  <span className="text-4xl">💰</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Store Crypto</h3>
              <p className="text-gray-300 mb-6">
                Securely store Bitcoin, Ethereum and over 30 other popular cryptocurrencies in one convenient wallet.
              </p>
              <Link href="/register" className="btn-secondary">
                Get Started
              </Link>
            </div>

            {/* Exchange Crypto Card */}
            <div className="card hover:border-primary transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-blue rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🔄</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Exchange Crypto</h3>
              <p className="text-gray-300 mb-6">
                Instant cryptocurrency exchange for over 10 coins directly within your secure web wallet interface.
              </p>
              <Link href="/exchange" className="btn-secondary">
                Exchange Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Assets Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/wallet-dashboard.png"
                alt="Multi Crypto Wallet Dashboard Interface"
                width={577}
                height={433}
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                All Assets In One <span className="gradient-text">Multi Crypto Wallet</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Use a convenient and secure crypto wallet to efficiently manage and swap your digital assets with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Way Section */}
      <section
        className="section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/staking_hero_poster.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Smart Way To <span className="gradient-text">Manage Your Crypto</span>
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-12">
            {BRAND_NAME} Wallet is the ultimate solution for modern cryptocurrency management.
            Experience seamless control from a single web app. Replenish your balance, instantly
            exchange at the best rates, create multiple wallet addresses, add extra security with
            Multisignature protection, and much more.
          </p>
          <div className="text-center">
            <Image
              src="/images/trade_supply.png"
              alt="Crypto Trading and Supply Management Features"
              width={708}
              height={531}
              className="mx-auto rounded-2xl mb-8"
            />
            <Link href="/register" className="btn-primary">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Storage</h3>
              <p className="text-gray-400">
                Bank-level security with multi-layer encryption to protect your assets
              </p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Exchange</h3>
              <p className="text-gray-400">
                Exchange cryptocurrencies instantly at competitive market rates
              </p>
            </div>
            <div className="card text-center">
              <div className="w-12 h-12 bg-gradient-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Access</h3>
              <p className="text-gray-400">
                Access your wallet anywhere, anytime from any device
              </p>
            </div>
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
            Ready to Start Your Crypto Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users managing their crypto assets securely
          </p>
          <Link href="/register" className="btn-primary">
            Create Your Wallet Now
          </Link>
        </div>
      </section>
    </div>
  );
}
