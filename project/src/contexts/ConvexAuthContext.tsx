import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { convex } from '../lib/convex';
import { api } from '../../convex/_generated/api';
import { Id } from '../../convex/_generated/dataModel';

interface User {
  id: string;
  email: string;
  full_name?: string;
  visits: number;
  freeCrepes: number;
  freeCrepesPending: number;
  created_at: string;
}

interface AuthContextType {
  user: SupabaseUser | null;
  userProfile: User | null;
  convexUserId: Id<"users"> | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  recordVisit: () => Promise<void>;
  redeemFreeCrepe: () => Promise<void>;
}

const ConvexAuthContext = createContext<AuthContextType | undefined>(undefined);

export function ConvexAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [convexUserId, setConvexUserId] = useState<Id<"users"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setupConvexUser(session.user);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await setupConvexUser(session.user);
        } else {
          setUserProfile(null);
          setConvexUserId(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const setupConvexUser = async (supabaseUser: SupabaseUser) => {
    try {
      // Check if user exists in Convex
      let convexUser = await convex.query(api.auth.getUserByEmail, { 
        email: supabaseUser.email! 
      });

      if (!convexUser) {
        // Create user in Convex if doesn't exist
        const userId = await convex.mutation(api.auth.createUser, {
          email: supabaseUser.email!,
          fullName: supabaseUser.user_metadata?.full_name,
        });
        convexUser = await convex.query(api.auth.getUser, { userId });
      }

      if (convexUser) {
        setConvexUserId(convexUser._id);
        setUserProfile({
          id: convexUser._id,
          email: convexUser.email,
          full_name: convexUser.fullName,
          visits: convexUser.visits,
          freeCrepes: convexUser.freeCrepes,
          freeCrepesPending: convexUser.freeCrepesPending,
          created_at: new Date(convexUser.createdAt).toISOString(),
        });
      }
    } catch (error) {
      console.error('Error setting up Convex user:', error);
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    });

    if (error) throw error;
    
    // Convex user will be created in the auth state change handler
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const recordVisit = async () => {
    if (!convexUserId) return;

    try {
      const result = await convex.mutation(api.rewards.recordVisit, { 
        userId: convexUserId 
      });
      
      // Update local state
      setUserProfile(prev => prev ? {
        ...prev,
        visits: result.visitCount,
        freeCrepesPending: result.freeCrepesPending,
      } : null);

      return result;
    } catch (error) {
      console.error('Error recording visit:', error);
      throw error;
    }
  };

  const redeemFreeCrepe = async () => {
    if (!convexUserId) return;

    try {
      const result = await convex.mutation(api.rewards.redeemFreeCrepe, { 
        userId: convexUserId 
      });
      
      // Update local state
      setUserProfile(prev => prev ? {
        ...prev,
        freeCrepes: result.freeCrepes,
        freeCrepesPending: result.freeCrepesPending,
      } : null);

      return result;
    } catch (error) {
      console.error('Error redeeming free crepe:', error);
      throw error;
    }
  };

  const value = {
    user,
    userProfile,
    convexUserId,
    loading,
    signUp,
    signIn,
    signOut,
    recordVisit,
    redeemFreeCrepe,
  };

  return (
    <ConvexAuthContext.Provider value={value}>
      {children}
    </ConvexAuthContext.Provider>
  );
}

export function useConvexAuth() {
  const context = useContext(ConvexAuthContext);
  if (context === undefined) {
    throw new Error('useConvexAuth must be used within a ConvexAuthProvider');
  }
  return context;
}