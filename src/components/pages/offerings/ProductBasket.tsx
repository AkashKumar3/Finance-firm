import React from 'react';
import { Package, Shield, Briefcase, PiggyBank, Building, LineChart } from 'lucide-react';

const products = [
  {
    title: 'Equity Mutual Funds',
    description: 'Long-term wealth creation through stock market investments',
    icon: <LineChart className="w-12 h-12 text-blue-600" />,
    features: ['Large Cap Funds', 'Mid Cap Funds', 'Small Cap Funds', 'Index Funds']
  },
  {
    title: 'Debt Mutual Funds',
    description: 'Stable returns with lower risk through fixed income securities',
    icon: <PiggyBank className="w-12 h-12 text-green-600" />,
    features: ['Liquid Funds', 'Corporate Bond Funds', 'Government Securities Funds']
  },
  {
    title: 'Insurance Products',
    description: 'Comprehensive protection for life, health, and assets',
    icon: <Shield className="w-12 h-12 text-purple-600" />,
    features: ['Term Life Insurance', 'Health Insurance', 'ULIPs']
  },
  {
    title: 'Portfolio Management',
    description: 'Professional management of your investment portfolio',
    icon: <Briefcase className="w-12 h-12 text-orange-600" />,
    features: ['Discretionary PMS', 'Non-Discretionary PMS', 'Advisory Services']
  },
  {
    title: 'Real Estate Investment',
    description: 'Strategic real estate investment opportunities',
    icon: <Building className="w-12 h-12 text-red-600" />,
    features: ['Commercial Properties', 'REITs', 'Real Estate Funds']
  },
  {
    title: 'Structured Products',
    description: 'Customized investment solutions for specific needs',
    icon: <Package className="w-12 h-12 text-teal-600" />,
    features: ['Market-linked Debentures', 'Fixed Maturity Plans', 'Capital Protection Funds']
  }
];

const ProductBasket = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">Product <span className='text-red-600'>Basket</span></h1>
      <div className="w-24 h-1 bg-gray-200 mx-auto mt-4 mb-8" />
      <p className="text-lg text-gray-600 mb-12">
        Explore our comprehensive range of financial products designed to meet your investment needs
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">{product.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBasket;