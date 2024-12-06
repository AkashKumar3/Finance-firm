import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';
import { formatCurrency } from '../../lib/calculators';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);  // Default loan amount
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(10);  // Default annual interest rate
  const [loanTenure, setLoanTenure] = useState<number>(10);  // Default loan tenure (in years)

  // Convert annual interest rate to monthly and percentage to decimal
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const numberOfPayments = loanTenure * 12;

  // EMI Calculation
  const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  const totalPayment = emi * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;

  return (
    <CalculatorCard title="EMI Calculator">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
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
          <label className="block text-sm font-medium text-gray-700">Loan Tenure (Years)</label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">EMI</p>
              <p className="text-lg font-semibold text-blue-600">{formatCurrency(emi)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Payment</p>
              <p className="text-lg font-semibold text-gray-900">{formatCurrency(totalPayment)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Interest</p>
              <p className="text-lg font-semibold text-green-600">{formatCurrency(totalInterest)}</p>
            </div>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default EMICalculator;
