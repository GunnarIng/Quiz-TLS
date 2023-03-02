import { createUseStyles } from "react-jss";

interface Props {
  color: string;
  width: string;
  children: string;
}

export function Category(props: Props) {
  const classes = useStyles();
  const BGcolorStyle = { backgroundColor: props.color };
  const categoryWidth = { width: props.width };

  return (
    <div
      className={classes.categoryStyle}
      style={{ ...BGcolorStyle, ...categoryWidth }}
    >
      <h4 className={classes.categoryTextStyle}>{props.children}</h4>
    </div>
  );
}

const useStyles = createUseStyles({
  categoryStyle: {
    textAlign: "center",
    borderRadius: "1rem",
    "&:hover": {
      scale: "1.1",
      transition: "all 0.3s",
    },
  },
  categoryTextStyle: {
    padding: "1rem 0",
    color: "white",
  },
});
