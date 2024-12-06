import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string | number;
  label: string;
  delay: number;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-4"
    >
      <motion.span 
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.span>
      <span className="text-lg text-gray-700 font-medium">{label}</span>
    </motion.div>
  );
};