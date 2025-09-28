import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

const marketData = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: '$175.84', change: '+2.45%', positive: true },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: '$334.89', change: '+1.23%', positive: true },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$138.21', change: '-0.87%', positive: false },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$145.86', change: '+3.21%', positive: true },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: '$248.50', change: '+5.67%', positive: true },
  { symbol: 'META', name: 'Meta Platforms', price: '$487.23', change: '-1.45%', positive: false },
];

export default function Investing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Investing</h1>
        <p className="text-gray-600">Track your investments and market performance</p>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Portfolio Value</p>
              <p className="text-2xl font-bold text-gray-900">$87,435</p>
              <p className="text-sm text-green-600">+$2,341 (2.76%)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Today's Gain/Loss</p>
              <p className="text-2xl font-bold text-gray-900">+$1,234</p>
              <p className="text-sm text-green-600">+1.43%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Invested</p>
              <p className="text-2xl font-bold text-gray-900">$75,000</p>
              <p className="text-sm text-gray-600">8 positions</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Best Performer</p>
              <p className="text-xl font-bold text-gray-900">TSLA</p>
              <p className="text-sm text-green-600">+5.67%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Watchlist */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">My Watchlist</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {marketData.map((stock) => (
            <div key={stock.symbol} className="p-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <span className="font-bold text-gray-900">{stock.symbol}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{stock.name}</h3>
                    <p className="text-sm text-gray-500">{stock.symbol}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-lg text-gray-900">{stock.price}</p>
                  <div className="flex items-center space-x-1">
                    {stock.positive ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm font-semibold ${
                      stock.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stock.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}