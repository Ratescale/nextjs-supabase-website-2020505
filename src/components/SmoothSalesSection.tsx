"use client";
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  itemNumber: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle, itemNumber }) => {
  return (
    <div className={`border-b border-gray-700 last:border-b-0 ${isOpen ? 'bg-green-600 text-white' : 'hover:bg-gray-750' } transition-all duration-300 ease-in-out`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left p-4 md:p-5 focus:outline-none"
      >
        <span className={`text-sm font-semibold ${isOpen ? 'text-white' : 'text-gray-200'}`}> <span className="mr-2 text-gray-400">{itemNumber}</span>{title}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 md:p-5 pt-0">
          <p className="text-sm text-gray-100">{content}</p>
        </div>
      )}
    </div>
  );
};

const SmoothSalesSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>("01");

  const accordionItems = [
    {
      id: "01",
      title: "Global tax compliance",
      content: "We're your merchant of record. That means we handle payments, merchant fees, fraud and sales tax without you lifting a finger. Our system automatically calculates and remits sales tax, VAT, and GST in over 100 countries, ensuring you stay compliant globally."
    },
    {
      id: "02",
      title: "Borderless SaaS payments",
      content: "Accept payments from customers worldwide with support for multiple currencies and local payment methods. Our platform handles currency conversion seamlessly, providing a localized experience for your users."
    },
    {
      id: "03",
      title: "Instant payment methods",
      content: "Offer your customers a variety of instant payment options, including credit/debit cards, digital wallets (like Apple Pay and Google Pay), and popular regional payment gateways to maximize conversion rates."
    },
    {
      id: "04",
      title: "Automated invoicing",
      content: "Generate and send professional, tax-compliant invoices automatically. Customize invoice templates to match your brand and provide customers with clear, detailed billing information."
    },
    {
      id: "05",
      title: "Subscription management",
      content: "Easily manage recurring billing, subscription plans, trials, and upgrades/downgrades. Our flexible subscription engine handles complex billing scenarios with ease."
    },
    {
      id: "06",
      title: "Revenue recovery tools",
      content: "Minimize churn with automated dunning management, smart retries for failed payments, and card updater services. Recover potentially lost revenue and keep your customers engaged."
    }
  ];

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Smooth International Sales
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Everything you need to handle payments for your SaaS business, globally and effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left - Accordion */}
          <div className="bg-gray-850 rounded-lg shadow-xl overflow-hidden" style={{backgroundColor: '#1C1C1E'}}>
            {accordionItems.map((item) => (
              <AccordionItem 
                key={item.id}
                itemNumber={item.id}
                title={item.title}
                content={item.content}
                isOpen={openAccordion === item.id}
                onToggle={() => handleAccordionToggle(item.id)}
              />
            ))}
          </div>

          {/* Right - Image/Info Card */}
          <div className="bg-gray-850 rounded-lg shadow-xl p-1.5" style={{backgroundColor: '#1C1C1E'}}>
            <div className="bg-gray-800 rounded-md p-6">
                <div className="flex items-center mb-4">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-1.5"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-1.5"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="bg-gray-700 p-4 rounded-md mb-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Alec Erasmus" className="w-10 h-10 rounded-full mr-3"/>
                        <div>
                            <p className="text-sm font-semibold text-white">Alec Erasmus purchased</p>
                            <p className="text-xs text-gray-400">AI Headshots Plus</p>
                        </div>
                    </div>
                    <span className="text-green-400 font-semibold">+$35.00</span>
                </div>
                
                <h4 className="text-md font-semibold text-white mb-3">Merchant of Record</h4>
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Global Payment Gateway
                    </li>
                    <li className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Tax Collection + Remittance
                    </li>
                    <li className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Fraud Prevention
                    </li>
                     <li className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Currency Conversion
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmoothSalesSection;