import React, { createContext, useContext, useState } from 'react';
import { convex } from '../lib/convex';
import { api } from '../../convex/_generated/api';

interface NewsletterContextType {
  subscribe: (email: string, fullName?: string) => Promise<void>;
  isSubscribed: (email: string) => Promise<boolean>;
  subscriberCount: () => Promise<number>;
  loading: boolean;
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export function NewsletterProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  const subscribe = async (email: string, fullName?: string) => {
    setLoading(true);
    try {
      await convex.mutation(api.newsletter.subscribe, { 
        email, 
        fullName 
      });
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const isSubscribed = async (email: string): Promise<boolean> => {
    try {
      return await convex.query(api.newsletter.isSubscribed, { email });
    } catch (error) {
      console.error('Error checking subscription:', error);
      return false;
    }
  };

  const subscriberCount = async (): Promise<number> => {
    try {
      return await convex.query(api.newsletter.getSubscriberCount);
    } catch (error) {
      console.error('Error getting subscriber count:', error);
      return 0;
    }
  };

  const value = {
    subscribe,
    isSubscribed,
    subscriberCount,
    loading,
  };

  return (
    <NewsletterContext.Provider value={value}>
      {children}
    </NewsletterContext.Provider>
  );
}

export function useNewsletter() {
  const context = useContext(NewsletterContext);
  if (context === undefined) {
    throw new Error('useNewsletter must be used within a NewsletterProvider');
  }
  return context;
}