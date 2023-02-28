import { createUseStyles } from "react-jss";
import { Categories } from "../Components/Categories";

export function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.rootStyle}>
        <h2 className={classes.h2Style}>Choose Category</h2>
        <Categories />
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  rootStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "calc(100vh - 85px)",
    overflow: "hidden",
  },
  h2Style: {
    fontSize: "1.4rem",
    padding: "6% 0 12%",
    width: "100%",
    textAlign: "center",
    "@media (min-width: 768px)": {
      fontSize: "2rem",
      padding: "2% 0 4%",
    },
    "@media (min-width: 1024px)": {
      fontSize: "2.5rem",
    },
  },
});
