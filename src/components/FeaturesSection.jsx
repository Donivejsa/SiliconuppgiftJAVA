// src/components/FeaturesSection.jsx
import React from 'react';
import PhoneImage from '../assets/images/appfeaturetelefon.svg';
import FeatureIcon1 from '../assets/images/appft1.svg';
import FeatureIcon2 from '../assets/images/appft2.svg';
import FeatureIcon3 from '../assets/images/appft3.svg';
import FeatureIcon4 from '../assets/images/appft4.svg';
import FeatureIcon5 from '../assets/images/appft5.svg';
import FeatureIcon6 from '../assets/images/appft6.svg';

const features = [
  {
    icon: FeatureIcon1,
    title: 'Easy Payments',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },
  {
    icon: FeatureIcon2,
    title: 'Data Security',
    description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.',
  },
  {
    icon: FeatureIcon3,
    title: 'Cost Statistics',
    description: 'Mattis urna ultricies non amet, purus in auctor non.',
  },
  {
    icon: FeatureIcon4,
    title: 'Support 24/7',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
  },
  {
    icon: FeatureIcon5,
    title: 'Regular Cashback',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.',
  },
  {
    icon: FeatureIcon6,
    title: 'Top Standards',
    description: 'Faucibus cursus maecenas lorem cursus nibh.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features-section">
      <div className="features-container">
        <div className="phone-image">
          <img src={PhoneImage} alt="Telefonbilden" />
        </div>
        <div className="features-content">
          {/* Resten av din kod */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <div className="icon">
                  <img src={feature.icon} alt={`${feature.title} Ikon`} />
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
