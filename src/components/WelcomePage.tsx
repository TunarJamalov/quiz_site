import rpgMenu from "../images/rpg-menu.webp";
import mainCharacter from "../images/personau2.webp";
import fccBackground from "../images/b.webp";
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
            <p className="lead">
    Bizi sosial medyada da izləyin:
  </p>
  <div className="social-links">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/your_instagram/"
      className="social-icon"
    >
      <i className="fab fa-instagram"></i> Instagram
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/your_github/"
      className="social-icon"
    >
      <i className="fab fa-github"></i> GitHub
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/your_linkedin/"
      className="social-icon"
    >
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>
  </div>
          </div>
          <div className="col-md-5 order-md-1 content-img-container">
            <img
              src={fccBackground}
              className="img-fluid rounded"
              id="#fcc-image"
              alt="freeCodeCamp rpg logo"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#0a0a23", margin: "0" }}
        >
          <div className="col-md-7 order-md-2 content-text-container">
            <p className="lead">
            Copyright © 2025 Developer Quiz
            </p>
          </div>
         
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
