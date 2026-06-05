import "./Work.css";

import img1 from "../../assets/services/service1.jpg";
import img2 from "../../assets/services/service3.jpg";
import user1 from "../../assets/Work/profile1.jpg";
import user2 from "../../assets/Work/profile2.jpg";

export default function ServicesTwo() {
  return (
    <section className="serviceTwo">
      <div className="serviceTwo-wrapper">

        {/* ===== LEFT SIDE ===== */}
        <div className="serviceTwo-left">

          <span className="serviceTwo-label">(our works)</span>

          <p className="serviceTwo-desc">
            Our team of skilled and experienced dental professionals
            strives to create comfortable and welcoming environment
            for each.
          </p>

          <button className="serviceTwo-btn">
            Book Appointment →
          </button>

          {/* MEMBERS */}
          <div className="serviceTwo-members">
            <div className="avatars">
              <img src={user1} alt="" />
              <img src={user2} alt="" />
            </div>
            <span>10K+ happy member</span>
          </div>

        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="serviceTwo-right">

          <h2 className="serviceTwo-title">
            Services We Provide <br />
            Are Listed Below
          </h2>

          <div className="serviceTwo-images">

            <div className="imgCard">
              <img src={img1} alt="Teeth Straightening" />
              <h4>Teeth Straightening</h4>
              <p>Improve your smile with cleaning.</p>
            </div>

            <div className="imgCard">
              <img src={img2} alt="Dental Implant" />
              <h4>Dental Implant</h4>
              <p>Improve your smile with cleaning.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
