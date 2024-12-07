import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/Finance-firm" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-red-400" />
              <span className="text-xl font-bold">
                3R's Investment Solution
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              At, Partner_Firm our mission is to provide our clients with the
              best solutions in wealth building. We are driven to provide
              clients with simple, unbiased and uncluttered professiaonal advice
              that adds value to their quality of life and results in actionable
              solutions.ssion.
            </p>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Finance-firm/products/mutual-funds"
                  className="text-gray-400 hover:text-white"
                >
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link
                  to="/Finance-firm/products/capital-market"
                  className="text-gray-400 hover:text-white"
                >
                  Capital Market
                </Link>
              </li>
              <li>
                <Link
                  to="/Finance-firm/products/fixed-income"
                  className="text-gray-400 hover:text-white"
                >
                  Fixed Income
                </Link>
              </li>
              <li>
                <Link
                  to="/Finance-firm/products/pms"
                  className="text-gray-400 hover:text-white"
                >
                  PMS
                </Link>
              </li>
              <li>
                <Link
                  to="/Finance-firm/products/real-estate"
                  className="text-gray-400 hover:text-white"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  to="/Finance-firm/products/insurance"
                  className="text-gray-400 hover:text-white"
                >
                  Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-400" />
                <span className="text-gray-400">+91 8340782324</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-400" />
                <a
                  href="mailto:info@finanalyst.com"
                  className="text-gray-400 hover:text-white"
                >
                  rohan7645820204@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-red-400" />
                <span className="text-gray-400">Kuju, Jharkhand, 825316</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Finance-firm/about"
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/Finance-firm/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/Finance-firm/resources/articles"
                  className="text-gray-400 hover:text-white"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/Finance-firm/tools/financial-tools"
                  className="text-gray-400 hover:text-white"
                >
                  Financial Tools
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} 3R's Investment Solution. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
