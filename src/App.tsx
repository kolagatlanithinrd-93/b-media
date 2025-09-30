import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Layout from './components/Layout';
import Articles from './pages/Articles';
import BusinessNews from './pages/BusinessNews';
import ContentCreation from './pages/ContentCreation';
import Reels from './pages/Reels';
import ReelsDiscovery from './pages/ReelsDiscovery';
import StockMarketClass from './pages/StockMarketClass';
import Investing from './pages/Investing';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'signin' | 'signup' | 'app'>('splash');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      setCurrentScreen('app');
    }
  }, []);

  const handleSplashComplete = () => {
    setCurrentScreen('signin');
  };

  const handleSignIn = () => {
    // Simulate authentication
    localStorage.setItem('authToken', 'dummy-token');
    setIsAuthenticated(true);
    setCurrentScreen('app');
  };

  const handleSignUp = () => {
    // Simulate registration and authentication
    localStorage.setItem('authToken', 'dummy-token');
    setIsAuthenticated(true);
    setCurrentScreen('app');
  };

  const switchToSignUp = () => {
    setCurrentScreen('signup');
  };

  const switchToSignIn = () => {
    setCurrentScreen('signin');
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setCurrentScreen('signin');
  };

  if (currentScreen === 'splash') {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (currentScreen === 'signin') {
    return <SignIn onSignIn={handleSignIn} onSwitchToSignUp={switchToSignUp} />;
  }

  if (currentScreen === 'signup') {
    return <SignUp onSignUp={handleSignUp} onSwitchToSignIn={switchToSignIn} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout onSignOut={handleSignOut} />}>
          <Route index element={<Articles />} />
          <Route path="articles" element={<Articles />} />
          <Route path="business-news" element={<BusinessNews />} />
          <Route path="create" element={<ContentCreation />} />
          <Route path="reels" element={<ReelsDiscovery />} />
          <Route path="reels/:id" element={<Reels />} />
          <Route path="stock-market-class" element={<StockMarketClass />} />
          <Route path="investing" element={<Investing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;