import { Category } from "./Category";

export function Categories() {
  return (
    <div>
      <Category color={"red"} width={"12rem"}>
        FILM
      </Category>
      <Category color={"green"} width={"9rem"}>
        MUSIC
      </Category>
      <Category color={"yellow"} width={"12rem"}>
        ANIMALS
      </Category>
      <Category color={"pink"} width={"9rem"}>
        SCIENCE
      </Category>
      <Category color={"lightgreen"} width={"12rem"}>
        GENERAL KNOWLEDGE
      </Category>
      <Category color={"blue"} width={"9rem"}>
        SPORT
      </Category>
      <Category color={"orange"} width={"12rem"}>
        VEHICLES
      </Category>
    </div>
  );
}

// const classes = useStyles();

// const useStyles = createUseStyles;
