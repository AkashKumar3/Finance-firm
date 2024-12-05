import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';

const DividendHistory = () => {
  const [schemeCode, setSchemeCode] = useState<string>('');
  const [year, setYear] = useState<string>(new Date().getFullYear().toString());

  return (
    <CalculatorCard title="Dividend History">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Scheme Code</label>
          <input
            type="text"
            value={schemeCode}
            onChange={(e) => setSchemeCode(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter Scheme Code"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <button
          className="w-full mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Fetch Dividend History
        </button>
        <div className="mt-4">
          <p className="text-sm text-gray-500 text-center">
            Note: This tool requires integration with AMFI API for real data.
          </p>
        </div>
      </div>
    </CalculatorCard>
  );
};

export default DividendHistory;