import React, { useState } from 'react';
import { Play, Users, Clock, Star, BookOpen, Video, TrendingUp } from 'lucide-react';

interface LiveClass {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  viewers: number;
  duration: string;
  isLive: boolean;
  thumbnail: string;
  category: string;
  rating: number;
}

const liveClasses: LiveClass[] = [
  {
    id: '1',
    title: 'Technical Analysis Masterclass',
    instructor: 'John Smith',
    instructorAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
    viewers: 1247,
    duration: '2h 30m',
    isLive: true,
    thumbnail: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Technical Analysis',
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Options Trading Strategies',
    instructor: 'Sarah Chen',
    instructorAvatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
    viewers: 892,
    duration: '1h 45m',
    isLive: true,
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Options Trading',
    rating: 4.9,
  },
  {
    id: '3',
    title: 'Cryptocurrency Fundamentals',
    instructor: 'Mike Rodriguez',
    instructorAvatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100',
    viewers: 654,
    duration: '3h 15m',
    isLive: false,
    thumbnail: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Cryptocurrency',
    rating: 4.7,
  },
];

export default function StockMarketClass() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Classes' },
    { id: 'technical', label: 'Technical Analysis' },
    { id: 'fundamental', label: 'Fundamental Analysis' },
    { id: 'options', label: 'Options Trading' },
    { id: 'crypto', label: 'Cryptocurrency' },
    { id: 'forex', label: 'Forex Trading' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stock Market Classes</h1>
        <p className="text-gray-600">Learn about business, finance, and market trends</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:border-green-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Live Classes Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            Live Classes
          </h2>
          <button className="text-green-600 font-semibold hover:text-green-700">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveClasses.filter(cls => cls.isLive).map((liveClass) => (
            <div key={liveClass.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={liveClass.thumbnail}
                  alt={liveClass.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                  LIVE
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {liveClass.duration}
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                    {liveClass.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{liveClass.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{liveClass.title}</h3>
                
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={liveClass.instructorAvatar}
                    alt={liveClass.instructor}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-700 font-medium">{liveClass.instructor}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{liveClass.viewers.toLocaleString()} watching</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{liveClass.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recorded Classes Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-green-600" />
            Recorded Classes
          </h2>
          <button className="text-green-600 font-semibold hover:text-green-700">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveClasses.map((recordedClass) => (
            <div key={recordedClass.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={recordedClass.thumbnail}
                  alt={recordedClass.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {recordedClass.duration}
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                    {recordedClass.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{recordedClass.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{recordedClass.title}</h3>
                
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={recordedClass.instructorAvatar}
                    alt={recordedClass.instructor}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-700 font-medium">{recordedClass.instructor}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Video className="w-4 h-4" />
                    <span>Recorded</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{recordedClass.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-green-100">Expert Instructors</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">200+</div>
            <div className="text-green-100">Live Classes</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-green-100">Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">4.8★</div>
            <div className="text-green-100">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}