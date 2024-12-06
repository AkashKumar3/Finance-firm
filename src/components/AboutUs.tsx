import React, { useEffect } from "react";

import { Users, Target, BookOpen } from "lucide-react";
import { StatsSection } from "./Extra/SkillStrength/statsSection";

const AboutUs = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="">
      <section className="text-center mt-10">
        <h1 className="md:text-4xl text-4xl font-bold">About <span className="text-red-600">Us</span></h1>
        <div className="w-24 h-1 bg-gray-200 mx-auto mt-4 mb-6" />
        <p className="text-lg text-gray-600 max-w-5xl mx-auto text-start">
          We as a Partner firm incorporated in the year; and at present have
          satisfied clients. We will help clients to achieve their financial
          needs with effective and smart investment needs. We are a certified
          Wealth Distributor, Mutual Fund, and Insurance distributors recognized
          by the NSE National Stock Exchange, AMFI (Association of Mutual Fund
          of India). <br /> <br /> We offer comprehensive financial distribution services,
          having a highly qualified and experienced team of financial
          distributors. We use our complete knowledge of insurance, tax laws,
          and mutual fund investments in order to suggest investment options to
          the clients, as per their long-term and short-term goals. <br /> <br /> Our core
          purpose is to provide fast-track financial solutions & thereby make
          people enjoy secured retirement life.
        </p>
      </section>

      <StatsSection />

      <h1 className="text-4xl font-bold mt-20 text-center ">Why <span className=" text-red-600">Us</span></h1>
      <div className="w-24 h-1 bg-gray-200 mx-auto mt-4 mb-10" />
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Team</h3>
          <p className="text-gray-600">
            Expert financial advisors with decades of combined experience
          </p>
        </div>
        <div className="text-center">
          <Target className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            Empowering clients to achieve their financial dreams
          </p>
        </div>
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Integrity, transparency, and client success drive everything we do
          </p>
        </div>
      </section>

      {/* <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Our History</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Founded in 2010, we've grown from a small team of passionate
            financial advisors to a leading financial analysis firm serving
            clients worldwide.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence and innovation has helped thousands of
            clients achieve their financial goals and secure their future.
          </p>
        </div>
      </section> */}
     
    </div>
  );
};

export default AboutUs;
