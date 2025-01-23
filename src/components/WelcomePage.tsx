import rpgMenu from "../images/b.webp";
import mainCharacter from "../images/personau2.webp";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import "../stylesheets/HomepageRow.css";
import React from "react";
import { ROUNDED_QUESTION_COUNT } from "../constants";
import ButtonLink from "./ButtonLink";

const WelcomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <main className="text-center">
        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#0a0a23", margin: "0" }}
        >
          <div className="col-md-7 content-text-container">
            <h2 className="featurette-heading">Biliklərinizi yoxlamaq istəyirsiniz?</h2>
            <p className="lead">
              Proqramlaşdırma biliklərinizi{" "}
              {ROUNDED_QUESTION_COUNT}+ sual ilə yeniləyin.
            </p>
            <ButtonLink to="/quizzes">Test</ButtonLink>
          </div>
          <div className="col-md-5 content-img-container">
            <img
              src={mainCharacter}
              className="img-fluid rounded content-section-img"
              id="main-character-img"
              alt="main female character from rpg game"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#2a2a40", margin: "0" }}
        >
          <div className="col-md-7 order-md-2 content-text-container">
            <h2 className="featurette-heading">Biz kimik?</h2>
            <p className="lead">
              "Developer Quiz - Proqramlaşdırma biliklərinizi sınamaq və təkmilləşdirmək üçün yaradılmış interaktiv platformadır. Biz kodlaşdırma sevənləri bir araya gətirərək öyrənmə və əyləncə dolu bir mühit təmin edirik."
            </p>
            <div className="social-links">
              <a
                href="https://github.com/TunarJamalov"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tunar-jamalov/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a
                href="https://twitter.com/TunarJamalov"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </div>
          </div>
          <div className="col-md-5 order-md-1 content-img-container">
            <img
              src={rpgMenu}
              className="img-fluid rounded content-section-img"
              alt="rpg menu"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="divider" />

        <footer className="site-footer">
          <div className="footer-content">
            <p> 2025 Developer Quiz | Made with by Tunar Jamalov</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/terms">Terms of Use</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default WelcomePage;
