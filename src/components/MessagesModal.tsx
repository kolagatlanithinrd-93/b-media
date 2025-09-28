import React, { useState } from 'react';
import { X, Search, Phone, Video, Image, Smile } from 'lucide-react';
import { currentUser } from '../data/mockData';

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

interface Conversation {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    id: '1',
    user: {
      id: '2',
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: true
    },
    lastMessage: "That's awesome! The interface looks...",
    timestamp: '2:33 PM',
    unreadCount: 2,
    messages: [
      {
        id: '1',
        senderId: '2',
        content: 'Hey! How are you doing?',
        timestamp: '2:30 PM',
        isRead: true
      },
      {
        id: '2',
        senderId: '1',
        content: "I'm doing great! Just checking out this new social platform.",
        timestamp: '2:32 PM',
        isRead: true
      },
      {
        id: '3',
        senderId: '2',
        content: "That's awesome! The interface looks really clean and modern.",
        timestamp: '2:33 PM',
        isRead: false
      }
    ]
  },
  {
    id: '2',
    user: {
      id: '3',
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: true
    },
    lastMessage: 'Thanks for sharing that article!',
    timestamp: '1:45 PM',
    unreadCount: 0,
    messages: [
      {
        id: '1',
        senderId: '3',
        content: 'Thanks for sharing that article!',
        timestamp: '1:45 PM',
        isRead: true
      }
    ]
  },
  {
    id: '3',
    user: {
      id: '4',
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: false
    },
    lastMessage: 'See you at the meeting tomorrow!',
    timestamp: '12:30 PM',
    unreadCount: 1,
    messages: [
      {
        id: '1',
        senderId: '4',
        content: 'See you at the meeting tomorrow!',
        timestamp: '12:30 PM',
        isRead: false
      }
    ]
  },
  {
    id: '4',
    user: {
      id: '5',
      name: 'David Rodriguez',
      avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: true
    },
    lastMessage: 'Great presentation today!',
    timestamp: '11:15 AM',
    unreadCount: 0,
    messages: [
      {
        id: '1',
        senderId: '5',
        content: 'Great presentation today!',
        timestamp: '11:15 AM',
        isRead: true
      }
    ]
  },
  {
    id: '5',
    user: {
      id: '6',
      name: 'Lisa Park',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      isOnline: false
    },
    lastMessage: 'Can you send me the report?',
    timestamp: 'Yesterday',
    unreadCount: 3,
    messages: [
      {
        id: '1',
        senderId: '6',
        content: 'Can you send me the report?',
        timestamp: 'Yesterday',
        isRead: false
      }
    ]
  }
];

interface MessagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MessagesModal({ isOpen, onClose }: MessagesModalProps) {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    
    // Add message logic here
    setNewMessage('');
  };

  const handleBackToList = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-[600px] flex flex-col">
        {!selectedConversation ? (
          // Messages List View
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold">Messages</h2>
                <button onClick={onClose} className="text-white hover:text-gray-200">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div>
                  <span className="font-semibold">1247</span>
                  <div>followers</div>
                </div>
                <div>
                  <span className="font-semibold">892</span>
                  <div>following</div>
                </div>
                <div>
                  <span className="font-semibold">156</span>
                  <div>posts</div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search messages"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={conversation.user.avatar}
                      alt={conversation.user.name}
                      className="w-12 h-12 rounded-full"
                    />
                    {conversation.user.isOnline && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{conversation.user.name}</h3>
                      <span className="text-sm text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unreadCount > 0 && (
                    <div className="ml-2 bg-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                      {conversation.unreadCount}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Talk with Us Button */}
            <div className="p-4 border-t border-gray-200">
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💬</span>
                </div>
                <span>Talk with Us</span>
              </button>
            </div>
          </>
        ) : (
          // Individual Chat View
          <>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button onClick={handleBackToList} className="text-white hover:text-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <img
                    src={selectedConversation.user.avatar}
                    alt={selectedConversation.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{selectedConversation.user.name}</h3>
                    {selectedConversation.user.isOnline && (
                      <p className="text-sm text-green-200 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                        Active now
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 cursor-pointer hover:text-gray-200" />
                  <Video className="w-6 h-6 cursor-pointer hover:text-gray-200" />
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === currentUser.id ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-end space-x-2 max-w-xs">
                    {message.senderId !== currentUser.id && (
                      <img
                        src={selectedConversation.user.avatar}
                        alt={selectedConversation.user.name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div>
                      <div
                        className={`px-4 py-2 rounded-lg ${
                          message.senderId === currentUser.id
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p>{message.content}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Image className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                </div>
                <Smile className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
              
              {/* Talk with Us Button */}
              <div className="mt-3">
                <button className="w-full bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">💬</span>
                  </div>
                  <span>Talk with Us</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}