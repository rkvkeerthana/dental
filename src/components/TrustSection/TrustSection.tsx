import "./TrustSection.css";

/* ✅ IMPORT IMAGES FROM ASSETS */
import trustMain from "../../assets/Trust/trust1.jpg";
import trustVideo from "../../assets/Trust/trust2.jpg";
import trustSide from "../../assets/Trust/trust4.jpg";

export default function TrustSection() {

  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="trust" id="trust">

      <div className="trust-container">

        {/* LEFT CONTENT */}
        <div className="trust-left">
          <span className="trust-tag">(cost care)</span>

          <h1>
            Doctor Consultations <br />
            Are <span className="emoji">👩‍⚕️</span> Free & Trusted
          </h1>

          <p className="trust-desc">
            Team carefully evaluates your results to provide actionable
            insights for improving your health & lifespan.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="trust-center">
          <img src={trustMain} alt="Dental Care" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="trust-right">
          <p>
            Take control of your health with a comprehensive assessment unlike
            any other. We use the latest medical innovations including
            next-generation MRI, cardiovascular & neurocognitive assessments,
            early cancer detection, and genetic testing.
          </p>

          <button
            className="trust-btn"
            onClick={scrollToEnquiry}
          >
            Book Appointment →
          </button>
        </div>

      </div>

      {/* ===== BOTTOM CARDS ===== */}
      <div className="trust-bottom">

        <div className="trust-card stat">
          <h2>98%</h2>
          <p>Client satisfaction with our service</p>
        </div>

        <div className="trust-card image-card">
          <img src={trustVideo} alt="Consultation" />
          <div className="play">▶</div>
        </div>

        <div className="trust-vertical">
          <img src={trustSide} alt="Dental" />
        </div>

      </div>

    </section>
  );
}