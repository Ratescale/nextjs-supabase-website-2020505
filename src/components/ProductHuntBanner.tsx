import React from 'react';

interface BannerCardProps {
  logo?: React.ReactNode;
  textLines: string[];
  subText?: string;
  arrow?: boolean;
  bgColor?: string;
  textColor?: string;
  link?: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ logo, textLines, subText, arrow, bgColor = 'bg-gray-800', textColor = 'text-white', link }) => {
  const content = (
    <div className={`flex items-center p-3 rounded-lg shadow-md ${bgColor} ${textColor} h-full`}>
      {logo && <div className="mr-3 flex-shrink-0">{logo}</div>}
      <div className="flex-grow">
        {textLines.map((line, index) => (
          <p key={index} className={`text-sm font-semibold ${index > 0 ? 'mt-0.5' : ''}`}>{line}</p>
        ))}
      </div>
      {subText && <div className="text-xs text-gray-400 ml-2 flex items-center">{subText}{arrow && <span className="ml-1">▲</span>}</div>}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
};

const ProductHuntLogo = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#DA552F"/>
    <path d="M12.6875 19.25H9.9375V8.75H12.6875C14.7375 8.75 15.75 9.625 15.75 11.375V12.125C15.75 13.1125 15.3125 13.8875 14.4375 14.2125L16.1875 16.625V16.8875L13.8125 19.25H12.6875ZM12.6875 12.75H12.1875V10.25H12.6875C13.4375 10.25 13.8125 10.625 13.8125 11.375V11.625C13.8125 12.375 13.4375 12.75 12.6875 12.75Z" fill="white"/>
  </svg>
);

const ProductHuntBanner = () => {
  return (
    <section className="py-8 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="md:w-auto">
            <BannerCard 
              logo={<ProductHuntLogo />}
              textLines={["FEATURED ON", "Product Hunt"]}
              subText="656"
              arrow
              bgColor="#2D2D2F" // Darker gray from screenshot
              link="https://www.producthunt.com"
            />
          </div>
          <div className="md:w-auto">
            <BannerCard 
              logo={<ProductHuntLogo />}
              textLines={["#1 PRODUCT OF THE MONTH", "Fintech"]}
              bgColor="#2D2D2F" // Darker gray from screenshot
              link="https://www.producthunt.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHuntBanner;
