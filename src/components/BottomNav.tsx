import React from 'react';
import { Home, FileText, Plus, TrendingUp, Video } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const navItems = [
  { icon: Home, label: 'Articles', path: '/' },
  { icon: FileText, label: 'Articles', path: '/articles' },
  { icon: Plus, label: 'Create', path: '/create' },
  { icon: TrendingUp, label: 'Business', path: '/business-news' },
  { icon: Video, label: 'Reels', path: '/reels' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-green-500 text-white px-2">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={clsx(
              'flex flex-col items-center py-2 px-3 rounded-lg transition-colors',
              location.pathname === path
                ? 'bg-green-600 text-white'
                : 'text-green-100 hover:text-white hover:bg-green-600'
            )}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
      
      <div className="text-center py-2 border-t border-green-400">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-sm">Talk with Us</span>
        </div>
      </div>
    </nav>
  );
}