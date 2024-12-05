// Financial calculation utilities
export const calculateReturns = (
  principal: number,
  rateOfReturn: number,
  timeInYears: number
): number => {
  const rate = rateOfReturn / 100;
  return principal * Math.pow(1 + rate, timeInYears);
};

export const calculateSIP = (
  monthlyInvestment: number,
  rateOfReturn: number,
  timeInYears: number
): number => {
  const monthlyRate = rateOfReturn / 12 / 100;
  const months = timeInYears * 12;
  return monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};