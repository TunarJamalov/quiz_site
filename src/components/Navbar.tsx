import "../stylesheets/Navbar.css";

import coffeeIcon from '../images/coffee.webp';


const Navbar = () => {
  return (
    <>
      <header>
        <nav className="homepage-navbar">
          <a
            target="_blank"
            rel="noreferrer"
            href=""
          >
            
          </a>
          <a
            className="support-link"
            target="_blank"
            rel="noreferrer"
            href="https://buymeacoffee.com/tunarjamalov"
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
