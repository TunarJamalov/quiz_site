import "../stylesheets/Navbar.css";
import fccLogo from "../images/au3.webp";
import coffeeIcon from '../images/coffee.webp';
import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="homepage-navbar">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.au.edu.az/az/"
          >
            <img
              className="website-logo"
              src={fccLogo}
              alt="audevelopers logo"
            />
          </a>
          <a
            className="support-link"
            target="_blank"
            rel="noreferrer"
            href="https://buymeacoffee.com/audevelopers"
          >
            <img src={coffeeIcon} alt="Coffee Icon" className="coffee-icon" />
            Bizə dəstək ol!
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
