import React from 'react';
import { Coffee, Heart, Mail, Clock } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            About Le Baracrêpe
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Récemment ouvert à Montréal, nous servons des crêpes françaises authentiques préparées selon des recettes 
            traditionnelles avec les meilleurs ingrédients. Notre passion pour la qualité et la 
            satisfaction client guide tout ce que nous faisons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">Fraîches Quotidiennement</h3>
            <p className="text-sm sm:text-base text-amber-700">
              Toutes les crêpes sont préparées fraîches à la commande avec notre recette signature
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">Faites avec Amour</h3>
            <p className="text-sm sm:text-base text-amber-700">
              Chaque crêpe est préparée avec soin et attention aux détails
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">Offres Exclusives</h3>
            <p className="text-sm sm:text-base text-amber-700">
              Recevez nos promotions spéciales et offres limitées directement par courriel!
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">Service Rapide</h3>
            <p className="text-sm sm:text-base text-amber-700">
              Service rapide et amical sans compromettre la qualité
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}