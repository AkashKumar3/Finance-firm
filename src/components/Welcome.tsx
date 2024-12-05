import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to My Firm
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A reputed name for comprehensive financial advisory and product distribution services
          </p>
          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto">
            At Partner_Firm our mission is to provide our clients with the best solutions in wealth building. 
            We are driven to provide clients with simple, unbiased and uncluttered professional advice that 
            adds value to their quality of life and results in actionable solutions.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Know More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;