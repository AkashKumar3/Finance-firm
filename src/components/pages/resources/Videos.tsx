import React from 'react';
import { Play, Clock, ThumbsUp } from 'lucide-react';

const videos = [
  {
    title: 'Understanding Mutual Funds With Rohan',
    duration: '15:30',
    views: '1.2K',
    likes: '500',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    description: 'A comprehensive guide to mutual fund investments'
  },
  {
    title: 'Technical Analysis Basics',
    duration: '12:45',
    views: '980',
    likes: '186',
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2340',
    description: 'Learn the fundamentals of technical analysis'
  },
  {
    title: 'Portfolio Diversification',
    duration: '18:20',
    views: '1.5K',
    likes: '320',
    thumbnail: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=2340',
    description: 'How to build a diversified investment portfolio'
  }
];

const Videos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Video Clips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <Play className="h-12 w-12 text-white" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{video.title}</h2>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{video.likes}</span>
                  </div>
                </div>
                <span>{video.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;