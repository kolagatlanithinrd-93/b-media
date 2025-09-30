import React, { useState } from 'react';
import { TrendingUp, Building, BarChart3 } from 'lucide-react';
import PostCard from '../components/PostCard';
import { posts } from '../data/mockData';

export default function BusinessNews() {
  const [activeTab, setActiveTab] = useState('stock-market');

  const tabs = [
    { id: 'stock-market', label: 'Stock Market News', icon: TrendingUp },
    { id: 'industry', label: 'Industry News', icon: Building },
    { id: 'expert-opinion', label: 'Expert Opinion News', icon: BarChart3 },
  ];

  const marketData = [
    { symbol: 'AAPL', price: '$175.43', change: '+2.34%', positive: true },
    { symbol: 'GOOGL', price: '$142.56', change: '+1.87%', positive: true },
    { symbol: 'MSFT', price: '$378.91', change: '-0.45%', positive: false },
    { symbol: 'TSLA', price: '$248.73', change: '+3.21%', positive: true },
  ];

  const businessPosts = posts.filter(post => 
    post.category.includes('Market') || post.category.includes('Business') || post.category.includes('Tech')
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Business News</h1>
        <p className="text-gray-600">Real-time market updates and analysis</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-full p-1 flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Market Overview */}
      {activeTab === 'stock-market' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Market Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketData.map((stock) => (
              <div key={stock.symbol} className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900">{stock.symbol}</h3>
                <p className="text-xl font-semibold text-gray-800">{stock.price}</p>
                <p className={`text-sm font-semibold ${
                  stock.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stock.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content based on active tab */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'industry' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry News</h2>
            {businessPosts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {activeTab === 'stock-market' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stock Market News</h2>
            {businessPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {activeTab === 'expert-opinion' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Opinion News</h2>
            {businessPosts.slice(1, 4).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}