import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuthContext } from './contexts/AuthContext';
import { signIn as supabaseSignIn, signUp as supabaseSignUp, signOut as supabaseSignOut } from './lib/supabase';
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

function AppContent() {
  const { user, profile, loading } = useAuthContext();
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'signin' | 'signup' | 'app'>('splash');

  useEffect(() => {
    if (!loading) {
      if (user && profile) {
        setCurrentScreen('app');
      } else {
        // Only show splash screen on first load
        const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
        if (!hasSeenSplash) {
          setCurrentScreen('splash');
        } else {
          setCurrentScreen('signin');
        }
      }
    }
  }, [user, profile, loading]);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setCurrentScreen('signin');
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      const { error } = await supabaseSignIn(email, password);
      if (error) {
        alert(error.message);
        return;
      }
      // Auth context will handle the state update
    } catch (error) {
      console.error('Sign in error:', error);
      alert('An error occurred during sign in');
    }
  };

  const handleSignUp = async (userData: {
    email: string;
    password: string;
    username: string;
    display_name: string;
  }) => {
    try {
      const { error } = await supabaseSignUp(userData.email, userData.password, {
        username: userData.username,
        display_name: userData.display_name
      });
      
      if (error) {
        alert(error.message);
        return;
      }
      
      // Auth context will handle the state update
    } catch (error) {
      console.error('Sign up error:', error);
      alert('An error occurred during sign up');
    }
  };

  const handleSignOut = async () => {
    try {
      await supabaseSignOut();
      setCurrentScreen('app');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const switchToSignUp = () => {
    setCurrentScreen('signup');
  };

  const switchToSignIn = () => {
    setCurrentScreen('signin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl font-bold text-white">B</span>
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;