import React from 'react';
import CalculatorCard from './CalculatorCard';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, History, DollarSign, PieChart, Wallet } from 'lucide-react';

const tools = [
  {
    title: 'MF Lumpsum Calculator',
    description: 'Calculate your mutual fund returns with different scenarios',
    icon: Calculator,
    path: '/Finance-firm/tools/returns-calculator',
  },
  {
    title: 'MF SIP Calculator',
    description: 'Plan your SIP investments and see the potential returns',
    icon: TrendingUp,
    path: '/Finance-firm/tools/sip-calculator',
  },
  {
    title: 'MF EMI Calculator',
    description:  'Calculate monthly EMI for loans based on amount, interest rate, and tenure.',
    icon: History,
    path: '/Finance-firm/tools/emi-calculator',
  },
  {
    title: 'MF SWP Calculator',
    description: 'Calculate monthly withdrawals from an investment based on principal and interest',
    icon: DollarSign,
    path: '/Finance-firm/tools/swp-calculator',
  },
  {
    title: 'MF Future Value Calculator',
    description: 'Calculate the future value of an investment based on principal and interest rate.',
    icon: PieChart,
    path: '/Finance-firm/tools/future-value-calculator',
  },
  {
    title: 'MF Present Value Calcultor',
    description: 'Calculate the present value of a future sum based on interest rate and time period.',
    icon: Wallet,
    path: '/Finance-firm/tools/present-value-calculator',
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