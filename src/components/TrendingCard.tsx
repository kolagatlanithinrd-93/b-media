import React from 'react';
import { TrendingTopic } from '../types';

interface TrendingCardProps {
  topic: TrendingTopic;
}

export default function TrendingCard({ topic }: TrendingCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg min-w-64 h-32 cursor-pointer group">
      <div className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-90`} />
      <img
        src={topic.image}
        alt={topic.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="relative p-4 h-full flex flex-col justify-between text-white">
        <div>
          <span className="inline-block bg-black bg-opacity-30 px-2 py-1 rounded text-xs mb-2">
            {topic.category}
          </span>
          <h3 className="font-bold text-lg leading-tight">{topic.title}</h3>
          <p className="text-sm opacity-90">{topic.subtitle}</p>
        </div>
      </div>
    </div>
  );
}