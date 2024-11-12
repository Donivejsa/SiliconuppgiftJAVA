// src/components/BrandsSection.jsx
import React from 'react';
import Brand1 from '../assets/images/brand-1.svg';
import Brand2 from '../assets/images/brand-2.svg';
import Brand3 from '../assets/images/brand-3.svg';
import Brand4 from '../assets/images/brand-4.svg';
import Brand5 from '../assets/images/brand-5.svg';
import Brand6 from '../assets/images/brand-6.svg';

const BrandsSection = () => {
  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

  return (
    <section id="brands">
      <div className="container">
        {brands.map((brand, index) => (
          <div key={index} id={`brand-${index + 1}`} className="brand-box">
            <img src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
