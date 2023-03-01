import { useState } from "react";
import { createUseStyles } from "react-jss";

interface Props {
  children: string;
  bgColor: string;
  onClick: any;
  // onClick: ;
  // handleAnswerClick: () => void;
}

export function AnswerButton(props: Props) {
  const classes = useStyles();
  // const [propValue, setPropValue] = useState("");

  function handleChange() {
    props.onClick()
  }

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
