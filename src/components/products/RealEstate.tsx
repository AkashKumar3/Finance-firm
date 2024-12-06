import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RealEstate = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Real <span className="text-red-600">Estate</span>
          </h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mt-4" />

          <p className="mt-6 text-lg text-gray-500 max-w-screen mx-auto text-left">
            Real estate investment involves the purchase, ownership, management,
            rental, or sale of properties to generate wealth. It is a proven way
            to diversify your portfolio while providing a hedge against
            inflation. <br /> <br />
            From residential properties to commercial real estate and REITs,
            real estate offers flexible investment options for long-term capital
            appreciation and regular income through rent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Why Invest in Real Estate?
            </h3>
            <p className="mt-4 text-gray-600">
              Real estate is a tangible asset that provides stability, consistent
              income, and long-term growth. It is ideal for those looking for
              secure investment opportunities and passive income.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600 list-disc pl-6">
              <li>Steady cash flow through rental income</li>
              <li>Long-term capital appreciation</li>
              <li>Diversification and risk mitigation</li>
              <li>A hedge against inflation</li>
            </ul>
            <Link
              to="/Finance-firm/contact"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
             <div className="md:ml-32 lg:ml-32 ml-0 mt-10">
            <motion.img
              src="https://www.njwebnest.in/sample/template20/images/product-basket/real-estate-inner.jpg"
              alt="Real Estate Illustration"
              className="rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstate;
