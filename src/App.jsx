import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Footer from './components/Footer';

/**
 * Main App Component
 * 
 * Architecture decisions:
 * - Single-page application with component-based structure
 * - Each section is a separate component for maintainability
 * - Responsive design with mobile-first approach
 * - Accessibility features built into each component
 * - Colorado mountain theme throughout
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Above the fold content */}
        <Hero />
        
        {/* Conference Agenda */}
        <section id="agenda" aria-label="Conference Agenda">
          <Agenda />
        </section>
        
        {/* Featured Speakers */}
        <section id="speakers" aria-label="Featured Speakers">
          <Speakers />
        </section>
        
        {/* Registration Form */}
        <section id="register" aria-label="Event Registration">
          <Registration />
        </section>
      </main>
      
      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
