// src/components/HowItWorksSection.jsx
import React from 'react';
import iPhone1 from '../assets/images/iPhone 1.svg';
import iPhone2 from '../assets/images/iPhone 2.svg';
import iPhone3 from '../assets/images/iPhone 3.svg';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works-section">
      <div className="how-it-works-text">
        <h1>How Does It Work?</h1>
      </div>
      <div className="how-it-works-images">
        <img src={iPhone1} alt="Mobil 1" />
        <img src={iPhone2} alt="Mobil 2" />
        <img src={iPhone3} alt="Mobil 3" />
      </div>
      <div className="transaction-history">
        <h2>Latest transaction history</h2>
        <p>
          Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
          consectetur condimentum.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
