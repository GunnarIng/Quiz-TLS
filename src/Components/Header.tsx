import { createUseStyles } from "react-jss";

export function Header() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>The Quizie-Quiz Game</h1>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  headerContainer: {
    background: "#691B37",
    height: "85px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& h1": {
      textAlign: "center",
      fontSize: "1.5rem",
      padding: "1rem 0",
      "@media (min-width: 768px)": {
        fontSize: "2rem",
      },
      "@media (min-width: 1024px)": {
        fontSize: "3rem",
      },
    },
  },
});
