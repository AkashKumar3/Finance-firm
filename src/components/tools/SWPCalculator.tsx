import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';
import { formatCurrency } from '../../lib/calculators';

const SWPCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(500000);  // Default initial investment
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(8);  // Default annual interest rate
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState<number>(5000);  // Default monthly withdrawal amount
  const [investmentDuration, setInvestmentDuration] = useState<number>(10);  // Default investment duration (in years)

  // Convert annual interest rate to monthly interest rate (in decimal)
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const totalMonths = investmentDuration * 12;

  let remainingPrincipal = initialInvestment;
  let totalWithdrawn = 0;
  let month = 0;

  // Calculate monthly withdrawal over time considering the interest and withdrawals
  while (remainingPrincipal > 0 && month < totalMonths) {
    const interestEarned = remainingPrincipal * monthlyInterestRate;
    remainingPrincipal = remainingPrincipal + interestEarned - monthlyWithdrawal;
    totalWithdrawn += monthlyWithdrawal;
    month++;
    if (remainingPrincipal < 0) {
      remainingPrincipal = 0; // Avoid negative balance
    }
  }

  const totalInterestEarned = totalWithdrawn + remainingPrincipal - initialInvestment;

  return (
    <CalculatorCard title="SWP Calculator">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
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
          <label className="block text-sm font-medium text-gray-700">Monthly Withdrawal</label>
          <input
            type="number"
            value={monthlyWithdrawal}
            onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
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
              <p className="text-sm text-gray-600">Total Withdrawn</p>
              <p className="text-lg font-semibold text-blue-600">{formatCurrency(totalWithdrawn)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Remaining Principal</p>
              <p className="text-lg font-semibold text-gray-900">{formatCurrency(remainingPrincipal)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Interest Earned</p>
              <p className="text-lg font-semibold text-green-600">{formatCurrency(totalInterestEarned)}</p>
            </div>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default SWPCalculator;
