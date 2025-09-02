import React from 'react';
import { Coffee, Mail } from 'lucide-react';

interface HeaderProps {
  onNewsletterClick: () => void;
}

export function Header({ onNewsletterClick }: HeaderProps) {

  return (
    <header className="bg-amber-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Coffee className="w-8 h-8 text-amber-800" />
            <h1 className="text-2xl font-bold text-amber-900">
              Le Baracrêpe
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="https://www.ubereats.com/ca/store/le-baracrepe/PpSbJz6PVSWktyi82A_U0w?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium transition-colors"
            >
              Commander Livraison
            </a>
            <a href="#home" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">
              Accueil
            </a>
            <a href="#menu" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">
              Carte
            </a>
            <a href="#about" className="text-amber-900 hover:text-amber-700 font-medium transition-colors">
              À Propos
            </a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={onNewsletterClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center space-x-1 sm:space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Infolettre</span>
              <span className="sm:hidden">Info</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}