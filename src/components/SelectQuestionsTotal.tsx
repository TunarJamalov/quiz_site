import React from "react";
import { QUESTION_NUMS } from "../constants";
import { SelectQuestionsTotalProps } from "../types";

const SelectQuestionsTotal: React.FC<SelectQuestionsTotalProps> = ({
  totalQuestions,
  startQuiz
}) => {
  const availableQuizLengths = QUESTION_NUMS.filter(
    length => length <= totalQuestions
  );

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Test üçün uzunluq seçin</h2>
      <div className="select-btn-div">
        {availableQuizLengths.map((choice: number, index: number) => (
          <button
            className="select-btns"
            onClick={() => startQuiz(choice)}
            key={index}
          >
            {choice}
          </button>
        ))}

        <button
          className="select-btns"
          onClick={() => startQuiz(totalQuestions)}
        >
          Hamısı ({totalQuestions})
        </button>
      </div>
    </div>
  );
};
export default SelectQuestionsTotal;
