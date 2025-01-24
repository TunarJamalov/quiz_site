import SelectCategory from "../components/SelectCategory";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import {afterEach, vi ,describe} from "vitest";

afterEach(cleanup);

describe("SelectCategory", () => {
  const selectCategoryArr = [
    "HTML",
    "CSS",
    "JavaScript",
    "Accessibility",
    "General CS",
    "IT",
    "Linux",
    "Python",
    "SQL"
  ];

  const selectQuizMock = vi.fn();
  const startRandomQuizMock = vi.fn();

  it("displays the Choose a Category screen", () => {
    render(
      <SelectCategory
        selectQuiz={selectQuizMock}
        startRandomQuiz={startRandomQuizMock}
      />
    );
    expect(screen.getByText("Kategoriya seç.")).toBeInTheDocument();
  });

  it("displays the correct categories", () => {
    render(
      <SelectCategory
        selectQuiz={selectQuizMock}
        startRandomQuiz={startRandomQuizMock}
      />
    );

    selectCategoryArr.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("calls selectQuiz when a category button is clicked", () => {
    render(
      <SelectCategory
        selectQuiz={selectQuizMock}
        startRandomQuiz={startRandomQuizMock}
      />
    );

    const firstCategoryButton = screen.getByText(selectCategoryArr[0]);
    fireEvent.click(firstCategoryButton);

    // Check if selectQuiz mock function is called with the correct category and index
    expect(selectQuizMock).toHaveBeenCalledWith(selectCategoryArr[0], 0);
  });

  it("calls startRandomQuiz when the 'Random' button is clicked", () => {
    render(
      <SelectCategory
        selectQuiz={selectQuizMock}
        startRandomQuiz={startRandomQuizMock}
      />
    );

    const randomButton = screen.getByText("Random");
    fireEvent.click(randomButton);

    // Check if startRandomQuiz is called
    expect(startRandomQuizMock).toHaveBeenCalled();
  });
});
