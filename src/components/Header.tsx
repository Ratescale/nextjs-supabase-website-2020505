import Link from 'next/link';
import Logo from './Logo';
import styles from './Header.module.css';

const navItems: { href: string; label: string }[] = [
  { href: '#contact', label: 'Product' },
  { href: '#pricing',  label: 'About'   },
  { href: '#blog',     label: 'News'    },
  { href: '#docs',     label: 'Contact' },
];

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 fixed inset-x-0 z-50">
      <div className="container mx-auto flex items-center justify-start px-6">
        {/* ロゴ */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* ナビゲーション */}
        <nav className="hidden md:flex items-center space-x-8 ml-14 text-sm">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.navButton}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Login ボタン */}
        <div className="ml-auto hidden md:flex items-center">
          <Link
            href="#login"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Login
          </Link>
        </div>

        {/* モバイルメニュー */}
        <div className="md:hidden ml-auto">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

