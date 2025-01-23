import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { PointTotals } from "../types";
import "../stylesheets/Results.css";

const Results: React.FC<PointTotals> = ({
  points,
  totalQuestions,
  resetQuiz
}: PointTotals) => {
  const totalPercentageCorrect = (Math.floor(points) / totalQuestions) * 100;
  const tweetMessage = `http://twitter.com/intent/tweet?text=I just scored ${totalPercentageCorrect}%25 on www.developerquiz.az Wanna try it for yourself?&hashtags=developerquizaz`;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (points === totalQuestions) {
      setShowConfetti(true);
      const confettiTimeout = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(confettiTimeout);
    }
  }, [points, totalQuestions]);

  const getResultMessage = () => {
    if (points === totalQuestions) return "Əla nəticə! 🎉";
    if (totalPercentageCorrect >= 80) return "Çox yaxşı! 🌟";
    if (totalPercentageCorrect >= 60) return "Yaxşı! 👍";
    return "Davam et! 💪";
  };

  return (
    <div className="results-div">
      <h1 className="results-heading">{getResultMessage()}</h1>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      <h2>
        {totalQuestions} xal üzərindən {points} xal qazandınız
        <br />
        <small style={{ fontSize: "0.8em", color: "#666" }}>
          ({totalPercentageCorrect}%)
        </small>
      </h2>

      <button onClick={resetQuiz} className="results-btn">
        Yenidən oyna!
      </button>

      {totalPercentageCorrect > 0 && (
        <a
          target="_blank"
          rel="noreferrer"
          className="results-text"
          href={tweetMessage}
        >
          <i className="fab fa-twitter" /> Öz rekorunu paylaş!
        </a>
      )}
    </div>
  );
};

export default Results;
