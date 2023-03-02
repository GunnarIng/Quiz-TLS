import React from "react";


// Fix so that the type of the props is correct
interface Props {
    correctAnswers: number;
}
   

// Take the correctAnswers prop and display it in the Result component
export function Result(props: Props) {
    const { correctAnswers } = props;
    return (
        <div>
            <h1>Result</h1>
            <p>You got {correctAnswers} out of 10 questions correct!</p>
        </div>
    )
}