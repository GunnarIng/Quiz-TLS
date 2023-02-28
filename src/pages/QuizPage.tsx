import { createUseStyles } from "react-jss";
import { NavLink, useParams } from "react-router-dom";
import { AnswerButton } from "../Components/AnswerButton";
import { HomeButton } from "../Components/HomeButton";
import { useCategoryColor } from "../hooks/useCategoryColor";

export function QuizPage() {
  const params = useParams();
  const classes = useStyles();
  const categoryColor = useCategoryColor(params.category);

  let categoryName;

  console.log("params.category", params.category);
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
  console.log("categoryName:", categoryName);

  return (
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
});
