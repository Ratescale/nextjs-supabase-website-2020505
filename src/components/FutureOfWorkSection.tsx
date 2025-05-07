'use client';

import React from 'react';

const CodeSnippet = () => (
  <div className="bg-gray-950 p-4 rounded-lg shadow-lg overflow-x-auto text-sm font-mono">
    <pre className="text-gray-300">
      <code className="language-javascript">
        <span className="text-purple-400">import</span> {'{'} <span className="text-yellow-400">Creem</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'creem'</span>;
        <span className="text-blue-400">const</span> creem = <span className="text-blue-400">new</span> <span className="text-yellow-400">Creem</span>(<span className="text-green-400">'cre_123456789'</span>);

        <span className="text-blue-400">async</span> <span className="text-purple-400">function</span>() {'{'}
          <span className="text-blue-400">const</span> paymentLink = <span className="text-blue-400">await</span> creem.paymentLinks.<span className="text-yellow-400">create</span>({'{'}
            line_items: [
              {'{'}
                price_data: {'{'}
                  currency: <span className="text-green-400">'usd'</span>,
                  product_data: {'{'}
                    name: <span className="text-green-400">'Awesome Product'</span>
                  {'}'},
                  unit_amount: <span className="text-red-400">2000</span>
                {'}'},
                quantity: <span className="text-red-400">1</span>
              {'}'}
            ],
            after_completion: {'{'}
              type: <span className="text-green-400">'redirect'</span>,
              redirect: {'{'}
                url: <span className="text-green-400">'https://example.com/success'</span>
              {'}'}
            {'}'}
          {'}'});

          <span className="text-purple-400">if</span> (error) {'{'}
            <span className="text-purple-400">return</span> console.<span className="text-yellow-400">log</span>(error);
          {'}'}

          router.<span className="text-yellow-400">push</span>(data.url)
        {'}'})();
      </code>
    </pre>
  </div>
);

interface FeatureButtonProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({ icon, text }) => (
  <button className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center space-x-2 transition-colors">
    {icon}
    <span>{text}</span>
  </button>
);

const FutureOfWorkSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The future of work needs new financial tools
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Small teams are achieving what used to require 150+ people. We're building the financial infrastructure to power this revolution.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <FeatureButton 
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>}
                text="Global Sales Tax"
              />
              <FeatureButton 
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
                text="Merchant of Record"
              />
              <FeatureButton 
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
                text="Fraud Protection"
              />
               <FeatureButton 
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>}
                text="Video Tutorials"
              />
            </div>
          </div>

          {/* Right Content - Code Snippet */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-green-500 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <CodeSnippet />
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(0.5deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear alternate;
        }
      `}</style>
    </section>
  );
};

export default FutureOfWorkSection;
