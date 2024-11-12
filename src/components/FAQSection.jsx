import React, { useState, useEffect } from 'react';
import faqTel from '../assets/images/faqtel.svg';
import faqSms from '../assets/images/faqsms.svg';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqItems, setFaqItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        console.log('Fetched FAQ data:', data); // Log to check data structure
        setFaqItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <h1>
            Any Questions?<br />
            <span>Check out the FAQs</span>
          </h1>
          <h2>Still have unanswered questions and need to get in touch?</h2>
          <div className="faq-images">
            <div className="faq-image-item">
              <img src={faqTel} alt="Contact us call" />
            </div>
            <div className="faq-image-item">
              <img src={faqSms} alt="Contact us text" />
            </div>
          </div>
        </div>

        <div className="faq-right">
          {loading ? (
            <p>Loading FAQs...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <ul className="faq-list">
              {faqItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`faq-item ${openIndex === index ? 'open' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question">
                    <p>{item.title}</p>
                    <button className="btn-toggle-switch">
                      <i
                        className={`fa-sharp fa-regular ${
                          openIndex === index ? 'fa-angle-up' : 'fa-angle-down'
                        }`}
                      ></i>
                    </button>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer">
                      <p>{item.content}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
