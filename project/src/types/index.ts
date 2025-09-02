export interface User {
  id: string;
  email: string;
  full_name?: string;
  visits: number;
  free_crepes_earned: number;
  free_crepes_used: number;
  created_at: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'sweet' | 'savory';
  image_url?: string;
}

export interface Visit {
  id: string;
  user_id: string;
  visit_date: string;
  earned_free_crepe: boolean;
}