import React from 'react';
import { Calendar, MapPin, Link as LinkIcon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { currentUser, posts } from '../data/mockData';

export default function Profile() {
  const navigate = useNavigate();
  const userPosts = posts.filter(post => post.author.id === currentUser.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header with Back Arrow */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate('/')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
      </div>

      {/* Cover Photo */}
      <div className="relative h-48 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mb-6 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Cover"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Profile Info */}
      <div className="relative -mt-20 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={currentUser.avatar}
              alt={currentUser.displayName}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {currentUser.displayName}
              </h1>
              <p className="text-gray-600 mb-2">@{currentUser.username}</p>
              <p className="text-gray-700 mb-3">{currentUser.jobTitle} at {currentUser.company}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined March 2020</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>New York, NY</span>
                </div>
              </div>

              <p className="text-gray-800 mb-4 whitespace-pre-line">{currentUser.bio}</p>

              <div className="flex space-x-6 mb-4">
                <div>
                  <span className="font-bold text-gray-900">{currentUser.following}</span>
                  <span className="text-gray-600 ml-1">Following</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">{currentUser.followers.toLocaleString()}</span>
                  <span className="text-gray-600 ml-1">Followers</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentUser.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Edit Profile
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button className="border-b-2 border-blue-500 text-blue-600 py-2 px-1 font-semibold">
            Posts ({currentUser.posts})
          </button>
          <button className="text-gray-500 hover:text-gray-700 py-2 px-1">
            Reels
          </button>
          <button className="text-gray-500 hover:text-gray-700 py-2 px-1">
            Tagged
          </button>
        </nav>
      </div>

      {/* Posts */}
      <div>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts yet</p>
          </div>
        )}
      </div>
    </div>
  );
}