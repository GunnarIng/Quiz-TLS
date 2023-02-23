import { createUseStyles } from "react-jss";
import { Categories } from "../Components/Categories";

export function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.categoriesStyle}>
      <h2 className={classes.h2Style}>Choose Category</h2>
      <img src="#" alt="" />
      <img src="#" alt="" />
      <Categories />
    </div>
  );
}

const useStyles = createUseStyles({
  categoriesStyle: {
    display: "flex",
    // justifyContent:"center",
    flexDirection: "column",
    alignItems: "center",
    // gap: "1rem",
    // paddingTop: "10%",
  },
  h2Style: {
    fontSize: "1.4rem",
    padding: "8%",
    "@media (min-width: 768px)": {
      fontSize: "2rem",
    },
    "@media (min-width: 1024px)": {
      fontSize: "2.5rem",
    },
  },
});
