import React from 'react';
import { ChevronRight } from 'lucide-react';
import PostCard from '../components/PostCard';
import TrendingCard from '../components/TrendingCard';
import ProfileCard from '../components/ProfileCard';
import { posts, trendingTopics, currentUser } from '../data/mockData';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Profile */}
        <div className="hidden lg:block">
          <ProfileCard user={currentUser} showFullProfile />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Trending Topics */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Top Trends</h2>
              <button className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-700">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {trendingTopics.map((topic) => (
                <TrendingCard key={topic.id} topic={topic} />
              ))}
            </div>
          </div>

          {/* Posts Feed */}
          <div>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Suggested Connections */}
        <div className="hidden lg:block space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-3">Suggested for You</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={`https://images.pexels.com/photos/${3777598 + i}/pexels-photo-${3777598 + i}.jpeg?auto=compress&cs=tinysrgb&w=50`}
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">User {i}</p>
                      <p className="text-xs text-gray-500">Market Analyst</p>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-bold text-gray-900 mb-3">Market Today</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">S&P 500</span>
                <span className="text-sm text-green-600 font-semibold">+2.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">NASDAQ</span>
                <span className="text-sm text-green-600 font-semibold">+1.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Bitcoin</span>
                <span className="text-sm text-red-600 font-semibold">-0.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}