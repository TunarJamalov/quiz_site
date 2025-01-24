import SelectQuestionsTotal from "../components/SelectQuestionsTotal";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
afterEach(cleanup);

describe("SelectQuestionsTotal", () => {
  const startQuizMock = vi.fn();
  const totalQuestions = 10;

  // Assuming QUESTION_NUMS contains values like this
  const QUESTION_NUMS = [5, 10, 15, 20, 25]; 

  it("displays the available quiz lengths correctly", () => {
    render(
      <SelectQuestionsTotal totalQuestions={totalQuestions} startQuiz={startQuizMock} />
    );
  
    // Check if available lengths are displayed correctly (up to the totalQuestions value)
    QUESTION_NUMS.filter(length => length <= totalQuestions).forEach(choice => {
      // Use a regular expression to match the number
      expect(screen.getByText(new RegExp(`${choice}`, "i"))).toBeInTheDocument();
    });
  
    // Check if "Hamısı" button is displayed correctly
    expect(screen.getByText(new RegExp(`Hamısı \\(${totalQuestions}\\)`, "i"))).toBeInTheDocument();
  });
  

  it("calls startQuiz with the correct number of questions when a length button is clicked", () => {
    render(
      <SelectQuestionsTotal totalQuestions={totalQuestions} startQuiz={startQuizMock} />
    );

    // Click on a number button (e.g., 5)
    const lengthButton = screen.getByText("5");
    fireEvent.click(lengthButton);

    // Check if startQuiz is called with the correct argument
    expect(startQuizMock).toHaveBeenCalledWith(5);
  });

  it("calls startQuiz with the totalQuestions when 'Hamısı' button is clicked", () => {
    render(
      <SelectQuestionsTotal totalQuestions={totalQuestions} startQuiz={startQuizMock} />
    );

    // Click on 'Hamısı' button
    const allButton = screen.getByText(`Hamısı (${totalQuestions})`);
    fireEvent.click(allButton);

    // Check if startQuiz is called with the totalQuestions argument
    expect(startQuizMock).toHaveBeenCalledWith(totalQuestions);
  });
});
