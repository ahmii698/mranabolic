import React from 'react';
import Hero from './components/Hero';
import ImportanceSection from './components/ImportanceSection';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <ImportanceSection />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;