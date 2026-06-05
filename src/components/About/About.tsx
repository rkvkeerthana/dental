import "./About.css";

// ✅ IMPORT IMAGES FROM ASSETS
import leftImg from "../../assets/About/left.jpg";
import centerImg from "../../assets/About/center.jpg";
import rightImg from "../../assets/About/right.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        <p className="about-label">ABOUT US</p>

        <div className="about-grid">

          {/* LEFT IMAGE */}
          <div className="about-left">
            <img src={leftImg} alt="about-left" />
          </div>

          {/* CENTER CONTENT */}
          <div className="about-center">

            <h2 className="about-title">
              We Create Smart Digital Experiences
            </h2>

            <p className="about-para">
              We help brands grow with modern design and creative solutions. It includes general checkups, cleanings, and, often, cosmetic or surgical procedures. Key areas include restorative care (fillings, crowns, implants) and specialized treatments for oral health. 
            </p>

            {/* CENTER IMAGE */}
            <div className="about-image-box">
              <img src={centerImg} alt="center" />

              <button className="about-btn">
                Book Apointment
              </button>
            </div>

           

          </div>

          {/* RIGHT IMAGE */}
          <div className="about-right">
            <img src={rightImg} alt="about-right" />
            <p className="about-percent">98%</p>
             <span className="about-small">
              Trusted by clients worldwide
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
