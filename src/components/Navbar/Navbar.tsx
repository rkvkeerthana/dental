import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);


  const menuItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Product",
      id: "work",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Appointment",
      id: "enquiry",
    },
  ];



  const scrollToSection = (id: string, name: string) => {

    setActive(name);

    setMenuOpen(false);


    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };



  return (

    <header className="lp-navbar">

      <div className="lp-nav-container">


        {/* LOGO */}
        <div
          className="logo"
          onClick={() => scrollToSection("home", "Home")}
        >
          Dental
        </div>



        {/* MENU */}

        <nav
          className={`lp-menu-container ${
            menuOpen ? "open" : ""
          }`}
        >

          <ul className="lp-menu">

            {menuItems.map((item) => (

              <li
                key={item.name}

                className={
                  active === item.name
                  ? "active"
                  : ""
                }

                onClick={() =>
                  scrollToSection(
                    item.id,
                    item.name
                  )
                }

              >

                {item.name}

              </li>

            ))}

          </ul>

        </nav>



        {/* CALL BUTTON */}

        <div className="call-btn">

          <a href="tel:+919876543210">
            Call Now
          </a>

        </div>



        {/* MOBILE MENU BUTTON */}

        <div
          className="hamburger"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {
            menuOpen
            ? <FaTimes />
            : <FaBars />
          }

        </div>


      </div>

    </header>

  );
}