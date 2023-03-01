import { ReactNode } from "react";
import { createUseStyles } from "react-jss";

interface Props {
  children: string;
  bgColor: string;
  // handleAnswerClick: () => void;
  handleAnswerClick: React.MouseEventHandler<HTMLDivElement>;
}

export function AnswerButton(props: Props) {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className={classes.answerBox}
      onClick={props.handleAnswerClick}
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
