
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProductGrid from './components/ProductGrid';
import AccessContent from './components/AccessContent';
import Bonus from './components/Bonus';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-main flex flex-col items-center">
      <div className="w-full max-w-md bg-purple-main min-h-screen shadow-2xl relative overflow-hidden">
        <Header />
        <Hero />
        <ProductGrid />
        <HowItWorks />
        <AccessContent />
        <Bonus />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default App;
