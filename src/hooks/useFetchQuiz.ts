import { useEffect, useState } from "react";
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
            category &&
            categoryObjekt.name
              .toLowerCase()
              .split(" ")
              .join("-")
              .includes(category) === true
        );
        return fetch(
          `https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`
        );
      })
      .then((response) => response.json())
      .then((result) => {
        let results: Quiz[] = result.results;
        results = shuffle(
          results.map((quiz) => {
            const decodedCorrectAnswers = decode(quiz.correct_answer);
            const decodedIncorrectAnswers =
                quiz.incorrect_answers.map((ia) => decode(ia));            
            return {
              ...quiz,
              question: decode(quiz.question),
              correct_answer: decodedCorrectAnswers,
              incorrect_answers: decodedIncorrectAnswers,            
              answers: shuffle([...decodedIncorrectAnswers, decodedCorrectAnswers])
            }
          })
        );

        setQuizQuestions(results);
      });
  }, [category]);
  return quizQuestions;
}

function decode(str: string) {
  const decodedString = document.createElement("textarea");
  decodedString.innerHTML = str;
  return decodedString.value;
}

function shuffle<T>(array: T[]): T[] {
  const arrayCopy = [...array];
  arrayCopy.sort(() => Math.random() - 0.5);
  // console.log(array, arrayCopy);
  return arrayCopy;
}
