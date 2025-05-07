import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Pricing', href: '#pricing' },
      { name: 'Features', href: '#features' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Changelog', href: '#changelog' },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Support', href: '#support' },
      { name: 'System Status', href: '#status' },
    ],
    Legal: [
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Cookie Policy', href: '#cookies' },
    ],
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-16 md:py-20">
      <div className="container mx-auto px-6">
        {/* Call to Action Section */}
        <div className="bg-gray-850 rounded-xl shadow-2xl p-8 md:p-12 mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-center" style={{backgroundColor: '#161618'}}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-2">
              Ready to build the future?
            </h2>
            <p className="text-gray-300 mb-6 md:mb-0 max-w-md mx-auto md:mx-0">
              Join Creem today and start building your global SaaS business with ease.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="#get-started"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md inline-flex items-center"
            >
              Get started for free <span className="ml-2">🍦</span>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-green-400">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <Link href="/" className="text-2xl font-bold text-white">
                Creem
              </Link>
            </div>
            <p className="text-sm mb-4">
              The financial OS for AI generators and modern SaaS businesses.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons - replace with actual SVGs or an icon library */}
              <a href="#" className="hover:text-green-400 transition-colors" aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="hover:text-green-400 transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-md font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-green-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Creem. All rights reserved. Made with <span className="text-red-500">❤️</span> in the EU.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
