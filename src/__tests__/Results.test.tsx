import Results from "../components/Results";
import { render, cleanup } from "@testing-library/react";
import { vi } from "vitest";
import { expect, afterEach, describe, it } from "vitest";

afterEach(cleanup);

// Mock the react-confetti module to prevent rendering actual confetti
vi.mock("react-confetti", () => ({
  default: () => <div data-testid="confetti-mock" />
}));

describe("Results", () => {
  const resetQuizMock = vi.fn();

  it("Renders without crashing", () => {
    render(<Results points={0} totalQuestions={10} resetQuiz={resetQuizMock} />);
  });

  it("Displays the accurate score for wrong answers", () => {
    const { getByText } = render(
      <Results points={0} totalQuestions={10} resetQuiz={resetQuizMock} />
    );
    // Use a regex to match the text content and allow for flexibility
    expect(getByText(/You received 0 out of 10 points/i)).toBeInTheDocument();
  });

  it("Displays the perfect score message if all answers are correct", () => {
    const { getByText } = render(
      <Results points={10} totalQuestions={10} resetQuiz={resetQuizMock} />
    );
    expect(
      getByText("Wow! Perfect Score! 10 out of 10 points").textContent
    ).toBeDefined();
  });

  it("renders with perfect score and showConfetti is true", () => {
    const props = {
      points: 10,
      totalQuestions: 10,
      resetQuiz: resetQuizMock
    };
    const { getByTestId } = render(<Results {...props} />);
    const confettiElement = getByTestId("confetti-mock");
    expect(confettiElement).toBeInTheDocument();
  });
});
