import React from 'react';
import TrendingCard from '../components/TrendingCard';
import PostCard from '../components/PostCard';
import { trendingTopics, posts } from '../data/mockData';

export default function News() {
  const newsPosts = posts.filter(post => 
    post.category.includes('News') || post.category.includes('Market')
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Stock News</h1>
        <p className="text-gray-600">Latest market updates and business news</p>
      </div>

      {/* Trending Topics */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingTopics.map((topic) => (
            <TrendingCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>

      {/* News Posts */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Latest News</h2>
        {newsPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}