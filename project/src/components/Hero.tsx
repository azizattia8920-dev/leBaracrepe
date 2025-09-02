import React from 'react';

interface HeroProps {
  onNewsletterClick: () => void;
}

export function Hero({ onNewsletterClick }: HeroProps) {

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Delivery Banner */}
      <div id="delivery" className="bg-green-600 text-white py-3 text-center">
        <a 
          href="https://www.ubereats.com/ca/store/le-baracrepe/PpSbJz6PVSWktyi82A_U0w?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-medium"
        >
          🚚 Commandez en livraison sur Uber Eats - Cliquez ici!
        </a>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/public/c3c0ab56-13ef-4e70-b74a-f81c361294b3.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Bienvenue chez
          <span className="block text-amber-300">Le Baracrêpe</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Crêpes françaises authentiques préparées avec amour et les meilleurs ingrédients.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={onNewsletterClick}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
S'abonner - Crêpe Chocolat Gratuite
          </button>
          <a
            href="#menu"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all"
          >
            Voir la Carte
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}