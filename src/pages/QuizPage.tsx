import { useState } from "react";
import { createUseStyles } from "react-jss";
import { NavLink, useParams } from "react-router-dom";
import { AnswerButton } from "../Components/AnswerButton";
import { HomeButton } from "../Components/HomeButton";
import { Result } from "../Components/Result";
import ErrorBoundary from "../ErrorBoundary";
import { useCategoryColor } from "../hooks/useCategoryColor";
import { useCategoryName } from "../hooks/useCategoryName";
import { useQuiz } from "../hooks/useFetchQuiz";

export function QuizPage() {
  const params = useParams();
  const classes = useStyles();
  const categoryColor = useCategoryColor(params.category);
  const categoryName = useCategoryName(params.category);
  const quiz = useQuiz(params.category);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Härlett State
  const currentQuestion = quiz[currentQuestionIndex];

  const handleAnswerClick = (buttonText: string) => {
    const correctAnswer = currentQuestion.correct_answer;

    if (correctAnswer.includes(buttonText)) {
      console.log("RÄTT");
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  };

  return (
    <ErrorBoundary message="Something went wrong. Try reload the page.">
      <div className={classes.rootContainer}>
        <h4 className={classes.subjectTitle}>
          {categoryName} {currentQuestionIndex}/10
          <NavLink to="/">
            <HomeButton />
          </NavLink>
        </h4>

        {quiz.length > 0 && currentQuestionIndex < 10 && (
          <div
            className={classes.questionBox}
            style={{ backgroundColor: categoryColor.backgroundColor }}
          >
            {currentQuestion.question}
          </div>
        )}

        <ErrorBoundary message="Something went wrong. Try reload the page.">
          {currentQuestion?.answers.map((answer) => (
            <AnswerButton
              key={answer}
              onClick={handleAnswerClick}
              bgColor={categoryColor.backgroundColor}
            >
              {answer}
            </AnswerButton>
          ))}
        </ErrorBoundary>

        {/* Render your "Result" component and pass the number of correct answers as a prop */}
        {currentQuestionIndex >= 10 && (
          <Result
            color={categoryColor.backgroundColor}
            correctAnswers={correctAnswers}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

// STYLING --------------------------------------------------------------

const useStyles = createUseStyles({
  subjectTitle: {
    fontSize: "2rem",
    textAlign: "center",
    padding: "4rem 0 2rem",
    position: "relative",
  },
  questionBox: {
    borderRadius: "1rem",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
    // height: "18.75rem",
    color: "white",
    padding: "3rem 1rem",
    "@media (min-width: 768px)": {
      padding: "6rem 6rem",
    },
  },
  rootContainer: {
    display: "grid",
    textAlign: "center",
    padding: "0.5rem 0 2rem 0",
    gap: "1rem",
    margin: "0 auto",
  },
});
