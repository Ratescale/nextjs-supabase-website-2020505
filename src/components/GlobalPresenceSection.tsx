import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4">
    <div className="flex-shrink-0 text-green-400">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
    <p className="text-4xl font-bold text-green-400 mb-1">{value}</p>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);

const FlagGrid = () => {
  const flags = [
    { name: 'USA', code: 'US', emoji: '🇺🇸' },
    { name: 'Brazil', code: 'BR', emoji: '🇧🇷' },
    { name: 'Canada', code: 'CA', emoji: '🇨🇦' },
    { name: 'Germany', code: 'DE', emoji: '🇩🇪' },
    { name: 'India', code: 'IN', emoji: '🇮🇳' },
    { name: 'UK', code: 'GB', emoji: '🇬🇧' },
    { name: 'China', code: 'CN', emoji: '🇨🇳' },
    { name: 'Japan', code: 'JP', emoji: '🇯🇵' },
    { name: 'South Korea', code: 'KR', emoji: '🇰🇷' },
    { name: 'Singapore', code: 'SG', emoji: '🇸🇬' },
    { name: 'Australia', code: 'AU', emoji: '🇦🇺' },
    { name: 'South Africa', code: 'ZA', emoji: '🇿🇦' },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 justify-center">
      {flags.map((flag) => (
        <div key={flag.code} className="bg-gray-800 p-3 rounded-md flex items-center justify-center aspect-video shadow-md hover:scale-105 transition-transform">
          <span className="text-4xl md:text-5xl" role="img" aria-label={flag.name}>{flag.emoji}</span>
        </div>
      ))}
    </div>
  );
};

const GlobalPresenceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-850 text-white" style={{backgroundColor: '#1C1C1E'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Global Presence, Local Excellence
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Empowering teams across the globe to scale without boundaries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6"/><path d="M22 11.5A10 10 0 0 0 3.5 12.5"/><path d="M2 12.5a10 10 0 0 0 18.5-1"/></svg>}
            title="Borderless Operations"
            description="Scale your business globally with seamless integration and automated compliance for every market."
          />
          <StatCard value="100+" label="Countries Supported" />
          <StatCard value="24/7" label="Global Support" />
        </div>
        
        <FlagGrid />

      </div>
    </section>
  );
};

export default GlobalPresenceSection;