import "./Footer.css";

export default function Footer() {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <footer className="footer">

      <div className="footer-container">


        {/* LEFT SIDE: Newsletter */}
        <div className="footer-left">

          <h2>
            Get Latest Dental <br />
            News & Updates
          </h2>


          <div className="footer-newsletter">

            <input
              type="email"
              placeholder="Your e-mail"
            />

            <span className="arrow-icon">

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

                <line 
                  x1="5" 
                  y1="12" 
                  x2="19" 
                  y2="12" 
                />

                <polyline 
                  points="12 5 19 12 12 19"
                />

              </svg>

            </span>

          </div>

        </div>



        {/* RIGHT SIDE LINKS */}
        <div className="footer-right">



          {/* PAGE LINKS */}
          <div className="footer-section">

            <h4>
              Page Links
            </h4>


            <p onClick={() => scrollToSection("home")}>
              Home
            </p>


            <p onClick={() => scrollToSection("about")}>
              About Us
            </p>


            <p onClick={() => scrollToSection("services")}>
              Services
            </p>


            <p onClick={() => scrollToSection("work")}>
              Our Works
            </p>


            <p onClick={() => scrollToSection("enquiry")}>
              Contact Us
            </p>

          </div>





          {/* QUICK LINKS */}
          <div className="footer-section">

            <h4>
              Quick Links
            </h4>


            <p onClick={() => scrollToSection("trust")}>
              Why Choose Us
            </p>


            <p onClick={() => scrollToSection("insights")}>
              Insights
            </p>


            <p onClick={() => scrollToSection("reviews")}>
              Reviews
            </p>


            <p onClick={() => scrollToSection("enquiry")}>
              Appointment
            </p>


            <p onClick={() => scrollToSection("services")}>
              Treatments
            </p>

          </div>





          {/* SOCIAL MEDIA */}
          <div className="footer-section">

            <h4>
              Social Media
            </h4>


            <p>
              Facebook
            </p>


            <p>
              Instagram
            </p>


            <p>
              Twitter
            </p>


            <p>
              LinkedIn
            </p>


            <p>
              Youtube
            </p>


          </div>



        </div>


      </div>



      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Dental Care. All rights reserved.
        </p>

      </div>


    </footer>
  );
}