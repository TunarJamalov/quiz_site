import SelectQuestionsTotal from "../components/SelectQuestionsTotal";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

afterEach(cleanup);

describe("SelectQuestionsTotal", () => {
  const startQuizMock = vi.fn();
  const totalQuestions = 10;

  const QUESTION_NUMS = [5, 10, 15, 20, 25]; // Example available lengths in your constants

  it("displays the available quiz lengths correctly", () => {
    render(
      <SelectQuestionsTotal totalQuestions={totalQuestions} startQuiz={startQuizMock} />
    );

    // Check if available lengths are displayed
    QUESTION_NUMS.filter(length => length <= totalQuestions).forEach(choice => {
      expect(screen.getByText(choice.toString())).toBeInTheDocument();
    });

    // Check if "Hamısı" button is displayed
    expect(screen.getByText(`Hamısı (${totalQuestions})`)).toBeInTheDocument();
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
