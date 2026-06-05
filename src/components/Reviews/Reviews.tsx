import { useState } from "react";
import "./Reviews.css";

interface Review {
  img: string;
  name: string;
  title: string; // new title above review
  text: string;
}

const reviews: Review[] = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Kevin Martin",
    title: "Excellent Service",
    text: "Great dental experience and friendly staff. The doctor explained everything clearly, and the clinic was spotless.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Sarah Parker",
    title: "Highly Professional",
    text: "The service was amazing and very professional. I felt very comfortable during my visit and will return again.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "John Doe",
    title: "Top Quality Care",
    text: "Highly recommend them for dental care. The team is friendly and very thorough in their procedures.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Lisa Ray",
    title: "Clean & Welcoming",
    text: "Clean and welcoming environment. Staff made me feel very comfortable and cared for throughout the procedure.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Mark Allen",
    title: "Friendly Staff",
    text: "Friendly staff and excellent service. They made the entire process stress-free and easy to understand.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Emma Watson",
    title: "Professional Team",
    text: "Professional and friendly team! They paid attention to every detail and explained the treatment thoroughly.",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - cardsPerPage < 0 ? 0 : prev - cardsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= reviews.length ? prev : prev + cardsPerPage
    );
  };

  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + cardsPerPage >= reviews.length;

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <div className="reviews-text">
          <h2>What Our Clients Say</h2>
          <p>
            Hear from our satisfied patients who have experienced exceptional dental care.
          </p>
        </div>
        <div className="reviews-arrows">
          <button
            className={`arrow ${isPrevDisabled ? "disabled" : "active"}`}
            onClick={prevSlide}
            disabled={isPrevDisabled}
          >
            &#10094;
          </button>
          <button
            className={`arrow ${isNextDisabled ? "disabled" : "active"}`}
            onClick={nextSlide}
            disabled={isNextDisabled}
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="cards-wrapper">
        {visibleReviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img className="profile-img" src={review.img} alt={review.name} />
            <h4 className="review-title">{review.title}</h4>
            <p className="review-text">"{review.text}"</p>
            <div className="review-bottom">
              <span className="review-name">{review.name}</span>
              <span className="review-stars">★★★★★</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
