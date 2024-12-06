import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CapitalMarket = () => {
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
            Capital <span className="text-red-600">Market</span>
          </h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mt-4" />

          <p className="mt-6 text-lg text-gray-500 max-w-screen mx-auto text-left">
            The capital market is a financial market in which long-term debt
            (over a year) or equity-backed securities are bought and sold.
            Companies and governments utilize the capital market to raise funds
            for projects and investments. <br /> <br />
            It provides a platform for companies to acquire funding through the
            issuance of stocks and bonds, while enabling investors to build
            wealth by investing in long-term assets. <br /> <br />
            The capital market consists of two primary segments: the primary
            market (where securities are created) and the secondary market
            (where securities are traded among investors).
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
              Understanding Capital Market
            </h3>
            <p className="mt-4 text-gray-600">
              The capital market facilitates the buying and selling of financial
              instruments, such as stocks, bonds, and other long-term
              investments. It connects investors with entities seeking capital,
              contributing to economic growth and development.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600 list-disc pl-6">
              <li>Provides long-term investment opportunities</li>
              <li>Enables wealth creation through equity and debt</li>
              <li>Acts as a bridge between investors and borrowers</li>
              <li>Supports economic growth and infrastructure development</li>
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
              src="https://www.njwebnest.in/sample/template20/images/product-basket/capital-market-inner.jpg"
              alt="Capital Market Illustration"
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

export default CapitalMarket;
