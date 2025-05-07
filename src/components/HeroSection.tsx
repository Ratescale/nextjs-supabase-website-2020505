'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white pt-32 pb-16 relative min-h-screen flex flex-col justify-center items-center text-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-75"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="w-80 h-80 bg-green-500 rounded-full opacity-15 blur-3xl animation-delay-2000 animate-pulse-slow-reverse ml-40"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-8">
          <Link href="#pricing-competitive" className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-300 shadow-lg">
            Save up to 50% on fees with our competitive pricing 🎉 &rarr;
          </Link>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Financial OS for<br />AI Generators
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Empowering small teams to achieve big business outcomes. A complete financial infrastructure for the next generation of efficient companies.
        </p>
        <p className="text-md text-gray-400 mb-10 font-semibold">
          Built for the future of work.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#get-started"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md flex items-center"
          >
            Get started for free <span className="ml-2">🍦</span>
          </Link>
          <Link
            href="#contact-us"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md flex items-center"
          >
            Contact us
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(0.95); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        @keyframes pulse-slow-reverse {
          0%, 100% { opacity: 0.2; transform: scale(1.05); }
          50% { opacity: 0.1; transform: scale(0.95); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 7s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;