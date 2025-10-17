import React from 'react';
import PaymentIcon from './icons/PaymentIcon';
import AccountIcon from './icons/AccountIcon';
import ShieldIcon from './icons/ShieldIcon';

const OfferCard: React.FC<{ icon: React.ReactNode; title: string; subtitle?: string; description: string; }> = ({ icon, title, subtitle, description }) => (
  <div className="rounded-2xl bg-gradient-to-br from-sollu-accent/50 to-white/10 dark:from-sollu-accent/20 dark:to-sollu-dark-bg/10 p-px shadow-lg hover:shadow-sollu-primary/20 transition-all duration-300 h-full">
    <div className="bg-white/60 dark:bg-sollu-dark-bg/60 backdrop-blur-xl p-8 rounded-[15px] h-full">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-sollu-accent/30 to-sollu-primary/30 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      {subtitle && <p className="text-sm font-semibold text-sollu-dark-green dark:text-sollu-light-green mb-3">{subtitle}</p>}
      <p className="text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  </div>
);


const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">✨ Nossas Soluções</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Conheça as ferramentas que impulsionam o seu sucesso.</p>
        </div>
        <div className="flex flex-col items-center gap-8">
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
                <OfferCard
                    icon={<PaymentIcon />}
                    title="SolluPay"
                    subtitle="Adquirência"
                    description="Serviço completo para captura e processamento de transações com cartão, com segurança e agilidade."
                />
                <OfferCard
                    icon={<AccountIcon />}
                    title="Sollu Conta"
                    description="Uma conta digital completa para gerenciar suas finanças: saldo, transferências, pagamentos e recebimentos."
                />
            </div>
             <div className="w-full md:w-2/3 lg:w-1/2">
                <OfferCard
                    icon={<ShieldIcon />}
                    title="BlindaSollu"
                    subtitle="Consulte um representante"
                    description="Gestão de recursos segura com robusta tecnologia em pagamentos para proteger o seu patrimônio."
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;