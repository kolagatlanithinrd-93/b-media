import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

interface LayoutProps {
  onSignOut: () => void;
}

export default function Layout({ onSignOut }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSignOut={onSignOut} />
      <main className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}