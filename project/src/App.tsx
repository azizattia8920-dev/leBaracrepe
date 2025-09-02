import React, { useState } from 'react';
import { ConvexProvider } from 'convex/react';
import { NewsletterProvider } from './contexts/NewsletterContext';
import { convex } from './lib/convex';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { NewsletterModal } from './components/NewsletterModal';

function AppContent() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      <Header onNewsletterClick={() => setShowNewsletterModal(true)} />
      <Hero onNewsletterClick={() => setShowNewsletterModal(true)} />
      <Menu />
      <About />
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </div>
  );
}

function App() {
  return (
    <ConvexProvider client={convex}>
      <NewsletterProvider>
        <AppContent />
      </NewsletterProvider>
    </ConvexProvider>
  );
}

export default App;