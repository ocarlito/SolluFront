
import React from 'react';
import BarChartIcon from './icons/BarChartIcon';

const RevenueSection: React.FC = () => {
  return (
    <section id="receita" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">📊 Fontes de Receita</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Transparência na forma como geramos valor.</p>
        </div>
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-sollu-accent/50 to-white/10 dark:from-sollu-accent/20 dark:to-sollu-dark-bg/10 p-px shadow-lg">
          <div className="bg-white/60 dark:bg-sollu-dark-bg/60 backdrop-blur-xl p-8 rounded-[15px] flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                  <BarChartIcon />
              </div>
              <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Como a Sollu cresce com você</h3>
                  <div className="space-y-4">
                      <div className="flex items-center">
                          <div className="bg-sollu-primary text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                          <div>
                              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">Adquirência</h4>
                              <p className="text-gray-700 dark:text-gray-300">Taxas sobre as transações processadas em nossas maquininhas SolluPay.</p>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <div className="bg-sollu-dark-green text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                          <div>
                              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">TPU (%)</h4>
                              <p className="text-gray-700 dark:text-gray-300">Taxa por utilização sobre serviços e produtos de antecipação oferecidos.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;