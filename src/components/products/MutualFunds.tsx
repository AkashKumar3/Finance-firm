import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MutualFunds = () => {
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
            Mutual <span className="text-red-600">Funds</span>
          </h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mt-4" />

          <p className="mt-6 text-lg text-gray-500 max-w-screen mx-auto text-left">
            A mutual fund is a professionally managed investment fund that pools
            money from many investors to purchase securities. These investors
            may be retail or institutional in nature. <br /> <br /> Mutual funds have
            advantages and disadvantages compared to direct investing in
            individual securities. The primary advantages of mutual funds are
            that they provide economies of scale, a higher level of
            diversification, they provide liquidity, and they are managed by
            professional investors. On the negative side, investors in a mutual
            fund must pay various fees and expenses. <br /> <br /> Primary structures of
            mutual funds include open-end funds, unit investment trusts, and
            closed-end funds. Exchange-traded funds (ETFs) are open-end funds or
            unit investment trusts that trade on an exchange. Some close- ended
            funds also resemble exchange traded funds as they are traded on
            stock exchanges to improve their liquidity.
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
              What Are Mutual Funds?
            </h3>
            <p className="mt-4 text-gray-600">
              Mutual funds are investment vehicles that pool money from various
              investors to purchase securities such as stocks, bonds, or other
              assets. They are managed by professional fund managers, who
              allocate the fund's investments to generate returns for investors.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600 list-disc pl-6">
              <li>Professional management of your investments</li>
              <li>Access to a diversified portfolio</li>
              <li>Options for long-term and short-term goals</li>
              <li>Regulated and secure investments</li>
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
              src="https://www.njwebnest.in/sample/template20/images/product-basket/mutual-fund-inner.jpg"
              alt="Mutual Funds Illustration"
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

export default MutualFunds;
