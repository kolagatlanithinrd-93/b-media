import React, { useState } from 'react';
import { Search, FileText, Video, Play, Image, Mic, Camera } from 'lucide-react';
import NavigationButtons from '../components/NavigationButtons';
import { currentUser } from '../data/mockData';

export default function ContentCreation() {
  const [selectedType, setSelectedType] = useState('post');
  const [selectedCategory, setSelectedCategory] = useState('business');
  const [content, setContent] = useState('');
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);

  const contentTypes = [
    { id: 'post', label: 'Post', icon: FileText, color: 'bg-blue-500' },
    { id: 'video', label: 'Video', icon: Video, color: 'bg-red-500' },
    { id: 'shorts', label: 'Shorts', icon: Play, color: 'bg-purple-500' },
  ];

  const categories = [
    { id: 'business', label: 'Business News', color: 'bg-green-500' },
    { id: 'stock', label: 'Stock Market', color: 'bg-blue-500' },
    { id: 'education', label: 'Education', color: 'bg-yellow-500' },
    { id: 'technology', label: 'Technology', color: 'bg-purple-500' },
    { id: 'finance', label: 'Finance', color: 'bg-indigo-500' },
    { id: 'crypto', label: 'Cryptocurrency', color: 'bg-orange-500' },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (mediaFiles.length + files.length <= 5) {
      setMediaFiles([...mediaFiles, ...files]);
    } else {
      alert('You can upload maximum 5 files');
    }
  };

  const removeFile = (index: number) => {
    setMediaFiles(mediaFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Content created:', { selectedType, selectedCategory, content, mediaFiles });
    // Reset form
    setContent('');
    setMediaFiles([]);
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
              placeholder="Search for inspiration..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Content</h1>
          <p className="text-gray-600">Share your insights with the community</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            {/* Content Type Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contentTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                        selectedType === type.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900">{type.label}</h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-3 rounded-lg font-semibold transition-all duration-200 ${
                      selectedCategory === category.id
                        ? `${category.color} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Input */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.displayName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{currentUser.displayName}</h4>
                  <p className="text-sm text-gray-500">@{currentUser.username}</p>
                </div>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind? Share your insights..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                rows={6}
              />
            </div>

            {/* Media Upload */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Media (Up to 5 files)</h3>
              
              {/* Upload Buttons */}
              <div className="flex flex-wrap gap-3 mb-4">
                <label className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors">
                  <Image className="w-5 h-5" />
                  <span>Photos</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                
                <label className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg cursor-pointer hover:bg-red-200 transition-colors">
                  <Video className="w-5 h-5" />
                  <span>Videos</span>
                  <input
                    type="file"
                    multiple
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                
                <button
                  type="button"
                  className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                >
                  <Camera className="w-5 h-5" />
                  <span>Camera</span>
                </button>
                
                <button
                  type="button"
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                >
                  <Mic className="w-5 h-5" />
                  <span>Audio</span>
                </button>
              </div>

              {/* Preview uploaded files */}
              {mediaFiles.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {mediaFiles.map((file, index) => (
                    <div key={index} className="relative">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        {file.type.startsWith('image/') ? (
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <Video className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!content.trim()}
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Share Content
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}