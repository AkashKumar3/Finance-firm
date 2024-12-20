import React from 'react';
import { CreditCard } from 'lucide-react';

interface CalculatorCardProps {
  title: string;
  children: React.ReactNode;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <CreditCard className="h-8 w-8 text-red-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default CalculatorCard;