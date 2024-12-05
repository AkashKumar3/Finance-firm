import React from 'react';
import { Users, Target, BarChart2, FileText, HeartHandshake, Presentation } from 'lucide-react';

const services = [
  {
    title: 'Financial Planning',
    description: 'Comprehensive financial planning tailored to your goals and risk appetite',
    icon: <Target className="w-12 h-12 text-blue-600" />,
    features: ['Goal-based planning', 'Risk assessment', 'Asset allocation']
  },
  {
    title: 'Portfolio Review',
    description: 'Regular portfolio monitoring and rebalancing services',
    icon: <BarChart2 className="w-12 h-12 text-green-600" />,
    features: ['Performance analysis', 'Risk monitoring', 'Rebalancing suggestions']
  },
  {
    title: 'Tax Planning',
    description: 'Strategic tax planning and investment advisory',
    icon: <FileText className="w-12 h-12 text-purple-600" />,
    features: ['Tax-saving investments', 'LTCG planning', 'Tax harvesting']
  },
  {
    title: 'Retirement Planning',
    description: 'Secure your future with our retirement planning services',
    icon: <HeartHandshake className="w-12 h-12 text-orange-600" />,
    features: ['Pension planning', 'Retirement corpus', 'Regular income plans']
  },
  {
    title: 'Wealth Management',
    description: 'Comprehensive wealth management for high net worth individuals',
    icon: <Users className="w-12 h-12 text-red-600" />,
    features: ['Estate planning', 'Succession planning', 'Family office services']
  },
  {
    title: 'Investment Education',
    description: 'Regular workshops and seminars on financial markets',
    icon: <Presentation className="w-12 h-12 text-teal-600" />,
    features: ['Market insights', 'Investment workshops', 'One-on-one sessions']
  }
];

const ClientServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Client Services</h1>
      <p className="text-lg text-gray-600 mb-12">
        We offer a wide range of professional services to help you achieve your financial goals
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
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

export default ClientServices;