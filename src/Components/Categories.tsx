import { createUseStyles } from "react-jss";
import { Category } from "./Category";

export function Categories() {
  const classes = useStyles();

  return (
    <div className={classes.categoryStyles}>
      <Category color={"red"} width={"100%"}>
        FILM
      </Category>
      <Category color={"green"} width={"75%"}>
        MUSIC
      </Category>
      <Category color={"yellow"} width={"100%"}>
        ANIMALS
      </Category>
      <Category color={"pink"} width={"75%"}>
        SCIENCE
      </Category>
      <Category color={"lightgreen"} width={"100%"}>
        GENERAL KNOWLEDGE
      </Category>
      <Category color={"blue"} width={"75%"}>
        SPORT
      </Category>
      <Category color={"orange"} width={"100%"}>
        VEHICLES
      </Category>
    </div>
  );
}

const useStyles = createUseStyles({
  categoryStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    width: "70%",
    maxWidth: "50rem",
  },
});
