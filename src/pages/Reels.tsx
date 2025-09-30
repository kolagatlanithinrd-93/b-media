import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreVertical, Play, Pause, Volume2, VolumeX, Bookmark } from 'lucide-react';

interface Reel {
  id: string;
  user: {
    username: string;
    avatar: string;
    isVerified: boolean;
  };
  description: string;
  video: string;
  thumbnail: string;
  likes: number;
  comments: number;
  shares: number;
  views: string;
  isLiked: boolean;
  location?: string;
}

const reelsData: Reel[] = [
  {
    id: '1',
    user: {
      username: 'hydraa_telangan...',
      avatar: 'https://images.pexels.com/photos/3777598/pexels-photo-3777598.jpeg?auto=compress&cs=tinysrgb&w=50',
      isVerified: true,
    },
    description: 'AMBERPET BATHUKAMMA KUNTA...',
    video: 'https://example.com/video1.mp4',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    likes: 5700,
    comments: 46,
    shares: 153,
    views: '7,602',
    isLiked: false,
    location: '10sh Narayanan, R',
  },
  {
    id: '2',
    user: {
      username: 'business_expert',
      avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=50',
      isVerified: true,
    },
    description: 'Market Analysis: Tech Stocks Rally',
    video: 'https://example.com/video2.mp4',
    thumbnail: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400',
    likes: 3200,
    comments: 89,
    shares: 245,
    views: '12,450',
    isLiked: true,
  },
];

export default function Reels() {
  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likedReels, setLikedReels] = useState<Set<string>>(new Set(['2']));

  const handleLike = (reelId: string) => {
    const newLikedReels = new Set(likedReels);
    if (newLikedReels.has(reelId)) {
      newLikedReels.delete(reelId);
    } else {
      newLikedReels.add(reelId);
    }
    setLikedReels(newLikedReels);
  };

  const reel = reelsData[currentReel];

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4">
        <div className="flex items-center space-x-6">
          <button className="text-white font-semibold text-lg">Reels</button>
          <button className="text-white/70 font-semibold text-lg">Friends</button>
        </div>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://images.pexels.com/photos/${3777598 + i}/pexels-photo-${3777598 + i}.jpeg?auto=compress&cs=tinysrgb&w=40`}
              alt={`Friend ${i}`}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
      </div>

      {/* Main Video Area */}
      <div className="relative h-full w-full">
        {/* Video Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${reel.thumbnail})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Play/Pause Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
          {/* Like */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handleLike(reel.id)}
              className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center"
            >
              <Heart 
                className={`w-7 h-7 ${
                  likedReels.has(reel.id) ? 'text-red-500 fill-red-500' : 'text-white'
                }`} 
              />
            </button>
            <span className="text-white text-sm font-semibold mt-1">
              {reel.likes + (likedReels.has(reel.id) && !reel.isLiked ? 1 : 0)}
            </span>
          </div>

          {/* Comment */}
          <div className="flex flex-col items-center">
            <button className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-white" />
            </button>
            <span className="text-white text-sm font-semibold mt-1">{reel.comments}</span>
          </div>

          {/* Share */}
          <div className="flex flex-col items-center">
            <button className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
              <Share className="w-7 h-7 text-white" />
            </button>
            <span className="text-white text-sm font-semibold mt-1">{reel.shares}</span>
          </div>

          {/* Save */}
          <div className="flex flex-col items-center">
            <button className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
              <Bookmark className="w-7 h-7 text-white" />
            </button>
          </div>

          {/* More */}
          <button className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
            <MoreVertical className="w-7 h-7 text-white" />
          </button>

          {/* Views */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs font-semibold mt-1">{reel.views}</span>
          </div>

          {/* Profile Picture */}
          <div className="relative">
            <img
              src={reel.user.avatar}
              alt={reel.user.username}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>
        </div>

        {/* Bottom User Info */}
        <div className="absolute bottom-4 left-4 right-20">
          <div className="flex items-center space-x-3 mb-3">
            <img
              src={reel.user.avatar}
              alt={reel.user.username}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold">{reel.user.username}</span>
              {reel.user.isVerified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
              <button className="bg-transparent border border-white text-white px-4 py-1 rounded-full text-sm font-semibold">
                Follow
              </button>
            </div>
          </div>
          
          {reel.location && (
            <div className="flex items-center space-x-1 mb-2">
              <span className="text-white/80 text-sm">📍 {reel.location}</span>
            </div>
          )}
          
          <p className="text-white text-sm leading-relaxed">
            {reel.description}
          </p>
        </div>

        {/* Volume Control */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-20 right-4 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white" />
          ) : (
            <Volume2 className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {reelsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReel(index)}
            className={`w-1 h-8 rounded-full transition-all ${
              index === currentReel ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}