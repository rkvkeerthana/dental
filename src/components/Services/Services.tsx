//import React from "react";
import "./Services.css";
import { FaTooth, FaTeeth, FaTeethOpen } from "react-icons/fa";
import videoImg from "../../assets/Services/service4.jpeg";

export default function ServiceOne() {
  return (
    <section className="serviceOne">
      <div className="serviceOne-container">

        {/* ===== TOP HEADER ===== */}
        <div className="serviceOne-header">
          <h2>
            Services We Provide <br /> Are Listed Below
          </h2>

          <div className="serviceOne-rightText">
            <p>
              The blocks & components you need to build a professional
              website are based drivers.
            </p>

            <button className="serviceOne-btn">Book Appointment →</button>
          </div>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="serviceOne-grid">

          {/* ===== TOP ROW ===== */}
          <div className="serviceOne-top">
            <div className="service-card yellow service-yellow">
              <div className="service-icon"><FaTooth /></div>
              <h4>Cavity Protection</h4>
              <p>As we move into this new era of technology, we tend to look at the future with confidence.</p>
              <span>Read More →</span>
            </div>

            {/* DIVIDER */}
            <div className="serviceOne-divider">
              <span>OUR SERVICES</span>
            </div>

            <div className="service-card purple service-purple">
              <div className="service-icon"><FaTeeth /></div>
              <h4>Root Canal Treatment</h4>
              <p>In the new era of technology we look in the future with certainty and pride.</p>
              <span>Read More →</span>
            </div>
          </div>

          {/* ===== BOTTOM ROW ===== */}
          <div className="serviceOne-bottom">
            <div className="service-card blue service-blue-card">
              <div className="service-icon"><FaTeethOpen /></div>
              <h4>Oral Surgery</h4>
              <p>Advanced painless surgery with modern dental equipment.</p>
              <span>Read More →</span>
            </div>

            <div className="service-video">
              <img src={videoImg} alt="Dental" />
              <div className="play-btn">▶</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}