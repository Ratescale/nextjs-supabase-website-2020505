'use client';

import React from 'react';

// Define types for props if necessary, e.g., for dynamic data
interface CardProps {
  title: string;
  value: string;
  details: string;
  icon?: React.ReactNode; // Optional icon
}

const InfoCard: React.FC<CardProps> = ({ title, value, details, icon }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-md flex-1 min-w-[200px]">
    <div className="flex justify-between items-start mb-1">
      <h3 className="text-sm text-gray-400">{title}</h3>
      {icon}
    </div>
    <p className="text-2xl font-bold text-white">{value}</p>
    <p className="text-xs text-gray-500">{details}</p>
  </div>
);

interface TransactionRowProps {
  customer: string;
  email: string;
  status: string;
  paymentMethod: string;
  amount: string;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ customer, email, status, paymentMethod, amount }) => (
  <tr className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
    <td className="py-3 px-4 text-sm text-white">
      {customer}
      <div className="text-xs text-gray-400">{email}</div>
    </td>
    <td className="py-3 px-4 text-sm">
      <span className={`px-2 py-1 text-xs rounded-full ${status === 'paid' ? 'bg-green-500 text-green-900' : 'bg-yellow-500 text-yellow-900'}`}>
        {status}
      </span>
    </td>
    <td className="py-3 px-4 text-sm text-gray-300">{paymentMethod}</td>
    <td className="py-3 px-4 text-sm text-white text-right">{amount}</td>
  </tr>
);

interface RecentCustomerProps {
  avatarUrl?: string; // Assuming an avatar image URL
  name: string;
  email: string;
  amount: string;
}

const RecentCustomer: React.FC<RecentCustomerProps> = ({ avatarUrl, name, email, amount }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center">
      {avatarUrl ? (
        <img src={avatarUrl} alt={name} className="w-8 h-8 rounded-full mr-3" />
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-3 text-sm text-gray-300">
          {name.substring(0,1).toUpperCase()}
        </div>
      )}
      <div>
        <p className="text-sm text-white">{name}</p>
        <p className="text-xs text-gray-400">{email}</p>
      </div>
    </div>
    <p className="text-sm text-white">{amount}</p>
  </div>
);

const DashboardUI = () => {
  const navItems = [
    { name: 'Home', icon: '🏠' , active: true },
    { name: 'Analytics', icon: '📊' },
    { name: 'Balance', icon: '⚖️' },
    { name: 'Products', icon: '📦' },
    { name: 'Payments', icon: '💳' },
    { name: 'Subscriptions', icon: '🔄' },
    { name: 'Customers', icon: '👥' },
    { name: 'Developers', icon: '💻' },
  ];

  const transactions: TransactionRowProps[] = [
    { customer: 'John Doe', email: 'johnDoe@gmail.com', status: 'paid', paymentMethod: 'VISA .... 4242', amount: '€100.00' },
    { customer: 'Alec Erasmus', email: 'alecerasmus2@gmail.com', status: 'paid', paymentMethod: 'VISA .... 4242', amount: '€100.00' },
    { customer: 'Alec Erasmus', email: 'alecerasmus2@gmail.com', status: 'paid', paymentMethod: 'VISA .... 4242', amount: '€10.00' },
    { customer: 'Jane Doe', email: 'janeDoe@gmail.com', status: 'paid', paymentMethod: 'VISA .... 4242', amount: '€100.00' },
    { customer: 'Gabriel Ferraz', email: 'sudoferraz@gmail.com', status: 'paid', paymentMethod: 'VISA .... 4242', amount: '€10.00' },
  ];

 const recentCustomers: RecentCustomerProps[] = [
    { name: 'Jane Doe', email: 'janeDoe@gmail.com', amount: '€100.00', avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'John Doe', email: 'johnDoe@gmail.com', amount: '€100.00', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Alec Erasmus', email: 'alecerasmus2@gmail.com', amount: '€110.00', avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: 'Gabriel Ferraz', email: 'sudoferraz@gmail.com', amount: '€10.00', avatarUrl: 'https://randomuser.me/api/portraits/men/78.jpg' },
  ];

  return (
    <section className="fixed bottom-0 left-0 right-0 p-4 z-40 md:relative md:bottom-auto md:p-0">
      <div className="bg-gray-850 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto" style={{backgroundColor: '#161618'}}>
        {/* Sidebar */}
        <aside className="w-full md:w-60 bg-gray-900 p-6 space-y-4 md:space-y-2 flex-shrink-0">
          <div className="text-green-400 text-2xl mb-6 hidden md:block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors 
                ${item.active ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-750 hover:text-white'}`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
           <div className="pt-4 mt-auto md:hidden">
            <button className="w-full flex items-center justify-center space-x-3 px-3 py-2 rounded-md text-sm font-medium bg-gray-700 text-white">
                <span>⚙️</span>
                <span>Settings</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-opacity-50 bg-black">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Dashboard</h2>
            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-400">Test mode</span>
              <label htmlFor="testModeToggle" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input type="checkbox" id="testModeToggle" className="sr-only" />
                  <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
              </label>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <InfoCard title="Total Revenue" value="€320.00" details="*Including taxes and fees" />
            <InfoCard title="Customers" value="4" details="*Including active and inactive" />
            <InfoCard title="Sales" value="5" details="*Including recurring payments" />
            <InfoCard title="Active Subscriptions" value="5" details="*Including trials and free plans" />
          </div>

          {/* Transactions and Recent Customers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gray-850 p-1 rounded-lg shadow-md" style={{backgroundColor: '#1C1C1E'}}>
              <div className="flex justify-between items-center mb-3 px-4 pt-3">
                <h3 className="text-md font-semibold text-white">Transactions</h3>
                <a href="#" className="text-xs text-green-400 hover:text-green-300">View All &rarr;</a>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-2 px-4 text-xs text-gray-500 font-semibold text-left">Customer</th>
                      <th className="py-2 px-4 text-xs text-gray-500 font-semibold text-left">Status</th>
                      <th className="py-2 px-4 text-xs text-gray-500 font-semibold text-left">Payment Method</th>
                      <th className="py-2 px-4 text-xs text-gray-500 font-semibold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, index) => <TransactionRow key={index} {...tx} />)}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-850 p-4 rounded-lg shadow-md" style={{backgroundColor: '#1C1C1E'}}>
              <h3 className="text-md font-semibold text-white mb-3">Recent Customers</h3>
              <div className="space-y-2">
                {recentCustomers.map((cust, index) => <RecentCustomer key={index} {...cust} />)}
              </div>
            </div>
          </div>
        </main>
      </div>
      <style jsx>{`
        input:checked ~ .dot {
          transform: translateX(100%);
          background-color: #4ADE80; /* Green when active */
        }
        input:checked ~ .block {
            background-color: #378f51; /* Darker green background when active */
        }
      `}</style>
    </section>
  );
};

export default DashboardUI;
