import { createUseStyles } from "react-jss";

// Fix so that the type of the props is correct
interface Props {
  correctAnswers: number;
  color: string;
}

// Take the correctAnswers prop and display it in the Result component
export function Result(props: Props) {
  const { correctAnswers } = props;
  const classes = useStyles();
  return (
    <div style={{ background: props.color }} className={classes.resultStyle}>
      <h2>Result</h2>
      <p>You got {correctAnswers} out of 10 questions correct!</p>
    </div>
  );
}

// STYLING --------------------------------------------------------------

const useStyles = createUseStyles({
  resultStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem 1rem",
    textAlign: "center",
    width: "75%",
    borderRadius: "2rem",
    margin: "5rem auto",
    "& h2": {
      fontSize: "3rem",
    },
  },
});
