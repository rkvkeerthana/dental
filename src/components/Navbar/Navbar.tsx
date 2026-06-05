import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Product", "Services", "Appointment"];

  return (
    <header className="lp-navbar">
      <div className="lp-nav-container">

        {/* LOGO */}
        <div className="logo">Dental</div>

        {/* MENU */}
        <nav className={`lp-menu-container ${menuOpen ? "open" : ""}`}>
          <ul className="lp-menu">
            {menuItems.map((item) => (
              <li
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false); // close after click
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* CALL BUTTON */}
        <div className="call-btn">
          <a href="tel:+1234567890">Call Now</a>
        </div>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}