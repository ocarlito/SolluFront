
import React from 'react';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-white/30 dark:bg-sollu-dark-bg/30 backdrop-blur-lg sticky top-0 z-50 border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer">
          <Logo className="h-8" />
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#oferta" className="text-gray-700 dark:text-gray-300 hover:text-sollu-primary dark:hover:text-sollu-light-green transition-colors">Oferta</a>
          <a href="#antecipacao" className="text-gray-700 dark:text-gray-300 hover:text-sollu-primary dark:hover:text-sollu-light-green transition-colors">Antecipação</a>
          <a href="#receita" className="text-gray-700 dark:text-gray-300 hover:text-sollu-primary dark:hover:text-sollu-light-green transition-colors">Receita</a>
          <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-sollu-primary dark:hover:text-sollu-light-green transition-colors">Blog</a>
          <a href="#contato" className="bg-gradient-to-r from-sollu-accent to-sollu-primary text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Contato
          </a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button className="text-gray-600 dark:text-gray-300 hover:text-sollu-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;