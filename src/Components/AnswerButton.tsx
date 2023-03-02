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

// STYLING --------------------------------------------------------------

const useStyles = createUseStyles({
  answerBox: {
    borderRadius: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
    padding: "1rem",
    color: "white",
    "&:hover": {
      scale: "1.1",
      transition: "all 0.3s",
    },
  },
});
