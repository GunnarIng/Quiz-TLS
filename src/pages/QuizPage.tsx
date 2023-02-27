import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";

export function QuizPage() {
  const params = useParams();
  const classes = useStyles();
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
      <h4 className={classes.subjectTitle}>Category: {categoryName}</h4>
      <div className={classes.questionBox}>
        <div>This is where the api inputs will show</div>
      
      </div>
      <div className={classes.answareContainer}>
        <div className={classes["answareBox"]}>answare 2</div>
        <div className={classes["answareBox"]}>answare 1</div>
        <div className={classes["answareBox"]}>answare 3</div>
        <div className={classes["answareBox"]}>answare 4</div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  subjectTitle: {
    fontSize: "2rem",
    textAlign: "center",
    padding: "4rem",
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
  answareContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "2rem 0 0 0",
    gap: "1rem",
    width: "70%", 
    margin: "0 auto",

  },
  answareBox: {
    border: "1px solid black",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
    padding: "1rem",
    
  }
});