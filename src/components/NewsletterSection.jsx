import React, { useState } from 'react';
import NotificationIcon from '../assets/images/notification.svg';

const NewsletterSection = () => {
  const [email, setEmail] = useState(''); // State to store email input
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [message, setMessage] = useState(''); // State for success/error message

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }
  
    setLoading(true);
    setMessage(''); // Clear any previous messages
  
    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to subscribe. Please try again.');
      }
  
      // Check if the response has content before parsing
      const data = response.headers.get("content-length") !== "0" ? await response.json() : null;
      setMessage(data ? 'Successfully subscribed!' : 'Subscription successful!'); // Show success message
      setEmail(''); // Clear the email input
    } catch (error) {
      setMessage(error.message); // Show error message
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };  

  return (
    <section id="newsletter">
      <div className="left">
        <img src={NotificationIcon} alt="Notification Icon" style={{ width: '40px' }} />
        <p>
          Subscribe to our newsletter to stay
          <br />
          informed about the latest updates
        </p>
      </div>
      <div className="right">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe} disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
        {message && <p>{message}</p>} {/* Display success/error message */}
      </div>
    </section>
  );
};

export default NewsletterSection;
