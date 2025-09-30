import React, { useState } from 'react';
import { Search, TrendingUp, Building, BarChart3 } from 'lucide-react';
import PostCard from '../components/PostCard';
import NavigationButtons from '../components/NavigationButtons';
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
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business News</h1>
          <p className="text-gray-600">Real-time market updates and analysis</p>
        </div>

        {/* Sub-Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2 bg-gray-100 rounded-full p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
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
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {activeTab === 'stock-market' && 'Stock Market News'}
              {activeTab === 'industry' && 'Industry News'}
              {activeTab === 'expert-opinion' && 'Expert Opinion News'}
            </h2>
            {businessPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}