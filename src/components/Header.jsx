import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

/**
 * Header Component
 * 
 * Features:
 * - Responsive navigation with mobile menu
 * - Smooth scrolling to sections
 * - Colorado-themed logo with mountain icon
 * - Sticky header that becomes opaque on scroll
 * - Accessibility features (keyboard navigation, ARIA labels)
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Register', href: '#register' },
  ];

  // Smooth scroll to section
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-width" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              {/* Colorado flag inspired logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-denver-red to-denver-gold rounded-full flex items-center justify-center">
                <Mountain className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl lg:text-2xl font-heading font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white text-shadow'
              }`}>
                Denver Dev Day
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 hover:scale-105 transform ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-denver-red' 
                    : 'text-white hover:text-denver-gold text-shadow'
                }`}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#register')}
              className={`btn-primary ${
                isScrolled ? '' : 'bg-denver-gold hover:bg-yellow-500 text-gray-900'
              }`}
              aria-label="Register for the conference"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:text-denver-red hover:bg-gray-100' 
                : 'text-white hover:text-denver-gold hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 animate-slide-up">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-denver-red hover:bg-gray-50 transition-colors"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={() => scrollToSection('#register')}
                  className="btn-primary w-full text-center"
                  aria-label="Register for the conference"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
