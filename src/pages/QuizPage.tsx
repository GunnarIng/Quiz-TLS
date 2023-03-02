import { createUseStyles } from "react-jss";
import { NavLink, useParams } from "react-router-dom";
import { AnswerButton } from "../Components/AnswerButton";
import { HomeButton } from "../Components/HomeButton";
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

  return (
    <ErrorBoundary message="Something went wrong. Try reload the page.">
      <div>
        <h4 className={classes.subjectTitle}>
          {categoryName}

          <NavLink to="/">
            <HomeButton />
          </NavLink>
        </h4>
        <div
          className={classes.questionBox}
          style={{ backgroundColor: categoryColor.backgroundColor }}
        >
          <p>This is where the api inputs will show</p>
        </div>
        <ErrorBoundary message="Something went wrong. Try reload the page.">
          <div className={classes.answerContainer}>
            <AnswerButton bgColor={categoryColor.backgroundColor}>
              answer 1
            </AnswerButton>
            <AnswerButton bgColor={categoryColor.backgroundColor}>
              answer 2
            </AnswerButton>
            <AnswerButton bgColor={categoryColor.backgroundColor}>
              answer 3
            </AnswerButton>
            <AnswerButton bgColor={categoryColor.backgroundColor}>
              answer 4
            </AnswerButton>
          </div>
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}

const useStyles = createUseStyles({
  subjectTitle: {
    fontSize: "2rem",
    textAlign: "center",
    padding: "4rem 0",
    position: "relative",
  },
  questionBox: {
    borderRadius: "1rem",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
    padding: "1rem",
    height: "18.75rem",
    color: "white",
  },
  answerContainer: {
    display: "grid",
    padding: "2rem 0 0 0",
    gap: "1rem",
    margin: "0 auto",
  },
});
