import { createUseStyles } from "react-jss";
import { Categories } from "../Components/Categories";

export function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.rootStyle}>
      <h2 className={classes.h2Style}>Choose Category</h2>
      <img src="#" alt="" />
      <img src="#" alt="" />
      <Categories />
    </div>
  );
}

const useStyles = createUseStyles({
  rootStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border:"2px solid green"
  },
  h2Style: {
    fontSize: "1.4rem",
    padding: "8% 0 16%",
    width:"100%",
    textAlign: "center",
    "@media (min-width: 768px)": {
      fontSize: "2rem",
    },
    "@media (min-width: 1024px)": {
      fontSize: "2.5rem",
      padding: "4% 0 8%"
    },
  },
});
