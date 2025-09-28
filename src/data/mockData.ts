import { User, Post, Article, TrendingTopic } from '../types';

export const currentUser: User = {
  id: '1',
  username: 'johnsmith_analyst',
  displayName: 'John Smith',
  avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
  isVerified: true,
  bio: '📊 Business Analyst | 🏛️ Market Insights\n📈 Helping you navigate the financial world\n🎯 Data-driven investment strategies',
  jobTitle: 'Senior Business Analyst',
  company: 'Market Insights Inc.',
  followers: 2845,
  following: 892,
  posts: 127,
  categories: ['Market Analysis', 'Tech Trends', 'Education', 'Business']
};

export const users: User[] = [
  currentUser,
  {
    id: '2',
    username: 'articlan',
    displayName: 'Articlan',
    avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
    isVerified: true,
    bio: 'Market Research Specialist | Tech Industry Focus',
    jobTitle: 'Market Research Analyst',
    company: 'TechVision Analytics',
    followers: 1234,
    following: 567,
    posts: 89,
    categories: ['Market Analysis', 'Tech Trends']
  },
  {
    id: '3',
    username: 'sarah_chen',
    displayName: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    isVerified: false,
    bio: 'ESG Investment Strategist | Sustainable Finance Expert',
    jobTitle: 'ESG Investment Manager',
    company: 'Green Capital Partners',
    followers: 892,
    following: 445,
    posts: 76,
    categories: ['ESG', 'Sustainable Finance']
  },
  {
    id: '4',
    username: 'business_insider',
    displayName: 'Business Insider',
    avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150',
    isVerified: true,
    bio: 'Breaking Business News | Industry Analysis',
    jobTitle: 'Business News',
    company: 'Business Insider',
    followers: 15678,
    following: 234,
    posts: 2456,
    categories: ['Business News', 'Industry Analysis']
  }
];

export const posts: Post[] = [
  {
    id: '1',
    author: users[1],
    content: 'Market analysis shows strong growth potential in tech sector. Key indicators suggest bullish trend continuing through Q4.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '2h',
    likes: 1247,
    comments: 89,
    shares: 156,
    isLiked: false,
    category: 'Market Analysis'
  },
  {
    id: '2',
    author: users[3],
    content: 'Breaking: Major tech companies announce new AI partnership. This could reshape the industry landscape significantly.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '4h',
    likes: 2156,
    comments: 234,
    shares: 445,
    isLiked: true,
    category: 'Tech News'
  },
  {
    id: '3',
    author: users[0],
    content: 'Weekly market recap: S&P 500 gains 2.3%, tech stocks lead the rally. Detailed analysis in our latest report.',
    timestamp: '1d',
    likes: 1567,
    comments: 145,
    shares: 289,
    isLiked: false,
    category: 'Market Analysis'
  },
  {
    id: '4',
    author: users[2],
    content: 'Excited to share insights from today\'s fintech conference. The innovation in digital payments is remarkable!',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '2d',
    likes: 734,
    comments: 52,
    shares: 98,
    isLiked: true,
    category: 'Fintech'
  }
];

export const articles: Article[] = [
  {
    id: '1',
    author: users[2],
    title: 'Sustainable Investing Strategies: The Future of Finance is Green',
    excerpt: 'Just published my latest article on sustainable investing strategies. The future of finance is green! 🌱',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '6h',
    readTime: '5 min read',
    category: 'ESG'
  },
  {
    id: '2',
    author: users[1],
    title: 'Tech Sector Analysis: Q4 Growth Projections',
    excerpt: 'Comprehensive analysis of tech sector performance and growth projections for the remainder of the year.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    timestamp: '1d',
    readTime: '8 min read',
    category: 'Market Analysis'
  },
  {
    id: '3',
    author: users[0],
    title: 'Remote Work: 2024 Trends That Matter',
    excerpt: 'How remote work continues to reshape the business landscape in 2024.',
    timestamp: '2d',
    readTime: '6 min read',
    category: 'Business Trends'
  }
];

export const trendingTopics: TrendingTopic[] = [
  {
    id: '1',
    title: 'Remote Work: 2024 Trends',
    subtitle: 'That Shape the Future',
    image: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Business',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '2',
    title: 'Crypto Market Surges',
    subtitle: 'Bitcoin leads the rally',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Stock Market',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: '3',
    title: 'AI Stocks Rally 5% After AI',
    subtitle: 'Rally gains momentum',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'AI/Tech',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: '4',
    title: 'Sustainable Energy Investment',
    subtitle: 'Green tech leading Q4 gains',
    image: 'https://images.pexels.com/photos/9875406/pexels-photo-9875406.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Business News',
    color: 'from-blue-500 to-green-500'
  }
];