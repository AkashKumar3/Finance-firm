import React from 'react';
import { Play, Clock, User } from 'lucide-react';

const interviews = [
  {
    title: 'Market Outlook 2024',
    manager: 'John Anderson',
    company: 'Global Asset Management',
    duration: '45 mins',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340',
    description: 'Insights on market trends and investment opportunities in 2024'
  },
  {
    title: 'ESG Investment Strategy',
    manager: 'Emma Williams',
    company: 'Sustainable Investments Ltd',
    duration: '30 mins',
    thumbnail: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=2340',
    description: 'Discussion on sustainable investing and ESG integration'
  },
  {
    title: 'Fixed Income Opportunities',
    manager: 'Michael Chang',
    company: 'Bond Partners',
    duration: '35 mins',
    thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2340',
    description: 'Analysis of fixed income markets and yield opportunities'
  }
];

const Interviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">Fund Manager <span className='text-red-600'>Interviews</span></h1>
      <div className="w-24 h-1 bg-gray-200 mx-auto mt-4 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interviews.map((interview, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src={interview.thumbnail} 
                alt={interview.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <Play className="h-12 w-12 text-white" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{interview.title}</h2>
              <p className="text-gray-600 mb-4">{interview.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{interview.manager}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{interview.duration}</span>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">{interview.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interviews;