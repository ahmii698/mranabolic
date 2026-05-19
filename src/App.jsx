import React from 'react';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import StatsCarousel from './components/StatsCarousel';
import ImportanceSection from './components/ImportanceSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <SocialLinks />
      <StatsCarousel />        {/* Stats carousel yahan */}
      <ImportanceSection />
      <Footer />
    </div>
  );
}

export default App;