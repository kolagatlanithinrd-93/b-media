import React from 'react';
import { CheckCircle, MapPin } from 'lucide-react';
import { User } from '../types';

interface ProfileCardProps {
  user: User;
  showFullProfile?: boolean;
}

export default function ProfileCard({ user, showFullProfile = false }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt={user.displayName}
          className="w-20 h-20 rounded-full mb-4"
        />
        
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-1 mb-1">
            <h2 className="text-xl font-bold text-gray-900">{user.displayName}</h2>
            {user.isVerified && (
              <CheckCircle className="w-5 h-5 text-blue-500 fill-current" />
            )}
          </div>
          <p className="text-gray-600 text-sm">@{user.username}</p>
        </div>

        <div className="flex space-x-8 mb-4">
          <div className="text-center">
            <p className="font-bold text-lg text-gray-900">{user.posts}</p>
            <p className="text-sm text-gray-600">posts</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg text-gray-900">{user.followers.toLocaleString()}</p>
            <p className="text-sm text-gray-600">followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg text-gray-900">{user.following}</p>
            <p className="text-sm text-gray-600">following</p>
          </div>
        </div>

        <div className="flex space-x-3 mb-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Follow
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Message
          </button>
        </div>

        {showFullProfile && (
          <>
            <div className="text-center mb-4">
              <p className="text-gray-800 whitespace-pre-line">{user.bio}</p>
            </div>

            <div className="w-full">
              <div className="flex flex-wrap gap-2 justify-center">
                {user.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}