import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-4xl font-bold text-green-600">B</span>
        </div>
      </div>

      {/* Brand Name */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-light text-white tracking-wider mb-2">BUSS MEDIA</h1>
        <p className="text-green-100 text-sm tracking-wide">CONNECTING TO SIGN UP...</p>
      </div>

      {/* Loading Dots */}
      <div className="flex space-x-2 mb-16">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>

      {/* Progress Text */}
      <div className="text-center mb-8">
        <p className="text-green-100 text-sm">Redirecting to Sign Up in 5 seconds</p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 flex items-center space-x-2">
        <span className="text-green-100 text-sm">POWERED BY</span>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">S</span>
        </div>
        <span className="text-green-100 text-sm font-light">SAL</span>
      </div>
    </div>
  );
}