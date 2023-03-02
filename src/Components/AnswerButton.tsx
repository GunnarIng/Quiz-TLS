import { createUseStyles } from "react-jss";

interface Props {
  children: string;
  bgColor: string;
  onClick: (answer: string) => void;
}


export function AnswerButton(props: Props) {
  const classes = useStyles();
// Function to handle the click event
  function handleChange() {
    props.onClick(props.children);
  }
// returns a div with the answer text and a background color
  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className={classes.answerBox}
      onClick={handleChange}
    >
      {props.children}
    </div>
  );
}

const useStyles = createUseStyles({
  answerBox: {
    border: "1px solid black",
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
    padding: "1rem",
    "&:hover": {
      borderColor: "white",
    },
  },
});
