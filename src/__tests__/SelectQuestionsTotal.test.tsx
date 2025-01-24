import SelectQuestionsTotal from "../components/SelectQuestionsTotal";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import React from "react";
afterEach(cleanup);

describe("SelectQuestionsTotal", () => {
  const startQuizMock = vi.fn();
  const totalQuestions = 10;

  it("displays the available quiz lengths correctly", () => {
    render(
      <SelectQuestionsTotal totalQuestions={totalQuestions} startQuiz={startQuizMock} />
    );

    // Check if the total questions button is displayed
    const totalButton = screen.getByText("10");
    expect(totalButton).toBeInTheDocument();

    // Check if "Hamısı" button is displayed correctly
    const allButton = screen.getByText(`Hamısı (${totalQuestions})`);
    expect(allButton).toBeInTheDocument();
  });

  it("calls startQuiz with the total questions when number button is clicked", () => {
    render(
      <SelectQuestionsTotal totalQuestions={totalQuestions} startQuiz={startQuizMock} />
    );

    // Click on the number button
    const lengthButton = screen.getByText("10");
    fireEvent.click(lengthButton);

    // Check if startQuiz is called with the correct argument
    expect(startQuizMock).toHaveBeenCalledWith(10);
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
