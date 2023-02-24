import { useParams } from "react-router-dom";

export function QuizPage() {
  const params = useParams();
  let categoryName;
  
console.log("params.category", params.category)
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
      <h1>Quiz Page</h1>
      <h4>Category: {categoryName}</h4>
      {/* Add your quiz content here */}
    </div>
  );
}
