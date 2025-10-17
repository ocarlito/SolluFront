
import React from 'react';
import HeroIllustration from './illustrations/HeroIllustration';

const Hero: React.FC = () => {
  return (
    <section className="bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <HeroIllustration />
      </div>
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-4">
          Soluções que <span className="bg-clip-text text-transparent bg-gradient-to-r from-sollu-accent to-sollu-primary">iluminam</span> seu futuro.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Antecipação, pagamentos e gestão em um só lugar. Simples, rápido e inteligente para o seu negócio prosperar.
        </p>
        <button className="bg-gradient-to-r from-sollu-accent to-sollu-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transform hover:scale-105 transition-all shadow-lg shadow-sollu-primary/30">
          Começar Agora
        </button>
      </div>
    </section>
  );
};

export default Hero;