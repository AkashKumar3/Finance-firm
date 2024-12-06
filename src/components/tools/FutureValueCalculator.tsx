import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';
import { formatCurrency } from '../../lib/calculators';

const FutureValueCalculator = () => {
  const [principal, setPrincipal] = useState<number>(50000);  // Default initial investment
  const [monthlyContribution, setMonthlyContribution] = useState<number>(10000);  // Default monthly contribution
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(8);  // Default annual interest rate
  const [investmentDuration, setInvestmentDuration] = useState<number>(10);  // Default investment duration (in years)

  // Convert annual interest rate to monthly interest rate (in decimal)
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const totalMonths = investmentDuration * 12;

  // Future Value calculation
  const futureValue = (principal * Math.pow(1 + monthlyInterestRate, totalMonths)) +
    (monthlyContribution * ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate));

  return (
    <CalculatorCard title="Future Value Calculator">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Initial Investment (Principal)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Contribution</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Annual Interest Rate (%)</label>
          <input
            type="number"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Investment Duration (Years)</label>
          <input
            type="number"
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Future Value</p>
              <p className="text-lg font-semibold text-blue-600">{formatCurrency(futureValue)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Investment</p>
              <p className="text-lg font-semibold text-gray-900">{formatCurrency(principal + (monthlyContribution * investmentDuration * 12))}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Earnings</p>
              <p className="text-lg font-semibold text-green-600">{formatCurrency(futureValue - (principal + (monthlyContribution * investmentDuration * 12)))}</p>
            </div>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default FutureValueCalculator;
