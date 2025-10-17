import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OfferSection from './components/OfferSection';
import CreditSection from './components/CreditSection';
import RevenueSection from './components/RevenueSection';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 font-sans relative grainy-bg radial-gradient-bg transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <OfferSection />
        <CreditSection />
        <RevenueSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;