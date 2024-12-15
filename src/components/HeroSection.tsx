import React from "react";
import "../stylesheets/HeroSection.css";
import { ROUNDED_QUESTION_COUNT } from "../constants";
import ButtonLink from "./ButtonLink";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Kodlaşdırmanı öyrən!</h1>
          <h2>
            Sual sayımız{" "}
            <strong className="question-count">
              {ROUNDED_QUESTION_COUNT}+
            </strong>{" "}
            (Hər ay artmaya davam edir!)
          </h2>
        </div>
        <div className="hero-button">
          <ButtonLink to="/quizzes" size="large">
            {`Suallara başla!`}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
