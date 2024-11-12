// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import emailIcon from '../assets/images/mailcontact.svg';
import careersIcon from '../assets/images/careerscontact.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialist: '',
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Full name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.specialist) formErrors.specialist = 'Specialist is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        setStatusMessage('Your appointment request has been sent successfully.');
        
        setFormData({
          name: '',
          email: '',
          specialist: ''
        });
        setErrors({});
      } catch (error) {
        setStatusMessage('An error occurred while submitting the form. Please try again.');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className={`contact-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-box">
              <img src={emailIcon} alt="Email Icon" style={{ width: '40px' }} />
              <h3>Email us</h3>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <a href="#">Leave a message</a>
            </div>
            <div className="info-box">
              <img src={careersIcon} alt="Careers Icon" style={{ width: '40px' }} />
              <h3>Careers</h3>
              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
              <a href="#">Send an application</a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Get Online Consultation</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="specialist">Specialist</label>
                <select
                  id="specialist"
                  name="specialist"
                  value={formData.specialist}
                  onChange={handleChange}
                >
                  <option value="">Select Specialist</option>
                  <option value="Hans">Hans</option>
                  <option value="Joakim">Joakim</option>
                  <option value="Terese">Terese</option>
                </select>
                {errors.specialist && <span className="error">{errors.specialist}</span>}
              </div>
              <button type="submit">Make an appointment</button>
              {statusMessage && <p className="status-message">{statusMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
  