// src/components/PromotionSection.jsx
import React from 'react';
import AppStoreImage from '../assets/images/appstore.svg';
import GooglePlayImage from '../assets/images/googleplay.svg';
import DiscoverButtonImage from '../assets/images/discoverbutton.svg';
import PhonesImage from '../assets/images/telefonerna.svg';

const PromotionSection = () => {
  return (
    <section id="promotion-section">
      <div className="promotion-area">
        <h1 id="rubrik">Manage All Your Money in One App</h1>
        <p id="paragraf">
          We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.
        </p>
        <div className="app-buttons">
          <img src={AppStoreImage} alt="Knapp till App Store" />
          <img src={GooglePlayImage} alt="Knapp till Google Play" />
        </div>
        <div className="discovery-knapp">
          <img src={DiscoverButtonImage} alt="Bild på pil ner" />
          <span>Discover More</span>
        </div>
      </div>
      <div className="mobil-bild">
        <img src={PhonesImage} alt="Bild på två telefoner" />
      </div>
    </section>
  );
};

export default PromotionSection;
