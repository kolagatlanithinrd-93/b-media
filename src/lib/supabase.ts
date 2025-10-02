import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const signUp = async (email: string, password: string, userData: {
  username: string;
  display_name: string;
  avatar_url?: string;
}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData
    }
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

// Profile helpers
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
};

export const updateProfile = async (userId: string, updates: any) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  return { data, error };
};

// Posts helpers
export const getPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:profiles(*),
      likes(user_id),
      comments(*)
    `)
    .order('created_at', { ascending: false });
  return { data, error };
};

export const createPost = async (postData: {
  content: string;
  image_url?: string;
  category?: string;
}) => {
  const user = await getCurrentUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('posts')
    .insert({
      ...postData,
      author_id: user.id
    })
    .select(`
      *,
      author:profiles(*)
    `)
    .single();
  return { data, error };
};

export const likePost = async (postId: string) => {
  const user = await getCurrentUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('likes')
    .insert({
      post_id: postId,
      user_id: user.id
    });
  return { data, error };
};

export const unlikePost = async (postId: string) => {
  const user = await getCurrentUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await supabase
    .from('likes')
    .delete()
    .eq('post_id', postId)
    .eq('user_id', user.id);
  return { data, error };
};

// Trending topics helpers
export const getTrendingTopics = async () => {
  const { data, error } = await supabase
    .from('trending_topics')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
};