import { useParams } from "react-router-dom";

export function QuizPage() {
  const params = useParams();
  // switch case for each catagory
  switch (params.catagory) {
    case "film":
      console.log("film");
      break;
    case "music":
      console.log("music");
      break;
    case "animals":
      console.log("animals");
      break;
    case "science":
      console.log("science");
      break;
    case "general-knowledge":
      console.log("general-knowledge");
      break;
    case "sport":
      console.log("sport");
      break;
    case "vehicles":
      console.log("vehicles");
      break;
    default:
  }

  return (
    <div>
      <h1>Quiz Page</h1>
      {/* Add your quiz content here */}
    </div>
  );
}
