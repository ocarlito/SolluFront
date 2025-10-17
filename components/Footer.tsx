
import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import TwitterIcon from './icons/TwitterIcon';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-sollu-dark-bg/80 backdrop-blur-sm text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Logo className="h-9 mb-2" light />
            <p className="text-gray-400">Soluções financeiras para o seu negócio brilhar.</p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedinIcon /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#oferta" className="text-gray-400 hover:text-white">Oferta</a></li>
              <li><a href="#antecipacao" className="text-gray-400 hover:text-white">Antecipação</a></li>
              <li><a href="#receita" className="text-gray-400 hover:text-white">Receita</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Termos de Serviço</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
                <li>Email: contato@sollu.com</li>
                <li>Telefone: (11) 98765-4321</li>
                <li>Rua Fictícia, 123 - São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sollu Financial. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;