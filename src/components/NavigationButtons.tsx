import React from 'react';
import { FileText, TrendingUp, Users, Video, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavigationButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { id: 'articles', label: 'All Articles', icon: FileText, path: '/articles' },
    { id: 'business-news', label: 'Business News', icon: TrendingUp, path: '/business-news' },
    { id: 'content-creation', label: 'Content Creation', icon: Users, path: '/create' },
    { id: 'reels', label: 'Reels', icon: Video, path: '/reels' },
    { id: 'stock-market-class', label: 'Stock Market Class', icon: BookOpen, path: '/stock-market-class' },
  ];

  const isActive = (path: string) => {
    if (path === '/articles') {
      return location.pathname === '/' || location.pathname === '/articles';
    }
    return location.pathname === path;
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex space-x-2 overflow-x-auto">
        {buttons.map((button) => {
          const Icon = button.icon;
          const active = isActive(button.path);
          
          return (
            <button
              key={button.id}
              onClick={() => navigate(button.path)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all duration-200 ${
                active
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{button.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}