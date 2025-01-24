import { render, cleanup, screen } from "@testing-library/react";
import { vi } from "vitest";
import Results from "../components/Results";
import { expect, afterEach, describe, it } from "vitest";
import React from "react";
// Cleanup after each test
afterEach(cleanup);

// Mock the react-confetti module to prevent actual rendering of Confetti
vi.mock("react-confetti", () => ({
  default: () => <div data-testid="confetti-mock" />
}));

describe("Results Component", () => {
  const resetQuizMock = vi.fn();

  it("renders without crashing", () => {
    render(<Results points={0} totalQuestions={10} resetQuiz={resetQuizMock} />);
  });

  it("displays the correct result message for perfect score", () => {
    render(<Results points={10} totalQuestions={10} resetQuiz={resetQuizMock} />);
    expect(screen.getByText("Əla nəticə! 🎉")).toBeInTheDocument();
  });

  it("displays the correct result message for high score", () => {
    render(<Results points={8} totalQuestions={10} resetQuiz={resetQuizMock} />);
    expect(screen.getByText("Çox yaxşı! 🌟")).toBeInTheDocument();
  });

  it("displays the correct result message for medium score", () => {
    render(<Results points={6} totalQuestions={10} resetQuiz={resetQuizMock} />);
    expect(screen.getByText("Yaxşı! 👍")).toBeInTheDocument();
  });

  it("displays the correct result message for low score", () => {
    render(<Results points={3} totalQuestions={10} resetQuiz={resetQuizMock} />);
    expect(screen.getByText("Davam et! 💪")).toBeInTheDocument();
  });

  it("displays the score message correctly", () => {
    render(<Results points={5} totalQuestions={10} resetQuiz={resetQuizMock} />);
    expect(screen.getByText("10 xal üzərindən 5 xal qazandınız")).toBeInTheDocument();
    expect(screen.getByText("(50%)")).toBeInTheDocument();
  });

  it("shows the confetti when the user achieves a perfect score", () => {
    render(<Results points={10} totalQuestions={10} resetQuiz={resetQuizMock} />);
    const confettiElement = screen.getByTestId("confetti-mock");
    expect(confettiElement).toBeInTheDocument();
  });

  it("does not show confetti for a score that is not perfect", () => {
    render(<Results points={8} totalQuestions={10} resetQuiz={resetQuizMock} />);
    const confettiElement = screen.queryByTestId("confetti-mock");
    expect(confettiElement).not.toBeInTheDocument();
  });

  it("calls the resetQuiz function when the button is clicked", () => {
    render(<Results points={5} totalQuestions={10} resetQuiz={resetQuizMock} />);
    const button = screen.getByText("Yenidən oyna!");
    button.click();
    expect(resetQuizMock).toHaveBeenCalledTimes(1);
  });

  it("shows the tweet link when score is greater than 0", () => {
    render(<Results points={5} totalQuestions={10} resetQuiz={resetQuizMock} />);
    const tweetLink = screen.getByText("Öz rekorunu paylaş!");
    expect(tweetLink).toBeInTheDocument();
    expect(tweetLink).toHaveAttribute(
      "href",
      expect.stringContaining("http://twitter.com/intent/tweet")
    );
  });

  it("does not show the tweet link when score is 0", () => {
    render(<Results points={0} totalQuestions={10} resetQuiz={resetQuizMock} />);
    const tweetLink = screen.queryByText("Öz rekorunu paylaş!");
    expect(tweetLink).not.toBeInTheDocument();
  });
});
