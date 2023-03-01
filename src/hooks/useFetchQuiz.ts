import { ReactNode, useEffect, useState } from "react";
import { Category } from "../Components/Category";

//  https://opentdb.com/api_category.php - Returnerar alla kategorier och IDs
//  https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE - Returnerar antal frågor i en kategori

interface Quiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
}

interface Category {
  id: number;
  name: string;
}

export function useQuiz(category: string | undefined) {
  const [quizQuestions, setQuizQuestions] = useState<Quiz[]>([]);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then(({ trivia_categories }) => {
        const { id } = trivia_categories.find(
          (categoryObjekt: Category) =>
          category && categoryObjekt.name.toLowerCase().split(" ").join("-").includes(category) === true
          );
          return fetch(
            `https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`
            );
          })
//           .then((response) => response.json())
//           .then(({ results }) => setQuizQuestions(results));
//         }, [category]);
//   return quizQuestions;
// }

.then((response) => response.json())
.then(({ results }) => {
  results.forEach((result: Quiz) => {
    // console.log(results)
    const answers = [...result.incorrect_answers, result.correct_answer];
    result.answers = answers.sort(() => Math.random() - 0.5);
    console.log(result.answers)
  });
  setQuizQuestions(results);
});
}, [category]);

return quizQuestions;
}
