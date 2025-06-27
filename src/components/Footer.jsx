import React from 'react';
import { 
  Mountain, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Heart,
  ExternalLink
} from 'lucide-react';

/**
 * Footer Component
 * 
 * Features:
 * - Contact information and social media links
 * - Colorado-themed branding
 * - Sponsor acknowledgments
 * - Newsletter signup
 * - Accessibility features
 * - Responsive design with mobile optimization
 * - Professional conference footer layout
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/denverdevday',
      ariaLabel: 'Follow Denver Dev Day on Twitter'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/denver-dev-day',
      ariaLabel: 'Connect with Denver Dev Day on LinkedIn'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/denver-dev-day',
      ariaLabel: 'View Denver Dev Day projects on GitHub'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/denverdevday',
      ariaLabel: 'Follow Denver Dev Day on Instagram'
    }
  ];

  // Sponsor information
  const sponsors = [
    { name: 'Kahua', level: 'Platinum' },
    { name: 'Uno Platform', level: 'Gold' },
    { name: 'TEKsystems', level: 'Silver' },
    { name: '40AU (FortyAU)', level: 'Bronze' }
  ];

  // Navigation links
  const footerLinks = {
    'Conference': [
      { name: 'Agenda', href: '#agenda' },
      { name: 'Speakers', href: '#speakers' },
      { name: 'Registration', href: '#register' },
      { name: 'Venue', href: '#venue' }
    ],
    'Community': [
      { name: 'Code of Conduct', href: '#conduct' },
      { name: 'Accessibility', href: '#accessibility' },
      { name: 'Diversity & Inclusion', href: '#diversity' },
      { name: 'Past Events', href: '#archive' }
    ],
    'Support': [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Sponsorship', href: '#sponsors' },
      { name: 'Volunteer', href: '#volunteer' }
    ]
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      
      {/* Main Footer Content */}
      <div className="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand and Contact */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-denver-red to-denver-gold rounded-full flex items-center justify-center">
                  <Mountain className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Denver Dev Day</h3>
                  <p className="text-sm text-gray-400">2025</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Colorado's premier developer conference bringing together the brightest minds 
                in technology for learning, networking, and innovation.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-denver-gold flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="mailto:info@denverdevday.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Email Denver Dev Day organizers"
                  >
                    info@denverdevday.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-denver-gold flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="tel:+1-303-555-0199" 
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="Call Denver Dev Day organizers"
                  >
                    (303) 555-0199
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-denver-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <address className="text-gray-300 not-italic">
                    Denver Convention Center<br />
                    700 14th Street<br />
                    Denver, CO 80202
                  </address>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-heading font-semibold mb-4 text-denver-gold">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-white transition-colors text-left"
                        aria-label={`Navigate to ${link.name} section`}
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-denver-gold">
                Stay Connected
              </h4>
              <p className="text-gray-300 mb-4">
                Get updates about future events and Colorado tech community news.
              </p>
              
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-denver-red/20 focus:border-denver-red transition-colors text-white placeholder-gray-400"
                  aria-label="Email address for newsletter subscription"
                />
                <button
                  type="submit"
                  className="w-full bg-denver-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-200"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>

              {/* Social Media Links */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3 text-gray-400">
                  Follow Us
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors group"
                      aria-label={social.ariaLabel}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="bg-gray-800 py-8">
        <div className="container-width">
          <h4 className="text-center text-lg font-heading font-semibold mb-6 text-denver-gold">
            Proudly Sponsored By
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.name}
                className="text-center"
              >
                <div className="bg-gray-700 hover:bg-gray-600 rounded-lg p-4 transition-colors">
                  <p className="text-white font-medium text-sm">{sponsor.name}</p>
                  <p className="text-gray-400 text-xs mt-1">{sponsor.level} Sponsor</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="#sponsors"
              className="inline-flex items-center space-x-2 text-denver-gold hover:text-yellow-400 transition-colors"
              aria-label="Learn more about sponsorship opportunities"
            >
              <span>Become a Sponsor</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-6 border-t border-gray-800">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-sm">
                © {currentYear} Denver Dev Day. All rights reserved.
              </p>
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" aria-label="love" />
              <span>in Colorado</span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                aria-label="View privacy policy"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                aria-label="View terms of service"
              >
                Terms of Service
              </a>
              <a
                href="#conduct"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                aria-label="View code of conduct"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
