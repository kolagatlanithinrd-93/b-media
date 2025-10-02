import { useState, useEffect } from 'react';
import { getPosts, likePost, unlikePost } from '../lib/supabase';
import { Database } from '../lib/database.types';

type Post = Database['public']['Tables']['posts']['Row'] & {
  author: Database['public']['Tables']['profiles']['Row'];
  likes: { user_id: string }[];
  comments: Database['public']['Tables']['comments']['Row'][];
};

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await getPosts();
      
      if (error) {
        setError(error.message);
        return;
      }
      
      setPosts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = async (postId: string, isLiked: boolean) => {
    try {
      if (isLiked) {
        await unlikePost(postId);
      } else {
        await likePost(postId);
      }
      
      // Refresh posts to get updated counts
      await fetchPosts();
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
    toggleLike
  };
}