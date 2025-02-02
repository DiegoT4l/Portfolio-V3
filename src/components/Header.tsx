import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from './shared/Link';
import ThemeToggle from './shared/ThemeToggle';

const navItems = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#contact', label: 'Contacto' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-6 py-4'>
        <nav className='flex items-center justify-between'>
          <motion.div
            className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'
            whileHover={{ scale: 1.05 }}
          >
            DiegoT4l
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center space-x-4'>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className='md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className='flex flex-col p-4 space-y-4'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
