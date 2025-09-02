import React from 'react';
import { Star } from 'lucide-react';

const menuItems = [
  // Crêpes Salées
  {
    id: '1',
    name: 'Crêpe Mistral',
    description: 'Jambon, mozarella, cheddar blanc, laitue oignions frais.',
    price: 14.99,
    category: 'crepes-salees' as const,
    image_url: 'https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Crêpe Brika',
    description: 'Thon, mozzarella, câpres, oignons frais, oeuf laitue.',
    price: 15.99,
    category: 'crepes-salees' as const,
    image_url: 'https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Crêpe Neptune',
    description: 'Thon, mozarella, cheddar blanc, olive, laitue oignons frais.',
    price: 14.99,
    category: 'crepes-salees' as const,
    image_url: 'https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Crêpe Pepperoni',
    description: 'Pepperoni, mozarella, olive, laitue, oignons frais.',
    price: 13.99,
    category: 'crepes-salees' as const,
    image_url: 'https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    name: 'Crêpe 4 Fromages',
    description: 'Fromage cheddar, fromage mozzarella, fromage brie, fromage chèvre, sauce pesto.',
    price: 17.99,
    category: 'crepes-salees' as const,
    image_url: 'https://images.pexels.com/photos/1099681/pexels-photo-1099681.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '6',
    name: 'Crêpe Végétarienne',
    description: 'Mozzarella, épinard, champignons, laitue, oignons frais, olive.',
    price: 13.99,
    category: 'crepes-salees' as const,
    image_url: 'https://images.pexels.com/photos/1099683/pexels-photo-1099683.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  
  // Panini
  {
    id: '7',
    name: 'Panini Mistral',
    description: 'Jambon, mozarella, cheddar blanc, laitue ognions frais.',
    price: 14.99,
    category: 'panini' as const,
    image_url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '8',
    name: 'Panini Brika',
    description: 'Thon, mozzarella, câpres, oignons frais, oeuf laitue.',
    price: 15.99,
    category: 'panini' as const,
    image_url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '9',
    name: 'Panini Neptune',
    description: 'Thon, mozarella, cheddar blanc, olive, laitue oignons frais.',
    price: 13.99,
    category: 'panini' as const,
    image_url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '10',
    name: 'Panini Pepperoni',
    description: 'Pepperoni, mozarella, olive, laitue, oignons frais.',
    price: 13.99,
    category: 'panini' as const,
    image_url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '11',
    name: 'Panini 4 Fromages',
    description: 'Fromage cheddar, fromage mozzarella, fromage brie, fromage chèvre, sauce pesto.',
    price: 17.99,
    category: 'panini' as const,
    image_url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  
  // Omelettes
  {
    id: '12',
    name: 'Omelette Fromage',
    description: 'Rich blend of cheese in a delicate omelette.',
    price: 6.50,
    category: 'omelette' as const,
    image_url: 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '13',
    name: 'Omelette Thon + Fromage',
    description: 'Tuna and cheese omelette.',
    price: 7.50,
    category: 'omelette' as const,
    image_url: 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '14',
    name: 'Omelette Jambon + Fromage',
    description: 'Ham and cheese omelette.',
    price: 7.50,
    category: 'omelette' as const,
    image_url: 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  
  // Crêpes Sucrées
  {
    id: '15',
    name: 'Crêpe Choco Pistache',
    description: 'Crepe chocolat pistache.',
    price: 13.99,
    category: 'crepes-sucrees' as const,
    image_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '16',
    name: 'Crêpe Fruit Sec',
    description: 'Chocolat mélange de fruits sec (amandes concasse, pistaches concasse, noisettes concasse).',
    price: 15.99,
    category: 'crepes-sucrees' as const,
    image_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '17',
    name: 'Crêpe Tutti Frutti',
    description: 'Chocolat, fraise, banane, ananas.',
    price: 12.99,
    category: 'crepes-sucrees' as const,
    image_url: 'https://images.pexels.com/photos/1099682/pexels-photo-1099682.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '18',
    name: 'Crêpe Supreme',
    description: 'Chocolat, crème noisette, ferrero Rocher, noisette concasse.',
    price: 15.99,
    category: 'crepes-sucrees' as const,
    image_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '19',
    name: 'Crêpe Overdose',
    description: 'Chocolat, banane, fraise, crème noisette, crème speculoos, mélange de fruit sec, oreo biscuit lotus.',
    price: 17.99,
    category: 'crepes-sucrees' as const,
    image_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '20',
    name: 'Crêpe Choco Banane',
    description: 'Crêpe sucrée garnie de chocolat nutella et de bananes fraîches pour une douceur irrésistible.',
    price: 12.99,
    category: 'crepes-sucrees' as const,
    image_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '21',
    name: 'Crêpe Choco Spéculoos',
    description: 'Crêpe sucrée avec chocolat et spéculoos croquants, une délicieuse combinaison de saveurs.',
    price: 13.99,
    category: 'crepes-sucrees' as const,
    image_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '22',
    name: 'Crêpe Choco Oreo',
    description: 'Crêpe sucrée garnie de chocolat fondant et morceaux d\'Oreo pour une expérience gourmande.',
    price: 14.99,
    category: 'crepes-sucrees' as const,
    image_url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export function Menu() {
  const crepesSalees = menuItems.filter(item => item.category === 'crepes-salees');
  const paninis = menuItems.filter(item => item.category === 'panini');
  const omelettes = menuItems.filter(item => item.category === 'omelette');
  const crepesSucrees = menuItems.filter(item => item.category === 'crepes-sucrees');

  const MenuSection = ({ title, items }: { title: string; items: typeof menuItems }) => (
    <div className="mb-12">
      <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6 sm:mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden">
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{item.name}</h4>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-amber-600 font-bold text-base sm:text-lg ml-1">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Notre Délicieuse Carte
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Crêpes artisanales préparées fraîches à la commande avec des ingrédients de qualité
          </p>
        </div>

        <MenuSection title="Crêpes Salées" items={crepesSalees} />
        <MenuSection title="Panini" items={paninis} />
        <MenuSection title="Omelettes" items={omelettes} />
        <MenuSection title="Crêpes Sucrées" items={crepesSucrees} />
      </div>
    </section>
  );
}