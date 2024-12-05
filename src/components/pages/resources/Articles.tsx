import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Understanding Market Volatility',
    excerpt: 'Learn how to navigate through market ups and downs with our comprehensive guide.',
    author: 'John Smith',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2340',
    category: 'Market Analysis'
  },
  {
    title: 'Investment Strategies for 2024',
    excerpt: 'Discover the top investment strategies that could shape your portfolio this year.',
    author: 'Sarah Johnson',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    category: 'Investment'
  },
  {
    title: 'The Rise of ESG Investing',
    excerpt: 'Why environmental, social, and governance factors matter in modern investing.',
    author: 'Michael Chen',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=2340',
    category: 'Sustainable Investing'
  }
];

const Articles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
              <h2 className="text-xl font-bold mt-2 mb-4">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{article.author}</span>
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;