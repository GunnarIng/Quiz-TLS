import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Category } from "./Category";

export function Categories() {
  const classes = useStyles();

  return (
    <div className={classes.categoriesBoxStyle}>
      <NavLink className={classes.linkStyles} to="film">
        <Category color={"red"} width={"100%"}>
          FILM
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="music">
        <Category color={"green"} width={"75%"}>
          MUSIC
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="animals">
        <Category color={"yellow"} width={"100%"}>
          ANIMALS
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="science">
        <Category color={"pink"} width={"75%"}>
          SCIENCE
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="general-knowledge">
        <Category color={"lightgreen"} width={"100%"}>
          GENERAL KNOWLEDGE
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="sport">
        <Category color={"blue"} width={"75%"}>
          SPORT
        </Category>
      </NavLink>
      <NavLink className={classes.linkStyles} to="vehicles">
        <Category color={"orange"} width={"100%"}>
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
    border: "2px solid white",
  },
  linkStyles: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    width: "100%",
  },
});
