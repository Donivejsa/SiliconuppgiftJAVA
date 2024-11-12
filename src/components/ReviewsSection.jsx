import React, { useState, useEffect } from 'react';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        console.log('Fetched reviews:', data); // Log to inspect data structure
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="reviews">
      <div className="reviews-container">
        <h1>
          Clients are <br />
          <span>Loving Our App</span>
        </h1>
        {loading ? (
          <p>Loading reviews...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="review-list">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-content">
                  <div className="review-quote">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                  <div className="review-rating">
                    {'★'.repeat(review.starRating || 0)}{'☆'.repeat(5 - (review.starRating || 0))}
                  </div>
                  <p>{review.comment}</p> {/* Use review.comment for content */}
                </div>
                <div className="review-author">
                  <img src={review.avatarUrl || 'default-avatar.jpg'} alt={review.author || "Author"} className="author-image" />
                  <div>
                    <strong>{review.author || "Unknown Author"}</strong>
                    <span>{review.jobRole || "No Title"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
