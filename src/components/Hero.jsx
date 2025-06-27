import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

/**
 * Hero Component
 * 
 * Features:
 * - Colorado mountain-inspired design matching the uploaded image
 * - Gradient background reminiscent of Colorado skies
 * - CSS-generated mountain silhouettes
 * - Call-to-action with event details
 * - Responsive design with mobile-optimized layout
 * - Floating animations for engaging UX
 */
const Hero = () => {
  // Event details
  const eventDetails = [
    {
      icon: Calendar,
      label: 'Date',
      value: 'June 27, 2025',
      ariaLabel: 'Conference date: June 27, 2025'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Denver Convention Center',
      ariaLabel: 'Location: Denver Convention Center'
    },
    {
      icon: Users,
      label: 'Expected',
      value: '500+ Developers',
      ariaLabel: 'Expected attendance: Over 500 developers'
    }
  ];

  const scrollToRegister = () => {
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToAgenda = () => {
    const element = document.querySelector('#agenda');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mountain-gradient"
      aria-label="Hero section with conference information"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 mountain-pattern opacity-10"></div>
      
      {/* CSS Mountain Silhouettes - Inspired by the uploaded image */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Back mountains */}
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-slate-600/30 to-transparent">
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-b-[120px] border-b-slate-600/40"></div>
          <div className="absolute bottom-0 left-48 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[100px] border-b-slate-600/30"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[250px] border-l-transparent border-r-[250px] border-r-transparent border-b-[140px] border-b-slate-600/50"></div>
        </div>
        
        {/* Front mountains */}
        <div className="absolute bottom-0 w-full h-32">
          <div className="absolute bottom-0 left-24 w-0 h-0 border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-b-[100px] border-b-slate-700/60"></div>
          <div className="absolute bottom-0 right-32 w-0 h-0 border-l-[160px] border-l-transparent border-r-[160px] border-r-transparent border-b-[90px] border-b-slate-700/70"></div>
        </div>
      </div>

      {/* Colorado Flag Inspired Logo - Positioned like in the uploaded image */}
      <div className="absolute top-20 right-8 lg:top-32 lg:right-16">
        <div className="relative w-16 h-16 lg:w-24 lg:w-24 animate-float">
          {/* Red circle */}
          <div className="absolute inset-0 bg-denver-red rounded-full"></div>
          {/* Yellow/Gold center circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-denver-gold rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in text-shadow">
          Denver Dev Day
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-denver-gold mt-2">
            2025
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto font-light text-shadow animate-slide-up">
          Colorado's Premier Developer Conference
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up text-shadow">
          Join us in the heart of the Rocky Mountains for a day of cutting-edge tech talks, 
          networking, and innovation. Connect with industry leaders and fellow developers 
          in Denver's thriving tech community.
        </p>

        {/* Event Details Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {eventDetails.map((detail, index) => (
            <div 
              key={detail.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              aria-label={detail.ariaLabel}
            >
              <detail.icon className="w-8 h-8 mx-auto mb-3 text-denver-gold" aria-hidden="true" />
              <p className="text-sm font-medium text-white/70 mb-1">{detail.label}</p>
              <p className="text-lg font-semibold">{detail.value}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button
            onClick={scrollToRegister}
            className="btn-primary group flex items-center space-x-2"
            aria-label="Register for Denver Dev Day 2025"
          >
            <span>Register Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          
          <button
            onClick={scrollToAgenda}
            className="btn-secondary group flex items-center space-x-2"
            aria-label="View conference agenda"
          >
            <span>View Agenda</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 text-white/60 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
