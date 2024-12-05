import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Products from './components/Products';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';
import ReturnsCalculator from './components/tools/ReturnsCalculator';
import SIPCalculator from './components/tools/SIPCalculator';
import HistoricNAV from './components/tools/HistoricNAV';
import DividendHistory from './components/tools/DividendHistory';
import SchemeSnapshot from './components/tools/SchemeSnapshot';
import FinancialTools from './components/tools/FinancialTools';
import ClientServices from './components/pages/offerings/ClientServices';
import ProductBasket from './components/pages/offerings/ProductBasket'
import Articles from './components/pages/resources/Articles';
import Events from './components/pages/resources/Events';
import Gallery from './components/pages/resources/Gallery';

import Interviews from './components/pages/resources/Interviews';
import Videos from './components/pages/resources/Videos';
import ImportantLinks from './components/pages/resources/ImportantLinks';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/Finance-firm" element={
            <>
              <Hero />
              <Welcome />
              <Products />
              <LatestArticles />
            </>
          } />

          {/* contact us */}
             <Route path="/Finance-firm/contact" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <Contact />
            </div>
          } />

          {/* about us */}
          <Route path="/Finance-firm/about" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <AboutUs />
            </div>
          } />

          {/* Offerings */}
          <Route path="/Finance-firm/offerings/client-services" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <ClientServices />
            </div>
          } />
          <Route path="/Finance-firm/offerings/product-basket" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <ProductBasket />
            </div>
          } />

          {/* Resources */}
          <Route path="/Finance-firm/resources/articles" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <Articles />
            </div>
          } />
            <Route path="/Finance-firm/resources/events" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <Events />
            </div>
          } />
            <Route path="/Finance-firm/resources/gallery" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <Gallery />
            </div>
          } />
            <Route path="/Finance-firm/resources/links" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <ImportantLinks/>
            </div>
          } />
            <Route path="/Finance-firm/resources/interviews" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <Interviews />
            </div>
          } />
              <Route path="/Finance-firm/resources/videos" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <Videos />
            </div>
          } />


          <Route path="/Finance-firm/tools/returns-calculator" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <ReturnsCalculator />
            </div>
          } />
          <Route path="/Finance-firm/tools/sip-calculator" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <SIPCalculator />
            </div>
          } />
          <Route path="/Finance-firm/tools/historic-nav" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <HistoricNAV />
            </div>
          } />
          <Route path="/Finance-firm/tools/dividend-history" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <DividendHistory />
            </div>
          } />
          <Route path="/Finance-firm/tools/scheme-snapshot" element={
            <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <SchemeSnapshot />
            </div>
          } />
          <Route path="/Finance-firm/tools/financial-tools" element={<FinancialTools />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;