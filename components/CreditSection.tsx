
import React from 'react';
import MicroIcon from './icons/MicroIcon';
import InvestIcon from './icons/InvestIcon';

const CreditCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="rounded-2xl bg-gradient-to-br from-sollu-accent/50 to-white/10 dark:from-sollu-accent/20 dark:to-sollu-dark-bg/10 p-px shadow-lg transform hover:-translate-y-2 transition-all duration-300 h-full">
      <div className="bg-white/60 dark:bg-sollu-dark-bg/60 backdrop-blur-xl p-8 rounded-[15px] h-full flex flex-col">
        <div className="mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{description}</p>
        <a href="#" className="font-semibold text-sollu-primary hover:underline mt-auto">
          Saiba Mais &rarr;
        </a>
      </div>
    </div>
);

const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-sollu-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AnticipationTypeCard: React.FC<{ text: string }> = ({ text }) => (
    <div className="rounded-2xl bg-white/50 dark:bg-sollu-dark-bg/50 backdrop-blur-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <CheckCircleIcon />
        <p className="font-semibold mt-3 text-gray-800 dark:text-gray-200">{text}</p>
    </div>
);


const CreditSection: React.FC = () => {
  return (
    <section id="antecipacao" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">✨ Antecipação de Recebíveis</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">Transforme suas vendas a prazo e direitos futuros em capital imediato para o seu negócio.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CreditCard 
                icon={<MicroIcon />}
                title="Sollu Micro"
                description="Cash advance ágil para pequenos empreendedores e necessidades pontuais. Resolva o hoje, planeje o amanhã."
            />
            <CreditCard
                icon={<InvestIcon />}
                title="Sollu Invest"
                description="Linha de cash advance para investimentos maiores. Ideal para empresas e projetos com grande potencial de crescimento."
            />
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">O que nós antecipamos?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
                Flexibilidade para transformar diversos tipos de ativos futuros em liquidez agora.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <AnticipationTypeCard text="Recebíveis de Cartão" />
                <AnticipationTypeCard text="Duplicatas e Boletos" />
                <AnticipationTypeCard text="Créditos Judiciais" />
                <AnticipationTypeCard text="Contratos e Aluguéis" />
            </div>
        </div>

      </div>
    </section>
  );
};

export default CreditSection;