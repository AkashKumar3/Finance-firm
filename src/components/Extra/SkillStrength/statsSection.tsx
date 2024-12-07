import React from 'react';
import { StatCard } from './statCard';

const stats = [
  { value: '100+', label: 'Satisfied Clients', delay: 0 },
  { value: '1 Cr+', label: 'AUM', delay: 0.2 },
  { value: '5', label: 'Years of Experience', delay: 0.4 },
  { value: '10', label: 'Awards', delay: 0.6 },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-gray-800">Skill</span>{' '}
            <span className="text-red-600">Strength</span>
          </h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};