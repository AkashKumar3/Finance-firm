import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Understanding Market Volatility',
    excerpt: 'Learn how to navigate through market ups and downs with our comprehensive guide.',
    author: 'John Smith',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3',
    link: '/articles/market-volatility',
  },
  {
    title: 'Investment Strategies for 2024',
    excerpt: 'Discover the top investment strategies that could shape your portfolio this year.',
    author: 'Sarah Johnson',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3',
    link: '/articles/investment-strategies-2024',
  },
  {
    title: 'The Rise of ESG Investing',
    excerpt: 'Why environmental, social, and governance factors matter in modern investing.',
    author: 'Michael Chen',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3',
    link: '/articles/esg-investing',
  },
  {
    title: 'Retirement Planning Essentials',
    excerpt: 'Key strategies for building a secure retirement portfolio.',
    author: 'Emma Davis',
    date: 'March 8, 2024',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3',
    link: '/articles/retirement-planning',
  },
];

const LatestArticles = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Latest Articles</h2>
          <p className="mt-4 text-xl text-gray-600">
            Stay informed with our latest insights and analysis
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <Link
              key={article.title}
              to={article.link}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{article.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  <span>{article.author}</span>
                  <Calendar className="h-4 w-4 ml-4 mr-1" />
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;