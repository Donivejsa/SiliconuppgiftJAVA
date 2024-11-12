// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PromotionSection from './components/PromotionSection';
import BrandsSection from './components/BrandsSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import Part4Section from './components/Part4Section';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? 'App dark-mode' : 'App light-mode'}>
        <Header toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <PromotionSection />
                <BrandsSection />
                <FeaturesSection />
                <HowItWorksSection />
                <Part4Section />
                <ReviewsSection />
                <FAQSection />
                <NewsletterSection />
              </>
            } />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
