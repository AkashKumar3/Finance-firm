import React from 'react';
import { Users, Target, BookOpen } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a team of dedicated financial experts committed to helping you achieve your financial goals through smart investments and strategic planning.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Users className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Team</h3>
          <p className="text-gray-600">Expert financial advisors with decades of combined experience</p>
        </div>
        <div className="text-center">
          <Target className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">Empowering clients to achieve their financial dreams</p>
        </div>
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Values</h3>
          <p className="text-gray-600">Integrity, transparency, and client success drive everything we do</p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Our History</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Founded in 2010, we've grown from a small team of passionate financial advisors to a leading financial analysis firm serving clients worldwide.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence and innovation has helped thousands of clients achieve their financial goals and secure their future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;