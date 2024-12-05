import React, { useState } from 'react';
import CalculatorCard from './CalculatorCard';

const SchemeSnapshot = () => {
  const [schemeCode, setSchemeCode] = useState<string>('');

  return (
    <CalculatorCard title="Scheme Snapshot">
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
        <button
          className="w-full mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Get Scheme Details
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

export default SchemeSnapshot;