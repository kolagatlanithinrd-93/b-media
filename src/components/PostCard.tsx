import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, CheckCircle, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock multiple images for demonstration
  const images = post.image ? [post.image] : [];
  const hasMultipleImages = images.length > 1;

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img
            src={post.author.avatar}
            alt={post.author.displayName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-1">
              <h3 className="font-semibold text-gray-900">{post.author.displayName}</h3>
              {post.author.isVerified && (
                <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
              )}
            </div>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      <p className="text-gray-800 mb-3 leading-relaxed">{post.content}</p>

      {images.length > 0 && (
        <div className="relative mb-4">
          <img
            src={images[currentImageIndex]}
            alt="Post content"
            className="w-full rounded-lg object-cover max-h-96"
          />
          
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          <span className="text-sm">{likes}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">{post.comments}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
          <Share className="w-5 h-5" />
          <span className="text-sm">{post.shares}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500 transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}