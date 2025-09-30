import React from 'react';
import { Search, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NavigationButtons from '../components/NavigationButtons';

const reelsData = [
  {
    id: '1',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'GOOGLE is the ONLY Company',
    views: '1.2M',
  },
  {
    id: '2',
    thumbnail: 'https://images.pexels.com/photos/3777598/pexels-photo-3777598.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'This Indian Man is Competing With Chat GPT',
    views: '890K',
  },
  {
    id: '3',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Entrepreneurs Story',
    views: '2.1M',
  },
  {
    id: '4',
    thumbnail: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'THE BEST COMBO',
    views: '756K',
  },
  {
    id: '5',
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'J.P.Morgan',
    views: '1.5M',
  },
  {
    id: '6',
    thumbnail: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Business Success Story',
    views: '934K',
  },
  {
    id: '7',
    thumbnail: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Market Analysis',
    views: '1.8M',
  },
  {
    id: '8',
    thumbnail: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Sea of Devotion',
    views: '2.3M',
  },
  {
    id: '9',
    thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Tech Innovation',
    views: '1.1M',
  },
  {
    id: '10',
    thumbnail: 'https://images.pexels.com/photos/9875406/pexels-photo-9875406.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Financial Freedom',
    views: '678K',
  },
  {
    id: '11',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Investment Tips',
    views: '1.4M',
  },
  {
    id: '12',
    thumbnail: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Business Growth',
    views: '892K',
  },
];

export default function ReelsDiscovery() {
  const navigate = useNavigate();

  const handleReelClick = (reelId: string) => {
    navigate(`/reels/${reelId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search with Meta AI"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />

      {/* Reels Grid */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {reelsData.map((reel) => (
            <div
              key={reel.id}
              onClick={() => handleReelClick(reel.id)}
              className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-gray-800 ml-1" />
                </div>
              </div>

              {/* Play Icon */}
              <div className="absolute top-3 right-3">
                <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
              </div>

              {/* Title and Views */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2">
                  {reel.title}
                </h3>
                <p className="text-white/80 text-xs">{reel.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}