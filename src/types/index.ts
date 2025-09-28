export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  isVerified: boolean;
  bio: string;
  jobTitle: string;
  company: string;
  followers: number;
  following: number;
  posts: number;
  categories: string[];
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  category: string;
}

export interface Article {
  id: string;
  author: User;
  title: string;
  excerpt: string;
  image?: string;
  timestamp: string;
  readTime: string;
  category: string;
}

export interface TrendingTopic {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  color: string;
}