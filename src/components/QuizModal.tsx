import React, { useRef } from "react";
import "../stylesheets/Modal.css";
import { QuizQuestion } from "../types";

const QuizModal: React.FC<QuizQuestion> = QuizQuestion => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lightBulbUnicode = "\uD83D\uDCA1";
  const sadFaceUnicode = "\uD83D\uDE14";
  const answerIcon = QuizQuestion.correct ? lightBulbUnicode : sadFaceUnicode;

  // Open/close the dialog using the dialog element's built-in methods
  React.useEffect(() => {
    if (QuizQuestion.show) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [QuizQuestion.show]);

  return (
    <dialog ref={dialogRef}>
      <div className="content">
        <div className="modal-header">
          <h2 className="modal-text">
            {answerIcon} {QuizQuestion.message}
          </h2>
        </div>
        <div className="modal-body">
          <h3 className="modal-text" data-testid="modal-points">
            Xal: {QuizQuestion.points}
          </h3>
          <p>
            <b>Sənin cavabın:</b>
          </p>
          <p>{QuizQuestion.chosenAnswer}</p>
          <p>
            <b>Cavab:</b>
          </p>
          <p>{QuizQuestion.displayExplanation}</p>
          <a
            className="modal-link"
            href={QuizQuestion.showReference}
            target="_blank"
            rel="noopener noreferrer"
          >
            Bu faydalı mənbə ilə daha çox məlumat əldə edin
          </a>
          <br />
          <br />
        </div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={QuizQuestion.nextQuestion}>
            Növbəti sual
          </button>
        </div>
      </div>
    </dialog>
  );
};
export default QuizModal;
