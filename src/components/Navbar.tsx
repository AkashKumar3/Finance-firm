import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdowns = {
    offerings: [
      { title: "Product Basket", path: "/Finance-firm/offerings/product-basket" },
      { title: "Client Services", path: "/Finance-firm/offerings/client-services" },
    ],
    resources: [
      { title: "Articles", path: "/Finance-firm/resources/articles" },
      { title: "Fund Manager Interviews", path: "/Finance-firm/resources/interviews" },
      { title: "Video Clips", path: "/Finance-firm/resources/videos" },
      { title: "Image Gallery", path: "/Finance-firm/resources/gallery" },
      { title: "Events", path: "/Finance-firm/resources/events" },
      { title: "Important Links", path: "/Finance-firm/resources/links" },
    ],
    tools: [
      { title: "MF Lumpsum Calculator", path: "/Finance-firm/tools/returns-calculator" },
      { title: "MF SIP Calculator", path: "/Finance-firm/tools/sip-calculator" },
      {title: "MF EMI Calculator", path: "/Finance-firm/tools/emi-calculator"},
      { title: "MF Future Value Calculator", path: "/Finance-firm/tools/future-value-calculator" },
      { title: "MF Present Value Calculator", path: "/Finance-firm/tools/present-value-calculator" },
      { title: "MF SWP Calculator", path: "/Finance-firm/tools/swp-calculator" },
      { title: "Financial Tools", path: "/Finance-firm/tools/financial-tools" },
    ],
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/Finance-firm" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-800">
                3R's Investment Solution
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 font-bold">
            <Link
              to="/Finance-firm"
              className="text-gray-700 hover:text-red-600 px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/Finance-firm/about"
              className="text-gray-700 hover:text-red-600 px-3 py-2"
            >
              About Us
            </Link>

            {/* Offerings Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 group-hover:text-red-600 px-3 py-2 inline-flex items-center">
                Offerings
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {dropdowns.offerings.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 group-hover:text-red-600 px-3 py-2 inline-flex items-center">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {dropdowns.resources.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 group-hover:text-red-600 px-3 py-2 inline-flex items-center">
                Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {dropdowns.tools.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/Finance-firm/contact"
              className="text-gray-700 hover:text-red-600 px-3 py-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/Finance-firm"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            to="/Finance-firm/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About Us
          </Link>
          <div className="relative group">
            <button className="text-gray-700 group-hover:text-red-600 px-3 py-2 inline-flex items-center">
              Offerings
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:z-10 group-hover:visible transition-all duration-200">
              <div className="py-1">
                {dropdowns.offerings.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
                      {/* Resources Dropdown */}
                      <div className="relative group">
              <button className="text-gray-700 group-hover:text-red-600 px-3 py-2 inline-flex items-center">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:z-10 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {dropdowns.resources.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          
           {/* Tools Dropdown */}
           <div className="relative group">
              <button className="text-gray-700 group-hover:text-red-600 px-3 py-2 inline-flex items-center">
                Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {dropdowns.tools.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          
            <Link
            to="/Finance-firm/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
