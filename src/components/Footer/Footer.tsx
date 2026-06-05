import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

       {/* LEFT SIDE: Newsletter */}
<div className="footer-left">
  <h2>
    Offerings From Bright <br /> News & Social
  </h2>

  <div className="footer-newsletter">
    <input type="email" placeholder="Your e-mail" />
    <span className="arrow-icon">
      {/* Simple SVG arrow */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </span>
  </div>
</div>


        {/* RIGHT SIDE: Links */}
        <div className="footer-right">

          {/* Section 1 */}
          <div className="footer-section">
            <h4>Page Links</h4>
            <p>Home</p>
            <p>Why our network</p>
            <p>Charging solutions</p>
            <p>Technology</p>
            <p>Contact Us</p>
          </div>

          {/* Section 2*/}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <p>Our Mission</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Services</p>
            <p>Press releases</p>
          </div>
          {/* Section 3*/}
          <div className="footer-section">
            <h4>Social Media</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
            
            
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Bright News & Social. All rights reserved.</p>
      </div>
    </footer>
  );
}
