import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import { useCategoryColor } from "../hooks/useCategoryColor";

export function QuizPage() {
  const params = useParams();
  const classes = useStyles();
  const categoryColor = useCategoryColor(params.category);
  let categoryName;

  const [data, setData] = useState([]);
  


  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple")
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
      });
  }, []);

  // console.log(data[0]);

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
  // console.log("categoryName:", categoryName);
  return (
    <div>
      <h4 className={classes.subjectTitle}>{categoryName}</h4>
      <div
        className={classes.questionBox}
        style={{ backgroundColor: categoryColor.backgroundColor }}
      >
        <div dangerouslySetInnerHTML={{ __html: data[0]?.question }}></div>
      </div>
      <div className={classes.answerContainer}>
        <div
          className={classes["answerBox"]}
          style={{ backgroundColor: categoryColor.backgroundColor }}
        >
          answare 1
        </div>
        <div
          className={classes["answerBox"]}
          style={{ backgroundColor: categoryColor.backgroundColor }}
        >
          answare 2
        </div>
        <div
          className={classes["answerBox"]}
          style={{ backgroundColor: categoryColor.backgroundColor }}
        >
          answare 3
        </div>
        <div
          className={classes["answerBox"]}
          style={{ backgroundColor: categoryColor.backgroundColor }}
        >
          answare 4
        </div>
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
  answerContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "2rem 0 0 0",
    gap: "1rem",
    width: "70%",
    margin: "0 auto",
  },
  answerBox: {
    border: "1px solid black",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
    padding: "1rem",
  },
});
