import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { NavLink, useParams } from "react-router-dom";
import { AnswerButton } from "../Components/AnswerButton";
import { useCategoryColor } from "../hooks/useCategoryColor";
import { useQuiz } from "../hooks/useFetchQuiz";

export function QuizPage() {
  const params = useParams();
  const classes = useStyles();
  const categoryColor = useCategoryColor(params.category);
  const quiz = useQuiz(params.category);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Härlett State
  const currentQuestion = quiz[currentQuestionIndex];

  // const [selectedAnswer, setSelectedAnswer] = useState([]);

  let categoryName;
  switch (params.category) {
    case "film":
      categoryName = "Film";
      break;
    case "music":
      categoryName = "Music";
      break;
    case "animals":
      categoryName = "Animals";
      break;
    case "science":
      categoryName = "Science";
      break;
    case "general-knowledge":
      categoryName = "General Knowledge";
      break;
    case "sport":
      categoryName = "Sport";
      break;
    case "vehicles":
      categoryName = "Vehicles";
      break;
    default:
      categoryName = "Unknown";
  }

  const handleAnswerClick = (buttonText: string) => {
    const correctAnswer = currentQuestion.correct_answer;
    console.log(correctAnswer);
    console.log(buttonText);

    if (currentQuestion.correct_answer.includes(buttonText)) {
      console.log("RÄTT");
      setCurrentQuestionIndex(() => currentQuestionIndex + 1);
    }
  };

  return (
    <div>
      <h4 className={classes.subjectTitle}>
        {categoryName}
        <NavLink to="/">
          <div className={classes.homeBtn}>
            {<FontAwesomeIcon icon={faHouse} />}
            HOME
          </div>
        </NavLink>
      </h4>

      {quiz.length > 0 && (
        <div
          className={classes.questionBox}
          style={{ backgroundColor: categoryColor.backgroundColor }}
        >
          {currentQuestion.question}
        </div>
      )}

      {currentQuestion?.answers.map((answer) => (
        <AnswerButton
          key={answer}
          onClick={handleAnswerClick}
          bgColor={categoryColor.backgroundColor}
        >
          {answer}
        </AnswerButton>
      ))}
    </div>
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
    border: "1px solid black",
    borderRadius: "1rem",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
    padding: "1rem",
    height: "300px",
  },
  answerContainer: {
    display: "grid",
    padding: "2rem 0 0 0",
    gap: "1rem",
    margin: "0 auto",
  },
  homeBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    gap: "0.6rem",
    position: "absolute",
    top: "50%",
    fontSize: "1.5rem",
    left: "-1.8rem",
    padding: "0.6rem 1.25rem 0.6rem 2.2rem",
    borderRadius: "10000rem",
    transform: "translateY(-50%)",
    backgroundColor: "#3e3a44",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "#3e3a44",
      background: "white",
      transition: "all 0.3s ease-in-out",
    },
  },
});
