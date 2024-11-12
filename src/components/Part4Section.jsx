// src/components/Part4Section.jsx
import React from 'react';
import Part4Image from '../assets/images/part4.svg';
import Part4Image1 from '../assets/images/part4.1.svg';
import PaymentIcon1 from '../assets/images/payment2.svg';
import PaymentIcon2 from '../assets/images/payment1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
  


const Part4Section = () => {
  return (
    <section className="part4section">
      <div className="container">
        {/* Första delen */}
        <div className="section">
          <h2>Make your money transfer simple and clear</h2>
          <ul>
            <li>
              <i className="fa-regular fa-circle-check icon"></i>
              Banking transactions are free for you
            </li>
            <li>
              <i className="fa-regular fa-circle-check icon"></i>
              No monthly cash commission
            </li>
            <li>
              <i className="fa-regular fa-circle-check icon"></i>
              Manage payments and transactions online
            </li>
          </ul>
          <a href="#" className="learn-more-btn">
            Learn more
          </a>
        </div>
        <div className="section">
          <div className="image-section">
            <img src={Part4Image} alt="Transfer bild" style={{ maxWidth: '100%' }} />
          </div>
        </div>
        {/* Andra delen */}
        <div className="section">
          <div className="image-section">
            <img src={Part4Image1} alt="Kort bild" style={{ maxWidth: '100%' }} />
          </div>
        </div>
        <div className="section">
          <h2>Receive payment from international bank details</h2>
          <div className="icon-container">
            <div className="icon-text">
              <img src={PaymentIcon1} alt="Icon 1" />
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="icon-text">
              <img src={PaymentIcon2} alt="Icon 2" />
              <p>A elementum et imperdiet enim. Pretium etiam facilisi aenean quam mauris.</p>
              <a href="#" className="learn-more-btn">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part4Section;
