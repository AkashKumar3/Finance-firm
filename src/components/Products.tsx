import React from 'react';
import { Landmark, TrendingUp, Wallet, Building2, Home, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Mutual Funds',
    icon: TrendingUp,
    description: 'Diversified investment solutions for long-term growth',
    link: '/Finance-firm/products/mutual-funds',
  },
  {
    title: 'Capital Market',
    icon: Landmark,
    description: 'Expert guidance in stock market investments',
    link: '/Finance-firm/products/capital-market',
  },
  {
    title: 'Fixed Income',
    icon: Wallet,
    description: 'Stable returns with fixed income securities',
    link: '/Finance-firm/products/fixed-income',
  },
  {
    title: 'PMS',
    icon: Building2,
    description: 'Professional portfolio management services',
    link: '/Finance-firm/products/pms',
  },
  {
    title: 'Real Estate',
    icon: Home,
    description: 'Strategic real estate investment opportunities',
    link: '/Finance-firm/products/real-estate',
  },
  {
    title: 'Insurance',
    icon: Shield,
    description: 'Comprehensive insurance solutions',
    link: '/Finance-firm/products/insurance',
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our <span className='text-red-600'>Products</span> </h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mt-4" />
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive financial solutions tailored to your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.title}
                to={product.link}
                className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-md mb-4">
                  <Icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;