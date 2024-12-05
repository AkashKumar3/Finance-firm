import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';
import { calculateSIP, formatCurrency } from '../../lib/calculators';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [rate, setRate] = useState<number>(12);
  const [time, setTime] = useState<number>(5);

  const totalValue = calculateSIP(monthlyInvestment, rate, time);
  const totalInvestment = monthlyInvestment * time * 12;
  const profit = totalValue - totalInvestment;

  return (
    <CalculatorCard title="SIP Calculator">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Investment</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Expected Return Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time Period (Years)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Investment</p>
              <p className="text-lg font-semibold text-gray-900">{formatCurrency(totalInvestment)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-lg font-semibold text-blue-600">{formatCurrency(totalValue)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Profit</p>
              <p className="text-lg font-semibold text-green-600">{formatCurrency(profit)}</p>
            </div>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default SIPCalculator;