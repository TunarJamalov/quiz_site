import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { PointTotals } from "../types";

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
    // Update window size when it changes
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (points === totalQuestions) {
      setShowConfetti(true);

      // Remove the confetti after 5 seconds
      const confettiTimeout = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      // Clean up the timeout on unmount
      return () => {
        clearTimeout(confettiTimeout);
      };
    }
  }, [points, totalQuestions]);

  return (
    <div className="results-div">
      <h1 className="results-heading">Nəticə</h1>
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <h2>
        {points === totalQuestions ? "Əla nəticə!" : "Siz"}{" "}
        {totalQuestions} xal üzərindən {points} xal qazandınız
      </h2>

      <button onClick={resetQuiz} className="results-btn">
        Yenidən oyna!
      </button>

      {totalPercentageCorrect >= 0 && (
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
