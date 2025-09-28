import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Layout from './components/Layout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import CreatePost from './pages/CreatePost';
import News from './pages/News';
import Investing from './pages/Investing';
import Profile from './pages/Profile';

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<Articles />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="news" element={<News />} />
          <Route path="investing" element={<Investing />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;