import "./Insights.css";

import centerImg from "../../assets/About/centerdental.jpg";

const insights = [
  {
    date: "12 Feb 2026",
    title: "How to Maintain Healthy Teeth Everyday",
    desc: "Simple daily habits that help protect your teeth and maintain oral hygiene.",
    type: "light"
  },
  {
    date: "05 Feb 2026",
    title: "Benefits of Regular Dental Checkups",
    desc: "Why visiting your dentist regularly prevents serious dental issues.",
    type: "image"
  },
  {
    date: "28 Jan 2026",
    title: "Modern Cosmetic Dentistry Explained",
    desc: "Discover how cosmetic dentistry improves confidence and smile quality.",
    type: "light"
  }
];

export default function Insights() {
  return (
    <section className="insights-section">
      <div className="insights-container">

        {/* HEADER */}
        <div className="insights-header">
          <span>INSIGHTS</span>
          <h2>Latest Dental Articles & Tips</h2>
        </div>

        {/* CARDS */}
        <div className="insights-grid">
          {insights.map((item, index) => (
            <div
              key={index}
              className={`insight-card ${item.type}`}
              style={
                item.type === "image"
                  ? { backgroundImage: `url(${centerImg})` }
                  : {}
              }
            >
              <div className="insight-inner">

                {/* DATE */}
                <div className="insight-date">
                  {item.date}
                </div>

                {/* TITLE */}
                <h3>{item.title}</h3>

                {/* PARA */}
                <p>{item.desc}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
