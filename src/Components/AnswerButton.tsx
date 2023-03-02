import { createUseStyles } from "react-jss";

interface Props {
  children: string;
  bgColor: string;
}

export function AnswerButton(props: Props) {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: props.bgColor }}
      className={classes.answerBox}
    >
      {props.children}
    </div>
  );
}

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
