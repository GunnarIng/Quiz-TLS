import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div
        className={classes.questionBox}
        style={{ backgroundColor: categoryColor.backgroundColor }}
      >
        <div>This is where the api inputs will show</div>
      </div>
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
