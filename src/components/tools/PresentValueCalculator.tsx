import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';
import { formatCurrency } from '../../lib/calculators';

const PresentValueCalculator = () => {
  const [futureValue, setFutureValue] = useState<number>(100000);  // Default future value
  const [interestRate, setInterestRate] = useState<number>(8);  // Default interest rate (annual)
  const [timePeriod, setTimePeriod] = useState<number>(10);  // Default time period (in years)

  // Convert annual interest rate to period rate (in decimal)
  const periodRate = interestRate / 100;  // Period rate as a decimal
  const numberOfPeriods = timePeriod;  // Total periods (in years)

  // Calculate Present Value (for a single future value)
  const presentValue = futureValue / Math.pow(1 + periodRate, numberOfPeriods);

  return (
    <CalculatorCard title="Present Value Calculator">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Future Value (FV)</label>
          <input
            type="number"
            value={futureValue}
            onChange={(e) => setFutureValue(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time Period (Years)</label>
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-sm text-gray-600">Present Value (Single Payment)</p>
              <p className="text-lg font-semibold text-blue-600">{formatCurrency(presentValue)}</p>
            </div>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default PresentValueCalculator;
