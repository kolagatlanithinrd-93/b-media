import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Shield, 
  AlertTriangle, 
  Type, 
  UserPlus, 
  Star, 
  VolumeX, 
  Eye, 
  Heart, 
  Crown, 
  Smartphone, 
  Lock, 
  Users, 
  Share2, 
  Ban, 
  EyeOff, 
  MessageCircle, 
  AtSign, 
  MessageSquare, 
  Repeat2 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();
  const [accountPrivacy, setAccountPrivacy] = useState('Public');

  const settingsItems = [
    {
      icon: Shield,
      title: 'Restricted',
      value: '0',
      hasChevron: true,
      section: 'main'
    },
    {
      icon: AlertTriangle,
      title: 'Limit interactions',
      value: 'Off',
      hasChevron: true,
      section: 'main'
    },
    {
      icon: Type,
      title: 'Hidden Words',
      hasChevron: true,
      section: 'main'
    },
    {
      icon: UserPlus,
      title: 'Follow and invite friends',
      hasChevron: true,
      section: 'main'
    }
  ];

  const whatYouSeeItems = [
    {
      icon: Star,
      title: 'Favorites',
      value: '0',
      hasChevron: true
    },
    {
      icon: VolumeX,
      title: 'Muted',
      value: '0',
      hasChevron: true
    },
    {
      icon: Eye,
      title: 'Content preferences',
      hasChevron: true
    },
    {
      icon: Heart,
      title: 'Like and share counts',
      hasChevron: true
    },
    {
      icon: Crown,
      title: 'Subscriptions',
      hasChevron: true
    }
  ];

  const privacyItems = [
    {
      icon: Lock,
      title: 'Account privacy',
      value: accountPrivacy,
      hasChevron: true,
      onClick: () => setAccountPrivacy(accountPrivacy === 'Public' ? 'Private' : 'Public')
    },
    {
      icon: Users,
      title: 'Close Friends',
      value: '1',
      hasChevron: true
    },
    {
      icon: Share2,
      title: 'Crossposting',
      hasChevron: true
    },
    {
      icon: Ban,
      title: 'Blocked',
      value: '0',
      hasChevron: true
    },
    {
      icon: EyeOff,
      title: 'Hide story',
      hasChevron: true
    },
    {
      icon: Users,
      title: 'Activity in Friends tab',
      hasChevron: true
    }
  ];

  const interactionItems = [
    {
      icon: MessageCircle,
      title: 'Messages and story replies',
      hasChevron: true
    },
    {
      icon: AtSign,
      title: 'Tags and mentions',
      hasChevron: true
    },
    {
      icon: MessageSquare,
      title: 'Comments',
      hasChevron: true
    },
    {
      icon: Repeat2,
      title: 'Sharing and reuse',
      hasChevron: true
    }
  ];

  const renderSettingsItem = (item: any, index: number) => (
    <button
      key={index}
      onClick={item.onClick}
      className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center space-x-4">
        <item.icon className="w-6 h-6 text-gray-700" />
        <span className="text-gray-900 font-medium">{item.title}</span>
      </div>
      <div className="flex items-center space-x-2">
        {item.value && (
          <span className="text-gray-500 text-sm">{item.value}</span>
        )}
        {item.hasChevron && (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Settings and activity</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Main Settings */}
        <div className="bg-white border-b border-gray-200">
          {settingsItems.map((item, index) => renderSettingsItem(item, index))}
        </div>

        {/* What you see section */}
        <div className="bg-white border-b border-gray-200 mt-8">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-500">What you see</h2>
          </div>
          {whatYouSeeItems.map((item, index) => renderSettingsItem(item, index))}
        </div>

        {/* Privacy section */}
        <div className="bg-white border-b border-gray-200 mt-8">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-500">Who can see your content</h2>
          </div>
          {privacyItems.map((item, index) => renderSettingsItem(item, index))}
        </div>

        {/* Interaction section */}
        <div className="bg-white border-b border-gray-200 mt-8">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-500">How others can interact with you</h2>
          </div>
          {interactionItems.map((item, index) => renderSettingsItem(item, index))}
        </div>

        {/* App and media section */}
        <div className="bg-white mt-8">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-500">How you use B Media</h2>
          </div>
          <button className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Saved</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8l4 4 4-4m6 0l-4 4 4 4" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Archive</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Your activity</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="text-gray-900 font-medium">Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Time management</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Additional privacy section */}
        <div className="bg-white border-b border-gray-200 mt-8">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-500">Who can see your content</h2>
          </div>
          {privacyItems.map((item, index) => renderSettingsItem(item, index))}
        </div>

        {/* Device permissions section */}
        <div className="bg-white mt-8">
          <button className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <Smartphone className="w-6 h-6 text-gray-700" />
              <span className="text-gray-900 font-medium">Device permissions</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}