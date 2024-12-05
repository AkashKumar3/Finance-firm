import React from 'react';
import CalculatorCard from './CalculatorCard';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, History, DollarSign, PieChart, Wallet } from 'lucide-react';

const tools = [
  {
    title: 'MF Returns Calculator',
    description: 'Calculate your mutual fund returns with different scenarios',
    icon: Calculator,
    path: '/tools/returns-calculator',
  },
  {
    title: 'MF SIP Calculator',
    description: 'Plan your SIP investments and see the potential returns',
    icon: TrendingUp,
    path: '/tools/sip-calculator',
  },
  {
    title: 'MF Historic NAV',
    description: 'View historical NAV data for any mutual fund scheme',
    icon: History,
    path: '/tools/historic-nav',
  },
  {
    title: 'MF Dividend History',
    description: 'Track dividend payouts for mutual fund schemes',
    icon: DollarSign,
    path: '/tools/dividend-history',
  },
  {
    title: 'MF Scheme Snapshot',
    description: 'Get detailed information about any mutual fund scheme',
    icon: PieChart,
    path: '/tools/scheme-snapshot',
  },
  {
    title: 'Other Financial Tools',
    description: 'Access additional financial planning tools',
    icon: Wallet,
    path: '/tools/financial-tools',
  },
];

const FinancialTools = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Financial Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link key={tool.path} to={tool.path}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">{tool.title}</h2>
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FinancialTools;