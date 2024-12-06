import React, { useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-12">
      <section className="text-center">
      <h1 className="text-4xl font-bold text-center">Contact <span className='text-red-600'>Us</span></h1>
      <div className="w-24 h-1 bg-gray-200 mx-auto mt-4 mb-8" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our team of financial experts. We're here to help you succeed.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-red-600 mr-3" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">rohan7645820204@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-red-600 mr-3" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 8340782324</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-red-600 mr-3" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                Kuju, Jharkhand, 825316
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;