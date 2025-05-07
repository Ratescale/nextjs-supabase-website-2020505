import React from 'react';

const AIAssistantSection = () => {
  const suggestedQuestions = [
    'What is my churn rate?',
    'To which country do I sell the most?',
    'What day of the week do I sell the best?',
    'What is my average order value?',
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Assistant
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-2">
            Leverage Creem AI to analyze your payment data and uncover valuable business insights. From revenue trends to customer behavior patterns, our AI assistant helps you understand your business operations.
          </p>
          <p className="text-xs text-gray-500">
            Powered by <span className="font-semibold text-gray-400">OpenAI</span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-850 rounded-xl shadow-2xl overflow-hidden" style={{backgroundColor: '#161618'}}>
          <div className="bg-orange-500 p-3 flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-black">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-sm font-semibold text-black">Creem Assistant</h3>
          </div>

          <div className="p-6 md:p-8 text-center">
            <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-500 mb-2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    <path d="M2 17L12 22L22 17"/>
                    <path d="M2 12L12 17L22 12"/>
                </svg>
              <p className="text-lg text-gray-200 mb-6">Hello, how can I help you today?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {suggestedQuestions.map((question, index) => (
                  <button 
                    key={index} 
                    className="bg-gray-700 hover:bg-gray-600 text-white text-sm py-2.5 px-4 rounded-md transition-colors duration-200 truncate"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center bg-gray-800 rounded-lg p-1.5">
              <input 
                type="text" 
                placeholder="Message..." 
                className="flex-grow bg-transparent text-white placeholder-gray-500 focus:outline-none px-3 py-2 text-sm"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;