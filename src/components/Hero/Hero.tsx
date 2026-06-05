//import React from "react";
import "./Hero.css";
import Banner from "../../assets/Hero/banner.webp";
import { FaTooth } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="hero-container">
        <div className="hero-content">

          <h1 className="hero-title">
            Seamless <br />
            Dental<FaTooth className="tooth-icon" />Care
          </h1>

          <p>
            Modern dental care with comfort, technology, and trusted specialists.
            <br />
            Experience a relaxing and professional dental visit.
          </p>

          <button className="hero-btn">
            Book Appointment <span className="arrow">→</span>
          </button>

        </div>
      </div>
    </section>
  );
}