import { useParams } from "react-router-dom";

export function QFilm() {
  const params = useParams();
// switch case for questions
  
  console.log(params);
  return <div>Quiz Film</div>;
}
