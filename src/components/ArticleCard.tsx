import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 mb-3">
        <img
          src={article.author.avatar}
          alt={article.author.displayName}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-1">
            <h3 className="font-semibold text-gray-900">{article.author.displayName}</h3>
            {article.author.isVerified && (
              <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
            )}
          </div>
          <p className="text-sm text-gray-500">{article.timestamp}</p>
        </div>
      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
        {article.title}
      </h2>

      <p className="text-gray-600 mb-3 leading-relaxed">{article.excerpt}</p>

      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-lg mb-4 object-cover max-h-48"
        />
      )}

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{article.readTime}</span>
        </div>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
          {article.category}
        </span>
      </div>
    </div>
  );
}