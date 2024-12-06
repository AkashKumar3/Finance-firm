import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PMS = () => {
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
            Portfolio Management <span className="text-red-600">Services (PMS)</span>
          </h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mt-4" />

          <p className="mt-6 text-lg text-gray-500 max-w-screen mx-auto text-left">
            Portfolio Management Services (PMS) provide professional management
            of your investments to achieve your financial goals. PMS is ideal
            for individuals seeking customized investment solutions tailored to
            their risk appetite, investment horizon, and return expectations.
            <br /> <br />
            PMS offers personalized strategies for wealth creation and
            preservation by investing in equity, fixed income, or a combination
            of asset classes. It allows for a hands-off approach where expert
            fund managers handle your portfolio with precision and care.
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
              Benefits of PMS
            </h3>
            <p className="mt-4 text-gray-600">
              PMS is designed for high-net-worth individuals (HNIs) who wish to
              build a diversified and robust portfolio managed by experts. It
              offers a personalized approach to investing.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600 list-disc pl-6">
              <li>Customizable investment strategies</li>
              <li>Dedicated professional portfolio management</li>
              <li>Enhanced diversification for risk management</li>
              <li>Transparency and regular performance updates</li>
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
              src="https://www.njwebnest.in/sample/template20/images/product-basket/pms-inner.jpg"
              alt="Portfolio Management Services Illustration"
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

export default PMS;
