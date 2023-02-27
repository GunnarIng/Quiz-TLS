import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Category } from "./Category";

export function Categories() {
  const classes = useStyles();

  // Id för api till rätt katogori
  // 1 anrop för katogori
  // 1 anrop för frågor till vald katogori
  // color prop till 4 svar rutor och frågerutan.
  // hook för färger: useColorID med switch case
  return (
    <div className={classes.categoriesBoxStyle}>
      <NavLink className={classes.linkStyles} to="film">
        <Category color={"#691B1B"} width={"100%"}>
          FILM
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="music">
        <Category color={"#34691B"} width={"75%"}>
          MUSIC
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="animals">
        <Category color={"#71691F"} width={"100%"}>
          ANIMALS
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="science">
        <Category color={"#5E1B69"} width={"75%"}>
          SCIENCE
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="general-knowledge">
        <Category color={"#1A4646"} width={"100%"}>
          GENERAL KNOWLEDGE
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="sport">
        <Category color={"#1B1E69"} width={"75%"}>
          SPORT
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="vehicles">
        <Category color={"#1B6069"} width={"100%"}>
          VEHICLES
        </Category>
      </NavLink>
    </div>
  );
}

const useStyles = createUseStyles({
  categoriesBoxStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    width: "70%",
    maxWidth: "50rem",
  },
  linkStyles: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    width: "100%",
  },
});
